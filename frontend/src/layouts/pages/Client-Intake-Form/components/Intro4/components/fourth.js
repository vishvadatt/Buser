import React from "react";
import { Grid, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function fourth({ formik, form, index }) {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
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
    ClientName: ClientNameV,
    ClientSignature: ClientSignatureV,
    OfficeSignature: OfficeSignatureV,
    Date1: Date1V,
    Date2: Date2V,
    Article: ArticleV,
  } = values?.page4[index];
  return (
    <div>
      <Container>
        <b className="AGREEMENT">ARBITRATION AGREEMENT</b>
        <div className="ARBITRATION">
          <p>
            <span className="Article1">Article 1: Agreement to Arbitrate:</span> It is understood
            that any dispute as to medical, chiropractic and/or personal training malpractice, that
            is as to whether any such services rendered under this contract were unnecessary or
            unauthorized or were improperly, negligently or incompetently rendered, will be
            determined by submission to arbitration as provided by state and federal law, and not by
            a lawsuit or resort to court process, except as state and federal law provides for
            judicial review of arbitration proceedings. Both parties to this contract, by entering
            into it, are giving up their constitutional right to have any such dispute decided in a
            court of law before a jury, and instead are accepting the use of arbitration. Further,
            the parties will not have the right to participate as a member of any class of
            claimants, and there shall be no authority for any dispute to be decided on a class
            action basis. An arbitration can only decide a dispute between the parties and may not
            consolidate or join the claims of other persons who have similar claims.
          </p>
        </div>
        <div className="ARBITRATION">
          <p>
            <span className="Article1">Article 2: All Claims Must be Arbitrated: </span> It is also
            understood that any dispute that does not relate to medical, chiropractic or personal
            training malpractice, including disputes as to whether or not a dispute is subject to
            arbitration, as to whether this agreement is unconscionable, and any procedural
            disputes, will also be determined by submission to binding arbitration. It is the
            intention of the parties that this agreement bind all parties as to all claims,
            including claims arising out of or relating to treatment or services provided by the
            care provider, including any heirs or past, present or future spouse(s of the Client in
            relation to all claims, including loss of consortium. This agreement is also intended to
            bind any children of the Client whether born or unborn at the time of the occurrence
            giving rise to any claim. This agreement is intended to bind the Client and the care
            provider and/or other licensed care providers, preceptors, interns or subcontractors who
            now or in the future consult with the Client while employed by, working or associated
            with or serving as a back-up for the care provider, including those working at the care
            providers clinic or office or any other clinic or office or facility or premises whether
            signatories to this form or not. All claims for monetary damages exceeding the
            jurisdictional limit of the small claims court against the care provider, and/or the
            care providers associates, association, corporation, partnership, employees, agents,
            subcontractors and estate, must be arbitrated including, without limitation, claims for
            loss of consortium, wrongful death, emotional distress, injunctive relief, or punitive
            damages. This agreement is intended to create an open book account unless and until
            revoked.
          </p>
        </div>
        <div className="ARBITRATION">
          <p>
            <span className="Article1">Article 3: Procedures and Applicable Law:</span> A demand for
            arbitration must be communicated in writing to all parties. Each party shall select an
            arbitrator (party arbitrator within thirty days, and a third arbitrator (neutral
            arbitrator shall be selected by the arbitrators appointed by the parties within thirty
            days thereafter. The neutral arbitrator shall then be the sole arbitrator and shall
            decide the arbitration. Each party to the arbitration shall pay such partys pro rata
            share of the expenses and fees of the neutral arbitrator, together with other expenses
            of the arbitration incurred or approved by the neutral arbitrator, not including counsel
            fees, witness fees, or other expenses incurred by a party for such partys own benefit.
            Either party shall have the absolute right to bifurcate the issues of liability and
            damage upon written request to the neutral arbitrator. The parties consent to the
            intervention and joinder in this arbitration of any person or entity that would
            otherwise be a proper additional party in a court action, and upon such intervention and
            joinder, any existing court action against such additional person or entity shall be
            stayed pending arbitration. The parties agree that provisions of state and federal law,
            where applicable, establishing the right to introduce evidence of any amount payable as
            a benefit to the Client to the maximum extent permitted by law, limiting the right to
            recover non-economic losses, and the right to have a judgment for future damages
            conformed to periodic payments, shall apply to disputes within this Arbitration
            Agreement. The parties further agree that the Commercial Arbitration Rules of the
            American Arbitration Association shall govern any arbitration conducted pursuant to this
            Arbitration Agreement.
          </p>
        </div>
        <div className="ARBITRATION">
          <p>
            <span className="Article1"> Article 4: General Provision:</span> All claims based upon
            the same incident, transaction, or related circumstances shall be arbitrated in one
            proceeding. A claim shall be waived and forever barred if (1 on the date notice thereof
            is received, the claim, if asserted in a civil action, would be barred by the applicable
            legal statute of limitations, or (2 the claimant fails to pursue the arbitration claim
            in accordance with the procedures prescribed herein with reasonable diligence.{" "}
          </p>
        </div>
        <div className="ARBITRATION">
          <p>
            <span className="Article1">Article 5: Revocation:</span> This agreement may be revoked
            by written notice delivered to the care provider within 30 days of signature and, if not
            revoked, will govern all professional services received by the Client and all other
            disputes between the parties.
          </p>
        </div>
        <div className="ARBITRATION">
          <p>
            <span className="Article1">Article 6: Retroactive Effect: </span>If Client intends this
            agreement to cover services rendered before the date it is signed (for example,
            emergency treatment, Client should initial here.{" "}
            <input
              type="text"
              className="sign rageItalicFont"
              onChange={formik.handleChange}
              name={`page4[${index}].Article`}
              value={ArticleV}
            />{" "}
            Effective as of the date of first professional services.
          </p>
        </div>
        <div className="ARBITRATION">
          <p>
            If any provision of this Arbitration Agreement is held invalid or unenforceable, the
            remaining provisions shall remain in full force and shall not be affected by the
            invalidity of any other provision. I understand that I have the right to receive a copy
            of this Arbitration Agreement. By my signature below, I acknowledge that I have received
            a copy.{" "}
          </p>
        </div>
        <div className="notice">
          <b>
            NOTICE: BY SIGNING THIS CONTRACT BY ENTERING MY NAME DIGITALLY IN THE SPACE PROVIDED
            BELOW I AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE
            STATE OF CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE
            CALIFORNIA HEALTH AND SAFETY CODE SECTION 103526 (C), AND I AGREE TO THE ABOVE. I AGREE
            TO HAVE ANY ISSUE OF MALPRACTICE DECIDED BY NEUTRAL ARBITRATION AND I AM GIVING UP MY
            RIGHT TO A JURY OR COURT TRIAL. SEE ARTICLE 1 OF THIS CONTRACT.
          </b>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name </span>
            <input
              type="text"
              className="sign rageItalicFont"
              onChange={formik.handleChange}
              name={`page4[${index}].ClientName`}
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
                          `page4[${index}].ClientSignature`,
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
                          `page4[${index}].OfficeSignature`,
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
              name={`page4[${index}].Date1`}
              value={Date1V}
            />
            <div>
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

              <input
                type="date"
                className="sign"
                onChange={formik.handleChange}
                name={`page4[${index}].Date2`}
                value={Date2V}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default fourth;
