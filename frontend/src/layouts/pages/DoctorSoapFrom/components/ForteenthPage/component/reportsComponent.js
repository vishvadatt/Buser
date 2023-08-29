import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import FormField from "../../FormField";
import SoftTypography from "components/SoftTypography";

function ReportComponent({ formData, form, formik, index }) {
  const { formField } = form;
  const { values, handleChange } = formik;
  console.log(values);

  const {
    Complaint1,
    symptoms1,
    Limitations1,
    Sequence1,
    Functional1,
    Timemanagement1,
    complaintDate1,

    Complaint2,
    symptoms2,
    Limitations2,
    Sequence2,
    Functional2,
    Timemanagement2,
    complaintDate2,

    Complaint3,
    symptoms3,
    Limitations3,
    Sequence3,
    Functional3,
    Timemanagement3,
    complaintDate3,

    Complaint4,
    symptoms4,
    Limitations4,
    Sequence4,
    Functional4,
    Timemanagement4,
    complaintDate4,
  } = formField;

  const {
    Complaint1: Complaint1V,
    symptoms1: symptoms1V,
    Limitations1: Limitations1V,
    Sequence1: Sequence1V,
    Functional1: Functional1V,
    Timemanagement1: Timemanagement1V,
    complaintDate1: complaintDate1V,

    Complaint2: Complaint2V,
    symptoms2: symptoms2V,
    Limitations2: Limitations2V,
    Sequence2: Sequence2V,
    Functional2: Functional2V,
    Timemanagement2: Timemanagement2V,
    complaintDate2: complaintDate2V,

    Complaint3: Complaint3V,
    symptoms3: symptoms3V,
    Limitations3: Limitations3V,
    Sequence3: Sequence3V,
    Functional3: Functional3V,
    Timemanagement3: Timemanagement3V,
    complaintDate3: complaintDate3V,

    Complaint4: Complaint4V,
    symptoms4: symptoms4V,
    Limitations4: Limitations4V,
    Sequence4: Sequence4V,
    Functional4: Functional4V,
    Timemanagement4: Timemanagement4V,
    complaintDate4: complaintDate4V,
  } = values;

  return (
    <Grid>
      <Grid item xs={12} sm={9} ml={3}>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: "bold", lineHeight: "3" }}>
            DateXX/XX/XXXX:
          </span>
          <FormField
            type={complaintDate1.type}
            label={complaintDate1.label}
            name={complaintDate1.name}
            // value={complaintDate1V}
            // onChange={handleChange}
            value={formik.values?.forteenthPage[index]?.[complaintDate1.name]}
            onChange={(e) => {
              formik.setFieldValue(
                `forteenthPage[${index}].${complaintDate1.name}`,
                e.target.value
              );
            }}
            className="complaintDateCss"
          />

          {/* <input className="dob" type="date" name="complaintDate" value="complaintDateV.name" onChange={handleChange} /> */}
        </Grid>
        <SoftTypography
          variant="h6"
          fontWeight="bold"
          color="button"
          mt={1}
          style={{ display: "inlineBlock", fontSize: "13px" }}
        >
          Client reports...
        </SoftTypography>
        <Grid container direction="row" item xs={12} className="client-reports-grid-container">
          {/* <Grid container direction="row"> */}
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Complaint (include Chief/Additional Complaint Pain location, quality, radiation,
              severity 0-10/10, duration and time of day/night, things that aggravate/alleviate):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Complaint1.type}
              // label={Complaint1.label}
              name={Complaint1.name}
              placeholder={Complaint1.placeholder}
              // value={Complaint1V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Complaint1.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Complaint1.name}`, e.target.value);
              }}
              // error={errors.Complaint1 && touched.Complaint}
              className="reportCss"
              //   success={ComplaintV.length > 0 && !errors.Complaint}
            />
          </Grid>
          {/* </Grid> */}
        </Grid>

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Additional symptoms (Structural, Metabolic, Neurological):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={symptoms1.type}
              // // label={symptoms1.label}
              name={symptoms1.name}
              placeholder={symptoms1.placeholder}
              // value={symptoms1V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[symptoms1.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${symptoms1.name}`, e.target.value);
              }}
              // // error={errors.symptoms && touched.symptoms}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Limitations:
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Limitations1.type}
              // // label={Limitations1.label}
              name={Limitations1.name}
              placeholder={Limitations1.placeholder}
              // value={Limitations1V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Limitations1.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `forteenthPage[${index}].${Limitations1.name}`,
                  e.target.value
                );
              }}
              // // error={errors.Limitations && touched.Limitations}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Sequence/Exercise feedback (difficulties, improvements, etc):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Sequence1.type}
              // // label={Sequence1.label}
              name={Sequence1.name}
              placeholder={Sequence1.placeholder}
              // value={Sequence1V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Sequence1.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Sequence1.name}`, e.target.value);
              }}
              // // error={errors.Sequence && touched.Sequence}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Functional test update:
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Functional1.type}
              // // label={Functional1.label}
              name={Functional1.name}
              // onChange={handleChange}
              // value={Functional1V}
              value={formik.values?.forteenthPage[index]?.[Functional1.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Functional1.name}`, e.target.value);
              }}
              placeholder={Functional1.placeholder}
              // // error={errors.Functional && touched.Functional}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Time management (realistic sequence length compliance):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Timemanagement1.type}
              // // label={Timemanagement1.label}
              name={Timemanagement1.name}
              // value={Timemanagement1V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Timemanagement1.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `forteenthPage[${index}].${Timemanagement1.name}`,
                  e.target.value
                );
              }}
              placeholder={Timemanagement1.placeholder}
              // // error={errors.Timemanagement && touched.Timemanagement}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>

      <Grid item xs={12} sm={9} ml={3} mt={3}>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: "bold", lineHeight: "3" }}>
            DateXX/XX/XXXX:
          </span>
          <FormField
            type={complaintDate2.type}
            label={complaintDate2.label}
            name={complaintDate2.name}
            // value={complaintDate2V}
            // onChange={handleChange}
            value={formik.values?.forteenthPage[index]?.[complaintDate2.name]}
            onChange={(e) => {
              formik.setFieldValue(
                `forteenthPage[${index}].${complaintDate2.name}`,
                e.target.value
              );
            }}
            className="complaintDateCss"
          />

          {/* <input className="dob" type="date" name="complaintDate" value="complaintDateV.name" onChange={handleChange} /> */}
        </Grid>
        <SoftTypography
          variant="h6"
          fontWeight="bold"
          color="button"
          mt={1}
          style={{ display: "inlineBlock", fontSize: "13px" }}
        >
          Client reports...
        </SoftTypography>
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Complaint (include Chief/Additional Complaint Pain location, quality, radiation,
              severity 0-10/10, duration and time of day/night, things that aggravate/alleviate):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Complaint2.type}
              // label={Complaint2.label}
              name={Complaint2.name}
              placeholder={Complaint2.placeholder}
              // value={Complaint2V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Complaint2.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Complaint2.name}`, e.target.value);
              }}
              // error={errors.Complaint && touched.Complaint}
              className="reportCss"
              //   success={ComplaintV.length > 0 && !errors.Complaint}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Additional symptoms (Structural, Metabolic, Neurological):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={symptoms2.type}
              // // label={symptoms2.label}
              name={symptoms2.name}
              placeholder={symptoms2.placeholder}
              // value={symptoms2V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[symptoms2.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${symptoms2.name}`, e.target.value);
              }}
              // // error={errors.symptoms && touched.symptoms}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Limitations:
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Limitations2.type}
              // // label={Limitations2.label}
              name={Limitations2.name}
              placeholder={Limitations2.placeholder}
              // value={Limitations2V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Limitations2.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `forteenthPage[${index}].${Limitations2.name}`,
                  e.target.value
                );
              }}
              // // error={errors.Limitations && touched.Limitations}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Sequence/Exercise feedback (difficulties, improvements, etc):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Sequence2.type}
              // // label={Sequence2.label}
              name={Sequence2.name}
              placeholder={Sequence2.placeholder}
              // value={Sequence2V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Sequence2.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Sequence2.name}`, e.target.value);
              }}
              // // error={errors.Sequence && touched.Sequence}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Functional test update:
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Functional2.type}
              // // label={Functional2.label}
              name={Functional2.name}
              // onChange={handleChange}
              // value={Functional2V}
              value={formik.values?.forteenthPage[index]?.[Functional2.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Functional2.name}`, e.target.value);
              }}
              placeholder={Functional2.placeholder}
              // // error={errors.Functional && touched.Functional}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Time management (realistic sequence length compliance):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Timemanagement2.type}
              // // label={Timemanagement2.label}
              name={Timemanagement2.name}
              // value={Timemanagement2V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Timemanagement2.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `forteenthPage[${index}].${Timemanagement2.name}`,
                  e.target.value
                );
              }}
              placeholder={Timemanagement2.placeholder}
              // // error={errors.Timemanagement2 && touched.Timemanagement}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>

      <Grid item xs={12} sm={9} ml={3} mt={3}>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: "bold", lineHeight: "3" }}>
            DateXX/XX/XXXX:
          </span>
          <FormField
            type={complaintDate3.type}
            label={complaintDate3.label}
            name={complaintDate3.name}
            // value={complaintDate3V}
            // onChange={handleChange}
            value={formik.values?.forteenthPage[index]?.[complaintDate3.name]}
            onChange={(e) => {
              formik.setFieldValue(
                `forteenthPage[${index}].${complaintDate3.name}`,
                e.target.value
              );
            }}
            className="complaintDateCss"
          />

          {/* <input className="dob" type="date" name="complaintDate" value="complaintDateV.name" onChange={handleChange} /> */}
        </Grid>
        <SoftTypography
          variant="h6"
          fontWeight="bold"
          color="button"
          mt={1}
          style={{ display: "inlineBlock", fontSize: "13px" }}
        >
          Client reports...
        </SoftTypography>
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Complaint (include Chief/Additional Complaint Pain location, quality, radiation,
              severity 0-10/10, duration and time of day/night, things that aggravate/alleviate):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Complaint3.type}
              // label={Complaint3.label}
              name={Complaint3.name}
              placeholder={Complaint3.placeholder}
              // value={Complaint3V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Complaint3.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Complaint3.name}`, e.target.value);
              }}
              // error={errors.Complaint && touched.Complaint}
              className="reportCss"
              //   success={ComplaintV.length > 0 && !errors.Complaint}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Additional symptoms (Structural, Metabolic, Neurological):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={symptoms3.type}
              // // label={symptoms3.label}
              name={symptoms3.name}
              placeholder={symptoms3.placeholder}
              // value={symptoms3V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[symptoms3.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${symptoms3.name}`, e.target.value);
              }}
              // // error={errors.symptoms && touched.symptoms}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Limitations:
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Limitations3.type}
              // // label={Limitations3.label}
              name={Limitations3.name}
              placeholder={Limitations3.placeholder}
              // value={Limitations3V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Limitations3.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `forteenthPage[${index}].${Limitations3.name}`,
                  e.target.value
                );
              }}
              // // error={errors.Limitations && touched.Limitations}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Sequence/Exercise feedback (difficulties, improvements, etc):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Sequence3.type}
              // // label={Sequence3.label}
              name={Sequence3.name}
              placeholder={Sequence3.placeholder}
              // value={Sequence3V}
              // onChange={handleChange}
              // // error={errors.Sequence && touched.Sequence}
              value={formik.values?.forteenthPage[index]?.[Sequence3.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Sequence3.name}`, e.target.value);
              }}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Functional test update:
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Functional3.type}
              // // label={Functional3.label}
              name={Functional3.name}
              // onChange={handleChange}
              // value={Functional3V}
              value={formik.values?.forteenthPage[index]?.[Functional3.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Functional3.name}`, e.target.value);
              }}
              placeholder={Functional3.placeholder}
              // // error={errors.Functional && touched.Functional}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Time management (realistic sequence length compliance):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Timemanagement3.type}
              // // label={Timemanagement3.label}
              name={Timemanagement3.name}
              // value={Timemanagement3V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Timemanagement3.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `forteenthPage[${index}].${Timemanagement3.name}`,
                  e.target.value
                );
              }}
              placeholder={Timemanagement3.placeholder}
              // // error={errors.Timemanagement && touched.Timemanagement}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>

      <Grid item xs={12} sm={9} ml={3} mt={3}>
        <Grid item style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "13px", fontWeight: "bold", lineHeight: "3" }}>
            DateXX/XX/XXXX:
          </span>
          <FormField
            type={complaintDate4.type}
            label={complaintDate4.label}
            name={complaintDate4.name}
            // value={complaintDate4V}
            // onChange={handleChange}
            value={formik.values?.forteenthPage[index]?.[complaintDate4.name]}
            onChange={(e) => {
              formik.setFieldValue(
                `forteenthPage[${index}].${complaintDate4.name}`,
                e.target.value
              );
            }}
            className="complaintDateCss"
          />

          {/* <input className="dob" type="date" name="complaintDate" value="complaintDateV.name" onChange={handleChange} /> */}
        </Grid>
        <SoftTypography
          variant="h6"
          fontWeight="bold"
          color="button"
          mt={1}
          style={{ display: "inlineBlock", fontSize: "13px" }}
        >
          Client reports...
        </SoftTypography>
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Complaint (include Chief/Additional Complaint Pain location, quality, radiation,
              severity 0-10/10, duration and time of day/night, things that aggravate/alleviate):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Complaint4.type}
              // label={Complaint4.label}
              name={Complaint4.name}
              placeholder={Complaint4.placeholder}
              // value={Complaint4V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Complaint4.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Complaint4.name}`, e.target.value);
              }}
              // error={errors.Complaint && touched.Complaint}
              className="reportCss"
              //   success={ComplaintV.length > 0 && !errors.Complaint}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Additional symptoms (Structural, Metabolic, Neurological):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={symptoms4.type}
              // // label={symptoms4.label}
              name={symptoms4.name}
              placeholder={symptoms4.placeholder}
              // value={symptoms4V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[symptoms4.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${symptoms4.name}`, e.target.value);
              }}
              // // error={errors.symptoms && touched.symptoms}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Limitations:
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Limitations4.type}
              // // label={Limitations4.label}
              name={Limitations4.name}
              placeholder={Limitations4.placeholder}
              // value={Limitations4V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Limitations4.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `forteenthPage[${index}].${Limitations4.name}`,
                  e.target.value
                );
              }}
              // // error={errors.Limitations && touched.Limitations}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Sequence/Exercise feedback (difficulties, improvements, etc):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Sequence4.type}
              // // label={Sequence4.label}
              name={Sequence4.name}
              placeholder={Sequence4.placeholder}
              // value={Sequence4V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Sequence4.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Sequence4.name}`, e.target.value);
              }}
              // // error={errors.Sequence && touched.Sequence}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Functional test update:
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Functional4.type}
              // // label={Functional4.label}
              name={Functional4.name}
              // onChange={handleChange}
              // value={Functional4V}
              value={formik.values?.forteenthPage[index]?.[Functional4.name]}
              onChange={(e) => {
                formik.setFieldValue(`forteenthPage[${index}].${Functional4.name}`, e.target.value);
              }}
              placeholder={Functional4.placeholder}
              // // error={errors.Functional && touched.Functional}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" className="client-reports-grid-container">
          <Grid item xs={6}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              mt={1}
              style={{ display: "inlineBlock", fontSize: "13px" }}
            >
              Time management (realistic sequence length compliance):
            </SoftTypography>
          </Grid>
          <Grid item xs={6}>
            <FormField
              type={Timemanagement4.type}
              // // label={Timemanagement4.label}
              name={Timemanagement4.name}
              // value={Timemanagement4V}
              // onChange={handleChange}
              value={formik.values?.forteenthPage[index]?.[Timemanagement4.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `forteenthPage[${index}].${Timemanagement4.name}`,
                  e.target.value
                );
              }}
              placeholder={Timemanagement4.placeholder}
              // // error={errors.Timemanagement && touched.Timemanagement}
              className="reportCss"

              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
}

ReportComponent.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default ReportComponent;
