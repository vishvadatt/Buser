import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";

function CVACheckboxes({ formData, formik, form, index }) {
  // const {values,touched,formField,errors,setFieldValue,handleChange} = formData;
  const { formField } = form;
  const { values } = formik;
  const {
    StrokeCheck,
    StrokeInput,
    VascularCheck,
    VascularInput,
    LocCheck,
    LocInput,
    LostCheck,
    LostInput,
    VisionCheck,
    VisionInput,
    VertigoCheck,
    VertigoInput,
    BalanceCheck,
    BalanceInput,
    DexterityCheck,
    DexterityInput,
    MyelopathicCheck,
    MyelopathicInput,
    ChangesCheck,
    ChangesInput,
    SuddenCheck,
    SuddenInput,
    LocalizedCheck,
    LocalizedInput,
    DifficultyCheck,
    DifficultyInput,
    sensationCheck,
    sensationInput,
    MentalCheck,
    MentalInput,
    DiabetesCheck,
    DiabetesInput,
    LungCheck,
    LungInput,
    NeuroCheck,
    NeuroInput,
    SeizuresCheck,
    SeizuresInput,
    ThyroidCheck,
    ThyroidInput,
    TraumaCheck,
    TraumaInput,
    ConcussionsCheck,
    ConcussionsInput,
    HeadCheck,
    HeadInput,
    MVACheck,
    MVAInput,
    CesareanCheck,
    CesareanInput,
    OtherCheck,
    OtherInput,
    Diplopiainput,
    DiplopiaCheck,
    dizzinessinput,
    dizzinessCheck,
    DropInput,
    DropCheck,
  } = formField;

  const {
    dizzinessinput: dizzinessinputV,
    dizzinessCheck: dizzinessCheckV,
    StrokeCheck: StrokeCheckV,
    StrokeInput: StrokeInputV,
    VascularCheck: VascularCheckV,
    VascularInput: VascularInputV,
    LocCheck: LocCheckV,
    LocInput: LocInputV,
    LostCheck: LostCheckV,
    LostInput: LostInputV,
    VisionCheck: VisionCheckV,
    VisionInput: VisionInputV,
    VertigoCheck: VertigoCheckV,
    VertigoInput: VertigoInputV,
    BalanceCheck: BalanceCheckV,
    BalanceInput: BalanceInputV,
    DexterityCheck: DexterityCheckV,
    DexterityInput: DexterityInputV,
    MyelopathicCheck: MyelopathicCheckV,
    MyelopathicInput: MyelopathicInputV,
    ChangesCheck: ChangesCheckV,
    ChangesInput: ChangesInputV,
    SuddenCheck: SuddenCheckV,
    SuddenInput: SuddenInputV,
    LocalizedCheck: LocalizedCheckV,
    LocalizedInput: LocalizedInputV,
    DifficultyCheck: DifficultyCheckV,
    DifficultyInput: DifficultyInputV,
    sensationCheck: sensationCheckV,
    sensationInput: sensationInputV,
    MentalCheck: MentalCheckV,
    MentalInput: MentalInputV,
    DiabetesCheck: DiabetesCheckV,
    DiabetesInput: DiabetesInputV,
    LungCheck: LungCheckV,
    LungInput: LungInputV,
    NeuroCheck: NeuroCheckV,
    NeuroInput: NeuroInputV,
    SeizuresCheck: SeizuresCheckV,
    SeizuresInput: SeizuresInputV,
    ThyroidCheck: ThyroidCheckV,
    ThyroidInput: ThyroidInputV,
    ConcussionsCheck: ConcussionsCheckV,
    ConcussionsInput: ConcussionsInputV,

    HeadCheck: HeadCheckV,
    HeadInput: HeadInputV,
    MVACheck: MVACheckV,
    MVAInput: MVAInputV,
    TraumaCheck: TraumaCheckV,
    TraumaInput: TraumaInputV,
    CesareanCheck: CesareanCheckV,
    CesareanInput: CesareanInputV,
    OtherCheck: OtherCheckV,
    OtherInput: OtherInputV,
    Diplopiainput: DiplopiainputV,
    DiplopiaCheck: DiplopiaCheckV,
    DropInput: DropInputV,
    DropCheck: DropCheckV,
  } = values;

  const data = [
    {
      label: "Stroke:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Vascular Ds:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Loc:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Lost time:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Vision problems:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Vertigo/Light-headed:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Balance Problems:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Loss of Dexterity:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Myelopathic Sx:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Temp Changes:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Sudden Weakness:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Localized Weakness:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Difficulty Walking:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Loss of sensation unilat:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Mental fog/forgetful:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Diabetes:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Lung Ds:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Neuro Ds:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Seizures:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Thyroid Ds:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Concussions:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Head Inj:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "MVA:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Serious Trauma:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Cesarean:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Other:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
  ];
  const [menuItems, setChecked] = useState(data);
  console.log(menuItems, "dsdads");
  const handleCheck = (box, index) => {
    let abc = menuItems;
    abc[index].value = !box.value;
    console.log(abc[index].options);
    console.log(box.value);

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
  //   const handleChange = (box, index, val) => {
  //     let abc = menuItems;
  //     console.log('ggg',abc[index])
  //     if (box.value ) {
  //         abc[index].inputVal = val;
  //     }
  //     setChecked([...abc]);
  // }

  console.log(menuItems, "dsdads");
  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    // console.log(abc)
    // const { value } = event.target;
    // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
    setChecked([...abc]);
  };
  // useEffect(() => {}, [menuItems]);

  return (
    <Grid container direction="row">
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row" className="cva-grid-container">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Stroke:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={StrokeCheck.name}
                  // checked={StrokeCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[StrokeCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${StrokeCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={StrokeInput.type}
              name={StrokeInput.name}
              // value={StrokeInputV}
              value={formik.values?.tenthPage[index]?.[StrokeInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${StrokeInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row" className="cva-grid-container">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Vascular Ds:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={VascularCheck.name}
                  // checked={VascularCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[VascularCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${VascularCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={VascularInput.type}
              name={VascularInput.name}
              // value={VascularInputV}
              value={formik.values?.tenthPage[index]?.[VascularInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${VascularInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Loc:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={LocCheck.name}
                  // checked={LocCheckV} onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[LocCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${LocCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} md={12} className="cva-text-input-container">
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
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Lost time:"
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
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
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
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Vision problems:"
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
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
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
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Vertigo/Light-headed:"
              className="VBAIlabel"
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
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
            <FormField
              type={dizzinessinput.type}
              name={dizzinessinput.name}
              // value={dizzinessinputV}
              value={formik.values?.tenthPage[index]?.[dizzinessinput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${dizzinessinput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4} sm={4} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Balance Problems:"
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
          <Grid item xs={12} lg={8} sm={8} md={12} className="cva-text-input-container">
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
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Loss of Dexterity:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={DexterityCheck.name}
                  // checked={DexterityCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[DexterityCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${DexterityCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={DexterityInput.type}
              name={DexterityInput.name}
              // value={DexterityInputV}
              value={formik.values?.tenthPage[index]?.[DexterityInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${DexterityInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Myelopathic Sx:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={MyelopathicCheck.name}
                  // checked={MyelopathicCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[MyelopathicCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${MyelopathicCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={MyelopathicInput.type}
              name={MyelopathicInput.name}
              // value={MyelopathicInputV}
              value={formik.values?.tenthPage[index]?.[MyelopathicInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `tenthPage[${index}].${MyelopathicInput.name}`,
                  e.target.value
                );
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Temp Changes:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={ChangesCheck.name}
                  // checked={ChangesCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[ChangesCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${ChangesCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
            <FormField
              type={ChangesInput.type}
              name={ChangesInput.name}
              // value={ChangesInputV}
              value={formik.values?.tenthPage[index]?.[ChangesInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${ChangesInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Sudden Weakness:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={SuddenCheck.name}
                  // checked={SuddenCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[SuddenCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${SuddenCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={SuddenInput.type}
              name={SuddenInput.name}
              // value={SuddenInputV}
              value={formik.values?.tenthPage[index]?.[SuddenInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${SuddenInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Localized Weakness:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={LocalizedCheck.name}
                  // checked={LocalizedCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[LocalizedCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${LocalizedCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} md={12} className="cva-text-input-container">
            <FormField
              type={LocalizedInput.type}
              name={LocalizedInput.name}
              // value={LocalizedInputV}
              value={formik.values?.tenthPage[index]?.[LocalizedInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${LocalizedInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Difficulty Walking:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={DifficultyCheck.name}
                  // checked={DifficultyCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[DifficultyCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${DifficultyCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
            <FormField
              type={DifficultyInput.type}
              name={DifficultyInput.name}
              // value={DifficultyInputV}
              value={formik.values?.tenthPage[index]?.[DifficultyInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${DifficultyInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Loss of sensation unilat:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={sensationCheck.name}
                  // checked={sensationCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[sensationCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${sensationCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} md={12} className="cva-text-input-container">
            <FormField
              type={sensationInput.type}
              name={sensationInput.name}
              // value={sensationInputV}
              value={formik.values?.tenthPage[index]?.[sensationInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${sensationInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Mental fog/forgetful:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={MentalCheck.name}
                  // checked={MentalCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[MentalCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${MentalCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} md={12} className="cva-text-input-container">
            <FormField
              type={MentalInput.type}
              name={MentalInput.name}
              // value={MentalInputV}
              value={formik.values?.tenthPage[index]?.[MentalInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${MentalInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Diabetes:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={DiabetesCheck.name}
                  // checked={DiabetesCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[DiabetesCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${DiabetesCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={DiabetesInput.type}
              name={DiabetesInput.name}
              // value={DiabetesInputV}
              value={formik.values?.tenthPage[index]?.[DiabetesInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${DiabetesInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Lung Ds:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={LungCheck.name}
                  // checked={LungCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[LungCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${LungCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={LungInput.type}
              name={LungInput.name}
              // value={LungInputV}
              value={formik.values?.tenthPage[index]?.[LungInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${LungInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Neuro Ds:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={NeuroCheck.name}
                  // checked={NeuroCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[NeuroCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${NeuroCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={NeuroInput.type}
              name={NeuroInput.name}
              // value={NeuroInputV}
              value={formik.values?.tenthPage[index]?.[NeuroInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${NeuroInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Seizures:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={SeizuresCheck.name}
                  // checked={SeizuresCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[SeizuresCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${SeizuresCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={SeizuresInput.type}
              name={SeizuresInput.name}
              // value={SeizuresInputV}
              value={formik.values?.tenthPage[index]?.[SeizuresInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${SeizuresInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Thyroid Ds:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={ThyroidCheck.name}
                  // checked={ThyroidCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[ThyroidCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${ThyroidCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
            <FormField
              type={ThyroidInput.type}
              name={ThyroidInput.name}
              // value={ThyroidInputV}
              value={formik.values?.tenthPage[index]?.[ThyroidInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${ThyroidInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Concussions:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={ConcussionsCheck.name}
                  // checked={ConcussionsCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[ConcussionsCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${ConcussionsCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
            <FormField
              type={ConcussionsInput.type}
              name={ConcussionsInput.name}
              // value={ConcussionsInputV}
              value={formik.values?.tenthPage[index]?.[ConcussionsInput.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `tenthPage[${index}].${ConcussionsInput.name}`,
                  e.target.value
                );
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Head Inj:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={HeadCheck.name}
                  // checked={HeadCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[HeadCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${HeadCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
            <FormField
              type={HeadInput.type}
              name={HeadInput.name}
              // value={HeadInputV}
              value={formik.values?.tenthPage[index]?.[HeadInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${HeadInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="MVA:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={MVACheck.name}
                  // checked={MVACheckV} onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[MVACheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${MVACheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={MVAInput.type}
              name={MVAInput.name}
              // value={MVAInputV}
              value={formik.values?.tenthPage[index]?.[MVAInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${MVAInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Serious Trauma:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={TraumaCheck.name}
                  // checked={TraumaCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[TraumaCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${TraumaCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} md={12} className="cva-text-input-container">
            <FormField
              type={TraumaInput.type}
              name={TraumaInput.name}
              // value={TraumaInputV}
              value={formik.values?.tenthPage[index]?.[TraumaInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${TraumaInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Cesarean:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={CesareanCheck.name}
                  // checked={CesareanCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[CesareanCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${CesareanCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cva-text-input-container">
            <FormField
              type={CesareanInput.type}
              name={CesareanInput.name}
              // value={CesareanInputV}
              value={formik.values?.tenthPage[index]?.[CesareanInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${CesareanInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} className="cva-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Other:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={OtherCheck.name}
                  // checked={OtherCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[OtherCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${OtherCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cva-text-input-container">
            <FormField
              type={OtherInput.type}
              name={OtherInput.name}
              // value={OtherInputV}
              value={formik.values?.tenthPage[index]?.[OtherInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${OtherInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={StrokeCheck.type}
            name={StrokeCheck.name}
            value={StrokeCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Stroke:</label>
          <input
            type={StrokeInput.type}
            name={StrokeInput.name}
            value={StrokeInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={VascularCheck.type}
            name={VascularCheck.name}
            value={VascularCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
    
          <label className="VBAIlabel">Vascular Ds:</label>
          <input 
            type={VascularInput.type}
            name={VascularInput.name}
            value={VascularInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={LocCheck.type}
            name={LocCheck.name}
            value={LocCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Loc:</label>
          <input
            type={LocInput.type}
            name={LocInput.name}
            value={LocInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={LostCheck.type}
            name={LostCheck.name}
            value={LostCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Lost time:</label>
          <input
            type={LostInput.type}
            name={LostInput.name}
            value={LostInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={VisionCheck.type}
            name={VisionCheck.name}
            value={VisionCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          
          <label className="VBAIlabel">Vision problems:</label>
          <input
            type={VisionInput.type}
            name={VisionInput.name}
            value={VisionInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={VertigoCheck.type}
            name={VertigoCheck.name}
            value={VertigoCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Vertigo/Light-headed:</label>
          <input
            type={VertigoInput.type}
            name={VertigoInput.name}
            value={VertigoInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={BalanceCheck.type}
            name={BalanceCheck.name}
            value={BalanceCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Balance Problems:</label>
          <input
            type={BalanceInput.type}
            name={BalanceInput.name}
            value={BalanceInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={DexterityCheck.type}
            name={DexterityCheck.name}
            value={DexterityCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          
          <label className="VBAIlabel">Loss of Dexterity:</label>
          <input
            type={DexterityInput.type}
            name={DexterityInput.name}
            value={DexterityInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={MyelopathicCheck.type}
            name={MyelopathicCheck.name}
            value={MyelopathicCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          
          <label className="VBAIlabel">Myelopathic Sx:</label>
          <input
            type={MyelopathicInput.type}
            name={MyelopathicInput.name}
            value={MyelopathicInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={ChangesCheck.type}
            name={ChangesCheck.name}
            value={ChangesCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Temp Changes:</label>
          <input
            type={ChangesInput.type}
            name={ChangesInput.name}
            value={ChangesInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={SuddenCheck.type}
            name={SuddenCheck.name}
            value={SuddenCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          
          <label className="VBAIlabel">Sudden Weakness:</label>
          <input
            type={SuddenInput.type}
            name={SuddenInput.name}
            value={SuddenInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={LocalizedCheck.type}
            name={LocalizedCheck.name}
            value={LocalizedCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
     
          <label className="VBAIlabel">Localized Weakness:</label>
          <input
            type={LocalizedInput.type}
            name={LocalizedInput.name}
            value={LocalizedInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={DifficultyCheck.type}
            name={DifficultyCheck.name}
            value={DifficultyCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          
          <label className="VBAIlabel">Difficulty Walking:</label>
          <input
            type={DifficultyInput.type}
            name={DifficultyInput.name}
            value={DifficultyInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={sensationCheck.type}
            name={sensationCheck.name}
            value={sensationCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
      
          <label className="VBAIlabel">Loss of sensation unilat:</label>
          <input
            type={sensationInput.type}
            name={sensationInput.name}
            value={sensationInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={MentalCheck.type}
            name={MentalCheck.name}
            value={MentalCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
        
          <label className="VBAIlabel">Mental fog/forgetful:</label>
          <input
            type={MentalInput.type}
            name={MentalInput.name}
            value={MentalInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={DiabetesCheck.type}
            name={DiabetesCheck.name}
            value={DiabetesCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
        
          <label className="VBAIlabel">Diabetes:</label>
          <input
            type={DiabetesInput.type}
            name={DiabetesInput.name}
            value={DiabetesInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={LungCheck.type}
            name={LungCheck.name}
            value={LungCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
        
          <label className="VBAIlabel">Lung Ds:</label>
          <input
            type={LungInput.type}
            name={LungInput.name}
            value={LungInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NeuroCheck.type}
            name={NeuroCheck.name}
            value={NeuroCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Neuro Ds:</label>
          <input
            type={NeuroInput.type}
            name={NeuroInput.name}
            value={NeuroInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={SeizuresCheck.type}
            name={SeizuresCheck.name}
            value={SeizuresCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          
          <label className="VBAIlabel">Seizures:</label>
          <input
            type={SeizuresInput.type}
            name={SeizuresInput.name}
            value={SeizuresInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={ThyroidCheck.type}
            name={ThyroidCheck.name}
            value={ThyroidCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          
          <label className="VBAIlabel">Thyroid Ds:</label>
          <input
            type={ThyroidInput.type}
            name={ThyroidInput.name}
            value={ThyroidInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={ConcussionsCheck.type}
            name={ConcussionsCheck.name}
            value={ConcussionsCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
        
          <label className="VBAIlabel">Concussions:</label>
          <input
            type={ConcussionsInput.type}
            name={ConcussionsInput.name}
            value={ConcussionsInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={HeadCheck.type}
            name={HeadCheck.name}
            value={HeadCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Head Inj:</label>
          <input
            type={HeadInput.type}
            name={HeadInput.name}
            value={HeadInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={MVACheck.type}
            name={MVACheck.name}
            value={MVACheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">MVA:</label>
          <input
            type={MVAInput.type}
            name={MVAInput.name}
            value={MVAInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={TraumaCheck.type}
            name={TraumaCheck.name}
            value={TraumaCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
       
          <label className="VBAIlabel">Serious Trauma:</label>
          <input
            type={TraumaInput.type}
            name={TraumaInput.name}
            value={TraumaInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={CesareanCheck.type}
            name={CesareanCheck.name}
            value={CesareanCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Cesarean:</label>
          <input
            type={CesareanInput.type}
            name={CesareanInput.name}
            value={CesareanInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={OtherCheck.type}
            name={OtherCheck.name}
            value={OtherCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
         
          <label className="VBAIlabel">Other:</label>
          <input
            type={OtherInput.type}
            name={OtherInput.name}
            value={OtherInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid> */}
    </Grid>

    // <div>
    //   <FormControl>
    //     {menuItems.map((box, index) => {
    //       return (
    //         <FormGroup key={index}  style={{display:'flex', flexDirection:'row', marginLeft:'10px'}}>
    //           <div>
    //           <FormControlLabel
    //           style={{marginRight:'auto'}}
    //             label={box.label}
    //             control={
    //               <Checkbox
    //                 key={"main" + index}
    //                 onChange={(e) => handleCheck(box, index)}
    //                 checked={menuItems[index].value}
    //               />
    //             }
    //           />
    //               <input className="inputClass VBAIinput" value={box.inputVal} onChange={(e)=>formik.handleChange(box,index, e.target.value)} />
    //           </div>

    //           {box.options ? (
    //             box.options.map(({ value, label }, ind) => {
    //               return (
    //                 <FormControlLabel
    //                 style={{marginLeft:'10px'}}
    //                   key={"option" + index}
    //                   label={label}
    //                   control={
    //                     <Checkbox
    //                       key={"option" + ind}
    //                       disabled={!box.value}
    //                       onChange={(e) => innerBoxHandler(index, ind)}
    //                       checked={box.options[ind].value}
    //                     />
    //                   }
    //                 />
    //               );
    //             })
    //           ) : (
    //             <></>
    //           )}
    //         </FormGroup>
    //       );
    //     })}
    //   </FormControl>
    // </div>
  );
}

CVACheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};

export default CVACheckboxes;
