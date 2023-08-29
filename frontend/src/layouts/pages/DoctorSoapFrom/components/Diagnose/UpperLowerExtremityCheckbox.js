import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import "./style.css";

function UpperLowerExtremityCheckbox({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      label: "Upper Extremity (M99.07) ",
      errorMsg: "",
      name: "Upper_Extremity",
      value: values.Upper_Extremity,
    },
    {
      label: "A/C Joint (M99.07) ",
      errorMsg: "",
      name: "Ac_joint",
      value: values.Ac_joint,
    },
    {
      label: "Lower Extremity (M99.06)",
      errorMsg: "",
      name: "lower_extermity",
      value: values.lower_extermity,
    },
    {
      label: " Hip (M99.05) ",
      errorMsg: "",
      name: "Hip_M99",
      value: values.Hip_M99,
    },
  ];

  const data2 = [
    {
      label: "Right Shoulder (S43.401 A)",
      errorMsg: "",
      name: "Right_Shoulder",
      value: values.Right_Shoulder,
    },
    {
      label: "Left (S43.402A)",
      errorMsg: "",
      name: "Left_Shoulder",
      value: values.Left_Shoulder,
    },
    {
      label: "Right Elbow (S53.401A)",
      errorMsg: "",
      name: "Right_Elbow",
      value: values.Right_Elbow,
    },
    {
      label: "Left (S53.402A) ",
      errorMsg: "",
      name: "Left_Elbow",
      value: values.Left_Elbow,
    },
    {
      label: " Right Wrist (S63.501A) ",
      errorMsg: "",
      name: "Right_Wrist",
      value: values.Right_Wrist,
    },
    {
      label: "Left (S63.502A)",
      errorMsg: "",
      name: "Left_Wrist",
      value: values.Left_Wrist,
    },
    {
      label: "Right Hip (S73.101A) ",
      errorMsg: "",
      name: "Right_Hip",
      value: values.Right_Hip,
    },
    {
      label: "Left (S73.102A)",
      errorMsg: "",
      name: "Left_Hip",
      value: values.Left_Hip,
    },
    {
      label: " Right Knee (S83.91XA)",
      errorMsg: "",
      name: "Right_Knee",
      value: values.Right_Knee,
    },
    {
      label: "Left (S83.92XA)",
      errorMsg: "",
      name: "Left_Knee",
      value: values.Left_Knee,
    },
    {
      label: "Right Ankle (S93.401 A)",
      errorMsg: "",
      name: "Right_Ankle",
      value: values.Right_Ankle,
    },
    {
      label: "Left (S93.402A) ",
      errorMsg: "",
      name: "Left_Ankle",
      value: values.Left_Ankle,
    },
    {
      label: " Right Foot (S93.601A) ",
      errorMsg: "",
      name: "Right_Foot",
      value: values.Right_Foot,
    },
    {
      label: " Left (S93.602A) ",
      errorMsg: "",
      name: "Left_Foot",
      value: values.Left_Foot,
    },
    {
      label: "Right Great Toe (S93.501A) ",
      errorMsg: "",
      name: "Right_Great_Toe",
      value: values.Right_Great_Toe,
    },
    {
      label: "Left (S93.502A)",
      errorMsg: "",
      name: "Left_Great_Toe",
      value: values.Left_Great_Toe,
    },
  ];

  const data3 = [
    {
      label: "Right Thumb (S63.601A)",
      errorMsg: "",
      name: "Right_Thumb",
      value: values.Right_Thumb,
    },
    {
      label: " Left (S63.601A)",
      errorMsg: "",
      name: "Left_Thumb",
      value: values.Left_Thumb,
    },
    {
      label: "Right Index (S63.610A) ",
      errorMsg: "",
      name: "Right_Index",
      value: values.Right_Index,
    },
    {
      label: "Left (S63.611A) ",
      errorMsg: "",
      name: "Left_Index",
      value: values.Left_Index,
    },
    {
      label: " Right Middle (S63.612A)",
      errorMsg: "",
      name: "Right_Middle",
      value: values.Right_Middle,
    },
    {
      label: "Left (S63.613A)",
      errorMsg: "",
      name: "Left_Middle",
      value: values.Left_Middle,
    },
    {
      label: "Right Ring (S63.614A) ",
      errorMsg: "",
      name: "Right_Ring",
      value: values.Right_Ring,
    },
    {
      label: "Left (S63.615A)",
      errorMsg: "",
      name: "Left_Ring",
      value: values.Left_Ring,
    },
    {
      label: "Right Little (S63.616A)",
      errorMsg: "",
      name: "Right_Little",
      value: values.Right_Little,
    },
    {
      label: "Left (S63.617A)",
      errorMsg: "",
      name: "Left_Little",
      value: values.Left_Little,
    },
  ];

  const handleCheck = (box) => {
    const isChecked = !values[box.name]; // Toggle the value
    const regex = /\(([^)]+)\)/;
    const matches = regex.exec(box.label);
    const diagnosisCode = matches ? matches[1] : "";
    const diagnosisName = box.label.replace(regex, "").trim();
    const data = { name: isChecked, diagnosisCode, diagnosisName };

    setFieldValue(box.name, data);

    // Remove key-value pair if isChecked is false
    if (!isChecked) {
      const newValues = { ...values };
      delete newValues[box.name];
      formik.setValues(newValues);
    }
  };
  return (
    <div>
      <FormControl>
        <div>
          <SoftTypography
            component="label"
            variant="h6"
            fontWeight="bold"
            textTransform="capitalize"
            className="subdiagnosis"
          >
            Chiropractic Segm. Dysfunctions
          </SoftTypography>
          {data.map((box, index) => {

            return (
              <FormGroup
                key={index}
                style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}
              >
                <FormControlLabel
                  style={{ marginRight: "auto" }}
                  label={box.label}
                  control={
                    <Checkbox
                      // key={"main" + index}
                      // onChange={(e) => handleCheck(box, index)}
                      // checked={menuItems[index].value}
                      name={box.name}
                      key={"main" + index}
                      onChange={() => handleCheck(box)}
                      checked={values[box.name]?.name || false}
                    />
                  }
                />
              </FormGroup>
            );
          })}
        </div>

        <div>
          <SoftTypography
            component="label"
            variant="h6"
            fontWeight="bold"
            textTransform="capitalize"
            className="subdiagnosis"
          >
            Sprains
          </SoftTypography>
          {data2.map((box, index) => {

            return (
              <FormGroup
                key={index}
                style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}
              >
                <FormControlLabel
                  style={{ marginRight: "auto" }}
                  label={box.label}
                  control={
                    <Checkbox
                      // key={"main" + index}
                      // onChange={(e) => handleCheck(box, index)}
                      // checked={menuItems[index].value}
                      name={box.name}
                      key={"main" + index}
                      onChange={() => handleCheck(box)}
                      checked={values[box.name]?.name || false}
                    />
                  }
                />
              </FormGroup>
            );
          })}
        </div>

        <div>
          <SoftTypography
            component="label"
            variant="h6"
            fontWeight="bold"
            textTransform="capitalize"
            className="subdiagnosis"
          >
            Finger Joint Sprains
          </SoftTypography>
          {data3.map((box, index) => {

            return (
              <FormGroup
                key={index}
                style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}
              >
                <FormControlLabel
                  style={{ marginRight: "auto" }}
                  label={box.label}
                  control={
                    <Checkbox
                      // key={"main" + index}
                      // onChange={(e) => handleCheck(box, index)}
                      // checked={menuItems[index].value}
                      name={box.name}
                      key={"main" + index}
                      onChange={() => handleCheck(box)}
                      checked={values[box.name]?.name || false}
                    />
                  }
                />
              </FormGroup>
            );
          })}
        </div>
      </FormControl>
    </div>
  );
}

UpperLowerExtremityCheckbox.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default React.memo(UpperLowerExtremityCheckbox);
