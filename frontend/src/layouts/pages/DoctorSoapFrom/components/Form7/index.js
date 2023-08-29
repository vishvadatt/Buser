// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { Divider, MenuItem, Checkbox } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/DutiesPerformed/FormField/index";
import { Formik, FieldArray } from "formik";
import {
  getDoctorShopFormDataAction,
  doctorShopFormDataAction,
  clientIntakeFormGet,
} from "store/actions/actions";
import { useDispatch } from "react-redux";
import "./style.css";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// NewUser page components
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import initialValues from "./schemas/initialValues";
import form from "./schemas/form";
import NextButton from "../../NextButton";
import { useSelector } from "react-redux";
import { FormControlLabel } from "@material-ui/core";
import SymptomsTable from "./component/SymptomsTable";
import TopInfopage6 from "./component/TopInfopage6";
import Form6tab from "./component/Form6tab";
import Box from "@mui/material/Box";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import moment from "moment";

// import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function index({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page6);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page1);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  const patientName = { name: soapFormPage1?.name };

  const { formField, values, errors, touched, setFieldValue } = formData;
  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, /* practitionerId: UserId, */ token: token }));
  // }, []);
  useEffect(() => {
    let patientId = patientSoapFormDetail.shouldShowPatientSoapFormDetail
      ? patientSoapFormDetail.patientId
      : selectedPatientId
      ? selectedPatientId
      : soappatientId;
    dispatch(
      clientIntakeFormGet({ patientId: patientId, /* practitionerId: UserId, */ token: token })
    );
  }, [stepIndex]);
  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;
    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        token: token,
      })
    );
  }, []);
  const form7FormikData = doctorShopFromDetails
    ? doctorShopFromDetails
    : [{ ...initialValues.form7[0], name: soapFormPage1?.name }];
  return (
    <SoftBox>
      <Formik
        initialValues={{
          form7: [...form7FormikData],
          // ...clientIntakeformDetails1,
          // ...patientName
        }}
        enableReinitialize
        //  onSubmit={(values) => {
        //   dispatch(doctorShopFormDataAction({patientId : soappatientId, practitionerId : UserId, page6: values}));
        // }}
        onSubmit={(values) => {
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            // page6: { ...values },
            page6: values.form7,
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
          return (
            <>
              <SoftBox lineHeight={0} mb={2}>
                <h2 style={{ textAlign: "center" }} fontWeight="bold">
                  SYMPTOMS UPDATE
                </h2>
              </SoftBox>

              <Grid>
                <FieldArray
                  name="form7"
                  render={(arrayhelpers, push) => {
                    return (
                      <>
                        {formik.values.form7.map((data, index) => {
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
                              <SoftBox mt={1.5}>
                                {/* 
          <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormField
                          type="input"
                          label="Patient"
                          name="patient"
                          value={values.patient}
                          placeholder="Name of Patient"
                          onChange={(e)=> setFieldValue("patient", e.target.value)}
                          // error={errors.Patient && touched.Patient}
                          //   success={PatientV.length > 0 && !errors.Patient}
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <FormField
                          type="date"
                          label="Date"
                          name="date"
                          value={values.date}
                          onChange={(e)=> setFieldValue("date", e.target.value)}
                          // placeholder="Date"
                          // error={errors.DATE && touched.DATE}
                          //   success={DATEV.length > 0 && !errors.DATE}
                        />
                      </Grid>
                      <Grid item xs={12} sm={3}>
                        <FormField
                          type="date"
                          label="Date of Injury"
                          name="dateofInjury"
                          value={values.dateofInjury}
                          onChange={(e)=> setFieldValue("dateofInjury", e.target.value)}
                          // placeholder={dateofinjury.placeholder}
                          // error={errors.dateofinjury && touched.dateofinjury}
                          //   success={dateofinjuryV.length > 0 && !errors.dateofinjury}
                        />
                      </Grid>
                    </Grid> */}

                                <Grid container spacing={3} mt={2}>
                                  <TopInfopage6 formik={formik} index={index} />
                                </Grid>

                                {/* <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <span className="spanLab">Patient</span>
                <input
                  type={Patient.type}
                  label={Patient.label}
                  name={Patient.name}
                  value={formik.values.PatientV}
                  onChange={formik.handleChange}
                  placeholder={Patient.placeholder}
                  className="accidentHOMEInput" 
    
                  // error={errors.Patient && touched.Patient}
                  //   success={PatientV.length > 0 && !errors.Patient}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
              <span className="spanLab">Date</span>
                <input
                  type={DATE.type}
                  label={DATE.label}
                  name={DATE.name}
                  value={formik.values.DATEV}
                  onChange={formik.handleChange}
                  className="therapiCss"
    
                  // placeholder={DATE.placeholder}
                  // error={errors.DATE && touched.DATE}
                  //   success={DATEV.length > 0 && !errors.DATE}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
              <span className="spanLab">Date of Injury</span>
    
                <input
                  type={dateofinjury.type}
                  label={dateofinjury.label}
                  name={dateofinjury.name}
                  value={formik.values.dateofinjuryV}
                  onChange={formik.handleChange}
                  className="therapiCss"
    
                  // placeholder={dateofinjury.placeholder}
                  // error={errors.dateofinjury && touched.dateofinjury}
                  //   success={dSymptoms Update
    
              </Grid>
             
              </Grid> */}

                                <Grid container spacing={3}>
                                  <Grid item xs={12} sm={12} ml={1.5} mt={2}>
                                    {/* <SymptomsTable formik={formik} form={form} /> */}
                                    <Form6tab formik={formik} form={form} index={index} />
                                  </Grid>
                                </Grid>
                                <br />
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
                                arrayhelpers.insert(formik.values.form7.length + 1, {
                                  ...formik.values.form7[formik.values.form7.length - 1],
                                  name: soapFormPage1?.name,
                                })
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

              {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={doctorSign.type}
              label={doctorSign.label}
              name={doctorSign.name}
              value={formik.values.doctorSignV}
              onChange={formik.handleChange}
              // placeholder={Patient.placeholder}
              // error={errors.Patient && touched.Patient}
              //   success={PatientV.length > 0 && !errors.Patient}
            />
            <label className="spanLab">Signature</label>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type={doctorDate.type}
              label={doctorDate.label}
              name={doctorDate.name}
              value={formik.values.doctorDateV}
              onChange={formik.handleChange}

              // placeholder={DATE.placeholder}
              // error={errors.DATE && touched.DATE}
              //   success={DATEV.length > 0 && !errors.DATE}
            />
             <label className="spanLab">Date</label>
          </Grid>

        </Grid> */}
              {/* <SoftButton
          // disabled={isSubmitting}
          type="submit"
          variant="gradient"
          color="dark"
          // label="Next"
          onClick={formik.handleSubmit}
          
        >
          Next
        </SoftButton> */}
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
  );
}

// typechecking props for Symptoms
index.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default index;
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
