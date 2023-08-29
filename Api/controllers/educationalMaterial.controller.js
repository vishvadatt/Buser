const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const educationColl = db.collection("educationalMaterials");
const purchaseProductColl = db.collection("purchaseEducationProduct");
const { ObjectId } = require('mongodb');
const userColl = db.collection("user");


const getEducationMaterialList = async (req, res, next) => {
    try {
        const { pageNo, limit, searchText } = req.query;
        const Limit = parseInt(limit)

        let search = "";
        if (searchText) {
            search = searchText
        }

        const result = await query.findByPagination(educationColl,
            {
                productName: {
                    $regex: ".*" + search + ".*",
                    $options: "i",
                }
            },
            {}, pageNo, Limit, { "createdAt": -1 })


        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}

const purchaseEducationProduct = async (req, res, next) => {
    try {
        const requestData = req.body;
        let session;

        console.log("autodebit false")
        session = await stripe.checkout.sessions.create({
            customer: requestData.customerId,
            success_url: `${requestData.successURL}?sessionId={CHECKOUT_SESSION_ID}`,
            cancel_url: requestData.cancelURL,
            line_items: [
                { price: requestData.priceId, quantity: requestData.qty },
            ],
            mode: 'payment',
            metadata: {
                isEducation: true
            },
            payment_method_options: {
                card: {
                    setup_future_usage: "off_session"
                }
            }
        });

        const obj = resPattern.successPattern(httpStatus.OK, session, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}


const ProductPurchaseDetails = async (req, res, next) => {
    try {
        const userId = ObjectId(req.body.userId);
        const requestData = req.body;
        if (req.body.userId) {
            requestData.userId = userId;
        }
        const insertdata = await query.insert(purchaseProductColl, requestData);
        if (insertdata.ops.length > 0) {

            const result = insertdata.ops[0];
            const obj = resPattern.successPattern(
                httpStatus.OK,
                result,
                `success`
            );
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `Something went wrong, Please try again.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}




const myPurchaseProductList = async (req, res, next) => {
    try {
        const id = ObjectId(req.user._id);
        const { pageNo, limit, searchText } = req.query;

        let search = "";
        if (searchText) {
            search = searchText
        }

        const result = await userColl.aggregate([
            {
                $match: {
                    _id: id
                }
            },
            {
                $lookup: {
                    from: "educationalMaterials",
                    let: {
                        gid: "$EducationProductList",
                    },
                    pipeline: [{
                        $match: {
                            $expr: {
                                $and: [
                                    {
                                        $in: ['$_id', '$$gid']
                                    }
                                ]
                            },
                            "productName": { $regex: search, $options: 'i' },
                        },
                    },
                    { $skip: parseInt(pageNo) },
                    { $limit: parseInt(limit) },
                    ],
                    as: 'productList',
                },
            },
            { $project: { "productList": 1 } }

        ]).toArray();

        if (result.length > 0) {
            const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `User not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}



module.exports = {
    getEducationMaterialList,
    purchaseEducationProduct,
    ProductPurchaseDetails,
    myPurchaseProductList
}