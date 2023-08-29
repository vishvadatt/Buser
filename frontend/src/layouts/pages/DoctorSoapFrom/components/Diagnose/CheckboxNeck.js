import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function CheckboxNeck({ formik }) {
  const { values, setFieldValue } = formik;
  const data = [{
    label: "Occipitocervical Segmental Dysf. (M99.00)",
    errorMsg: "",
    name: "neckcheck1",
    value: values.neckcheck1,
  },
  {
    label: "Cervical Segmental Dysf. (M99.01)",
    errorMsg: "",
    name: "neckcheck2",
    value: values.neckcheck2,
  }, {
    label: "Cervical Sprain (S13.4XXA)",
    errorMsg: "",
    name: "neckcheck3",
    value: values.neckcheck3,
  },
  {
    label: "Cervical Tom Ligament(s) w/ Laxity (M24.28)",
    errorMsg: "",
    name: "neckcheck4",
    value: values.neckcheck4,
  }, {
    label: "Cervical Motion Segment Hypermobility (M35.7)",
    errorMsg: "",
    name: "neckcheck5",
    value: values.neckcheck5,
  }, {
    label: "Cervical Tendon Injury (M46.03)",
    errorMsg: "",
    name: "neckcheck6",
    value: values.neckcheck6,
  }, {
    label: "Cervical Pain (M54.2)",
    errorMsg: "",
    name: "neckcheck7",
    value: values.neckcheck7,
  }, {
    label: "Cervical Muscle Pain (M79.1)",
    errorMsg: "",
    name: "neckcheck8",
    value: values.neckcheck8,
  }, {
    label: "Loss of Cervical Lordosis (M40.40)",
    errorMsg: "",
    name: "neckcheck9",
    value: values.neckcheck9,
  }, {
    label: "Traumatic Cervical Kyphosis (M40.299)",
    errorMsg: "",
    name: "neckcheck10",
    value: values.neckcheck10,
  }, {
    label: "Acquired Cervical Deformity (M95.3)",
    errorMsg: "",
    name: "neckcheck11",
    value: values.neckcheck11,
  }, {
    label: "Cervical Nerve Root Injury (S14.2XXA)",
    errorMsg: "",
    name: "neckcheck12",
    value: values.neckcheck12,
  }, {
    label: "Cervicobrachial Syndrome (M53.1)",
    errorMsg: "",
    name: "neckcheck13",
    value: values.neckcheck13,
  }, {
    label: "High Cervical Disc Displacement (M50.21)",
    errorMsg: "",
    name: "neckcheck14",
    value: values.neckcheck14,
  }, {
    label: "C4-5 Disc (M50.221)",
    errorMsg: "",
    name: "neckcheck15",
    value: values.neckcheck15,

  },
  {
    label: " C5-6 Disc (MS0.222)",
    errormsg: "",
    name: "neckcheck16",
    value: values.neckcheck16,

  },
  {
    label: "C6-7 Disc (M50.223) ",
    errorMsg: "",
    name: "neckcheck17",
    value: values.neckcheck17,
  },
  {
    label: "C7-T1 Disc (MS0.23)",
    errormsg: "",
    name: "neckcheck18",
    value: values.neckcheck18,
  },
  {
    label: "High Cervical Disc w/ Radiculopathy (M50 11)",
    errorMsg: "",
    name: "neckcheck19",
    value: values.neckcheck19,
  }, {
    label: "C4-5 Disc w/ Rad (M50.121)",
    errorMsg: "",
    name: "neckcheck20",
    value: values.neckcheck20,
  }, {
    label: "C5-6 Disc w/ Radiculopathy (M50.122)",
    errorMsg: "",
    name: "neckcheck21",
    value: values.neckcheck21,
  }, {
    label: "C6-7 Disc w/ Radiculopathy (M50.123)",
    errorMsg: "",
    name: "neckcheck22",
    value: values.neckcheck22,
  }, {
    label: "C7-T1 Disc w/ Radiculopathy (M50.13)",
    errorMsg: "",
    name: "neckcheck23",
    value: values.neckcheck23,
  }, {
    label: "High Cervical Disc Degeneration (M50.31)",
    errorMsg: "",
    name: "neckcheck24",
    value: values.neckcheck24,
  }, {
    label: "C4-5 DJD (M50.321) ",
    errorMsg: "",
    name: "neckcheck25",
    value: values.neckcheck25,
  },
  {
    label: "C5-6 DJD (M50.322)",
    errorMsg: "",
    name: "neckcheck26",
    value: values.neckcheck26,
  },
  {
    label: "C6-7 DJD (M50.323)",
    errorMsg: "",
    name: "neckcheck27",
    value: values.neckcheck27,
  },
  {
    label: "C7-T1 DJD (M50.33)",
    errorMsg: "",
    name: "neckcheck28",
    value: values.neckcheck28,
  }
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
        {data.map((box, index) => {
          return (
            <FormGroup key={index} style={{ display: 'flex', flexDirection: 'row', marginLeft: '10px' }}>
              <FormControlLabel
                style={{ marginRight: 'auto', display: "flex" }}
                label={box.label}
                control={
                  <Checkbox
                    // key={"main" + index}
                    // onChange={(e) => handleCheck(box, index)}
                    // checked={box.value}
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
      </FormControl>
    </div>
  );
}

CheckboxNeck.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default CheckboxNeck;
