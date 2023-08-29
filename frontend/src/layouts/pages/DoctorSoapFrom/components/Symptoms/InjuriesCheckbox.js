import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

function InjuriesCheckbox({formik}) {
  const { values, setFieldValue } = formik;
  const data = [ {
    label: "Stiffness or limited movement in joint(s)",
    errorMsg: "",
    name: "injurycheck1",
    value:values.injurycheck1,
  },
  {
    label: "Headaches",
    errorMsg: "",
    name: "injurycheck2",
    value:values.injurycheck2,
  }, {
    label: "Muscle spasms/sore muscles",
    errorMsg: "",
    name: "injurycheck3",
    value:values.injurycheck3,
  },
  {
    label: "Dizziness, lightheaded, woozy feeling",
    errorMsg: "",
    name: "injurycheck4",
    value:values.injurycheck4,
  }, {
    label: "Visual disturbances or vision change",
    errorMsg: "",
    name: "injurycheck5",
    value:values.injurycheck5,
  }, {
    label: "Sleep changesidisruption of patterns",
    errorMsg: "",
    name: "injurycheck6",
    value:values.injurycheck6,
  }, {
    label: "Pain radiates from one place to another",
    errorMsg: "",
    name: "injurycheck7",
    value:values.injurycheck7,
  }, {
    label: "Anxiety or nervous when driving",
    errorMsg: "",
    name: "injurycheck8",
    value:values.injurycheck8,
  }, {
    label: "Irregular Heartbeat or uneven pulse",
    errorMsg: "",
    name: "injurycheck9",
    value:values.injurycheck9,
  }, {
    label: "Feeling depressed about things",
    errorMsg: "",
    name: "injurycheck10",
    value:values.injurycheck10,
  }, 
  // {
  //   label: "I am taking the following medications",
  //   errorMsg: "",
  //   name: "injurycheck11",
  //   value:values.injurycheck11,
  // }, 
  
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

  return (
    <div>
      <FormControl style={{marginLeft:'10px'}}>
        {data.map((box, index) => {
          console.log(index);
          return (
            <FormGroup key={index}>
              <FormControlLabel
              style={{display:"flex"}}
                label={box.label}
                control={
                  <Checkbox
                    // key={"main" + index}
                    // onChange={(e) => handleCheck(box, index)}
                    // checked={menuItems[index].value}
                    name={box.name}
                    key={"main" + index}
                    onChange={(e)=> setFieldValue(box.name, e.target.checked)}
                    checked={box.value}
                  />
                }
              />
              {/* {box.options ? (
                box.options.map(({ value, label }, ind) => {
                  return (
                    <FormControlLabel
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

<FormGroup style={{display:'flex', flexDirection:'row', marginBottom:"10px"}}>
        <Checkbox
            name="injurycheck11"
            checked={values.injurycheck11}
            // onChange={formik.handleChange}
            onChange={(e)=> setFieldValue("injurycheck11", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography
                  variant="h5"
                  fontWeight="bold"
                  style={{fontSize: "15px" }}
                >
                &nbsp;I am taking the following medications&nbsp;
                </SoftTypography>
          <input
              type="input"
              name="injuryInput11"
              value={values.injuryInput11}
              // onChange={formik.handleChange}
              onChange={(e)=> setFieldValue("injuryInput11", e.target.value)}
              className="therapiCss"
              style={{width:'200px', height:"23px", marginLeft: "20px"}}
            />
        </FormGroup>
      </FormControl>
    </div>
  );
}

InjuriesCheckbox.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default InjuriesCheckbox;
