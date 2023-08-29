import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function CheckboxTorso({formik}) {

  const { values, setFieldValue } = formik;
  const data = [

    {
    label: "Thoracic Segmental Dysf. (M99.02)",
    errorMsg: "",
    name: "torsocheck1",
    value: values.torsocheck1,
  },
  {
    label: "Thoracolumbar Segmental Dysf. (M99.02)",
    errorMsg: "",
    name: "torsocheck2",
    value: values.torsocheck2,
  }, {
    label: "Costochondral Segmental Dysf. (M99.08)",
    errorMsg: "",
    name: "torsocheck3",
    value: values.torsocheck3,
  },
  {
    label: "Costovertebral Segmental Dysf. (M99.08)",
    errorMsg: "",
    name: "torsocheck4",
    value: values.torsocheck4,
  }, {
    label: "Sternochondral Segmental Dysf. (M99.08)",
    errorMsg: "",
    name: "torsocheck5",
    value: values.torsocheck5,
  }, {
    label: "Sternoclavicular Segmental Dysf. (M99.07)",
    errorMsg: "",
    name: "torsocheck6",
    value: values.torsocheck6,
  }, {
    label: "Rib Cage Segmental Dysf. (M99.08)",
    errorMsg: "",
    name: "torsocheck7",
    value: values.torsocheck7,
  }, {
    label: "Thoracic Sprain (S23.3XXA)",
    errorMsg: "",
    name: "torsocheck8",
    value: values.torsocheck8,
  }, {
    label: "Thoracic Torn Ligaments w/ Laxity (M24.28)",
    errorMsg: "",
    name: "torsocheck9",
    value: values.torsocheck9,
  }, {
    label: "Thor/Lumb Torn Ligaments w/ Laxity (M24.28)",
    errorMsg: "",
    name: "torsocheck10",
    value: values.torsocheck10,
  }, {
    label: "Thor. Motion Segment Hypermobility (M35.7)",
    errorMsg: "",
    name: "torsocheck11",
    value: values.torsocheck11,
  }, {
    label: "Thor. Tendon lnjury/Enthesopathy (M46.04)",
    errorMsg: "",
    name: "torsocheck12",
    value: values.torsocheck12,
  }, {
    label: "Thoracic Pain (M54.6)",
    errorMsg: "",
    name: "torsocheck13",
    value: values.torsocheck13,
  }, {
    label: "Thoracic Muscle Pain (M79.1)",
    errorMsg: "",
    name: "torsocheck14",
    value: values.torsocheck14,
  }, {
    label: "Ribs Sprain (S23.41 XA)",
    errorMsg: "",
    name: "torsocheck15",
    value: values.torsocheck15,

  }, {
    label: "Sternoclavicular Sprain.(S23.420A)",
    errorMsg: "",
    name: "torsocheck16",
    value: values.torsocheck16,
  }, {
    label: "Chest/Sternum Pain (R07.2)",
    errorMsg: "",
    name: "torsocheck17",
    value: values.torsocheck17,
  }, {
    label: "Thoracic Disc Displacement (M51.24)",
    errorMsg: "",
    name: "torsocheck18",
    value: values.torsocheck18,
  }, {
    label: "Thoracolumbar Disc Displacement (M51.25)",
    errorMsg: "",
    name: "torsocheck19",
    value: values.torsocheck19,
  }, {
    label: "Thoracic. Disc w/ Radiculopathy (M51.14)",
    errorMsg: "",
    name: "torsocheck20",
    value: values.torsocheck20,
  }, {
    label: "Thoracolumbar Disc w/ Radiculopathy (M51.15)",
    errorMsg: "",
    name: "torsocheck21",
    value: values.torsocheck21,
  }, {
    label: "Brachia! Plexopathy (S14.3XXA)",
    errorMsg: "",
    name: "torsocheck22",
    value: values.torsocheck22,
  }, {
    label: "Thoracic DJD/DDD (M51.34)",
    errorMsg: "",
    name: "torsocheck23",
    value: values.torsocheck23,
  }, {
    label: "Thoracolumbar DJD/DDD (M51.35)",
    errorMsg: "",
    name: "torsocheck24",
    value: values.torsocheck24,
  }
  ];
  
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
  // const [menuItems, setChecked] = useState(data);
  // 
  // const handleCheck = (box, index) => {
  //   let abc = menuItems;
  //   abc[index].value = !box.value;
  //   
  //   

  //   if (abc[index].options && !box.value) {
  //     abc[index].options = abc[index].options.map((item) => {
  //       item.value = false;
  //       
  //       return item;
  //     });
  //   }
  //   // 
  //   // const { value } = event.target;
  //   // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
  //   setChecked([...abc]);
  // };

  // const innerBoxHandler = (outerIndex, innerIndex) => {
  //   let abc = menuItems;
  //   abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
  //   // 
  //   // const { value } = event.target;
  //   // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
  //   setChecked([...abc]);
  // };
  // // useEffect(() => {}, [menuItems]);

  return (
    <div>
      <FormControl>
        {data.map((box, index) => {
          
          return (
            <FormGroup key={index}  style={{display:'flex', flexDirection:'row', marginLeft:'10px'}}>
              <FormControlLabel
              style={{marginRight:'auto', display: "flex"}}
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
CheckboxTorso.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default React.memo(CheckboxTorso);

