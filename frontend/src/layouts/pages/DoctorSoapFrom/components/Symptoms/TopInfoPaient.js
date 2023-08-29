import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { clientIntakeFormGet,getDoctorShopFormDataAction } from "store/actions/actions";

import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";

function TopInfoPatient({ formik,stepIndex, setActiveStep }) {
  const { values, setFieldValue } = formik;
  const dispatch = useDispatch();

  let date = new Date().toLocaleDateString("en-CA");
  
  let currentDate = new Date().toJSON().slice(0, 10);
  
  return (
    <Grid container spacing={3} ml={0}>
      <Grid item xs={12} sm={6}>
        {/* <FormField
          type="input"
          label="Patient"
          name="patient2"
          value={values.patient2}
          placeholder="Name of Patient"
          onChange={(e) => setFieldValue("patient2", e.target.value)}
        /> */}
        <span className="spanLab">Client</span>
        <input
          type="input"
          label="Patient"
          name="name"
          value={values.name}
          onChange={(e) => setFieldValue("patient2", e.target.value)}
          placeholder="Name of Client"
          className="accidentHOMEInput1"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* <FormField
          type="date"
          label="Date"
          name="date2"
          value={values.date2}
          onChange={(e) => setFieldValue("date2", e.target.value)}
        /> */}

        <span className="spanLab" style={{marginRight: "25px"}}>Date</span>
        <input
          // max={date}
          // min={date}
          type="date"
          label="Date"
          name="date2"
          value={currentDate}
          onChange={(e) => setFieldValue("date2", e.target.value)}
          className="form5date"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* <FormField
          type="date"
          label="Date of Injury"
          name="dateofInjury2"
          value={values.dateofInjury2}
          onChange={(e) => setFieldValue("dateofInjury2", e.target.value)}
        /> */}
         <span className="spanLab">Date of Injury</span>
        <input
          max={date}
          type="date"
          label="Date of Injury"
          name="dateofInjury2"
          value={values.dateofInjury2}
          onChange={(e) => setFieldValue("dateofInjury2", e.target.value)}
          className="form5date"
        />
      </Grid>
    </Grid>
    //   </FormControl>
  );
}

TopInfoPatient.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TopInfoPatient;
