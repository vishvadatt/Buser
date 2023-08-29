const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const labColl = db.collection("labReports");
const { ObjectId } = require('mongodb');
const { AwsDeleteImage } = require("../helpers/commonfile");



exports.addLabReport = async (req, res, next) => {
    try {
        const labData = req.body;
        labData.report = req.file.location;
        labData.userId = ObjectId(labData.userId);
        const insertdata = await query.insert(labColl, labData);
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
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}

exports.LabReportList = async (req, res, next) => {
    try {
        const { pageNo, limit, searchText } = req.query;
        const id = ObjectId(req.params.id);
        const Limit = parseInt(limit)

        let search = "";
        if (searchText) {
            search = searchText
        }

        const result = await query.findByPagination(labColl,
            {
                userId: id,
                reportName: {
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


exports.deleteLabReport = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result1 = await query.findOne(labColl, { _id: id });
        if (result1) {
            await AwsDeleteImage(result1.report)
            const result = await query.deleteOne(labColl, { _id: id });
            const obj = resPattern.successPattern(httpStatus.OK, { message: "Delete user successfully...!" }, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `user Lab report not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.detailLabReport = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await query.findOne(labColl, { _id: id });
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

exports.updateLapReport = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const bodyData = req.body;
        if (req.file) {
            const result1 = await query.findOne(labColl, { _id: id });
            AwsDeleteImage(result1.report)
            bodyData.report = req.file.location;
        }
        console.log(bodyData.userId)
        const result = await query.findOneAndUpdate(labColl,
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