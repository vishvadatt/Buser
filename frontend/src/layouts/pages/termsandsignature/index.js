import * as React from "react";
import { useEffect, useRef, useState } from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { Checkbox, FormControlLabel, Grid } from "@mui/material";
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
import { clearMessage, popupAction, logout, updateInformConsent } from "store/actions/actions";

import SoftButton from "components/SoftButton";
import SignaturePad from "react-signature-canvas";

import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar/index";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pageRoutes from "page.routes";
import "./style.css";
import Footer from "layouts/authentication/components/Footer";

import moment from "moment";
import * as Yup from "yup";
import FormField from "../Profile/components/FormField";
import { addInformConsentAction } from "store/actions/actions";
import { getInformConsentAction } from "store/actions/actions";
import { findOneInformConsent } from "store/actions/actions";

const steps = ["", "", ""];

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

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isInformedFormFilled = useSelector((state) => state.auth.isInformedFormFilled);
  const termAndSignData = useSelector((state) => state.auth.findOneInformConsent);
  console.log("termAndSignData...", termAndSignData);
  const istermCompleted = useSelector((state) => state.auth.isVerfied);

  const isNew = searchParams.get("isnew");

  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  // useEffect(()=>{
  //   if(isInformedFormFilled===UserId){
  //     navigate("/profileafterlogin")
  //   }
  // },[isInformedFormFilled])

  useEffect(() => {
    if (isNew === undefined || isNew === null) {
      dispatch(findOneInformConsent({ id: UserId, token: token }));
    }
  }, []);

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

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

  const handleClose = () => {
    setOpen(false);
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

  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  const termAndCondition = useSelector((state) => state.auth.termAndCondition);
  console.log("termAndCondition..", termAndCondition);
  let validate = Yup.object().shape({
    TermsAndSignature_name: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("firstName is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 character"),
    TermsAndSignature_date: Yup.string().required("Date is required"),

    date_measurements: Yup.string().required("Date of measurements is required"),
    name_practitioner: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("Practitioner Name is required")
      .max(25, "Maximum 25 character")
      .min(3, "Minimum 3 characters"),
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
      .max(1000, "Invalid Respiratory rate")
      .min(0, "Invalid Respiratory rate"),
    Body_temp: Yup.number()
      .required("Body temp  is required")
      .min(0, "Invalid Body temp")
      .max(100.2, "Invalid Body temp"),
    Retroactive_initial: Yup.string().trim().required("Please Enter Initial Name"),
    Retroactive_initial1: Yup.string().trim().required("Please Enter Initial Name"),
    Retroactive_initial2: Yup.string().trim().required("Please Enter Initial Name"),
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
  const isLastStep = activeStep === steps?.length - 1;
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [activeStep]);

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
        <Grid item lg={12} xs={12} style={{ paddingTop: "60px", paddingLeft: "80%" }}>
          <SoftButton>
            <Link to="/" style={{ color: "inherit" }} onClick={() => dispatch(logout())}>
              Logout
            </Link>
          </SoftButton>
        </Grid>
      )}
      <SoftBox px={3} mt={5} py={1} mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <DialogTitle id="scroll-dialog-title">Details And Agreement</DialogTitle>
          <DialogContent>
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  console.log("stepProps..", stepProps);
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
                  TermsAndSignature_date: "",
                  Retroactive_initial: "",
                  Retroactive_initial1: "",
                  Retroactive_initial2: "",
                  date_measurements: "",
                  name_practitioner: "",
                  blood_pressure_upper: "",
                  blood_pressure_lower: "",
                  Resting_heart_rate: "",
                  Oxygen_saturation: "",
                  Respiratory_rate: "",
                  Body_temp: "",
                  term_page_sign: "",
                  ARBITRATION_page_sign: "",
                  Indemnification_sign: "",
                  disclaimers_flag: "",
                  indemnification_flag: "",
                  cancellation_flag: "",
                  ...termAndSignData,
                  // TermsAndSignature_name: userdata?.TermsAndSignature_name,
                  // TermsAndSignature_date: moment().format("YYYY-MM-DD"),
                  // Retroactive_initial: userdata?.Retroactive_initial,
                  // Retroactive_initial1: userdata?.Retroactive_initial1,
                  // Retroactive_initial2: userdata?.Retroactive_initial2,
                  // date_measurements: userdata?.date_measurements,
                  // name_practitioner: userdata?.name_practitioner,
                  // blood_pressure_upper: userdata?.blood_pressure_upper,
                  // blood_pressure_lower: userdata?.blood_pressure_lower,
                  // Resting_heart_rate: userdata?.Resting_heart_rate,
                  // Oxygen_saturation: userdata?.Oxygen_saturation,
                  // Respiratory_rate: userdata?.Respiratory_rate,
                  // Body_temp: userdata?.Body_temp,
                  // term_page_sign: userdata?.term_page_sign,
                  // ARBITRATION_page_sign: userdata?.ARBITRATION_page_sign,
                  // Indemnification_sign: userdata?.Indemnification_sign,
                  // disclaimers_flag: termAndCondition.disclaimers_flag,
                  // indemnification_flag: termAndCondition.indemnification_flag,
                  // cancellation_flag: termAndCondition.cancellation_flag,
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
                      Retroactive_initial,
                      Retroactive_initial1,
                      Retroactive_initial2,
                      Indemnification_sign,
                      TermsAndSignature_date,
                      disclaimers_flag,
                      date_measurements,
                      name_practitioner,
                      blood_pressure_lower,
                      blood_pressure_upper,
                      Resting_heart_rate,
                      Oxygen_saturation,
                      Respiratory_rate,
                      Body_temp,
                      term_page_sign,
                      ARBITRATION_page_sign,
                      indemnification_flag,
                      cancellation_flag,
                    } = values;
                    if (activeStep === 0) {
                      if (
                        Retroactive_initial &&
                        TermsAndSignature_name &&
                        Indemnification_sign &&
                        TermsAndSignature_date &&
                        disclaimers_flag
                      ) {
                        setButtonDisable(false);
                      } else {
                        setButtonDisable(true);
                      }
                    }
                    if (activeStep === 1) {
                      if (
                        Retroactive_initial1 &&
                        date_measurements &&
                        name_practitioner &&
                        Resting_heart_rate &&
                        Oxygen_saturation &&
                        Respiratory_rate &&
                        blood_pressure_upper &&
                        blood_pressure_lower &&
                        Body_temp &&
                        TermsAndSignature_name &&
                        TermsAndSignature_date &&
                        term_page_sign &&
                        indemnification_flag
                      ) {
                        setButtonDisable(false);
                      } else {
                        setButtonDisable(true);
                      }
                    }
                    if (activeStep === 2) {
                      if (
                        Retroactive_initial2 &&
                        ARBITRATION_page_sign &&
                        TermsAndSignature_name &&
                        TermsAndSignature_date &&
                        cancellation_flag !== false
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
                        <div>
                          <SoftBox px={3} className="step1">
                            <h2 style={{ textAlign: "center" }}>
                              INFORMED CONSENT, RELEASE AND INDEMNIFICATION FORM
                            </h2>
                            <p
                              style={{ marginBottom: "-28px", textAlign: "justify" }}
                              className="initialhere"
                            >
                              There are risks and possible risks associated with manual therapy
                              techniques, exercises and nutritional strategies used by doctors of
                              chiropractic and personal trainers. In particular you should note :
                              <br />
                              <br />
                              a) I understand and am aware that strength, flexibility, and aerobic
                              exercise, including the use of equipment, is a potentially hazardous
                              activity. I also understand that fitness activities involve a risk of
                              injury, and/or aggravation of a pre-existing injury or condition, and
                              I am voluntarily participating in these activities and using equipment
                              and machinery with knowledge of the dangers involved. I hereby agree
                              to expressly assume and accept any and all risks of injury.
                              <br />
                              b) I understand that the{" "}
                              <b>
                                dietary strategies and nutritional supplements recommended in this
                                program are intended only for nutritional use and health maintenance
                                and should not replace or delay the use of any conventional medical
                                (MD or DO) treatment.
                              </b>
                              <br />
                              c) I understand that the dietary strategies and nutritional
                              supplements recommended in this program have not been evaluated by the
                              Food and Drug Administration. And I understand that the products
                              recommended and used in{" "}
                              <b>
                                these programs are not intended to diagnose, treat, cure, or prevent
                                any disease. I hereby agree to expressly assume and accept any and
                                all responsibility for procuring conventional licensed medical (MD
                                or DO) screening for, supervision of, and treatment for any
                                medically diagnosable conditions, illnesses and diseases.
                              </b>
                              <br />
                              d) I do hereby further declare myself to be physically sound and
                              suffering from no condition, impairment, disease, infirmity, or other
                              illness that would prevent my participation in exercise, stretching
                              activities or use of associated equipment and machinery, dietary
                              strategies or nutritional supplementation.
                              <b>
                                {" "}
                                I do hereby acknowledge that I have been informed of the need for a
                                physician’s (MD or DO) screening for (including but not limited to
                                screening for cardiovascular risk) and approval for my participation
                                in exercise/fitness activities, in the use of exercise equipment and
                                machinery, and participation in a dietary protocol and the use of
                                nutritional supplements.
                              </b>{" "}
                              I also acknowledge that it has been recommended that I have a yearly
                              or more frequent physical examination and consultation with my
                              physician as to my physical activity, exercise, use of exercise and
                              training equipment, and participation in a dietary protocol and use of
                              nutritional supplementation, so I might have his/her recommendations
                              concerning these fitness activities, equipment use and dietary and
                              nutritional recommendations.{" "}
                              <b>
                                {" "}
                                I do hereby agree to immediately relay these initial and any updated
                                physician screening results and recommendations to all care givers
                                in this program. I acknowledge that I have either had a physical
                                examination and have been given my physician’s permission to fully
                                participate without limitation, or that I have decided to
                                participate in activity, the use of equipment and machinery, and the
                                participation in dietary protocols and nutritional supplementation
                                without the approval of my physician and do hereby assume all
                                responsibility for my participation and activities, utilization of
                                equipment and machinery in my activities, and participation in said
                                dietary protocols and nutritional supplementation strategies. If my
                                physician has recommended any limitations to my participation in any
                                aspect of this exercise, dietary and nutrition program, I hereby
                                agree to immediately relay these physician recommended limitations
                                and any updates to my caregiver in this program.
                              </b>
                              <br />
                              e) I agree to accept responsibility for{" "}
                              <b>
                                obtaining the following vital cardiovascular screening measurements
                                from a licensed practitioner within 7 days of submitting this form
                              </b>{" "}
                              and annotate them below (on page 2) to furnish my care giver with this
                              most recent screening information: Blood Pressure (BP), Resting Heart
                              Rate (RHR), Oxygen Saturation (SpO2), Respiratory Rate (RR) and Body
                              Temperature.
                              <br />
                              f) In consideration of being allowed to participate in the Buser
                              Institute Training Program, I do hereby waive, release, and forever
                              discharge the Buser Institute, their agents, representatives,
                              successors, subcontractors and assignees, from all liabilities,
                              actions, claims, demand, damages, costs, and expenses, which I may now
                              or in the future have against them or any oIndemnification_signf them
                              arising out of or in any way connected with my participation in the
                              program, including but not limited to all injuries that may be
                              suffered by me, including any injury arising from the negligence or
                              other action or inaction of the released parties. The undersigned
                              indemnifies, defends and holds harmless the Buser Institute, its
                              officers, directors, agents, employees and subcontractors against all
                              losses, liabilities, claims, damages, and expenses of every kind and
                              nature, including without limitation, reasonable attorneys’ fees and
                              expenses, which grow out of or are in any way connected with the
                              conduct or organization of this program or its treatment(s).
                              <br />
                              <br />I acknowledge I have read this consent and I have discussed, or
                              have been offered the opportunity to discuss, with my personal trainer
                              the nature and purpose of the treatment options, their therapeutic
                              recommendations (including exercises and nutrition) for my condition,
                              and the contents of this Consent, Release and Indemnification
                              Agreement. I consent to the activities, therapeutic protocols and
                              treatment recommended to me by my personal trainers and care providers
                              including any recommended exercises and nutrition protocols. I intend
                              this Consent, Release and Indemnification Agreement to apply to all my
                              present and future care.
                              <br />
                              <br />
                              <b>Retroactive Effect:</b> If Client intends this agreement to cover
                              services rendered before the date it is signed (for example, emergency
                              treatment).
                            </p>
                            <Grid
                              container
                              spacing={0}
                              style={{ alignItems: "center", marginBottom: "-15px" }}
                            >
                              <p className="clientInitialName">Client should initial here.</p>
                              <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
                                <FormField
                                  className="initialName"
                                  placeholder="Write initial"
                                  name="Retroactive_initial"
                                  value={values.Retroactive_initial}
                                  onChange={handleChange}
                                  error={errors.Retroactive_initial && touched.Retroactive_initial}
                                  success={
                                    values?.Retroactive_initial?.length > 0 &&
                                    !errors.Retroactive_initial
                                  }
                                />
                              </Grid>
                            </Grid>
                          </SoftBox>
                          <br />
                          <br />
                          <SoftBox component="form" px={10} className="nameAndDate">
                            <Grid container spacing={5}>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Name"
                                  placeholder="Enter Name.."
                                  name="TermsAndSignature_name"
                                  value={values.TermsAndSignature_name}
                                  onChange={handleChange}
                                  errorMsg
                                  error={
                                    errors.TermsAndSignature_name && touched.TermsAndSignature_name
                                  }
                                  success={
                                    values?.TermsAndSignature_name?.length > 0 &&
                                    !errors.TermsAndSignature_name
                                  }
                                />
                              </Grid>

                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Date"
                                  type="date"
                                  placeholder="date"
                                  name="TermsAndSignature_date"
                                  value={values.TermsAndSignature_date}
                                  // disabled="true"
                                  onChange={handleChange}
                                />
                              </Grid>

                              {values.Indemnification_sign !== "" ? (
                                <Grid item xs={12} sm={4} className="parentClass">
                                  <h5 style={{ fontSize: "0.75rem", fontWeight: 700 }}>Sign</h5>
                                  <img src={values.Indemnification_sign} />
                                  <h5 style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                                    Sign here
                                  </h5>
                                </Grid>
                              ) : (
                                <Grid item xs={6} sm={4}>
                                  <h5 style={{ fontSize: "13px" }}>Sign</h5>
                                  <SignaturePad
                                    canvasProps={{ width: 240, height: 150 }}
                                    ref={sigPad}
                                    penColor="black"
                                    backgroundColor="#f1f1f1"
                                    placeholder="sign"
                                    onBegin={(e) => onBeginfun(e.isTrusted)}
                                  />
                                  <div
                                    className="saveAndClear"
                                    style={{
                                      width: "66%",
                                    }}
                                  >
                                    <SoftButton onClick={clear} disabled={signBegin}>
                                      Clear
                                    </SoftButton>

                                    <SoftButton
                                      disabled={signBegin}
                                      onClick={() => {
                                        setFieldValue(
                                          "Indemnification_sign",
                                          sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                                        );
                                      }}
                                    >
                                      Save
                                    </SoftButton>
                                  </div>
                                </Grid>
                              )}
                            </Grid>

                            <SoftBox mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} sm={4}></Grid>
                                <Grid item xs={12} sm={4} className="Iaggre"></Grid>
                                <Grid item xs={12} sm={4}>
                                  <FormControlLabel
                                    style={{
                                      backgroundColor: "rgba(0,0,0,0.04)",
                                      width: "max-content",
                                      marginLeft: "2px",
                                    }}
                                    pl={2}
                                    control={
                                      <Checkbox
                                        checked={values.disclaimers_flag}
                                        name="disclaimers_flag"
                                        // onChange={handleChange}
                                        onChange={(e) =>
                                          setFieldValue("disclaimers_flag", e.target.checked)
                                        }
                                      />
                                    }
                                    label={"I Agree"}
                                  />
                                </Grid>
                              </Grid>
                            </SoftBox>
                          </SoftBox>
                        </div>
                      )}
                      {activeStep === 1 && (
                        <div>
                          <SoftBox px={3} className="step1">
                            <h2 style={{ textAlign: "center" }}>TERMS AND CONDITIONS</h2>
                            <p
                              style={{ marginBottom: "-28px", textAlign: "justify" }}
                              className="initialhere1"
                            >
                              Please agree to the following and digitally, or with pen and ink, sign
                              your name below to agree to these terms.
                              <br />
                              <br />
                              <b>
                                Photo, Video and Video Message Consultation Change and Cancelation
                                Policy:
                              </b>
                              <br />
                              <p>
                                48 Hours, two business days, change and/or cancellation notice is
                                required to avoid a 100% fee for scheduled services.
                              </p>
                              <br />
                              <br />
                              <b>Travel Clinic Consultation Change and Cancelation Policy:</b>
                              <br />
                              Travel Clinic appointments involve some unique variables for
                              consideration due to unrecoverable travel costs incurred by the Buser
                              Institute when we travel to a Travel Clinic location. As you have
                              experienced today, booking an appointment initially places a client on
                              a pending waitlist for that date, time and location until that Travel
                              Clinic meets the number of appointments required to energize a Travel
                              Clinic confirmation and processing of client payments.{" "}
                              <b>Changes of an appointment </b> time to another open time in the
                              same Travel Clinic week and location are permitted if done at least 48
                              hours (two business days) in advance of one’s originally scheduled
                              appointment.
                              <b>  For cancellations of an appointment</b>, again due to travel costs
                              incurred by the Buser Institute for Travel Clinics, once a final
                              booking confirmation is made with client payment processing, we are
                              unable to refund scheduled appointments for any reason of
                              cancellation. If a client must cancel such a confirmed (payment
                              processed) appointment, the client may transfer their appointment to
                              another client who will only incur any differential costs in
                              appointments due to the Buser Institute (ie. Existing Client
                              appointment transferred to a New Client appointment which is more
                              expensive). Alternatively, if the client is able to refer another
                              paying client to take their appointment (same appointment date & time
                              or another open date & time at the same Travel Clinic location and
                              week), a commensurate refund to the original client may be honored. In
                              such a case of confirmed appointment cancellation, the Buser Institute
                              will also make every reasonable effort to fill that canceled
                              appointment (same date, time and location) with another client from
                              the waitlist for that Travel Clinic, in which case the original client
                              may be refunded. However, if the original client and the Buser
                              Institute are unable to re-book the same appointment date, time and
                              location for that Travel Clinic, we will be unable to refund the
                              client for that appointment cost due to the opportunity loss. Please
                              contact the Buser Institute at {" "}
                              <b style={{ textDecoration: "underline" }}>admin@buserinstitue.com</b>{" "}
                              if you have any questions or concerns regarding this Travel Clinic
                              Change and Cancellation Policy.
                              <br />
                              <br />
                              <b>Insurance</b>
                              <br />
                              <b style={{ textAlign: "justify" }}>
                                This office does not accept insurance and will not process your
                                insurance forms. It is the Client&apos;s responsibility to furnish
                                the full agreed upon payment to our company for our services
                                rendered. It is your responsibility as the Client to work with your
                                insurance carrier in filing your claim and receiving reimbursement
                                if your insurance company has such a plan of coverage for personal
                                training. In some instances the insurance companies will deny or
                                reduce payment despite your best efforts to demonstrate the
                                necessity for personalized training. In the event that full or
                                partial payment is not made to you from your insurance carrier, it
                                is again your responsibility to negotiate this with your insurance
                                carrier.
                              </b>
                              <br />I have read and agree to the Personal Training Informed Consent,
                              Release and Indemnification Agreement.
                              <br />I have been provided with the privacy policy.
                              <br />I have read and agree to the copyright policy for the Buser
                              Institute and I agree not to share the copyrighted exercise pictures,
                              instructions, videos or any other information provided through their
                              consultation without the express written permission of a legally
                              appointed representative of the Buser Institute.
                              <br />I consent to the use of my information and photos being used for
                              education, research and case-study publications.
                              <br />
                              <br />
                              <b>Retroactive Effect:</b> If Client intends this agreement to cover
                              services rendered before the date it is signed (for example, emergency
                              treatment).
                            </p>
                            <Grid
                              container
                              spacing={0}
                              style={{ alignItems: "center", marginBottom: "-15px" }}
                            >
                              <p className="clientInitialName">Client should initial here.</p>
                              <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
                                <FormField
                                  className="initialName"
                                  placeholder="Write initial"
                                  name="Retroactive_initial1"
                                  value={values.Retroactive_initial1}
                                  onChange={handleChange}
                                  error={
                                    errors.Retroactive_initial1 && touched.Retroactive_initial1
                                  }
                                  success={
                                    values?.Retroactive_initial1?.length > 0 &&
                                    !errors.Retroactive_initial1
                                  }
                                />
                              </Grid>
                            </Grid>
                            <b>Cardiovascular Vital Measurements:</b>
                            <br />
                            <p style={{ textAlign: "justify" }}>
                              Please enter below your following measurements obtained from a
                              licensed practitioner within 7 days of submitting this form.
                            </p>
                            <br />
                            <p style={{ textAlign: "justify" }}>
                              NOTICE: BY SIGNING THIS CONTRACT IN INK OR ENTERING MY NAME DIGITALLY
                              IN THE SPACE PROVIDED BELOW I AFFIRM UNDER PENALTY OF PERJURY UNDER
                              THE LAWS OF THE UNITES STATES AND THE STATE OF CALIFORNIA THAT I AM
                              THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE CALIFORNIA HEALTH
                              AND SAFETY CODE SECTION 103526 (C), AND AGREE TO THE ABOVE INFORMED
                              CONSENT, RELEASE AND INDEMNIFICATION AGREMENT AND ITS TERMS AND
                              CONDITIONS. I AM AGREEING TO ALL TERMS AND CONDITIONS AND INFORMATION
                              LISTED ABOVE ON PAGE 1 AND 2.
                            </p>
                          </SoftBox>
                          <br />
                          <br />
                          <SoftBox component="form" px={20} className="nameAndDate">
                            <Grid container spacing={5}>
                              <Grid item xs={12} sm={4} mt={1} className="parentClass">
                                <FormField
                                  label="name"
                                  placeholder="Enter Name.."
                                  name="TermsAndSignature_name"
                                  value={values.TermsAndSignature_name}
                                  onChange={handleChange}
                                  errorMsg
                                  error={
                                    errors.TermsAndSignature_name && touched.TermsAndSignature_name
                                  }
                                  success={
                                    values?.TermsAndSignature_name?.length > 0 &&
                                    !errors.TermsAndSignature_name
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Date measurements taken by below listed licensed practitioner:"
                                  type="date"
                                  placeholder="date..."
                                  name="date_measurements"
                                  value={values.date_measurements}
                                  onChange={handleChange}
                                  errorMsg
                                  error={errors.date_measurements && touched.date_measurements}
                                  success={
                                    values.date_measurements?.length > 0 &&
                                    !errors.date_measurements
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Name (MD/DO/RN/PT/DC, etc) of practitioner who took the measurements"
                                  placeholder="Enter Name.."
                                  name="name_practitioner"
                                  value={values.name_practitioner}
                                  onChange={handleChange}
                                  errorMsg
                                  error={errors.name_practitioner && touched.name_practitioner}
                                  success={
                                    values.name_practitioner?.length > 0 &&
                                    !errors.name_practitioner
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  inputProps={{ min: 0, max: 120 }}
                                  label="Blood Pressure (upper)"
                                  min="1"
                                  type="number"
                                  placeholder="Write here"
                                  name="blood_pressure_upper"
                                  value={values.blood_pressure_upper}
                                  onChange={handleChange}
                                  errorMsg
                                  error={
                                    errors.blood_pressure_upper && touched.blood_pressure_upper
                                  }
                                  success={
                                    values.blood_pressure_upper?.length > 0 &&
                                    !errors.blood_pressure_upper
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  inputProps={{ min: 0, max: 120 }}
                                  label="Blood Pressure (lower)"
                                  type="number"
                                  placeholder="Write here"
                                  name="blood_pressure_lower"
                                  value={values.blood_pressure_lower}
                                  onChange={handleChange}
                                  errorMsg
                                  error={
                                    errors.blood_pressure_lower && touched.blood_pressure_lower
                                  }
                                  success={
                                    values.blood_pressure_lower?.length > 0 &&
                                    !errors.blood_pressure_lower
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Resting Heart Rate (RHR) beats per minute"
                                  type="number"
                                  placeholder="Write here"
                                  name="Resting_heart_rate"
                                  value={values.Resting_heart_rate}
                                  onChange={handleChange}
                                  errorMsg
                                  error={errors.Resting_heart_rate && touched.Resting_heart_rate}
                                  success={
                                    values.Resting_heart_rate?.length > 0 &&
                                    !errors.Resting_heart_rate
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Oxygen Saturation (SpO2) %"
                                  type="number"
                                  placeholder="Write here"
                                  name="Oxygen_saturation"
                                  value={values.Oxygen_saturation}
                                  onChange={handleChange}
                                  errorMsg
                                  error={errors.Oxygen_saturation && touched.Oxygen_saturation}
                                  success={
                                    values.Oxygen_saturation?.length > 0 &&
                                    !errors.Oxygen_saturation
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Respiratory Rate (RR) breaths per minute"
                                  type="number"
                                  placeholder="Write here"
                                  name="Respiratory_rate"
                                  value={values.Respiratory_rate}
                                  onChange={handleChange}
                                  errorMsg
                                  error={errors.Respiratory_rate && touched.Respiratory_rate}
                                  success={
                                    values.Respiratory_rate?.length > 0 && !errors.Respiratory_rate
                                  }
                                />
                              </Grid>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Body Temperature degrees Fahrenheit"
                                  type="number"
                                  placeholder="Write here"
                                  name="Body_temp"
                                  value={values.Body_temp}
                                  onChange={handleChange}
                                  errorMsg
                                  error={errors.Body_temp && touched.Body_temp}
                                  success={values.Body_temp?.length > 0 && !errors.Body_temp}
                                />
                              </Grid>

                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Date"
                                  type="date"
                                  placeholder="date"
                                  name="TermsAndSignature_date"
                                  value={values.TermsAndSignature_date}
                                  // disabled="true"
                                />
                              </Grid>
                              <Grid item xs={12} sm={4}></Grid>
                              {values.term_page_sign !== "" ? (
                                <Grid item xs={12} sm={4} className="parentClass">
                                  <h5 style={{ fontSize: "13px" }}>Sign</h5>
                                  <img src={values.term_page_sign} />
                                  <h5 style={{ fontSize: "13px" }}>Sign here</h5>
                                </Grid>
                              ) : (
                                <Grid item xs={12} sm={4} className="parentClass">
                                  <h5 style={{ fontSize: "13px" }}>Sign here</h5>
                                  <SignaturePad
                                    canvasProps={{ width: 240, height: 150 }}
                                    ref={sigPad}
                                    penColor="black"
                                    backgroundColor="#f1f1f1"
                                    onBegin={(e) => onBeginfun1(e.isTrusted)}
                                  />
                                  <div className="saveAndClear" style={{ width: "78%" }}>
                                    <SoftButton onClick={clear} disabled={signBegin1}>
                                      Clear
                                    </SoftButton>
                                    <SoftButton
                                      disabled={signBegin1}
                                      onClick={() => {
                                        setFieldValue(
                                          "term_page_sign",
                                          sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                                        );
                                      }}
                                    >
                                      Save
                                    </SoftButton>
                                  </div>
                                </Grid>
                              )}
                            </Grid>
                            <SoftBox mt={2}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} sm={4}></Grid>
                                <Grid item xs={12} sm={4}></Grid>
                                <Grid item xs={12} sm={4}>
                                  <FormControlLabel
                                    style={{
                                      backgroundColor: "rgba(0,0,0,0.04)",
                                      width: "max-content",
                                      marginLeft: "2px",
                                    }}
                                    pl={2}
                                    control={
                                      <Checkbox
                                        className="stylebox"
                                        checked={values.indemnification_flag}
                                        name="indemnification_flag"
                                        // onChange={handleChange}
                                        onChange={(e) =>
                                          setFieldValue("indemnification_flag", e.target.checked)
                                        }
                                      />
                                    }
                                    label={"I Agree"}
                                  />
                                </Grid>
                              </Grid>
                            </SoftBox>
                          </SoftBox>
                        </div>
                      )}
                      {activeStep === 2 && (
                        <div>
                          <SoftBox className="step">
                            <h2 style={{ textAlign: "center" }}>ARBITRATION AGREEMENT</h2>
                            <p
                              style={{ marginBottom: "-28px", textAlign: "justify" }}
                              className="initialhere1"
                            >
                              <b>Article 1: Agreement to Arbitrate:</b> It is understood that any
                              dispute as to medical, chiropractic and/or personal training
                              malpractice, that is as to whether any such services rendered under
                              this contract were unnecessary or unauthorized or were improperly,
                              negligently or incompetently rendered, will be determined by
                              submission to arbitration as provided by state and federal law, and
                              not by a lawsuit or resort to court process, except as state and
                              federal law provides for judicial review of arbitration proceedings.
                              Both parties to this contract, by entering into it, are giving up
                              their constitutional right to have any such dispute decided in a court
                              of law before a jury, and instead are accepting the use of
                              arbitration. Further, the parties will not have the right to
                              participate as a member of any class of claimants, and there shall be
                              no authority for any dispute to be decided on a class action basis. An
                              arbitration can only decide a dispute between the parties and may not
                              consolidate or join the claims of other persons who have similar
                              claims.
                              <br />
                              <br />
                              <b>Article 2: All Claims Must be Arbitrated:</b> It is also understood
                              that any dispute that does not relate to medical, chiropractic or
                              personal training malpractice, including disputes as to whether or not
                              a dispute is subject to arbitration, as to whether this agreement is
                              unconscionable, and any procedural disputes, will also be determined
                              by submission to binding arbitration. It is the intention of the
                              parties that this agreement bind all parties as to all claims,
                              including claims arising out of or relating to treatment or services
                              provided by the care provider, including any heirs or past, present or
                              future spouse(s) of the Client in relation to all claims, including
                              loss of consortium. This agreement is also intended to bind any
                              children of the Client whether born or unborn at the time of the
                              occurrence giving rise to any claim. This agreement is intended to
                              bind the Client and the care provider and/or other licensed care
                              providers, preceptors, interns or subcontractors who now or in the
                              future consult with the Client while employed by, working or
                              associated with or serving as a back-up for the care provider,
                              including those working at the care providers clinic or office or any
                              other clinic or office or facility or premises whether signatories to
                              this form or not. All claims for monetary damages exceeding the
                              jurisdictional limit of the small claims court against the care
                              provider, and/or the care providers associates, association,
                              corporation, partnership, employees, agents, subcontractors and
                              estate, must be arbitrated including, without limitation, claims for
                              loss of consortium, wrongful death, emotional distress, injunctive
                              relief, or punitive damages. This agreement is intended to create an
                              open book account unless and until revoked.
                              <br />
                              <br />
                              <b>Article 3: Procedures and Applicable Law:</b> A demand for
                              arbitration must be communicated in writing to all parties. Each party
                              shall select an arbitrator (party arbitrator) within thirty days, and
                              a third arbitrator (neutral arbitrator) shall be selected by the
                              arbitrators appointed by the parties within thirty days thereafter.
                              The neutral arbitrator shall then be the sole arbitrator and shall
                              decide the arbitration. Each party to the arbitration shall pay such
                              partys pro rata share of the expenses and fees of the neutral
                              arbitrator, together with other expenses of the arbitration incurred
                              or approved by the neutral arbitrator, not including counsel fees,
                              witness fees, or other expenses incurred by a party for such partys
                              own benefit. Either party shall have the absolute right to bifurcate
                              the issues of liability and damage upon written request to the neutral
                              arbitrator. The parties consent to the intervention and joinder in
                              this arbitration of any person or entity that would otherwise be a
                              proper additional party in a court action, and upon such intervention
                              and joinder, any existing court action against such additional person
                              or entity shall be stayed pending arbitration. The parties agree that
                              provisions of state and federal law, where applicable, establishing
                              the right to introduce evidence of any amount payable as a benefit to
                              the Client to the maximum extent permitted by law, limiting the right
                              to recover non-economic losses, and the right to have a judgment for
                              future damages conformed to periodic payments, shall apply to disputes
                              within this Arbitration Agreement. The parties further agree that the
                              Commercial Arbitration Rules of the American Arbitration Association
                              shall govern any arbitration conducted pursuant to this Arbitration
                              Agreement.
                              <br />
                              <br />
                              <b>Article 4: General Provision:</b> All claims based upon the same
                              incident, transaction, or related circumstances shall be arbitrated in
                              one proceeding. A claim shall be waived and forever barred if (1) on
                              the date notice thereof is received, the claim, if asserted in a civil
                              action, would be barred by the applicable legal statute of
                              limitations, or (2) the claimant fails to pursue the arbitration claim
                              in accordance with the procedures prescribed herein with reasonable
                              diligence.
                              <br />
                              <br />
                              <b>Article 5: Revocation:</b>This agreement may be revoked by written
                              notice delivered to the care provider within 30 days of signature and,
                              if not revoked, will govern all professional services received by the
                              Client and all other disputes between the parties.
                              <br />
                              <br />
                              <b>Article 6: Retroactive Effect: </b>If Client intends this agreement
                              to cover services rendered before the date it is signed (for example,
                              emergency treatment).
                            </p>
                            <Grid
                              container
                              spacing={0}
                              style={{ alignItems: "center", marginBottom: "-15px" }}
                            >
                              <p className="clientInitialName">Client should initial here.</p>
                              <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
                                <FormField
                                  className="initialName"
                                  placeholder="Write initial"
                                  name="Retroactive_initial2"
                                  value={values.Retroactive_initial2}
                                  onChange={handleChange}
                                  error={
                                    errors.Retroactive_initial2 && touched.Retroactive_initial2
                                  }
                                  success={
                                    values?.Retroactive_initial2?.length > 0 &&
                                    !errors.Retroactive_initial2
                                  }
                                />
                              </Grid>
                            </Grid>
                            {/* <br /> */}
                            <p style={{ textAlign: "justify" }}>
                              If any provision of this Arbitration Agreement is held invalid or
                              unenforceable, the remaining provisions shall remain in full force and
                              shall not be affected by the invalidity of any other provision. I
                              understand that I have the right to receive a copy of this Arbitration
                              Agreement. By my signature below, I acknowledge that I have received a
                              copy.
                            </p>
                            <br />
                            <p style={{ textAlign: "justify" }}>
                              NOTICE: BY SIGNING THIS CONTRACT IN INK OR ENTERING MY NAME DIGITALLY
                              IN THE SPACE PROVIDED BELOW I AFFIRM UNDER PENALTY OF PERJURY UNDER
                              THE LAWS OF THE UNITES STATES AND THE STATE OF CALIFORNIA THAT I AM
                              THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE CALIFORNIA HEALTH
                              AND SAFETY CODE SECTION 103526 (C), AND I AGREE TO THE ABOVE. I AGREE
                              TO HAVE ANY ISSUE OF MALPRACTICE DECIDED BY NEUTRAL ARBITRATION AND I
                              AM GIVING UP MY RIGHT TO A JURY OR COURT TRIAL. SEE ARTICLE 1 OF THIS
                              CONTRACT.
                            </p>
                          </SoftBox>
                          <br />
                          <br />
                          <SoftBox component="form" px={20} className="nameAndDate">
                            <Grid container spacing={5}>
                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="name"
                                  placeholder="Enter Name.."
                                  name="TermsAndSignature_name"
                                  value={values.TermsAndSignature_name}
                                  onChange={handleChange}
                                  errorMsg
                                  error={
                                    errors.TermsAndSignature_name && touched.TermsAndSignature_name
                                  }
                                  success={
                                    values.TermsAndSignature_name?.length > 0 &&
                                    !errors.TermsAndSignature_name
                                  }
                                />
                              </Grid>

                              <Grid item xs={12} sm={4} className="parentClass">
                                <FormField
                                  label="Date"
                                  type="date"
                                  minDate={new Date("12/31/1920")}
                                  placeholder="date"
                                  name="TermsAndSignature_date"
                                  value={values.TermsAndSignature_date}
                                  // disabled="true"
                                />
                              </Grid>
                              {values.ARBITRATION_page_sign !== "" ? (
                                <Grid item xs={12} sm={4}>
                                  <h5 style={{ fontSize: "13px" }}>Sign</h5>
                                  <img src={values.ARBITRATION_page_sign} />
                                  <h5 style={{ fontSize: "13px" }}>Sign here</h5>
                                </Grid>
                              ) : (
                                <Grid item xs={12} sm={4}>
                                  <h5 style={{ fontSize: "13px" }}>Sign here</h5>
                                  <SignaturePad
                                    ref={sigPad}
                                    canvasProps={{ width: 240, height: 150 }}
                                    penColor="black"
                                    backgroundColor="#f1f1f1"
                                    onBegin={(e) => onBeginfun2(e.isTrusted)}
                                  />
                                  <div className="saveAndClear" style={{ width: "78%" }}>
                                    <SoftButton onClick={clear} disabled={signBegin2}>
                                      Clear
                                    </SoftButton>

                                    <SoftButton
                                      disabled={signBegin2}
                                      onClick={() => {
                                        setFieldValue(
                                          "ARBITRATION_page_sign",
                                          sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                                        );
                                      }}
                                    >
                                      Save
                                    </SoftButton>
                                  </div>
                                </Grid>
                              )}
                            </Grid>
                            <SoftBox mt={3}>
                              <Grid container spacing={5}>
                                <Grid item xs={12} sm={4}></Grid>
                                <Grid item xs={12} sm={4}></Grid>
                                <Grid item xs={12} sm={4}>
                                  <FormControlLabel
                                    style={{
                                      backgroundColor: "rgba(0,0,0,0.04)",
                                      width: "max-content",
                                      marginLeft: "2px",
                                    }}
                                    pl={2}
                                    control={
                                      <Checkbox
                                        className="stylebox"
                                        checked={values.cancellation_flag}
                                        name="cancellation_flag"
                                        // onChange={handleChange}
                                        onChange={(e) =>
                                          setFieldValue("cancellation_flag", e.target.checked)
                                        }
                                      />
                                    }
                                    label={"I Agree"}
                                  />
                                </Grid>
                              </Grid>
                            </SoftBox>
                          </SoftBox>
                        </div>
                      )}

                      {/* {activeStep === steps?.length ? (
                        <React.Fragment>
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                          </Typography>
                          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <Box sx={{ flex: "1 1 auto" }} />
                          </Box>
                        </React.Fragment>
                      ) : ( */}
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
                            disabled={buttonDiable}
                            onClick={() => {
                              const newobj = {
                                disclaimers_flag: values?.disclaimers_flag,
                                indemnification_flag: values?.indemnification_flag,
                                cancellation_flag: values?.cancellation_flag,
                                isServicesFreez: true,
                              };
                              handleNext();
                              if (activeStep === steps?.length - 1) {
                                if (isNew) {
                                  const newData = { ...values, status: "Pending" };
                                  console.log("newData...", newData);
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
                                  if (istermCompleted === false) {
                                    const newData = { ...values, status: "Pending" };
                                    dispatch(
                                      addInformConsentAction({
                                        id: UserId,
                                        data: newData,
                                        token,
                                        // navigate,
                                      })
                                    );
                                    dispatch(
                                      popupAction({
                                        id: UserId,
                                        data: newobj,
                                        token,
                                        // navigate,
                                        // userType,
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
                                  navigate("/profileafterlogin");
                                }
                              }
                            }}
                          >
                            {activeStep === steps?.length - 1 ? "Finish" : "Next"}
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
