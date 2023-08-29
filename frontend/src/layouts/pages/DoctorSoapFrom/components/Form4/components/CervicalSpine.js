import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import "../style.css";

function CervicalSpine({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      name: "cervicalcheck1",
      label: "98940(1 )(2) Chiropractic Manip.",
      errorMsg: "",
      value: values.cervicalcheck1,
    },
    {
      name: "cervicalcheck2",
      label: " 9WB 1XBZ Non-Manual CMT",
      errorMsg: "",
      value: values.cervicalcheck2,
    },
    {
      name: "cervicalcheck3",
      label: "9WB 1XGZ Long Lever CMT",
      errorMsg: "",
      value: values.cervicalcheck3,
    },
    {
      name: "cervicalcheck4",
      label: "9WB 1XHZ Short Lever CMT",
      errorMsg: "",
      value: values.cervicalcheck4,
    },
    {
      name: "cervicalcheck5",
      label: "9WB 1XLZ Other Type CMT",
      errorMsg: "",
      value: values.cervicalcheck5,
    },
    // {
    //   name: "cervicalcheck6",
    //   label: "97124 Massage inputtext minutes",
    //   errorMsg: "",
    //   value: values.cervicalcheck6,
    // },
    // {
    //   name: "cervicalcheck7",
    //   label: "97035 Ultrasound minutes ",
    //   errorMsg: "",
    //   value: values.cervicalcheck7,
    // },
    {
      name: "cervicalcheck8",
      label: "97014 Elect.Stirn (unattended)",
      errorMsg: "",
      value: values.cervicalcheck8,
    },
    {
      name: "cervicalcheck9",
      label: " 97039 Attended FDA IR Laser ",
      errorMsg: "",
      value: values.cervicalcheck9,
    },
    {
      name: "cervicalcheck10",
      label: "97140 Myofascial Release",
      errorMsg: "",
      value: values.cervicalcheck10,
    },
    // {
    //   name: "cervicalcheck11",
    //   label: "97110 Ther.Exer. 1on1 min",
    //   errorMsg: "",
    //   value: values.cervicalcheck11,
    // },
    // {
    //   name: "cervicalcheck12",
    //   label: "97150 Ther.Exer.Group _min",
    //   errorMsg: "",
    //   value: values.cervicalcheck12,
    // },
    // {
    //   name: "cervicalcheck13",
    //   label: "Office Other ",
    //   errorMsg: "",
    //   value: values.cervicalcheck13,
    // },
    {
      name: "cervicalcheck14",
      label: " Home Exercises",
      errorMsg: "",
      value: values.cervicalcheck14,
    },
    {
      name: "cervicalcheck15",
      label: "Gym ",
      errorMsg: "",
      value: values.cervicalcheck15,
    },
    {
      name: "cervicalcheck16",
      label: "Home Stabilization ",
      errorMsg: "",
      value: values.cervicalcheck16,
    },
    {
      name: "cervicalcheck17",
      label: "Traction",
      errorMsg: "",
      value: values.cervicalcheck17,
    },
    {
      name: "cervicalcheck18",
      label: "Home Ice Pack",
      errorMsg: "",
      value: values.cervicalcheck18,
    },
    {
      name: "cervicalcheck19",
      label: "Rest ",
      errorMsg: "",
      value: values.cervicalcheck19,
    },
    {
      name: "cervicalcheck20",
      label: " MD",
      errorMsg: "",
      value: values.cervicalcheck20,
    },
    {
      name: "cervicalcheck21",
      label: "Exam",
      errorMsg: "",
      value: values.cervicalcheck21,
    },
    {
      name: "cervicalcheck22",
      label: "CT",
      errorMsg: "",
      value: values.cervicalcheck22,
    },
    {
      name: "cervicalcheck23",
      label: "MRI",
      errorMsg: "",
      value: values.cervicalcheck23,
    },
    {
      name: "cervicalcheck24",
      label: "DMX",
      errorMsg: "",
      value: values.cervicalcheck24,
    },
  ];

  const [menuItems, setChecked] = useState(data);
  // const handleCheck = (box, index) => {
  //   let abc = menuItems;
  //   abc[index].value = !box.value;
  //   console.log(abc[index].options);
  //   console.log(box.value);

  //   if (abc[index].options && !box.value) {
  //     abc[index].options = abc[index].options.map((item) => {
  //       item.value = false;
  //       console.log(abc[index].options && box.value);
  //       return item;
  //     });
  //   }
  //   // console.log(abc)
  //   // const { value } = event.target;
  //   // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
  //   setChecked([...abc]);
  // };

  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    // console.log(abc)
    // const { value } = event.target;
    // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
    setChecked([...abc]);
  };
  // useEffect(() => {}, [menuItems]);

  // console.log("09090909090", menuItems);
  console.log("-----valuees---------", values);

  return (
    <div>
      <FormControl>
        {data.map((box, index) => {
          // console.log("boxxxxx1111", box.label);
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
                      style={{ marginLeft: "10px", display: "flex" }}
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
            marginBottom: "10px",
            flexWrap: "nowrap",
          }}
        >
          <Checkbox
            name="cervicalcheck6"
            checked={values.cervicalcheck6}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("cervicalcheck6", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97124 Massage{" "}
            <span>
              <input
                type="input"
                name="cervicalinput6"
                value={values.cervicalinput6}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("cervicalinput6", e.target.value)}
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
            marginBottom: "10px",
            flexWrap: "nowrap",
          }}
        >
          <Checkbox
            name="cervicalcheck7"
            checked={values.cervicalcheck7}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("cervicalcheck7", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97035 Ultrasound{" "}
            <span>
              <input
                type="input"
                name="cervicalinput7"
                value={values.cervicalinput7}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("cervicalinput7", e.target.value)}
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
            marginBottom: "10px",
            flexWrap: "nowrap",
          }}
        >
          <Checkbox
            name="cervicalcheck11"
            checked={values.cervicalcheck11}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("cervicalcheck11", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97110 Ther.Exer. 1on1
            <span>
              <input
                type="input"
                name="cervicalinput11"
                value={values.cervicalinput11}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("cervicalinput11", e.target.value)}
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
            marginBottom: "10px",
            flexWrap: "nowrap",
          }}
        >
          <Checkbox
            name="cervicalcheck12"
            checked={values.cervicalcheck12}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("cervicalcheck12", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97150 Ther.Exer.Group
            <span>
              <input
                type="input"
                name="cervicalinput12"
                value={values.cervicalinput12}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("cervicalinput12", e.target.value)}
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
            marginBottom: "10px",
          }}
        >
          <Checkbox
            name="cervicalcheck13"
            checked={values.cervicalcheck13}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("cervicalcheck13", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Office Other
            <span>
              <textarea
                type="input"
                name="cervicalinput13"
                value={values.cervicalinput13}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("cervicalinput13", e.target.value)}
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

CervicalSpine.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default CervicalSpine;
