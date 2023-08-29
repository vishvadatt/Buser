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
import Social from "./components/social";
import FoodAllergies from "./components/foodAllergies";
import DietHistory from "./components/dietHistory";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";
// import BrainFunction from "./components/brainFunctio.js";

function index({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page11);
  const Doctotsoapform = useSelector((state) => state.auth.doctorShopForm?.page9);
  const Intro1Details = useSelector((state) => state.auth.clientIntakeForm?.intro1);
  const newClientName = { clientName: Intro1Details?.ClientName };

  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  const personalInformation = {
    clientName: loginUser?.name,
  };
  useEffect(() => {
    dispatch(
      getDoctorShopFormDataAction({
        patientId: soappatientId,
        practitionerId: UserId,
        token: token,
      })
    );
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
    const data = {
      patientId: UserId,
      page11: values.page11,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
    const soapData = {
      patientId: soappatientId,
      page9: values,
    };
    //await dispatch(
    //   doctorShopFormDataAction({
    //     data: soapData,
    //     token: token,
    //   })
    // );
  };

  const form11Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValue.page11[0] }]
    : [{ ...initialValue.page11[0], ...personalInformation }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page11: [...form11Data],
          }}
          enableReinitialize
          onSubmit={(values) => {
            const data = {
              patientId: UserId,
              page11: values.page11,
            };
            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            const soapData = {
              patientId: soappatientId,
              page9: values,
            };
            //await dispatch(
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
                    name="page11"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page11.map((page, index) => (
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
                                <Social index={index} formik={formik} form={form} />
                              </Grid>
                              <Grid>
                                <FoodAllergies index={index} formik={formik} form={form} />
                              </Grid>
                              <Grid>
                                <DietHistory index={index} formik={formik} form={form} />
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
                                  formik?.values?.page11?.length,
                                  formik.values.page11[formik.values.page11.length - 1]
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
                  <Grid mt={1} className="mainfooter">
                    <p>
                      <b>© 2018, Andrew B. Buser. All Rights Reserved</b>
                    </p>
                  </Grid>
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
