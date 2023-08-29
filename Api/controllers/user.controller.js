const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const userColl = db.collection("user");
const { ObjectId } = require('mongodb');
const { uploadDocumentValidation, checkId } = require('../helpers/validation');
const multer = require("multer");
const multerS3 = require("multer-s3");


const getAllUsers = async (req, res, next) => {
    try {
        const result = await query.find(userColl);
        result.forEach((el) => {
            delete el['password']
        })
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const updateUser = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const bodyData = req.body;
        const isExpiredDate = req.body.isExpiredDate;
        console.log("BodyData----", bodyData, id)
        console.log("EducationProductList----", bodyData.EducationProductList)
        if (typeof bodyData.dashBoardPlan === "object") {
            bodyData.dashBoardPlan.forEach((id, i) => {
                bodyData.dashBoardPlan[i] = ObjectId(id)
            })
        }
        if (typeof bodyData.servicePlan === "object") {
            bodyData.servicePlan.forEach((id, i) => {
                bodyData.servicePlan[i] = ObjectId(id)
            })
        }
        if (isExpiredDate) {
            bodyData.isExpiredDate = isExpiredDate
        }
        if (typeof bodyData.EducationProductList === "object") {
            bodyData.EducationProductList.forEach((id, i) => {
                bodyData.EducationProductList[i] = ObjectId(id)
            })
        }

        const result = await query.findOneAndUpdate(userColl,
            { _id: id },
            { $set: bodyData },
            { returnOriginal: false }
        );
        delete result.value["password"];
        const obj = resPattern.successPattern(httpStatus.OK, result.value, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log("error---", e);
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await query.deleteOne(userColl, { _id: id });
        const obj = resPattern.successPattern(httpStatus.OK, { message: "Delete user successfully...!" }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const findOneUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await query.findOne(userColl, { _id: ObjectId(id) });
        delete result["password"]
        const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const userUploadDocument = async (req, res, next) => {
    try {
        const documentData = req.body;
        documentData.document = req.file.location;
        const result = documentData;
        const obj = resPattern.successPattern(httpStatus.OK, result.document, `success`);
        return res.status(obj.code).json({
            ...obj,
        });

    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}

const searchUsers = async (req, res, next) => {
    try {
        const { searchText } = req.query;


        const result = await query.find(userColl,
            {

                userType: "client",
                $or: [
                    {
                        name: {
                            $regex: ".*" + searchText + ".*",
                            $options: "i",
                        }
                    },
                    {
                        email: {
                            $regex: ".*" + searchText + ".*",
                            $options: "i",
                        }
                    },
                    {
                        mobile_no: {
                            $regex: ".*" + searchText + ".*",
                            $options: "i",
                        }
                    },
                ],
            },
            {})

        result.forEach((el) => {
            delete el['password'],
                delete el['otp'],
                delete el['expireTime'],
                delete el['equipmentList']
        })
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}

const searchDoctors = async (req, res, next) => {
    try {
        const { searchText } = req.query;
        let search = "";
        if (searchText) {
            search = searchText
        }


        const result = await userColl.aggregate([
            {
                $match: {
                    userType: "doctor",
                    $or: [
                        {
                            name: {
                                $regex: ".*" + search + ".*",
                                $options: "i",
                            }
                        },
                        {
                            company: {
                                $regex: ".*" + search + ".*",
                                $options: "i",
                            }
                        },
                    ],
                }
            },
            { $project: { "name": 1, "company": 1 } }
        ]).toArray();
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}


const searchDoctorChat = async (req, res, next) => {
    try {
        const { searchText, pageNo, limit, } = req.query;
        const Limit = parseInt(limit)
        let search = "";
        if (searchText) {
            search = searchText
        }
        const result = await userColl.aggregate([
            {
                $match: {
                    userType: "doctor",
                    $or: [
                        {
                            name: {
                                $regex: ".*" + search + ".*",
                                $options: "i",
                            }
                        }
                    ],
                }
            },
            { $skip: parseInt(Limit) * parseInt(pageNo) },
            { $limit: parseInt(Limit) },
            { $project: { "name": 1 } }
        ]).toArray();
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}

const searchAllUsers = async (req, res, next) => {
    try {
        const { searchText, pageNo, limit, } = req.query;
        const Limit = parseInt(limit)
        let search = "";
        if (searchText) {
            search = searchText
        }
        const result = await userColl.aggregate([
            {
                $match: {
                    $or: [
                        {
                            name: {
                                $regex: ".*" + searchText + ".*",
                                $options: "i",
                            }
                        }
                    ],
                }
            },
            { $skip: parseInt(Limit) * parseInt(pageNo) },
            { $limit: parseInt(Limit) },
            { $project: { "firstName": 1, "lastName": 1, "name": 1, "mobile_no": 1, "email": 1, "UserProfilePIC": 1 } }
        ]).toArray();
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}

const userList = async (req, res, next) => {
    try {
        const result = await userColl.aggregate([
            {
                $match: {
                    userType: "client",
                }
            },
            { $project: { "name": 1, "mobile_no": 1, "email": 1 } }
        ]).toArray();
        const obj = resPattern.successPattern(httpStatus.OK, { result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}
module.exports = {
    getAllUsers,
    updateUser,
    deleteUser,
    findOneUser,
    userUploadDocument,
    searchUsers,
    searchDoctors,
    searchDoctorChat,
    searchAllUsers,
    userList
}