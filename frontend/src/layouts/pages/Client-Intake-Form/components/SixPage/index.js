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
import Bodypart from "./components/bodyPart";
import SecondPart from "./components/secondPart";
// import Categories from "./components/categories.js";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";
// import { Categories } from "emoji-picker-react";

function index({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page10);
  const Doctotsoapform = useSelector((state) => state.auth.doctorShopForm?.page9);
  const Intro1Details = useSelector((state) => state.auth.clientIntakeForm?.intro1);
  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  const personalInformation = {
    clientName: loginUser?.name,
  };
  // console.log("clientIntakeformDetails2", clientIntakeformDetails);
  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({ patientId: UserId, /* practitionerId: UserId */ token: token })
  //   );
  // }, []);
  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({ patientId: UserId, /* practitionerId: UserId */ token: token })
  //   );
  // }, [stepIndex]);

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
    const page9Obj = {
      ChillsCheck: values?.ChillsCheck,
      ChillsInput: values?.ChillsInput,
      ChestCheck: values?.ChestCheck,
      ChestInput: values?.ChestInput,
      CoughingCheck: values?.CoughingCheck,
      CoughingInput: values?.CoughingInput,
      DifficultyCheck: values?.DifficultyCheck,
      DifficultyInput: values?.DifficultyInput,
      HeartbeatCheck: values?.HeartbeatCheck,
      HeartbeatInput: values?.HeartbeatInput,
      NumbnessCheck: values?.NumbnessCheck,
      NumbnessInput: values?.NumbnessInput,
      dizzinessCheck: values?.dizzinessCheck,
      dizzinessinput: values?.dizzinessinput,
    };
    const page9Object = { ...Doctotsoapform, ...page9Obj };

    const data = {
      patientId: UserId,
      page10: values.page10,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
    const shopData = {
      patientId: UserId,
      page9: page9Object,
    };
    // await dispatch(
    //   doctorShopFormDataAction({
    //     data: shopData,
    //     token: token,
    //   })
    // );
  };

  const form10Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValue.page10[0] }]
    : [{ ...initialValue.page10[0], ...personalInformation }];

  console.log(form10Data, "aa");

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page10: [...form10Data],
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const page9Obj = {
              ChillsCheck: values?.ChillsCheck,
              ChillsInput: values?.ChillsInput,
              ChestCheck: values?.ChestCheck,
              ChestInput: values?.ChestInput,
              CoughingCheck: values?.CoughingCheck,
              CoughingInput: values?.CoughingInput,
              DifficultyCheck: values?.DifficultyCheck,
              DifficultyInput: values?.DifficultyInput,
              HeartbeatCheck: values?.HeartbeatCheck,
              HeartbeatInput: values?.HeartbeatInput,
              NumbnessCheck: values?.NumbnessCheck,
              NumbnessInput: values?.NumbnessInput,
              dizzinessCheck: values?.dizzinessCheck,
              dizzinessinput: values?.dizzinessinput,
            };
            const page9Object = { ...Doctotsoapform, ...page9Obj };
            console.log("client-intake-form3rd...", values);
            const data = {
              patientId: UserId,
              page10: values.page10,
            };
            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            const shopData = {
              patientId: UserId,
              page9: page9Object,
            };
            // await dispatch(
            //   doctorShopFormDataAction({
            //     data: shopData,
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
                    name="page10"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page10.map((page, index) => (
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

                              <SoftBox style={{ marginTop: "10px" }}>
                                <SoftTypography
                                  fontWeight="bold"
                                  fontSize="15px"
                                  marginBottom="8px"
                                >
                                  Have you ever experienced any of the following (check if yes)?
                                  Please give dates and details if possible.
                                </SoftTypography>
                              </SoftBox>

                              <Grid>
                                <Bodypart index={index} formik={formik} form={form} />
                              </Grid>

                              <Grid>
                                <SecondPart index={index} formik={formik} form={form} />
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
                                  formik?.values?.page10?.length + 1,
                                  formik.values.page10[formik.values.page10.length - 1]
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
