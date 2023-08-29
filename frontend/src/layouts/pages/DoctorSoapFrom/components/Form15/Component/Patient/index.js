import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React from "react";
import FormField from "../../../FormField";
import PropTypes from "prop-types";

function PatientComponent({formData,formik, form}) {
  const { formField } = form;
  const { values } = formik;
  // const {values,touched,formField,errors,setFieldValue,handleChange} = formData;
  const {PatientName,newPatient,patientFollowUp,patientNewComplaint,visitNumber,patienttodaysDate,patientNextReExam,
    patientDob,patientAge,patientHeight,patientHeightNi,patientWeight,patientWeightNi,
    patientHtnYes,patientHtnNo,patientCautions} = formField;
  const {
    PatientName : PatientNameV,
    newPatient : newPatientV,
    patientFollowUp : patientFollowUpV,
    patientNewComplaint : patientNewComplaintV,
    visitNumber : visitNumberV,
    patienttodaysDate : patienttodaysDateV,
    patientNextReExam : patientNextReExamV,
    patientDob : patientDobV,
    patientAge : patientAgeV,
    patientHeight : patientHeightV,
    patientHeightNi : patientHeightNiV,
    patientWeight : patientWeightV,
    patientWeightNi : patientWeightNiV,
    patientHtnYes : patientHtnYesV,
    patientHtnNo : patientHtnNoV,
    patientCautions : patientCautionsV
  } = values;
  return (
    <SoftBox>
      <Grid item>
        {/* <Grid container>
          <Grid item lg={12}>
            <label>Patient Name</label>
            <input type="text" className="patientName inputClass" />
          </Grid>

          <Grid className="class2">
            <Grid item>
              <input type="checkbox" />
              <label>New</label>
            </Grid>
            <Grid item>
              <input type="checkbox" />
              <label>Follow-Up</label>
            </Grid>
            <Grid item>
              <input type="checkbox" />
              <label>New Complaint</label>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item>
              <label>Visit Number</label>
              <input type="text" className="visitNumber inputClass" />
            </Grid>
            <Grid item>
              <label>Today&apos;s Date</label>
              <input type="date" className="todayDate inputClass" />
            </Grid>
            <Grid item>
              <label>Next Re-Exam:</label>
              <input type="date" className="nextreExam inputClass" />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item>
              <label>DOB:</label>
              <input className="dob inputClass" type="date" />
            </Grid>
            <Grid item>
              <label>Age:</label>
              <input className="age inputClass" type="number" />
              <label>yrs</label>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <label>Height</label>
              <input type="text" className="height inputClass" />
              <input type="checkbox" />
              <label>NI</label>&nbsp;
              <label>Weight</label>
              <input type="text" className="weight inputClass" />
              <label>lbs.</label>
              <input type="checkbox" />
              <label>NI</label>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <label style={{ color: "red" }}>HTN:</label>
            </Grid>

            <Grid item>
              <input type="checkbox" />
              <label>Yes</label>
            </Grid>

            <Grid item>
              <input type="checkbox" />
              <label>No</label>
            </Grid>

            <Grid item lg={8}>
              <label style={{ color: "red" }}>Cautions:</label>
              <input type="text" className="Cautions inputClass" />
            </Grid>
          </Grid>
        </Grid> */}
        <Grid lg={12} sm={12} xs={12}>
            <FormField type={PatientName.type} label={PatientName.label} name={PatientName.name} value={PatientNameV} />
          </Grid>
          <Grid container pl={1}>
            <Grid item lg={2}>
              <FormControlLabel control={<Checkbox name={newPatient.name} value={newPatientV} onChange={formik.handleChange}/>} label={newPatient.label} />
            </Grid>
            <Grid item lg={2}>
              <FormControlLabel control={<Checkbox name={patientFollowUp.name} value={patientFollowUpV} onChange={formik.handleChange}/>} label={patientFollowUp.label} />
            </Grid>
            <Grid item lg={3}>
              <FormControlLabel control={<Checkbox name={patientNewComplaint.name} value={patientNewComplaintV} onChange={formik.handleChange}/>} label={patientNewComplaint.label} />
            </Grid>
          </Grid>
          <Grid container pl={1} spacing={1}>
            <Grid item lg={4} sm={4} xs={12}>
              <FormField type={visitNumber.type} label={visitNumber.label} name={visitNumber.name} value={visitNumberV} />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <FormField type={patienttodaysDate.type} label={patienttodaysDate.label} name={patienttodaysDate.name} value={patienttodaysDateV} />
            </Grid>
            <Grid item lg={4} sm={4} xs={12}>
              <FormField type={patientNextReExam.type} label={patientNextReExam.label} name={patientNextReExam.name} value={patientNextReExamV} />
            </Grid>
          </Grid>

          <Grid container pl={1} spacing={1}>
            <Grid item lg={4} sm={6} xs={6}>
              <FormField type={patientDob.type} label={patientDob.label} name={patientDob.name} value={patientDobV} />
            </Grid>
            <Grid item lg={4} sm={6} xs={6}>
              <FormField type={patientAge.type} label={patientAge.label} name={patientAge.name} value={patientAgeV} />
            </Grid>
          </Grid>

          <Grid container pl={1} spacing={1} style={{ alignItems: "center" }}>
            <Grid item lg={4} xs={4}>
              <FormField type={patientHeight.type} label={patientHeight.label} name={patientHeight.name} value={patientHeightV} />
            </Grid>
            <Grid item lg={2} xs={2}>
              <FormControlLabel
                className="CranialNervesLabel"
                control={<Checkbox name={patientHeightNi.name} value={patientHeightNiV} onChange={formik.handleChange}/>}
                label={patientHeightNi.label}
              />
            </Grid>
            <Grid item lg={4} xs={4}>
              <FormField type={patientWeight.type} label={patientWeight.label} name={patientWeight.name} value={patientWeightV} />
            </Grid>
            <Grid item lg={2} xs={2}>
              <FormControlLabel
                className="CranialNervesLabel"
                control={<Checkbox name={patientWeightNi.name} value={patientWeightNiV} onChange={formik.handleChange}/>}
                label={patientWeightNi.label}
              />
            </Grid>
          </Grid>

          <Grid container pl={1} spacing={1} style={{ display: "flex", alignItems: "center" }}>
            <Grid item lg={1} xs={2} style={{ paddingTop: "35px" }}>
              HTN
            </Grid>
            <Grid item lg={2} xs={2}>
              <FormControlLabel
                className="CranialNervesLabel"
                control={<Checkbox name={patientHtnYes.name} value={patientHtnYesV} onChange={formik.handleChange}/>}
                label={patientHtnYes.label}
              />
            </Grid>
            <Grid item lg={2} xs={2}>
              <FormControlLabel
                className="CranialNervesLabel"
                control={<Checkbox name={patientHtnNo.name} value={patientHtnNoV} onChange={formik.handleChange}/>}
                label={patientHtnNo.label}
              />
            </Grid>
            <Grid item lg={7} xs={6}>
              <FormField type={patientCautions.type} label={patientCautions.label} name={patientCautions.name} value={patientCautionsV} />
            </Grid>
          </Grid>
      </Grid>
    </SoftBox>
  );
}

PatientComponent.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default PatientComponent;
