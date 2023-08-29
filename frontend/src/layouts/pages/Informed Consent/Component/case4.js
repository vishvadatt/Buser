import * as React from "react";
import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import SoftBox from "components/SoftBox";
import FormField from "../../Profile/components/FormField";
import PropTypes from "prop-types";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";
import { useEffect } from "react";
const Case4 = ({ values, handleChange, touched, errors, setFieldValue }) => {
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [signBeginClient, setSignBeginClient] = React.useState(true);
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);
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
    console.log("getDefaultClientSignatureDateValue", `${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    console.log("page3---");
    window.scrollTo({ top: 0, left: 0 });

    if (!values.arbitraion_client__date) {
      setFieldValue("arbitraion_client__date", getDefaultClientSignatureDateValue());
    }
    if (!values.arbitraion_ofc_date) {
      setFieldValue("arbitraion_ofc_date", getDefaultClientSignatureDateValue());
    }
  }, []);

  useEffect(() => {
    console.log("page4---");
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div>
      <SoftBox px={3} mt={5} py={1} mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <Stack direction={"column"}>
            <h2 className="AGREEMENT">ARBITRATION AGREEMENT</h2>
          </Stack>
        </Grid>
      </SoftBox>
      <SoftBox px={3} className="step1">
        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
          <b>
            <u>Article 1:</u> Agreement to Arbitrate:
          </b>{" "}
          It is understood that any dispute as to medical, chiropractic and/or personal training
          malpractice, that is as to whether any such services rendered under this contract were
          unnecessary or unauthorized or were improperly, negligently or incompetently rendered,
          will be determined by submission to arbitration as provided by state and federal law, and
          not by a lawsuit or resort to court process, except as state and federal law provides for
          judicial review of arbitration proceedings. Both parties to this contract, by entering
          into it, are giving up their constitutional right to have any such dispute decided in a
          court of law before a jury, and instead are accepting the use of arbitration. Further, the
          parties will not have the right to participate as a member of any class of claimants, and
          there shall be no authority for any dispute to be decided on a class action basis. An
          arbitration can only decide a dispute between the parties and may not consolidate or join
          the claims of other persons who have similar claims.
          <br />
          <br />
          <b>
            <u>Article 2:</u> All Claims Must be Arbitrated:
          </b>{" "}
          It is also understood that any dispute that does not relate to medical, chiropractic or
          personal training malpractice, including disputes as to whether or not a dispute is
          subject to arbitration, as to whether this agreement is unconscionable, and any procedural
          disputes, will also be determined by submission to binding arbitration. It is the
          intention of the parties that this agreement bind all parties as to all claims, including
          claims arising out of or relating to treatment or services provided by the care provider,
          including any heirs or past, present or future spouse(s of the Client in relation to all
          claims, including loss of consortium. This agreement is also intended to bind any children
          of the Client whether born or unborn at the time of the occurrence giving rise to any
          claim. This agreement is intended to bind the Client and the care provider and/or other
          licensed care providers, preceptors, interns or subcontractors who now or in the future
          consult with the Client while employed by, working or associated with or serving as a
          back-up for the care provider, including those working at the care provider&apos;s clinic
          or office or any other clinic or office or facility or premises whether signatories to
          this form or not. All claims for monetary damages exceeding the jurisdictional limit of
          the small claims court against the care provider, and/or the care provider&apos;s
          associates, association, corporation, partnership, employees, agents, subcontractors and
          estate, must be arbitrated including, without limitation, claims for loss of consortium,
          wrongful death, emotional distress, injunctive relief, or punitive damages. This agreement
          is intended to create an open book account unless and until revoked.
          <br />
          <br />
          <b>
            <u>Article 3:</u> Procedures and Applicable Law:
          </b>{" "}
          A demand for arbitration must be communicated in writing to all parties. Each party shall
          select an arbitrator (party arbitrator within thirty days, and a third arbitrator (neutral
          arbitrator shall be selected by the arbitrators appointed by the parties within thirty
          days thereafter. The neutral arbitrator shall then be the sole arbitrator and shall decide
          the arbitration. Each party to the arbitration shall pay such party&apos;s pro rata share
          of the expenses and fees of the neutral arbitrator, together with other expenses of the
          arbitration incurred or approved by the neutral arbitrator, not including counsel fees,
          witness fees, or other expenses incurred by a party for such party&apos;s own benefit.
          Either party shall have the absolute right to bifurcate the issues of liability and damage
          upon written request to the neutral arbitrator. The parties consent to the intervention
          and joinder in this arbitration of any person or entity that would otherwise be a proper
          additional party in a court action, and upon such intervention and joinder, any existing
          court action against such additional person or entity shall be stayed pending arbitration.
          The parties agree that provisions of state and federal law, where applicable, establishing
          the right to introduce evidence of any amount payable as a benefit to the Client to the
          maximum extent permitted by law, limiting the right to recover non-economic losses, and
          the right to have a judgment for future damages conformed to periodic payments, shall
          apply to disputes within this Arbitration Agreement. The parties further agree that the
          Commercial Arbitration Rules of the American Arbitration Association shall govern any
          arbitration conducted pursuant to this Arbitration Agreement.
          <br />
          <br />
          <b>
            <u>Article 4:</u> General Provision:
          </b>{" "}
          All claims based upon the same incident, transaction, or related circumstances shall be
          arbitrated in one proceeding. A claim shall be waived and forever barred if (1 on the date
          notice thereof is received, the claim, if asserted in a civil action, would be barred by
          the applicable legal statute of limitations, or (2 the claimant fails to pursue the
          arbitration claim in accordance with the procedures prescribed herein with reasonable
          diligence.
          <br />
          <br />
          <b>
            <u>Article 5:</u> Revocation:
          </b>
          This agreement may be revoked by written notice delivered to the care provider within 30
          days of signature and, if not revoked, will govern all professional services received by
          the Client and all other disputes between the parties.
          <br />
          <br />
          <b>
            <u>Article 6:</u> Retroactive Effect:{" "}
          </b>
          If Client intends this agreement to cover services rendered before the date it is signed
          (for example, emergency treatment,
        </p>
        <Grid container spacing={0} style={{ alignItems: "center" }}>
          <p className="clientInitialName">Client should initial here.&nbsp;</p>
          <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
            <FormField
              className="initialName"
              placeholder="Write initial"
              name="arbitraion_Retroactive_initial"
              value={values.arbitraion_Retroactive_initial}
              onChange={handleChange}
              error={
                errors.arbitraion_Retroactive_initial && touched.arbitraion_Retroactive_initial
              }
              success={
                values?.arbitraion_Retroactive_initial?.length > 0 &&
                !errors.arbitraion_Retroactive_initial
              }
            />
          </Grid>
          <p className="clientInitialName">
            {" "}
            Effective as of the date of first professional services.
          </p>
        </Grid>

        <p style={{ textAlign: "justify" }}>
          If any provision of this Arbitration Agreement is held invalid or unenforceable, the
          remaining provisions shall remain in full force and shall not be affected by the
          invalidity of any other provision. I understand that I have the right to receive a copy of
          this Arbitration Agreement. By my signature below, I acknowledge that I have received a
          copy
        </p>
        <br />
        <p style={{ textAlign: "justify" }}>
          <b>
            NOTICE: BY SIGNING THIS CONTRACT BY ENTERING MY NAME DIGITALLY IN THE SPACE PROVIDED
            BELOW I AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE
            STATE OF CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE
            CALIFORNIA HEALTH AND SAFETY CODE SECTION 103526 (C), AND I AGREE TO THE ABOVE. I AGREE
            TO HAVE ANY ISSUE OF MALPRACTICE DECIDED BY NEUTRAL ARBITRATION AND I AM GIVING UP MY
            RIGHT TO A JURY OR COURT TRIAL. SEE ARTICLE 1 OF THIS CONTRACT.
          </b>
        </p>
      </SoftBox>
      <br />
      <SoftBox component="form" px={10} className="nameAndDate">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className="spaceing">
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
        </Grid>
        {/* <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Date"
              type="date"
              placeholder="date"
              name="arbitraion_client__date"
              value={values.arbitraion_client__date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Date"
              type="date"
              placeholder="date"
              name="arbitraion_ofc_date"
              value={values.arbitraion_ofc_date}
              onChange={handleChange}
            />
          </Grid>
        </Grid> */}
        <Grid container spacing={5}>
          {values.ARBITRATION_sign_client !== undefined ? (
            <Grid item xs={12} md={4} sm={6} className="parentClass">
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                // label="Date"
                type="date"
                placeholder="date"
                name="arbitraion_client__date"
                value={values.arbitraion_client__date}
                onChange={handleChange}
              />
              <h5 style={{ fontSize: "15px" }}>Client Sign</h5>
              <img src={values.ARBITRATION_sign_client} />
              <h5 style={{ fontSize: "15px" }}>Sign here</h5>
            </Grid>
          ) : (
            <Grid item xs={12} md={6} lg={4}>
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="arbitraion_client__date"
                value={values.arbitraion_client__date}
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
                      "ARBITRATION_sign_client",
                      sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                    );
                  }}
                >
                  Save
                </SoftButton>
              </div>
            </Grid>
          )}

          {/* <Grid item xs={12} sm={4} className="spaceing"> */}
          {values.ARBITRATION_sign_ofc !== undefined ? (
            <Grid item xs={12} md={4} sm={6} className="parentClass">
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="arbitraion_ofc_date"
                value={values.arbitraion_ofc_date}
                onChange={handleChange}
              />
              <h5 style={{ fontSize: "15px" }}>Office Sign</h5>
              <img src={values.ARBITRATION_sign_ofc} />
              <h5 style={{ fontSize: "15px" }}>Sign here</h5>
            </Grid>
          ) : (
            <Grid item xs={12} md={6} lg={4}>
              <FormField
                label={<span style={{ fontSize: "15px" }}>Date</span>}
                type="date"
                placeholder="date"
                name="arbitraion_ofc_date"
                value={values.arbitraion_ofc_date}
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
                      "ARBITRATION_sign_ofc",
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
                  defaultChecked={values.cancellation_flag}
                  name="cancellation_flag"
                  // onChange={handleChange}
                  onChange={(e) => setFieldValue("cancellation_flag",e.target.checked)}
                />
              }
              label={"I Agree"}
            />
          </Grid>
        </Grid>
      </SoftBox>
      {/* <SoftBox component="form" px={10} className="nameAndDate">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label=" Client Name"
              placeholder="Enter Name.."
              name="TermsAndSignature_name"
              value={values.TermsAndSignature_name}
              onChange={handleChange}
              errorMsg
              error={errors.TermsAndSignature_name && touched.TermsAndSignature_name}
              success={values?.TermsAndSignature_name?.length > 0 && !errors.TermsAndSignature_name}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label=" Client Signature"
              placeholder="Signature.."
              name="arbitraion_client_signature"
              value={values.arbitraion_client_signature}
              onChange={handleChange}
              errorMsg
              error={errors.arbitraion_client_signature && touched.arbitraion_client_signature}
              success={
                values?.arbitraion_client_signature?.length > 0 &&
                !errors.arbitraion_client_signature
              }
            />
          </Grid>

          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Date"
              type="date"
              placeholder="date"
              name="arbitraion_client__date"
              value={values.arbitraion_client__date}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label=" Office Signature"
              placeholder="Signature.."
              name="arbitraion_ofc_signature"
              value={values.arbitraion_ofc_signature}
              onChange={handleChange}
              errorMsg
              error={errors.arbitraion_ofc_signature && touched.arbitraion_ofc_signature}
              success={
                values?.arbitraion_ofc_signature?.length > 0 && !errors.arbitraion_ofc_signature
              }
            />
          </Grid>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Date"
              type="date"
              placeholder="date"
              name="arbitraion_ofc_date"
              value={values.arbitraion_ofc_date}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </SoftBox> */}
    </div>
  );
};
Case4.propTypes = {
  values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case4;
