import React from "react";
import PropTypes from "prop-types";
import { staticArray } from "../../Schema/initialValues";

function TableTwo({ formik, mainIndex }) {
  console.log("formik..", formik);

  return (
    <>
      <table
        border={1}
        style={{ border: "3px solid black", width: "100%", backgroundColor: "#e7e7e7" }}
        className="tableContainer5"
      >
        <thead>
          <tr>
            <th className="fixWidth" style={{ borderRight: 0, borderBottom: "0px" }}>
              Ex Check-L
            </th>
            <th style={{ textAlign: "center", borderRight: 0, borderLeft: 0 }}>1.1</th>
            <th style={{ textAlign: "center", borderRight: 0, borderLeft: 0 }}>2.1</th>
            <th style={{ textAlign: "center", borderRight: 0, borderLeft: 0 }}>3.1</th>
            <th style={{ textAlign: "center", borderRight: 0, borderLeft: 0 }}>4.1</th>
            <th style={{ textAlign: "center", borderRight: 0, borderLeft: 0 }}>5.1</th>
            <th style={{ textAlign: "center", borderRight: 0, borderLeft: 0 }}>6.1</th>
            <th style={{ textAlign: "center", borderRight: 0, borderLeft: 0 }}>7.1</th>
            <th style={{ textAlign: "center", borderRight: 0, borderLeft: 0 }}>8.1</th>
          </tr>
        </thead>
        {/* {formik.values.clientProgramsList.map((mainData, mainIndex) => {
          return (
            <> */}
        {staticArray &&
          staticArray.map((data, i) => {
            return (
              <>
                <tbody>
                  <tr>
                    <td
                      className="fixWidth"
                      style={{
                        borderTop: "0px",
                        borderBottom: "0px",
                        color: data.color,
                        fontWeight: 600,
                      }}
                    >
                      {data.step}
                    </td>
                    <td className={` borderTopBold borderLeftBold ${i === 0 && "firstRowHeight"}`}>
                      <input
                        type="text"
                        style={{
                          color: `${
                            i === 1 || i === 2 || i === 3
                              ? "#fe02ff"
                              : i === 16
                              ? "#6c5ccd"
                              : i === 17
                              ? "#058000"
                              : "#4785b9"
                          }`,
                        }}
                        className="inputClasses"
                        name={`clientProgramsList[${mainIndex}].clientProgram2[${i}].column1`}
                        value={
                          formik.values?.clientProgramsList[mainIndex]?.clientProgram2[i]?.column1
                        }
                        onChange={formik.handleChange}
                      />
                    </td>
                    <td className={`borderTopBold ${i === 0 && "firstRowHeight"} `}>
                      <input
                        type="text"
                        style={{
                          color: `${
                            i === 1 || i === 2 || i === 3
                              ? "#fe02ff"
                              : i === 16
                              ? "#6c5ccd"
                              : i === 17
                              ? "#058000"
                              : "#4785b9"
                          }`,
                        }}
                        className="inputClasses"
                        name={`clientProgramsList[${mainIndex}].clientProgram2[${i}].column2`}
                        value={
                          formik.values?.clientProgramsList[mainIndex]?.clientProgram2[i]?.column2
                        }
                        onChange={formik.handleChange}
                      />
                    </td>
                    <td className={`borderTopBold ${i === 0 && "firstRowHeight"} `}>
                      <input
                        type="text"
                        style={{
                          color: `${
                            i === 1 || i === 2 || i === 3
                              ? "#fe02ff"
                              : i === 16
                              ? "#6c5ccd"
                              : i === 17
                              ? "#058000"
                              : "#4785b9"
                          }`,
                        }}
                        className="inputClasses"
                        name={`clientProgramsList[${mainIndex}].clientProgram2[${i}].column3`}
                        value={
                          formik.values?.clientProgramsList[mainIndex]?.clientProgram2[i]?.column3
                        }
                        onChange={formik.handleChange}
                      />
                    </td>
                    <td className={`borderTopBold ${i === 0 && "firstRowHeight"} `}>
                      <input
                        type="text"
                        style={{
                          color: `${
                            i === 1 || i === 2 || i === 3
                              ? "#fe02ff"
                              : i === 16
                              ? "#6c5ccd"
                              : i === 17
                              ? "#058000"
                              : "#4785b9"
                          }`,
                        }}
                        className="inputClasses"
                        name={`clientProgramsList[${mainIndex}].clientProgram2[${i}].column4`}
                        value={
                          formik.values?.clientProgramsList[mainIndex]?.clientProgram2[i]?.column4
                        }
                        onChange={formik.handleChange}
                      />
                    </td>
                    <td className={`borderTopBold ${i === 0 && "firstRowHeight"} `}>
                      <input
                        type="text"
                        style={{
                          color: `${
                            i === 1 || i === 2 || i === 3
                              ? "#fe02ff"
                              : i === 16
                              ? "#6c5ccd"
                              : i === 17
                              ? "#058000"
                              : "#4785b9"
                          }`,
                        }}
                        className="inputClasses"
                        name={`clientProgramsList[${mainIndex}].clientProgram2[${i}].column5`}
                        value={
                          formik.values?.clientProgramsList[mainIndex]?.clientProgram2[i]?.column5
                        }
                        onChange={formik.handleChange}
                      />
                    </td>
                    <td className={`borderTopBold ${i === 0 && "firstRowHeight"} `}>
                      <input
                        type="text"
                        style={{
                          color: `${
                            i === 1 || i === 2 || i === 3
                              ? "#fe02ff"
                              : i === 16
                              ? "#6c5ccd"
                              : i === 17
                              ? "#058000"
                              : "#4785b9"
                          }`,
                        }}
                        className="inputClasses"
                        name={`clientProgramsList[${mainIndex}].clientProgram2[${i}].column6`}
                        value={
                          formik.values?.clientProgramsList[mainIndex]?.clientProgram2[i]?.column6
                        }
                        onChange={formik.handleChange}
                      />
                    </td>
                    <td className={`borderTopBold ${i === 0 && "firstRowHeight"} `}>
                      <input
                        type="text"
                        style={{
                          color: `${
                            i === 1 || i === 2 || i === 3
                              ? "#fe02ff"
                              : i === 16
                              ? "#6c5ccd"
                              : i === 17
                              ? "#058000"
                              : "#4785b9"
                          }`,
                        }}
                        className="inputClasses"
                        name={`clientProgramsList[${mainIndex}].clientProgram2[${i}].column7`}
                        value={
                          formik.values?.clientProgramsList[mainIndex]?.clientProgram2[i]?.column7
                        }
                        onChange={formik.handleChange}
                      />
                    </td>
                    <td className={`borderTopBold ${i === 0 && "firstRowHeight"} `}>
                      <input
                        type="text"
                        style={{
                          color: `${
                            i === 1 || i === 2 || i === 3
                              ? "#fe02ff"
                              : i === 16
                              ? "#6c5ccd"
                              : i === 17
                              ? "#058000"
                              : "#4785b9"
                          }`,
                        }}
                        className="inputClasses"
                        name={`clientProgramsList[${mainIndex}].clientProgram2[${i}].column8`}
                        value={
                          formik.values?.clientProgramsList[mainIndex]?.clientProgram2[i]?.column8
                        }
                        onChange={formik.handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        {/* </>
          );
        })} */}
      </table>
    </>
  );
}
TableTwo.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  mainIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TableTwo;
