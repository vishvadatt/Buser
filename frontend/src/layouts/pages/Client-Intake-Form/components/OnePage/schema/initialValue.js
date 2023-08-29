import moment from "moment";

const initialValues = {
  page5: [
    {
      prefreedLanguage: "",
      prefreedLanguageOther: "",
      name: "",
      gender: "",
      genderOther: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phonenumbrCell: "",
      phonenumbrWork: "",
      email: "",
      dob: "",
      phonenumbrSocial: "",
      maritialStatus: "",
      noofChildren: "",
      ocuupation: "",
      hoursweek: "",
      econtactName: "",
      econtactPhoneno: "",
      econtactRelation: "",
      overallHealth: "",
      physicalHealth: "",
      mentalHealth: "",
      stressLevels: "",
      exposuretoToxins: "",
      clientName: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
    },
  ],
};

export default initialValues;
