import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValue from "./schema/initialValue.js";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
import form from "./schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";

import FirstPart from "./components/firstPart";
import LeftBody from "./components/leftBody.js";
import RightBody from "./components/rightBody.js";
import MiddleBody from "./components/middleBody.js";
import EndPart from "./components/endPart.js";
import Pain from "./components/pain.js";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const token = useSelector((state) => state.auth.auth.idToken);
  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.auth.auth._id);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  // console.log("UserId", UserId);
  // console.log("soappatientId", soappatientId);

  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page13);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page1);
  const page12 = useSelector((state) => state.auth.clientIntakeForm);

  // console.log(page12,"mm");

  console.log("clientIntakeformDetails2", clientIntakeformDetails);

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

  const initialValue13 =
  clientIntakeformDetails && clientIntakeformDetails.length > 0 ? clientIntakeformDetails : [{ ...initialValue.page13[0] }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page13: [...initialValue13],
          }}
          enableReinitialize
          onSubmit={(values) => {
            const data = {
              patientId: UserId,
              page13: values.page13,
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
                    name="page13"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page13.map((page, index) => (
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

                              <Grid>
                                <FirstPart index={index} formik={formik} />
                              </Grid>

                              <Grid container mt={2} className="body-dimention">
                                <Grid lg={4.5} xs={12} md={12}>
                                  <LeftBody index={index} formik={formik} />
                                </Grid>

                                <Grid lg={3} xs={12} mt={2} md={12}>
                                  <MiddleBody index={index} formik={formik} />
                                </Grid>

                                <Grid lg={4.5} xs={12} md={12}>
                                  <RightBody index={index} formik={formik} />
                                </Grid>
                              </Grid>

                              <Grid mt={2} mb={2.5}>
                                <EndPart index={index} formik={formik} />
                              </Grid>

                              {/* <Grid mt={2} mb={2.5}>
                                <Pain index={index} formik={formik} page12={page12} />
                              </Grid> */}
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
                                  formik?.values?.page13?.length + 1,
                                  ...initialValue?.page13
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
