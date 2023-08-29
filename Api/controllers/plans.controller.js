const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const resPattern = require("../helpers/resPattern");
const db = require("../index");
const servicColl = db.collection("service");
const painColl = db.collection("pain");
const query = require('../query/query');
const { ObjectId } = require('mongodb');
const userColl = db.collection("user");


const getPlan = async (req, res, next) => {
    try {
        const userType = req.query.userType;
        const planType = req.query.planType;

        let pty = {}

        if (planType) {
            pty['planType'] = planType
        }
        const result = await servicColl.aggregate([
            {
                $match: {
                    planType: pty.planType,
                    userType: userType
                }
            },
            {
                $lookup: {
                    from: 'plan',
                    localField: '_id',
                    foreignField: 'serviceId',
                    as: 'Plan'
                }
            }
        ]).toArray();

        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}



const clientGetPlan = async (req, res, next) => {
    const Id = ObjectId(req.params.id);
    try {
        const userType = req.query.userType;
        const planType = req.query.planType;
        let result = [];
        let pty = {}
        if (planType) {
            pty['planType'] = planType
        }
        const user = await query.findOne(userColl, { _id: Id })
        console.log('getPlan', user.servicePlan.length)

        if (user.servicePlan.length > 0) {
            result = await servicColl.aggregate([
                {
                    $match: {
                        planType: pty.planType,
                        userType: userType
                    }
                },
                {
                    $lookup: {
                        from: "plan",
                        let: {
                            gid: "$_id",
                        },
                        pipeline: [{
                            $match: {
                                $expr: { $eq: ["$serviceId", "$$gid"] },
                                "newClient": false
                            },
                        },
                        ],
                        as: 'Plan',
                    },
                },
            ]).toArray();
        } else {
            result = await servicColl.aggregate([
                {
                    $match: {
                        planType: pty.planType,
                        userType: userType
                    }
                },
                {
                    $lookup: {
                        from: "plan",
                        let: {
                            gid: "$_id",
                        },
                        pipeline: [{
                            $match: {
                                $expr: { $eq: ["$serviceId", "$$gid"] },
                                "newClient": true
                            },
                        },
                        ],
                        as: 'Plan',
                    },
                },
            ]).toArray();
        }

        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const getDashbordPlan = async (req, res, next) => {
    try {
        const planType = req.query.planType;
        const result = await servicColl.aggregate([
            {
                $match: {
                    planType: planType
                }
            },
            {
                $lookup: {
                    from: 'plan',
                    localField: '_id',
                    foreignField: 'serviceId',
                    as: 'dashbordPlan'
                }
            }
        ]).toArray();

        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const dailyPainUpdateDetails = async (req, res, next) => {
    try {
        const requestData = req.body;
        requestData.userId = ObjectId(requestData.userId);
        const findUser = await query.findOne(painColl, { userId: ObjectId(requestData.userId) });
        console.log("findUser.", findUser);
        let insertdata;
        // if(findUser){
        //     insertdata = await query.findOneAndUpdate(painColl,
        //         {userId : ObjectId(requestData.userId)},
        //         {$set : requestData},
        //         {returnOriginal : false}    
        //     );
        //     console.log("up..",insertdata);
        //     const obj = resPattern.successPattern(httpStatus.OK,insertdata.value,`success`);
        //       return res.status(obj.code).json({
        //         ...obj,
        //       });
        // }else{
        insertdata = await query.insert(painColl, requestData);
        if (insertdata.ops.length > 0) {
            const obj = resPattern.successPattern(
                httpStatus.OK,
                insertdata.ops[0],
                `success`
            );
            return res.status(obj.code).json({
                ...obj,
            });

        } else {
            const message = `Something went wrong, Please try again.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        // }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const getAllPlans = async (req, res, next) => {
    try {

        const result = await servicColl.aggregate([
            {
                $lookup: {
                    from: 'plan',
                    localField: '_id',
                    foreignField: 'serviceId',
                    as: 'Plan'
                }
            },
            {
                $match: { planType: { $ne: "dashbord" } }
            }
        ]).toArray();

        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}


module.exports = {
    getPlan,
    clientGetPlan,
    getDashbordPlan,
    dailyPainUpdateDetails,
    getAllPlans
}