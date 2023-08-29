// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import "react-phone-input-2/lib/style.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import InfoCommon from "../InfoCommon";
import ReportComponent from "./component/reportsComponent";
import { Formik, FieldArray } from "formik";
import form from "./schemas/form";
import { MinusCircleOutlined } from "@ant-design/icons";
import Box from "@mui/material/Box";
import initialValues from "./schemas/initialValues";
import { getDoctorShopFormDataAction, doctorShopFormDataAction } from "store/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";

const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function ForteenthPage({ formData, stepIndex, setActiveStep }) {
  const [dominantHandData, setDominantHandData] = useState([]);
  const [fourteenthFormData, setfourteenthFormData] = useState([]);
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const token = useSelector((state) => state.auth.auth.idToken);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page13);
  const UserId = useSelector((state) => state.auth.auth._id);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({
  //       patientId: soappatientId,
  //       /* practitionerId: UserId, */ token: token,
  //     })
  //   );
  // }, []);
  useEffect(() => {
    console.log("running log 14.", doctorShopFromDetails);
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

  const handleDominantHandChange = (event) => {
    const index = dominantHandData.indexOf(event.target.value);
    if (index === -1) {
      setDominantHandData([...dominantHandData, event.target.value]);
    } else {
      setDominantHandData(dominantHandData.filter((hand) => hand !== event.target.value));
    }
  };

  const { ImprovedCheck, ImprovedInput, noChange, worstCheck, worstInput } = form.formField;

  const form13FormikData = doctorShopFromDetails
    ? doctorShopFromDetails?.forteenthPage
    : [
        {
          ...initialValues.forteenthPage[0],
          patientDetailsForm: {
            ...initialValues.forteenthPage[0].patientDetailsForm,
            PractitionerName: userdata?.name,
            patientName: soapFormPage1?.name,
          },
        },
      ];

  return (
    <SoftBox>
      <SoftBox mt={1.5}>
        <Formik
          // initialValues={{ ...initialValues, ...doctorShopFromDetails }}
          initialValues={{
            forteenthPage: [...form13FormikData],
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
              page13: values,
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
            setfourteenthFormData(formik.values);
            return (
              <>
                {/* <InfoCommon formik={formik} /> */}
                <FieldArray
                  name="forteenthPage"
                  render={(arrayhelpers, push) => {
                    return (
                      <>
                        {formik.values.forteenthPage.map((data, index) => {
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
                                spacing={3}
                                className="subjective-complaints-grid-container"
                              >
                                <Grid
                                  container
                                  spacing={2}
                                  mb={2}
                                  sx={{ m: 0, ml: 2 }}
                                  // className="eigth-page-common-info-grid"
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
                                          name={`forteenthPage[${index}]patientDetailsForm.PractitionerName`}
                                          value={
                                            formik.values?.forteenthPage[index]?.patientDetailsForm
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
                                          name={`forteenthPage[${index}]patientDetailsForm.NPI`}
                                          value={
                                            formik.values?.forteenthPage[index].patientDetailsForm
                                              ?.NPI
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
                                          name={`forteenthPage[${index}]patientDetailsForm.TIN`}
                                          value={
                                            formik.values?.forteenthPage[index].patientDetailsForm
                                              ?.TIN
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
                                          name={`forteenthPage[${index}]patientDetailsForm.hourlyRate`}
                                          value={
                                            formik.values?.forteenthPage[index].patientDetailsForm
                                              ?.hourlyRate
                                          }
                                          onChange={formik.handleChange}
                                        />
                                      </div>
                                    </SoftBox>
                                  </Grid>

                                  <Grid item sm={8} xs={12} mt={4}>
                                    {/* <Grid item> */}
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
                                          Patient Name:
                                        </span>
                                        <input
                                          type="text"
                                          className="patitentNameClass"
                                          onChange={formik.handleChange}
                                          name={`forteenthPage[${index}]patientDetailsForm.patientName`}
                                          value={
                                            formik.values?.forteenthPage[index].patientDetailsForm
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
                                                formik.values?.forteenthPage[index]
                                                  .patientDetailsForm?.isNewPatient
                                              }
                                              onChange={(e) => {
                                                formik.setFieldValue(
                                                  `forteenthPage[${index}]patientDetailsForm.isNewPatient`,
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
                                                formik.values?.forteenthPage[index]
                                                  .patientDetailsForm?.isFollowUpPatient
                                              }
                                              onChange={(e) => {
                                                formik.setFieldValue(
                                                  `forteenthPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                                formik.values?.forteenthPage[index]
                                                  .patientDetailsForm?.isNewComplaintPatient
                                              }
                                              onChange={(e) => {
                                                formik.setFieldValue(
                                                  `forteenthPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                            name={`forteenthPage[${index}]patientDetailsForm.patientVisitNumber`}
                                            value={
                                              formik.values?.forteenthPage[index].patientDetailsForm
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
                                            name={`forteenthPage[${index}]patientDetailsForm.patientTodaysDate`}
                                            value={
                                              formik.values?.forteenthPage[index].patientDetailsForm
                                                ?.patientTodaysDate
                                            }
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
                                            name={`forteenthPage[${index}]patientDetailsForm.patientNextReExam`}
                                            value={
                                              formik.values?.forteenthPage[index].patientDetailsForm
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
                                              name={`forteenthPage[${index}]patientDetailsForm.patientDob`}
                                              value={
                                                formik.values?.forteenthPage[index]
                                                  .patientDetailsForm?.patientDob
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
                                            name={`forteenthPage[${index}]patientDetailsForm.patientAge`}
                                            value={
                                              formik.values?.forteenthPage[index].patientDetailsForm
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
                                            name={`forteenthPage[${index}]patientDetailsForm.patientHeight`}
                                            value={
                                              formik.values?.forteenthPage[index].patientDetailsForm
                                                ?.patientHeight
                                            }
                                            onChange={formik.handleChange}
                                          />
                                          <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>
                                            &ldquo;&nbsp;
                                          </span>
                                          <FormControlLabel
                                            control={
                                              <Checkbox
                                                style={{ marginLeft: "5px" }}
                                                checked={
                                                  formik.values?.forteenthPage[index]
                                                    .patientDetailsForm?.patientHeightNI
                                                }
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `forteenthPage[${index}]patientDetailsForm.patientHeightNI`,
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
                                            name={`forteenthPage[${index}]patientDetailsForm.patientWeight`}
                                            value={
                                              formik.values?.forteenthPage[index].patientDetailsForm
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
                                                name={`forteenthPage[${index}]patientDetailsForm.patientWeightNI`}
                                                checked={
                                                  formik.values?.forteenthPage[index]
                                                    .patientDetailsForm?.patientWeightNI
                                                }
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `forteenthPage[${index}]patientDetailsForm.patientWeightNI`,
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
                                            name={`forteenthPage[${index}]patientDetailsForm.patientHtn`}
                                            value={
                                              formik.values?.forteenthPage[index].patientDetailsForm
                                                ?.patientHtn
                                            }
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
                                            name={`forteenthPage[${index}]patientDetailsForm.patientCautions`}
                                            value={
                                              formik.values?.forteenthPage[index].patientDetailsForm
                                                ?.patientCautions
                                            }
                                            onChange={formik.handleChange}
                                          />
                                        </div>
                                      </div>
                                    </Grid>
                                    {/* </Grid> */}
                                  </Grid>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  lg={4}
                                  md={6}
                                  className="subjective-complaints-text-container"
                                >
                                  <SoftTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="button"
                                    mt={1}
                                  >
                                    Subjective Complaints:
                                  </SoftTypography>
                                </Grid>

                                <Grid
                                  item
                                  xs={12}
                                  lg={3}
                                  md={6}
                                  style={{ display: "flex", flexDirection: "row" }}
                                  className="subjective-complaints-followup-container"
                                >
                                  <SoftTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="button"
                                    mt={1}
                                    mr={2}
                                  >
                                    (Follow-Up)
                                  </SoftTypography>
                                  <FormControl>
                                    <FormGroup>
                                      <FormControlLabel
                                        label="Improved"
                                        control={
                                          <Checkbox
                                            name={ImprovedCheck.name}
                                            // value={formik.values.ImprovedCheck}
                                            // onChange={formik.handleChange}
                                            checked={
                                              formik.values?.forteenthPage[index]?.ImprovedCheck
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `forteenthPage[${index}].ImprovedCheck`,
                                                e.target.checked
                                              )
                                            }
                                          />
                                        }
                                      />
                                    </FormGroup>
                                  </FormControl>
                                  <input
                                    // style={{width:"20px"}}
                                    type={ImprovedInput.type}
                                    className="improve-input"
                                    name={ImprovedInput.name}
                                    // value={formik.values.ImprovedInput}
                                    // onChange={formik.handleChange}
                                    value={formik.values?.forteenthPage[index]?.ImprovedInput}
                                    onChange={(e) =>
                                      formik.setFieldValue(
                                        `forteenthPage[${index}].ImprovedInput`,
                                        e.target.value
                                      )
                                    }
                                  />

                                  <SoftTypography ml={1} mr={1}>
                                    %
                                  </SoftTypography>
                                </Grid>
                                <Grid
                                  item
                                  xs={12}
                                  lg={3}
                                  md={6}
                                  style={{ display: "flex", flexDirection: "row" }}
                                  className="subjective-complaints-nochange-container"
                                >
                                  <FormControl className="no-change">
                                    <FormGroup>
                                      <FormControlLabel
                                        label="No Change"
                                        control={
                                          <Checkbox
                                            name={noChange.name}
                                            // value={formik.values.noChange}
                                            // onChange={formik.handleChange}
                                            checked={formik.values?.forteenthPage[index]?.noChange}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `forteenthPage[${index}].noChange`,
                                                e.target.checked
                                              )
                                            }
                                          />
                                        }
                                      />
                                    </FormGroup>
                                  </FormControl>
                                  <FormControl>
                                    <FormGroup>
                                      <FormControlLabel
                                        label="Worse"
                                        control={
                                          <Checkbox
                                            name={worstCheck.name}
                                            // value={formik.values.worstCheck}
                                            // onChange={formik.handleChange}
                                            checked={
                                              formik.values?.forteenthPage[index]?.worstCheck
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `forteenthPage[${index}].worstCheck`,
                                                e.target.checked
                                              )
                                            }
                                          />
                                        }
                                      />
                                    </FormGroup>
                                  </FormControl>
                                  <input
                                    type={worstInput.type}
                                    className="improve-input"
                                    name={worstInput.name}
                                    // value={formik.values.worstInput}
                                    // onChange={formik.handleChange}
                                    value={formik.values?.forteenthPage[index]?.worstInput}
                                    onChange={(e) =>
                                      formik.setFieldValue(
                                        `forteenthPage[${index}].worstInput`,
                                        e.target.value
                                      )
                                    }
                                  />
                                  <SoftTypography pl={2}>%</SoftTypography>
                                </Grid>

                                <Grid item xs={12} sm={12}>
                                  <Grid>
                                    <SoftTypography variant="h6" fontWeight="bold" color="button">
                                      Pt reports
                                    </SoftTypography>
                                  </Grid>

                                  <Grid>
                                    <ReportComponent formik={formik} form={form} index={index} />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </>
                          );
                        })}
                        <Box mt={1}>
                          <div>
                            <SoftButton
                              type="button"
                              variant="gradient"
                              color="dark"
                              onClick={
                                () => {
                                  arrayhelpers.insert(formik.values.forteenthPage.length + 1, {
                                    ...formik.values.forteenthPage[
                                      formik.values.forteenthPage.length - 1
                                    ],
                                    patientDetailsForm: {
                                      ...formik.values.forteenthPage[
                                        formik.values.forteenthPage.length - 1
                                      ].patientDetailsForm,
                                      PractitionerName: userdata?.name,
                                      patientName: soapFormPage1?.name,
                                    },
                                  });
                                }
                                // arrayhelpers.push(formik.values.excerciseDetails)
                              }
                            >
                              Add new page
                            </SoftButton>
                          </div>
                        </Box>
                        <div style={{ float: "right" }}>
                          <SoftButton
                            // disabled={isSubmitting}
                            variant="gradient"
                            color="dark"
                            className="nxt1"
                            // label="Next"
                            onClick={() => {
                              if (formik.dirty) {
                                formik.handleSubmit();
                              } else {
                                setActiveStep(stepIndex + 1);
                              }
                            }}
                          >
                            Next
                          </SoftButton>
                        </div>
                      </>
                    );
                  }}
                />
              </>
            );
          }}
        </Formik>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for ForteenthPage
ForteenthPage.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ForteenthPage;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 700;
  ${media.miniTab} {
    font-size: 16px;
  }
  ${media.mobile} {
    font-size: 15px;
  }
`;
const ImageLabel = styled(Label)`
  justify-content: center;
  display: flex;

  height: 100px;
  cursor: pointer;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
`;

const Preview = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

const LabelButton = styled(Label)`
  justify-content: center;
`;

const Input = styled.input`
  display: none;
  visibility: hidden;
  height: 40px;
  width: 350px;
  font-weight: 700;
  padding: 5px;
  font-size: 17px;
  ${media.miniTab} {
    width: 250px;
    font-size: 15px;
  }
  ${media.mobile} {
    width: 200px;
  }
`;
