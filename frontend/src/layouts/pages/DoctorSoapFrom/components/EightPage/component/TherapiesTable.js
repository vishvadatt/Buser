import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
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

function TherapiesTable({ formik, form, index }) {
  const { formField } = form;
  const { values } = formik;
  const {
    TherapeuticCheck,
    FitnessCheck,
    NutritionCheck,
    MindfulnessCheck,
    row1OtherInput,
    MyofascialCheck,
    StretchingCheck,
    row2CSCheck,
    row2TSCheck,
    row2LSCheck,
    row2OtherCheck,
    row2OtherInput1,
    row2OtherInput2,
    DiversifiedCheck,
    ActivatorCheck,
    NetworkCheck,
    row3OtherCheck,
    row3OtherInput,
    row3Other1Check,
    row3CSCheck,
    row3TSCheck,
    row3LSCheck,
    row3OtherInput1,
    row3OtherInput2,
    BlockingCheck,
    IceCheck,
    HeatCheck,
    row4OtherCheck,
    row4OtherInput,
    row4CSCheck,
    row4LSCheck,
    row4TSCheck,
    row4Other1Check,
    row4OtherInput1,
    row4OtherInput2,
  } = formField;

  const {
    TherapeuticCheck: TherapeuticCheckV,
    FitnessCheck: FitnessCheckV,
    NutritionCheck: NutritionCheckV,
    MindfulnessCheck: MindfulnessCheckV,
    row1OtherInput: row1OtherInputV,
    MyofascialCheck: MyofascialCheckV,
    StretchingCheck: StretchingCheckV,
    row2CSCheck: row2CSCheckV,
    row2TSCheck: row2TSCheckV,
    row2LSCheck: row2LSCheckV,
    row2OtherCheck: row2OtherCheckV,
    row2OtherInput1: row2OtherInput1V,
    row2OtherInput2: row2OtherInput2V,
    DiversifiedCheck: DiversifiedCheckV,
    ActivatorCheck: ActivatorCheckV,
    NetworkCheck: NetworkCheckV,
    row3OtherCheck: row3OtherCheckV,
    row3OtherInput: row3OtherInputV,
    row3CSCheck: row3CSCheckV,
    row3TSCheck: row3TSCheckV,
    row3LSCheck: row3LSCheckV,
    row3Other1Check: row3Other1CheckV,
    row3OtherInput1: row3OtherInput1V,
    row3OtherInput2: row3OtherInput2V,
    BlockingCheck: BlockingCheckV,
    IceCheck: IceCheckV,
    HeatCheck: HeatCheckV,
    row4OtherCheck: row4OtherCheckV,
    row4OtherInput: row4OtherInputV,
    row4CSCheck: row4CSCheckV,
    row4LSCheck: row4LSCheckV,
    row4TSCheck: row4TSCheckV,
    row4Other1Check: row4Other1CheckV,
    row4OtherInput1: row4OtherInput1V,
    row4OtherInput2: row4OtherInput2V,
  } = values;
  return (
    <>
      <div style={{ marginTop: "50px", width: "100%", overflowX: "auto", padding: "0px 10px" }}>
        <div
          style={{
            marginTop: "15px",
            fontSize: "17px",
            color: "cornflowerblue",
            fontWeight: "bold",
            minWidth: "720px",
          }}
        >
          Therapeutic/Rehabilitation Exercises/Active Care/Passive Care:
        </div>
        <div style={{ minWidth: "720px" }}>
          <table className="tableCss" style={{ width: "100%" }}>
            <tbody>
              <tr className="trCss">
                <td className="first-div1" colSpan={2}>
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Therapeutic Exercise "
                    className="VBAIlabel therapiLab"
                    control={
                      <Checkbox
                        name={TherapeuticCheck.name}
                        // checked={TherapeuticCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[TherapeuticCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${TherapeuticCheck.name}`,
                            e.target.checked
                          )
                        }
                        // onChange={(e) =>
                        //   formik.setFieldValue(`${TherapeuticCheck.name}`, e.target.checked)
                        // }
                      />
                    }
                  />

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Fitness Consultation "
                    className="VBAIlabel therapiLab"
                    control={
                      <Checkbox
                        name={FitnessCheck.name}
                        // checked={FitnessCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[FitnessCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${FitnessCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Nutrition "
                    className="VBAIlabel therapiLab"
                    control={
                      <Checkbox
                        name={NutritionCheck.name}
                        // checked={NutritionCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[NutritionCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${NutritionCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Mindfulness Coaching "
                    className="VBAIlabel therapiLab"
                    control={
                      <Checkbox
                        name={MindfulnessCheck.name}
                        // checked={MindfulnessCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[MindfulnessCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${MindfulnessCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                </td>
                <td
                  style={{
                    padding: ".5rem .5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type={row1OtherInput.type}
                    name={row1OtherInput.name}
                    // value={row1OtherInputV}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row1OtherInput.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row1OtherInput.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCss"
                  />
                </td>
              </tr>
              {/* 2d row */}
              <tr className="trCss">
                <td className="firstSide">
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Myofascial/Manual Therapy  "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={MyofascialCheck.name}
                        // checked={MyofascialCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[MyofascialCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${MyofascialCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Passive/Active Stretching "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={StretchingCheck.name}
                        // checked={StretchingCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[StretchingCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${StretchingCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                </td>
                <td className="secondSide">
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="C/S  "
                    className="VBAIlabel right-div"
                    control={
                      <Checkbox
                        name={row2CSCheck.name}
                        // checked={row2CSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row2CSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row2CSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="T/S "
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        name={row2TSCheck.name}
                        // checked={row2TSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row2TSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row2TSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="L/S"
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        // style={{marginBottom: "5px"}}
                        name={row2LSCheck.name}
                        // checked={row2LSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row2LSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row2LSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Other"
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        name={row2OtherCheck.name}
                        // checked={row2OtherCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row2OtherCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row2OtherCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  {/* <FormField
                                type={type}
                                name={description1Input.name}
                                value={description1InputV}
                                className="therapiCss"
                            /> */}
                  <input
                    type={row2OtherInput1.type}
                    name={row2OtherInput1.name}
                    // value={row2OtherInput1V}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row2OtherInput1.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row2OtherInput1.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCssinput "
                  />
                </td>
                <td
                  style={{
                    padding: ".5rem .5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type={row2OtherInput2.type}
                    name={row2OtherInput2.name}
                    // value={row2OtherInput2V}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row2OtherInput2.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row2OtherInput2.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCss"
                  />
                </td>
              </tr>
              {/* 3rd row */}
              <tr className="trCss">
                <td className="firstSide">
                  <span className="spanLab">CMT:&nbsp;&nbsp;&nbsp;&nbsp;</span>

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Diversified  "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={DiversifiedCheck.name}
                        // checked={DiversifiedCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[DiversifiedCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${DiversifiedCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Activator "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={ActivatorCheck.name}
                        // checked={ActivatorCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[ActivatorCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${ActivatorCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Network "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={NetworkCheck.name}
                        // checked={NetworkCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[NetworkCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${NetworkCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Other: "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={row3OtherCheck.name}
                        // checked={row3OtherCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row3OtherCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row3OtherCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <input
                    type={row3OtherInput.type}
                    name={row3OtherInput.name}
                    // value={row3OtherInputV}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row3OtherInput.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row3OtherInput.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCssinput"
                  />
                </td>
                <td className="secondSide">
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="C/S  "
                    className="VBAIlabel right-div"
                    control={
                      <Checkbox
                        name={row3CSCheck.name}
                        // checked={row3CSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row3CSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row3CSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="T/S "
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        name={row3TSCheck.name}
                        // checked={row3TSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row3TSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row3TSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="L/S"
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        name={row3LSCheck.name}
                        // checked={row3LSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row3LSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row3LSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Other"
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        name={row3Other1Check.name}
                        // checked={row3Other1CheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row3Other1Check.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row3Other1Check.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  {/* <FormField
                                type={description1Input.type}
                                name={description1Input.name}
                                value={description1InputV}
                                className="therapiCss"
                            /> */}
                  <input
                    type={row3OtherInput1.type}
                    name={row3OtherInput1.name}
                    // value={row3OtherInput1V}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row3OtherInput1.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row3OtherInput1.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCssinput"
                  />
                </td>
                <td
                  style={{
                    padding: ".5rem .5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type={row3OtherInput2.type}
                    name={row3OtherInput2.name}
                    // value={row3OtherInput2V}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row3OtherInput2.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row3OtherInput2.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCss"
                  />
                </td>
              </tr>
              {/* 4th row */}
              <tr className="trCss">
                <td className="firstSide">
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="SOT Blocking   "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={BlockingCheck.name}
                        // checked={BlockingCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[BlockingCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${BlockingCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Ice "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={IceCheck.name}
                        // checked={IceCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[IceCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${IceCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Heat "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={HeatCheck.name}
                        // checked={HeatCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[HeatCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${HeatCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Other: "
                    className="VBAIlabel"
                    control={
                      <Checkbox
                        name={row4OtherCheck.name}
                        // checked={row4OtherCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row4OtherCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row4OtherCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />

                  <input
                    type={row4OtherInput.type}
                    name={row4OtherInput.name}
                    // value={row4OtherInputV}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row4OtherInput.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row4OtherInput.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCssinput"
                  />
                </td>
                <td className="secondSide">
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="C/S  "
                    className="VBAIlabel right-div"
                    control={
                      <Checkbox
                        name={row4CSCheck.name}
                        // checked={row4CSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row4CSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row4CSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="T/S "
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        name={row4TSCheck.name}
                        // checked={row4TSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row4TSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row4TSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="L/S"
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        name={row4LSCheck.name}
                        // checked={row4LSCheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row4LSCheck.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row4LSCheck.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    style={{ marginRight: "25px" }}
                    label="Other"
                    className="VBAIlabel "
                    control={
                      <Checkbox
                        name={row4Other1Check.name}
                        // checked={row4Other1CheckV}
                        // onChange={formik.handleChange}
                        checked={formik.values?.eightPage[index]?.[row4Other1Check.name]}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `eightPage[${index}].${row4Other1Check.name}`,
                            e.target.checked
                          )
                        }
                      />
                    }
                  />
                  {/* <FormField
                                type={description1Input.type}
                                name={description1Input.name}
                                value={description1InputV}
                                className="therapiCss"
                            /> */}
                  <input
                    type={row4OtherInput1.type}
                    name={row4OtherInput1.name}
                    // value={row4OtherInput1V}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row4OtherInput1.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row4OtherInput1.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCssinput"
                  />
                </td>
                <td
                  style={{
                    padding: ".5rem .5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <input
                    type={row4OtherInput2.type}
                    name={row4OtherInput2.name}
                    // value={row4OtherInput2V}
                    // onChange={formik.handleChange}
                    value={formik.values?.eightPage[index]?.[row4OtherInput2.name]}
                    onChange={(e) => {
                      formik.setFieldValue(
                        `eightPage[${index}].${row4OtherInput2.name}`,
                        e.target.value
                      );
                    }}
                    className="therapiCss"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

TherapiesTable.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default TherapiesTable;
