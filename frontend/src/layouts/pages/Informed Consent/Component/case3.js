import * as React from "react";
import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import SoftBox from "components/SoftBox";
import FormField from "../../Profile/components/FormField";
import PropTypes from "prop-types";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";
import { useEffect } from "react";
const Case3 = ({ values, handleChange, touched, errors, setFieldValue }) => {
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [signBegin1Client, setSignBegin1Client] = React.useState(true);
  const [signBegin1Ofc, setSignBegin1Ofc] = React.useState(true);

  const onBeginfun = (e) => {
    setSignBegin1Client(e?.isTrusted);
  };
  const onBeginfun1 = (e) => {
    setSignBegin1Ofc(e?.isTrusted);
  };
  // function clear() {
  //   sigPad.current.clear();
  //   signPad1.current.clear();
  //   setSignBegin1Client(true);
  //   setSignBegin1Ofc(true);
  // }

  function clear() {
    sigPad.current.clear();
    setSignBegin1Client(true);
  }

  function clear1() {
    signPad1.current.clear();
    setSignBegin1Ofc(true);
  }

  const getDefaultClientSignatureDateValue = () => {
    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = new Date().getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });

    if (!values.date_measurements) {
      setFieldValue("date_measurements", getDefaultClientSignatureDateValue());
    }
    if (!values.TermsAndSignature_client__date) {
      setFieldValue("TermsAndSignature_client__date", getDefaultClientSignatureDateValue());
    }
    if (!values.TermsAndSignature_ofc_date) {
      setFieldValue("TermsAndSignature_ofc_date", getDefaultClientSignatureDateValue());
    }
  }, []);
  return (
    // <div>
    //   <SoftBox px={3} mt={5} py={1} mb={1}>
    //     <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
    //       <Stack direction={"column"}>
    //         <h2>TERMS AND CONDITIONS gfcvgbh</h2>
    //       </Stack>
    //     </Grid>
    //   </SoftBox>
    //   <SoftBox px={3} className="step1">
    //     <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
    //       Please agree to the following and digitally sign your name below to agree to these terms.
    //       <br />
    //       <br />
    //       <b>
    //         <u>Change and Cancellation Policy</u>
    //       </b>
    //       <br />
    //       <br />
    //       {/* <b> */}{" "}
    //       <b>
    //         48 Hours, two business days, change and/or cancellation notice is required to avoid a
    //         100% fee for scheduled services.
    //       </b>
    //       {/* Travel Clinic appointments involve some unique variables for consideration due to
    //       unrecoverable travel costs incurred by the Buser Institute when we travel to a Travel
    //       Clinic location. As you have experienced today, booking an appointment initially places a
    //       client on a pending waitlist for that date, time and location until that Travel Clinic
    //       meets the number of appointments required to energize a Travel Clinic confirmation and
    //       processing of client payments. <b>Changes of an appointment </b> time to another open time
    //       in the same Travel Clinic week and location are permitted if done at least 48 hours (two
    //       business days) in advance of one’s originally scheduled appointment.
    //       <b>For cancellations of an appointment</b>, again due to travel costs incurred by the
    //       Buser Institute for Travel Clinics, once a final booking confirmation is made with client
    //       payment processing, we are unable to refund scheduled appointments for any reason of
    //       cancellation. If a client must cancel such a confirmed (payment processed) appointment,
    //       the client may transfer their appointment to another client who will only incur any
    //       differential costs in appointments due to the Buser Institute (ie. Existing Client
    //       appointment transferred to a New Client appointment which is more expensive).
    //       Alternatively, if the client is able to refer another paying client to take their
    //       appointment (same appointment date & time or another open date & time at the same Travel
    //       Clinic location and week), a commensurate refund to the original client may be honored. In
    //       such a case of confirmed appointment cancellation, the Buser Institute will also make
    //       every reasonable effort to fill that canceled appointment (same date, time and location)
    //       with another client from the waitlist for that Travel Clinic, in which case the original
    //       client may be refunded. However, if the original client and the Buser Institute are unable
    //       to re-book the same appointment date, time and location for that Travel Clinic, we will be
    //       unable to refund the client for that appointment cost due to the opportunity loss. Please
    //       contact the Buser Institute at {" "}
    //       <b style={{ textDecoration: "underline" }}>admin@buserinstitue.com</b> if you have any
    //       questions or concerns regarding this Travel Clinic Change and Cancellation Policy. */}
    //       {/* </b> */}
    //       <br />
    //       <br />
    //       <u>
    //         <b>Insurance</b>
    //       </u>
    //       <br />
    //       <br />
    //       <b style={{ lineHeight: "40px", textAlign: "justify" }}>
    //         This office does not accept insurance and will not process your insurance forms. It is
    //         the Client&apos;s responsibility to furnish the full agreed upon payment to our company
    //         before our services will be rendered. It is your responsibility as the Client to work
    //         with your insurance carrier in filing your claim and receiving reimbursement if your
    //         insurance company has such a plan of coverage for personal training. In some instances
    //         the insurance companies will deny or reduce payment despite your best efforts to
    //         demonstrate the necessity for personalized training. In the event that full or partial
    //         payment is not made to you from your insurance carrier, it is again your responsibility
    //         to negotiate this with your insurance carrier.
    //       </b>
    //       <br />
    //       <br />I have read and agree to this associated Informed Consent, Release and
    //       Indemnification Agreement.
    //       <br />
    //       <br />I have been provided with the privacy policy.
    //       <br />
    //       <br />I have read and agree to the copyright policy for the Buser Institute and I agree
    //       not to share their exercise pictures, instructions, videos or any other information
    //       provided through their consultation without the express written permission of a legally
    //       appointed representative of the Buser Institute.
    //       <br />
    //       <br />
    //       <b>
    //         <u>Retroactive Effect:</u>
    //       </b>{" "}
    //       If Client intends this agreement to cover services rendered before the date it is signed
    //       (for example, emergency treatment),
    //     </p>
    //     <Grid container spacing={0} style={{ alignItems: "center", marginBottom: "-15px" }}>
    //       <p className="clientInitialName">Client should initial here.&nbsp;</p>
    //       <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
    //         <FormField
    //           className="initalName"
    //           placeholder="Write initial"
    //           name="terms_Retroactive_initial"
    //           value={values.terms_Retroactive_initial}
    //           onChange={handleChange}
    //           error={errors.terms_Retroactive_initial && touched.terms_Retroactive_initial}
    //           success={
    //             values?.terms_Retroactive_initial?.length > 0 && !errors.terms_Retroactive_initial
    //           }
    //         />
    //       </Grid>
    //       <p>Effective as of the date of first professional services. </p>
    //     </Grid>

    //     <b>
    //       <u>Cardiovascular Vital Measurements:</u>
    //     </b>
    //     <br />
    //     <p style={{ textAlign: "justify" }}>
    //       Please enter below your following measurements obtained from a licensed practitioner
    //       within 7 days of submitting this form.
    //     </p>
    //     <br />

    //     <p style={{ textAlign: "justify" }}>
    //       <Grid container spacing={0} style={{ alignItems: "center" }} direction={"row"}>
    //         <Grid item xs={12} sm={4} className="parentClass">
    //           <FormField
    //             label={
    //               <span style={{ fontSize: "15px" }}>
    //                 Date measurements taken by below listed licensed practitioner:
    //               </span>
    //             }
    //             type="date"
    //             placeholder="date..."
    //             name="date_measurements"
    //             value={values.date_measurements}
    //             onChange={handleChange}
    //             error={errors.date_measurements && touched.date_measurements}
    //             success={values.date_measurements.length > 0 && !errors.date_measurements}
    //           />
    //         </Grid>
    //       </Grid>
    //     </p>
    //     <p style={{ textAlign: "justify" }}>
    //       <label className="label" style={{ fontSize: "15px" }}>
    //         Name and license type (MD/DO/DC/ND/RN/DPT/PT, etc) of practitioner who took the
    //         measurements:
    //       </label>
    //       <Grid container spacing={1} style={{ alignItems: "center" }} direction={"row"}>
    //         <Grid item xs={6} sm={4} lg={2} mb={2} className="setInitalName">
    //           <FormField
    //             name="name_practitioner"
    //             value={values.name_practitioner}
    //             onChange={handleChange}
    //             error={errors.name_practitioner && touched.name_practitioner}
    //             success={values?.name_practitioner?.length > 0 && !errors.name_practitioner}
    //           />
    //         </Grid>
    //         <Grid
    //           item
    //           xs={6}
    //           sm={4}
    //           lg={2}
    //           mb={2}
    //           className="setInitalName"
    //           style={{ position: "relative" }}
    //         >
    //           <FormField
    //             // style={{ fontFamily: "Rage italic",fontVariant: "small-caps",fontSize : "20px !important"}}
    //             name="practitionerLicenceType"
    //             value={values.practitionerLicenceType}
    //             onChange={handleChange}
    //             error={errors.practitionerLicenceType && touched.practitionerLicenceType}
    //             success={
    //               values?.practitionerLicenceType?.length > 0 && !errors.practitionerLicenceType
    //             }
    //           />
    //         </Grid>
    //       </Grid>
    //     </p>

    //     <p style={{ textAlign: "justify" }}>
    //       <label className="label" style={{ fontSize: "15px" }}>
    //         Blood pressure:(BP)
    //       </label>
    //       <Grid container spacing={1} style={{ alignItems: "center", marginBottom: "15px" }}>
    //         <Grid item xs={4} sm={2} lg={1} mb={1} className="setInitalName">
    //           <FormField
    //             //   label="Blood Pressure (upper)"
    //             type="number"
    //             name="blood_pressure_upper"
    //             value={values.blood_pressure_upper}
    //             onChange={handleChange}
    //             error={errors.blood_pressure_upper && touched.blood_pressure_upper}
    //             success={values?.blood_pressure_upper?.length > 0 && !errors.blood_pressure_upper}
    //           />
    //         </Grid>
    //         <Grid item style={{ fontSize: "20px" }}></Grid>
    //         <Grid item xs={4} sm={2} lg={1} mb={1} className="setInitalName">
    //           <FormField
    //             //   label="Blood Pressure (lower)"
    //             type="number"
    //             name="blood_pressure_lower"
    //             value={values.blood_pressure_lower}
    //             onChange={handleChange}
    //             error={errors.blood_pressure_lower && touched.blood_pressure_lower}
    //             success={values?.blood_pressure_lower?.length > 0 && !errors.blood_pressure_lower}
    //           />
    //         </Grid>
    //       </Grid>
    //     </p>

    //     <Grid container spacing={5}>
    //       <Grid item xs={12} sm={4} className="parentClass">
    //         <FormField
    //           type="number"
    //           label={
    //             <span style={{ fontSize: "15px" }}>
    //               Resting Heart Rate (RHR) in beats per minute
    //             </span>
    //           }
    //           // style={{ fontFamily: "Rage italic",fontVariant: "small-caps",fontSize : "20px !important"}}
    //           name="Resting_heart_rate"
    //           value={values.Resting_heart_rate}
    //           onChange={handleChange}
    //           error={errors.Resting_heart_rate && touched.Resting_heart_rate}
    //           success={values?.Resting_heart_rate?.length > 0 && !errors.Resting_heart_rate}
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={4} className="parentClass">
    //         <FormField
    //           label={<span style={{ fontSize: "15px" }}>Oxygen Saturation (SpO2) in %</span>}
    //           // label="Oxygen Saturation (SpO2) in %"
    //           type="number"
    //           name="Oxygen_saturation"
    //           value={values.Oxygen_saturation}
    //           onChange={handleChange}
    //           error={errors.Oxygen_saturation && touched.Oxygen_saturation}
    //           success={values?.Oxygen_saturation?.length > 0 && !errors.Oxygen_saturation}
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={4} className="parentClass">
    //         <FormField
    //           label={
    //             <span style={{ fontSize: "15px" }}>
    //               Respiratory Rate (RR) in breaths per minute
    //             </span>
    //           }
    //           type="number"
    //           name="Respiratory_rate"
    //           value={values.Respiratory_rate}
    //           onChange={handleChange}
    //           error={errors.Respiratory_rate && touched.Respiratory_rate}
    //           success={values?.Respiratory_rate?.length > 0 && !errors.Respiratory_rate}
    //         />
    //       </Grid>

    //       <Grid item xs={12} sm={4} className="parentClass">
    //         <FormField
    //           label={
    //             <span style={{ fontSize: "15px" }}>Body Temperature in degrees Fahrenheit</span>
    //           }
    //           type="number"
    //           name="Body_temp"
    //           value={values.Body_temp}
    //           onChange={handleChange}
    //           error={errors.Body_temp && touched.Body_temp}
    //           success={values?.Body_temp?.length > 0 && !errors.Body_temp}
    //           //   disabled="true"
    //         />
    //       </Grid>
    //     </Grid>

    //     <p style={{ textAlign: "justify" }}>
    //       <b>
    //         NOTICE: BY SIGNING THIS CONTRACT IN INK OR ENTERING MY NAME DIGITALLY IN THE SPACE
    //         PROVIDED BELOW I AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND
    //         THE STATE OF CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE
    //         CALIFORNIA HEALTH AND SAFETY CODE SECTION 103526 (C), AND AGREE TO THE ABOVE INFORMED
    //         CONSENT, RELEASE AND INDEMNIFICATION AGREMENT AND ITS TERMS AND CONDITIONS. I AM
    //         AGREEING TO ALL TERMS AND CONDITIONS AND INFORMATION LISTED ABOVE ON PAGE 1 AND 2.
    //       </b>
    //     </p>
    //   </SoftBox>
    //   <br />
    //   <br />
    //   <SoftBox component="form" px={10} className="nameAndDate">
    //     <Grid container spacing={5}>
    //       <Grid item xs={12} sm={4} className="spaceing">
    //         <FormField
    //           label={<span style={{ fontSize: "15px" }}>Client Name</span>}
    //           placeholder="Enter Name.."
    //           name="TermsAndSignature_name"
    //           value={values.TermsAndSignature_name}
    //           onChange={handleChange}
    //           errorMsg
    //           error={errors.TermsAndSignature_name && touched.TermsAndSignature_name}
    //           success={values?.TermsAndSignature_name?.length > 0 && !errors.TermsAndSignature_name}
    //         />
    //       </Grid>
    //     </Grid>
    //     {/* <Grid container spacing={5}>
    //       <Grid item xs={12} sm={4} className="spaceing">
    //         <FormField
    //           label="Date"
    //           type="date"
    //           placeholder="date"
    //           name="TermsAndSignature_client__date"
    //           value={values.TermsAndSignature_client__date}
    //           onChange={handleChange}
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={4} className="spaceing">
    //         <FormField
    //           label="Date"
    //           type="date"
    //           placeholder="date"
    //           name="TermsAndSignature_ofc_date"
    //           value={values.TermsAndSignature_ofc_date}
    //           onChange={handleChange}
    //         />
    //       </Grid>
    //     </Grid>*/}
    //     <Grid container spacing={5}>
    //       {values.term_page_sign_client !== undefined ? (
    //         <Grid item xs={12} sm={6} className="parentClass">
    //           <FormField
    //             label={<span style={{ fontSize: "15px" }}>Date</span>}
    //             type="date"
    //             placeholder="date"
    //             name="TermsAndSignature_client__date"
    //             value={values.TermsAndSignature_client__date}
    //             onChange={handleChange}
    //           />
    //           <h5 style={{ fontSize: "15px" }}>Client Sign</h5>
    //           <img src={values.term_page_sign_client} />
    //           <h5 style={{ fontSize: "15px" }}>Sign here</h5>
    //         </Grid>
    //       ) : (
    //         <Grid item xs={12} md={6} lg={4}>
    //           <FormField
    //             label={<span style={{ fontSize: "15px" }}>Date</span>}
    //             type="date"
    //             placeholder="date"
    //             name="TermsAndSignature_client__date"
    //             value={values.TermsAndSignature_client__date}
    //             onChange={handleChange}
    //           />
    //           <p style={{ marginBottom: "7px", fontSize: "15px", fontWeight: "bold" }}>
    //             Client Sign
    //           </p>
    //           <SignaturePad
    //             canvasProps={{ width: 240, height: 150 }}
    //             ref={sigPad}
    //             penColor="black"
    //             backgroundColor="#f1f1f1"
    //             placeholder="sign"
    //             onBegin={(e) => onBeginfun(e.isTrusted)}
    //           />
    //           <div className="saveAndClear">
    //             <SoftButton
    //               onClick={clear}
    //               style={{ marginRight: "10px" }}
    //               disabled={signBegin1Client}
    //             >
    //               Clear
    //             </SoftButton>
    //             <SoftButton
    //               disabled={signBegin1Client}
    //               onClick={() => {
    //                 setFieldValue(
    //                   "term_page_sign_client",
    //                   sigPad.current.getTrimmedCanvas().toDataURL("image/png")
    //                 );
    //               }}
    //             >
    //               Save
    //             </SoftButton>
    //           </div>
    //         </Grid>
    //       )}

    //       {/* <Grid item xs={12} sm={4} className="spaceing"> */}
    //       {values.term_page_sign_ofc !== undefined ? (
    //         <Grid item xs={12} sm={6} className="parentClass">
    //           <FormField
    //             label={<span style={{ fontSize: "15px" }}>Date</span>}
    //             type="date"
    //             placeholder="date"
    //             name="TermsAndSignature_ofc_date"
    //             value={values.TermsAndSignature_ofc_date}
    //             onChange={handleChange}
    //           />
    //           <h5 style={{ fontSize: "15px" }}>Office Sign</h5>
    //           <img src={values.term_page_sign_ofc} />
    //           <h5 style={{ fontSize: "15px" }}>Sign here</h5>
    //         </Grid>
    //       ) : (
    //         <Grid item xs={12} md={6} lg={4}>
    //           <FormField
    //             label={<span style={{ fontSize: "15px" }}>Date</span>}
    //             type="date"
    //             placeholder="date"
    //             name="TermsAndSignature_ofc_date"
    //             value={values.TermsAndSignature_ofc_date}
    //             onChange={handleChange}
    //           />
    //           <p style={{ marginBottom: "7px", fontSize: "15px", fontWeight: "bold" }}>
    //             Office Sign
    //           </p>
    //           <SignaturePad
    //             canvasProps={{ width: 240, height: 150 }}
    //             ref={signPad1}
    //             penColor="black"
    //             backgroundColor="#f1f1f1"
    //             placeholder="sign"
    //             onBegin={(e) => onBeginfun1(e.isTrusted)}
    //           />
    //           <div className="saveAndClear">
    //             <SoftButton
    //               onClick={clear1}
    //               style={{ marginRight: "10px" }}
    //               disabled={signBegin1Ofc}
    //             >
    //               Clear
    //             </SoftButton>
    //             <SoftButton
    //               disabled={signBegin1Ofc}
    //               onClick={() => {
    //                 setFieldValue(
    //                   "term_page_sign_ofc",
    //                   signPad1.current.getTrimmedCanvas().toDataURL("image/png")
    //                 );
    //               }}
    //             >
    //               Save
    //             </SoftButton>
    //           </div>
    //         </Grid>
    //       )}
    //     </Grid>
    //   </SoftBox>
    //   <SoftBox mt={2}>
    //     <Grid container spacing={5}>
    //       <Grid item xs={12} sm={4}></Grid>
    //       <Grid item xs={12} sm={4}></Grid>
    //       <Grid item xs={12} sm={4}>
    //         <FormControlLabel
    //           style={{
    //             backgroundColor: "rgba(0,0,0,0.04)",
    //             width: "max-content",
    //             marginLeft: "2px",
    //           }}
    //           pl={2}
    //           control={
    //             <Checkbox
    //               className="stylebox"
    //               defaultChecked={values.indemnification_flag}
    //               name="indemnification_flag"
    //               // onChange={handleChange}
    //               onChange={(e) => setFieldValue("indemnification_flag",e.target.checked)}
    //             />
    //           }
    //           label={"I Agree"}
    //         />
    //       </Grid>
    //     </Grid>
    //   </SoftBox>
    //   {/* <SoftBox component="form" px={10} className="nameAndDate">
    //     <Grid container spacing={5}>
    //       <Grid item xs={12} sm={4} className="spaceing">
    //         <FormField
    //           label=" Client Name"
    //           placeholder="Enter Name.."
    //           name="TermsAndSignature_name"
    //           value={values.TermsAndSignature_name}
    //           onChange={handleChange}
    //           errorMsg
    //           error={errors.TermsAndSignature_name && touched.TermsAndSignature_name}
    //           success={values?.TermsAndSignature_name?.length > 0 && !errors.TermsAndSignature_name}
    //         />
    //       </Grid>
    //     </Grid>
    //     <Grid container spacing={5}>
    //       <Grid item xs={12} sm={4} className="spaceing">
    //         <FormField
    //           label=" Client Signature"
    //           placeholder="Signature.."
    //           name="TermsAndSignature_client_signature"
    //           value={values.TermsAndSignature_client_signature}
    //           onChange={handleChange}
    //           errorMsg
    //           error={
    //             errors.TermsAndSignature_client_signature &&
    //             touched.TermsAndSignature_client_signature
    //           }
    //           success={
    //             values?.TermsAndSignature_client_signature?.length > 0 &&
    //             !errors.TermsAndSignature_client_signature
    //           }
    //         />
    //       </Grid>

    //       <Grid item xs={12} sm={4} className="spaceing">
    //         <FormField
    //           label="Date"
    //           type="date"
    //           placeholder="date"
    //           name="TermsAndSignature_client__date"
    //           value={values.TermsAndSignature_client__date}
    //           onChange={handleChange}
    //         />
    //       </Grid>
    //     </Grid>
    //     <Grid container spacing={5}>
    //       <Grid item xs={12} sm={4} className="spaceing">
    //         <FormField
    //           label=" Office Signature"
    //           placeholder="Signature.."
    //           name="TermsAndSignature_ofc_signature"
    //           value={values.TermsAndSignature_ofc_signature}
    //           onChange={handleChange}
    //           error={
    //             errors.TermsAndSignature_ofc_signature && touched.TermsAndSignature_ofc_signature
    //           }
    //           success={
    //             values?.TermsAndSignature_ofc_signature?.length > 0 &&
    //             !errors.TermsAndSignature_ofc_signature
    //           }
    //         />
    //       </Grid>
    //       <Grid item xs={12} sm={4} className="spaceing">
    //         <FormField
    //           label="Date"
    //           type="date"
    //           placeholder="date"
    //           name="TermsAndSignature_ofc_date"
    //           value={values.TermsAndSignature_ofc_date}
    //           onChange={handleChange}
    //         />
    //       </Grid>

    //       <Grid item xs={12} sm={4}></Grid>
    //     </Grid>
    //   </SoftBox> */}
    // </div>
    <div>
      <SoftBox px={3} className="step1">
        <h2 style={{ textAlign: "center" }}>TERMS AND CONDITIONS</h2>
        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere1">
          Pleasee agree to the following and digitally, or with pen and ink, sign your name below to
          agree to these terms.
          <br />
          <br />
          <b>Photo, Video and Video Message Consultation Change and Cancelation Policy:</b>
          <br />
          <p>48 Hours, two business days, change and/or cancellation notice is
            required to avoid a 100% fee for scheduled services.</p>
          <br />
          <b>Travel Clinic Consultation Change and Cancelation Policy:</b>
          <br />
          Travel Clinic appointments involve some unique variables for consideration due to
          unrecoverable travel costs incurred by the Buser Institute when we travel to a Travel
          Clinic location. As you have experienced today, booking an appointment initially places a
          client on a pending waitlist for that date, time and location until that Travel Clinic
          meets the number of appointments required to energize a Travel Clinic confirmation and
          processing of client payments. <b>Changes of an appointment </b> time to another open time
          in the same Travel Clinic week and location are permitted if done at least 48 hours (two
          business days) in advance of one’s originally scheduled appointment.
          <b>For cancellations of an appointment</b>, again due to travel costs incurred by the
          Buser Institute for Travel Clinics, once a final booking confirmation is made with client
          payment processing, we are unable to refund scheduled appointments for any reason of
          cancellation. If a client must cancel such a confirmed (payment processed) appointment,
          the client may transfer their appointment to another client who will only incur any
          differential costs in appointments due to the Buser Institute (ie. Existing Client
          appointment transferred to a New Client appointment which is more expensive).
          Alternatively, if the client is able to refer another paying client to take their
          appointment (same appointment date & time or another open date & time at the same Travel
          Clinic location and week), a commensurate refund to the original client may be honored. In
          such a case of confirmed appointment cancellation, the Buser Institute will also make
          every reasonable effort to fill that canceled appointment (same date, time and location)
          with another client from the waitlist for that Travel Clinic, in which case the original
          client may be refunded. However, if the original client and the Buser Institute are unable
          to re-book the same appointment date, time and location for that Travel Clinic, we will be
          unable to refund the client for that appointment cost due to the opportunity loss. Please
          contact the Buser Institute at {" "}
          <b style={{ textDecoration: "underline" }}>admin@buserinstitue.com</b> if you have any
          questions or concerns regarding this Travel Clinic Change and Cancellation Policy.
          <br />
          <br />
          <b>Insurance</b>
          <br />
          <b style={{ textAlign: "justify" }}>
            This office does not accept insurance and will not process your insurance forms. It is
            the Client&apos;s responsibility to furnish the full agreed upon payment to our company
            for our services rendered. It is your responsibility as the Client to work with your
            insurance carrier in filing your claim and receiving reimbursement if your insurance
            company has such a plan of coverage for personal training. In some instances the
            insurance companies will deny or reduce payment despite your best efforts to demonstrate
            the necessity for personalized training. In the event that full or partial payment is
            not made to you from your insurance carrier, it is again your responsibility to
            negotiate this with your insurance carrier.
          </b>
          <br />I have read and agree to the Personal Training Informed Consent, Release and
          Indemnification Agreement.
          <br />I have been provided with the privacy policy.
          <br />I have read and agree to the copyright policy for the Buser Institute and I agree
          not to share the copyrighted exercise pictures, instructions, videos or any other
          information provided through their consultation without the express written permission of
          a legally appointed representative of the Buser Institute.
          <br />I consent to the use of my information and photos being used for education, research
          and case-study publications.
          <br />
          <br />
          <b>Retroactive Effect:</b> If Client intends this agreement to cover services rendered
          before the date it is signed (for example, emergency treatment).
        </p>
        <Grid container spacing={0} style={{ alignItems: "center", marginBottom: "-15px" }}>
          <p className="clientInitialName">Client should initial here.</p>
          <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
            <FormField
              className="initialName"
              placeholder="Write initial"
              name="terms_Retroactive_initial"
              value={values.terms_Retroactive_initial}
              onChange={handleChange}
              error={errors.terms_Retroactive_initial && touched.terms_Retroactive_initial}
              success={
                values?.terms_Retroactive_initial?.length > 0 && !errors.terms_Retroactive_initial
              }
            />
          </Grid>
        </Grid>
        <b>Cardiovascular Vital Measurements:</b>
        <br />
        <p style={{ textAlign: "justify" }}>
          Please enter below your following measurements obtained from a licensed practitioner
          within 7 days of submitting this form.
        </p>
        <br />
        <p style={{ textAlign: "justify" }}>
          NOTICE: BY SIGNING THIS CONTRACT IN INK OR ENTERING MY NAME DIGITALLY IN THE SPACE
          PROVIDED BELOW I AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND
          THE STATE OF CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE
          CALIFORNIA HEALTH AND SAFETY CODE SECTION 103526 (C), AND AGREE TO THE ABOVE INFORMED
          CONSENT, RELEASE AND INDEMNIFICATION AGREMENT AND ITS TERMS AND CONDITIONS. I AM AGREEING
          TO ALL TERMS AND CONDITIONS AND INFORMATION LISTED ABOVE ON PAGE 1 AND 2.
        </p>
      </SoftBox>
      <br />
      <br />
      <SoftBox component="form" px={20} className="nameAndDate">
        <Grid container spacing={5} >
          <Grid item xs={12} lg={3} sm={3} mt={1.7} className="parentClass parentClass1">
            <FormField
              label={<span style={{ fontSize: "15px" }}>Client Name</span>}
              placeholder="Enter Name.."
              name="TermsAndSignature_name"
              value={values.TermsAndSignature_name}
              onChange={handleChange}
              errorMsg
              error={errors.TermsAndSignature_name && touched.TermsAndSignature_name}
              success={values?.TermsAndSignature_name?.length > 0 && !errors.TermsAndSignature_name}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={4} className="parentClass">
            <FormField
              label={
                <span style={{ fontSize: "15px" }}>
                  Date measurements taken by below listed licensed practitioner:
                </span>
              }
              type="date"
              placeholder="date..."
              name="date_measurements"
              value={values.date_measurements}
              onChange={handleChange}
              error={errors.date_measurements && touched.date_measurements}
              success={values.date_measurements.length > 0 && !errors.date_measurements}
            />
          </Grid>
          <Grid item xs={12} lg={5} sm={5} className="parentClass">
            <FormField
              label={
                <span style={{ fontSize: "15px" }}>
                  Name (MD/DO/RN/PT/DC, etc) of practitioner who took the measurements
                </span>
              }
              name="name_practitioner"
              value={values.name_practitioner}
              onChange={handleChange}
              error={errors.name_practitioner && touched.name_practitioner}
              success={values?.name_practitioner?.length > 0 && !errors.name_practitioner}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={3} className="parentClass">
            <FormField
              label={<span style={{ fontSize: "15px" }}>Blood Pressure (upper)</span>}
              type="number"
              name="blood_pressure_upper"
              value={values.blood_pressure_upper}
              onChange={handleChange}
              error={errors.blood_pressure_upper && touched.blood_pressure_upper}
              success={values?.blood_pressure_upper?.length > 0 && !errors.blood_pressure_upper}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={4} className="parentClass bloodPre">
            <FormField
              label={<span style={{ fontSize: "15px" }}>Blood Pressure (lower)</span>}
              type="number"
              name="blood_pressure_lower"
              value={values.blood_pressure_lower}
              onChange={handleChange}
              error={errors.blood_pressure_lower && touched.blood_pressure_lower}
              success={values?.blood_pressure_lower?.length > 0 && !errors.blood_pressure_lower}
            />
          </Grid>
          <Grid item xs={12} lg={5} sm={5} className="parentClass">
            <FormField
              type="number"
              label={
                <span style={{ fontSize: "15px" }}>
                  Resting Heart Rate (RHR) in beats per minute
                </span>
              }
              // style={{ fontFamily: "Rage italic",fontVariant: "small-caps",fontSize : "20px !important"}}
              name="Resting_heart_rate"
              value={values.Resting_heart_rate}
              onChange={handleChange}
              error={errors.Resting_heart_rate && touched.Resting_heart_rate}
              success={values?.Resting_heart_rate?.length > 0 && !errors.Resting_heart_rate}
            />
          </Grid>
          <Grid item xs={12} lg={3} sm={3} className="parentClass">
            <FormField
              label={<span style={{ fontSize: "15px" }}>Oxygen Saturation (SpO2) in %</span>}
              // label="Oxygen Saturation (SpO2) in %"
              type="number"
              name="Oxygen_saturation"
              value={values.Oxygen_saturation}
              onChange={handleChange}
              error={errors.Oxygen_saturation && touched.Oxygen_saturation}
              success={values?.Oxygen_saturation?.length > 0 && !errors.Oxygen_saturation}
            />
          </Grid>
          <Grid item xs={12} lg={4} sm={4} className="parentClass">
            <FormField
              label={
                <span style={{ fontSize: "15px" }}>
                  Respiratory Rate (RR) in breaths per minute
                </span>
              }
              type="number"
              name="Respiratory_rate"
              value={values.Respiratory_rate}
              onChange={handleChange}
              error={errors.Respiratory_rate && touched.Respiratory_rate}
              success={values?.Respiratory_rate?.length > 0 && !errors.Respiratory_rate}
            />
          </Grid>
          <Grid item xs={12} lg={5} sm={5} mt={2} className="parentClass bodyTempDeg">
            <FormField
              label={
                <span style={{ fontSize: "15px" }}>Body Temperature in degrees Fahrenheit</span>
              }
              type="number"
              name="Body_temp"
              value={values.Body_temp}
              onChange={handleChange}
              error={errors.Body_temp && touched.Body_temp}
              success={values?.Body_temp?.length > 0 && !errors.Body_temp}
            //   disabled="true"
            />
          </Grid>
          {/* <Grid item xs={12} sm={4} className="parentClass">
            <FormField
              label={<span style={{ fontSize: "15px" }}>Date</span>}
              type="date"
              placeholder="date"
              name="TermsAndSignature_client__date"
              value={values.TermsAndSignature_client__date}
              onChange={handleChange}
            />
          </Grid> */}

          {/* <Grid item xs={12} sm={4}></Grid> */}
          {values.term_page_sign_client !== undefined ? (
            <Grid item xs={12} lg={6} sm={6} className="parentClass">
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="TermsAndSignature_client__date"
                value={values.TermsAndSignature_client__date}
                onChange={handleChange}
              />
              <h5 style={{ fontSize: "15px" }}>Client Sign</h5>
              <img src={values.term_page_sign_client} />
              <h5 style={{ fontSize: "15px" }}>Sign here</h5>
            </Grid>
          ) : (
            <Grid item xs={12} lg={6} sm={6}>
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="TermsAndSignature_client__date"
                value={values.TermsAndSignature_client__date}
                onChange={handleChange}
              />
              <p style={{ marginBottom: "7px", fontSize: "15px", fontWeight: "bold" }}>
                Client Sign
              </p>
              <SignaturePad
                canvasProps={{ width: 240, height: 150 }}
                ref={sigPad}
                penColor="black"
                backgroundColor="#f1f1f1"
                placeholder="sign"
                onBegin={(e) => onBeginfun(e.isTrusted)}
              />
              <div className="saveAndClear">
                <SoftButton
                  onClick={clear}
                  style={{ marginRight: "10px" }}
                  disabled={signBegin1Client}
                >
                  Clear
                </SoftButton>
                <SoftButton
                  disabled={signBegin1Client}
                  onClick={() => {
                    setFieldValue(
                      "term_page_sign_client",
                      sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                    );
                  }}
                >
                  Save
                </SoftButton>
              </div>
            </Grid>
          )}
          {values.term_page_sign_ofc !== undefined ? (
            <Grid item xs={12} lg={6} sm={6} className="parentClass">
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="TermsAndSignature_ofc_date"
                value={values.TermsAndSignature_ofc_date}
                onChange={handleChange}
              />
              <h5 style={{ fontSize: "15px" }}>Office Sign</h5>
              <img src={values.term_page_sign_ofc} />
              <h5 style={{ fontSize: "15px" }}>Sign here</h5>
            </Grid>
          ) : (
            <Grid item xs={12} lg={6} sm={6}>
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="TermsAndSignature_ofc_date"
                value={values.TermsAndSignature_ofc_date}
                onChange={handleChange}
              />
              <p style={{ marginBottom: "7px", fontSize: "15px", fontWeight: "bold" }}>
                Office Sign
              </p>
              <SignaturePad
                canvasProps={{ width: 240, height: 150 }}
                ref={signPad1}
                penColor="black"
                backgroundColor="#f1f1f1"
                placeholder="sign"
                onBegin={(e) => onBeginfun1(e.isTrusted)}
              />
              <div className="saveAndClear">
                <SoftButton
                  onClick={clear1}
                  style={{ marginRight: "10px" }}
                  disabled={signBegin1Ofc}
                >
                  Clear
                </SoftButton>
                <SoftButton
                  disabled={signBegin1Ofc}
                  onClick={() => {
                    setFieldValue(
                      "term_page_sign_ofc",
                      signPad1.current.getTrimmedCanvas().toDataURL("image/png")
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
                    defaultChecked={values.indemnification_flag}
                    name="indemnification_flag"
                    // onChange={handleChange}
                    onChange={(e) => setFieldValue("indemnification_flag", e.target.checked)}
                  />
                }
                label={"I Agree"}
              />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </div>
  );
};
Case3.propTypes = {
  values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case3;
