import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import FormField from "../../FormField";
import SoftTypography from "components/SoftTypography";
import "../style.css";

function NutritionProperty({ formData, form, formik, index }) {
  const { formField } = form;
  const { values, handleChange } = formik;

  const {
    Example,
    Disease,
    Anemia,
    BloodSugar,
    Circulation,
    LeakyGut,
    LeakyBrain,
    Inflammation,
    TxPlan,
    TBD,
  } = formField;

  const {
    Example: ExampleV,
    Disease: DiseaseV,
    Anemia: AnemiaV,
    BloodSugar: BloodSugarV,
    Circulation: CirculationV,
    LeakyGut: LeakyGutV,
    LeakyBrai: LeakyBrainV,
    Inflammation: InflammationV,
    TxPlan: TxPlanV,
    TBD: TBDV,
  } = values;

  return (
    <div style={{ width: "100%" }}>
      <Grid container sm={9} style={{ marginTop: "20px" }}>
        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              // style={{ display: "inlineBlock" }}
            >
              Example:
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={Example.type}
              // label={"Example:"}
              name={Example.name}
              placeholder={Example.placeholder}
              // value={ExampleV}
              value={formik.values?.thirteenthPage[index]?.[Example.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${Example.name}`, e.target.value)
              }
              className="input-mobile-css"
              //   error={errors.Example && touched.Example}
              style={{ display: "inlineBlock" }}
              //   success={ExampleV.length > 0 && !errors.Example}
            />
          </Grid>
          {/* </Grid> */}
        </Grid>

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              Disease:
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={Disease.type}
              // label={Disease.label}
              name={Disease.name}
              // value={DiseaseV}
              value={formik.values?.thirteenthPage[index]?.[Disease.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${Disease.name}`, e.target.value)
              }
              placeholder={Disease.placeholder}
              className="input-mobile-css"
              // error={errors.Disease && touched.Disease}
              // success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              Anemia:
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={Anemia.type}
              // // label={Anemia.label}
              name={Anemia.name}
              // value={AnemiaV}\
              value={formik.values?.thirteenthPage[index]?.[Anemia.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${Anemia.name}`, e.target.value)
              }
              placeholder={Anemia.placeholder}
              className="input-mobile-css"
              // error={errors.Anemia && touched.Anemia}
              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              Blood Sugar:
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={BloodSugar.type}
              // //   label={BloodSugar.label}
              name={BloodSugar.name}
              // value={BloodSugarV}
              value={formik.values?.thirteenthPage[index]?.[BloodSugar.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${BloodSugar.name}`, e.target.value)
              }
              placeholder={BloodSugar.placeholder}
              className="input-mobile-css"
              //   error={errors.BloodSugar && touched.BloodSugar}
              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              Circulation:
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={Circulation.type}
              // //   label={Circulation.label}
              name={Circulation.name}
              // value={CirculationV}
              value={formik.values?.thirteenthPage[index]?.[Circulation.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${Circulation.name}`, e.target.value)
              }
              placeholder={Circulation.placeholder}
              className="input-mobile-css"
              //   error={errors.Circulation && touched.Circulation}
              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              Leaky Gut - (may refer to Cyrex Array 2 to confirm Dx):
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={LeakyGut.type}
              // //   label={LeakyGut.label}
              name={LeakyGut.name}
              // value={LeakyGutV}
              value={formik.values?.thirteenthPage[index]?.[LeakyGut.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${LeakyGut.name}`, e.target.value)
              }
              placeholder={LeakyGut.placeholder}
              className="input-mobile-css"
              //   error={errors.LeakyGut && touched.LeakyGut}
              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              Leaky Brain:
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={LeakyBrain.type}
              // //   label={LeakyBrain.label}
              name={LeakyBrain.name}
              // value={LeakyBrainV}
              value={formik.values?.thirteenthPage[index]?.[LeakyBrain.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${LeakyBrain.name}`, e.target.value)
              }
              className="input-mobile-css"
              placeholder={LeakyBrain.placeholder}
              //   error={errors.LeakyBrain && touched.LeakyBrain}
              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              Inflammation - (Note, CRP and ESR do not show up until later in disease process.
              Increased Ferratin and HDLs <span style={{ fontSize: "25px" }}>&#8250;</span> 80
              indicate subtle inflammation):
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={Inflammation.type}
              // //   label={Inflammation.label}
              name={Inflammation.name}
              // value={InflammationV}
              value={formik.values?.thirteenthPage[index]?.[Inflammation.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `thirteenthPage[${index}].${Inflammation.name}`,
                  e.target.value
                )
              }
              placeholder={Inflammation.placeholder}
              className="input-mobile-css"

              //   error={errors.Inflammation && touched.Inflammation}
              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              Tx Plan:
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={TxPlan.type}
              // //   label={TxPlan.label}
              name={TxPlan.name}
              // value={TxPlanV}
              value={formik.values?.thirteenthPage[index]?.[TxPlan.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${TxPlan.name}`, e.target.value)
              }
              placeholder={TxPlan.placeholder}
              className="input-mobile-css"

              //   error={errors.TxPlan && touched.TxPlan}
              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}

        {/* <Grid item xs={12}> */}
        <Grid container className="input-css-div nutrition-property-text-field-container">
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <SoftTypography
              className="heading"
              variant="h6"
              fontWeight="bold"
              color="button"
              // mt={1}
              style={{ display: "inlineBlock" }}
            >
              TBD:
            </SoftTypography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <FormField
              type={TBD.type}
              //   label={TBD.label}
              name={TBD.name}
              // value={TBDV}
              value={formik.values?.thirteenthPage[index]?.[TBD.name]}
              onChange={(e) =>
                formik.setFieldValue(`thirteenthPage[${index}].${TBD.name}`, e.target.value)
              }
              placeholder={TBD.placeholder}
              className="input-mobile-css"
              //   error={errors.TBD && touched.TBD}
              //   success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>
      <SoftTypography variant="h6" fontWeight="" color="text" mt={1}>
        I.E.- Support the Brain-Gut Axis, Reduce inflammation, support Gastrointestinal barrier,
        support detoxification, support sugar metabolism,
      </SoftTypography>
    </div>
  );
}

NutritionProperty.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default NutritionProperty;
