import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NextButton from "layouts/pages/DoctorSoapFrom/NextButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { Grid } from "@mui/material";

export const InputComponent = (propstype) => {
  console.log("propstype..", propstype);
  return (
    <>
      <input
        type="text"
        name={propstype.name}
        value={propstype.value}
        onChange={propstype.formik.handleChange}
      />
    </>
  );
};

const Table1 = ({ formik }) => {
  const { values } = formik;
  console.log("values..", values);

  const dataArry = [
    { root: "cArray", key: "C", value: 0 },
    { root: "cArray", key: "C", value: 1 },
    { root: "cArray", key: "C", value: 2 },
    { root: "cArray", key: "C", value: 3 },
    { root: "cArray", key: "C", value: 4 },
    { root: "cArray", key: "C", value: 5 },
    { root: "cArray", key: "C", value: 6 },
    { root: "tArray", key: "T", value: 0 },
    { root: "tArray", key: "T", value: 1 },
    { root: "tArray", key: "T", value: 2 },
    { root: "tArray", key: "T", value: 3 },
    { root: "tArray", key: "T", value: 4 },
    { root: "tArray", key: "T", value: 5 },
    { root: "tArray", key: "T", value: 6 },
    { root: "tArray", key: "T", value: 7 },
    { root: "tArray", key: "T", value: 8 },
    { root: "tArray", key: "T", value: 9 },
    { root: "tArray", key: "T", value: 10 },
    { root: "tArray", key: "T", value: 11 },
    { root: "lArray", key: "L", value: 0 },
    { root: "lArray", key: "L", value: 1 },
    { root: "lArray", key: "L", value: 2 },
    { root: "lArray", key: "L", value: 3 },
    { root: "lArray", key: "L", value: 4 },
    { root: "sArray", key: "S", value: 0 },
    { root: "sArray", key: "S", value: 1 },
    { root: "sArray", key: "S", value: 2 },
    { root: "sArray", key: "S", value: 3 },
    { root: "sArray", key: "S", value: 4 },
    { root: "coArray", key: "Co", value: 0 },
    { root: "coArray", key: "Co", value: 1 },
    { root: "coArray", key: "Co", value: 2 },
    { root: "coArray", key: "Co", value: 3 },
  ];
  const dataArry1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Grid container className="table24-grid-container">
        <Grid item lg={12} sm={12} xs={12} style={{ overflowX: "auto" }}>
          <table border={1} className="tableContent3">
            <tr>
              <th style={{ background: "#00D100", textAlign: "center" }}>Root</th>
              <th style={{ background: "yellow", textAlign: "center" }}>N. Group</th>
              <th style={{ background: "yellow", textAlign: "center" }}>Rami</th>
              <th style={{ background: "yellow", textAlign: "center" }}>Peripheral N.</th>
              <th style={{ background: "#FF69B4", textAlign: "center" }}>Muscle</th>
              <th style={{ background: "yellow", textAlign: "center" }}>Jt/Cutaneous</th>
              <th style={{ background: "yellow", textAlign: "center" }}>Scleroderm</th>
              <th style={{ background: "#c4bcbc", textAlign: "center" }}>Ak Organ</th>
              <th style={{ background: "yellow", textAlign: "center" }}>Meridian</th>
              <th style={{ background: "#c4bcbc", textAlign: "center" }}>NL</th>
              <th style={{ background: "#c4bcbc", textAlign: "center" }}>NV</th>
              <th style={{ background: "yellow", textAlign: "center" }}>KI Category</th>
              <th style={{ background: "yellow", textAlign: "center" }}>Lab Reference Interval</th>
              <th style={{ background: "yellow", textAlign: "center" }}>Lab Functional Med Range</th>
              <th style={{ background: "yellow", textAlign: "center" }}>Pt Lab Results (Date)</th>
              <th style={{ background: "#48b4e0", textAlign: "center" }}>Nutrition Support</th>
            </tr>
            <tbody>
              {dataArry &&
                dataArry.map((data, i) => {
                  console.log("data,", data);
                  return (
                    <tr key={i}>
                      <td style={{ padding: "0px" }}>
                        {data.key}
                        {data.value + 1}
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].ngrid`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.ngrid
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].ram`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.ram
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].Periph`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.Periph
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].Muscle`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.Muscle
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].jtCut`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.jtCut
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].Sclero`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.Sclero
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].AkOrgan`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.AkOrgan
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].Mer`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.Mer
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].NL`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.NL
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].NV`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.NV
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].KICat`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.KICat
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].LabRef`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.LabRef
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].LabFunc`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.LabFunc
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].PtLab`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.PtLab
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name={`${data.root}[${data.value}].NutriationSupport`}
                          value={
                            values?.[data.root] !== undefined
                              ? values?.[data.root][data.value]?.NutriationSupport
                              : ""
                          }
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </>
  );
};
Table1.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Table1;
