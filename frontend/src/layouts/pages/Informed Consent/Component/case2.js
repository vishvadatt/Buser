import * as React from "react";
import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import SoftBox from "components/SoftBox";
import FormField from "../../Profile/components/FormField";
import PropTypes from "prop-types";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";
import { useEffect } from "react";
const Case2 = ({ values, handleChange, touched, errors, setFieldValue }) => {
  let sigPad = React.useRef({});

  const [signBeginClient, setSignBeginClient] = React.useState(true);

  const onBeginfun = (e) => {
    setSignBeginClient(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();

    setSignBeginClient(true);
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
    console.log("page2---");
    window.scrollTo({ top: 0, left: 0 });
    if (!values.informed_consent_date) {
      setFieldValue("informed_consent_date", getDefaultClientSignatureDateValue());
    }
  }, []);

  return (
    <div>
      <SoftBox px={3} mt={5} py={1} mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <Stack direction={"column"} sx={{ textAlign: "center" }}>
            <h4>
              <b>The Buser Institute</b>
            </h4>
            <span>Tel: (657) 215-5642</span>
            <span>admin@buserinstitute.com</span>
            <span>www.buserinstitute.com</span>
            <br />
            <br />
            <p>
              <u>
                <h2></h2>
              </u>
            </p>
          </Stack>
        </Grid>
      </SoftBox>
      <SoftBox px={3} className="step1">
        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
          There are risks and possible risks associated with manual therapy techniques, exercises
          and nutritional strategies used by doctors of chiropractic and personal trainers. In
          particular you should note:
          <br />
          <br />
          a) I understand and am aware that strength, flexibility, and aerobic exercise, including
          the use of equipment, are potentially hazardous activities. I also understand that fitness
          activities involve a risk of injury, and/or aggravation of a pre-existing injury or
          condition, and I am voluntarily participating in these activities and using equipment and
          machinery with knowledge of the dangers involved.
          <u>
            <b>I hereby agree to expressly assume and accept any and all risks of injury.</b>
          </u>
          <br />
          b) I understand that the{" "}
          <b>
            dietary strategies and nutritional supplements recommended in this program are intended
            only for nutritional use and health maintenance and should not replace or delay the use
            of any conventional medical (MD or DO) treatment.
          </b>
          <br />
          c) I understand that the dietary strategies and nutritional supplements recommended in
          this program have not been evaluated by the Food and Drug Administration. And I understand
          that the products recommended and used in{" "}
          <b>
            these programs are not intended to diagnose, treat, cure, or prevent any disease.
            <u>
              I hereby agree to expressly assume and accept any and all responsibility for procuring
              conventional{" "}
            </u>{" "}
            licensed medical (MD or DO) screening for, supervision of, and treatment for any
            medically diagnosable conditions, illnesses and diseases.
          </b>
          <br />
          d) I do hereby further declare myself to be physically sound and suffering from no
          condition, impairment, disease, infirmity, or other illness that would prevent my
          participation in exercise, stretching activities or use of associated equipment and
          machinery, dietary strategies or nutritional supplementation.
          <b>
            <u>
              {" "}
              I do hereby acknowledge that I have been informed of the need for a physician’s (MD or
              DO) screening for (including but not limited to screening for cardiovascular risk) and
              approval for my participation in exercise/fitness activities, in the use of exercise
              equipment and machinery, and participation in a dietary protocol and the use of
              nutritional supplements.
            </u>
          </b>{" "}
          I also acknowledge that it has been recommended that I have a yearly or more frequent
          physical examination and consultation with my physician regarding my physical activity,
          exercise, use of exercise and training equipment, and participation in a dietary protocol
          and use of nutritional supplementation, so I might have his/her recommendations concerning
          these fitness activities, equipment use and dietary and nutritional recommendations.{" "}
          <b>
            {" "}
            <u>
              I do hereby agree to immediately relay these initial and any updated physician
              screening results and recommendations to all care givers in this program.
            </u>{" "}
            I acknowledge that I have either had a physical examination and have been given my
            physician’s permission to fully participate without limitation, or that I have decided
            to participate in activity, the use of equipment and machinery, and the participation in
            dietary protocols and nutritional supplementation without the approval of my physician
            and{" "}
            <u>
              do hereby assume all responsibility for my participation and activities, utilization
              of equipment and machinery in my activities, and participation in said dietary
              protocols and nutritional supplementation strategies.
            </u>
            If my physician has recommended any limitations to my participation in any aspect of
            this exercise, dietary and nutrition program,{" "}
            <u>
              I hereby agree to immediately relay these physician recommended limitations and any
              updates to my caregiver in this program.
            </u>
          </b>
          <br />
          e)
          <b>
            <u>
              I agree to accept responsibility for obtaining the following vital cardiovascular
              screening measurements from a licensed practitioner within 7 days of submitting this
              form and annotate them below (on page 2)
            </u>
          </b>{" "}
          to furnish my care giver with this most recent screening information: Blood Pressure (BP),
          Resting Heart Rate (RHR), Oxygen Saturation (SpO2), Respiratory Rate (RR) and Body
          Temperature.
          <br />
          f) In consideration of being allowed to participate in the Buser Institute Training
          Program, I do hereby waive, release, and forever discharge the Buser Institute, their
          agents, representatives, successors, subcontractors and assignees, from all liabilities,
          actions, claims, demand, damages, costs, and expenses, which I may now or in the future
          have against them or any of them arising out of or in any way connected with my
          participation in the program, including but not limited to all injuries that may be
          suffered by me, including any injury arising from the negligence or other action or
          inaction of the released parties. The undersigned indemnifies, defends and holds harmless
          the Buser Institute, its officers, directors, agents, employees and subcontractors against
          all losses, liabilities, claims, damages, and expenses of every kind and nature, including
          without limitation, reasonable attorneys’ fees and expenses, which grow out of or are in
          any way connected with the conduct or organization of this program or its treatment(s).
          <br />
          <br />I acknowledge I have read this consent and I have discussed, or have been offered
          the opportunity to discuss, with my Buser Institute practitioner the nature and purpose of
          the treatment options, their therapeutic recommendations (including exercises and
          nutrition) for my condition, and the contents of this Consent, Release and Indemnification
          Agreement. I consent to the activities, therapeutic protocols and treatment recommended to
          me by my personal trainers and care providers including any recommended exercises and
          nutrition protocols. I intend this Consent, Release and Indemnification Agreement to apply
          to all my present and future care.
          <br />
          <br />
          <b>
            <u>Retroactive Effect:</u>
          </b>{" "}
          If Client intends this agreement to cover services rendered before the date it is signed
          (for example, emergency treatment),
        </p>

        <Grid container spacing={0} style={{ alignItems: "center" }}>
          <p className="clientInitialName">Client should initial here.&nbsp;</p>
          <Grid item xs={8} sm={4} lg={2} mb={2} className="setInitalName">
            <FormField
              className="initialName"
              placeholder="Write initial"
              name="informed_Retroactive_initial"
              value={values?.informed_Retroactive_initial}
              onChange={handleChange}
              error={errors?.informed_Retroactive_initial && touched?.informed_Retroactive_initial}
              success={
                values?.informed_Retroactive_initial?.length > 0 &&
                !errors?.informed_Retroactive_initial
              }
            />
          </Grid>
          <p className="clientInitialName">
            {" "}
            Effective as of the date of first professional services.
          </p>
        </Grid>
      </SoftBox>
      <br />
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
          {/* </Grid>
        <Grid container spacing={5}> */}

          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label={<span style={{ fontSize: "15px" }}>Date</span>}
              type="date"
              placeholder="date"
              name="informed_consent_date"
              value={values?.informed_consent_date}
              onChange={handleChange}
            />
          </Grid>

          {/* <Grid container spacing={5}>
                          <Grid item xs={12} sm={4} className="spaceing">
                            </Grid> */}
          {values.Informed_sign_client !== undefined ? (
            <Grid item xs={12} sm={4} className="parentClass">
              <h5 style={{ fontSize: "15px" }}>Sign</h5>
              <img src={values.Informed_sign_client} />
              <h5 style={{ fontSize: "15px" }}>Sign here</h5>
            </Grid>
          ) : (
            <Grid item xs={6} sm={4}>
              <h5 style={{ fontSize: "15px" }}>Sign</h5>
              <SignaturePad
                canvasProps={{ width: 240, height: 150 }}
                ref={sigPad}
                penColor="black"
                backgroundColor="#f1f1f1"
                placeholder="sign"
                onBegin={(e) => onBeginfun(e.isTrusted)}
              />
              <div className="saveAndClear">
                <SoftButton onClick={clear} disabled={signBeginClient}>
                  Clear
                </SoftButton>

                <SoftButton
                  disabled={signBeginClient}
                  onClick={() => {
                    setFieldValue(
                      "Informed_sign_client",
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
                  defaultChecked={values.disclaimers_flag}
                  name="disclaimers_flag"
                  // onChange={handleChange}
                  onChange={(e) => setFieldValue("disclaimers_flag",e.target.checked)}
                />
              }
              label={"I Agree"}
            />
          </Grid>
        </Grid>
      </SoftBox>
      {/* <SoftBox component="form" px={5} className="step1">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Name"
              placeholder="Enter Name.."
              name="TermsAndSignature_name"
              value={values?.TermsAndSignature_name}
              onChange={handleChange}
              errorMsg
              error={errors?.TermsAndSignature_name && touched?.TermsAndSignature_name}
              success={
                values?.TermsAndSignature_name?.length > 0 && !errors?.TermsAndSignature_name
              }
            />
          </Grid>

          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Signature"
              placeholder="Signature.."
              name="informed_consent_signature"
              value={values?.informed_consent_signature}
              onChange={handleChange}
              errorMsg
              error={errors?.informed_consent_signature && touched?.informed_consent_signature}
              success={
                values?.informed_consent_signature?.length > 0 &&
                !errors?.informed_consent_signature
              }
            />
          </Grid>

          <Grid item xs={12} sm={4} className="spaceing">
            <FormField
              label="Date"
              type="date"
              placeholder="date"
              name="informed_consent_date"
              value={values?.informed_consent_date}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </SoftBox> */}
    </div>
  );
};
Case2.propTypes = {
  values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case2;
