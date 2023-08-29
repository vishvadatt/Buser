import { Checkbox, FormControlLabel } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
import React from "react";
import PropTypes from "prop-types";
import FormField from "../../FormField";

export const DropDownComponent = () => {
  return (
    <>
      <select placeholder="Select">
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
    </>
  );
};

export const DropDown = (propsValue) => {
  console.log("name..", propsValue.formik);
  return (
    <>
      <select name={propsValue.name} value={propsValue.value} onChange={propsValue.onChange}>
        <option></option>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
    </>
  );
};
function TableOne({ formData, formik, form, index }) {
  const { formField } = form;
  const { values } = formik;
  // const { values, touched, formField, errors, setFieldValue, handleChange } = formData;
  const {
    // flexion60_exam,
    // flexion60_pain,
    // flexion60_noPain,
    // flexion60_location,
    // flexion60_left,
    // flexion60_right,

    // extension50_exam,
    // extension50_pain,
    // extension50_noPain,
    // extension50_location,
    // extension50_left,
    // extension50_right,

    // leftLateralFlexion40_exam,
    // leftLateralFlexion40_pain,
    // leftLateralFlexion40_location,
    // leftLateralFlexion40_noPain,
    // leftLateralFlexion40_left,
    // leftLateralFlexion40_right,

    // rightLateralFlexion40_exam,
    // rightLateralFlexion40_pain,
    // rightLateralFlexion40_noPain,
    // rightLateralFlexion40_location,
    // rightLateralFlexion40_left,
    // rightLateralFlexion40_right,

    // leftRotation80_exam,
    // leftRotation80_pain,
    // leftRotation80_noPain,
    // leftRotation80_location,
    // leftRotation80_left,
    // leftRotation80_right,

    // rightRotation80_exam,
    // rightRotation80_pain,
    // rightRotation80_noPain,
    // rightRotation80_location,
    // rightRotation80_left,
    // rightRotation80_right,

    cervicalRegionalNotes1,
    cervicalRegionalNotes2,
    MaximalForaminalCompression_left,
    MaximalForaminalCompression_right,
    ODonoghuesManeuver,
  } = formField;

  const {
    // flexion60_exam: flexion60_examV,
    // flexion60_pain: flexion60_painV,
    // flexion60_noPain: flexion60_noPainV,
    // flexion60_location: flexion60_locationV,
    // flexion60_left: flexion60_leftV,
    // flexion60_right: flexion60_rightV,

    // extension50_exam: extension50_examV,
    // extension50_pain: extension50_painV,
    // extension50_noPain: extension50_noPainV,
    // extension50_location: extension50_locationV,
    // extension50_left: extension50_leftV,
    // extension50_right: extension50_rightV,

    // leftLateralFlexion40_exam: leftLateralFlexion40_examV,
    // leftLateralFlexion40_pain: leftLateralFlexion40_painV,
    // leftLateralFlexion40_noPain: leftLateralFlexion40_noPainV,
    // leftLateralFlexion40_location: leftLateralFlexion40_locationV,
    // leftLateralFlexion40_left: leftLateralFlexion40_leftV,
    // leftLateralFlexion40_right: leftLateralFlexion40_rightV,

    // rightLateralFlexion40_exam: rightLateralFlexion40_examV,
    // rightLateralFlexion40_pain: rightLateralFlexion40_painV,
    // rightLateralFlexion40_noPain: rightLateralFlexion40_noPainV,
    // rightLateralFlexion40_location: rightLateralFlexion40_locationV,
    // rightLateralFlexion40_left: rightLateralFlexion40_leftV,
    // rightLateralFlexion40_right: rightLateralFlexion40_rightV,

    // leftRotation80_exam: leftRotation80_examV,
    // leftRotation80_pain: leftRotation80_painV,
    // leftRotation80_noPain: leftRotation80_noPainV,
    // leftRotation80_location: leftRotation80_locationV,
    // leftRotation80_left: leftRotation80_leftV,
    // leftRotation80_right: leftRotation80_rightV,

    // rightRotation80_exam: rightRotation80_examV,
    // rightRotation80_pain: rightRotation80_painV,
    // rightRotation80_noPain: rightRotation80_noPainV,
    // rightRotation80_location: rightRotation80_locationV,
    // rightRotation80_left: rightRotation80_leftV,
    // rightRotation80_right: rightRotation80_rightV,

    cervicalRegionalNotes1: cervicalRegionalNotes1V,
    cervicalRegionalNotes2: cervicalRegionalNotes2V,
    MaximalForaminalCompression_left: MaximalForaminalCompression_leftV,
    MaximalForaminalCompression_right: MaximalForaminalCompression_rightV,
    ODonoghuesManeuver: ODonoghuesManeuverV,
  } = values;
  let leftArray = [
    { value: "+", label: "+" },
    { value: "-", label: "-" },
  ];
  // console.log("leftLateralFlexion40_leftV...", leftLateralFlexion40_leftV);

  const dataArray = [1, 2, 3, 4, 5, 6];
  return (
    <SoftBox>
      <table border={1} className="content-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }} colSpan={8}>
              Cervical Regional:
            </th>
          </tr>
          <tr>
            <th>Range of Motion</th>
            <th>Exam</th>
            <th>Pain</th>
            <th>No Pain</th>
            <th>Location</th>
            <th>Orthopedic Tests</th>
            <th>Left</th>
            <th>Right</th>
          </tr>
        </thead>
        <tbody>
          {dataArray &&
            dataArray.map((data, i) => {
              return (
                // <tr key={i}>
                //   <td>{data.RangeofMotion}</td>
                //   <td className="InputTdClass">{data.exam}</td>
                //   <td>{data.pain}</td>
                //   <td>{data.noPain}</td>
                //   <td>{data.location}</td>
                //   <td>{data.OrthopedicTests}</td>
                //   <td style={{paddingLeft : "15px"}}>{data.left}</td>
                //   <td style={{paddingLeft : "15px"}}>{data.right}</td>
                // </tr>
                <tr key={i}>
                  <td style={{ textAlign: "right", paddingRight: "5px" }}>
                    {values?.fifteenthPage[index]?.CervicalRegional_Array[i]?.RangeofMotion}
                  </td>
                  <td>
                    <input
                      type="text"
                      name={`CervicalRegional_Array[${i}].exam`}
                      // value={values?.CervicalRegional_Array[i]?.exam}
                      // onChange={formik.handleChange}
                      value={formik.values?.fifteenthPage[index]?.CervicalRegional_Array[i].exam}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `fifteenthPage[${index}].CervicalRegional_Array[${i}].exam`,
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="table1Pain">
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={`CervicalRegional_Array[${i}].isPain`}
                          // checked={values?.CervicalRegional_Array[i]?.isPain}
                          // onChange={(e) => {
                          //   formik.setFieldValue(
                          //     `CervicalRegional_Array[${i}].isPain`,
                          //     e.target.checked
                          //   );
                          // }}
                          checked={
                            formik.values?.fifteenthPage[index]?.CervicalRegional_Array[i].isPain
                          }
                          onChange={(e) =>
                            formik.setFieldValue(
                              `fifteenthPage[${index}].CervicalRegional_Array[${i}].isPain`,
                              e.target.checked
                            )
                          }
                        />
                      }
                    />
                  </td>
                  <td className="table1Pain">
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={`CervicalRegional_Array[${i}].isNoPain`}
                          // checked={values?.CervicalRegional_Array[i]?.isNoPain}
                          // onChange={(e) => {
                          //   formik.setFieldValue(
                          //     `CervicalRegional_Array[${i}].isNoPain`,
                          //     e.target.checked
                          //   );
                          // }}
                          checked={
                            formik.values?.fifteenthPage[index]?.CervicalRegional_Array[i].isNoPain
                          }
                          onChange={(e) =>
                            formik.setFieldValue(
                              `fifteenthPage[${index}].CervicalRegional_Array[${i}].isNoPain`,
                              e.target.checked
                            )
                          }
                        />
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name={`CervicalRegional_Array[${i}].location`}
                      // value={values?.CervicalRegional_Array[i]?.location}
                      // onChange={formik.handleChange}
                      value={
                        formik.values?.fifteenthPage[index]?.CervicalRegional_Array[i].location
                      }
                      onChange={(e) =>
                        formik.setFieldValue(
                          `fifteenthPage[${index}].CervicalRegional_Array[${i}].location`,
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td style={{ textAlign: "right", paddingRight: "5px" }}>
                    {values?.fifteenthPage[index]?.CervicalRegional_Array[i]?.OrthopedicTests}
                  </td>
                  <td className="table1Pain">
                    <DropDown
                      name={`CervicalRegional_Array[${i}].left`}
                      // value={values?.CervicalRegional_Array[i]?.left}
                      value={formik.values?.fifteenthPage[index]?.CervicalRegional_Array[i]?.left}
                      onChange={(e) => {
                        formik.setFieldValue(
                          `fifteenthPage[${index}].CervicalRegional_Array[${i}]?.left`,
                          e.target.value
                        );
                      }}
                      formik={formik}
                    />
                  </td>
                  <td className="table1Pain">
                    <DropDown
                      name={`CervicalRegional_Array[${i}].right`}
                      // value={values?.CervicalRegional_Array[i]?.right}
                      value={formik.values?.fifteenthPage[index]?.CervicalRegional_Array[i]?.right}
                      onChange={(e) => {
                        formik.setFieldValue(
                          `fifteenthPage[${index}].CervicalRegional_Array[${i}]?.right`,
                          e.target.value
                        );
                      }}
                      formik={formik}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>

        <tr>
          <td colSpan={5}>
            {/* <FormField type={cervicalRegionalNotes1.type} label={cervicalRegionalNotes1.label} name={cervicalRegionalNotes1.name} value={cervicalRegionalNotes1V} /> */}
            <input
              placeholder="Notes:"
              type={cervicalRegionalNotes1.type}
              label={cervicalRegionalNotes1.label}
              name={cervicalRegionalNotes1.name}
              // onChange={formik.handleChange}
              // value={cervicalRegionalNotes1V}
              value={formik.values?.fifteenthPage[index]?.[cervicalRegionalNotes1.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `fifteenthPage[${index}].${cervicalRegionalNotes1.name}`,
                  e.target.value
                )
              }
            />
          </td>
          <td style={{ textAlign: "right", paddingRight: "5px" }}>Maximal Foraminal Compression</td>
          <td className="table1Pain">
            <DropDown
              name={MaximalForaminalCompression_left.name}
              // value={MaximalForaminalCompression_leftV}
              value={formik.values?.fifteenthPage[index]?.[MaximalForaminalCompression_left.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `fifteenthPage[${index}].${MaximalForaminalCompression_left.name}`,
                  e.target.value
                );
              }}
              formik={formik}
            />
          </td>
          <td className="table1Pain">
            <DropDown
              name={MaximalForaminalCompression_right.name}
              // value={MaximalForaminalCompression_rightV}
              value={formik.values?.fifteenthPage[index]?.[MaximalForaminalCompression_right.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `fifteenthPage[${index}].${MaximalForaminalCompression_right.name}`,
                  e.target.value
                );
              }}
              formik={formik}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={5}>
            {/* <FormField type={cervicalRegionalNotes2.label} label={cervicalRegionalNotes2.label} name={cervicalRegionalNotes2.name} value={cervicalRegionalNotes2V} /> */}
            <input
              type={cervicalRegionalNotes2.label}
              label={cervicalRegionalNotes2.label}
              name={cervicalRegionalNotes2.name}
              // onChange={formik.handleChange}
              // value={cervicalRegionalNotes2V}
              value={formik.values?.fifteenthPage[index]?.[cervicalRegionalNotes2.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `fifteenthPage[${index}].${cervicalRegionalNotes2.name}`,
                  e.target.value
                )
              }
            />
          </td>
          <td style={{ textAlign: "right", paddingRight: "5px" }}>O’Donoghue’s Maneuver</td>
          <td colSpan={2} className="">
            <div>
              <select
                name={ODonoghuesManeuver.name}
                // value={ODonoghuesManeuverV}
                // onChange={formik.handleChange}
                value={formik.values?.fifteenthPage[index]?.[ODonoghuesManeuver.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `fifteenthPage[${index}].${ODonoghuesManeuver.name}`,
                    e.target.value
                  );
                }}
                style={{ width: "100%" }}
                className="ODonoghuesManeuver-dropdown"
              >
                <option></option>
                <option value="+">+</option>
                <option value="-">-</option>
              </select>
              {/* <DropDown formik={formik} style={{ colo }} /> */}
            </div>
          </td>
        </tr>
      </table>
    </SoftBox>
  );
}

TableOne.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default TableOne;
