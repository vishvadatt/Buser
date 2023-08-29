import { Grid } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import "../component2/style.css"
export const DropdownComponents = (propsValue) => {
  return (
    <>
      <select
        className="dropDownInputComponent1"
        name={propsValue.name}
        value={propsValue.value}
        onChange={propsValue.formik.handleChange}
      >
        <option></option>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
    </>
  );
};

const ComponentTwo = ({ formik }) => {
  const { values } = formik;
  const arr1 = [0, 1, 2, 3, 4];
  return (
    <>
      <Grid container style={{ overflowX: "auto" }} className="tabComp1">
        <Grid lg={12} sm={12} xs={12} pl={2} className="headingTable1">
          <span style={{ fontSize: "14px", fontWeight: "bold" }}>Thoracic Outlet Syndrome</span>
        </Grid>
        <Grid item lg={12} xs={12} sm={12} pl={2} className="leftss">
          <table className="tableContainer">
            <tr>
              <th></th>
              <th>Left</th>
              <th>Right</th>
              <th></th>
            </tr>
            <tbody>
              {arr1 &&
                arr1.map((data, i) => {
                  return (
                    <>
                      <tr>
                        <td>{values?.array2[i]?.leftName}</td>
                        <td>
                          <DropdownComponents
                            name={`array2[${i}].left`}
                            value={values?.array2[i]?.left}
                            formik={formik}
                          />
                        </td>
                        <td>
                          <DropdownComponents
                            name={`array2[${i}].right`}
                            value={values?.array2[i]?.right}
                            formik={formik}
                          />
                        </td>
                        <td>{values?.array2[i]?.rightName}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </>
  );
};
ComponentTwo.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default ComponentTwo;
