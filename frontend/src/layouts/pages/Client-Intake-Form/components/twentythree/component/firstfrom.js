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

  const sectionA = [
    {
      name: "Is your memory noticeably declining? ",
    },
    {
      name: "Are you having a hard time remembering names and phone numbers?",
    },
    {
      name: "Is your ability to focus noticeably declining? ",
    },
    {
      name: "Has it become harder for you to learn new things? ",
    },
    {
      name: "How often do you have a hard time remembering your appointments? ",
    },
    {
      name: "Is your temperament generally getting worse? ",
    },
    {
      name: "Is your attention span decreasing?",
    },
    {
      name: "How often do you find yourself down or sad?",
    },
    {
      name: "How often do you become fatigued when driving compared to in the past?",
    },
    {
      name: "How often do you become fatigued when reading compared to in the past?",
    },
    {
      name: "How often do you walk into rooms and forget why?",
    },
    {
      name: "How often do you pick up your cell phone and forget why?",
    },
  ];
  const sectionB = [
    {
      name: "How high is your stress level? ",
    },
    {
      name: "How often do you feel you have something that must be done? ",
    },
    {
      name: "Do you feel you never have time for yourself?",
    },
    {
      name: "How often do you feel you are not getting enough sleep or rest?",
    },
    {
      name: "Do you find it difficult to get regular exercise?",
    },
    {
      name: "Do you feel uncared for by the people in your life? ",
    },
    {
      name: "Do you feel you are not accomplishing your life’s purpose?",
    },
    {
      name: "Is sharing your problems with someone difficult for you? ",
    },
  ];
  const sectionC1 = [
    {
      name: "How often do you get irritable, shaky, or have light-headedness between meals?",
    },
    {
      name: "How often do you feel energized after eating? ",
    },
    {
      name: "How often do you have difficulty eating large meals in the morning?",
    },
    {
      name: "How often does your energy level drop in the afternoon? ",
    },
    {
      name: "How often do you crave sugar and sweets in the afternoon?",
    },
    {
      name: "How often do you wake up in the middle of the night?",
    },
    {
      name: "How often do you have difficulty concentrating before eating?",
    },
    {
      name: "How often do you depend on coffee to keep yourself going?",
    },
    {
      name: "How often do you feel agitated, easily upset, and nervous between meals?",
    },
  ];
  const sectionC2 = [
    {
      name: "How often do you get fatigued after meals? ",
    },
    {
      name: "How often do you crave sugar and sweets after meals?",
    },
    {
      name: "How often do you feel you need stimulants, such as coffee, after meals?",
    },
    {
      name: "How often do you have difficulty losing weight? ",
    },
    {
      name: "How much larger is your waist girth compared to your hip girth?",
    },
    {
      name: "How often do you urinate?",
    },
    {
      name: "Have your thirst and appetite increased?",
    },
    {
      name: "How often do you gain weight when under stress?",
    },

    {
      name: "How often do you have difficulty falling asleep?",
    },
  ];
  const section1 = [
    {
      name: "Are you losing interest in hobbies?",
    },
    {
      name: "How often do you feel overwhelmed? ",
    },
    {
      name: "How often do you have feelings of inner rage? ",
    },
    {
      name: "How often do you have feelings of paranoia? ",
    },
    {
      name: "How often do you feel sad or down for no reason?  ",
    },
    {
      name: "How often do you feel like you are not enjoying life? ",
    },
    {
      name: "How often do you feel you lack artistic appreciation? ",
    },
    {
      name: "How often do you feel depressed in overcast weather? ",
    },
    {
      name: "How much are you losing your enthusiasm for your favorite activities? ",
    },
    {
      name: "How much are you losing your enjoyment for your favorite foods?  ",
    },
    {
      name: "How much are you losing your enjoyment of friendships and relationships? ",
    },
    {
      name: "How often do you have difficulty falling into deep, restful sleep? ",
    },
    {
      name: "How often do you have feelings of dependency on others? ",
    },
    {
      name: "How often do you feel more susceptible to pain?",
    },
    {
      name: "How often do you have feelings of unprovoked anger?",
    },
    {
      name: "How much are you losing interest in life?",
    },
  ];

  return (
    <>
      <SoftBox mt={2}>
        <SoftTypography fontSize="16px">
          <b>
            {" "}
            Please circle the appropriate number on all questions below. 0 as the least/never to 3
            as the most/always.
          </b>
        </SoftTypography>
        <Grid container mt={2}>
          <Grid lg={6} className="function-section">
            <Grid>
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" className="braintitle">
                    <b>
                      {" "}
                      <span>SECTION A</span>
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
                  {sectionA &&
                    sectionA.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsA[${i}].checkbox1`}
                                checked={values?.page27[index]?.sectionsA[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsA[${i}].checkbox2`}
                                checked={values?.page27[index]?.sectionsA[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsA[${i}].checkbox3`}
                                checked={values?.page27[index]?.sectionsA[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsA[${i}].checkbox4`}
                                checked={values?.page27[index]?.sectionsA[i]?.checkbox4}
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
                      <span>SECTION B</span>
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
                  {sectionB &&
                    sectionB.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsB[${i}].checkbox1`}
                                checked={values?.page27[index]?.sectionsB[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsB[${i}].checkbox2`}
                                checked={values?.page27[index]?.sectionsB[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsB[${i}].checkbox3`}
                                checked={values?.page27[index]?.sectionsB[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsB[${i}].checkbox4`}
                                checked={values?.page27[index]?.sectionsB[i]?.checkbox4}
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
                      <span>SECTION C</span>
                    </b>
                  </SoftTypography>
                  <SoftTypography fontSize="15px">
                    <span>SECTION C1</span>
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
                  {sectionC1 &&
                    sectionC1.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsC1[${i}].checkbox1`}
                                checked={values?.page27[index]?.sectionsC1[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsC1[${i}].checkbox2`}
                                checked={values?.page27[index]?.sectionsC1[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsC1[${i}].checkbox3`}
                                checked={values?.page27[index]?.sectionsC1[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsC1[${i}].checkbox4`}
                                checked={values?.page27[index]?.sectionsC1[i]?.checkbox4}
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
            <Grid ml={1} className="section-second">
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="15px">
                    <span>SECTION C2</span>
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
                  {sectionC2 &&
                    sectionC2.map((data, i) => {
                      return (
                        <>
                          <Grid container>
                            <Grid item lg={8} md={8} mt={0.5} xs={6}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsC2[${i}].checkbox1`}
                                checked={values?.page27[index]?.sectionsC2[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsC2[${i}].checkbox2`}
                                checked={values?.page27[index]?.sectionsC2[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsC2[${i}].checkbox3`}
                                checked={values?.page27[index]?.sectionsC2[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sectionsC2[${i}].checkbox4`}
                                checked={values?.page27[index]?.sectionsC2[i]?.checkbox4}
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
                            <Grid item lg={8} xs={6} md={8} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sections1[${i}].checkbox1`}
                                checked={values?.page27[index]?.sections1[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sections1[${i}].checkbox2`}
                                checked={values?.page27[index]?.sections1[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sections1[${i}].checkbox3`}
                                checked={values?.page27[index]?.sections1[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page27[${index}].sections1[${i}].checkbox4`}
                                checked={values?.page27[index]?.sections1[i]?.checkbox4}
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
