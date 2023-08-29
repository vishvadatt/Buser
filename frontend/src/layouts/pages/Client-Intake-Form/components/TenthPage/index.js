import SoftBox from "components/SoftBox";
import React, { useEffect, useState } from "react";
import initialValue from "./schema/initialValue.js";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
import form from "./schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import FirstPart from "./components/firstform";
import LMPQRSTU from "./components/LMPQRSTU";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { getDoctorShopFormDataAction } from "store/actions/actions.js";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const token = useSelector((state) => state.auth.auth.idToken);
  const [answers, setAnswers] = useState({});
  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page14);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page15);
  const Intro1Details = useSelector((state) => state.auth.clientIntakeForm?.intro1);
  const newClientName = { clientName: Intro1Details?.ClientName };
  useEffect(() => {
    dispatch(
      getDoctorShopFormDataAction({ patientId: UserId, /* practitionerId: UserId, */ token: token })
    );
  }, []);
  useEffect(() => {
    console.log("running log 13.");
    dispatch(
      getDoctorShopFormDataAction({ patientId: UserId, /* practitionerId: UserId, */ token: token })
    );
  }, [stepIndex]);

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

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page14:
              clientIntakeformDetails && clientIntakeformDetails.length > 0
                ? clientIntakeformDetails
                : initialValue.page14,
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const data = {
              patientId: UserId,
              page14: values.page14,
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
                <Grid>
                  <FieldArray
                    name="page14"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page14.map((page, index) => (
                            <Grid key={index}>
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

                              <SoftBox style={{ marginTop: "10px" }} ml={3}>
                                <SoftTypography
                                  fontWeight="bold"
                                  fontSize="15px"
                                  marginBottom="8px"
                                >
                                  Please continue here with any additional notes that you have about{" "}
                                  <u>each</u> of the areas of complaint that you noted on the body
                                  diagram above or from any other section of this form:
                                </SoftTypography>
                              </SoftBox>
                              <SoftBox style={{ marginTop: "10px" }} ml={3}>
                                <SoftTypography
                                  fontWeight="bold"
                                  fontSize="15px"
                                  marginBottom="8px"
                                >
                                  LMPQRSTU points: (PLEASE DESCRIBE EACH OF YOUR NUMBERED CONDITIONS
                                  ABOVE WITH THE BELOW DETAILS TO THE BEST OF YOUR ABILITY)
                                </SoftTypography>
                              </SoftBox>
                              {/* <Grid>
                                <FirstPart index={index} formik={formik} />
                              </Grid> */}
                              <Grid>
                                <LMPQRSTU
                                  index={index}
                                  formik={formik}
                                  answers={answers}
                                  setAnswers={setAnswers}
                                />
                              </Grid>
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
                                  formik?.values?.page14?.length,
                                  formik?.values?.page14[formik?.values?.page14.length - 1]
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
                    type="submit"
                    variant="gradient"
                    color="dark"
                    onClick={formik.handleSubmit}
                  >
                    Next
                  </SoftButton>
                </div>
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
