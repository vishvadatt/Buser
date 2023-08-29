import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

function ThorasicSpine({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      name: "thorasiccheck1",
      label: "98940(1 )(2) Chiropractic Manip",
      errorMsg: "",
      value: values.thorasiccheck1,
    },
    {
      name: "thorasiccheck2",
      label: "9WB2XBZ Non-Manual CMT",
      errorMsg: "",
      value: values.thorasiccheck2,
    },
    {
      name: "thorasiccheck3",
      label: "9WB2XGZ Long Lever CMT",
      errorMsg: "",
      value: values.thorasiccheck3,
    },
    {
      name: "thorasiccheck4",
      label: "9WB2XHZ Short Lever CMT",
      errorMsg: "",
      value: values.thorasiccheck4,
    },
    {
      name: "thorasiccheck5",
      label: " 9WB2XLZ Other Type CMT",
      errorMsg: "",
      value: values.thorasiccheck5,
    },
    // {
    //   name: "thorasiccheck6",
    //   label: " 97124 Massage __ minutes",
    //   errorMsg: "",
    //   value: values.thorasiccheck6,
    // },
    // {
    //   name: "thorasiccheck7",
    //   label: "97035 Ultrasound minutes ",
    //   errorMsg: "",
    //   value: values.thorasiccheck7,
    // },
    {
      name: "thorasiccheck8",
      label: "97014 Elect.Stirn (unattended)",
      errorMsg: "",
      value: values.thorasiccheck8,
    },
    {
      name: "thorasiccheck9",
      label: "97039 Attended FDA IR Laser",
      errorMsg: "",
      value: values.thorasiccheck9,
    },
    {
      name: "thorasiccheck10",
      label: " 97140 Myofascial Release ",
      errorMsg: "",
      value: values.thorasiccheck10,
    },
    // {
    //   name: "thorasiccheck11",
    //   label: "97110 Ther.Exer. 1on1 __ min",
    //   errorMsg: "",
    //   value: values.thorasiccheck11,
    // },
    // {
    //   name: "thorasiccheck12",
    //   label: "97150 Ther.Exer.Group __ min",
    //   errorMsg: "",
    //   value: values.thorasiccheck12,
    // },
    // {
    //   name: "thorasiccheck13",
    //   label: "Office Other",
    //   errorMsg: "",
    //   value: values.thorasiccheck13,
    // },
    {
      name: "thorasiccheck14",
      label: "Home Exercises ",
      errorMsg: "",
      value: values.thorasiccheck14,
    },
    {
      name: "thorasiccheck15",
      label: "Gym ",
      errorMsg: "",
      value: values.thorasiccheck15,
    },
    {
      name: "thorasiccheck16",
      label: "Home Stabilization ",
      errorMsg: "",
      value: values.thorasiccheck16,
    },
    {
      name: "thorasiccheck17",
      label: "Traction ",
      errorMsg: "",
      value: values.thorasiccheck17,
    },
    {
      name: "thorasiccheck18",
      label: "Home Ice Pack ",
      errorMsg: "",
      value: values.thorasiccheck18,
    },
    {
      name: "thorasiccheck19",
      label: "Rest ",
      errorMsg: "",
      value: values.thorasiccheck19,
    },
    {
      name: "thorasiccheck20",
      label: "MD",
      errorMsg: "",
      value: values.thorasiccheck20,
    },
    {
      name: "thorasiccheck21",
      label: "Exam",
      errorMsg: "",
      value: values.thorasiccheck21,
    },
    {
      name: "thorasiccheck22",
      label: "CT",
      errorMsg: "",
      value: values.thorasiccheck22,
    },
    {
      name: "thorasiccheck23",
      label: "MRI",
      errorMsg: "",
      value: values.thorasiccheck23,
    },
    {
      name: "lumbercheck25",
      label: "DMX",
      errorMsg: "",
      value: values.lumbercheck25,
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
            name="thorasiccheck6"
            checked={values.thorasiccheck6}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("thorasiccheck6", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97124 Massage{" "}
            <span>
              <input
                type="input"
                name="thorasicinput6"
                value={values.thorasicinput6}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("thorasicinput6", e.target.value)}
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
            name="thorasiccheck7"
            checked={values.thorasiccheck7}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("thorasiccheck7", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97035 Ultrasound{" "}
            <span>
              <input
                type="input"
                name="thorasicinput7"
                value={values.thorasicinput7}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("thorasicinput7", e.target.value)}
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
            name="thorasiccheck11"
            checked={values.thorasiccheck11}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("thorasiccheck11", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97110 Ther.Exer. 1on1
            <span>
              <input
                type="input"
                name="thorasicinput11"
                value={values.thorasicinput11}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("thorasicinput11", e.target.value)}
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
            name="thorasiccheck12"
            checked={values.thorasiccheck12}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("thorasiccheck12", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97150 Ther.Exer.Group
            <span>
              <input
                type="input"
                name="thorasicinput12"
                value={values.thorasicinput12}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("thorasicinput12", e.target.value)}
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
            name="thorasiccheck13"
            checked={values.thorasiccheck13}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("thorasiccheck13", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Office Other
            <span>
              <textarea
                type="textarea"
                name="thorasicinput13"
                value={values.thorasicinput13}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("thorasicinput13", e.target.value)}
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

ThorasicSpine.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default ThorasicSpine;
