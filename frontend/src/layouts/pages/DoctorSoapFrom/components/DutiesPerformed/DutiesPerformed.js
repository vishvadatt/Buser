// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { Divider, MenuItem, Checkbox } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/DutiesPerformed/FormField/index";
import { Formik, FieldArray } from "formik";
import Box from "@mui/material/Box";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

import {
  clientIntakeFormGet,
  getDoctorShopFormDataAction,
  doctorShopFormDataAction,
  setActiveSteps,
} from "store/actions/actions";
import { useDispatch } from "react-redux";
import "./style.css";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// NewUser page components
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheckboxNewTwo from "../Symptoms/CheckboxNewSecond";
import UpperCheckboxes from "./component/UpperCheckboxes";
import LowerCheckboxes from "./component/LowerCheckboxes";
import initialValues from "./schemas/initialValues";
// import TopInfo from "../Diagnose/TopInfo";
import form from "./schemas/form";
import NextButton from "../../NextButton";
import { useSelector } from "react-redux";
import { FormControlLabel } from "@material-ui/core";
import TopInfo from "./component/TopInfo";
import BottomSign from "./component/BotttoSign";

import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

// import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function DutiesPerformed({ formData, stepIndex, setActiveStep }) {
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);

  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginOfc(true);
  }

  const dispatch = useDispatch();
  const toggleCheckboxValue = (index) => {
    setIsChecked(isChecked.map((v, i) => (i === index ? !v : v)));
  };
  const clientIntakeformDetails1 = useSelector((state) => state.auth.clientIntakeForm?.page1);

  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page5);
  const activeStepVal = useSelector((state) => state.auth.activeStep);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const soapFormPage1 = useSelector((state) => state.auth.doctorShopForm.page1);
  const patientName = { name: soapFormPage1?.name };
  console.log("activeStepVal", doctorShopFromDetails);
  // useEffect(() => {
  //   dispatch(
  //     clientIntakeFormGet({ patientId: soappatientId, /* practitionerId: UserId, */ token: token })
  //   );
  // }, []);
  useEffect(() => {
    let patientId = patientSoapFormDetail.shouldShowPatientSoapFormDetail
      ? patientSoapFormDetail.patientId
      : selectedPatientId
        ? selectedPatientId
        : soappatientId;
    dispatch(
      clientIntakeFormGet({ patientId: patientId, /* practitionerId: UserId, */ token: token })
    );
  }, [stepIndex]);

  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId: UserId, */ token: token,
      })
    );
  }, []);
  let date = new Date().toLocaleDateString("en-CA");
  let currentDate = new Date().toJSON().slice(0, 10);
  const [dominantHandData, setDominantHandData] = useState([]);

  const { DATE, dateofinjury, Patient, doctorSign, doctorDate, initialCheck, updateCheck } =
    form.formField;

  // const {
  //   Patient: PatientV,
  //   DATE: DATEV,
  //   dateofinjury: dateofinjuryV,
  // } = values;

  // console.log("values", values);
  // console.log("mailnvalues", dominantHandData);

  return (
    <SoftBox>
      <Formik
        initialValues={{
          ...initialValues,
          ...doctorShopFromDetails,
          ...clientIntakeformDetails1,
          ...patientName,
        }}
        enableReinitialize
        onSubmit={(values) => {
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
                ? selectedPatientId
                : soappatientId,
            // practitionerId: UserId,
            page5: values,
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
          // setEightthFormData(formik.values);
          return (
            <Grid>
              <SoftBox lineHeight={0}>
                <h2 style={{ textAlign: "center" }} fontWeight="bold">
                  DUTIES PERFORMED UNDER DURESS AT WORK AND HOME
                </h2>
                {/* <SoftTypography variant="button" fontWeight="regular" color="text">
                      Mandatory informations
                    </SoftTypography> */}
              </SoftBox>
              <FieldArray
                name="dutiesPage"
                render={(arrayhelpers, push) => {
                  console.log("formik.values", formik.values);
                  return (
                    <>
                      {formik.values.dutiesPage.map((data, index) => {
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
                            <SoftBox mt={1.5}>
                              {/* <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={12} lg={6}>
                      <span className="spanLab">Patient</span>
                      <input
                        type={Patient.type}
                        label={Patient.label}
                        name={Patient.name}
                        value={formik.values.PatientV}
                        onChange={formik.handleChange}
                        placeholder={Patient.placeholder}
                        className="accidentHOMEInput1"
                        // error={errors.Patient && touched.Patient}
                        //   success={PatientV.length > 0 && !errors.Patient}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={6} lg={3}>
                      <span className="spanLab" style={{marginRight:"25px"}}>Date</span>
                      <input
                        max={date}
                        min={date}
                        type={DATE.type}
                        label={DATE.label}
                        name={DATE.name}
                        value={currentDate}
                        onChange={formik.handleChange}
                        className="form5date"
  
                        // placeholder={DATE.placeholder}
                        // error={errors.DATE && touched.DATE}
                        //   success={DATEV.length > 0 && !errors.DATE}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3} md={6} lg={3}>
                      <span className="spanLab">Date of Injury</span>
  
                      <input
                        max={date}
                        type={dateofinjury.type}
                        label={dateofinjury.label}
                        name={dateofinjury.name}
                        value={formik.values.dateofinjuryV}
                        onChange={formik.handleChange}
                        className="form5date"
  
                        // placeholder={dateofinjury.placeholder}
                        // error={errors.dateofinjury && touched.dateofinjury}
                        //   success={dateofinjuryV.length > 0 && !errors.dateofinjury}
                      />
                    </Grid>
                  </Grid> */}
                              <TopInfo formik={formik} index={index} />
                              <Grid container spacing={3} pt={2}>
                                <Grid item lg={4}>
                                  <span className="spanLab">Initial &nbsp;</span>
                                  <Checkbox
                                    name={initialCheck.name}
                                    // checked={formik.values.initialCheckV}
                                    // onChange={formik.handleChange}
                                    checked={formik.values?.dutiesPage[index]?.initialCheckV}
                                    onChange={(e) =>
                                      formik.setFieldValue(
                                        `dutiesPage[${index}].initialCheckV`,
                                        e.target.checked
                                      )
                                    }
                                  />
                                  &nbsp;&nbsp;
                                  <span className="spanLab">Update &nbsp;</span>
                                  <Checkbox
                                    name={updateCheck.name}
                                    // checked={formik.values.updateCheckV}
                                    // onChange={formik.handleChange}
                                    checked={formik.values?.dutiesPage[index]?.updateCheckV}
                                    onChange={(e) =>
                                      formik.setFieldValue(
                                        `dutiesPage[${index}].updateCheckV`,
                                        e.target.checked
                                      )
                                    }
                                  />
                                </Grid>
                              </Grid>

                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={12}>
                                  <SoftTypography
                                    component="label"
                                    variant="h6"
                                    className="duties-title"
                                    fontWeight=""
                                    textTransform=""
                                  >
                                    Please check all that apply to your WORK because of the
                                    accident.
                                  </SoftTypography>
                                </Grid>
                              </Grid>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} ml={1.5}>
                                  <UpperCheckboxes formik={formik} form={form} index={index} />
                                </Grid>
                              </Grid>
                              <br />
                              <Grid item xs={12} sm={12}>
                                <SoftTypography
                                  component="label"
                                  variant="h6"
                                  fontWeight=""
                                  textTransform=""
                                  className="duties-title"
                                >
                                  Please check all that apply to your HOME/DOMESTIC duties because
                                  of the accident.
                                </SoftTypography>
                              </Grid>
                              <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} ml={1.5}>
                                  <LowerCheckboxes formik={formik} form={form} index={index} />
                                </Grid>
                              </Grid>
                            </SoftBox>
                            <Grid container spacing={3}>
                              <Grid
                                item
                                xs={12}
                                sm={6}
                                className="duties-signature-field-container"
                              >
                                <span className="spanLab" style={{ marginBottom: "15px" }}>
                                  Signature
                                </span>
                                {/* <FormField
                                  type={doctorSign.type}
                                  // label="Signature"
                                  name={doctorSign.name}
                                  // name={`dutiesPage[${index}].${doctorSign.name}`}
                                  // value={formik.values?.dutiesPage[index]?.doctorSignV}
                                  // value={formik.values.doctorSignV}
                                  // onChange={formik.handleChange}
                                  value={formik.values?.dutiesPage[index]?.[doctorSign.name]}
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      `dutiesPage[${index}].${doctorSign.name}`,
                                      e.target.value
                                    );
                                  }}
                                // placeholder={Patient.placeholder}
                                // error={errors.Patient && touched.Patient}
                                //   success={PatientV.length > 0 && !errors.Patient}
                                /> */}

                                {formik.values?.dutiesPage[index]?.[doctorSign.name] !== "" ? (
                                  <Grid item xs={12} lg={6} sm={6} className="parentClass">
                                    <img
                                      src={formik.values?.dutiesPage[index]?.[doctorSign.name]}
                                    />
                                    <h5 style={{ fontSize: "15px" }}>Sign here</h5>
                                  </Grid>
                                ) : (
                                  <Grid item xs={12} md={6} lg={4}>
                                    <SignaturePad
                                      canvasProps={{ width: 240, height: 150 }}
                                      ref={sigPad}
                                      penColor="black"
                                      backgroundColor="#f1f1f1"
                                      placeholder="sign"
                                      onBegin={(e) => onBeginfun1(e.isTrusted)}
                                    />
                                    <div className="saveAndClear">
                                      <SoftButton
                                        onClick={clear}
                                        style={{ marginRight: "10px" }}
                                        disabled={signBeginOfc}
                                      >
                                        Clear
                                      </SoftButton>
                                      <SoftButton
                                        disabled={signBeginOfc}
                                        onClick={() => {
                                          formik.setFieldValue(
                                            `dutiesPage[${index}].${doctorSign.name}`,
                                            sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                                          );
                                        }}
                                      >
                                        Save
                                      </SoftButton>
                                    </div>
                                  </Grid>
                                )}
                              </Grid>

                              <Grid item xs={12} sm={3} className="duties-date-field-container">
                                <span className="spanLab" style={{ marginBottom: "15px" }}>
                                  Date
                                </span>
                                <FormField
                                  type={doctorDate.type}
                                  // label="Date"
                                  name={doctorDate.name}
                                  value={formik.values?.dutiesPage[index]?.doctorDateV}
                                  onChange={(e) => {
                                    formik.setFieldValue(
                                      `dutiesPage[${index}].doctorDate`,
                                      e.target.value
                                    );
                                  }}
                                // value={formik.values.doctorDateV}
                                // onChange={formik.handleChange}

                                // placeholder={DATE.placeholder}
                                // error={errors.DATE && touched.DATE}
                                //   success={DATEV.length > 0 && !errors.DATE}
                                />
                              </Grid>
                            </Grid>
                          </>
                        );
                      })}
                      <Box mt={1}>
                        <div>
                          <SoftButton
                            type="button"
                            variant="gradient"
                            color="dark"
                            onClick={() => {
                              arrayhelpers.insert(formik.values.dutiesPage.length + 1, {
                                ...formik.values.dutiesPage[formik.values.dutiesPage.length - 1],
                                doctorSign: "",
                              });
                            }}
                          >
                            Add new page
                          </SoftButton>
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
            </Grid>
          );
        }}
      </Formik>
    </SoftBox>
  );
}

// typechecking props for Symptoms
DutiesPerformed.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default DutiesPerformed;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 700;
  ${media.miniTab} {
    font-size: 16px;
  }
  ${media.mobile} {
    font-size: 15px;
  }
`;
const ImageLabel = styled(Label)`
  justify-content: center;
  display: flex;

  height: 100px;
  cursor: pointer;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
`;

const Preview = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

const LabelButton = styled(Label)`
  justify-content: center;
`;

const Input = styled.input`
  display: none;
  visibility: hidden;
  height: 40px;
  width: 350px;
  font-weight: 700;
  padding: 5px;
  font-size: 17px;
  ${media.miniTab} {
    width: 250px;
    font-size: 15px;
  }
  ${media.mobile} {
    width: 200px;
  }
`;
