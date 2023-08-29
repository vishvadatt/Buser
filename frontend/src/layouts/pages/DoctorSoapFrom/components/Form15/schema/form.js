const form = {
  formField: {
    PractitionerName: {
      type: "text",
      name: "PractitionerName",
      label: "Practitioner:",
      placeholder: "Please Enter PractitionerName",
    },

    NPI: {
      type: "text",
      name: "NPI",
      label: "NPI",
      placeholder: "Please Enter NPI",
    },
    TIN: {
      type: "text",
      name: "TIN",
      label: "TIN",
      placeholder: "Please Enter TIN",
    },
    hourlyRate: {
      type: "text",
      name: "hourlyRate",
      label: "hourlyRate",
      placeholder: "Please Enter hourlyRate",
    },

    PatientName: {
      type: "text",
      name: "PatientName",
      label: "PatientName:",
      placeholder: "Please Enter PatientName",
    },
    newPatient: {
      type: "checkbox",
      name: "newPatient",
      label: "New",
      placeholder: "Please Enter NPI",
    },
    patientFollowUp: {
      type: "checkbox",
      name: "patientFollowUp",
      label: "Follow-Up",
      placeholder: "Please Enter TIN",
    },
    patientNewComplaint: {
      type: "checkbox",
      name: "patientNewComplaint",
      label: "New Complaint",
      placeholder: "Please Enter hourlyRate",
    },
    visitNumber: {
      type: "number",
      name: "visitNumber",
      label: "Visit Number",
      // placeholder:"Please Enter NPI",
    },
    patienttodaysDate: {
      type: "date",
      name: "patienttodaysDate",
      label: "Today's Date:",
      // placeholder:"Please Enter TIN",
    },
    patientNextReExam: {
      type: "date",
      name: "patientNextReExam",
      label: "Next Re-Exam",
      // placeholder:"Please Enter hourlyRate",
    },
    patientDob: {
      type: "date",
      name: "patientDob",
      label: "DOB:",
    },
    patientAge: {
      type: "number",
      name: "patientAge",
      label: "Age:",
    },
    patientHeight: {
      type: "text",
      name: "patientHeight",
      label: "Height:",
    },
    patientHeightNi: {
      type: "checkbox",
      name: "patientHeightNi",
      label: "NI:",
    },
    patientWeight: {
      type: "text",
      name: "patientWeight",
      label: "Weight:",
    },
    patientWeightNi: {
      type: "checkbox",
      name: "patientWeightNi",
      label: "NI:",
    },
    patientHtnYes: {
      type: "checkbox",
      name: "patientHtnYes",
      label: "Yes:",
    },
    patientHtnNo: {
      type: "checkbox",
      name: "patientHtnNo",
      label: "No:",
    },
    patientCautions: {
      type: "text",
      name: "patientCautions",
      label: "Cautions:",
    },

    isImproved: {
      type: "checkbox",
      name: "isImproved",
    },
    isNoChanges: {
      type: "checkbox",
      name: "isNoChanges",
    },
    isRegressed: {
      type: "checkbox",
      name: "isRegressed",
    },
    isFlareUp: {
      type: "checkbox",
      name: "isFlareUp",
    },
    additionalAssessment: {
      type: "text",
      name: "additionalAssessment",
      label: "additional Assessment:",
      placeholder: "Please Enter Additional Assessment",
    },

    doe: {
      type: "text",
      name: "doe",
      label: "Objective Findings: DOE:",
      placeholder: "Please Enter",
    },
    isVitals: {
      type: "checkbox",
      name: "isVitals",
    },
    bp: {
      type: "text",
      name: "bp",
      label: "bp",
      // placeholder:"Please Enter",
    },
    mmHG: {
      type: "text",
      name: "mmHG",
      label: "mmHG",
      // placeholder:"Please Enter",
    },
    pulse: {
      type: "text",
      name: "pulse",
      label: "pulse",
      // placeholder:"Please Enter",
    },
    temp: {
      type: "text",
      name: "temp",
      label: "temp",
      // placeholder:"Please Enter",
    },
    rr: {
      type: "text",
      name: "rr",
      label: "rr",
      // placeholder:"Please Enter",
    },
    spo2: {
      type: "text",
      name: "spo2",
      label: "spo2",
      // placeholder:"Please Enter",
    },
    isNeurologicalExam: {
      type: "checkbox",
      name: "isNeurologicalExam",
      // label: "neurologicalExam",
      // placeholder:"Please Enter",
    },
    isCranialNerves: {
      type: "checkbox",
      name: "isCranialNerves",
    },
    cranialNerves: {
      type: "text",
      name: "cranialNerves",
    },

    isRombergs: {
      type: "checkbox",
      name: "isRombergs",
    },
    rombergs: {
      type: "text",
      name: "rombergs",
    },

    isDiadichodyskinesia: {
      type: "checkbox",
      name: "isDiadichodyskinesia",
    },
    diadichodyskinesia: {
      type: "text",
      name: "diadichodyskinesia",
    },

    isDermatomes: {
      type: "checkbox",
      name: "isDermatomes",
    },
    dermatomes: {
      type: "text",
      name: "dermatomes",
    },

    isMyotomes: {
      type: "checkbox",
      name: "isMyotomes",
    },
    myotomes: {
      type: "text",
      name: "myotomes",
    },

    isDtrs: {
      type: "checkbox",
      name: "isDtrs",
    },
    dtrs: {
      type: "text",
      name: "dtrs",
    },

    isPathological: {
      type: "checkbox",
      name: "isPathological",
    },
    pathological: {
      type: "text",
      name: "pathological",
    },

    isHomans: {
      type: "checkbox",
      name: "isHomans",
    },
    homans: {
      type: "text",
      name: "homans",
    },

    // flexion60_exam : {
    //   type:"text",
    //   name: "flexion60_exam",
    // },
    // flexion60_pain : {
    //   type:"checkbox",
    //   name: "flexion60_pain",
    // },
    // flexion60_noPain : {
    //   type:"checkbox",
    //   name: "flexion60_noPain",
    // },
    // flexion60_location : {
    //   type:"text",
    //   name: "flexion60_location",
    // },
    // flexion60_left : {
    //   type:"text",
    //   name: "flexion60_left",
    // },
    // flexion60_right : {
    //   type:"text",
    //   name: "flexion60_right",
    // },

    // extension50_exam : {
    //   type:"text",
    //   name: "extension50_exam",
    // },
    // extension50_pain : {
    //   type:"checkbox",
    //   name: "extension50_pain",
    // },
    // extension50_noPain : {
    //   type:"checkbox",
    //   name: "extension50_noPain",
    // },
    // extension50_location : {
    //   type:"text",
    //   name: "extension50_location",
    // },
    // extension50_left : {
    //   type:"text",
    //   name: "extension50_left",
    // },
    // extension50_right : {
    //   type:"text",
    //   name: "extension50_right",
    // },

    // leftLateralFlexion40_exam : {
    //   type:"text",
    //   name: "leftLateralFlexion40_exam",
    // },
    // leftLateralFlexion40_pain : {
    //   type:"checkbox",
    //   name: "leftLateralFlexion40_pain",
    // },
    // leftLateralFlexion40_noPain : {
    //   type:"checkbox",
    //   name: "leftLateralFlexion40_noPain",
    // },
    // leftLateralFlexion40_location : {
    //   type:"text",
    //   name: "leftLateralFlexion40_location",
    // },
    // leftLateralFlexion40_left : {
    //   type:"text",
    //   name: "leftLateralFlexion40_left",
    // },
    // leftLateralFlexion40_right : {
    //   type:"text",
    //   name: "leftLateralFlexion40_right",
    // },

    // rightLateralFlexion40_exam : {
    //   type:"text",
    //   name: "rightLateralFlexion40_exam",
    // },
    // rightLateralFlexion40_pain : {
    //   type:"checkbox",
    //   name: "rightLateralFlexion40_pain",
    // },
    // rightLateralFlexion40_noPain : {
    //   type:"checkbox",
    //   name: "rightLateralFlexion40_noPain",
    // },
    // rightLateralFlexion40_location : {
    //   type:"text",
    //   name: "rightLateralFlexion40_location",
    // },
    // rightLateralFlexion40_left : {
    //   type:"text",
    //   name: "rightLateralFlexion40_left",
    // },
    // rightLateralFlexion40_right : {
    //   type:"text",
    //   name: "rightLateralFlexion40_right",
    // },

    // leftRotation80_exam : {
    //   type:"text",
    //   name: "leftRotation80_exam",
    // },
    // leftRotation80_pain : {
    //   type:"checkbox",
    //   name: "leftRotation80_pain",
    // },
    // leftRotation80_noPain : {
    //   type:"checkbox",
    //   name: "leftRotation80_noPain",
    // },
    // leftRotation80_location : {
    //   type:"text",
    //   name: "leftRotation80_location",
    // },
    // leftRotation80_left : {
    //   type:"text",
    //   name: "leftRotation80_left",
    // },
    // leftRotation80_right : {
    //   type:"text",
    //   name: "leftRotation80_right",
    // },

    // rightRotation80_exam : {
    //   type:"text",
    //   name: "rightRotation80_exam",
    // },
    // rightRotation80_pain : {
    //   type:"checkbox",
    //   name: "rightRotation80_pain",
    // },
    // rightRotation80_noPain : {
    //   type:"checkbox",
    //   name: "rightRotation80_noPain",
    // },
    // rightRotation80_location : {
    //   type:"text",
    //   name: "rightRotation80_location",
    // },
    // rightRotation80_left : {
    //   type:"text",
    //   name: "rightRotation80_left",
    // },
    // rightRotation80_right : {
    //   type:"text",
    //   name: "rightRotation80_right",
    // },

    cervicalRegionalNotes1: {
      type: "text",
      name: "cervicalRegionalNotes1",
      label: "Notes1",
    },
    cervicalRegionalNotes2: {
      type: "text",
      name: "cervicalRegionalNotes2",
      label: "Notes2",
    },
    MaximalForaminalCompression_left: {
      type: "text",
      name: "MaximalForaminalCompression_left",
    },
    MaximalForaminalCompression_right: {
      type: "text",
      name: "MaximalForaminalCompression_right",
    },
    ODonoghuesManeuver: {
      type: "text",
      name: "ODonoghuesManeuver",
    },

    // flexion90_exam : {
    //   type:"text",
    //   name: "flexion90_exam",
    // },
    // flexion90_pain : {
    //   type:"checkbox",
    //   name: "flexion90_pain",
    // },
    // flexion90_noPain : {
    //   type:"checkbox",
    //   name: "flexion90_noPain",
    // },
    // flexion90_location : {
    //   type:"text",
    //   name: "flexion90_location",
    // },
    // flexion90_left : {
    //   type:"text",
    //   name: "flexion90_left",
    // },
    // flexion90_right : {
    //   type:"text",
    //   name: "flexion90_right",
    // },

    // extension30_exam : {
    //   type:"text",
    //   name: "extension30_exam",
    // },
    // extension30_pain : {
    //   type:"checkbox",
    //   name: "extension30_pain",
    // },
    // extension30_noPain : {
    //   type:"checkbox",
    //   name: "extension30_noPain",
    // },
    // extension30_location : {
    //   type:"text",
    //   name: "extension30_location",
    // },
    // extension30_left : {
    //   type:"text",
    //   name: "extension30_left",
    // },
    // extension30_right : {
    //   type:"text",
    //   name: "extension30_right",
    // },

    // leftLateralFlexion20_exam : {
    //   type:"text",
    //   name: "leftLateralFlexion20_exam",
    // },
    // leftLateralFlexion20_pain : {
    //   type:"checkbox",
    //   name: "leftLateralFlexion20_pain",
    // },
    // leftLateralFlexion20_noPain : {
    //   type:"checkbox",
    //   name: "leftLateralFlexion20_noPain",
    // },
    // leftLateralFlexion20_location : {
    //   type:"text",
    //   name: "leftLateralFlexion20_location",
    // },
    // leftLateralFlexion20_left : {
    //   type:"text",
    //   name: "leftLateralFlexion20_left",
    // },
    // leftLateralFlexion20_right : {
    //   type:"text",
    //   name: "leftLateralFlexion20_right",
    // },

    // rightLateralFlexion20_exam : {
    //   type:"text",
    //   name: "rightLateralFlexion20_exam",
    // },
    // rightLateralFlexion20_pain : {
    //   type:"checkbox",
    //   name: "rightLateralFlexion20_pain",
    // },
    // rightLateralFlexion20_noPain : {
    //   type:"checkbox",
    //   name: "rightLateralFlexion20_noPain",
    // },
    // rightLateralFlexion20_location : {
    //   type:"text",
    //   name: "rightLateralFlexion20_location",
    // },
    // rightLateralFlexion20_left : {
    //   type:"checkbox",
    //   name: "rightLateralFlexion20_left",
    // },
    // rightLateralFlexion20_right : {
    //   type:"text",
    //   name: "rightLateralFlexion20_right",
    // },

    // leftRotation30_exam : {
    //   type:"text",
    //   name: "leftRotation30_exam",
    // },
    // leftRotation30_pain : {
    //   type:"checkbox",
    //   name: "leftRotation30_pain",
    // },
    // leftRotation30_noPain : {
    //   type:"checkbox",
    //   name: "leftRotation30_noPain",
    // },
    // leftRotation30_location : {
    //   type:"text",
    //   name: "leftRotation30_location",
    // },
    // leftRotation30_left : {
    //   type:"checkbox",
    //   name: "leftRotation30_left",
    // },
    // leftRotation30_right: {
    //   type:"text",
    //   name: "leftRotation30_right",
    // },

    // rightRotation30_exam : {
    //   type:"text",
    //   name: "rightRotation30_exam",
    // },
    // rightRotation30_pain : {
    //   type:"checkbox",
    //   name: "rightRotation30_pain",
    // },
    // rightRotation30_noPain : {
    //   type:"checkbox",
    //   name: "rightRotation30_noPain",
    // },
    // rightRotation30_location : {
    //   type:"text",
    //   name: "rightRotation30_location",
    // },
    // rightRotation30_left : {
    //   type:"checkbox",
    //   name: "rightRotation30_left",
    // },
    // rightRotation30_right : {
    //   type:"text",
    //   name: "rightRotation30_right",
    // },

    Yeomans_left: {
      type: "text",
      name: "Yeomans_left",
    },
    Yeomans_right: {
      type: "text",
      name: "Yeomans_right",
    },
    lumbarRegionalNotes1: {
      type: "text",
      name: "lumbarRegionalNotes1",
      label: "Notes1",
    },

    isLtC0: {
      type: "checkbox",
      name: "isLtC0",
    },
    isLtC1: {
      type: "checkbox",
      name: "isLtC1",
    },
    isLtC2: {
      type: "checkbox",
      name: "isLtC2",
    },
    isLtC3: {
      type: "checkbox",
      name: "isLtC3",
    },
    isLtC4: {
      type: "checkbox",
      name: "isLtC4",
    },
    isLtC5: {
      type: "checkbox",
      name: "isLtC5",
    },
    isLtC6: {
      type: "checkbox",
      name: "isLtC6",
    },
    isLtC7: {
      type: "checkbox",
      name: "isLtC7",
    },

    isRtC0: {
      type: "checkbox",
      name: "isRtC0",
    },
    isRtC1: {
      type: "checkbox",
      name: "isRtC1",
    },
    isRtC2: {
      type: "checkbox",
      name: "isRtC2",
    },
    isRtC3: {
      type: "checkbox",
      name: "isRtC3",
    },
    isRtC4: {
      type: "checkbox",
      name: "isRtC4",
    },
    isRtC5: {
      type: "checkbox",
      name: "isRtC5",
    },
    isRtC6: {
      type: "checkbox",
      name: "isRtC6",
    },
    isRtC7: {
      type: "checkbox",
      name: "isRtC7",
    },

    isLtT1: {
      type: "checkbox",
      name: "isLtT1",
    },
    isLtT2: {
      type: "checkbox",
      name: "isLtT2",
    },
    isLtT3: {
      type: "checkbox",
      name: "isLtT3",
    },
    isLtT4: {
      type: "checkbox",
      name: "isLtT4",
    },
    isLtT5: {
      type: "checkbox",
      name: "isLtT5",
    },
    isLtT6: {
      type: "checkbox",
      name: "isLtT6",
    },
    isLtT7: {
      type: "checkbox",
      name: "isLtT7",
    },
    isLtT8: {
      type: "checkbox",
      name: "isLtT8",
    },
    isLtT9: {
      type: "checkbox",
      name: "isLtT9",
    },
    isLtT10: {
      type: "checkbox",
      name: "isLtT10",
    },
    isLtT11: {
      type: "checkbox",
      name: "isLtT11",
    },
    isLtT12: {
      type: "checkbox",
      name: "isLtT12",
    },

    isRtT1: {
      type: "checkbox",
      name: "isRtT1",
    },
    isRtT2: {
      type: "checkbox",
      name: "isRtT2",
    },
    isRtT3: {
      type: "checkbox",
      name: "isRtT3",
    },
    isRtT4: {
      type: "checkbox",
      name: "isRtT4",
    },
    isRtT5: {
      type: "checkbox",
      name: "isRtT5",
    },
    isRtT6: {
      type: "checkbox",
      name: "isRtT6",
    },
    isRtT7: {
      type: "checkbox",
      name: "isRtT7",
    },
    isRtT8: {
      type: "checkbox",
      name: "isRtT8",
    },
    isRtT9: {
      type: "checkbox",
      name: "isRtT9",
    },
    isRtT10: {
      type: "checkbox",
      name: "isRtT10",
    },
    isRtT11: {
      type: "checkbox",
      name: "isRtT11",
    },
    isRtT12: {
      type: "checkbox",
      name: "isRtT12",
    },

    isLtL1: {
      type: "checkbox",
      name: "isLtL1",
    },
    isLtL2: {
      type: "checkbox",
      name: "isLtL2",
    },
    isLtL3: {
      type: "checkbox",
      name: "isLtL3",
    },
    isLtL4: {
      type: "checkbox",
      name: "isLtL4",
    },
    isLtL5: {
      type: "checkbox",
      name: "isLtL5",
    },

    isRtL1: {
      type: "checkbox",
      name: "isRtL1",
    },
    isRtL2: {
      type: "checkbox",
      name: "isRtL2",
    },
    isRtL3: {
      type: "checkbox",
      name: "isRtL3",
    },
    isRtL4: {
      type: "checkbox",
      name: "isRtL4",
    },
    isRtL5: {
      type: "checkbox",
      name: "isRtL5",
    },

    isLtSij: {
      type: "checkbox",
      name: "isLtSij",
    },
    isRtSij: {
      type: "checkbox",
      name: "isRtSij",
    },

    isOther: {
      type: "checkbox",
      name: "isOther",
    },
  },
};

export default form;
