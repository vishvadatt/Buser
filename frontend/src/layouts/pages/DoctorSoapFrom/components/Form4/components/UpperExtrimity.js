import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

function UpperExtrimity({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      name: "upextrimitycheck1",
      label: "98943 Chiropractic Manip.",
      errorMsg: "",
      value: values.upextrimitycheck1,
    },
    {
      name: "upextrimitycheck2",
      label: "9WB7XBZ Non-Manual CMT",
      errorMsg: "",
      value: values.upextrimitycheck2,
    },
    {
      name: "upextrimitychec3",
      label: "9WB7XGZ Long Lever CMT ",
      errorMsg: "",
      value: values.upextrimitychec3,
    },
    {
      name: "upextrimitychec4",
      label: "9WB7XHZ Short Lever CMT",
      errorMsg: "",
      value: values.upextrimitychec4,
    },
    {
      name: "upextrimitycheck5",
      label: "9WB7XLZ Other Type CMT ",
      errorMsg: "",
      value: values.upextrimitycheck5,
    },
    // {
    //   name: "upextrimitycheck6",
    //   label: "97124 Massage __ minutes ",
    //   errorMsg: "",
    //   value: values.upextrimitycheck6,
    // },
    // {
    //   name: "upextrimitycheck7",
    //   label: "97035 Ultrasound minutes",
    //   errorMsg: "",
    //   value: values.upextrimitycheck7,
    // },
    {
      name: "upextrimitycheck8",
      label: "97014 Elect.Stirn (unattended)",
      errorMsg: "",
      value: values.upextrimitycheck8,
    },
    {
      name: "upextrimitycheck9",
      label: "97039 Attended FDA IR Laser",
      errorMsg: "",
      value: values.upextrimitycheck9,
    },
    {
      name: "upextrimitycheck10",
      label: "97140 Myofascial Release",
      errorMsg: "",
      value: values.upextrimitycheck10,
    },
    // {
    //   name: "upextrimitycheck11",
    //   label: "97110 Ther.Exer. 1on1 min",
    //   errorMsg: "",
    //   value: values.upextrimitycheck11,
    // },
    // {
    //   name: "upextrimitycheck12",
    //   label: "97150 Ther.Exer.Group _min",
    //   errorMsg: "",
    //   value: values.upextrimitycheck12,
    // },
    {
      name: "upextrimitycheck13",
      label: "Home Exercises ",
      errorMsg: "",
      value: values.upextrimitycheck13,
    },
    {
      name: "upextrimitycheck14",
      label: "Gym",
      errorMsg: "",
      value: values.upextrimitycheck14,
    },
    {
      name: "upextrimitycheck15",
      label: "Home Stabilization ",
      errorMsg: "",
      value: values.upextrimitycheck15,
    },
    {
      name: "upextrimitycheck16",
      label: "Traction",
      errorMsg: "",
      value: values.upextrimitycheck16,
    },
    {
      name: "upextrimitycheck17",
      label: "Home Ice Pack",
      errorMsg: "",
      value: values.upextrimitycheck17,
    },
    {
      name: "upextrimitycheck18",
      label: "Rest",
      errorMsg: "",
      value: values.upextrimitycheck18,
    },
    {
      name: "upextrimitycheck19",
      label: "MD",
      errorMsg: "",
      value: values.upextrimitycheck19,
    },
    {
      name: "upextrimitycheck20",
      label: "Exam",
      errorMsg: "",
      value: values.upextrimitycheck20,
    },
    {
      name: "upextrimitycheck21",
      label: "CT",
      errorMsg: "",
      value: values.upextrimitycheck21,
    },
    {
      name: "upextrimitycheck22",
      label: "MRI",
      errorMsg: "",
      value: values.upextrimitycheck22,
    },
    {
      name: "upextrimitycheck23",
      label: "DMX",
      errorMsg: "",
      value: values.upextrimitycheck23,
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
            name="upextrimitycheck6"
            checked={values.upextrimitycheck6}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("upextrimitycheck6", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97124 Massage{" "}
            <span>
              <input
                type="input"
                name="upextrimityinput6"
                value={values.upextrimityinput6}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("upextrimityinput6", e.target.value)}
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
            name="upextrimitycheck7"
            checked={values.upextrimitycheck7}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("upextrimitycheck7", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97035 Ultrasound{" "}
            <span>
              <input
                type="input"
                name="upextrimityinput7"
                value={values.upextrimityinput7}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("upextrimityinput7", e.target.value)}
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
            name="upextrimitycheck11"
            checked={values.upextrimitycheck11}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("upextrimitycheck11", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97110 Ther.Exer. 1on1
            <span>
              <input
                type="input"
                name="upextrimityinput11"
                value={values.upextrimityinput11}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("upextrimityinput11", e.target.value)}
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
            name="upextrimitycheck12"
            checked={values.upextrimitycheck12}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("upextrimitycheck12", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97150 Ther.Exer.Group
            <span>
              <input
                type="input"
                name="upextrimityinput12"
                value={values.upextrimityinput12}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("upextrimityinput12", e.target.value)}
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

UpperExtrimity.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default UpperExtrimity;
