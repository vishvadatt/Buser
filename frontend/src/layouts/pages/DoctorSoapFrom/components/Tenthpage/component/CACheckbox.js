import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";

function CACheckboxes({ formData, form, formik, index }) {
  const { errors, setFieldValue, handleChange } = formData;
  const { formField } = form;
  const { values } = formik;

  console.log("form", formData, values);

  const {
    CancerCheck,
    CancerInput,
    RecentCheck,
    RecentInput,
    FeverCheck,
    FeverInput,
    ChillsCheck,
    ChillsInput,
    SweatsCheck,
    SweatsInput,
    wakesCheck,
    wakesInput,
    CoughingCheck,
    CoughingInput,
    BladderCheck,
    BladderInput,
    BloodCheck,
    BloodInput,
    BowelCheck,
    BowelInput,
    urinationCheck,
    urinationInput,
  } = formField;

  const {
    CancerCheck: CancerCheckV,
    CancerInput: CancerInputV,
    RecentCheck: RecentCheckV,
    Recentinput: RecentInputV,
    FeverCheck: FeverCheckV,
    FeverInput: FeverInputV,
    ChillsCheck: ChillsCheckV,
    ChillsInput: ChillsInputV,
    SweatsCheck: SweatsCheckV,
    SweatsInput: SweatsInputV,
    wakesCheck: wakesCheckV,
    wakesInput: wakesInputV,
    CoughingCheck: CoughingCheckV,
    CoughingInput: CoughingInputV,
    BladderCheck: BladderCheckV,
    BladderInput: BladderInputV,
    BloodCheck: BloodCheckV,
    BloodInput: BloodInputV,
    BowelCheck: BowelCheckV,
    BowelInput: BowelInputV,
    urinationCheck: urinationCheckV,
    urinationInput: urinationInputV,
  } = values;

  const data = [
    {
      label: "Cancer:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Recent/Unexp. Wt +/-:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Fever:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Chills:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Night Sweats:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "P that wakes at night:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Coughing w/ blood:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Bowel/Bladder Abnl:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "Blood in stool:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "P w/ Bowel mvts:",
      errorMsg: "",
      value: false,
      inputVal: "",
    },
    {
      label: "P w/ urination:",
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
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} sm={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Cancer:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={CancerCheck.name}
                  // checked={CancerCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[CancerCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${CancerCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={9} md={12} className="ca-text-input-container ">
            <FormField
              type={CancerInput.type}
              name={CancerInput.name}
              // value={CancerInputV}
              value={formik.values?.tenthPage[index]?.[CancerInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${CancerInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Recent/Unexp. Wt +/-:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={RecentCheck.name}
                  // checked={RecentCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[RecentCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${RecentCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} className="ca-text-input-container ">
            <FormField
              type={RecentInput.type}
              name={RecentInput.name}
              // value={RecentInputV}
              value={formik.values?.tenthPage[index]?.[RecentInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${RecentInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Fever:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={ChillsCheck.name}
                  // checked={ChillsCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[ChillsCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${ChillsCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="ca-text-input-container ">
            <FormField
              type={ChillsInput.type}
              name={ChillsInput.name}
              // value={ChillsInputV}
              value={formik.values?.tenthPage[index]?.[ChillsInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${ChillsInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} md={12} lg={3}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Chills:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={ChillsCheck.name}
                  // checked={ChillsCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[ChillsCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${ChillsCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="ca-text-input-container ">
            <FormField
              type={ChillsInput.type}
              name={ChillsInput.name}
              // value={ChillsInputV}
              value={formik.values?.tenthPage[index]?.[ChillsInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${ChillsInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3} md={12}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Night Sweats:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={SweatsCheck.name}
                  // checked={SweatsCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[SweatsCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${SweatsCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={9} md={12} className="ca-text-input-container ">
            <FormField
              type={SweatsInput.type}
              name={SweatsInput.name}
              // value={SweatsInputV}
              value={formik.values?.tenthPage[index]?.[SweatsInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${SweatsInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={3.5}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="P that wakes at night:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={wakesCheck.name}
                  // checked={wakesCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[wakesCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${wakesCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8.5} className="ca-text-input-container ">
            <FormField
              type={wakesInput.type}
              name={wakesInput.name}
              // value={wakesInputV}
              value={formik.values?.tenthPage[index]?.[wakesInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${wakesInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Coughing w/ blood:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={CoughingCheck.name}
                  // checked={CoughingCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[CoughingCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${CoughingCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} className="ca-text-input-container ">
            <FormField
              type={CoughingInput.type}
              name={CoughingInput.name}
              // value={CoughingInputV}
              value={formik.values?.tenthPage[index]?.[CoughingInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${CoughingInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Bowel/Bladder Abnl:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={BowelCheck.name}
                  // checked={BowelCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[BowelCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${BowelCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} className="ca-text-input-container ">
            <FormField
              type={BowelInput.type}
              name={BowelInput.name}
              // value={BowelInputV}
              value={formik.values?.tenthPage[index]?.[BowelInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${BowelInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={5}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="Blood in stool:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={BloodCheck.name}
                  // checked={BloodCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[BloodCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${BloodCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={7} className="ca-text-input-container ">
            <FormField
              type={BloodInput.type}
              name={BloodInput.name}
              // value={BloodInputV}
              value={formik.values?.tenthPage[index]?.[BloodInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${BloodInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="P w/ Bowel mvts:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={BowelCheck.name}
                  // checked={BowelCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[BowelCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`tenthPage[${index}].${BowelCheck.name}`, e.target.checked)
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} className="ca-text-input-container ">
            <FormField
              type={BowelInput.type}
              name={BowelInput.name}
              // value={BowelInputV}
              value={formik.values?.tenthPage[index]?.[BowelInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${BowelInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className="ca-grid-container">
        <Grid container direction="row">
          <Grid item xs={12} lg={4}>
            <FormControlLabel
              style={{ marginRight: "auto" }}
              label="P w/ urination:"
              className="VBAIlabel"
              control={
                <Checkbox
                  name={urinationCheck.name}
                  // checked={urinationCheckV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.tenthPage[index]?.[urinationCheck.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `tenthPage[${index}].${urinationCheck.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
          </Grid>
          <Grid item xs={12} lg={8} className="ca-text-input-container ">
            <FormField
              type={urinationInput.type}
              name={urinationInput.name}
              // value={urinationInputV}
              value={formik.values?.tenthPage[index]?.[urinationInput.name]}
              onChange={(e) => {
                formik.setFieldValue(`tenthPage[${index}].${urinationInput.name}`, e.target.value);
              }}
              className="VBAIinputCss"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={CancerCheck.type}
            name={CancerCheck.name}
            value={CancerCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Cancer:</label>
          <input
            type={CancerInput.type}
            name={CancerInput.name}
            value={CancerInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={RecentCheck.type}
            name={RecentCheck.name}
            value={RecentCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Recent/Unexp. Wt +/-:</label>
          <input
            type={RecentInput.type}
            name={RecentInput.name}
            value={RecentInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={FeverCheck.type}
            name={FeverCheck.name}
            value={FeverCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Fever:</label>
          <input
            type={FeverInput.type}
            name={FeverInput.name}
            value={FeverInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={ChillsCheck.type}
            name={ChillsCheck.name}
            value={ChillsCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Chills:</label>
          <input
            type={ChillsInput.type}
            name={ChillsInput.name}
            value={ChillsInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={SweatsCheck.type}
            name={SweatsCheck.name}
            value={SweatsCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Night Sweats:</label>
          <input
            type={SweatsInput.type}
            name={SweatsInput.name}
            value={SweatsInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={wakesCheck.type}
            name={wakesCheck.name}
            value={wakesCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">P that wakes at night:</label>
          <input
            type={wakesInput.type}
            name={wakesInput.name}
            value={wakesInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={CoughingCheck.type}
            name={CoughingCheck.name}
            value={CoughingCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Coughing w/ blood:</label>
          <input
            type={CoughingInput.type}
            name={CoughingInput.name}
            value={CoughingInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={BladderCheck.type}
            name={BladderCheck.name}
            value={BladderCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Bowel/Bladder Abnl:</label>
          <input
            type={BladderInput.type}
            name={BladderInput.name}
            value={BladderInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={BloodCheck.type}
            name={BloodCheck.name}
            value={BloodCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">Blood in stool:</label>
          <input
            type={BloodInput.type}
            name={BloodInput.name}
            value={BloodInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={BowelCheck.type}
            name={BowelCheck.name}
            value={BowelCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">P w/ Bowel mvts:</label>
          <input
            type={BowelInput.type}
            name={BowelInput.name}
            value={BowelInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
        <Grid item xs={12} style={{display : "flex", marginBottom:'20px'}}>
          <input
            type={urinationCheck.type}
            name={urinationCheck.name}
            value={urinationCheckV}
            onChange={formik.handleChange}
            className='checkboxClass'
          />
          <label className="VBAIlabel">P w/ urination:</label>
          <input
            type={urinationInput.type}
            name={urinationInput.name}
            value={urinationInputV}
            onChange={formik.handleChange}
            className='inputClass VBAIinput'
          /> 
        </Grid>
         */}
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
    //             <input className="inputClass VBAIinput" value={box.inputVal} onChange={(e)=>handleChange(box,index, e.target.value)} />
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
CACheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default CACheckboxes;
