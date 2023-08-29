import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import "../style.css";
import {
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Table,
  FormControlLabel,
} from "@mui/material";
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import { Grid } from "@mui/material";
import SoftTypography from "components/SoftTypography";

function Table1({ formik, form, index }) {
  const { formField } = form;
  const { values } = formik;

  const {
    table1Check,
    table2Check,
    table3Check,
    table4Check,
    table5Check,
    table6Check,
    table7Check,
    table8Check,
    newPatient99201Input1,
    newPatient99202Input,
    newPatient99203Input,
    newPatient99204Input,
    newPatient99205Input,
    ExtPatientInput,
    EstablishedPati99211Inp,
    EstablishedPati99212Inp,
  } = formField;

  const {
    table1Check: table1CheckV,
    table2Check: table2CheckV,
    table3Check: table3CheckV,
    table4Check: table4CheckV,
    table5Check: table5CheckV,
    table6Check: table6CheckV,
    table7Check: table7CheckV,
    table8Check: table8CheckV,
    newPatient99201Input1: newPatient99201Input1V,
    newPatient99202Input: newPatient99202InputV,
    newPatient99203Input: newPatient99203InputV,
    newPatient99204Input: newPatient99204InputV,
    newPatient99205Input: newPatient99205InputV,
    ExtPatientInput: ExtPatientInputV,
    EstablishedPati99211Inp: EstablishedPati99211InpV,
    EstablishedPati99212Inp: EstablishedPati99212InpV,
  } = values;

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            marginTop: "15px",
            fontSize: "15px",
            color: "cornflowerblue",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Exams/Treatments/Therapies by CPT Code:
        </div>
        <div style={{ overflowX: "auto" }}>
          <table className="tableCss ">
            <tr className="tableHD">
              <td className="table-header therapies-type " colSpan={2}>
                {" "}
                CPT
              </td>
              <td className="table-header number-td"> </td>
              <td className="table-header number-td" style={{ padding: 0 }}>
                Code
              </td>
              <td className="table-header requries-td"> </td>
              <td className="table-header presenting-td">Description</td>
              <td className="table-header input-td">Price </td>
            </tr>

            {/* <tbody> */}
            <tr className="tr-css">
              <td className="therapies-type ">
                <span className="VBAIlabel therapiLab"> New Patient</span>
              </td>
              <td className="checkbox-td">
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ marginLeft: "15px", marginTop: "6px" }}
                      name={table1Check.name}
                      // checked={table1CheckV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.eightPage[index]?.[table1Check.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `eightPage[${index}].${table1Check.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
              <td className="number-td">
                <span className="VBAIlabel therapiLab">99201-25</span>
              </td>
              <td className="requries-td">
                <span className="VBAIlabel therapiLab">
                  A problem focused history Straightforward medical decision making A problem
                  focused examination
                </span>
              </td>
              <td className="presenting-td">
                <span className="VBAIlabel therapiLab">
                  <div>Presenting problem(s) are self-limited or minor </div>
                  <div>10 minutes face-to-face</div>
                </span>
              </td>
              <td className="input-td">
                <input
                  type={newPatient99201Input1.type}
                  name={newPatient99201Input1.name}
                  // value={newPatient99201Input1V}
                  // onChange={formik.handleChange}
                  value={formik.values?.eightPage[index]?.[newPatient99201Input1.name]}
                  onChange={(e) => {
                    formik.setFieldValue(
                      `eightPage[${index}].${newPatient99201Input1.name}`,
                      e.target.value
                    );
                  }}
                  className="input-Css"
                  placeholder="$45"
                />
              </td>
            </tr>

            <tr className="tr-css">
              <td className="therapies-type "></td>
              <td className="checkbox-td">
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ marginLeft: "15px", marginTop: "6px" }}
                      name={table2Check.name}
                      // checked={table2CheckV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.eightPage[index]?.[table2Check.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `eightPage[${index}].${table2Check.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
              <td className="number-td">
                <span className="VBAIlabel therapiLab ">99202-25</span>
              </td>
              <td className="requries-td">
                <span className="VBAIlabel therapiLab">
                  An expanded problem focused history An expanded problem focused examination
                  Straightforward medical decision making
                </span>
              </td>
              <td className="presenting-td">
                <span className="VBAIlabel therapiLab">
                  <div>Presenting problem(s) are of low to moderate severity.</div>
                  <div>20 minutes spent face-to-face</div>
                </span>
              </td>
              <td className="input-td">
                <input
                  type={newPatient99202Input.type}
                  name={newPatient99202Input.name}
                  // value={newPatient99202InputV}
                  // onChange={formik.handleChange}
                  value={formik.values?.eightPage[index]?.[newPatient99202Input.name]}
                  onChange={(e) => {
                    formik.setFieldValue(
                      `eightPage[${index}].${newPatient99202Input.name}`,
                      e.target.value
                    );
                  }}
                  className="input-Css"
                  placeholder="$90"
                />
              </td>
            </tr>

            <tr className="tr-css">
              <td className="therapies-type "></td>
              <td className="checkbox-td">
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ marginLeft: "15px", marginTop: "6px" }}
                      name={table3Check.name}
                      // checked={table3CheckV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.eightPage[index]?.[table3Check.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `eightPage[${index}].${table3Check.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
              <td className="number-td">
                <span className="VBAIlabel therapiLab ">99203-25</span>
              </td>
              <td className="requries-td">
                <span className="VBAIlabel therapiLab">
                  A detailed history A detailed examination Medical decision making of low
                  complexity
                </span>
              </td>
              <td className="presenting-td">
                <span className="VBAIlabel therapiLab">
                  <div>Presenting problem(s) are of moderate severity</div>
                  <div>30 minutes spent face-to-face</div>
                </span>
              </td>
              <td className="input-td">
                <input
                  type={newPatient99203Input.type}
                  name={newPatient99203Input.name}
                  // value={newPatient99203InputV}
                  // onChange={formik.handleChange}
                  value={formik.values?.eightPage[index]?.[newPatient99203Input.name]}
                  onChange={(e) => {
                    formik.setFieldValue(
                      `eightPage[${index}].${newPatient99203Input.name}`,
                      e.target.value
                    );
                  }}
                  className="input-Css"
                  placeholder="$125"
                />
              </td>
            </tr>

            <tr className="tr-css">
              <td className="therapies-type "></td>
              <td className="checkbox-td">
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ marginLeft: "15px", marginTop: "6px" }}
                      name={table4Check.name}
                      // checked={table4CheckV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.eightPage[index]?.[table4Check.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `eightPage[${index}].${table4Check.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
              <td className="number-td">
                <span className="VBAIlabel therapiLab ">99204 -25</span>
              </td>
              <td className="requries-td">
                <span className="VBAIlabel therapiLab">
                  A comprehensive history A comprehensive examination Medical decision making of
                  moderate complexity
                </span>
              </td>
              <td className="presenting-td">
                <span className="VBAIlabel therapiLab">
                  <div>Presenting problem(s) are of moderate to high severity.</div>
                  <div>45 minutes spent face-to-face</div>
                </span>
              </td>
              <td className="input-td">
                <input
                  type={newPatient99204Input.type}
                  name={newPatient99204Input.name}
                  // value={newPatient99204InputV}
                  // onChange={formik.handleChange}
                  value={formik.values?.eightPage[index]?.[newPatient99204Input.name]}
                  onChange={(e) => {
                    formik.setFieldValue(
                      `eightPage[${index}].${newPatient99204Input.name}`,
                      e.target.value
                    );
                  }}
                  className="input-Css"
                  placeholder="$190"
                />
              </td>
            </tr>

            <tr className="tr-css last-ele">
              <td className="therapies-type "></td>
              <td className="checkbox-td">
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ marginLeft: "15px", marginTop: "6px" }}
                      name={table5Check.name}
                      // checked={table5CheckV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.eightPage[index]?.[table5Check.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `eightPage[${index}].${table5Check.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
              <td className="number-td">
                <span className="VBAIlabel therapiLab ">99205-25</span>
              </td>
              <td className="requries-td">
                <span className="VBAIlabel therapiLab">
                  <div>A comprehensive history</div>
                  <div>A comprehensive examination</div>
                  <div>Medical decision making of high </div>
                  <div>complexity</div>
                </span>
              </td>
              <td className="presenting-td">
                <span className="VBAIlabel therapiLab">
                  <div>Presenting problem(s) are of moderate to high severity</div>
                  <div>60 minutes are spent face-to-face</div>
                </span>
              </td>
              <td className="input-td">
                <input
                  type={newPatient99205Input.type}
                  name={newPatient99205Input.name}
                  // value={newPatient99205InputV}
                  // onChange={formik.handleChange}
                  value={formik.values?.eightPage[index]?.[newPatient99205Input.name]}
                  onChange={(e) => {
                    formik.setFieldValue(
                      `eightPage[${index}].${newPatient99205Input.name}`,
                      e.target.value
                    );
                  }}
                  className="input-Css"
                  placeholder="$250"
                />
              </td>
            </tr>

            <tr className="tr-css last-ele">
              <td className="therapies-type ">
                <span className="VBAIlabel therapiLab ">New/Ext Pt</span>
              </td>
              <td className="checkbox-td">
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ marginLeft: "15px", marginTop: "6px" }}
                      name={table6Check.name}
                      // checked={table6CheckV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.eightPage[index]?.[table6Check.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `eightPage[${index}].${table6Check.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
              <td className="number-td">
                <span className="VBAIlabel therapiLab">99354</span>
              </td>
              <td className="requries-td" colSpan={2}>
                <span className="VBAIlabel therapiLab">
                  Extra 30 minutes exam consult)- Per Backtochiropractic.net Ethics and Law CEU by
                  Markus Strutz (DC, JD)
                </span>
              </td>
              {/* <td className="presenting-td">
            
            </td> */}
              <td className="input-td">
                <input
                  type={ExtPatientInput.type}
                  name={ExtPatientInput.name}
                  // value={ExtPatientInputV}
                  // onChange={formik.handleChange}
                  value={formik.values?.eightPage[index]?.[ExtPatientInput.name]}
                  onChange={(e) => {
                    formik.setFieldValue(
                      `eightPage[${index}].${ExtPatientInput.name}`,
                      e.target.value
                    );
                  }}
                  className="input-Css"
                  placeholder="$125"
                />
              </td>
            </tr>

            {/* //old */}

            <tr className="tr-css">
              <td className="therapies-type ">
                <span className="VBAIlabel therapiLab "> Established Patient</span>
              </td>
              <td className="checkbox-td">
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ marginLeft: "15px", marginTop: "6px" }}
                      name={table7Check.name}
                      // checked={table7CheckV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.eightPage[index]?.[table7Check.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `eightPage[${index}].${table7Check.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
              <td className="number-td">
                <span className="VBAIlabel therapiLab">99211-25</span>
              </td>
              <td className="requries-td">
                <span className="VBAIlabel therapiLab">
                  Does not require presence of physician
                  {/* <div>Requires at least 2 of these 3 key components: </div> */}
                </span>
              </td>
              <td className="presenting-td">
                <span className="VBAIlabel therapiLab">
                  <div>Presenting problem(s) are minimal </div>
                  <div>5 minutes spent performing or supervising services</div>
                </span>
              </td>
              <td className="input-td">
                <input
                  type={EstablishedPati99211Inp.type}
                  name={EstablishedPati99211Inp.name}
                  // value={EstablishedPati99211InpV}
                  // onChange={formik.handleChange}
                  value={formik.values?.eightPage[index]?.[EstablishedPati99211Inp.name]}
                  onChange={(e) => {
                    formik.setFieldValue(
                      `eightPage[${index}].${EstablishedPati99211Inp.name}`,
                      e.target.value
                    );
                  }}
                  className="input-Css"
                  placeholder="$0.00"
                />
              </td>
            </tr>

            <tr className="tr-css last-ele">
              <td className="therapies-type "></td>
              <td className="checkbox-td">
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ marginLeft: "15px", marginTop: "6px" }}
                      name={table8Check.name}
                      // checked={table8CheckV}
                      // onChange={formik.handleChange}
                      checked={formik.values?.eightPage[index]?.[table8Check.name]}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `eightPage[${index}].${table8Check.name}`,
                          e.target.checked
                        )
                      }
                    />
                  }
                />
              </td>
              <td className="number-td">
                <span className="VBAIlabel therapiLab ">99212-25</span>
              </td>
              <td className="requries-td">
                <span className="VBAIlabel therapiLab">
                  <div>Requires at least 2 of these 3 key components: </div>

                  <div>A problem focused history</div>
                  <div>A problem focused examination Straightforward medical decision making</div>
                </span>
              </td>
              <td className="presenting-td">
                <span className="VBAIlabel therapiLab">
                  {/* <div>Presenting problem(s) are minimal </div> */}
                  <div>Presenting problem(s) are self limited or minor</div>
                  <div>10 minutes spent face-to-face</div>
                </span>
              </td>
              <td className="input-td">
                <input
                  type={EstablishedPati99212Inp.type}
                  name={EstablishedPati99212Inp.name}
                  // value={EstablishedPati99212InpV}
                  // onChange={formik.handleChange}
                  value={formik.values?.eightPage[index]?.[EstablishedPati99212Inp.name]}
                  onChange={(e) => {
                    formik.setFieldValue(
                      `eightPage[${index}].${EstablishedPati99212Inp.name}`,
                      e.target.value
                    );
                  }}
                  className="input-Css"
                  placeholder="$50"
                />
              </td>
            </tr>
            {/* </tbody> */}
          </table>
        </div>
      </div>
    </>
  );
}
Table1.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default Table1;
