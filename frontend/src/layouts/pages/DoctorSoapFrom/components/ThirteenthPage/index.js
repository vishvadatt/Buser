// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { Divider, Radio, RadioGroup } from "@mui/material";
import Box from "@mui/material/Box";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// NewUser page components
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import InfoCommon from "../InfoCommon";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";
import NutritionProperty from "./component/nutritionProperty";
import { Formik, FieldArray } from "formik";
import NextButton from "../../NextButton";
import { getDoctorShopFormDataAction, doctorShopFormDataAction } from "store/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import { MinusCircleOutlined } from "@ant-design/icons";

const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function ThirteenthPage({ formData, stepIndex, setActiveStep }) {
  // const { formField, values, errors, touched, setFieldValue } = formData;
  // const initialValues = initialValues;
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page10);

  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const page12Data = useSelector((state) => state.auth.doctorShopForm?.page12);
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
    console.log("running log 13.");
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
  const [ThirteenthFormData, setThirteenthFormData] = useState([]);

  const form13FormikData = page12Data
    ? page12Data?.thirteenthPage
    : [
      {
        ...initialValues.thirteenthPage[0],
        patientDetailsForm: {
          ...initialValues.thirteenthPage[0].patientDetailsForm,
          PractitionerName: userdata?.name,
          patientName: soapFormPage1?.name,
        },
      },
    ];

  return (
    <SoftBox>
      <SoftBox mt={1.5}>
        <Formik
          // initialValues={{ ...initialValues, ...page12Data }}
          initialValues={{
            thirteenthPage: [...form13FormikData],
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
              page12: values,
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
            setThirteenthFormData(formik.values);
            return (
              <>
                {/* <InfoCommon formik={formik} /> */}
                <FieldArray
                  name="thirteenthPage"
                  render={(arrayhelpers, push) => {
                    console.log("formik.values", formik.values);
                    return (
                      <>
                        {formik.values.thirteenthPage.map((data, index) => {
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
                              <Grid sx={{ m: 0 }} container spacing={3}>
                                <Grid
                                  container
                                  spacing={2}
                                // mb={2}
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
                                          name={`thirteenthPage[${index}]patientDetailsForm.PractitionerName`}
                                          value={
                                            formik.values?.thirteenthPage[index]?.patientDetailsForm
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
                                          name={`thirteenthPage[${index}]patientDetailsForm.NPI`}
                                          value={
                                            formik.values?.thirteenthPage[index].patientDetailsForm
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
                                          name={`thirteenthPage[${index}]patientDetailsForm.TIN`}
                                          value={
                                            formik.values?.thirteenthPage[index].patientDetailsForm
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
                                          name={`thirteenthPage[${index}]patientDetailsForm.hourlyRate`}
                                          value={
                                            formik.values?.thirteenthPage[index].patientDetailsForm
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
                                            Patient Name:
                                          </span>
                                          <input
                                            type="text"
                                            className="patitentNameClass"
                                            onChange={formik.handleChange}
                                            name={`thirteenthPage[${index}]patientDetailsForm.patientName`}
                                            value={
                                              formik.values?.thirteenthPage[index]
                                                .patientDetailsForm?.patientName
                                            }
                                          />
                                        </div>
                                        <div className="eigth-info-common-patient-type-container">
                                          <FormControlLabel
                                            control={
                                              <Checkbox
                                                style={{ marginLeft: "5px" }}
                                                checked={
                                                  formik.values?.thirteenthPage[index]
                                                    .patientDetailsForm?.isNewPatient
                                                }
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `thirteenthPage[${index}]patientDetailsForm.isNewPatient`,
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
                                                  formik.values?.thirteenthPage[index]
                                                    .patientDetailsForm?.isFollowUpPatient
                                                }
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `thirteenthPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                                  formik.values?.thirteenthPage[index]
                                                    .patientDetailsForm?.isNewComplaintPatient
                                                }
                                                onChange={(e) => {
                                                  formik.setFieldValue(
                                                    `thirteenthPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                              name={`thirteenthPage[${index}]patientDetailsForm.patientVisitNumber`}
                                              value={
                                                formik.values?.thirteenthPage[index]
                                                  .patientDetailsForm?.patientVisitNumber
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
                                              name={`thirteenthPage[${index}]patientDetailsForm.patientTodaysDate`}
                                              value={
                                                formik.values?.thirteenthPage[index]
                                                  .patientDetailsForm?.patientTodaysDate
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
                                              name={`thirteenthPage[${index}]patientDetailsForm.patientNextReExam`}
                                              value={
                                                formik.values?.thirteenthPage[index]
                                                  .patientDetailsForm?.patientNextReExam
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
                                                name={`thirteenthPage[${index}]patientDetailsForm.patientDob`}
                                                value={
                                                  formik.values?.thirteenthPage[index]
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
                                              name={`thirteenthPage[${index}]patientDetailsForm.patientAge`}
                                              value={
                                                formik.values?.thirteenthPage[index]
                                                  .patientDetailsForm?.patientAge
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
                                              name={`thirteenthPage[${index}]patientDetailsForm.patientHeight`}
                                              value={
                                                formik.values?.thirteenthPage[index]
                                                  .patientDetailsForm?.patientHeight
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
                                                    formik.values?.thirteenthPage[index]
                                                      .patientDetailsForm?.patientHeightNI
                                                  }
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `thirteenthPage[${index}]patientDetailsForm.patientHeightNI`,
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
                                              name={`thirteenthPage[${index}]patientDetailsForm.patientWeight`}
                                              value={
                                                formik.values?.thirteenthPage[index]
                                                  .patientDetailsForm?.patientWeight
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
                                                  name={`thirteenthPage[${index}]patientDetailsForm.patientWeightNI`}
                                                  checked={
                                                    formik.values?.thirteenthPage[index]
                                                      .patientDetailsForm?.patientWeightNI
                                                  }
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `thirteenthPage[${index}]patientDetailsForm.patientWeightNI`,
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
                                              name={`thirteenthPage[${index}]patientDetailsForm.patientHtn`}
                                              value={
                                                formik.values?.thirteenthPage[index]
                                                  .patientDetailsForm?.patientHtn
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
                                              name={`thirteenthPage[${index}]patientDetailsForm.patientCautions`}
                                              value={
                                                formik.values?.thirteenthPage[index]
                                                  .patientDetailsForm?.patientCautions
                                              }
                                              onChange={formik.handleChange}
                                            />
                                          </div>
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                  <SoftTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="button"
                                    mt={1}
                                  >
                                    <span style={{
                                      backgroundColor: "#83FAFD",
                                      padding: "4px",
                                      color: "black",
                                      fontSize: "15px",
                                    }}><u> Functional Nutrition Conclusion and Priorities of Work:</u></span>
                                  </SoftTypography>
                                  <SoftTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="button"
                                    mt={1}
                                  >
                                    <span style={{
                                      backgroundColor: "magenta",
                                      padding: "3px",
                                      color: "black",
                                      fontSize: "13px",
                                    }}><u>Problem Summary:</u></span>
                                  </SoftTypography>
                                  <SoftTypography variant="h6" fontWeight="" color="text" mt={1}>
                                    Example:
                                    <br />
                                    Brain-Gut Axis (Stomach hypochlorhydria, Intestinal barrier,
                                    Colon/Gastrointestinal Dysfunction), Sugar Metabolism
                                    dysfunction, Adrenal hypofunction, Basal Ganglia, Cerebellum{" "}
                                    {"-->"} Inflammatory effect on Brain and Gut and Detoxification
                                    difficulty (Liver)
                                  </SoftTypography>
                                  <br />
                                  <SoftTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="button"
                                    mt={1}
                                  >
                                    <span style={{
                                      backgroundColor: "#83FAFD",
                                      padding: "4px",
                                      color: "black",
                                      fontSize: "15px",
                                    }}><u>Functional Nutrition Priorities of Work:</u></span>
                                  </SoftTypography>
                                  <SoftTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="text"
                                    mt={1}
                                  >
                                    Example:
                                  </SoftTypography>
                                  {/* <SoftTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="text"
                                    mt={1}
                                  >
                                    Disease:
                                    <br />
                                    Anemia:
                                    <br />
                                    Blood Sugar:
                                    <br />
                                    Circulation:
                                    <br />
                                    Leaky Gut - (may refer to Cyrex Array 2 to confirm Dx):
                                    <br />
                                    Leaky Brain:
                                    <br />
                                    Inflammation -(Note, CRP and ESR do not show up until later in
                                    disease process. Increased Ferratin and HDLs {">"} 80 indicate
                                    subtle inflammation):
                                    <br />
                                    <br />
                                    Tx Plan:
                                    <br />
                                    TBD:
                                    <br />
                                    I.E.- Support the Brain-Gut Axis, Reduce inflammation, support
                                    Gastrointestinal barrier, support detoxification, support sugar
                                    metabolism,
                                  </SoftTypography> */}

                                  <NutritionProperty
                                    formData={formData}
                                    formik={formik}
                                    form={form}
                                    index={index}
                                  />
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
                                  arrayhelpers.insert(
                                    formik.values.thirteenthPage.length + 1,
                                    // formik.values.thirteenthPage[
                                    //   formik.values.thirteenthPage.length - 1
                                    // ]
                                    {
                                      ...formik.values.thirteenthPage[
                                      formik.values.thirteenthPage.length - 1
                                      ],
                                      patientDetailsForm: {
                                        ...formik.values.thirteenthPage[
                                          formik.values.thirteenthPage.length - 1
                                        ].patientDetailsForm,
                                        PractitionerName: userdata?.name,
                                        patientName: soapFormPage1?.name,
                                      },
                                    }
                                  );
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

        <Grid item xs={12} sm={6}></Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for ThirteenthPage
ThirteenthPage.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ThirteenthPage;
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
