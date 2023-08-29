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
import { clientIntakeFormGet, getDoctorShopFormDataAction } from "store/actions/actions";
import FirstPart from "./component/firstform.js";
import ConcernForm from "./component/concernForm.js";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  console.log("initialValue", initialValue);
  const token = useSelector((state) => state.auth.auth.idToken);
  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page17);

  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page5);

  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  const personalInformation = {
    clientName: loginUser?.name,
    gender: loginUser?.gender,
    age: loginUser?.age,
  };
  const Doctotsoapform = useSelector((state) => state.auth.doctorShopForm?.page10);

  const patientIntakeFormDetail = useSelector((state) => state?.auth?.patientIntakeFormDetail);
  console.log("clientIntakeformDetails2", clientIntakeformDetails);
  useEffect(() => {
    dispatch(getDoctorShopFormDataAction({ patientId: UserId, token: token }));
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

  console.log("Doctotsoapform", Doctotsoapform);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleSave = async (values) => {
    const sendToDoctorSOAP = values.page17[values.page17.length - 1];
    const page10Obj = {
      CategoryIi: sendToDoctorSOAP?.CategoryIi,
      CategoryII: sendToDoctorSOAP?.CategoryII,
      CategoryIII: sendToDoctorSOAP?.CategoryIII,
      CategoryIV: sendToDoctorSOAP?.CategoryIV,
      CategoryV: sendToDoctorSOAP?.CategoryV,
      CategoryVIi: sendToDoctorSOAP?.CategoryVIi,
      CategoryVII: sendToDoctorSOAP?.CategoryVII,
      CategoryVIII: sendToDoctorSOAP?.CategoryVIII,
      CategoryIX: sendToDoctorSOAP?.CategoryIX,
      CategoryX: sendToDoctorSOAP?.CategoryX,
      CategoryXIi: sendToDoctorSOAP?.CategoryXIi,
    };
    // console.log("page10Obj", page10Obj, Doctotsoapform);
    // const finalSendSoapData =
    //   Doctotsoapform.length > 0 ? Doctotsoapform[Doctotsoapform.length - 1] : [];

    // Object.assign(finalSendSoapData, page10Obj);
    // console.log("finalSendSoapData", Doctotsoapform);

    // const page10Object = { ...Doctotsoapform, ...page10Obj };
    const data = {
      patientId: UserId,
      page17: values.page17,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
    // const soapData = {
    //   patientId: UserId,
    //   page10: [],
    // };
    // await dispatch(
    //   doctorShopFormDataAction({
    //     data: soapData,
    //     token: token,
    //   })
    // );
  };

  const form17Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValue.page17[0] }]
    : [{ ...initialValue.page17[0], ...personalInformation }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page17: [...form17Data],
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const sendToDoctorSOAP = values.page17[values.page17.length - 1];
            const page10Obj = {
              CategoryIi: sendToDoctorSOAP?.CategoryIi,
              CategoryII: sendToDoctorSOAP?.CategoryII,
              CategoryIII: sendToDoctorSOAP?.CategoryIII,
              CategoryIV: sendToDoctorSOAP?.CategoryIV,
              CategoryV: sendToDoctorSOAP?.CategoryV,
              CategoryVIi: sendToDoctorSOAP?.CategoryVIi,
              CategoryVII: sendToDoctorSOAP?.CategoryVII,
              CategoryVIII: sendToDoctorSOAP?.CategoryVIII,
              CategoryIX: sendToDoctorSOAP?.CategoryIX,
              CategoryX: sendToDoctorSOAP?.CategoryX,
              CategoryXIi: sendToDoctorSOAP?.CategoryXIi,
            };
            // console.log("page10Obj", page10Obj, Doctotsoapform);
            // const finalSendSoapData =
            //   Doctotsoapform.length > 0 ? Doctotsoapform[Doctotsoapform.length - 1] : [];

            // Object.assign(finalSendSoapData, page10Obj);
            // console.log("finalSendSoapData", Doctotsoapform);

            // const page10Object = { ...Doctotsoapform, ...page10Obj };
            const data = {
              patientId: UserId,
              page17: values.page17,
            };
            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            // const soapData = {
            //   patientId: UserId,
            //   page10: [],
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
                    name="page17"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page17.map((page, index) => (
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

                              <SoftBox style={{ textAlign: "center", marginTop: "10px" }}>
                                <SoftTypography
                                  fontWeight="bold"
                                  fontSize="20px"
                                  marginTop="10px"
                                  marginBottom="10px"
                                >
                                  <span className="assessment-css">METABOLIC ASSESSMENT FORM </span>
                                  <span className="texttt">&trade;</span>
                                </SoftTypography>
                              </SoftBox>

                              <Grid>
                                <ConcernForm formik={formik} index={index} />
                              </Grid>
                              <Grid>
                                <FirstPart formik={formik} index={index} />
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
                                  formik?.values?.page17?.length,
                                  formik.values.page17[formik.values.page17.length - 1]
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
