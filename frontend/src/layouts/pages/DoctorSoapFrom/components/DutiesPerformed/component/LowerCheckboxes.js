import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox, Grid } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function LowerCheckboxes({ formik, form, index }) {
  const { values } = formik;
  const { formField } = form;

  const {
    accidentHOMEduties1Check,
    accidentHOMEduties2Check,
    accidentHOMEduties3Check,
    accidentHOMEduties4Check,
    accidentHOMEduties5Check,
    accidentHOMEduties6Check,
    accidentHOMEduties7Check,
    accidentHOMEduties8Check,
    accidentHOMEduties9Check,
    accidentHOMEduties10Check,
    accidentHOMEduties11Check,
    accidentHOMEduties12Check,
    accidentHOMEduties13Check,
    accidentHOMEduties14Check,
    accidentHOMEduties15Check,
    accidentHOMEduties16Check,
    accidentHOMEduties17Check,
    accidentHOMEduties18Check,
    accidentHOMEduties19Check,
    accidentHOMEduties20Check,
    accidentHOMEduties21Check,
    accidentHOMEduties22Check,
    accidentHOMEduties23Check,
    accidentHOMEduties24Check,
    accidentHOMEduties25Check,
    accidentHOMEduties26Check,
    accidentHOMEduties27Check,
    accidentHOMEduties28Check,
    accidentHOMEduties29Check,
    accidentHOMEduties30Check,
    accidentHOMEduties31Check,
    accidentHOMEduties32Check,
    accidentHOMEduties33Check,
    accidentHOMEduties34Check,
    accidentHOMEduties35Check,
    accidentHOMEduties35Input1,
    accidentHOMEduties36Check,
    accidentHOMEduties36Input,
    accidentHOMEduties37Check,
    accidentHOMEduties37Input,
    accidentHOMEduties38Check,
    accidentHOMEduties38Input,
    accidentHOMEduties19Input1,
    accidentHOMEduties19Input2,
  } = formField;

  const {
    accidentHOMEduties1Check: accidentHOMEduties1CheckV,
    accidentHOMEduties2Check: accidentHOMEduties2CheckV,
    accidentHOMEduties3Check: accidentHOMEduties3CheckV,
    accidentHOMEduties4Check: accidentHOMEduties4CheckV,
    accidentHOMEduties5Check: accidentHOMEduties5CheckV,
    accidentHOMEduties6Check: accidentHOMEduties6CheckV,
    accidentHOMEduties7Check: accidentHOMEduties7CheckV,
    accidentHOMEduties8Check: accidentHOMEduties8CheckV,
    accidentHOMEduties9Check: accidentHOMEduties9CheckV,
    accidentHOMEduties10Check: accidentHOMEduties10CheckV,
    accidentHOMEduties11Check: accidentHOMEduties11CheckV,
    accidentHOMEduties12Check: accidentHOMEduties12CheckV,
    accidentHOMEduties13Check: accidentHOMEduties13CheckV,
    accidentHOMEduties14Check: accidentHOMEduties14CheckV,
    accidentHOMEduties15Check: accidentHOMEduties15CheckV,
    accidentHOMEduties16Check: accidentHOMEduties16CheckV,
    accidentHOMEduties17Check: accidentHOMEduties17CheckV,
    accidentHOMEduties18Check: accidentHOMEduties18CheckV,
    accidentHOMEduties19Check: accidentHOMEduties19CheckV,
    accidentHOMEduties19Input1: accidentHOMEduties19Input1V,
    accidentHOMEduties19Input2: accidentHOMEduties19Input2V,
    accidentHOMEduties20Check: accidentHOMEduties20CheckV,

    accidentHOMEduties21Check: accidentHOMEduties21CheckV,
    accidentHOMEduties22Check: accidentHOMEduties22CheckV,
    accidentHOMEduties23Check: accidentHOMEduties23CheckV,
    accidentHOMEduties24Check: accidentHOMEduties24CheckV,
    accidentHOMEduties25Check: accidentHOMEduties25CheckV,
    accidentHOMEduties26Check: accidentHOMEduties26CheckV,
    accidentHOMEduties27Check: accidentHOMEduties27CheckV,
    accidentHOMEduties28Check: accidentHOMEduties28CheckV,
    accidentHOMEduties29Check: accidentHOMEduties29CheckV,
    accidentHOMEduties30Check: accidentHOMEduties30CheckV,

    accidentHOMEduties31Check: accidentHOMEduties31CheckV,
    accidentHOMEduties32Check: accidentHOMEduties32CheckV,
    accidentHOMEduties33Check: accidentHOMEduties33CheckV,
    accidentHOMEduties34Check: accidentHOMEduties34CheckV,

    accidentHOMEduties35Check: accidentHOMEduties35CheckV,
    accidentHOMEduties35Input1: accidentHOMEduties35Input1V,
    accidentHOMEduties36Check: accidentHOMEduties36CheckV,
    accidentHOMEduties36Input: accidentHOMEduties36InputV,
    accidentHOMEduties37Check: accidentHOMEduties37CheckV,
    accidentHOMEduties37Input: accidentHOMEduties37InputV,
    accidentHOMEduties38Check: accidentHOMEduties38CheckV,
    accidentHOMEduties38Input: accidentHOMEduties38InputV,
  } = values;

  const data = [
    {
      label: "My house is not as clean now",
      errorMsg: "",
      value: false,
    },
    {
      label: "My yard is not as neat now",
      errorMsg: "",
      value: false,
    },
    {
      label: "My garden is not as productive now",
      errorMsg: "",
      value: false,
    },
    {
      label: "I do yard work, but do it in pain",
      errorMsg: "",
      value: false,
    },
    {
      label: "I cannot do my normal yard work",
      errorMsg: "",
      value: false,
    },
    {
      label: "I do house work, but do it in pain",
      errorMsg: "",
      value: false,
    },
    {
      label: "I cannot do my normal house work",
      errorMsg: "",
      value: false,
    },
    {
      label: "Doing laundry hurts me",
      errorMsg: "",
      value: false,
    },
    {
      label: "I cannot do laundry now",
      errorMsg: "",
      value: false,
    },
    {
      label: "Washing dishes hurts me",
      errorMsg: "",
      value: false,
    },
    {
      label: "I cannot wash dishes now",
      errorMsg: "",
      value: false,
    },
    {
      label: "Vacuuming hurts me",
      errorMsg: "",
      value: false,
    },
    {
      label: "I cannot vacuum now",
      errorMsg: "",
      value: false,
    },
    {
      label: "Cooking hurts me",
      errorMsg: "",
      value: false,
    },
    {
      label: "I cannot cook now",
      errorMsg: "",
      value: false,
    },
    {
      label: "Washing the car hurts me",
      errorMsg: "",
      value: false,
    },
    {
      label: "I cannot wash my car",
      errorMsg: "",
      value: false,
    },

    {
      label: "I cannot take time off because I care for children",
      errorMsg: "",
      value: false,
    },
    {
      label: "I have __ children ages _______",
      errorMsg: "",
      value: false,
    },
    {
      label: "    I had to hire a paid housekeeper",
      errorMsg: "",
      value: false,
    },
    {
      label: "    I asked someone for unpaid housekeeping help",
      errorMsg: "",
      value: false,
    },
    {
      label: " I had to hire a paid gardener",
      errorMsg: "",
      value: false,
    },
    {
      label: "    I asked someone for unpaid yard work help",
      errorMsg: "",
      value: false,
    },
    {
      label: "    Mowing the lawn hurts me",
      errorMsg: "",
      value: false,
    },
    {
      label: "    I cannot mow the lawn",
      errorMsg: "",
      value: false,
    },
    {
      label: "    Taking out the trash hurts me",
      errorMsg: "",
      value: false,
    },
    {
      label: "    I cannot take out the trash",
      errorMsg: "",
      value: false,
    },
    {
      label: "    I do not enjoy my gardening/yardwork like I used to",
      errorMsg: "",
      value: false,
    },
    {
      label: "    I do not enjoy my housework like I used to",
      errorMsg: "",
      value: false,
    },
    {
      label: "    Gardening hurts me",
      errorMsg: "",
      value: false,
    },
    {
      label: "    I cannot do my gardening at all since the accident",
      errorMsg: "",
      value: false,
    },
    {
      label: "    Others living with me do my share of the work now",
      errorMsg: "",
      value: false,
    },
    {
      label: "    Others living with me do my share of the yard work",
      errorMsg: "",
      value: false,
    },
    {
      label: "    Others living with me do my share of the gardening",
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

  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    setChecked([...abc]);
  };

  return (
    <Grid container>
      <Grid xs={12} lg={6} sm={12}>
        <FormControlLabel
          label="My house is not as clean now"
          control={
            <Checkbox
              name={accidentHOMEduties1Check.name}
              // checked={accidentHOMEduties1CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties1CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties1CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="My yard is not as neat now"
          control={
            <Checkbox
              name={accidentHOMEduties2Check.name}
              // checked={accidentHOMEduties2CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties2CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties2CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="My garden is not as productive now"
          control={
            <Checkbox
              name={accidentHOMEduties3Check.name}
              // checked={accidentHOMEduties3CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties3CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties3CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I do yard work, but do it in pain"
          control={
            <Checkbox
              name={accidentHOMEduties4Check.name}
              // checked={accidentHOMEduties4CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties4CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties4CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot do my normal yard work"
          control={
            <Checkbox
              name={accidentHOMEduties5Check.name}
              // checked={accidentHOMEduties5CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties5CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties5CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I do house work, but do it in pain"
          control={
            <Checkbox
              name={accidentHOMEduties6Check.name}
              // checked={accidentHOMEduties6CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties6CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties6CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot do my normal house work"
          control={
            <Checkbox
              name={accidentHOMEduties7Check.name}
              // checked={accidentHOMEduties7CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties7CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties7CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Doing laundry hurts me"
          control={
            <Checkbox
              name={accidentHOMEduties8Check.name}
              // checked={accidentHOMEduties8CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties8CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties8CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot do laundry now"
          control={
            <Checkbox
              name={accidentHOMEduties9Check.name}
              // checked={accidentHOMEduties9CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties9CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties9CheckVV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Washing dishes hurts me"
          control={
            <Checkbox
              name={accidentHOMEduties10Check.name}
              // checked={accidentHOMEduties10CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties10CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties10CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot wash dishes now"
          control={
            <Checkbox
              name={accidentHOMEduties11Check.name}
              // checked={accidentHOMEduties11CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties11CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties11CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Vacuuming hurts me"
          control={
            <Checkbox
              name={accidentHOMEduties12Check.name}
              // checked={accidentHOMEduties12CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties12CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties12CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot vacuum now"
          control={
            <Checkbox
              name={accidentHOMEduties13Check.name}
              // checked={accidentHOMEduties13CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties13CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties13CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Cooking hurts me"
          control={
            <Checkbox
              name={accidentHOMEduties14Check.name}
              // checked={accidentHOMEduties14CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties14CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties14CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot cook now"
          control={
            <Checkbox
              name={accidentHOMEduties15Check.name}
              // checked={accidentHOMEduties15CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties15CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties15CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />

        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Washing the car hurts me"
          control={
            <Checkbox
              name={accidentHOMEduties16Check.name}
              // checked={accidentHOMEduties16CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties16CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties16CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot wash my car"
          control={
            <Checkbox
              name={accidentHOMEduties17Check.name}
              // checked={accidentHOMEduties17CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties17CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties17CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />
        <div>
          <Checkbox
            name={accidentHOMEduties35Check.name}
            // checked={accidentHOMEduties35CheckV}
            checked={formik.values?.dutiesPage[index]?.accidentHOMEduties35CheckV}
            // onChange={formik.handleChange}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties35CheckV`,
                e.target.checked
              )
            }
            className="checkboxwithinput"
          />
          <input
            type={accidentHOMEduties35Input1.type}
            name={accidentHOMEduties35Input1.name}
            // value={accidentHOMEduties35Input1V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentHOMEduties35Input1V}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties35Input1V`,
                e.target.value
              )
            }
            className="accidentHOMEInput"
            style={{ width: "60px", height: "23px" }}
          />
        </div>
        <div>
          <Checkbox
            name={accidentHOMEduties36Check.name}
            // checked={accidentHOMEduties36CheckV}
            checked={formik.values?.dutiesPage[index]?.accidentHOMEduties36CheckV}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties36CheckV`,
                e.target.checked
              )
            }
            // onChange={formik.handleChange}
            className="checkboxwithinput"
          />
          <input
            type={accidentHOMEduties36Input.type}
            name={accidentHOMEduties36Input.name}
            // value={accidentHOMEduties36InputV}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentHOMEduties36InputV}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties36InputV`,
                e.target.value
              )
            }
            className="accidentHOMEInput"
            style={{ width: "60px", height: "23px" }}
          />
        </div>
      </Grid>
      <Grid xs={12} lg={6} sm={12}>
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot take time off because I care for children"
          control={
            <Checkbox
              name={accidentHOMEduties18Check.name}
              // checked={accidentHOMEduties18CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties18CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties18CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />
        {/* ****************** */}
        <div>
          <Checkbox
            name={accidentHOMEduties19Check.name}
            // checked={accidentHOMEduties19CheckV}
            checked={formik.values?.dutiesPage[index]?.accidentHOMEduties19CheckV}
            // onChange={formik.handleChange}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties19CheckV`,
                e.target.checked
              )
            }
            className="checkboxwithinput"
          />
          <span className="spanLab">I have &nbsp;</span>

          <input
            type={accidentHOMEduties19Input1.type}
            name={accidentHOMEduties19Input1.name}
            // value={accidentHOMEduties19Input1V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentHOMEduties19Input1V}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties19Input1V`,
                e.target.value
              )
            }
            className="therapiCss"
            style={{ width: "40px", height: "23px" }}
          />
          <span className="spanLab" style={{ marginLeft: "0.4rem" }}>
            {" "}
            children ages&nbsp;
          </span>
          <input
            type={accidentHOMEduties19Input2.type}
            name={accidentHOMEduties19Input2.name}
            // value={accidentHOMEduties19Input2V}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentHOMEduties19Input2V}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties19Input2V`,
                e.target.value
              )
            }
            className="therapiCss"
            style={{ width: "40px", height: "23px" }}
          />
        </div>

        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I had to hire a paid housekeeper"
          control={
            <Checkbox
              name={accidentHOMEduties20Check.name}
              // checked={accidentHOMEduties20CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties20CheckV}
              // onChange={formik.handleChange}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties20CheckV`,
                  e.target.checked
                )
              }
            />
          }
        />

        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I asked someone for unpaid housekeeping help"
          control={
            <Checkbox
              name={accidentHOMEduties21Check.name}
              // checked={accidentHOMEduties21CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties21CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties21CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I had to hire a paid gardener"
          control={
            <Checkbox
              name={accidentHOMEduties22Check.name}
              // checked={accidentHOMEduties22CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties22CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties22CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I asked someone for unpaid yard work help"
          control={
            <Checkbox
              name={accidentHOMEduties23Check.name}
              // checked={accidentHOMEduties23CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties23CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties23CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Mowing the lawn hurts me"
          control={
            <Checkbox
              name={accidentHOMEduties24Check.name}
              // checked={accidentHOMEduties24CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties24CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties24CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot mow the lawn"
          control={
            <Checkbox
              name={accidentHOMEduties25Check.name}
              // checked={accidentHOMEduties25CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties25CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties25CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Taking out the trash hurts me"
          control={
            <Checkbox
              name={accidentHOMEduties26Check.name}
              // checked={accidentHOMEduties26CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties26CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties26CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot take out the trash"
          control={
            <Checkbox
              name={accidentHOMEduties27Check.name}
              // checked={accidentHOMEduties27CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties27CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties27CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I do not enjoy my gardening/yardwork like I used to"
          control={
            <Checkbox
              name={accidentHOMEduties28Check.name}
              // checked={accidentHOMEduties28CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties28CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties28CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I do not enjoy my housework like I used to"
          control={
            <Checkbox
              name={accidentHOMEduties29Check.name}
              // checked={accidentHOMEduties29CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties29CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties29CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Gardening hurts me"
          control={
            <Checkbox
              name={accidentHOMEduties30Check.name}
              // checked={accidentHOMEduties30CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties30CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties30CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="I cannot do my gardening at all since the accident"
          control={
            <Checkbox
              name={accidentHOMEduties31Check.name}
              // checked={accidentHOMEduties31CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties31CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties31CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Others living with me do my share of the work now"
          control={
            <Checkbox
              name={accidentHOMEduties32Check.name}
              // checked={accidentHOMEduties32CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties32CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties32CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Others living with me do my share of the yard work"
          control={
            <Checkbox
              name={accidentHOMEduties33Check.name}
              // checked={accidentHOMEduties33CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties33CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties33CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto" }}
          label="Others living with me do my share of the gardening"
          control={
            <Checkbox
              name={accidentHOMEduties34Check.name}
              // checked={accidentHOMEduties34CheckV}
              checked={formik.values?.dutiesPage[index]?.accidentHOMEduties34CheckV}
              onChange={(e) =>
                formik.setFieldValue(
                  `dutiesPage[${index}].accidentHOMEduties34CheckV`,
                  e.target.checked
                )
              }
              // onChange={formik.handleChange}
            />
          }
        />

        <div>
          <Checkbox
            name={accidentHOMEduties37Check.name}
            // checked={accidentHOMEduties37CheckV}
            checked={formik.values?.dutiesPage[index]?.accidentHOMEduties37CheckV}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties37CheckV`,
                e.target.checked
              )
            }
            // onChange={formik.handleChange}
            className="checkboxwithinput"
          />
          <input
            type={accidentHOMEduties37Input.type}
            name={accidentHOMEduties37Input.name}
            // value={accidentHOMEduties37InputV}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentHOMEduties37InputV}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties37InputV`,
                e.target.value
              )
            }
            className="accidentHOMEInput"
            style={{ width: "60px", height: "23px" }}
          />
        </div>
        <div>
          <Checkbox
            name={accidentHOMEduties38Check.name}
            // checked={accidentHOMEduties38CheckV}
            checked={formik.values?.dutiesPage[index]?.accidentHOMEduties38CheckV}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties38CheckV`,
                e.target.checked
              )
            }
            // onChange={formik.handleChange}
            className="checkboxwithinput"
          />
          <input
            type={accidentHOMEduties38Input.type}
            name={accidentHOMEduties38Input.name}
            // value={accidentHOMEduties38InputV}
            // onChange={formik.handleChange}
            value={formik.values?.dutiesPage[index]?.accidentHOMEduties38InputV}
            onChange={(e) =>
              formik.setFieldValue(
                `dutiesPage[${index}].accidentHOMEduties38InputV`,
                e.target.value
              )
            }
            className="accidentHOMEInput"
            style={{ width: "60px", height: "23px" }}
          />
        </div>
      </Grid>
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
    //              checked={menuItems[index].value}
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
    //                    checked={box.options[ind].value}
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

LowerCheckboxes.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default LowerCheckboxes;
