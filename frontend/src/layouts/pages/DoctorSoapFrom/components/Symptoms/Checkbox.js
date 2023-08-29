import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox, Grid, Box } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";

function CheckboxNew({ formik }) {
  const { values, setFieldValue } = formik;

  const data = [
    {
      type: "checkbox",
      name: "orthocheck1",
      label: "'Clunk' sounds with neck movements",
      errorMsg: "Clunk' sounds with neck movements is required.",
      value: values.orthocheck1,
      // onChange: formik.handleChange
    },
    {
      type: "checkbox",
      name: "orthocheck2",
      label: "Neck pain",
      errorMsg: "Neck pain is a required field.",
      value: values.orthocheck2,
      // onChange : formik,
      onChange: formik.handleChange,
    },
    {
      type: "text",
      name: "orthocheck3",
      label: "Upper back pain",
      errorMsg: "Upper back pain is a required field.",
      value: values.orthocheck3,
      onChnage: formik.handleChange,
    },
    {
      type: "text",
      name: "orthocheck4",
      label: "Low back pain",
      errorMsg: "Low back pain is a required field.",
      value: values.orthocheck4,
      onChnage: formik.handleChange,
    },
    {
      type: "text",
      name: "orthocheck5",
      label: "Shoulder pain",
      errorMsg: "Shoulder pain is a required field.",
      value: values.orthocheck5,
      options: [
        { name: "orthoLeftcheck5", value: values.orthoLeftcheck5, label: "Left" },
        { name: "orthoRightcheck5", value: values.orthoRightcheck5, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck6",
      label: "Upper arm pain",
      errorMsg: "Upper arm pain is a required field.",
      value: values.orthocheck6,
      options: [
        { name: "orthoLeftcheck6", value: values.orthoLeftcheck6, label: "Left" },
        { name: "orthoRightcheck6", value: values.orthoRightcheck6, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck7",
      label: "Elbow pain",
      errorMsg: "Elbow pain is a required field.",
      value: values.orthocheck7,
      options: [
        { name: "orthoLeftcheck7", value: values.orthoLeftcheck7, label: "Left" },
        { name: "orthoRightcheck7", value: values.orthoRightcheck7, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck8",
      label: "Forearm pain",
      errorMsg: "Forearm pain is a required field.",
      value: values.orthocheck8,
      options: [
        { name: "orthoLeftcheck8", value: values.orthoLeftcheck8, label: "Left" },
        { name: "orthoRightcheck8", value: values.orthoRightcheck8, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck9",
      label: "Wrist pain",
      errorMsg: "Wrist pain is a required field.",
      value: values.orthocheck9,
      options: [
        { name: "orthoLeftcheck9", value: values.orthoLeftcheck9, label: "Left" },
        { name: "orthoRightcheck9", value: values.orthoRightcheck9, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck10",
      label: "Hand pain",
      errorMsg: "Hand pain is a required field.",
      value: values.orthocheck10,
      options: [
        { name: "orthoLeftcheck10", value: values.orthoLeftcheck10, label: "Left" },
        { name: "orthoRightcheck10", value: values.orthoRightcheck10, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck11",
      label: "Hip pain",
      errorMsg: "Hip pain is a required field.",
      value: values.orthocheck11,
      options: [
        { name: "orthoLeftcheck11", value: values.orthoLeftcheck11, label: "Left" },
        { name: "orthoRightcheck11", value: values.orthoRightcheck11, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck12",
      label: "Upper leg pain",
      errorMsg: "Upper leg pain is a required field.",
      value: values.orthocheck12,
      options: [
        { name: "orthoLeftcheck12", value: values.orthoLeftcheck12, label: "Left" },
        { name: "orthoRightcheck12", value: values.orthoRightcheck12, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck13",
      label: "Knee pain",
      errorMsg: "Knee pain is a required field.",
      value: values.orthocheck13,
      options: [
        { name: "orthoLeftcheck13", value: values.orthoLeftcheck13, label: "Left" },
        { name: "orthoRightcheck13", value: values.orthoRightcheck13, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck14",
      label: "Lower leg pain",
      errorMsg: "Lower leg pain is a required field.",
      value: values.orthocheck14,
      options: [
        { name: "orthoLeftcheck14", value: values.orthoLeftcheck14, label: "Left" },
        { name: "orthoRightcheck14", value: values.orthoRightcheck14, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck15",
      label: "Ankle pain",
      errorMsg: "Ankle pain is a required field.",
      value: values.orthocheck15,
      options: [
        { name: "orthoLeftcheck15", value: values.orthoLeftcheck15, label: "Left" },
        { name: "orthoRightcheck15", value: values.orthoRightcheck15, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck16",
      label: "Foot pain",
      errorMsg: "Foot pain is a required field.",
      value: values.orthocheck16,
      options: [
        { name: "orthoLeftcheck16", value: values.orthoLeftcheck16, label: "Left" },
        { name: "orthoRightcheck16", value: values.orthoRightcheck16, label: "Right" },
      ],
    },
    {
      type: "text",
      name: "orthocheck17",
      label: "Jaw pain",
      errorMsg: "Jaw pain is a required field.",
      value: values.orthocheck17,
    },
    {
      type: "text",
      name: "orthocheck18",
      label: "Clicking in Jaw",
      errorMsg: "Clicking in Jaw is a required field.",
      value: values.orthocheck18,
    },
    {
      type: "text",
      name: "orthocheck19",
      label: "Pain when chewing",
      errorMsg: "Pain when chewing is a required field.",
      value: values.orthocheck19,
    },
    {
      type: "text",
      name: "orthocheck20",
      label: "Face pain",
      errorMsg: "Face pain is a required field.",
      value: values.orthocheck20,
    },
    {
      type: "text",
      name: "orthocheck21",
      label: "Chest pain",
      errorMsg: "Chest pain is a required field.",
      value: values.orthocheck21,
    },
    {
      type: "text",
      name: "orthocheck22",
      label: "Stomach pain",
      errorMsg: "Stomach pain is a required field.",
      value: values.orthocheck22,
    },
    // {
    //   type:"text",
    //   name: "orthocheck23",
    //   label: `Bruise To`,
    //   errorMsg: "Bruise To is a required field.",
    //   value: values.orthocheck23,
    // },
    // {
    //   type:"text",
    //   name: "orthocheck24",
    //   label: "Scrape/Cut To",
    //   errorMsg: "Scrape/Cut is a required field.",
    //   value: values.orthocheck24,
    // },
    // {
    //   type:"text",
    //   name: "orthocheck25",
    //   label: "Other Symptoms",
    //   errorMsg: "Other Symptoms is a required field.",
    //   value: values.orthocheck25,
    // },
    // {
    //   type:"text",
    //   name: "orthocheck26",
    //   label: "Other Symptoms",
    //   errorMsg: "Other Symptoms is a required field.",
    //   value:values.orthocheck26,
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
      <FormControl style={{ width: "100%" }}>
        {data.map((box, index) => {
          return (
            <FormGroup
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "10px",
                justifyContent: "space-between",
              }}
            >
              {/* <Grid container> */}
              <Box xs={6}>
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
              </Box>
              <Box style={{ display: "flex" }}>
                {box.options ? (
                  box.options.map((value, ind) => {
                    return (
                      <FormControlLabel
                        // style={{marginLeft:'10px'}}

                        key={"option" + index}
                        label={value.label}
                        control={
                          <Checkbox
                            // key={"option" + ind}
                            // disabled={!box.value}
                            // onChange={(e) => setFieldValue(box.name, e.target.checked)}
                            // // checked={box.options[ind].value}
                            // checked={box.options[ind].value}

                            name={box.options[ind].name}
                            disabled={!box.value}
                            key={"main" + index}
                            onChange={(e) => setFieldValue(box.options[ind].name, e.target.checked)}
                            checked={box.options[ind].value}
                          />
                        }
                      />
                    );
                  })
                ) : (
                  <></>
                )}
              </Box>
              {/* </Grid> */}
            </FormGroup>
          );
        })}

        <FormGroup
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "5px",
            marginBottom: "10px",
          }}
        >
          <Checkbox
            name="orthocheck23"
            checked={values.orthocheck23}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("orthocheck23", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck23}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Bruise to&nbsp;
          </SoftTypography>
          <input
            type="input"
            name="orthoInput23"
            value={values.orthoInput23}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("orthoInput23", e.target.value)}
            className="therapiCss"
            style={{ width: "120px", height: "23px" }}
          />
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
            name="orthocheck24"
            checked={values.orthocheck24}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("orthocheck24", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck24}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Scrape/Cut To &nbsp;
          </SoftTypography>
          <input
            type="input"
            name="orthoInput24"
            value={values.orthoInput24}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("orthoInput24", e.target.value)}
            className="therapiCss"
            style={{ width: "120px", height: "23px" }}
          />
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
            name="orthocheck25"
            checked={values.orthocheck25}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("orthocheck25", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck24}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Other Symptom &nbsp;
          </SoftTypography>
          <input
            type="input"
            name="orthoInput25"
            value={values.orthoInput25}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("orthoInput25", e.target.value)}
            className="therapiCss"
            style={{ width: "120px", height: "23px" }}
          />
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
            name="orthocheck26"
            checked={values.orthocheck26}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("orthocheck26", e.target.checked)}
            className="checkboxwithinput"
            key={values.orthocheck24}
          />
          <SoftTypography variant="h5" fontWeight="bold" style={{ fontSize: "15px" }}>
            &nbsp;Other Symptom &nbsp;
          </SoftTypography>
          <input
            type="input"
            name="orthoInput26"
            value={values.orthoInput26}
            // onChange={formik.handleChange}
            onChange={(e) => setFieldValue("orthoInput26", e.target.value)}
            className="therapiCss"
            style={{ width: "120px", height: "23px" }}
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

CheckboxNew.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default CheckboxNew;
