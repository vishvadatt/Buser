import moment from "moment";
import checkout from "./form";

const {
  formField: {
    Example,
    Disease,
    Anemia,
    BloodSugar,
    Circulation,
    LeakyGut,
    LeakyBrain,
    Inflammation,
    TxPlan,
    TBD,
  },
} = checkout;

const initialValues = {
  thirteenthPage: [
    {
      [Example.name]: "",
      [Disease.name]: "",
      [Anemia.name]: "",
      [BloodSugar.name]: "",
      [Circulation.name]: "",
      [LeakyGut.name]: "",
      [LeakyBrain.name]: "",
      [Inflammation.name]: "",
      [TxPlan.name]: "",
      [TBD.name]: "",
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
