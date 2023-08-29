import React from "react";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import "../style.css";

function BodyDiamesiontable({ formik, index }) {
  const values = formik.values.excerciseDetails;

  return (
    <>
      <Grid container spacing={2} className="humandesc">
        <table border={1}>
          <tr>
            <th colSpan="3" scope="colgroup" className="tableHeaddesc">
              <label>SHOULDER</label>
            </th>
          </tr>
          <tr>
            <td style={{ borderRight: " 1px solid black" }}>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].leftshoulderdesc`}
                value={formik.values?.excerciseDetails[index]?.leftshoulderdesc}
                onChange={(e) =>
                  formik.setFieldValue(
                    `excerciseDetails[${index}].leftshoulderdesc`,
                    e.target.value
                  )
                }
                label="leftshoulderdesc"
                maxLength={3}
              />
            </td>
            <td>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].rightshoulderdesc`}
                value={formik.values?.excerciseDetails[index]?.rightshoulderdesc}
                onChange={(e) =>
                  formik.setFieldValue(
                    `excerciseDetails[${index}].rightshoulderdesc`,
                    e.target.value
                  )
                }
                maxLength={3}
              />
            </td>
          </tr>
        </table>
        <table border={1}>
          <tr>
            <th colSpan="3" scope="colgroup" className="tableHeaddesc">
              <label>THORACIC</label>
            </th>
          </tr>
          <tr>
            <td style={{ borderRight: " 1px solid black" }}>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].leftthoricdesc`}
                value={formik.values?.excerciseDetails[index]?.leftthoricdesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].leftthoricdesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
            <td>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].rightthoricdesc`}
                value={formik.values?.excerciseDetails[index]?.rightthoricdesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].rightthoricdesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
          </tr>
        </table>
        <table border={1}>
          <tr>
            <th colSpan="3" scope="colgroup" className="tableHeaddesc">
              <label>PELVIS</label>
            </th>
          </tr>
          <tr>
            <td style={{ borderRight: " 1px solid black" }}>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].leftpelvisdesc`}
                value={formik.values?.excerciseDetails[index]?.leftpelvisdesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].leftpelvisdesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
            <td>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].rightpelvisdesc`}
                value={formik.values?.excerciseDetails[index]?.rightpelvisdesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].rightpelvisdesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
          </tr>
        </table>
        <table border={1}>
          <tr>
            <th colSpan="3" scope="colgroup" className="tableHeaddesc">
              <label>HIP</label>
            </th>
          </tr>
          <tr>
            <td style={{ borderRight: " 1px solid black" }}>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].lefthipdesc`}
                value={formik.values?.excerciseDetails[index]?.lefthipdesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].lefthipdesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
            <td>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].righthipdesc`}
                value={formik.values?.excerciseDetails[index]?.righthipdesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].righthipdesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
          </tr>
        </table>
        <table border={1}>
          <tr>
            <th colSpan="3" scope="colgroup" className="tableHeaddesc">
              <label>KNEE</label>
            </th>
          </tr>
          <tr>
            <td style={{ borderRight: " 1px solid black" }}>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].leftkneedesc`}
                value={formik.values?.excerciseDetails[index]?.leftkneedesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].leftkneedesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
            <td>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].rightkneedesc`}
                value={formik.values?.excerciseDetails[index]?.rightkneedesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].rightkneedesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
          </tr>
        </table>
        <table border={1}>
          <tr>
            <th colSpan="3" scope="colgroup" className="tableHeaddesc">
              <label>ANKLE</label>
            </th>
          </tr>
          <tr>
            <td style={{ borderRight: " 1px solid black" }}>
              <input
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                name={`excerciseDetails[${index}].leftankledesc`}
                value={formik.values?.excerciseDetails[index]?.leftankledesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].leftankledesc`, e.target.value)
                }
                maxLength={3}
              />
            </td>
            <td>
              <input
                name={`excerciseDetails[${index}].rightankledesc`}
                value={formik.values?.excerciseDetails[index]?.rightankledesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].rightankledesc`, e.target.value)
                }
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                maxLength={3}
              />
            </td>
          </tr>
        </table>
        <table border={1}>
          <tr>
            <th colSpan="3" scope="colgroup" className="tableHeaddesc">
              <label>HEAD</label>
            </th>
          </tr>
          <tr>
            <td style={{ borderRight: " 1px solid black" }}>
              <input
                name={`excerciseDetails[${index}].leftheaddesc`}
                value={formik.values?.excerciseDetails[index]?.leftheaddesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].leftheaddesc`, e.target.value)
                }
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                maxLength={3}
              />
            </td>
            <td>
              <input
                name={`excerciseDetails[${index}].rightheaddesc`}
                value={formik.values?.excerciseDetails[index]?.rightheaddesc}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].rightheaddesc`, e.target.value)
                }
                style={{
                  height: "80px",
                  width: "65px",
                  fontSize: "20px",
                }}
                className="shouldertextinput"
                maxLength={3}
              />
            </td>
          </tr>
        </table>
      </Grid>
    </>
  );
}
BodyDiamesiontable.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default BodyDiamesiontable;
