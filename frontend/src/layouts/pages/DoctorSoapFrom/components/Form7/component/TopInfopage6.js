import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";
import "../style.css";
function TopInfopage6({ formik, index }) {
  const { values, setFieldValue } = formik;
  let date = new Date().toLocaleDateString("en-CA");
  let currentDate = new Date().toJSON().slice(0, 10);

  console.log(formik.values?.form7[index]?.name,"patientName--")
  return (
    <Grid container spacing={3} ml={0} className="symptoms-update-patient-name-row-container">
      <Grid item xs={12} sm={6}>
        {/* <FormField
          type="text"
          label="Patient"
          name="patient6"
          value={values.patient6}
          placeholder="Name of Patient"
          onChange={(e) => setFieldValue("patient6", e.target.value)}
        /> */}
        <span className="spanLab">Client</span>
        <input
          type="text"
          label="Patient"
          name="name"
          // value={values?.name}
          value={formik.values?.form7[index]?.name}
          onChange={(e) => formik.setFieldValue(`form7[${index}].name`, e.target.value)}
          // onChange={(e) => setFieldValue("patient6", e.target.value)}
          placeholder="Name of Client"
          className="accidentHOMEInput1"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* <FormField
                      type="date"
                      label="Date"
                      name="date6"
                      value={values.date6}
                      onChange={(e)=> setFieldValue("date6", e.target.value)}
                    /> */}
        <span className="spanLab" style={{ marginRight: "30px" }}>
          Date
        </span>
        <input
          max={date}
          min={date}
          type="date"
          label="Date"
          name="date6"
          value={currentDate}
          // onChange={(e) => setFieldValue("date6", e.target.value)}
          // value={formik.values?.form7[index]?.name}
          onChange={(e) => formik.setFieldValue(`form7[${index}].date6`, e.target.value)}
          className="form5date"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* <FormField
          type="date"
          label="Date of Injury"
          name="dateofInjury6"
          value={values.dateofInjury6}
          onChange={(e) => setFieldValue("dateofInjury6", e.target.value)}
        /> */}
        <span className="spanLab">Date of Injury</span>
        <input
          max={date}
          type="date"
          label="Date of Injury"
          name="dateofInjury6"
          // value={values.dateofInjury6}
          // onChange={(e) => setFieldValue("dateofInjury6", e.target.value)}
          value={formik.values?.form7[index]?.dateofInjury6}
          onChange={(e) => formik.setFieldValue(`form7[${index}].dateofInjury6`, e.target.value)}
          className="form5date"
        />
      </Grid>
    </Grid>
  );
}

TopInfopage6.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default TopInfopage6;
