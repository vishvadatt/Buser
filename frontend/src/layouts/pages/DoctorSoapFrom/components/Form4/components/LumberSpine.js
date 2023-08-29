import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

function LumberSpine({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      name: "lumbercheck1",
      label: "98940(1 )(2) Chiropractic Manip",
      errorMsg: "",
      value: values.lumbercheck1,
    },
    {
      name: "lumbercheck2",
      label: "9WB3XBZ Non-Manual CMT",
      errorMsg: "",
      value: values.lumbercheck2,
    },
    {
      name: "lumbercheck3",
      label: "9WB3XGZ Long Lever CMT",
      errorMsg: "",
      value: values.lumbercheck3,
    },
    {
      name: "lumbercheck4",
      label: "9WB3XHZ Short Lever CMT",
      errorMsg: "",
      value: values.lumbercheck4,
    },
    {
      name: "lumbercheck5",
      label: " 9WB3XLZ Other Type CMT",
      errorMsg: "",
      value: values.lumbercheck5,
    },
    // {
    //   name: "lumbercheck6",
    //   label: " 97124 Massage __ minutes",
    //   errorMsg: "",
    //   value: values.lumbercheck6,
    // },
    // {
    //   name: "lumbercheck7",
    //   label: "97035 Ultrasound minutes ",
    //   errorMsg: "",
    //   value: values.lumbercheck7,
    // },
    {
      name: "lumbercheck8",
      label: "97014 Elect.Stirn(unattended)",
      errorMsg: "",
      value: values.lumbercheck8,
    },
    {
      name: "lumbercheck9",
      label: "97039 Attended FDA IR Laser",
      errorMsg: "",
      value: values.lumbercheck9,
    },
    {
      name: "lumbercheck10",
      label: " 97140 Myofascial Release ",
      errorMsg: "",
      value: values.lumbercheck10,
    },
    // {
    //   name: "lumbercheck11",
    //   label: "97110 Ther.Exer. 1on1 __ min",
    //   errorMsg: "",
    //   value: values.lumbercheck11,
    // },
    // {
    //   name: "lumbercheck12",
    //   label: "97150 Ther.Exer.Group __ min",
    //   errorMsg: "",
    //   value: values.lumbercheck12,
    // },
    // {
    //   name: "lumbercheck13",
    //   label: "Office Other",
    //   errorMsg: "",
    //   value: values.lumbercheck13,
    // },
    {
      name: "lumbercheck14",
      label: "Home Exercises ",
      errorMsg: "",
      value: values.lumbercheck14,
    },
    {
      name: "lumbercheck15",
      label: "Gym ",
      errorMsg: "",
      value: values.lumbercheck15,
    },
    {
      name: "lumbercheck16",
      label: "Home Stabilization ",
      errorMsg: "",
      value: values.lumbercheck16,
    },
    {
      name: "lumbercheck17",
      label: "Traction ",
      errorMsg: "",
      value: values.lumbercheck17,
    },
    {
      name: "lumbercheck18",
      label: "Home Ice Pack ",
      errorMsg: "",
      value: values.lumbercheck18,
    },
    {
      name: "lumbercheck19",
      label: "Rest ",
      errorMsg: "",
      value: values.lumbercheck19,
    },
    {
      name: "lumbercheck20",
      label: "MD",
      errorMsg: "",
      value: values.lumbercheck20,
    },
    {
      name: "lumbercheck21",
      label: "Exam",
      errorMsg: "",
      value: values.lumbercheck21,
    },
    {
      name: "lumbercheck22",
      label: "CT",
      errorMsg: "",
      value: values.lumbercheck22,
    },
    {
      name: "lumbercheck23",
      label: "MRI",
      errorMsg: "",
      value: values.lumbercheck23,
    },
    {
      name: "lumbercheck24",
      label: "DMX",
      errorMsg: "",
      value: values.cervicalcheck24,
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
            name="lumbercheck6"
            checked={values.lumbercheck6}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lumbercheck6", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97124 Massage{" "}
            <span>
              <input
                type="input"
                name="lumberinput6"
                value={values.lumberinput6}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lumberinput6", e.target.value)}
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
            name="lumbercheck7"
            checked={values.lumbercheck7}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lumbercheck7", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97035 Ultrasound{" "}
            <span>
              <input
                type="input"
                name="lumberinput7"
                value={values.lumberinput7}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lumberinput7", e.target.value)}
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
            name="lumbercheck11"
            checked={values.lumbercheck11}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lumbercheck11", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97110 Ther.Exer. 1on1
            <span>
              <input
                type="input"
                name="lumberinput11"
                value={values.lumberinput11}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lumberinput11", e.target.value)}
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
            name="lumbercheck12"
            checked={values.lumbercheck12}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lumbercheck12", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97150 Ther.Exer.Group
            <span>
              <input
                type="input"
                name="lumberinput12"
                value={values.lumberinput12}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lumberinput12", e.target.value)}
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
            name="lumbercheck13"
            checked={values.lumbercheck13}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("lumbercheck13", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Office Other
            <span>
              <textarea
                type="input"
                name="lumberinput13"
                value={values.lumberinput13}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("lumberinput13", e.target.value)}
                className="therapiCss"
                style={{ width: "100%", height: "50px", resize: "none" }}
              />
            </span>
          </SoftTypography>
        </FormGroup>
      </FormControl>
    </div>
  );
}

LumberSpine.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default LumberSpine;
