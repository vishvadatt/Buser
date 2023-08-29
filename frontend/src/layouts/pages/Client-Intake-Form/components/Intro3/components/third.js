import React from "react";
import "../style.css";
import { Grid, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function third({ formik, form, index }) {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  console.log("soappatientIdintro", soappatientId);
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  console.log("patientlistclientintake", patientlist);
  const UserId = useSelector((state) => state.auth.auth._id);

  let date = new Date().toLocaleDateString("en-CA");
  //   const { formField, setFieldValue } = form;
  const [signBeginClient, setSignBeginClient] = React.useState(true);
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);

  let sigPad = React.useRef({});
  let sigPad1 = React.useRef({});

  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };

  const onBeginfun = (e) => {
    setSignBeginClient(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginClient(true);
  }
  function clear1() {
    sigPad1.current.clear();
    setSignBeginOfc(true);
  }
  const { values } = formik;
  console.log("values viv", values);
  const {
    practitioner: practitionerV,
    measurements: measurementsV,
    Blood: BloodV,
    BP: BPV,
    RHR: RHRV,
    SpO2: SpO2V,
    RR: RRV,
    Temperature: TemperatureV,
    ClientName: ClientNameV,
    ClientSignature: ClientSignatureV,
    OfficeSignature: OfficeSignatureV,
    Date1: Date1V,
    Date2: Date2V,
    RetroactiveName: RetroactiveNameV,
  } = values?.page3[index];

  return (
    <div>
      <Container>
        <b className="terms">TERMS AND CONDITIONS</b>
        <p className="digitally">
          Please agree to the following and digitally sign your name below to agree to these terms
        </p>
        <b className="Cancellation">
          Photo, Video and Video Message Consultation Change and Cancelation Policy:
        </b>
        <p className="business">
          48 Hours, two business days, change and/or cancellation notice is required to avoid a 100%
          fee for scheduled services.
        </p>
        <br />
        <b className="Cancellation"> Travel Clinic Consultation Change and Cancelation Policy:</b>
        <br />
        <p className="business">
          Travel Clinic appointments involve some unique variables for consideration due to
          unrecoverable travel costs incurred by the Buser Institute when we travel to a Travel
          Clinic location. As you have experienced today, booking an appointment initially places a
          client on a pending waitlist for that date, time and location until that Travel Clinic
          meets the number of appointments required to energize a Travel Clinic confirmation and
          processing of client payments. <b>Changes of an appointment </b> time to another open time
          in the same Travel Clinic week and location are permitted if done at least 48 hours (two
          business days) in advance of one’s originally scheduled appointment.
          <b> For cancellations of an appointment</b>, again due to travel costs incurred by the
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
          contact the Buser Institute at{" "}
          <b style={{ textDecoration: "underline" }}>admin@buserinstitue.com</b> if you have any
          questions or concerns regarding this Travel Clinic Change and Cancellation Policy.
        </p>
        <br />
        <p className="Insurance">Insurance</p>
        <b className="office">
          This office does not accept insurance and will not process your insurance forms. It is the
          Client&apos;s responsibility to furnish the full agreed upon payment to our company before
          our services will be rendered. It is your responsibility as the Client to work with your
          insurance carrier in filing your claim and receiving reimbursement if your insurance
          company has such a plan of coverage for personal training. In some instances the insurance
          companies will deny or reduce payment despite your best efforts to demonstrate the
          necessity for personalized training. In the event that full or partial payment is not made
          to you from your insurance carrier, it is again your responsibility to negotiate this with
          your insurance carrier.
        </b>
        <p className="read">
          I have read and agree to this associated Informed Consent, Release and Indemnification
          Agreement.
        </p>
        <p className="read">I have been provided with the privacy policy.</p>
        <p className="read">
          I have read and agree to the copyright policy for the Buser Institute and I agree not to
          share their exercise pictures, instructions, videos or any other information provided
          through their consultation without the express written permission of a legally appointed
          representative of the Buser Institute.
        </p>
        <div className="Effect">
          <p>
            <span className="rendered">Retroactive Effect:</span>If Client intends this agreement to
            cover services rendered before the date it is signed (for example, emergency treatment),
            <div className="Date">
              <b>Client should initial here.</b>
              <input
                type="text"
                className="sign rageItalicFont"
                onChange={formik.handleChange}
                name={`page3[${index}].RetroactiveName`}
                value={RetroactiveNameV}
              />{" "}
              Effective as of the date of first professional services.
            </div>
          </p>
        </div>
        <div className="Date">
          <b>Date measurements taken by below Listed licensed practitioner:</b>
          <input
            type="text"
            className="sign"
            onChange={formik.handleChange}
            name={`page3[${index}].practitioner`}
            value={practitionerV}
          />
        </div>
        <span className="Name">
          Name and license type (MD/DO/DC/ND/RN/DPT/PT, etc) of practitioner who took the
          measurements:
        </span>
        <input
          type="text"
          className="sign rageItalicFont"
          onChange={formik.handleChange}
          name={`page3[${index}].measurements`}
          value={measurementsV}
        />

        <Grid container spacing={2}>
          <Grid item xs={4} lg={3}>
            <b style={{ fontSize: "16px" }}>Blood Pressure (BP):</b>
          </Grid>
          <Grid item xs={8} lg={9}>
            <input
              type="text"
              className="sign"
              onChange={formik.handleChange}
              name={`page3[${index}].Blood`}
              value={BloodV}
            />
            /
            <input
              type="text"
              className="sign pad"
              onChange={formik.handleChange}
              name={`page3[${index}].BP`}
              value={BPV}
            />
          </Grid>
          {/* <Grid item xs={4} lg={3}>
          </Grid> */}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4} lg={3}>
            <b style={{ fontSize: "16px" }}>Resting Heart Rate (RHR):</b>
          </Grid>
          <Grid item xs={8} lg={9}>
            <input
              type="text"
              className="sign"
              onChange={formik.handleChange}
              name={`page3[${index}].RHR`}
              value={RHRV}
            />
            <span className="per" style={{ fontSize: "16px" }}>
              beats per minute
            </span>
          </Grid>
          {/* <Grid item xs={4} lg={4}>
          <span className="per" style={{fontSize: "16px"}}>beats per minute</span>
          </Grid> */}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4} lg={3}>
            <b style={{ fontSize: "16px" }}>Oxygen Saturation (SpO2):</b>
          </Grid>
          <Grid item xs={8} lg={9}>
            <input
              type="text"
              className="sign"
              onChange={formik.handleChange}
              name={`page3[${index}].SpO2`}
              value={SpO2V}
            />
            <span className="per" style={{ fontSize: "16px" }}>
              %
            </span>
          </Grid>
          {/* <Grid item xs={4} lg={4}>
          <span className="per" style={{fontSize: "16px"}}>%</span>
          </Grid> */}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4} lg={3}>
            <b style={{ fontSize: "16px" }}>Respiratory Rate (RR):</b>
          </Grid>
          <Grid item xs={8} lg={9}>
            <input
              type="text"
              className="sign"
              onChange={formik.handleChange}
              name={`page3[${index}].RR`}
              value={RRV}
            />
            <span className="per" style={{ fontSize: "16px" }}>
              breaths per minute
            </span>
          </Grid>
          {/* <Grid item xs={4} lg={4}>
          <span className="per" style={{fontSize: "16px"}}> breaths per minute</span>
          </Grid> */}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={4} lg={3}>
            <b style={{ fontSize: "16px" }}>Body Temperature:</b>
          </Grid>
          <Grid item xs={8} lg={9}>
            <input
              type="text"
              className="sign"
              onChange={formik.handleChange}
              name={`page3[${index}].Temperature`}
              value={TemperatureV}
            />
            <span className="per" style={{ fontSize: "16px" }}>
              degrees Fahrenheit
            </span>
          </Grid>
          {/* <Grid item xs={4} lg={4}>
          <span className="per" style={{fontSize: "16px"}}>degrees Fahrenheit</span>
          </Grid> */}
        </Grid>

        {/* <div className="blood pt-2">
          <b>Blood Pressure (BP):</b>
          <input
            type="text"
            className="sign"
            onChange={formik.handleChange}
            name="Blood"
            value={BloodV}
          />
          /
          <input
            type="text"
            className="sign pad"
            onChange={formik.handleChange}
            name="BP"
            value={BPV}
          />
        </div> */}
        {/* <div className="blood pt-2">
          <b>Resting Heart Rate (RHR):</b>
          <input
            type="text"
            className="sign"
            onChange={formik.handleChange}
            name="RHR"
            value={RHRV}
          />
          <span className="per">beats per minute</span>
        </div> */}
        {/* <div className="blood pt-2">
          <b>Oxygen Saturation (SpO2):</b>
          <input
            type="text"
            className="sign"
            onChange={formik.handleChange}
            name="SpO2"
            value={SpO2V}
          />
          <span className="per">%</span>
        </div> */}
        {/* <div className="blood pt-2">
          <b>Respiratory Rate (RR):</b>
          <input
            type="text"
            className="sign"
            onChange={formik.handleChange}
            name="RR"
            value={RRV}
          />
          <span className="per"> breaths per minute</span>
        </div> */}
        {/* <div className="blood pt-2">
          <b>Body Temperature:</b>
          <input
            type="text"
            className="sign"
            onChange={formik.handleChange}
            name="Temperature"
            value={TemperatureV}
          />
          <span className="per">degrees Fahrenheit</span>
        </div> */}
        <b className="NOTICE">
          NOTICE: BY SIGNING THIS CONTRACT BY ENTERING MY NAME DIGITALLY IN THE SPACE PROVIDED BELOW
          I AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE STATE OF
          CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE CALIFORNIA HEALTH
          AND SAFETY CODE SECTION 103526 (C), AND AGREE TO THE ABOVE INFORMED CONSENT, RELEASE AND
          INDEMNIFICATION AGREMENT AND ITS TERMS AND CONDITIONS. I AM AGREEING TO ALL TERMS AND
          CONDITIONS AND INFORMATION LISTED ABOVE ON PAGE 1 AND 2.
        </b>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name </span>
              <input
                type="text"
                className="sign rageItalicFont"
                onChange={formik.handleChange}
                name={`page3[${index}].ClientName`}
                value={ClientNameV}
              />
              <div>
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Signature</span>

                {/* <input
                  type="text"
                  className="sign"
                  onChange={formik.handleChange}
                  name="ClientSignature"
                  value={ClientSignatureV}
                /> */}

                {ClientSignatureV ? (
                  <Grid item xs={12} lg={6} sm={6} className="parentClass">
                    <img src={ClientSignatureV} />
                  </Grid>
                ) : (
                  <Grid item xs={12} md={6} lg={4}>
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
                        disabled={signBeginClient}
                      >
                        Clear
                      </SoftButton>

                      <SoftButton
                        disabled={signBeginClient}
                        onClick={() => {
                          formik.setFieldValue(
                            `page3[${index}].ClientSignature`,
                            sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                          );
                        }}
                      >
                        Save
                      </SoftButton>
                    </div>
                  </Grid>
                )}
              </div>
              <div>
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Office Signature</span>

                {OfficeSignatureV ? (
                  <Grid item xs={12} lg={6} sm={6} className="parentClass">
                    <img src={OfficeSignatureV} />
                  </Grid>
                ) : (
                  <Grid item xs={12} md={6} lg={4}>
                    <SignaturePad
                      canvasProps={{ width: 240, height: 150 }}
                      ref={sigPad1}
                      penColor="black"
                      backgroundColor="#f1f1f1"
                      placeholder="sign"
                      onBegin={(e) => onBeginfun1(e.isTrusted)}
                    />
                    <div className="saveAndClear">
                      <SoftButton
                        onClick={clear1}
                        style={{ marginRight: "10px" }}
                        disabled={signBeginOfc}
                      >
                        Clear
                      </SoftButton>

                      <SoftButton
                        disabled={signBeginOfc}
                        onClick={() => {
                          formik.setFieldValue(
                            `page3[${index}].OfficeSignature`,
                            sigPad1.current.getTrimmedCanvas().toDataURL("image/png")
                          );
                        }}
                      >
                        Save
                      </SoftButton>
                    </div>
                  </Grid>
                )}
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

              <input
                type="date"
                className="sign"
                onChange={formik.handleChange}
                name={`page3[${index}].Date1`}
                value={Date1V}
              />
              <div>
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

                <input
                  type="date"
                  className="sign"
                  onChange={formik.handleChange}
                  name={`page3[${index}].Date2`}
                  value={Date2V}
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default third;
