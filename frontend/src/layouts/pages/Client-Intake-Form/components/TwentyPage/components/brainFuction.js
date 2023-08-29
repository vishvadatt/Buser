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

  const section6 = [
    {
      name: "Difficulty with detailed hand coordination",
    },
    {
      name: "Difficulty with making decisions",
    },
    {
      name: "Difficulty with suppressing socially inappropriate thoughts",
    },
    {
      name: "Socially inappropriate behavior",
    },
    {
      name: "Decisions made based on desires, regardless of the consequences",
    },
    {
      name: "Difficulty planning and organizing daily events",
    },
    {
      name: "Difficulty motivating yourself to start and finish tasks",
    },
    {
      name: "A loss of attention and concentration",
    },
  ];
  const section7 = [
    {
      name: "Hypersensitivities to touch or pain",
    },
    {
      name: "Difficulty with spatial awareness when moving, laying back in a chair, or leaning against a wall	 ",
    },
    {
      name: "Frequently bumping into the wall or objects",
    },
    {
      name: "Difficulty with right-left discrimination",
    },
    {
      name: "Handwriting has become sloppier ",
    },
    {
      name: "Difficulty with basic math calculations",
    },
    {
      name: "Difficulty finding words for written or verbal communication",
    },
    {
      name: "Difficulty recognizing symbols, words, or letters",
    },
  ];
  const section8 = [
    {
      name: "Difficulty swallowing supplements or large bites of food",
    },
    {
      name: "Bowel motility and movements slow",
    },
    {
      name: "Bloating after meals",
    },
    {
      name: "Dry eyes or dry mouth",
    },
    {
      name: "A racing heart",
    },
    {
      name: "A flutter in the chest or an abnormal heart rhythm	",
    },
    {
      name: "Bowel or bladder incontinence, resulting in staining your underwear",
    },
  ];
  const section9 = [
    {
      name: "A decrease in movement speed",
    },
    {
      name: "Difficulty initiating movement",
    },
    {
      name: "Stiffness in your muscles (not joints)",
    },
    {
      name: "A stooped posture when walking",
    },
    {
      name: "Cramping of your hand when writing",
    },
  ];
  const section10 = [
    {
      name: "Abnormal body movements (such as twitching legs)",
    },
    {
      name: "Desires to flinch, clear your throat, or perform some type of movement",
    },
    {
      name: "Constant nervousness and a restless mind ",
    },
    {
      name: "Compulsive behaviors",
    },
    {
      name: "Increased tightness and tone in specific muscles",
    },
  ];
  const section11 = [
    {
      name: "Difficulty with balance, or balance that is noticeably worse on one side",
    },
    {
      name: "A need to hold the handrail or watch each step carefully when going down stairs",
    },
    {
      name: "Episodes of dizziness",
    },
    {
      name: "Nausea, car sickness, or seasickness",
    },
    {
      name: "A quick impact after consuming alcohol",
    },
    {
      name: "A slight hand shake when reaching for something",
    },
    {
      name: "Back muscles that tire quickly when standing or walking",
    },
    {
      name: "Chronic neck or back muscle tightness",
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
                <Grid item lg={8} md={8} sm={6} xs={6}>
                  <SoftTypography fontSize="19px" fontWeight="bold" className="braintitle">
                    <span>SECTION 6</span>
                  </SoftTypography>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={6}>
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
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections6[${i}].checkbox1`}
                                checked={values?.page24[index]?.sections6[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections6[${i}].checkbox2`}
                                checked={values?.page24[index]?.sections6[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections6[${i}].checkbox3`}
                                checked={values?.page24[index]?.sections6[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections6[${i}].checkbox4`}
                                checked={values?.page24[index]?.sections6[i]?.checkbox4}
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
                  <SoftTypography fontSize="19px" fontWeight="bold" className="braintitle">
                    <span>SECTION 7</span>
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
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections7[${i}].checkbox1`}
                                checked={values?.page24[index]?.sections7[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections7[${i}].checkbox2`}
                                checked={values?.page24[index]?.sections7[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections7[${i}].checkbox3`}
                                checked={values?.page24[index]?.sections7[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections7[${i}].checkbox4`}
                                checked={values?.page24[index]?.sections7[i]?.checkbox4}
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
                  <SoftTypography fontSize="19px" fontWeight="bold" className="braintitle">
                    <span>SECTION 8</span>
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
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections8[${i}].checkbox1`}
                                checked={values?.page24[index]?.sections8[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections8[${i}].checkbox2`}
                                checked={values?.page24[index]?.sections8[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections8[${i}].checkbox3`}
                                checked={values?.page24[index]?.sections8[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections8[${i}].checkbox4`}
                                checked={values?.page24[index]?.sections8[i]?.checkbox4}
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
                  <SoftTypography fontSize="19px" fontWeight="bold" className="braintitle">
                    <span>SECTION 9</span>
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
                            <Grid item lg={8} md={8} xs={6} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections9[${i}].checkbox1`}
                                checked={values?.page24[index]?.sections9[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections9[${i}].checkbox2`}
                                checked={values?.page24[index]?.sections9[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections9[${i}].checkbox3`}
                                checked={values?.page24[index]?.sections9[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections9[${i}].checkbox4`}
                                checked={values?.page24[index]?.sections9[i]?.checkbox4}
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
            <Grid ml={1} className="section-ten section-second">
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" fontWeight="bold" className="braintitle">
                    <span>SECTION 10</span>
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
                            <Grid item lg={8} xs={6} md={8} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections10[${i}].checkbox1`}
                                checked={values?.page24[index]?.sections10[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections10[${i}].checkbox2`}
                                checked={values?.page24[index]?.sections10[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections10[${i}].checkbox3`}
                                checked={values?.page24[index]?.sections10[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections10[${i}].checkbox4`}
                                checked={values?.page24[index]?.sections10[i]?.checkbox4}
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
            <Grid ml={1} className="section-eleven section-second">
              <Grid container>
                <Grid item lg={8} md={8} xs={6}>
                  <SoftTypography fontSize="19px" fontWeight="bold" className="braintitle">
                    <span>SECTION 11</span>
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
                            <Grid item lg={8} xs={6} md={8} mt={0.5}>
                              <li style={{ fontSize: "16px" }}>{data.name}</li>
                            </Grid>
                            <Grid item lg={4} xs={6} md={4}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections11[${i}].checkbox1`}
                                checked={values?.page24[index]?.sections11[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections11[${i}].checkbox2`}
                                checked={values?.page24[index]?.sections11[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections11[${i}].checkbox3`}
                                checked={values?.page24[index]?.sections11[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page24[${index}].sections11[${i}].checkbox4`}
                                checked={values?.page24[index]?.sections11[i]?.checkbox4}
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
