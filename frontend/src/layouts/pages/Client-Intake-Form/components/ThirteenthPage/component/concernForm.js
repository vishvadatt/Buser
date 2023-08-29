import React from "react";
import "../style.css";
import { Checkbox, Grid, Radio } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

const ConcernForm = ({ formik, index }) => {
  const { values } = formik;
  let date = new Date().toLocaleDateString("en-CA");

  console.log(values, "values11");

  return (
    <Grid container>
      <Grid item lg={5} xs={12} md={12}>
        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Name :</span>

        <input
          type="text"
          className="brainname"
          onChange={formik.handleChange}
          name={`page17[${index}].clientName`}
          value={values?.page17[index]?.clientName}
        />
      </Grid>
      <Grid item lg={2} xs={12} md={3}>
        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Age :</span>

        <input
          type="number"
          className="brain-age"
          onChange={formik.handleChange}
          name={`page17[${index}].age`}
          value={values?.page17[index]?.age}
        />
      </Grid>
      <Grid item lg={2} xs={12} md={3}>
        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Sex :</span>

        <input
          type="text"
          className="brain-sex"
          onChange={formik.handleChange}
          name={`page17[${index}].gender`}
          value={values?.page17[index]?.gender}
        />
      </Grid>
      <Grid item lg={3} xs={12} md={6}>
        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date :</span>

        <input
          max={date}
          type="date"
          className="brain-date"
          onChange={formik.handleChange}
          name={`page17[${index}].date`}
          value={values?.page17[index]?.date}
        />
      </Grid>
      <Grid container>
        <Grid item lg={12} xs={12} className="clientaction">
          <SoftTypography style={{ fontSize: "16px", fontWeight: "bold" }}>
            <u>Part I:</u>
          </SoftTypography>
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            {" "}
            Please list your 5 major health concerns in order of importance:
          </span>
        </Grid>
        <Grid item lg={6} xs={12} className="clientaction1">
          <span>1.</span>
          <input
            type="text"
            name={`page17[${index}].healthConcer1`}
            label="healthConcer1"
            onChange={formik.handleChange}
            value={values?.page17[index]?.healthConcer1}
          />
        </Grid>
        <Grid item lg={6} xs={12} className="clientaction1">
          <span>4.</span>
          <input
            type="text"
            name={`page17[${index}].healthConcer4`}
            label="healthConcer4"
            onChange={formik.handleChange}
            value={values?.page17[index]?.healthConcer4}
          />
        </Grid>
        <Grid item lg={6} xs={12} className="clientaction1">
          <span>2.</span>
          <input
            type="text"
            name={`page17[${index}].healthConcer2`}
            label="healthConcer2"
            onChange={formik.handleChange}
            value={values?.page17[index]?.healthConcer2}
          />
        </Grid>
        <Grid item lg={6} xs={12} className="clientaction1">
          <span>5.</span>
          <input
            type="text"
            name={`page17[${index}].healthConcer5`}
            label="healthConcer5"
            onChange={formik.handleChange}
            value={values?.page17[index]?.healthConcer5}
          />
        </Grid>
        <Grid item lg={6} xs={12} className="clientaction1">
          <span>3.</span>
          <input
            type="text"
            name={`page17[${index}].healthConcer3`}
            label="healthConcer3"
            onChange={formik.handleChange}
            value={values?.page17[index]?.healthConcer3}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

ConcernForm.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default ConcernForm;
