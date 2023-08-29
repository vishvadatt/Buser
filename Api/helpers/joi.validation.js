const joi = require("@hapi/joi");
const httpStatus = require("http-status");
const APIError = require("./APIError");

const signUpvalidation = async (req, res, next) => {
    try {
        const validation = joi.object({
            name: joi.string(),
            email: joi.string().email().lowercase().required(),
            password: joi.string().required(),
            mobile_no: joi.string().required(),
        })
        await validation.validateAsync(req.body);
        next();
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }

}

const signInValidation = async (req, res, next) => {
    try {
        const validation = joi.object({
            email: joi.string().email().lowercase().required(),
            password: joi.string().required(),
        });
        await validation.validateAsync(req.body);
        next();
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const forgotPasswordValidation = async (req, res, next) => {
    try {
        const validation = joi.object({
            email: joi.string().email().lowercase().required(),
        });
        await validation.validateAsync(req.body);
        next();
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const resetPasswordValidation = async (req, res, next) => {
    try {
        const validation = joi.object({
            email: joi.string().email().lowercase().required(),
            otp: joi.string().length(6).required(),
            newPassword: joi.string().required()
        });
        await validation.validateAsync(req.body);
        next();
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const verifiedValidation = async (req, res, next) => {
    try {
        const validation = joi.object({
            email: joi.string().email().lowercase().required(),
            otp: joi.string().length(6).required(),
        });
        await validation.validateAsync(req.body);
        next();
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const changePasswordValidation = async (req, res, next) => {
    try {
        const validation = joi.object({
            oldpassword: joi.string().required(),
            newpassword: joi.string().required(),
        });
        await validation.validateAsync(req.body);
        next();
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const productValidation = async (req, res, next) => {
    try {
        const validation = joi.object({
            product: joi.string().required(),
        });
        await validation.validateAsync(req.body);
        next();
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

const priceValidation = async (req, res, next) => {
    try {
        const validation = joi.object({
            unit_amount: joi.number().required(),
            currency: joi.string().required(),
            interval: joi.string().required(),
            product: joi.string().required(),
        });
        await validation.validateAsync(req.body);
        next();
    } catch (e) {
        return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
    }
}

module.exports = {
    signUpvalidation,
    signInValidation,
    forgotPasswordValidation,
    resetPasswordValidation,
    verifiedValidation,
    changePasswordValidation,
    productValidation,
    priceValidation
}