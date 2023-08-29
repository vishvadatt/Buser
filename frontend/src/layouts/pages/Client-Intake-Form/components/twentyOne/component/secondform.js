import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function firstPart({ formik, index }) {
  const { values } = formik;
  const { age: ageV, date: dateV, name: nameV, gender: genderV } = values.page25[index];
  return (
    <>
      <SoftBox mt={1}>
        <Grid container>
          <Grid item lg={5} xs={12} md={12}>
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Name :</span>

            <input
              type="text"
              className="brainname"
              onChange={formik.handleChange}
              name={`page25[${index}].name`}
              value={nameV}
            />
          </Grid>
          <Grid item lg={2} xs={12} md={3}>
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Age :</span>

            <input
              type="text"
              className="brain-age"
              onChange={formik.handleChange}
              name={`page25[${index}].age`}
              value={ageV}
            />
          </Grid>
          <Grid item lg={2} xs={12} md={3}>
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Sex :</span>

            <input
              type="text"
              className="brain-sex"
              onChange={formik.handleChange}
              name={`page25[${index}].gender`}
              value={genderV}
            />
          </Grid>
          <Grid item lg={3} xs={12} md={6}>
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date :</span>

            <input
              type="date"
              className="brain-date"
              onChange={formik.handleChange}
              name={`page25[${index}].date`}
              value={dateV}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}
firstPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};

export default firstPart;
