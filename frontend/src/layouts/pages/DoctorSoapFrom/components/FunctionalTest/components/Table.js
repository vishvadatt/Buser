import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";

function Table({ formik, index }) {
  const values = formik.values.FunctionalDetails;

  return (
    <>
      <div className="thead">
        <div className="Teststitle">
          <p>Primary Tests</p>
        </div>
        <div className="tablehead">
          <table className="table">
            <tr className="tableRow">
              <th></th>
              <th>(-)</th>
              <th>+1</th>
              <th>+2</th>
              <th>+3</th>
              <th>Occ</th>
              <th>C</th>
              <th>Sh</th>
              <th>Sc</th>
              <th>T1</th>
              <th>T</th>
              <th>MT</th>
              <th>L</th>
              <th>P</th>
              <th>Sa</th>
              <th>H</th>
              <th>K</th>
              <th>A</th>
            </tr>
            <tr>
              <td className="tableCol">HOH</td>
              <td className="tableCol1 round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHminus`}
                  value={formik.values?.FunctionalDetails[index]?.HoHminus}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHminus`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHminus}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].HoHplusone`}
                  value={formik.values?.FunctionalDetails[index]?.HoHplusone}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHplusone`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHplusone}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].HoHplustwo`}
                  value={formik.values?.FunctionalDetails[index]?.HoHplustwo}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHplustwo`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHplustwo}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].HoHplusthree`}
                  value={formik.values?.FunctionalDetails[index]?.HoHplusthree}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `FunctionalDetails[${index}].HoHplusthree`,
                      e.target.checked
                    )
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHplusthree}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHOcc`}
                  value={formik.values?.FunctionalDetails[index]?.HoHOcc}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHOcc`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHOcc}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHC`}
                  value={formik.values?.FunctionalDetails[index]?.HoHC}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHC`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHC}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHSh`}
                  value={formik.values?.FunctionalDetails[index]?.HoHSh}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHSh`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHSh}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHSc`}
                  value={formik.values?.FunctionalDetails[index]?.HoHSc}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHSc`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHSc}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHT1`}
                  value={formik.values?.FunctionalDetails[index]?.HoHT1}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHT1`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHT1}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHT`}
                  value={formik.values?.FunctionalDetails[index]?.HoHT}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHT`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHT}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHMT`}
                  value={formik.values?.FunctionalDetails[index]?.HoHMT}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHMT`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHMT}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHL`}
                  value={formik.values?.FunctionalDetails[index]?.HoHL}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHL`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHL}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHP`}
                  value={formik.values?.FunctionalDetails[index]?.HoHP}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHP`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHP}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHSa`}
                  value={formik.values?.FunctionalDetails[index]?.HoHSa}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHSa`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHSa}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHH`}
                  value={formik.values?.FunctionalDetails[index]?.HoHH}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHH`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHH}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHK`}
                  value={formik.values?.FunctionalDetails[index]?.HoHK}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHK`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHK}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].HoHA`}
                  value={formik.values?.FunctionalDetails[index]?.HoHA}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].HoHA`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.HoHA}
                />
              </td>
            </tr>
            <tr>
              <td className="tableCol">PT</td>
              <td className="tableCol1 round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTminus`}
                  value={formik.values?.FunctionalDetails[index]?.PTminus}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTminus`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTminus}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].PTplusone`}
                  value={formik.values?.FunctionalDetails[index]?.PTplusone}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTplusone`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTplusone}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].PTplustwo`}
                  value={formik.values?.FunctionalDetails[index]?.PTplustwo}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTplustwo`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTplustwo}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].PTplusthree`}
                  value={formik.values?.FunctionalDetails[index]?.PTplusthree}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `FunctionalDetails[${index}].PTplusthree`,
                      e.target.checked
                    )
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTplusthree}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTOcc`}
                  value={formik.values?.FunctionalDetails[index]?.PTOcc}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTOcc`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTOcc}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTC`}
                  value={formik.values?.FunctionalDetails[index]?.PTC}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTC`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTC}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTSh`}
                  value={formik.values?.FunctionalDetails[index]?.PTSh}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTSh`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTSh}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTSc`}
                  value={formik.values?.FunctionalDetails[index]?.PTSc}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTSc`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTSc}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTT1`}
                  value={formik.values?.FunctionalDetails[index]?.PTT1}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTT1`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTT1}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTT`}
                  value={formik.values?.FunctionalDetails[index]?.PTT}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTT`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTT}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTMT`}
                  value={formik.values?.FunctionalDetails[index]?.PTMT}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTMT`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTMT}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTL`}
                  value={formik.values?.FunctionalDetails[index]?.PTL}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTL`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTL}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTP`}
                  value={formik.values?.FunctionalDetails[index]?.PTP}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTP`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTP}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTSa`}
                  value={formik.values?.FunctionalDetails[index]?.PTSa}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTSa`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTSa}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTH`}
                  value={formik.values?.FunctionalDetails[index]?.PTH}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTH`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTH}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTK`}
                  value={formik.values?.FunctionalDetails[index]?.PTK}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTK`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTK}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].PTA`}
                  value={formik.values?.FunctionalDetails[index]?.PTA}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].PTA`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.PTA}
                />
              </td>
            </tr>
            <tr>
              <td className="tableCol">Both</td>
              <td className="tableCol1 round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].Bothminus`}
                  value={formik.values?.FunctionalDetails[index]?.Bothminus}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].Bothminus`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.Bothminus}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].Bothplusone`}
                  value={formik.values?.FunctionalDetails[index]?.Bothplusone}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `FunctionalDetails[${index}].Bothplusone`,
                      e.target.checked
                    )
                  }
                  checked={formik.values?.FunctionalDetails[index]?.Bothplusone}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].Bothplustwo`}
                  value={formik.values?.FunctionalDetails[index]?.Bothplustwo}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `FunctionalDetails[${index}].Bothplustwo`,
                      e.target.checked
                    )
                  }
                  checked={formik.values?.FunctionalDetails[index]?.Bothplustwo}
                />
              </td>
              <td className="round">
                <input
                  type="checkbox"
                  className="checkbox-round"
                  name={`FunctionalDetails[${index}].Bothplusthree`}
                  value={formik.values?.FunctionalDetails[index]?.Bothplusthree}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `FunctionalDetails[${index}].Bothplusthree`,
                      e.target.checked
                    )
                  }
                  checked={formik.values?.FunctionalDetails[index]?.Bothplusthree}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothOcc`}
                  value={formik.values?.FunctionalDetails[index]?.BothOcc}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothOcc`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothOcc}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothC`}
                  value={formik.values?.FunctionalDetails[index]?.BothC}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothC`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothC}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothSh`}
                  value={formik.values?.FunctionalDetails[index]?.BothSh}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothSh`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothSh}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothSc`}
                  value={formik.values?.FunctionalDetails[index]?.BothSc}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothSc`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothSc}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothT1`}
                  value={formik.values?.FunctionalDetails[index]?.BothT1}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothT1`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothT1}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothT`}
                  value={formik.values?.FunctionalDetails[index]?.BothT}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothT`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothT}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothMT`}
                  value={formik.values?.FunctionalDetails[index]?.BothMT}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothMT`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothMT}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothL`}
                  value={formik.values?.FunctionalDetails[index]?.BothL}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothL`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothL}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothP`}
                  value={formik.values?.FunctionalDetails[index]?.BothP}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothP`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothP}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothSa`}
                  value={formik.values?.FunctionalDetails[index]?.BothSa}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothSa`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothSa}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothH`}
                  value={formik.values?.FunctionalDetails[index]?.BothH}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothH`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothH}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothK`}
                  value={formik.values?.FunctionalDetails[index]?.BothK}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothK`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothK}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].BothA`}
                  value={formik.values?.FunctionalDetails[index]?.BothA}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].BothA`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.BothA}
                />
              </td>
            </tr>
            <tr className="">
              <td className="tableCol">CD</td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDHypo`}
                  value={formik.values?.FunctionalDetails[index]?.CDHypo}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDHypo`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDHypo}
                />
                <span className="checkBoxTitle">Hypo</span>
              </td>
              <td className="tableCol2 round"></td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDHyper`}
                  value={formik.values?.FunctionalDetails[index]?.CDHyper}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDHyper`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDHyper}
                />
                <span className="checkBoxTitle">Hyper</span>
              </td>
              <td className="tableCol2"></td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDOcc`}
                  value={formik.values?.FunctionalDetails[index]?.CDOcc}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDOcc`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDOcc}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDC`}
                  value={formik.values?.FunctionalDetails[index]?.CDC}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDC`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDC}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDSh`}
                  value={formik.values?.FunctionalDetails[index]?.CDSh}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDSh`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDSh}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDSc`}
                  value={formik.values?.FunctionalDetails[index]?.CDSc}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDSc`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDSc}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDT1`}
                  value={formik.values?.FunctionalDetails[index]?.CDT1}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDT1`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDT1}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDT`}
                  value={formik.values?.FunctionalDetails[index]?.CDT}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDT`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDT}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDMT`}
                  value={formik.values?.FunctionalDetails[index]?.CDMT}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDMT`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDMT}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDL`}
                  value={formik.values?.FunctionalDetails[index]?.CDL}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDL`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDL}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDP`}
                  value={formik.values?.FunctionalDetails[index]?.CDP}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDP`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDP}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDSa`}
                  value={formik.values?.FunctionalDetails[index]?.CDSa}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDSa`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDSa}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDH`}
                  value={formik.values?.FunctionalDetails[index]?.CDH}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDH`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDH}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDK`}
                  value={formik.values?.FunctionalDetails[index]?.CDK}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDK`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDK}
                />
              </td>
              <td className="tablecolcommon round">
                <input
                  type="checkbox"
                  className="checkbox-round1"
                  name={`FunctionalDetails[${index}].CDA`}
                  value={formik.values?.FunctionalDetails[index]?.CDA}
                  onChange={(e) =>
                    formik.setFieldValue(`FunctionalDetails[${index}].CDA`, e.target.checked)
                  }
                  checked={formik.values?.FunctionalDetails[index]?.CDA}
                />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
Table.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Table;
