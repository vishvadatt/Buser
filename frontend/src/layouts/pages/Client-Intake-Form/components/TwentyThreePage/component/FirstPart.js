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

  const section2 = [
    {
      name: "How often do you have feelings of hopelessness?",
    },
    {
      name: "How often do you have self-destructive thoughts?",
    },
    {
      name: "How often do you have an inability to handle stress?",
    },
    {
      name: "How often do you have anger and aggression while under stress? ",
    },
    {
      name: "How often do you feel you are not rested, even after long hours of sleep?",
    },
    {
      name: "How often do you prefer to isolate yourself from others?      ",
    },
    {
      name: "How often do you have unexplained lack of concern for family and friends?  ",
    },
    {
      name: "How easily are you distracted from your tasks? ",
    },
    {
      name: "How often do you have an inability to finish tasks? ",
    },
    {
      name: "How often do you feel the need to consume caffeine to stay alert?",
    },
    {
      name: "How often do you feel your libido has been decreased? ",
    },
    {
      name: "How often do you lose your temper for minor reasons?",
    },
    {
      name: "How often do you have feelings of worthlessness? ",
    },
  ];

  const section3 = [
    {
      name: "How often do you feel anxious or panicked for no reason?",
    },
    {
      name: "How often do you have feelings of dread or impending doom? ",
    },
    {
      name: "How often do you feel knots in your stomach? ",
    },
    {
      name: "How often do you have feelings of being overwhelmed for no reason?",
    },
    {
      name: "How often do you have feelings of guilt about everyday decisions?",
    },
    {
      name: " How often does your mind feel restless? ",
    },
    {
      name: "How difficult is it to turn your mind off when you want to relax?",
    },

    {
      name: "How often do you have disorganized attention?",
    },
    {
      name: " How often do you worry about things you were not worried about before?",
    },
    {
      name: "	 How often do you have feelings of inner tension and inner excitability? ",
    },
  ];
  const section4 = [
    {
      name: " Do you feel your visual memory (shapes & images) has decreased?",
    },
    {
      name: "Do you feel your verbal memory has decreased?",
    },
    {
      name: "Do you have memory lapses?",
    },
    {
      name: "Has your creativity decreased?",
    },
    {
      name: "Has your comprehension diminished?",
    },
    {
      name: "Do you have difficulty calculating numbers?",
    },
    {
      name: " Do you have difficulty recognizing objects & faces? ",
    },
    {
      name: "Do you feel like your opinion about yourself has changed?",
    },
    {
      name: "Are you experiencing excessive urination?",
    },
    {
      name: "Are you experiencing a slower mental response?         ",
    },
  ];

  const section5 = [
    {
      name: "A decrease in mental alertness",
    },
    {
      name: "A decrease in mental speed ",
    },
    {
      name: "A decrease in concentration quality",
    },
    {
      name: "Slow cognitive processing ",
    },
    {
      name: "Impaired mental performance",
    },
    {
      name: "An increase in the ability to be distracted ",
    },
    {
      name: "Need coffee or caffeine sources to improve mental function",
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
                    <span style={{ fontWeight: "bold" }}>SECTION 2</span>
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
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            {/* <Grid item lg={4} md={4} xs={12}> */}

                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section2[${i}].checkbox1`}
                                checked={values?.page28[index]?.section2[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section2[${i}].checkbox2`}
                                checked={values?.page28[index]?.section2[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section2[${i}].checkbox3`}
                                checked={values?.page28[index]?.section2[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section2[${i}].checkbox4`}
                                checked={values?.page28[index]?.section2[i]?.checkbox4}
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
            <Grid mt={2}>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <span style={{ fontWeight: "bold" }}>SECTION 3</span>
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
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section3[${i}].checkbox1`}
                                checked={values?.page28[index]?.section3[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section3[${i}].checkbox2`}
                                checked={values?.page28[index]?.section3[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section3[${i}].checkbox3`}
                                checked={values?.page28[index]?.section3[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section3[${i}].checkbox4`}
                                checked={values?.page28[index]?.section3[i]?.checkbox4}
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
                    <span style={{ fontWeight: "bold" }}>SECTION 4</span>
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
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section4[${i}].checkbox1`}
                                checked={values?.page28[index]?.section4[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section4[${i}].checkbox2`}
                                checked={values?.page28[index]?.section4[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section4[${i}].checkbox3`}
                                checked={values?.page28[index]?.section4[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section4[${i}].checkbox4`}
                                checked={values?.page28[index]?.section4[i]?.checkbox4}
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
                    <span style={{ fontWeight: "bold" }}>SECTION 5</span>
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
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section5[${i}].checkbox1`}
                                checked={values?.page28[index]?.section5[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section5[${i}].checkbox2`}
                                checked={values?.page28[index]?.section5[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section5[${i}].checkbox3`}
                                checked={values?.page28[index]?.section5[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page28[${index}].section5[${i}].checkbox4`}
                                checked={values?.page28[index]?.section5[i]?.checkbox4}
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
