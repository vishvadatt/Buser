import checkout from "layouts/pages/DoctorSoapFrom/schemas/form";
import * as Yup from "yup";

const {
  formField: {
    firstName,
    lastName,
    zip,
    height,
    weight,
    Workphonenumber,
    SocialSecurityNumber,
    NumberofChildren,
    UserWorkHours,
    Occupation,
    EmergencyRelation,
    // gender
    company,
    language,
    gender,
    MaritalStatus,
    Cellphonenumber,
    DOB,
    TODAYDATE,
    email,
    address,
    pincode,
    city,
    DL,

    PractitionerName,
    Phone1,
    Phone,
    Phone2,
    Phone3,
    Phone4,
    lastSectionPhone,
  },
} = checkout;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validations = [
  Yup.object().shape({
    [Phone1.name]: Yup.string()
      // .required(phone1.errorMsg)
      .matches(phoneRegExp, Phone1.invalid)
      // .min(10, "Must be 10 digit number")
      .max(13, "Must be 10 digit number"),

    [Phone.name]: Yup.string()
      // .required(phone1.errorMsg)
      .matches(phoneRegExp, Phone1.invalid)
      // .min(13, "Invalid phone number")
      .max(13, "Invalid phone number"),

    [Phone2.name]: Yup.string()
      // .required(phone1.errorMsg)
      .matches(phoneRegExp, Phone2.invalid)
      // .min(13, "Invalid phone number")
      .max(13, "Invalid phone number"),

    [Phone3.name]: Yup.string()
      // .required(phone1.errorMsg)
      .matches(phoneRegExp, Phone3.invalid)
      // .min(13, "Invalid phone number")
      .max(13, "Invalid phone number"),

    [Phone4.name]: Yup.string()
      // .required(phone1.errorMsg)
      .matches(phoneRegExp, Phone4.invalid)
      // .min(13, "Invalid phone number")
      .max(13, "Invalid phone number"),

    [lastSectionPhone.name]: Yup.string()
      // .required(phone1.errorMsg)
      .matches(phoneRegExp, lastSectionPhone.invalid)
      // .min(13, "Invalid phone number")
      .max(13, "Invalid phone number"),

    //   [firstName.name]: Yup.string()
    //     .required(firstName.errorMsg)
    //     .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    //     .max(25, firstName.invalidMsg),
    //   [lastName.name]: Yup.string().required(lastName.errorMsg)
    //     .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    //     .required(lastName.errorMsg)
    //     .max(25, lastName.invalidMsg),
    //   [height.name]: Yup.string().required(height.errorMsg),
    //   [email.name]: Yup.string().email().required(email.errorMsg),
    //   [DL.name]: Yup.string().required(DL.errorMsg),
    //   [address.name]: Yup.string().required(address.errorMsg),
    //   [pincode.name]: Yup.string().required(pincode.errorMsg),
    //   [city.name]: Yup.string().required(city.errorMsg),
    //   // [Workphonenumber.name]: Yup.string().required(Workphonenumber.errorMsg),
    //   [weight.name]: Yup.string().required(weight.errorMsg),
    //   [company.name]: Yup.string().max(15, company.invalidMsg),
    //   [TODAYDATE.name]: Yup.date().required(TODAYDATE.errorMsg).max(new Date(),"You Cannot Enter Future DOB Date"),
    //   [gender.name]: Yup.string().required(gender.errorMsg),
    //   [MaritalStatus.name]: Yup.string(),
    //   [zip.name]: Yup.string().min(5, zip.invalidMsg).required(zip.errorMsg),
    //   [Cellphonenumber.name]: Yup.string().required().min(6, Cellphonenumber.invalidMsg),
    //   [Workphonenumber.name]: Yup.string().required().min(6, Workphonenumber.invalidMsg),
    //   [SocialSecurityNumber.name]: Yup.string().max(15, SocialSecurityNumber.invalidMsg),
    //   [DOB.name]: Yup.date().min(new Date('01-01-1900'),"You Cannot Enter Below 1900 DOB Date").required(DOB.errorMsg).max(new Date(),"You Cannot Enter Future DOB Date"),
    //   [NumberofChildren.name]: Yup.string().max(2, NumberofChildren.invalidMsg),
    //   [Occupation.name]: Yup.string()
    //     .matches(/^[A-Za-z ]*$/, "Please enter valid Occupation")
    //     .max(25, Occupation.invalidMsg)
    //     .min(3, Occupation.invalidMsg),
    // }),
    // Yup.object().shape({
    // }),
    // Yup.object().shape({
    //   [EmergencyRelation.name]: Yup.string()
    //     .matches(/^[A-Za-z ]*$/, "Please enter valid Relation")
    //     .max(25, EmergencyRelation.invalidMsg)
    //     .min(3, EmergencyRelation.invalidMsg),
  }),
];

export default validations;
