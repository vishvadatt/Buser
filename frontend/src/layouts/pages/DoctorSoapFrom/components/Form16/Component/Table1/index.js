import { Grid } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

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

const TableOne = ({ formik }) => {
  const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const { values } = formik;
  return (
    <>
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
        style={{ overflowX: "auto" }}
        pt={8}
        className="table1Compo"
      >
        <table className="content-table1" style={{alignItems: "center" ,justifyContent:"center", margin:"auto"}}>
          <thead>
            <tr>
              <th></th>
              <th>Left</th>
              <th>Right</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arr3 &&
              arr3.map((data, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td style={{ textAlign: "right" }}>{values.array3[i]?.leftName}</td>
                      <td>
                        <DropdownComponents
                          name={`array3[${i}].left`}
                          value={values?.array3[i]?.left}
                          formik={formik}
                        />
                      </td>
                      <td>
                        <DropdownComponents
                          name={`array3[${i}].right`}
                          value={values?.array3[i]?.right}
                          formik={formik}
                        />
                      </td>
                      <td style={{ textAlign: "left" }}>{values.array3[i]?.rightName}</td>
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

TableOne.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TableOne;
