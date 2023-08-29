import { Grid } from "@mui/material";
import initialValues4 from "./schema/initialvalues4";
import { FieldArray, Formik } from "formik";
import SoftButton from "components/SoftButton";
import React, { useEffect } from "react";
import Fourth from "../Intro4/components/fourth";
import "./style.css";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet, findOneInformConsent } from "store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { getIntakeFormDetailsAction } from "store/actions/actions";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ stepIndex, formData, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.intro4);
  const Intro1Details = useSelector((state) => state.auth.clientIntakeForm?.intro1);
  const informConsetData = useSelector((state) => state.auth.findOneInformConsent);

  const patientIntakeFormDetail = useSelector((state) => state?.auth?.patientIntakeFormDetail);

  useEffect(() => {
    if (patientIntakeFormDetail.shouldShowPatientIntakeFormDetail) {
      dispatch(
        getIntakeFormDetailsAction({
          patientId: patientIntakeFormDetail.patientId,
          token: token,
        })
      );
    } else {
      dispatch(
        clientIntakeFormGet({
          patientId: UserId,
          token: token,
        })
      );
    }
  }, [stepIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(findOneInformConsent({ id: UserId, token: token }));
  }, []);

  const handleSave = async (values) => {
    const data = {
      patientId: patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
        ? patientIntakeFormDetail.patientId
        : UserId,
      intro4: values.page4,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
  };

  const informConsetFormData = {
    ClientName: informConsetData?.TermsAndSignature_name,
    ClientSignature: informConsetData?.ARBITRATION_sign_client,
    OfficeSignature: informConsetData?.ARBITRATION_sign_ofc,
    // Date1: informConsetData?.arbitraion_client__date,
    // Date2: informConsetData?.arbitraion_ofc_date,
    Article: informConsetData?.arbitraion_Retroactive_initial,
  };
  const newClientName = { ClientName: Intro1Details?.ClientName };

  console.log(newClientName, "ll");

  const formIntro4Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValues4.page4[0] }]
    : [{ ...initialValues4.page4[0], ...informConsetFormData }];

  return (
    <>
      <Formik
        initialValues={{
          page4: [...formIntro4Data],
        }}
        enableReinitialize
        onSubmit={(values) => {
          const data = {
            patientId: patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
              ? patientIntakeFormDetail.patientId
              : UserId,
            intro4: values.page4,
          };
          console.log("page4", data);
          dispatch(
            clientIntakeFormCreate({
              data: data,
              token: token,
            })
          );
          setActiveStep(stepIndex + 1);
        }}
      >
        {(formik) => {
          return (
            <>
              <Grid>
                <FieldArray
                  name="page4"
                  render={(arrayhelpers, push) => {
                    return (
                      <>
                        {formik.values.page4.map((page, index) => (
                          <Grid key={index}>
                            {index > 0 && (
                              <Grid item xs={12} sm={12} lg={12} mb={1}>
                                <SoftBox display="flex" flexDirection="row" justifyContent="center">
                                  <SoftTypography mt={3}>
                                    <p style={{ fontWeight: "bold", textAlign: "center" }}>
                                      Click the Minus-Sign to remove Form
                                    </p>
                                  </SoftTypography>
                                </SoftBox>
                                <SoftBox
                                  display="flex"
                                  flexDirection="row"
                                  justifyContent="center"
                                  height="100%"
                                >
                                  <MinusCircleOutlined
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "25px",
                                      color: "#344767",
                                    }}
                                    onClick={() => arrayhelpers.remove(index)}
                                  />
                                </SoftBox>
                              </Grid>
                            )}

                            <Fourth formData={formData} formik={formik} index={index} />
                          </Grid>
                        ))}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            margin: "1.5rem 0",
                          }}
                        >
                          <SoftButton
                            variant="gradient"
                            color="dark"
                            onClick={() =>
                              arrayhelpers.insert(
                                formik?.values?.page4?.length,
                                formik.values.page4[formik.values.page4.length - 1]
                              )
                            }
                          >
                            Add new Page
                          </SoftButton>
                        </div>
                      </>
                    );
                  }}
                />
              </Grid>
              <div style={{ float: "right", marginTop: "20px" }}>
                <SoftButton
                  sx={{ marginRight: "20px" }}
                  variant="gradient"
                  color="dark"
                  onClick={() => {
                    if (formik.dirty) {
                      handleSave(formik.values);
                    }
                  }}
                >
                  Save
                </SoftButton>
                <SoftButton
                  type="submit"
                  variant="gradient"
                  color="dark"
                  onClick={() => {
                    if (formik.dirty) {
                      formik.handleSubmit();
                    } else {
                      setActiveStep(stepIndex + 1);
                    }
                  }}
                >
                  Next
                </SoftButton>
              </div>
            </>
          );
        }}
      </Formik>
    </>
    // <div>
    //   <Container>
    //     <b className="AGREEMENT">ARBITRATION AGREEMENT</b>
    //     <p className="ARBITRATION">
    //       <span className="Article1">Article 1: Agreement to Arbitrate:</span> It is understood that
    //       any dispute as to medical, chiropractic and/or personal training malpractice, that is as
    //       to whether any such services rendered under this contract were unnecessary or unauthorized
    //       or were improperly, negligently or incompetently rendered, will be determined by
    //       submission to arbitration as provided by state and federal law, and not by a lawsuit or
    //       resort to court process, except as state and federal law provides for judicial review of
    //       arbitration proceedings. Both parties to this contract, by entering into it, are giving up
    //       their constitutional right to have any such dispute decided in a court of law before a
    //       jury, and instead are accepting the use of arbitration. Further, the parties will not have
    //       the right to participate as a member of any class of claimants, and there shall be no
    //       authority for any dispute to be decided on a class action basis. An arbitration can only
    //       decide a dispute between the parties and may not consolidate or join the claims of other
    //       persons who have similar claims.
    //     </p>
    //     <p className="ARBITRATION">
    //       <span className="Article1">Article 2: All Claims Must be Arbitrated: </span> It is also
    //       understood that any dispute that does not relate to medical, chiropractic or personal
    //       training malpractice, including disputes as to whether or not a dispute is subject to
    //       arbitration, as to whether this agreement is unconscionable, and any procedural disputes,
    //       will also be determined by submission to binding arbitration. It is the intention of the
    //       parties that this agreement bind all parties as to all claims, including claims arising
    //       out of or relating to treatment or services provided by the care provider, including any
    //       heirs or past, present or future spouse(s of the Client in relation to all claims,
    //       including loss of consortium. This agreement is also intended to bind any children of the
    //       Client whether born or unborn at the time of the occurrence giving rise to any claim. This
    //       agreement is intended to bind the Client and the care provider and/or other licensed care
    //       providers, preceptors, interns or subcontractors who now or in the future consult with the
    //       Client while employed by, working or associated with or serving as a back-up for the care
    //       provider, including those working at the care providers clinic or office or any other
    //       clinic or office or facility or premises whether signatories to this form or not. All
    //       claims for monetary damages exceeding the jurisdictional limit of the small claims court
    //       against the care provider, and/or the care providers associates, association, corporation,
    //       partnership, employees, agents, subcontractors and estate, must be arbitrated including,
    //       without limitation, claims for loss of consortium, wrongful death, emotional distress,
    //       injunctive relief, or punitive damages. This agreement is intended to create an open book
    //       account unless and until revoked.
    //     </p>
    //     <p className="ARBITRATION">
    //       <span className="Article1">Article 3: Procedures and Applicable Law:</span> A demand for
    //       arbitration must be communicated in writing to all parties. Each party shall select an
    //       arbitrator (party arbitrator within thirty days, and a third arbitrator (neutral
    //       arbitrator shall be selected by the arbitrators appointed by the parties within thirty
    //       days thereafter. The neutral arbitrator shall then be the sole arbitrator and shall decide
    //       the arbitration. Each party to the arbitration shall pay such partys pro rata share of the
    //       expenses and fees of the neutral arbitrator, together with other expenses of the
    //       arbitration incurred or approved by the neutral arbitrator, not including counsel fees,
    //       witness fees, or other expenses incurred by a party for such partys own benefit. Either
    //       party shall have the absolute right to bifurcate the issues of liability and damage upon
    //       written request to the neutral arbitrator. The parties consent to the intervention and
    //       joinder in this arbitration of any person or entity that would otherwise be a proper
    //       additional party in a court action, and upon such intervention and joinder, any existing
    //       court action against such additional person or entity shall be stayed pending arbitration.
    //       The parties agree that provisions of state and federal law, where applicable, establishing
    //       the right to introduce evidence of any amount payable as a benefit to the Client to the
    //       maximum extent permitted by law, limiting the right to recover non-economic losses, and
    //       the right to have a judgment for future damages conformed to periodic payments, shall
    //       apply to disputes within this Arbitration Agreement. The parties further agree that the
    //       Commercial Arbitration Rules of the American Arbitration Association shall govern any
    //       arbitration conducted pursuant to this Arbitration Agreement.
    //     </p>
    //     <p className="ARBITRATION">
    //       <span className="Article1"> Article 4: General Provision:</span> All claims based upon the
    //       same incident, transaction, or related circumstances shall be arbitrated in one
    //       proceeding. A claim shall be waived and forever barred if (1 on the date notice thereof is
    //       received, the claim, if asserted in a civil action, would be barred by the applicable
    //       legal statute of limitations, or (2 the claimant fails to pursue the arbitration claim in
    //       accordance with the procedures prescribed herein with reasonable diligence.{" "}
    //     </p>
    //     <p className="ARBITRATION">
    //       <span className="Article1">Article 5: Revocation:</span> This agreement may be revoked by
    //       written notice delivered to the care provider within 30 days of signature and, if not
    //       revoked, will govern all professional services received by the Client and all other
    //       disputes between the parties.
    //     </p>
    //     <p className="ARBITRATION">
    //       <span className="Article1">Article 6: Retroactive Effect: </span>If Client intends this
    //       agreement to cover services rendered before the date it is signed (for example, emergency
    //       treatment, Client should initial here. __________. Effective as of the date of first
    //       professional services.
    //     </p>
    //     <p className="ARBITRATION">
    //       If any provision of this Arbitration Agreement is held invalid or unenforceable, the
    //       remaining provisions shall remain in full force and shall not be affected by the
    //       invalidity of any other provision. I understand that I have the right to receive a copy of
    //       this Arbitration Agreement. By my signature below, I acknowledge that I have received a
    //       copy.{" "}
    //     </p>
    //     <b className="notice">
    //       NOTICE: BY SIGNING THIS CONTRACT BY ENTERING MY NAME DIGITALLY IN THE SPACE PROVIDED BELOW
    //       I AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE STATE OF
    //       CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE CALIFORNIA HEALTH
    //       AND SAFETY CODE SECTION 103526 (C), AND I AGREE TO THE ABOVE. I AGREE TO HAVE ANY ISSUE OF
    //       MALPRACTICE DECIDED BY NEUTRAL ARBITRATION AND I AM GIVING UP MY RIGHT TO A JURY OR COURT
    //       TRIAL. SEE ARTICLE 1 OF THIS CONTRACT.
    //     </b>
    //     <Grid container spacing={2}>
    //       <Grid item xs={6} md={8}>
    //         <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name </span>
    //         <input
    //           type="text"
    //           className="sign"
    //           //   onChange={formik.handleChange}
    //           name="sign"
    //           //   value={signV}
    //         />
    //         <div>
    //           <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Signature</span>

    //           <input
    //             type="text"
    //             className="sign"
    //             //   onChange={formik.handleChange}
    //             name="sign"
    //             //   value={signV}
    //           />
    //         </div>
    //         <div>
    //           <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Office Signature</span>

    //           <input
    //             type="text"
    //             className="sign"
    //             //   onChange={formik.handleChange}
    //             name="sign"
    //             //   value={signV}
    //           />
    //         </div>
    //       </Grid>
    //       <Grid item xs={6} md={4}>
    //         <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

    //         <input
    //           type="text"
    //           className="sign"
    //           //   onChange={formik.handleChange}
    //           name="sign"
    //           //   value={signV}
    //         />
    //         <div>
    //           <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

    //           <input
    //             type="text"
    //             className="sign"
    //             //   onChange={formik.handleChange}
    //             name="sign"
    //             //   value={signV}
    //           />
    //         </div>
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </div>
  );
}

export default index;
