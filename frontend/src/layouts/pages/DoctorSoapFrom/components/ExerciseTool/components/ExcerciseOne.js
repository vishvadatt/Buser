import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";
import left1 from "../../../../../../assets/images/Leftsideexcercise/L1.png";
import left2 from "../../../../../../assets/images/Leftsideexcercise/L2.png";
import left3 from "../../../../../../assets/images/Leftsideexcercise/L3.png";
import left4 from "../../../../../../assets/images/Leftsideexcercise/L4.png";
import left5 from "../../../../../../assets/images/Leftsideexcercise/L5.png";
import left6 from "../../../../../../assets/images/Leftsideexcercise/L6.png";
import left7 from "../../../../../../assets/images/Leftsideexcercise/L7.png";
import left8 from "../../../../../../assets/images/Leftsideexcercise/L8.png";
import left9 from "../../../../../../assets/images/Leftsideexcercise/L9.png";
import left10 from "../../../../../../assets/images/Leftsideexcercise/L10.png";
import left11 from "../../../../../../assets/images/Leftsideexcercise/L11.png";
import left12 from "../../../../../../assets/images/Leftsideexcercise/L12.png";
import left13 from "../../../../../../assets/images/Leftsideexcercise/L13.png";
import left14 from "../../../../../../assets/images/Leftsideexcercise/L14.png";
import left15 from "../../../../../../assets/images/Leftsideexcercise/L15.png";
import left16 from "../../../../../../assets/images/Leftsideexcercise/L16.png";
import left17 from "../../../../../../assets/images/Leftsideexcercise/L17.png";

function ExcerciseOne({ formik, index }) {
  const values = formik.values.excerciseDetails;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left1} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone1`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone1}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone1`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone1}
              // name="humanexcerciseone1"
              // value={humanexcerciseone1V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone1V}
            />
            1
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left2} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone2`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone2}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone2`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone2}
              // name="humanexcerciseone2"
              // value={humanexcerciseone2V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone2V}
            />
            2
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left3} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseonesub3`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseonesub3}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseonesub3`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseonesub3}
              // name="humanexcerciseonesub3"
              // value={humanexcerciseonesub3V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseonesub3V}
            />
            3
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left4} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone3`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone3}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone3`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone3}
              // name="humanexcerciseone3"
              // value={humanexcerciseone3V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone3V}
            />
            3
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left5} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone4`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone4}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone4`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone4}
              // name="humanexcerciseone4"
              // value={humanexcerciseone4V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone4V}
            />
            4
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left6} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone5`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone5}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone5`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone5}
              // name="humanexcerciseone5"
              // value={humanexcerciseone5V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone5V}
            />
            5
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left7} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone6`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone6}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone6`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone6}
              // name="humanexcerciseone6"
              // value={humanexcerciseone6V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone6V}
            />
            6
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left8} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone7`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone7}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone7`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone7}
              // name="humanexcerciseone7"
              // value={humanexcerciseone7V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone7V}
            />
            7
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left9} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone8`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone8}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone8`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone8}
              // name="humanexcerciseone8"
              // value={humanexcerciseone8V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone8V}
            />
            8
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left10} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone9`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone9}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone9`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone9}
              // name="humanexcerciseone9"
              // value={humanexcerciseone9V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone9V}
            />
            9
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left11} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone10`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone10}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone10`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone10}
              // name="humanexcerciseone10"
              // value={humanexcerciseone10V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone10V}
            />
            10
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left12} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone11`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone11}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone11`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone11}
              // name="humanexcerciseone11"
              // value={humanexcerciseone11V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone11V}
            />
            11
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left13} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone12`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone12}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone12`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone12}
              // name="humanexcerciseone12"
              // value={humanexcerciseone12V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone12V}
            />
            12
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left14} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone13`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone13}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone13`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone13}
              // name="humanexcerciseone13"
              // value={humanexcerciseone13V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone13V}
            />
            13
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left15} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone14`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone14}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone14`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone14}
              // name="humanexcerciseone14"
              // value={humanexcerciseone14V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone14V}
            />
            14
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left16} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseonesub14`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseonesub14}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseonesub14`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseonesub14}
              // name="humanexcerciseonesub14"
              // value={humanexcerciseonesub14V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseonesub14V}
            />
            14
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={left17} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              // className="checkbox"
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcerciseone15`}
              value={formik.values?.excerciseDetails[index]?.humanexcerciseone15}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcerciseone15`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcerciseone15}
              // name="humanexcerciseone15"
              // value={humanexcerciseone15V}
              // onChange={formik.handleChange}
              // checked={humanexcerciseone15V}
            />
            15
          </div>
        </Grid>
      </Grid>
    </>
  );
}
ExcerciseOne.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default ExcerciseOne;
