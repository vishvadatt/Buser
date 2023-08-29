import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
function StrainCheckbox({ formik }) {
  const { values, setFieldValue } = formik;
  const data = [
    {
      label: "Head Strain of Muscle & Tendon (S09.11XA)",
      errorMsg: "",
      name: "straincheck1",
      value: values.straincheck1,
    },
    {
      label: "Neck Strain of MFT (S16.1XXA)",
      errorMsg: "",
      name: "straincheck2",
      value: values.straincheck2,
    },
    {
      label: "Low Back Strain of MFT (S39.012A)",
      errorMsg: "",
      name: "straincheck3",
      value: values.straincheck3,
    },
    {
      label: "Pelvis Strain of MFT (S39.013A)",
      errorMsg: "",
      name: "straincheck44",
      value: values.straincheck44,
    },
    {
      label: "Front Wall of Thorax Strain of MFT (S29.011A)",
      errorMsg: "",
      name: "straincheck5",
      value: values.straincheck5,
    },
    {
      label: "Back Wall of Thorax Strain of MFT (S29.012A)",
      errorMsg: "",
      name: "straincheck6",
      value: values.straincheck6,
    },
  ];
  const [menuItems, setChecked] = useState(data);



  const handleCheck = (box) => {
    const isChecked = !values[box.name]; // Toggle the value
    const regex = /\(([^)]+)\)/;
    const matches = regex.exec(box.label);
    const diagnosisCode = matches ? matches[1] : "";
    const diagnosisName = box.label.replace(regex, "").trim();
    const data = { name: isChecked, diagnosisCode, diagnosisName };
  
    setFieldValue(box.name, data);
  
    // Remove key-value pair if isChecked is false
    if (!isChecked) {
      const newValues = { ...values };
      delete newValues[box.name];
      formik.setValues(newValues);
    }
  };
  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    setChecked([...abc]);
  };

  return (
    <div>
      <FormControl>
        {data.map((box, index) => {
          
          return (
            <FormGroup
              key={index}
              style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}
            >
              <FormControlLabel
                style={{ marginRight: "auto", display: "flex" }}
                label={box.label}
                control={
                  <Checkbox
                    // key={"main" + index}
                    // onChange={(e) => handleCheck(box, index)}
                    // checked={menuItems[index].value}
                    name={box.name}
                    key={"main" + index}
                    onChange={() => handleCheck(box)}
                    checked={values[box.name]?.name || false}
                  />
                }
              />
              {/* {box.options ? (
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
              ) : (
                <></>
              )} */}
            </FormGroup>
          );
        })}
      </FormControl>
    </div>
  );
}

StrainCheckbox.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default React.memo(StrainCheckbox);
