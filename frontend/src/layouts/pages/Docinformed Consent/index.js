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
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { use } from "stylis";
import { useDispatch } from "react-redux";
import { getInformConsentListAction } from "store/actions/actions";
import { getInformConsentAction } from "store/actions/actions";
const steps = ["", "", "", "", ""];

function InformedConsent() {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  // const [userdata, setUserData] = useState({});
  const location = useLocation();
  const [userdata, setuserdata] = useState({});
  const searchParams = new URLSearchParams(location.search);

  const id = searchParams.get("id");
  // const userdata = useSelector((state) => state?.auth?.informedConsent);

  useEffect(() => {
    dispatch(getInformConsentAction({ Id: id, token }));
    localStorage.setItem("docinformedConsent", true);
  }, []);
  const userdatas = useSelector((state) => state?.auth?.informedConsent);

  useEffect(() => {
    setuserdata(userdatas);
  }, [userdatas]);
  const handleNext = () => {
    setActiveStep((ActiveStep) => ActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log("userData--", userdata);

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
                  TermsAndSignature_name: userdata?.TermsAndSignature_name,
                  client_signature: userdata?.client_signature,
                  office_signature: userdata?.office_signature,
                  client_signature_date: userdata?.client_signature_date,
                  office_signature_date: userdata?.office_signature_date,
                  client_Retroactive_initial: userdata?.client_Retroactive_initial,
                  commitment_initial1: userdata?.commitment_initial1,
                  commitment_initial2: userdata?.commitment_initial2,
                  informed_consent_date: userdata?.informed_consent_date,
                  informed_Retroactive_initial: userdata?.informed_Retroactive_initial,
                  informed_consent_name: userdata?.informed_consent_name,
                  informed_consent_signature: userdata?.informed_consent_signature,
                  date_measurements: userdata?.date_measurements,
                  name_practitioner: userdata?.name_practitioner,
                  practitionerLicenceType: userdata?.practitionerLicenceType,
                  blood_pressure_upper: userdata?.blood_pressure_upper,
                  blood_pressure_lower: userdata?.blood_pressure_lower,
                  Resting_heart_rate: userdata?.Resting_heart_rate,
                  Oxygen_saturation: userdata?.Oxygen_saturation,
                  Respiratory_rate: userdata?.Respiratory_rate,
                  Body_temp: userdata?.Body_temp,
                  TermsAndSignature_client_name: userdata?.TermsAndSignature_client_name,
                  TermsAndSignature_client_signature: userdata?.TermsAndSignature_client_signature,
                  TermsAndSignature_client__date: userdata?.TermsAndSignature_client__date,
                  TermsAndSignature_ofc_signature: userdata?.TermsAndSignature_ofc_signature,
                  TermsAndSignature_ofc_date: userdata?.TermsAndSignature_ofc_date,
                  terms_Retroactive_initial: userdata?.terms_Retroactive_initial,
                  arbitraion_client_name: userdata?.arbitraion_client_name,
                  arbitraion_client_signature: userdata?.arbitraion_client_signature,
                  arbitraion_client__date: userdata?.arbitraion_client__date,
                  arbitraion_ofc_signature: userdata?.arbitraion_ofc_signature,
                  arbitraion_ofc_date: userdata?.arbitraion_ofc_date,
                  arbitraion_Retroactive_initial: userdata?.arbitraion_Retroactive_initial,
                  agrrement_sign_client: userdata?.agrrement_sign_client,
                  agrrement_sign_ofc: userdata?.agrrement_sign_ofc,
                  term_page_sign_client: userdata?.term_page_sign_client,
                  term_page_sign_ofc: userdata?.term_page_sign_ofc,
                  ARBITRATION_sign_client: userdata?.ARBITRATION_sign_client,
                  ARBITRATION_sign_ofc: userdata?.ARBITRATION_sign_ofc,
                  Informed_sign_client: userdata?.Informed_sign_client,
                  Informed_sign_ofc: userdata?.Informed_sign_ofc,
                  agrrement_flag: userdata?.agrrement_flag,
                  disclaimers_flag: userdata?.disclaimers_flag,
                  indemnification_flag: userdata?.indemnification_flag,
                  cancellation_flag: userdata?.cancellation_flag,
                  agrrementpage1_flag: userdata?.agrrementpage1_flag,
                }}
              >
                {({ handleChange, touched, errors, values, setFieldValue, isSubmitting }) => {
                  // console.log("val..",values.Retroactive_initial);
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
                          // userdata={value}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}
                      {activeStep === 2 && (
                        <Case2
                          setFieldValue={setFieldValue}
                          // userdata={value}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}
                      {activeStep === 3 && (
                        <Case3
                          setFieldValue={setFieldValue}
                          // userdata={value}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}
                      {activeStep === 4 && (
                        <Case4
                          setFieldValue={setFieldValue}
                          // userdata={value}
                          handleChange={handleChange}
                          touched={touched}
                          errors={errors}
                          isSubmitting={isSubmitting}
                        />
                      )}
                      {activeStep === steps.length ? (
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
                              disabled={activeStep === 4}
                              onClick={() => {
                                handleNext();
                              }}
                            >
                              {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </SoftButton>
                          </Box>
                        </React.Fragment>
                      )}
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

export default InformedConsent;
