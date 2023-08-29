import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";

function FirstPart({ formik, index }) {
  const values = formik.values.FunctionalDetails;
  console.log("values21", values);

  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <Grid container spacing={2}>
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                name={`FunctionalDetails[${index}].COGTensionBreathingPRControl`}
                value={formik.values?.FunctionalDetails[index]?.COGTensionBreathingPRControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].COGTensionBreathingPRControl`,
                    e.target.value
                  )
                }
                label="COGTensionBreathingPRControl"
                // name="COGTensionBreathingPRControl"
                // value={COGTensionBreathingPRControlV}
                // onChange={formik.handleChange}
              >
                <option></option>
                <option>+</option>
                <option>-</option>
              </select>
            </div>
          </Grid>
          <Grid item md={4} xs={9}>
            <div className="analysissubtitle">
              <p>Standing (COG, Tension, Breathing, PR)</p>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className="analysisinput">
              <input
                type="text"
                label="COGTensionBreathingPR"
                name={`FunctionalDetails[${index}].COGTensionBreathingPR`}
                value={formik.values?.FunctionalDetails[index]?.COGTensionBreathingPR}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].COGTensionBreathingPR`,
                    e.target.value
                  )
                }
                // name="COGTensionBreathingPR"
                // value={COGTensionBreathingPRV}
                // onChange={formik.handleChange}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <Grid container spacing={2}>
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="RombergTestControl"
                name={`FunctionalDetails[${index}].RombergTestControl`}
                value={formik.values?.FunctionalDetails[index]?.RombergTestControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].RombergTestControl`,
                    e.target.value
                  )
                }
                // name="RombergTestControl"
                // value={RombergTestControlV}
                // onChange={formik.handleChange}
              >
                <option></option>
                <option>+</option>
                <option>-</option>
              </select>
            </div>
          </Grid>
          <Grid item md={4} xs={9}>
            <div className="analysissubtitle">
              <p>Romberg Test</p>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className="analysisinput">
              <input
                type="text"
                label="RombergTest"
                name={`FunctionalDetails[${index}].RombergTest`}
                value={formik.values?.FunctionalDetails[index]?.RombergTest}
                onChange={(e) =>
                  formik.setFieldValue(`FunctionalDetails[${index}].RombergTest`, e.target.value)
                }
                // name="RombergTest"
                // value={RombergTestV}
                // onChange={formik.handleChange}
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <Grid container spacing={2}>
          <Grid item md={1} xs={3}>
            <div>
              <select
                className="selectvalue"
                label="StandingHOHPTBothControl"
                name={`FunctionalDetails[${index}].StandingHOHPTBothControl`}
                value={formik.values?.FunctionalDetails[index]?.StandingHOHPTBothControl}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingHOHPTBothControl`,
                    e.target.value
                  )
                }
                // name="StandingHOHPTBothControl"
                // value={StandingHOHPTBothControlV}
                // onChange={formik.handleChange}
              >
                <option></option>
                <option>+</option>
                <option>-</option>
              </select>
            </div>
          </Grid>
          <Grid item md={4} xs={9}>
            <div className="analysissubtitle">
              <p>Standing HOH, PT, Both</p>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className="analysisinput">
              <input
                type="text"
                label="StandingHOHPTBoth"
                name={`FunctionalDetails[${index}].StandingHOHPTBoth`}
                value={formik.values?.FunctionalDetails[index]?.StandingHOHPTBoth}
                onChange={(e) =>
                  formik.setFieldValue(
                    `FunctionalDetails[${index}].StandingHOHPTBoth`,
                    e.target.value
                  )
                }
                // name="StandingHOHPTBoth"
                // value={StandingHOHPTBothV}
                // onChange={formik.handleChange}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
FirstPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default FirstPart;
