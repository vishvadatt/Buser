import React from "react";
import "../style.css";
import { Checkbox, Grid, Radio } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import SecondPart from "../component/secondForm";

function index({ formik, index }) {
  const { values } = formik;
  //let date = new Date().toLocaleDateString("en-CA");

  const { clientName:clientNameV ,date:dateV} = values.page19[index];

  const restraint = [
    {
      name: "Difficulty with restraint and controlling impulses or desires",
    },
  ];
  const emotionalinstability = [
    {
      name: "Emotional instability (lability)",
    },
  ];
  const difficultyinPlanning = [
    {
      name: "Difficulty planning and organizing",
    },
  ];

  const difficultyinDecision = [
    {
      name: "Difficulty making decisions ",
    },
  ];
  const lackMotivation = [
    {
      name: "Lack of motivation, enthusiasm, interest and drive (apathetic)",
    },
  ];

  const difficultyinSound = [
    {
      name: "Difficulty getting a sound or melody out of your thoughts (Perseveration)",
    },
  ];
  const Constantlyevents = [
    {
      name: "Constantly repeat events or thoughts with difficulty letting go",
    },
  ];
  const difficultyinTask = [
    {
      name: "Difficulty initiating and finishing tasks",
    },
  ];
  const depressionEp = [
    {
      name: "Episodes of depression",
    },
  ];
  const mentalFatigue = [
    {
      name: "Mental fatigue",
    },
  ];
  const decreaseInAttention = [
    {
      name: "Decrease in attention span",
    },
  ];
  // const difficultyInlettingGo = [
  //   {
  //     name: "Constantly repeat events or thoughts with difficulty letting go",
  //   },
  // ];
  const difficultyInFocus = [
    {
      name: "Difficulty staying focused and concentrating for extended periods of time",
    },
  ];
  const difficultyInCreativity = [
    {
      name: "Difficulty with creativity, imagination, and intuition",
    },
  ];
  const difficultyInArtAppreciation = [
    {
      name: "Difficulty in appreciating art and music",
    },
  ];

  const difficultyInAnalytical = [
    {
      name: "Difficulty with analytical thought",
    },
  ];
  const difficultyInMath = [
    {
      name: "Difficulty with math, number skills and time consciousness",
    },
  ];
  const difficultyInIdeas = [
    {
      name: "Difficulty taking ideas, actions,  and words and putting them in a linear sequence",
    },
  ];

  return (
    <>
      <SoftBox mt={3} mb={3}>
        <SoftBox mt={1}>
          <Grid container>
            <Grid item lg={8} xs={12} md={12}>
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>NAME:</span>

              <input
                type="text"
                className="brainname"
                onChange={formik.handleChange}
                name={`page18[${index}].clientName`}
                value={clientNameV}
              />
            </Grid>

            <Grid item lg={3} xs={12} md={6}>
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>DATE:</span>

              <input
                max={date}
                type="date"
                className="brain-date"
                onChange={formik.handleChange}
                name={`page18[${index}].date`}
                value={dateV}
              />
            </Grid>
          </Grid>
        </SoftBox>
        {/* <Grid container spacing={2}>
        <Grid item lg={8} xs={12} className="name" >
            <span style={{ fontSize: "17px"}}>NAME:</span>
            <input
            type="text"
            name="name"
            label="Name"
            onChange={formik.handleChange}
            value={name}
            />
            </Grid>
            <Grid item lg={4}xs={12} className="date">
           
            <Grid container>
              <Grid item sm={12}  xs={12}>
            <span style={{ fontSize: "17px"}}>DATE:</span>
            </Grid> <Grid item  sm={12}  xs={12}><input
          type="date"
          name="date"
          label="date"
          onChange={formik.handleChange}
          value={date}
        /></Grid>
</Grid>
  </Grid>
  </Grid> */}
      </SoftBox>
      <SoftBox mb={3}>
        <Grid container spacing={2} style={{ margin: "0 auto" }}>
          <Grid
            item
            lg={5.8}
            xs={12}
            className="main-div"
            // style={{ border: "2px solid black", margin: "5px" }}
          >
            <SoftBox>
              <SoftTypography
                // fontSize="25px"
                marginTop="0px"
                className="intro"
              >
                <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
                  <div>Frontal lobe Prefrontal,</div>
                  <div>Dorsolateral and Orbitofrontal </div>
                  <div>(Areas 9, 10, 11, and 12)</div>
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
                {restraint &&
                  restraint.map((data, i) => {
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
                            1.
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
                              name={`page19[${index}].restraint[${i}].restraint0check`}
                              checked={values?.page19[index]?.restraint[i]?.restraint0check}
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
                              name={`page19[${index}].restraint[${i}].restraint1check`}
                              checked={values?.page19[index]?.restraint[i]?.restraint1check}
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
                              name={`page19[${index}].restraint[${i}].restraint2check`}
                              checked={values?.page19[index]?.restraint[i]?.restraint2check}
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
                              name={`page19[${index}].restraint[${i}].restraint3check`}
                              checked={values?.page19[index]?.restraint[i]?.restraint3check}
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
                              name={`page19[${index}].restraint[${i}].restraint4check`}
                              checked={values?.page19[index]?.restraint[i]?.restraint4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {emotionalinstability &&
                  emotionalinstability.map((data, i) => {
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
                            className="inner-div"
                          >
                            2.
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
                              name={`page19[${index}].emotionalinstability[${i}].emotionalinstability0check`}
                              checked={
                                values?.page19[index]?.emotionalinstability[i]
                                  ?.emotionalinstability0check
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
                              name={`page19[${index}].emotionalinstability[${i}].emotionalinstability1check`}
                              checked={
                                values?.page19[index]?.emotionalinstability[i]
                                  ?.emotionalinstability1check
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
                              name={`page19[${index}].emotionalinstability[${i}].emotionalinstability2check`}
                              checked={
                                values?.page19[index]?.emotionalinstability[i]
                                  ?.emotionalinstability2check
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
                              name={`page19[${index}].emotionalinstability[${i}].emotionalinstability3check`}
                              checked={
                                values?.page19[index]?.emotionalinstability[i]
                                  ?.emotionalinstability3check
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
                              name={`page19[${index}].emotionalinstability[${i}].emotionalinstability4check`}
                              checked={
                                values?.page19[index]?.emotionalinstability[i]
                                  ?.emotionalinstability4check
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
                {difficultyinPlanning &&
                  difficultyinPlanning.map((data, i) => {
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
                            className="inner-div"
                          >
                            3.
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
                              name={`page19[${index}].difficultyinPlanning[${i}].difficultyinPlanning0check`}
                              checked={
                                values?.page19[index]?.difficultyinPlanning[i]
                                  ?.difficultyinPlanning0check
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
                              name={`page19[${index}].difficultyinPlanning[${i}].difficultyinPlanning1check`}
                              checked={
                                values?.page19[index]?.difficultyinPlanning[i]
                                  ?.difficultyinPlanning1check
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
                              name={`page19[${index}].difficultyinPlanning[${i}].difficultyinPlanning2check`}
                              checked={
                                values?.page19[index]?.difficultyinPlanning[i]
                                  ?.difficultyinPlanning2check
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
                              name={`page19[${index}].difficultyinPlanning[${i}].difficultyinPlanning3check`}
                              checked={
                                values?.page19[index]?.difficultyinPlanning[i]
                                  ?.difficultyinPlanning3check
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
                              name={`page19[${index}].difficultyinPlanning[${i}].difficultyinPlanning4check`}
                              checked={
                                values?.page19[index]?.difficultyinPlanning[i]
                                  ?.difficultyinPlanning4check
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
                {difficultyinDecision &&
                  difficultyinDecision.map((data, i) => {
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
                            className="inner-div"
                          >
                            4.
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
                              name={`page19[${index}].difficultyinDecision[${i}].difficultyinDecision0check`}
                              checked={
                                values?.page19[index]?.difficultyinDecision[i]
                                  ?.difficultyinDecision0check
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
                              name={`page19[${index}].difficultyinDecision[${i}].difficultyinDecision1check`}
                              checked={
                                values?.page19[index]?.difficultyinDecision[i]
                                  ?.difficultyinDecision1check
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
                              name={`page19[${index}].difficultyinDecision[${i}].difficultyinDecision2check`}
                              checked={
                                values?.page19[index]?.difficultyinDecision[i]
                                  ?.difficultyinDecision2check
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
                              name={`page19[${index}].difficultyinDecision[${i}].difficultyinDecision3check`}
                              checked={
                                values?.page19[index]?.difficultyinDecision[i]
                                  ?.difficultyinDecision3check
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
                              name={`page19[${index}].difficultyinDecision[${i}].difficultyinDecision4check`}
                              checked={
                                values?.page19[index]?.difficultyinDecision[i]
                                  ?.difficultyinDecision4check
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
                {lackMotivation &&
                  lackMotivation.map((data, i) => {
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
                            5.
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
                              name={`page19[${index}].lackMotivation[${i}].lackMotivation0check`}
                              checked={
                                values?.page19[index]?.lackMotivation[i]?.lackMotivation0check
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
                              name={`page19[${index}].lackMotivation[${i}].lackMotivation1check`}
                              checked={
                                values?.page19[index]?.lackMotivation[i]?.lackMotivation1check
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
                              name={`page19[${index}].lackMotivation[${i}].lackMotivation2check`}
                              checked={
                                values?.page19[index]?.lackMotivation[i]?.lackMotivation2check
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
                              name={`page19[${index}].lackMotivation[${i}].lackMotivation3check`}
                              checked={
                                values?.page19[index]?.lackMotivation[i]?.lackMotivation3check
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
                              name={`page19[${index}].lackMotivation[${i}].lackMotivation4check`}
                              checked={
                                values?.page19[index]?.lackMotivation[i]?.lackMotivation4check
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
                {difficultyinSound &&
                  difficultyinSound.map((data, i) => {
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
                            6.
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
                              name={`page19[${index}].difficultyinSound[${i}].difficultyinSound0check`}
                              checked={
                                values?.page19[index]?.difficultyinSound[i]?.difficultyinSound0check
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
                              name={`page19[${index}].difficultyinSound[${i}].difficultyinSound1check`}
                              checked={
                                values?.page19[index]?.difficultyinSound[i]?.difficultyinSound1check
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
                              name={`page19[${index}].difficultyinSound[${i}].difficultyinSound2check`}
                              checked={
                                values?.page19[index]?.difficultyinSound[i]?.difficultyinSound2check
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
                              name={`page19[${index}].difficultyinSound[${i}].difficultyinSound3check`}
                              checked={
                                values?.page19[index]?.difficultyinSound[i]?.difficultyinSound3check
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
                              name={`page19[${index}].difficultyinSound[${i}].difficultyinSound4check`}
                              checked={
                                values?.page19[index]?.difficultyinSound[i]?.difficultyinSound4check
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
                {Constantlyevents &&
                  Constantlyevents.map((data, i) => {
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
                            7.
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
                              name={`page19[${index}].Constantlyevents[${i}].Constantlyevents0Check`}
                              checked={
                                values?.page19[index]?.Constantlyevents[i]?.Constantlyevents0Check
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
                              name={`page19[${index}].Constantlyevents[${i}].Constantlyevents1Check`}
                              checked={
                                values?.page19[index]?.Constantlyevents[i]?.Constantlyevents1Check
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
                              name={`page19[${index}].Constantlyevents[${i}].Constantlyevents2Check`}
                              checked={
                                values?.page19[index]?.Constantlyevents[i]?.Constantlyevents2Check
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
                              name={`page19[${index}].Constantlyevents[${i}].Constantlyevents3Check`}
                              checked={
                                values?.page19[index]?.Constantlyevents[i]?.Constantlyevents3Check
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
                              name={`page19[${index}].Constantlyevents[${i}].Constantlyevents4Check`}
                              checked={
                                values?.page19[index]?.Constantlyevents[i]?.Constantlyevents4Check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
              {/* <SoftBox className="sections">
                {difficultyInlettingGo &&
                  difficultyInlettingGo.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            item
                            style={{ fontSize: "15px", textAlign:'center' }}
                            lg={1} md={1} sm={1} xs={1}
                            className="inner-div twolinecheckcss"
                          >
                            7.
                          </Grid>
                          <Grid item lg={6} md={6} xs={12} sm={12 } className="inner-div">
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} md={1} sm={2} xs={2} className="inner-div"  style={{textAlign:'center'}}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`difficultyInlettingGo[${i}].difficultyInlettingGo0check`}
                              checked={values.difficultyInlettingGo[i]?.difficultyInlettingGo0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} md={1} sm={2} xs={2} className="inner-div"  style={{textAlign:'center'}}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`difficultyInlettingGo[${i}].difficultyInlettingGo1check`}
                              checked={values.difficultyInlettingGo[i]?.difficultyInlettingGo1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} md={1} sm={2} xs={2} className="inner-div"   style={{textAlign:'center'}}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`difficultyInlettingGo[${i}].difficultyInlettingGo2check`}
                              checked={values.difficultyInlettingGo[i]?.difficultyInlettingGo2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} md={1} sm={2} xs={2} className="inner-div"  style={{textAlign:'center'}}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`difficultyInlettingGo[${i}].difficultyInlettingGo3check`}
                              checked={values.difficultyInlettingGo[i]?.difficultyInlettingGo3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} md={1} sm={2} xs={2} className="inner-div"  style={{textAlign:'center'}}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`difficultyInlettingGo[${i}].difficultyInlettingGo4check`}
                              checked={values.difficultyInlettingGo[i]?.difficultyInlettingGo4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox> */}
              <SoftBox className="sections">
                {difficultyinTask &&
                  difficultyinTask.map((data, i) => {
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
                            className="inner-div"
                          >
                            8.
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
                              name={`page19[${index}].difficultyinTask[${i}].difficultyinTask0check`}
                              checked={
                                values?.page19[index]?.difficultyinTask[i]?.difficultyinTask0check
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
                              name={`page19[${index}].difficultyinTask[${i}].difficultyinTask1check`}
                              checked={
                                values?.page19[index]?.difficultyinTask[i]?.difficultyinTask1check
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
                              name={`page19[${index}].difficultyinTask[${i}].difficultyinTask2check`}
                              checked={
                                values?.page19[index]?.difficultyinTask[i]?.difficultyinTask2check
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
                              name={`page19[${index}].difficultyinTask[${i}].difficultyinTask3check`}
                              checked={
                                values?.page19[index]?.difficultyinTask[i]?.difficultyinTask3check
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
                              name={`page19[${index}].difficultyinTask[${i}].difficultyinTask4check`}
                              checked={
                                values?.page19[index]?.difficultyinTask[i]?.difficultyinTask4check
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
                {depressionEp &&
                  depressionEp.map((data, i) => {
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
                            className="inner-div"
                          >
                            9.
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
                              name={`page19[${index}].depressionEp[${i}].depressionEp0check`}
                              checked={values?.page19[index]?.depressionEp[i]?.depressionEp0check}
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
                              name={`page19[${index}].depressionEp[${i}].depressionEp1check`}
                              checked={values?.page19[index]?.depressionEp[i]?.depressionEp1check}
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
                              name={`page19[${index}].depressionEp[${i}].depressionEp2check`}
                              checked={values?.page19[index]?.depressionEp[i]?.depressionEp2check}
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
                              name={`page19[${index}].depressionEp[${i}].depressionEp3check`}
                              checked={values?.page19[index]?.depressionEp[i]?.depressionEp3check}
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
                              name={`page19[${index}].depressionEp[${i}].depressionEp4check`}
                              checked={values?.page19[index]?.depressionEp[i]?.depressionEp4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {mentalFatigue &&
                  mentalFatigue.map((data, i) => {
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
                            className="inner-div"
                          >
                            10.
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
                              name={`page19[${index}].mentalFatigue[${i}].mentalFatigue0check`}
                              checked={values?.page19[index]?.mentalFatigue[i]?.mentalFatigue0check}
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
                              name={`page19[${index}].mentalFatigue[${i}].mentalFatigue1check`}
                              checked={values?.page19[index]?.mentalFatigue[i]?.mentalFatigue1check}
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
                              name={`page19[${index}].mentalFatigue[${i}].mentalFatigue2check`}
                              checked={values?.page19[index]?.mentalFatigue[i]?.mentalFatigue2check}
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
                              name={`page19[${index}].mentalFatigue[${i}].mentalFatigue3check`}
                              checked={values?.page19[index]?.mentalFatigue[i]?.mentalFatigue3check}
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
                              name={`page19[${index}].mentalFatigue[${i}].mentalFatigue4check`}
                              checked={values?.page19[index]?.mentalFatigue[i]?.mentalFatigue4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>

              <SoftBox className="sections">
                {decreaseInAttention &&
                  decreaseInAttention.map((data, i) => {
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
                            className="inner-div"
                          >
                            11.
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
                              name={`page19[${index}].decreaseInAttention[${i}].decreaseInAttention0check`}
                              checked={
                                values?.page19[index]?.decreaseInAttention[i]
                                  ?.decreaseInAttention0check
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
                              name={`page19[${index}].decreaseInAttention[${i}].decreaseInAttention1check`}
                              checked={
                                values?.page19[index]?.decreaseInAttention[i]
                                  ?.decreaseInAttention1check
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
                              name={`page19[${index}].decreaseInAttention[${i}].decreaseInAttention2check`}
                              checked={
                                values?.page19[index]?.decreaseInAttention[i]
                                  ?.decreaseInAttention2check
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
                              name={`page19[${index}].decreaseInAttention[${i}].decreaseInAttention3check`}
                              checked={
                                values?.page19[index]?.decreaseInAttention[i]
                                  ?.decreaseInAttention3check
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
                              name={`page19[${index}].decreaseInAttention[${i}].decreaseInAttention4check`}
                              checked={
                                values?.page19[index]?.decreaseInAttention[i]
                                  ?.decreaseInAttention4check
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
                {difficultyInFocus &&
                  difficultyInFocus.map((data, i) => {
                    return (
                      <>
                        <Grid container className="border-div">
                          <Grid
                            item
                            style={{ fontSize: "15px", textAlign: "center", paddingTop: "5px" }}
                            lg={1}
                            md={1}
                            sm={1}
                            xs={1}
                            className="inner-div threelinecheckcss"
                          >
                            12.
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
                              name={`page19[${index}].difficultyInFocus[${i}].difficultyInFocus0check`}
                              checked={
                                values?.page19[index]?.difficultyInFocus[i]?.difficultyInFocus0check
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
                              name={`page19[${index}].difficultyInFocus[${i}].difficultyInFocus1check`}
                              checked={
                                values?.page19[index]?.difficultyInFocus[i]?.difficultyInFocus1check
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
                              name={`page19[${index}].difficultyInFocus[${i}].difficultyInFocus2check`}
                              checked={
                                values?.page19[index]?.difficultyInFocus[i]?.difficultyInFocus2check
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
                              name={`page19[${index}].difficultyInFocus[${i}].difficultyInFocus3check`}
                              checked={
                                values?.page19[index]?.difficultyInFocus[i]?.difficultyInFocus3check
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
                              name={`page19[${index}].difficultyInFocus[${i}].difficultyInFocus4check`}
                              checked={
                                values?.page19[index]?.difficultyInFocus[i]?.difficultyInFocus4check
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
                {difficultyInCreativity &&
                  difficultyInCreativity.map((data, i) => {
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
                            13.
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
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page19[${index}].difficultyInCreativity[${i}].difficultyInCreativity0check`}
                              checked={
                                values?.page19[index]?.difficultyInCreativity[i]
                                  ?.difficultyInCreativity0check
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
                              name={`page19[${index}].difficultyInCreativity[${i}].difficultyInCreativity1check`}
                              checked={
                                values?.page19[index]?.difficultyInCreativity[i]
                                  ?.difficultyInCreativity1check
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
                              name={`page19[${index}].difficultyInCreativity[${i}].difficultyInCreativity2check`}
                              checked={
                                values?.page19[index]?.difficultyInCreativity[i]
                                  ?.difficultyInCreativity2check
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
                              name={`page19[${index}].difficultyInCreativity[${i}].difficultyInCreativity3check`}
                              checked={
                                values?.page19[index]?.difficultyInCreativity[i]
                                  ?.difficultyInCreativity3check
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
                              name={`page19[${index}].difficultyInCreativity[${i}].difficultyInCreativity4check`}
                              checked={
                                values?.page19[index]?.difficultyInCreativity[i]
                                  ?.difficultyInCreativity4check
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
                {difficultyInArtAppreciation &&
                  difficultyInArtAppreciation.map((data, i) => {
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
                            14.
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
                            className="inner-div"
                            style={{ textAlign: "center" }}
                          >
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page19[${index}].difficultyInArtAppreciation[${i}].difficultyInArtAppreciation0check`}
                              checked={
                                values?.page19[index]?.difficultyInArtAppreciation[i]
                                  ?.difficultyInArtAppreciation0check
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
                              name={`page19[${index}].difficultyInArtAppreciation[${i}].difficultyInArtAppreciation1check`}
                              checked={
                                values?.page19[index]?.difficultyInArtAppreciation[i]
                                  ?.difficultyInArtAppreciation1check
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
                              name={`page19[${index}].difficultyInArtAppreciation[${i}].difficultyInArtAppreciation2check`}
                              checked={
                                values?.page19[index]?.difficultyInArtAppreciation[i]
                                  ?.difficultyInArtAppreciation2check
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
                              name={`page19[${index}].difficultyInArtAppreciation[${i}].difficultyInArtAppreciation3check`}
                              checked={
                                values?.page19[index]?.difficultyInArtAppreciation[i]
                                  ?.difficultyInArtAppreciation3check
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
                              name={`page19[${index}].difficultyInArtAppreciation[${i}].difficultyInArtAppreciation4check`}
                              checked={
                                values?.page19[index]?.difficultyInArtAppreciation[i]
                                  ?.difficultyInArtAppreciation4check
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
                {difficultyInAnalytical &&
                  difficultyInAnalytical.map((data, i) => {
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
                            className="inner-div"
                          >
                            15.
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
                              name={`page19[${index}].difficultyInAnalytical[${i}].difficultyInAnalytical0check`}
                              checked={
                                values?.page19[index]?.difficultyInAnalytical[i]
                                  ?.difficultyInAnalytical0check
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
                              name={`page19[${index}].difficultyInAnalytical[${i}].difficultyInAnalytical1check`}
                              checked={
                                values?.page19[index]?.difficultyInAnalytical[i]
                                  ?.difficultyInAnalytical1check
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
                              name={`page19[${index}].difficultyInAnalytical[${i}].difficultyInAnalytical2check`}
                              checked={
                                values?.page19[index]?.difficultyInAnalytical[i]
                                  ?.difficultyInAnalytical2check
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
                              name={`page19[${index}].difficultyInAnalytical[${i}].difficultyInAnalytical3check`}
                              checked={
                                values?.page19[index]?.difficultyInAnalytical[i]
                                  ?.difficultyInAnalytical3check
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
                              name={`page19[${index}].difficultyInAnalytical[${i}].difficultyInAnalytical4check`}
                              checked={
                                values?.page19[index]?.difficultyInAnalytical[i]
                                  ?.difficultyInAnalytical4check
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
                {difficultyInMath &&
                  difficultyInMath.map((data, i) => {
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
                            16.
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
                              name={`page19[${index}].difficultyInMath[${i}].difficultyInMath0check`}
                              checked={
                                values?.page19[index]?.difficultyInMath[i]?.difficultyInMath0check
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
                              name={`page19[${index}].difficultyInMath[${i}].difficultyInMath1check`}
                              checked={
                                values?.page19[index]?.difficultyInMath[i]?.difficultyInMath1check
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
                              name={`page19[${index}].difficultyInMath[${i}].difficultyInMath2check`}
                              checked={
                                values?.page19[index]?.difficultyInMath[i]?.difficultyInMath2check
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
                              name={`page19[${index}].difficultyInMath[${i}].difficultyInMath3check`}
                              checked={
                                values?.page19[index]?.difficultyInMath[i]?.difficultyInMath3check
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
                              name={`page19[${index}].difficultyInMath[${i}].difficultyInMath4check`}
                              checked={
                                values?.page19[index]?.difficultyInMath[i]?.difficultyInMath4check
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
                {difficultyInIdeas &&
                  difficultyInIdeas.map((data, i) => {
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
                            17.
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
                              name={`page19[${index}].difficultyInIdeas[${i}].difficultyInIdeas0check`}
                              checked={
                                values?.page19[index]?.difficultyInIdeas[i]?.difficultyInIdeas0check
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
                              name={`page19[${index}].difficultyInIdeas[${i}].difficultyInIdeas1check`}
                              checked={
                                values?.page19[index]?.difficultyInIdeas[i]?.difficultyInIdeas1check
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
                              name={`page19[${index}].difficultyInIdeas[${i}].difficultyInIdeas2check`}
                              checked={
                                values?.page19[index]?.difficultyInIdeas[i]?.difficultyInIdeas2check
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
                              name={`page19[${index}].difficultyInIdeas[${i}].difficultyInIdeas3check`}
                              checked={
                                values?.page19[index]?.difficultyInIdeas[i]?.difficultyInIdeas3check
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
                              name={`page19[${index}].difficultyInIdeas[${i}].difficultyInIdeas4check`}
                              checked={
                                values?.page19[index]?.difficultyInIdeas[i]?.difficultyInIdeas4check
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
          <Grid
            item
            lg={5.8}
            xs={12}
            className="main-div"
            // style={{ border: "2px solid black", margin: "5px" }}
          >
            <SecondPart formik={formik} index={index} />
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
