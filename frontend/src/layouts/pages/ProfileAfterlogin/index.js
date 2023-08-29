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
// const UserInfo = lazy(() => import("layouts/pages/ProfileAfterlogin/components/UserInfo"));
// const Address = lazy(() => import("layouts/pages/ProfileAfterlogin/components/Address"));
// const Socials = lazy(() => import("layouts/pages/ProfileAfterlogin/components/Socials"));

import UserInfo from "layouts/pages/ProfileAfterlogin/components/UserInfo";
import Address from "layouts/pages/ProfileAfterlogin/components/Address";
import Socials from "layouts/pages/ProfileAfterlogin/components/Socials";

// NewUser layout schemas for form and form feilds
import validations from "layouts/pages/ProfileAfterlogin/schemas/validations";
import form from "layouts/pages/ProfileAfterlogin/schemas/form";
import initialValues from "layouts/pages/ProfileAfterlogin/schemas/initialValues";
import { popupAction, clearMessage, logout } from "store/actions/actions";
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

function getSteps() {
  return ["User Info", "Address", "Emergency Info"];
}

function getStepContent(stepIndex, formData) {
  console.log("log..stepindex", stepIndex, "++++", formData);
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} />;
    case 1:
      return <Address formData={formData} />;
    case 2:
      return <Socials formData={formData} />;
    // case 3:
    //   return <Profile formData={formData} />;
    default:
      return null;
  }
}

function ProfileAfterlogin() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const userdata = useSelector((state) => state?.auth?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const isPractitioner = useSelector((state) => state.auth.auth.userType);
  console.log("isPractitioner..", isPractitioner);
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

  const updatedValue = {
    firstName: userdata?.userdata?.firstName || "",
    lastName: userdata?.userdata?.lastName || "",
  };
  const finalValues = {
    ...initialValues,
    ...updatedValue,
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
      <Grid item lg={12} xs={12} style={{ paddingTop: "60px", paddingLeft: "80%" }}>
        <SoftButton>
          <Link to="/" style={{ color: "inherit" }} onClick={() => dispatch(logout())}>
            Logout
          </Link>
        </SoftButton>
      </Grid>
      <SoftBox
      // mt={10} py={1} mb={1}
      >
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            <Stepper activeStep={activeStep} sx={{ marginBottom: "1.5rem" }} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik
              initialValues={finalValues}
              validationSchema={currentValidation}
              enableReinitialize={true}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting, setFieldValue, setValues }) => {
                return (
                  <Form id={formId} autoComplete="off">
                    <Card sx={{ height: "100%" }}>
                      <SoftBox p={2} py={4}>
                        <SoftBox>
                          {getStepContent(activeStep, {
                            values,
                            touched,
                            formField,
                            errors,
                            setFieldValue,
                            setValues,
                          })}
                          <SoftBox
                            mt={12}
                            width="100%"
                            display="flex"
                            justifyContent="space-between"
                          >
                            {activeStep === 0 ? (
                              <SoftBox />
                            ) : (
                              <SoftButton variant="gradient" color="light" onClick={handleBack}>
                                back
                              </SoftButton>
                            )}
                            <SoftButton
                              disabled={isSubmitting}
                              type="submit"
                              variant="gradient"
                              color="dark"
                              onClick={() => {
                                if (isLastStep) {
                                  console.log("log..update");
                                  dispatch(
                                    popupAction({
                                      id: UserId,
                                      data: { ...values, isFristProfileUpdate: true },
                                      token,
                                    })
                                  );
                                  setTimeout(() => {
                                    console.log("log..dashbord redirect");
                                    navigate("/dashbordplan");
                                    // isPractitioner === "doctor" ? navigate("/doctor-soap-form") : navigate("/dashbordplan")
                                  }, 3000);
                                }
                              }}
                            >
                              {isLastStep ? "send" : "next"}
                            </SoftButton>
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
      <Footer />
    </PageLayout>
  );
}

export default ProfileAfterlogin;
