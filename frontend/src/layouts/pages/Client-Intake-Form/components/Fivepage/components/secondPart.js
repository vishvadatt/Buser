import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import { Container } from "@mui/system";

function secondPart({ formik, form, index }) {
  const { values } = formik;
  const { immunizations: immunizationsV, clientName: clientNameV } = values.page9[index];
  return (
    <>
      <Container>
        <SoftBox mt={3}>
          <SoftBox>
            <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="8px">
              List any immunizations you have had:
            </SoftTypography>
            <textarea
              className="textarea"
              value={immunizationsV}
              name={`page9[${index}].immunizations`}
              onChange={formik.handleChange}
            ></textarea>
          </SoftBox>
          <SoftBox mt={3}>
            <Grid className="clientaction">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
              <input
                type="text"
                value={clientNameV}
                name={`page9[${index}].clientName`}
                onChange={formik.handleChange}
              />
            </Grid>
          </SoftBox>
        </SoftBox>
      </Container>
    </>
  );
}
secondPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default secondPart;
