import * as React from "react";
import { useEffect, useRef, useState } from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import SoftBox from "components/SoftBox";
import { useSelector } from "react-redux";

import SoftSnackbar from "components/SoftSnackbar";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { clearMessage, popupAction, logout } from "store/actions/actions";

import SoftButton from "components/SoftButton";
import SignaturePad from "react-signature-canvas";

import DefaultNavbar from "examples/Navbars/DefaultNavbar/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pageRoutes from "page.routes";
import "./style.css";
import Footer from "layouts/authentication/components/Footer";
import Case1 from "./Component/case1";
import Case2 from "./Component/case2";
import Case3 from "./Component/case3";
import Case4 from "./Component/case4";
import Case5 from "./Component/case5";
import moment from "moment";
import * as Yup from "yup";
import FormField from "../Profile/components/FormField";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { addInformConsentAction } from "store/actions/actions";
import { findOneInformConsent } from "store/actions/actions";
import { updateInformConsent } from "store/actions/actions";
const steps = ["", "", "", "", ""];

export default function TermsAndSignature() {
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [buttonDiable, setButtonDisable] = useState(true);
  const [signBegin, setSignBegin] = useState(true);
  const [signBegin1, setSignBegin1] = useState(true);
  const [signBegin2, setSignBegin2] = useState(true);
  // const [disclaimers_flag, setSignBegin] = useState(true);
  // const [indemnification_flag, setSignBegin1] = useState(true);
  // const [cancellation_flag, setSignBegin2] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isNew = searchParams.get("isnew");
  const navigate = useNavigate();

  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const informConsetData = useSelector((state) => state.auth.findOneInformConsent);
  const istermCompleted = useSelector((state) => state.auth.isVerfied);

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  useEffect(() => {
    console.log("isNew", isNew);
    if (isNew === undefined || isNew === null) {
      console.log("isNew", isNew);
      dispatch(findOneInformConsent({ id: UserId, token: token }));
    }
  }, []);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    setButtonDisable(true);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const descriptionElementRef = useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const termAndCondition = useSelector((state) => state.auth.termAndCondition);

  let validate = Yup.object().shape({
    TermsAndSignature_name: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("firstName is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    client_signature: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("signature is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    office_signature: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("signature is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    client_signature_date: Yup.string().required("Date is required"),
    office_signature_date: Yup.string().required("Date is required"),
    TermsAndSignature_client_name: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("firstName is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    TermsAndSignature_client_signature: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("signature is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    // TermsAndSignature_ofc_signature: Yup.string()
    //   .trim()
    //   .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    //   .required("signature is required")
    //   .max(25, "Maximum 25 character")
    //   .min(3, "Minimum 3 character"),

    arbitraion_client__date: Yup.string().required("Date is required"),
    arbitraion_ofc__date: Yup.string().required("Date is required"),
    arbitraion_client_name: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("firstName is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    arbitraion_client_signature: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("signature is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    arbitraion_ofc_signature: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("signature is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),

    informed_consent_date: Yup.string().required("Date is required"),
    TermsAndSignature_client_date: Yup.string().required("Date is required"),
    TermsAndSignature_ofc_date: Yup.string().required("Date is required"),
    informed_consent_name: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("firstName is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    informed_consent_signature: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("signature is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),

    informed_consent_date: Yup.string().required("Date is required"),
    date_measurements: Yup.string().required("Date of measurements is required"),
    name_practitioner: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("Practitioner Name is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 characters"),
    // practitionerLicenceType: Yup.string().trim().required("Practitioner Licence Type is required"),
    blood_pressure_upper: Yup.number()
      .required("Blood pressure upper is required")
      .min(0, "Invalid Blood Pressure")
      .max(1000, "Invalid Blood Pressure"),
    blood_pressure_lower: Yup.number()
      .required("Blood pressure lower is required")
      .min(0, "Invalid Blood Pressure")
      .max(1000, "Invalid Blood Pressure"),
    Resting_heart_rate: Yup.number()
      .required("Resting heart is required")
      .min(0, "Invalid Resting heart rate")
      .max(250, "Invalid Resting heart rate"),
    Oxygen_saturation: Yup.number()
      .required("Oxygen saturation is required")
      .min(0, "Invalid Oxygen saturation")
      .max(100, "Invalid Oxygen saturation"),
    Respiratory_rate: Yup.number()
      .required("Respiratory rate  is required")
      .max(50, "Invalid Respiratory rate")
      .min(0, "Invalid Respiratory rate"),
    Body_temp: Yup.number()
      .required("Body temp  is required")
      .min(0, "Invalid Body temp")
      .max(100, "Invalid Body temp"),
    client_Retroactive_initial: Yup.string().trim().required("Please Enter Initial Name"),
    commitment_initial1: Yup.string().trim().required("Please Enter Initial Name"),
    commitment_initial2: Yup.string().trim().required("Please Enter Initial Name"),
    newCommitment_initial3: Yup.string().trim().required("Please Enter Initial Name"),
    informed_Retroactive_initial: Yup.string().trim().required("Please Enter Initial Name"),
    terms_Retroactive_initial: Yup.string().trim().required("Please Enter Initial Name"),
    arbitraion_Retroactive_initial: Yup.string().trim().required("Please Enter Initial Name"),
  });

  let sigPad = useRef({});
  let data = "";

  // console.log("signdata", data);
  function clear() {
    sigPad.current.clear();
    setSignBegin(true);
    setSignBegin1(true);
    setSignBegin2(true);
  }
  const isLastStep = activeStep === steps.length - 1;
  let handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
    // console.log("hello", values);
  };

  const onBeginfun = (e) => {
    setSignBegin(e?.isTrusted);
  };
  const onBeginfun1 = (e) => {
    setSignBegin1(e?.isTrusted);
  };

  const onBeginfun2 = (e) => {
    setSignBegin2(e?.isTrusted);
  };
  return (
    <PageLayout>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
          label: "buy now",
        }}
      />

      {isNew !== "new" && (
        <Grid item lg={12} xs={12} sm={4} style={{ paddingTop: "60px", paddingLeft: "80%" }}>
          <Link to="/" style={{ color: "inherit" }} onClick={() => dispatch(logout())}>
            <SoftButton>Logout</SoftButton>
          </Link>
        </Grid>
      )}

      <SoftBox px={3} xs={12} mt={5} py={1} mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <Grid
            item
            xs={12}
            lg={12}
            sm={12}
            style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
          >
            <DialogTitle id="scroll-dialog-title">
              Informed Consent, Release and Indemnification Form
            </DialogTitle>
          </Grid>
          <DialogContent>
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  return (
                    <Step key={index} {...stepProps}>
                      <StepLabel {...labelProps}></StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <Formik
                initialValues={{
                  TermsAndSignature_name: userdata?.TermsAndSignature_name,
                  client_signature: "",
                  office_signature: "",
                  client_signature_date: "",
                  office_signature_date: "",
                  client_Retroactive_initial: "",
                  commitment_initial1: "",
                  commitment_initial2: "",
                  newCommitment_initial3: "",
                  informed_consent_date: "",
                  informed_Retroactive_initial: "",
                  informed_consent_name: "",
                  informed_consent_signature: "",
                  date_measurements: "",
                  name_practitioner: "",
                  practitionerLicenceType: "",
                  blood_pressure_upper: "",
                  blood_pressure_lower: "",
                  Resting_heart_rate: "",
                  Oxygen_saturation: "",
                  Respiratory_rate: "",
                  Body_temp: "",
                  TermsAndSignature_client_name: "",
                  TermsAndSignature_client_signature: "",
                  TermsAndSignature_client__date: "",
                  TermsAndSignature_ofc_signature: "",
                  TermsAndSignature_ofc_date: "",
                  terms_Retroactive_initial: "",
                  arbitraion_client_name: "",
                  arbitraion_client_signature: "",
                  arbitraion_client__date: "",
                  arbitraion_ofc_signature: "",
                  arbitraion_ofc_date: "",
                  arbitraion_Retroactive_initial: "",
                  agrrement_sign_client: undefined,
                  agrrement_sign_ofc: undefined,
                  term_page_sign_client: undefined,
                  term_page_sign_ofc: undefined,
                  ARBITRATION_sign_client: undefined,
                  ARBITRATION_sign_ofc: undefined,
                  Informed_sign_client: undefined,
                  Informed_sign_ofc: undefined,
                  agrrement_flag: "",
                  agrrementpage1_flag: "",
                  disclaimers_flag: "",
                  indemnification_flag: "",
                  cancellation_flag: "",
                  // TermsAndSignature_name: userdata?.TermsAndSignature_name,
                  // client_signature: userdata?.client_signature,
                  // office_signature: userdata?.office_signature,
                  // client_signature_date: moment().format("YYYY-MM-DD"),
                  // office_signature_date: moment().format("YYYY-MM-DD"),
                  // client_Retroactive_initial: userdata?.client_Retroactive_initial,
                  // commitment_initial1: userdata?.commitment_initial1,
                  // commitment_initial2: userdata?.commitment_initial2,
                  // informed_consent_date: moment().format("YYYY-MM-DD"),
                  // informed_Retroactive_initial: userdata?.informed_Retroactive_initial,
                  // informed_consent_name: userdata?.informed_consent_name,
                  // informed_consent_signature: userdata?.informed_consent_signature,
                  // date_measurements: userdata?.date_measurements,
                  // name_practitioner: userdata?.name_practitioner,
                  // practitionerLicenceType: userdata?.practitionerLicenceType,
                  // blood_pressure_upper: userdata?.blood_pressure_upper,
                  // blood_pressure_lower: userdata?.blood_pressure_lower,
                  // Resting_heart_rate: userdata?.Resting_heart_rate,
                  // Oxygen_saturation: userdata?.Oxygen_saturation,
                  // Respiratory_rate: userdata?.Respiratory_rate,
                  // Body_temp: userdata?.Body_temp,
                  // TermsAndSignature_client_name: userdata?.TermsAndSignature_client_name,
                  // TermsAndSignature_client_signature: userdata?.TermsAndSignature_client_signature,
                  // TermsAndSignature_client__date: moment().format("YYYY-MM-DD"),
                  // TermsAndSignature_ofc_signature: userdata?.TermsAndSignature_ofc_signature,
                  // TermsAndSignature_ofc_date: moment().format("YYYY-MM-DD"),
                  // terms_Retroactive_initial: userdata?.terms_Retroactive_initial,
                  // arbitraion_client_name: userdata?.arbitraion_client_name,
                  // arbitraion_client_signature: userdata?.arbitraion_client_signature,
                  // arbitraion_client__date: moment().format("YYYY-MM-DD"),
                  // arbitraion_ofc_signature: userdata?.arbitraion_ofc_signature,
                  // arbitraion_ofc_date: moment().format("YYYY-MM-DD"),
                  // arbitraion_Retroactive_initial: userdata?.arbitraion_Retroactive_initial,
                  // agrrement_sign_client: userdata?.agrrement_sign_client,
                  // agrrement_sign_ofc: userdata?.agrrement_sign_ofc,
                  // term_page_sign_client: userdata?.term_page_sign_client,
                  // term_page_sign_ofc: userdata?.term_page_sign_ofc,
                  // ARBITRATION_sign_client: userdata?.ARBITRATION_sign_client,
                  // ARBITRATION_sign_ofc: userdata?.ARBITRATION_sign_ofc,
                  // Informed_sign_client: userdata?.Informed_sign_client,
                  // Informed_sign_ofc: userdata?.Informed_sign_ofc,
                  // agrrement_flag: termAndCondition.agrrement_flag,
                  // agrrementpage1_flag: termAndCondition.agrrementpage1_flag,
                  // disclaimers_flag: termAndCondition.disclaimers_flag,
                  // indemnification_flag: termAndCondition.indemnification_flag,
                  // cancellation_flag: termAndCondition.cancellation_flag,
                  ...informConsetData,
                }}
                enableReinitialize
                validationSchema={validate}
                onSubmit={handleSubmit}
              >
                {({ handleChange, touched, isSubmitting, errors, values, setFieldValue }) => {
                  useEffect(() => {
                    validation_flieds();
                  }, [values, activeStep]);
                  const validation_flieds = () => {
                    let {
                      TermsAndSignature_name,
                      client_signature_date,
                      office_signature_date,
                      client_Retroactive_initial,
                      commitment_initial1,
                      commitment_initial2,
                      newCommitment_initial3,
                      informed_consent_date,
                      informed_Retroactive_initial,
                      informed_consent_signature,
                      terms_Retroactive_initial,
                      date_measurements,
                      name_practitioner,
                      // practitionerLicenceType,
                      Resting_heart_rate,
                      Oxygen_saturation,
                      Respiratory_rate,
                      blood_pressure_upper,
                      blood_pressure_lower,
                      Body_temp,
                      TermsAndSignature_client_signature,
                      TermsAndSignature_client__date,
                      TermsAndSignature_ofc_signature,
                      TermsAndSignature_ofc_date,
                      arbitraion_Retroactive_initial,
                      arbitraion_client_name,
                      arbitraion_client_signature,
                      arbitraion_client__date,
                      arbitraion_ofc_signature,
                      arbitraion_ofc_date,
                      agrrement_sign_client,
                      agrrement_sign_ofc,
                      term_page_sign_client,
                      term_page_sign_ofc,
                      Informed_sign_client,
                      Informed_sign_ofc,
                      agrrement_flag,
                      agrrementpage1_flag,
                      ARBITRATION_sign_client,
                      ARBITRATION_sign_ofc,
                      disclaimers_flag,
                      indemnification_flag,
                      cancellation_flag,
                    } = values;
                    if (activeStep === 0) {
                      if (
                        agrrementpage1_flag
                        //  &&
                        // TermsAndSignature_name &&
                        // // agrrement_sign_client &&
                        // // agrrement_sign_ofc &&
                        // client_signature_date &&
                        // office_signature_date &&
                        // client_Retroactive_initial &&
                        // commitment_initial1 &&
                        // commitment_initial2
                      ) {
                        setButtonDisable(false);
                      } else {
                        setButtonDisable(true);
                      }
                    }
                    if (activeStep === 1) {
                      console.log("testDataPage2---", client_Retroactive_initial);
                      if (
                        // disclaimers_flag &&
                        // informed_consent_date &&
                        //  informed_Retroactive_initial &&
                        // TermsAndSignature_name
                        // // Informed_sign_client

                        agrrement_flag &&
                        TermsAndSignature_name &&
                        agrrement_sign_client &&
                        // agrrement_sign_ofc &&
                        client_signature_date &&
                        office_signature_date &&
                        client_Retroactive_initial &&
                        commitment_initial1 &&
                        commitment_initial2 &&
                        newCommitment_initial3
                      ) {
                        setButtonDisable(false);
                      } else {
                        setButtonDisable(true);
                      }
                    }
                    if (activeStep === 2) {
                      if (
                        disclaimers_flag &&
                        informed_consent_date &&
                        informed_Retroactive_initial &&
                        TermsAndSignature_name &&
                        Informed_sign_client

                        // terms_Retroactive_initial &&
                        // date_measurements &&
                        // name_practitioner &&
                        // practitionerLicenceType &&
                        // Resting_heart_rate &&
                        // Oxygen_saturation &&
                        // Respiratory_rate &&
                        // blood_pressure_upper &&
                        // blood_pressure_lower &&
                        // Body_temp &&
                        // TermsAndSignature_name &&
                        // // term_page_sign_client &&
                        // TermsAndSignature_client__date &&
                        // // term_page_sign_ofc &&
                        // indemnification_flag &&
                        // TermsAndSignature_ofc_date
                      ) {
                        setButtonDisable(false);
                      } else {
                        setButtonDisable(true);
                      }
                    }
                    if (activeStep === 3) {
                      if (
                        terms_Retroactive_initial &&
                        date_measurements &&
                        name_practitioner &&
                        // practitionerLicenceType &&
                        Resting_heart_rate &&
                        Oxygen_saturation &&
                        Respiratory_rate &&
                        blood_pressure_upper &&
                        blood_pressure_lower &&
                        Body_temp &&
                        TermsAndSignature_name &&
                        term_page_sign_client &&
                        TermsAndSignature_client__date &&
                        // term_page_sign_ofc &&
                        indemnification_flag &&
                        TermsAndSignature_ofc_date

                        // // ARBITRATION_sign_client &&
                        // // ARBITRATION_sign_ofc &&
                        // cancellation_flag &&
                        // arbitraion_Retroactive_initial &&
                        // TermsAndSignature_name &&
                        // arbitraion_client__date &&
                        // arbitraion_ofc_date
                      ) {
                        setButtonDisable(false);
                      } else {
                        setButtonDisable(true);
                      }
                    }

                    if (activeStep === 4) {
                      if (
                        ARBITRATION_sign_client &&
                        // ARBITRATION_sign_ofc &&
                        cancellation_flag &&
                        arbitraion_Retroactive_initial &&
                        TermsAndSignature_name &&
                        arbitraion_client__date &&
                        arbitraion_ofc_date
                      ) {
                        setButtonDisable(false);
                      } else {
                        setButtonDisable(true);
                      }
                    }
                  };
                  return (
                    <>
                      {activeStep === 0 && (
                        <Case1
                          setFieldValue={setFieldValue}
                          values={values}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}
                      {activeStep === 1 && (
                        <Case5
                          setFieldValue={setFieldValue}
                          values={values}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}
                      {activeStep === 2 && (
                        <Case2
                          setFieldValue={setFieldValue}
                          values={values}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}
                      {activeStep === 3 && (
                        <Case3
                          setFieldValue={setFieldValue}
                          values={values}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}
                      {activeStep === 4 && (
                        <Case4
                          setFieldValue={setFieldValue}
                          values={values}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}

                      {/* {activeStep === steps.length ? (
                        <React.Fragment>
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                          </Typography>
                          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Box sx={{ flex: "1 1 auto" }} />
                          </Box>
                        </React.Fragment>
                      ) : ( */}

                      {/* <React.Fragment>
                        <Box
                        
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              pt: 2,
                              marginRight: "13rem",
                            }}
                            className="nxtButton"
                          >
                            <Box sx={{ flex: "1 1 auto" }} />

                            <SoftButton
                              color="dark"
                              type="submit"
                              disabled={buttonDiable}
                              onClick={() => {
                                handleNext();
                                const newobj = {
                                  ...values,
                                  disclaimers_flag: true,
                                  indemnification_flag: true,
                                  cancellation_flag: true
                                }
                                if (activeStep === steps.length - 1) {
                                  dispatch(popupAction({ id: UserId, data: values, token }));
                                  handleClose();
                                  console.log("send to profile");
                                  //navigate("/profileafterlogin");
                                  navigate("/practitionar-agreement-form");
                                }
                              }}
                            >
                              {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </SoftButton>
                          </Box>
                        </React.Fragment> */}

                      <React.Fragment>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 6 }}>
                          {activeStep !== 0 && (
                            <SoftButton
                              color="dark"
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              sx={{ mr: 1 }}
                            >
                              Back
                            </SoftButton>
                          )}
                          <Box sx={{ flex: "1 1 auto" }} />
                          <SoftButton
                            color="dark"
                            type="submit"
                            disabled={buttonDiable}
                            onClick={() => {
                              handleNext();
                              const newobj = {
                                // ...values,
                                disclaimers_flag: values?.disclaimers_flag,
                                indemnification_flag: values?.indemnification_flag,
                                cancellation_flag: values?.cancellation_flag,
                                agrrement_flag: values?.agrrement_flag,
                                agrrementpage1_flag: values?.agrrementpage1_flag,
                                isServicesFreez: true,
                              };
                              if (activeStep === steps.length - 1) {
                                if (isNew) {
                                  const newData = { ...values, status: "Pending" };
                                  dispatch(
                                    addInformConsentAction({
                                      id: UserId,
                                      data: newData,
                                      token,
                                    })
                                  );
                                  dispatch(
                                    popupAction({
                                      id: UserId,
                                      data: { isServicesFreez: true },
                                      token,
                                    })
                                  );
                                  navigate("/welcome");
                                } else {
                                  console.log("istermCompleted.", istermCompleted);
                                  if (istermCompleted === false) {
                                    console.log("call check condition");
                                    const newData = { ...values, status: "Pending" };
                                    dispatch(
                                      addInformConsentAction({
                                        id: UserId,
                                        data: newData,
                                        token,
                                      })
                                    );

                                    dispatch(
                                      popupAction({
                                        id: UserId,
                                        data: newobj,
                                        token,
                                      })
                                    );
                                  } else {
                                    let updateId = values?._id;
                                    console.log("call update api", updateId);
                                    delete values?._id;
                                    console.log("call update api", updateId);
                                    if (isNew === undefined || isNew === null) {
                                      dispatch(
                                        updateInformConsent({
                                          Id: updateId,
                                          data: values,
                                          token: token,
                                        })
                                      );
                                    }
                                  }
                                  handleClose();
                                  navigate("/practitionar-agreement-form");
                                }
                              }
                            }}
                          >
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                          </SoftButton>
                        </Box>
                      </React.Fragment>
                      {/* )} */}
                    </>
                  );
                }}
              </Formik>
            </Box>
          </DialogContent>
        </Grid>
      </SoftBox>
      <Footer />
      <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </PageLayout>

    // </div>
  );
}
