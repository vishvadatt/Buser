import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";

function CardiacCheckboxes({ formData, formik, form, index }) {
  // const {values,touched,formField,errors,setFieldValue,handleChange} = formData;
  const { formField } = form;
  const { values } = formik;
  console.log("form", formData, values);

  const {
    ChestCheck,
    ChestInput,
    SOBCheck,
    SOBInput,
    breathingCheck,
    breathingInput,
    AttackCheck,
    AttackInput,
    HeartbeatCheck,
    HeartbeatInput,
    HBPCheck,
    HBPInput,
    LBPCheck,
    LBPInput,
    NVCheck,
    NVInput,
    SmokesCheck,
    SmokesInput,
    NauseaCheck,
    NauseaInput,
    DifficultyInput,
    DifficultyCheck,
  } = formField;

  const {
    ChestCheck: ChestCheckV,
    ChestInput: ChestInputV,
    SOBCheck: SOBCheckV,
    SOBInput: SOBInputV,
    breathingCheck: breathingCheckV,
    breathingInput: breathingInputV,
    AttackCheck: AttackCheckV,
    AttackInput: AttackInputV,
    HeartbeatCheck: HeartbeatCheckV,
    HeartbeatInput: HeartbeatInputV,
    HBPCheck: HBPCheckV,
    HBPInput: HBPInputV,
    LBPCheck: LBPCheckV,
    LBPInput: LBPInputV,
    NVCheck: NVCheckV,
    NVInput: NVInputV,
    SmokesCheck: SmokesCheckV,
    SmokesInput: SmokesInputV,
    AlcoholCheck: AlcoholCheckV,
    NauseaCheck: NauseaCheckV,
    NauseaInput: NauseaInputV,
    DifficultyInput: DifficultyInputV,
    DifficultyCheck: DifficultyCheckV,
  } = values;
  console.log("AlcoholCheckV", AlcoholCheckV);
  const data = [
    {
      label: "Chest/Arm Pain:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "SOB w/o exertion:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Difficulty breathing:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Heart Disease/Attack:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Irreg. Heartbeat:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "HBP/HTN:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "LBP:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "N/V (esp. females)",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: " Smokes:",
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
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Chest/Arm Pain:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={ChestCheck.name}
                  // checked={ChestCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[ChestCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${ChestCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cardiac-text-input-container">
            <FormField
              type={ChestInput.type}
              name={ChestInput.name}
              // value={ChestInputV}
              value={formik.values?.tenthPage[index]?.[ChestInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${ChestInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="SOB w/o exertion:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={SOBCheck.name}
                  // checked={SOBCheckV} onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[SOBCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${SOBCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cardiac-text-input-container">
            <FormField
              type={SOBInput.type}
              name={SOBInput.name}
              // value={SOBInputV}
              value={formik.values?.tenthPage[index]?.[SOBInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${SOBInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Difficulty breathing:"
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
          <Grid item xs={12} lg={8.5} md={12} className="cardiac-text-input-container">
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
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Heart Disease/Attack:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={AttackCheck.name}
                  // checked={AttackCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[AttackCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${AttackCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cardiac-text-input-container">
            <FormField
              type={AttackInput.type}
              name={AttackInput.name}
              // value={AttackInputV}
              value={formik.values?.tenthPage[index]?.[AttackInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${AttackInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Irreg. Heartbeat:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={HeartbeatCheck.name}
                  // checked={HeartbeatCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[HeartbeatCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${HeartbeatCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} md={12} className="cardiac-text-input-container">
            <FormField
              type={HeartbeatInput.type}
              name={HeartbeatInput.name}
              // value={HeartbeatInputV}
              value={formik.values?.tenthPage[index]?.[HeartbeatInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${HeartbeatInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="HBP/HTN:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={HBPCheck.name}
                  // checked={HBPCheckV} onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[HBPCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${HBPCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cardiac-text-input-container">
            <FormField
              type={HBPInput.type}
              name={HBPInput.name}
              // value={HBPInputV}
              value={formik.values?.tenthPage[index]?.[HBPInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${HBPInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="LBP:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={LBPCheck.name}
                  // checked={LBPCheckV} onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[LBPCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${LBPCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cardiac-text-input-container">
            <FormField
              type={LBPInput.type}
              name={LBPInput.name}
              // value={LBPInputV}
              value={formik.values?.tenthPage[index]?.[LBPInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${LBPInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="N/V (esp. females)"
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
          <Grid item xs={12} lg={9} md={12} className="cardiac-text-input-container">
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
      </Grid>
      <Grid item xs={12} className="cardiac-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Smokes:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={SmokesCheck.name}
                  // checked={SmokesCheckV || AlcoholCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[SmokesCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${SmokesCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="cardiac-text-input-container">
            <FormField
              type={SmokesInput.type}
              name={SmokesInput.name}
              // value={SmokesInputV}
              value={formik.values?.tenthPage[index]?.[SmokesInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${SmokesInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={ChestCheck.type}
            name={ChestCheck.name}
            value={ChestCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Chest/Arm Pain:</label>
          <input
            type={ChestInput.type}
            name={ChestInput.name}
            value={ChestInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={SOBCheck.type}
            name={SOBCheck.name}
            value={SOBCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">SOB w/o exertion:</label>
          <input
            type={SOBInput.type}
            name={SOBInput.name}
            value={SOBInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={breathingCheck.type}
            name={breathingCheck.name}
            value={breathingCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Difficulty breathing:</label>
          <input
            type={breathingInput.type}
            name={breathingInput.name}
            value={breathingInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={AttackCheck.type}
            name={AttackCheck.name}
            value={AttackCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Heart Disease/Attack:</label>
          <input
            type={AttackInput.type}
            name={AttackInput.name}
            value={AttackInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={HeartbeatCheck.type}
            name={HeartbeatCheck.name}
            value={HeartbeatCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Irreg. Heartbeat:</label>
          <input
            type={HeartbeatInput.type}
            name={HeartbeatInput.name}
            value={HeartbeatInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={HBPCheck.type}
            name={HBPCheck.name}
            value={HBPCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">HBP/HTN:</label>
          <input
            type={HBPInput.type}
            name={HBPInput.name}
            value={HBPInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={LBPCheck.type}
            name={LBPCheck.name}
            value={LBPCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">LBP:</label>
          <input
            type={LBPInput.type}
            name={LBPInput.name}
            value={LBPInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={NVCheck.type}
            name={NVCheck.name}
            value={NVCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">N/V (esp. females)</label>
          <input
            type={NVInput.type}
            name={NVInput.name}
            value={NVInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={SmokesCheck.type}
            name={SmokesCheck.name}
            value={SmokesCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Smokes:</label>
          <input
            type={SmokesInput.type}
            name={SmokesInput.name}
            value={SmokesInputV}
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
    //               <input className="inputClass VBAIinput" value={box.inputVal} onChange={(e)=>handleChange(box,index, e.target.value)} />
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
CardiacCheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default CardiacCheckboxes;
