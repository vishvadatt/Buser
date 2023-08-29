import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
function BrainCheckbox({ formik }) {
  const { values, setFieldValue } = formik;
  const data = [
    {
      label: "Concussion w/out LOC (S06.0X0A)",
      errorMsg: "",
      name: "braincheck1",
      value: values.braincheck1,
    },
    {
      label: "Concussion w/ LOC <30 minutes (S06.0X9A)",
      errorMsg: "",
      name: "braincheck2",
      value: values.braincheck2,
    },
    {
      label: "Headache Post-Trauma-Intractable (G44.301)",
      errorMsg: "",
      name: "braincheck3",
      value: values.braincheck3,
    },
    {
      label: "Headache Post-Trauma-Not Intractable (G44.309)",
      errorMsg: "",
      name: "braincheck4",
      value: values.braincheck4,
    },
    {
      label: "Headache Cervicogenic (R51)",
      errorMsg: "",
      name: "braincheck5",
      value: values.braincheck5,
    },
    {
      label: "Migraine, no Aura, not Intractable (G43.009)",
      errorMsg: "",
      name: "braincheck6",
      value: values.braincheck6,
    },
    {
      label: "Migraine, no Aura, Intractable (G43.019)",
      errorMsg: "",
      name: "braincheck7",
      value: values.braincheck7,
    },
    {
      label: "Migraine, Aura, not Intractable (G43.101)",
      errorMsg: "",
      name: "braincheck8",
      value: values.braincheck8,
    },
    {
      label: "Migraine, Aura, Intractable (G43.119)",
      errorMsg: "",
      name: "braincheck9",
      value: values.braincheck9,
    },
    {
      label: "Disruption of Sleep Patterns (G47.9)",
      errorMsg: "",
      name: "braincheck10",
      value: values.braincheck10,
    },
    {
      label: "Dizzy (R42)",
      errorMsg: "",
      name: "braincheck11",
      value: values.braincheck11,
    },
    {
      label: "Anxiety (F43.0)",
      errorMsg: "",
      name: "braincheck12",
      value: values.braincheck12,
    },
    {
      label: "PTSD (F43.11)",
      errorMsg: "",
      name: "braincheck13",
      value: values.braincheck13,
    },
    {
      label: "Depression ",
      errorMsg: "",
      name: "braincheck14",
      value: values.braincheck14,
    },
    {
      label: "Mild (F32.0)",
      errorMsg: "",
      name: "braincheck15",
      value: values.braincheck15,
    },
    {
      label: "Mod (F32.1)",
      errorMsg: "",
      name: "braincheck16",
      value: values.braincheck16,
    },
    {
      label: "Jaw Sprain",
      errorMsg: "",
      name: "braincheck17",
      value: values.braincheck17,
    },
    {
      label: "Left(S03.41 XA)",
      errorMsg: "",
      name: "braincheck18",
      value: values.braincheck18,
    },
    {
      label: "Right(S03.42XA)",
      errorMsg: "",
      name: "braincheck19",
      value: values.braincheck19,
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
    // console.log(abc)
    // const { value } = event.target;
    // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
    setChecked([...abc]);
  };
  // useEffect(() => {}, [menuItems]);

  return (
    <div>
      <FormControl>
        {data.map((box, index) => {
          return (
            <FormGroup
              key={index}
              style={{ display: "flex", flexDirection: "row", marginLeft: "0px" }}
            >
              <FormControlLabel
                style={{ marginRight: "auto", display: "flex" }}
                label={box.label}
                control={
                  <Checkbox
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
                      style={{ marginLeft: "5px" }}
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

BrainCheckbox.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default React.memo(BrainCheckbox);
