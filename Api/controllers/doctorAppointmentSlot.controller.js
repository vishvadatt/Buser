
const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const { ObjectId } = require('mongodb');
const slotColl = db.collection("doctorAppointmentSlot");


exports.doctorSlotList = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await slotColl.aggregate([
            {
                $match: {
                    doctorId: id,
                }
            },
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


exports.doctorPatientRecords = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const { pageNo, limit } = req.query;
        const totalCount = await query.count(bookAppointmentColl, { doctorId: id })
        const result = await bookAppointmentColl.aggregate([
            {
                $match: {
                    doctorId: id,
                },
            },
            {
                $lookup: {
                    from: 'user',
                    localField: 'bookedBy',
                    foreignField: '_id',
                    as: 'patient'
                }
            },
            {
                $lookup: {
                    from: 'service',
                    localField: 'serviceId',
                    foreignField: '_id',
                    as: 'service'
                }
            },
            {
                $unwind: {
                    path: "$patient",
                    preserveNullAndEmptyArrays: false,
                },
            },
            {
                $unwind: {
                    path: "$service",
                    preserveNullAndEmptyArrays: false,
                },
            },
            {
                $project: {
                    address: 1,
                    painDetails: 1,
                    Date: 1,
                    startTime: 1,
                    endTime: 1,
                    serviceName: "$service.serviceName",
                    name: "$patient.name",
                    email: "$patient.email",
                    UserProfilePic: "$patient.UserProfilePIC",
                    DOB: "$patient.DOB"
                }
            },
            { $skip: parseInt(limit) * parseInt(pageNo) },
            { $limit: parseInt(limit) },
        ]).toArray();
        const obj = resPattern.successPattern(httpStatus.OK, { totalCount, result }, `success`);
        return res.status(obj.code).json({
            ...obj,
        });
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}
