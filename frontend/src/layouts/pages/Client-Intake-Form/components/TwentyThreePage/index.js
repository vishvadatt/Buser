import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValue from "./schema/initialValue.js";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import SoftButton from "components/SoftButton";
import form from "./schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import Logo from "../../../../../assets/images/brain.png";

// import BrainFuncation from "./component/firstform";
import FirstPart from "./component/FirstPart";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { getDoctorShopFormDataAction } from "store/actions/actions.js";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page28);
  const page11Data = useSelector((state) => state.auth.doctorShopForm?.page11);
  const latestService = useSelector((state) => state.auth.latestServicePurchased);

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
    dispatch(
      getDoctorShopFormDataAction({ patientId: UserId, /*practitionerId: UserId,*/ token: token })
    );
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const navigateUser = () => {
    if (
      latestService === "live_In_Person_and_Travel_Exercise_Therapy_Balance" ||
      latestService === "live_Video_Online_Exercise_Therapy_Balance"
    ) {
      navigate("/book-appointments");
    } else {
      navigate("/labs");
    }
  };

  // const handleSave = async (values) => {
  //   const page11Object = { ...page11Data, ...values };
  //   const data = {
  //     patientId: UserId,
  //     page25: values.page25,
  //   };
  //   dispatch(
  //     clientIntakeFormCreate({
  //       data: data,
  //       token: token,
  //     })
  //   );
  //   const sopData = {
  //     patientId: UserId,
  //     page11: page11Object,
  //   };
  //   // dispatch(
  //   //   doctorShopFormDataAction({
  //   //     data: sopData,
  //   //     token: token,
  //   //   })
  //   // );
  // };

  const initialValue28 = clientIntakeformDetails
    ? clientIntakeformDetails
    : [{ ...initialValue.page28[0] }];
  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page28: [...initialValue28],
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const page11Object = { ...page11Data, ...values };
            const data = {
              patientId: UserId,
              page28: values.page28,
            };
            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            const soapData = {
              patientId: UserId,
              // practitionerId: UserId,
              page11: page11Object,
            };
            // await dispatch(
            //   doctorShopFormDataAction({
            //     data: soapData,
            //     token: token,
            //   })
            // );
            navigateUser();
            // setActiveStep(stepIndex + 1);
          }}
        >
          {(formik) => {
            return (
              <>
                <Grid>
                  <FieldArray
                    name="page28"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page28.map((page, index) => (
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

                              <Grid container style={{ display: "flex", justifyContent: "center" }}>
                                <SoftTypography
                                  fontSize="33px"
                                  marginTop="10px"
                                  style={{ fontWeight: "500" }}
                                >
                                  NEUROTRANSMITTER ASSESSMENT FORM™ (NTAF)
                                </SoftTypography>
                              </Grid>
                              <Grid>
                                <FirstPart formik={formik} index={index} />
                              </Grid>
                              <div className="Symptom">
                                <p style={{ fontSize: "10px", marginBottom: "0px" }}>
                                  © 2016 Datis Kharrazian. All Rights Reserved.
                                </p>
                                <p style={{ fontSize: "10px" }}>SMGENTAF(032116)</p>
                              </div>
                              <div className="Symptom">
                                <p
                                  style={{ fontSize: "12px", fontStyle: "italic" }}
                                  className="last-desc-line"
                                >
                                  Symptom groups listed on this form are not intended to be used as
                                  a diagnosis of any disease or condition.
                                </p>
                              </div>
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
                                  formik?.values?.page28?.length,
                                  formik.values.page28[formik.values.page28.length - 1]
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

                <div style={{ float: "right", position: "relative" }}>
                  <SoftButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    className="next-btn-sbn"
                    onClick={() => {
                      if (formik.dirty) {
                        formik.handleSubmit();
                      } else {
                        setActiveStep(stepIndex + 1);
                      }
                    }}
                  >
                    Submit
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

<></>;
