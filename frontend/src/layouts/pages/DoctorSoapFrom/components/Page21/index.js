import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValue from "./Schema/initialValues";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
// import form from "./schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import Box from "@mui/material/Box";
import SoftTypography from "components/SoftTypography";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import FullBody from "./Component/fullBody";
import FullBody from "../PosturePage/components/fullBody";
import LeftBody from "../PosturePage/components/leftBody";
import RightBody from "../PosturePage/components/rightBody";
import BodyMap from "../PosturePage/components/bodyMap";
import AnalysisPart from "../PosturePage/components/analysisPart";
import InfoCommon from "../InfoCommon/index";
import FirstPartPage23 from "../FunctionalTest/components/FirstPart";
import TablePage23 from "../FunctionalTest/components/Table";

import FirstPart from "../Page21/Component/firstform";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { doctorShopFormDataAction } from "store/actions/actions";
import { stepIndexSoapForm } from "store/actions/actions";
// import "./style.css";

function index({ formData, stepIndex, setActiveStep }) {
  const token = useSelector((state) => state.auth.auth.idToken);
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const newPage21 = useSelector((state) => state.auth.doctorShopForm?.newP21);
  console.log("newPage21..", newPage21);

  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page9);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const soapIndex = useSelector((state) => state?.auth?.stepIndexSoapForm);

  let patientId = selectedPatientId ? selectedPatientId : soappatientId;
  useEffect(() => {
    dispatch(
      clientIntakeFormGet({
        patientId: patientId,
        token: token,
      })
    );
  }, []);
  useEffect(() => {
    console.log("running log 13.");
    dispatch(
      clientIntakeFormGet({
        patientId: patientId,
        token: token,
      })
    );
  }, [stepIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        token: token,
      })
    );
  }, []);

  useEffect(() => {
    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        token: token,
      })
    );
  }, [stepIndex]);
  console.log("newIntital..", soapIndex);

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            ...initialValue,
            ...newPage21,
          }}
          enableReinitialize
          onSubmit={(values) => {
            const data = {
              patientId: patientId,
              newP21: values,
            };
            dispatch(
              doctorShopFormDataAction({
                data: data,
                token: token,
              })
            );
            dispatch(stepIndexSoapForm(stepIndex + 1));
            setActiveStep(stepIndex + 1);
          }}
        >
          {(formik) => {
            console.log("values...12", formik);
            return (
              <>
                {/* <Grid>
                  <FirstPart formData={formData} formik={formik} />
                </Grid> */}

                <Box>
                  <InfoCommon formik={formik} />
                </Box>
                <Grid>
                  <FieldArray
                    name="PosturePage"
                    render={(arrayhelpers, push) => {
                      console.log("formik.values.excerciseDetails", formik.values.PosturePage);

                      return (
                        <>
                          {formik.values?.PosturePage?.map((data, i) => {
                            return (
                              <>
                                {i > 0 && (
                                  <Grid item xs={12} sm={12} lg={12} mb={1}>
                                    <SoftBox
                                      display="flex"
                                      flexDirection="row"
                                      justifyContent="center"
                                      // height="100%"
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
                                        onClick={() => arrayhelpers.remove(i)}
                                      />
                                    </SoftBox>
                                  </Grid>
                                )}

                                <Box sx={{ flexGrow: 1 }}>
                                  <Box>
                                    <Grid container spacing={2}>
                                      <Grid
                                        item
                                        md={6}
                                        lg={3}
                                        sm={6}
                                        xs={12}
                                        className="checkboxconainer"
                                      >
                                        <FullBody formik={formik} index={i} />
                                      </Grid>
                                      <Grid
                                        item
                                        md={6}
                                        lg={2.5}
                                        sm={6}
                                        xs={12}
                                        className="checkboxconainer"
                                      >
                                        <LeftBody formik={formik} index={i} />
                                      </Grid>
                                      <Grid
                                        item
                                        md={6}
                                        lg={2.5}
                                        sm={6}
                                        xs={12}
                                        className="checkboxconainer rightleft"
                                      >
                                        <RightBody formik={formik} index={i} />
                                      </Grid>
                                      <Grid
                                        item
                                        md={6}
                                        lg={4}
                                        sm={6}
                                        xs={12}
                                        className="checkboxconainer"
                                      >
                                        <BodyMap formik={formik} index={i} />
                                      </Grid>
                                    </Grid>
                                  </Box>
                                  {/* <Box mt={4}>
                                  <AnalysisPart formik={formik} index={i} />
                                </Box> */}
                                  <Box mt={4}>
                                    <FirstPartPage23 formik={formik} index={i} />
                                  </Box>
                                  <Box mt={4}>
                                    <TablePage23 formik={formik} index={i} />
                                  </Box>
                                </Box>
                              </>
                            );
                          })}
                          <Box mt={1}>
                            <div style={{ textAlign: "end", padding: "1%" }}>
                              <button
                                type="button"
                                className="posturrbtn"
                                onClick={
                                  () => arrayhelpers.insert(formik.values.PosturePage.length + 1)
                                  // arrayhelpers.push(formik.values.excerciseDetails)
                                }
                              >
                                New Page
                              </button>
                            </div>
                          </Box>
                        </>
                      );
                    }}
                  />
                </Grid>

                <div style={{ float: "right", position: "relative" }}>
                  <SoftButton
                    variant="gradient"
                    color="dark"
                    onClick={() => {
                      if (formik.dirty) {
                        formik.handleSubmit();
                      } else {
                        setActiveStep(stepIndex + 1);
                      }
                    }}
                    className="next-btn-sbn"
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
