import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import initialValues from "./schema/initialvalues1";
import "./style.css";
import { FieldArray, Formik } from "formik";
import SoftButton from "components/SoftButton";

import First from "../Intro1/component/first";
import { useDispatch, useSelector } from "react-redux";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import { findOneInformConsent } from "store/actions/actions";
import { getIntakeFormDetailsAction } from "store/actions/actions";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ stepIndex, formData, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const intro3Details = useSelector((state) => state.auth.clientIntakeForm?.intro3);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const loginUser = useSelector((state) => state.auth.auth?.userdata);
  const clientIntakeformDetails = useSelector((state) => state?.auth?.clientIntakeForm?.intro1);
  const patientIntakeFormDetail = useSelector((state) => state?.auth?.patientIntakeFormDetail);
  const informConsent = useSelector((state) => state?.auth?.findOneInformConsent);

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
      intro1: values.page1,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
  };

  const formIntro1Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValues.page1[0] }]
    : [{ ...initialValues.page1[0], ClientName: loginUser?.name }];

  console.log("formIntro1Data", formIntro1Data);
  return (
    <>
      <Formik
        initialValues={{
          page1: [...formIntro1Data],
        }}
        enableReinitialize
        onSubmit={(values) => {
          const data = {
            patientId: patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
              ? patientIntakeFormDetail.patientId
              : UserId,
            intro1: values.page1,
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
                  name="page1"
                  render={(arrayhelpers, push) => {
                    return (
                      <>
                        {formik.values.page1.map((page, index) => (
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

                            <First formData={formData} formik={formik} index={index} />
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
                                formik.values.page1.length,
                                formik.values.page1[formik.values.page1.length - 1]
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
  );
}

export default index;

// <div>
//   <Grid>
//     <Container fluid>
//       <b>Your commitment: </b>
//       <p className="understand">
//         I understand the above process and expectations of my active involvement in this
//         clinical program and its associated research studies, publications and education
//         programs. I acknowledge I have read this agreement and fully understand its
//         meanings and implications. To concur, client should initial here
//       </p>

//       <input
//         type="text"
//         className="sign"
//         onChange={formik.handleChange}
//         name="understand"
//         value={understandV}
//       />
//       {/* <input
//         type="text"
//         className="otherlang"
//         onChange={formik.handleChange}
//         name="prefreedLanguageOther"
//         label="prefreedLanguageOther"
//         value={prefreedLanguageOtherV}
//       /> */}
//       <p className="understand">
//         I consent to the use of my non-confidential, clinically relevant information
//         (including written clinical records, photographs and videos; and excluding
//         confidential information such as mailing and email addresses, contact and
//         billing information) for the purposes of research and education to support the
//         development of this functional physiotherapy community. I understand that the
//         Buser Institute will safeguard my confidential information to include phone
//         numbers, email and mailing addresses and billing information (credit card
//         numbers, Wise and Venmo accounts, etc), and withhold this information from
//         research studies, publications and education programs. To concur, client should
//         initial here{" "}
//       </p>

//       <input
//         type="text"
//         className="sign"
//         //   onChange={formik.handleChange}
//         name="sign"
//         //   value={signV}
//       />
//       <div>
//         <b>Retroactive Effect:</b>
//         <span className="intends">
//           If Client intends this agreement to cover services rendered before the date it
//           is signed (for example, emergency treatment), Client should initial here
//           __________. Effective as of the date of first professional services
//         </span>
//       </div>
//       <b className="SIGNING">
//         BY SIGNING THIS CONTRACT BY ENTERING MY NAME DIGITALLY IN THE SPACE PROVIDED
//         BELOW I AFFIRM UNDER PENALTY OF PERJURY UNDER THE LAWS OF THE UNITES STATES AND
//         THE STATE OF CALIFORNIA THAT I AM THE NAMED AND AUTHORIZED PERSON, AS DEFINED BY
//         THE CALIFORNIA HEALTH AND SAFETY CODE SECTION 103526 (C), AND AGREE TO THE ABOVE
//         AGREMENT AND ITS TERMS AND CONDITIONS. I AM AGREEING TO ALL TERMS AND CONDITIONS
//         AND INFORMATION LISTED ABOVE.{" "}
//       </b>
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
//             <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>
//               Client Signature
//             </span>

//             <input
//               type="text"
//               className="sign"
//               //   onChange={formik.handleChange}
//               name="sign"
//               //   value={signV}
//             />
//           </div>
//           <div>
//             <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>
//               Office Signature
//             </span>

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
//     </Container>
//   </Grid>
// </div>
