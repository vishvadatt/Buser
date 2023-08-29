import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function BHNAFCheckboxes({ formData, formik, form, index }) {
  const { formField } = form;
  const { values, handleChange } = formik;

  const {
    sectionBHNAF1Check,
    sectionBHNAF2Check,
    sectionBHNAF3Check,
    sectionBHNAF4Check,
    sectionBHNAF5Check,
    sectionBHNAF6Check,
    sectionBHNAF7Check,
    sectionBHNAF8Check,
    sectionBHNAF9Check,
    sectionBHNAF10Check,
    sectionBHNAF11Check,
    sectionBHNAF12Check,
    sectionBHNAF13Check,
    sectionBHNAF14Check,
  } = formField;

  const {
    sectionBHNAF1Check: sectionBHNAF1CheckV,
    sectionBHNAF2Check: sectionBHNAF2CheckV,
    sectionBHNAF3Check: sectionBHNAF3CheckV,
    sectionBHNAF4Check: sectionBHNAF4CheckV,
    sectionBHNAF5Check: sectionBHNAF5CheckV,
    sectionBHNAF6Check: sectionBHNAF6CheckV,
    sectionBHNAF7Check: sectionBHNAF7CheckV,
    sectionBHNAF8Check: sectionBHNAF8CheckV,
    sectionBHNAF9Check: sectionBHNAF9CheckV,
    sectionBHNAF10Check: sectionBHNAF10CheckV,
    sectionBHNAF11Check: sectionBHNAF11CheckV,
    sectionBHNAF12Check: sectionBHNAF12CheckV,
    sectionBHNAF13Check: sectionBHNAF13CheckV,
    sectionBHNAF14Check: sectionBHNAF14CheckV,
  } = values;

  const data = [
    {
      label: "Section 1: Brain Circulation",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 2: Sugar Metabolism",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 3: Peripheral Utilization of Sugars",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 4: Stress and the Brain",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 5: Essential Fatty Acids",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 6: Brain-Gut Axis",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 7: Brain-Immune Axis",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 8: Gluten Digestion",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 9: Intestinal Barrier",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 10: Serotonin",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 11: Dopamine",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 12: Acetylcholine",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 13: Catecholamines",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 14: GABA",
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
        label="Section 1: Brain Circulation"
        control={
          <Checkbox
            name={sectionBHNAF1Check.name}
            // checked={sectionBHNAF1CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF1Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF1Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 2: Sugar Metabolism"
        control={
          <Checkbox
            name={sectionBHNAF2Check.name}
            // checked={sectionBHNAF2CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF2Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF2Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 3: Peripheral Utilization of Sugars"
        control={
          <Checkbox
            name={sectionBHNAF3Check.name}
            // checked={sectionBHNAF3CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF3Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF3Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 4: Stress and the Brain"
        control={
          <Checkbox
            name={sectionBHNAF4Check.name}
            // checked={sectionBHNAF4CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF4Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF4Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 5: Essential Fatty Acids"
        control={
          <Checkbox
            name={sectionBHNAF5Check.name}
            // checked={sectionBHNAF5CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF5Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF5Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 6: Brain-Gut Axis"
        control={
          <Checkbox
            name={sectionBHNAF6Check.name}
            // checked={sectionBHNAF6CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF6Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF6Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 7: Brain-Immune Axis"
        control={
          <Checkbox
            name={sectionBHNAF7Check.name}
            // checked={sectionBHNAF7CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF7Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF7Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 8: Gluten Digestion"
        control={
          <Checkbox
            name={sectionBHNAF8Check.name}
            // checked={sectionBHNAF8CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF8Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF8Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 9: Intestinal Barrier"
        control={
          <Checkbox
            name={sectionBHNAF9Check.name}
            // checked={sectionBHNAF9CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF9Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF9Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 10: Serotonin"
        control={
          <Checkbox
            name={sectionBHNAF10Check.name}
            // checked={sectionBHNAF10CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF10Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF10Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 11: Dopamine"
        control={
          <Checkbox
            name={sectionBHNAF11Check.name}
            // checked={sectionBHNAF11CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF11Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF11Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 12: Acetylcholine"
        control={
          <Checkbox
            name={sectionBHNAF12Check.name}
            // checked={sectionBHNAF12CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF12Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF12Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 13: Catecholamines"
        control={
          <Checkbox
            name={sectionBHNAF13Check.name}
            // checked={sectionBHNAF13CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF13Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF13Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 14: GABA"
        control={
          <Checkbox
            name={sectionBHNAF14Check.name}
            // checked={sectionBHNAF14CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[sectionBHNAF14Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `twelthPage[${index}].${sectionBHNAF14Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
    </div>
  );
}
BHNAFCheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default BHNAFCheckboxes;
