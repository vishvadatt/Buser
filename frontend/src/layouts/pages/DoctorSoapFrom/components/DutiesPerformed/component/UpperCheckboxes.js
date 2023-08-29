import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox, Grid } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import FormField from "layouts/pages/Profile/components/FormField";
import "../style.css";

function UpperCheckboxes({ formik, form, index }) {
  const { values } = formik;
  const { formField } = form;
  const {
    accidentWORK1Check,
    accidentWORK2Check,
    accidentWORK3Check,
    accidentWORK4Check,
    accidentWORK5Check,
    accidentWORK6Check,
    accidentWORK7Check,
    accidentWORK8Check,
    accidentWORK9Check,
    accidentWORK10Check,
    accidentWORK11Check,
    accidentWORK12Check,
    accidentWORK13Check,
    accidentWORK14Check,
    accidentWORK15Check,
    accidentWORK16Check,
    accidentWORK17Check,
    accidentWORK18Check,
    accidentWORK19Check,
    accidentWORK20Check,
    accidentWORK21Check,
    accidentWORK22Check,
    accidentWORK23Check,
    accidentWORK24Check,
    accidentWORK25Check,
    accidentWORK26Check,
    accidentWORK27Check,
    accidentWORK28Check,
    accidentWORK29Check,
    accidentWORK30Check,
    accidentWORK31Check,
    accidentWORK32Check,
    accidentWORK33Check,
    accidentWORK34Check,
    accidentWORK35Check,
    accidentWORK35Input1,
    accidentWORK35Input2,
    accidentWORK35Input3,
    accidentWORK35Input4,
    accidentWORK35Input5,
    accidentWORK35Input6,
  } = formField;
  const {
    accidentWORK1Check: accidentWORK1CheckV,
    accidentWORK2Check: accidentWORK2CheckV,
    accidentWORK3Check: accidentWORK3CheckV,
    accidentWORK4Check: accidentWORK4CheckV,
    accidentWORK5Check: accidentWORK5CheckV,
    accidentWORK6Check: accidentWORK6CheckV,
    accidentWORK7Check: accidentWORK7CheckV,
    accidentWORK8Check: accidentWORK8CheckV,
    accidentWORK9Check: accidentWORK9CheckV,
    accidentWORK10Check: accidentWORK10CheckV,
    accidentWORK11Check: accidentWORK11CheckV,
    accidentWORK12Check: accidentWORK12CheckV,
    accidentWORK13Check: accidentWORK13CheckV,
    accidentWORK14Check: accidentWORK14CheckV,
    accidentWORK15Check: accidentWORK15CheckV,
    accidentWORK16Check: accidentWORK16CheckV,
    accidentWORK17Check: accidentWORK17CheckV,
    accidentWORK18Check: accidentWORK18CheckV,
    accidentWORK19Check: accidentWORK19CheckV,
    accidentWORK20Check: accidentWORK20CheckV,

    accidentWORK21Check: accidentWORK21CheckV,
    accidentWORK22Check: accidentWORK22CheckV,
    accidentWORK23Check: accidentWORK23CheckV,
    accidentWORK24Check: accidentWORK24CheckV,
    accidentWORK25Check: accidentWORK25CheckV,
    accidentWORK26Check: accidentWORK26CheckV,
    accidentWORK27Check: accidentWORK27CheckV,
    accidentWORK28Check: accidentWORK28CheckV,
    accidentWORK29Check: accidentWORK29CheckV,
    accidentWORK30Check: accidentWORK30CheckV,

    accidentWORK31Check: accidentWORK31CheckV,
    accidentWORK32Check: accidentWORK32CheckV,
    accidentWORK33Check: accidentWORK33CheckV,
    accidentWORK34Check: accidentWORK34CheckV,

    accidentWORK35Check: accidentWORK35CheckV,
    accidentWORK35Input1: accidentWORK35Input1V,
    accidentWORK35Input2: accidentWORK35Input2V,
    accidentWORK35Input3: accidentWORK35Input3V,
    accidentWORK35Input4: accidentWORK35Input4V,
    accidentWORK35Input5: accidentWORK35Input5V,
    accidentWORK35Input6: accidentWORK35Input6V,
  } = values;

  const data = [
    {
      label: "I go to work but work in pain",
      errorMsg: "",
      value: false,
    },
    {
      label: "I limit my work activities",
      errorMsg: "",
      value: false,
    },
    {
      label: "Bending at work hurts",
      errorMsg: "",
      value: false,
    },
    {
      label: "Stooping at work hurts",
      errorMsg: "",
      value: false,
    },
    {
      label: "Sitting at work hurts",
      errorMsg: "",
      value: false,
    },
    {
      label: "Using the Computer at work hurts",
      errorMsg: "",
      value: false,
    },
    {
      label: "Pushing at work hurts",
      errorMsg: "",
      value: false,
    },
    {
      label: "Pulling at work hurts",
      errorMsg: "",
      value: false,
    },
    {
      label: "Kneeling at work hurts",
      errorMsg: "",
      value: false,
    },
    {
      label: "I have lost status in my company",
      errorMsg: "",
      value: false,
    },
    {
      label: "I have lost job security",
      errorMsg: "",
      value: false,
    },
    {
      label: "I didn't get a promotion",
      errorMsg: "",
      value: false,
    },
    {
      label: "I don't enjoy work as much as before",
      errorMsg: "",
      value: false,
    },
    {
      label: "I doze off at work",
      errorMsg: "",
      value: false,
    },
    {
      label: "I take unpaid time off work to go to Dr.",
      errorMsg: "",
      value: false,
    },
    {
      label: "I daydream at work more than before",
      errorMsg: "",
      value: false,
    },
    {
      label: "I feel tired at work",
      errorMsg: "",
      value: false,
    },
    {
      label: "I work in pain because I have bills to pay",
      errorMsg: "",
      value: false,
    },
    {
      label: "I can't take time off because I would lose my job",
      errorMsg: "",
      value: false,
    },
    {
      label: "I keep working so I don't lose status at company",
      errorMsg: "",
      value: false,
    },
    {
      label: "My business would fail if I took time off",
      errorMsg: "",
      value: false,
    },
    {
      label: "I believe in working even when I'm in pain",
      errorMsg: "",
      value: false,
    },
    {
      label: "I feel obligated to work even though I'm in pain",
      errorMsg: "",
      value: false,
    },
    {
      label: "My business would lose money if I took time off",
      errorMsg: "",
      value: false,
    },
    {
      label: "My work is not as good as it was before accident",
      errorMsg: "",
      value: false,
    },
    {
      label: "My boss reprimanded me for poor performance",
      errorMsg: "",
      value: false,
    },
    {
      label: "I got a different job within the same company",
      errorMsg: "",
      value: false,
    },
    {
      label: "I got a different job in another company",
      errorMsg: "",
      value: false,
    },
    {
      label: "I make less money than before the accident",
      errorMsg: "",
      value: false,
    },
    {
      label: "I cannot do the same work/job as before accident",
      errorMsg: "",
      value: false,
    },
    {
      label: "I can't concentrate as well at work",
      errorMsg: "",
      value: false,
    },
    {
      label: "I take paid time off to go to Dr.",
      errorMsg: "",
      value: false,
    },
    {
      label: "I make mistakes at work I didn't used to",
      errorMsg: "",
      value: false,
    },
    {
      label: "I hide my poor work performance from my boss",
      errorMsg: "",
      value: false,
    },
  ];
  const [menuItems, setChecked] = useState(data);
  // console.log(menuItems, "dsdads");
  const handleCheck = (box, index) => {
    let abc = menuItems;
    abc[index].value = !box.value;
    // console.log(abc[index].options);
    // console.log(box.value);

    if (abc[index].options && !box.value) {
      abc[index].options = abc[index].options.map((item) => {
        item.value = false;
        // console.log(abc[index].options && box.value);
        return item;
      });
    }
    setChecked([...abc]);
  };

  // console.log(menuItems);

  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    setChecked([...abc]);
  };

  return (
    <Grid container>
      <Grid xs={12} lg={6} sm={12}>
        <FormControlLabel
          label="I go to work but work in pain"
          control={
            <Checkbox
              name={accidentWORK1Check.name}
              // checked={accidentWORK1CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK1CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK1CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I limit my work activities"
          control={
            <Checkbox
              name={accidentWORK2Check.name}
              // checked={accidentWORK2CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK2CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK2CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Bending at work hurts"
          control={
            <Checkbox
              name={accidentWORK3Check.name}
              // checked={accidentWORK3CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK3CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK3CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Stooping at work hurts"
          control={
            <Checkbox
              name={accidentWORK4Check.name}
              // checked={accidentWORK4CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK4CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK4CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Sitting at work hurts"
          control={
            <Checkbox
              name={accidentWORK5Check.name}
              // checked={accidentWORK5CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK5CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK5CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Using the Computer at work hurts"
          control={
            <Checkbox
              name={accidentWORK6Check.name}
              // checked={accidentWORK6CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK6CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK6CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Pushing at work hurts"
          control={
            <Checkbox
              name={accidentWORK7Check.name}
              // checked={accidentWORK7CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK7CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK7CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Pulling at work hurts"
          control={
            <Checkbox
              name={accidentWORK8Check.name}
              // checked={accidentWORK8CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK8CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK8CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Kneeling at work hurts"
          control={
            <Checkbox
              name={accidentWORK9Check.name}
              // checked={accidentWORK9CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK9CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK9CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I have lost status in my company"
          control={
            <Checkbox
              name={accidentWORK10Check.name}
              // checked={accidentWORK10CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK10CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK10CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I have lost job security"
          control={
            <Checkbox
              name={accidentWORK11Check.name}
              // checked={accidentWORK11CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK11CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK11CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I didn't get a promotion"
          control={
            <Checkbox
              name={accidentWORK12Check.name}
              // checked={accidentWORK12CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK12CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK12CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I don't enjoy work as much as before"
          control={
            <Checkbox
              name={accidentWORK13Check.name}
              // checked={accidentWORK13CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK13CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK13CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I doze off at work"
          control={
            <Checkbox
              name={accidentWORK14Check.name}
              // checked={accidentWORK14CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK14CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK14CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I take unpaid time off work to go to Dr."
          control={
            <Checkbox
              name={accidentWORK15Check.name}
              // checked={accidentWORK15CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK15CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK15CheckV`, e.target.checked)
              }
            />
          }
        />

        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I daydream at work more than before"
          control={
            <Checkbox
              name={accidentWORK16Check.name}
              // checked={accidentWORK16CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK16CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK16CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I feel tired at work"
          control={
            <Checkbox
              name={accidentWORK17Check.name}
              // checked={accidentWORK17CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK17CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK17CheckV`, e.target.checked)
              }
            />
          }
        />
      </Grid>
      <Grid xs={12} lg={6} sm={12}>
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I work in pain because I have bills to pay"
          control={
            <Checkbox
              name={accidentWORK18Check.name}
              // checked={accidentWORK18CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK18CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK18CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I can't take time off because I would lose my job"
          control={
            <Checkbox
              name={accidentWORK19Check.name}
              // checked={accidentWORK19CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK19CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK19CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I keep working so I don't lose status at company"
          control={
            <Checkbox
              name={accidentWORK20Check.name}
              // checked={accidentWORK20CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK20CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK20CheckV`, e.target.checked)
              }
            />
          }
        />

        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="My business would fail if I took time off"
          control={
            <Checkbox
              name={accidentWORK21Check.name}
              // checked={accidentWORK21CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK21CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK21CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I believe in working even when I'm in pain"
          control={
            <Checkbox
              name={accidentWORK22Check.name}
              // checked={accidentWORK22CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK22CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK22CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I feel obligated to work even though I'm in pain"
          control={
            <Checkbox
              name={accidentWORK23Check.name}
              // checked={accidentWORK23CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK23CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK23CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="My business would lose money if I took time off"
          control={
            <Checkbox
              name={accidentWORK24Check.name}
              // checked={accidentWORK24CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK24CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK24CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="My work is not as good as it was before accident"
          control={
            <Checkbox
              name={accidentWORK25Check.name}
              // checked={accidentWORK25CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK25CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK25CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="My boss reprimanded me for poor performance"
          control={
            <Checkbox
              name={accidentWORK26Check.name}
              // checked={accidentWORK26CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK26CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK26CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I got a different job within the same company"
          control={
            <Checkbox
              name={accidentWORK27Check.name}
              // checked={accidentWORK27CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK27CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK27CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I got a different job in another company"
          control={
            <Checkbox
              name={accidentWORK28Check.name}
              // checked={accidentWORK28CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK28CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK28CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I make less money than before the accident"
          control={
            <Checkbox
              name={accidentWORK29Check.name}
              // checked={accidentWORK29CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK29CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK29CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot do the same work/job as before accident"
          control={
            <Checkbox
              name={accidentWORK30Check.name}
              // checked={accidentWORK30CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK30CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK30CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I can't concentrate as well at work"
          control={
            <Checkbox
              name={accidentWORK31Check.name}
              // checked={accidentWORK31CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK31CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK31CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I take paid time off to go to Dr."
          control={
            <Checkbox
              name={accidentWORK32Check.name}
              // checked={accidentWORK32CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK32CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK32CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I make mistakes at work I didn't used to"
          control={
            <Checkbox
              name={accidentWORK33Check.name}
              // checked={accidentWORK33CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK33CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK33CheckV`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I hide my poor work performance from my boss"
          control={
            <Checkbox
              name={accidentWORK34Check.name}
              // checked={accidentWORK34CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentWORK34CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(`dutiesPage[${index}].accidentWORK34CheckV`, e.target.checked)
              }
            />
          }
        />
      </Grid>
      <div className="medication">
        {/* <FormControlLabel
      className="inputCombinewithtext"
        style={{ marginRight: "auto" }}
        label={`I need medication to be able to work. I take `}
        control={
          <Checkbox
            name={accidentWORK35Check.name}
            checked={accidentWORK35CheckV}
            onChange={formik.handleChange}
          />
        }
      /> */}

        <Checkbox
          name={accidentWORK35Check.name}
          // checked={accidentWORK35CheckV}
          // onChange={formik.handleChange}
          checked={formik.values?.dutiesPage[index]?.accidentWORK35CheckV}
          onChange={(e) =>
            formik.setFieldValue(`dutiesPage[${index}].accidentWORK35CheckV`, e.target.checked)
          }
          className="checkboxwithinput"
        />
        <span>
          <span className="spanLab">I need medication to be able to work. I take</span>
          <input
            type={accidentWORK35Input1.type}
            name={accidentWORK35Input1.name}
            // value={accidentWORK35Input1V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentWORK35Input1V}
            onChange={(e) =>
              formik.setFieldValue(`dutiesPage[${index}].accidentWORK35Input1V`, e.target.value)
            }
            className="therapiCss"
            style={{ width: "60px", height: "23px" }}
          />
          <span className="spanLab" style={{ marginLeft: "0.65rem" }}>
            mg of
          </span>
          <input
            type={accidentWORK35Input2.type}
            name={accidentWORK35Input2.name}
            // value={accidentWORK35Input2V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentWORK35Input2V}
            onChange={(e) =>
              formik.setFieldValue(`dutiesPage[${index}].accidentWORK35Input2V`, e.target.value)
            }
            className="therapiCss"
            style={{ width: "130px", height: "23px" }}
          />
          <span className="spanLab" style={{ marginLeft: "0.65rem" }}>
            at
          </span>
          <input
            type={accidentWORK35Input3.type}
            name={accidentWORK35Input3.name}
            // value={accidentWORK35Input3V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentWORK35Input3V}
            onChange={(e) =>
              formik.setFieldValue(`dutiesPage[${index}].accidentWORK35Input3V`, e.target.value)
            }
            className="therapiCss"
            style={{ width: "40px", height: "23px" }}
          />
          <span className="spanLab" style={{ marginLeft: "0.65rem" }}>
            am when my pain level gets to
          </span>
          <input
            type={accidentWORK35Input4.type}
            name={accidentWORK35Input4.name}
            // value={accidentWORK35Input4V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentWORK35Input4V}
            onChange={(e) =>
              formik.setFieldValue(`dutiesPage[${index}].accidentWORK35Input4V`, e.target.value)
            }
            className="therapiCss"
            style={{ width: "40px", height: "23px" }}
          />
          <span className="spanLab" style={{ marginLeft: "0.4rem" }}>
            /10 and/or again at{" "}
          </span>
          <input
            type={accidentWORK35Input5.type}
            name={accidentWORK35Input5.name}
            // value={accidentWORK35Input5V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentWORK35Input5V}
            onChange={(e) =>
              formik.setFieldValue(`dutiesPage[${index}].accidentWORK35Input5V`, e.target.value)
            }
            className="therapiCss"
            style={{ width: "40px", height: "23px" }}
          />
          <span className="spanLab" style={{ marginLeft: "0.4rem" }}>
            pm when my pain gets to
          </span>
          <input
            type={accidentWORK35Input6.type}
            name={accidentWORK35Input6.name}
            // value={accidentWORK35Input6V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentWORK35Input6V}
            onChange={(e) =>
              formik.setFieldValue(`dutiesPage[${index}].accidentWORK35Input6V`, e.target.value)
            }
            className="therapiCss"
            style={{ width: "40px", height: "23px" }}
          />
          <span className="spanLab" style={{ marginLeft: "0.4rem" }}>
            /10
          </span>
        </span>
      </div>
    </Grid>
    // <FormControl  style={{columnCount: "2", display:"inline-block",}} >
    //   {menuItems.map((box, index) => {
    //     console.log(index);
    //     return (
    //       <FormGroup key={index} >
    //         <FormControlLabel
    //           label={box.label}
    //           control={
    //             <Checkbox
    //               key={"main" + index}
    //               onChange={(e) => handleCheck(box, index)}
    //               checked={menuItems[index].value}
    //             />
    //           }
    //         />
    //         {box.options ? (
    //           box.options.map(({ value, label }, ind) => {
    //             return (
    //               <FormControlLabel
    //               style={{marginLeft:'5px'}}
    //                 key={"option" + index}
    //                 label={label}
    //                 control={
    //                   <Checkbox
    //                     key={"option" + ind}
    //                     disabled={!box.value}
    //                     onChange={(e) => innerBoxHandler(index, ind)}
    //                     checked={box.options[ind].value}
    //                   />
    //                 }
    //               />
    //             );
    //           })
    //         ) : (
    //           <></>
    //         )}
    //       </FormGroup>
    //     );
    //   })}
    // </FormControl>
  );
}

UpperCheckboxes.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default UpperCheckboxes;
