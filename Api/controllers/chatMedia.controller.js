const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const resPattern = require("../helpers/resPattern");
const dotenv = require("dotenv");
dotenv.config();
const AWS = require('aws-sdk');

const S3 = new AWS.S3({
    //region: process.env.REGION,
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

exports.fetchChatMediaList = async (req, res, next) => {
    try {
        const dataRes = [];
        const addPromise = S3.listObjects({
            Bucket: process.env.CHATMEDIA,
            Delimiter: '/',
            Prefix: `${req.params.id + '/'}`,
        }).promise();
        addPromise.then((data) => {
            const contentRes = data.Contents;
            var spliced = contentRes.splice(0, 1);
            data.Contents.forEach((obj) => {
                dataRes.push({
                    filePath: `https://buser-chat-media.s3.amazonaws.com/${obj.Key}`
                })
            })
            const obj = resPattern.successPattern(httpStatus.OK, { result: dataRes }, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        }).catch((e) => {
            return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
        })
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}
