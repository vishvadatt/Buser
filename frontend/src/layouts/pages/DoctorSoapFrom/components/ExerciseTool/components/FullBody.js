import React from "react";
import fullbody from "../../../../../../assets/images/excercisetool/front.jpg";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";

function FullBody({ formik, index }) {
  const values = formik.values.excerciseDetails;

  return (
    <>
      <div className="container">
        <img src={fullbody} alt="Snow" className="sideimg" />
        <div className="icon8">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].check`}
            value={formik.values?.excerciseDetails[index]?.check}
            onChange={(e) =>
              formik.setFieldValue(`excerciseDetails[${index}].check`, e.target.checked)
            }
            checked={formik.values?.excerciseDetails[index]?.check}
            // name="check"
            // onChange={formik.handleChange}
            // checked={checkV}
            // value={checkV}
          />
        </div>
        <div className="icon9">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsadamsapple`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsadamsapple}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsadamsapple`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsadamsapple}
            // value={humanFullbodyPointsadamsappleV}
            // name="humanFullbodyPointsadamsapple"
            // onChange={formik.handleChange}
            // checked={humanFullbodyPointsadamsappleV}
          />
        </div>
        <div className="icon10">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsleftshoulder`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsleftshoulder}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsleftshoulder`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsleftshoulder}
            // name="humanFullbodyPointsleftshoulder"
            // value={humanFullbodyPointsleftshoulderV}
            // onChange={formik.handleChange}
            // checked={humanFullbodyPointsleftshoulderV}
          />
        </div>
        <div className="icon11">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointschest`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointschest}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointschest`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointschest}
            // name="humanFullbodyPointschest"
            // value={humanFullbodyPointschestV}
            // onChange={formik.handleChange}
            // checked={humanFullbodyPointschestV}
          />
        </div>
        <div className="icon12">
          <Checkbox
            style={{
              width: 14,
              height: 14,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsrightabdominal`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsrightabdominal}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsrightabdominal`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsrightabdominal}
            // value={humanFullbodyPointsrightabdominalV}
            // name="humanFullbodyPointsrightabdominal"
            // onChange={formik.handleChange}
            // checked={humanFullbodyPointsrightabdominalV}
          />
        </div>
        <div className="icon13">
          <Checkbox
            style={{
              width: 14,
              height: 14,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsabdominal`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsabdominal}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsabdominal`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsabdominal}
            // value={humanFullbodyPointsabdominalV}
            // name="humanFullbodyPointsabdominal"
            // onChange={formik.handleChange}
            // checked={humanFullbodyPointsabdominalV}
          />
        </div>
        <div className="icon14">
          <Checkbox
            style={{
              width: 14,
              height: 14,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsleftabdominal`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsleftabdominal}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsleftabdominal`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsleftabdominal}
            // value={humanFullbodyPointsleftabdominalV}
            // name="humanFullbodyPointsleftabdominal"
            // onChange={formik.handleChange}
            // checked={humanFullbodyPointsleftabdominalV}
          />
        </div>
        <div className="icon15">
          <Checkbox
            style={{
              width: 14,
              height: 14,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsrighthip`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsrighthip}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsrighthip`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsrighthip}
            // value={humanFullbodyPointsrighthipV}
            // checked={humanFullbodyPointsrighthipV}
            // name="humanFullbodyPointsrighthip"
            // onChange={formik.handleChange}
          />
        </div>
        <div className="icon16">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointslefthip`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointslefthip}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointslefthip`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointslefthip}
            // value={humanFullbodyPointslefthipV}
            // checked={humanFullbodyPointslefthipV}
            // name="humanFullbodyPointslefthip"
            // onChange={formik.handleChange}
          />
        </div>
        <div className="icon17">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsrighttknee`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsrighttknee}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsrighttknee`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsrighttknee}
            // value={humanFullbodyPointsrighttkneeV}
            // checked={humanFullbodyPointsrighttkneeV}
            // name="humanFullbodyPointsrighttknee"
            // onChange={formik.handleChange}
          />
        </div>
        <div className="icon18">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsleftknee`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsleftknee}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsleftknee`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsleftknee}
            // value={humanFullbodyPointsleftkneeV}
            // checked={humanFullbodyPointsleftkneeV}
            // name="humanFullbodyPointsleftknee"
            // onChange={formik.handleChange}
          />
        </div>
        <div className="icon19">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsrighankle`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsrighankle}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsrighankle`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsrighankle}
            // value={humanFullbodyPointsrighankleV}
            // checked={humanFullbodyPointsrighankleV}
            // name="humanFullbodyPointsrighankle"
            // onChange={formik.handleChange}
          />
        </div>
        <div className="icon20">
          <Checkbox
            style={{
              width: 15,
              height: 15,
            }}
            name={`excerciseDetails[${index}].humanFullbodyPointsleftankle`}
            value={formik.values?.excerciseDetails[index]?.humanFullbodyPointsleftankle}
            onChange={(e) =>
              formik.setFieldValue(
                `excerciseDetails[${index}].humanFullbodyPointsleftankle`,
                e.target.checked
              )
            }
            checked={formik.values?.excerciseDetails[index]?.humanFullbodyPointsleftankle}
            // value={humanFullbodyPointsleftankleV}
            // checked={humanFullbodyPointsleftankleV}
            // name="humanFullbodyPointsleftankle"
            // onChange={formik.handleChange}
          />
        </div>
      </div>
    </>
  );
}
FullBody.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default FullBody;
