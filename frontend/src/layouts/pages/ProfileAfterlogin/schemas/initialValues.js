import checkout from "layouts/pages/ProfileAfterlogin/schemas/form";

const {
  formField: {
    firstName,
    lastName,
    company,
    // email,
    address1,
    address2,
    country,
    city,
    zip,
    EmergencyPhoneNumber,
    EmergencyName,
    EmergencyRelation,
    publicEmail,
    bio,
    language,
    MaritalStatus,
    gender,
    Cellphonenumber,
    Workphonenumber,
    DOB,
    SocialSecurityNumber,
    NumberofChildren,
    Occupation,
    UserWorkHours,
    UserProfilePIC,
    state
  },
} = checkout;

const initialValues = {
  [firstName.name]: "",
  [lastName.name]: "",
  [company.name]: "",
  // [email.name]: "",
  [address1.name]: "",
  [address2.name]: "",
  [city.name]: "",
  [zip.name]: "",
  [EmergencyPhoneNumber.name]: "",
  [EmergencyName.name]: "",
  [EmergencyRelation.name]: "",
  [publicEmail.name]: "",
  [bio.name]: "",
  [language.name]:"",
  [MaritalStatus.name]:"",
  [gender.name]:"",
  [Cellphonenumber.name]:"",
  [Workphonenumber.name]:"",
  [UserProfilePIC.name]:"",
  [DOB.name]:"",
  [SocialSecurityNumber.name]:"",
  [NumberofChildren.name]:"",
  [Occupation.name]:"",
  [UserWorkHours.name]:"",
  [state.name]:"",
  [country.name]:"",


 
 
  


};

export default initialValues;
