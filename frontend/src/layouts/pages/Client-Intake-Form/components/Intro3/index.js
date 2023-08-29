import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import "./style.css";
import SoftButton from "components/SoftButton";
import Third from "../Intro3/components/third";
import initialValues3 from "./schema/initialvalues3";
import { FieldArray, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import { findOneInformConsent } from "store/actions/actions";
import { getIntakeFormDetailsAction } from "store/actions/actions";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ stepIndex, formData, setActiveStep }) {
  const token = useSelector((state) => state.auth.auth.idToken);
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.intro3);
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
  const newClientName = { ClientName: Intro1Details?.ClientName };

  console.log(newClientName, Intro1Details, "ll");
  useEffect(() => {
    dispatch(findOneInformConsent({ id: UserId, token: token }));
  }, []);

  const handleSave = async (values) => {
    const data = {
      patientId: patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
        ? patientIntakeFormDetail.patientId
        : UserId,
      intro3: values.page3,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
  };

  const informConsentFormData = {
    practitioner: informConsetData?.date_measurements,
    measurements: informConsetData?.name_practitioner,
    Blood: informConsetData?.blood_pressure_upper,
    BP: informConsetData?.blood_pressure_lower,
    RHR: informConsetData?.Resting_heart_rate,
    SpO2: informConsetData?.Oxygen_saturation,
    RR: informConsetData?.Respiratory_rate,
    Temperature: informConsetData?.Body_temp,
    ClientName: informConsetData?.TermsAndSignature_name,
    ClientSignature: informConsetData?.term_page_sign_client,
    OfficeSignature: informConsetData?.term_page_sign_ofc,
    // Date1: informConsetData?.TermsAndSignature_client__date,
    // Date2: informConsetData?.TermsAndSignature_ofc_date,
    RetroactiveName: informConsetData?.terms_Retroactive_initial,
  };

  const formIntro3Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValues3.page3[0] }]
    : [{ ...initialValues3.page3[0], ...informConsentFormData }];

  console.log(formIntro3Data, "ff");
  return (
    <>
      <Formik
        initialValues={{
          page3: [...formIntro3Data],
        }}
        enableReinitialize
        onSubmit={(values) => {
          const data = {
            patientId: patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
              ? patientIntakeFormDetail.patientId
              : UserId,
            intro3: values.page3,
          };
          console.log("page3", data);
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
                  name="page3"
                  render={(arrayhelpers, push) => {
                    return (
                      <>
                        {formik.values.page3.map((page, index) => (
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

                            <Third formData={formData} formik={formik} index={index} />
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
                                formik?.values?.page3?.length,
                                formik.values.page3[formik.values.page3.length - 1]
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
    //     <b className="terms">TERMS AND CONDITIONS</b>
    //     <p className="digitally">
    //       Please agree to the following and digitally sign your name below to agree to these terms
    //     </p>
    //     <b className="Cancellation"> Change and Cancellation Policy</b>
    //     <b className="business">
    //       48 Hours, two business days, change and/or cancellation notice is required to avoid a 100%
    //       fee for scheduled services.{" "}
    //     </b>
    //     <p className="Insurance">Insurance</p>
    //     <b className="office">
    //       This office does not accept insurance and will not process your insurance forms. It is the
    //       Clients responsibility to furnish the full agreed upon payment to our company before our
    //       services will be rendered. It is your responsibility as the Client to work with your
    //       insurance carrier in filing your claim and receiving reimbursement if your insurance
    //       company has such a plan of coverage for personal training. In some instances the insurance
    //       companies will deny or reduce payment despite your best efforts to demonstrate the
    //       necessity for personalized training. In the event that full or partial payment is not made
    //       to you from your insurance carrier, it is again your responsibility to negotiate this with
    //       your insurance carrier.{" "}
    //     </b>
    //     <p className="read">
    //       I have read and agree to this associated Informed Consent, Release and Indemnification
    //       Agreement.
    //     </p>
    //     <p className="read">I have been provided with the privacy policy.</p>
    //     <p className="read">
    //       I have read and agree to the copyright policy for the Buser Institute and I agree not to
    //       share their exercise pictures, instructions, videos or any other information provided
    //       through their consultation without the express written permission of a legally appointed
    //       representative of the Buser Institute.{" "}
    //     </p>
    //     <div className="Effect">
    //       <p>
    //         <span>Retroactive Effect: </span>If Client intends this agreement to cover services
    //         rendered before the date it is signed (for example, emergency treatment), Client should
    //         initial here. __________. Effective as of the date of first professional services.
    //       </p>
    //     </div>
    //     <div className="Date">
    //       <b>Date measurements taken by below isted licensed practitioner:</b>
    //       <input
    //         type="text"
    //         className="sign"
    //         // onChange={formik.handleChange}
    //         name="sign"
    //         // value={signV}
    //       />
    //     </div>
    //     <p className="Name">
    //       Name and license type (MD/DO/DC/ND/RN/DPT/PT, etc) of practitioner who took the
    //       measurements:{" "}
    //     </p>
    //     <input
    //       type="text"
    //       className="sign"
    //       // onChange={formik.handleChange}
    //       name="sign"
    //       // value={signV}
    //     />
    //     <div className="blood">
    //       <b>Blood Pressure (BP):</b>
    //       <input
    //         type="text"
    //         className="sign"
    //         // onChange={formik.handleChange}
    //         name="sign"
    //         // value={signV}
    //       />
    //       /
    //       <input
    //         type="text"
    //         className="sign"
    //         // onChange={formik.handleChange}
    //         name="sign"
    //         // value={signV}
    //       />
    //     </div>
    //     <div className="blood">
    //       <b>Resting Heart Rate (RHR):</b>
    //       <input
    //         type="text"
    //         className="sign"
    //         // onChange={formik.handleChange}
    //         name="sign"
    //         // value={signV}
    //       />
    //       <span className="per">beats per minute</span>
    //     </div>
    //     <div className="blood">
    //       <b>Oxygen Saturation (SpO2):</b>
    //       <input
    //         type="text"
    //         className="sign"
    //         // onChange={formik.handleChange}
    //         name="sign"
    //         // value={signV}
    //       />
    //       <span className="per">%</span>
    //     </div>
    //     <div className="blood">
    //       <b>Respiratory Rate (RR):</b>
    //       <input
    //         type="text"
    //         className="sign"
    //         // onChange={formik.handleChange}
    //         name="sign"
    //         // value={signV}
    //       />
    //       <span className="per"> breaths per minute</span>
    //     </div>
    //     <div className="blood">
    //       <b>Body Temperature:</b>
    //       <input
    //         type="text"
    //         className="sign"
    //         // onChange={formik.handleChange}
    //         name="sign"
    //         // value={signV}
    //       />
    //       <span className="per">degrees Fahrenheit</span>
    //     </div>
    //     <b className="NOTICE">
    //       NOTICE: BY SIGNING THIS CONTRACT BY ENTERING MY NAME DIGITALLY IN THE SPACE PROVIDED BELOW
    //       I AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND THE STATE OF
    //       CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY THE CALIFORNIA HEALTH
    //       AND SAFETY CODE SECTION 103526 (C), AND AGREE TO THE ABOVE INFORMED CONSENT, RELEASE AND
    //       INDEMNIFICATION AGREMENT AND ITS TERMS AND CONDITIONS. I AM AGREEING TO ALL TERMS AND
    //       CONDITIONS AND INFORMATION LISTED ABOVE ON PAGE 1 AND 2.
    //     </b>
    //     <div>
    //       <Grid container spacing={2}>
    //         <Grid item xs={6} md={8}>
    //           <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name </span>
    //           <input
    //             type="text"
    //             className="sign"
    //             //   onChange={formik.handleChange}
    //             name="sign"
    //             //   value={signV}
    //           />
    //           <div>
    //             <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Signature</span>

    //             <input
    //               type="text"
    //               className="sign"
    //               //   onChange={formik.handleChange}
    //               name="sign"
    //               //   value={signV}
    //             />
    //           </div>
    //           <div>
    //             <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Office Signature</span>

    //             <input
    //               type="text"
    //               className="sign"
    //               //   onChange={formik.handleChange}
    //               name="sign"
    //               //   value={signV}
    //             />
    //           </div>
    //         </Grid>
    //         <Grid item xs={6} md={4}>
    //           <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

    //           <input
    //             type="text"
    //             className="sign"
    //             //   onChange={formik.handleChange}
    //             name="sign"
    //             //   value={signV}
    //           />
    //           <div>
    //             <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

    //             <input
    //               type="text"
    //               className="sign"
    //               //   onChange={formik.handleChange}
    //               name="sign"
    //               //   value={signV}
    //             />
    //           </div>
    //         </Grid>
    //       </Grid>
    //     </div>
    //   </Container>
    // </div>
  );
}

export default index;
