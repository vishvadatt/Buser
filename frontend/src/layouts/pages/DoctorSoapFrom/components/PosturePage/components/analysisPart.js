import React from "react";
import { Grid } from "@mui/material";
import "../style.css";
import PropTypes from "prop-types";

function analysisPart({ formik, index }) {
  const values = formik.values.PosturePage;

  return (
    <>
      <div>
        <p className="analysistitle">
          <span>Gait Analysis :</span> (Lightness, balance)
        </p>
      </div>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="CrossPatternCONTRAIPSIControl"
                    name={`PosturePage[${index}].CrossPatternCONTRAIPSIControl`}
                    value={formik.values?.PosturePage[index]?.CrossPatternCONTRAIPSIControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].CrossPatternCONTRAIPSIControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">Cross Pattern CONTRA/IPSI</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="CrossPatternCONTRAIPSI"
                    name={`PosturePage[${index}].CrossPatternCONTRAIPSI`}
                    value={formik.values?.PosturePage[index]?.CrossPatternCONTRAIPSI}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].CrossPatternCONTRAIPSI`,
                        e.target.value
                      )
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="COGLoadsRLControl"
                    name={`PosturePage[${index}].COGLoadsRLControl`}
                    value={formik.values?.PosturePage[index]?.COGLoadsRLControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].COGLoadsRLControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">COG Loads R/L</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="COGLoadsRL"
                    name={`PosturePage[${index}].COGLoadsRL`}
                    value={formik.values?.PosturePage[index]?.COGLoadsRL}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].COGLoadsRL`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLKnIRERControl"
                    name={`PosturePage[${index}].RLKnIRERControl`}
                    value={formik.values?.PosturePage[index]?.RLKnIRERControl}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLKnIRERControl`, e.target.value)
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Kn IR/ER @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLKnIRER"
                    name={`PosturePage[${index}].RLKnIRER`}
                    value={formik.values?.PosturePage[index]?.RLKnIRER}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLKnIRER`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLHipELEVControl"
                    name={`PosturePage[${index}].RLHipELEVControl`}
                    value={formik.values?.PosturePage[index]?.RLHipELEVControl}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLHipELEVControl`, e.target.value)
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Hip ELEV @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLHipELEV"
                    name={`PosturePage[${index}].RLHipELEV`}
                    value={formik.values?.PosturePage[index]?.RLHipELEV}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLHipELEV`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLHipLATShiftControl"
                    name={`PosturePage[${index}].RLHipLATShiftControl`}
                    value={formik.values?.PosturePage[index]?.RLHipLATShiftControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLHipLATShiftControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Hip LAT Shift @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLHipLATShift"
                    name={`PosturePage[${index}].RLHipLATShift`}
                    value={formik.values?.PosturePage[index]?.RLHipLATShift}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLHipLATShift`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLHipFLEXEXTdecrControl"
                    name={`PosturePage[${index}].RLHipFLEXEXTdecrControl`}
                    value={formik.values?.PosturePage[index]?.RLHipFLEXEXTdecrControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLHipFLEXEXTdecrControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Hip FLEX/EXT decr @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLHipFLEXEXTdecr"
                    name={`PosturePage[${index}].RLHipFLEXEXTdecr`}
                    value={formik.values?.PosturePage[index]?.RLHipFLEXEXTdecr}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLHipFLEXEXTdecr`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLHipROTforFLEXEXTControl"
                    name={`PosturePage[${index}].RLHipROTforFLEXEXTControl`}
                    value={formik.values?.PosturePage[index]?.RLHipROTforFLEXEXTControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLHipROTforFLEXEXTControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Hip ROT for FLEX/EXT @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLHipROTforFLEXEXT"
                    name={`PosturePage[${index}].RLHipROTforFLEXEXT`}
                    value={formik.values?.PosturePage[index]?.RLHipROTforFLEXEXT}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLHipROTforFLEXEXT`,
                        e.target.value
                      )
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLPelvicFLEXEXTdecrControl"
                    name={`PosturePage[${index}].RLPelvicFLEXEXTdecrControl`}
                    value={formik.values?.PosturePage[index]?.RLPelvicFLEXEXTdecrControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLPelvicFLEXEXTdecrControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Pelvic FLEX/EXT decr @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    name={`PosturePage[${index}].RLPelvicFLEXEXTdecr`}
                    value={formik.values?.PosturePage[index]?.RLPelvicFLEXEXTdecr}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLPelvicFLEXEXTdecr`,
                        e.target.value
                      )
                    }
                    label="RLPelvicFLEXEXTdecr"
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLPelvicROTIncrDecrControl"
                    name={`PosturePage[${index}].RLPelvicROTIncrDecrControl`}
                    value={formik.values?.PosturePage[index]?.RLPelvicROTIncrDecrControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLPelvicROTIncrDecrControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Pelvic ROT Incr/Decr @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLPelvicROTIncrDecr"
                    name={`PosturePage[${index}].RLPelvicROTIncrDecr`}
                    value={formik.values?.PosturePage[index]?.RLPelvicROTIncrDecr}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLPelvicROTIncrDecr`,
                        e.target.value
                      )
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="TorsoCROTControl"
                    name={`PosturePage[${index}].TorsoCROTControl`}
                    value={formik.values?.PosturePage[index]?.TorsoCROTControl}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].TorsoCROTControl`, e.target.value)
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">Torso C-ROT (R-L / L-R) @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="TorsoCROT"
                    name={`PosturePage[${index}].TorsoCROT`}
                    value={formik.values?.PosturePage[index]?.TorsoCROT}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].TorsoCROT`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="TorsoOffsetRLControl"
                    name={`PosturePage[${index}].TorsoOffsetRLControl`}
                    value={formik.values?.PosturePage[index]?.TorsoOffsetRLControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].TorsoOffsetRLControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">Torso Offset R/L @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="TorsoOffsetRL"
                    name={`PosturePage[${index}].TorsoOffsetRL`}
                    value={formik.values?.PosturePage[index]?.TorsoOffsetRL}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].TorsoOffsetRL`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="TorsoLATFLEXControl"
                    name={`PosturePage[${index}].TorsoLATFLEXControl`}
                    value={formik.values?.PosturePage[index]?.TorsoLATFLEXControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].TorsoLATFLEXControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb"> Torso LAT FLEX @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="TorsoLATFLEX"
                    name={`PosturePage[${index}].TorsoLATFLEX`}
                    value={formik.values?.PosturePage[index]?.TorsoLATFLEX}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].TorsoLATFLEX`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="HATLoadLRControl"
                    name={`PosturePage[${index}].HATLoadLRControl`}
                    value={formik.values?.PosturePage[index]?.HATLoadLRControl}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].HATLoadLRControl`, e.target.value)
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">HAT Load L/R @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="HATLoadLR"
                    name={`PosturePage[${index}].HATLoadLR`}
                    value={formik.values?.PosturePage[index]?.HATLoadLR}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].HATLoadLR`, e.target.value)
                    }
                    // value={HATLoadLRV}
                    // name="HATLoadLR"
                    // onChange={formik.handleChange}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLFootIRERControl"
                    name={`PosturePage[${index}].RLFootIRERControl`}
                    value={formik.values?.PosturePage[index]?.RLFootIRERControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLFootIRERControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Foot IR/ER @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLFootIRER"
                    name={`PosturePage[${index}].RLFootIRER`}
                    value={formik.values?.PosturePage[index]?.RLFootIRER}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLFootIRER`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item lg={2} md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLCductIRERControl"
                    name={`PosturePage[${index}].RLCductIRERControl`}
                    value={formik.values?.PosturePage[index]?.RLCductIRERControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLCductIRERControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item lg={4} md={5} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L C-duct IR/ER with Hu/Pelvis/Fem/Tib/Ank @</p>
                </div>
              </Grid>
              <Grid item lg={6} md={5} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLCductIRER"
                    name={`PosturePage[${index}].RLCductIRER`}
                    value={formik.values?.PosturePage[index]?.RLCductIRER}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLCductIRER`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLArmSwingControl"
                    name={`PosturePage[${index}].RLArmSwingControl`}
                    value={formik.values?.PosturePage[index]?.RLArmSwingControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLArmSwingControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L {"< / >"} Arm Swing</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLArmSwing"
                    name={`PosturePage[${index}].RLArmSwing`}
                    value={formik.values?.PosturePage[index]?.RLArmSwing}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLArmSwing`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLShFLEXEXTControl"
                    name={`PosturePage[${index}].RLShFLEXEXTControl`}
                    value={formik.values?.PosturePage[index]?.RLShFLEXEXTControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLShFLEXEXTControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Sh FLEX/EXT @</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLShFLEXEXT"
                    name={`PosturePage[${index}].RLShFLEXEXT`}
                    value={formik.values?.PosturePage[index]?.RLShFLEXEXT}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].RLShFLEXEXT`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="RLArmCarryingAngleIncrDecrControl"
                    name={`PosturePage[${index}].RLArmCarryingAngleIncrDecrControl`}
                    value={formik.values?.PosturePage[index]?.RLArmCarryingAngleIncrDecrControl}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLArmCarryingAngleIncrDecrControl`,
                        e.target.value
                      )
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">R/L Arm Carrying Angle Incr/Decr</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="RLArmCarryingAngleIncrDecr"
                    name={`PosturePage[${index}].RLArmCarryingAngleIncrDecr`}
                    value={formik.values?.PosturePage[index]?.RLArmCarryingAngleIncrDecr}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `PosturePage[${index}].RLArmCarryingAngleIncrDecr`,
                        e.target.value
                      )
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="HOHControl"
                    name={`PosturePage[${index}].HOHControl`}
                    value={formik.values?.PosturePage[index]?.HOHControl}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].HOHControl`, e.target.value)
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">HOH</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="HOH"
                    name={`PosturePage[${index}].HOH`}
                    value={formik.values?.PosturePage[index]?.HOH}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].HOH`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="HBBControl"
                    name={`PosturePage[${index}].HBBControl`}
                    value={formik.values?.PosturePage[index]?.HBBControl}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].HBBControl`, e.target.value)
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">HBB</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="HBB"
                    name={`PosturePage[${index}].HBB`}
                    value={formik.values?.PosturePage[index]?.HBB}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].HBB`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item md={2} xs={3}>
                <div>
                  <select
                    className="selectvalue"
                    label="DFControl"
                    name={`PosturePage[${index}].DFControl`}
                    value={formik.values?.PosturePage[index]?.DFControl}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].DFControl`, e.target.value)
                    }
                  >
                    <option></option>
                    <option>+</option>
                    <option>-</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={4} xs={9}>
                <div className="analysissubtitle">
                  <p className="hbb">DF</p>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className="analysisinputs">
                  <input
                    type="text"
                    label="DF"
                    name={`PosturePage[${index}].DF`}
                    value={formik.values?.PosturePage[index]?.DF}
                    onChange={(e) =>
                      formik.setFieldValue(`PosturePage[${index}].DF`, e.target.value)
                    }
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Grid mt={4}>
        <div className="gaitnotes">
          <p>Gait Notes: </p>
          <textarea
            label="Gaitnotes"
            name={`PosturePage[${index}].Gaitnotes`}
            value={formik.values?.PosturePage[index]?.Gaitnotes}
            onChange={(e) =>
              formik.setFieldValue(`PosturePage[${index}].Gaitnotes`, e.target.value)
            }
          />
        </div>
      </Grid>
    </>
  );
}
analysisPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default analysisPart;
