import moment from "moment";
import checkout from "./form";

const {
  formField: {
    table9Check,
    table10Check,
    table11Check,
    table12Check,
    table13Check,
    table14Check,
    table15Check,
    table16Check,
    table17Check,
    table18Check,
    table19Check,
    table20Check,
    table21Check,
    table22Check,
    table23Check,
    table24Check,
    table25Check,
    table26Check,
    table27Check,
    table28Check,
    table29Check,
    table30Check,
    table31Check,
    table32Check,
    table33Check,
    table34Check,
    table35Check,
    EstablishedPati99213Inp,
    EstablishedPati99214Inp,
    EstablishedPati99215Inp,
    CMT940Inp,
    CMT941Inp,
    CMT942Inp,
    CMT943Inp,
    CommonTherapies97140Inp,
    CommonTherapies97010Inp,
    CommonTherapies97014Inp,
    CommonTherapies97035Inp,
    CommonTherapies97012Inp,
    CommonTherapies97112Inp,
    CommonTherapies97530Inp,
    CommonTherapies97116Inp,
    CommonTherapies97110Inp,
    OtherTherapies97124Inp,
    OtherTherapies97750Inp,
    Modifier_AT,
    Modifier_GA,
    Modifier_GZ,
    Modifier_GY,
    Modifier_GP,
    Modifier_GX,
    Modifier_25,
    Modifier_51,
    Modifier_59,
  },
} = checkout;

const initialValues = {
  ninethPage: [
    {
      [table9Check.name]: false,
      [table10Check.name]: false,
      [table11Check.name]: false,
      [table12Check.name]: false,
      [table13Check.name]: false,
      [table14Check.name]: false,
      [table15Check.name]: false,
      [table16Check.name]: false,
      [table17Check.name]: false,
      [table18Check.name]: false,
      [table19Check.name]: false,
      [table20Check.name]: false,
      [table21Check.name]: false,
      [table22Check.name]: false,
      [table23Check.name]: false,
      [table24Check.name]: false,
      [table25Check.name]: false,
      [table26Check.name]: false,
      [table27Check.name]: false,
      [table28Check.name]: false,
      [table29Check.name]: false,
      [table30Check.name]: false,
      [table31Check.name]: false,
      [table32Check.name]: false,
      [table33Check.name]: false,
      [table34Check.name]: false,
      [table35Check.name]: false,
      [EstablishedPati99213Inp.name]: "",
      [EstablishedPati99214Inp.name]: "",
      [EstablishedPati99215Inp.name]: "",
      [CMT940Inp.name]: "",
      [CMT941Inp.name]: "",
      [CMT942Inp.name]: "",
      [CMT943Inp.name]: "",

      [CommonTherapies97140Inp.name]: "",
      [CommonTherapies97010Inp.name]: "",
      [CommonTherapies97014Inp.name]: "",
      [CommonTherapies97035Inp.name]: "",
      [CommonTherapies97012Inp.name]: "",
      [CommonTherapies97112Inp.name]: "",
      [CommonTherapies97530Inp.name]: "",
      [CommonTherapies97116Inp.name]: "",
      [CommonTherapies97110Inp.name]: "",

      [OtherTherapies97124Inp.name]: "",
      [OtherTherapies97750Inp.name]: "",

      [Modifier_AT.name]: "",
      [Modifier_GA.name]: "",
      [Modifier_GZ.name]: "",
      [Modifier_GY.name]: "",
      [Modifier_GP.name]: "",
      [Modifier_GX.name]: "",
      [Modifier_25.name]: "",
      [Modifier_51.name]: "",
      [Modifier_59.name]: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
      patientDetailsForm: {
        PractitionerName: "",
        NPI: "",
        TIN: "",
        hourlyRate: "",
        patientName: "",
        name: "",
        isNewPatient: false,
        isFollowUpPatient: false,
        isNewComplaintPatient: false,
        patientVisitNumber: "",
        patientTodaysDate: "",
        patientNextReExam: "",
        patientDob: "",
        patientAge: "",
        patientHeight: "",
        patientHeightNI: false,
        patientWeight: "",
        patientWeightNI: false,
        patientHtnYes: false,
        patientHtnNo: false,
        patientCautions: "",
      },
    },
  ],
};

export default initialValues;
