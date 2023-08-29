import { Checkbox, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { Formik } from "formik";
import initialValues from "./Schema/initialValues";
import { doctorShopFormDataAction } from "store/actions/actions";
import SoftButton from "components/SoftButton";

function index({ formik }) {
  const doctorShopFromDetails = useSelector(
    (state) => state.auth.doctorShopForm?.practitionerAndPatientDetails
  );

  const token = useSelector((state) => state.auth.auth.idToken);
  const userData = useSelector((state) => state.auth.auth.userdata);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const patientDetails = useSelector((state) => state.auth.soapFormPatientData);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  console.log("soapFormPage1..",soapFormPage1);
  const patientName = { name : soapFormPage1?.name}
    console.log("patientName..",patientName);
  const UserId = useSelector((state) => state.auth.auth._id);

  const dispatch = useDispatch();
  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /*practitionerId: UserId,*/ token: token,
      })
    );
  }, []);
  let date = new Date().toLocaleDateString("en-CA");
  return (
    <div>
      <Grid container spacing={2} mb={2} className="eigth-page-common-info-grid">
        <Formik
          initialValues={{ ...initialValues, ...doctorShopFromDetails,...patientName }}
          enableReinitialize
          onSubmit={(values) => {
            const data = {
              patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
                ? patientSoapFormDetail.patientId
                : selectedPatientId
                ? selectedPatientId
                : soappatientId,
              // practitionerId: UserId,
              practitionerAndPatientDetails: values,
            };
            dispatch(
              doctorShopFormDataAction({
                data: data,
                token: token,
              })
            );
          }}
        >
          {(formik) => {
            return (
              <>
                <Grid item sm={4} xs={12} mt={2}>
                  <SoftBox>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        marginTop: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                        Practitioner: &nbsp;&nbsp;
                      </span>
                      <input
                        type="text"
                        className="practitionerNameClass"
                        name="practitionerAndPatientDetails.PractitionerName"
                        value={userData?.name}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        marginTop: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={{ fontSize: "15px", fontWeight: "bold" }}>NPI:&nbsp;&nbsp;</span>
                      <input
                        type="text"
                        className="NPIClass"
                        name="practitionerAndPatientDetails.NPI"
                        value={formik.values?.practitionerAndPatientDetails?.NPI}
                        onChange={formik.handleChange}
                        onBlur={formik.handleSubmit}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        marginTop: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={{ fontSize: "15px", fontWeight: "bold" }}>TIN:&nbsp;&nbsp;</span>
                      <input
                        type="text"
                        className="TINClass"
                        name="practitionerAndPatientDetails.TIN"
                        value={formik.values?.practitionerAndPatientDetails?.TIN}
                        onChange={formik.handleChange}
                        onBlur={formik.handleSubmit}
                      />
                    </div>
                    <div
                      className="hourRateDiv"
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        marginTop: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                        Hourly rate = $&nbsp;&nbsp;
                      </span>
                      <input
                        type="number"
                        className="hourlyRateClass"
                        name="practitionerAndPatientDetails.hourlyRate"
                        value={formik.values?.practitionerAndPatientDetails?.hourlyRate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleSubmit}
                      />
                    </div>
                  </SoftBox>
                </Grid>

                <Grid item sm={8} xs={12}>
                  <Grid item>
                    <Grid container>
                      {/* <Grid item lg={12} className="patientName ">
                        <Grid container spacing={2}>
                          <Grid item md={4} lg={2} sm={12}>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "0px" }}
                            >
                              Patient Name:{" "}
                            </label>
                          </Grid>
                          <Grid item lg={10} md={8} sm={12}>
                            <input
                              type="text"
                              // className="inputClass"
                              onChange={formik.handleChange}
                              name="patientDetailsForm.name"
                              value={patientDetails?.name}
                              onBlur={formik.handleSubmit}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={10} className="class2">
                        <Grid container>
                          <Grid item lg={3}>
                            <input
                              type="checkbox"
                              name="practitionerAndPatientDetails.isNewPatient"
                              checked={formik.values?.practitionerAndPatientDetails?.isNewPatient}
                              onBlur={formik.handleSubmit}
                              onChange={(e) => {
                                console.log("e..", e.target.checked);
                                formik.setFieldValue(
                                  "practitionerAndPatientDetails.isNewPatient",
                                  e.target.checked
                                );
                              }}
                              // onChange={formik.handleChange}
                            />
                            <label className="checkboxlabel">New</label>
                          </Grid>
                          <Grid item lg={3}>
                            <input
                              type="checkbox"
                              name="practitionerAndPatientDetails.isFollowUpPatient"
                              checked={
                                formik.values?.practitionerAndPatientDetails?.isFollowUpPatient
                              }
                              onBlur={formik.handleSubmit}
                              onChange={(e) => {
                                console.log("e..", e.target.checked);
                                formik.setFieldValue(
                                  "practitionerAndPatientDetails.isFollowUpPatient",
                                  e.target.checked
                                );
                              }}
                            />
                            <label className="checkboxlabel">Follow-Up</label>
                          </Grid>
                          <Grid item lg={4}>
                            <input
                              type="checkbox"
                              name="practitionerAndPatientDetails.isNewComplaintPatient"
                              checked={
                                formik.values?.practitionerAndPatientDetails?.isNewComplaintPatient
                              }
                              onBlur={formik.handleSubmit}
                              // onChange={formik.handleChange}
                              onChange={(e) => {
                                console.log("e..", e.target.checked);
                                formik.setFieldValue(
                                  "practitionerAndPatientDetails.isNewComplaintPatient",
                                  e.target.checked
                                );
                              }}
                            />
                            <label className="checkboxlabel">New Complaint</label>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid container className="class3">
                        <Grid item className="visitno">
                          <label>Visit Number</label>
                          <input
                            type="number"
                            className="visitNumber"
                            name="practitionerAndPatientDetails.patientVisitNumber"
                            value={formik.values?.practitionerAndPatientDetails?.patientVisitNumber}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </Grid>
                        <Grid item className="visitdate">
                          <label>Today&apos;s Date:</label>
                          <input
                            max={date}
                            type="date"
                            className="todayDate"
                            name="practitionerAndPatientDetails.patientTodaysDate"
                            value={formik.values?.practitionerAndPatientDetails?.patientTodaysDate}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </Grid>
                        <Grid item className="visitdate">
                          <label>Next Re-Exam:</label>
                          <input
                            type="date"
                            className="nextreExam"
                            name="practitionerAndPatientDetails.patientNextReExam"
                            value={formik.values?.practitionerAndPatientDetails?.patientNextReExam}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </Grid>
                      </Grid>
                      <Grid container className="class3">
                        <Grid item xl={3} lg={4} md={6} xs={12} className="dob">
                          <label style={{ fontSize: "15px", fontWeight: "bold" }}>DOB:</label>
                          <input
                            className=""
                            max={date}
                            type="date"
                            name="practitionerAndPatientDetails.patientDob"
                            value={formik.values?.practitionerAndPatientDetails?.patientDob}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </Grid>
                        <Grid item xl={3} lg={3} md={4} xs={12} className="ageinput">
                          <label style={{ fontSize: "15px", fontWeight: "bold" }}>Age:</label>
                          <input
                            className="age"
                            type="number"
                            name="practitionerAndPatientDetails.patientAge"
                            value={formik.values?.practitionerAndPatientDetails?.patientAge}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                          <label style={{ fontSize: "15px", fontWeight: "bold" }}>yrs.</label>
                        </Grid>
                      </Grid>
                      <Grid container className="class3">
                        <Grid item className="heightwidth">
                          <label style={{ fontSize: "15px", fontWeight: "bold" }}>Height</label>
                          <input
                            type="number"
                            className="heightinputClass"
                            name="practitionerAndPatientDetails.patientHeight"
                            value={formik.values?.practitionerAndPatientDetails?.patientHeight}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                          &apos;&apos;
                          <input
                            type="checkbox"
                            name="practitionerAndPatientDetails.patientHeightNI"
                            checked={formik.values?.practitionerAndPatientDetails?.patientHeightNI}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                          <label style={{ fontSize: "15px", fontWeight: "bold" }}>NI</label>&nbsp;
                        </Grid>
                        <Grid className="heightwidth">
                          <label style={{ fontSize: "15px", fontWeight: "bold" }} type="number">
                            Weight
                          </label>
                          <input
                            type="number"
                            className="widthinputClass"
                            name="practitionerAndPatientDetails.patientWeight"
                            value={formik.values?.practitionerAndPatientDetails?.patientWeight}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                          <label style={{ fontSize: "15px", fontWeight: "bold" }}>lbs.</label>
                          <input
                            type="checkbox"
                            name="practitionerAndPatientDetails.patientWeightNI"
                            checked={formik.values?.practitionerAndPatientDetails?.patientWeightNI}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                          <label style={{ fontSize: "15px", fontWeight: "bold" }}>NI</label>
                        </Grid>
                      </Grid> */}
                      {/* <Grid container className="class3">
                        
                        <Grid
                          item
                          className="htn"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <label
                            style={{
                              color: "red",
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginRight: "5px",
                             
                            }}
                          >
                            HTN:
                          </label>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="practitionerAndPatientDetails.patientHtn"
                            value={formik.values.practitionerAndPatientDetails?.patientHtn}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          >
                            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                            <FormControlLabel
                              value="No"
                              control={<Radio />}
                              label="No"
                            />
                          </RadioGroup>
                          
                        </Grid>
                        
                        <Grid item className="htn htn1">
                          <label style={{ color: "red", fontSize: "15px", fontWeight: "bold" }}>
                            Cautions:
                          </label>
                          <input
                            type="text"
                            className="Cautions"
                            name="practitionerAndPatientDetails.patientCautions"
                            value={formik.values?.practitionerAndPatientDetails?.patientCautions}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </Grid>
                      </Grid> */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          width: "100%",
                          marginBottom: "20px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "16px",
                            marginRight: "0.8rem",
                            fontWeight: "bold",
                            minWidth: "107px",
                          }}
                        >
                          Patient Name:
                        </span>
                        <input
                          type="text"
                          className="patitentNameClass"
                          onChange={formik.handleChange}
                          // name="practitionerAndPatientDetails.name"
                          name="name"
                          // value={formik.values?.practitionerAndPatientDetails?.name}
                          value={formik.values?.name}
                          onBlur={formik.handleSubmit}
                        />
                      </div>
                      <div className="eigth-info-common-patient-type-container">
                        <FormControlLabel
                          control={
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name="practitionerAndPatientDetails.isNewPatient"
                              checked={formik.values?.practitionerAndPatientDetails?.isNewPatient}
                              onBlur={formik.handleSubmit}
                              onChange={(e) => {
                                console.log("e..", e.target.checked);
                                formik.setFieldValue(
                                  "practitionerAndPatientDetails.isNewPatient",
                                  e.target.checked
                                );
                              }}
                            />
                          }
                          label="New"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name="practitionerAndPatientDetails.isFollowUpPatient"
                              checked={
                                formik.values?.practitionerAndPatientDetails?.isFollowUpPatient
                              }
                              onBlur={formik.handleSubmit}
                              onChange={(e) => {
                                console.log("e..", e.target.checked);
                                formik.setFieldValue(
                                  "practitionerAndPatientDetails.isFollowUpPatient",
                                  e.target.checked
                                );
                              }}
                            />
                          }
                          label="Follow-Up"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name="practitionerAndPatientDetails.isNewComplaintPatient"
                              checked={
                                formik.values?.practitionerAndPatientDetails?.isNewComplaintPatient
                              }
                              onBlur={formik.handleSubmit}
                              // onChange={formik.handleChange}
                              onChange={(e) => {
                                console.log("e..", e.target.checked);
                                formik.setFieldValue(
                                  "practitionerAndPatientDetails.isNewComplaintPatient",
                                  e.target.checked
                                );
                              }}
                            />
                          }
                          label="New Complaint"
                        />
                      </div>
                      {/* <div > */}
                      <Grid
                        container
                        spacing={1}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          width: "100%",
                          paddingLeft: "10px",
                          // marginBottom: "15px",
                        }}
                        className="eigth-info-common-visit-row-container"
                      >
                        <Grid m={0} item lg={3} xs={12} md={8}>
                          <span
                            style={{
                              fontSize: "16px",
                              marginRight: "0.5rem",
                              fontWeight: "bold",
                              minWidth: 105,
                            }}
                          >
                            Visit Number:
                          </span>
                          <input
                            className="patitentNameClass"
                            type="number"
                            name="practitionerAndPatientDetails.patientVisitNumber"
                            value={formik.values?.practitionerAndPatientDetails?.patientVisitNumber}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </Grid>
                        <Grid item lg={4.5} xs={12} md={8} className="TodaysDateClass">
                          <span
                            style={{
                              fontSize: "16px",
                              marginRight: "0.5rem",
                              marginTop: "10px",
                              minWidth: "97px",
                              fontWeight: "bold",
                            }}
                          >
                            Today’s Date:
                          </span>
                          <input
                            max={date}
                            type="date"
                            className="todayDate1"
                            name="practitionerAndPatientDetails.patientTodaysDate"
                            value={formik.values?.practitionerAndPatientDetails?.patientTodaysDate}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </Grid>

                        <Grid lg={4.5} xs={12} md={12} className="NextReExamClass">
                          <span
                            style={{
                              fontSize: "14px",
                              marginTop: "10px",
                              fontWeight: "bold",
                              marginRight: "5px",
                              minWidth: "96px",
                            }}
                          >
                            Next Re-Exam:
                          </span>
                          <input
                            type="Date"
                            className="todayDate1"
                            name="practitionerAndPatientDetails.patientNextReExam"
                            value={formik.values?.practitionerAndPatientDetails?.patientNextReExam}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </Grid>
                      </Grid>
                      {/* </div> */}
                      <div className="eigth-info-common-dob-row-container">
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            style={{
                              fontSize: "16px",
                              marginRight: "0.5rem",
                              fontWeight: "bold",
                            }}
                          >
                            DOB:
                          </span>
                          <Grid item className="DOBClass" xs={12}>
                            <input
                              // className="DOBClass"
                              max={date}
                              type="date"
                              name="practitionerAndPatientDetails.patientDob"
                              value={formik.values?.practitionerAndPatientDetails?.patientDob}
                              onBlur={formik.handleSubmit}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            height: "38px",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{ fontSize: "16px", marginRight: "0.5rem", fontWeight: "bold" }}
                          >
                            Age:
                          </span>
                          <input
                            className="AgeClass"
                            type="number"
                            name="practitionerAndPatientDetails.patientAge"
                            value={formik.values?.practitionerAndPatientDetails?.patientAge}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                          &nbsp;
                          <span
                            style={{ fontSize: "16px", marginRight: "0.5rem", fontWeight: "bold" }}
                          >
                            yrs.
                          </span>
                        </div>
                      </div>

                      <div
                        style={{ display: "flex" }}
                        className="flex-dir-row eigth-info-common-height-row"
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            style={{ fontSize: "16px", marginRight: "0.5rem", fontWeight: "bold" }}
                          >
                            Height:
                          </span>
                          <input
                            className="HeightClass"
                            type="number"
                            name="practitionerAndPatientDetails.patientHeight"
                            value={formik.values?.practitionerAndPatientDetails?.patientHeight}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                          <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>
                            &ldquo;&nbsp;
                          </span>
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name="practitionerAndPatientDetails.patientHeightNI"
                                checked={
                                  formik.values?.practitionerAndPatientDetails?.patientHeightNI
                                }
                                onBlur={formik.handleSubmit}
                                onChange={(e) => {
                                  console.log("e..", e.target.checked);
                                  formik.setFieldValue(
                                    "practitionerAndPatientDetails.patientHeightNI",
                                    e.target.checked
                                  );
                                }}
                              />
                            }
                            label="NI"
                          />
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span
                            style={{ fontSize: "16px", marginRight: "0.5rem", fontWeight: "bold" }}
                          >
                            Weight:
                          </span>
                          <input
                            className="weightClass"
                            type="number"
                            name="practitionerAndPatientDetails.patientWeight"
                            value={formik.values?.practitionerAndPatientDetails?.patientWeight}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                          <span
                            style={{ fontSize: "16px", marginRight: "0.5rem", fontWeight: "bold" }}
                          >
                            lbs.&nbsp;
                          </span>
                          <FormControlLabel
                            control={
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name="practitionerAndPatientDetails.patientWeightNI"
                                checked={
                                  formik.values?.practitionerAndPatientDetails?.patientWeightNI
                                }
                                onBlur={formik.handleSubmit}
                                onChange={(e) => {
                                  console.log("e..", e.target.checked);
                                  formik.setFieldValue(
                                    "practitionerAndPatientDetails.patientWeightNI",
                                    e.target.checked
                                  );
                                }}
                              />
                            }
                            label="NI"
                          />
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          flexWrap: "wrap",
                        }}
                        className="flex-dir-row eigth-info-common-htn-row"
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ fontSize: "16px", color: "red" }}>HTN:&nbsp;&nbsp;</span>

                          <RadioGroup
                            sx={12}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="practitionerAndPatientDetails.patientHtn"
                            value={formik.values.practitionerAndPatientDetails?.patientHtn}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                            style={{ flexWrap: "nowrap" }}
                          >
                            <FormControlLabel
                              className="p-0 ml-0"
                              value="Yes"
                              control={<Radio />}
                              label="Yes"
                            />
                            <FormControlLabel
                              className="p-0"
                              value="No"
                              control={<Radio />}
                              label="No"
                            />
                          </RadioGroup>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", flexGrow: "1" }}>
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",

                              fontSize: "16px",
                              marginRight: "0.5rem",
                              color: "red",
                            }}
                          >
                            Cautions:
                          </span>
                          <input
                            type="text"
                            className="CautionsClass"
                            name="practitionerAndPatientDetails.patientCautions"
                            value={formik.values?.practitionerAndPatientDetails?.patientCautions}
                            onBlur={formik.handleSubmit}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            );
          }}
          {/* <div style={{ float: "right" }}>
            <SoftButton
              className="nx"
              type="submit"
              variant="gradient"
              color="dark"
              onClick={formik.handleSubmit}
            >
              Next
            </SoftButton>
          </div> */}
        </Formik>
      </Grid>
    </div>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
