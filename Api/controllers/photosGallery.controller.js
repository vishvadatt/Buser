const db = require('../index');
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const galleryColl = db.collection("galleryPhotos");
const { ObjectId } = require('mongodb');
const { AwsGalleryDeleteImage } = require("../helpers/commonfile");
const { uploadPhotoValidation } = require('../helpers/validation');



exports.addGalleryPhoto = async (req, res, next) => {
    try {

        const { errors, isValid } = await uploadPhotoValidation(req.body);

        if (!isValid) {
            const message = Object.values(errors);
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }

        const galleryData = req.body;
        galleryData.photos = req.file.location;
        galleryData.userId = ObjectId(galleryData.userId);
        const insertdata = await query.insert(galleryColl, galleryData);
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

exports.PhotoList = async (req, res, next) => {
    try {
        const { pageNo, limit, searchText } = req.query;
        const id = ObjectId(req.params.id);
        const Limit = parseInt(limit)
        let search = "";
        if (searchText) {
            search = searchText
        }
        const result = await query.findByPagination(galleryColl,
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


exports.deletePhoto = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result1 = await query.findOne(galleryColl, { _id: id });
        if (result1) {
            await AwsGalleryDeleteImage(result1.photos)
            const result = await query.deleteOne(galleryColl, { _id: id });
            const obj = resPattern.successPattern(httpStatus.OK, { message: "Delete Photo successfully...!" }, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `user photo not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.detailUserPhotos = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const result = await query.findOne(galleryColl, { _id: id });
        if (result) {
            const obj = resPattern.successPattern(httpStatus.OK, result, `success`);
            return res.status(obj.code).json({
                ...obj,
            });
        } else {
            const message = `user photo not found with this ID.`;
            return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
        }
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

exports.updateUserPhotos = async (req, res, next) => {
    try {
        const id = ObjectId(req.params.id);
        const bodyData = req.body;
        if (req.file) {
            const result1 = await query.findOne(galleryColl, { _id: id });
            AwsGalleryDeleteImage(result1.photos)
            bodyData.photos = req.file.location;
        }
        console.log(bodyData.userId)
        const result = await query.findOneAndUpdate(galleryColl,
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