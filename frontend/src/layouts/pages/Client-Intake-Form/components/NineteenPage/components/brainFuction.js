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
      name: "A decrease in attention span",
    },
    {
      name: "Mental fatigue",
    },
    {
      name: "Difficulty learning new things",
    },
    {
      name: "Difficulty staying focused and concentrating for extended periods of time",
    },
    {
      name: "Experiencing fatigue when reading sooner than in the past",
    },
    {
      name: "Experiencing fatigue when driving sooner than in the past",
    },
    {
      name: "Need for caffeine to stay mentally alert",
    },
    {
      name: "Overall brain function impairs your daily life",
    },
  ];
  const section2 = [
    {
      name: "Twitching or tremor in your hands and legs when resting",
    },
    {
      name: "Handwriting has gotten smaller and more crowded together",
    },
    {
      name: "A loss of smell to foods",
    },
    {
      name: "Difficulty sleeping or fitful sleep",
    },
    {
      name: "Stiffness in shoulders and hips that goes away when you start to move",
    },
    {
      name: "Constipation",
    },
    {
      name: "Voice has become softer",
    },
    {
      name: "Facial expression that is serious or angry",
    },
    {
      name: "Episodes of dizziness or light-headedness upon standing",
    },
    {
      name: "A hunched over posture when getting up and walking",
    },
  ];
  const section3 = [
    {
      name: "Memory loss that impacts daily activities",
    },
    {
      name: "Difficulty planning, problem solving, or working with numbers",
    },
    {
      name: "Difficulty completing daily tasks",
    },
    {
      name: "Confusion about dates, the passage of time, or place",
    },
    {
      name: "Difficulty understanding visual images and spatial relationships (addresses and locations)",
    },
    {
      name: "Difficulty finding words when speaking",
    },
    {
      name: "Misplacement of things and inability to retrace steps",
    },
    {
      name: "Poor judgment and bad decisions",
    },
    {
      name: "Disinterest in hobbies, social activities, or work	",
    },
    {
      name: "Personality or mood changes",
    },
  ];
  const section4 = [
    {
      name: "Reduced function in overall hearing",
    },
    {
      name: "Difficulty understanding language with background or scatter noise",
    },
    {
      name: "Ringing or buzzing in the ear",
    },
    {
      name: "Difficulty comprehending language without perfect pronunciation",
    },
    {
      name: "Difficulty recognizing familiar faces",
    },
    {
      name: "Changes in comprehending the meaning of sentences, written or spoken",
    },
    {
      name: "Difficulty with verbal memory and finding words ",
    },
    {
      name: "Difficulty remembering events",
    },
    {
      name: "Difficulty recalling previously learned facts and names",
    },
    {
      name: "Inability to comprehend familiar words when read",
    },
    {
      name: "Difficulty spelling familiar words",
    },
    {
      name: "Monotone, unemotional speech",
    },
    {
      name: "Difficulty understanding the emotions of others when they speak (nonverbal cues)",
    },
    {
      name: "Disinterest in music and a lack of appreciation for melodies",
    },
    {
      name: "Difficulty with long-term memory",
    },
    {
      name: "Memory impairment when doing the basic activities of daily living",
    },
    {
      name: "Difficulty with directions and visual memory",
    },
    {
      name: "Noticeable differences in energy levels throughout the day",
    },
  ];
  const section5 = [
    {
      name: "Difficulty coordinating visual inputs and hand movements, resulting in an inability to efficiently reach for objects",
    },
    {
      name: "Difficulty comprehending written text",
    },
    {
      name: "Floaters or halos in your visual field",
    },
    {
      name: "Dullness of colors in your visual field during different times of the day",
    },
    {
      name: "Difficulty discriminating similar shades of color",
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
                    <span>SECTION 1</span>
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
                                name={`page23[${index}].sections1[${i}].checkbox1`}
                                checked={values?.page23[index]?.sections1[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections1[${i}].checkbox2`}
                                checked={values?.page23[index]?.sections1[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections1[${i}].checkbox3`}
                                checked={values?.page23[index]?.sections1[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections1[${i}].checkbox4`}
                                checked={values?.page23[index]?.sections1[i]?.checkbox4}
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
                    <span>SECTION 2</span>
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
                                name={`page23[${index}].sections2[${i}].checkbox1`}
                                checked={values?.page23[index]?.sections2[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections2[${i}].checkbox2`}
                                checked={values?.page23[index]?.sections2[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections2[${i}].checkbox3`}
                                checked={values?.page23[index]?.sections2[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections2[${i}].checkbox4`}
                                checked={values?.page23[index]?.sections2[i]?.checkbox4}
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
                    <span>SECTION 3</span>
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
                                name={`page23[${index}].sections3[${i}].checkbox1`}
                                checked={values?.page23[index]?.sections3[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections3[${i}].checkbox2`}
                                checked={values?.page23[index]?.sections3[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections3[${i}].checkbox3`}
                                checked={values?.page23[index]?.sections3[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections3[${i}].checkbox4`}
                                checked={values?.page23[index]?.sections3[i]?.checkbox4}
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
                  <SoftTypography fontSize="19px" fontWeight="bold" className="braintitle">
                    <span>SECTION 4</span>
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
                            <Grid item lg={4} md={4} xs={6}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections4[${i}].checkbox1`}
                                checked={values?.page23[index]?.sections4[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections4[${i}].checkbox2`}
                                checked={values?.page23[index]?.sections4[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections4[${i}].checkbox3`}
                                checked={values?.page23[index]?.sections4[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections4[${i}].checkbox4`}
                                checked={values?.page23[index]?.sections4[i]?.checkbox4}
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
                  <SoftTypography fontSize="19px" fontWeight="bold" className="braintitle">
                    <span>SECTION 5</span>
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
                                name={`page23[${index}].sections5[${i}].checkbox1`}
                                checked={values?.page23[index]?.sections5[i]?.checkbox1}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections5[${i}].checkbox2`}
                                checked={values?.page23[index]?.sections5[i]?.checkbox2}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections5[${i}].checkbox3`}
                                checked={values?.page23[index]?.sections5[i]?.checkbox3}
                                onChange={formik.handleChange}
                              />
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page23[${index}].sections5[${i}].checkbox4`}
                                checked={values?.page23[index]?.sections5[i]?.checkbox4}
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
