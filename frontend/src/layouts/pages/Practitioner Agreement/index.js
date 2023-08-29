// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import * as React from "react";
import moment from "moment";
import { useRef, useState } from "react";

import DialogContent from "@mui/material/DialogContent";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { clearMessage, popupAction } from "store/actions/actions";
import { useSelector, useDispatch } from "react-redux";

import { Formik } from "formik";
import * as Yup from "yup";
import SoftButton from "components/SoftButton";

import { Checkbox, FormControlLabel } from "@mui/material";
import FormField from "../Profile/components/FormField";
import "./style.css";
import Case1 from "./component/case1";
import Case2 from "./component/case2";
import Case3 from "./component/case3";
import Case4 from "./component/case4";
import Case5 from "./component/case5";
import Case6 from "./component/case6";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar/index";
import pageRoutes from "page.routes";
import { logout } from "store/actions/actions";

const steps = ["", "", "", "", "", ""];

function PractitionerAgreement() {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [buttonDiable, setButtonDisable] = useState(true);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const navigate = useNavigate();
  // const handleNext = () => {
  //     setActiveStep((ActiveStep) => ActiveStep + 1);
  // };
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

  const descriptionElementRef = useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  console.log("test--", activeStep);

  const termAndCondition = useSelector((state) => state.auth.termAndCondition);

  let data = "";

  // console.log("signdata", data);
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  //   const handleNext = () => {
  //     let newSkipped = skipped;
  //     if (isStepSkipped(activeStep)) {
  //       newSkipped = new Set(newSkipped.values());
  //       newSkipped.delete(activeStep);
  //     }

  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //     setSkipped(newSkipped);
  //     setButtonDisable(true);
  //   };

  const handleClose = () => {
    setOpen(false);
  };

  let validate = Yup.object().shape({
    // practitioner_aggrement_buserInstitutePrint_name: Yup.string().trim()
    //     .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    //     .required("Name is required")
    //     .max(25, "Maximum 25 character")
    //     .min(3, "Minimum 3 character"),
    // practitioner_aggrement_buserInstitute_Title: Yup.string()
    //     .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    //     .required("title is required")
    //     .max(25, "Maximum 25 character")
    //     .min(3, "Minimum 3 character"),
    practitioner_aggrement_Title: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("title is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    practitioner_aggrement_buserInstitute_date: Yup.date().max(
      new Date(),
      "You Cannot Select Future Date"
    ),
    practitioner_aggrement_date: Yup.date().max(new Date(), "You Cannot Select Future Date"),
    practitioner_aggrement_Print_name: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("Name is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
  });

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
      <SoftBox px={3} mt={5} py={1} mb={1}>
        {/* <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}> */}
        {/* <DialogTitle id="scroll-dialog-title">Details And Agreement</DialogTitle> */}
        {/* <SoftBox mb={1}> */}
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          {/* <DialogTitle id="scroll-dialog-title">Details And Agreement</DialogTitle> */}
          {/* <DialogContent dividers={scroll === "paper"}> */}
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
                practitioner_aggrement_buserInstitute_Signature:
                  userdata?.practitioner_aggrement_buserInstitute_Signature,
                practitioner_aggrement_buserInstitutePrint_name:
                  userdata?.practitioner_aggrement_buserInstitutePrint_name,
                practitioner_aggrement_buserInstitute_Title:
                  userdata?.practitioner_aggrement_buserInstitute_Title,
                practitioner_aggrement_buserInstitute_date: moment().format("YYYY-MM-DD"),
                practitioner_aggrement_Print_name: userdata?.practitioner_aggrement_Print_name,
                practitioner_aggrement_Title: userdata?.practitioner_aggrement_Title,
                practitioner_aggrement_date: moment().format("YYYY-MM-DD"),
                practitioner_aggrement_Signature: userdata?.practitioner_aggrement_Signature,
                practitioner_agreement_flag: termAndCondition?.practitioner_agreement_flag,
                practitioner_agreement_flagPage1:
                  termAndCondition?.practitioner_agreement_flagPage1,
                practitioner_agreement_flagPage2:
                  termAndCondition?.practitioner_agreement_flagPage2,
                practitioner_agreement_flagPage3:
                  termAndCondition?.practitioner_agreement_flagPage3,
                practitioner_agreement_flagPage4:
                  termAndCondition?.practitioner_agreement_flagPage4,
                practitioner_agreement_flagPage5:
                  termAndCondition?.practitioner_agreement_flagPage5,
              }}
              validationSchema={validate}
              //onSubmit={handleSubmit}
            >
              {({ handleChange, touched, errors, values, setFieldValue, isSubmitting }) => {
                console.log("val..", values);
                useEffect(() => {
                  validation_flieds();
                }, [values, activeStep]);
                const validation_flieds = () => {
                  let {
                    practitioner_aggrement_buserInstitute_Signature,
                    practitioner_aggrement_buserInstitutePrint_name,
                    practitioner_aggrement_buserInstitute_Title,
                    practitioner_aggrement_buserInstitute_date,
                    practitioner_aggrement_Print_name,
                    practitioner_aggrement_Title,
                    practitioner_aggrement_date,
                    practitioner_aggrement_Signature,
                    practitioner_agreement_flag,
                    practitioner_agreement_flagPage1,
                    practitioner_agreement_flagPage2,
                    practitioner_agreement_flagPage3,
                    practitioner_agreement_flagPage4,
                    practitioner_agreement_flagPage5,
                  } = values;
                  if (activeStep === 0) {
                    console.log(
                      "practitioner_agreement_flagPage1..",
                      practitioner_agreement_flagPage1
                    );
                    if (practitioner_agreement_flagPage1) {
                      setButtonDisable(false);
                    } else {
                      setButtonDisable(true);
                    }
                  }

                  if (activeStep === 1) {
                    if (practitioner_agreement_flagPage2) {
                      setButtonDisable(false);
                    } else {
                      setButtonDisable(true);
                    }
                  }

                  if (activeStep === 2) {
                    if (practitioner_agreement_flagPage3) {
                      setButtonDisable(false);
                    } else {
                      setButtonDisable(true);
                    }
                  }

                  if (activeStep === 3) {
                    if (practitioner_agreement_flagPage4) {
                      setButtonDisable(false);
                    } else {
                      setButtonDisable(true);
                    }
                  }
                  if (activeStep === 4) {
                    if (practitioner_agreement_flagPage5) {
                      setButtonDisable(false);
                    } else {
                      setButtonDisable(true);
                    }
                  }
                  if (activeStep === 5) {
                    if (
                      // practitioner_aggrement_buserInstitute_Signature &&
                      // practitioner_aggrement_buserInstitutePrint_name &&
                      // practitioner_aggrement_buserInstitute_Title &&
                      practitioner_aggrement_buserInstitute_date &&
                      practitioner_aggrement_Print_name &&
                      practitioner_aggrement_Title &&
                      practitioner_aggrement_date &&
                      practitioner_aggrement_Signature &&
                      practitioner_agreement_flag
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
                      <Case2
                        setFieldValue={setFieldValue}
                        values={values}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        isSubmitting={isSubmitting}
                      />
                    )}
                    {activeStep === 2 && (
                      <Case3
                        setFieldValue={setFieldValue}
                        values={values}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        isSubmitting={isSubmitting}
                      />
                    )}
                    {activeStep === 3 && (
                      <Case4
                        setFieldValue={setFieldValue}
                        values={values}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        isSubmitting={isSubmitting}
                      />
                    )}
                    {activeStep === 4 && (
                      <Case5
                        setFieldValue={setFieldValue}
                        values={values}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        isSubmitting={isSubmitting}
                      />
                    )}
                    {activeStep === 5 && (
                      <Case6
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
                                        ) : (
                                            <React.Fragment>
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
                                                        // disabled={buttonDiable}
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
                                                                navigate("/profileafterlogin");
                                                            }
                                                        }}
                                                    >
                                                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                                    </SoftButton>
                                                </Box>
                                            </React.Fragment>
                                        )} */}
                    {
                      // activeStep === steps.length ? (
                      //   ""
                      //   // <React.Fragment>
                      //   //   <Typography sx={{ mt: 2, mb: 1 }}>
                      //   //     All steps completed - you&apos;re finished
                      //   //   </Typography>
                      //   //   <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                      //   //     <Box sx={{ flex: "1 1 auto" }} />
                      //   //   </Box>
                      //   // </React.Fragment>
                      // ) :

                      <React.Fragment>
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 6 }}>
                          {activeStep !== 0 && (
                            <SoftButton color="dark" onClick={handleBack} sx={{ mr: 1 }}>
                              Back
                            </SoftButton>
                          )}
                          <Box sx={{ flex: "1 1 auto" }} />
                          {/* <SoftButton
                                                        color="dark"
                                                        //disabled={activeStep === 5}
                                                        onClick={() => {
                                                            if (activeStep !== 5) {
                                                                handleNext();
                                                            }

                                                            // const newobj = {
                                                            //   ...values,
                                                            //   disclaimers_flag: true,
                                                            //   indemnification_flag: true,
                                                            //   cancellation_flag: true
                                                            // }
                                                            // if (activeStep === steps.length - 1) {
                                                            //   dispatch(popupAction({ id: UserId, data: values, token }));
                                                            //   handleClose();
                                                            //   console.log("send to profile");
                                                            //   // navigate("/profileafterlogin");
                                                            // }
                                                        }}
                                                    >
                                                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                                                    </SoftButton> */}
                          {console.log("logs--", activeStep, steps.length)}
                          <SoftButton
                            color="dark"
                            type="submit"
                            disabled={buttonDiable}
                            onClick={() => {
                              handleNext();
                              if (activeStep === 5) {
                                dispatch(popupAction({ id: UserId, data: values, token }));
                                handleClose();
                                console.log("send to profile");
                                navigate("/profileafterlogin");
                              }
                            }}
                          >
                            {activeStep === steps.length - 1 ? "Finish" : "Next"}
                          </SoftButton>
                        </Box>
                      </React.Fragment>
                    }
                  </>
                );
              }}
            </Formik>
          </Box>
          {/* </DialogContent> */}
        </Grid>
        {/* </SoftBox> */}
        <Footer />
        {/* </Grid> */}
      </SoftBox>
    </PageLayout>
  );
}

export default PractitionerAgreement;
