import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValues from "./schema/initialValue.js";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
import form from "./schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";

import Sympntos from "./components/symptoms";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { painListAction } from "store/actions/actions.js";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  console.log("initialValue12", initialValues);
  let date = new Date().toLocaleDateString("en-CA");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page12);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page1);

  console.log("clientIntakeformDetails88", clientIntakeformDetails);
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

  const painListArea = useSelector((state) => state.auth.painList);

  const orthopedic = painListArea;
  useEffect(() => {
    dispatch(painListAction({ token: token }));
  }, []);

  const initialValue12 = [{ ...initialValues.page12[0], orthopedic: [...orthopedic] }];

  // console.log(updatedInitialValues, "it");
  return (
    <>
      <SoftBox>
        <Formik
          initialValues={
            clientIntakeformDetails
              ? { ...clientIntakeformDetails }
              : { page12: [...initialValue12] }
          }
          //   {
          //   ...initialValues,
          //   orthopedic,
          //   ...clientIntakeformDetails,
          //   ...clientIntakeformDetails1,
          // }

          enableReinitialize
          onSubmit={(values) => {
            console.log("values11", values);
            const data = {
              patientId: UserId,
              page12: values,
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
            console.log("formoik12", formik.values);
            return (
              <>
                <Grid>
                  <FieldArray
                    name="page12"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page12.map((page, index) => (
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
                                <Sympntos index={index} formik={formik} form={form} />
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
                                arrayhelpers.insert(formik?.values?.page12?.length, {
                                  ...formik.values.page12[formik.values.page12.length - 1],
                                })
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
