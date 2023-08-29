const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const sequenceColl = db.collection("Sequence");
const { ObjectId } = require('mongodb');
const { AwsSequenceDeleteImage } = require("../helpers/commonfile");
const { uploadNutitionvalidation } = require('../helpers/validation');



exports.createSequence = async (req, res, next) => {
    try {
        const { errors, isValid } = await uploadNutitionvalidation(req.body);
        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
        const sequenceData = req.body;
        sequenceData.uploadSequence = req.file.location;
        sequenceData.userId = ObjectId(sequenceData.userId);
        const insertdata = await query.insert(sequenceColl, sequenceData);
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

exports.SequenceList = async (req, res, next) => {
    try {
        const { pageNo, limit, searchText } = req.query;
        const id = ObjectId(req.params.id);
        const Limit = parseInt(limit)
        let search = "";
        if (searchText) {
            search = searchText
        }
        const result = await query.findByPagination(sequenceColl,
            {
                userId: id,
                name: {
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


exports.deleteSequence = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result1 = await query.findOne(sequenceColl, { _id: id });
        if (result1) {
            await AwsSequenceDeleteImage(result1.uploadSequence)
            const result = await query.deleteOne(sequenceColl, { _id: id });
            const obj = resPattern.successPattern(httpStatus.OK, { message: "Delete Sequence successfully...!" }, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `user sequence not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

// exports.detailNutition = async (req, res, next) => {
//     try {
//         const id = ObjectId(req.params.id);
//         const result = await query.findOne(sequenceColl, { _id: id });
//         if (result) {
//             const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
//             return res.status(obj.code).json({
//                 ...obj,
//             });
//         } else {
//             const message = `user nutrition not found with this ID.`;
//             return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
//         }
//     } catch (e) {
//         return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
//     }
// }

// exports.updateNutition = async (req, res, next) => {
//     try {
//         const id = ObjectId(req.params.id);
//         const bodyData = req.body;
//         if (req.file) {
//             const result1 = await query.findOne(sequenceColl, { _id: id });
//             AwsNutitionDeleteImage(result1.uploadNutrition)
//             bodyData.uploadNutrition = req.file.location;
//         }
//         console.log(bodyData.userId)
//         const result = await query.findOneAndUpdate(sequenceColl,
//             { _id: id },
//             { $set: bodyData },
//             { returnOriginal: false }
//         );
//         const obj = resPattern.successPattern(httpStatus.OK, result.value, `success`);
//         return res.status(obj.code).json({
//             ...obj,
//         });
//     } catch (e) {
//         return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
//     }
// }