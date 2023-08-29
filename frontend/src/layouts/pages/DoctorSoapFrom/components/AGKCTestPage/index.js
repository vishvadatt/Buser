import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import SoftBox from "components/SoftBox";
import "./style.css";
import InfoCommon from "../InfoCommon/index";
import { Grid } from "@mui/material";
import AgpaFigure from "../../../../../assets/images/excercisetool/acgpfigure.png";
import NextButton from "../../NextButton";
import { useDispatch } from "react-redux";
import { doctorShopFormDataAction } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import { Form, Formik, FieldArray } from "formik";
import initialValues from "./schema/initialValues";
import PropTypes from "prop-types";
import SoftButton from "components/SoftButton";
import form from "./schema/form";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import SoftTypography from "components/SoftTypography";
import FirstPart from "./components/FirstPart.js";

function index({ stepIndex, setActiveStep }) {
  console.log("form", form);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  console.log("soappatientId11..", soappatientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);

  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  const dispatch = useDispatch();

  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page22);
  console.log("doctorShopFromDetails21..", doctorShopFromDetails);
  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /* practitionerId: UserId, */ token: token }));
  // }, []);
  useEffect(() => {
    console.log("running log 22.");
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
  }, [stepIndex]);

  // console.log("formdata", values);

  return (
    <SoftBox>
      <Formik
        initialValues={{ ...initialValues, ...doctorShopFromDetails }}
        enableReinitialize
        onSubmit={(values) => {
          console.log("lllll", values);
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            practitionerId: UserId,
            page22: values,
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
          const { values } = formik;
          const {
            HookCervicalSitupsControl: HookCervicalSitupsControlV,
            HookCervicalSitups: HookCervicalSitupsV,
            HookREPControl: HookREPControlV,
            HookREP: HookREPV,
            PUpPosittoScapControl: PUpPosittoScapControlV,
            PUpPosittoScap: PUpPosittoScapV,
            BreathingControl: BreathingControlV,
            Breathing: BreathingV,
            SideBridgeonElbowFtControl: SideBridgeonElbowFtControlV,
            SideBridgeonElbowFt: SideBridgeonElbowFtV,
            SittingSideBendsArmsCrossedControl: SittingSideBendsArmsCrossedControlV,
            SittingSideBendsArmsCrossed: SittingSideBendsArmsCrossedV,
            SupineLegLiftsintoAbdControl: SupineLegLiftsintoAbdControlV,
            SupineLegLiftsintoAbd: SupineLegLiftsintoAbdV,
            SidelyingInnerThighLiftsControl: SidelyingInnerThighLiftsControlV,
            SidelyingInnerThighLifts: SidelyingInnerThighLiftsV,
            ProneForefootBlockSqueezesControl: ProneForefootBlockSqueezesControlV,
            ProneForefootBlockSqueezes: ProneForefootBlockSqueezesV,
            HookWallAbAdWideControl: HookWallAbAdWideControlV,
            HookWallAbAdWide: HookWallAbAdWideV,
            AGKCNotes: AGKCNotesV,
          } = values;

          console.log("start", HookCervicalSitupsControlV);
          return (
            <>
              <Box>
                <InfoCommon formik={formik} />
              </Box>
              <Grid>
                <FieldArray
                  name="AGKCDetail"
                  render={(arrayhelpers, push) => {
                    return (
                      <>
                        {formik.values.AGKCDetail.map((data, i) => {
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
                              <Box>
                                <div>
                                  <p className="agkctitle">
                                    <span>AGKC Muscle Test Exercises: </span>
                                  </p>
                                </div>
                                <Grid container spacing={2}>
                                  <Grid item md={12} lg={8} xs={12}>
                                    <FirstPart formik={formik} index={i} />
                                  </Grid>
                                  <Grid item md={12} lg={4} xs={12} className="bodyimg">
                                    <img src={AgpaFigure} height="auto" width="auto" />
                                  </Grid>
                                </Grid>
                                <Grid mt={4}>
                                  <div className="agkcnotes">
                                    <p>AGKC Notes: </p>
                                    <textarea
                                      label="AGKCNotes"
                                      name={`AGKCDetail[${i}].AGKCNotes`}
                                      value={formik.values?.AGKCDetail[i]?.AGKCNotes}
                                      onChange={(e) =>
                                        formik.setFieldValue(
                                          `AGKCDetail[${i}].AGKCNotes`,
                                          e.target.value
                                        )
                                      }
                                    />
                                  </div>
                                </Grid>
                              </Box>
                            </>
                          );
                        })}
                        <Box mt={1}>
                          <div>
                            <button
                              type="button"
                              className="agkcbtn"
                              onClick={() =>
                                arrayhelpers.insert(formik.values.AGKCDetail.length + 1)
                              }
                            >
                              New AGKC Test Page
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
