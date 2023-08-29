import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function dietHistory({ formik, form, index }) {
  const { values } = formik;

  const {
    grains: grainsV,
    vegetables: vegetablesV,
    fruits: fruitsV,
    protein: proteinV,
    dairy: dairyV,
    fatsSweets: fatsSweetsV,
    clientName: clientNameV,
  } = values.page11[index];

  const food = [
    "Never",
    "<1x/Mo",
    "1-3x/ Mo",
    "1-2x/Wk",
    "3-4x/Wk",
    "5-6x/Wk",
    "1x/Day",
    ">2x/Day",
  ];

  return (
    <>
      <SoftBox mt={2.5}>
        <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px">
          Diet History (Mark Frequency):
        </SoftTypography>
        <SoftBox ml={1.5} className="food-table">
          <table style={{ fontSize: "15px", fontWeight: "none" }}>
            <tr>
              <th
                style={{ paddingLeft: "18px", paddingRight: "18px", paddingBottom: "5px" }}
                className="table-food-title"
              >
                Types of Food
              </th>
              <th style={{ paddingLeft: "14px", paddingRight: "14px", paddingBottom: "5px" }}>
                Never
              </th>
              <th style={{ paddingLeft: "14px", paddingRight: "14px", paddingBottom: "5px" }}>
                {`<1x/Mo`}
              </th>
              <th style={{ paddingLeft: "14px", paddingRight: "14px", paddingBottom: "5px" }}>
                1-3x/ Mo
              </th>
              <th style={{ paddingLeft: "14px", paddingRight: "14px", paddingBottom: "5px" }}>
                1-2x/Wk
              </th>
              <th style={{ paddingLeft: "14px", paddingRight: "14px", paddingBottom: "5px" }}>
                3-4x/Wk
              </th>
              <th style={{ paddingLeft: "14px", paddingRight: "14px", paddingBottom: "5px" }}>
                5-6x/Wk
              </th>
              <th style={{ paddingLeft: "14px", paddingRight: "14px", paddingBottom: "5px" }}>
                1x/Day
              </th>
              <th style={{ paddingLeft: "14px", paddingRight: "14px", paddingBottom: "5px" }}>
                {`>2x/Day`}
              </th>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Grains</td>
              {food &&
                food.map((data, i) => {
                  return (
                    <>
                      <td
                        style={{ textAlign: "center", backgroundColor: "#ffffff" }}
                        className="tabledata-line"
                      >
                        <input
                          style={{ height: "16px", width: "16px", cursor: "pointer" }}
                          type="radio"
                          value={data}
                          name={`page11[${index}].grains`}
                          onChange={formik.handleChange}
                          checked={grainsV === data.toString()}
                        />
                      </td>
                    </>
                  );
                })}
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Vegetables</td>
              {food &&
                food.map((data, i) => {
                  return (
                    <>
                      <td style={{ textAlign: "center" }} className="tabledata-line">
                        <input
                          style={{ height: "16px", width: "16px", cursor: "pointer" }}
                          type="radio"
                          value={data}
                          name={`page11[${index}].vegetables`}
                          onChange={formik.handleChange}
                          checked={vegetablesV === data.toString()}
                        />
                      </td>
                    </>
                  );
                })}
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Fruits</td>
              {food &&
                food.map((data, i) => {
                  return (
                    <>
                      <td style={{ textAlign: "center" }} className="tabledata-line">
                        <input
                          style={{ height: "16px", width: "16px", cursor: "pointer" }}
                          type="radio"
                          value={data}
                          name={`page11[${index}].fruits`}
                          onChange={formik.handleChange}
                          checked={fruitsV === data.toString()}
                        />
                      </td>
                    </>
                  );
                })}
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Protein</td>
              {food &&
                food.map((data, i) => {
                  return (
                    <>
                      <td style={{ textAlign: "center" }} className="tabledata-line">
                        <input
                          style={{ height: "16px", width: "16px", cursor: "pointer" }}
                          type="radio"
                          value={data}
                          name={`page11[${index}].protein`}
                          onChange={formik.handleChange}
                          checked={proteinV === data.toString()}
                        />
                      </td>
                    </>
                  );
                })}
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Dairy</td>
              {food &&
                food.map((data, i) => {
                  return (
                    <>
                      <td style={{ textAlign: "center" }} className="tabledata-line">
                        <input
                          style={{ height: "16px", width: "16px", cursor: "pointer" }}
                          type="radio"
                          value={data}
                          name={`page11[${index}].dairy`}
                          onChange={formik.handleChange}
                          checked={dairyV === data.toString()}
                        />
                      </td>
                    </>
                  );
                })}
            </tr>
            <tr>
              <td style={{ textAlign: "center" }}>Fats/Sweets</td>
              {food &&
                food.map((data, i) => {
                  return (
                    <>
                      <td style={{ textAlign: "center" }} className="tabledata-line">
                        <input
                          style={{ height: "16px", width: "16px", cursor: "pointer" }}
                          type="radio"
                          value={data}
                          name={`page11[${index}].fatsSweets`}
                          onChange={formik.handleChange}
                          checked={fatsSweetsV === data.toString()}
                        />
                      </td>
                    </>
                  );
                })}
            </tr>
          </table>
        </SoftBox>
        <SoftBox mt={3}>
          <Grid className="clientaction">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
            <input
              type="text"
              label="clientName"
              onChange={formik.handleChange}
              value={clientNameV}
              name={`page11[${index}].clientName`}
            />
          </Grid>
        </SoftBox>
      </SoftBox>
    </>
  );
}
dietHistory.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default dietHistory;
