import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValue from "./Schema/initialValue";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
import form from "./Schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import FirstPart from "./component/firstform";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import Logo from "../../../../../assets/images/brain.png";
import { doctorShopFormDataAction } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { getIntakeFormDetailsAction } from "store/actions/actions";
import { MinusCircleOutlined } from "@ant-design/icons";
function index({ formData, stepIndex, setActiveStep }) {
  console.log("initialValue", initialValue);
  const token = useSelector((state) => state.auth.auth.idToken);
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm.page19);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page5);
  const Doctotsoapform = useSelector((state) => state.auth.doctorShopForm?.page10);
  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  const personalInformation = {
    clientName: loginUser?.name,
  };

  useEffect(() => {
    dispatch(
      getDoctorShopFormDataAction({ patientId: UserId, /* practitionerId: UserId, */ token: token })
    );
  }, []);

  console.log("clientIntakeformDetails222", clientIntakeformDetails);
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
    const page10Object = { ...Doctotsoapform, ...values };
    const data = {
      patientId: UserId,
      page19: values.page19,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
    const soapData = {
      patientId: UserId,
      page10: page10Object,
    };
    // await dispatch(
    //   doctorShopFormDataAction({
    //     data: soapData,
    //     token: token,
    //   })
    // );
  };

  const form19Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValue.page19[0] }]
    : [{ ...initialValue.page19[0], ...personalInformation }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page19: [...form19Data],
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const page10Object = { ...Doctotsoapform, ...values };
            const data = {
              patientId: UserId,
              page19: values.page19,
            };
            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            const soapData = {
              patientId: UserId,
              page10: page10Object,
            };
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
                    name="page19"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page19.map((page, index) => (
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
                                <Grid
                                  container
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <img src={Logo} height={100} width={100} />
                                  <SoftTypography
                                    fontSize="33px"
                                    fontColor="black"
                                    marginTop="1.5rem"
                                    marginLeft="10px"
                                  >
                                    BRAIN REGION LOCALIZATION FORM
                                  </SoftTypography>
                                </Grid>
                                <Grid container>
                                  <Grid
                                    item
                                    lg={5.8}
                                    md={12}
                                    xs={12}
                                    style={{ textAlign: "left", marginLeft: "5px" }}
                                  >
                                    <SoftTypography
                                      fontSize="20px"
                                      marginTop="10px"
                                      marginBottom="10px"
                                    >
                                      <span>INSTRUCTIONS:</span>
                                    </SoftTypography>
                                    <SoftTypography
                                      fontSize="15px"
                                      marginTop="10px"
                                      marginBottom="10px"
                                    >
                                      <span>
                                        The purpose of this questionnaire is to identify
                                        difficulties that you may be experiencing. Please answer
                                        every question, do not skip any questions. Follow the 0 to 4
                                        key, and select which best fits for all of your answers.
                                      </span>
                                    </SoftTypography>
                                  </Grid>
                                  <Grid item lg={6} md={12} xs={12}>
                                    <SoftBox
                                      style={{ border: "2px solid black", marginBottom: "5px" }}
                                    >
                                      <SoftTypography
                                        fontSize="20px"
                                        marginTop="0px"
                                        className="intro"
                                      >
                                        <span
                                          style={{
                                            textAlign: "center",
                                            display: "flex",
                                            color: "white",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          KEY:
                                        </span>
                                      </SoftTypography>
                                      <SoftBox className="sections">
                                        <span
                                          style={{
                                            fontSize: "15px",
                                            paddingLeft: "10px",
                                            textAlign: "left",
                                          }}
                                        >
                                          0 = I never have symptoms (0% of the time)
                                        </span>
                                        <span
                                          style={{
                                            fontSize: "15px",
                                            paddingLeft: "10px",
                                            textAlign: "left",
                                          }}
                                        >
                                          1 = I rarely have symptoms (Less than 25% of the time)
                                        </span>
                                        <span
                                          style={{
                                            fontSize: "15px",
                                            paddingLeft: "10px",
                                            textAlign: "left",
                                          }}
                                        >
                                          2 = I often have symptoms (Half of the time)
                                        </span>
                                        <span
                                          style={{
                                            fontSize: "15px",
                                            paddingLeft: "10px",
                                            textAlign: "left",
                                          }}
                                        >
                                          3 = I frequently have symptoms (75% of the time)
                                        </span>
                                        <span
                                          style={{
                                            fontSize: "15px",
                                            paddingLeft: "10px",
                                            textAlign: "left",
                                          }}
                                        >
                                          4 = I always have symptoms (100% of the time)
                                        </span>
                                      </SoftBox>
                                    </SoftBox>
                                  </Grid>
                                </Grid>
                              </SoftBox>
                              <Grid>
                                <FirstPart formik={formik} index={index} />
                              </Grid>
                              <Grid container mt={2} direction={"column"}>
                                <Grid className="Page" item lg={3} style={{ fontSize: "14px" }}>
                                  Page 1
                                </Grid>

                                <Grid className="Page" item lg={3} style={{ fontSize: "14px" }}>
                                  Functional Neurology Seminars
                                </Grid>
                                <Grid className="Page" item lg={3} style={{ fontSize: "14px" }}>
                                  LP © 2017 Dr. Datis Kharrazian
                                </Grid>
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
                                  formik?.values?.page19?.length,
                                  formik.values.page19[formik.values.page19.length - 1]
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

{
  /* <div className="Reserved">
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
</div> */
}
