
let isEmpty = value =>
    value === undefined || value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

let emailValidator = (params) => {
    let mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (mailFormat.test(params) == false) {
        return false
    }
    return true
};

const signInValidation = (data) => {
    var errors = {}

    if (isEmpty(data.email)) {
        errors.email = 'email is required';
    } else {
        emailValidator(data.email) ? "" : errors.email = 'check email format';
    }
    isEmpty(data.password) ? errors.password = "password is required" : "";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const signUpValidation = (data) => {
    var errors = {}

    if (isEmpty(data.email)) {
        errors.email = 'email is required';
    } else {
        emailValidator(data.email) ? "" : errors.email = 'check email format';
    }
    isEmpty(data.mobile_no) ? errors.mobile_no = "mobile_no is required" : "";
    isEmpty(data.userType) ? errors.userType = "userType is required" : "";
    isEmpty(data.password) ? errors.password = "password is required" : "";
    isEmpty(data.name) ? errors.name = "name is required" : "";




    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const emailValidation = (data) => {
    var error = {}

    if (isEmpty(data.email)) {
        error.email = 'email is required';
    } else {
        emailValidator(data.email) ? "" : error.email = 'check email format';
    }

    return {
        error,
        isValidMsg: isEmpty(error)
    }
}

const resetPasswordValidation = (data) => {
    var errors = {}

    if (isEmpty(data.otp)) {
        errors.otp = 'otp is required';
    } else {
        if (data.otp.length !== 6) {
            errors.otp = 'otp length 6 digit required';
        }
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const checkId = (data) => {
    var errors = {}
    console.log("id........", data);
    if (isEmpty(data)) {
        errors.otp = 'userId is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const productValidation = (data) => {
    var errors = {}

    if (isEmpty(data.product)) {
        errors.product = 'product_name is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const priceValidation = (data) => {
    var errors = {}

    isEmpty(data.unit_amount) ? errors.unit_amount = "unit_amount is required" : "";
    isEmpty(data.currency) ? errors.currency = "currency is required" : "";
    isEmpty(data.interval) ? errors.interval = "interval is required" : "";
    isEmpty(data.product) ? errors.product = "product is required" : "";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const userValidation = (data) => {
    var errors = {}

    isEmpty(data.email) ? errors.email = "email is required" : "";
    isEmpty(data.name) ? errors.name = "name is required" : "";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const paymentMethodValidation = (data) => {
    var errors = {}

    isEmpty(data.type) ? errors.type = "card type is required" : "";
    isEmpty(data.card.number) ? errors.number = "card Number is required" : "";
    isEmpty(data.card.exp_month) ? errors.exp_month = "card exp_month is required" : "";
    isEmpty(data.card.exp_year) ? errors.exp_year = "card exp_year is required" : "";
    isEmpty(data.card.cvc) ? errors.cvc = "card cvc is required" : "";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const updateUserValidation = (data) => {
    var errors = {}

    isEmpty(data.customer) ? errors.customer = "customer is required" : "";
    isEmpty(data.paymentMethodId) ? errors.paymentMethodId = "paymentMethodId is required" : "";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const createSubscriptValidation = (data) => {
    var errors = {}

    isEmpty(data.customer) ? errors.customer = "customer is required" : "";
    isEmpty(data.price) ? errors.price = "price is required" : "";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const cancelValidation = (data) => {
    var errors = {}

    isEmpty(data.id) ? errors.id = "price id is required" : "";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const checkoutValidation = (data) => {
    var errors = {}

    isEmpty(data.price) ? errors.price = "price id is required" : "";
    isEmpty(data.qty) ? errors.qty = "qty is required" : "";

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const uploadDocumentValidation = (data) => {
    var errors = {}
    isEmpty(data.bucketName) ? errors.bucketName = "Bucket Name is required" : "";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}


const createSoapValidation = (data) => {
    var errors = {}
    isEmpty(data.practitionerId) ? errors.practitionerId = "Practitioner Id is required" : "";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}



const createIntakeFormValidation = (data) => {
    var errors = {}
    isEmpty(data.practitionerId) ? errors.practitionerId = "Practitioner Id is required" : "";
    isEmpty(data.patientId) ? errors.patientId = "Patient Id is required" : "";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const uploadPhotoValidation = (data) => {
    var errors = {}
    isEmpty(data.userId) ? errors.userId = "User Id is required" : "";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const uploadNutitionvalidation = (data) => {
    var errors = {}
    isEmpty(data.userId) ? errors.userId = "User Id is required" : "";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}

const contactUsValidation = (data) => {
    var errors = {}
    isEmpty(data.firstName) ? errors.firstName = "firstName  is required" : "";
    isEmpty(data.lastName) ? errors.lastName = "lastName  is required" : "";
    isEmpty(data.email) ? errors.email = "email  is required" : "";
    isEmpty(data.phoneNumber) ? errors.phoneNumber = "phoneNumber  is required" : "";
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
module.exports = {
    signInValidation,
    signUpValidation,
    emailValidation,
    resetPasswordValidation,
    checkId,
    productValidation,
    priceValidation,
    userValidation,
    paymentMethodValidation,
    updateUserValidation,
    createSubscriptValidation,
    cancelValidation,
    checkoutValidation,
    uploadDocumentValidation,
    createSoapValidation,
    createIntakeFormValidation,
    contactUsValidation,
    uploadPhotoValidation,
    uploadNutitionvalidation
}