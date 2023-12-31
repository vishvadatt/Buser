import checkout from "./form";

const {
  formField: {
    section1Check,
    section2Check,
    section3Check,
    section4Check,
    section5Check,
    section6Check,
    section7Check,
    section8Check,
    section9Check,
    section10Check,
    section11Check,
    sectionBHNAF1Check,
    sectionBHNAF2Check,
    sectionBHNAF3Check,
    sectionBHNAF4Check,
    sectionBHNAF5Check,
    sectionBHNAF6Check,
    sectionBHNAF7Check,
    sectionBHNAF8Check,
    sectionBHNAF9Check,
    sectionBHNAF10Check,
    sectionBHNAF11Check,
    sectionBHNAF12Check,
    sectionBHNAF13Check,
    sectionBHNAF14Check,

    sectionNTAFACheck,
    sectionNTAFBCheck,
    sectionNTAFC1Check,
    sectionNTAFC2Check,
    sectionNTAF1Check,
    sectionNTAF2Check,
    sectionNTAF3Check,
    sectionNTAF4Check,
    sectionNTAF5Check,
  },
} = checkout;

const initialValues = {
  twelthPage: [
    {
      [section1Check.name]: false,
      [section2Check.name]: false,
      [section3Check.name]: false,
      [section4Check.name]: false,
      [section5Check.name]: false,
      [section6Check.name]: false,
      [section7Check.name]: false,
      [section8Check.name]: false,
      [section9Check.name]: false,
      [section10Check.name]: false,
      [section11Check.name]: false,

      [sectionBHNAF1Check.name]: false,
      [sectionBHNAF2Check.name]: false,
      [sectionBHNAF3Check.name]: false,
      [sectionBHNAF4Check.name]: false,
      [sectionBHNAF5Check.name]: false,
      [sectionBHNAF6Check.name]: false,
      [sectionBHNAF7Check.name]: false,
      [sectionBHNAF8Check.name]: false,
      [sectionBHNAF9Check.name]: false,
      [sectionBHNAF10Check.name]: false,
      [sectionBHNAF11Check.name]: false,
      [sectionBHNAF12Check.name]: false,
      [sectionBHNAF13Check.name]: false,
      [sectionBHNAF14Check.name]: false,

      [sectionNTAF1Check.name]: false,
      [sectionNTAF2Check.name]: false,
      [sectionNTAF3Check.name]: false,
      [sectionNTAF4Check.name]: false,
      [sectionNTAF5Check.name]: false,
      [sectionNTAFACheck.name]: false,
      [sectionNTAFBCheck.name]: false,
      [sectionNTAFC1Check.name]: false,
      [sectionNTAFC2Check.name]: false,
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
