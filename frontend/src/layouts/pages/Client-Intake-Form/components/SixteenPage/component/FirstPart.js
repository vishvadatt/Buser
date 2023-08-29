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
  } = values.page20[index];

  const confusion = [
    {
      name: "Right/left confusion",
    },
  ];

  const mathcalculations = [
    {
      name: "Difficulty with math calculations",
    },
  ];
  const findingwords = [
    {
      name: "Difficulty finding words",
    },
  ];

  const writingwords = [
    {
      name: "Difficulty with writing",
    },
  ];

  const recognizingsymbols = [
    {
      name: "Difficulty recognizing symbols or shapes",
    },
  ];
  const simpledrawings = [
    {
      name: "Difficulty with simple drawings",
    },
  ];

  const interpretingmaps = [
    {
      name: "Difficulty interpreting maps",
    },
  ];

  const hearing = [
    {
      name: "Reduced function in overall hearing",
    },
  ];
  const scatternoise = [
    {
      name: "Difficulty interpreting speech with background or scatter noise",
    },
  ];
  const pronunciation = [
    {
      name: "Difficulty comprehending language without perfect pronunciation",
    },
  ];

  const saying = [
    {
      name: "Need to look at someone’s mouth when they are speaking to understand what they are saying",
    },
  ];
  const sound = [
    {
      name: "Difficulty in localizing sound",
    },
  ];

  const predictablerhythmic = [
    {
      name: "Dislike of left predictable rhythms, repeated tempo and beat music",
    },
  ];

  const nonpredictablerhythmic = [
    {
      name: "Dislike of non-predictable rhythms with multiple instruments",
    },
  ];
  const Noticeable = [
    {
      name: "Noticeable ear preference when using your phone",
    },
  ];

  const comprehending = [
    {
      name: "Difficulty comprehending meaning of spoken word",
    },
  ];
  const emotions = [
    {
      name: "Tend toward monotone speech without fluctuations or emotions",
    },
  ];

  return (
    <>
      <SoftBox>
        <Grid container spacing={2} style={{ margin: "0 auto" }}>
          <Grid item lg={5.8} sm={12} xs={12} mr={2} className="main-div">
            <SoftBox>
              <SoftTypography
                // fontSize="25px"
                marginTop="0px"
                className="intro"
              >
                <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
                  <div>Parietal Inferior Lobule</div>
                  <div>(Area 39 and 40)</div>
                </Grid>
                <Grid item lg={1} md={1} xs={2} sm={2} className="heading-span">
                  0
                </Grid>
                <Grid item lg={1} md={1} xs={2} sm={2} className="heading-span">
                  1
                </Grid>
                <Grid item lg={1} md={1} xs={2} sm={2} className="heading-span">
                  2
                </Grid>
                <Grid item lg={1} md={1} xs={2} sm={2} className="heading-span">
                  3
                </Grid>
                <Grid item lg={1} md={1} xs={2} sm={2} className="heading-span">
                  4
                </Grid>
              </SoftTypography>

              <SoftBox className="sections">
                {confusion &&
                  confusion.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            sm={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            32.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">L</span>
                            </span>
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
                              name={`page20[${index}].confusion[${i}].confusion0check`}
                              checked={values?.page20[index]?.confusion[i]?.confusion0check}
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
                              name={`page20[${index}].confusion[${i}].confusion1check`}
                              checked={values?.page20[index]?.confusion[i]?.confusion1check}
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
                              name={`page20[${index}].confusion[${i}].confusion2check`}
                              checked={values?.page20[index]?.confusion[i]?.confusion2check}
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
                              name={`page20[${index}].confusion[${i}].confusion3check`}
                              checked={values?.page20[index]?.confusion[i]?.confusion3check}
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
                              name={`page20[${index}].confusion[${i}].confusion4check`}
                              checked={values?.page20[index]?.confusion[i]?.confusion4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {mathcalculations &&
                  mathcalculations.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            33.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">L</span>
                            </span>
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
                              name={`page20[${index}].mathcalculations[${i}].mathcalculations0check`}
                              checked={
                                values?.page20[index]?.mathcalculations[i]?.mathcalculations0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            xs={2}
                            sm={1}
                            className="inner-div "
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].mathcalculations[${i}].mathcalculations1check`}
                              checked={
                                values?.page20[index]?.mathcalculations[i]?.mathcalculations1check
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
                              name={`page20[${index}].mathcalculations[${i}].mathcalculations2check`}
                              checked={
                                values?.page20[index]?.mathcalculations[i]?.mathcalculations2check
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
                              name={`page20[${index}].mathcalculations[${i}].mathcalculations3check`}
                              checked={
                                values?.page20[index]?.mathcalculations[i]?.mathcalculations3check
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
                              name={`page20[${index}].mathcalculations[${i}].mathcalculations4check`}
                              checked={
                                values?.page20[index]?.mathcalculations[i]?.mathcalculations4check
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
                {findingwords &&
                  findingwords.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            34.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">L</span>
                            </span>
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
                              name={`page20[${index}].findingwords[${i}].findingwords0check`}
                              checked={values?.page20[index]?.findingwords[i]?.findingwords0check}
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
                              name={`page20[${index}].findingwords[${i}].findingwords1check`}
                              checked={values?.page20[index]?.findingwords[i]?.findingwords1check}
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
                              name={`page20[${index}].findingwords[${i}].findingwords2check`}
                              checked={values?.page20[index]?.findingwords[i]?.findingwords2check}
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
                              name={`page20[${index}].findingwords[${i}].findingwords3check`}
                              checked={values?.page20[index]?.findingwords[i]?.findingwords3check}
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
                              name={`page20[${index}].findingwords[${i}].findingwords4check`}
                              checked={values?.page20[index]?.findingwords[i]?.findingwords4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {writingwords &&
                  writingwords.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            35.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">L</span>
                            </span>
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
                              name={`page20[${index}].writingwords[${i}].writingwords0check`}
                              checked={values?.page20[index]?.writingwords[i]?.writingwords0check}
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
                              name={`page20[${index}].writingwords[${i}].writingwords1check`}
                              checked={values?.page20[index]?.writingwords[i]?.writingwords1check}
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
                              name={`page20[${index}].writingwords[${i}].writingwords2check`}
                              checked={values?.page20[index]?.writingwords[i]?.writingwords2check}
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
                              name={`page20[${index}].writingwords[${i}].writingwords3check`}
                              checked={values?.page20[index]?.writingwords[i]?.writingwords3check}
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
                              name={`page20[${index}].writingwords[${i}].writingwords4check`}
                              checked={values?.page20[index]?.writingwords[i]?.writingwords4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {recognizingsymbols &&
                  recognizingsymbols.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            36.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">R</span>
                            </span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss "
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].recognizingsymbols[${i}].recognizingsymbols0check`}
                              checked={
                                values?.page20[index]?.recognizingsymbols[i]
                                  ?.recognizingsymbols0check
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
                              name={`page20[${index}].recognizingsymbols[${i}].recognizingsymbols1check`}
                              checked={
                                values?.page20[index]?.recognizingsymbols[i]
                                  ?.recognizingsymbols1check
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
                              name={`page20[${index}].recognizingsymbols[${i}].recognizingsymbols2check`}
                              checked={
                                values?.page20[index]?.recognizingsymbols[i]
                                  ?.recognizingsymbols2check
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
                              name={`page20[${index}].recognizingsymbols[${i}].recognizingsymbols3check`}
                              checked={
                                values?.page20[index]?.recognizingsymbols[i]
                                  ?.recognizingsymbols3check
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
                              name={`page20[${index}].recognizingsymbols[${i}].recognizingsymbols4check`}
                              checked={
                                values?.page20[index]?.recognizingsymbols[i]
                                  ?.recognizingsymbols4check
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
                {simpledrawings &&
                  simpledrawings.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            37.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">R</span>
                            </span>
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
                              name={`page20[${index}].simpledrawings[${i}].simpledrawings0check`}
                              checked={
                                values?.page20[index]?.simpledrawings[i]?.simpledrawings0check
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
                              name={`page20[${index}].simpledrawings[${i}].simpledrawings1check`}
                              checked={
                                values?.page20[index]?.simpledrawings[i]?.simpledrawings1check
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
                              name={`page20[${index}].simpledrawings[${i}].simpledrawings2check`}
                              checked={
                                values?.page20[index]?.simpledrawings[i]?.simpledrawings2check
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
                              name={`page20[${index}].simpledrawings[${i}].simpledrawings3check`}
                              checked={
                                values?.page20[index]?.simpledrawings[i]?.simpledrawings3check
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
                              name={`page20[${index}].simpledrawings[${i}].simpledrawings4check`}
                              checked={
                                values?.page20[index]?.simpledrawings[i]?.simpledrawings4check
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
                {interpretingmaps &&
                  interpretingmaps.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            38.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">R</span>
                            </span>
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
                              name={`page20[${index}].interpretingmaps[${i}].interpretingmaps0check`}
                              checked={
                                values?.page20[index]?.interpretingmaps[i]?.interpretingmaps0check
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
                              name={`page20[${index}].interpretingmaps[${i}].interpretingmaps1check`}
                              checked={
                                values?.page20[index]?.interpretingmaps[i]?.interpretingmaps1check
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
                              name={`page20[${index}].interpretingmaps[${i}].interpretingmaps2check`}
                              checked={
                                values?.page20[index]?.interpretingmaps[i]?.interpretingmaps2check
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
                              name={`page20[${index}].interpretingmaps[${i}].interpretingmaps3check`}
                              checked={
                                values?.page20[index]?.interpretingmaps[i]?.interpretingmaps3check
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
                              name={`page20[${index}].interpretingmaps[${i}].interpretingmaps4check`}
                              checked={
                                values?.page20[index]?.interpretingmaps[i]?.interpretingmaps4check
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
                  <div>Temporal Lobe Auditory Cortex</div>
                  <div>(Areas 41, 42)</div>
                </Grid>
                <Grid item lg={1} md={1} xs={1} sm={1} className="heading-span">
                  0
                </Grid>
                <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
                  1
                </Grid>
                <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
                  2
                </Grid>
                <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
                  3
                </Grid>
                <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
                  4
                </Grid>
              </SoftTypography>

              <SoftBox className="sections">
                {hearing &&
                  hearing.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            39.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].hearing[${i}].hearing0check`}
                              checked={values?.page20[index]?.hearing[i]?.hearing0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].hearing[${i}].hearing1check`}
                              checked={values?.page20[index]?.hearing[i]?.hearing1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].hearing[${i}].hearing2check`}
                              checked={values?.page20[index]?.hearing[i]?.hearing2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].hearing[${i}].hearing3check`}
                              checked={values?.page20[index]?.hearing[i]?.hearing3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].hearing[${i}].hearing4check`}
                              checked={values?.page20[index]?.hearing[i]?.hearing4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {scatternoise &&
                  scatternoise.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            40.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].scatternoise[${i}].scatternoise0check`}
                              checked={values?.page20[index]?.scatternoise[i]?.scatternoise0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].scatternoise[${i}].scatternoise1check`}
                              checked={values?.page20[index]?.scatternoise[i]?.scatternoise1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].scatternoise[${i}].scatternoise2check`}
                              checked={values?.page20[index]?.scatternoise[i]?.scatternoise2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].scatternoise[${i}].scatternoise3check`}
                              checked={values?.page20[index]?.scatternoise[i]?.scatternoise3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].scatternoise[${i}].scatternoise4check`}
                              checked={values?.page20[index]?.scatternoise[i]?.scatternoise4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {pronunciation &&
                  pronunciation.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            41.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].pronunciation[${i}].pronunciation0check`}
                              checked={values?.page20[index]?.pronunciation[i]?.pronunciation0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].pronunciation[${i}].pronunciation1check`}
                              checked={values?.page20[index]?.pronunciation[i]?.pronunciation1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].pronunciation[${i}].pronunciation2check`}
                              checked={values?.page20[index]?.pronunciation[i]?.pronunciation2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].pronunciation[${i}].pronunciation3check`}
                              checked={values?.page20[index]?.pronunciation[i]?.pronunciation3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].pronunciation[${i}].pronunciation4check`}
                              checked={values?.page20[index]?.pronunciation[i]?.pronunciation4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {saying &&
                  saying.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            42.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div threelinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].saying[${i}].saying0check`}
                              checked={values?.page20[index]?.saying[i]?.saying0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div threelinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].saying[${i}].saying1check`}
                              checked={values?.page20[index]?.saying[i]?.saying1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div threelinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].saying[${i}].saying2check`}
                              checked={values?.page20[index]?.saying[i]?.saying2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div threelinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].saying[${i}].saying3check`}
                              checked={values?.page20[index]?.saying[i]?.saying3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div threelinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].saying[${i}].saying4check`}
                              checked={values?.page20[index]?.saying[i]?.saying4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
              <SoftBox className="sections">
                {sound &&
                  sound.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            43.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].sound[${i}].sound0check`}
                              checked={values?.page20[index]?.sound[i]?.sound0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].sound[${i}].sound1check`}
                              checked={values?.page20[index]?.sound[i]?.sound1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].sound[${i}].sound2check`}
                              checked={values?.page20[index]?.sound[i]?.sound2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].sound[${i}].sound3check`}
                              checked={values?.page20[index]?.sound[i]?.sound3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].sound[${i}].sound4check`}
                              checked={values?.page20[index]?.sound[i]?.sound4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {predictablerhythmic &&
                  predictablerhythmic.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            44.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">L</span>
                            </span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].predictablerhythmic[${i}].predictablerhythmic0check`}
                              checked={
                                values?.page20[index]?.predictablerhythmic[i]
                                  ?.predictablerhythmic0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].predictablerhythmic[${i}].predictablerhythmic1check`}
                              checked={
                                values?.page20[index]?.predictablerhythmic[i]
                                  ?.predictablerhythmic1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].predictablerhythmic[${i}].predictablerhythmic2check`}
                              checked={
                                values?.page20[index]?.predictablerhythmic[i]
                                  ?.predictablerhythmic2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].predictablerhythmic[${i}].predictablerhythmic3check`}
                              checked={
                                values?.page20[index]?.predictablerhythmic[i]
                                  ?.predictablerhythmic3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].predictablerhythmic[${i}].predictablerhythmic4check`}
                              checked={
                                values?.page20[index]?.predictablerhythmic[i]
                                  ?.predictablerhythmic4check
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
                {nonpredictablerhythmic &&
                  nonpredictablerhythmic.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            45.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">R</span>
                            </span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].nonpredictablerhythmic[${i}].nonpredictablerhythmic0check`}
                              checked={
                                values?.page20[index]?.nonpredictablerhythmic[i]
                                  ?.nonpredictablerhythmic0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].nonpredictablerhythmic[${i}].nonpredictablerhythmic1check`}
                              checked={
                                values?.page20[index]?.nonpredictablerhythmic[i]
                                  ?.nonpredictablerhythmic1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].nonpredictablerhythmic[${i}].nonpredictablerhythmic2check`}
                              checked={
                                values?.page20[index]?.nonpredictablerhythmic[i]
                                  ?.nonpredictablerhythmic2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].nonpredictablerhythmic[${i}].nonpredictablerhythmic3check`}
                              checked={
                                values?.page20[index]?.nonpredictablerhythmic[i]
                                  ?.nonpredictablerhythmic3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={1}
                            xs={2}
                            style={{ textAlign: "center" }}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].nonpredictablerhythmic[${i}].nonpredictablerhythmic4check`}
                              checked={
                                values?.page20[index]?.nonpredictablerhythmic[i]
                                  ?.nonpredictablerhythmic4check
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
                {Noticeable &&
                  Noticeable.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={1}
                            sm={1}
                            className="inner-div"
                          >
                            46.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid
                            lg={2}
                            md={3}
                            xs={12}
                            sm={12}
                            className="inner-div"
                            style={{ padding: "0 77px", maxWidth: "100%" }}
                          >
                            <p className="prefrence-div">
                              <div className="prefrence-2">
                                <Grid item className="grid-item1">
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    name={`page20[${index}].Noticeable[${i}].Noticeable0check`}
                                    checked={values?.page20[index]?.Noticeable[i]?.Noticeable0check}
                                    onChange={formik.handleChange}
                                  />
                                  <div style={{ fontSize: "15px" }}>right</div>
                                </Grid>
                                <Grid item className="grid-item1">
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    name={`page20[${index}].Noticeable[${i}].Noticeable1check`}
                                    checked={values?.page20[index]?.Noticeable[i]?.Noticeable1check}
                                    onChange={formik.handleChange}
                                  />
                                  <div style={{ fontSize: "15px", textAlign: "end" }}>left</div>
                                </Grid>
                                <Grid item className="grid-item1">
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    name={`page20[${index}].Noticeable[${i}].Noticeable2check`}
                                    checked={values?.page20[index]?.Noticeable[i]?.Noticeable2check}
                                    onChange={formik.handleChange}
                                  />
                                  <div style={{ fontSize: "15px" }}>no</div>
                                </Grid>
                              </div>
                            </p>
                            <div className="prefrence-1" style={{ fontSize: "15px" }}>
                              preference
                            </div>
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
                  <div>Temporal Lobe Auditory Association</div>
                  <div>Cortex (Area 22)</div>
                </Grid>
                <Grid item lg={1} md={1} sm={1} className="heading-span">
                  0
                </Grid>
                <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
                  1
                </Grid>
                <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
                  2
                </Grid>
                <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
                  3
                </Grid>
                <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
                  4
                </Grid>
              </SoftTypography>

              <SoftBox className="sections">
                {comprehending &&
                  comprehending.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            47.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">L</span>
                            </span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].comprehending[${i}].comprehending0check`}
                              checked={values?.page20[index]?.comprehending[i]?.comprehending0check}
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
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].comprehending[${i}].comprehending1check`}
                              checked={values?.page20[index]?.comprehending[i]?.comprehending1check}
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
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].comprehending[${i}].comprehending2check`}
                              checked={values?.page20[index]?.comprehending[i]?.comprehending2check}
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
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].comprehending[${i}].comprehending3check`}
                              checked={values?.page20[index]?.comprehending[i]?.comprehending3check}
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
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].comprehending[${i}].comprehending4check`}
                              checked={values?.page20[index]?.comprehending[i]?.comprehending4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {emotions &&
                  emotions.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            style={{ fontSize: "15px", textAlign: "center" }}
                            item
                            lg={1}
                            md={1}
                            xs={12}
                            className="inner-div"
                          >
                            48.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12} className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                            <span className="left-side">
                              <span className="left-span">R</span>
                            </span>
                          </Grid>
                          <Grid
                            item
                            lg={1}
                            md={1}
                            sm={2}
                            xs={2}
                            className="inner-div twolinecheckcss"
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].emotions[${i}].emotions0check`}
                              checked={values?.page20[index]?.emotions[i]?.emotions0check}
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
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].emotions[${i}].emotions1check`}
                              checked={values?.page20[index]?.emotions[i]?.emotions1check}
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
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].emotions[${i}].emotions2check`}
                              checked={values?.page20[index]?.emotions[i]?.emotions2check}
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
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].emotions[${i}].emotions3check`}
                              checked={values?.page20[index]?.emotions[i]?.emotions3check}
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
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page20[${index}].emotions[${i}].emotions4check`}
                              checked={values?.page20[index]?.emotions[i]?.emotions4check}
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
