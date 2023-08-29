import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function Depression({formik}) {
  const { values, setFieldValue } = formik;
  
  const data = [ {
    name: "depresscheck1",
    label: "Exercise",
    errorMsg: "",
    value: values.depresscheck1,
  },
  {
    name: "depresscheck2",
    label: "Meditation",
    errorMsg: "",
    value: values.depresscheck2,
  },
  {
    name: "depresscheck3",
    label: "Avoid Stressful Activities",
    errorMsg: "",
    value: values.depresscheck3,
  },
  {
    name: "depresscheck4",
    label: "Natural Anti-Depressants",
    errorMsg: "",
    value: values.depresscheck4,
  },
  {
    name: "depresscheck5",
    label: "Natural Anti-Anxiety",
    errorMsg: "",
    value: values.depresscheck5,
  },
  {
    name: "depresscheck6",
    label: "Bed Rest",
    errorMsg: "",
    value: values.depresscheck6,
  },
  {
    name: "depresscheck7",
    label: "MD Referral",
    errorMsg: "",
    value: values.depresscheck7,
  },
  {
    name: "depresscheck8",
    label: "Cardiologist Referral",
    errorMsg: "",
    value: values.depresscheck8,
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
               style={{marginRight:'auto', display: "flex"}}
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

Depression.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Depression;