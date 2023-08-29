// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import * as React from "react";
import { useRef, useState } from "react";

import DialogContent from "@mui/material/DialogContent";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

import { Formik } from "formik";

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

const steps = ["", "", "", "", "", ""];

function PractitionerAgreement() {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const [activeStep, setActiveStep] = useState(0);

  const userdata = useSelector((state) => state.auth.auth.userdata);
  console.log("data", userdata);

  const handleNext = () => {
    setActiveStep((ActiveStep) => ActiveStep + 1);
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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          {/* <DialogTitle id="scroll-dialog-title">Details And Agreement</DialogTitle> */}
          <DialogContent dividers={scroll === "paper"}>
            <Box sx={{ width: "100%" }}>
              <Formik
                initialValues={{
                  practitioner_aggrement_buserInstitute_Signature: userdata?.practitioner_aggrement_buserInstitute_Signature,
                  practitioner_aggrement_buserInstitutePrint_name: userdata?.practitioner_aggrement_buserInstitutePrint_name,
                  practitioner_aggrement_buserInstitute_Title: userdata?.practitioner_aggrement_buserInstitute_Title,
                  practitioner_aggrement_buserInstitute_date: userdata?.practitioner_aggrement_buserInstitute_date,
                  practitioner_aggrement_Print_name: userdata?.practitioner_aggrement_Print_name,
                  practitioner_aggrement_Title: userdata?.practitioner_aggrement_Title,
                  practitioner_aggrement_date: userdata?.practitioner_aggrement_date,
                  practitioner_aggrement_Signature: userdata?.practitioner_aggrement_Signature,
                  practitioner_agreement_flag: userdata?.practitioner_agreement_flag,
                }}
              // validationSchema={validate}
              //onSubmit={handleSubmit}
              >
                {({ handleChange, touched, errors, values, setFieldValue, isSubmitting }) => {
                  console.log("val..", values);
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
                            <SoftButton
                              color="dark"
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              sx={{ mr: 1 }}
                            >
                              Back
                            </SoftButton>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <SoftButton
                              color="dark"
                              disabled={activeStep === 5}
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
          </DialogContent>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PractitionerAgreement;
