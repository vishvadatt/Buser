import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function brainFuction({ formik, index }) {
  const { values } = formik;

  const section1 = [
    {
      name: "Low brain endurance for focus and concentration",
    },
    {
      name: "Cold hands and feet",
    },
    {
      name: "Must exercise or drink coffee to improve brain function",
    },
    {
      name: "Poor nail health",
    },
    {
      name: "Fungal growth on toenails",
    },
    {
      name: "Must wear socks at night",
    },
    {
      name: "Nail beds are white instead of pink",
    },
    {
      name: "The tip of the nose is cold",
    },
  ];
  const section2 = [
    {
      name: "Irritable, nervous, shaky, or light-headed between meals",
    },
    {
      name: "Feel energized after meals",
    },
    {
      name: "Difficulty eating large meals in the morning",
    },
    {
      name: "Energy level drops in the afternoon",
    },
    {
      name: "Crave sugar and sweets in the afternoon",
    },
    {
      name: "Wake up in the middle of the night",
    },
    {
      name: "Difficulty concentrating before eating",
    },

    {
      name: "Depend on coffee to keep going",
    },
  ];
  const section3 = [
    {
      name: "Fatigue after meals",
    },
    {
      name: "Sugar and sweet cravings after meals",
    },
    {
      name: "Need for a stimulant, such as coffee, after meals",
    },
    {
      name: "Difficulty losing weight",
    },
    {
      name: "Increased frequency of urination",
    },
    {
      name: "Difficulty falling asleep",
    },
    {
      name: "Increased appetite",
    },
  ];
  const section4 = [
    {
      name: "Always have projects and things that need to be done",
    },
    {
      name: "Never have time for yourself",
    },
    {
      name: "Not getting enough sleep or rest",
    },
    {
      name: "Difficulty getting regular exercise",
    },
    {
      name: "Feel that you are not accomplishing your life’s purpose",
    },
  ];
  const section5 = [
    {
      name: "Dry and unhealthy skin",
    },
    {
      name: "Dandruff or a flaky scalp",
    },
    {
      name: "Consumption of processed foods that are bagged or boxed",
    },
    {
      name: "Consumption of fried foods",
    },
    {
      name: "Difficulty consuming raw nuts or seeds",
    },
    {
      name: "Difficulty consuming fish (not fried)",
    },

    {
      name: "Difficulty consuming olive oil, avocados, flax seed oil, or natural fats",
    },
  ];
  const section6 = [
    {
      name: "Difficulty digesting foods",
    },
    {
      name: "Constipation or inconsistent bowel movements",
    },
    {
      name: "Increased bloating or gas",
    },
    {
      name: "Abdominal distention after meals",
    },
    {
      name: "Difficulty digesting protein-rich foods",
    },
    {
      name: "Difficulty digesting starch-rich foods",
    },
    {
      name: "Difficulty digesting fatty or greasy foods",
    },
    {
      name: "Difficulty swallowing supplements or large bites of food",
    },
    {
      name: "Abnormal gag reflex",
    },
  ];
  const section7 = [
    {
      name: "Brain fog (unclear thoughts or concentration)",
    },
    {
      name: "Pain and inflammation",
    },
    {
      name: "Noticeable variations in mental speed",
    },
    {
      name: "Brain fatigue after meals",
    },
    {
      name: "Brain fatigue after exposure to chemicals, scents, or pollutants",
    },
    {
      name: "Brain fatigue when the body is inflamed",
    },
  ];
  const section8 = [
    {
      name: "Grain consumption leads to tiredness",
    },
    {
      name: "Grain consumption makes it difficult to focus and concentrate",
    },
    {
      name: "Feel better when bread and grains are avoided",
    },
    {
      name: "Grain consumption causes the development of any symptoms",
    },
    {
      name: "A 100% gluten-free diet",
    },
  ];

  return (
    <>
      <SoftBox mt={2}>
        <SoftTypography fontSize="16px">
          <b>
            Please circle the appropriate number on all questions below. 0 as the least/never to 3
            as the most/always.
          </b>
        </SoftTypography>
        <Grid container mt={2}>
          <Grid item lg={6} className="function-section">
            <Grid>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      {" "}
                      <span>SECTION 1</span>
                    </b>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid>
                <ul style={{ marginLeft: "30px" }}>
                  {section1 &&
                    section1.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections1[${i}].checkbox1`}
                                checked={values?.page25[index]?.sections1[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections1[${i}].checkbox2`}
                                checked={values?.page25[index]?.sections1[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections1[${i}].checkbox3`}
                                checked={values?.page25[index]?.sections1[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections1[${i}].checkbox4`}
                                checked={values?.page25[index]?.sections1[i]?.checkbox4}
                                onChange={formik.handleChange}
                              />
                            </Grid>
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
            <Grid>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      <span>SECTION 2</span>
                    </b>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid>
                <ul style={{ marginLeft: "30px" }}>
                  {section2 &&
                    section2.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections2[${i}].checkbox1`}
                                checked={values?.page25[index]?.sections2[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections2[${i}].checkbox2`}
                                checked={values?.page25[index]?.sections2[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections2[${i}].checkbox3`}
                                checked={values?.page25[index]?.sections2[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections2[${i}].checkbox4`}
                                checked={values?.page25[index]?.sections2[i]?.checkbox4}
                                onChange={formik.handleChange}
                              />
                            </Grid>
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
            <Grid>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      {" "}
                      <span>SECTION 3</span>
                    </b>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid>
                <ul style={{ marginLeft: "30px" }}>
                  {section3 &&
                    section3.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections3[${i}].checkbox1`}
                                checked={values?.page25[index]?.sections3[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections3[${i}].checkbox2`}
                                checked={values?.page25[index]?.sections3[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections3[${i}].checkbox3`}
                                checked={values?.page25[index]?.sections3[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections3[${i}].checkbox4`}
                                checked={values?.page25[index]?.sections3[i]?.checkbox4}
                                onChange={formik.handleChange}
                              />
                            </Grid>
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
            <Grid>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      <span>SECTION 4</span>
                    </b>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid>
                <ul style={{ marginLeft: "30px" }}>
                  {section4 &&
                    section4.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections4[${i}].checkbox1`}
                                checked={values?.page25[index]?.sections4[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections4[${i}].checkbox2`}
                                checked={values?.page25[index]?.sections4[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections4[${i}].checkbox3`}
                                checked={values?.page25[index]?.sections4[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections4[${i}].checkbox4`}
                                checked={values?.page25[index]?.sections4[i]?.checkbox4}
                                onChange={formik.handleChange}
                              />
                            </Grid>
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Grid ml={1}>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      <span>SECTION 5</span>
                    </b>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid>
                <ul style={{ marginLeft: "30px" }}>
                  {section5 &&
                    section5.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} xs={6} md={8} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections5[${i}].checkbox1`}
                                checked={values?.page25[index]?.sections5[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections5[${i}].checkbox2`}
                                checked={values?.page25[index]?.sections5[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections5[${i}].checkbox3`}
                                checked={values?.page25[index]?.sections5[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page25[${index}].sections5[${i}].checkbox4`}
                                checked={values?.page25[index]?.sections5[i]?.checkbox4}
                                onChange={formik.handleChange}
                              />
                            </Grid>
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
            <Grid ml={1}>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      <span>SECTION 6</span>
                    </b>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid>
                <ul style={{ marginLeft: "30px" }}>
                  {section6 &&
                    section6.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            {data.name == "Abnormal gag reflex" ? (
                              <>
                                <Grid
                                  item
                                  lg={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                  className="radioAlign"
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    name={`page25[${index}].sections6[${i}].sections6radio`}
                                    checked={
                                      values?.page25[index]?.sections6[i]?.sections6radio == "yes"
                                    }
                                    onChange={formik.handleChange}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                  className="radioAlign"
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    name={`page25[${index}].sections6[${i}].sections6radio`}
                                    checked={
                                      values?.page25[index]?.sections6[i]?.sections6radio == "no"
                                    }
                                    onChange={formik.handleChange}
                                    value="no"
                                  />
                                </Grid>
                              </>
                            ) : (
                              <Grid item lg={4} md={4} xs={6}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections6[${i}].checkbox1`}
                                  checked={values?.page25[index]?.sections6[i]?.checkbox1}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections6[${i}].checkbox2`}
                                  checked={values?.page25[index]?.sections6[i]?.checkbox2}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections6[${i}].checkbox3`}
                                  checked={values?.page25[index]?.sections6[i]?.checkbox3}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections6[${i}].checkbox4`}
                                  checked={values?.page25[index]?.sections6[i]?.checkbox4}
                                  onChange={formik.handleChange}
                                />
                              </Grid>
                            )}
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
            <Grid ml={1}>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      {" "}
                      <span>SECTION 7</span>
                    </b>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid>
                <ul style={{ marginLeft: "30px" }}>
                  {section7 &&
                    section7.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            {data.name == "Brain fog (unclear thoughts or concentration)" ||
                            data.name == "Pain and inflammation" ||
                            data.name == "Noticeable variations in mental speed" ? (
                              <>
                                <Grid
                                  item
                                  lg={1}
                                  // xs={6}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    name={`page25[${index}].sections7[${i}].sections7radio`}
                                    checked={
                                      values?.page25[index]?.sections7[i]?.sections7radio == "yes"
                                    }
                                    onChange={formik.handleChange}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  ml={2}
                                  // xs={6}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    name={`page25[${index}].sections7[${i}].sections7radio`}
                                    checked={
                                      values?.page25[index]?.sections7[i]?.sections7radio == "no"
                                    }
                                    onChange={formik.handleChange}
                                    value="no"
                                  />
                                </Grid>
                              </>
                            ) : (
                              <Grid item lg={4} md={4} xs={6}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections7[${i}].checkbox1`}
                                  checked={values?.page25[index]?.sections7[i]?.checkbox1}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections7[${i}].checkbox2`}
                                  checked={values?.page25[index]?.sections7[i]?.checkbox2}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections7[${i}].checkbox3`}
                                  checked={values?.page25[index]?.sections7[i]?.checkbox3}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections7[${i}].checkbox4`}
                                  checked={values?.page25[index]?.sections7[i]?.checkbox4}
                                  onChange={formik.handleChange}
                                />
                              </Grid>
                            )}
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
            <Grid ml={1}>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      {" "}
                      <span>SECTION 8</span>
                    </b>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginRight="15px"
                    justifyContent="space-between"
                  >
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </SoftTypography>
                </Grid>
              </Grid>
              <Grid>
                <ul style={{ marginLeft: "30px" }}>
                  {section8 &&
                    section8.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            {data.name == "A 100% gluten-free diet" ? (
                              <>
                                <Grid
                                  item
                                  lg={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>Yes</span>
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    name={`page25[${index}].sections8[${i}].sections8radio`}
                                    checked={
                                      values?.page25[index]?.sections8[i]?.sections8radio == "yes"
                                    }
                                    onChange={formik.handleChange}
                                    value="yes"
                                  />
                                </Grid>
                                <Grid
                                  item
                                  lg={1}
                                  ml={2}
                                  style={{ display: "flex", justifyContent: "center" }}
                                >
                                  <span style={{ fontSize: "16px" }}>No</span>{" "}
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    name={`page25[${index}].sections8[${i}].sections8radio`}
                                    checked={
                                      values?.page25[index]?.sections8[i]?.sections8radio == "no"
                                    }
                                    onChange={formik.handleChange}
                                    value="no"
                                  />
                                </Grid>
                              </>
                            ) : (
                              <Grid item lg={4} md={4} xs={6}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections8[${i}].checkbox1`}
                                  checked={values?.page25[index]?.sections8[i]?.checkbox1}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections8[${i}].checkbox2`}
                                  checked={values?.page25[index]?.sections8[i]?.checkbox2}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections8[${i}].checkbox3`}
                                  checked={values?.page25[index]?.sections8[i]?.checkbox3}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page25[${index}].sections8[${i}].checkbox4`}
                                  checked={values?.page25[index]?.sections8[i]?.checkbox4}
                                  onChange={formik.handleChange}
                                />
                              </Grid>
                            )}
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid></Grid>
      </SoftBox>
    </>
  );
}

brainFuction.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default brainFuction;
