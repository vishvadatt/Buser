import { Grid, TextField } from "@mui/material";
import SoftBox from "components/SoftBox";
import React from "react";
import PropTypes from "prop-types";
import FormField from "../../../FormField";
import { useState } from "react";
import { ErrorMessage } from "formik";

function PractitionerComponent({ formData, formik, form }) {
  console.log("formik..", formik);
  console.log("form...", form);
  // console.log("formData..",formData);
  // const {values,touched,formField,errors,setFieldValue,handleChange} = formData;
  const { formField } = form;
  const { values } = formik;
  // const [practitionerName , setPractitionerName] = useState('');
  // console.log("errors...",errors);
  console.log("kkk...", values);
  // console.log("practitionerName..",practitionerName);
  const { PractitionerName, NPI, TIN, hourlyRate } = formField;
  const {
    PractitionerName: PractitionerNameV,
    NPI: NPIV,
    TIN: TINV,
    hourlyRate: hourlyRateV,
  } = values;

  return (
    <>
      {/* <Grid item className="practitionerName">
        <label>Practitioner</label>
        <input
          type={PractitionerName.type}
          label={PractitionerName.label}
          name={PractitionerName.name}
          value={PractitionerNameV}
          placeholder={PractitionerName.placeholder}
          onChange={handleChange}
          error={errors.PractitionerName && touched.PractitionerName}
          success={PractitionerNameV.length > 0 && !errors.PractitionerName}
        />
        {<ErrorMessage name={PractitionerName.name} />}
      </Grid>
      <Grid item className="NPI">
        <label>NPI:</label>
        <input
          type={NPI.type}
          label={NPI.label}
          name={NPI.name}
          value={NPIV}
          placeholder={NPI.placeholder}
          onChange={handleChange}
        />
      </Grid>
      <Grid item className="TIN">
        <label>TIN:</label>
        <input
          type={TIN.type}
          label={TIN.label}
          name={TIN.name}
          value={TINV}
          placeholder={TIN.placeholder}
          onChange={handleChange}
        />
      </Grid>
      <Grid item className="hourlyRate">
        <label>Hourly rate = $</label>
        <input
          type={hourlyRate.type}
          label={hourlyRate.label}
          name={hourlyRate.name}
          value={hourlyRateV}
          placeholder={hourlyRate.placeholder}
          onChange={handleChange}
        />
      </Grid> */}

      <Grid item lg={3} sm={12} xs={12}>
        <Grid container>
          <Grid lg={12} sm={6} xs={12}>
            <FormField
              type={PractitionerName.type}
              label={PractitionerName.label}
              name={PractitionerName.name}
              value={PractitionerNameV}
            />
          </Grid>
          <Grid lg={12} sm={6} xs={12}>
            <FormField type={NPI.type} label={NPI.label} name={NPI.name} value={NPIV} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid lg={12} sm={6} xs={12}>
            <FormField type={TIN.type} label={TIN.label} name={TIN.name} value={TINV} />
          </Grid>
          <Grid lg={12} sm={6} xs={12}>
            <FormField
              type={hourlyRate.type}
              label={hourlyRate.label}
              name={hourlyRate.name}
              value={hourlyRateV}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

PractitionerComponent.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default PractitionerComponent;
