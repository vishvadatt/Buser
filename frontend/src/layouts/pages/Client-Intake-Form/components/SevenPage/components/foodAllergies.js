import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function foodAllergies({ formik, form, index }) {
  const { values } = formik;
  const { other: otherV, othercheck: othercheckV } = values.page11[index];
  const food = [
    { name: "Bananas" },
    { name: "Eggs" },
    { name: "Shellfish" },
    { name: "Chocolate" },
    { name: "Gluten" },
    { name: "Soy" },
    { name: "Citrus Fruits" },
    { name: "Peanuts" },
    { name: "Strawberries" },
    { name: "Corn" },
    { name: "Peppers" },
    { name: "Tomatoes" },
    { name: "Dairy" },
    { name: "Refined Sugars" },
    { name: "Wheat" },
  ];
  return (
    <>
      <SoftBox mt={2.5}>
        <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px">
          Food Allergies/Sensitivities:
        </SoftTypography>
        <SoftBox className="food" ml={1}>
          {food &&
            food.map((data, i) => {
              return (
                <>
                  <Grid container>
                    <Grid item lg={1}>
                      <Checkbox
                        style={{ marginLeft: "5px" }}
                        name={`page11[${index}].food[${i}].foodcheck`}
                        checked={values.page11[index].food[i]?.foodcheck}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid item lg={11}>
                      <span style={{ fontSize: "15px", marginLeft: "7px" }}>{data.name}</span>
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>
        <SoftBox ml={1.5}>
          <Grid className="otherfood">
            <Checkbox
              name={`page11[${index}].othercheck`}
              checked={othercheckV}
              onChange={formik.handleChange}
            />
            <span style={{ fontSize: "15px" }}>Other:</span>
            <input name={`page11[${index}].other`} value={otherV} onChange={formik.handleChange} />
          </Grid>
        </SoftBox>
      </SoftBox>
    </>
  );
}
foodAllergies.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default foodAllergies;
