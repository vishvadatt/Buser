import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";
import "./DutiesPerformed.css";
function TopInfo({ formik, index }) {
  const { values, setFieldValue } = formik;

  return (
    <Grid container spacing={3} ml={0} className="patient-name-info-row-container">
      <Grid item xs={12} sm={6}>
        <FormField
          type="text"
          label="Client"
          name="name"
          // value={values.name}
          // value={formik.values?.dutiesPage[index]?.name}
          value={values?.name}
          placeholder="Name of Client"
          // onChange={(e) => setFieldValue("patientp5", e.target.value)}
          onChange={(e) => formik.setFieldValue(`name`, e.target.value)}
          // error={errors.Patient && touched.Patient}
          //   success={PatientV.length > 0 && !errors.Patient}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormField
          type="date"
          label="Date"
          name="datep5"
          // value={values.datep5}
          // onChange={(e) => setFieldValue("datep5", e.target.value)}
          value={formik.values?.dutiesPage[index]?.datep5}
          onChange={(e) => formik.setFieldValue(`dutiesPage[${index}].datep5`, e.target.value)}

          // placeholder="Date"
          // error={errors.DATE && touched.DATE}
          //   success={DATEV.length > 0 && !errors.DATE}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormField
          type="date"
          label="Date of Injury"
          name="dateofInjuryp5"
          // value={values.dateofInjuryp5}
          // onChange={(e) => setFieldValue("dateofInjuryp5", e.target.value)}
          value={formik.values?.dutiesPage[index]?.dateofInjuryp5}
          onChange={(e) =>
            formik.setFieldValue(`dutiesPage[${index}].dateofInjuryp5`, e.target.value)
          }
          // placeholder={dateofinjury.placeholder}
          // error={errors.dateofinjury && touched.dateofinjury}
          //   success={dateofinjuryV.length > 0 && !errors.dateofinjury}
        />
      </Grid>
    </Grid>
  );
}

TopInfo.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default TopInfo;
