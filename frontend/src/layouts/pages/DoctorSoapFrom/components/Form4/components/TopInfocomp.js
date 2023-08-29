import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";

function TopInfoComp({ formik }) {
  const { values, setFieldValue } = formik;
  let date = new Date().toLocaleDateString("en-CA");
  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <Grid container spacing={3} ml={0}>
      <Grid item xs={12} sm={6}>
        {/* <FormField
          type="text"
          label="Patient"
          name="patientp4"
          value={values.patientp4}
          placeholder="Name of Patient"
          onChange={(e) => setFieldValue("patientp4", e.target.value)}
          // error={errors.Patient && touched.Patient}
          //   success={PatientV.length > 0 && !errors.Patient}
        /> */}

        <span className="spanLab">Client</span>
        <input
          type="text"
          label="Patient"
          name="name"
          value={values.name}
          onChange={(e) => setFieldValue("patientp4", e.target.value)}
          // placeholder={Patient.placeholder}
          placeholder="Name of Client"
          className="accidentHOMEInput1"
          // error={errors.Patient && touched.Patient}
          //   success={PatientV.length > 0 && !errors.Patient}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* <FormField
          type="date"
          label="Today's Date"
          name="datep4"
          value={values.datep4}
          onChange={(e) => setFieldValue("datep4", e.target.value)}
          // placeholder="Date"
          // error={errors.DATE && touched.DATE}
          //   success={DATEV.length > 0 && !errors.DATE}
        /> */}
        
        <span style={{marginRight: "25px"}} className="spanLab">Date</span>
        <input
          max={date}
          min={date}
          type="date"
          label="Today's Date"
          name="datep4"
          value={currentDate}
          onChange={(e) => setFieldValue("datep4", e.target.value)}
          className="form5date"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* <FormField
          type="date"
          label="Date of Injury"
          name="dateofInjuryp4"
          value={values.dateofInjuryp4}
          onChange={(e) => setFieldValue("dateofInjuryp4", e.target.value)}
          // placeholder={dateofinjury.placeholder}
          // error={errors.dateofinjury && touched.dateofinjury}
          //   success={dateofinjuryV.length > 0 && !errors.dateofinjury}
        /> */}
        <span className="spanLab">Date of Injury</span>
        <input
          max={date}
          type="date"
          label="Date of Injury"
          name="dateofInjuryp4"
          value={values.dateofInjuryp4}
          onChange={(e) => setFieldValue("dateofInjuryp4", e.target.value)}
          className="form5date"

          // placeholder={dateofinjury.placeholder}
          // error={errors.dateofinjury && touched.dateofinjury}
          //   success={dateofinjuryV.length > 0 && !errors.dateofinjury}
        />
      </Grid>
    </Grid>
  );
}

TopInfoComp.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TopInfoComp;
