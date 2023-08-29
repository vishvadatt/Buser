import moment from "moment";
import checkout from "./form";

const {
  formField: {
    ImprovedCheck,
    ImprovedInput,
    noChange,
    worstCheck,
    worstInput,

    complaintDate1,
    Complaint1,
    symptoms1,
    Limitations1,
    Sequence1,
    Functional1,
    Timemanagement1,

    complaintDate2,
    Complaint2,
    symptoms2,
    Limitations2,
    Sequence2,
    Functional2,
    Timemanagement2,

    complaintDate3,
    Complaint3,
    symptoms3,
    Limitations3,
    Sequence3,
    Functional3,
    Timemanagement3,

    complaintDate4,
    Complaint4,
    symptoms4,
    Limitations4,
    Sequence4,
    Functional4,
    Timemanagement4,
  },
} = checkout;

const initialValues = {
  forteenthPage: [
    {
      formCreatedDate: moment().format("DD-MM-YYYY"),
      [ImprovedCheck.name]: false,
      [ImprovedInput.name]: "",
      [noChange.name]: false,
      [worstCheck.name]: false,
      [worstInput.name]: "",

      [complaintDate1.name]: "",
      [Complaint1.name]: "",
      [symptoms1.name]: "",
      [Limitations1.name]: "",
      [Sequence1.name]: "",
      [Functional1.name]: "",
      [Timemanagement1.name]: "",

      [complaintDate2.name]: "",
      [Complaint2.name]: "",
      [symptoms2.name]: "",
      [Limitations2.name]: "",
      [Sequence2.name]: "",
      [Functional2.name]: "",
      [Timemanagement2.name]: "",

      [complaintDate3.name]: "",
      [Complaint3.name]: "",
      [symptoms3.name]: "",
      [Limitations3.name]: "",
      [Sequence3.name]: "",
      [Functional3.name]: "",
      [Timemanagement3.name]: "",

      [complaintDate4.name]: "",
      [Complaint4.name]: "",
      [symptoms4.name]: "",
      [Limitations4.name]: "",
      [Sequence4.name]: "",
      [Functional4.name]: "",
      [Timemanagement4.name]: "",
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
