import { Grid } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import '../Table2/style.css'
export const DropdownComponents = (propsValue) => {
  return (
    <>
      <select
        className="dropDownInputComponent"
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

const TableTwo = ({ formik }) => {
  const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];

  const { values } = formik;

  return (
    <>
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
        pl={6}
        style={{ overflowX: "auto" }}
        className="table2Compo tabl"
        pt={8}
      >
        <table
          className="content-table1 "
          style={{ alignItems: "center", justifyContent: "center", margin: "auto" }}
        >
          <thead>
            <tr>
              <th></th>
              <th>Left</th>
              <th>Right</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arr4 &&
              arr4.map((data, i) => {
                return (
                  <>
                    <tr>
                      <td style={{ textAlign: "right" }}>{values?.array4[i]?.leftName}</td>
                      <td>
                        <DropdownComponents
                          name={`array4[${i}].left`}
                          value={values?.array4[i]?.left}
                          formik={formik}
                        />
                      </td>
                      <td>
                        <DropdownComponents
                          name={`array4[${i}].right`}
                          value={values?.array4[i]?.right}
                          formik={formik}
                        />
                      </td>
                      <td style={{ textAlign: "left" }}>{values?.array4[i]?.rightName}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </Grid>
    </>
  );
};
TableTwo.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TableTwo;
