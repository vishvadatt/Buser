const { generateOTP, sendEmail, generatePassword, encrypt, sendSesEmail, AwsS3CreateFolderLabReport, AwsS3CreateFolderChatMedia, AwsS3CreateFolderPhotosGallery, AwsS3CreateFolderUserRecords, AwsS3CreateFolderNutition, AwsS3CreateFolderSequence } = require("../helpers/commonfile");
const db = require("../index");
const userColl = db.collection("user");
const APIError = require("../helpers/APIError");
const resPattern = require("../helpers/resPattern");
const httpStatus = require("http-status");
const query = require("../query/query");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const fs = require('fs');
const { signInValidation, signUpValidation, emailValidation, resetPasswordValidation, checkId } = require('../helpers/validation');
// client
const stripe = require('stripe')('sk_test_51LTRs5DCf23U0HEkmMIgbzMdvi0QOGQAktZ1kL6CLXczJSrysxmPDuHeO1tTePzZy31mF1UOM33kwvVMPAvw5lY800awmwvsFH');

// const stripe = require('stripe')('sk_test_51HtEbMCYTVhqPCYdZYwQNvlpuRvxOW9GQnIi02LeCuYUnUP4ZPvZC61pYOmNkhgFxPXLeLhembLKNbzwwaU2Dzfa008wZle5GF');

const privateKey = fs.readFileSync('/etc/private.key',
  { encoding: 'utf8', flag: 'r' });

exports.login = async (req, res, next) => {
  try {
    const { errors, isValid } = await signInValidation(req.body);

    if (!isValid) {
      const message = Object.values(errors);
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

    const { password } = req.body;
    const reqData = { email: req.body.email };

    // find user
    let user = await query.findOne(userColl, reqData);
    if (!user || user.password == null) {
      const message = `Incorrect email or password.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const currentDate = moment().format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"); //YYYY-MM-DD[T]HH:mm:ss.SSS[Z]''  YYYY-MM-DDThh:mm:ssn
      const token = encrypt(jwt.sign(
        { _id: user._id, mobile_no: user.mobile_no },
        privateKey, { algorithm: 'RS256' }
      ));
      delete user["password"];
      let obj = resPattern.successPattern(
        httpStatus.OK,
        { user, token },
        "success"
      );
      return res.status(obj.code).json(obj);
    } else {
      const message = `Incorrect email or password.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));

  }
};

exports.signup = async (req, res, next) => {
  try {

    // const {error,isValidMsg} = await emailValidation(req.body);

    // if(!isValidMsg){
    //   const message = Object.values(error);
    //   return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    // }

    const { errors, isValid } = await signUpValidation(req.body);
    if (!isValid) {
      const message = Object.values(errors);
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

    const requestdata = {
      $or: [{ mobile_no: req.body.mobile_no }, { email: req.body.email }],
    };

    const userEmail = await query.findOne(userColl, requestdata);
    if (userEmail) {
      const message = `You have already registered with this mobile number or email`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    } else {
      const user = req.body;
      user.otp = "";
      user.expireTime = "";
      user.disclaimers_flag = false;
      user.indemnification_flag = false;
      user.cancellation_flag = false;
      user.video_flag = false;
      user.dashBoardPlan = [];
      user.servicePlan = [];
      user.EducationProductList = [];
      user.TermsAndSignature_name = "";
      user.TermsAndSignature_date = "";
      user.Retroactive_initial = "";
      user.date_measurements = "";
      user.name_practitioner = "";
      user.blood_pressure_upper = "";
      user.blood_pressure_lower = "";
      user.Resting_heart_rate = "";
      user.Oxygen_saturation = "";
      user.Respiratory_rate = "";
      user.Body_temp = "";
      user.term_page_sign = "";
      user.ARBITRATION_page_sign = "";
      user.Indemnification_sign = "";
      user.friendRequest = [];
      user.friendsList = [];
      user.totalRequest = 0;

      user.password = generatePassword(req.body.password);
      const stripeUser = await stripe.customers.create({
        email: user.email,
        name: user.name,
      });
      user.customerId = stripeUser.id;
      const insertdata = await query.insert(userColl, user);
      if (insertdata.ops.length > 0) {
        AwsS3CreateFolderLabReport(insertdata.ops[0]._id)
        AwsS3CreateFolderChatMedia(insertdata.ops[0]._id)
        AwsS3CreateFolderUserRecords(insertdata.ops[0]._id)
        AwsS3CreateFolderPhotosGallery(insertdata.ops[0]._id)
        AwsS3CreateFolderNutition(insertdata.ops[0]._id)
        AwsS3CreateFolderSequence(insertdata.ops[0]._id)
        delete insertdata.ops[0]["password"];
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
    console.log("e..", e);
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};

//forgotPassword to send otp on email
exports.forgotPassword = async (req, res, next) => {
  try {
    const { error, isValidMsg } = await emailValidation(req.body);

    if (!isValidMsg) {
      const message = Object.values(error);
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

    const requestdata = { email: req.body.email };
    //find user
    const userData = await query.findOne(userColl, requestdata);
    if (!userData) {
      const message = `You have not registered with this email`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
    if (userData) {
      const otp = generateOTP();
      console.log(otp);
      await query.findOneAndUpdate(userColl, requestdata, {
        $set: {
          otp: otp,
          expireTime: moment().add(10, "minutes").format("YYYY-MM-DDThh:mm:ss"),
        },
      });

      const toEmail = req.body.email;
      const emailBody = `<div>OTP: ${otp}</div>`;
      const title = `OTP For Forgot Password`;
      const fromEmail = "vishwadattmaharaulji@gmail.com"
      // await sendSesEmail(toEmail,emailBody,title,fromEmail);
      await sendEmail(toEmail, title, emailBody);

      //send response
      const message = `Email sent successfully.`;
      const obj = resPattern.successMessge(httpStatus.OK, message);
      return res.json({
        ...obj,
      });
    } else {
      const message = `User not found with email: '${userData.email}.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { error, isValidMsg } = await emailValidation(req.body);

    if (!isValidMsg) {
      const message = Object.values(error);
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

    const { errors, isValid } = await resetPasswordValidation(req.body);
    if (!isValid) {
      const message = Object.values(errors);
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

    const requestdata = { email: req.body.email };

    const userData = await query.findOne(userColl, requestdata);

    if (!userData) {
      const message = `Please Enter valid Email.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

    if (moment().format("YYYY-MM-DDThh:mm:ss") < userData.expireTime) {
      if (req.body.otp == userData.otp) {
        const newPassword = generatePassword(req.body.newPassword);
        await query.findOneAndUpdate(userColl, requestdata, {
          $set: { password: newPassword },
        });
        const message = `Password Reset Successfully.`;
        const obj = resPattern.successMessge(httpStatus.OK, message);
        return res.json({
          ...obj,
        });
      } else {
        const message = `Verification code doesn't match.`;
        return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
      }
    } else {
      const message = `Verification code expired.`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};

exports.verifyotp = async (req, res, next) => {
  try {
    const { error, isValidMsg } = await emailValidation(req.body);

    if (!isValidMsg) {
      const message = Object.values(error);
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

    const { errors, isValid } = await resetPasswordValidation(req.body);
    if (!isValid) {
      const message = Object.values(errors);
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }

    const requestdata = { email: req.body.email };
    const user = await query.findOne(userColl, requestdata);

    if (user) {
      if (moment().format("YYYY-MM-DDThh:mm:ss") < user.expireTime) {
        if (user.otp == req.body.otp) {
          const token = encrypt(jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET
          ));
          let obj = resPattern.successPattern(httpStatus.OK,
            {
              user,
              token,
              message: `Verification code verified sucessfully.`,
              new: false,
            },
            "success"
          );
          return res.status(obj.code).json(obj);
        } else {
          const message1 = `Verification code doesn't match.`;
          return next(new APIError(`${message1}`, httpStatus.BAD_REQUEST, true));
        }
      } else {
        const message2 = `Verification code expired.`;
        return next(new APIError(`${message2}`, httpStatus.BAD_REQUEST, true));
      }
    } else {
      const message = `You have not registered with this email`;
      return next(new APIError(`${message}`, httpStatus.BAD_REQUEST, true));
    }
  } catch (e) {
    console.log(e);
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};

exports.changePassword = async (req, res, next) => {
  try {
    let oldpass = req.body.oldpassword;
    let newpass = req.body.newpassword;
    let user = await query.findOne(userColl, { _id: req.user._id });

    const isMatch = await bcrypt.compare(oldpass, user.password);

    if (isMatch) {
      var encyNewPass = generatePassword(newpass);

      const userdata = await query.findOneAndUpdate(
        userColl,
        { _id: req.user._id },
        { $set: { password: encyNewPass } },
        { returnOriginal: false }
      );
      let obj = resPattern.successPattern(httpStatus.OK, userdata, "success");
      return res.status(obj.code).json(obj);
    } else {
      const message = "Old Password Not Match !!! ";
      return next(new APIError(`${message}`, httpStatus.UNAUTHORIZED, true));
    }
  } catch (e) {
    return next(new APIError(`${e.message}`, httpStatus.BAD_REQUEST, true));
  }
};
