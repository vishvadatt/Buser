import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import DynamicConditions from "./DynamicConditions";

function endPart({ formik, form, index }) {
  const { values } = formik;
  const {
    condition1: condition1V,
    condition2: condition2V,
    condition3: condition3V,
    condition4: condition4V,
    condition5: condition5V,
    condition6: condition6V,
    condition7: condition7V,
    condition8: condition8V,
    condition9: condition9V,
    conditions: conditionsV,
  } = values.page13[index];
  console.log("values",values)
  return (
    <>
      <SoftBox>
        <SoftTypography fontSize="16px" marginBottom="8px" fontWeight="bold">
          Please list below each of the conditions you marked above as pain you are experiencing
          (i.e &ldquo;Low Back Pain&ldquo;):
        </SoftTypography>
        {/* <DynamicConditions formik={formik} values={conditionsV} key={index} /> */}
        <Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 1:</span>
            <input
              type="text"
              value={condition1V}
              name={`page13[${index}].condition1`}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 2:</span>
            <input
              type="text"
              value={condition2V}
              name={`page13[${index}].condition2`}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 3:</span>
            <input
              type="text"
              value={condition3V}
              name={`page13[${index}].condition3`}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 4:</span>
            <input
              type="text"
              value={condition4V}
              name={`page13[${index}].condition4`}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 5:</span>
            <input
              type="text"
              value={condition5V}
              name={`page13[${index}].condition5`}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 6:</span>
            <input
              type="text"
              value={condition6V}
              name={`page13[${index}].condition6`}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 7:</span>
            <input
              type="text"
              value={condition7V}
              name={`page13[${index}].condition7`}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 8:</span>
            <input
              type="text"
              value={condition8V}
              name={`page13[${index}].condition8`}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid className="P9conditions">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Condition 9:</span>
            <input
              type="text"
              value={condition9V}
              name={`page13[${index}].condition9`}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}

endPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default endPart;
