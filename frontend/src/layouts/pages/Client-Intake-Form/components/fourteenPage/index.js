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
import Firstpart from "./component/firsform";

import "./style.css";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { getDoctorShopFormDataAction } from "store/actions/actions.js";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import SoftTypography from "components/SoftTypography/index.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  console.log("initialValue", initialValue);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page18);
  console.log("clientIntakeformDetails222", clientIntakeformDetails);
  const Doctotsoapform = useSelector((state) => state.auth.doctorShopForm?.page10);

  useEffect(() => {
    dispatch(getDoctorShopFormDataAction({ patientId: UserId, token: token }));
  }, []);

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
  const handleSave = async (values) => {
    const page10Obj = {
      CategoryXII: values?.CategoryXII,
      CategoryXIII: values.CategoryXIII,
      CategoryXIV: values?.CategoryXIV,
      CategoryXV: values?.CategoryXV,
      CategoryXVI: values?.CategoryXVI,
      CategoryXVICont: values?.CategoryXVICont,
      CategoryXVII: values?.CategoryXVII,
      CategoryXVIII: values?.CategoryXVIII,
      CategoryXIX: values?.CategoryXIX,
      CategoryXX: values?.CategoryXX,
    };
    const page10Object = { ...Doctotsoapform, ...page10Obj };
    const data = {
      patientId: UserId,
      page18: values.page18,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
    // const soapData = {
    //   patientId: UserId,
    //   page10: page10Object,
    // };
    // await dispatch(
    //   doctorShopFormDataAction({
    //     data: soapData,
    //     token: token,
    //   })
    // );
  };

  const initialValue18 = clientIntakeformDetails
    ? clientIntakeformDetails
    : [{ ...initialValue.page18[0] }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page18: [...initialValue18],
            //  ...initialValue, ...clientIntakeformDetails
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const page10Obj = {
              CategoryXII: values?.CategoryXII,
              CategoryXIII: values.CategoryXIII,
              CategoryXIV: values?.CategoryXIV,
              CategoryXV: values?.CategoryXV,
              CategoryXVI: values?.CategoryXVI,
              CategoryXVICont: values?.CategoryXVICont,
              CategoryXVII: values?.CategoryXVII,
              CategoryXVIII: values?.CategoryXVIII,
              CategoryXIX: values?.CategoryXIX,
              CategoryXX: values?.CategoryXX,
            };
            const page10Object = { ...Doctotsoapform, ...page10Obj };
            const data = {
              patientId: UserId,
              page18: values.page18,
            };
            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            // const soapData = {
            //   patientId: UserId,
            //   page10: page10Object,
            // };
            // await dispatch(
            //   doctorShopFormDataAction({
            //     data: soapData,
            //     token: token,
            //   })
            // );
            setActiveStep(stepIndex + 1);
          }}
        >
          {(formik) => {
            return (
              <>
                <Grid>
                  <FieldArray
                    name="page18"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page18.map((page, index) => (
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
                                <Firstpart formik={formik} index={index} />
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
                                  formik?.values?.page18?.length,
                                  formik.values.page18[formik.values.page18.length - 1]
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
                <div className="Reserved">
                  <p style={{ fontSize: "12px", marginBottom: "0px" }}>
                    © 2015 Datis Kharrazian. All Rights Reserved.
                  </p>
                  <p style={{ fontSize: "12px" }}>SMGEMAF(122215)Version 3</p>
                </div>
                <div className="mfooter">
                  <p style={{ fontSize: "12px" }}>
                    <i>
                      Symptom groups listed on this form are not intended to be used as a diagnosis
                      of any disease or condition.
                    </i>
                  </p>
                </div>
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
