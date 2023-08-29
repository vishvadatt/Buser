import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValue from "./schema/initialValue.js";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
// import form from "./schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import { MinusCircleOutlined } from "@ant-design/icons";
import FirstPart from "./components/firstPart";
import LeftBody from "./components/leftBody.js";
import RightBody from "./components/rightBody.js";
import MiddleBody from "./components/middleBody.js";
import EndPart from "./components/endPart.js";
import Pain from "./components/pain.js";
import SoftTypography from "components/SoftTypography";
import "./style.css";

function index({ formData, stepIndex, setActiveStep }) {
  //   console.log("initialValue", initialValue);
  const token = useSelector((state) => state.auth.auth.idToken);
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page13);
  //   const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page1);
  const page8 = useSelector((state) => state.auth.clientIntakeForm?.page8);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  console.log("clientIntakeformDetails", clientIntakeformDetails);
  let patientId = selectedPatientId ? selectedPatientId : soappatientId;
  if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
    patientId = patientSoapFormDetail.patientId;
  }
  useEffect(() => {
    dispatch(
      clientIntakeFormGet({
        // patientId: soappatientId,
        // practitionerId: UserId,
        patientId: patientId,
        token: token,
      })
    );
  }, [stepIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const formIntake14 =
    clientIntakeformDetails && clientIntakeformDetails.length > 0
      ? clientIntakeformDetails
      : [{ ...initialValue.Intake14[0], name: soapFormPage1?.name }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            Intake14: formIntake14,
          }}
          enableReinitialize
          onSubmit={(values) => {
            console.log("client-intake-form3rd...", values);
            console.log("soappatientId", soappatientId);
            const data = {
              // practitionerId: UserId,
              // patientId: soappatientId,
              patientId: patientId,
              page13: values.Intake14,
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
            console.log("formik", formik);
            return (
              <>
                <FieldArray
                  name="Intake14"
                  render={(arrayhelpers, push) => {
                    return (
                      <>
                        {formik.values.Intake14.map((data, index) => {
                          return (
                            <>
                              {index > 0 && (
                                <Grid item xs={12} sm={12} lg={12} mb={1}>
                                  <SoftBox
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="center"
                                  >
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
                              <>
                                <Grid>
                                  <FirstPart
                                    formData={formData}
                                    formik={formik}
                                    index={index}
                                    //   form={form}
                                  />
                                </Grid>
                                <Grid container mt={2} className="body-dimention">
                                  <Grid lg={4.5} xs={12} md={12}>
                                    <LeftBody
                                      formData={formData}
                                      formik={formik}
                                      index={index}
                                      // form={form}
                                    />
                                  </Grid>
                                  <Grid lg={3} xs={12} mt={2} md={12}>
                                    <MiddleBody
                                      formData={formData}
                                      formik={formik}
                                      // form={form}
                                      index={index}
                                    />
                                  </Grid>
                                  <Grid lg={4.5} xs={12} md={12}>
                                    <RightBody
                                      formData={formData}
                                      formik={formik}
                                      index={index}
                                      // form={form}
                                    />
                                  </Grid>
                                </Grid>
                                <Grid mt={2} mb={2.5}>
                                  <EndPart
                                    formData={formData}
                                    formik={formik}
                                    index={index}
                                    //   form={form}
                                  />
                                </Grid>
                                {/* <Grid mt={2} mb={2.5}>
                                  <Pain
                                    formData={formData}
                                    formik={formik}
                                    //   form={form}
                                    index={index}
                                    page8={page8}
                                  />
                                </Grid> */}
                              </>
                            </>
                          );
                        })}
                        <Box mt={1}>
                          <div>
                            <SoftButton
                              type="button"
                              variant="gradient"
                              color="dark"
                              onClick={() => {
                                arrayhelpers.insert(formik.values.Intake14.length + 1, {
                                  ...formik.values.Intake14[formik.values.Intake14.length - 1],
                                });
                              }}
                            >
                              Add new page
                            </SoftButton>
                          </div>
                        </Box>
                        <div style={{ float: "right" }}>
                          <SoftButton
                            // disabled={isSubmitting}
                            variant="gradient"
                            color="dark"
                            className="nxt1"
                            // label="Next"
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
                />
              </>
            );
          }}
        </Formik>
      </SoftBox>
    </>
  );
}
index.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default index;
