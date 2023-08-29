import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function index({ formik, index }) {
  const { values } = formik;

  const pain = [
    {
      name: "I have no pain at the moment.",
    },
    {
      name: "The pain is mild at the moment.",
    },
    {
      name: "The pain comes and goes and is moderate.",
    },
    {
      name: "The pain is moderate and does not vary much.",
    },
    {
      name: "The pain is severe but comes and goes.",
    },
    {
      name: "The pain is severe and does not vary much.",
    },
  ];
  const care = [
    {
      name: "I can look after myself without causing extra pain.",
    },
    {
      name: "I can look after myself normally but it causes extra pain.",
    },
    {
      name: "It is painful to look after myself and I am slow and careful.",
    },
    {
      name: "I need some help, but manage most of my personal care.",
    },
    {
      name: "I need help every day in most aspects of self-care.",
    },
    {
      name: "I do not get dressed, I wash with difficulty and stay in bed.      ",
    },
  ];
  const lifting = [
    {
      name: "I can lift heavy weights without extra pain.",
    },
    {
      name: "I can lift heavy weights, but it causes extra pain.",
    },
    {
      name: "Pain prevents me from lifting heavy weights off the floor but I can if they are conveniently positioned, for example on a table.",
    },
    {
      name: "Pain prevents me from lifting heavy weights, but I can manage light to medium weights if they are conveniently positioned.",
    },
    {
      name: "I can lift very light weights.",
    },
    {
      name: "I cannot lift or carry anything at all.",
    },
  ];
  const reading = [
    {
      name: "I can read as much as I want to with no pain in my neck.",
    },
    {
      name: "I can read as much as I want with slight pain in my neck.",
    },
    {
      name: "I can read as much as I want with moderate pain in my neck.",
    },
    {
      name: "I cannot read as much as I want because of moderate pain in my neck.",
    },
    {
      name: "I cannot read as much as I want because of severe pain in my neck.",
    },
    {
      name: "I cannot read at all.",
    },
  ];
  const headache = [
    {
      name: "I have no headaches at all.",
    },
    {
      name: "I have slight headaches which come infrequently.      ",
    },
    {
      name: "I have moderate headaches which come infrequently.      ",
    },
    {
      name: "I have moderate headaches which come frequently.      ",
    },
    {
      name: "I have severe headaches which come frequently.      ",
    },
    {
      name: "I have headaches almost all the time.      ",
    },
  ];
  //   middle
  const concentration = [
    {
      name: "I can concentrate fully when I want to with no difficulty.",
    },
    {
      name: "I can concentrate fully when I want to with slight difficulty.      ",
    },
    {
      name: "I have a fair degree of difficulty in concentrating when I want to.",
    },
    {
      name: "I have a lot of difficulty in concentrating when I want to.",
    },
    {
      name: "I have a great deal of difficulty in concentrating when I want to.",
    },
    {
      name: "I cannot concentrate at all.",
    },
  ];
  const work = [
    {
      name: "I can do as much work as I want to.",
    },
    {
      name: "I can only do my usual work, but no more.",
    },
    {
      name: "I can do most of my usual work, but no more.      ",
    },
    {
      name: ". I cannot do my usual work.",
    },
    {
      name: "I can hardly do any work at all.",
    },
    {
      name: "I cannot do any work at all.",
    },
  ];

  const driving = [
    {
      name: "I can drive my car without neck pain.",
    },
    {
      name: "I can drive my car as long as I want with slight pain in my neck.",
    },
    {
      name: "I can drive my car as long as I want with moderate pain in my neck.",
    },
    {
      name: "I cannot drive my car as long as I want because of moderate pain in my neck.",
    },
    {
      name: "I can hardly drive my car at all because of severe pain in my neck.",
    },
    {
      name: ". I cannot drive my car at all.",
    },
  ];
  const sleeping = [
    {
      name: "I have no trouble sleeping.",
    },
    {
      name: "My sleep is slightly disturbed (less than 1 hour sleepless).",
    },
    {
      name: "My sleep is mildly disturbed (1-2 hours sleepless).      ",
    },
    {
      name: "My sleep is moderately disturbed (2-3 hours sleepless).      ",
    },
    {
      name: "My sleep is greatly disturbed (3-5 hours sleepless).      ",
    },
    {
      name: "My sleep is completely disturbed (5-7 hours sleepless).",
    },
  ];
  const recreation = [
    {
      name: "I am able to engage in all recreational activities with no pain in my neck at all.",
    },
    {
      name: "I am able to engage in all recreational activities with some pain in my neck.",
    },
    {
      name: "I am able to engage in most, but not all recreational activities because of pain in my neck.",
    },
    {
      name: "I am able to engage in a few of my usual recreational activities because of pain in my neck.",
    },
    {
      name: "I can hardly do any recreational activities because of pain in my neck.",
    },
    {
      name: "I cannot do any recreational activities all all.      ",
    },
  ];

  return (
    <>
      <SoftBox>
        <Grid container spacing={1}>
          <Grid item lg={6} sm={12} xs={12} md={12}>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>
                  SECTION 1--Pain Intensity
                </span>
              </SoftTypography>
              <SoftBox className="sections">
                {pain &&
                  pain?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].pain[${i}].paincheck`}
                              checked={values?.page15[index]?.pain[i]?.paincheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>SECTION 2--Personal Care (Washing, Dressing etc.)</span>
              </SoftTypography>
              <SoftBox className="sections">
                {care &&
                  care?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].care[${i}].carecheck`}
                              checked={values?.page15[index]?.care[i]?.carecheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>SECTION 3--Lifting</span>
              </SoftTypography>
              <SoftBox className="sections">
                {lifting &&
                  lifting?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].lifting[${i}].liftingcheck`}
                              checked={values?.page15[index]?.lifting[i]?.liftingcheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>SECTION 4 --Reading</span>
              </SoftTypography>
              <SoftBox className="sections">
                {reading &&
                  reading?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].reading[${i}].readingcheck`}
                              checked={values?.page15[index]?.reading[i]?.readingcheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>SECTION 5--Headache</span>
              </SoftTypography>
              <SoftBox className="sections">
                {headache &&
                  headache?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].headache[${i}].headachecheck`}
                              checked={values?.page15[index]?.headache[i]?.headachecheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
          {/* <Grid lg={0.1}></Grid> */}
          <Grid item lg={6} xs={12}>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                // marginTop="10px"
                className="maintitle-mediation"
              >
                <span>SECTION 6 -- Concentration</span>
              </SoftTypography>
              <SoftBox className="sections sections-optional">
                {concentration &&
                  concentration?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].concentration[${i}].concentrationcheck`}
                              checked={values?.page15[index]?.concentration[i]?.concentrationcheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                // marginTop="10px"
                className="maintitle-mediation"
              >
                <span>SECTION 7--Work</span>
              </SoftTypography>
              <SoftBox className="sections">
                {work &&
                  work?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].work[${i}].workcheck`}
                              checked={values?.page15[index]?.work[i]?.workcheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                // marginTop="10px"
                className="maintitle-mediation"
              >
                <span>SECTION 8--Driving</span>
              </SoftTypography>
              <SoftBox className="sections sections-optional">
                {driving &&
                  driving?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].driving[${i}].drivingcheck`}
                              checked={values?.page15[index]?.driving[i]?.drivingcheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                // marginTop="10px"
                className="maintitle-mediation"
              >
                <span>SECTION 9--Sleeping</span>
              </SoftTypography>
              <SoftBox className="sections sections-optional">
                {sleeping &&
                  sleeping?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].sleeping[${i}].sleepingcheck`}
                              checked={values?.page15[index]?.sleeping[i]?.sleepingcheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                // marginTop="10px"
                marginLeft="1px"
                marginRight="1px"
                className="maintitle-mediation"
              >
                <span>SECTION 10--Recreation</span>
              </SoftTypography>
              <SoftBox className="sections sections-optional">
                {recreation &&
                  recreation?.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} md={1} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page15[${index}].recreation[${i}].recreationcheck`}
                              checked={values?.page15[index]?.recreation[i]?.recreationcheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} ml={1} sm={10} md={10} xs={10}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <Grid className="clientaction">
        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
        <input
          type="text"
          name={`page15[${index}].clientName`}
          label="clientName"
          onChange={formik.handleChange}
          value={values?.page15[index]?.clientName}
        />
      </Grid>
      <SoftBox mt={3}>
        <Grid container>
          <Grid item lg={6} xs={12} className="clientaction">
            <br />
            <SoftTypography fontSize="15px">[Score/(Sections completed X 5)]100</SoftTypography>
            <div className="name-div">
              <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                DISABILITY INDEX SCORE: %{" "}
              </SoftTypography>
              <input
                type="number"
                name={`page15[${index}].disabilityindexscore`}
                label="clientName"
                onChange={formik.handleChange}
                value={values?.page15[index]?.disabilityindexscore}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item lg={12} xs={12} textAlign="center" className="clientaction">
          <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
            © Vernon H and Hagino C, 1991
          </SoftTypography>
          <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
            (with permission from Fairbank J)
          </SoftTypography>
        </Grid>
      </SoftBox>
    </>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
