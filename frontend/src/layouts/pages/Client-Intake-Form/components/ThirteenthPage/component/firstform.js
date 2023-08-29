import React from "react";
import "../style.css";
import { Checkbox, Grid, Radio } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";


function index({ formik, index }) {
  const { values } = formik;
  let date = new Date().toLocaleDateString("en-CA");

  // console.log("valuescc", values);
  const CategoryIi = [
    {
      name: "Feeling that bowels do not empty completely",
    },
    {
      name: "Lower abdominal pain relieved by passing stool or gas",
    },
    {
      name: "Alternating constipation and diarrhea ",
    },
    {
      name: "Diarrhea",
    },
    {
      name: "Constipation",
    },
    {
      name: "Hard, dry, or small stool",
    },
    {
      name: "Coated tongue or “fuzzy” debris on tongue",
    },
    {
      name: "Pass large amount of foul-smelling gas",
    },
    {
      name: "More than 3 bowel movements daily",
    },
    {
      name: "Use laxatives frequently",
    },
  ];
  const CategoryII = [
    {
      name: "Increasing frequency of food reactions",
    },
    {
      name: "Unpredictable food reactions",
    },
    {
      name: "Aches, pains, and swelling throughout the body",
    },
    {
      name: "Unpredictable abdominal swelling",
    },
    {
      name: "Frequent bloating and distention after eating",
    },
  ];

  const CategoryIII = [
    {
      name: "Intolerance to smells",
    },
    {
      name: "Intolerance to jewelry",
    },
    {
      name: "Intolerance to shampoo, lotion, detergents, etc",
    },
    {
      name: "Multiple smell and chemical sensitivities",
    },
    {
      name: "Constant skin outbreaks",
    },
  ];

  const CategoryIV = [
    {
      name: "Excessive belching, burping, or bloating",
    },
    {
      name: "Gas immediately following a meal",
    },
    {
      name: "Offensive breath",
    },
    {
      name: "Difficult bowel movements",
    },
    {
      name: "Sense of fullness during and after meals",
    },
    {
      name: "Difficulty digesting proteins and meats; undigested food found in stools",
    },
  ];
  const CategoryV = [
    {
      name: "Stomach pain, burning, or aching 1-4 hours after eating",
    },
    {
      name: "Use of antacids",
    },
    {
      name: "Feel hungry an hour or two after eating",
    },
    {
      name: "Heartburn when lying down or bending forward",
    },
    {
      name: "Temporary relief by using antacids, food, milk, or carbonated beverages",
    },
    {
      name: "Digestive problems subside with rest and relaxation",
    },
    {
      name: "Heartburn due to spicy foods, chocolate, citrus, peppers, alcohol, and caffeine",
    },
  ];
  const CategoryVIi = [
    {
      name: "Difficulty digesting roughage and fiber",
    },
    {
      name: "Indigestion and fullness last 2-4 hours after eating",
    },
    {
      name: "Pain, tenderness, soreness on left side under rib cage",
    },
    {
      name: "Excessive passage of gas",
    },
    {
      name: "Nausea and/or vomiting",
    },
    {
      name: "Stool undigested, foul smelling, mucus like, greasy, or poorly formed",
    },
    {
      name: "Frequent loss of appetite      ",
    },
  ];
  const CategoryVII = [
    {
      name: "Abdominal distention after consumption of fiber, starches, and sugar",
    },
    {
      name: "Abdominal distention after certain probiotic or natural supplements",
    },
    {
      name: "Decreased gastrointestinal motility, constipation",
    },
    {
      name: "Increased gastrointestinal motility, diarrhea",
    },
    {
      name: "Alternating constipation and diarrhea",
    },
    {
      name: "Suspicion of nutritional malabsorption",
    },
    {
      name: "Frequent use of antacid medication ",
    },
    {
      name: "Have you been diagnosed with Celiac Disease, Irritable Bowel Syndrome, Diverticulosis/Diverticulitis, or Leaky Gut Syndrome?",
    },
  ];
  const CategoryVIII = [
    {
      name: "Greasy or high-fat foods cause distress ",
    },
    {
      name: "Lower bowel gas and/or bloating several hours after eating",
    },
    {
      name: "Bitter metallic taste in mouth, especially in the morning",
    },
    {
      name: "Burpy, fishy taste after consuming fish oils",
    },
    {
      name: "Unexplained itchy skin",
    },
    {
      name: "Yellowish cast to eyes",
    },
    {
      name: "Stool color alternates from clay colored to normal brown",
    },

    {
      name: "Reddened skin, especially palms",
    },
    {
      name: "Dry or flaky skin and/or hair",
    },
    {
      name: "History of gallbladder attacks or stones",
    },
  ];

  const CategoryIX = [
    {
      name: "Acne and unhealthy skin",
    },
    {
      name: "Excessive hair loss",
    },
    {
      name: "Overall sense of bloating      ",
    },
    {
      name: "Bodily swelling for no reason",
    },
    {
      name: "Hormone imbalances",
    },
    {
      name: "Weight gain",
    },
    {
      name: "Poor bowel function",
    },
    {
      name: "Excessively foul-smelling sweat      ",
    },
  ];

  const CategoryX = [
    {
      name: "Crave sweets during the day",
    },
    {
      name: "Irritable if meals are missed",
    },
    {
      name: "Depend on coffee to keep going/get started",
    },
    {
      name: "Get light-headed if meals are missed",
    },
    {
      name: "Eating relieves fatigue",
    },
    {
      name: "My pain is rapidly worsening.",
    },
    {
      name: "Feel shaky, jittery, or have tremors",
    },
    {
      name: "Agitated, easily upset, nervous",
    },
    {
      name: "Poor memory, forgetful between meals",
    },
    {
      name: "Blurred vision",
    },
  ];

  const CategoryXIi = [
    {
      name: "Fatigue after meals",
    },
    {
      name: "Crave sweets during the day",
    },
    {
      name: "Eating sweets does not relieve cravings for sugar",
    },
    {
      name: "Must have sweets after meals",
    },
    {
      name: "Waist girth is equal or larger than hip girth",
    },
    {
      name: "Frequent urination",
    },

    {
      name: "Increased thirst and appetite",
    },
    {
      name: "Difficulty losing weight",
    },
  ];
  return (
    <>
      <SoftBox>
        <div className="cate-div">
          <span className="partII-cate">
            {" "}
            Part II: Please circle the appropriate number on all questions below. 0 as the
            least/never to 3 as the most/always.
          </span>
        </div>

        <Grid container spacing={2} style={{ margin: "0 auto", padding: "0" }}>
          <Grid
            item
            lg={5.8}
            xs={12}
            style={{ border: "2px solid black", margin: "5px", marginRight: "16px" }}
          >
            <SoftBox>
              <Grid pl={0} container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category I
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>

              <SoftBox className="sections">
                {CategoryIi &&
                  CategoryIi.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              label="0"
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIi[${i}].CategoryIi0check`}
                              checked={values?.page17[index]?.CategoryIi[i]?.CategoryIi0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIi[${i}].CategoryIi1check`}
                              checked={values?.page17[index]?.CategoryIi[i]?.CategoryIi1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIi[${i}].CategoryIi2check`}
                              checked={values?.page17[index]?.CategoryIi[i]?.CategoryIi2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIi[${i}].CategoryIi3check`}
                              checked={values?.page17[index]?.CategoryIi[i]?.CategoryIi3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ marginTop: "10px" }}>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category II
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>

              <SoftBox className="sections">
                {CategoryII &&
                  CategoryII.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryII[${i}].CategoryII0check`}
                              checked={values?.page17[index]?.CategoryII[i]?.CategoryII0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryII[${i}].CategoryII1check`}
                              checked={values?.page17[index]?.CategoryII[i]?.CategoryII1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryII[${i}].CategoryII2check`}
                              checked={values?.page17[index]?.CategoryII[i]?.CategoryII2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>{" "}
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryII[${i}].CategoryII3check`}
                              checked={values?.page17[index]?.CategoryII[i]?.CategoryII3check}
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
              {/* <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              > */}
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category III
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>{" "}
              {/* </SoftTypography> */}
              <SoftBox className="sections">
                {CategoryIII &&
                  CategoryIII.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIII[${i}].CategoryIII0check`}
                              checked={values?.page17[index]?.CategoryIII[i]?.CategoryIII0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIII[${i}].CategoryIII1check`}
                              checked={values?.page17[index]?.CategoryIII[i]?.CategoryIII1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIII[${i}].CategoryIII2check`}
                              checked={values?.page17[index]?.CategoryIII[i]?.CategoryIII2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIII[${i}].CategoryIII3check`}
                              checked={values?.page17[index]?.CategoryIII[i]?.CategoryIII3check}
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
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category IV
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>{" "}
              <SoftBox className="sections">
                {CategoryIV &&
                  CategoryIV.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIV[${i}].CategoryIV0check`}
                              checked={values?.page17[index]?.CategoryIV[i]?.CategoryIV0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIV[${i}].CategoryIV1check`}
                              checked={values?.page17[index]?.CategoryIV[i]?.CategoryIV1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIV[${i}].CategoryIV2check`}
                              checked={values?.page17[index]?.CategoryIV[i]?.CategoryIV2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIV[${i}].CategoryIV3check`}
                              checked={values?.page17[index]?.CategoryIV[i]?.CategoryIV3check}
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
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category V
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryV &&
                  CategoryV.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryV[${i}].CategoryV0check`}
                              checked={values?.page17[index]?.CategoryV[i]?.CategoryV0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryV[${i}].CategoryV1check`}
                              checked={values?.page17[index]?.CategoryV[i]?.CategoryV1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryV[${i}].CategoryV2check`}
                              checked={values?.page17[index]?.CategoryV[i]?.CategoryV2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryV[${i}].CategoryV3check`}
                              checked={values?.page17[index]?.CategoryV[i]?.CategoryV3check}
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
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category VI
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryVIi &&
                  CategoryVIi.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVIi[${i}].CategoryVIi0check`}
                              checked={values?.page17[index]?.CategoryVIi[i]?.CategoryVIi0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVIi[${i}].CategoryVIi1check`}
                              checked={values?.page17[index]?.CategoryVIi[i]?.CategoryVIi1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVIi[${i}].CategoryVIi2check`}
                              checked={values?.page17[index]?.CategoryVIi[i]?.CategoryVIi2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVIi[${i}].CategoryVIi3check`}
                              checked={values?.page17[index]?.CategoryVIi[i]?.CategoryVIi3check}
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
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category VII
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryVII &&
                  CategoryVII.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVII[${i}].CategoryVII0check`}
                              checked={values?.page17[index]?.CategoryVII[i]?.CategoryVII0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVII[${i}].CategoryVII1check`}
                              checked={values?.page17[index]?.CategoryVII[i]?.CategoryVII1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVII[${i}].CategoryVII2check`}
                              checked={values?.page17[index]?.CategoryVII[i]?.CategoryVII2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVII[${i}].CategoryVII3check`}
                              checked={values?.page17[index]?.CategoryVII[i]?.CategoryVII3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
                <Grid container>
                  <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                    <span style={{ fontSize: "13px" }}>
                      Have you been diagnosed with Celiac Disease, Irritable Bowel Syndrome,
                      Diverticulosis/Diverticulitis, or Leaky Gut Syndrome?
                    </span>
                  </Grid>
                  {/* <Grid lg={1}>
                    <Radio
                                  style={{ marginLeft: "5px" }}
                                  name="CategoryVII0radio"
                                  value='yes'
                                  checked={values.CategoryVII0radio === 'yes'}
                                  onChange={formik.handleChange}
                                />
                    </Grid> */}
                  <Grid
                    item
                    lg={1}
                    sm={1}
                    xs={1}
                    md={1}
                    ml={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <span className="raion-span">Yes</span>
                    <Radio
                      style={{ marginLeft: "5px" }}
                      className="radio-btn"
                      name={`page17[${index}].CategoryVII0radio`}
                      value="yes"
                      checked={values?.page17[index]?.CategoryVII0radio === "yes"}
                      onChange={formik.handleChange}
                    />
                  </Grid>

                  <Grid
                    item
                    lg={1}
                    sm={1}
                    xs={1}
                    md={1}
                    ml={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <span className="raion-span1">No</span>
                    <Radio
                      style={{ marginLeft: "15px" }}
                      className="radio-btn"
                      name={`page17[${index}].CategoryVII0radio`}
                      value="no"
                      checked={values?.page17[index]?.CategoryVII0radio === "no"}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  {/* <Grid lg={1}>
                    <Radio
                                  style={{ marginLeft: "5px" }}
                                  name="CategoryVII0radio"
                                  value="no"
                                  checked={values.CategoryVII0radio === 'no'}
                                  onChange={formik.handleChange}
                                />
                    </Grid> */}
                </Grid>
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category VIII
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryVIII &&
                  CategoryVIII.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVIII[${i}].CategoryVIII0check`}
                              checked={values?.page17[index]?.CategoryVIII[i]?.CategoryVIII0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVIII[${i}].CategoryVIII1check`}
                              checked={values?.page17[index]?.CategoryVIII[i]?.CategoryVIII1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVIII[${i}].CategoryVIII2check`}
                              checked={values?.page17[index]?.CategoryVIII[i]?.CategoryVIII2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryVIII[${i}].CategoryVIII3check`}
                              checked={values?.page17[index]?.CategoryVIII[i]?.CategoryVIII3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
                <Grid container>
                  <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                    <span style={{ fontSize: "15px" }}>Have you had your gallbladder removed?</span>
                  </Grid>
                  <Grid
                    item
                    lg={1}
                    sm={1}
                    xs={1}
                    md={1}
                    ml={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <span className="raion-span">Yes</span>
                    <Radio
                      style={{ marginLeft: "5px" }}
                      className="radio-btn"
                      name={`page17[${index}].CategoryVIII0radio`}
                      value="yes"
                      checked={values?.page17[index]?.CategoryVIII0radio === "yes"}
                      onChange={formik.handleChange}
                    />
                  </Grid>

                  <Grid
                    item
                    lg={1}
                    sm={1}
                    xs={1}
                    md={1}
                    ml={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <span className="raion-span1">No</span>
                    <Radio
                      className="radio-btn"
                      style={{ marginLeft: "15px" }}
                      name={`page17[${index}].CategoryVIII0radio`}
                      value="no"
                      checked={values?.page17[index]?.CategoryVIII0radio === "no"}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid>
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category IX
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryIX &&
                  CategoryIX.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIX[${i}].CategoryIX0check`}
                              checked={values?.page17[index]?.CategoryIX[i]?.CategoryIX0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIX[${i}].CategoryIX1check`}
                              checked={values?.page17[index]?.CategoryIX[i]?.CategoryIX1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIX[${i}].CategoryIX2check`}
                              checked={values?.page17[index]?.CategoryIX[i]?.CategoryIX2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryIX[${i}].CategoryIX3check`}
                              checked={values?.page17[index]?.CategoryIX[i]?.CategoryIX3check}
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
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category X
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryX &&
                  CategoryX.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryX[${i}].CategoryX0check`}
                              checked={values?.page17[index]?.CategoryX[i]?.CategoryX0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryX[${i}].CategoryX1check`}
                              checked={values?.page17[index]?.CategoryX[i]?.CategoryX1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryX[${i}].CategoryX2check`}
                              checked={values?.page17[index]?.CategoryX[i]?.CategoryX2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryX[${i}].CategoryX3check`}
                              checked={values?.page17[index]?.CategoryX[i]?.CategoryX3check}
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
              <Grid container>
                <Grid item lg={7.7} sm={7.7} xs={7.7} md={8} direction="row">
                  <SoftTypography
                    fontWeight="bold"
                    fontSize="15px"
                    marginBottom="2px"
                    marginTop="15px"
                  >
                    Category XI
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>1</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>2</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={1} sm={1} xs={1} md={1}>
                  <SoftTypography
                    className="rate1"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <SoftBox className="sections">
                {CategoryXIi &&
                  CategoryXIi.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryXIi[${i}].CategoryXIi0check`}
                              value={values?.page17[index]?.CategoryXIi[i]?.CategoryXIi0check}
                              checked={values?.page17[index]?.CategoryXIi[i]?.CategoryXIi0check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryXIi[${i}].CategoryXIi1check`}
                              value={values?.page17[index]?.CategoryXIi[i]?.CategoryXIi1check}
                              checked={values?.page17[index]?.CategoryXIi[i]?.CategoryXIi1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryXIi[${i}].CategoryXIi2check`}
                              value={values?.page17[index]?.CategoryXIi[i]?.CategoryXIi2check}
                              checked={values?.page17[index]?.CategoryXIi[i]?.CategoryXIi2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page17[${index}].CategoryXIi[${i}].CategoryXIi3check`}
                              value={values?.page17[index]?.CategoryXIi[i]?.CategoryXIi3check}
                              checked={values?.page17[index]?.CategoryXIi[i]?.CategoryXIi3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
                {/* <Grid container>
                  <Grid item lg={7.7} sm={7.7} xs={7.7} md={8}>
                    <span style={{ fontSize: "15px" }}>Difficulty losing weight</span>
                  </Grid>
                  <Grid item lg={1} sm={1} xs={1} md={1}>
                    <Checkbox
                      style={{ marginLeft: "5px" }}
                      name='difficulty0check'
                      value={values.difficulty0check}
                      checked={values.difficulty0check}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item lg={1} sm={1} xs={1} md={1}>
                    <Checkbox
                      style={{ marginLeft: "5px" }}
                      name='difficulty1check'
                      value={values.difficulty1check}
                      checked={values.difficulty1check}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item lg={1} sm={1} xs={1} md={1}>
                    <Checkbox
                      style={{ marginLeft: "5px" }}
                      name='difficulty2check'
                      value={values.difficulty2check}
                      checked={values.difficulty2check}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item lg={1} sm={1} xs={1} md={1}>
                    <Checkbox
                      style={{ marginLeft: "5px" }}
                      name='difficulty3check'
                      value={values.difficulty3check}
                      checked={values.difficulty3check}
                      onChange={formik.handleChange}
                    />
                  </Grid>
                </Grid> */}
              </SoftBox>
            </SoftBox>
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
