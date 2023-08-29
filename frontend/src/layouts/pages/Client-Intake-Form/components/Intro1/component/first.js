import React from "react";
import { Grid, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";
import SoftButton from "components/SoftButton";
import SignaturePad from "react-signature-canvas";
import FormField from "layouts/pages/Profile/components/FormField";

function first({ formik, form, index }) {
  // const dispatch = useDispatch();
  // const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  // // console.log("soappatientIdintro", soappatientId);
  // const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  // console.log("patientlistclientintake", patientlist);
  // const UserId = useSelector((state) => state.auth.auth._id);
  const [signBeginClient, setSignBeginClient] = React.useState(true);
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);

  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});

  // let date = new Date().toLocaleDateString("en-CA");
  // console.log(signBeginClient, "ddd");
  // console.log(signBeginOfc, "ff");
  //   const { formField, setFieldValue } = form;

  const onBeginfun = (e) => {
    setSignBeginClient(e?.isTrusted);
  };
  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };
  function clear() {
    sigPad.current.clear();
    setSignBeginClient(true);
  }
  function clear1() {
    signPad1.current.clear();
    setSignBeginOfc(true);
  }
  const { values } = formik;

  // console.log("values viv", values.page1[index]);

  // console.log("values viv", values?.name);
  const {
    understand: understandV,
    consent: consentV,
    consent2: consent2V,
    ClientName: ClientNameV,
    ClientSignature: ClientSignatureV,
    OfficeSignature: OfficeSignatureV,
    Date1: Date1V,
    Date2: Date2V,
    Agreement: AgreementV,
  } = values?.page1[index];

  // console.log("values viv",nameV);
  // console.log("ClientSignatureV..", ClientSignatureV);
  // console.log("Client", OfficeSignatureV);

  return (
    <div>
      <Grid>
        <Container fluid>
          <b className="Your">YOUR COMMITMENT: </b>
          <p className="understand">
            I understand the above process and expectations of my active involvement in this
            clinical program and its associated research studies, publications and education
            programs. I acknowledge I have read this agreement and fully understand its meanings and
            implications. To concur, client should initial here
          </p>

          <input
            type="text"
            className="sign rageItalicFont"
            name={`page1[${index}].understand`}
            value={formik.values?.page1[index]?.understand}
            onChange={formik.handleChange}
          />
          <p className="understand">
            I consent to the use of my non-confidential, clinically relevant information (including
            written clinical records, photographs and videos; and excluding confidential information
            such as mailing and email addresses, contact and billing information) for the purposes
            of research and education to support the development of this functional physiotherapy
            community. I understand that the Buser Institute will safeguard my confidential
            information to include phone numbers, email and mailing addresses and billing
            information (credit card numbers, Wise and Venmo accounts, etc), and withhold this
            information from research studies, publications and education programs. To concur,
            client should initial here{" "}
          </p>

          <input
            type="text"
            className="sign rageItalicFont"
            onChange={formik.handleChange}
            name={`page1[${index}].consent`}
            value={formik.values?.page1[index]?.consent}
          />

          <p
            style={{ textAlign: "justify", fontSize: "16px", marginTop: "1%" }}
            className="initialhere"
          >
            I understand that the Buser Institute questionnaires, tests and evaluation procedures
            are not designed to, nor are able to, rule-in or rule-out chiropractic or medically
            diagnosable conditions, nor to screen for conditions appropriate for medical specialist
            referrals. Rather, Dr. Buser&apos;s and the Buser Institute&apos;s evaluation processes
            are designed to work remotely (not in-person) and therefore solely within the personal
            training scope of practice to identify one&apos;s subclinical (medically
            non-diagnosable) and functional (natural movement) musculoskeletal imbalances and
            determine what corrective exercises are most appropriate to reach one&apos;s functional
            movement performance goals. I clearly understand and specifically express that I am
            seeking consultation with Dr. Buser and the Buser Institute for that reason to assist in
            identifying such factors that may exist outside, rather than inside, of the conventional
            chiropractic and medical model which may be contributing to my musculoskeletal
            imbalances. I understand that although Dr. Buser has a Doctorate of Chiropractic degree,
            in order to remain able to consult with clients remotely (not in-person) with this
            unique approach to corrective exercise therapy he and the representatives of the Buser
            Institute are{" "}
            <span style={{ borderBottom: "1px solid gray" }}>
              only practicing within the personal training scope of practice
            </span>{" "}
            and{" "}
            <span style={{ borderBottom: "1px solid gray" }}>
              not that of the chiropractic nor medical scope of practice.
            </span>{" "}
            I understand that the personal training scope of practice{" "}
            <span style={{ borderBottom: "1px solid gray" }}>
              does not screen for, diagnose, treat, or cure chiropractic or medical conditions nor
              do they identify cases potentially requiring referral to specialists from a PCM.
            </span>{" "}
            Further, I fully understand that{" "}
            <span style={{ borderBottom: "1px solid gray" }}>
              Buser Institute and its representatives, including Dr. Buser, make no claim to screen
              for, treat, cure, track or refer out for chiropractic or medically diagnosable
              conditions.
            </span>{" "}
            <b>
              I understand that the Buser Institute expects that all clients, and clients of
              consulting practitioners, including myself, are under the current and ongoing care of
              an appropriate outside Primary Care Manager (PCM) (not including Dr. Buser or the
              Buser Institute representatives) to appropriately screen for, treat, track and refer
              out to specialists as needed for any and all chiropractic and medically diagnosable
              conditions.
            </b>{" "}
            Therefore, if I am seeking a physician, doctor or healthcare manager to screen for,
            treat, track, cure or refer out to medical specialists, it is my responsibility to seek
            an appropriate outside and licensed primary healthcare manager (licensed MD, DO, etc) to
            do so.
          </p>
          <input
            type="text"
            className="sign rageItalicFont"
            onChange={formik.handleChange}
            name={`page1[${index}].consent2`}
            value={formik.values?.page1[index]?.consent2}
          />

          <div>
            <b>Retroactive Effect:</b>
            <span className="intends">
              If Client intends this agreement to cover services rendered before the date it is
              signed (for example, emergency treatment), Client should initial here{" "}
              <input
                type="text"
                className="sign rageItalicFont"
                onChange={formik.handleChange}
                name={`page1[${index}].Agreement`}
                value={formik.values?.page1[index]?.Agreement}
              />
              Effective as of the date of first professional services
            </span>
          </div>
          <b className="SIGNING">
            BY SIGNING THIS CONTRACT BY ENTERING MY NAME DIGITALLY IN THE SPACE PROVIDED BELOW I
            AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE STATE OF
            CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE CALIFORNIA
            HEALTH AND SAFETY CODE SECTION 103526 (C), AND AGREE TO THE ABOVE AGREMENT AND ITS TERMS
            AND CONDITIONS. I AM AGREEING TO ALL TERMS AND CONDITIONS AND INFORMATION LISTED ABOVE.{" "}
          </b>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name </span>
              <input
                type="text"
                className="sign ml-4 rageItalicFont"
                onChange={formik.handleChange}
                name={`page1[${index}].ClientName`}
                value={formik.values?.page1[index]?.ClientName}
              />
              <Grid mt={1}>
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Signature</span>

                {/* <input
                  type="text"
                  className="sign ml-1"
                  onChange={formik.handleChange}
                  name="ClientSignature"
                  value={ClientSignatureV}
                /> */}
                {/* <SignaturePad
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
                      "agrrement_sign_client",
                      sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                    );
                  }}
                >
                  Save
                </SoftButton>
              </div> */}

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
                            `page1[${index}].ClientSignature`,
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
              <Grid mt={1}>
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Office Signature</span>

                {/* <input
                  type="text"
                  className="sign"
                  onChange={formik.handleChange}
                  name="OfficeSignature"
                  value={OfficeSignatureV}
                /> */}

                {OfficeSignatureV ? (
                  <Grid item xs={12} lg={6} sm={6} className="parentClass">
                    <img src={OfficeSignatureV} />
                  </Grid>
                ) : (
                  <Grid item xs={12} md={6} lg={4}>
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
                        disabled={signBeginOfc}
                        style={{ marginRight: "10px" }}
                      >
                        Clear
                      </SoftButton>

                      <SoftButton
                        disabled={signBeginOfc}
                        onClick={() => {
                          formik.setFieldValue(
                            `page1[${index}].OfficeSignature`,
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
            </Grid>
            <Grid item xs={12} md={4}>
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

              <input
                type="date"
                className="sign"
                onChange={formik.handleChange}
                name={`page1[${index}].Date1`}
                value={Date1V}
              />
              <Grid mt={1}>
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

                <input
                  type="date"
                  className="sign"
                  onChange={formik.handleChange}
                  name={`page1[${index}].Date2`}
                  value={Date2V}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default first;
