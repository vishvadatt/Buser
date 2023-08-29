import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

function BrainInjury({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      name: "braincheck1",
      label: "90791 Cognitive Consultation ",
      errorMsg: "",
      value: values.braincheck1,
    },
    {
      name: "braincheck2",
      label: "96118 Cognitive Screening",
      errorMsg: "",
      value: values.braincheck2,
    },
    {
      name: "braincheck3",
      label: "90791 Hypersomnolence Consultation ",
      errorMsg: "",
      value: values.braincheck3,
    },
    // {
    //   name: "braincheck4",
    //   label: "97532 Cognitive Training In Office __ min.",
    //   errorMsg: "",
    //   value: values.braincheck4,
    // },
    {
      name: "braincheck5",
      label: " 97039 Attended FDA cleared IR Laser",
      errorMsg: "",
      value: values.braincheck5,
    },
    {
      name: "braincheck6",
      label: "Home Meditation",
      errorMsg: "",
      value: values.braincheck6,
    },
    {
      name: "braincheck7",
      label: "Home Cognitive Rehabilitation Exercises",
      errorMsg: "",
      value: values.braincheck7,
    },
    {
      name: "braincheck8",
      label: "MD Referral",
      errorMsg: "",
      value: values.braincheck8,
    },
    {
      name: "braincheck9",
      label: "Neuropsychologist Referral",
      errorMsg: "",
      value: values.braincheck9,
    },
    {
      name: "braincheck10",
      label: "Counseling",
      errorMsg: "",
      value: values.braincheck10,
    },
    {
      name: "braincheck11",
      label: "Polysomnogram",
      errorMsg: "",
      value: values.braincheck11,
    },
    {
      name: "braincheck12",
      label: "Avoid Stressful Activities",
      errorMsg: "",
      value: values.braincheck12,
    },
    {
      name: "braincheck13",
      label: "Bed Rest",
      errorMsg: "",
      value: values.braincheck13,
    },
    // {
    //   name: "braincheck14",
    //   label: "Other",
    //   errorMsg: "",
    //   value: values.braincheck14,
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
            name="braincheck4"
            checked={values.braincheck4}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("braincheck4", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;97532 Cognitive Training In Office{" "}
            <span>
              <input
                type="input"
                name="braininput4"
                value={values.braininput4}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("braininput4", e.target.value)}
                className="therapiCss"
                style={{ width: "20px", height: "10px" }}
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
            name="braincheck14"
            checked={values.braincheck14}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("braincheck14", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Other{" "}
            <span>
              <input
                type="input"
                name="braininput14"
                value={values.braininput14}
                // onChange={formik.handleChange}
                onChange={(e) => setFieldValue("braininput14", e.target.value)}
                className="therapiCss"
                style={{ width: "111px", height: "23px" }}
              />
            </span>
          </SoftTypography>
        </FormGroup>
      </FormControl>
    </div>
  );
}

BrainInjury.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default BrainInjury;
