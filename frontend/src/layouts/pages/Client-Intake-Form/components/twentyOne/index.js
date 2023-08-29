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
import Logo from "../../../../../assets/images/brain.png";

import BrainFuncation from "./component/firstform";
import FirstPart from "./component/secondform";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { Diversity1Outlined } from "@mui/icons-material";
import { getDoctorShopFormDataAction } from "store/actions/actions.js";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page25);
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page1);
  const page11Data = useSelector((state) => state.auth.doctorShopForm?.page11);

  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  const personalInformation = {
    name: loginUser?.name,
    gender: loginUser?.gender,
    age: loginUser?.age,
  };
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
    dispatch(
      getDoctorShopFormDataAction({ patientId: UserId, /*practitionerId: UserId,*/ token: token })
    );
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleSave = async (values) => {
    const page11Object = { ...page11Data, ...values };
    const data = {
      patientId: UserId,
      page25: values.page25,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
    const sopData = {
      patientId: UserId,
      page11: page11Object,
    };
    // dispatch(
    //   doctorShopFormDataAction({
    //     data: sopData,
    //     token: token,
    //   })
    // );
  };

  const initialValue25 = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValue.page25[0] }]
    : [{ ...initialValue.page25[0], ...personalInformation }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page25: [...initialValue25],
          }}
          enableReinitialize
          onSubmit={(values) => {
            const page11Object = { ...page11Data, ...values };
            const data = {
              patientId: UserId,
              page25: values.page25,
            };
            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            const sopData = {
              patientId: UserId,
              // practitionerId: UserId,
              page11: page11Object,
            };
            // dispatch(
            //   doctorShopFormDataAction({
            //     data: sopData,
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
                    name="page25"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page25.map((page, index) => (
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
                                  BRAIN HEALTH AND NUTRITION ASSESSMENT FORM™ (BHNAF)
                                </SoftTypography>
                              </Grid>
                              <Grid>
                                <FirstPart formik={formik} index={index} />
                              </Grid>
                              <Grid mt={2}>
                                <BrainFuncation formik={formik} index={index} />
                              </Grid>

                              <div className="Datis">
                                <p style={{ fontSize: "12px", marginBottom: "0px" }}>
                                  © 2013 Datis Kharrazian. All Rights Reserved.
                                </p>
                                <p style={{ fontSize: "12px" }}>SMGEBHNAF34(082013)</p>
                              </div>
                              <div className="Datis">
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
                                  formik?.values?.page25?.length,
                                  formik.values.page25[formik.values.page25.length - 1]
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
