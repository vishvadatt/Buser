import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import SoftBox from "components/SoftBox";
import "./style.css";
import InfoCommon from "../InfoCommon/index";
import { Button, Checkbox, Grid } from "@mui/material";
import NextButton from "../../NextButton";
import { useDispatch } from "react-redux";
import { doctorShopFormDataAction } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import { Form, Formik, FieldArray } from "formik";
import initialValues from "./schema/initialValues";
import PropTypes from "prop-types";
import SoftButton from "components/SoftButton";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import SoftTypography from "components/SoftTypography";
import FirstPart from "./components/FirstPart.js";
import Table from "./components/Table.js";
import SecondPart from "./components/SecondPart.js";
function index({ stepIndex, setActiveStep }) {
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  console.log("soappatientId11..", soappatientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  console.log("userId11..", UserId);
  // const { values, touched, formField, errors, setFieldValue, handleChange } = formData;

  // console.log("first", formData);
  // console.log("first12", values);

  const dispatch = useDispatch();

  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page21);
  console.log("doctorShopFromDetails21..", doctorShopFromDetails);
  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /* practitionerId: UserId, */ token: token }));
  // }, []);
  useEffect(() => {
    console.log("running log 21.");
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
          console.log("lllll", values);
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            page21: values,
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
          // console.log("formik21", formik.values);
          const { values } = formik;
          console.log("vardoh", formik);
          const {
            COGTensionBreathingPRControl: COGTensionBreathingPRControlV,
            COGTensionBreathingPR: COGTensionBreathingPRV,
            RombergTestControl: RombergTestControlV,
            RombergTest: RombergTestV,
            StandingHOHPTBothControl: StandingHOHPTBothControlV,
            StandingHOHPTBoth: StandingHOHPTBothV,
            HoHminus: HoHminusV,
            HoHplusone: HoHplusoneV,
            HoHplustwo: HoHplustwoV,
            HoHplusthree: HoHplusthreeV,
            HoHOcc: HoHOccV,
            HoHC: HoHCV,
            HoHSh: HoHShV,
            HoHSc: HoHScV,
            HoHT1: HoHT1V,
            HoHT: HoHTV,
            HoHMT: HoHMTV,
            HoHL: HoHLV,
            HoHP: HoHPV,
            HoHSa: HoHSaV,
            HoHH: HoHHV,
            HoHK: HoHKV,
            HoHA: HoHAV,
            PTminus: PTminusV,
            PTplusone: PTplusoneV,
            PTplustwo: PTplustwoV,
            PTplusthree: PTplusthreeV,
            PTOcc: PTOccV,
            PTC: PTCV,
            PTSh: PTShV,
            PTSc: PTScV,
            PTT1: PTT1V,
            PTT: PTTV,
            PTMT: PTMTV,
            PTL: PTLV,
            PTP: PTPV,
            PTSa: PTSaV,
            PTH: PTHV,
            PTK: PTKV,
            PTA: PTAV,
            Bothminus: BothminusV,
            Bothplusone: BothplusoneV,
            Bothplustwo: BothplustwoV,
            Bothplusthree: BothplusthreeV,
            BothOcc: BothOccV,
            BothC: BothCV,
            BothSh: BothShV,
            BothSc: BothScV,
            BothT1: BothT1V,
            BothT: BothTV,
            BothMT: BothMTV,
            BothL: BothLV,
            BothP: BothPV,
            BothSa: BothSaV,
            BothH: BothHV,
            BothK: BothKV,
            BothA: BothAV,
            CDHypo: CDHypoV,
            CDHyper: CDHyperV,
            CDOcc: CDOccV,
            CDC: CDCV,
            CDSh: CDShV,
            CDSc: CDScV,
            CDT1: CDT1V,
            CDT: CDTV,
            CDMT: CDMTV,
            CDL: CDLV,
            CDP: CDPV,
            CDSa: CDSaV,
            CDH: CDHV,
            CDK: CDKV,
            CDA: CDAV,
            StandingGoalPostsControl: StandingGoalPostsControlV,
            StandingGoalPosts: StandingGoalPostsV,
            StandingTorsoRotationControl: StandingTorsoRotationControlV,
            StandingTorsoRotation: StandingTorsoRotationV,
            StandingWallTestControl: StandingWallTestControlV,
            StandingWallTest: StandingWallTestV,
            StandingWallTestwHOHPTBothControl: StandingWallTestwHOHPTBothControlV,
            StandingWallTestwHOHPTBoth: StandingWallTestwHOHPTBothV,
            StandingWallAngelsControl: StandingWallAngelsControlV,
            StandingWallAngels: StandingWallAngelsV,
            StandingWallLateralBendsReachControl: StandingWallLateralBendsReachControlV,
            StandingWallLateralBendsReach: StandingWallLateralBendsReachV,
            StandingNeckROMControl: StandingNeckROMControlV,
            StandingNeckROM: StandingNeckROMV,
            JawOpeningandLateralDeviationControl: JawOpeningandLateralDeviationControlV,
            JawOpeningandLateralDeviation: JawOpeningandLateralDeviationV,
            GilletSIJFunctionTestControl: GilletSIJFunctionTestControlV,
            GilletSIJFunctionTest: GilletSIJFunctionTestV,
            StandingStorkWalksControl: StandingStorkWalksControlV,
            StandingStorkWalks: StandingStorkWalksV,
            TrendelenburgTestControl: TrendelenburgTestControlV,
            TrendelenburgTest: TrendelenburgTestV,
            StepUpsControl: StepUpsControlV,
            StepUps: StepUpsV,
            StandingToeTouchControl: StandingToeTouchControlV,
            StandingToeTouch: StandingToeTouchV,
            SquatControl: SquatControlV,
            Squat: SquatV,
            LungesControl: LungesControlV,
            Lunges: LungesV,
            SittingAnkleKneeCrossoverControl: SittingAnkleKneeCrossoverControlV,
            SittingAnkleKneeCrossover: SittingAnkleKneeCrossoverV,
            SittingCatsandDogsControl: SittingCatsandDogsControlV,
            SittingCatsandDogs: SittingCatsandDogsV,
            SittingSingleHipLiftsControl: SittingSingleHipLiftsControlV,
            SittingSingleHipLifts: SittingSingleHipLiftsV,
            HooklyingPositionControl: HooklyingPositionControlV,
            HooklyingPosition: HooklyingPositionV,
            HooklyingLegRotationsControl: HooklyingLegRotationsControlV,
            HooklyingLegRotations: HooklyingLegRotationsV,
            LyingSupineControl: LyingSupineControlV,
            LyingSupine: LyingSupineV,
            SBControl: SBControlV,
            SB: SBV,
            IMLSIJTestControl: IMLSIJTestControlV,
            IMLSIJTest: IMLSIJTestV,
            LyingProneControl: LyingProneControlV,
            LyingProne: LyingProneV,
            ProneSingleLegLiftsControl: ProneSingleLegLiftsControlV,
            ProneSingleLegLifts: ProneSingleLegLiftsV,
            SupineSingleLegActiveBridgesControl: SupineSingleLegActiveBridgesControlV,
            SupineSingleLegActiveBridges: SupineSingleLegActiveBridgesV,
          } = values;
          console.log("HoHminusV", HoHminusV);
          return (
            <>
              <Box>
                <InfoCommon formik={formik} />
              </Box>
              <Grid>
                <FieldArray
                  name="FunctionalDetails"
                  render={(arrayhelpers, push) => {
                    console.log("formik.values.FunctionalDetails", formik.values.FunctionalDetails);
                    return (
                      <>
                        {formik.values.FunctionalDetails.map((data, i) => {
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
                                  <div>
                                    <p className="maintitle">
                                      <span>Funcational Tests:</span>
                                    </p>
                                  </div>
                                  <FirstPart formik={formik} index={i} />
                                  {/* <div style={{ marginBottom: "15px" }}>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            name={`FunctionalDetails[${i}].COGTensionBreathingPRControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.COGTensionBreathingPRControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].COGTensionBreathingPRControl`,
                                                e.target.value
                                              )
                                            }
                                            label="COGTensionBreathingPRControl"
                                            // name="COGTensionBreathingPRControl"
                                            // value={COGTensionBreathingPRControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitle">
                                          <p>Standing (COG, Tension, Breathing, PR)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12}>
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="COGTensionBreathingPR"
                                            name={`FunctionalDetails[${i}].COGTensionBreathingPR`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.COGTensionBreathingPR
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].COGTensionBreathingPR`,
                                                e.target.value
                                              )
                                            }
                                            // name="COGTensionBreathingPR"
                                            // value={COGTensionBreathingPRV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div style={{ marginBottom: "15px" }}>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="RombergTestControl"
                                            name={`FunctionalDetails[${i}].RombergTestControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.RombergTestControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].RombergTestControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="RombergTestControl"
                                            // value={RombergTestControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitle">
                                          <p>Romberg Test</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12}>
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="RombergTest"
                                            name={`FunctionalDetails[${i}].RombergTest`}
                                            value={formik.values?.FunctionalDetails[i]?.RombergTest}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].RombergTest`,
                                                e.target.value
                                              )
                                            }
                                            // name="RombergTest"
                                            // value={RombergTestV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div style={{ marginBottom: "15px" }}>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingHOHPTBothControl"
                                            name={`FunctionalDetails[${i}].StandingHOHPTBothControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingHOHPTBothControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingHOHPTBothControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingHOHPTBothControl"
                                            // value={StandingHOHPTBothControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitle">
                                          <p>Standing HOH, PT, Both</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12}>
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingHOHPTBoth"
                                            name={`FunctionalDetails[${i}].StandingHOHPTBoth`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.StandingHOHPTBoth
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingHOHPTBoth`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingHOHPTBoth"
                                            // value={StandingHOHPTBothV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div> */}
                                  <Table formik={formik} index={i} />
                                  {/* <div className="thead">
                                    <div className="Teststitle">
                                      <p>Primary Tests</p>
                                    </div>
                                    <div className="tablehead">
                                      <table className="table">
                                        <tr className="tableRow">
                                          <th></th>
                                          <th>(-)</th>
                                          <th>+1</th>
                                          <th>+2</th>
                                          <th>+3</th>
                                          <th>Occ</th>
                                          <th>C</th>
                                          <th>Sh</th>
                                          <th>Sc</th>
                                          <th>T1</th>
                                          <th>T</th>
                                          <th>MT</th>
                                          <th>L</th>
                                          <th>P</th>
                                          <th>Sa</th>
                                          <th>H</th>
                                          <th>K</th>
                                          <th>A</th>
                                        </tr>
                                        <tr>
                                          <td className="tableCol">HOH</td>
                                          <td className="tableCol1">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHminus`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHminus}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHminus`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.HoHminus
                                              }
                                              // name="HoHminus"
                                              // value={HoHminusV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHminusV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHplusone`}
                                              value={
                                                formik.values?.FunctionalDetails[i]?.HoHplusone
                                              }
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHplusone`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.HoHplusone
                                              }
                                              // name="HoHplusone"
                                              // value={HoHplusoneV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHplusoneV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHplustwo`}
                                              value={
                                                formik.values?.FunctionalDetails[i]?.HoHplustwo
                                              }
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHplustwo`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.HoHplustwo
                                              }
                                              // name="HoHplustwo"
                                              // value={HoHplustwoV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHplustwoV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHplusthree`}
                                              value={
                                                formik.values?.FunctionalDetails[i]?.HoHplusthree
                                              }
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHplusthree`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.HoHplusthree
                                              }
                                              // name="HoHplusthree"
                                              // value={HoHplusthreeV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHplusthreeV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHOcc`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHOcc}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHOcc`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHOcc}
                                              // name="HoHOcc"
                                              // value={HoHOccV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHOccV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHC`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHC}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHC`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHC}
                                              // name="HoHC"
                                              // value={HoHCV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHCV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHSh`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHSh}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHSh`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHSh}
                                              // name="HoHSh"
                                              // value={HoHShV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHShV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHSc`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHSc}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHSc`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHSc}
                                              // name="HoHSc"
                                              // value={HoHScV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHScV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHT1`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHT1}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHT1`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHT1}
                                              // name="HoHT1"
                                              // value={HoHT1V}
                                              // onChange={formik.handleChange}
                                              // checked={HoHT1V}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHT`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHT}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHT`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHT}
                                              // name="HoHT"
                                              // value={HoHTV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHTV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHMT`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHMT}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHMT`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHMT}
                                              // name="HoHMT"
                                              // value={HoHMTV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHMTV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHL`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHL}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHL`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHL}
                                              // name="HoHL"
                                              // value={HoHLV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHLV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHP`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHP}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHP`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHP}
                                              // name="HoHP"
                                              // value={HoHPV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHPV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHSa`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHSa}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHSa`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHSa}
                                              // name="HoHSa"
                                              // value={HoHSaV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHSaV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHH`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHH}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHH`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHH}
                                              // name="HoHH"
                                              // value={HoHHV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHHV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHK`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHK}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHK`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHK}
                                              // name="HoHK"
                                              // value={HoHKV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHKV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].HoHA`}
                                              value={formik.values?.FunctionalDetails[i]?.HoHA}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].HoHA`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.HoHA}
                                              // name="HoHA"
                                              // value={HoHAV}
                                              // onChange={formik.handleChange}
                                              // checked={HoHAV}
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="tableCol">PT</td>
                                          <td className="tableCol1">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTminus`}
                                              value={formik.values?.FunctionalDetails[i]?.PTminus}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTminus`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTminus}
                                              // name="PTminus"
                                              // value={PTminusV}
                                              // onChange={formik.handleChange}
                                              // checked={PTminusV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTplusone`}
                                              value={formik.values?.FunctionalDetails[i]?.PTplusone}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTplusone`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.PTplusone
                                              }
                                              // name="PTplusone"
                                              // value={PTplusoneV}
                                              // onChange={formik.handleChange}
                                              // checked={PTplusoneV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTplustwo`}
                                              value={formik.values?.FunctionalDetails[i]?.PTplustwo}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTplustwo`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.PTplustwo
                                              }
                                              // name="PTplustwo"
                                              // value={PTplustwoV}
                                              // onChange={formik.handleChange}
                                              // checked={PTplustwoV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTplusthree`}
                                              value={
                                                formik.values?.FunctionalDetails[i]?.PTplusthree
                                              }
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTplusthree`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.PTplusthree
                                              }
                                              // name="PTplusthree"
                                              // value={PTplusthreeV}
                                              // onChange={formik.handleChange}
                                              // checked={PTplusthreeV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTOcc`}
                                              value={formik.values?.FunctionalDetails[i]?.PTOcc}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTOcc`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTOcc}
                                              // name="PTOcc"
                                              // value={PTOccV}
                                              // onChange={formik.handleChange}
                                              // checked={PTOccV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTC`}
                                              value={formik.values?.FunctionalDetails[i]?.PTC}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTC`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTC}
                                              // name="PTC"
                                              // value={PTCV}
                                              // onChange={formik.handleChange}
                                              // checked={PTCV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTSh`}
                                              value={formik.values?.FunctionalDetails[i]?.PTSh}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTSh`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTSh}
                                              // name="PTSh"
                                              // value={PTShV}
                                              // onChange={formik.handleChange}
                                              // checked={PTShV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTSc`}
                                              value={formik.values?.FunctionalDetails[i]?.PTSc}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTSc`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTSc}
                                              // name="PTSc"
                                              // value={PTScV}
                                              // onChange={formik.handleChange}
                                              // checked={PTScV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTT1`}
                                              value={formik.values?.FunctionalDetails[i]?.PTT1}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTT1`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTT1}
                                              // name="PTT1"
                                              // value={PTT1V}
                                              // onChange={formik.handleChange}
                                              // checked={PTT1V}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTT`}
                                              value={formik.values?.FunctionalDetails[i]?.PTT}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTT`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTT}
                                              // name="PTT"
                                              // value={PTTV}
                                              // onChange={formik.handleChange}
                                              // checked={PTTV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTMT`}
                                              value={formik.values?.FunctionalDetails[i]?.PTMT}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTMT`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTMT}
                                              // name="PTMT"
                                              // value={PTMTV}
                                              // onChange={formik.handleChange}
                                              // checked={PTMTV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTL`}
                                              value={formik.values?.FunctionalDetails[i]?.PTL}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTL`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTL}
                                              // name="PTL"
                                              // value={PTLV}
                                              // onChange={formik.handleChange}
                                              // checked={PTLV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTP`}
                                              value={formik.values?.FunctionalDetails[i]?.PTP}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTP`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTP}
                                              // name="PTP"
                                              // value={PTPV}
                                              // onChange={formik.handleChange}
                                              // checked={PTPV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTSa`}
                                              value={formik.values?.FunctionalDetails[i]?.PTSa}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTSa`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTSa}
                                              // name="PTSa"
                                              // value={PTSaV}
                                              // onChange={formik.handleChange}
                                              // checked={PTSaV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTH`}
                                              value={formik.values?.FunctionalDetails[i]?.PTH}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTH`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTH}
                                              // name="PTH"
                                              // value={PTHV}
                                              // onChange={formik.handleChange}
                                              // checked={PTHV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTK`}
                                              value={formik.values?.FunctionalDetails[i]?.PTK}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTK`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTK}
                                              // name="PTK"
                                              // value={PTKV}
                                              // onChange={formik.handleChange}
                                              // checked={PTKV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].PTA`}
                                              value={formik.values?.FunctionalDetails[i]?.PTA}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].PTA`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.PTA}
                                              // name="PTA"
                                              // value={PTAV}
                                              // onChange={formik.handleChange}
                                              // checked={PTAV}
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="tableCol">Both</td>
                                          <td className="tableCol1">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].Bothminus`}
                                              value={formik.values?.FunctionalDetails[i]?.Bothminus}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].Bothminus`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.Bothminus
                                              }
                                              // name="Bothminus"
                                              // value={BothminusV}
                                              // onChange={formik.handleChange}
                                              // checked={BothminusV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].Bothplusone`}
                                              value={
                                                formik.values?.FunctionalDetails[i]?.Bothplusone
                                              }
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].Bothplusone`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.Bothplusone
                                              }
                                              // name="Bothplusone"
                                              // value={BothplusoneV}
                                              // onChange={formik.handleChange}
                                              // checked={BothplusoneV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].Bothplustwo`}
                                              value={
                                                formik.values?.FunctionalDetails[i]?.Bothplustwo
                                              }
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].Bothplustwo`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.Bothplustwo
                                              }
                                              // name="Bothplustwo"
                                              // value={BothplustwoV}
                                              // onChange={formik.handleChange}
                                              // checked={BothplustwoV}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].Bothplusthree`}
                                              value={
                                                formik.values?.FunctionalDetails[i]?.Bothplusthree
                                              }
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].Bothplusthree`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={
                                                formik.values?.FunctionalDetails[i]?.Bothplusthree
                                              }
                                              // name="Bothplusthree"
                                              // value={BothplusthreeV}
                                              // onChange={formik.handleChange}
                                              // checked={BothplusthreeV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothOcc`}
                                              value={formik.values?.FunctionalDetails[i]?.BothOcc}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothOcc`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothOcc}
                                              // name="BothOcc"
                                              // value={BothOccV}
                                              // onChange={formik.handleChange}
                                              // checked={BothOccV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothC`}
                                              value={formik.values?.FunctionalDetails[i]?.BothC}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothC`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothC}
                                              // name="BothC"
                                              // value={BothCV}
                                              // onChange={formik.handleChange}
                                              // checked={BothCV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothSh`}
                                              value={formik.values?.FunctionalDetails[i]?.BothSh}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothSh`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothSh}
                                              // name="BothSh"
                                              // value={BothShV}
                                              // onChange={formik.handleChange}
                                              // checked={BothShV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothSc`}
                                              value={formik.values?.FunctionalDetails[i]?.BothSc}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothSc`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothSc}
                                              // name="BothSc"
                                              // value={BothScV}
                                              // onChange={formik.handleChange}
                                              // checked={BothScV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothT1`}
                                              value={formik.values?.FunctionalDetails[i]?.BothT1}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothT1`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothT1}
                                              // name="BothT1"
                                              // value={BothT1V}
                                              // onChange={formik.handleChange}
                                              // checked={BothT1V}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothT`}
                                              value={formik.values?.FunctionalDetails[i]?.BothT}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothT`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothT}
                                              // name="BothT"
                                              // value={BothTV}
                                              // onChange={formik.handleChange}
                                              // checked={BothTV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothMT`}
                                              value={formik.values?.FunctionalDetails[i]?.BothMT}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothMT`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothMT}
                                              // name="BothMT"
                                              // value={BothMTV}
                                              // onChange={formik.handleChange}
                                              // checked={BothMTV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothL`}
                                              value={formik.values?.FunctionalDetails[i]?.BothL}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothL`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothL}
                                              // name="BothL"
                                              // value={BothLV}
                                              // onChange={formik.handleChange}
                                              // checked={BothLV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothP`}
                                              value={formik.values?.FunctionalDetails[i]?.BothP}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothP`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothP}
                                              // name="BothP"
                                              // value={BothPV}
                                              // onChange={formik.handleChange}
                                              // checked={BothPV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothSa`}
                                              value={formik.values?.FunctionalDetails[i]?.BothSa}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothSa`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothSa}
                                              // name="BothSa"
                                              // value={BothSaV}
                                              // onChange={formik.handleChange}
                                              // checked={BothSaV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothH`}
                                              value={formik.values?.FunctionalDetails[i]?.BothH}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothH`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothH}
                                              // name="BothH"
                                              // value={BothHV}
                                              // onChange={formik.handleChange}
                                              // checked={BothHV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothK`}
                                              value={formik.values?.FunctionalDetails[i]?.BothK}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothK`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothK}
                                              // name="BothK"
                                              // value={BothKV}
                                              // onChange={formik.handleChange}
                                              // checked={BothKV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].BothA`}
                                              value={formik.values?.FunctionalDetails[i]?.BothA}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].BothA`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.BothA}
                                              // name="BothA"
                                              // value={BothAV}
                                              // onChange={formik.handleChange}
                                              // checked={BothAV}
                                            />
                                          </td>
                                        </tr>
                                        <tr className="">
                                          <td className="tableCol">CD</td>
                                          <td className="tableCols1">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDHypo`}
                                              value={formik.values?.FunctionalDetails[i]?.CDHypo}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDHypo`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDHypo}
                                              // name="CDHypo"
                                              // value={CDHypoV}
                                              // onChange={formik.handleChange}
                                              // checked={CDHypoV}
                                            />
                                            <span className="checkBoxTitle">Hypo</span>
                                          </td>
                                          <td className="tableCol2"></td>
                                          <td className="tableCols2">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDHyper`}
                                              value={formik.values?.FunctionalDetails[i]?.CDHyper}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDHyper`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDHyper}
                                              // name="CDHyper"
                                              // value={CDHyperV}
                                              // onChange={formik.handleChange}
                                              // checked={CDHyperV}
                                            />
                                            <span className="checkBoxTitle">Hyper</span>
                                          </td>
                                          <td className="tableCol2"></td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDOcc`}
                                              value={formik.values?.FunctionalDetails[i]?.CDOcc}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDOcc`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDOcc}
                                              // name="CDOcc"
                                              // value={CDOccV}
                                              // onChange={formik.handleChange}
                                              // checked={CDOccV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDC`}
                                              value={formik.values?.FunctionalDetails[i]?.CDC}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDC`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDC}
                                              // name="CDC"
                                              // value={CDCV}
                                              // onChange={formik.handleChange}
                                              // checked={CDCV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDSh`}
                                              value={formik.values?.FunctionalDetails[i]?.CDSh}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDSh`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDSh}
                                              // name="CDSh"
                                              // value={CDShV}
                                              // onChange={formik.handleChange}
                                              // checked={CDShV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDSc`}
                                              value={formik.values?.FunctionalDetails[i]?.CDSc}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDSc`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDSc}
                                              // name="CDSc"
                                              // value={CDScV}
                                              // onChange={formik.handleChange}
                                              // checked={CDScV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDT1`}
                                              value={formik.values?.FunctionalDetails[i]?.CDT1}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDT1`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDT1}
                                              // name="CDT1"
                                              // value={CDT1V}
                                              // onChange={formik.handleChange}
                                              // checked={CDT1V}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDT`}
                                              value={formik.values?.FunctionalDetails[i]?.CDT}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDT`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDT}
                                              // name="CDT"
                                              // value={CDTV}
                                              // onChange={formik.handleChange}
                                              // checked={CDTV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDMT`}
                                              value={formik.values?.FunctionalDetails[i]?.CDMT}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDMT`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDMT}
                                              // name="CDMT"
                                              // value={CDMTV}
                                              // onChange={formik.handleChange}
                                              // checked={CDMTV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDL`}
                                              value={formik.values?.FunctionalDetails[i]?.CDL}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDL`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDL}
                                              // name="CDL"
                                              // value={CDLV}
                                              // onChange={formik.handleChange}
                                              // checked={CDLV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDP`}
                                              value={formik.values?.FunctionalDetails[i]?.CDP}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDP`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDP}
                                              // name="CDP"
                                              // value={CDPV}
                                              // onChange={formik.handleChange}
                                              // checked={CDPV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDSa`}
                                              value={formik.values?.FunctionalDetails[i]?.CDSa}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDSa`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDSa}
                                              // name="CDSa"
                                              // value={CDSaV}
                                              // onChange={formik.handleChange}
                                              // checked={CDSaV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDH`}
                                              value={formik.values?.FunctionalDetails[i]?.CDH}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDH`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDH}
                                              // name="CDH"
                                              // value={CDHV}
                                              // onChange={formik.handleChange}
                                              // checked={CDHV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDK`}
                                              value={formik.values?.FunctionalDetails[i]?.CDK}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDK`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDK}
                                              // name="CDK"
                                              // value={CDKV}
                                              // onChange={formik.handleChange}
                                              // checked={CDKV}
                                            />
                                          </td>
                                          <td className="tablecolcommon">
                                            <input
                                              type="checkbox"
                                              className="checkBox"
                                              name={`FunctionalDetails[${i}].CDA`}
                                              value={formik.values?.FunctionalDetails[i]?.CDA}
                                              onChange={(e) =>
                                                formik.setFieldValue(
                                                  `FunctionalDetails[${i}].CDA`,
                                                  e.target.checked
                                                )
                                              }
                                              checked={formik.values?.FunctionalDetails[i]?.CDA}
                                              // name="CDA"
                                              // value={CDAV}
                                              // onChange={formik.handleChange}
                                              // checked={CDAV}
                                            />
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                  </div> */}
                                  <SecondPart formik={formik} index={i} />
                                  {/* <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            name={`FunctionalDetails[${i}].StandingGoalPostsControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingGoalPostsControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingGoalPostsControl`,
                                                e.target.value
                                              )
                                            }
                                            label="StandingGoalPostsControl"
                                            // name="StandingGoalPostsControl"
                                            // value={StandingGoalPostsControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Goal Posts</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            className=""
                                            type="text"
                                            label="StandingGoalPosts"
                                            name={`FunctionalDetails[${i}].StandingGoalPosts`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.StandingGoalPosts
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingGoalPosts`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingGoalPosts"
                                            // value={StandingGoalPostsV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingTorsoRotationControl"
                                            name={`FunctionalDetails[${i}].StandingTorsoRotationControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingTorsoRotationControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingTorsoRotationControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingTorsoRotationControl"
                                            // value={StandingTorsoRotationControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Torso Rotation</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingTorsoRotation"
                                            name={`FunctionalDetails[${i}].StandingTorsoRotation`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingTorsoRotation
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingTorsoRotation`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingTorsoRotation"
                                            // value={StandingTorsoRotationV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingWallTestControl"
                                            name={`FunctionalDetails[${i}].StandingWallTestControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingWallTestControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingWallTestControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingWallTestControl"
                                            // value={StandingWallTestControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Wall Test</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingWallTest"
                                            name={`FunctionalDetails[${i}].StandingWallTest`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.StandingWallTest
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingWallTest`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingWallTest"
                                            // value={StandingWallTestV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingWallTestwHOHPTBothControl"
                                            name={`FunctionalDetails[${i}].StandingWallTestwHOHPTBothControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingWallTestwHOHPTBothControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingWallTestwHOHPTBothControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingWallTestwHOHPTBothControl"
                                            // value={StandingWallTestwHOHPTBothControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Wall Test w/ HOH, PT, Both</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingWallTestwHOHPTBoth"
                                            name={`FunctionalDetails[${i}].StandingWallTestwHOHPTBoth`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingWallTestwHOHPTBoth
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingWallTestwHOHPTBoth`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingWallTestwHOHPTBoth"
                                            // value={StandingWallTestwHOHPTBothV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingWallAngelsControl"
                                            name={`FunctionalDetails[${i}].StandingWallAngelsControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingWallAngelsControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingWallAngelsControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingWallAngelsControl"
                                            // value={StandingWallAngelsControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Wall Angels</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingWallAngels"
                                            name={`FunctionalDetails[${i}].StandingWallAngels`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingWallAngels
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingWallAngels`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingWallAngels"
                                            // value={StandingWallAngelsV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingWallLateralBendsReachControl"
                                            name={`FunctionalDetails[${i}].StandingWallLateralBendsReachControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingWallLateralBendsReachControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingWallLateralBendsReachControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingWallLateralBendsReachControl"
                                            // value={StandingWallLateralBendsReachControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Wall Lateral Bends/Reach</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingWallLateralBendsReach"
                                            name={`FunctionalDetails[${i}].StandingWallLateralBendsReach`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingWallLateralBendsReach
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingWallLateralBendsReach`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingWallLateralBendsReach"
                                            // value={StandingWallLateralBendsReachV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingNeckROMControl"
                                            name={`FunctionalDetails[${i}].StandingNeckROMControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingNeckROMControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingNeckROMControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingNeckROMControl"
                                            // value={StandingNeckROMControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Neck ROM (FLEX, EXT, Lat FLEX, ROT, Rolls)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingNeckROM"
                                            name={`FunctionalDetails[${i}].StandingNeckROM`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.StandingNeckROM
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingNeckROM`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingNeckROM"
                                            // value={StandingNeckROMV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="JawOpeningandLateralDeviationControl"
                                            name={`FunctionalDetails[${i}].JawOpeningandLateralDeviationControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.JawOpeningandLateralDeviationControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].JawOpeningandLateralDeviationControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="JawOpeningandLateralDeviationControl"
                                            // value={JawOpeningandLateralDeviationControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Jaw Opening and Lateral Deviation</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="JawOpeningandLateralDeviation"
                                            name={`FunctionalDetails[${i}].JawOpeningandLateralDeviation`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.JawOpeningandLateralDeviation
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].JawOpeningandLateralDeviation`,
                                                e.target.value
                                              )
                                            }
                                            // name="JawOpeningandLateralDeviation"
                                            // value={JawOpeningandLateralDeviationV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="GilletSIJFunctionTestControl"
                                            name={`FunctionalDetails[${i}].GilletSIJFunctionTestControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.GilletSIJFunctionTestControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].GilletSIJFunctionTestControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="GilletSIJFunctionTestControl"
                                            // value={GilletSIJFunctionTestControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Gillet SIJ Function Test</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="GilletSIJFunctionTest"
                                            name={`FunctionalDetails[${i}].GilletSIJFunctionTest`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.GilletSIJFunctionTest
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].GilletSIJFunctionTest`,
                                                e.target.value
                                              )
                                            }
                                            // name="GilletSIJFunctionTest"
                                            // value={GilletSIJFunctionTestV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingStorkWalksControl"
                                            name={`FunctionalDetails[${i}].StandingStorkWalksControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingStorkWalksControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingStorkWalksControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingStorkWalksControl"
                                            // value={StandingStorkWalksControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Stork Walks (Neutral, Ft INV, Ft EV)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingStorkWalks"
                                            name={`FunctionalDetails[${i}].StandingStorkWalks`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingStorkWalks
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingStorkWalks`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingStorkWalks"
                                            // value={StandingStorkWalksV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="TrendelenburgTestControl"
                                            name={`FunctionalDetails[${i}].TrendelenburgTestControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.TrendelenburgTestControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].TrendelenburgTestControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="TrendelenburgTestControl"
                                            // value={TrendelenburgTestControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitle">
                                          <p>Trendelenburg Test</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="TrendelenburgTest"
                                            name={`FunctionalDetails[${i}].TrendelenburgTest`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.TrendelenburgTest
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].TrendelenburgTest`,
                                                e.target.value
                                              )
                                            }
                                            // name="TrendelenburgTest"
                                            // value={TrendelenburgTestV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StepUpsControl"
                                            name={`FunctionalDetails[${i}].StepUpsControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.StepUpsControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StepUpsControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StepUpsControl"
                                            // value={StepUpsControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Step Ups (low)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StepUps"
                                            name={`FunctionalDetails[${i}].StepUps`}
                                            value={formik.values?.FunctionalDetails[i]?.StepUps}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StepUps`,
                                                e.target.value
                                              )
                                            }
                                            // name="StepUps"
                                            // value={StepUpsV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>{" "}
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="StandingToeTouchControl"
                                            name={`FunctionalDetails[${i}].StandingToeTouchControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.StandingToeTouchControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingToeTouchControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingToeTouchControl"
                                            // value={StandingToeTouchControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Standing Toe Touch</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="StandingToeTouch"
                                            name={`FunctionalDetails[${i}].StandingToeTouch`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.StandingToeTouch
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].StandingToeTouch`,
                                                e.target.value
                                              )
                                            }
                                            // name="StandingToeTouch"
                                            // value={StandingToeTouchV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>{" "}
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="SquatControl"
                                            name={`FunctionalDetails[${i}].SquatControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.SquatControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SquatControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="SquatControl"
                                            // value={SquatControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Squat</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="Squat"
                                            name={`FunctionalDetails[${i}].Squat`}
                                            value={formik.values?.FunctionalDetails[i]?.Squat}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].Squat`,
                                                e.target.value
                                              )
                                            }
                                            // name="Squat"
                                            // value={SquatV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>{" "}
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="LungesControl"
                                            name={`FunctionalDetails[${i}].LungesControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.LungesControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].LungesControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="LungesControl"
                                            // value={LungesControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Lunges</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="Lunges"
                                            name={`FunctionalDetails[${i}].Lunges`}
                                            value={formik.values?.FunctionalDetails[i]?.Lunges}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].Lunges`,
                                                e.target.value
                                              )
                                            }
                                            // name="Lunges"
                                            // value={LungesV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="SittingAnkleKneeCrossoverControl"
                                            name={`FunctionalDetails[${i}].SittingAnkleKneeCrossoverControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.SittingAnkleKneeCrossoverControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SittingAnkleKneeCrossoverControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="SittingAnkleKneeCrossoverControl"
                                            // value={SittingAnkleKneeCrossoverControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitle">
                                          <p>Sitting Ankle Knee Crossover</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="SittingAnkleKneeCrossover"
                                            name={`FunctionalDetails[${i}].SittingAnkleKneeCrossover`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.SittingAnkleKneeCrossover
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SittingAnkleKneeCrossover`,
                                                e.target.value
                                              )
                                            }
                                            // name="SittingAnkleKneeCrossover"
                                            // value={SittingAnkleKneeCrossoverV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="SittingCatsandDogsControl"
                                            name={`FunctionalDetails[${i}].SittingCatsandDogsControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.SittingCatsandDogsControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SittingCatsandDogsControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="SittingCatsandDogsControl"
                                            // value={SittingCatsandDogsControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Sitting Cats and Dogs</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="SittingCatsandDogs"
                                            name={`FunctionalDetails[${i}].SittingCatsandDogs`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.SittingCatsandDogs
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SittingCatsandDogs`,
                                                e.target.value
                                              )
                                            }
                                            // name="SittingCatsandDogs"
                                            // value={SittingCatsandDogsV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="SittingSingleHipLiftsControl"
                                            name={`FunctionalDetails[${i}].SittingSingleHipLiftsControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.SittingSingleHipLiftsControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SittingSingleHipLiftsControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="SittingSingleHipLiftsControl"
                                            // value={SittingSingleHipLiftsControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitle">
                                          <p>Sitting Single Hip Lifts</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="SittingSingleHipLifts"
                                            name={`FunctionalDetails[${i}].SittingSingleHipLifts`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.SittingSingleHipLifts
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SittingSingleHipLifts`,
                                                e.target.value
                                              )
                                            }
                                            // name="SittingSingleHipLifts"
                                            // value={SittingSingleHipLiftsV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="HooklyingPositionControl"
                                            name={`FunctionalDetails[${i}].HooklyingPositionControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.HooklyingPositionControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].HooklyingPositionControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="HooklyingPositionControl"
                                            // value={HooklyingPositionControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Hooklying Position (L/S, breathing, PR)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="HooklyingPosition"
                                            name={`FunctionalDetails[${i}].HooklyingPosition`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.HooklyingPosition
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].HooklyingPosition`,
                                                e.target.value
                                              )
                                            }
                                            // name="HooklyingPosition"
                                            // value={HooklyingPositionV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="HooklyingLegRotationsControl"
                                            name={`FunctionalDetails[${i}].HooklyingLegRotationsControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.HooklyingLegRotationsControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].HooklyingLegRotationsControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="HooklyingLegRotationsControl"
                                            // value={HooklyingLegRotationsControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Hooklying Leg Rotations</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="HooklyingLegRotations"
                                            name={`FunctionalDetails[${i}].HooklyingLegRotations`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.HooklyingLegRotations
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].HooklyingLegRotations`,
                                                e.target.value
                                              )
                                            }
                                            // name="HooklyingLegRotations"
                                            // value={HooklyingLegRotationsV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="LyingSupineControl"
                                            name={`FunctionalDetails[${i}].LyingSupineControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.LyingSupineControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].LyingSupineControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="LyingSupineControl"
                                            // value={LyingSupineControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Lying Supine (Tension, feet, L/S, breathing)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="LyingSupine"
                                            name={`FunctionalDetails[${i}].LyingSupine`}
                                            value={formik.values?.FunctionalDetails[i]?.LyingSupine}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].LyingSupine`,
                                                e.target.value
                                              )
                                            }
                                            // name="LyingSupine"
                                            // value={LyingSupineV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="SBControl"
                                            name={`FunctionalDetails[${i}].SBControl`}
                                            value={formik.values?.FunctionalDetails[i]?.SBControl}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SBControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="SBControl"
                                            // value={SBControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitle">
                                          <p>SB (Tension, Sh, L/S, Kn, Feet, breathing)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="SB"
                                            name={`FunctionalDetails[${i}].SB`}
                                            value={formik.values?.FunctionalDetails[i]?.SB}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SB`,
                                                e.target.value
                                              )
                                            }
                                            // name="SB"
                                            // value={SBV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="IMLSIJTestControl"
                                            name={`FunctionalDetails[${i}].IMLSIJTestControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.IMLSIJTestControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].IMLSIJTestControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="IMLSIJTestControl"
                                            // value={IMLSIJTestControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitle">
                                          <p> IML SIJ Test</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="IMLSIJTest"
                                            name={`FunctionalDetails[${i}].IMLSIJTest`}
                                            value={formik.values?.FunctionalDetails[i]?.IMLSIJTest}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].IMLSIJTest`,
                                                e.target.value
                                              )
                                            }
                                            // name="IMLSIJTest"
                                            // value={IMLSIJTestV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="LyingProneControl"
                                            name={`FunctionalDetails[${i}].LyingProneControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]?.LyingProneControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].LyingProneControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="LyingProneControl"
                                            // value={LyingProneControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Lying Prone (Tension, feet, L/S, C/S)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="LyingProne"
                                            name={`FunctionalDetails[${i}].LyingProne`}
                                            value={formik.values?.FunctionalDetails[i]?.LyingProne}
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].LyingProne`,
                                                e.target.value
                                              )
                                            }
                                            // name="LyingProne"
                                            // value={LyingProneV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="ProneSingleLegLiftsControl"
                                            name={`FunctionalDetails[${i}].ProneSingleLegLiftsControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.ProneSingleLegLiftsControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].ProneSingleLegLiftsControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="ProneSingleLegLiftsControl"
                                            // value={ProneSingleLegLiftsControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p>Prone Single Leg Lifts (Shimpi Pr SIJ Test)</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="ProneSingleLegLifts"
                                            name={`FunctionalDetails[${i}].ProneSingleLegLifts`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.ProneSingleLegLifts
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].ProneSingleLegLifts`,
                                                e.target.value
                                              )
                                            }
                                            // name="ProneSingleLegLifts"
                                            // value={ProneSingleLegLiftsV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div>
                                  <div>
                                    <Grid container spacing={2}>
                                      <Grid item md={1} xs={3}>
                                        <div>
                                          <select
                                            className="selectvalue"
                                            label="SupineSingleLegActiveBridgesControl"
                                            name={`FunctionalDetails[${i}].SupineSingleLegActiveBridgesControl`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.SupineSingleLegActiveBridgesControl
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SupineSingleLegActiveBridgesControl`,
                                                e.target.value
                                              )
                                            }
                                            // name="SupineSingleLegActiveBridgesControl"
                                            // value={SupineSingleLegActiveBridgesControlV}
                                            // onChange={formik.handleChange}
                                          >
                                            <option></option>
                                            <option>+</option>
                                            <option>-</option>
                                          </select>
                                        </div>
                                      </Grid>
                                      <Grid item md={4} xs={9}>
                                        <div className="analysissubtitleform">
                                          <p> Supine Single Leg Active Bridges</p>
                                        </div>
                                      </Grid>
                                      <Grid item md={7} xs={12} className="functional-sub">
                                        <div className="analysisinput">
                                          <input
                                            type="text"
                                            label="SupineSingleLegActiveBridges"
                                            name={`FunctionalDetails[${i}].SupineSingleLegActiveBridges`}
                                            value={
                                              formik.values?.FunctionalDetails[i]
                                                ?.SupineSingleLegActiveBridges
                                            }
                                            onChange={(e) =>
                                              formik.setFieldValue(
                                                `FunctionalDetails[${i}].SupineSingleLegActiveBridges`,
                                                e.target.value
                                              )
                                            }
                                            // name="SupineSingleLegActiveBridges"
                                            // value={SupineSingleLegActiveBridgesV}
                                            // onChange={formik.handleChange}
                                          />
                                        </div>
                                      </Grid>
                                    </Grid>
                                  </div> */}
                                </div>
                              </Box>
                            </>
                          );
                        })}
                        <Box mt={1}>
                          <div>
                            <button
                              type="button"
                              className="funactonalTestbtn"
                              onClick={
                                () =>
                                  arrayhelpers.insert(formik.values.FunctionalDetails.length + 1)
                                // arrayhelpers.push(formik.values.excerciseDetails)
                              }
                            >
                              New Functional Test Page
                            </button>
                          </div>
                        </Box>
                      </>
                    );
                  }}
                />
              </Grid>
              {/* <Box>
                <div>
                  <div>
                    <p className="maintitle">
                      <span>Funcational Tests:</span>
                    </p>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="COGTensionBreathingPRControl"
                            label="COGTensionBreathingPRControl"
                            value={COGTensionBreathingPRControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitle">
                          <p>Standing (COG, Tension, Breathing, PR)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12}>
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="COGTensionBreathingPR"
                            label="COGTensionBreathingPR"
                            value={COGTensionBreathingPRV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="RombergTestControl"
                            label="RombergTestControl"
                            value={RombergTestControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitle">
                          <p>Romberg Test</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12}>
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="RombergTest"
                            label="RombergTest"
                            value={RombergTestV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="StandingHOHPTBothControl"
                            label="StandingHOHPTBothControl"
                            value={StandingHOHPTBothControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitle">
                          <p>Standing HOH, PT, Both</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12}>
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="StandingHOHPTBoth"
                            label="StandingHOHPTBoth"
                            value={StandingHOHPTBothV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="thead">
                    <div className="Teststitle">
                      <p>Primary Tests</p>
                    </div>
                    <div className="tablehead">
                      <table className="table">
                        <tr className="tableRow">
                          <th></th>
                          <th>(-)</th>
                          <th>+1</th>
                          <th>+2</th>
                          <th>+3</th>
                          <th>Occ</th>
                          <th>C</th>
                          <th>Sh</th>
                          <th>Sc</th>
                          <th>T1</th>
                          <th>T</th>
                          <th>MT</th>
                          <th>L</th>
                          <th>P</th>
                          <th>Sa</th>
                          <th>H</th>
                          <th>K</th>
                          <th>A</th>
                        </tr>
                        <tr>
                          <td className="tableCol">HOH</td>
                          <td className="tableCol1">
                            <input
                              type="checkbox"
                              name="HoHminus"
                              className="checkBox"
                              value={HoHminusV}
                              onChange={formik.handleChange}
                              checked={HoHminusV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="HoHplusone"
                              className="checkBox"
                              value={HoHplusoneV}
                              onChange={formik.handleChange}
                              checked={HoHplusoneV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="HoHplustwo"
                              className="checkBox"
                              value={HoHplustwoV}
                              onChange={formik.handleChange}
                              checked={HoHplustwoV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="HoHplusthree"
                              className="checkBox"
                              value={HoHplusthreeV}
                              onChange={formik.handleChange}
                              checked={HoHplusthreeV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHOcc"
                              className="checkBox"
                              value={HoHOccV}
                              onChange={formik.handleChange}
                              checked={HoHOccV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHC"
                              className="checkBox"
                              value={HoHCV}
                              onChange={formik.handleChange}
                              checked={HoHCV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHSh"
                              className="checkBox"
                              value={HoHShV}
                              onChange={formik.handleChange}
                              checked={HoHShV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHSc"
                              className="checkBox"
                              value={HoHScV}
                              onChange={formik.handleChange}
                              checked={HoHScV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHT1"
                              className="checkBox"
                              value={HoHT1V}
                              onChange={formik.handleChange}
                              checked={HoHT1V}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHT"
                              className="checkBox"
                              value={HoHTV}
                              onChange={formik.handleChange}
                              checked={HoHTV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHMT"
                              className="checkBox"
                              value={HoHMTV}
                              onChange={formik.handleChange}
                              checked={HoHMTV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHL"
                              className="checkBox"
                              value={HoHLV}
                              onChange={formik.handleChange}
                              checked={HoHLV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHP"
                              className="checkBox"
                              value={HoHPV}
                              onChange={formik.handleChange}
                              checked={HoHPV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHSa"
                              className="checkBox"
                              value={HoHSaV}
                              onChange={formik.handleChange}
                              checked={HoHSaV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHH"
                              className="checkBox"
                              value={HoHHV}
                              onChange={formik.handleChange}
                              checked={HoHHV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHK"
                              className="checkBox"
                              value={HoHKV}
                              onChange={formik.handleChange}
                              checked={HoHKV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="HoHA"
                              className="checkBox"
                              value={HoHAV}
                              onChange={formik.handleChange}
                              checked={HoHAV}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCol">PT</td>
                          <td className="tableCol1">
                            <input
                              type="checkbox"
                              name="PTminus"
                              className="checkBox"
                              value={PTminusV}
                              onChange={formik.handleChange}
                              checked={PTminusV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="PTplusone"
                              className="checkBox"
                              value={PTplusoneV}
                              onChange={formik.handleChange}
                              checked={PTplusoneV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="PTplustwo"
                              className="checkBox"
                              value={PTplustwoV}
                              onChange={formik.handleChange}
                              checked={PTplustwoV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="PTplusthree"
                              className="checkBox"
                              value={PTplusthreeV}
                              onChange={formik.handleChange}
                              checked={PTplusthreeV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTOcc"
                              className="checkBox"
                              value={PTOccV}
                              onChange={formik.handleChange}
                              checked={PTOccV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTC"
                              className="checkBox"
                              value={PTCV}
                              onChange={formik.handleChange}
                              checked={PTCV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTSh"
                              className="checkBox"
                              value={PTShV}
                              onChange={formik.handleChange}
                              checked={PTShV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTSc"
                              className="checkBox"
                              value={PTScV}
                              onChange={formik.handleChange}
                              checked={PTScV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTT1"
                              className="checkBox"
                              value={PTT1V}
                              onChange={formik.handleChange}
                              checked={PTT1V}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTT"
                              className="checkBox"
                              value={PTTV}
                              onChange={formik.handleChange}
                              checked={PTTV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTMT"
                              className="checkBox"
                              value={PTMTV}
                              onChange={formik.handleChange}
                              checked={PTMTV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTL"
                              className="checkBox"
                              value={PTLV}
                              onChange={formik.handleChange}
                              checked={PTLV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTP"
                              className="checkBox"
                              value={PTPV}
                              onChange={formik.handleChange}
                              checked={PTPV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTSa"
                              className="checkBox"
                              value={PTSaV}
                              onChange={formik.handleChange}
                              checked={PTSaV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTH"
                              className="checkBox"
                              value={PTHV}
                              onChange={formik.handleChange}
                              checked={PTHV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTK"
                              className="checkBox"
                              value={PTKV}
                              onChange={formik.handleChange}
                              checked={PTKV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="PTA"
                              className="checkBox"
                              value={PTAV}
                              onChange={formik.handleChange}
                              checked={PTAV}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="tableCol">Both</td>
                          <td className="tableCol1">
                            <input
                              type="checkbox"
                              name="Bothminus"
                              className="checkBox"
                              value={BothminusV}
                              onChange={formik.handleChange}
                              checked={BothminusV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="Bothplusone"
                              className="checkBox"
                              value={BothplusoneV}
                              onChange={formik.handleChange}
                              checked={BothplusoneV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="Bothplustwo"
                              className="checkBox"
                              value={BothplustwoV}
                              onChange={formik.handleChange}
                              checked={BothplustwoV}
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox"
                              name="Bothplusthree"
                              className="checkBox"
                              value={BothplusthreeV}
                              onChange={formik.handleChange}
                              checked={BothplusthreeV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothOcc"
                              className="checkBox"
                              value={BothOccV}
                              onChange={formik.handleChange}
                              checked={BothOccV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothC"
                              className="checkBox"
                              value={BothCV}
                              onChange={formik.handleChange}
                              checked={BothCV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothSh"
                              className="checkBox"
                              value={BothShV}
                              onChange={formik.handleChange}
                              checked={BothShV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothSc"
                              className="checkBox"
                              value={BothScV}
                              onChange={formik.handleChange}
                              checked={BothScV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothT1"
                              className="checkBox"
                              value={BothT1V}
                              onChange={formik.handleChange}
                              checked={BothT1V}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothT"
                              className="checkBox"
                              value={BothTV}
                              onChange={formik.handleChange}
                              checked={BothTV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothMT"
                              className="checkBox"
                              value={BothMTV}
                              onChange={formik.handleChange}
                              checked={BothMTV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothL"
                              className="checkBox"
                              value={BothLV}
                              onChange={formik.handleChange}
                              checked={BothLV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothP"
                              className="checkBox"
                              value={BothPV}
                              onChange={formik.handleChange}
                              checked={BothPV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothSa"
                              className="checkBox"
                              value={BothSaV}
                              onChange={formik.handleChange}
                              checked={BothSaV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothH"
                              className="checkBox"
                              value={BothHV}
                              onChange={formik.handleChange}
                              checked={BothHV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothK"
                              className="checkBox"
                              value={BothKV}
                              onChange={formik.handleChange}
                              checked={BothKV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="BothA"
                              className="checkBox"
                              value={BothAV}
                              onChange={formik.handleChange}
                              checked={BothAV}
                            />
                          </td>
                        </tr>
                        <tr className="">
                          <td className="tableCol">CD</td>
                          <td className="tableCols1">
                            <input
                              type="checkbox"
                              name="CDHypo"
                              className="checkBox"
                              value={CDHypoV}
                              onChange={formik.handleChange}
                              checked={CDHypoV}
                            />
                            <span className="checkBoxTitle">Hypo</span>
                          </td>
                          <td className="tableCol2"></td>
                          <td className="tableCols2">
                            <input
                              type="checkbox"
                              name="CDHyper"
                              className="checkBox"
                              value={CDHyperV}
                              onChange={formik.handleChange}
                              checked={CDHyperV}
                            />
                            <span className="checkBoxTitle">Hyper</span>
                          </td>
                          <td className="tableCol2"></td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDOcc"
                              className="checkBox"
                              value={CDOccV}
                              onChange={formik.handleChange}
                              checked={CDOccV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDC"
                              className="checkBox"
                              value={CDCV}
                              onChange={formik.handleChange}
                              checked={CDCV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDSh"
                              className="checkBox"
                              value={CDShV}
                              onChange={formik.handleChange}
                              checked={CDShV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDSc"
                              className="checkBox"
                              value={CDScV}
                              onChange={formik.handleChange}
                              checked={CDScV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDT1"
                              className="checkBox"
                              value={CDT1V}
                              onChange={formik.handleChange}
                              checked={CDT1V}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDT"
                              className="checkBox"
                              value={CDTV}
                              onChange={formik.handleChange}
                              checked={CDTV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDMT"
                              className="checkBox"
                              value={CDMTV}
                              onChange={formik.handleChange}
                              checked={CDMTV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDL"
                              className="checkBox"
                              value={CDLV}
                              onChange={formik.handleChange}
                              checked={CDLV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDP"
                              className="checkBox"
                              value={CDPV}
                              onChange={formik.handleChange}
                              checked={CDPV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDSa"
                              className="checkBox"
                              value={CDSaV}
                              onChange={formik.handleChange}
                              checked={CDSaV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDH"
                              className="checkBox"
                              value={CDHV}
                              onChange={formik.handleChange}
                              checked={CDHV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDK"
                              className="checkBox"
                              value={CDKV}
                              onChange={formik.handleChange}
                              checked={CDKV}
                            />
                          </td>
                          <td className="tablecolcommon">
                            <input
                              type="checkbox"
                              name="CDA"
                              className="checkBox"
                              value={CDAV}
                              onChange={formik.handleChange}
                              checked={CDAV}
                            />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            // name={StandingGoalPostsControl.name}
                            // onChange={handleChange}
                            name="StandingGoalPostsControl"
                            label="StandingGoalPostsControl"
                            value={StandingGoalPostsControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Goal Posts</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            className=""
                            type="text"
                            name="StandingGoalPosts"
                            label="StandingGoalPosts"
                            value={StandingGoalPostsV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="StandingTorsoRotationControl"
                            name="StandingTorsoRotationControl"
                            value={StandingTorsoRotationControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Torso Rotation</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="StandingTorsoRotation"
                            name="StandingTorsoRotation"
                            value={StandingTorsoRotationV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="StandingWallTestControl"
                            name="StandingWallTestControl"
                            value={StandingWallTestControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Wall Test</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="StandingWallTest"
                            name="StandingWallTest"
                            value={StandingWallTestV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="StandingWallTestwHOHPTBothControl"
                            name="StandingWallTestwHOHPTBothControl"
                            value={StandingWallTestwHOHPTBothControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Wall Test w/ HOH, PT, Both</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="StandingWallTestwHOHPTBoth"
                            name="StandingWallTestwHOHPTBoth"
                            value={StandingWallTestwHOHPTBothV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="StandingWallAngelsControl"
                            name="StandingWallAngelsControl"
                            value={StandingWallAngelsControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Wall Angels</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="StandingWallAngels"
                            name="StandingWallAngels"
                            value={StandingWallAngelsV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="StandingWallLateralBendsReachControl"
                            name="StandingWallLateralBendsReachControl"
                            value={StandingWallLateralBendsReachControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Wall Lateral Bends/Reach</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="StandingWallLateralBendsReach"
                            name="StandingWallLateralBendsReach"
                            value={StandingWallLateralBendsReachV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="StandingNeckROMControl"
                            name="StandingNeckROMControl"
                            value={StandingNeckROMControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Neck ROM (FLEX, EXT, Lat FLEX, ROT, Rolls)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="StandingNeckROM"
                            name="StandingNeckROM"
                            value={StandingNeckROMV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="JawOpeningandLateralDeviationControl"
                            name="JawOpeningandLateralDeviationControl"
                            value={JawOpeningandLateralDeviationControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Jaw Opening and Lateral Deviation</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="JawOpeningandLateralDeviation"
                            name="JawOpeningandLateralDeviation"
                            value={JawOpeningandLateralDeviationV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="GilletSIJFunctionTestControl"
                            name="GilletSIJFunctionTestControl"
                            value={GilletSIJFunctionTestControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Gillet SIJ Function Test</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="GilletSIJFunctionTest"
                            name="GilletSIJFunctionTest"
                            value={GilletSIJFunctionTestV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="StandingStorkWalksControl"
                            name="StandingStorkWalksControl"
                            value={StandingStorkWalksControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Stork Walks (Neutral, Ft INV, Ft EV)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            label="StandingStorkWalks"
                            name="StandingStorkWalks"
                            value={StandingStorkWalksV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            label="TrendelenburgTestControl"
                            name="TrendelenburgTestControl"
                            value={TrendelenburgTestControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitle">
                          <p>Trendelenburg Test</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="TrendelenburgTest"
                            label="TrendelenburgTest"
                            value={TrendelenburgTestV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="StepUpsControl"
                            label="StepUpsControl"
                            value={StepUpsControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Step Ups (low)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="StepUps"
                            label="StepUps"
                            value={StepUpsV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>{" "}
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="StandingToeTouchControl"
                            label="StandingToeTouchControl"
                            value={StandingToeTouchControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Standing Toe Touch</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="StandingToeTouch"
                            label="StandingToeTouch"
                            value={StandingToeTouchV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>{" "}
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="SquatControl"
                            label="SquatControl"
                            value={SquatControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Squat</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="Squat"
                            label="Squat"
                            value={SquatV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>{" "}
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="LungesControl"
                            label="LungesControl"
                            value={LungesControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Lunges</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="Lunges"
                            label="Lunges"
                            value={LungesV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="SittingAnkleKneeCrossoverControl"
                            label="SittingAnkleKneeCrossoverControl"
                            value={SittingAnkleKneeCrossoverControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitle">
                          <p>Sitting Ankle Knee Crossover</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="SittingAnkleKneeCrossover"
                            label="SittingAnkleKneeCrossover"
                            value={SittingAnkleKneeCrossoverV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="SittingCatsandDogsControl"
                            label="SittingCatsandDogsControl"
                            value={SittingCatsandDogsControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Sitting Cats and Dogs</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="SittingCatsandDogs"
                            label="SittingCatsandDogs"
                            value={SittingCatsandDogsV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="SittingSingleHipLiftsControl"
                            label="SittingSingleHipLiftsControl"
                            value={SittingSingleHipLiftsControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitle">
                          <p>Sitting Single Hip Lifts</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="SittingSingleHipLifts"
                            label="SittingSingleHipLifts"
                            value={SittingSingleHipLiftsV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="HooklyingPositionControl"
                            label="HooklyingPositionControl"
                            value={HooklyingPositionControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Hooklying Position (L/S, breathing, PR)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="HooklyingPosition"
                            label="HooklyingPosition"
                            value={HooklyingPositionV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="HooklyingLegRotationsControl"
                            label="HooklyingLegRotationsControl"
                            value={HooklyingLegRotationsControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Hooklying Leg Rotations</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="HooklyingLegRotations"
                            label="HooklyingLegRotations"
                            value={HooklyingLegRotationsV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="LyingSupineControl"
                            label="LyingSupineControl"
                            value={LyingSupineControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Lying Supine (Tension, feet, L/S, breathing)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="LyingSupine"
                            label="LyingSupine"
                            value={LyingSupineV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="SBControl"
                            label="SBControl"
                            value={SBControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitle">
                          <p>SB (Tension, Sh, L/S, Kn, Feet, breathing)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="SB"
                            label="SB"
                            value={SBV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="IMLSIJTestControl"
                            label="IMLSIJTestControl"
                            value={IMLSIJTestControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitle">
                          <p> IML SIJ Test</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="IMLSIJTest"
                            label="IMLSIJTest"
                            value={IMLSIJTestV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="LyingProneControl"
                            label="LyingProneControl"
                            value={LyingProneControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Lying Prone (Tension, feet, L/S, C/S)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="LyingProne"
                            label="LyingProne"
                            value={LyingProneV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="ProneSingleLegLiftsControl"
                            label="ProneSingleLegLiftsControl"
                            value={ProneSingleLegLiftsControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p>Prone Single Leg Lifts (Shimpi Pr SIJ Test)</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="ProneSingleLegLifts"
                            label="ProneSingleLegLifts"
                            value={ProneSingleLegLiftsV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item md={1} xs={3}>
                        <div>
                          <select
                            className="selectvalue"
                            name="SupineSingleLegActiveBridgesControl"
                            label="SupineSingleLegActiveBridgesControl"
                            value={SupineSingleLegActiveBridgesControlV}
                            onChange={formik.handleChange}
                          >
                            <option></option>
                            <option>+</option>
                            <option>-</option>
                          </select>
                        </div>
                      </Grid>
                      <Grid item md={4} xs={9}>
                        <div className="analysissubtitleform">
                          <p> Supine Single Leg Active Bridges</p>
                        </div>
                      </Grid>
                      <Grid item md={7} xs={12} className="functional-sub">
                        <div className="analysisinput">
                          <input
                            type="text"
                            name="SupineSingleLegActiveBridges"
                            label="SupineSingleLegActiveBridges"
                            value={SupineSingleLegActiveBridgesV}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Box> */}
              {/* <Box mt={1}>
                <div>
                  <button type="button" className="funactonalTestbtn">
                    New Funcational Test Page
                  </button>
                </div>
              </Box> */}
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
