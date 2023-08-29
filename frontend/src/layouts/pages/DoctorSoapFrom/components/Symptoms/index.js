// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { Divider, MenuItem } from "@mui/material";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// NewUser page components
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import CheckboxNew from "./Checkbox";
import FormCheckbox from "../FormCheckbox";
import CheckboxNewTwo from "./CheckboxNewSecond";
import NextButton from "../../NextButton";
import initialValues from "./schema/initialValues";
import { useDispatch, useSelector } from "react-redux";
import InjuriesCheckbox from "./InjuriesCheckbox";
import NeurologicalCheckbox from "./NeurologicalCheckbox";
import { Formik } from "formik";
import SoftButton from "components/SoftButton";
import {
  clientIntakeFormGet,
  patientsoapdata,
  getDoctorShopFormDataAction,
  doctorShopFormDataAction,
} from "../../../../../store/actions/actions";
import TopInfoPatient from "./TopInfoPaient";
import BottomSign from "./BottomSign";

// import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function Symptoms({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  // const [isChecked, setIsChecked] = useState(menuItems.slice().fill(false));
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm.page2);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };
  console.log("doctorShopFromDetails...", doctorShopFromDetails);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  const patientName = { name: soapFormPage1?.name };
  const clientIntakeformDetails1 = useSelector((state) => state.auth.doctorShopForm.page2);
  console.log("clientIntakeformDetails1...", clientIntakeformDetails1);

  let date = new Date().toLocaleDateString("en-CA");

  const [dominantHandData, setDominantHandData] = useState([]);

  const { formField, values, errors, touched, setFieldValue } = formData;

  const { Patient, DATE, dateofinjury, clucksoundswithneck } = formField.symptomsformField;
  const {
    Patient: PatientV,
    DATE: DATEV,
    dateofinjury: dateofinjuryV,
    clucksoundswithneck: clucksoundswithneckV,
  } = values;

  console.log("clientIntakeformDetails1", clientIntakeformDetails1);
  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, practitionerId: UserId, token: token }));
  // }, []);
  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, practitionerId: UserId, token: token }));
  // }, [stepIndex]);

  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;
    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        // practitionerId: UserId,
        token: token,
      })
    );
  }, []);

  return (
    <SoftBox>
      <SoftBox lineHeight={0} className="symptoms-control">
        <h2 style={{ textAlign: "center" }} fontWeight="bold">
          SYMPTOMS
        </h2>
        {/* <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography> */}
      </SoftBox>

      <Formik
        initialValues={{
          ...initialValues,
          ...doctorShopFromDetails,
          // ...clientIntakeformDetails1
          ...patientName,
        }}
        enableReinitialize
        // onSubmit={(values) => {
        //   dispatch(
        //     doctorShopFormDataAction({
        //       patientId: soappatientId,
        //       practitionerId: UserId,
        //       page2: values,
        //     })
        //   );
        // }}
        onSubmit={(values) => {
          console.log("values", values);
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
                ? selectedPatientId
                : soappatientId,
            practitionerId: UserId,
            page2: values,
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
              <SoftBox mt={1.5}>
                <Grid container spacing={3}>
                  <TopInfoPatient formik={formik} />
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} mt={2}>
                    <SoftTypography
                      component="label"
                      variant="h6"
                      fontWeight=""
                      textTransform=""
                      className="main-label"
                    >
                      Please fill in all symptoms you currently have &nbsp;
                      <span style={{ textDecoration: "underline" }}>
                        {" "}
                        that you did not have
                      </span>{" "}
                      &nbsp;before accident.
                    </SoftTypography>
                  </Grid>
                </Grid>
                <br />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <SoftTypography
                      component="label"
                      variant="h6"
                      fontWeight="bold"
                      textTransform="capitalize"
                      className="other-title spacing"
                    >
                      Orthopedic & Musculoskeletal Symptoms
                    </SoftTypography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} ml={1.5} mt={1}>
                        <CheckboxNew formik={formik} />
                        {/* <FormCheckbox/> */}
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <SoftTypography
                        component="label"
                        variant="h6"
                        fontWeight="bold"
                        textTransform="capitalize"
                        className="other-title"
                      >
                        Neurological Symptoms
                      </SoftTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} ml={1.5} mt={1}>
                          <NeurologicalCheckbox formik={formik} />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <SoftTypography
                        component="label"
                        variant="h6"
                        fontWeight="bold"
                        textTransform="capitalize"
                        className="other-title"
                      >
                        Symptoms Associated with Injuries
                      </SoftTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} ml={1.5} mt={1}>
                          <InjuriesCheckbox formik={formik} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <SoftTypography
                      component="label"
                      variant="h6"
                      fontWeight="bold"
                      textTransform="capitalize"
                      className="other-title"
                    >
                      Brain/Neuropsych/MTBI/PTSD Symptoms
                    </SoftTypography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} ml={1.5} mt={1}>
                        <CheckboxNewTwo formik={formik} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SoftBox>

              <BottomSign formik={formik} />

              <div style={{ float: "right" }}>
                <SoftButton
                  // disabled={isSubmitting}
                  type="submit"
                  variant="gradient"
                  color="dark"
                  className="nxt1"
                  // label="Next"
                  onClick={formik.handleSubmit}
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
Symptoms.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Symptoms;
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
