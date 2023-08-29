import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function secondPart({ formik, form, index }) {
  const { values } = formik;
  const { experienced: experiencedV, clientName: clientNameV } = values.page10[index];
  return (
    <>
      <SoftBox mt={3}>
        <SoftBox>
          <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="8px">
            Please add any further details regarding the above here:
          </SoftTypography>

          <textarea
            className="textarea"
            value={experiencedV}
            name={`page10[${index}].experienced`}
            onChange={formik.handleChange}
          ></textarea>
        </SoftBox>
        <SoftBox mt={3}>
          <Grid className="clientaction">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
            <input
              type="text"
              value={clientNameV}
              name={`page10[${index}].clientName`}
              onChange={formik.handleChange}
            />
          </Grid>
        </SoftBox>
      </SoftBox>
    </>
  );
}
secondPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default secondPart;
