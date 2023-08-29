import React from "react";
import "../style.css";
import { Checkbox, Grid, Radio } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function index({ formik, index }) {
  const { values } = formik;

  const movement = [
    {
      name: "Initiating movements with your arm or leg has become more difficult",
    },
  ];

  const armLegHeaviness = [
    {
      name: "Feeling of arm or leg heaviness, especially when tired ",
    },
  ];
  const IncMuscleTightness = [
    {
      name: "Increased muscle tightness in your arm or leg ",
    },
  ];

  const muscleEndurance = [
    {
      name: "Reduced muscle endurance in your arm or leg",
    },
  ];
  const muscleFunction = [
    {
      name: "Noticeable difference in your  muscle function or strength from one side to the other",
    },
  ];

  const diffInMuscleTightness = [
    {
      name: "Noticeable difference in your  muscle tightness from one side to the other",
    },
  ];

  const difficultyinWords = [
    {
      name: "Difficulty producing words verbally, especially when fatigued",
    },
  ];
  const difficultyInSpeak = [
    {
      name: "Find the actual act of speaking difficult at times",
    },
  ];
  const changeSpeakingFluency = [
    {
      name: "Notice word pronunciation and speaking fluency change at times",
    },
  ];

  const PositionLimbs = [
    {
      name: "Difficulty in perception of position of limbs",
    },
  ];
  const spatialAwarness = [
    {
      name: "Difficulty with spatial awareness when moving, laying back in a chair, or leaning against a wall",
    },
  ];
  const bumpingBody = [
    {
      name: "Frequently bumping body or limbs into the wall or objects accidently",
    },
  ];
  const ReoccurringInjury = [
    {
      name: "Reoccurring injury in the same body part or side of the body",
    },
  ];

  const Hypersensitivities = [
    {
      name: "Hypersensitivities to touch or pain perception",
    },
  ];

  return (
    <>
      <SoftBox>
        <SoftTypography
          // fontSize="25px"
          marginTop="0px"
          className="intro"
        >
          <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
            <div>Frontal Lobe Precentral and ,</div>
            <div>Supplementary </div>
            <div>Motor Areas (Area 4 and 6)</div>
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
          {movement &&
            movement.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      18.
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
                        name={`page19[${index}].movement[${i}].movement0check`}
                        checked={values?.page19[index]?.movement[i]?.movement0check}
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
                        name={`page19[${index}].movement[${i}].movement1check`}
                        checked={values?.page19[index]?.movement[i]?.movement1check}
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
                        name={`page19[${index}].movement[${i}].movement2check`}
                        checked={values?.page19[index]?.movement[i]?.movement2check}
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
                        name={`page19[${index}].movement[${i}].movement3check`}
                        checked={values?.page19[index]?.movement[i]?.movement3check}
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
                        name={`page19[${index}].movement[${i}].movement4check`}
                        checked={values?.page19[index]?.movement[i]?.movement4check}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>

        <SoftBox className="sections">
          {armLegHeaviness &&
            armLegHeaviness.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      19.
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
                        name={`page19[${index}].armLegHeaviness[${i}].armLegHeaviness0check`}
                        checked={values?.page19[index]?.armLegHeaviness[i]?.armLegHeaviness0check}
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
                        name={`page19[${index}].armLegHeaviness[${i}].armLegHeaviness1check`}
                        checked={values?.page19[index]?.armLegHeaviness[i]?.armLegHeaviness1check}
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
                        name={`page19[${index}].armLegHeaviness[${i}].armLegHeaviness2check`}
                        checked={values?.page19[index]?.armLegHeaviness[i]?.armLegHeaviness2check}
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
                        name={`page19[${index}].armLegHeaviness[${i}].armLegHeaviness3check`}
                        checked={values?.page19[index]?.armLegHeaviness[i]?.armLegHeaviness3check}
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
                        name={`page19[${index}].armLegHeaviness[${i}].armLegHeaviness4check`}
                        checked={values?.page19[index]?.armLegHeaviness[i]?.armLegHeaviness4check}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>

        <SoftBox className="sections">
          {IncMuscleTightness &&
            IncMuscleTightness.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      20.
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
                        name={`page19[${index}].IncMuscleTightness[${i}].IncMuscleTightness0check`}
                        checked={
                          values?.page19[index]?.IncMuscleTightness[i]?.IncMuscleTightness0check
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
                        name={`page19[${index}].IncMuscleTightness[${i}].IncMuscleTightness1check`}
                        checked={
                          values?.page19[index]?.IncMuscleTightness[i]?.IncMuscleTightness1check
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
                        name={`page19[${index}].IncMuscleTightness[${i}].IncMuscleTightness2check`}
                        checked={
                          values?.page19[index]?.IncMuscleTightness[i]?.IncMuscleTightness2check
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
                        name={`page19[${index}].IncMuscleTightness[${i}].IncMuscleTightness3check`}
                        checked={
                          values?.page19[index]?.IncMuscleTightness[i]?.IncMuscleTightness3check
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
                        name={`page19[${index}].IncMuscleTightness[${i}].IncMuscleTightness4check`}
                        checked={
                          values?.page19[index]?.IncMuscleTightness[i]?.IncMuscleTightness4check
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
          {muscleEndurance &&
            muscleEndurance.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      21.
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
                        name={`page19[${index}].muscleEndurance[${i}].muscleEndurance0check`}
                        checked={values?.page19[index]?.muscleEndurance[i]?.muscleEndurance0check}
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
                        name={`page19[${index}].muscleEndurance[${i}].muscleEndurance1check`}
                        checked={values?.page19[index]?.muscleEndurance[i]?.muscleEndurance1check}
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
                        name={`page19[${index}].muscleEndurance[${i}].muscleEndurance2check`}
                        checked={values?.page19[index]?.muscleEndurance[i]?.muscleEndurance2check}
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
                        name={`page19[${index}].muscleEndurance[${i}].muscleEndurance3check`}
                        checked={values?.page19[index]?.muscleEndurance[i]?.muscleEndurance3check}
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
                        name={`page19[${index}].muscleEndurance[${i}].muscleEndurance4check`}
                        checked={values?.page19[index]?.muscleEndurance[i]?.muscleEndurance4check}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>
        <SoftBox className="sections">
          {muscleFunction &&
            muscleFunction.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div threelinecheckcss"
                    >
                      22.
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
                        name={`page19[${index}].muscleFunction[${i}].muscleFunction0check`}
                        checked={values?.page19[index]?.muscleFunction[i]?.muscleFunction0check}
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
                        name={`page19[${index}].muscleFunction[${i}].muscleFunction1check`}
                        checked={values?.page19[index]?.muscleFunction[i]?.muscleFunction1check}
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
                        name={`page19[${index}].muscleFunction[${i}].muscleFunction2check`}
                        checked={values?.page19[index]?.muscleFunction[i]?.muscleFunction2check}
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
                        name={`page19[${index}].muscleFunction[${i}].muscleFunction3check`}
                        checked={values?.page19[index]?.muscleFunction[i]?.muscleFunction3check}
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
                        name={`page19[${index}].muscleFunction[${i}].muscleFunction4check`}
                        checked={values?.page19[index]?.muscleFunction[i]?.muscleFunction4check}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>

        <SoftBox className="sections">
          {diffInMuscleTightness &&
            diffInMuscleTightness.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div threelinecheckcss"
                    >
                      23.
                    </Grid>
                    <Grid itemlg={6} md={6} xs={12} sm={12} className="inner-div">
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
                        name={`page19[${index}].diffInMuscleTightness[${i}].diffInMuscleTightness0check`}
                        checked={
                          values?.page19[index]?.diffInMuscleTightness[i]
                            ?.diffInMuscleTightness0check
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
                        name={`page19[${index}].diffInMuscleTightness[${i}].diffInMuscleTightness1check`}
                        checked={
                          values?.page19[index]?.diffInMuscleTightness[i]
                            ?.diffInMuscleTightness1check
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
                        name={`page19[${index}].diffInMuscleTightness[${i}].diffInMuscleTightness2check`}
                        checked={
                          values?.page19[index]?.diffInMuscleTightness[i]
                            ?.diffInMuscleTightness2check
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
                        name={`page19[${index}].diffInMuscleTightness[${i}].diffInMuscleTightness3check`}
                        checked={
                          values?.page19[index]?.diffInMuscleTightness[i]
                            ?.diffInMuscleTightness3check
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
                        name={`page19[${index}].diffInMuscleTightness[${i}].diffInMuscleTightness4check`}
                        checked={
                          values?.page19[index]?.diffInMuscleTightness[i]
                            ?.diffInMuscleTightness4check
                        }
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>
        <SoftTypography
          // fontSize="25px"
          marginTop="15px"
          className="intro"
        >
          <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
            <div>Frontal Lobe Broca’s Motor Speech</div>
            <div>Area (Area 44 and 45)</div>
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
          {difficultyinWords &&
            difficultyinWords.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      24.
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
                        name={`page19[${index}].difficultyinWords[${i}].difficultyinWords0check`}
                        checked={
                          values?.page19[index]?.difficultyinWords[i]?.difficultyinWords0check
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
                        name={`page19[${index}].difficultyinWords[${i}].difficultyinWords1check`}
                        checked={
                          values?.page19[index]?.difficultyinWords[i]?.difficultyinWords1check
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
                        name={`page19[${index}].difficultyinWords[${i}].difficultyinWords2check`}
                        checked={
                          values?.page19[index]?.difficultyinWords[i]?.difficultyinWords2check
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
                        name={`page19[${index}].difficultyinWords[${i}].difficultyinWords3check`}
                        checked={
                          values?.page19[index]?.difficultyinWords[i]?.difficultyinWords3check
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
                        name={`page19[${index}].difficultyinWords[${i}].difficultyinWords4check`}
                        checked={
                          values?.page19[index]?.difficultyinWords[i]?.difficultyinWords4check
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
          {difficultyInSpeak &&
            difficultyInSpeak.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      25.
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
                        name={`page19[${index}].difficultyInSpeak[${i}].difficultyInSpeak0check`}
                        checked={
                          values?.page19[index]?.difficultyInSpeak[i]?.difficultyInSpeak0check
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
                        name={`page19[${index}].difficultyInSpeak[${i}].difficultyInSpeak1check`}
                        checked={
                          values?.page19[index]?.difficultyInSpeak[i]?.difficultyInSpeak1check
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
                        name={`page19[${index}].difficultyInSpeak[${i}].difficultyInSpeak2check`}
                        checked={
                          values?.page19[index]?.difficultyInSpeak[i]?.difficultyInSpeak2check
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
                        name={`page19[${index}].difficultyInSpeak[${i}].difficultyInSpeak3check`}
                        checked={
                          values?.page19[index]?.difficultyInSpeak[i]?.difficultyInSpeak3check
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
                        name={`page19[${index}].difficultyInSpeak[${i}].difficultyInSpeak4check`}
                        checked={
                          values?.page19[index]?.difficultyInSpeak[i]?.difficultyInSpeak4check
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
          {changeSpeakingFluency &&
            changeSpeakingFluency.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      26.
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
                        name={`page19[${index}].changeSpeakingFluency[${i}].changeSpeakingFluency0check`}
                        checked={
                          values?.page19[index]?.changeSpeakingFluency[i]
                            ?.changeSpeakingFluency0check
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
                        name={`page19[${index}].changeSpeakingFluency[${i}].changeSpeakingFluency1check`}
                        checked={
                          values?.page19[index]?.changeSpeakingFluency[i]
                            ?.changeSpeakingFluency1check
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
                        name={`page19[${index}].changeSpeakingFluency[${i}].changeSpeakingFluency2check`}
                        checked={
                          values?.page19[index]?.changeSpeakingFluency[i]
                            ?.changeSpeakingFluency2check
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
                        name={`page19[${index}].changeSpeakingFluency[${i}].changeSpeakingFluency3check`}
                        checked={
                          values?.page19[index]?.changeSpeakingFluency[i]
                            ?.changeSpeakingFluency3check
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
                        name={`page19[${index}].changeSpeakingFluency[${i}].changeSpeakingFluency4check`}
                        checked={
                          values?.page19[index]?.changeSpeakingFluency[i]
                            ?.changeSpeakingFluency4check
                        }
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>
        <SoftTypography
          // fontSize="25px"
          marginTop="15px"
          className="intro"
        >
          <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
            <div>Parietal Somatosensory Area</div>
            <div>and Parietal Superior Lobule</div>
            <div>(Areas 3,1,2 and 7)</div>
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
          {PositionLimbs &&
            PositionLimbs.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      27.
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
                        name={`page19[${index}].PositionLimbs[${i}].PositionLimbs0check`}
                        checked={values?.page19[index]?.PositionLimbs[i]?.PositionLimbs0check}
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
                        name={`page19[${index}].PositionLimbs[${i}].PositionLimbs1check`}
                        checked={values?.page19[index]?.PositionLimbs[i]?.PositionLimbs1check}
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
                        name={`page19[${index}].PositionLimbs[${i}].PositionLimbs2check`}
                        checked={values?.page19[index]?.PositionLimbs[i]?.PositionLimbs2check}
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
                        name={`page19[${index}].PositionLimbs[${i}].PositionLimbs3check`}
                        checked={values?.page19[index]?.PositionLimbs[i]?.PositionLimbs3check}
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
                        name={`page19[${index}].PositionLimbs[${i}].PositionLimbs4check`}
                        checked={values?.page19[index]?.PositionLimbs[i]?.PositionLimbs4check}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>

        <SoftBox className="sections">
          {spatialAwarness &&
            spatialAwarness.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div threelinecheckcss"
                    >
                      28.
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
                        name={`page19[${index}].spatialAwarness[${i}].spatialAwarness0check`}
                        checked={values?.page19[index]?.spatialAwarness[i]?.spatialAwarness0check}
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
                        name={`page19[${index}].spatialAwarness[${i}].spatialAwarness1check`}
                        checked={values?.page19[index]?.spatialAwarness[i]?.spatialAwarness1check}
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
                        name={`page19[${index}].spatialAwarness[${i}].spatialAwarness2check`}
                        checked={values?.page19[index]?.spatialAwarness[i]?.spatialAwarness2check}
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
                        name={`page19[${index}].spatialAwarness[${i}].spatialAwarness3check`}
                        checked={values?.page19[index]?.spatialAwarness[i]?.spatialAwarness3check}
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
                        name={`page19[${index}].spatialAwarness[${i}].spatialAwarness4check`}
                        checked={values?.page19[index]?.spatialAwarness[i]?.spatialAwarness4check}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>
        <SoftBox className="sections">
          {bumpingBody &&
            bumpingBody.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      29.
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
                        name={`page19[${index}].bumpingBody[${i}].bumpingBody0check`}
                        checked={values?.page19[index]?.bumpingBody[i]?.bumpingBody0check}
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
                        name={`page19[${index}].bumpingBody[${i}].bumpingBody1check`}
                        checked={values?.page19[index]?.bumpingBody[i]?.bumpingBody1check}
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
                        name={`page19[${index}].bumpingBody[${i}].bumpingBody2check`}
                        checked={values?.page19[index]?.bumpingBody[i]?.bumpingBody2check}
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
                        name={`page19[${index}].bumpingBody[${i}].bumpingBody3check`}
                        checked={values?.page19[index]?.bumpingBody[i]?.bumpingBody3check}
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
                        name={`page19[${index}].bumpingBody[${i}].bumpingBody4check`}
                        checked={values?.page19[index]?.bumpingBody[i]?.bumpingBody4check}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>

        <SoftBox className="sections">
          {ReoccurringInjury &&
            ReoccurringInjury.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      30.
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
                        name={`page19[${index}].ReoccurringInjury[${i}].ReoccurringInjury0check`}
                        checked={
                          values?.page19[index]?.ReoccurringInjury[i]?.ReoccurringInjury0check
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
                        name={`page19[${index}].ReoccurringInjury[${i}].ReoccurringInjury1check`}
                        checked={
                          values?.page19[index]?.ReoccurringInjury[i]?.ReoccurringInjury1check
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
                        name={`page19[${index}].ReoccurringInjury[${i}].ReoccurringInjury2check`}
                        checked={
                          values?.page19[index]?.ReoccurringInjury[i]?.ReoccurringInjury2check
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
                        name={`page19[${index}].ReoccurringInjury[${i}].ReoccurringInjury3check`}
                        checked={
                          values?.page19[index]?.ReoccurringInjury[i]?.ReoccurringInjury3check
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
                        name={`page19[${index}].ReoccurringInjury[${i}].ReoccurringInjury4check`}
                        checked={
                          values?.page19[index]?.ReoccurringInjury[i]?.ReoccurringInjury4check
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
          {Hypersensitivities &&
            Hypersensitivities.map((data, i) => {
              return (
                <>
                  <Grid container className="border-div">
                    <Grid
                      item
                      style={{ fontSize: "15px", textAlign: "center" }}
                      lg={1}
                      md={1}
                      sm={1}
                      xs={1}
                      className="inner-div twolinecheckcss"
                    >
                      31.
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
                        name={`page19[${index}].Hypersensitivities[${i}].Hypersensitivities0check`}
                        checked={
                          values?.page19[index]?.Hypersensitivities[i]?.Hypersensitivities0check
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
                        name={`page19[${index}].Hypersensitivities[${i}].Hypersensitivities1check`}
                        checked={
                          values?.page19[index]?.Hypersensitivities[i]?.Hypersensitivities1check
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
                        name={`page19[${index}].Hypersensitivities[${i}].Hypersensitivities2check`}
                        checked={
                          values?.page19[index]?.Hypersensitivities[i]?.Hypersensitivities2check
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
                        name={`page19[${index}].Hypersensitivities[${i}].Hypersensitivities3check`}
                        checked={
                          values?.page19[index]?.Hypersensitivities[i]?.Hypersensitivities3check
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
                        name={`page19[${index}].Hypersensitivities[${i}].Hypersensitivities4check`}
                        checked={
                          values?.page19[index]?.Hypersensitivities[i]?.Hypersensitivities4check
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
    </>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default index;
