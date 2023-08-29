
const db = require("../index");
const dailyUpdateColl = db.collection("dailyUpdates");
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const { ObjectId } = require('mongodb');


exports.addDailyUpdates = async (req, res, next) => {
    try {
        const dataRes = [];
        const painData = req.body;
        const testData = painData.employeePainData;
        testData.forEach((data) => {
            dataRes.push({
                _id: ObjectId(),
                painName: data.painName,
                PainType: data.PainType,
                painLevel: data.painLevel,
                painFrequency: data.painFrequency,
                painDuration: data.painDuration
            })
        })
        painData.userId = ObjectId(painData.userId);
        painData.employeePainData = dataRes;
        const insertdata = await query.insert(dailyUpdateColl, painData);
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

    } catch (e) {
        console.log("e..", e);
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
};

exports.dailyUpdateList = async (req, res, next) => {
    try {
        const allResponseData = []
        const id = ObjectId(req.params.id);

        const { pageNo, searchText } = req.query;

        const Limit = parseInt(req.query.limit)

        const result = await query.findByPagination(dailyUpdateColl,
            {
                userId: id,
                employeePainData: {
                    $elemMatch: {
                        painName: {
                            $regex: ".*" + searchText + ".*",
                            $options: "i",
                        }
                    }
                },
            },
            {}, pageNo, Limit, { "createdAt": -1 });

        // const result = await query.findByPagination(dailyUpdateColl,
        //     {
        //         userId: id,
        //         employeePainData: {
        //             $elemMatch: {
        //                 painName: {
        //                     $regex: ".*" + searchText + ".*",
        //                     $options: "i",
        //                 }
        //             }
        //         },
        //     },
        //     {}, pageNo, Limit);
        // const result1 = result.list;
        // // const result = await query.find(dailyUpdateColl, { userId: id })
        // result1.forEach((element) => {
        //     const testData = element.employeePainData;
        //     testData.forEach((data) => {
        //         allResponseData.push({
        //             _id: data._id,
        //             Date: element.Date,
        //             Sequence: element.Sequence,
        //             timeofSequence: element.timeofSequence,
        //             Nutrition: element.Nutrition,
        //             timeofNutrition: element.timeofNutrition,
        //             painName: data.painName,
        //             PainType: data.PainType,
        //             painLevel: data.painLevel,
        //             painFrequency: data.painFrequency,
        //             painDuration: data.painDuration,
        //             createdAt: element.createdAt
        //         })

        //     })
        // })
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}


exports.deleteDailyUpdates = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const empPainId = ObjectId(req.params.employeePainId)

        const employeeDataRes = await query.findOne(dailyUpdateColl, {
            employeePainData: {
                $elemMatch: {
                    _id: empPainId
                }
            },
        })
        if (employeeDataRes) {
            if (employeeDataRes.employeePainData.length === 1) {
                const result = await query.deleteOne(dailyUpdateColl, {
                    employeePainData: {
                        $elemMatch: {
                            _id: empPainId
                        }
                    },
                });
                if (result) {
                    const obj = resPattern.successPattern(httpStatus.OK, "Deleted Successfully...!", `success`);
                    return res.status(obj.code).json({
                        ...obj,
                    });
                } else {
                    const message = `user daily updates not found with this ID.`;
                    return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
                }

            } else {
                const result = await query.findOneAndUpdate(dailyUpdateColl,
                    {
                        employeePainData: {
                            $elemMatch: {
                                _id: empPainId
                            }
                        },
                    },
                    { $pull: { employeePainData: { _id: empPainId } } },
                    { returnOriginal: false }
                );

                if (result) {
                    const obj = resPattern.successPattern(httpStatus.OK, "Deleted Successfully...!", `success`);
                    return res.status(obj.code).json({
                        ...obj,
                    });
                } else {
                    const message = `user daily updates not found with this ID.`;
                    return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
                }
            }
        } else {
            const message = `user daily updates not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.detailsDailyUpdates = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await query.findOne(dailyUpdateColl, { _id: id });
        if (result) {
            const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `user daily updates not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }

    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.updateUserDailyUpdates = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const bodyData = req.body;
        const result = await query.findOneAndUpdate(dailyUpdateColl,
            { _id: id },
            { $set: bodyData },
            { returnOriginal: false }
        );

        const obj = resPattern.successPattern(httpStatus.OK, result.value, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}


exports.deleteAllDailyUpdates = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await query.deleteOne(dailyUpdateColl, { _id: id });

        if (result.deletedCount === 1) {
            const obj = resPattern.successPattern(httpStatus.OK, "Deleted Successfully...!", `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `user daily updates not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }

    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.userWeeklyPainLevel = async (req, res, next) => {
    try {

        const id = ObjectId(req.params.id);

        var today = new Date();
        var first = today.getDate() - today.getDay();
        var firstDayWeek = new Date(today.setDate(first));
        var lastDayWeek = new Date(today.setDate(first + 6));

        console.log(today, first, firstDayWeek, lastDayWeek)

        const result = await dailyUpdateColl.aggregate([
            {
                $project: {
                    createdAt: {
                        $dateFromString: {
                            dateString: '$createdAt'
                        }
                    },
                    Date: 1,
                    userId: 1,
                    Nutrition: 1,
                    Sequence: 1,
                    timeofNutrition: 1,
                    timeofSequence: 1,
                    employeePainData: 1
                }
            },
            {
                $match: {
                    userId: id,
                    createdAt: {
                        $lt: lastDayWeek,
                        $gt: firstDayWeek
                    }
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


exports.averageWeeklyPainLevel = async (req, res, next) => {
    try {

        const id = ObjectId(req.params.id);
        var today = new Date();
        var first = today.getDate() - today.getDay();
        var firstDayWeek = new Date(today.setDate(first));
        var lastDayWeek = new Date(today.setDate(first + 6));
        // const result = await dailyUpdateColl.aggregate([

        //     {
        //         $project: {

        //             createdAt: {
        //                 $dateFromString: {
        //                     dateString: '$createdAt'
        //                 }
        //             },
        //             Date: 1,
        //             userId: 1,
        //             Nutrition: 1,
        //             Sequence: 1,
        //             timeofNutrition: 1,
        //             timeofSequence: 1,
        //             employeePainData: 1
        //         }
        //     },
        //     {
        //         $match: {
        //             userId: id,
        //             createdAt: {
        //                 $lt: lastDayWeek,
        //                 $gt: firstDayWeek
        //             }

        //         }
        //     },
        //     {
        //         $group: {
        //             _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        //             totalDailyPainLevel: { $sum: 1 },
        //             count: { $sum: 1 },

        //         }
        //     },
        //     {
        //         $group: {
        //             _id: null,
        //             averageWeeklyProgress: { $avg: "$count" },
        //             dailyPainLevels: { $push: "$count" }
        //         }
        //     },
        // ]).toArray();


        pipeline = [
            {
                $project: {
                    createdAt: {
                        $dateFromString: {
                            dateString: '$createdAt'
                        }
                    },
                    Date: 1,
                    userId: 1,
                }
            },
            {
                $match: {
                    userId: id,
                    createdAt: { $lt: new Date() },
                    // createdAt: {
                    //     $lt: lastDayWeek,
                    //     $gt: firstDayWeek
                    // }
                }
            },
            {
                $group: {
                    _id: { $week: '$createdAt' },
                    weeklyPainLevelCount: { $sum: 1 }
                }
            },
            // {
            //     $group: {
            //         _id: null,
            //         averageWeeklyProgress: { $avg: "$weeklyPainLevelCount" },
            //         dailyPainLevels: { $push: "$weeklyPainLevelCount" },
            //     }
            // },
            {
                $project: {
                    weeklyAvg: { $divide: ["$weeklyPainLevelCount", 7] }
                }
            },
            { $sort: { _id: -1 } }
        ];
        const result = await dailyUpdateColl.aggregate(pipeline).toArray();

        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}