import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React from "react";
import "../../style.scss";
import PropTypes from "prop-types";
import FormField from "../../../FormField";
import "./index.css";

function ObjectiveComponent({ formData, formik, form, doctorShopFromDetails, index }) {
  const { formField } = form;
  const { values } = formik;
  // const {values,touched,formField,errors,setFieldValue,handleChange} = formData;
  const { doe } = formField;

  const { doe: doeV } = values;
  return (
    <>
      <Grid
        item
        lg={4}
        sm={4}
        xs={12}
        style={{ display: "flex", alignItems: "center" }}
        className="objective"
      >
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>Objective Findings:</span>
        <span style={{ fontSize: "14px", marginLeft: "5px" }}>DOE:&nbsp;</span>
        {/* <FormField type={doe.type} name={doe.name} value={doeV} /> */}
        <input
          className="vvx1"
          type={doe.type}
          name={doe.name}
          // value={doeV}
          // onChange={formik.handleChange}
          value={formik.values?.fifteenthPage[index]?.doe}
          onChange={(e) => formik.setFieldValue(`fifteenthPage[${index}].doe`, e.target.value)}
        />
      </Grid>
      <Grid item lg={8} sm={8} xs={12}>
        <p className="discription">
          P=pain – X=Trigger Points – HI=Hyperesthesia – HO=Hypoesthesia – T=Tender – S=Spasm -
          N=Numb – E=Edema
        </p>
      </Grid>
    </>
  );
}

ObjectiveComponent.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  doctorShopFromDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default ObjectiveComponent;
