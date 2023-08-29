import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import PropTypes from "prop-types";
import right1 from "../../../../../../assets/images/Rightsideexcercise/R1.png";
import right2 from "../../../../../../assets/images/Rightsideexcercise/R1-1.png";
import right3 from "../../../../../../assets/images/Rightsideexcercise/R2.png";
import right4 from "../../../../../../assets/images/Rightsideexcercise/R3.png";
import right5 from "../../../../../../assets/images/Rightsideexcercise/R4.png";
import right6 from "../../../../../../assets/images/Rightsideexcercise/R4-4.png";
import right7 from "../../../../../../assets/images/Rightsideexcercise/R5.png";
import right8 from "../../../../../../assets/images/Rightsideexcercise/R6.png";
import right9 from "../../../../../../assets/images/Rightsideexcercise/R6-6.png";
import right10 from "../../../../../../assets/images/Rightsideexcercise/R7.png";
import right11 from "../../../../../../assets/images/Rightsideexcercise/R-8.png";
import right12 from "../../../../../../assets/images/Rightsideexcercise/R8-8.png";
import right13 from "../../../../../../assets/images/Rightsideexcercise/R-9.png";
import right14 from "../../../../../../assets/images/Rightsideexcercise/R-10.png";
import right15 from "../../../../../../assets/images/Rightsideexcercise/R-11.png";
import right16 from "../../../../../../assets/images/Rightsideexcercise/R-11-11.png";
import right17 from "../../../../../../assets/images/Rightsideexcercise/R-12.png";
import right18 from "../../../../../../assets/images/Rightsideexcercise/R-13.png";
import right19 from "../../../../../../assets/images/Rightsideexcercise/R-13-13.png";
import right20 from "../../../../../../assets/images/Rightsideexcercise/R-14.png";
import right21 from "../../../../../../assets/images/Rightsideexcercise/R-14-14.png";
import right22 from "../../../../../../assets/images/Rightsideexcercise/R-15.png";
import right23 from "../../../../../../assets/images/Rightsideexcercise/R-16.png";
import right24 from "../../../../../../assets/images/Rightsideexcercise/R-17.png";

function ExcerciseTwo({ formik, index }) {
  const values = formik.values.excerciseDetails;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right1} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo1`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo1}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo1`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo1}
            />
            1
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right2} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwosub1`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwosub1}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwosub1`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwosub1}
            />
            1
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right3} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo2`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo2}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo2`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo2}
            />
            2
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right4} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo3`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo3}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo3`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo3}
            />
            3
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right5} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo4`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo4}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo4`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo4}
            />
            4
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right6} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwosub4`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwosub4}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwosub4`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwosub4}
            />
            4
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right7} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo5`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo5}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo5`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo5}
            />
            5
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right8} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo6`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo6}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo6`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo6}
            />
            6
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right9} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwosub6`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwosub6}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwosub6`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwosub6}
            />
            6
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right10} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo7`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo7}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo7`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo7}
            />
            7
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right11} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo8`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo8}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo8`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo8}
            />
            8
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right12} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwosub8`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwosub8}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwosub8`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwosub8}
            />
            8
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right13} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo9`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo9}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo9`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo9}
            />
            9
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right14} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo10`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo10}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo10`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo10}
            />
            10
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right15} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo11`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo11}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo11`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo11}
            />
            11
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right16} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwosub11`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwosub11}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwosub11`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwosub11}
            />
            11
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right17} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo12`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo12}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo12`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo12}
            />
            12
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right18} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo13`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo13}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo13`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo13}
            />
            13
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right19} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwosub13`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwosub13}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwosub13`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwosub13}
            />
            13
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right20} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo14`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo14}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo14`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo14}
            />
            14
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right21} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwosub14`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwosub14}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwosub14`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwosub14}
            />
            14
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right22} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo15`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo15}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo15`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo15}
            />
            15
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right23} height={50} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo16`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo16}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo16`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo16}
            />
            16
          </div>
        </Grid>
        <Grid item xs={6} mb={2}>
          <div>
            <img src={right24} height={65} width={70} className="exe1img" />
          </div>
          <div>
            <Checkbox
              style={{
                width: 17,
                height: 17,
              }}
              name={`excerciseDetails[${index}].humanexcercisetwo17`}
              value={formik.values?.excerciseDetails[index]?.humanexcercisetwo17}
              onChange={(e) =>
                formik.setFieldValue(
                  `excerciseDetails[${index}].humanexcercisetwo17`,
                  e.target.checked
                )
              }
              checked={formik.values?.excerciseDetails[index]?.humanexcercisetwo17}
            />
            17
          </div>
        </Grid>
      </Grid>
    </>
  );
}
ExcerciseTwo.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default ExcerciseTwo;
