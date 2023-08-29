import * as React from "react";
import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import SoftBox from "components/SoftBox";
import FormField from "../../Profile/components/FormField/index";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
const Case5 = ({ handleChange, touched, errors, setFieldValue }) => {
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [userdata, setuserdata] = useState({});
  const userdatas = useSelector((state) => state?.auth?.informedConsent);
  const [signBeginClient, setSignBeginClient] = React.useState(true);
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);
  //   const userdata = userdatas && userdatas;

  useEffect(() => {
    setuserdata(userdatas);
  }, [userdatas]);
  //   const [values, setValues] = useState({});

  //   React.useEffect(() => {
  //     setValues(userdata);
  //   }, [userdata]);
  const onBeginfun = (e) => {
    setSignBeginClient(e?.isTrusted);
  };
  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };
  // function clear() {
  //   sigPad.current.clear();
  //   signPad1.current.clear();
  //   setSignBeginClient(true);
  //   setSignBeginOfc(true);
  // }

  function clear() {
    sigPad.current.clear();
    setSignBeginClient(true);
  }

  function clear1() {
    signPad1.current.clear();
    setSignBeginOfc(true);
  }

  useEffect(() => {
    console.log("page1---");
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div>
      <SoftBox px={3} mt={5} py={1} mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <Stack direction={"column"}>
            <h2>Client Participation Agreement</h2>
          </Stack>
        </Grid>
      </SoftBox>

      <SoftBox px={3} className="step1">
        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
          <h6>Your commitment: </h6>I understand the above process and expectations of my active
          involvement in this clinical program and its associated research studies, publications and
          education programs. I acknowledge I have read this agreement and fully understand its
          meanings and implications. To concur,
        </p>
        <Grid container spacing={0} style={{ alignItems: "center" }}>
          <p className="clientInitialName">Client should initial here.&nbsp;</p>
          <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
            <FormField
              className="initalName"
              placeholder="Write initial"
              name="commitment_initial1"
              value={userdata.commitment_initial1}
              onChange={handleChange}
              error={errors.commitment_initial1 && touched.commitment_initial1}
              success={userdata?.commitment_initial1?.length > 0 && !errors.commitment_initial1}
            />
          </Grid>
        </Grid>
        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
          I consent to the use of my non-confidential, clinically relevant information (including
          written clinical records, photographs and videos; and excluding confidential information
          such as mailing and email addresses, contact and billing information) for the purposes of
          research and education to support the development of this functional physiotherapy
          community. I understand that the Buser Institute will safeguard my confidential
          information to include phone numbers, email and mailing addresses and billing information
          (credit card numbers, Wise and Venmo accounts, etc), and withhold this information from
          research studies, publications and education programs. To concur,
        </p>
        <Grid container spacing={0} style={{ alignItems: "center" }}>
          <p className="clientInitialName">Client should initial here.&nbsp;</p>
          <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
            <FormField
              className="initalName"
              placeholder="Write initial"
              name="commitment_initial2"
              value={userdata.commitment_initial2}
              onChange={handleChange}
              error={errors.commitment_initial2 && touched.commitment_initial2}
              success={userdata?.commitment_initial2?.length > 0 && !errors.commitment_initial2}
            />
          </Grid>
        </Grid>
        
        <p style={{  textAlign: "justify" }} className="initialhere">
        <h6>Your understanding of Dr. Buser&apos;s and the Buser Institute representatives&apos; limited personal training scope of
        practice and your need for an outside licensed Primary Care Manager (PCM) for medical screening and care:</h6>
        I understand that the Buser Institute questionnaires, tests and evaluation procedures are not designed to, nor are
        able to, rule-in or rule-out chiropractic or medically diagnosable conditions, nor to screen for conditions appropriate
        for medical specialist referrals. Rather, Dr. Buser&apos;s and the Buser Institute&apos;s evaluation processes are designed to work
        remotely (not in-person) and therefore solely within the personal training scope of practice to identify one&apos;s
        subclinical (medically non-diagnosable) and functional (natural movement) musculoskeletal imbalances and
        determine what corrective exercises are most appropriate to reach one&apos;s functional movement performance goals. I
        clearly understand and specifically express that I am seeking consultation with Dr. Buser and the Buser Institute for
        that reason to assist in identifying such factors that may exist outside, rather than inside, of the conventional
        chiropractic and medical model which may be contributing to my musculoskeletal imbalances. I understand that
        although Dr. Buser has a Doctorate of Chiropractic degree, in order to remain able to consult with clients remotely
        (not in-person) with this unique approach to corrective exercise therapy he and the representatives of the Buser
        Institute are <span style={{borderBottom : "1px solid gray"}}>only practicing within the personal training scope of practice</span> and <span style={{borderBottom : "1px solid gray"}}>not that of the chiropractic nor medical
        scope of practice.</span> I understand that the personal training scope of practice <span style={{borderBottom : "1px solid gray"}}>does not screen for, diagnose, treat, or
        cure chiropractic or medical conditions nor do they identify cases potentially requiring referral to specialists from a
        PCM.</span> Further, I fully understand that <span style={{borderBottom : "1px solid gray"}}>Buser Institute and its representatives, including Dr. Buser, make no claim to
        screen for, treat, cure, track or refer out for chiropractic or medically diagnosable conditions.</span> <b>I understand that the
        Buser Institute expects that all clients, and clients of consulting practitioners, including myself, are under the
        current and ongoing care of an appropriate outside Primary Care Manager (PCM) (not including Dr. Buser or the
        Buser Institute representatives) to appropriately screen for, treat, track and refer out to specialists as needed for
        any and all chiropractic and medically diagnosable conditions.</b> Therefore, if I am seeking a physician, doctor or
        healthcare manager to screen for, treat, track, cure or refer out to medical specialists, it is my responsibility to seek an
        appropriate outside and licensed primary healthcare manager (licensed MD, DO, etc) to do so.
        </p>
        <Grid container spacing={0} className="newCommitment_initial3">
          <p className="clientInitialName">To concur,Client should initial here.&nbsp;</p>
          <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
            <FormField
              className="initalName"
              placeholder="Write initial"
              name="newCommitment_initial3"
              value={userdata.newCommitment_initial3}
              onChange={handleChange}
              error={errors.newCommitment_initial3 && touched.newCommitment_initial3}
              success={userdata?.newCommitment_initial3?.length > 0 && !errors.newCommitment_initial3}
            />
          </Grid>
        </Grid>

        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
          <b>Retroactive Effect:</b> If Client intends this agreement to cover services rendered
          before the date it is signed (for example, emergency treatment),
        </p>
        <Grid container spacing={0} style={{ alignItems: "center", marginBottom: "-15px" }}>
          <p className="clientInitialName">Client should initial here.</p>
          <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
            <FormField
              className="initalName"
              placeholder="Write initial"
              name="client_Retroactive_initial"
              value={userdata.client_Retroactive_initial}
              onChange={handleChange}
              error={errors.client_Retroactive_initial && touched.client_Retroactive_initial}
              success={
                userdata?.client_Retroactive_initial?.length > 0 &&
                !errors.client_Retroactive_initial
              }
            />
          </Grid>
          <p className="clientInitialName">
            {"   "}
            Effective as of the date of first professional services.
          </p>
        </Grid>
        <br />

        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
          {" "}
          <b>
            BY SIGNING THIS CONTRACT BY ENTERING MY NAME DIGITALLY IN THE SPACE PROVIDED BELOW I
            AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE STATE OF
            CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE CALIFORNIA
            HEALTH AND SAFETY CODE SECTION 103526 (C), AND AGREE TO THE ABOVE AGREMENT AND ITS TERMS
            AND CONDITIONS. I AM AGREEING TO ALL TERMS AND CONDITIONS AND INFORMATION LISTED ABOVE.
          </b>
        </p>
        <br />
        <br />
      </SoftBox>

      <SoftBox component="form" px={10} className="nameAndDate">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label={<span style={{ fontSize: "15px" }}>Client Name</span>}
              placeholder="Enter Name.."
              name="TermsAndSignature_name"
              value={userdata.TermsAndSignature_name}
              onChange={handleChange}
              errorMsg
              error={errors.TermsAndSignature_name && touched.TermsAndSignature_name}
              success={
                userdata?.TermsAndSignature_name?.length > 0 && !errors.TermsAndSignature_name
              }
            />
          </Grid>
        </Grid>
        {/* old date parts  */}
        {/* <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Date"
              type="date"
              placeholder="date"
              name="client_signature_date"
              value={values.client_signature_date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Date"
              type="date"
              placeholder="date"
              name="office_signature_date"
              value={values.office_signature_date}
              onChange={handleChange}
            />
          </Grid>
        </Grid> */}
        <Grid container spacing={5}>
          {userdata.agrrement_sign_client !== undefined ? (
            <Grid item xs={12} sm={6} className="parentClass">
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="client_signature_date"
                value={userdata.client_signature_date}
                onChange={handleChange}
              />
              <h5 style={{ fontSize: "15px" }}>Client Sign</h5>
              <img src={userdata.agrrement_sign_client} />
              <h5 style={{ fontSize: "15px" }}>Sign here</h5>
            </Grid>
          ) : (
            <Grid item xs={12} md={6} lg={4}>
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="client_signature_date"
                value={userdata.client_signature_date}
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
                  disabled={signBeginClient}
                >
                  Clear
                </SoftButton>

                <SoftButton
                  disabled={signBeginClient}
                  onClick={() => {
                    setFieldValue(
                      "agrrement_sign_client",
                      sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                    );
                  }}
                >
                  Save
                </SoftButton>
              </div>
            </Grid>
          )}

          {userdata.agrrement_sign_ofc !== undefined ? (
            <Grid item xs={12} sm={6} className="parentClass">
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="office_signature_date"
                value={userdata.office_signature_date}
                onChange={handleChange}
              />
              <h5 style={{ fontSize: "15px" }}>Office Sign</h5>
              <img src={userdata.agrrement_sign_ofc} />
              <h5 style={{ fontSize: "15px" }}>Sign here</h5>
            </Grid>
          ) : (
            <Grid item xs={12} md={6} lg={4}>
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="office_signature_date"
                value={userdata.office_signature_date}
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
                  disabled={signBeginOfc}
                  style={{ marginRight: "10px" }}
                >
                  Clear
                </SoftButton>

                <SoftButton
                  disabled={signBeginOfc}
                  onClick={() => {
                    setFieldValue(
                      "agrrement_sign_ofc",
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
      </SoftBox>
      <SoftBox mt={2}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            {userdata.agrrement_flag && (
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
                    defaultChecked={userdata.agrrement_flag}
                    name="agrrement_flag"
                    onChange={handleChange}
                    disabled="true"
                  />
                }
                label={"I Agree"}
              />
            )}
            {!userdata.agrrement_flag && (
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
                    defaultChecked={userdata.agrrement_flag}
                    name="agrrement_flag"
                    onChange={handleChange}
                    disabled="true"
                  />
                }
                label={"I Agree"}
              />
            )}
          </Grid>
        </Grid>
      </SoftBox>
    </div>
  );
};
Case5.propTypes = {
  //   userdata: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case5;
