import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";


function BottomSign({ formik }) {

  const { values, setFieldValue } = formik;

  return (
    //   <FormControl>
    <Grid container spacing={3} ml={0}>
      <Grid item xs={12} sm={6}>
        <FormField
          type="text"
          //   label="Signature"
          name="doctorSign"
          value={values.doctorSign}
          onChange={(e) => setFieldValue("doctorSign", e.target.value)}
        // placeholder={Patient.placeholder}
        // error={errors.Patient && touched.Patient}
        //   success={PatientV.length > 0 && !errors.Patient}
        />

        <label className="spanLab">Signature</label>
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormField
          type="date"
          //   label="Date"
          name="doctorDate"
          value={values.doctorDate}
          onChange={(e) => setFieldValue("doctorDate", e.target.value)}

        // placeholder={DATE.placeholder}
        // error={errors.DATE && touched.DATE}
        //   success={DATEV.length > 0 && !errors.DATE}
        />
        <label className="spanLab">Date</label>
      </Grid>

    </Grid>
    //   </FormControl>
  );
}

BottomSign.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default BottomSign;