const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const { ObjectId } = require('mongodb');
const BookAppointmentColl = db.collection("bookAppointment");
var moment = require('moment');
const { bookAppointmentValidation } = require('../helpers/validation');
const workHistoryColl = db.collection("workHistory");
const serviceColl = db.collection("service");
const userColl = db.collection("user");

exports.bookAppointment = async (req, res, next) => {
    try {
        const { errors, isValid } = await bookAppointmentValidation(req.body);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const patientid = ObjectId(req.body.bookedBy);

        const serviceid = ObjectId(req.body.serviceId);
        const appointmentid = ObjectId(req.body.appointmentId);
        const doctorid = ObjectId(req.body.doctorId);
        const requestdata = {
            Date: req.body.Date,
            startTime: req.body.startTime
        };
        const userAppointment = await query.findOne(BookAppointmentColl, requestdata);
        if (userAppointment) {
            const message = `Already Booked this Appointment`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        } else {
            const appointment = req.body;
            appointment.doctorId = doctorid;
            appointment.bookedBy = patientid;
            appointment.serviceId = serviceid;
            const insertdata = await query.insert(BookAppointmentColl, appointment);
            if (insertdata.ops.length > 0) {
                const historyData = {
                    UserId: patientid,
                    practionerId: doctorid,
                    serviceId: serviceid,
                    appointmentId: insertdata.ops[0]._id,
                    Date: req.body.Date
                }
                const workHistorydata = await query.insert(workHistoryColl, historyData);

                if (workHistorydata.ops.length > 0) {
                    const servicedata = await query.findOne(serviceColl, { _id: serviceid });
                    if (servicedata) {
                        let incVal = {}
                        const balance = servicedata.walletName
                        if (balance == "Video_Messaging_and_Photo_Therapy_Balance") {
                            incVal["Video_Messaging_and_Photo_Therapy_Balance"] = -1
                        } else if (balance == "live_Video_Online_Exercise_Therapy_Balance") {
                            incVal["live_Video_Online_Exercise_Therapy_Balance"] = -1
                        } else if (balance == "live_In_Person_and_Travel_Exercise_Therapy_Balance") {
                            incVal["live_In_Person_and_Travel_Exercise_Therapy_Balance"] = -1
                        }
                        await query.findOneAndUpdate(userColl,
                            { _id: patientid, },
                            { $inc: incVal },
                            { returnOriginal: false }
                        )
                    }
                }
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
        }
    } catch (e) {
        console.log('error---', e)
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true))
    }
}

exports.myBookAppointmentList = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await BookAppointmentColl.aggregate([
            {
                $match: {
                    bookedBy: id,
                },
            },
            {
                $lookup: {
                    from: 'user',
                    localField: 'doctorId',
                    foreignField: '_id',
                    as: 'doctor'
                }
            },
            { $project: { "appointmentId": 1, "BookedBy": 1, "Date": 1, "doctor.name": 1, "doctor.email": 1, "doctor.UserProfilePIC": 1 } }

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

exports.BookAppointmentDetail = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await BookAppointmentColl.aggregate([
            {
                $match: {
                    _id: id,
                },
            },
            {
                $lookup: {
                    from: 'doctorAppointmentSlot',
                    localField: 'appointmentId',
                    foreignField: '_id',
                    as: 'appointment'
                }
            },
            {
                $lookup: {
                    from: 'user',
                    localField: 'doctorId',
                    foreignField: '_id',
                    as: 'doctor'
                }
            },
            { $project: { "appointment._id": 1, "appointment.title": 1, "appointment.start": 1, "appointment.end": 1, "BookedBy": 1, "Date": 1, "doctor._id": 1, "doctor.name": 1, "doctor.email": 1, "doctor.UserProfilePIC": 1 } }
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