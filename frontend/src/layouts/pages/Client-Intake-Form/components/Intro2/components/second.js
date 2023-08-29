import React from "react";
import { Grid, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function second({ formik, form, index }) {
  // const dispatch = useDispatch();
  // const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  // const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  // const UserId = useSelector((state) => state.auth.auth._id);
  // let date = new Date().toLocaleDateString("en-CA");
  //   const { formField, setFieldValue } = form;

  const [signBeginClient, setSignBeginClient] = React.useState(true);

  let sigPad = React.useRef({});

  const onBeginfun = (e) => {
    setSignBeginClient(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginClient(true);
  }
  const { values } = formik;

  const {
    Name: Namev,
    Signature: SignatureV,
    Date: DateV,
    Retroactive: RetroactiveV,
  } = values?.page2[index];
  return (
    <div>
      <Container>
        <b className="buser">The Buser Institute</b>
        <p className="tel">Tel: (657) 215-5642</p>
        <p className="tel">admin@buserinstitute.com</p>
        <p className="tel">www.buserinstitute.com</p>
        <div>
          <h2 className="Informed">INFORMED CONSENT, RELEASE AND INDEMNIFICATION FORM</h2>
        </div>
        <p className="risks">
          There are risks and possible risks associated with manual therapy techniques, exercises
          and nutritional strategies used by doctors of chiropractic and personal trainers. In
          particular you should note:{" "}
        </p>
        <div className="d-flex understand">
          <span className="right">(a)</span>
          <span>
            I understand and am aware that strength, flexibility, and aerobic exercise, including
            the use of equipment, are potentially hazardous activities. I also understand that
            fitness activities involve a risk of injury, and/or aggravation of a pre-existing injury
            or condition, and I am voluntarily participating in these activities and using equipment
            and machinery with knowledge of the dangers involved.
            <span className="bold">
              {" "}
              I hereby agree to expressly assume and accept any and all risks of injury.
            </span>
          </span>
        </div>
        <div className="d-flex understand">
          <span className="right">(b)</span>
          <span>
            I understand that the{" "}
            <span className="bold">
              dietary strategies and nutritional supplements recommended in this program are
              intended only for nutritional use and health maintenance and should not replace or
              delay the use of any conventional medical (MD or DO) treatment.
            </span>
          </span>
        </div>
        <div className="d-flex understand">
          <span className="right">(c)</span>
          <span>
            I understand that the dietary strategies and nutritional supplements recommended in this
            program have not been evaluated by the Food and Drug Administration. And I understand
            that the products recommended and used{" "}
            <span className="bold">
              in these programs are not intended to diagnose, treat, cure, or prevent any disease. I
              hereby agree to expressly assume and accept any and all responsibility for procuring
              conventional licensed medical (MD or DO) screening for, supervision of, and treatment
              for any medically diagnosable conditions, illnesses and diseases.
            </span>
          </span>
        </div>
        <div className="d-flex understand">
          <span className="right">(d)</span>
          <span>
            I do hereby further declare myself to be physically sound and suffering from no
            condition, impairment, disease, infirmity, or other illness that would prevent my
            participation in exercise, stretching activities or use of associated equipment and
            machinery, dietary strategies or nutritional supplementation.
            <span className="bold">
              I do hereby acknowledge that I have been informed of the need for a physician’s (MD or
              DO) screening for (including but not limited to screening for cardiovascular risk) and
              approval for my participation in exercise/fitness activities, in the use of exercise
              equipment and machinery, and participation in a dietary protocol and the use of
              nutritional supplements.{" "}
            </span>{" "}
            I also acknowledge that it has been recommended that I have a yearly or more frequent
            physical examination and consultation with my physician regarding my physical activity,
            exercise, use of exercise and training equipment, and participation in a dietary
            protocol and use of nutritional supplementation, so I might have his/her recommendations
            concerning these fitness activities, equipment use and dietary and nutritional
            recommendations.
            <span className="bold">
              {" "}
              I do hereby agree to immediately relay these initial and any updated physician
              screening results and recommendations to all care givers in this program. I
              acknowledge that I have either had a physical examination and have been given my
              physician’s permission to fully participate without limitation, or that I have decided
              to participate in activity, the use of equipment and machinery, and the participation
              in dietary protocols and nutritional supplementation without the approval of my
              physician and do hereby assume all responsibility for my participation and activities,
              utilization of equipment and machinery in my activities, and participation in said
              dietary protocols and nutritional supplementation strategies. If my physician has
              recommended any limitations to my participation in any aspect of this exercise,
              dietary and nutrition program, I hereby agree to immediately relay these physician
              recommended limitations and any updates to my caregiver in this program.
            </span>
          </span>
        </div>
        <div className="d-flex understand">
          <span className="right">(e)</span>
          <span>
            <span className="bold">
              I agree to accept responsibility for obtaining the following vital cardiovascular
              screening measurements from a licensed practitioner within 7 days of submitting this
              form and annotate them below (on page 2)
            </span>{" "}
            to furnish my care giver with this most recent screening information: Blood Pressure
            (BP), Resting Heart Rate (RHR), Oxygen Saturation (SpO2), Respiratory Rate (RR) and Body
            Temperature.
          </span>
        </div>
        <div className="d-flex understand">
          <span className="right">(f)</span>
          <span>
            In consideration of being allowed to participate in the Buser Institute Training
            Program, I do hereby waive, release, and forever discharge the Buser Institute, their
            agents, representatives, successors, subcontractors and assignees, from all liabilities,
            actions, claims, demand, damages, costs, and expenses, which I may now or in the future
            have against them or any of them arising out of or in any way connected with my
            participation in the program, including but not limited to all injuries that may be
            suffered by me, including any injury arising from the negligence or other action or
            inaction of the released parties. The undersigned indemnifies, defends and holds
            harmless the Buser Institute, its officers, directors, agents, employees and
            subcontractors against all losses, liabilities, claims, damages, and expenses of every
            kind and nature, including without limitation, reasonable attorneys’ fees and expenses,
            which grow out of or are in any way connected with the conduct or organization of this
            program or its treatment(s).
          </span>
        </div>
        <p className="acknowledge">
          I acknowledge I have read this consent and I have discussed, or have been offered the
          opportunity to discuss, with my Buser Institute practitioner the nature and purpose of the
          treatment options, their therapeutic recommendations (including exercises and nutrition)
          for my condition, and the contents of this Consent, Release and Indemnification Agreement.
          I consent to the activities, therapeutic protocols and treatment recommended to me by my
          personal trainers and care providers including any recommended exercises and nutrition
          protocols. I intend this Consent, Release and Indemnification Agreement to apply to all my
          present and future care.
        </p>
        <div className="d-flex understand">
          <span>
            <span className="bold1">Retroactive Effect:</span> If Client intends this agreement to
            cover services rendered before the date it is signed (for example, emergency treatment),
            Client should initial here.
            <input
              type="text"
              className="sign rageItalicFont"
              onChange={formik.handleChange}
              name={`page2[${index}].Retroactive`}
              value={formik.values?.page2[index]?.Retroactive}
            />
            Effective as of the date of first professional services.
          </span>
        </div>
        <Grid container spacing={2} marginTop={1}>
          <Grid item xs={12} md={5}>
            <p className="name">Name</p>
            <input
              type="text"
              className="sign rageItalicFont"
              onChange={formik.handleChange}
              name={`page2[${index}].Name`}
              value={Namev}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <p className="name">Signature</p>
            {/* <input
              type="text"
              className="sign"
              onChange={formik.handleChange}
              name="Signature"
              value={SignatureV}
            /> */}
            {SignatureV ? (
              <Grid item xs={12} lg={6} sm={6} className="parentClass">
                <img src={SignatureV} />
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
                <div className="saveAndClear1">
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
                        `page2[${index}].Signature`,
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
          <Grid item xs={12} md={2}>
            <p className="name">Date</p>
            <input
              type="date"
              className="sign"
              onChange={formik.handleChange}
              name={`page2[${index}].Date`}
              value={DateV}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default second;
