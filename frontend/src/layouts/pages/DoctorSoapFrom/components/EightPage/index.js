import { Grid, Radio, RadioGroup } from "@mui/material";
import SoftBox from "components/SoftBox";
import React, { useEffect, useState } from "react";
import SoftTypography from "components/SoftTypography";
import PagesHeaderCell from "layouts/applications/analytics/components/PagesHeaderCell";
import PagesBodyCell from "layouts/applications/analytics/components/PagesBodyCell";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { FormControl, FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";
import { FieldArray, Formik } from "formik";
import Box from "@mui/material/Box";
import { getDoctorShopFormDataAction, doctorShopFormDataAction } from "store/actions/actions";
import { useDispatch } from "react-redux";
import "./style.css";
import InfoCommon from "../InfoCommon";
import DescriptionComponent from "./component/DescriptionComponent";
import NextButton from "../../NextButton";
import initialValues from "./schemas/initialValues";
import form from "./schemas/form";
import TherapiesTable from "./component/TherapiesTable";
import Table1 from "./component/Table1";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import PropTypes from "prop-types";
import { MinusCircleOutlined } from "@ant-design/icons";
import SignaturePad from "react-signature-canvas";

function index({ stepIndex, setActiveStep }) {
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);

  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginOfc(true);
  }

  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const diagnosisDataRedux = useSelector((state) => state.auth.doctorShopForm?.page3);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page7);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const [diagnosisData, setDiagnosisData] = useState(diagnosisDataRedux);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);

  console.log("soapFormPage1", soapFormPage1);
  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /* practitionerId: UserId, */ token:token }));
  // }, []);
  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId: UserId, */ token: token,
      })
    );
  }, [stepIndex]);
  const { followuptDate, doctorInitial } = form.formField;
  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId: UserId,*/
        token: token,
      })
    );
  }, [selectedPatientId, soappatientId]);
  useEffect(() => {
    setDiagnosisData(diagnosisDataRedux);
  }, [diagnosisDataRedux]);

  const form8FormikData = doctorShopFromDetails
    ? doctorShopFromDetails
    : [
      {
        ...initialValues.eightPage[0],
        patientDetailsForm: {
          ...initialValues.eightPage[0].patientDetailsForm,
          PractitionerName: userdata?.name,
          patientName: soapFormPage1?.name,
        },
      },
    ];

  return (
    <div>
      <SoftBox lineHeight={0}>
        <Formik
          initialValues={{
            eightPage: [...form8FormikData],
            diagnosisData: diagnosisData,
          }}
          enableReinitialize
          onSubmit={(values) => {
            const data = {
              patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
                ? patientSoapFormDetail.patientId
                : selectedPatientId
                  ? selectedPatientId
                  : soappatientId,
              // practitionerId: UserId,
              page7: values.eightPage,
              page3: values.diagnosisData,
            };
            dispatch(
              doctorShopFormDataAction({
                data: data,
                token: token,
              })
            );
            setActiveStep(stepIndex + 1);
          }}
        >
          {(formik) => {
            console.log("formik", formik);
            return (
              <>
                {/* <Box>
                  <InfoCommon formik={formik} />
                </Box> */}
                <Grid>
                  <FieldArray
                    name="eightPage"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.eightPage.map((data, index) => {
                            return (
                              <>
                                {index > 0 && (
                                  <Grid item xs={12} sm={12} lg={12} mb={1}>
                                    <SoftBox
                                      display="flex"
                                      flexDirection="row"
                                      justifyContent="center"
                                    // height="100%"
                                    >
                                      <SoftTypography mt={3}>
                                        <p style={{ fontWeight: "bold", textAlign: "center" }}>
                                          Click the Minus-Sign to remove Form
                                        </p>
                                      </SoftTypography>
                                    </SoftBox>
                                    <SoftBox
                                      display="flex"
                                      flexDirection="row"
                                      justifyContent="center"
                                      height="100%"
                                    >
                                      <MinusCircleOutlined
                                        style={{
                                          cursor: "pointer",
                                          fontSize: "25px",
                                          color: "#344767",
                                        }}
                                        onClick={() => arrayhelpers.remove(index)}
                                      />
                                    </SoftBox>
                                  </Grid>
                                )}
                                <Grid
                                  container
                                  spacing={2}
                                  mb={2}
                                  className="eigth-page-common-info-grid"
                                >
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
                                          name={`eightPage[${index}]patientDetailsForm.PractitionerName`}
                                          value={
                                            formik.values?.eightPage[index]?.patientDetailsForm
                                              ?.PractitionerName
                                          }
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
                                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                                          NPI:&nbsp;&nbsp;
                                        </span>
                                        <input
                                          type="text"
                                          className="NPIClass"
                                          name={`eightPage[${index}]patientDetailsForm.NPI`}
                                          value={
                                            formik.values?.eightPage[index].patientDetailsForm?.NPI
                                          }
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
                                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                                          TIN:&nbsp;&nbsp;
                                        </span>
                                        <input
                                          type="text"
                                          className="TINClass"
                                          name={`eightPage[${index}]patientDetailsForm.TIN`}
                                          value={
                                            formik.values?.eightPage[index].patientDetailsForm?.TIN
                                          }
                                          onChange={formik.handleChange}
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
                                          name={`eightPage[${index}]patientDetailsForm.hourlyRate`}
                                          value={
                                            formik.values?.eightPage[index].patientDetailsForm
                                              ?.hourlyRate
                                          }
                                          onChange={formik.handleChange}
                                        />
                                      </div>
                                    </SoftBox>
                                  </Grid>

                                  <Grid item sm={8} xs={12}>
                                    <Grid item>
                                      <Grid container>
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
                                            Client Name:
                                          </span>
                                          <input
                                            type="text"
                                            className="patitentNameClass"
                                            onChange={formik.handleChange}
                                            name={`eightPage[${index}]patientDetailsForm.patientName`}
                                            value={
                                              formik.values?.eightPage[index].patientDetailsForm
                                                ?.patientName
                                            }
                                          />
                                        </div>
                                        <div className="eigth-info-common-patient-type-container">
                                          <FormControlLabel
                                            control={
                                              <Checkbox
                                                style={{ marginLeft: "5px" }}
                                                checked={
                                                  formik.values?.eightPage[index].patientDetailsForm
                                                    ?.isNewPatient
                                                }
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `eightPage[${index}]patientDetailsForm.isNewPatient`,
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
                                                checked={
                                                  formik.values?.eightPage[index].patientDetailsForm
                                                    ?.isFollowUpPatient
                                                }
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `eightPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                                checked={
                                                  formik.values?.eightPage[index].patientDetailsForm
                                                    ?.isNewComplaintPatient
                                                }
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `eightPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                              name={`eightPage[${index}]patientDetailsForm.patientVisitNumber`}
                                              value={
                                                formik.values?.eightPage[index].patientDetailsForm
                                                  ?.patientVisitNumber
                                              }
                                              onChange={formik.handleChange}
                                            />
                                          </Grid>
                                          <Grid
                                            item
                                            lg={4.5}
                                            xs={12}
                                            md={8}
                                            className="TodaysDateClass"
                                          >
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
                                              // max={date}
                                              type="date"
                                              className="todayDate1"
                                              name={`eightPage[${index}]patientDetailsForm.patientTodaysDate`}
                                              value={
                                                formik.values?.eightPage[index].patientDetailsForm
                                                  ?.patientTodaysDate
                                              }
                                              onChange={formik.handleChange}
                                            />
                                          </Grid>

                                          <Grid
                                            lg={4.5}
                                            xs={12}
                                            md={12}
                                            className="NextReExamClass"
                                          >
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
                                              name={`eightPage[${index}]patientDetailsForm.patientNextReExam`}
                                              value={
                                                formik.values?.eightPage[index].patientDetailsForm
                                                  ?.patientNextReExam
                                              }
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
                                                // max={date}
                                                type="date"
                                                name={`eightPage[${index}]patientDetailsForm.patientDob`}
                                                value={
                                                  formik.values?.eightPage[index].patientDetailsForm
                                                    ?.patientDob
                                                }
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
                                              style={{
                                                fontSize: "16px",
                                                marginRight: "0.5rem",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              Age:
                                            </span>
                                            <input
                                              className="AgeClass"
                                              type="number"
                                              name={`eightPage[${index}]patientDetailsForm.patientAge`}
                                              value={
                                                formik.values?.eightPage[index].patientDetailsForm
                                                  ?.patientAge
                                              }
                                              onChange={formik.handleChange}
                                            />
                                            &nbsp;
                                            <span
                                              style={{
                                                fontSize: "16px",
                                                marginRight: "0.5rem",
                                                fontWeight: "bold",
                                              }}
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
                                              style={{
                                                fontSize: "16px",
                                                marginRight: "0.5rem",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              Height:
                                            </span>
                                            <input
                                              className="HeightClass"
                                              type="number"
                                              name={`eightPage[${index}]patientDetailsForm.patientHeight`}
                                              value={
                                                formik.values?.eightPage[index].patientDetailsForm
                                                  ?.patientHeight
                                              }
                                              onChange={formik.handleChange}
                                            />
                                            <span
                                              style={{ fontSize: "16px", marginRight: "0.5rem" }}
                                            >
                                              &ldquo;&nbsp;
                                            </span>
                                            <FormControlLabel
                                              control={
                                                <Checkbox
                                                  style={{ marginLeft: "5px" }}
                                                  checked={
                                                    formik.values?.eightPage[index]
                                                      .patientDetailsForm?.patientHeightNI
                                                  }
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `eightPage[${index}]patientDetailsForm.patientHeightNI`,
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
                                              style={{
                                                fontSize: "16px",
                                                marginRight: "0.5rem",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              Weight:
                                            </span>
                                            <input
                                              className="weightClass"
                                              type="number"
                                              name={`eightPage[${index}]patientDetailsForm.patientWeight`}
                                              value={
                                                formik.values?.eightPage[index].patientDetailsForm
                                                  ?.patientWeight
                                              }
                                              onChange={formik.handleChange}
                                            />
                                            <span
                                              style={{
                                                fontSize: "16px",
                                                marginRight: "0.5rem",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              lbs.&nbsp;
                                            </span>
                                            <FormControlLabel
                                              control={
                                                <Checkbox
                                                  style={{ marginLeft: "5px" }}
                                                  name={`eightPage[${index}]patientDetailsForm.patientWeightNI`}
                                                  checked={
                                                    formik.values?.eightPage[index]
                                                      .patientDetailsForm?.patientWeightNI
                                                  }
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `eightPage[${index}]patientDetailsForm.patientWeightNI`,
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
                                            <span style={{ fontSize: "16px", color: "red" }}>
                                              HTN:&nbsp;&nbsp;
                                            </span>

                                            <RadioGroup
                                              sx={12}
                                              row
                                              aria-labelledby="demo-row-radio-buttons-group-label"
                                              name={`eightPage[${index}]patientDetailsForm.patientHtn`}
                                              value={formik.values.patientDetailsForm?.patientHtn}
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
                                          <div
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              flexGrow: "1",
                                            }}
                                          >
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
                                              name={`eightPage[${index}]patientDetailsForm.patientCautions`}
                                              value={
                                                formik.values?.eightPage[index].patientDetailsForm
                                                  ?.patientCautions
                                              }
                                              onChange={formik.handleChange}
                                            />
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>

                                <SoftTypography
                                  variant="h6"
                                  fontWeight="bold"
                                  style={{ marginTop: "15px", fontSize: "15px" }}
                                >
                                  Follow-up Daily Chart Incorporation by Reference:
                                </SoftTypography>
                                {/* <SoftTypography variant="button" fontWeight="regular" color="text">
                    DYSFUNCTION(D)/COMPENSATION(C)
                  </SoftTypography> */}
                                <SoftTypography variant="h6" fontWeight="" color="text" mt={1}>
                                  For follow-up daily charts, refer back to and reference most
                                  recent Exam form on file (New Patient Exam or Established Patient
                                  Re-exam SOAP Notes) for Symptoms, Exam Results, Diagnosis, and
                                  Treatment Plan. Unless otherwise annotated here, the SOAP Notes
                                  and associated Treatment Plan from the most recent evaluation or
                                  re-evaluation were followed. Exceptions, deviations, changes,
                                  additions, deletions, substitutions or modifications to the most
                                  recent evaluation/re-evaluation will be annotated on this note
                                  below by the attending doctor. Doctor assistants will work with
                                  patients in accordance with the doctor&apos;s treatment plan as
                                  documented in the most recent exam/re-exam and per any of the
                                  doctor&apos;s modifications indicated below (doctor dates and
                                  initial/sign each daily visit).
                                </SoftTypography>
                                <Grid container className="doctorSignMain">
                                  <Grid item xs={8} sm={6} className="doctorSign mb-2">
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                      Date:
                                    </label>
                                    <input
                                      name={followuptDate.name}
                                      type={followuptDate.type}
                                      className="todayDate inputClass"
                                      value={formik.values?.eightPage[index]?.followuptDateV}
                                      onChange={(e) => {
                                        formik.setFieldValue(
                                          `eightPage[${index}].followuptDateV`,
                                          e.target.value
                                        );
                                      }}
                                    // value={formik.values.followuptDateV}
                                    // onChange={formik.handleChange}
                                    />

                                    {/* <FormField
                              type={followuptDate.type}
                              name={followuptDate.name}
                              value={formik.values.followuptDateV}
                              onChange={formik.handleChange}
                              className="todayDate inputClass"                        
                              /> */}
                                  </Grid>
                                  <Grid xs={8} sm={6} item className="doctorSign">
                                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                                      Practitioner Initial or Signature:
                                    </label>
                                    {/* <input
                                      type={doctorInitial.type}
                                      name={doctorInitial.name}
                                      // value={formik.values.doctorInitialV}
                                      // onChange={formik.handleChange}
                                      value={formik.values?.eightPage[index]?.doctorInitialV}
                                      onChange={(e) => {
                                        formik.setFieldValue(
                                          `eightPage[${index}].doctorInitialV`,
                                          e.target.value
                                        );
                                      }}
                                      className="todayDate inputClass"
                                    /> */}

                                    {formik.values?.eightPage[index]?.doctorInitial !== "" ? (
                                      <Grid item xs={12} lg={6} sm={6} className="parentClass">
                                        <img src={formik.values?.eightPage[index]?.doctorInitial} />
                                        <h5 style={{ fontSize: "15px" }}>Sign here</h5>
                                      </Grid>
                                    ) : (
                                      <Grid item xs={12} md={6} lg={4}>
                                        <SignaturePad
                                          canvasProps={{ width: 240, height: 150 }}
                                          ref={sigPad}
                                          penColor="black"
                                          backgroundColor="#f1f1f1"
                                          placeholder="sign"
                                          onBegin={(e) => onBeginfun1(e.isTrusted)}
                                        />
                                        <div className="saveAndClear">
                                          <SoftButton
                                            onClick={clear}
                                            style={{ marginRight: "10px" }}
                                            disabled={signBeginOfc}
                                          >
                                            Clear
                                          </SoftButton>
                                          <SoftButton
                                            disabled={signBeginOfc}
                                            onClick={() => {
                                              formik.setFieldValue(
                                                `eightPage[${index}].doctorInitial`,
                                                sigPad.current
                                                  .getTrimmedCanvas()
                                                  .toDataURL("image/png")
                                              );
                                            }}
                                          >
                                            Save
                                          </SoftButton>
                                        </div>
                                      </Grid>
                                    )}

                                    {/* <FormField
                              type={doctorInitial.type}
                              name={doctorInitial.name}
                              value={formik.values.doctorInitialV}
                              onChange={formik.handleChange} 
                              className="todayDate inputClass"
                            />   */}
                                  </Grid>
                                </Grid>
                                <SoftBox py={1} px={2}>
                                  <DescriptionComponent formik={formik} form={form} index={index} />
                                  <TherapiesTable formik={formik} form={form} index={index} />
                                  <Table1 formik={formik} form={form} index={index} />
                                </SoftBox>
                              </>
                            );
                          })}
                          <Box mt={1}>
                            <div>
                              <SoftButton
                                type="button"
                                // className="posturrbtn"
                                variant="gradient"
                                color="dark"
                                onClick={
                                  () =>
                                    arrayhelpers.insert(
                                      formik.values.eightPage.length + 1,
                                      // formik.values.eightPage[formik.values.eightPage.length - 1]

                                      {
                                        ...formik.values.eightPage[
                                        formik.values.eightPage.length - 1
                                        ],
                                        patientDetailsForm: {
                                          ...formik.values.eightPage[
                                            formik.values.eightPage.length - 1
                                          ].patientDetailsForm,
                                          PractitionerName: userdata?.name,
                                          patientName: soapFormPage1?.name,
                                        },
                                      }
                                    )
                                  // arrayhelpers.push(formik.values.excerciseDetails)
                                }
                              >
                                Add new page
                              </SoftButton>
                            </div>
                          </Box>
                        </>
                      );
                    }}
                  />
                </Grid>

                <div style={{ float: "right" }}>
                  <SoftButton
                    variant="gradient"
                    color="dark"
                    onClick={() => {
                      if (formik.dirty) {
                        formik.handleSubmit();
                      } else {
                        setActiveStep(stepIndex + 1);
                      }
                    }}
                    className="nxt1"
                  >
                    Next
                  </SoftButton>
                </div>
              </>
            );
          }}
        </Formik>
      </SoftBox>
    </div>
  );
}
index.propTypes = {
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
