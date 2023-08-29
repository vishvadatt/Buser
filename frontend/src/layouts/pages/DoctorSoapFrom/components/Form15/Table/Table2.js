import { Checkbox, FormControlLabel } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
import React from "react";
import PropTypes from "prop-types";
import FormField from "../../FormField";
import "./style.css";

// export const DropDownComponent = () => {
//   return (
//     <>
//       <select placeholder="Select">
//         <option value="+">+</option>
//         <option value="-">-</option>
//       </select>
//     </>
//   )
// }
export const DropDown = (propsValue) => {
  console.log("propsValue...", propsValue);

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
const TableTwo = ({ formData, formik, form, index }) => {
  const { formField } = form;
  const { values } = formik;
  // const {values,touched,formField,errors,setFieldValue,handleChange} = formData;
  const { lumbarRegionalNotes1, Yeomans_left, Yeomans_right } = formField;
  const {
    lumbarRegionalNotes1: lumbarRegionalNotes1V,

    Yeomans_left: Yeomans_leftV,
    Yeomans_right: Yeomans_rightV,
  } = values;

  let leftArray = [
    { value: "+", label: "+" },
    { value: "-", label: "-" },
  ];
  const dataArray1 = [1, 2, 3, 4, 5, 6];

  return (
    <SoftBox>
      <table border={1} className="content-table red">
        <thead>
          <tr>
            <td style={{ textAlign: "center" }} colSpan={8}>
              Lumbar Regional:
            </td>
          </tr>
          <tr>
            <th>Range of Motion</th>
            <th>Exam</th>
            <th>Pain</th>
            <th>No Pain</th>
            <th>Location</th>
            <th>Orthopedic Tests</th>
            <th>Left</th>
            <th className="rightControl">Right</th>
          </tr>
        </thead>

        <tbody>
          {dataArray1 &&
            dataArray1.map((data, i) => {
              return (
                // <tr key={i}>
                //   <td>{data.RangeofMotion}</td>
                //   <td>{data.exam}</td>
                //   <td>{data.pain}</td>
                //   <td>{data.noPain}</td>
                //   <td>{data.location}</td>
                //   <td>{data.OrthopedicTests}</td>
                //   <td style={{paddingLeft : "15px"}}>{data.left}</td>
                //   <td style={{paddingLeft : "15px"}}>{data.right}</td>
                // </tr>

                <tr key={i}>
                  <td style={{ textAlign: "right", paddingRight: "5px" }}>
                    {values?.fifteenthPage[index]?.lumbarRegional_Array[i]?.RangeofMotion}
                  </td>
                  <td>
                    <input
                      type="text"
                      name={`lumbarRegional_Array[${i}].exam`}
                      // value={values?.lumbarRegional_Array[i]?.exam}
                      // onChange={formik.handleChange}
                      value={formik.values?.fifteenthPage[index]?.lumbarRegional_Array[i].exam}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `fifteenthPage[${index}].lumbarRegional_Array[${i}].exam`,
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="table1Pain">
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={`lumbarRegional_Array[${i}].isPain`}
                          // checked={values?.lumbarRegional_Array[i]?.isPain}
                          // onChange={(e) => {
                          //   formik.setFieldValue(
                          //     `lumbarRegional_Array[${i}].isPain`,
                          //     e.target.checked
                          //   );
                          // }}
                          checked={
                            formik.values?.fifteenthPage[index]?.lumbarRegional_Array[i].isPain
                          }
                          onChange={(e) =>
                            formik.setFieldValue(
                              `fifteenthPage[${index}].lumbarRegional_Array[${i}].isPain`,
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
                          name={`lumbarRegional_Array[${i}].isNoPain`}
                          // checked={values?.lumbarRegional_Array[i]?.isNoPain}
                          // onChange={(e) => {
                          //   formik.setFieldValue(
                          //     `lumbarRegional_Array[${i}].isNoPain`,
                          //     e.target.checked
                          //   );
                          // }}
                          checked={
                            formik.values?.fifteenthPage[index]?.lumbarRegional_Array[i].isNoPain
                          }
                          onChange={(e) =>
                            formik.setFieldValue(
                              `fifteenthPage[${index}].lumbarRegional_Array[${i}].isNoPain`,
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
                      name={`lumbarRegional_Array[${i}].location`}
                      // value={values?.lumbarRegional_Array[i]?.location}
                      // onChange={formik.handleChange}
                      value={formik.values?.fifteenthPage[index]?.lumbarRegional_Array[i].location}
                      onChange={(e) =>
                        formik.setFieldValue(
                          `fifteenthPage[${index}].lumbarRegional_Array[${i}].location`,
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td style={{ textAlign: "right", paddingRight: "5px" }}>
                    {values?.fifteenthPage[index]?.lumbarRegional_Array[i]?.OrthopedicTests}
                  </td>
                  <td className="table1Pain">
                    <DropDown
                      name={`lumbarRegional_Array[${i}].left`}
                      // value={values?.lumbarRegional_Array[i]?.left}
                      value={formik.values?.fifteenthPage[index]?.lumbarRegional_Array[i]?.left}
                      onChange={(e) => {
                        formik.setFieldValue(
                          `fifteenthPage[${index}].lumbarRegional_Array[${i}]?.left`,
                          e.target.value
                        );
                      }}
                      formik={formik}
                    />
                  </td>
                  <td className="table1Pain">
                    <DropDown
                      name={`lumbarRegional_Array[${i}].right`}
                      // value={values?.lumbarRegional_Array[i]?.right}
                      value={formik.values?.fifteenthPage[index]?.lumbarRegional_Array[i]?.right}
                      onChange={(e) => {
                        formik.setFieldValue(
                          `fifteenthPage[${index}].lumbarRegional_Array[${i}]?.right`,
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
            {/* <FormField type={lumbarRegionalNotes1.type} label={lumbarRegionalNotes1.label} name={lumbarRegionalNotes1.name} value={lumbarRegionalNotes1V} /> */}
            <input
              placeholder="Notes:"
              type={lumbarRegionalNotes1.type}
              label={lumbarRegionalNotes1.label}
              name={lumbarRegionalNotes1.name}
              // value={lumbarRegionalNotes1V}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[lumbarRegionalNotes1.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `fifteenthPage[${index}].${lumbarRegionalNotes1.name}`,
                  e.target.value
                )
              }
            />
          </td>
          <td style={{ textAlign: "right", paddingRight: "5px" }}>Yeoman&apos;s</td>
          <td className="table1Pain">
            <DropDown
              name={Yeomans_left.name}
              //  value={Yeomans_leftV}
              value={formik.values?.fifteenthPage[index]?.[Yeomans_left.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `fifteenthPage[${index}].${Yeomans_left.name}`,
                  e.target.value
                );
              }}
              formik={formik}
            />
          </td>
          <td className="table1Pain">
            <DropDown
              name={Yeomans_right.name}
              // value={Yeomans_rightV}
              value={formik.values?.fifteenthPage[index]?.[Yeomans_right.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `fifteenthPage[${index}].${Yeomans_right.name}`,
                  e.target.value
                );
              }}
              formik={formik}
            />
          </td>
        </tr>
      </table>
    </SoftBox>
  );
};
TableTwo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default TableTwo;
