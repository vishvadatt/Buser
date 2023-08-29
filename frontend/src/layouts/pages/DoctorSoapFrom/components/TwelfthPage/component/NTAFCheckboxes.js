import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function NTAFCheckboxes({ formData, formik, form, index }) {
  const { formField } = form;
  const { values, handleChange } = formik;

  const {
    sectionNTAFACheck,
    sectionNTAFBCheck,
    sectionNTAFC1Check,
    sectionNTAFC2Check,
    sectionNTAF1Check,
    sectionNTAF2Check,
    sectionNTAF3Check,
    sectionNTAF4Check,
    sectionNTAF5Check,
  } = formField;

  const {
    sectionNTAFACheck: sectionNTAFACheckV,
    sectionNTAFBCheck: sectionNTAFBCheckV,
    sectionNTAFC1Check: sectionNTAFC1CheckV,
    sectionNTAFC2Check: sectionNTAFC2CheckV,

    sectionNTAF1Check: sectionNTAF1CheckV,
    sectionNTAF2Check: sectionNTAF2CheckV,
    sectionNTAF3Check: sectionNTAF3CheckV,
    sectionNTAF4Check: sectionNTAF4CheckV,
    sectionNTAF5Check: sectionNTAF5CheckV,
  } = values;

  const data = [
    {
      label: "Section A: General Brain Function",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section B: Stress",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section C1: Sugar Metabolism (Also check for Hypoglycemia)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section C2: Peripheral Utilization of Sugars (Also check for Insulin Resistance)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 1: Serotonin",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 2: Dopamine",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 3: GABA",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 4: Acetylcholine",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 5: Catecholamine",
      errorMsg: "",
      value: false,
    },
  ];
  const [menuItems, setChecked] = useState(data);
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
    setChecked([...abc]);
  };

  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    setChecked([...abc]);
  };
  // useEffect(() => {}, [menuItems]);

  return (
    <div>
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section A: General Brain Function"
        control={
          <Checkbox
            name={sectionNTAFACheck.name}
            // checked={sectionNTAFACheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAFACheck.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAFACheck.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section B: Stress"
        control={
          <Checkbox
            name={sectionNTAFBCheck.name}
            // checked={sectionNTAFBCheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAFBCheck.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAFBCheck.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex", display: "flex" }}
        label="Section C1: Sugar Metabolism (Also check for Hypoglycemia)"
        control={
          <Checkbox
            name={sectionNTAFC1Check.name}
            // checked={sectionNTAFC1CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAFC1Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAFC1Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex", display: "flex" }}
        label="Section C2: Peripheral Utilization of Sugars (Also check for Insulin Resistance)"
        control={
          <Checkbox
            name={sectionNTAFC2Check.name}
            // checked={sectionNTAFC2CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAFC2Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAFC2Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 1: Serotonin"
        control={
          <Checkbox
            name={sectionNTAF1Check.name}
            // checked={sectionNTAF1CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAF1Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAF1Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 2: Dopamine"
        control={
          <Checkbox
            name={sectionNTAF2Check.name}
            // checked={sectionNTAF2CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAF2Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAF2Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 3: GABA"
        control={
          <Checkbox
            name={sectionNTAF3Check.name}
            // checked={sectionNTAF3CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAF3Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAF3Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 4: Acetylcholine"
        control={
          <Checkbox
            name={sectionNTAF4Check.name}
            // checked={sectionNTAF4CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAF4Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAF4Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 5: Catecholamine"
        control={
          <Checkbox
            name={sectionNTAF5Check.name}
            // checked={sectionNTAF5CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionNTAF5Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionNTAF5Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
    </div>
  );
}
NTAFCheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default NTAFCheckboxes;
