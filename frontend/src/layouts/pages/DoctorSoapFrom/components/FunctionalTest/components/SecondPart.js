import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";

function SecondPart({ formik, index }) {
  const values = formik.values.FunctionalDetails;
  console.log("values21", values);
  return (
    <>
      <div>
        <Grid container spacing={2}>
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                name={`FunctionalDetails[${index}].StandingGoalPostsControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingGoalPostsControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingGoalPostsControl`,
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
                name={`FunctionalDetails[${index}].StandingGoalPosts`}
                value={formik.values?.FunctionalDetails[index]?.StandingGoalPosts}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingGoalPosts`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingTorsoRotationControl"
                name={`FunctionalDetails[${index}].StandingTorsoRotationControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingTorsoRotationControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingTorsoRotationControl`,
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
                name={`FunctionalDetails[${index}].StandingTorsoRotation`}
                value={formik.values?.FunctionalDetails[index]?.StandingTorsoRotation}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingTorsoRotation`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingWallTestControl"
                name={`FunctionalDetails[${index}].StandingWallTestControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingWallTestControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingWallTestControl`,
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
                name={`FunctionalDetails[${index}].StandingWallTest`}
                value={formik.values?.FunctionalDetails[index]?.StandingWallTest}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingWallTest`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingWallTestwHOHPTBothControl"
                name={`FunctionalDetails[${index}].StandingWallTestwHOHPTBothControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingWallTestwHOHPTBothControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingWallTestwHOHPTBothControl`,
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
                name={`FunctionalDetails[${index}].StandingWallTestwHOHPTBoth`}
                value={formik.values?.FunctionalDetails[index]?.StandingWallTestwHOHPTBoth}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingWallTestwHOHPTBoth`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingWallAngelsControl"
                name={`FunctionalDetails[${index}].StandingWallAngelsControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingWallAngelsControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingWallAngelsControl`,
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
                name={`FunctionalDetails[${index}].StandingWallAngels`}
                value={formik.values?.FunctionalDetails[index]?.StandingWallAngels}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingWallAngels`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingWallLateralBendsReachControl"
                name={`FunctionalDetails[${index}].StandingWallLateralBendsReachControl`}
                value={
                  formik.values?.FunctionalDetails[index]?.StandingWallLateralBendsReachControl
                }
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingWallLateralBendsReachControl`,
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
                name={`FunctionalDetails[${index}].StandingWallLateralBendsReach`}
                value={formik.values?.FunctionalDetails[index]?.StandingWallLateralBendsReach}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingWallLateralBendsReach`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingNeckROMControl"
                name={`FunctionalDetails[${index}].StandingNeckROMControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingNeckROMControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingNeckROMControl`,
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
                name={`FunctionalDetails[${index}].StandingNeckROM`}
                value={formik.values?.FunctionalDetails[index]?.StandingNeckROM}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingNeckROM`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="JawOpeningandLateralDeviationControl"
                name={`FunctionalDetails[${index}].JawOpeningandLateralDeviationControl`}
                value={
                  formik.values?.FunctionalDetails[index]?.JawOpeningandLateralDeviationControl
                }
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].JawOpeningandLateralDeviationControl`,
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
                name={`FunctionalDetails[${index}].JawOpeningandLateralDeviation`}
                value={formik.values?.FunctionalDetails[index]?.JawOpeningandLateralDeviation}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].JawOpeningandLateralDeviation`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="GilletSIJFunctionTestControl"
                name={`FunctionalDetails[${index}].GilletSIJFunctionTestControl`}
                value={formik.values?.FunctionalDetails[index]?.GilletSIJFunctionTestControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].GilletSIJFunctionTestControl`,
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
                name={`FunctionalDetails[${index}].GilletSIJFunctionTest`}
                value={formik.values?.FunctionalDetails[index]?.GilletSIJFunctionTest}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].GilletSIJFunctionTest`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingStorkWalksControl"
                name={`FunctionalDetails[${index}].StandingStorkWalksControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingStorkWalksControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingStorkWalksControl`,
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
                name={`FunctionalDetails[${index}].StandingStorkWalks`}
                value={formik.values?.FunctionalDetails[index]?.StandingStorkWalks}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingStorkWalks`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="TrendelenburgTestControl"
                name={`FunctionalDetails[${index}].TrendelenburgTestControl`}
                value={formik.values?.FunctionalDetails[index]?.TrendelenburgTestControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].TrendelenburgTestControl`,
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
                name={`FunctionalDetails[${index}].TrendelenburgTest`}
                value={formik.values?.FunctionalDetails[index]?.TrendelenburgTest}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].TrendelenburgTest`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StepUpsControl"
                name={`FunctionalDetails[${index}].StepUpsControl`}
                value={formik.values?.FunctionalDetails[index]?.StepUpsControl}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].StepUpsControl`, e.target.value)
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
                name={`FunctionalDetails[${index}].StepUps`}
                value={formik.values?.FunctionalDetails[index]?.StepUps}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].StepUps`, e.target.value)
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingToeTouchControl"
                name={`FunctionalDetails[${index}].StandingToeTouchControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingToeTouchControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingToeTouchControl`,
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
                name={`FunctionalDetails[${index}].StandingToeTouch`}
                value={formik.values?.FunctionalDetails[index]?.StandingToeTouch}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingToeTouch`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="SquatControl"
                name={`FunctionalDetails[${index}].SquatControl`}
                value={formik.values?.FunctionalDetails[index]?.SquatControl}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].SquatControl`, e.target.value)
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
                name={`FunctionalDetails[${index}].Squat`}
                value={formik.values?.FunctionalDetails[index]?.Squat}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].Squat`, e.target.value)
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="LungesControl"
                name={`FunctionalDetails[${index}].LungesControl`}
                value={formik.values?.FunctionalDetails[index]?.LungesControl}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].LungesControl`, e.target.value)
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
                name={`FunctionalDetails[${index}].Lunges`}
                value={formik.values?.FunctionalDetails[index]?.Lunges}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].Lunges`, e.target.value)
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="SittingAnkleKneeCrossoverControl"
                name={`FunctionalDetails[${index}].SittingAnkleKneeCrossoverControl`}
                value={formik.values?.FunctionalDetails[index]?.SittingAnkleKneeCrossoverControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].SittingAnkleKneeCrossoverControl`,
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
                name={`FunctionalDetails[${index}].SittingAnkleKneeCrossover`}
                value={formik.values?.FunctionalDetails[index]?.SittingAnkleKneeCrossover}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].SittingAnkleKneeCrossover`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="SittingCatsandDogsControl"
                name={`FunctionalDetails[${index}].SittingCatsandDogsControl`}
                value={formik.values?.FunctionalDetails[index]?.SittingCatsandDogsControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].SittingCatsandDogsControl`,
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
                name={`FunctionalDetails[${index}].SittingCatsandDogs`}
                value={formik.values?.FunctionalDetails[index]?.SittingCatsandDogs}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].SittingCatsandDogs`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="SittingSingleHipLiftsControl"
                name={`FunctionalDetails[${index}].SittingSingleHipLiftsControl`}
                value={formik.values?.FunctionalDetails[index]?.SittingSingleHipLiftsControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].SittingSingleHipLiftsControl`,
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
                name={`FunctionalDetails[${index}].SittingSingleHipLifts`}
                value={formik.values?.FunctionalDetails[index]?.SittingSingleHipLifts}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].SittingSingleHipLifts`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="HooklyingPositionControl"
                name={`FunctionalDetails[${index}].HooklyingPositionControl`}
                value={formik.values?.FunctionalDetails[index]?.HooklyingPositionControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].HooklyingPositionControl`,
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
                name={`FunctionalDetails[${index}].HooklyingPosition`}
                value={formik.values?.FunctionalDetails[index]?.HooklyingPosition}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].HooklyingPosition`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="HooklyingLegRotationsControl"
                name={`FunctionalDetails[${index}].HooklyingLegRotationsControl`}
                value={formik.values?.FunctionalDetails[index]?.HooklyingLegRotationsControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].HooklyingLegRotationsControl`,
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
                name={`FunctionalDetails[${index}].HooklyingLegRotations`}
                value={formik.values?.FunctionalDetails[index]?.HooklyingLegRotations}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].HooklyingLegRotations`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="LyingSupineControl"
                name={`FunctionalDetails[${index}].LyingSupineControl`}
                value={formik.values?.FunctionalDetails[index]?.LyingSupineControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].LyingSupineControl`,
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
                name={`FunctionalDetails[${index}].LyingSupine`}
                value={formik.values?.FunctionalDetails[index]?.LyingSupine}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].LyingSupine`, e.target.value)
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="SBControl"
                name={`FunctionalDetails[${index}].SBControl`}
                value={formik.values?.FunctionalDetails[index]?.SBControl}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].SBControl`, e.target.value)
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
                name={`FunctionalDetails[${index}].SB`}
                value={formik.values?.FunctionalDetails[index]?.SB}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].SB`, e.target.value)
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="IMLSIJTestControl"
                name={`FunctionalDetails[${index}].IMLSIJTestControl`}
                value={formik.values?.FunctionalDetails[index]?.IMLSIJTestControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].IMLSIJTestControl`,
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
                name={`FunctionalDetails[${index}].IMLSIJTest`}
                value={formik.values?.FunctionalDetails[index]?.IMLSIJTest}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].IMLSIJTest`, e.target.value)
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="LyingProneControl"
                name={`FunctionalDetails[${index}].LyingProneControl`}
                value={formik.values?.FunctionalDetails[index]?.LyingProneControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].LyingProneControl`,
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
                name={`FunctionalDetails[${index}].LyingProne`}
                value={formik.values?.FunctionalDetails[index]?.LyingProne}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].LyingProne`, e.target.value)
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="ProneSingleLegLiftsControl"
                name={`FunctionalDetails[${index}].ProneSingleLegLiftsControl`}
                value={formik.values?.FunctionalDetails[index]?.ProneSingleLegLiftsControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].ProneSingleLegLiftsControl`,
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
                name={`FunctionalDetails[${index}].ProneSingleLegLifts`}
                value={formik.values?.FunctionalDetails[index]?.ProneSingleLegLifts}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].ProneSingleLegLifts`,
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
        <Grid container spacing={2} className="uperspace">
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="SupineSingleLegActiveBridgesControl"
                name={`FunctionalDetails[${index}].SupineSingleLegActiveBridgesControl`}
                value={formik.values?.FunctionalDetails[index]?.SupineSingleLegActiveBridgesControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].SupineSingleLegActiveBridgesControl`,
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
                name={`FunctionalDetails[${index}].SupineSingleLegActiveBridges`}
                value={formik.values?.FunctionalDetails[index]?.SupineSingleLegActiveBridges}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].SupineSingleLegActiveBridges`,
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
      </div>
    </>
  );
}
SecondPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default SecondPart;
