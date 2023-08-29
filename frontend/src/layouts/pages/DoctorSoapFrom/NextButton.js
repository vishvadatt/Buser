import { useState, Suspense, lazy, useMemo } from "react";

// formik components
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
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
import { popupAction, clearMessage, logout, doctorShopFormDataAction } from "store/actions/actions";
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
import Symptoms from "./components/Symptoms/index";
import Formseventy from "./components/Form17";
import FuncationalTest from "./components/FunctionalTest/index";
import AGKCTest from "./components/AGKCTestPage/index";
import SpinEval from "./components/SpineEval/index";
import { useDispatch, useSelector } from "react-redux";

function getSteps() {
  return [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29,
  ];
}

function getStepContent(stepIndex, formData) {
  const token = useSelector((state) => state.auth.auth.idToken);
  console.log("log..stepindex", stepIndex);
  switch (stepIndex) {
    case 0:
      return <PatientInfo formData={formData} />;
    case 1:
      return <Symptoms formData={formData} />;
    case 2:
      return <Diagnose formData={formData} />;
    case 3:
      return <DutiesPerformed formData={formData} />;
    case 4:
      return <TenthPage formData={formData} />;
    case 5:
      return <EleventhPage formData={formData} />;
    case 6:
      return <TwelfthPage formData={formData} />;
    case 7:
      return <ThirteenthPage formData={formData} />;

    case 9:
      return <TenthPage formData={formData} />;
    case 10:
      return <EleventhPage formData={formData} />;
    case 11:
      return <TwelfthPage formData={formData} />;
    case 12:
      return <ThirteenthPage formData={formData} />;
    case 13:
      return <ForteenthPage formData={formData} />;
    case 14:
      return <FormFifteen formData={formData} />;
    case 15:
      return <Formsixteen formData={formData} />;
    case 16:
      return <Formseventy formData={formData} />;
    case 18:
      return <ExcerciseTool formData={formData} />;
    case 19:
      return <PosturePage formData={formData} />;
    case 20:
      return <FuncationalTest formData={formData} />;
    case 21:
      return <AGKCTest formData={formData} />;
    case 22:
      return <SpinEval />;
    default:
      return null;
  }
}
const NextButton = (data) => {
  const [activeStep, setActiveStep] = useState(0);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  console.log("soappatientId...", soappatientId);
  console.log("propsssss data", data);

  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const isPractitioner = useSelector((state) => state.auth.auth.userType);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

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
  let arrData = [];
  return (
    <>
      {/* <SoftButton
        //disabled={isSubmitting}
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
          dispatch(
            doctorShopFormDataAction({ patientId: soappatientId, practitionerId: UserId, data })
          );
          // dispatch(doctorShopFormDataAction({patientId : "6391fb1ecea213bf18a8a689", practitionerId : UserId, data}));
        }}
      >
        {isLastStep ? "send" : "next"}
      </SoftButton> */}
      <SoftButton
        //disabled={isSubmitting}
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
          dispatch(doctorShopFormDataAction({ 
            patientId: soappatientId, 
            practitionerId: UserId, 
            data:data,
            token:token
           }));
          // dispatch(doctorShopFormDataAction({patientId : "6391fb1ecea213bf18a8a689", practitionerId : UserId, data}));
        }}
      >
        {isLastStep ? "send" : "next"}
      </SoftButton>
    </>
  );
};

NextButton.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default NextButton;
