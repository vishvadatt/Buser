import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

function Pelvis({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      name: "pelvischeck1",
      label: "98940(1)(2) Chiropractic Manip.",
      errorMsg: "",
      value: values.pelvischeck1,
    },
    {
      name: "pelvischeck2",
      label: "9WB5XBZ Non-Manual CMT",
      errorMsg: "",
      value: values.pelvischeck2,
    },
    {
      name: "pelvischec3",
      label: "9WB5XGZ Long Lever CMT",
      errorMsg: "",
      value: values.pelvischec3,
    },
    {
      name: "pelvischec4",
      label: "9WB5XHZ Short Lever CMT",
      errorMsg: "",
      value: values.pelvischec4,
    },
    {
      name: "pelvischeck5",
      label: "9WB5XLZ Other Type CMT",
      errorMsg: "",
      value: values.pelvischeck5,
    },
    // {
    //   name: "pelvischeck6",
    //   label: "97124 Massage __ minutes",
    //   errorMsg: "",
    //   value: values.pelvischeck6,
    // },
    // {
    //   name: "pelvischeck7",
    //   label: "97035  Ultrasound minutes",
    //   errorMsg: "",
    //   value: values.pelvischeck7,
    // },
    {
      name: "pelvischeck8",
      label: "97014  Elect.Stirn (unattended)",
      errorMsg: "",
      value: values.pelvischeck8,
    },
    {
      name: "pelvischeck9",
      label: "97039  Attended FDA IR Laser",
      errorMsg: "",
      value: values.pelvischeck9,
    },
    {
      name: "pelvischeck10",
      label: "97140 Myofascial Release",
      errorMsg: "",
      value: values.pelvischeck10,
    },
    // {
    //   name: "pelvischeck11",
    //   label: "97110 Ther.Exer. 1on1 min ",
    //   errorMsg: "",
    //   value: values.pelvischeck11,
    // },
    // {
    //   name: "pelvischeck12",
    //   label: "97150 Ther.Exer.Group _min",
    //   errorMsg: "",
    //   value: values.pelvischeck12,
    // },
    {
      name: "pelvischeck13",
      label: "Home Exercises ",
      errorMsg: "",
      value: values.pelvischeck13,
    },
    {
      name: "pelvischeck14",
      label: "Gym",
      errorMsg: "",
      value: values.pelvischeck14,
    },
    {
      name: "pelvischeck15",
      label: "Home Stabilization ",
      errorMsg: "",
      value: values.pelvischeck15,
    },
    {
      name: "pelvischeck16",
      label: "Traction",
      errorMsg: "",
      value: values.pelvischeck16,
    },
    {
      name: "pelvischeck17",
      label: "Home Ice Pack",
      errorMsg: "",
      value: values.pelvischeck17,
    },
    {
      name: "pelvischeck18",
      label: "Rest",
      errorMsg: "",
      value: values.pelvischeck18,
    },
    {
      name: "pelvischeck19",
      label: "MD",
      errorMsg: "",
      value: values.pelvischeck19,
    },
    {
      name: "pelvischeck20",
      label: "Exam",
      errorMsg: "",
      value: values.pelvischeck20,
    },
    {
      name: "pelvischeck21",
      label: "CT",
      errorMsg: "",
      value: values.pelvischeck21,
    },
    {
      name: "pelvischeck22",
      label: "MRI",
      errorMsg: "",
      value: values.pelvischeck22,
    },
    {
      name: "pelvischeck23",
      label: "DMX",
      errorMsg: "",
      value: values.pelvischeck23,
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
            name="pelvischeck6"
            checked={values.pelvischeck6}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("pelvischeck6", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97124 Massage{" "}
            <span>
              <input
                type="input"
                name="pelvisinput6"
                value={values.pelvisinput6}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("pelvisinput6", e.target.value)}
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
            name="pelvischeck7"
            checked={values.pelvischeck7}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("pelvischeck7", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97035 Ultrasound{" "}
            <span>
              <input
                type="input"
                name="pelvisinput7"
                value={values.pelvisinput7}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("pelvisinput7", e.target.value)}
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
            name="pelvischeck11"
            checked={values.pelvischeck11}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("pelvischeck11", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97110 Ther.Exer. 1on1
            <span>
              <input
                type="input"
                name="pelvisinput11"
                value={values.pelvisinput11}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("pelvisinput11", e.target.value)}
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
            name="pelvischeck12"
            checked={values.pelvischeck12}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("pelvischeck12", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97150 Ther.Exer.Group
            <span>
              <input
                type="input"
                name="pelvisinput12"
                value={values.pelvisinput12}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("pelvisinput12", e.target.value)}
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

Pelvis.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Pelvis;
