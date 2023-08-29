import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function TMJPlan({formik}) {
  const { values, setFieldValue } = formik;
  
  const data = [ {
    name: "tjmcheck1",
    label: "Physiotherapy",
    errorMsg: "",
    value: values.tjmcheck1,
  },
  {
    name: "tjmcheck2",
    label: "Massage Therapy",
    errorMsg: "",
    value: values.tjmcheck2,
  },
  {
    name: "tjmcheck3",
    label: "Splint for Home Use ",
    errorMsg: "",
    value: values.tjmcheck3,
  },
  {
    name: "tjmcheck4",
    label: "Home TMJ Exercises",
    errorMsg: "",
    value: values.tjmcheck4,
  },
  {
    name: "tjmcheck5",
    label: "Restricted TMJ Activity",
    errorMsg: "",
    value: values.tjmcheck5,
  },
  {
    name: "tjmcheck6",
    label: "Relaxation Exercises",
    errorMsg: "",
    value: values.tjmcheck6,
  },
  {
    name: "tjmcheck7",
    label: "Soft Food/Liquid Diet",
    errorMsg: "",
    value: values.tjmcheck7,
  },
  {
    name: "tjmcheck8",
    label: "DDS Referral",
    errorMsg: "",
    value: values.tjmcheck8,
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

  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    // console.log(abc)
    // const { value } = event.target;
    // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
    setChecked([...abc]);
  };
  // useEffect(() => {}, [menuItems]);

  console.log("09090909090", menuItems)
  return (
    <div>
      <FormControl>
        {data.map((box, index) => {
          return (
            <FormGroup key={index} style={{display:'flex', flexDirection:'row', marginLeft:'10px'}}>
              <FormControlLabel
               style={{marginRight:'auto'}}
                label={box.label}
                control={
                  <Checkbox
                    name={box.name}
                    key={"main" + index}
                    onChange={(e)=> setFieldValue(box.name, e.target.checked)}
                    checked={box.value}
                  />
                }
              />
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
              ) : (
                <></>
              )}
            </FormGroup>
          );
        })}
      </FormControl>
    </div>
  );
}

TMJPlan.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TMJPlan;