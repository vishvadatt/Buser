import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "./style.css";

const Tablethree = ({ formik, form, index }) => {
  const { formField } = form;
  const { values } = formik;
  console.log("values", values);

  const { isOther } = formField;
  const { isOther: isOtherV } = values;
  const arr1 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  ];

  return (
    <>
      <Grid>
        <table
          style={{
            borderCollapse: "collapse",

            fontSize: "12px",
            // minWidth : "100px",
            // overflow: "hidden",
          }}
          className="tableCheckBox"
        >
          <thead>
            <tr
              style={{
                textAlign: "left",
                color: "gray",
                fontWeight: "bold",
              }}
            >
              <th>LT</th>
              <th></th>
              <th>RT</th>
            </tr>
          </thead>
          <tbody className="tbodyTd">
            {arr1 &&
              arr1.map((data, i) => {
                return (
                  <>
                    <tr>
                      <td>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name={`isdArray[${i}].lt`}
                              // checked={values.isdArray[i]?.lt}
                              // onChange={formik.handleChange}
                              checked={formik.values?.fifteenthPage[index]?.isdArray[i].lt}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `fifteenthPage[${index}].isdArray[${i}].lt`,
                                  e.target.checked
                                )
                              }
                            />
                          }
                        />
                      </td>
                      <td>{values?.fifteenthPage[index]?.isdArray[i].name}</td>
                      <td>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name={`isdArray[${i}].rt`}
                              // checked={values.isdArray[i]?.rt}
                              // onChange={formik.handleChange}
                              checked={formik.values?.fifteenthPage[index]?.isdArray[i].rt}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  `fifteenthPage[${index}].isdArray[${i}].rt`,
                                  e.target.checked
                                )
                              }
                            />
                          }
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            <tr>
              <td></td>
              <td style={{ paddingRight: "10px" }}>OTHER</td>
              <td style={{ paddingLeft: "0px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name={isOther.name}
                      // checked={isOtherV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.fifteenthPage[index]?.[isOther.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `fifteenthPage[${index}].${isOther.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Grid>
    </>
  );
};

Tablethree.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default Tablethree;
