import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import FormField from "layouts/pages/Profile/components/FormField";

function BAFACheckboxes({ formData, formik, form, index }) {
  const { formField } = form;
  const { values } = formik;

  const {
    section1Check,
    section2Check,
    section3Check,
    section4Check,
    section5Check,
    section6Check,
    section7Check,
    section8Check,
    section9Check,
    section10Check,
    section11Check,
  } = formField;

  const {
    section1Check: section1CheckV,
    section2Check: section2CheckV,
    section3Check: section3CheckV,
    section4Check: section4CheckV,
    section5Check: section5CheckV,
    section6Check: section6CheckV,
    section7Check: section7CheckV,
    section8Check: section8CheckV,
    section9Check: section9CheckV,
    section10Check: section10CheckV,
    section11Check: section11CheckV,
  } = values;

  const data = [
    {
      label: "Section 1: Brain Endurance",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 2: Posture and Movement",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 3: Memory and Cognition",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 4: Temporal Lobe",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 5: Occipital Lobe",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 6: Frontal Cortex",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 7: Parietal Lobe",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 8: Pontomedullary Brainstem",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 9: Basal Ganglia Direct Pathway",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 10: Basal Ganglia Indirect Pathway",
      errorMsg: "",
      value: false,
    },
    {
      label: "Section 11: Cerebellum",
      errorMsg: "",
      value: false,
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
        label="Section 1: Brain Endurance"
        control={
          <Checkbox
            name={section1Check.name}
            // checked={section1CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section1Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section1Check.name}`, e.target.checked)
            }
          />
        }
      />

      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 2: Posture and Movement"
        control={
          <Checkbox
            name={section2Check.name}
            // checked={section2CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section2Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section2Check.name}`, e.target.checked)
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 3: Memory and Cognition"
        control={
          <Checkbox
            name={section3Check.name}
            // checked={section3CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section3Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section3Check.name}`, e.target.checked)
            }
          />
        }
      />

      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 4: Temporal Lobe"
        control={
          <Checkbox
            name={section4Check.name}
            // checked={section4CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section4Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section4Check.name}`, e.target.checked)
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 5: Occipital Lobe"
        control={
          <Checkbox
            name={section5Check.name}
            // checked={section5CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section5Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section5Check.name}`, e.target.checked)
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 6: Frontal Cortex"
        control={
          <Checkbox
            name={section6Check.name}
            // checked={section6CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section6Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section6Check.name}`, e.target.checked)
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 7: Parietal Lobe"
        control={
          <Checkbox
            name={section7Check.name}
            // checked={section7CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section7Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section7Check.name}`, e.target.checked)
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 8: Pontomedullary Brainstem"
        control={
          <Checkbox
            name={section8Check.name}
            // checked={section8CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section8Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section8Check.name}`, e.target.checked)
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 9: Basal Ganglia Direct Pathway"
        control={
          <Checkbox
            name={section9Check.name}
            // checked={section9CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section9Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section9Check.name}`, e.target.checked)
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 10: Basal Ganglia Indirect Pathway"
        control={
          <Checkbox
            name={section10Check.name}
            // checked={section10CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section10Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section10Check.name}`, e.target.checked)
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Section 11: Cerebellum"
        control={
          <Checkbox
            name={section11Check.name}
            // checked={section11CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.twelthPage[index]?.[section11Check.name]}
            onChange={(e) =>
              formik.setFieldValue(`twelthPage[${index}].${section11Check.name}`, e.target.checked)
            }
          />
        }
      />
    </div>
  );
}

BAFACheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};

export default BAFACheckboxes;
