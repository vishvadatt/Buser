import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function endPart({ formik, form, index }) {
  const { values } = formik;
  const { meditations: meditationsV, dose: doseV, clientName: clientNameV } = values.page7[index];

  return (
    <Grid>
      <SoftBox>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="8px">
          Please list any medications you are taking, include dose if possible (See also the next
          page with a list of some medications. Please include their dosages here):
        </SoftTypography>
        {/* <textarea name="" id="" rows="10"></textarea> */}
        <textarea
          className="textarea"
          value={meditationsV}
          name={`page7[${index}].meditations`}
          onChange={formik.handleChange}
        ></textarea>
      </SoftBox>
      <SoftBox>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="8px">
          Please list any supplements or herbal therapies you are taking, include dose if possible:
        </SoftTypography>
        {/* <textarea name="" id="" rows="10"></textarea> */}
        <textarea
          className="textarea"
          value={doseV}
          name={`page7[${index}].dose`}
          onChange={formik.handleChange}
        ></textarea>
      </SoftBox>
      <SoftBox mt={3}>
        <Grid className="clientaction">
          <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
          <input
            type="text"
            label="clientName"
            onChange={formik.handleChange}
            value={clientNameV}
            name={`page7[${index}].clientName`}
          />
        </Grid>
      </SoftBox>
    </Grid>
  );
}

endPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default endPart;
