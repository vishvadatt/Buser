import React from "react";
import "../style.css";
import { Checkbox, Grid, Radio } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
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

  const Memorylessefficient = [
    {
      name: "Memory less efficient",
    },
  ];
  const impactsdailyactivities = [
    {
      name: "Memory loss that impacts daily activities",
    },
  ];
  const Confusionaboutdates = [
    {
      name: "Confusion about dates, the passage of time, or place",
    },
  ];

  const Difficultyrememberingevents = [
    {
      name: "Difficulty remembering events",
    },
  ];
  const Misplacementofthings = [
    {
      name: "Misplacement of things and difficulty retracing steps ",
    },
  ];
  const addresses = [
    {
      name: "Difficulty with memory of locations (addresses)",
    },
  ];

  const visualmemory = [
    {
      name: "Difficulty with visual memory",
    },
  ];

  const Alwaysforgetting = [
    {
      name: "Always forgetting where you put items such as keys, wallet, phone, etc.",
    },
  ];
  const rememberingfaces = [
    {
      name: "Difficulty remembering faces",
    },
  ];
  const Difficultyrememberingnames = [
    {
      name: "Difficulty remembering names with faces",
    },
  ];

  const Difficultywithrememberingwords = [
    {
      name: "Difficulty with remembering words",
    },
  ];
  const Difficultyrememberingnumbers = [
    {
      name: "Difficulty remembering numbers",
    },
  ];

  const Difficultyrememberingtostay = [
    {
      name: "Difficulty remembering to stay or be on time",
    },
  ];

  const Difficultyindiscriminating = [
    {
      name: "Difficulty in discriminating similar shades of color",
    },
  ];
  const Dullnessofcolors = [
    {
      name: "Dullness of colors in visual field",
    },
  ];

  const Difficultycoordinatingvisualinputs = [
    {
      name: "Difficulty coordinating visual inputs and hand movements, resulting in an inability to efficiently reach out for objects",
    },
  ];

  const Floaterorhalos = [
    {
      name: "Floater or halos in visual field ",
    },
  ];

  return (
    <>
      <SoftBox>
        {/* <Grid container spacing={2} style={{margin:'0 auto'}}> */}
        {/* <Grid item lg={5.8} xs={12} style={{ border: "2px solid black", margin: "5px" }}> */}
        <SoftBox>
          <SoftTypography
            // fontSize="25px"
            marginTop="0px"
            className="intro"
          >
            <Grid lg={7} md={7} xs={12} sm={12} className="heading-1">
              <div>Medial Temporal lobe and </div>
              <div>Hippocampus</div>
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
            {Memorylessefficient &&
              Memorylessefficient.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        49.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].Memorylessefficient[${i}].Memorylessefficient0check`}
                          checked={
                            values?.page20[index]?.Memorylessefficient[i]?.Memorylessefficient0check
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
                          name={`page20[${index}].Memorylessefficient[${i}].Memorylessefficient1check`}
                          checked={
                            values?.page20[index]?.Memorylessefficient[i]?.Memorylessefficient1check
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
                          name={`page20[${index}].Memorylessefficient[${i}].Memorylessefficient2check`}
                          checked={
                            values?.page20[index]?.Memorylessefficient[i]?.Memorylessefficient2check
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
                          name={`page20[${index}].Memorylessefficient[${i}].Memorylessefficient3check`}
                          checked={
                            values?.page20[index]?.Memorylessefficient[i]?.Memorylessefficient3check
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
                          name={`page20[${index}].Memorylessefficient[${i}].Memorylessefficient4check`}
                          checked={
                            values?.page20[index]?.Memorylessefficient[i]?.Memorylessefficient4check
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
            {impactsdailyactivities &&
              impactsdailyactivities.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        50.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].impactsdailyactivities[${i}].impactsdailyactivities0check`}
                          checked={
                            values?.page20[index]?.impactsdailyactivities[i]
                              ?.impactsdailyactivities0check
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
                          name={`page20[${index}].impactsdailyactivities[${i}].impactsdailyactivities1check`}
                          checked={
                            values?.page20[index]?.impactsdailyactivities[i]
                              ?.impactsdailyactivities1check
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
                          name={`page20[${index}].impactsdailyactivities[${i}].impactsdailyactivities2check`}
                          checked={
                            values?.page20[index]?.impactsdailyactivities[i]
                              ?.impactsdailyactivities2check
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
                          name={`page20[${index}].impactsdailyactivities[${i}].impactsdailyactivities3check`}
                          checked={
                            values?.page20[index]?.impactsdailyactivities[i]
                              ?.impactsdailyactivities3check
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
                          name={`page20[${index}].impactsdailyactivities[${i}].impactsdailyactivities4check`}
                          checked={
                            values?.page20[index]?.impactsdailyactivities[i]
                              ?.impactsdailyactivities4check
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
            {Confusionaboutdates &&
              Confusionaboutdates.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        51.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Confusionaboutdates[${i}].Confusionaboutdates0check`}
                          checked={
                            values?.page20[index]?.Confusionaboutdates[i]?.Confusionaboutdates0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Confusionaboutdates[${i}].Confusionaboutdates1check`}
                          checked={
                            values?.page20[index]?.Confusionaboutdates[i]?.Confusionaboutdates1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Confusionaboutdates[${i}].Confusionaboutdates2check`}
                          checked={
                            values?.page20[index]?.Confusionaboutdates[i]?.Confusionaboutdates2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Confusionaboutdates[${i}].Confusionaboutdates3check`}
                          checked={
                            values?.page20[index]?.Confusionaboutdates[i]?.Confusionaboutdates3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Confusionaboutdates[${i}].Confusionaboutdates4check`}
                          checked={
                            values?.page20[index]?.Confusionaboutdates[i]?.Confusionaboutdates4check
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
            {Difficultyrememberingevents &&
              Difficultyrememberingevents.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        52.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].Difficultyrememberingevents[${i}].Difficultyrememberingevents0check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingevents[i]
                              ?.Difficultyrememberingevents0check
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
                          name={`page20[${index}].Difficultyrememberingevents[${i}].Difficultyrememberingevents1check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingevents[i]
                              ?.Difficultyrememberingevents1check
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
                          name={`page20[${index}].Difficultyrememberingevents[${i}].Difficultyrememberingevents2check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingevents[i]
                              ?.Difficultyrememberingevents2check
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
                          name={`page20[${index}].Difficultyrememberingevents[${i}].Difficultyrememberingevents3check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingevents[i]
                              ?.Difficultyrememberingevents3check
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
                          name={`page20[${index}].Difficultyrememberingevents[${i}].Difficultyrememberingevents4check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingevents[i]
                              ?.Difficultyrememberingevents4check
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
            {Misplacementofthings &&
              Misplacementofthings.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        53.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Misplacementofthings[${i}].Misplacementofthings0check`}
                          checked={
                            values?.page20[index]?.Misplacementofthings[i]
                              ?.Misplacementofthings0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Misplacementofthings[${i}].Misplacementofthings1check`}
                          checked={
                            values?.page20[index]?.Misplacementofthings[i]
                              ?.Misplacementofthings1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Misplacementofthings[${i}].Misplacementofthings2check`}
                          checked={
                            values?.page20[index]?.Misplacementofthings[i]
                              ?.Misplacementofthings2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss "
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Misplacementofthings[${i}].Misplacementofthings3check`}
                          checked={
                            values?.page20[index]?.Misplacementofthings[i]
                              ?.Misplacementofthings3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Misplacementofthings[${i}].Misplacementofthings4check`}
                          checked={
                            values?.page20[index]?.Misplacementofthings[i]
                              ?.Misplacementofthings4check
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
            {addresses &&
              addresses.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        54.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].addresses[${i}].addresses0check`}
                          checked={values?.page20[index]?.addresses[i]?.addresses0check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].addresses[${i}].addresses1check`}
                          checked={values?.page20[index]?.addresses[i]?.addresses1check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].addresses[${i}].addresses2check`}
                          checked={values?.page20[index]?.addresses[i]?.addresses2check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].addresses[${i}].addresses3check`}
                          checked={values?.page20[index]?.addresses[i]?.addresses3check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].addresses[${i}].addresses4check`}
                          checked={values?.page20[index]?.addresses[i]?.addresses4check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </SoftBox>

          <SoftBox className="sections">
            {visualmemory &&
              visualmemory.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        55.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].visualmemory[${i}].visualmemory0check`}
                          checked={values?.page20[index]?.visualmemory[i]?.visualmemory0check}
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
                          name={`page20[${index}].visualmemory[${i}].visualmemory1check`}
                          checked={values?.page20[index]?.visualmemory[i]?.visualmemory1check}
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
                          name={`page20[${index}].visualmemory[${i}].visualmemory2check`}
                          checked={values?.page20[index]?.visualmemory[i]?.visualmemory2check}
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
                          name={`page20[${index}].visualmemory[${i}].visualmemory3check`}
                          checked={values?.page20[index]?.visualmemory[i]?.visualmemory3check}
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
                          name={`page20[${index}].visualmemory[${i}].visualmemory4check`}
                          checked={values?.page20[index]?.visualmemory[i]?.visualmemory4check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </SoftBox>

          <SoftBox className="sections">
            {Alwaysforgetting &&
              Alwaysforgetting.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        56.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Alwaysforgetting[${i}].Alwaysforgetting0check`}
                          checked={
                            values?.page20[index]?.Alwaysforgetting[i]?.Alwaysforgetting0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Alwaysforgetting[${i}].Alwaysforgetting1check`}
                          checked={
                            values?.page20[index]?.Alwaysforgetting[i]?.Alwaysforgetting1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Alwaysforgetting[${i}].Alwaysforgetting2check`}
                          checked={
                            values?.page20[index]?.Alwaysforgetting[i]?.Alwaysforgetting2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Alwaysforgetting[${i}].Alwaysforgetting3check`}
                          checked={
                            values?.page20[index]?.Alwaysforgetting[i]?.Alwaysforgetting3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={1}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Alwaysforgetting[${i}].Alwaysforgetting4check`}
                          checked={
                            values?.page20[index]?.Alwaysforgetting[i]?.Alwaysforgetting4check
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
            {rememberingfaces &&
              rememberingfaces.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        57.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].rememberingfaces[${i}].rememberingfaces0check`}
                          checked={
                            values?.page20[index]?.rememberingfaces[i]?.rememberingfaces0check
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
                          name={`page20[${index}].rememberingfaces[${i}].rememberingfaces1check`}
                          checked={
                            values?.page20[index]?.rememberingfaces[i]?.rememberingfaces1check
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
                          name={`page20[${index}].rememberingfaces[${i}].rememberingfaces2check`}
                          checked={
                            values?.page20[index]?.rememberingfaces[i]?.rememberingfaces2check
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
                          name={`page20[${index}].rememberingfaces[${i}].rememberingfaces3check`}
                          checked={
                            values?.page20[index]?.rememberingfaces[i]?.rememberingfaces3check
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
                          name={`page20[${index}].rememberingfaces[${i}].rememberingfaces4check`}
                          checked={
                            values?.page20[index]?.rememberingfaces[i]?.rememberingfaces4check
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
            {Difficultyrememberingnames &&
              Difficultyrememberingnames.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        58.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Difficultyrememberingnames[${i}].Difficultyrememberingnames0check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnames[i]
                              ?.Difficultyrememberingnames0check
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
                          name={`page20[${index}].Difficultyrememberingnames[${i}].Difficultyrememberingnames1check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnames[i]
                              ?.Difficultyrememberingnames1check
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
                          name={`page20[${index}].Difficultyrememberingnames[${i}].Difficultyrememberingnames2check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnames[i]
                              ?.Difficultyrememberingnames2check
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
                          name={`page20[${index}].Difficultyrememberingnames[${i}].Difficultyrememberingnames3check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnames[i]
                              ?.Difficultyrememberingnames3check
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
                          name={`page20[${index}].Difficultyrememberingnames[${i}].Difficultyrememberingnames4check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnames[i]
                              ?.Difficultyrememberingnames4check
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
            {Difficultywithrememberingwords &&
              Difficultywithrememberingwords.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        59.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].Difficultywithrememberingwords[${i}].Difficultywithrememberingwords0check`}
                          checked={
                            values?.page20[index]?.Difficultywithrememberingwords[i]
                              ?.Difficultywithrememberingwords0check
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
                          name={`page20[${index}].Difficultywithrememberingwords[${i}].Difficultywithrememberingwords1check`}
                          checked={
                            values?.page20[index]?.Difficultywithrememberingwords[i]
                              ?.Difficultywithrememberingwords1check
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
                          name={`page20[${index}].Difficultywithrememberingwords[${i}].Difficultywithrememberingwords2check`}
                          checked={
                            values?.page20[index]?.Difficultywithrememberingwords[i]
                              ?.Difficultywithrememberingwords2check
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
                        className="inner-div "
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Difficultywithrememberingwords[${i}].Difficultywithrememberingwords3check`}
                          checked={
                            values?.page20[index]?.Difficultywithrememberingwords[i]
                              ?.Difficultywithrememberingwords3check
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
                          name={`page20[${index}].Difficultywithrememberingwords[${i}].Difficultywithrememberingwords4check`}
                          checked={
                            values?.page20[index]?.Difficultywithrememberingwords[i]
                              ?.Difficultywithrememberingwords4check
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
            {Difficultyrememberingnumbers &&
              Difficultyrememberingnumbers.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        60.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].Difficultyrememberingnumbers[${i}].Difficultyrememberingnumbers0check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnumbers[i]
                              ?.Difficultyrememberingnumbers0check
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
                          name={`page20[${index}].Difficultyrememberingnumbers[${i}].Difficultyrememberingnumbers1check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnumbers[i]
                              ?.Difficultyrememberingnumbers1check
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
                          name={`page20[${index}].Difficultyrememberingnumbers[${i}].Difficultyrememberingnumbers2check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnumbers[i]
                              ?.Difficultyrememberingnumbers2check
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
                          name={`page20[${index}].Difficultyrememberingnumbers[${i}].Difficultyrememberingnumbers3check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnumbers[i]
                              ?.Difficultyrememberingnumbers3check
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
                          name={`page20[${index}].Difficultyrememberingnumbers[${i}].Difficultyrememberingnumbers4check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingnumbers[i]
                              ?.Difficultyrememberingnumbers4check
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
            {Difficultyrememberingtostay &&
              Difficultyrememberingtostay.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        61.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].Difficultyrememberingtostay[${i}].Difficultyrememberingtostay0check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingtostay[i]
                              ?.Difficultyrememberingtostay0check
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
                          name={`page20[${index}].Difficultyrememberingtostay[${i}].Difficultyrememberingtostay1check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingtostay[i]
                              ?.Difficultyrememberingtostay1check
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
                          name={`page20[${index}].Difficultyrememberingtostay[${i}].Difficultyrememberingtostay2check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingtostay[i]
                              ?.Difficultyrememberingtostay2check
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
                          name={`page20[${index}].Difficultyrememberingtostay[${i}].Difficultyrememberingtostay3check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingtostay[i]
                              ?.Difficultyrememberingtostay3check
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
                          name={`page20[${index}].Difficultyrememberingtostay[${i}].Difficultyrememberingtostay4check`}
                          checked={
                            values?.page20[index]?.Difficultyrememberingtostay[i]
                              ?.Difficultyrememberingtostay4check
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
              <div>Occipital Lobe </div>
              <div>(Area, 17, 18, and 19)</div>
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
            {Difficultyindiscriminating &&
              Difficultyindiscriminating.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        62.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].Difficultyindiscriminating[${i}].Difficultyindiscriminating0check`}
                          checked={
                            values?.page20[index]?.Difficultyindiscriminating[i]
                              ?.Difficultyindiscriminating0check
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
                          name={`page20[${index}].Difficultyindiscriminating[${i}].Difficultyindiscriminating1check`}
                          checked={
                            values?.page20[index]?.Difficultyindiscriminating[i]
                              ?.Difficultyindiscriminating1check
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
                          name={`page20[${index}].Difficultyindiscriminating[${i}].Difficultyindiscriminating2check`}
                          checked={
                            values?.page20[index]?.Difficultyindiscriminating[i]
                              ?.Difficultyindiscriminating2check
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
                          name={`page20[${index}].Difficultyindiscriminating[${i}].Difficultyindiscriminating3check`}
                          checked={
                            values?.page20[index]?.Difficultyindiscriminating[i]
                              ?.Difficultyindiscriminating3check
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
                          name={`page20[${index}].Difficultyindiscriminating[${i}].Difficultyindiscriminating4check`}
                          checked={
                            values?.page20[index]?.Difficultyindiscriminating[i]
                              ?.Difficultyindiscriminating4check
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
            {Dullnessofcolors &&
              Dullnessofcolors.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        63.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={2}
                        xs={2}
                        className="inner-div "
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Dullnessofcolors[${i}].Dullnessofcolors0check`}
                          checked={
                            values?.page20[index]?.Dullnessofcolors[i]?.Dullnessofcolors0check
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
                          name={`page20[${index}].Dullnessofcolors[${i}].Dullnessofcolors1check`}
                          checked={
                            values?.page20[index]?.Dullnessofcolors[i]?.Dullnessofcolors1check
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
                          name={`page20[${index}].Dullnessofcolors[${i}].Dullnessofcolors2check`}
                          checked={
                            values?.page20[index]?.Dullnessofcolors[i]?.Dullnessofcolors2check
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
                          name={`page20[${index}].Dullnessofcolors[${i}].Dullnessofcolors3check`}
                          checked={
                            values?.page20[index]?.Dullnessofcolors[i]?.Dullnessofcolors3check
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
                          name={`page20[${index}].Dullnessofcolors[${i}].Dullnessofcolors4check`}
                          checked={
                            values?.page20[index]?.Dullnessofcolors[i]?.Dullnessofcolors4check
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
            {Difficultycoordinatingvisualinputs &&
              Difficultycoordinatingvisualinputs.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        64.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        md={1}
                        sm={2}
                        xs={2}
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Difficultycoordinatingvisualinputs[${i}].Difficultycoordinatingvisualinputs0check`}
                          checked={
                            values?.page20[index]?.Difficultycoordinatingvisualinputs[i]
                              ?.Difficultycoordinatingvisualinputs0check
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
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Difficultycoordinatingvisualinputs[${i}].Difficultycoordinatingvisualinputs1check`}
                          checked={
                            values?.page20[index]?.Difficultycoordinatingvisualinputs[i]
                              ?.Difficultycoordinatingvisualinputs1check
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
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Difficultycoordinatingvisualinputs[${i}].Difficultycoordinatingvisualinputs2check`}
                          checked={
                            values?.page20[index]?.Difficultycoordinatingvisualinputs[i]
                              ?.Difficultycoordinatingvisualinputs2check
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
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Difficultycoordinatingvisualinputs[${i}].Difficultycoordinatingvisualinputs3check`}
                          checked={
                            values?.page20[index]?.Difficultycoordinatingvisualinputs[i]
                              ?.Difficultycoordinatingvisualinputs3check
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
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page20[${index}].Difficultycoordinatingvisualinputs[${i}].Difficultycoordinatingvisualinputs4check`}
                          checked={
                            values?.page20[index]?.Difficultycoordinatingvisualinputs[i]
                              ?.Difficultycoordinatingvisualinputs4check
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
            {Floaterorhalos &&
              Floaterorhalos.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        md={1}
                        sm={1}
                        xs={12}
                        className="inner-div"
                      >
                        65.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
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
                          name={`page20[${index}].Floaterorhalos[${i}].Floaterorhalos0check`}
                          checked={values?.page20[index]?.Floaterorhalos[i]?.Floaterorhalos0check}
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
                          name={`page20[${index}].Floaterorhalos[${i}].Floaterorhalos1check`}
                          checked={values?.page20[index]?.Floaterorhalos[i]?.Floaterorhalos1check}
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
                          name={`page20[${index}].Floaterorhalos[${i}].Floaterorhalos2check`}
                          checked={values?.page20[index]?.Floaterorhalos[i]?.Floaterorhalos2check}
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
                          name={`page20[${index}].Floaterorhalos[${i}].Floaterorhalos3check`}
                          checked={values?.page20[index]?.Floaterorhalos[i]?.Floaterorhalos3check}
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
                          name={`page20[${index}].Floaterorhalos[${i}].Floaterorhalos4check`}
                          checked={values?.page20[index]?.Floaterorhalos[i]?.Floaterorhalos4check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </SoftBox>
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
