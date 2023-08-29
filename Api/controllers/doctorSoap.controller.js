const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const soapColl = db.collection("soapFormData");
const { ObjectId } = require('mongodb');
const { createSoapValidation } = require("../helpers/validation");


exports.CreateSoapForm = async (req, res, next) => {
    try {
        const { errors, isValid } = await createSoapValidation(req.body);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const practitionerid = ObjectId(req.body.practitionerId);
        const patientid = ObjectId(req.body.patientId);
        const requestdata = { practitionerId: practitionerid, patientId: patientid };
        const userData = await query.findOne(soapColl, requestdata);
        if (userData) {
            const user = req.body;
            user.practitionerId = practitionerid;
            if (req.body.patientId) {
                user.patientId = patientid;
            }
            const userUpdate = await query.findOneAndUpdate(
                soapColl,
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
            const insertdata = await query.insert(soapColl, user);
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

exports.detailSoapForm = async (req, res, next) => {
    try {
        const practitionerid = ObjectId(req.body.practitionerId);
        const patientid = ObjectId(req.body.patientId);
        const requestdata = { practitionerId: practitionerid, patientId: patientid };
        const result = await query.findOne(soapColl, requestdata);
        if (result) {
            const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `soapForm not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.updateSoapForm = async (req, res, next) => {
    try {
        // const practitionerid = ObjectId(req.body.practitionerId);
        const patientid = ObjectId(req.body.patientId);
        const id = ObjectId(req.params.id);
        const bodyData = req.body;
        if (req.body.patientId) {
            bodyData.patientId = patientid;
        }
        const result = await query.findOneAndUpdate(soapColl,
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