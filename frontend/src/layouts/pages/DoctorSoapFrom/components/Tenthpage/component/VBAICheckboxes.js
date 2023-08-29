import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import { Grid } from "@mui/material";
import SoftTypography from "components/SoftTypography";

function VBAICheckboxes({ formData, formik, form, index }) {
  const { errors, setFieldValue, handleChange } = formData;
  const { formField } = form;
  const { values } = formik;

  console.log("form", formData, values);

  const {
    dizzinessCheck,
    dizzinessinput,
    DiplopiaCheck,
    Diplopiainput,
    DysphagiaCheck,
    DysphagiaInput,
    DysphasiaCheck,
    DysphasiaInput,
    DropCheck,
    DropInput,
    NystagmusCheck,
    NystagmusInput,
    NauseaCheck,
    NauseaInput,
    NumbnessCheck,
    NumbnessInput,
    ExtremeCheck,
    ExtremeInput,
    coordCheck,
    coordInput,
    eyesCheck,
    eyesInput,
    LocInput,
    LocCheck,
    ConfusionCheck,
    ConfusionInput,
  } = formField;

  const {
    dizzinessCheck: dizzinessCheckV,
    dizzinessinput: dizzinessinputV,
    DiplopiaCheck: DiplopiaCheckV,
    Diplopiainput: DiplopiainputV,
    DysphagiaCheck: DysphagiaCheckV,
    DysphagiaInput: DysphagiaInputV,
    DysphasiaCheck: DysphasiaCheckV,
    DysphasiaInput: DysphasiaInputV,
    DropCheck: DropCheckV,
    DropInput: DropInputV,
    NystagmusCheck: NystagmusCheckV,
    NystagmusInput: NystagmusInputV,
    NauseaCheck: NauseaCheckV,
    NauseaInput: NauseaInputV,
    NumbnessCheck: NumbnessCheckV,
    NumbnessInput: NumbnessInputV,

    ExtremeCheck: ExtremeCheckV,
    ExtremeInput: ExtremeInputV,

    coordCheck: coordCheckV,
    coordInput: coordInputV,

    eyesCheck: eyesCheckV,
    eyesInput: eyesInputV,

    ConfusionCheck: ConfusionCheckV,
    ConfusionInput: ConfusionInputV,

    LocInput: LocInputV,
    LocCheck: LocCheckV,
  } = values;

  const data = [
    {
      label: "Dizziness/Vertigo:",
      errorMsg: "",
      value: false,
      name: "Dizziness",
      inputVal: "",
    },
    {
      label: "Diplopia:",
      name: "Diplopia",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "Dysphagia",
      label: "Dysphagia:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Dysphasia:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Drop attacks(sudden severe weakness throughout or part of body):",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Nystagmus-Invol REM:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Nausea/Vomiting:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Numbness:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Extreme HA!",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Loss of balance/coord.",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Loss vision 1 or 2 eyes",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      name: "",
      label: "Confusion/LOC",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
  ];

  // const [menuItems, setChecked] = useState(data);

  const dispatch = useDispatch();
  const handleCheck = (box, index) => {
    let abc = menuItems;
    abc[index].value = !box.value;
    console.log(abc[index].options);
    // console.log(box.value);

    if (abc[index].options && !box.value) {
      abc[index].options = abc[index].options.map((item) => {
        item.value = false;
        console.log(abc[index].options && box.value);
        return item;
      });
    }
    // console.log(abc)
    // const { value } = event.target;
    // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
    setChecked([...abc]);
  };

  // const handleChange = (box, index, val) => {
  //     let abc = menuItems;
  //     console.log('ggg',abc[index])
  //     if (box.value ) {
  //         abc[index].inputVal = val;
  //     }
  //     setChecked([...abc]);
  // }

  // console.log(menuItems, "dsdads");
  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    // console.log(abc)
    // const { value } = event.target;
    // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
    setChecked([...abc]);
  };
  // dispatch({type:"VBAICHECKBOX_VALUES", payload: menuItems})

  // useEffect(() => {}, [menuItems]);

  return (
    <SoftBox>
      <Grid container direction="row" className="vbai-grid-container">
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={4} lg={3.5} md={12}>
            <FormControlLabel
              label="Dizziness/Vertigo:"
              className="spanLab1"
              style={{ marginRight: "auto" }}
              control={
                <Checkbox
                  name={dizzinessCheck.name}
                  // checked={dizzinessCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[dizzinessCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${dizzinessCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={8.5} md={12} className="vbai-text-input-container">

            <FormField

              type={dizzinessinput.type}
              name={dizzinessinput.name}
              // value={dizzinessinputV}
              value={formik.values?.tenthPage[index]?.[dizzinessinput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${dizzinessinput.name}`, e.target.value);
              }}
              className="VBAIinputCss "
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={4} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Diplopia:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={DiplopiaCheck.name}
                  // checked={DiplopiaCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[DiplopiaCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${DiplopiaCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={9} md={12} className="vbai-text-input-container">
            <FormField
              type={Diplopiainput.type}
              name={Diplopiainput.name}
              // value={DiplopiainputV}
              value={formik.values?.tenthPage[index]?.[Diplopiainput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${Diplopiainput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={4} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Dysphagia:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={DysphagiaCheck.name}
                  // checked={DysphagiaCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[DysphagiaCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${DysphagiaCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={9} md={12} className="vbai-text-input-container">
            <FormField
              type={DysphagiaInput.type}
              name={DysphagiaInput.name}
              // value={DysphagiaInputV}
              value={formik.values?.tenthPage[index]?.[DysphagiaInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${DysphagiaInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={4} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Dysphasia:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={DysphasiaCheck.name}
                  // checked={DysphasiaCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[DysphasiaCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${DysphasiaCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={9} md={12} className="vbai-text-input-container">
            <FormField
              type={DysphasiaInput.type}
              name={DysphasiaInput.name}
              // value={DysphasiaInputV}
              value={formik.values?.tenthPage[index]?.[DysphasiaInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${DysphasiaInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={12} lg={12} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Drop attacks(sudden severe weakness throughout or part of body):"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={DropCheck.name}
                  // checked={DropCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[DropCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${DropCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={12} md={12} className="vbai-text-input-container">
            <FormField
              type={DropInput.type}
              name={DropInput.name}
              // value={DropInputV}
              value={formik.values?.tenthPage[index]?.[DropInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${DropInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={4} lg={4} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Nystagmus-Invol REM:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={NystagmusCheck.name}
                  // checked={NystagmusCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[NystagmusCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${NystagmusCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={8} md={12} className="vbai-text-input-container">
            <FormField
              type={NystagmusInput.type}
              name={NystagmusInput.name}
              // value={NystagmusInputV}
              value={formik.values?.tenthPage[index]?.[NystagmusInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${NystagmusInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={4} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Nausea/Vomiting:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={NauseaCheck.name}
                  // checked={NauseaCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[NauseaCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${NauseaCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={8.5} md={12} className="vbai-text-input-container">
            <FormField
              type={NauseaInput.type}
              name={NauseaInput.name}
              // value={NauseaInputV}
              value={formik.values?.tenthPage[index]?.[NauseaInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${NauseaInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Numbness:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={NumbnessCheck.name}
                  // checked={NumbnessCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[NumbnessCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${NumbnessCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="vbai-text-input-container">
            <FormField
              type={NumbnessInput.type}
              name={NumbnessInput.name}
              // value={NumbnessInputV}
              value={formik.values?.tenthPage[index]?.[NumbnessInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${NumbnessInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Extreme HA!"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={ExtremeCheck.name}
                  // checked={ExtremeCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[ExtremeCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${ExtremeCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="vbai-text-input-container">
            <FormField
              type={ExtremeInput.type}
              name={ExtremeInput.name}
              // value={ExtremeInputV}
              value={formik.values?.tenthPage[index]?.[ExtremeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${ExtremeInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12} > */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={5} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Loss of balance/coord."
              className="VBAIlabel"
              control={
                <Checkbox
                  name={coordCheck.name}
                  // checked={coordCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[coordCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${coordCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={7} lg={8.5} md={12} className="vbai-text-input-container">
            <FormField
              type={coordInput.type}
              name={coordInput.name}
              // value={coordInputV}
              value={formik.values?.tenthPage[index]?.[coordInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${coordInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} sm={5} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Loss vision 1 or 2 eyes"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={eyesCheck.name}
                  // checked={eyesCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[eyesCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${eyesCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={7} lg={8.5} md={12} className="vbai-text-input-container">
            <FormField
              type={eyesInput.type}
              name={eyesInput.name}
              // value={eyesInputV}
              value={formik.values?.tenthPage[index]?.[eyesInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${eyesInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
        {/* <Grid item xs={12}> */}
        <Grid container direction="row" xs={12}>
          <Grid item xs={12} lg={3.5} sm={4} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Confusion/LOC"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={LocCheck.name}
                  // checked={LocCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[LocCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${LocCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} sm={8} md={12} className="vbai-text-input-container">
            <FormField
              type={LocInput.type}
              name={LocInput.name}
              // value={LocInputV}
              value={formik.values?.tenthPage[index]?.[LocInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${LocInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>

      {/* <Grid container className="GridClass">
          <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={dizzinessCheck.type}
            name={dizzinessCheck.name}
            value={dizzinessCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <SoftTypography fontSize='0.875rem' fontWeight="bold" color="text" mt={1}>
          Dizziness/Vertigo:
              </SoftTypography>
          <div className="VBAIlabel">Dizziness/Vertigo:</div>
          <input
            type={dizzinessinput.type}
            name={dizzinessinput.name}
            value={dizzinessinputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={DiplopiaCheck.type}
            name={DiplopiaCheck.name}
            value={DiplopiaCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Diplopia:</label>
          <input
            type={Diplopiainput.type}
            name={Diplopiainput.name}
            value={DiplopiainputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={DysphagiaCheck.type}
            name={DysphagiaCheck.name}
            value={DysphagiaCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Dysphagia:</label>
          <input
            type={DysphagiaInput.type}
            name={DysphagiaInput.name}
            value={DysphagiaInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={DysphasiaCheck.type}
            name={DysphasiaCheck.name}
            value={DysphasiaCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Dysphasia:</label>
          <input
            type={DysphasiaInput.type}
            name={DysphasiaInput.name}
            value={DysphasiaInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={DropCheck.type}
            name={DropCheck.name}
            value={DropCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Drop attacks(sudden severe weakness throughout or part of body):</label>
          <input
            type={DropInput.type}
            name={DropInput.name}
            value={DropInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NystagmusCheck.type}
            name={NystagmusCheck.name}
            value={NystagmusCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Nystagmus-Invol REM:</label>
          <input
            type={NystagmusInput.type}
            name={NystagmusInput.name}
            value={NystagmusInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NystagmusCheck.type}
            name={NystagmusCheck.name}
            value={NystagmusCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Nausea/Vomiting:</label>
          <input
            type={NystagmusInput.type}
            name={NystagmusInput.name}
            value={NystagmusInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NystagmusCheck.type}
            name={NystagmusCheck.name}
            value={NystagmusCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Numbness</label>
          <input
            type={NystagmusInput.type}
            name={NystagmusInput.name}
            value={NystagmusInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NystagmusCheck.type}
            name={NystagmusCheck.name}
            value={NystagmusCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Extreme HA!</label>
          <input
            type={NystagmusInput.type}
            name={NystagmusInput.name}
            value={NystagmusInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NystagmusCheck.type}
            name={NystagmusCheck.name}
            value={NystagmusCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Loss of balance/coord.</label>
          <input
            type={NystagmusInput.type}
            name={NystagmusInput.name}
            value={NystagmusInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NystagmusCheck.type}
            name={NystagmusCheck.name}
            value={NystagmusCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Loss vision 1 or 2 eyes</label>
          <input
            type={NystagmusInput.type}
            name={NystagmusInput.name}
            value={NystagmusInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NystagmusCheck.type}
            name={NystagmusCheck.name}
            value={NystagmusCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Nystagmus-Invol REM:</label>
          <input
            type={NystagmusInput.type}
            name={NystagmusInput.name}
            value={NystagmusInputV}
            onChange={handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        </Grid> */}
      {/* <FormControl>
        {menuItems.map((box, index) => {
          return (
            <FormGroup key={index}  style={{display:'flex', flexDirection:'row', marginLeft:'10px'}}>
              <div className="VBAIdiv">
              <FormControlLabel
              className="VBAIlabel"
              style={{marginRight:'auto'}}
                label={box.label}
                control={
                  <Checkbox
                    key={"main" + index}
                    onChange={(e) => handleCheck(box, index)}
                    checked={menuItems[index].value}
                  />
                
                }
              />
              <input className="inputClass VBAIinput" value={box.inputVal} onChange={(e)=>handleChange(box,index, e.target.value)} />
              </div>
              {box.options ? (
                box.options.map(({ value, label }, ind) => {
                  return (
                    <FormControlLabel
                    style={{marginLeft:'10px'}}
                      key={"option" + index}
                      label={label}
                      control={
                        <Checkbox
                          key={"option" + ind}
                          disabled={!box.value}
                          onChange={(e) => innerBoxHandler(index, ind)}
                          checked={box.options[ind].value}
                        />
                      }
                    />
                  );
                })
                
              ) 
             
                  
              : (
                <></>
              )}
            </FormGroup>
          );
        })}
      </FormControl> */}
    </SoftBox>
  );
}
VBAICheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default VBAICheckboxes;
