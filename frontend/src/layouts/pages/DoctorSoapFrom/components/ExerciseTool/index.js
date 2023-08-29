import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "./style.css";
import InfoCommon from "../InfoCommon/index";
import NextButton from "../../NextButton";
import { useDispatch } from "react-redux";
import { doctorShopFormDataAction } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import { Form, Formik, FieldArray } from "formik";
import initialValues from "./schema/initialValues";
import PropTypes from "prop-types";
import SoftButton from "components/SoftButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import SideBody from "./components/SideBody";
import ExcerciseOne from "./components/ExcerciseOne";
import BodyDiamesiontable from "./components/BodyDiamesiontable";
import FullBody from "./components/FullBody";
import ExcerciseTwo from "./components/ExcerciseTwo";
import EndPart from "./components/EndPart";

function index({ stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page19);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  // const [data, setdata] = useState(values);
  // const [data, setdata] = useState(values);
  // console.log("valuesdata", data);

  // const { values, touched, formField, errors, setFieldValue, handleChange } = formData;

  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({
  //       patientId: soappatientId,
  //       /* practitionerId: UserId, */ token: token,
  //     })
  //   );
  // }, []);
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
  }, [stepIndex]);

  return (
    <SoftBox>
      <Formik
        initialValues={{ ...initialValues, ...doctorShopFromDetails }}
        enableReinitialize
        onSubmit={(values) => {
          console.log("qq", values);
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
                ? selectedPatientId
                : soappatientId,
            // practitionerId: UserId,
            page19: values,
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
          console.log("formik...", formik.values);

          const { values } = formik;

          const {
            humanSidebodyPointsEars: humanSidebodyPointsEarsV,
            humanSidebodyPointsShoulder: humanSidebodyPointsShoulderV,
            humanSidebodyPointsArm: humanSidebodyPointsArmV,
            humanSidebodyPointsForearm: humanSidebodyPointsForearmV,
            humanSidebodyPointsWrist: humanSidebodyPointsWristV,
            humanSidebodyPointsKnee: humanSidebodyPointsKneeV,
            humanSidebodyPointsAnkle: humanSidebodyPointsAnkleV,

            humanexcerciseone: humanexcerciseoneV,
            humanCheckone: humanCheckoneV,

            humanexcerciseone1: humanexcerciseone1V,
            humanexcerciseone2: humanexcerciseone2V,
            humanexcerciseone3: humanexcerciseone3V,
            humanexcerciseonesub3: humanexcerciseonesub3V,
            humanexcerciseone4: humanexcerciseone4V,
            humanexcerciseone5: humanexcerciseone5V,
            humanexcerciseone6: humanexcerciseone6V,
            humanexcerciseone7: humanexcerciseone7V,
            humanexcerciseone8: humanexcerciseone8V,
            humanexcerciseone9: humanexcerciseone9V,
            humanexcerciseone10: humanexcerciseone10V,
            humanexcerciseone11: humanexcerciseone11V,
            humanexcerciseone12: humanexcerciseone12V,
            humanexcerciseone13: humanexcerciseone13V,
            humanexcerciseone14: humanexcerciseone14V,
            humanexcerciseonesub14: humanexcerciseonesub14V,
            humanexcerciseone15: humanexcerciseone15V,

            leftshoulderdesc: leftshoulderdescV,
            rightshoulderdesc: rightshoulderdescV,
            leftthoricdesc: leftthoricdescV,
            rightthoricdesc: rightthoricdescV,
            leftpelvisdesc: leftpelvisdescV,
            rightpelvisdesc: rightpelvisdescV,
            lefthipdesc: lefthipdescV,
            righthipdesc: righthipdescV,
            leftkneedesc: leftkneedescV,
            rightkneedesc: rightkneedescV,
            leftankledesc: leftankledescV,
            rightankledesc: rightankledescV,
            leftheaddesc: leftheaddescV,
            rightheaddesc: rightheaddescV,

            humanFullbodyPointsrightshoulder: humanFullbodyPointsrightshoulderV,
            check: checkV,
            humanFullbodyPointsadamsapple: humanFullbodyPointsadamsappleV,
            humanFullbodyPointsleftshoulder: humanFullbodyPointsleftshoulderV,
            humanFullbodyPointschest: humanFullbodyPointschestV,
            humanFullbodyPointsleftabdominal: humanFullbodyPointsleftabdominalV,
            humanFullbodyPointsabdominal: humanFullbodyPointsabdominalV,
            humanFullbodyPointsrightabdominal: humanFullbodyPointsrightabdominalV,
            humanFullbodyPointslefthip: humanFullbodyPointslefthipV,
            humanFullbodyPointsrighthip: humanFullbodyPointsrighthipV,
            humanFullbodyPointsleftknee: humanFullbodyPointsleftkneeV,
            humanFullbodyPointsrighttknee: humanFullbodyPointsrighttkneeV,
            humanFullbodyPointsleftankle: humanFullbodyPointsleftankleV,
            humanFullbodyPointsrighankle: humanFullbodyPointsrighankleV,

            humanexcercisetwo1: humanexcercisetwo1V,
            humanexcercisetwosub1: humanexcercisetwosub1V,
            humanexcercisetwo2: humanexcercisetwo2V,
            humanexcercisetwo3: humanexcercisetwo3V,
            humanexcercisetwo4: humanexcercisetwo4V,
            humanexcercisetwosub4: humanexcercisetwosub4V,
            humanexcercisetwo5: humanexcercisetwo5V,
            humanexcercisetwo6: humanexcercisetwo6V,
            humanexcercisetwosub6: humanexcercisetwosub6V,
            humanexcercisetwo7: humanexcercisetwo7V,
            humanexcercisetwo8: humanexcercisetwo8V,
            humanexcercisetwosub8: humanexcercisetwosub8V,
            humanexcercisetwo9: humanexcercisetwo9V,
            humanexcercisetwo10: humanexcercisetwo10V,
            humanexcercisetwo11: humanexcercisetwo11V,
            humanexcercisetwosub11: humanexcercisetwosub11V,
            humanexcercisetwo12: humanexcercisetwo12V,
            humanexcercisetwo13: humanexcercisetwo13V,
            humanexcercisetwosub13: humanexcercisetwosub13V,
            humanexcercisetwo14: humanexcercisetwo14V,
            humanexcercisetwosub14: humanexcercisetwosub14V,
            humanexcercisetwo15: humanexcercisetwo15V,
            humanexcercisetwo16: humanexcercisetwo16V,
            humanexcercisetwo17: humanexcercisetwo17V,

            ClientName: ClientNameV,
            Chiefcomplaint: ChiefcomplaintV,
            Painlevel: PainlevelV,
            Practitioner: PractitionerV,
            Date: DateV,
            physicianclearance: physicianclearanceV,
            yes: yesV,
            no: noV,
          } = values;

          return (
            <>
              {/* common components */}
              <InfoCommon formik={formik} />
              <Grid>
                <FieldArray
                  name="excerciseDetails"
                  render={(arrayhelpers, push) => {
                    console.log("formik.values.excerciseDetails", formik.values.excerciseDetails);

                    return (
                      <>
                        {formik.values.excerciseDetails.map((data, i) => {
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
                              <SoftBox lineHeight={0}>
                                <SoftTypography
                                  variant="h6"
                                  fontWeight="bold"
                                  style={{ marginTop: "15px" }}
                                >
                                  <span
                                    style={{
                                      backgroundColor: "#83FAFD",
                                      padding: "5px",
                                      color: "black",
                                      fontSize: "17px",
                                    }}
                                  >
                                    Additional Notes/Patient Instructions/Treatment Guidelines:
                                  </span>
                                </SoftTypography>

                                <SoftTypography
                                  variant="h6"
                                  fontWeight=""
                                  color="text"
                                  mt={1}
                                  style={{
                                    fontSize: "17px",
                                    backgroundColor: "#F1F4FF",
                                    padding: "5px",
                                    paddingBottom: "20px",
                                  }}
                                >
                                  Example:
                                  <br />
                                  <br />
                                  Initial Tx 1x/week for 8 weeks. <br />
                                  Instructed in posture with TS extension, shoulder retraction,
                                  neutral CS and LS with abdominal breathing.
                                  <br /> Pt will pay for 8 Step Program on Website today.
                                  <br /> Pt will get Comprehensive Blood panel and do
                                  neutraceuticals recommended and keep {"pt's"} {"PCP's"} informed
                                  of said regimens.
                                </SoftTypography>
                              </SoftBox>

                              <Box sx={{ flexGrow: 1 }}>
                                <SoftBox mb={2}>
                                  <SoftTypography>
                                    <h3 className="Tooltitle">
                                      <span> Practitioner Posture Excercise Tool</span>
                                    </h3>
                                  </SoftTypography>
                                  <SoftTypography
                                    variant="button"
                                    fontWeight="regular"
                                    color="text"
                                  >
                                    <span className="vvx">DYSFUNCTION(D)/COMPENSATION(C)</span>
                                  </SoftTypography>
                                </SoftBox>

                                <Grid container spacing={2}>
                                  <Grid
                                    item
                                    sm={12}
                                    md={6}
                                    lg={2}
                                    xs={12}
                                    className="imgbody container"
                                  >
                                    <SideBody formik={formik} index={i} />
                                  </Grid>
                                  <Grid item sm={12} md={6} lg={3} xs={12} className="exe1">
                                    <ExcerciseOne formik={formik} index={i} />
                                  </Grid>
                                  <Grid item sm={12} md={12} lg={2} mt={2} xs={12}>
                                    <BodyDiamesiontable formik={formik} index={i} />
                                  </Grid>
                                  <Grid
                                    item
                                    sm={12}
                                    md={6}
                                    lg={2}
                                    xs={12}
                                    className="imgbody container"
                                  >
                                    <FullBody formik={formik} index={i} />
                                  </Grid>
                                  <Grid item sm={12} md={6} lg={3} xs={12} className="exe1">
                                    <ExcerciseTwo formik={formik} index={i} />
                                  </Grid>
                                </Grid>
                              </Box>

                              <Box>
                                <EndPart formik={formik} index={i} />
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
                                () => arrayhelpers.insert(formik.values.excerciseDetails.length + 1)
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
