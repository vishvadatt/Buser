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

  const section9 = [
    {
      name: "A diagnosis of celiac disease, gluten sensitivity, hypothyroidism, or an autoimmune disease",
    },
    {
      name: "Family members who have been diagnosed with an autoimmune disease",
    },
    {
      name: "Family members who have been diagnosed with celiac disease or gluten sensitivity",
    },
    {
      name: "Changes in brain function with stress, poor sleep, or immune activation",
    },
  ];

  const section10 = [
    {
      name: "A loss of pleasure in hobbies and interests",
    },
    {
      name: "Feel overwhelmed with ideas to manage",
    },
    {
      name: "Feelings of inner rage or unprovoked anger",
    },
    {
      name: "Feelings of paranoia",
    },
    {
      name: "Feelings of sadness for no reason",
    },
    {
      name: "A loss of enjoyment in life",
    },
    {
      name: "A lack of artistic appreciation",
    },

    {
      name: "Feelings of sadness in overcast weather",
    },
    {
      name: "A loss of enthusiasm for favorite activities",
    },
    {
      name: "	 A loss of enjoyment in favorite foods",
    },
    {
      name: "A loss of enjoyment in friendships and relationships",
    },
    {
      name: "Inability to fall into deep, restful sleep",
    },
    {
      name: "Feelings of dependency on others",
    },
    {
      name: "Feelings of susceptibility to pain",
    },
  ];
  const section11 = [
    {
      name: "Feelings of worthlessness",
    },
    {
      name: "Feelings of hopelessness",
    },
    {
      name: "Self-destructive thoughts",
    },
    {
      name: "	 Inability to handle stress",
    },
    {
      name: "Anger and aggression while under stress",
    },
    {
      name: "Feelings of tiredness, even after many hours of sleep",
    },
    {
      name: "A desire to isolate yourself from others",
    },
    {
      name: "An unexplained lack of concern for family and friends",
    },
    {
      name: "An inability to finish tasks",
    },
    {
      name: "Feelings of anger for minor reasons",
    },
  ];

  const section12 = [
    {
      name: "A decrease in visual memory (shapes and images)",
    },
    {
      name: "A decrease in verbal memory",
    },
    {
      name: "Occurrence of memory lapses",
    },
    {
      name: "A decrease in creativity",
    },
    {
      name: "A decrease in comprehension",
    },
    {
      name: "Difficulty calculating numbers",
    },
    {
      name: "Difficulty recognizing objects and faces",
    },
    {
      name: "A change in opinion about yourself",
    },

    {
      name: "Slow mental recall",
    },
  ];

  const section13 = [
    {
      name: "A decrease in mental alertness",
    },
    {
      name: "A decrease in mental speed",
    },
    {
      name: "	 A decrease in concentration quality",
    },
    {
      name: "	 Slow cognitive processing",
    },
    {
      name: "Impaired mental performance",
    },
    {
      name: "An increase in the ability to be distracted",
    },
    {
      name: "Need coffee or caffeine sources to improve mental function",
    },
  ];
  const section14 = [
    {
      name: "	 Feelings of nervousness or panic for no reason",
    },
    {
      name: "Feelings of dread",
    },
    {
      name: "Feelings of a “knot” in your stomach",
    },
    {
      name: "	 Feelings of being overwhelmed for no reason",
    },
    {
      name: "	 Feelings of guilt about everyday decisions",
    },
    {
      name: "A restless mind",
    },
    {
      name: "An inability to turn off the mind when relaxing",
    },
    {
      name: "Disorganized attention",
    },
    {
      name: "Worry over things never thought about before",
    },
    {
      name: "Feelings of inner tension and inner excitability",
    },
  ];

  return (
    <>
      <SoftBox mt={2}>
        <SoftTypography fontSize="16px" fontWeight="bold">
          Please circle the appropriate number on all questions below. 0 as the least/never to 3 as
          the most/always.
        </SoftTypography>
        <Grid container mt={2}>
          <Grid lg={6} className="function-section">
            <Grid>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <span style={{ fontWeight: "bold" }}>SECTION 9</span>
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
                  {section9 &&
                    section9.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            {/* <Grid item lg={4} md={4} xs={12}> */}

                            {data.name ==
                            "Changes in brain function with stress, poor sleep, or immune activation" ? (
                              <>
                                <Grid item lg={4} md={4}>
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    name={`page26[${index}].section9[${i}].checkbox1`}
                                    checked={values?.page26[index]?.section9[i]?.checkbox1}
                                    onChange={formik.handleChange}
                                  />
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    name={`page26[${index}].section9[${i}].checkbox2`}
                                    checked={values?.page26[index]?.section9[i]?.checkbox2}
                                    onChange={formik.handleChange}
                                  />
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    name={`page26[${index}].section9[${i}].checkbox3`}
                                    checked={values?.page26[index]?.section9[i]?.checkbox3}
                                    onChange={formik.handleChange}
                                  />
                                  <Checkbox
                                    style={{ marginLeft: "5px" }}
                                    name={`page26[${index}].section9[${i}].checkbox4`}
                                    checked={values?.page26[index]?.section9[i]?.checkbox4}
                                    onChange={formik.handleChange}
                                  />
                                </Grid>
                              </>
                            ) : (
                              <>
                                <Grid item lg={1} ml={2} style={{ display: "flex" }}>
                                  <Radio
                                    style={{ marginLeft: "-12px" }}
                                    name={`page26[${index}].section9[${i}].checkboxredio9`}
                                    value="yes"
                                    checked={
                                      values?.page26[index]?.section9[i]?.checkboxredio9 === "yes"
                                    }
                                    onChange={formik.handleChange}
                                  />
                                  <span style={{ fontSize: "16px" }}>Yes</span>
                                </Grid>
                                <Grid item lg={1} ml={2} style={{ display: "flex" }}>
                                  <Radio
                                    name={`page26[${index}].section9[${i}].checkboxredio9`}
                                    value="no"
                                    checked={
                                      values?.page26[index]?.section9[i]?.checkboxredio9 === "no"
                                    }
                                    onChange={formik.handleChange}
                                  />
                                  <span style={{ fontSize: "16px" }}>No</span>
                                </Grid>
                              </>
                            )}
                          </Grid>
                        </>
                      );
                    })}
                </ul>
              </Grid>
            </Grid>
            <Grid mt={2}>
              <Grid container>
                <Grid item lg={8} md={8} sm={12} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <span style={{ fontWeight: "bold" }}>SECTION 10</span>
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
                  {section10 &&
                    section10.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            {data.name == "A lack of artistic appreciation" ? (
                              <>
                                <Grid item lg={1} style={{ display: "flex" }}>
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    name={`page26[${index}].section10[${i}].checkboxredio1`}
                                    value="yes"
                                    checked={
                                      values?.page26[index]?.section10[i]?.checkboxredio1 === "yes"
                                    }
                                    onChange={formik.handleChange}
                                  />
                                  <span style={{ fontSize: "16px" }}>Yes</span>
                                </Grid>
                                <Grid item lg={1} style={{ display: "flex" }}>
                                  <Radio
                                    style={{ marginLeft: "23px" }}
                                    name={`page26[${index}].section10[${i}].checkboxredio1`}
                                    value="no"
                                    checked={
                                      values?.page26[index]?.section10[i]?.checkboxredio1 === "no"
                                    }
                                    onChange={formik.handleChange}
                                  />
                                  <span style={{ fontSize: "16px" }}>No</span>
                                </Grid>
                              </>
                            ) : (
                              <Grid item lg={4} md={4}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page26[${index}].section10[${i}].checkbox1`}
                                  checked={values?.page26[index]?.section10[i]?.checkbox1}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page26[${index}].section10[${i}].checkbox2`}
                                  checked={values?.page26[index]?.section10[i]?.checkbox2}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page26[${index}].section10[${i}].checkbox3`}
                                  checked={values?.page26[index]?.section10[i]?.checkbox3}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page26[${index}].section10[${i}].checkbox4`}
                                  checked={values?.page26[index]?.section10[i]?.checkbox4}
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
            <Grid>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <span style={{ fontWeight: "bold" }}>SECTION 11</span>
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
                  {section11 &&
                    section11.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section11[${i}].checkbox1`}
                                checked={values?.page26[index]?.section11[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section11[${i}].checkbox2`}
                                checked={values?.page26[index]?.section11[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section11[${i}].checkbox3`}
                                checked={values?.page26[index]?.section11[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section11[${i}].checkbox4`}
                                checked={values?.page26[index]?.section11[i]?.checkbox4}
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

          <Grid lg={6}>
            <Grid ml={1}>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <span style={{ fontWeight: "bold" }}>SECTION 12</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} xs={6}>
                  <SoftTypography
                    className="rate"
                    fontSize="19px"
                    marginLeft="15px"
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
                  {section12 &&
                    section12.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            {data.name == "A decrease in visual memory (shapes and images)" ? (
                              <>
                                <Grid item lg={1} ml={2} style={{ display: "flex" }}>
                                  <Radio
                                    style={{ marginLeft: "5px" }}
                                    name={`page26[${index}].section12[${i}].checkboxredio12`}
                                    value="yes"
                                    checked={
                                      values?.page26[index]?.section12[i]?.checkboxredio12 === "yes"
                                    }
                                    onChange={formik.handleChange}
                                  />
                                  <span style={{ fontSize: "16px" }}>Yes</span>
                                </Grid>
                                <Grid item lg={1} ml={2} style={{ display: "flex" }}>
                                  <Radio
                                    style={{ marginLeft: "23px" }}
                                    name={`page26[${index}].section12[${i}].checkboxredio12`}
                                    value="no"
                                    checked={
                                      values?.page26[index]?.section12[i]?.checkboxredio12 === "no"
                                    }
                                    onChange={formik.handleChange}
                                  />
                                  <span style={{ fontSize: "16px" }}>No</span>
                                </Grid>
                              </>
                            ) : (
                              <Grid item lg={4} md={4}>
                                <Checkbox
                                  style={{ marginLeft: "23px" }}
                                  name={`page26[${index}].section12[${i}].checkbox1`}
                                  checked={values?.page26[index]?.section12[i]?.checkbox1}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page26[${index}].section12[${i}].checkbox2`}
                                  checked={values?.page26[index]?.section12[i]?.checkbox2}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page26[${index}].section12[${i}].checkbox3`}
                                  checked={values?.page26[index]?.section12[i]?.checkbox3}
                                  onChange={formik.handleChange}
                                />
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  name={`page26[${index}].section12[${i}].checkbox4`}
                                  checked={values?.page26[index]?.section12[i]?.checkbox4}
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
            <Grid ml={1} mb={0}>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <span style={{ fontWeight: "bold" }}>SECTION 13</span>
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
                  {section13 &&
                    section13.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} xs={6} md={8} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section13[${i}].checkbox1`}
                                checked={values?.page26[index]?.section13[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section13[${i}].checkbox2`}
                                checked={values?.page26[index]?.section13[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section13[${i}].checkbox3`}
                                checked={values?.page26[index]?.section13[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section13[${i}].checkbox4`}
                                checked={values?.page26[index]?.section13[i]?.checkbox4}
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
                    <span style={{ fontWeight: "bold" }}>SECTION 14</span>
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
                  {section14 &&
                    section14.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section14[${i}].checkbox1`}
                                checked={values?.page26[index]?.section14[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section14[${i}].checkbox2`}
                                checked={values?.page26[index]?.section14[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section14[${i}].checkbox3`}
                                checked={values?.page26[index]?.section14[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page26[${index}].section14[${i}].checkbox4`}
                                checked={values?.page26[index]?.section14[i]?.checkbox4}
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
        </Grid>
      </SoftBox>
    </>
  );
}

brainFuction.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default brainFuction;
