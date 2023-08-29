import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React, { useEffect } from "react";
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";
import { Form, Formik, FieldArray } from "formik";
import Box from "@mui/material/Box";
import { MinusCircleOutlined } from "@ant-design/icons";

import "../Form15/style.scss";
import SoftSelect from "components/SoftSelect";
import TableTwo from "./Table/Table2";
import TableOne from "./Table/Table1";
import Tablethree from "./Table/Table3";
import TableFour from "./Table/Table4";
import image from "../../../../../assets/images/image.png";
import PractitionerComponent from "../Form15/Component/Practitioner/index";
import PatientComponent from "../Form15/Component/Patient/index";
import AssessmentComponent from "../Form15/Component/Assessment/index";
import ObjectiveComponent from "../Form15/Component/Objective/index";
import ImageComponent from "../Form15/Component/Imagecomponent/index";
import PropTypes from "prop-types";
import { style } from "@mui/system";
import { useDispatch } from "react-redux";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import { Button } from "antd";
import SoftButton from "components/SoftButton";
import initialValues from "./schema/initialValues";
import form from "./schema/form";
import NextButton from "../../NextButton";
import InfoCommon from "../InfoCommon/index";
import { doctorShopFormDataAction, clientIntakeFormGet } from "store/actions/actions";
function FormFifteen({ formData, stepIndex, setActiveStep }) {
  console.log("instialvaluee", initialValues);
  const staticArry = [
    { value: "+", label: "+" },
    { value: "-", label: "-" },
  ];
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);

  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page15);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  // const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page10);

  // console.log("clientIntakeformDetails...", clientIntakeformDetails);
  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, practitionerId: UserId }));
  // }, []);
  // useEffect(() => {
  //   console.log("running log 13.");
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, practitionerId: UserId }));
  // }, [stepIndex]);
  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({
  //       patientId: soappatientId,
  //       /* practitionerId: UserId,*/ token: token,
  //     })
  //   );
  // }, []);

  useEffect(() => {
    console.log("running log 13.");

    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId: UserId, */
        token: token,
      })
    );
  }, [stepIndex]);

  const onSubmitValues = () => {
    console.log("on Submit");
  };
  return (
    <SoftBox>
      <Formik
        initialValues={{ ...initialValues, ...doctorShopFromDetails }}
        enableReinitialize
        onSubmit={(values) => {
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            page15: values,
          };
          dispatch(
            doctorShopFormDataAction({
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
              <Grid container spacing={1}>
                {/* <PractitionerComponent formData={formData} formik={formik} form={form}  /> */}
                <InfoCommon formik={formik} />
                <Grid item lg={8} sm={12} xs={12}>
                  {/* <PatientComponent formData={formData} formik={formik} form={form} /> */}
                </Grid>
              </Grid>

              <FieldArray
                name="fifteenthPage"
                render={(arrayhelpers, push) => {
                  return (
                    <>
                      {formik.values.fifteenthPage.map((data, index) => {
                        return (
                          <>
                            {index > 0 && (
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
                                    onClick={() => arrayhelpers.remove(index)}
                                  />
                                </SoftBox>
                              </Grid>
                            )}

                            <Grid container>
                              <AssessmentComponent
                                formData={formData}
                                formik={formik}
                                form={form}
                                doctorShopFromDetails={doctorShopFromDetails}
                                index={index}
                              />
                            </Grid>

                            <Grid
                              container
                              style={{ alignItems: "center", justifyContent: "center" }}
                            >
                              <ObjectiveComponent
                                formData={formData}
                                formik={formik}
                                form={form}
                                doctorShopFromDetails={doctorShopFromDetails}
                                index={index}
                              />
                            </Grid>

                            <Grid container style={{ marginBottom: "30px" }}>
                              <ImageComponent
                                formData={formData}
                                formik={formik}
                                form={form}
                                doctorShopFromDetails={doctorShopFromDetails}
                                index={index}
                              />
                            </Grid>

                            <Grid container mt={1}>
                              <Grid item lg={10} xs={12}>
                                <div
                                  className="RangeScroll"
                                  style={{
                                    paddingLeft: 0,
                                  }}
                                >
                                  <TableOne
                                    formData={formData}
                                    formik={formik}
                                    form={form}
                                    index={index}
                                  />
                                </div>
                                <div className="RangeScroll" style={{ marginTop: "30px",paddingLeft: 0, }}>
                                  <TableTwo
                                    formData={formData}
                                    formik={formik}
                                    form={form}
                                    index={index}
                                  />
                                </div>
                              </Grid>

                              <Grid
                                item
                                lg={2}
                                md={12}
                                sm={12}
                                xs={12}
                                pl={4}
                                className="mediaQuery"
                              >
                                <Tablethree
                                  formData={formData}
                                  formik={formik}
                                  form={form}
                                  index={index}
                                />
                              </Grid>

                              <Grid
                                item
                                lg={2}
                                md={12}
                                sm={12}
                                xs={12}
                                pl={4}
                                mt={4}
                                mb={4}
                                className="mediaQuery"
                              >
                                <TableFour
                                  formData={formData}
                                  formik={formik}
                                  form={form}
                                  index={index}
                                />
                              </Grid>

                              {/* <Grid item lg={10} xs={12} className="RangeScroll" pl={0}>
                  <TableOne formData={formData} formik={formik} form={form} />
                </Grid>
                <Grid item lg={10} xs={12} className="RangeScroll" pl={0}>
                  <TableTwo formData={formData} formik={formik} form={form} />
                </Grid>
                <Grid item lg={2} xs={4} pl={2} pt={4} className="mediaQuery">
                  <Tablethree formData={formData} formik={formik} form={form} />
                </Grid> */}
                            </Grid>
                            <span style={{ fontSize: "15px" }}>Notes:</span>
                            <Grid item lg={12} xs={12} mt={1}>
                              <textarea
                                className="textAreaClass"
                                cols="30"
                                rows="10"
                                style={{ width: "100%", height: "100%" }}
                                name="textAreaPage15"
                                value={formik.values?.textAreaPage15}
                                onChange={formik.handleChange}
                              />
                            </Grid>
                          </>
                        );
                      })}
                      <Box mt={1}>
                        <div>
                          <button
                            type="button"
                            className="posturrbtn"
                            onClick={
                              () => {
                                console.log("on click add new page", formik.values.fifteenthPage);
                                arrayhelpers.insert(formik.values.fifteenthPage.length + 1);
                              }
                              // arrayhelpers.push(formik.values.excerciseDetails)
                            }
                          >
                            Add new page
                          </button>
                        </div>
                      </Box>
                      <div style={{ float: "right" }}>
                        <SoftButton
                          // disabled={isSubmitting}
                          variant="gradient"
                          color="dark"
                          className="nxt1"
                          // label="Next"
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
              />

              {/* </Grid>
              </Grid> */}
            </>
          );
        }}
      </Formik>
    </SoftBox>
  );
}
FormFifteen.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default FormFifteen;
