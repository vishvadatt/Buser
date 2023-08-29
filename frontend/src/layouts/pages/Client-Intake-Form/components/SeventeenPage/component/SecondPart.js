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

  const Crampingofhands = [
    {
      name: "Cramping of hands when writing",
    },
  ];

  const stoopedposture = [
    {
      name: "A stooped posture when walking",
    },
  ];

  const Voicehasbecomesofter = [
    {
      name: "Voice has become softer",
    },
  ];

  const Facialexpressionchanged = [
    {
      name: "Facial expression changed leading people to frequently ask if you are upset or angry",
    },
  ];

  const Uncontrollablemusclemovements = [
    {
      name: "Uncontrollable muscle movements",
    },
  ];
  const Intenseneedtoclear = [
    {
      name: "Intense need to clear your throat regularly or contract a group of muscles",
    },
  ];
  const Obsessivecompulsivetendencies = [
    {
      name: "Obsessive compulsive tendencies",
    },
  ];

  const Constantnervousness = [
    {
      name: "Constant nervousness and restless mind",
    },
  ];
  const Drymouthoreyes = [
    {
      name: "Dry mouth or eyes",
    },
  ];
  const Difficultyswallowing = [
    {
      name: "Difficulty swallowing supplements or large bites of food",
    },
  ];

  const tendencyforconstipation = [
    {
      name: "Slow bowel movements and tendency for constipation",
    },
  ];

  const Chronicdigestivecomplaints = [
    {
      name: "Chronic digestive complaints",
    },
  ];
  const bladderincontinenceresulting = [
    {
      name: "Bowel or bladder incontinence resulting in staining your underwear",
    },
  ];

  const Tendencyforanxiety = [
    {
      name: "Tendency for anxiety",
    },
  ];
  const Easilystartled = [
    {
      name: "Easily startled",
    },
  ];

  const Difficultyrelaxing = [
    {
      name: "Difficulty relaxing",
    },
  ];

  const Sensitivetobright = [
    {
      name: "Sensitive to bright or flashing lights",
    },
  ];

  const Episodesofracingheart = [
    {
      name: "Episodes of racing heart",
    },
  ];

  const Difficultysleeping = [
    {
      name: "Difficulty sleeping",
    },
  ];

  return (
    <>
      <SoftBox>
        {/* <Grid container spacing={2} style={{margin:'0 auto'}}> */}
        {/* <Grid item lg={5.8} xs={12} style={{ border: "2px solid black", margin: "5px" }}> */}
        <SoftBox>
          <SoftBox className="sections">
            {Crampingofhands &&
              Crampingofhands.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        81.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Crampingofhands[${i}].Crampingofhands0check`}
                          checked={values?.page21[index]?.Crampingofhands[i]?.Crampingofhands0check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Crampingofhands[${i}].Crampingofhands1check`}
                          checked={values?.page21[index]?.Crampingofhands[i]?.Crampingofhands1check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Crampingofhands[${i}].Crampingofhands2check`}
                          checked={values?.page21[index]?.Crampingofhands[i]?.Crampingofhands2check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Crampingofhands[${i}].Crampingofhands3check`}
                          checked={values?.page21[index]?.Crampingofhands[i]?.Crampingofhands3check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Crampingofhands[${i}].Crampingofhands4check`}
                          checked={values?.page21[index]?.Crampingofhands[i]?.Crampingofhands4check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </SoftBox>

          <SoftBox className="sections">
            {stoopedposture &&
              stoopedposture.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        82.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].stoopedposture[${i}].stoopedposture0check`}
                          checked={values?.page21[index]?.stoopedposture[i]?.stoopedposture0check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].stoopedposture[${i}].stoopedposture1check`}
                          checked={values?.page21[index]?.stoopedposture[i]?.stoopedposture1check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].stoopedposture[${i}].stoopedposture2check`}
                          checked={values?.page21[index]?.stoopedposture[i]?.stoopedposture2check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].stoopedposture[${i}].stoopedposture3check`}
                          checked={values?.page21[index]?.stoopedposture[i]?.stoopedposture3check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].stoopedposture[${i}].stoopedposture4check`}
                          checked={values?.page21[index]?.stoopedposture[i]?.stoopedposture4check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </SoftBox>

          <SoftBox className="sections">
            {Voicehasbecomesofter &&
              Voicehasbecomesofter.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        83.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Voicehasbecomesofter[${i}].Voicehasbecomesofter0check`}
                          checked={
                            values?.page21[index]?.Voicehasbecomesofter[i]
                              ?.Voicehasbecomesofter0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Voicehasbecomesofter[${i}].Voicehasbecomesofter1check`}
                          checked={
                            values?.page21[index]?.Voicehasbecomesofter[i]
                              ?.Voicehasbecomesofter1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Voicehasbecomesofter[${i}].Voicehasbecomesofter2check`}
                          checked={
                            values?.page21[index]?.Voicehasbecomesofter[i]
                              ?.Voicehasbecomesofter2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Voicehasbecomesofter[${i}].Voicehasbecomesofter3check`}
                          checked={
                            values?.page21[index]?.Voicehasbecomesofter[i]
                              ?.Voicehasbecomesofter3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Voicehasbecomesofter[${i}].Voicehasbecomesofter4check`}
                          checked={
                            values?.page21[index]?.Voicehasbecomesofter[i]
                              ?.Voicehasbecomesofter4check
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
            {Facialexpressionchanged &&
              Facialexpressionchanged.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        84.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Facialexpressionchanged[${i}].Facialexpressionchanged0check`}
                          checked={
                            values?.page21[index]?.Facialexpressionchanged[i]
                              ?.Facialexpressionchanged0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Facialexpressionchanged[${i}].Facialexpressionchanged1check`}
                          checked={
                            values?.page21[index]?.Facialexpressionchanged[i]
                              ?.Facialexpressionchanged1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Facialexpressionchanged[${i}].Facialexpressionchanged2check`}
                          checked={
                            values?.page21[index]?.Facialexpressionchanged[i]
                              ?.Facialexpressionchanged2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Facialexpressionchanged[${i}].Facialexpressionchanged3check`}
                          checked={
                            values?.page21[index]?.Facialexpressionchanged[i]
                              ?.Facialexpressionchanged3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div threelinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Facialexpressionchanged[${i}].Facialexpressionchanged4check`}
                          checked={
                            values?.page21[index]?.Facialexpressionchanged[i]
                              ?.Facialexpressionchanged4check
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
              <div>Basal Ganglia Indirect Pathway </div>
            </Grid>
            <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
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
            {Uncontrollablemusclemovements &&
              Uncontrollablemusclemovements.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        85.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Uncontrollablemusclemovements[${i}].Uncontrollablemusclemovements0check`}
                          checked={
                            values?.page21[index]?.Uncontrollablemusclemovements[i]
                              ?.Uncontrollablemusclemovements0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Uncontrollablemusclemovements[${i}].Uncontrollablemusclemovements1check`}
                          checked={
                            values?.page21[index]?.Uncontrollablemusclemovements[i]
                              ?.Uncontrollablemusclemovements1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Uncontrollablemusclemovements[${i}].Uncontrollablemusclemovements2check`}
                          checked={
                            values?.page21[index]?.Uncontrollablemusclemovements[i]
                              ?.Uncontrollablemusclemovements2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Uncontrollablemusclemovements[${i}].Uncontrollablemusclemovements3check`}
                          checked={
                            values?.page21[index]?.Uncontrollablemusclemovements[i]
                              ?.Uncontrollablemusclemovements3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Uncontrollablemusclemovements[${i}].Uncontrollablemusclemovements4check`}
                          checked={
                            values?.page21[index]?.Uncontrollablemusclemovements[i]
                              ?.Uncontrollablemusclemovements4check
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
            {Intenseneedtoclear &&
              Intenseneedtoclear.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        86.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Intenseneedtoclear[${i}].Intenseneedtoclear0check`}
                          checked={
                            values?.page21[index]?.Intenseneedtoclear[i]?.Intenseneedtoclear0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Intenseneedtoclear[${i}].Intenseneedtoclear1check`}
                          checked={
                            values?.page21[index]?.Intenseneedtoclear[i]?.Intenseneedtoclear1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Intenseneedtoclear[${i}].Intenseneedtoclear2check`}
                          checked={
                            values?.page21[index]?.Intenseneedtoclear[i]?.Intenseneedtoclear2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Intenseneedtoclear[${i}].Intenseneedtoclear3check`}
                          checked={
                            values?.page21[index]?.Intenseneedtoclear[i]?.Intenseneedtoclear3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Intenseneedtoclear[${i}].Intenseneedtoclear4check`}
                          checked={
                            values?.page21[index]?.Intenseneedtoclear[i]?.Intenseneedtoclear4check
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
            {Obsessivecompulsivetendencies &&
              Obsessivecompulsivetendencies.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        87.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Obsessivecompulsivetendencies[${i}].Obsessivecompulsivetendencies0check`}
                          checked={
                            values?.page21[index]?.Obsessivecompulsivetendencies[i]
                              ?.Obsessivecompulsivetendencies0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Obsessivecompulsivetendencies[${i}].Obsessivecompulsivetendencies1check`}
                          checked={
                            values?.page21[index]?.Obsessivecompulsivetendencies[i]
                              ?.Obsessivecompulsivetendencies1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Obsessivecompulsivetendencies[${i}].Obsessivecompulsivetendencies2check`}
                          checked={
                            values?.page21[index]?.Obsessivecompulsivetendencies[i]
                              ?.Obsessivecompulsivetendencies2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Obsessivecompulsivetendencies[${i}].Obsessivecompulsivetendencies3check`}
                          checked={
                            values?.page21[index]?.Obsessivecompulsivetendencies[i]
                              ?.Obsessivecompulsivetendencies3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Obsessivecompulsivetendencies[${i}].Obsessivecompulsivetendencies4check`}
                          checked={
                            values?.page21[index]?.Obsessivecompulsivetendencies[i]
                              ?.Obsessivecompulsivetendencies4check
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
            {Constantnervousness &&
              Constantnervousness.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        88.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Constantnervousness[${i}].Constantnervousness0check`}
                          checked={
                            values?.page21[index]?.Constantnervousness[i]?.Constantnervousness0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Constantnervousness[${i}].Constantnervousness1check`}
                          checked={
                            values?.page21[index]?.Constantnervousness[i]?.Constantnervousness1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Constantnervousness[${i}].Constantnervousness2check`}
                          checked={
                            values?.page21[index]?.Constantnervousness[i]?.Constantnervousness2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Constantnervousness[${i}].Constantnervousness3check`}
                          checked={
                            values?.page21[index]?.Constantnervousness[i]?.Constantnervousness3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Constantnervousness[${i}].Constantnervousness4check`}
                          checked={
                            values?.page21[index]?.Constantnervousness[i]?.Constantnervousness4check
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
              <div>Autonomic Reduced</div>
              <div>Parasympathetic Activity </div>
            </Grid>
            <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
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
            {Drymouthoreyes &&
              Drymouthoreyes.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        89.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Drymouthoreyes[${i}].Drymouthoreyes0check`}
                          checked={values?.page21[index]?.Drymouthoreyes[i]?.Drymouthoreyes0check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Drymouthoreyes[${i}].Drymouthoreyes1check`}
                          checked={values?.page21[index]?.Drymouthoreyes[i]?.Drymouthoreyes1check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Drymouthoreyes[${i}].Drymouthoreyes2check`}
                          checked={values?.page21[index]?.Drymouthoreyes[i]?.Drymouthoreyes2check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Drymouthoreyes[${i}].Drymouthoreyes3check`}
                          checked={values?.page21[index]?.Drymouthoreyes[i]?.Drymouthoreyes3check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Drymouthoreyes[${i}].Drymouthoreyes4check`}
                          checked={values?.page21[index]?.Drymouthoreyes[i]?.Drymouthoreyes4check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </SoftBox>
          <SoftBox className="sections">
            {Difficultyswallowing &&
              Difficultyswallowing.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        90.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyswallowing[${i}].Difficultyswallowing0check`}
                          checked={
                            values?.page21[index]?.Difficultyswallowing[i]
                              ?.Difficultyswallowing0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyswallowing[${i}].Difficultyswallowing1check`}
                          checked={
                            values?.page21[index]?.Difficultyswallowing[i]
                              ?.Difficultyswallowing1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyswallowing[${i}].Difficultyswallowing2check`}
                          checked={
                            values?.page21[index]?.Difficultyswallowing[i]
                              ?.Difficultyswallowing2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyswallowing[${i}].Difficultyswallowing3check`}
                          checked={
                            values?.page21[index]?.Difficultyswallowing[i]
                              ?.Difficultyswallowing3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyswallowing[${i}].Difficultyswallowing4check`}
                          checked={
                            values?.page21[index]?.Difficultyswallowing[i]
                              ?.Difficultyswallowing4check
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
            {tendencyforconstipation &&
              tendencyforconstipation.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        91.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].tendencyforconstipation[${i}].tendencyforconstipation0check`}
                          checked={
                            values?.page21[index]?.tendencyforconstipation[i]
                              ?.tendencyforconstipation0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].tendencyforconstipation[${i}].tendencyforconstipation1check`}
                          checked={
                            values?.page21[index]?.tendencyforconstipation[i]
                              ?.tendencyforconstipation1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].tendencyforconstipation[${i}].tendencyforconstipation2check`}
                          checked={
                            values?.page21[index]?.tendencyforconstipation[i]
                              ?.tendencyforconstipation2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].tendencyforconstipation[${i}].tendencyforconstipation3check`}
                          checked={
                            values?.page21[index]?.tendencyforconstipation[i]
                              ?.tendencyforconstipation3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].tendencyforconstipation[${i}].tendencyforconstipation4check`}
                          checked={
                            values?.page21[index]?.tendencyforconstipation[i]
                              ?.tendencyforconstipation4check
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
            {Chronicdigestivecomplaints &&
              Chronicdigestivecomplaints.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        92.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Chronicdigestivecomplaints[${i}].Chronicdigestivecomplaints0check`}
                          checked={
                            values?.page21[index]?.Chronicdigestivecomplaints[i]
                              ?.Chronicdigestivecomplaints0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Chronicdigestivecomplaints[${i}].Chronicdigestivecomplaints1check`}
                          checked={
                            values?.page21[index]?.Chronicdigestivecomplaints[i]
                              ?.Chronicdigestivecomplaints1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Chronicdigestivecomplaints[${i}].Chronicdigestivecomplaints2check`}
                          checked={
                            values?.page21[index]?.Chronicdigestivecomplaints[i]
                              ?.Chronicdigestivecomplaints2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Chronicdigestivecomplaints[${i}].Chronicdigestivecomplaints3check`}
                          checked={
                            values?.page21[index]?.Chronicdigestivecomplaints[i]
                              ?.Chronicdigestivecomplaints3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Chronicdigestivecomplaints[${i}].Chronicdigestivecomplaints4check`}
                          checked={
                            values?.page21[index]?.Chronicdigestivecomplaints[i]
                              ?.Chronicdigestivecomplaints4check
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
            {bladderincontinenceresulting &&
              bladderincontinenceresulting.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        93.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].bladderincontinenceresulting[${i}].bladderincontinenceresulting0check`}
                          checked={
                            values?.page21[index]?.bladderincontinenceresulting[i]
                              ?.bladderincontinenceresulting0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].bladderincontinenceresulting[${i}].bladderincontinenceresulting1check`}
                          checked={
                            values?.page21[index]?.bladderincontinenceresulting[i]
                              ?.bladderincontinenceresulting1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].bladderincontinenceresulting[${i}].bladderincontinenceresulting2check`}
                          checked={
                            values?.page21[index]?.bladderincontinenceresulting[i]
                              ?.bladderincontinenceresulting2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].bladderincontinenceresulting[${i}].bladderincontinenceresulting3check`}
                          checked={
                            values?.page21[index]?.bladderincontinenceresulting[i]
                              ?.bladderincontinenceresulting3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div twolinecheckcss"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].bladderincontinenceresulting[${i}].bladderincontinenceresulting4check`}
                          checked={
                            values?.page21[index]?.bladderincontinenceresulting[i]
                              ?.bladderincontinenceresulting4check
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
              <div>Autonomic Increased</div>
              <div>Sympathetic Activity</div>
            </Grid>
            <Grid item lg={1} sm={1} md={1} xs={1} className="heading-span">
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
            {Tendencyforanxiety &&
              Tendencyforanxiety.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        94.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Tendencyforanxiety[${i}].Tendencyforanxiety0check`}
                          checked={
                            values?.page21[index]?.Tendencyforanxiety[i]?.Tendencyforanxiety0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Tendencyforanxiety[${i}].Tendencyforanxiety1check`}
                          checked={
                            values?.page21[index]?.Tendencyforanxiety[i]?.Tendencyforanxiety1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Tendencyforanxiety[${i}].Tendencyforanxiety2check`}
                          checked={
                            values?.page21[index]?.Tendencyforanxiety[i]?.Tendencyforanxiety2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Tendencyforanxiety[${i}].Tendencyforanxiety3check`}
                          checked={
                            values?.page21[index]?.Tendencyforanxiety[i]?.Tendencyforanxiety3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Tendencyforanxiety[${i}].Tendencyforanxiety4check`}
                          checked={
                            values?.page21[index]?.Tendencyforanxiety[i]?.Tendencyforanxiety4check
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
            {Easilystartled &&
              Easilystartled.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        95.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Easilystartled[${i}].Easilystartled0check`}
                          checked={values?.page21[index]?.Easilystartled[i]?.Easilystartled0check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Easilystartled[${i}].Easilystartled1check`}
                          checked={values?.page21[index]?.Easilystartled[i]?.Easilystartled1check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Easilystartled[${i}].Easilystartled2check`}
                          checked={values?.page21[index]?.Easilystartled[i]?.Easilystartled2check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Easilystartled[${i}].Easilystartled3check`}
                          checked={values?.page21[index]?.Easilystartled[i]?.Easilystartled3check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Easilystartled[${i}].Easilystartled4check`}
                          checked={values?.page21[index]?.Easilystartled[i]?.Easilystartled4check}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </SoftBox>

          <SoftBox className="sections">
            {Difficultyrelaxing &&
              Difficultyrelaxing.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        96.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyrelaxing[${i}].Difficultyrelaxing0check`}
                          checked={
                            values?.page21[index]?.Difficultyrelaxing[i]?.Difficultyrelaxing0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyrelaxing[${i}].Difficultyrelaxing1check`}
                          checked={
                            values?.page21[index]?.Difficultyrelaxing[i]?.Difficultyrelaxing1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyrelaxing[${i}].Difficultyrelaxing2check`}
                          checked={
                            values?.page21[index]?.Difficultyrelaxing[i]?.Difficultyrelaxing2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyrelaxing[${i}].Difficultyrelaxing3check`}
                          checked={
                            values?.page21[index]?.Difficultyrelaxing[i]?.Difficultyrelaxing3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultyrelaxing[${i}].Difficultyrelaxing4check`}
                          checked={
                            values?.page21[index]?.Difficultyrelaxing[i]?.Difficultyrelaxing4check
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
            {Sensitivetobright &&
              Sensitivetobright.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        97.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Sensitivetobright[${i}].Sensitivetobright0check`}
                          checked={
                            values?.page21[index]?.Sensitivetobright[i]?.Sensitivetobright0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Sensitivetobright[${i}].Sensitivetobright1check`}
                          checked={
                            values?.page21[index]?.Sensitivetobright[i]?.Sensitivetobright1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Sensitivetobright[${i}].Sensitivetobright2check`}
                          checked={
                            values?.page21[index]?.Sensitivetobright[i]?.Sensitivetobright2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Sensitivetobright[${i}].Sensitivetobright3check`}
                          checked={
                            values?.page21[index]?.Sensitivetobright[i]?.Sensitivetobright3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Sensitivetobright[${i}].Sensitivetobright4check`}
                          checked={
                            values?.page21[index]?.Sensitivetobright[i]?.Sensitivetobright4check
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
            {Episodesofracingheart &&
              Episodesofracingheart.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        98.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Episodesofracingheart[${i}].Episodesofracingheart0check`}
                          checked={
                            values?.page21[index]?.Episodesofracingheart[i]
                              ?.Episodesofracingheart0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Episodesofracingheart[${i}].Episodesofracingheart1check`}
                          checked={
                            values?.page21[index]?.Episodesofracingheart[i]
                              ?.Episodesofracingheart1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Episodesofracingheart[${i}].Episodesofracingheart2check`}
                          checked={
                            values?.page21[index]?.Episodesofracingheart[i]
                              ?.Episodesofracingheart2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Episodesofracingheart[${i}].Episodesofracingheart3check`}
                          checked={
                            values?.page21[index]?.Episodesofracingheart[i]
                              ?.Episodesofracingheart3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Episodesofracingheart[${i}].Episodesofracingheart4check`}
                          checked={
                            values?.page21[index]?.Episodesofracingheart[i]
                              ?.Episodesofracingheart4check
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
            {Difficultysleeping &&
              Difficultysleeping.map((data, i) => {
                return (
                  <>
                    <Grid container className="border-div">
                      <Grid
                        style={{ fontSize: "15px", textAlign: "center" }}
                        item
                        lg={1}
                        sm={1}
                        md={1}
                        xs={1}
                        className="inner-div"
                      >
                        99.
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12} className="inner-div">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultysleeping[${i}].Difficultysleeping0check`}
                          checked={
                            values?.page21[index]?.Difficultysleeping[i]?.Difficultysleeping0check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultysleeping[${i}].Difficultysleeping1check`}
                          checked={
                            values?.page21[index]?.Difficultysleeping[i]?.Difficultysleeping1check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultysleeping[${i}].Difficultysleeping2check`}
                          checked={
                            values?.page21[index]?.Difficultysleeping[i]?.Difficultysleeping2check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultysleeping[${i}].Difficultysleeping3check`}
                          checked={
                            values?.page21[index]?.Difficultysleeping[i]?.Difficultysleeping3check
                          }
                          onChange={formik.handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        lg={1}
                        sm={2}
                        md={1}
                        xs={2}
                        className="inner-div"
                        style={{ textAlign: "center" }}
                      >
                        <Checkbox
                          style={{ marginLeft: "5px" }}
                          name={`page21[${index}].Difficultysleeping[${i}].Difficultysleeping4check`}
                          checked={
                            values?.page21[index]?.Difficultysleeping[i]?.Difficultysleeping4check
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
      </SoftBox>
    </>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default index;
