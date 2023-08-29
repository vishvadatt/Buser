import { Button, Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import "./style.css";
import InfoCommon from "../InfoCommon/index";
// import front from "../../../../../assets/images/excercisetool/front.png";
// import left from "../../../../../assets/images/excercisetool/left.png";
// import right from "../../../../../assets/images/excercisetool/right.png";
// import humanBodyDiagram from "../../../../../assets/images/excercisetool/humanbodydigram.png";
import NextButton from "../../NextButton";
import { useDispatch } from "react-redux";
import { doctorShopFormDataAction } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import initialValues from "./schema/initialValues";
import PropTypes from "prop-types";
import SoftButton from "components/SoftButton";
import FullBody from "./components/fullBody";
import LeftBody from "./components/leftBody";
import RightBody from "./components/rightBody";
import BodyMap from "./components/bodyMap";
import AnalysisPart from "./components/analysisPart";
import { Form, Formik, FieldArray } from "formik";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { stepIndexSoapForm } from "store/actions/actions";

function index({ stepIndex, setActiveStep }) {
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  console.log("soappatientId11..", soappatientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  console.log("userId11..", UserId);
  // const { values, touched, formField, errors, setFieldValue, handleChange } = formData;
  // console.log("formData2020", formData);
  // const {
  //   CrossPatternCONTRAIPSIControl,
  //   CrossPatternCONTRAIPSI,
  //   COGLoadsRLControl,
  //   COGLoadsRL,
  //   RLKnIRERControl,
  //   RLKnIRER,
  //   RLHipELEVControl,
  //   RLHipELEV,
  //   RLHipLATShiftControl,
  //   RLHipLATShift,
  //   RLHipFLEXEXTdecrControl,
  //   RLHipFLEXEXTdecr,
  //   RLHipROTforFLEXEXTControl,
  //   RLHipROTforFLEXEXT,
  //   RLPelvicFLEXEXTdecrControl,
  //   RLPelvicFLEXEXTdecr,
  //   RLPelvicROTIncrDecrControl,
  //   RLPelvicROTIncrDecr,
  //   TorsoCROTControl,
  //   TorsoCROT,
  //   TorsoOffsetRLControl,
  //   TorsoOffsetRL,
  //   TorsoLATFLEXControl,
  //   TorsoLATFLEX,
  //   HATLoadLRControl,
  //   HATLoadLR,
  //   RLFootIRERControl,
  //   RLFootIRER,
  //   RLCductIRERControl,
  //   RLCductIRER,
  //   RLArmSwingControl,
  //   RLArmSwing,
  //   RLShFLEXEXTControl,
  //   RLShFLEXEXT,
  //   RLArmCarryingAngleIncrDecrControl,
  //   RLArmCarryingAngleIncrDecr,
  //   HOHControl,
  //   HOH,
  //   HBBControl,
  //   HBB,
  //   DFControl,
  //   DF,
  //   Gaitnotes,
  // } = formField;
  // console.log("valuesform", values);

  const dispatch = useDispatch();

  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page20);
  const newPage21 = useSelector((state) => state.auth.doctorShopForm?.newP21);
  console.log("doctorShopFromDetails21..", doctorShopFromDetails);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const soapIndex = useSelector((state) => state?.auth?.stepIndexSoapForm);
  let patientId = selectedPatientId ? selectedPatientId : soappatientId;

  useEffect(() => {
    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(getDoctorShopFormDataAction({ patientId: patientId, token: token }));
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

  const newIntital = soapIndex === stepIndex + 1 ? doctorShopFromDetails : newPage21;

  return (
    <SoftBox>
      <Formik
        initialValues={{ ...initialValues, ...doctorShopFromDetails, ...newPage21 }}
        enableReinitialize
        onSubmit={(values) => {
          console.log("lllll", values);
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            page20: values,
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
          const { values } = formik;
          const {
            frontrightshoulder: frontrightshoulderV,
            frontadamsapple: frontadamsappleV,
            frontleftshoulder: frontleftshoulderV,
            frontchest: frontchestV,
            frontrightabnominal: frontrightabnominalV,
            frontabnominal: frontabnominalV,
            frontleftabnominal: frontleftabnominalV,
            frontrightthip: frontrightthipV,
            frontleftthip: frontleftthipV,
            frontrightknee: frontrightkneeV,
            frontleftknee: frontleftkneeV,
            frontrightankle: frontrightankleV,
            frontleftankle: frontleftankleV,
            CrossPatternCONTRAIPSIControl: CrossPatternCONTRAIPSIControlV,
            CrossPatternCONTRAIPSI: CrossPatternCONTRAIPSIV,
            COGLoadsRLControl: COGLoadsRLControlV,
            COGLoadsRL: COGLoadsRLV,
            RLKnIRERControl: RLKnIRERControlV,
            RLKnIRER: RLKnIRERV,
            RLHipELEVControl: RLHipELEVControlV,
            RLHipELEV: RLHipELEVV,
            RLHipLATShiftControl: RLHipLATShiftControlV,
            RLHipLATShift: RLHipLATShiftV,
            RLHipFLEXEXTdecrControl: RLHipFLEXEXTdecrControlV,
            RLHipFLEXEXTdecr: RLHipFLEXEXTdecrV,
            RLHipROTforFLEXEXTControl: RLHipROTforFLEXEXTControlV,
            RLHipROTforFLEXEXT: RLHipROTforFLEXEXTV,
            RLPelvicFLEXEXTdecrControl: RLPelvicFLEXEXTdecrControlV,
            RLPelvicFLEXEXTdecr: RLPelvicFLEXEXTdecrV,
            RLPelvicROTIncrDecrControl: RLPelvicROTIncrDecrControlV,
            RLPelvicROTIncrDecr: RLPelvicROTIncrDecrV,
            TorsoCROTControl: TorsoCROTControlV,
            TorsoCROT: TorsoCROTV,
            TorsoOffsetRLControl: TorsoOffsetRLControlV,
            TorsoOffsetRL: TorsoOffsetRLV,
            TorsoLATFLEXControl: TorsoLATFLEXControlV,
            TorsoLATFLEX: TorsoLATFLEXV,
            HATLoadLRControl: HATLoadLRControlV,
            HATLoadLR: HATLoadLRV,
            RLFootIRERControl: RLFootIRERControlV,
            RLFootIRER: RLFootIRERV,
            RLCductIRERControl: RLCductIRERControlV,
            RLCductIRER: RLCductIRERV,
            RLArmSwingControl: RLArmSwingControlV,
            RLArmSwing: RLArmSwingV,
            RLShFLEXEXTControl: RLShFLEXEXTControlV,
            RLShFLEXEXT: RLShFLEXEXTV,
            RLArmCarryingAngleIncrDecrControl: RLArmCarryingAngleIncrDecrControlV,
            RLArmCarryingAngleIncrDecr: RLArmCarryingAngleIncrDecrV,
            HOHControl: HOHControlV,
            HOH: HOHV,
            HBBControl: HBBControlV,
            HBB: HBBV,
            DFControl: DFControlV,
            DF: DFV,
            Gaitnotes: GaitnotesV,
          } = values;
          console.log("start");
          return (
            <>
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
                        {formik.values.PosturePage.map((data, i) => {
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
                                <Box mt={4}>
                                  <AnalysisPart formik={formik} index={i} />
                                </Box>
                              </Box>
                            </>
                          );
                        })}
                        <Box mt={1}>
                          <div>
                            <button
                              type="button"
                              className="posturrbtn"
                              onClick={
                                () => arrayhelpers.insert(formik.values.PosturePage.length + 1)
                                // arrayhelpers.push(formik.values.excerciseDetails)
                              }
                            >
                              New Practitioner Posture Tool
                            </button>
                          </div>
                        </Box>
                      </>
                    );
                  }}
                />
              </Grid>

              <div style={{ float: "right" }}>
                <SoftButton
                  className="nxt1"
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
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
