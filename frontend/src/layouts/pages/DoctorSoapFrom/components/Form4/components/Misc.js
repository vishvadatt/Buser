import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";

function Misc({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      name: "misccheck1",
      label: "Home TENS",
      errorMsg: "",
      value: values.misccheck1,
    },
    {
      name: "misccheck2",
      label: "Natural Pain Relievers",
      errorMsg: "",
      value: values.misccheck2,
    },
    {
      name: "misccheck3",
      label: "Splint for Home Use ",
      errorMsg: "",
      value: values.misccheck3,
    },
    {
      name: "misccheck4",
      label: "Cane/Crutches/Orthotics",
      errorMsg: "",
      value: values.misccheck4,
    },
    {
      name: "misccheck5",
      label: "Order Impairment Rating",
      errorMsg: "",
      value: values.misccheck5,
    },
    {
      name: "misccheck6",
      label: "Natural Anti-lnflammatories",
      errorMsg: "",
      value: values.misccheck6,
    },
    // {
    //   name: "misccheck7",
    //   label: "Order Impairment Rating Re-evaluate in 30 days",
    //   errorMsg: "",
    //   value: values.misccheck7,
    // }
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
      <FormControl>
        <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
          {/* <input className="miscinput1" type="text" />  */}
          <SoftTypography variant="button" varient="h6" fontWeight="regular" color="text">
            <input
              type="input"
              name="miscinputpre1"
              value={values.miscinputpre1}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("miscinputpre1", e.target.value)}
              className="therapiCss"
              style={{ width: "50px", height: "23px" }}
            />
            &nbsp; Office Treatments per &nbsp;
            <input
              type="input"
              name="miscinputpost1"
              value={values.miscinputpost1}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("miscinputpost1", e.target.value)}
              className="therapiCss"
              style={{ width: "50px", height: "23px" }}
            />
          </SoftTypography>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {/* <input className="miscinput1" type="text" />  */}
          <SoftTypography variant="button" varient="h6" fontWeight="regular" color="text">
            <input
              type="input"
              name="miscinputpre2"
              value={values.miscinputpre2}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("miscinputpre2", e.target.value)}
              className="therapiCss"
              style={{ width: "50px", height: "23px" }}
            />
            &nbsp; Home Treatments per &nbsp;
            <input
              type="input"
              name="miscinputpost2"
              value={values.miscinputpost2}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("miscinputpost2", e.target.value)}
              className="therapiCss"
              style={{ width: "50px", height: "23px" }}
            />
          </SoftTypography>
        </div>
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
            name="misccheck7"
            checked={values.misccheck7}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("misccheck7", e.target.checked)}
            className="checkboxwithinput"
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Order Impairment Rating Re-evaluate in{" "}
            <span>
              <input
                type="input"
                name="miscinput7"
                value={values.miscinput7}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("miscinput7", e.target.value)}
                className="therapiCss"
                style={{ width: "20px", height: "23px" }}
              />
            </span>{" "}
            days
          </SoftTypography>
        </FormGroup>
      </FormControl>
    </div>
  );
}

Misc.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Misc;
