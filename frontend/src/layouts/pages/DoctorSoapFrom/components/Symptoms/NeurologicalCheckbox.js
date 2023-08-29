import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup, Box } from "@mui/material";
import PropTypes from "prop-types";

function NeurologicalCheckbox({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      label: "Numb/Tingling Arm / Hand",
      errorMsg: "",
      value: values.neurocheck1,
      name: "neurocheck1",
      options: [
        { name: "neuroleftcheck1", value: values.neuroleftcheck1, label: "L" },
        { name: "neurorightcheck1", value: values.neurorightcheck1, label: "R" },
      ],
    },
    {
      label: "Numb/Tingling Leg / Foot",
      errorMsg: "",
      value: values.neurocheck2,
      name: "neurocheck2",
      options: [
        { name: "neuroleftcheck2", value: values.neuroleftcheck2, label: "L" },
        { name: "neurorightcheck2", value: values.neurorightcheck2, label: "R" },
      ],
    },
    {
      label: "Weakness Arm Hand",
      errorMsg: "",
      value: values.neurocheck3,
      name: "neurocheck3",
      options: [
        { name: "neuroleftcheck3", value: values.neuroleftcheck3, label: "L" },
        { name: "neurorightcheck3", value: values.neurorightcheck3, label: "R" },
      ],
    },
    {
      label: "Weakness Leg / Foot",
      errorMsg: "",
      value: values.neurocheck4,
      name: "neurocheck4",
      options: [
        { name: "neuroleftcheck4", value: values.neuroleftcheck4, label: "L" },
        { name: "neurorightcheck4", value: values.neurorightcheck4, label: "R" },
      ],
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

  return (
    <div>
      <FormControl style={{ width: "100%" }}>
        {data.map((box, index) => {
          // console.log(index);

          return (
            <FormGroup
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: "10px",
              }}
            >
              {/* <Box container> */}
              <Box>
                <FormControlLabel
                  style={{ marginRight: "auto" }}
                  label={box.label}
                  control={
                    <Checkbox
                      // key={"main" + index}
                      // onChange={(e) => handleCheck(box, index, e)}
                      // checked={menuItems[index].value}
                      name={box.name}
                      key={"main" + index}
                      onChange={(e) => setFieldValue(box.name, e.target.checked)}
                      checked={box.value}
                    />
                  }
                />
              </Box>
              <Box style={{ display: "flex" }}>
                {box.options ? (
                  box.options.map((value, ind) => {
                    // {console.log("vallll", value)}
                    return (
                      <FormControlLabel
                        style={{ marginLeft: "10px" }}
                        key={"option" + index}
                        label={value.label}
                        control={
                          <Checkbox
                            // key={"option" + ind}
                            // disabled={!box.value}
                            // onChange={(e) => innerBoxHandler(index, ind, e)}
                            // checked={box.options[ind].value}
                            name={box.options[ind].name}
                            disabled={!box.value}
                            key={"main" + index}
                            onChange={(e) => setFieldValue(box.options[ind].name, e.target.checked)}
                            checked={box.options[ind].value}
                          />
                        }
                      />
                    );
                  })
                ) : (
                  <></>
                )}
              </Box>
              {/* </Box> */}
            </FormGroup>
          );
        })}
      </FormControl>
    </div>
  );
}

NeurologicalCheckbox.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default NeurologicalCheckbox;
