import React, { useEffect } from "react";
import sidebody from "../../../../../../assets/images/excercisetool/side.jpg";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";

function SideBody({ formik, index }) {
  return (
    <>
      <div className="container">
        <img src={sidebody} alt="SideBody" className="sideimg" />
        <div className="icon1">
          <Checkbox
            name={`excerciseDetails[${index}].humanSidebodyPointsEars`}
            value={formik.values?.excerciseDetails[index]?.humanSidebodyPointsEars}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanSidebodyPointsEars`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanSidebodyPointsEars}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </div>
        <div className="icon2">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanSidebodyPointsShoulder`}
            value={formik.values?.excerciseDetails[index]?.humanSidebodyPointsShoulder}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanSidebodyPointsShoulder`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanSidebodyPointsShoulder}
          />
        </div>
        <div className="icon3">
          <Checkbox
            name={`excerciseDetails[${index}].humanSidebodyPointsArm`}
            value={formik.values?.excerciseDetails[index]?.humanSidebodyPointsArm}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanSidebodyPointsArm`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanSidebodyPointsArm}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </div>
        <div className="icon4">
          <Checkbox
            name={`excerciseDetails[${index}].humanSidebodyPointsForearm`}
            value={formik.values?.excerciseDetails[index]?.humanSidebodyPointsForearm}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanSidebodyPointsForearm`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanSidebodyPointsForearm}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </div>
        <div className="icon5">
          <Checkbox
            name={`excerciseDetails[${index}].humanSidebodyPointsWrist`}
            value={formik.values?.excerciseDetails[index]?.humanSidebodyPointsWrist}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanSidebodyPointsWrist`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanSidebodyPointsWrist}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </div>
        <div className="icon6">
          <Checkbox
            name={`excerciseDetails[${index}].humanSidebodyPointsKnee`}
            value={formik.values?.excerciseDetails[index]?.humanSidebodyPointsKnee}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanSidebodyPointsKnee`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanSidebodyPointsKnee}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </div>
        <div className="icon7">
          <Checkbox
            name={`excerciseDetails[${index}].humanSidebodyPointsAnkle`}
            value={formik.values?.excerciseDetails[index]?.humanSidebodyPointsAnkle}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanSidebodyPointsAnkle`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanSidebodyPointsAnkle}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </div>
      </div>
    </>
  );
}
SideBody.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default SideBody;
