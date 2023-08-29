
const db = require("../index");
const enquiryColl = db.collection("enquiry");
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const { ObjectId } = require('mongodb');
const { sendEmail } = require("../helpers/commonfile");
const { contactUsValidation } = require('../helpers/validation');



exports.contactUs = async (req, res, next) => {
    try {
        const { errors, isValid } = await contactUsValidation(req.body);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const userId = ObjectId(req.body.userId);
        const enquiryData = req.body;
        if (req.body.userId) {
            enquiryData.userId = userId;
        }
        const insertdata = await query.insert(enquiryColl, enquiryData);
        if (insertdata.ops.length > 0) {
            const toEmail = "admin@buserinstitute.com";
            const emailBody = `<h3 style="font-size:18px; font-weight:600;">Please use the following User Details</h3>
            <h4 style="font-size:14px; color:#000; font-weight:600;">First Name: <strong style="color:#13bb37; font-weight:500;">${enquiryData.firstName}</strong></h4>
            <h4 style="font-size:14px; color:#000; font-weight:600;">Last Name: <strong style="color:#13bb37; font-weight:500;">${enquiryData.lastName}</strong></h4>
            <h4 style="font-size:14px; color:#000; font-weight:600;">Email: <strong style="color:#13bb37; font-weight:500;">${enquiryData.email}</strong></h4>
            <h4 style="font-size:14px; color:#000; font-weight:600;">Phone Number: <strong style="color:#13bb37;  font-weight:500;">${enquiryData.phoneNumber}</strong></h4>
            <h4 style="font-size:14px; color:#000; font-weight:600;">Description: <strong style="color:#13bb37;  font-weight:500;">${enquiryData.description}</strong></h4> `;

            const title = `Contact Us`;
            await sendEmail(toEmail, title, emailBody);
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