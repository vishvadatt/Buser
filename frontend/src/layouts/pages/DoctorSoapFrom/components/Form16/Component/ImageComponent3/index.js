import { Grid } from "@mui/material";
import React from "react";
import body1Img from "assets/images/16body.png";
import PropTypes from "prop-types";
import "../../style.scss";
export const DropdownComponents = (propsValue) => {
  console.log("propsValue...", propsValue);
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

const ImageComponent3 = ({ formik }) => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 2, 3, 4, 5, 6, 7];

  const { values } = formik;

  return (
    <>
      <Grid container>
        <Grid item lg={6} sm={6} xs={12} style={{ paddingTop: "0px" }}>
          <table className="table1Component1">
            <thead>
              <tr>
                <th></th>
                <th>Left</th>
                <th>Right</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>CS</td>
                <td></td>
                <td></td>
              </tr>
              {arr1 &&
                arr1.map((data, i) => {
                  return (
                    <>
                      <tr>
                        <td style={{ width: "105px" }}>{values?.array1[i]?.name}</td>
                        <td>
                          <DropdownComponents
                            name={`array1[${i}].left`}
                            value={values?.array1[i]?.left}
                            formik={formik}
                          />
                        </td>
                        <td>
                          <DropdownComponents
                            name={`array1[${i}].right`}
                            value={values?.array1[i]?.right}
                            formik={formik}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
          <table className="table1Component1">
            <tbody>
              <tr>
                <td style={{ textAlign: "center" }}>LS</td>
                <td></td>
                <td></td>
              </tr>
              {arr2 &&
                arr2.map((data, i) => {
                  return (
                    <>
                      <tr>
                        <td style={{ width: "105px" }}>{values?.array5[i]?.name}</td>
                        <td>
                          <DropdownComponents
                            name={`array5[${i}].left`}
                            value={values?.array5[i]?.left}
                            formik={formik}
                          />
                        </td>
                        <td>
                          <DropdownComponents
                            name={`array5[${i}].right`}
                            value={values?.array5[i]?.right}
                            formik={formik}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </Grid>
        <Grid item lg={6} sm={6} xs={12} style={{ paddingTop: "0px" }}>
          <img src={body1Img} alt="" style={{ objectFit: "cover", width: "100%" }} />
        </Grid>
      </Grid>
    </>
  );
};

ImageComponent3.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default ImageComponent3;
