// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { Checkbox, Divider, FormControlLabel, MenuItem, Radio, RadioGroup } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/DutiesPerformed/FormField/index";
import InfoCommon from "../InfoCommon";
import { useSelector } from "react-redux";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// NewUser page components
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import VBAICheckboxes from "./component/VBAICheckboxes";
import CACheckboxes from "./component/CACheckbox";
import CardiacCheckboxes from "./component/CardiacCheckboxes";
import CVACheckboxes from "./component/CVACheckboxes";
import { Formik, FieldArray } from "formik";
import initialValues from "./schemas/initialValues";
import form from "./schemas/form";
import NextButton from "../../NextButton";
import { useDispatch } from "react-redux";
import { MinusCircleOutlined } from "@ant-design/icons";
import Box from "@mui/material/Box";

import {
  getDoctorShopFormDataAction,
  doctorShopFormDataAction,
  clientIntakeformDetails,
  clientIntakeFormGet,
} from "store/actions/actions";
import SoftButton from "components/SoftButton";

// import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function TenthPage({ formData, stepIndex, setActiveStep }) {
  const [tenFormData, setTenFormData] = useState([]);
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page5);
  // const clientIntakeDetailpage11 = useSelector((state) => state.auth.clientIntakeForm?.page6);
  // const clientIntakeformDetails3 = useSelector((state) => state.auth.clientIntakeForm?.page3);
  const clientIntakeformDetails7 = useSelector((state) => state.auth.clientIntakeForm?.page7);
  const doctorShopFormDataPage9 = useSelector(
    (state) => state.auth?.doctorShopForm?.page9?.tenthPage
  );
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  // const page9Data = useSelector(state => state.auth.doctorShopForm?.page9);
  // const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page9)

  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, /* practitionerId:  UserId */ token: token }));
  // }, []);
  // useEffect(() => {
  //   console.log("running log 13.");
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, /* practitionerId: UserId, */ token: token }));
  // }, [stepIndex]);

  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({
  //       patientId: soappatientId,
  //       /*practitionerId:UserId */ token: token,
  //     })
  //   );
  // }, []);
  useEffect(() => {
    console.log("running log 9.");
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId : UserId */ token: token,
      })
    );
  }, [stepIndex]);

  const form10FormikData = doctorShopFormDataPage9
    ? doctorShopFormDataPage9
    : [
        {
          ...initialValues.tenthPage[0],
          patientDetailsForm: {
            ...initialValues.tenthPage[0].patientDetailsForm,
            PractitionerName: userdata?.name,
            patientName: soapFormPage1?.name,
          },
        },
      ];

  return (
    <SoftBox>
      {/* <SoftBox lineHeight={0}>
              <SoftTypography variant="h4" fontWeight="bold">
                Duties Performed Under Duress at Work and Home
              </SoftTypography>
              <h1>dsdds</h1>
              <InfoCommon />

              <SoftTypography variant="button" fontWeight="regular" color="text">
                Mandatory informations
              </SoftTypography>
            </SoftBox>
            <SoftTypography variant="h6" fontWeight="bold" color="text">
              Patient Intake and Informed Consent (Insert)
            </SoftTypography>
            <SoftTypography variant="h6" fontWeight="bold" color="text" mt={1}>
              Med Hx Review (see details in Patient Intake Form or below in Subjective for additional
              details):
            </SoftTypography>
            <SoftBox mt={1}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Grid item xs={12} sm={12}>
                    <SoftTypography variant="h6" fontWeight="bold" color="text" mt={1}>
                      VBAI:
                    </SoftTypography>
                    <VBAICheckboxes formData={formData} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <SoftTypography variant="h6" fontWeight="bold" color="text" mt={1}>
                      CA:
                    </SoftTypography>
                    <CACheckboxes formData={formData} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <SoftTypography variant="h6" fontWeight="bold" color="text" mt={1}>
                    CARDIAC:
                    </SoftTypography>
                    <CardiacCheckboxes formData={formData} />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Grid item xs={12} sm={12}>
                    <SoftTypography variant="h6" fontWeight="bold" color="text" mt={1}>
                      CVA:
                    </SoftTypography>
                  <CVACheckboxes formData={formData} />
                  </Grid>
                </Grid>
              </Grid>
            </SoftBox> */}
      <Formik
        initialValues={{
          tenthPage: [...form10FormikData],
        }}
        // initialValues={{
        //   ...initialValues,
        //   ...clientIntakeformDetails,
        //   // ...clientIntakeDetailpage11,
        //   // ...clientIntakeformDetails3,
        //   ...doctorShopFormDataPage9,
        //   ...clientIntakeformDetails7,
        // }}
        enableReinitialize
        onSubmit={(values) => {
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            page9: values,
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
          // setTenFormData(formik.values);
          return (
            <>
              <SoftBox lineHeight={0}>
                {/* <SoftTypography variant="h4" fontWeight="bold">
                Duties Performed Under Duress at Work and Home
              </SoftTypography>
              <h1>dsdds</h1> */}
                {/* <InfoCommon formik={formik} /> */}
              </SoftBox>

              <FieldArray
                name="tenthPage"
                render={(arrayhelpers, push) => {
                  console.log("formik.values", formik.values);
                  return (
                    <>
                      {formik.values.tenthPage.map((data, index) => {
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
                                      name={`tenthPage[${index}]patientDetailsForm.PractitionerName`}
                                      value={
                                        formik.values?.tenthPage[index]?.patientDetailsForm
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
                                      name={`tenthPage[${index}]patientDetailsForm.NPI`}
                                      value={
                                        formik.values?.tenthPage[index].patientDetailsForm?.NPI
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
                                      name={`tenthPage[${index}]patientDetailsForm.TIN`}
                                      value={
                                        formik.values?.tenthPage[index].patientDetailsForm?.TIN
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
                                      name={`tenthPage[${index}]patientDetailsForm.hourlyRate`}
                                      value={
                                        formik.values?.tenthPage[index].patientDetailsForm
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
                                        name={`tenthPage[${index}]patientDetailsForm.patientName`}
                                        value={
                                          formik.values?.tenthPage[index].patientDetailsForm
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
                                              formik.values?.tenthPage[index].patientDetailsForm
                                                ?.isNewPatient
                                            }
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `tenthPage[${index}]patientDetailsForm.isNewPatient`,
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
                                              formik.values?.tenthPage[index].patientDetailsForm
                                                ?.isFollowUpPatient
                                            }
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `tenthPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                              formik.values?.tenthPage[index].patientDetailsForm
                                                ?.isNewComplaintPatient
                                            }
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `tenthPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                          name={`tenthPage[${index}]patientDetailsForm.patientVisitNumber`}
                                          value={
                                            formik.values?.tenthPage[index].patientDetailsForm
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
                                          name={`tenthPage[${index}]patientDetailsForm.patientTodaysDate`}
                                          value={
                                            formik.values?.tenthPage[index].patientDetailsForm
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
                                          name={`tenthPage[${index}]patientDetailsForm.patientNextReExam`}
                                          value={
                                            formik.values?.tenthPage[index].patientDetailsForm
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
                                            name={`tenthPage[${index}]patientDetailsForm.patientDob`}
                                            value={
                                              formik.values?.tenthPage[index].patientDetailsForm
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
                                          name={`tenthPage[${index}]patientDetailsForm.patientAge`}
                                          value={
                                            formik.values?.tenthPage[index].patientDetailsForm
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
                                          name={`tenthPage[${index}]patientDetailsForm.patientHeight`}
                                          value={
                                            formik.values?.tenthPage[index].patientDetailsForm
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
                                                formik.values?.tenthPage[index].patientDetailsForm
                                                  ?.patientHeightNI
                                              }
                                              onChange={(e) => {
                                                formik.setFieldValue(
                                                  `tenthPage[${index}]patientDetailsForm.patientHeightNI`,
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
                                          name={`tenthPage[${index}]patientDetailsForm.patientWeight`}
                                          value={
                                            formik.values?.tenthPage[index].patientDetailsForm
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
                                              name={`tenthPage[${index}]patientDetailsForm.patientWeightNI`}
                                              checked={
                                                formik.values?.tenthPage[index].patientDetailsForm
                                                  ?.patientWeightNI
                                              }
                                              onChange={(e) => {
                                                formik.setFieldValue(
                                                  `tenthPage[${index}]patientDetailsForm.patientWeightNI`,
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
                                          name={`tenthPage[${index}]patientDetailsForm.patientHtn`}
                                          value={
                                            formik.values?.tenthPage[index].patientDetailsForm
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
                                          name={`tenthPage[${index}]patientDetailsForm.patientCautions`}
                                          value={
                                            formik.values?.tenthPage[index].patientDetailsForm
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
                            <SoftTypography variant="button" fontWeight="regular" color="text">
                              Mandatory informations
                            </SoftTypography>

                            <SoftTypography variant="h6" fontWeight="bold" color="text">
                              Patient Intake and Informed Consent (Insert)
                            </SoftTypography>
                            <SoftTypography
                              variant="h6"
                              fontWeight="bold"
                              color="text"
                              mt={1}
                              style={{ color: "red" }}
                            >
                              Med Hx Review (see details in Patient Intake Form or below in
                              Subjective for additional details):
                            </SoftTypography>
                            <SoftBox mt={1}>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={6} lg={6}>
                                  <Grid item xs={12} sm={12}>
                                    <SoftTypography
                                      variant="h6"
                                      fontWeight="bold"
                                      color="text"
                                      mt={1}
                                      style={{ color: "red" }}
                                    >
                                      VBAI:
                                    </SoftTypography>
                                    <VBAICheckboxes
                                      formData={formData}
                                      formik={formik}
                                      form={form}
                                      index={index}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={12}>
                                    <SoftTypography
                                      variant="h6"
                                      fontWeight="bold"
                                      color="text"
                                      mt={1}
                                    >
                                      CA:
                                    </SoftTypography>

                                    <CACheckboxes
                                      formData={formData}
                                      formik={formik}
                                      form={form}
                                      index={index}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={12}>
                                    <SoftTypography
                                      variant="h6"
                                      fontWeight="bold"
                                      color="text"
                                      mt={1}
                                    >
                                      CARDIAC:
                                    </SoftTypography>
                                    <CardiacCheckboxes
                                      formData={formData}
                                      formik={formik}
                                      form={form}
                                      index={index}
                                    />
                                  </Grid>
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                  <Grid item xs={12} sm={12}>
                                    <SoftTypography
                                      variant="h6"
                                      fontWeight="bold"
                                      color="text"
                                      mt={1}
                                    >
                                      CVA:
                                    </SoftTypography>
                                    <CVACheckboxes
                                      formData={formData}
                                      formik={formik}
                                      form={form}
                                      index={index}
                                    />
                                  </Grid>
                                </Grid>
                              </Grid>
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
                            onClick={() => {
                              arrayhelpers.insert(
                                formik.values.tenthPage.length + 1,
                                // formik.values.tenthPage[formik.values.tenthPage.length - 1]
                                {
                                  ...formik.values.tenthPage[formik.values.tenthPage.length - 1],
                                  patientDetailsForm: {
                                    ...formik.values.tenthPage[formik.values.tenthPage.length - 1]
                                      .patientDetailsForm,
                                    PractitionerName: userdata?.name,
                                    patientName: soapFormPage1?.name,
                                  },
                                }
                              );
                            }}
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
  );
}

// typechecking props for Symptoms
TenthPage.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default TenthPage;
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
