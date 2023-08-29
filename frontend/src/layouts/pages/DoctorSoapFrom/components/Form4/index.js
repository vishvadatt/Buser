// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { Divider, MenuItem } from "@mui/material";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
// import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// NewUser page components
import styled from "styled-components";
import CervicalSpine from "./components/CervicalSpine";
import UpperExtrimity from "./components/UpperExtrimity";
import BrainInjury from "./components/BrainInjury";
import ThorasicSpine from "./components/ThorasicSpine";
import LowerExtrimity from "./components/LowerExtrimity";
import Depression from "./components/Depression";
import TMJPlan from "./components/TMJPLan";
import LumberSpine from "./components/LumberSpine";
import Pelvis from "./components/Pelvis";
import Misc from "./components/Misc";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";
import { Formik } from "formik";
import initialValues from "./schema/initialValues";
import NextButton from "../../NextButton";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import "./style.css";
import {
  clientIntakeFormGet,
  patientsoapdata,
  getDoctorShopFormDataAction,
  doctorShopFormDataAction,
} from "../../../../../store/actions/actions";
import SoftButton from "components/SoftButton";
import TopInfoComp from "./components/TopInfocomp";
import Bottom from "./components/Bottom";

// import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function Form4({ formData, stepIndex, setActiveStep }) {
  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };
  const dispatch = useDispatch();
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page4);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page1);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const [dominantHandData, setDominantHandData] = useState([]);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  const patientName = { name: soapFormPage1?.name };
  console.log("doctorShopFromDetails4", doctorShopFromDetails);

  const { formField, values, errors, touched, setFieldValue } = formData;

  const { Patient, DATE, dateofinjury, clucksoundswithneck } = formField.symptomsformField;
  const {
    Patient: PatientV,
    DATE: DATEV,
    dateofinjury: dateofinjuryV,
    clucksoundswithneck: clucksoundswithneckV,
  } = values;
  console.log("values", values);
  console.log("mailnvalues", doctorShopFromDetails);
  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId,/* practitionerId: UserId, */ token: token }));
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
        /* practitionerId: UserId, */ token: token,
      })
    );
  }, []);

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <h2 style={{ textAlign: "center" }} fontWeight="bold">
          TREATMENT PLAN
        </h2>
      </SoftBox>

      <Formik
        initialValues={{
          ...initialValues,
          ...doctorShopFromDetails,
          ...clientIntakeformDetails1,
          ...patientName,
        }}
        enableReinitialize
        // onSubmit={(values) => {
        //   dispatch(
        //     doctorShopFormDataAction({
        //       patientId: soappatientId,
        //       practitionerId: UserId,
        //       page4: values,
        //     })
        //   );
        // }}
        onSubmit={(values) => {
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            page4: values,
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
              {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={Patient.type}
              label={Patient.label}
              name={Patient.name}
              value={PatientV}
              placeholder={Patient.placeholder}
              error={errors.Patient && touched.Patient}
              //   success={PatientV.length > 0 && !errors.Patient}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type={DATE.type}
              label={DATE.label}
              name={DATE.name}
              value={DATEV}
              placeholder={DATE.placeholder}
              error={errors.DATE && touched.DATE}
              //   success={DATEV.length > 0 && !errors.DATE}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type={dateofinjury.type}
              label={dateofinjury.label}
              name={dateofinjury.name}
              value={dateofinjuryV}
              placeholder={dateofinjury.placeholder}
              error={errors.dateofinjury && touched.dateofinjury}
              //   success={dateofinjuryV.length > 0 && !errors.dateofinjury}
            />
          </Grid>
          
        </Grid> */}

              <SoftBox mt={1.5}>
                <Grid container mt={1.5} spacing={3}>
                  <TopInfoComp formik={formik} />
                </Grid>
                <SoftTypography
                  variant="button"
                  varient="h6"
                  fontWeight="regular"
                  color="text"
                  className="form4-main-title"
                >
                  The following recommended treatments are to be done through
                </SoftTypography>

                <Grid container spacing={3}>
                  <Grid item xs={12} lg={4} sm={4} md={6}>
                    <SoftTypography
                      component="label"
                      variant="h6"
                      fontWeight="bold"
                      textTransform="capitalize"
                      className="main-label"
                      my={2}
                    >
                      Cervical Spine Tx
                    </SoftTypography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} ml={1.5}>
                        <CervicalSpine formik={formik} />
                      </Grid>
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={12}>
                      <SoftTypography
                        component="label"
                        variant="h6"
                        fontWeight="bold"
                        textTransform="capitalize"
                        className="main-label"
                        my={2}
                      >
                        Upper Extremity Tx
                      </SoftTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} ml={1.5}>
                          <UpperExtrimity formik={formik} />
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={12}>
                      <SoftTypography
                        component="label"
                        variant="h6"
                        fontWeight="bold"
                        textTransform="capitalize"
                        className="main-label"
                        my={2}
                      >
                        Brain Injury Plan
                      </SoftTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} ml={1.5}>
                          <BrainInjury formik={formik} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} lg={4} sm={4} md={6}>
                    <SoftTypography
                      component="label"
                      variant="h6"
                      fontWeight="bold"
                      textTransform="capitalize"
                      className="main-label"
                      my={2}
                    >
                      Thoracic Spine Tx
                    </SoftTypography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} ml={1.5}>
                        <ThorasicSpine formik={formik} />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <SoftTypography
                          component="label"
                          variant="h6"
                          fontWeight="bold"
                          textTransform="capitalize"
                          className="main-label"
                          my={2}
                        >
                          Lower Extremity Tx
                        </SoftTypography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} ml={1.5}>
                            <LowerExtrimity formik={formik} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                        <SoftTypography
                          component="label"
                          variant="h6"
                          fontWeight="bold"
                          textTransform="capitalize"
                          className="main-label"
                          my={2}
                        >
                          Depression And Anxiety Plan
                        </SoftTypography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} ml={1.5}>
                            <Depression formik={formik} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                        <SoftTypography
                          component="label"
                          variant="h6"
                          fontWeight="bold"
                          textTransform="capitalize"
                          className="main-label"
                          my={2}
                        >
                          MISC
                        </SoftTypography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} ml={1.5}>
                            <Misc formik={formik} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} lg={4} sm={4} md={6}>
                    <SoftTypography
                      component="label"
                      variant="h6"
                      fontWeight="bold"
                      textTransform="capitalize"
                      className="main-label"
                      my={2}
                    >
                      Lumbar Spine Tx
                    </SoftTypography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} ml={1.5}>
                        <LumberSpine formik={formik} />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <SoftTypography
                          component="label"
                          variant="h6"
                          fontWeight="bold"
                          textTransform="capitalize"
                          className="main-label"
                          my={2}
                        >
                          Pelvis/Hi /Sacrum Tx
                        </SoftTypography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} ml={1.5}>
                            <Pelvis formik={formik} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12}>
                        <SoftTypography
                          component="label"
                          variant="h6"
                          fontWeight="bold"
                          textTransform="capitalize"
                          className="main-label"
                          my={2}
                        >
                          TMJ PLAN
                        </SoftTypography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} ml={1.5}>
                            <TMJPlan formik={formik} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid mt={2} container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <span style={{ fontSize: "15px" }}>© HBTI 2/16/2016</span>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Bottom formik={formik} />
                  </Grid>
                </Grid>
              </SoftBox>
              {/* <div style={{float:"right", marginBottom:"-70px", position:"relative"}}>
      <NextButton page4={formik.values}/>
      </div> */}
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
Form4.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Form4;
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
