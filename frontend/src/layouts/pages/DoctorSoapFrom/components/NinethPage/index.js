import { Checkbox, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import SoftTypography from "components/SoftTypography";
import { Formik, FieldArray } from "formik";
import Box from "@mui/material/Box";

import "./style.css";
import InfoCommon from "../InfoCommon";
import NextButton from "../../NextButton";
import initialValues from "./schemas/initialValues";
import form from "./schemas/form";
import Table2 from "./compoent/Table2";
import FormField from "../FormField";
// import FormField from "../../FormField";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useDispatch } from "react-redux";
import { doctorShopFormDataAction } from "store/actions/actions";
import SoftButton from "components/SoftButton";
import { MinusCircleOutlined } from "@ant-design/icons";
import index from "layouts/pages/Client-Intake-Form/components/TenthPage";

function NinethPage({ stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page8);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const page9Data = useSelector((state) => state.auth.doctorShopForm?.page9);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);

  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /* practitionerId: UserId, */ token: token }));
  // }, []);
  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId: UserId, */
        token: token,
      })
    );
  }, [stepIndex]);

  const form9FormikData = doctorShopFromDetails
    ? doctorShopFromDetails?.ninethPage
    : [
        {
          ...initialValues.ninethPage[0],
          patientDetailsForm: {
            ...initialValues.ninethPage[0].patientDetailsForm,
            PractitionerName: userdata?.name,
            patientName: soapFormPage1?.name,
          },
        },
      ];

  return (
    <div>
      <SoftBox lineHeight={0}>
        <Formik
          // initialValues={{ ...initialValues, ...doctorShopFromDetails }}
          initialValues={{
            ninethPage: [...form9FormikData],
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
              page8: values,
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
            // `setElevenFormData`(formik.values);
            return (
              <>
                {/* <InfoCommon formik={formik} /> */}
                <Grid>
                  <FieldArray
                    name="ninethPage"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.ninethPage.map((data, index) => {
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

                                <SoftBox py={1} px={2}>
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
                                            name={`ninethPage[${index}]patientDetailsForm.PractitionerName`}
                                            value={
                                              formik.values?.ninethPage[index]?.patientDetailsForm
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
                                            name={`ninethPage[${index}]patientDetailsForm.NPI`}
                                            value={
                                              formik.values?.ninethPage[index].patientDetailsForm
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
                                            name={`ninethPage[${index}]patientDetailsForm.TIN`}
                                            value={
                                              formik.values?.ninethPage[index].patientDetailsForm
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
                                            name={`ninethPage[${index}]patientDetailsForm.hourlyRate`}
                                            value={
                                              formik.values?.ninethPage[index].patientDetailsForm
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
                                              name={`ninethPage[${index}]patientDetailsForm.patientName`}
                                              value={
                                                formik.values?.ninethPage[index].patientDetailsForm
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
                                                    formik.values?.ninethPage[index]
                                                      .patientDetailsForm?.isNewPatient
                                                  }
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `ninethPage[${index}]patientDetailsForm.isNewPatient`,
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
                                                    formik.values?.ninethPage[index]
                                                      .patientDetailsForm?.isFollowUpPatient
                                                  }
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `ninethPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                                    formik.values?.ninethPage[index]
                                                      .patientDetailsForm?.isNewComplaintPatient
                                                  }
                                                  onChange={(e) => {
                                                    formik.setFieldValue(
                                                      `ninethPage[${index}]patientDetailsForm.isFollowUpPatient`,
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
                                                name={`ninethPage[${index}]patientDetailsForm.patientVisitNumber`}
                                                value={
                                                  formik.values?.ninethPage[index]
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
                                                name={`ninethPage[${index}]patientDetailsForm.patientTodaysDate`}
                                                value={
                                                  formik.values?.ninethPage[index]
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
                                                name={`ninethPage[${index}]patientDetailsForm.patientNextReExam`}
                                                value={
                                                  formik.values?.ninethPage[index]
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
                                                  name={`ninethPage[${index}]patientDetailsForm.patientDob`}
                                                  value={
                                                    formik.values?.ninethPage[index]
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
                                                name={`ninethPage[${index}]patientDetailsForm.patientAge`}
                                                value={
                                                  formik.values?.ninethPage[index]
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
                                                name={`ninethPage[${index}]patientDetailsForm.patientHeight`}
                                                value={
                                                  formik.values?.ninethPage[index]
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
                                                      formik.values?.ninethPage[index]
                                                        .patientDetailsForm?.patientHeightNI
                                                    }
                                                    onChange={(e) => {
                                                      formik.setFieldValue(
                                                        `ninethPage[${index}]patientDetailsForm.patientHeightNI`,
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
                                                name={`ninethPage[${index}]patientDetailsForm.patientWeight`}
                                                value={
                                                  formik.values?.ninethPage[index]
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
                                                    name={`ninethPage[${index}]patientDetailsForm.patientWeightNI`}
                                                    checked={
                                                      formik.values?.ninethPage[index]
                                                        .patientDetailsForm?.patientWeightNI
                                                    }
                                                    onChange={(e) => {
                                                      formik.setFieldValue(
                                                        `ninethPage[${index}]patientDetailsForm.patientWeightNI`,
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
                                                name={`ninethPage[${index}]patientDetailsForm.patientHtn`}
                                                value={
                                                  formik.values?.ninethPage[index]
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
                                                name={`ninethPage[${index}]patientDetailsForm.patientCautions`}
                                                value={
                                                  formik.values?.ninethPage[index]
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
                                  <Table2 formik={formik} form={form} index={index} />
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
                                onClick={() =>
                                  arrayhelpers.insert(
                                    formik.values.ninethPage.length + 1,
                                    // formik.values.ninethPage[formik.values.ninethPage.length - 1]
                                    {
                                      ...formik.values.ninethPage[
                                        formik.values.ninethPage.length - 1
                                      ],
                                      patientDetailsForm: {
                                        ...formik.values.ninethPage[
                                          formik.values.ninethPage.length - 1
                                        ].patientDetailsForm,
                                        PractitionerName: userdata?.name,
                                        patientName: soapFormPage1?.name,
                                      },
                                    }
                                  )
                                }
                              >
                                Add new Page
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
NinethPage.propTypes = {
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default NinethPage;
