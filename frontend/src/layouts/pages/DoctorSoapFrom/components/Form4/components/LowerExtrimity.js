import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

function LowerExtrimity({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      name: "lowxtrimitycheck1",
      label: "98943 Chiropractic Manip.",
      errorMsg: "",
      value: values.lowxtrimitycheck1,
    },
    {
      name: "lowxtrimitycheck2",
      label: "9WB6XBZ Non-Manual CMT",
      errorMsg: "",
      value: values.lowxtrimitycheck2,
    },
    {
      name: "lowxtrimitychec3",
      label: "9WB6XGZ Long Lever CMT",
      errorMsg: "",
      value: values.lowxtrimitychec3,
    },
    {
      name: "lowxtrimitychec4",
      label: "9WB6XHZ Short Lever CMT",
      errorMsg: "",
      value: values.lowxtrimitychec4,
    },
    {
      name: "lowxtrimitycheck5",
      label: "9WB6XLZ Other Type CMT",
      errorMsg: "",
      value: values.lowxtrimitycheck5,
    },
    // {
    //   name: "lowxtrimitycheck6",
    //   label: "97124 Massage __ minutes",
    //   errorMsg: "",
    //   value: values.lowxtrimitycheck6,
    // },
    // {
    //   name: "lowxtrimitycheck7",
    //   label: "97035 Ultrasound minutes",
    //   errorMsg: "",
    //   value: values.lowxtrimitycheck7,
    // },
    {
      name: "lowxtrimitycheck8",
      label: "97014 Elect.Stirn (unattended)",
      errorMsg: "",
      value: values.lowxtrimitycheck8,
    },
    {
      name: "lowxtrimitycheck9",
      label: "97039 Attended FDA IR Laser",
      errorMsg: "",
      value: values.lowxtrimitycheck9,
    },
    {
      name: "lowxtrimitycheck10",
      label: "97140 Myofascial Release",
      errorMsg: "",
      value: values.lowxtrimitycheck10,
    },
    // {
    //   name: "lowxtrimitycheck11",
    //   label: "97110 Ther.Exer. 1on1 min ",
    //   errorMsg: "",
    //   value: values.lowxtrimitycheck11,
    // },
    // {
    //   name: "lowxtrimitycheck12",
    //   label: "97150 Ther.Exer.Group _min",
    //   errorMsg: "",
    //   value: values.lowxtrimitycheck12,
    // },
    {
      name: "lowxtrimitycheck13",
      label: "Home Exercises ",
      errorMsg: "",
      value: values.lowxtrimitycheck13,
    },
    {
      name: "lowxtrimitycheck14",
      label: "Gym",
      errorMsg: "",
      value: values.lowxtrimitycheck14,
    },
    {
      name: "lowxtrimitycheck15",
      label: "Home Stabilization ",
      errorMsg: "",
      value: values.lowxtrimitycheck15,
    },
    {
      name: "lowxtrimitycheck16",
      label: "Traction",
      errorMsg: "",
      value: values.lowxtrimitycheck16,
    },
    {
      name: "lowxtrimitycheck17",
      label: "Home Ice Pack",
      errorMsg: "",
      value: values.lowxtrimitycheck17,
    },
    {
      name: "lowxtrimitycheck18",
      label: "Rest",
      errorMsg: "",
      value: values.lowxtrimitycheck18,
    },
    {
      name: "lowxtrimitycheck19",
      label: "MD",
      errorMsg: "",
      value: values.lowxtrimitycheck19,
    },
    {
      name: "lowxtrimitycheck20",
      label: "Exam",
      errorMsg: "",
      value: values.lowxtrimitycheck20,
    },
    {
      name: "lowxtrimitycheck21",
      label: "CT",
      errorMsg: "",
      value: values.lowxtrimitycheck21,
    },
    {
      name: "lowxtrimitycheck22",
      label: "MRI",
      errorMsg: "",
      value: values.lowxtrimitycheck22,
    },
    {
      name: "lowxtrimitycheck23",
      label: "DMX",
      errorMsg: "",
      value: values.lowxtrimitycheck23,
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

  console.log("09090909090", menuItems);
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
                    name={box.name}
                    key={"main" + index}
                    onChange={(e) => setFieldValue(box.name, e.target.checked)}
                    checked={box.value}
                  />
                }
              />
              {box.options ? (
                box.options.map(({ value, label }, ind) => {
                  return (
                    <FormControlLabel
                      style={{ marginLeft: "10px" }}
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

        <FormGroup
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "5px",
            flexWrap: "nowrap",
            marginBottom: "10px",
          }}
        >
          <Checkbox
            name="lowxtrimitycheck6"
            checked={values.lowxtrimitycheck6}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lowxtrimitycheck6", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97124 Massage{" "}
            <span>
              <input
                type="input"
                name="lowxtrimityinput6"
                value={values.lowxtrimityinput6}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lowxtrimityinput6", e.target.value)}
                className="therapiCss"
                style={{ width: "50px", height: "23px" }}
              />
            </span>{" "}
            minutes&nbsp;
          </SoftTypography>
        </FormGroup>

        <FormGroup
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "5px",
            flexWrap: "nowrap",
            marginBottom: "10px",
          }}
        >
          <Checkbox
            name="lowxtrimitycheck7"
            checked={values.lowxtrimitycheck7}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lowxtrimitycheck7", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97035 Ultrasound{" "}
            <span>
              <input
                type="input"
                name="lowxtrimityinput7"
                value={values.lowxtrimityinput7}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lowxtrimityinput7", e.target.value)}
                className="therapiCss"
                style={{ width: "50px", height: "23px" }}
              />
            </span>{" "}
            minutes&nbsp;
          </SoftTypography>
        </FormGroup>

        <FormGroup
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "5px",
            flexWrap: "nowrap",
            marginBottom: "10px",
          }}
        >
          <Checkbox
            name="lowxtrimitycheck11"
            checked={values.lowxtrimitycheck11}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lowxtrimitycheck11", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97110 Ther.Exer. 1on1
            <span>
              <input
                type="input"
                name="lowxtrimityinput11"
                value={values.lowxtrimityinput11}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lowxtrimityinput11", e.target.value)}
                className="therapiCss"
                style={{ width: "50px", height: "23px" }}
              />
            </span>{" "}
            min&nbsp;
          </SoftTypography>
        </FormGroup>

        <FormGroup
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "5px",
            flexWrap: "nowrap",
            marginBottom: "10px",
          }}
        >
          <Checkbox
            name="lowxtrimitycheck12"
            checked={values.lowxtrimitycheck12}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lowxtrimitycheck12", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97150 Ther.Exer.Group
            <span>
              <input
                type="input"
                name="lowxtrimityinput12"
                value={values.lowxtrimityinput12}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lowxtrimityinput12", e.target.value)}
                className="therapiCss"
                style={{ width: "50px", height: "23px" }}
              />
            </span>{" "}
            min&nbsp;
          </SoftTypography>
        </FormGroup>
      </FormControl>
    </div>
  );
}

LowerExtrimity.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default LowerExtrimity;
