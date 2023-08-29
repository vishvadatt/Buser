import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import "../../style.css";
import PropTypes from "prop-types";
import { Container } from "@mui/system";

function currentHelthstatus({ formik, form, index }) {
  const { formField } = form;
  const { values } = formik;

  const array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const {
    overallHealth: overallHealthV,
    physicalHealth: physicalHealthV,
    mentalHealth: mentalHealthV,
    stressLevels: stressLevelsV,
    exposuretoToxins: exposuretoToxinsV,
    clientName: clientNameV,
  } = values.page5[index];

  return (
    <>
      <Container>
        <SoftBox>
          <SoftBox>
            <SoftTypography
              fontWeight="bold"
              fontSize="16px"
              marginTop="20px"
              marginBottom="15px"
              mar
            >
              Current Health Status:
            </SoftTypography>
            <SoftBox className="overhealthlast">
              <Grid container style={{ marginLeft: "4rem" }} className="overallhealth">
                <span style={{ fontSize: "16px", marginRight: "10px", marginTop: "8px" }}>
                  Overall Health
                </span>
                <RadioGroup
                  value={formik.values.page5[index].overallHealth}
                  className="maritals"
                  name={`page5[${index}].overallHealth`}
                  onChange={formik.handleChange}
                >
                  {array1 &&
                    array1?.map((data, i) => {
                      return (
                        <>
                          <div style={{ marginRight: "15px" }} className="healthCode">
                            <div style={{ marginBottom: "-5px" }}>
                              <Radio value={data} />
                            </div>
                            <div>
                              <span style={{ fontSize: "14px", marginLeft: "6px" }}>{data}</span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </RadioGroup>
              </Grid>
              <Grid container style={{ marginLeft: "3.3rem" }} className="overallhealth">
                <span style={{ fontSize: "16px", marginRight: "10px", marginTop: "8px" }}>
                  Physical Health{" "}
                </span>
                <RadioGroup
                  className="maritals"
                  value={formik.values.page5[index].physicalHealth}
                  name={`page5[${index}].physicalHealth`}
                  onChange={formik.handleChange}
                >
                  {array1 &&
                    array1.map((data, i) => {
                      return (
                        <>
                          <div style={{ marginRight: "15px" }} className="healthCode">
                            <div style={{ marginBottom: "-5px" }}>
                              <Radio value={data} />
                            </div>
                            <div>
                              <span style={{ fontSize: "14px", marginLeft: "6px" }}>{data}</span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </RadioGroup>
              </Grid>
              <Grid
                container
                style={{ marginLeft: "4rem", marginBottom: "10px" }}
                className="overallhealth"
              >
                <span style={{ fontSize: "16px", marginRight: "10px", marginTop: "8px" }}>
                  Mental Health{" "}
                </span>
                <RadioGroup
                  className="maritals"
                  value={mentalHealthV}
                  name={`page5[${index}].mentalHealth`}
                  onChange={formik.handleChange}
                >
                  {array1 &&
                    array1.map((data, i) => {
                      return (
                        <>
                          <div style={{ marginRight: "15px" }} className="healthCode">
                            <div style={{ marginBottom: "-5px" }}>
                              <Radio value={data} />
                            </div>
                            <div>
                              <span style={{ fontSize: "14px", marginLeft: "6px" }}>{data}</span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </RadioGroup>
                <Grid container>
                  <Grid item lg={5} xl={4} xs={9.5} md={6.3}>
                    <span style={{ fontSize: "14px", marginLeft: "5px", marginTop: "5px" }}>
                      Poor
                    </span>
                  </Grid>
                  <Grid item lg={4} xl={3} xs={2.5} md={3}>
                    <span
                      style={{ fontSize: "14px", marginLeft: "0rem", marginTop: "5px" }}
                      className="ideal ideals"
                    >
                      Ideal
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </SoftBox>

            <Grid
              container
              style={{ marginLeft: "4.3rem", marginBottom: "10px", marginTop: "12px" }}
              className="overallhealth"
            >
              <span style={{ fontSize: "16px", marginRight: "10px", marginTop: "8px" }}>
                Stress Levels{" "}
              </span>

              <RadioGroup
                className="maritals"
                value={stressLevelsV}
                name={`page5[${index}].stressLevels`}
                onChange={formik.handleChange}
              >
                {array1 &&
                  array1.map((data, i) => {
                    return (
                      <>
                        <div style={{ marginRight: "15px" }} className="healthCode">
                          <div style={{ marginBottom: "-5px" }}>
                            <Radio value={data} />
                          </div>
                          <div>
                            <span style={{ fontSize: "14px", marginLeft: "6px" }}>{data}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </RadioGroup>
            </Grid>
            <Grid
              container
              style={{ marginLeft: "3rem", marginBottom: "10px" }}
              className="overallhealth"
            >
              <span
                style={{ fontSize: "16px", marginRight: "10px", marginTop: "8px", width: "7.3rem" }}
                className="toxins"
              >
                Exposure to toxins/pollution
              </span>
              <RadioGroup
                value={exposuretoToxinsV}
                onChange={formik.handleChange}
                className="maritals"
                name={`page5[${index}].exposuretoToxins`}
              >
                {array1 &&
                  array1.map((data, i) => {
                    return (
                      <>
                        <div style={{ marginRight: "15px" }} className="healthCode">
                          <div style={{ marginBottom: "-5px" }}>
                            <Radio value={data} />
                          </div>
                          <div>
                            <span style={{ fontSize: "14px", marginLeft: "6px" }}>{data}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </RadioGroup>
              <Grid container className="last-healthcode">
                <Grid item lg={1.8} xl={1.2} md={1.8}></Grid>
                <Grid item lg={5} xl={4} xs={9.5} md={6.3}>
                  <span style={{ fontSize: "14px", marginLeft: "5px", marginTop: "5px" }}>
                    None
                  </span>
                </Grid>
                <Grid item lg={4} xl={3} xs={2.5} md={3}>
                  <span
                    style={{ fontSize: "14px", marginLeft: "0rem", marginTop: "5px" }}
                    className="ideal"
                  >
                    Heavy
                  </span>
                </Grid>
              </Grid>
            </Grid>
          </SoftBox>
          {/* <SoftBox mt={3}>
            <Grid className="clientaction">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
              <input
                type="text"
                label="clientName"
                onChange={formik.handleChange}
                value={clientNameV}
                name={`page5[${index}].clientName`}
              />
            </Grid>
          </SoftBox> */}
        </SoftBox>
      </Container>
    </>
  );
}
// formik, form, formData, doctorShopFromDetails;
currentHelthstatus.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default currentHelthstatus;
