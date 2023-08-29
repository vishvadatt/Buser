import React from "react";
import "../style.css";
import { Checkbox, Grid, Radio } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PSecondPartropTypes from "prop-types";
import SecondPart from "./SecondPart";
import PropTypes from "prop-types";

function index({ formik, index }) {
  const { values } = formik;
  const {
    alcoholicBeverages,
    caffeinatedBeverages,
    eatCount,
    stressLevel,
    eatFishCount,
    workoutCount,
    nutCount,
    worstFoodA,
    worstFoodB,
    worstFoodC,
    healthyFoodA,
    healthyFoodB,
    healthyFoodC,
    CategoryXXinput,
    supplements,
    medication,
  } = values;

  const Difficultywithbalance = [
    {
      name: "Difficulty with balance, or balance that is worse on one side",
    },
  ];

  const holdthehandrail = [
    {
      name: "A need to hold the handrail or watch each step carefully when going down stairs",
    },
  ];
  const Feelingunsteady = [
    {
      name: "Feeling unsteady and prone to falling in the dark",
    },
  ];

  const Pronesstosway = [
    {
      name: "Proness to sway to one side when walking or standing",
    },
  ];

  const clumsinessinhands = [
    {
      name: "Recent clumsiness in hands",
    },
  ];
  const clumsinessinfeet = [
    {
      name: "Recent clumsiness in feet or frequent tripping",
    },
  ];

  const slighthandshake = [
    {
      name: "A slight hand shake when reaching for something at the end of movement",
    },
  ];

  const Episodesofdizziness = [
    {
      name: "Episodes of dizziness or disorientation ",
    },
  ];
  const Backmusclestire = [
    {
      name: "Back muscles that tire quickly when standing or walking",
    },
  ];
  const Chronicneck = [
    {
      name: "Chronic neck or back muscle tightness",
    },
  ];

  const Nauseaval = [
    {
      name: "Nausea, car sickness, or sea sickness",
    },
  ];
  const Feelingofdisorientation = [
    {
      name: "Feeling of disorientation or shifting of the environment",
    },
  ];

  const Crowdedplaces = [
    {
      name: "Crowded places cause anxiety",
    },
  ];

  const Slownessinmovements = [
    {
      name: "Slowness in movements",
    },
  ];
  const Stiffnessinyourmuscles = [
    {
      name: "Stiffness in your muscles (not joints) that goes away when you move",
    },
  ];

  return (
    <>
      <SoftBox>
        <Grid container spacing={2} style={{ margin: "0 auto" }}>
          <Grid item lg={5.8} xs={12} className="main-div">
            <SoftBox>
              <SoftTypography
                // fontSize="25px"
                marginTop="0px"
                className="intro"
              >
                <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
                  <div>Cerebellum - Spinocerebellum</div>
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  0
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  1
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  2
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  3
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  4
                </Grid>
              </SoftTypography>

              <SoftBox className="sections">
                {Difficultywithbalance &&
                  Difficultywithbalance.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            66.
                          </Grid>
                          <Grid item lg={6} md={6} xs={11} sm={11} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            sm={2.3}
                            md={1}
                            xs={2.3}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Difficultywithbalance[${i}].Difficultywithbalance0check`}
                              checked={
                                values?.page21[index]?.Difficultywithbalance[i]
                                  ?.Difficultywithbalance0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            sm={2.3}
                            md={1}
                            xs={2.3}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Difficultywithbalance[${i}].Difficultywithbalance1check`}
                              checked={
                                values?.page21[index]?.Difficultywithbalance[i]
                                  ?.Difficultywithbalance1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            sm={2.3}
                            md={1}
                            xs={2.3}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Difficultywithbalance[${i}].Difficultywithbalance2check`}
                              checked={
                                values?.page21[index]?.Difficultywithbalance[i]
                                  ?.Difficultywithbalance2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            sm={2.3}
                            md={1}
                            xs={2.3}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Difficultywithbalance[${i}].Difficultywithbalance3check`}
                              checked={
                                values?.page21[index]?.Difficultywithbalance[i]
                                  ?.Difficultywithbalance3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            sm={2.3}
                            md={1}
                            xs={2.3}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Difficultywithbalance[${i}].Difficultywithbalance4check`}
                              checked={
                                values?.page21[index]?.Difficultywithbalance[i]
                                  ?.Difficultywithbalance4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {holdthehandrail &&
                  holdthehandrail.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            67.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].holdthehandrail[${i}].holdthehandrail0check`}
                              checked={
                                values?.page21[index]?.holdthehandrail[i]?.holdthehandrail0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].holdthehandrail[${i}].holdthehandrail1check`}
                              checked={
                                values?.page21[index]?.holdthehandrail[i]?.holdthehandrail1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].holdthehandrail[${i}].holdthehandrail2check`}
                              checked={
                                values?.page21[index]?.holdthehandrail[i]?.holdthehandrail2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].holdthehandrail[${i}].holdthehandrail3check`}
                              checked={
                                values?.page21[index]?.holdthehandrail[i]?.holdthehandrail3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].holdthehandrail[${i}].holdthehandrail4check`}
                              checked={
                                values?.page21[index]?.holdthehandrail[i]?.holdthehandrail4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {Feelingunsteady &&
                  Feelingunsteady.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            68.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div  twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingunsteady[${i}].Feelingunsteady0check`}
                              checked={
                                values?.page21[index]?.Feelingunsteady[i]?.Feelingunsteady0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingunsteady[${i}].Feelingunsteady1check`}
                              checked={
                                values?.page21[index]?.Feelingunsteady[i]?.Feelingunsteady1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingunsteady[${i}].Feelingunsteady2check`}
                              checked={
                                values?.page21[index]?.Feelingunsteady[i]?.Feelingunsteady2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingunsteady[${i}].Feelingunsteady3check`}
                              checked={
                                values?.page21[index]?.Feelingunsteady[i]?.Feelingunsteady3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingunsteady[${i}].Feelingunsteady4check`}
                              checked={
                                values?.page21[index]?.Feelingunsteady[i]?.Feelingunsteady4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {Pronesstosway &&
                  Pronesstosway.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            69.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Pronesstosway[${i}].Pronesstosway0check`}
                              checked={values?.page21[index]?.Pronesstosway[i]?.Pronesstosway0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Pronesstosway[${i}].Pronesstosway1check`}
                              checked={values?.page21[index]?.Pronesstosway[i]?.Pronesstosway1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Pronesstosway[${i}].Pronesstosway2check`}
                              checked={values?.page21[index]?.Pronesstosway[i]?.Pronesstosway2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Pronesstosway[${i}].Pronesstosway3check`}
                              checked={values?.page21[index]?.Pronesstosway[i]?.Pronesstosway3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Pronesstosway[${i}].Pronesstosway4check`}
                              checked={values?.page21[index]?.Pronesstosway[i]?.Pronesstosway4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                // fontSize="25px"
                marginTop="15px"
                className="intro"
              >
                <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
                  <div>Cerebellum - Cerebrocerebellum</div>
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  0
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  1
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  2
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  3
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  4
                </Grid>
              </SoftTypography>
              <SoftBox className="sections">
                {clumsinessinhands &&
                  clumsinessinhands.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            70.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinhands[${i}].clumsinessinhands0check`}
                              checked={
                                values?.page21[index]?.clumsinessinhands[i]?.clumsinessinhands0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinhands[${i}].clumsinessinhands1check`}
                              checked={
                                values?.page21[index]?.clumsinessinhands[i]?.clumsinessinhands1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinhands[${i}].clumsinessinhands2check`}
                              checked={
                                values?.page21[index]?.clumsinessinhands[i]?.clumsinessinhands2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinhands[${i}].clumsinessinhands3check`}
                              checked={
                                values?.page21[index]?.clumsinessinhands[i]?.clumsinessinhands3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinhands[${i}].clumsinessinhands4check`}
                              checked={
                                values?.page21[index]?.clumsinessinhands[i]?.clumsinessinhands4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
              <SoftBox className="sections">
                {clumsinessinfeet &&
                  clumsinessinfeet.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            71.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinfeet[${i}].clumsinessinfeet0check`}
                              checked={
                                values?.page21[index]?.clumsinessinfeet[i]?.clumsinessinfeet0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinfeet[${i}].clumsinessinfeet1check`}
                              checked={
                                values?.page21[index]?.clumsinessinfeet[i]?.clumsinessinfeet1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinfeet[${i}].clumsinessinfeet2check`}
                              checked={
                                values?.page21[index]?.clumsinessinfeet[i]?.clumsinessinfeet2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinfeet[${i}].clumsinessinfeet3check`}
                              checked={
                                values?.page21[index]?.clumsinessinfeet[i]?.clumsinessinfeet3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].clumsinessinfeet[${i}].clumsinessinfeet4check`}
                              checked={
                                values?.page21[index]?.clumsinessinfeet[i]?.clumsinessinfeet4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {slighthandshake &&
                  slighthandshake.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            72.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].slighthandshake[${i}].slighthandshake0check`}
                              checked={
                                values?.page21[index]?.slighthandshake[i]?.slighthandshake0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].slighthandshake[${i}].slighthandshake1check`}
                              checked={
                                values?.page21[index]?.slighthandshake[i]?.slighthandshake1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].slighthandshake[${i}].slighthandshake2check`}
                              checked={
                                values?.page21[index]?.slighthandshake[i]?.slighthandshake2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].slighthandshake[${i}].slighthandshake3check`}
                              checked={
                                values?.page21[index]?.slighthandshake[i]?.slighthandshake3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].slighthandshake[${i}].slighthandshake4check`}
                              checked={
                                values?.page21[index]?.slighthandshake[i]?.slighthandshake4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>

            <SoftBox>
              <SoftTypography
                // fontSize="25px"
                marginTop="15px"
                className="intro"
              >
                <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
                  <div>Cerebellum - Vestibulocerebellum</div>
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  0
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  1
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  2
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  3
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  4
                </Grid>
              </SoftTypography>

              <SoftBox className="sections">
                {Episodesofdizziness &&
                  Episodesofdizziness.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            73.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Episodesofdizziness[${i}].Episodesofdizziness0check`}
                              checked={
                                values?.page21[index]?.Episodesofdizziness[i]
                                  ?.Episodesofdizziness0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Episodesofdizziness[${i}].Episodesofdizziness1check`}
                              checked={
                                values?.page21[index]?.Episodesofdizziness[i]
                                  ?.Episodesofdizziness1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Episodesofdizziness[${i}].Episodesofdizziness2check`}
                              checked={
                                values?.page21[index]?.Episodesofdizziness[i]
                                  ?.Episodesofdizziness2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Episodesofdizziness[${i}].Episodesofdizziness3check`}
                              checked={
                                values?.page21[index]?.Episodesofdizziness[i]
                                  ?.Episodesofdizziness3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Episodesofdizziness[${i}].Episodesofdizziness4check`}
                              checked={
                                values?.page21[index]?.Episodesofdizziness[i]
                                  ?.Episodesofdizziness4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {Backmusclestire &&
                  Backmusclestire.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            74.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Backmusclestire[${i}].Backmusclestire0check`}
                              checked={
                                values?.page21[index]?.Backmusclestire[i]?.Backmusclestire0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Backmusclestire[${i}].Backmusclestire1check`}
                              checked={
                                values?.page21[index]?.Backmusclestire[i]?.Backmusclestire1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Backmusclestire[${i}].Backmusclestire2check`}
                              checked={
                                values?.page21[index]?.Backmusclestire[i]?.Backmusclestire2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Backmusclestire[${i}].Backmusclestire3check`}
                              checked={
                                values?.page21[index]?.Backmusclestire[i]?.Backmusclestire3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Backmusclestire[${i}].Backmusclestire4check`}
                              checked={
                                values?.page21[index]?.Backmusclestire[i]?.Backmusclestire4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {Chronicneck &&
                  Chronicneck.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            75.
                          </Grid>
                          <Grid item lg={6} md={6} xs={6} sm={6} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Chronicneck[${i}].Chronicneck0check`}
                              checked={values?.page21[index]?.Chronicneck[i]?.Chronicneck0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Chronicneck[${i}].Chronicneck1check`}
                              checked={values?.page21[index]?.Chronicneck[i]?.Chronicneck1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Chronicneck[${i}].Chronicneck2check`}
                              checked={values?.page21[index]?.Chronicneck[i]?.Chronicneck2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Chronicneck[${i}].Chronicneck3check`}
                              checked={values?.page21[index]?.Chronicneck[i]?.Chronicneck3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Chronicneck[${i}].Chronicneck4check`}
                              checked={values?.page21[index]?.Chronicneck[i]?.Chronicneck4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {Nauseaval &&
                  Nauseaval.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            76.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Nauseaval[${i}].Nauseaval0check`}
                              checked={values?.page21[index]?.Nauseaval[i]?.Nauseaval0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Nauseaval[${i}].Nauseaval1check`}
                              checked={values?.page21[index]?.Nauseaval[i]?.Nauseaval1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Nauseaval[${i}].Nauseaval2check`}
                              checked={values?.page21[index]?.Nauseaval[i]?.Nauseaval2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Nauseaval[${i}].Nauseaval3check`}
                              checked={values?.page21[index]?.Nauseaval[i]?.Nauseaval3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Nauseaval[${i}].Nauseaval4check`}
                              checked={values?.page21[index]?.Nauseaval[i]?.Nauseaval4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
              <SoftBox className="sections">
                {Feelingofdisorientation &&
                  Feelingofdisorientation.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            77.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingofdisorientation[${i}].Feelingofdisorientation0check`}
                              checked={
                                values?.page21[index]?.Feelingofdisorientation[i]
                                  ?.Feelingofdisorientation0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingofdisorientation[${i}].Feelingofdisorientation1check`}
                              checked={
                                values?.page21[index]?.Feelingofdisorientation[i]
                                  ?.Feelingofdisorientation1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingofdisorientation[${i}].Feelingofdisorientation2check`}
                              checked={
                                values?.page21[index]?.Feelingofdisorientation[i]
                                  ?.Feelingofdisorientation2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingofdisorientation[${i}].Feelingofdisorientation3check`}
                              checked={
                                values?.page21[index]?.Feelingofdisorientation[i]
                                  ?.Feelingofdisorientation3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Feelingofdisorientation[${i}].Feelingofdisorientation4check`}
                              checked={
                                values?.page21[index]?.Feelingofdisorientation[i]
                                  ?.Feelingofdisorientation4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {Crowdedplaces &&
                  Crowdedplaces.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            78.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Crowdedplaces[${i}].Crowdedplaces0check`}
                              checked={values?.page21[index]?.Crowdedplaces[i]?.Crowdedplaces0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Crowdedplaces[${i}].Crowdedplaces1check`}
                              checked={values?.page21[index]?.Crowdedplaces[i]?.Crowdedplaces1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Crowdedplaces[${i}].Crowdedplaces2check`}
                              checked={values?.page21[index]?.Crowdedplaces[i]?.Crowdedplaces2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Crowdedplaces[${i}].Crowdedplaces3check`}
                              checked={values?.page21[index]?.Crowdedplaces[i]?.Crowdedplaces3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Crowdedplaces[${i}].Crowdedplaces4check`}
                              checked={values?.page21[index]?.Crowdedplaces[i]?.Crowdedplaces4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>

            <SoftBox>
              <SoftTypography
                // fontSize="25px"
                marginTop="15px"
                className="intro"
              >
                <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
                  <div>Basal Ganglia Direct Pathway</div>
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  0
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  1
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  2
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  3
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  4
                </Grid>
              </SoftTypography>

              <SoftBox className="sections">
                {Slownessinmovements &&
                  Slownessinmovements.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            79.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Slownessinmovements[${i}].Slownessinmovements0check`}
                              checked={
                                values?.page21[index]?.Slownessinmovements[i]
                                  ?.Slownessinmovements0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Slownessinmovements[${i}].Slownessinmovements1check`}
                              checked={
                                values?.page21[index]?.Slownessinmovements[i]
                                  ?.Slownessinmovements1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Slownessinmovements[${i}].Slownessinmovements2check`}
                              checked={
                                values?.page21[index]?.Slownessinmovements[i]
                                  ?.Slownessinmovements2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Slownessinmovements[${i}].Slownessinmovements3check`}
                              checked={
                                values?.page21[index]?.Slownessinmovements[i]
                                  ?.Slownessinmovements3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Slownessinmovements[${i}].Slownessinmovements4check`}
                              checked={
                                values?.page21[index]?.Slownessinmovements[i]
                                  ?.Slownessinmovements4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {Stiffnessinyourmuscles &&
                  Stiffnessinyourmuscles.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div"
                          >
                            80.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Stiffnessinyourmuscles[${i}].Stiffnessinyourmuscles0check`}
                              checked={
                                values?.page21[index]?.Stiffnessinyourmuscles[i]
                                  ?.Stiffnessinyourmuscles0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Stiffnessinyourmuscles[${i}].Stiffnessinyourmuscles1check`}
                              checked={
                                values?.page21[index]?.Stiffnessinyourmuscles[i]
                                  ?.Stiffnessinyourmuscles1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Stiffnessinyourmuscles[${i}].Stiffnessinyourmuscles2check`}
                              checked={
                                values?.page21[index]?.Stiffnessinyourmuscles[i]
                                  ?.Stiffnessinyourmuscles2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Stiffnessinyourmuscles[${i}].Stiffnessinyourmuscles3check`}
                              checked={
                                values?.page21[index]?.Stiffnessinyourmuscles[i]
                                  ?.Stiffnessinyourmuscles3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page21[${index}].Stiffnessinyourmuscles[${i}].Stiffnessinyourmuscles4check`}
                              checked={
                                values?.page21[index]?.Stiffnessinyourmuscles[i]
                                  ?.Stiffnessinyourmuscles4check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item lg={5.8} className="main-div" xs={12}>
            <SecondPart formik={formik} index={index} />
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default index;
