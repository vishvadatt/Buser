import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React from "react";
import PropTypes from "prop-types";
import FormField from "../../../FormField";
import SoftTypography from "components/SoftTypography";
import "./index.css";

function AssessmentComponent({ formData, formik, form, doctorShopFromDetails, index }) {
  const { formField } = form;
  const { values } = formik;
  // const {values,touched,formField,errors,setFieldValue,handleChange} = formData;
  const { isImproved, isNoChanges, isRegressed, isFlareUp, additionalAssessment } = formField;
  const {
    isImproved: isImprovedV,
    isNoChanges: isNoChangesV,
    isRegressed: isRegressedV,
    isFlareUp: isFlareUpV,
    additionalAssessment: additionalAssessmentV,
  } = values;
  return (
    <>
      {/* <Grid container spacing={1} mt={2}>
        <Grid item>
          <label className="Assessment">Assessment:</label>
        </Grid>
        <Grid item style={{display : "flex"}}>
          <input
            type={isImproved.type}
            name={isImproved.name}
            value={isImprovedV}
            onChange={handleChange}
          />
          <label>Improved</label>
        </Grid>
        <Grid item style={{display : "flex"}}>
          <input
            type={isNoChanges.type}
            name={isNoChanges.name}
            value={isNoChangesV}
            onChange={handleChange}
          />
          <label>No Change</label>
        </Grid>
        <Grid item style={{display : "flex"}}>
          <input
            type={isRegressed.type}
            name={isRegressed.name}
            value={isRegressedV}
            onChange={handleChange}
          />
          <label>Regressed</label>
        </Grid>
        <Grid item style={{display : "flex"}}>
          <input 
            type={isFlareUp.type}
            name={isFlareUp.name}
            value={isFlareUpV}
            onChange={handleChange}
          />
          <label>Flare-Up</label>
        </Grid>
        <Grid item style={{display : "flex"}}>
          <label>Additional Assessment:</label>
          <input 
            type={additionalAssessment.type}
            name={additionalAssessment.name}
            value={additionalAssessmentV}
            onChange={handleChange}
            className="Additional" 
          />
        </Grid>
      </Grid> */}
      <Grid lg={2} md={12} xs={12}>
        <SoftTypography style={{ fontWeight: "700" }}>Assessment:</SoftTypography>
      </Grid>
      <Grid item lg={2} md={4} xs={6}>
        <FormControlLabel
          // style={{ marginLeft: "15px" }}
          control={
            <Checkbox
              name={isImproved.name}
              // checked={isImprovedV}
              // onChange={formik.handleChange}
              checked={formik.values?.fifteenthPage[index]?.[isImproved.name]}
              onChange={(e) =>
                formik.setFieldValue(`fifteenthPage[${index}].${isImproved.name}`, e.target.checked)
              }
            />
          }
          label={"Improved"}
        />
      </Grid>
      <Grid item lg={2} md={4} xs={6}>
        <FormControlLabel
          // style={{ marginLeft: "15px" }}
          control={
            <Checkbox
              name={isNoChanges.name}
              // checked={isNoChangesV}
              // onChange={formik.handleChange}
              checked={formik.values?.fifteenthPage[index]?.[isNoChanges.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `fifteenthPage[${index}].${isNoChanges.name}`,
                  e.target.checked
                )
              }
            />
          }
          label={"No Changes"}
        />
      </Grid>
      <Grid item lg={1.5} md={4} xs={6}>
        <FormControlLabel
          // style={{ marginLeft: "15px" }}
          control={
            <Checkbox
              name={isRegressed.name}
              // checked={isRegressedV}
              // onChange={formik.handleChange}
              // checked={formik.values?.fifteenthPage[index]?.[isRegressed.name]}
              // onChange={(e) =>
              //   formik.setFieldValue(`fifteenthPage[${index}].${isRegressed.name}`, e.target.checked)
              // }
              checked={formik.values?.fifteenthPage[index]?.[isRegressed.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `fifteenthPage[${index}].${isRegressed.name}`,
                  e.target.checked
                )
              }
            />
          }
          label={"Regressed"}
        />
      </Grid>
      <Grid item lg={1.5} md={4} xs={6}>
        <FormControlLabel
          // style={{ marginLeft: "15px" }}
          control={
            <Checkbox
              name={isFlareUp.name}
              //  checked={isFlareUpV}
              //   onChange={formik.handleChange}
              checked={formik.values?.fifteenthPage[index]?.[isFlareUp.name]}
              onChange={(e) =>
                formik.setFieldValue(`fifteenthPage[${index}].${isFlareUp.name}`, e.target.checked)
              }
            />
          }
          label={"Flare-Up"}
        />
      </Grid>
      <Grid
        item
        lg={3}
        md={6}
        xs={12}
        className="additonLabel additional"
        style={{ display: "flex" }}
      >
        <label>Additional Assessment:</label>
        <input
          type={additionalAssessment.type}
          label={additionalAssessment.label}
          name={additionalAssessment.name}
          value={additionalAssessmentV}
          onChange={formik.handleChange}
        />

        {/* <FormField
          type={additionalAssessment.type}
          label={additionalAssessment.label}
          name={additionalAssessment.name}
          value={additionalAssessmentV}
        /> */}
      </Grid>
    </>
  );
}

AssessmentComponent.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  doctorShopFromDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default AssessmentComponent;
