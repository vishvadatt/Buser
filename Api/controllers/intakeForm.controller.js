const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const intakeColl = db.collection("intakeFormData");
const { ObjectId } = require('mongodb');
const { createIntakeFormValidation } = require("../helpers/validation");


exports.CreateIntakeForm = async (req, res, next) => {
    try {
        const { errors, isValid } = await createIntakeFormValidation(req.body);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const practitionerid = ObjectId(req.body.practitionerId);
        const patientid = ObjectId(req.body.patientId);
        const requestdata = { practitionerId: practitionerid, patientId: patientid };
        const userData = await query.findOne(intakeColl, requestdata);
        if (userData) {
            const user = req.body;
            user.practitionerId = practitionerid;
            if (req.body.patientId) {
                user.patientId = patientid;
            }
            const userUpdate = await query.findOneAndUpdate(
                intakeColl,
                {
                    practitionerId: practitionerid,
                    patientId: patientid
                },
                { $set: user },
                { returnOriginal: false }
            );
            if (userUpdate) {
                const User = userUpdate.value;
                const obj = resPattern.successPattern(
                    httpStatus.OK,
                    User,
                    `success`
                );
                return res.status(obj.code).json({
                    ...obj,
                });
            } else {
                const message = `Something went wrong, Please try again.`;
                return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
            }
        } else {
            const user = req.body;
            user.practitionerId = practitionerid;
            if (req.body.patientId) {
                user.patientId = patientid;
            }
            const insertdata = await query.insert(intakeColl, user);
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
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.detailIntakeForm = async (req, res, next) => {
    try {

        const { errors, isValid } = await createIntakeFormValidation(req.body);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }

        const practitionerid = ObjectId(req.body.practitionerId);
        const patientid = ObjectId(req.body.patientId);
        const requestdata = { practitionerId: practitionerid, patientId: patientid };
        const result = await query.findOne(intakeColl, requestdata);

       // console.log(result)
        if (result) {
            const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `IntakeForm not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.updateIntakeForm = async (req, res, next) => {
    try {

        const { errors, isValid } = await createIntakeFormValidation(req.body);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const practitionerid = ObjectId(req.body.practitionerId);
        const patientid = ObjectId(req.body.patientId);
        const id = ObjectId(req.params.id);
        const bodyData = req.body;
        if (req.body.patientId) {
            bodyData.patientId = patientid;
        }

        if (req.body.practitionerId) {
            bodyData.practitionerId = practitionerid;
        }
        const result = await query.findOneAndUpdate(intakeColl,
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