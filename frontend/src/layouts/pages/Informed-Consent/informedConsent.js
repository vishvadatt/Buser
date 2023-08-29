// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import * as React from "react";
import { useRef, useEffect, useState } from "react";

import DialogContent from "@mui/material/DialogContent";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

import { Formik } from "formik";

import SoftButton from "components/SoftButton";
import DocInformedConsent from "../Docinformed Consent/index";
import { Checkbox, FormControlLabel } from "@mui/material";
import FormField from "../Profile/components/FormField";
import "./style.css";
import { useDispatch } from "react-redux";
import { getInformConsentAction } from "store/actions/actions";
import { useLocation } from "react-router-dom";
const steps = ["", "", ""];

function InformedConsent() {
  const [open, setOpen] = useState(true);
  const [scroll, setScroll] = useState("paper");
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  // const [userdata, setUserData] = useState({});
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  // const userdata = useSelector((state) => state?.auth?.auth?.userdata);
  const userdata = useSelector((state) => state.auth.informedConsent);

  console.log(userdata, "userdatauserdata", id);

  useEffect(() => {
    dispatch(getInformConsentAction({ Id: id, token }));
    localStorage.setItem("informedConsent", true);
  }, []);

  // useEffect(() => {
  //   setUserData(informedConsent);
  // }, [informedConsent]);
  console.log(userdata, "userdatauserdata22", id);
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

  const termAndCondition = useSelector((state) => state.auth.termAndCondition);
  const isPractitioner = useSelector((state) => state.auth.auth.userType);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [activeStep]);
  console.log(userdata, "usrsrsrsrsr");
  return (
    <>
      {isPractitioner === "doctor" ? (
        <DocInformedConsent />
      ) : (
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
                      TermsAndSignature_date: userdata?.TermsAndSignature_date,
                      date_measurements: userdata?.date_measurements,
                      name_practitioner: userdata?.name_practitioner,
                      blood_pressure_upper: userdata?.blood_pressure_upper,
                      blood_pressure_lower: userdata?.blood_pressure_lower,
                      Resting_heart_rate: userdata?.Resting_heart_rate,
                      Oxygen_saturation: userdata?.Oxygen_saturation,
                      Respiratory_rate: userdata?.Respiratory_rate,
                      Body_temp: userdata?.Body_temp,
                      term_page_sign: userdata?.term_page_sign,
                      ARBITRATION_page_sign: userdata?.ARBITRATION_page_sign,
                      Indemnification_sign: userdata?.Indemnification_sign,
                      disclaimers_flag: termAndCondition?.disclaimers_flag,
                      indemnification_flag: termAndCondition?.indemnification_flag,
                      cancellation_flag: termAndCondition?.cancellation_flag,
                      Retroactive_initial: userdata?.Retroactive_initial,
                      Retroactive_initial1: userdata?.Retroactive_initial1,
                      Retroactive_initial2: userdata?.Retroactive_initial2,
                    }}
                  >
                    {({ handleChange, touched, errors, values, setFieldValue }) => {
                      console.log("val..", values);
                      return (
                        <>
                          {console.log("stp--", activeStep)}
                          {activeStep === 0 && (
                            <div>
                              <SoftBox>
                                <h2 className="CONSENT">
                                  INFORMED CONSENT, RELEASE AND INDEMNIFICATION FORM
                                </h2>
                                <p
                                  style={{
                                    wordBreak: "break-all",
                                    marginBottom: "-28px",
                                    textAlign: "justify",
                                  }}
                                  className="initialhere
"
                                >
                                  There are risks and possible risks associated with manual therapy
                                  techniques, exercises and nutritional strategies used by doctors
                                  of chiropractic and personal trainers. In particular you should
                                  note :
                                  <br />
                                  <br />
                                  a) I understand and am aware that strength, flexibility, and
                                  aerobic exercise, including the use of equipment, is a potentially
                                  hazardous activity. I also understand that fitness activities
                                  involve a risk of injury, and/or aggravation of a pre-existing
                                  injury or condition, and I am voluntarily participating in these
                                  activities and using equipment and machinery with knowledge of the
                                  dangers involved. I hereby agree to expressly assume and accept
                                  any and all risks of injury.
                                  <br />
                                  b) I understand that the{" "}
                                  <b>
                                    dietary strategies and nutritional supplements recommended in
                                    this program are intended only for nutritional use and health
                                    maintenance and should not replace or delay the use of any
                                    conventional medical (MD or DO) treatment.
                                  </b>
                                  <br />
                                  c) I understand that the dietary strategies and nutritional
                                  supplements recommended in this program have not been evaluated by
                                  the Food and Drug Administration. And I understand that the
                                  products recommended and used in{" "}
                                  <b>
                                    these programs are not intended to diagnose, treat, cure, or
                                    prevent any disease. I hereby agree to expressly assume and
                                    accept any and all responsibility for procuring conventional
                                    licensed medical (MD or DO) screening for, supervision of, and
                                    treatment for any medically diagnosable conditions, illnesses
                                    and diseases.
                                  </b>
                                  <br />
                                  d) I do hereby further declear myself to be physically sound and
                                  suffering from no condition, impairment, disease, infirmity, or
                                  other illness that would prevent my participation in exercise,
                                  stretching activities or use of associated equipment and
                                  machinery, dietary strategies or nutritional supplementation.
                                  <b>
                                    {" "}
                                    I do hereby acknowledge that I have been informed of the need
                                    for a physician’s (MD or DO) screening for (including but not
                                    limited to screening for cardiovascular risk) and approval for
                                    my participation in exercise/fitness activities, in the use of
                                    exercise equipment and machinery, and participation in a dietary
                                    protocol and the use of nutritional supplements.
                                  </b>{" "}
                                  I also acknowledge that it has been recommended that I have a
                                  yearly or more frequent physical examination and consultation with
                                  my physician as to my physical activity, exercise, use of exercise
                                  and training equipment, and participation in a dietary protocol
                                  and use of nutritional supplementation, so I might have his/her
                                  recommendations concerning these fitness activities, equipment use
                                  and dietary and nutritional recommendations.{" "}
                                  <b>
                                    {" "}
                                    I do hereby agree to immediately relay these initial and any
                                    updated physician screening results and recommendations to all
                                    care givers in this program. I acknowledge that I have either
                                    had a physical examination and have been given my physician’s
                                    permission to fully participate without limitation, or that I
                                    have decided to participate in activity, the use of equipment
                                    and machinery, and the participation in dietary protocols and
                                    nutritional supplementation without the approval of my physician
                                    and do hereby assume all responsibility for my participation and
                                    activities, utilization of equipment and machinery in my
                                    activities, and participation in said dietary protocols and
                                    nutritional supplementation strategies. If my physician has
                                    recommended any limitations to my participation in any aspect of
                                    this exercise, dietary and nutrition program, I hereby agree to
                                    immediately relay these physician recommended limitations and
                                    any updates to my caregiver in this program.
                                  </b>
                                  <br />
                                  e) I agree to accept responsibility for{" "}
                                  <b>
                                    obtaining the following vital cardiovascular screening
                                    measurements from a licensed practitioner within 7 days of
                                    submitting this form
                                  </b>{" "}
                                  and annotate them below (on page 2) to furnish my care giver with
                                  this most recent screening information: Blood Pressure (BP),
                                  Resting Heart Rate (RHR), Oxygen Saturation (SpO2), Respiratory
                                  Rate (RR) and Body Temperature.
                                  <br />
                                  f) In consideration of being allowed to participate in the Buser
                                  Institute Training Program, I do hereby waive, release, and
                                  forever discharge the Buser Institute, their agents,
                                  representatives, successors, subcontractors and assignees, from
                                  all liabilities, actions, claims, demand, damages, costs, and
                                  expenses, which I may now or in the future have against them or
                                  any oIndemnification_signf them arising out of or in any way
                                  connected with my participation in the program, including but not
                                  limited to all injuries that may be suffered by me, including any
                                  injury arising from the negligence or other action or inaction of
                                  the released parties. The undersigned indemnifies, defends and
                                  holds harmless the Buser Institute, its officers, directors,
                                  agents, employees and subcontractors against all losses,
                                  liabilities, claims, damages, and expenses of every kind and
                                  nature, including without limitation, reasonable attorneys’ fees
                                  and expenses, which grow out of or are in any way connected with
                                  the conduct or organization of this program or its treatment(s).
                                  <br />
                                  <br />I acknowledge I have read this consent and I have discussed,
                                  or have been offered the opportunity to discuss, with my personal
                                  trainer the nature and purpose of the treatment options, their
                                  therapeutic recommendations (including exercises and nutrition)
                                  for my condition, and the contents of this Consent, Release and
                                  Indemnification Agreement. I consent to the activities,
                                  therapeutic protocols and treatment recommended to me by my
                                  personal trainers and care providers including any recommended
                                  exercises and nutrition protocols. I intend this Consent, Release
                                  and Indemnification Agreement to apply to all my present and
                                  future care.
                                  <br />
                                  <br />
                                  <b>Retroactive Effect:</b> If Client intends this agreement to
                                  cover services rendered before the date it is signed (for example,
                                  emergency treatment).
                                </p>
                                <Grid container spacing={0} style={{ alignItems: "center" }}>
                                  <p className="clientInitialName">
                                    Client should initial here.&nbsp;
                                  </p>
                                  <Grid item xs={8} sm={4} lg={3} mb={2} className="setInitalName">
                                    <FormField
                                      className="initalName"
                                      // style={{ fontFamily: "Rage italic",fontVariant: "small-caps",fontSize : "20px !important"}}
                                      name="Retroactive_initial"
                                      value={userdata.Retroactive_initial}
                                      disabled="true"
                                    />
                                  </Grid>
                                </Grid>
                              </SoftBox>
                              <br />
                              <br />
                              <SoftBox component="form" px={5} className="step1">
                                <Grid container spacing={5}>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Name"
                                      name="TermsAndSignature_name"
                                      value={userdata.TermsAndSignature_name}
                                      disabled="true"
                                    />
                                  </Grid>

                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Date"
                                      type="date"
                                      placeholder="date"
                                      name="TermsAndSignature_date"
                                      value={userdata.TermsAndSignature_date}
                                      disabled="true"
                                    />
                                  </Grid>

                                  <Grid item xs={12} sm={4}>
                                    <h5 style={{ fontSize: "13px", color: "#344767" }}>Sign</h5>

                                    <img src={values.Indemnification_sign} />
                                  </Grid>
                                </Grid>

                                <SoftBox mt={2}>
                                  <Grid item xs={12} lg={12} sm={12} style={{ textAlign: "right" }}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          defaultChecked={userdata.disclaimers_flag}
                                          name="disclaimers_flag"
                                          disabled="true"
                                        />
                                      }
                                      label={"I Agree"}
                                    />
                                  </Grid>
                                </SoftBox>
                              </SoftBox>
                            </div>
                          )}
                          {activeStep === 1 && (
                            <div>
                              <SoftBox>
                                <h2 className="CONSENT">TERMS AND CONDITIONS</h2>
                                <p
                                  style={{
                                    wordBreak: "break-all",
                                    marginBottom: "-28px",
                                    textAlign: "justify",
                                  }}
                                  className="initialhere1"
                                >
                                  Please agree to the following and digitally, or with pen and ink,
                                  sign your name below to agree to these terms.
                                  <br />
                                  <br />
                                  <b>Photo, Video and Video Message Consultation Change and Cancelation Policy:</b>
                                  <br />
                                  <p>
                                    48 Hours, two business days, change and/or cancellation notice is
                                    required to avoid a 100% fee for scheduled services.</p>
                                  <br />
                                  <br />
                                  <b>Travel Clinic Consultation Change and Cancelation Policy:</b><br />
                                  Travel Clinic appointments involve some unique variables for
                                  consideration due to unrecoverable travel costs incurred by the
                                  Buser Institute when we travel to a Travel Clinic location. As you
                                  have experienced today, booking an appointment initially places a
                                  client on a pending waitlist for that date, time and location
                                  until that Travel Clinic meets the number of appointments required
                                  to energize a Travel Clinic confirmation and processing of client
                                  payments. <b>Changes of an appointment </b> time to another open
                                  time in the same Travel Clinic week and location are permitted if
                                  done at least 48 hours (two business days) in advance of one’s
                                  originally scheduled appointment.
                                  <b>For cancellations of an appointment</b>, again due to travel
                                  costs incurred by the Buser Institute for Travel Clinics, once a
                                  final booking confirmation is made with client payment processing,
                                  we are unable to refund scheduled appointments for any reason of
                                  cancellation. If a client must cancel such a confirmed (payment
                                  processed) appointment, the client may transfer their appointment
                                  to another client who will only incur any differential costs in
                                  appointments due to the Buser Institute (ie. Existing Client
                                  appointment transferred to a New Client appointment which is more
                                  expensive). Alternatively, if the client is able to refer another
                                  paying client to take their appointment (same appointment date &
                                  time or another open date & time at the same Travel Clinic
                                  location and week), a commensurate refund to the original client
                                  may be honored. In such a case of confirmed appointment
                                  cancellation, the Buser Institute will also make every reasonable
                                  effort to fill that canceled appointment (same date, time and
                                  location) with another client from the waitlist for that Travel
                                  Clinic, in which case the original client may be refunded.
                                  However, if the original client and the Buser Institute are unable
                                  to re-book the same appointment date, time and location for that
                                  Travel Clinic, we will be unable to refund the client for that
                                  appointment cost due to the opportunity loss. Please contact the
                                  Buser Institute at {" "}
                                  <b style={{ textDecoration: "underline" }}>
                                    admin@buserinstitue.com
                                  </b>{" "}
                                  if you have any questions or concerns regarding this Travel Clinic
                                  Change and Cancellation Policy.
                                  <br />
                                  <br />
                                  <b>Insurance</b>
                                  <br />
                                  <b style={{ textAlign: "justify" }}>
                                    This office does not accept insurance and will not process your
                                    insurance forms. It is the Client&apos;s responsibility to
                                    furnish the full agreed upon payment to our company for our
                                    services rendered. It is your responsibility as the Client to
                                    work with your insurance carrier in filing your claim and
                                    receiving reimbursement if your insurance company has such a
                                    plan of coverage for personal training. In some instances the
                                    insurance companies will deny or reduce payment despite your
                                    best efforts to demonstrate the necessity for personalized
                                    training. In the event that full or partial payment is not made
                                    to you from your insurance carrier, it is again your
                                    responsibility to negotiate this with your insurance carrier.
                                  </b>
                                  <br />I have read and agree to the Personal Training Informed
                                  Consent, Release and Indemnification Agreement.
                                  <br />I have been provided with the privacy policy.
                                  <br />I have read and agree to the copyright policy for the Buser
                                  Institute and I agree not to share the copyrighted exercise
                                  pictures, instructions, videos or any other information provided
                                  through their consultation without the express written permission
                                  of a legally appointed representative of the Buser Institute.
                                  <br />I consent to the use of my non-identifying information and
                                  photos (excluding face shots) being used for education, research
                                  and case-study publications.
                                  <br />
                                  <br />
                                  <b>Retroactive Effect:</b> If Client intends this agreement to
                                  cover services rendered before the date it is signed (for example,
                                  emergency treatment).
                                </p>
                                {/* Client should initial here. */}
                                <Grid
                                  container
                                  spacing={0}
                                  style={{ alignItems: "center", marginBottom: "-15px" }}
                                >
                                  <p className="clientInitialName">
                                    Client should initial here.&nbsp;
                                  </p>
                                  <Grid item xs={8} sm={4} lg={3} mb={2} className="setInitalName">
                                    <FormField
                                      className="initalName"
                                      // style={{ fontFamily: "Rage italic",fontVariant: "small-caps",fontSize : "20px !important"}}
                                      name="Retroactive_initial1"
                                      value={userdata.Retroactive_initial1}
                                      disabled="true"
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
                                  NOTICE: BY SIGNING THIS CONTRACT IN INK OR ENTERING MY NAME
                                  DIGITALLY IN THE SPACE PROVIDED BELOW I AFFIRM UNDER PENALTY OF
                                  PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE STATE OF
                                  CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED
                                  BY THE CALIFORNIA HEALTH AND SAFETY CODE SECTION 103526 (C), AND
                                  AGREE TO THE ABOVE INFORMED CONSENT, RELEASE AND INDEMNIFICATION
                                  AGREMENT AND ITS TERMS AND CONDITIONS. I AM AGREEING TO ALL TERMS
                                  AND CONDITIONS AND INFORMATION LISTED ABOVE ON PAGE 1 AND 2.
                                </p>
                              </SoftBox>
                              <br />
                              <br />
                              <SoftBox component="form" px={5} className="step1">
                                <Grid container spacing={5}>
                                  <Grid item xs={12} sm={4} mt={1} className="spaceing">
                                    <FormField
                                      label="name"
                                      name="TermsAndSignature_name"
                                      value={userdata.TermsAndSignature_name}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Date measurements taken by below listed licensed practitioner:"
                                      type="date"
                                      name="date_measurements"
                                      value={userdata.date_measurements}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Name (MD/DO/RN/PT/DC, etc) of practitioner who took the measurements"
                                      name="name_practitioner"
                                      value={userdata.name_practitioner}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Blood Pressure (upper)"
                                      type="number"
                                      name="blood_pressure_upper"
                                      value={userdata.blood_pressure_upper}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Blood Pressure (lower)"
                                      type="number"
                                      name="blood_pressure_lower"
                                      value={userdata.blood_pressure_lower}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Resting Heart Rate (RHR) beats per minute"
                                      type="number"
                                      name="Resting_heart_rate"
                                      value={userdata.Resting_heart_rate}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Oxygen Saturation (SpO2) %"
                                      type="number"
                                      name="Oxygen_saturation"
                                      value={userdata.Oxygen_saturation}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Respiratory Rate (RR) breaths per minute"
                                      type="number"
                                      name="Respiratory_rate"
                                      value={userdata.Respiratory_rate}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Body Temperature degrees Fahrenheit"
                                      type="number"
                                      name="Body_temp"
                                      value={userdata.Body_temp}
                                      disabled="true"
                                    />
                                  </Grid>

                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Date"
                                      type="date"
                                      name="TermsAndSignature_date"
                                      value={userdata.TermsAndSignature_date}
                                      disabled="true"
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4}></Grid>
                                  <Grid item xs={12} sm={4}>
                                    <h5 style={{ fontSize: "13px" }}>Sign</h5>
                                    <img src={values.term_page_sign} />
                                  </Grid>
                                </Grid>
                                <SoftBox mt={2}>
                                  <Grid item xs={12} lg={12} sm={12} style={{ textAlign: "right" }}>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          defaultChecked={userdata.indemnification_flag}
                                          name="indemnification_flag"
                                          disabled="true"
                                        />
                                      }
                                      label={"I Agree"}
                                    />
                                  </Grid>
                                </SoftBox>
                              </SoftBox>
                            </div>
                          )}
                          {activeStep === 2 && (
                            <div>
                              <SoftBox>
                                <h2 className="AGREEMENT">ARBITRATION AGREEMENT</h2>
                                <p
                                  style={{
                                    wordBreak: "break-all",
                                    marginBottom: "-28px",
                                    textAlign: "justify",
                                  }}
                                  className="initialhere1"
                                >
                                  <b>Article 1: Agreement to Arbitrate:</b> It is understood that
                                  any dispute as to medical, chiropractic and/or personal training
                                  malpractice, that is as to whether any such services rendered
                                  under this contract were unnecessary or unauthorized or were
                                  improperly, negligently or incompetently rendered, will be
                                  determined by submission to arbitration as provided by state and
                                  federal law, and not by a lawsuit or resort to court process,
                                  except as state and federal law provides for judicial review of
                                  arbitration proceedings. Both parties to this contract, by
                                  entering into it, are giving up their constitutional right to have
                                  any such dispute decided in a court of law before a jury, and
                                  instead are accepting the use of arbitration. Further, the parties
                                  will not have the right to participate as a member of any class of
                                  claimants, and there shall be no authority for any dispute to be
                                  decided on a class action basis. An arbitration can only decide a
                                  dispute between the parties and may not consolidate or join the
                                  claims of other persons who have similar claims.
                                  <br />
                                  <br />
                                  <b>Article 2: All Claims Must be Arbitrated:</b> It is also
                                  understood that any dispute that does not relate to medical,
                                  chiropractic or personal training malpractice, including disputes
                                  as to whether or not a dispute is subject to arbitration, as to
                                  whether this agreement is unconscionable, and any procedural
                                  disputes, will also be determined by submission to binding
                                  arbitration. It is the intention of the parties that this
                                  agreement bind all parties as to all claims, including claims
                                  arising out of or relating to treatment or services provided by
                                  the care provider, including any heirs or past, present or future
                                  spouse(s) of the Client in relation to all claims, including loss
                                  of consortium. This agreement is also intended to bind any
                                  children of the Client whether born or unborn at the time of the
                                  occurrence giving rise to any claim. This agreement is intended to
                                  bind the Client and the care provider and/or other licensed care
                                  providers, preceptors, interns or subcontractors who now or in the
                                  future consult with the Client while employed by, working or
                                  associated with or serving as a back-up for the care provider,
                                  including those working at the care providers clinic or office or
                                  any other clinic or office or facility or premises whether
                                  signatories to this form or not. All claims for monetary damages
                                  exceeding the jurisdictional limit of the small claims court
                                  against the care provider, and/or the care providers associates,
                                  association, corporation, partnership, employees, agents,
                                  subcontractors and estate, must be arbitrated including, without
                                  limitation, claims for loss of consortium, wrongful death,
                                  emotional distress, injunctive relief, or punitive damages. This
                                  agreement is intended to create an open book account unless and
                                  until revoked.
                                  <br />
                                  <br />
                                  <b>Article 3: Procedures and Applicable Law:</b> A demand for
                                  arbitration must be communicated in writing to all parties. Each
                                  party shall select an arbitrator (party arbitrator) within thirty
                                  days, and a third arbitrator (neutral arbitrator) shall be
                                  selected by the arbitrators appointed by the parties within thirty
                                  days thereafter. The neutral arbitrator shall then be the sole
                                  arbitrator and shall decide the arbitration. Each party to the
                                  arbitration shall pay such partys pro rata share of the expenses
                                  and fees of the neutral arbitrator, together with other expenses
                                  of the arbitration incurred or approved by the neutral arbitrator,
                                  not including counsel fees, witness fees, or other expenses
                                  incurred by a party for such partys own benefit. Either party
                                  shall have the absolute right to bifurcate the issues of liability
                                  and damage upon written request to the neutral arbitrator. The
                                  parties consent to the intervention and joinder in this
                                  arbitration of any person or entity that would otherwise be a
                                  proper additional party in a court action, and upon such
                                  intervention and joinder, any existing court action against such
                                  additional person or entity shall be stayed pending arbitration.
                                  The parties agree that provisions of state and federal law, where
                                  applicable, establishing the right to introduce evidence of any
                                  amount payable as a benefit to the Client to the maximum extent
                                  permitted by law, limiting the right to recover non-economic
                                  losses, and the right to have a judgment for future damages
                                  conformed to periodic payments, shall apply to disputes within
                                  this Arbitration Agreement. The parties further agree that the
                                  Commercial Arbitration Rules of the American Arbitration
                                  Association shall govern any arbitration conducted pursuant to
                                  this Arbitration Agreement.
                                  <br />
                                  <br />
                                  <b>Article 4: General Provision:</b> All claims based upon the
                                  same incident, transaction, or related circumstances shall be
                                  arbitrated in one proceeding. A claim shall be waived and forever
                                  barred if (1) on the date notice thereof is received, the claim,
                                  if asserted in a civil action, would be barred by the applicable
                                  legal statute of limitations, or (2) the claimant fails to pursue
                                  the arbitration claim in accordance with the procedures prescribed
                                  herein with reasonable diligence.
                                  <br />
                                  <br />
                                  <b>Article 5: Revocation:</b>This agreement may be revoked by
                                  written notice delivered to the care provider within 30 days of
                                  signature and, if not revoked, will govern all professional
                                  services received by the Client and all other disputes between the
                                  parties.
                                  <br />
                                  <br />
                                  <b>Article 6: Retroactive Effect: </b>If Client intends this
                                  agreement to cover services rendered before the date it is signed
                                  (for example, emergency treatment).
                                </p>
                                <Grid
                                  container
                                  spacing={0}
                                  style={{ alignItems: "center", marginBottom: "-15px" }}
                                >
                                  <p className="clientInitialName">
                                    Client should initial here.&nbsp;
                                  </p>
                                  <Grid item xs={8} sm={4} lg={3} mb={2} className="setInitalName">
                                    <FormField
                                      className="initalName"
                                      // style={{ fontFamily: "Rage italic",fontVariant: "small-caps",fontSize : "20px !important"}}
                                      name="Retroactive_initial2"
                                      value={userdata.Retroactive_initial2}
                                      disabled="true"
                                    />
                                  </Grid>
                                </Grid>
                                {/* <br /> */}
                                <p style={{ textAlign: "justify" }}>
                                  If any provision of this Arbitration Agreement is held invalid or
                                  unenforceable, the remaining provisions shall remain in full force
                                  and shall not be affected by the invalidity of any other
                                  provision. I understand that I have the right to receive a copy of
                                  this Arbitration Agreement. By my signature below, I acknowledge
                                  that I have received a copy.
                                </p>
                                <br />
                                <p style={{ textAlign: "justify" }}>
                                  NOTICE: BY SIGNING THIS CONTRACT IN INK OR ENTERING MY NAME
                                  DIGITALLY IN THE SPACE PROVIDED BELOW I AFFIRM UNDER PENALTY OF
                                  PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE STATE OF
                                  CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED
                                  BY THE CALIFORNIA HEALTH AND SAFETY CODE SECTION 103526 (C), AND I
                                  AGREE TO THE ABOVE. I AGREE TO HAVE ANY ISSUE OF MALPRACTICE
                                  DECIDED BY NEUTRAL ARBITRATION AND I AM GIVING UP MY RIGHT TO A
                                  JURY OR COURT TRIAL. SEE ARTICLE 1 OF THIS CONTRACT.
                                </p>
                              </SoftBox>
                              <br />

                              <SoftBox component="form" px={5} className="step1">
                                <Grid container spacing={5}>
                                  <Grid item xs={12} sm={4}>
                                    <FormField
                                      label="name"
                                      disabled="true"
                                      name="TermsAndSignature_name"
                                      value={userdata.TermsAndSignature_name}
                                    />
                                  </Grid>

                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <FormField
                                      label="Date"
                                      type="date"
                                      disabled="true"
                                      name="TermsAndSignature_date"
                                      value={values.TermsAndSignature_date}
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} className="spaceing">
                                    <h5 style={{ fontSize: "13px" }}>Sign</h5>
                                    <img src={values.ARBITRATION_page_sign} />
                                  </Grid>
                                </Grid>
                                <SoftBox mt={2}>
                                  <Grid item xs={12} lg={12} sm={12} style={{ textAlign: "right" }}>
                                    informed Consent, Release and Indemnification Form{" "}
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          defaultChecked={userdata.cancellation_flag}
                                          name="cancellation_flag"
                                          disabled="true"
                                        />
                                      }
                                      label={"I Agree"}
                                    />
                                  </Grid>
                                </SoftBox>
                              </SoftBox>
                            </div>
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
                                  disabled={activeStep === 2}
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
      )}
    </>
  );
}

export default InformedConsent;
