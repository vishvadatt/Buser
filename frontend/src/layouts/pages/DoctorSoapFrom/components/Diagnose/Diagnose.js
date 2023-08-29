// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import { Checkbox } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Divider, MenuItem } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// NewUser page components
import styled from "styled-components";
import CheckboxNewTwo from "../Symptoms/CheckboxNewSecond";
import CheckboxNeck from "./CheckboxNeck";
import CheckboxTorso from "./CheckboxTorso";
import CheckboxLumber from "./CheckboxLumber";
import BrainCheckbox from "./BrainCheckbox";
import StrainCheckbox from "./StrainCheckbox";
import UpperLowerExtremityCheckbox from "./UpperLowerExtremityCheckbox";
import { Formik } from "formik";
import initialValues from "./schema/initialValues";
import NextButton from "../../NextButton";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import SoftButton from "components/SoftButton";
import {
  clientIntakeFormGet,
  patientsoapdata,
  getDoctorShopFormDataAction,
  doctorShopFormDataAction,
} from "../../../../../store/actions/actions";
import BottomCheckbox from "./BottomCheckbox";
import TopInfo from "./TopInfo";

// import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function Diagnose({ formData, stepIndex, setActiveStep }) {
  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };
  const dispatch = useDispatch();
  // const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page3)
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page3);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const [dominantHandData, setDominantHandData] = useState([]);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page1);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const [diagnosisData, setDiagnosisData] = useState(doctorShopFromDetails);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  const patientName = { name: soapFormPage1?.name };
  const { formField, values, errors, touched, setFieldValue } = formData;

  const { Patient, DATE, dateofinjury, clucksoundswithneck } = formField.symptomsformField;
  const {
    Patient: PatientV,
    DATE: DATEV,
    dateofinjury: dateofinjuryV,
    clucksoundswithneck: clucksoundswithneckV,
  } = values;
  // useEffect(() => {
  //   dispatch(
  //     clientIntakeFormGet({ patientId: patientId, /* practitionerId: UserId, */ token: token })
  //   );
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
        /* practitionerId: UserId,*/
        token: token,
      })
    );
  }, [selectedPatientId, soappatientId]);
  useEffect(() => {
    setDiagnosisData(doctorShopFromDetails);
  }, [doctorShopFromDetails]);
  return (
    <SoftBox>
      <SoftBox lineHeight={0} mb={4}>
        <h4 style={{ textAlign: "center" }} fontWeight="bold">
          DIAGNOSIS(INITIAL ENCOUNTER)
        </h4>
        {/* <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography> */}
      </SoftBox>

      <Formik
        initialValues={{
          ...initialValues,
          ...diagnosisData,
          // ...clientIntakeformDetails1
          ...patientName,
        }}
        enableReinitialize
        // onSubmit={(values) => {
        //   dispatch(
        //     doctorShopFormDataAction({
        //       patientId: soappatientId,
        //       practitionerId: UserId,
        //       page3: values,
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
            page3: values,
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
              <SoftBox mt={1.5}>
                <Grid container spacing={3}>
                  <TopInfo formik={formik} />
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <SoftTypography
                      component="label"
                      variant="h6"
                      fontWeight="bold"
                      textTransform="capitalize"
                      className="main-label"
                      my={2}
                    >
                      Neck
                    </SoftTypography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} ml={1.5}>
                        <CheckboxNeck formik={formik} />
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
                        mb={2}
                      >
                        Lumbar, Lumbosacral, SI & Pelvis
                      </SoftTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} ml={1.5}></Grid>
                      </Grid>
                      <CheckboxLumber formik={formik} />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={12}>
                      <SoftTypography
                        component="label"
                        variant="h6"
                        fontWeight="bold"
                        textTransform="capitalize"
                        className="main-label"
                        mb={2}
                      >
                        Brain & Miscellaneous
                      </SoftTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} ml={1.5}>
                          <BrainCheckbox formik={formik} />
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
                      className="main-label"
                      my={2}
                    >
                      Upper Back & Torso
                    </SoftTypography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={12} ml={1.5}>
                        <CheckboxTorso formik={formik} />
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
                          Upper & Lower Extremity
                        </SoftTypography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} ml={1.5}>
                            <UpperLowerExtremityCheckbox formik={formik} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
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
                          Strain of Muscle, Fascia & Tendon(MFT)
                        </SoftTypography>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} ml={1.5}>
                            <StrainCheckbox formik={formik} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <div className="mb-4"></div>
                <BottomCheckbox formik={formik} />
              </SoftBox>
              <div
                style={{
                  float: "right",
                }}
              >
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
              {/* <div style={{ float: "right", position: "relative" }}>
                <SoftButton
                  type="submit"
                  variant="gradient"
                  color="dark"
                  onClick={formik.handleSubmit}
                  className="nextButton5"
                >
                  Next
                </SoftButton>
              </div> */}
            </>
          );
        }}
      </Formik>
    </SoftBox>
  );
}

// typechecking props for Symptoms
Diagnose.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Diagnose;
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
