import { useState, Suspense, lazy, useMemo } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
// const UserInfo = lazy(() => import("layouts/pages/DoctorSoapForm/components/UserInfo"));
// const Address = lazy(() => import("layouts/pages/ProfileAfterlogin/components/Address"));
// const Socials = lazy(() => import("layouts/pages/ProfileAfterlogin/components/Socials"));

import UserInfo from "layouts/pages/DoctorSoapFrom/components/UserInfo/index";
import Address from "layouts/pages/DoctorSoapFrom/components/Address/index";
import Socials from "layouts/pages/DoctorSoapFrom/components/Socials/index";
import Formsixteen from "./components/Form16";
import FormFifteen from "./components/Form15";
// import Symptoms from "layouts/pages/DoctorSoapFrom/components/Symptoms/index";
import Diagnose from "./components/Diagnose/Diagnose";

// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/DoctorSoapFrom/schemas/validations";
import form from "layouts/pages/DoctorSoapFrom/schemas/form";
import initialValues from "layouts/pages/DoctorSoapFrom/schemas/initialValues";
import {
  popupAction,
  clearMessage,
  logout,
  doctorShopFormDataAction,
  getSoapFormDetailsAction,
  setActiveSteps,
} from "store/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PageLayout from "examples/LayoutContainers/PageLayout";
import SoftSnackbar from "components/SoftSnackbar";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import Footer from "layouts/authentication/components/Footer";
import pageRoutes from "page.routes";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { useEffect } from "react";
import DutiesPerformed from "./components/DutiesPerformed/DutiesPerformed";
import TenthPage from "./components/Tenthpage";
import EleventhPage from "./components/EleventhPage";
import TwelfthPage from "./components/TwelfthPage";
import ThirteenthPage from "./components/ThirteenthPage";
import ExcerciseTool from "./components/ExerciseTool/index";
import PosturePage from "./components/PosturePage/index";
import ForteenthPage from "./components/ForteenthPage";
import PatientInfo from "./components/UserInfo/index";
import FuncationalTest from "./components/FunctionalTest/index";
import AGKCTest from "./components/AGKCTestPage/index";
import SpinEval from "./components/SpineEval/index";
// import Symptoms from "./components/Symptoms/index";
import Symptoms from "./components/Symptoms/index";
import Formseventy from "./components/Form17";
import EightPage from "./components/EightPage";
import NextButton from "./NextButton";
import FormEighteen from "./components/Form18";
// import TwentyThree from "./components/Form24";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import NinethPage from "./components/NinethPage";
import TwentyFour from "./components/Form24";
import TwentyFive from "./components/Form25";
import FormTwentySix from "./components/Form26";
import FormTwentySeven from "./components/Form27";
import Introduction from "./components/Introduction";
import Form4 from "./components/Form4";
import SeventhPage from "./components/Form7/index";
import Page14 from "./components/Page14/index";
import Page21 from "./components/Page21/index";

import "./style.css";
import { clientIntakeFormGet } from "store/actions/actions";
import { turnOffPreviewOfPatientSoapForm } from "../../../store/actions/actions";
function getSteps() {
  return [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28,
  ];
}

function DoctorSoapForm() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const dispatch = useDispatch();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const doctorShopFromDetails = useSelector((state) => state?.auth?.doctorShopForm?.data?.page1);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const isLastStep = activeStep === steps.length - 1;
  const token = useSelector((state) => state.auth.auth.idToken);
  // const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  // const UserId = useSelector((state) => state.auth.auth._id);
  const navigate = useNavigate();
  // const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  // const isPractitioner = useSelector((state) => state.auth.auth.userType);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  function getStepContent(stepIndex, formData) {
    console.log("formData12", formData);
    switch (stepIndex) {
      case 0:
        return <Introduction stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      default:
      case 1:
        return (
          <FormTwentySeven
            formData={formData}
            stepIndex={stepIndex}
            setActiveStep={setActiveStep}
          />
        );

      // return <PatientInfo formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep}/>;
      case 2:
        return <Symptoms formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 3:
        return <Diagnose formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 4:
        return <Form4 formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 5:
        return (
          <DutiesPerformed
            formData={formData}
            stepIndex={stepIndex}
            setActiveStep={setActiveStep}
          />
        );
      case 6:
        return (
          <SeventhPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 7:
        return (
          <EightPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 8:
        return (
          <NinethPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 9:
        return (
          <TenthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 10:
        return (
          <EleventhPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 11:
        return (
          <TwelfthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 12:
        return (
          <ThirteenthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 13:
        return <Page14 formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 14:
        return (
          <ForteenthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );

      case 15:
        return (
          <FormFifteen formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 16:
        return (
          <Formsixteen formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 17:
        return (
          <Formseventy formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 18:
        return <FormEighteen stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      // case 17:
      //   return <Formseventy formData={formData} />;
      case 19:
        return (
          <ExcerciseTool formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 20:
        return <Page21 formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;

      case 21:
        return (
          <PosturePage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 22:
        return (
          <FuncationalTest
            formData={formData}
            stepIndex={stepIndex}
            setActiveStep={setActiveStep}
          />
        );
      case 23:
        return <AGKCTest formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 24:
        return <SpinEval formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 25:
        return (
          <TwentyFour formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 26:
        return (
          <TwentyFive formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 27:
        return (
          <FormTwentySix formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );

        return null;
    }
  }

  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /*practitionerId: UserId,*/ token: token }));
  // }, []);

  useEffect(() => {
    console.log("patientSoapFormDetail.shouldShowPatientSoapFormDetail--", patientSoapFormDetail);
    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      dispatch(
        getSoapFormDetailsAction({
          // practitionerId: UserId,
          patientId: patientSoapFormDetail.patientId,
          token: token,
        })
      );
    }
    // else {
    //   dispatch(
    //     getDoctorShopFormDataAction({
    //       patientId: soappatientId,
    //       // practitionerId: UserId,
    //       token: token,
    //     })
    //   );
    // }
  }, []);

  // const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page1);
  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, practitionerId: UserId }));
  // }, []);
  // console.log("clientIntakeformDetails..", clientIntakeformDetails);

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    console.log("log..call this");
    await sleep(1000);

    // eslint-disable-next-line no-alert
    // alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();

    // setActiveStep(0);
    console.log("log..acti", activeStep);
  };

  const handleSubmit = (values, actions) => {
    console.log("log..", values);
    console.log("log..", actions);
    if (isLastStep) {
      console.log("log..is last step");
      submitForm(values, actions);
    } else {
      console.log("log..more step");
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleSteps = (val) => {
    console.log("hhh", val);
    // setActiveStep(val - 1);
    dispatch(setActiveSteps(val - 1));
  };
  console.log("initialValues...", doctorShopFromDetails);

  const handleStepsClick = (no) => {
    console.log("no----", no);
    getStepContent(no);
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
      <SoftBox
        item
        lg={12}
        xs={12}
        position="absolute"
        top={{ xs: 35, lg: 50 }}
        right={{ xs: 5, sm: 20, md: 50 }}
      >
        <SoftButton
          style={{ marginRight: "20px", color: "inherit" }}
          onClick={() => {
            dispatch(turnOffPreviewOfPatientSoapForm());
            navigate("/welcome");
          }}
          className="doctor-soap-btn navbar-btn"
        >
          Back
        </SoftButton>
        <SoftButton
          style={{ color: "inherit" }}
          component={Link}
          to="/"
          onClick={() => dispatch(logout())}
          className="doctor-soap-btn navbar-btn"
        >
          Logout
        </SoftButton>
        {/* <Link to="/welcome" style={{ color: "inherit", paddingRight: "10%" }}>
          Back
        </Link> */}
        {/* <Link to="/" style={{ color: "inherit" }} onClick={() => dispatch(logout())}>
          Logout
        </Link> */}
      </SoftBox>
      <SoftBox
      // mt={10} py={1} mb={1}
      >
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={12}>
            <Stepper
              // sx={{
              //   overflowX: "scroll",
              //   "& .MuiStep-root": {
              //     "& .MuiStepLabel-root": {
              //       "& .MuiStepLabel-iconContainer": {
              //         "& .MuiSvgIcon-root": {
              //           stroke: "red",
              //           borderColor: "red",
              //           background: "red",
              //         },
              //       },
              //     },
              //   },
              // }}
              className="step"
              activeStep={activeStep}
              alternativeLabel
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel onClick={() => setActiveStep(label - 1)}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik
              // initialValues={initialValues}
              // enableReinitialize
              initialValues={{
                ...initialValues,
                ...doctorShopFromDetails,
                // ...clientIntakeformDetails,
              }}
              enableReinitialize
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                isSubmitting,
                setFieldValue,
                setValues,
                handleChange,
              }) => {
                return (
                  <Form id={formId} autoComplete="off">
                    <Card sx={{ height: "100%" }}>
                      <SoftBox p={2}>
                        <SoftBox>
                          {getStepContent(activeStep, {
                            values,
                            touched,
                            formField,
                            errors,
                            setFieldValue,
                            setValues,
                            handleChange,
                          })}
                          <SoftBox
                            mt={2}
                            // width="100%"
                            display="flex"
                            justifyContent="space-between"
                          >
                            {activeStep === 0 ? (
                              <SoftBox />
                            ) : (
                              <SoftButton
                                variant="gradient"
                                color="light"
                                onClick={handleBack}
                                className="soap-back"
                              >
                                back
                              </SoftButton>
                            )}
                            {/* <SoftButton
                              disabled={isSubmitting}
                              type="submit"
                              variant="gradient"
                              color="dark"
                              onClick={() => {
                                // if (isLastStep) {
                                //   console.log("log..update", values);
                                //   dispatch(
                                //     popupAction({
                                //       id: UserId,
                                //       data: { ...values, isFristProfileUpdate: true },
                                //       token,
                                //     })
                                //   );
                                //   setTimeout(() => {
                                //     console.log("log..dashbord redirect");
                                //     // navigate("/dashbordplan");
                                //     // isPractitioner === "doctor" && navigate("/dashbordplan")
                                //   }, 3000);
                                // }
                                dispatch(doctorShopFormDataAction({practitionerId : UserId, ...values}));
                              }}
                            >
                              {isLastStep ? "send" : "next"}
                            </SoftButton> */}
                            {/* <NextButton/> */}
                            {/* <Grid style={{ float: "right", position: "relative" }}>
                              <NextButton className="next" />
                            </Grid> */}
                          </SoftBox>
                        </SoftBox>
                      </SoftBox>
                    </Card>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </SoftBox>
      {/* <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      /> */}
      <Footer />
    </PageLayout>
  );
}

export default DoctorSoapForm;
