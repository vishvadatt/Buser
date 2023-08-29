import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function CheckboxLumber({formik}) {
  const { values, setFieldValue } = formik;

  const data = [ {
    label: "Lumbar Segmental Dysfunction (M99.03)",
    errorMsg: "",
    name: "lumbercheck1",
    value: values.lumbercheck1,
  },
  {
    label: "Lumbar Sprain (S33.5XXA)",
    errorMsg: "",
    name: "lumbercheck2",
    value: values.lumbercheck2,
  }, {
    label: "Lumbar Torn Ligaments w/ Laxity (M24.28)",
    errorMsg: "",
    name: "lumbercheck3",
    value: values.lumbercheck3,
  },
  {
    label: "Lumbar Motion Segment Hypermobility (M35.7)",
    errorMsg: "",
    name: "lumbercheck4",
    value: values.lumbercheck4,
  }, {
    label: "Lumbar Tendon Enthesopathy (M46.06)",
    errorMsg: "",
    name: "lumbercheck5",
    value: values.lumbercheck5,
  }, {
    label: "Lumbago (M54.5)",
    errorMsg: "",
    name: "lumbercheck6",
    value: values.lumbercheck6,
  }, 
  {
    label: "Lumbar Myalgia (M79.1)",
    errorMsg: "",
    name: "lumbercheck7",
    value: values.lumbercheck7,
  }, 
  {
    label: "Lumb.Herniation.(M51.26)",
    errorMsg: "",
    name: "lumbercheck8",
    value: values.lumbercheck8,
  },
  {
    label: "Lumb.DJD (M51.36)",
    errorMsg: "",
    name: "lumbercheck9",
    value: values.lumbercheck9,
  }
  , {
    label: " Lumbar Nerve Root Injury (S34.21XA)",
    errorMsg: "",
    name: "lumbercheck10",
    value: values.lumbercheck10,
  }, {
    label: " Lumbar Radiculopathy (M54.16)",
    errorMsg: "",
    name: "lumbercheck11",
    value: values.lumbercheck11,
  }, {
    label: "Spondylolisthesis (Congenital)(Q76.2)",
    errorMsg: "",
    name: "lumbercheck12",
    value: values.lumbercheck12,
  }, {
    label: "Spondylolisthesis (Acquired-Traumatic)(M43.10)",
    errorMsg: "",
    name: "lumbercheck13",
    value: values.lumbercheck13,
  }, {
    label: "SI Sprain (S33.9XXA)",
    errorMsg: "",
    name: "lumbercheck14",
    value: values.lumbercheck14,
  },
  {
    label: "Coccyx Sprain (S33.8XXA)",
    errorMsg: "",
    name: "lumbercheck15",
    value: values.lumbercheck15,
  }
  , {
    label: "L5/S1 Seg.Dysf.(M99.03)",
    errorMsg: "",
    name: "lumbercheck16",
    value: values.lumbercheck16,
    },
  {
    label: "SI Seg. Dysf.(M99.04)",
    errorMsg: "",
    name: "lumbercheck17",
    value: values.lumbercheck17,
  }
  , {
    label: "L5/S1 Herniation (M51.27)",
    errorMsg: "",
    name: "lumbercheck18",
    value: values.lumbercheck18,
  },
  {
    label: "L5/S1 DJD (M51.37)",
    errorMsg: "",
    name: "lumbercheck19",
    value: values.lumbercheck19,
  },
   {
    label: "Lumb/Sac Radicululopathy (M54.17)",
    errorMsg: "",
    name: "lumbercheck20",
    value: values.lumbercheck20,

  }, {
    label: "Sciatica",
    errorMsg: "",
    name: "lumbercheck21",
    value: values.lumbercheck21,
    }, 
  {
    label: "Left (M54.32)",
    errorMsg: "",
    name: "lumbercheck22",
    value: values.lumbercheck22,
  }, 
  {
    label: "Right (M54.31)",
    errorMsg: "",
    name: "lumbercheck23",
    value: values.lumbercheck23,
  }



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
    // 
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

CheckboxLumber.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default React.memo(CheckboxLumber);
