const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const equipmentColl = db.collection("buserEquipment");
const userColl = db.collection("user");
const { ObjectId } = require('mongodb');


const getEquipment = async (req, res, next) => {
    try {
        const { pageNo, limit, searchText } = req.body;
        const result = await query.findByPagination(equipmentColl,
            {
                name: {
                    $regex: ".*" + searchText + ".*",
                    $options: "i",
                }
            },
            {}, pageNo, limit);
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}

const fetchEquipment = async (req, res, next) => {
    try {
        const id = ObjectId(req.user._id);
        const { skip, limit, searchText } = req.query;

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
                    from: "buserEquipment",
                    let: {
                        gid: "$equipmentList",
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
                            "name": { $regex: search, $options: 'i' },
                        },

                    },
                    { $skip: parseInt(skip) },
                    { $limit: parseInt(limit) },
                    ],
                    as: 'equipmentList',
                },
            },

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
    getEquipment,
    fetchEquipment
}