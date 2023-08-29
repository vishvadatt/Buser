import React, { useEffect } from "react";
import "./style.css";
import initialValues2 from "./schema/initialvalues2";
import SoftButton from "components/SoftButton";
import { Grid } from "@mui/material";
import { FieldArray, Formik } from "formik";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { findOneInformConsent } from "store/actions/actions";
import { getIntakeFormDetailsAction } from "store/actions/actions";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { MinusCircleOutlined } from "@ant-design/icons";
import Second from "../Intro2/components/second";

function index({ stepIndex, formData, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.intro2);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const clientIntakeIntro1 = useSelector((state) => state.auth.clientIntakeForm?.intro1);
  const patientIntakeFormDetail = useSelector((state) => state?.auth?.patientIntakeFormDetail);
  const informConsetData = useSelector((state) => state.auth.findOneInformConsent);

  useEffect(() => {
    dispatch(findOneInformConsent({ id: UserId, token: token }));
  }, []);
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
      intro2: values.page2,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
  };
  const informConsentFormData = {
    Name: informConsetData?.TermsAndSignature_name,
    Signature: informConsetData?.Informed_sign_client,
    Retroactive: informConsetData?.informed_Retroactive_initial,
  };

  const formIntro2Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValues2.page2[0] }]
    : [{ ...initialValues2.page2[0], ...informConsentFormData }];

  console.log(formIntro2Data, "ss");
  return (
    <>
      <Formik
        initialValues={{
          page2: [...formIntro2Data],
        }}
        enableReinitialize
        onSubmit={(values) => {
          const data = {
            patientId: patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
              ? patientIntakeFormDetail.patientId
              : UserId,
            intro2: values.page2,
          };
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
                  name="page2"
                  render={(arrayhelpers, push) => {
                    return (
                      <>
                        {formik.values.page2.map((page, index) => (
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

                            <Second formData={formData} formik={formik} index={index} />
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
                                formik.values.page2.length,
                                formik.values.page2[formik.values.page2.length - 1]
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
    //     <b className="buser">The Buser Institute</b>
    //     <p className="tel">Tel: (657) 215-5642</p>
    //     <p className="tel">admin@buserinstitute.com</p>
    //     <p className="tel">www.buserinstitute.com</p>
    //     <div>
    //       <b className="Informed">Informed Consent, Release and Indemnification Form</b>
    //     </div>
    //     <p className="risks">
    //       There are risks and possible risks associated with manual th erapy techniques, exercises
    //       and nutritional strategies used by doctors of chiropractic and personal trainers. In
    //       particular you should note:{" "}
    //     </p>
    //     <div className="d-flex understand">
    //       <span className="right">(a)</span>
    //       <span>
    //         I understand and am aware that strength, flexibility, and aerobic exercise, including
    //         the use of equipment, are potentially hazardous activities. I also understand that
    //         fitness activities involve a risk of injury, and/or aggravation of a pre-existing injury
    //         or condition, and I am voluntarily participating in these activities and using equipment
    //         and machinery with knowledge of the dangers involved.
    //         <span className="bold">
    //           {" "}
    //           I hereby agree to expressly assume and accept any and all risks of injury.
    //         </span>
    //       </span>
    //     </div>
    //     <div className="d-flex understand">
    //       <span className="right">(b)</span>
    //       <span>
    //         I understand that the{" "}
    //         <span className="bold">
    //           dietary strategies and nutritional supplements recommended in this program are
    //           intended only for nutritional use and health maintenance and should not replace or
    //           delay the use of any conventional medical (MD or DO) treatment.
    //         </span>
    //       </span>
    //     </div>
    //     <div className="d-flex understand">
    //       <span className="right">(c)</span>
    //       <span>
    //         I understand that the dietary strategies and nutritional supplements recommended in this
    //         program have not been evaluated by the Food and Drug Administration. And I understand
    //         that the products recommended and used{" "}
    //         <span className="bold">
    //           in these programs are not intended to diagnose, treat, cure, or prevent any disease. I
    //           hereby agree to expressly assume and accept any and all responsibility for procuring
    //           conventional licensed medical (MD or DO) screening for, supervision of, and treatment
    //           for any medically diagnosable conditions, illnesses and diseases.
    //         </span>
    //       </span>
    //     </div>
    //     <div className="d-flex understand">
    //       <span className="right">(d)</span>
    //       <span>
    //         I do hereby further declare myself to be physically sound and suffering from no
    //         condition, impairment, disease, infirmity, or other illness that would prevent my
    //         participation in exercise, stretching activities or use of associated equipment and
    //         machinery, dietary strategies or nutritional supplementation.
    //         <span className="bold">
    //           I do hereby acknowledge that I have been informed of the need for a physician’s (MD or
    //           DO) screening for (including but not limited to screening for cardiovascular risk) and
    //           approval for my participation in exercise/fitness activities, in the use of exercise
    //           equipment and machinery, and participation in a dietary protocol and the use of
    //           nutritional supplements.{" "}
    //         </span>{" "}
    //         I also acknowledge that it has been recommended that I have a yearly or more frequent
    //         physical examination and consultation with my physician regarding my physical activity,
    //         exercise, use of exercise and training equipment, and participation in a dietary
    //         protocol and use of nutritional supplementation, so I might have his/her recommendations
    //         concerning these fitness activities, equipment use and dietary and nutritional
    //         recommendations.
    //         <span className="bold">
    //           {" "}
    //           I do hereby agree to immediately relay these initial and any updated physician
    //           screening results and recommendations to all care givers in this program. I
    //           acknowledge that I have either had a physical examination and have been given my
    //           physician’s permission to fully participate without limitation, or that I have decided
    //           to participate in activity, the use of equipment and machinery, and the participation
    //           in dietary protocols and nutritional supplementation without the approval of my
    //           physician anddo hereby assume all responsibility for my participation and activities,
    //           utilization of equipment and machinery in my activities, and participation in said
    //           dietary protocols and nutritional supplementation strategies. If my physician has
    //           recommended any limitations to my participation in any aspect of this exercise,
    //           dietary and nutrition program, I hereby agree to immediately relay these physician
    //           recommended limitations and any updates to my caregiver in this program.
    //         </span>
    //       </span>
    //     </div>
    //     <div className="d-flex understand">
    //       <span className="right">(e)</span>
    //       <span>
    //         <span className="bold">
    //           I agree to accept responsibility for obtaining the following vital cardiovascular
    //           screening measurements from a licensed practitioner within 7 days of submitting this
    //           form and annotate them below (on page 2)
    //         </span>{" "}
    //         to furnish my care giver with this most recent screening information: Blood Pressure
    //         (BP), Resting Heart Rate (RHR), Oxygen Saturation (SpO2), Respiratory Rate (RR) and Body
    //         Temperature.
    //       </span>
    //     </div>
    //     <div className="d-flex understand">
    //       <span className="right">(f)</span>
    //       <span>
    //         In consideration of being allowed to participate in the Buser Institute Training
    //         Program, I do hereby waive, release, and forever discharge the Buser Institute, their
    //         agents, representatives, successors, subcontractors and assignees, from all liabilities,
    //         actions, claims, demand, damages, costs, and expenses, which I may now or in the future
    //         have against them or any of them arising out of or in any way connected with my
    //         participation in the program, including but not limited to all injuries that may be
    //         suffered by me, including any injury arising from the negligence or other action or
    //         inaction of the released parties. The undersigned indemnifies, defends and holds
    //         harmless the Buser Institute, its officers, directors, agents, employees and
    //         subcontractors against all losses, liabilities, claims, damages, and expenses of every
    //         kind and nature, including without limitation, reasonable attorneys’ fees and expenses,
    //         which grow out of or are in any way connected with the conduct or organization of this
    //         program or its treatment(s).
    //       </span>
    //     </div>
    //     <p className="acknowledge">
    //       I acknowledge I have read this consent and I have discussed, or have been offered the
    //       opportunity to discuss, with my Buser Institute practitioner the nature and purpose of the
    //       treatment options, their therapeutic recommendations (including exercises and nutrition)
    //       for my condition, and the contents of this Consent, Release and Indemnification Agreement.
    //       I consent to the activities, therapeutic protocols and treatment recommended to me by my
    //       personal trainers and care providers including any recommended exercises and nutrition
    //       protocols. I intend this Consent, Release and Indemnification Agreement to apply to all my
    //       present and future care.
    //     </p>
    //     <div className="d-flex understand">
    //       <span>
    //         <span className="bold1">Retroactive Effect:</span> If Client intends this agreement to
    //         cover services rendered before the date it is signed (for example, emergency treatment),
    //         Client should initial here. __________. Effective as of the
    //       </span>
    //     </div>
    //     <Grid container spacing={2}>
    //       <Grid item xs={6} md={5}>
    //         <input
    //           type="text"
    //           className="sign"
    //           // onChange={formik.handleChange}
    //           name="sign"
    //           // value={signV}
    //         />
    //       </Grid>
    //       <Grid item xs={6} md={5}>
    //         <input
    //           type="text"
    //           className="sign"
    //           // onChange={formik.handleChange}
    //           name="sign"
    //           // value={signV}
    //         />
    //       </Grid>
    //       <Grid item xs={6} md={2}>
    //         <input
    //           type="text"
    //           className="sign"
    //           // onChange={formik.handleChange}
    //           name="sign"
    //           // value={signV}
    //         />
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </div>
  );
}

export default index;
