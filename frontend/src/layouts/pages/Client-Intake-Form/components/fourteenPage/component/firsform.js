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
  } = values.page18[index];
  console.log(values, "vvv");
  const CategoryXII = [
    {
      name: "Cannot stay asleep",
    },
    {
      name: "Crave salt",
    },
    {
      name: "Slow starter in the morning",
    },
    {
      name: "Afternoon fatigue",
    },
    {
      name: "Dizziness when standing up quickly",
    },
    {
      name: "Afternoon headaches",
    },
    {
      name: "Headaches with exertion or stress",
    },
    {
      name: "Weak nails",
    },
  ];
  const CategoryXIII = [
    {
      name: "Cannot fall asleep",
    },
    {
      name: "Perspire easily",
    },
    {
      name: "Under a high amount of stress",
    },
    {
      name: "Weight gain when under stress",
    },
    {
      name: "Wake up tired even after 6 or more hours of sleep",
    },
    {
      name: "Excessive perspiration or perspiration with little or no activity",
    },
  ];
  const CategoryXIV = [
    {
      name: "Edema and swelling in ankles and wrists",
    },
    {
      name: "Muscle cramping",
    },
    {
      name: "Poor muscle endurance",
    },
    {
      name: "Frequent urination",
    },
    {
      name: "Frequent thirst",
    },
    {
      name: "Crave salt",
    },
    {
      name: "Abnormal sweating from minimal activity",
    },
    {
      name: "Alteration in bowel regularity",
    },
    {
      name: "Inability to hold breath for long periods",
    },
    {
      name: "Shallow, rapid breathing",
    },
  ];

  const CategoryXV = [
    {
      name: "Tired/sluggish",
    },
    {
      name: "Feel cold―hands, feet, all over",
    },
    {
      name: "Require excessive amounts of sleep to function properly",
    },
    {
      name: "Increase in weight even with low-calorie diet",
    },
    {
      name: "Gain weight easily",
    },
    {
      name: "Difficult, infrequent bowel movements",
    },
    {
      name: "Depression/lack of motivation",
    },
    {
      name: "Morning headaches that wear off as the day progresses",
    },
    {
      name: "Outer third of eyebrow thins",
    },
    {
      name: "Thinning of hair on scalp, face, or genitals, or excessive hair loss",
    },
    {
      name: "Dryness of skin and/or scalp",
    },
    {
      name: "Mental sluggishness",
    },
  ];
  const CategoryXVI = [
    {
      name: "Heart palpitations",
    },
    {
      name: "Inward trembling",
    },
    {
      name: "Increased pulse even at rest",
    },
    {
      name: "Nervous and emotional",
    },
    {
      name: "Insomnia",
    },
  ];
  const CategoryXVICont = [
    {
      name: "Night sweats",
    },
    {
      name: "Difficulty gaining weight",
    },
  ];

  const CategoryXVII = [
    {
      name: "Urination difficulty or dribbling",
    },
    {
      name: "Frequent urination",
    },
    {
      name: "Pain inside of legs or heels",
    },
    {
      name: "Feeling of incomplete bowel emptying",
    },
    {
      name: "Leg twitching at night",
    },
  ];
  const CategoryXVIII = [
    {
      name: "Decreased libido",
    },
    {
      name: "Decreased number of spontaneous morning erections",
    },
    {
      name: "Decreased fullness of erections",
    },
    {
      name: "Difficulty maintaining morning erections",
    },
    {
      name: "Spells of mental fatigue",
    },
    {
      name: "Inability to concentrate",
    },
    {
      name: "Episodes of depression",
    },
    {
      name: "Muscle soreness",
    },
    {
      name: "Decreased physical stamina",
    },
    {
      name: "Unexplained weight gain",
    },
    {
      name: "Increase in fat distribution around chest and hips",
    },
    {
      name: "Sweating attacks",
    },

    {
      name: "More emotional than in the past",
    },
  ];
  const CategoryXIX = [
    {
      name: "Perimenopausal",
    },
    {
      name: "Alternating menstrual cycle lengths",
    },
    {
      name: "Extended menstrual cycle (greater than 32 days)",
    },
    {
      name: "Shortened menstrual cycle (less than 24 days)",
    },
    {
      name: "Pain and cramping during periods",
    },
    {
      name: "Scanty blood flow",
    },
    {
      name: "Heavy blood flow",
    },
    {
      name: "Breast pain and swelling during menses",
    },
    {
      name: "Pelvic pain during menses",
    },
    {
      name: "Irritable and depressed during menses",
    },
    {
      name: "Acne",
    },
    {
      name: "Facial hair growth",
    },
    {
      name: "Hair loss/thinning",
    },
  ];
  const CategoryXX = [
    {
      name: "How many years have you been menopausal?",
    },

    {
      name: "Since menopause, do you ever have uterine bleeding?",
    },
    {
      name: "Hot flashes",
    },
    {
      name: "Mental fogginess",
    },
    {
      name: "Disinterest in sex",
    },
    {
      name: "Mood swings",
    },
    {
      name: "Depression",
    },
    {
      name: "Painful intercourse",
    },
    {
      name: "Shrinking breasts",
    },
    {
      name: "Facial hair growth",
    },
    {
      name: "Acne",
    },
    {
      name: "Increased vaginal pain, dryness, or itching",
    },
  ];
  return (
    <>
      <SoftBox mb={3}>
        <Grid container spacing={2} style={{ margin: "0 auto" }}>
          <Grid
            item
            lg={5.8}
            xs={12}
            style={{ border: "2px solid black", margin: "5px", marginRight: "16px" }}
          >
            <SoftBox>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XII
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>

              <SoftBox className="sections">
                {CategoryXII &&
                  CategoryXII.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} md={1} xs={1} sm={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXII[${i}].CategoryXII0check`}
                              checked={values?.page18[index]?.CategoryXII[i]?.CategoryXII0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} md={1} xs={1} sm={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXII[${i}].CategoryXII1check`}
                              checked={values?.page18[index]?.CategoryXII[i]?.CategoryXII1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} md={1} xs={1} sm={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXII[${i}].CategoryXII2check`}
                              checked={values?.page18[index]?.CategoryXII[i]?.CategoryXII2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} md={1} xs={1} sm={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXII[${i}].CategoryXII3check`}
                              checked={values?.page18[index]?.CategoryXII[i]?.CategoryXII3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XIII
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>

              <SoftBox className="sections">
                {CategoryXIII &&
                  CategoryXIII.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXIII[${i}].CategoryXIII0check`}
                              checked={values?.page18[index]?.CategoryXIII[i]?.CategoryXIII0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXIII[${i}].CategoryXIII1check`}
                              checked={values?.page18[index]?.CategoryXIII[i]?.CategoryXIII1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXIII[${i}].CategoryXIII2check`}
                              checked={values?.page18[index]?.CategoryXIII[i]?.CategoryXIII2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXIII[${i}].CategoryXIII3check`}
                              checked={values?.page18[index]?.CategoryXIII[i]?.CategoryXIII3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XIV
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>

              <SoftBox className="sections">
                {CategoryXIV &&
                  CategoryXIV.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXIV[${i}].CategoryXIV0check`}
                              checked={values?.page18[index]?.CategoryXIV[i]?.CategoryXIV0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXIV[${i}].CategoryXIV1check`}
                              checked={values?.page18[index]?.CategoryXIV[i]?.CategoryXIV1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXIV[${i}].CategoryXIV2check`}
                              checked={values?.page18[index]?.CategoryXIV[i]?.CategoryXIV2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXIV[${i}].CategoryXIV3check`}
                              checked={values?.page18[index]?.CategoryXIV[i]?.CategoryXIV3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XV
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryXV &&
                  CategoryXV.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXV[${i}].CategoryXV0check`}
                              checked={values?.page18[index]?.CategoryXV[i]?.CategoryXV0check}
                              onChange={formik.handleChange}
                              // onChange={(e) => {formik.setFieldValue(`CategoryXV[${i}].CategoryXV0check`,e.target.checked)}}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXV[${i}].CategoryXV1check`}
                              checked={values?.page18[index]?.CategoryXV[i]?.CategoryXV1check}
                              onChange={formik.handleChange}
                              // onChange={(e) => {formik.setFieldValue(`CategoryXV[${i}].CategoryXV1check`,e.target.checked)}}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXV[${i}].CategoryXV2check`}
                              checked={values?.page18[index]?.CategoryXV[i]?.CategoryXV2check}
                              onChange={formik.handleChange}
                              // onChange={(e) => {formik.setFieldValue(`CategoryXV[${i}].CategoryXV2check`,e.target.checked)}}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXV[${i}].CategoryXV3check`}
                              checked={values?.page18[index]?.CategoryXV[i]?.CategoryXV3check}
                              onChange={formik.handleChange}
                              // onChange={(e) => {formik.setFieldValue(`CategoryXV[${i}].CategoryXV3check`,e.target.checked)}}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XVI
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>

              <SoftBox className="sections">
                {CategoryXVI &&
                  CategoryXVI.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVI[${i}].CategoryXVI0check`}
                              checked={values?.page18[index]?.CategoryXVI[i]?.CategoryXVI0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVI[${i}].CategoryXVI1check`}
                              checked={values?.page18[index]?.CategoryXVI[i]?.CategoryXVI1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVI[${i}].CategoryXVI2check`}
                              checked={values?.page18[index]?.CategoryXVI[i]?.CategoryXVI2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVI[${i}].CategoryXVI3check`}
                              checked={values?.page18[index]?.CategoryXVI[i]?.CategoryXVI3check}
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
            style={{ border: "2px solid black", margin: "5px", marginRight: "16px" }}
          >
            <SoftBox>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XVI <i>(Cont.)</i>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>

              <SoftBox className="sections">
                {CategoryXVICont &&
                  CategoryXVICont.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVICont[${i}].CategoryXVICont0check`}
                              checked={
                                values?.page18[index]?.CategoryXVICont[i]?.CategoryXVICont0check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVICont[${i}].CategoryXVICont1check`}
                              checked={
                                values?.page18[index]?.CategoryXVICont[i]?.CategoryXVICont1check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVICont[${i}].CategoryXVICont2check`}
                              checked={
                                values?.page18[index]?.CategoryXVICont[i]?.CategoryXVICont2check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVICont[${i}].CategoryXVICont3check`}
                              checked={
                                values?.page18[index]?.CategoryXVICont[i]?.CategoryXVICont3check
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>{" "}
            <SoftBox style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XVII
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>

              <SoftBox className="sections">
                {CategoryXVII &&
                  CategoryXVII.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVII[${i}].CategoryXVII0check`}
                              checked={values?.page18[index]?.CategoryXVII[i]?.CategoryXVII0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVII[${i}].CategoryXVII1check`}
                              checked={values?.page18[index]?.CategoryXVII[i]?.CategoryXVII1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVII[${i}].CategoryXVII2check`}
                              checked={values?.page18[index]?.CategoryXVII[i]?.CategoryXVII2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVII[${i}].CategoryXVII3check`}
                              checked={values?.page18[index]?.CategoryXVII[i]?.CategoryXVII3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XVIII (Males Only)
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryXVIII &&
                  CategoryXVIII.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVIII[${i}].CategoryXVIII0check`}
                              checked={values?.page18[index]?.CategoryXVIII[i]?.CategoryXVIII0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVIII[${i}].CategoryXVIII1check`}
                              checked={values?.page18[index]?.CategoryXVIII[i]?.CategoryXVIII1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVIII[${i}].CategoryXVIII2check`}
                              checked={values?.page18[index]?.CategoryXVIII[i]?.CategoryXVIII2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page18[${index}].CategoryXVIII[${i}].CategoryXVIII3check`}
                              checked={values?.page18[index]?.CategoryXVIII[i]?.CategoryXVIII3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XIX (Menstruating Females Only)
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryXIX &&
                  CategoryXIX.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={7}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          {data.name == "Perimenopausal" ||
                          data.name == "Alternating menstrual cycle lengths" ||
                          data.name == "Extended menstrual cycle (greater than 32 days)" ||
                          data.name == "Shortened menstrual cycle (less than 24 days)" ? (
                            <>
                              <Grid
                                item
                                lg={1}
                                sm={1}
                                md={1}
                                xs={1}
                                ml={4}
                                style={{ display: "flex", justifyContent: "center" }}
                              >
                                <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                <Radio
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXIX[${i}].CategoryXIXradio`}
                                  checked={
                                    values?.page18[index]?.CategoryXIX[i]?.CategoryXIXradio == "yes"
                                  }
                                  onChange={formik.handleChange}
                                  value="yes"
                                />
                              </Grid>
                              <Grid
                                item
                                lg={1}
                                sm={1}
                                md={1}
                                xs={1}
                                ml={2}
                                style={{ display: "flex", justifyContent: "center" }}
                              >
                                <span style={{ fontSize: "16px", marginLeft: "8px" }}>No</span>
                                <Radio
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXIX[${i}].CategoryXIXradio`}
                                  checked={
                                    values?.page18[index]?.CategoryXIX[i]?.CategoryXIXradio == "no"
                                  }
                                  onChange={formik.handleChange}
                                  value="no"
                                />
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid item lg={1} sm={1} md={1} xs={1}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXIX[${i}].CategoryXIX0check`}
                                  checked={values?.page18[index]?.CategoryXIX[i]?.CategoryXIX0check}
                                  onChange={formik.handleChange}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={1}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXIX[${i}].CategoryXIX1check`}
                                  checked={values?.page18[index]?.CategoryXIX[i]?.CategoryXIX1check}
                                  onChange={formik.handleChange}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={1}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXIX[${i}].CategoryXIX2check`}
                                  checked={values?.page18[index]?.CategoryXIX[i]?.CategoryXIX2check}
                                  onChange={formik.handleChange}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={1}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXIX[${i}].CategoryXIX3check`}
                                  checked={values?.page18[index]?.CategoryXIX[i]?.CategoryXIX3check}
                                  onChange={formik.handleChange}
                                />
                              </Grid>
                            </>
                          )}
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ marginTop: "20px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                    Category XX (Menopausal Females Only)
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {/* <Grid container direction={"row"}> */}
                {/* <Grid item lg={8} md={8} xs={12}> 
                  <span style={{ fontSize: "15px" }}>How many years have you been menopausal?</span>
                 
                  </Grid>  */}
                {/* <Grid
                                item
                                lg={3}
                                md={3} xs={3}
                                ml={2}
                                className="inner"
                                style={{ display: "flex" }}
                              ><input
                    type="text"
                    name="CategoryXXinput"
                    onChange={formik.handleChange}
                    value={CategoryXXinput}
                  />
                  <span style={{ fontSize: "15px", fontWeight: "bold",marginLeft:"20px" }}>years</span>
                  
                </Grid></Grid> */}

                {CategoryXX &&
                  CategoryXX.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={8} sm={8} md={8} xs={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>

                          {data.name == "How many years have you been menopausal?" ? (
                            <>
                              <Grid
                                item
                                lg={3}
                                md={3}
                                xs={3}
                                ml={2}
                                className="inner"
                                style={{ display: "flex" }}
                              >
                                <input
                                  type="text"
                                  name={`page18[${index}].CategoryXX[${i}].CategoryXXinput`}
                                  onChange={formik.handleChange}
                                  value={values?.page18[index]?.CategoryXX[i]?.CategoryXXinput}
                                />
                              </Grid>
                            </>
                          ) : data.name == "Since menopause, do you ever have uterine bleeding?" ? (
                            <>
                              <Grid
                                item
                                lg={1}
                                sm={1}
                                md={1}
                                xs={1}
                                ml={4}
                                style={{ display: "flex", justifyContent: "center" }}
                              >
                                <span style={{ fontSize: "16px" }}>Yes</span>{" "}
                                <Radio
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXX[${i}].CategoryXXradio`}
                                  checked={
                                    values?.page18[index]?.CategoryXX[i]?.CategoryXXradio == "yes"
                                  }
                                  onChange={formik.handleChange}
                                  value="yes"
                                />
                              </Grid>
                              <Grid
                                item
                                lg={1}
                                sm={1}
                                md={1}
                                xs={1}
                                ml={2}
                                style={{ display: "flex", justifyContent: "center" }}
                              >
                                <span style={{ fontSize: "16px" }}>No</span>{" "}
                                <Radio
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXX[${i}].CategoryXXradio`}
                                  checked={
                                    values?.page18[index]?.CategoryXX[i]?.CategoryXXradio == "no"
                                  }
                                  onChange={formik.handleChange}
                                  value="no"
                                />
                              </Grid>
                            </>
                          ) : (
                            <>
                              <Grid item lg={1} sm={1} md={1} xs={1}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXX[${i}].CategoryXX0check`}
                                  checked={values?.page18[index]?.CategoryXX[i]?.CategoryXX0check}
                                  onChange={formik.handleChange}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={1}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXX[${i}].CategoryXX1check`}
                                  checked={values?.page18[index]?.CategoryXX[i]?.CategoryXX1check}
                                  onChange={formik.handleChange}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={1}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXX[${i}].CategoryXX2check`}
                                  checked={values?.page18[index]?.CategoryXX[i]?.CategoryXX2check}
                                  onChange={formik.handleChange}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={1}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page18[${index}].CategoryXX[${i}].CategoryXX3check`}
                                  checked={values?.page18[index]?.CategoryXX[i]?.CategoryXX3check}
                                  onChange={formik.handleChange}
                                />
                              </Grid>
                            </>
                          )}
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <div style={{ marginLeft: "10px" }}>
        <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
          <u>PART III</u>
        </SoftTypography>
        <Grid container>
          <Grid item lg={6} xs={12} className="parts">
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              How many alcoholic beverages do you consume per week?
            </span>
            <input
              type="number"
              name={`page18[${index}].alcoholicBeverages`}
              onChange={formik.handleChange}
              value={alcoholicBeverages}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              How many caffeinated beverages do you consume per day?
            </span>
            <input
              type="number"
              name={`page18[${index}].caffeinatedBeverages`}
              onChange={formik.handleChange}
              value={caffeinatedBeverages}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              How many times do you eat out per week?{" "}
            </span>
            <input type="number" name="eatCount" onChange={formik.handleChange} value={eatCount} />
          </Grid>
          <Grid item lg={6} xs={12} className="parts">
            <span style={{ fontSize: "15px" }}>
              Rate your stress level on a scale of 1-10 during the average week:
            </span>
            <input
              type="number"
              name={`page18[${index}].stressLevel`}
              label="clientName"
              onChange={formik.handleChange}
              value={stressLevel}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              How many times do you eat fish per week?
            </span>
            <input
              type="number"
              name={`page18[${index}].eatFishCount`}
              onChange={formik.handleChange}
              value={eatFishCount}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              How many times do you work out per week?
            </span>
            <input
              type="number"
              name={`page18[${index}].workoutCount`}
              onChange={formik.handleChange}
              value={workoutCount}
            />
            <br />
          </Grid>
          <Grid item lg={12} xs={12} className="parts">
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              How many times do you eat raw nuts or seeds per week?
            </span>
            <input type="number" name="nutCount" onChange={formik.handleChange} value={nutCount} />
            <br />

            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              List the three worst foods you eat during the average week:
            </span>
            <input
              type="text"
              name={`page18[${index}].worstFoodA`}
              onChange={formik.handleChange}
              value={worstFoodA}
            />
            <input
              type="text"
              name={`page18[${index}].worstFoodB`}
              style={{ marginLeft: "15px" }}
              onChange={formik.handleChange}
              value={worstFoodB}
            />
            <input
              type="text"
              name={`page18[${index}].worstFood`}
              style={{ marginLeft: "15px" }}
              onChange={formik.handleChange}
              value={worstFoodC}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              List the three healthiest foods you eat during the average week:
            </span>
            <input
              type="text"
              name={`page18[${index}].healthyFoodA`}
              onChange={formik.handleChange}
              value={healthyFoodA}
            />
            <input
              type="text"
              name={`page18[${index}].healthyFoodB`}
              onChange={formik.handleChange}
              value={healthyFoodB}
              style={{ marginLeft: "15px" }}
            />
            <input
              type="text"
              name={`page18[${index}].healthyFoodC`}
              onChange={formik.handleChange}
              value={healthyFoodC}
              style={{ marginLeft: "15px" }}
            />
          </Grid>
          <Grid item lg={12} xs={12} className="fullwidth">
            <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="5px" marginTop="20px">
              <u>PART IV</u>
            </SoftTypography>
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              <b> Please list any medications you currently take and for what conditions:</b>{" "}
            </span>
            <input
              type="text"
              name={`page18[${index}].medication`}
              onChange={formik.handleChange}
              value={medication}
            />
            <br />
            <span style={{ fontSize: "15px", marginRight: "0.5rem" }}>
              <b>Please list any natural supplements you currently take and for what conditions:</b>
            </span>
            <input
              type="text"
              name={`page18[${index}].supplements`}
              onChange={formik.handleChange}
              value={supplements}
            />
            <br />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
