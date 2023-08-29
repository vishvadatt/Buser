import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function firstPart({ formik, form, index }) {
  const { values } = formik;
  const {
    date: dateV,
    neckpainyear: neckpainyearV,
    neckpainmonth: neckpainmonthV,
    neckpainweek: neckpainweekV,
    backpainyear: backpainyearV,
    backpainmonth: backpainmonthV,
    backpainweek: backpainweekV,
  } = values.page13[index];

  return (
    <>
      <SoftBox mt={2.5}>
        <Grid className="mainPart">
          <SoftTypography fontWeight="bold" fontSize="33px" textAlign="center" mt={0.5} mb={1.5}>
            THE NECK DISABILITY INDEX QUESTIONNAIRE
          </SoftTypography>
          <Grid container>
            <Grid item lg={8.5} md={8} className="index-name">
              <span style={{ fontSize: "15px", fontWeight: "bold" }}>Name</span>
              <input
                type="text"
                value={values?.page13?.name}
                name={`page13[${index}].name`}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={3.5} md={4} className="index-name">
              <span style={{ fontSize: "15px", marginRight: "5px", fontWeight: "bold" }}>Date</span>
              <input
                type="date"
                value={dateV}
                name={`page13[${index}].date`}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
          <Grid container mt={1}>
            <Grid item lg={4} md={12} className="name">
              <span style={{ fontSize: "15px" }}>How long have you had neck pain</span>
            </Grid>
            <Grid item lg={2} md={4} className="pain-time">
              <input
                type="text"
                value={neckpainyearV}
                name={`page13[${index}].neckpainyear`}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>years</span>
            </Grid>
            <Grid item lg={2} md={4} className="pain-time">
              <input
                type="text"
                value={neckpainmonthV}
                name={`page13[${index}].neckpainmonth`}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>months</span>
            </Grid>
            <Grid item lg={2} md={4} className="pain-time">
              <input
                type="text"
                value={neckpainweekV}
                name={`page13[${index}].neckpainweek`}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>weeks</span>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={4} md={12} className="name">
              <span style={{ fontSize: "15px" }}>How long have you had back pain</span>
            </Grid>
            <Grid item lg={2} md={4} className="pain-time">
              <input
                type="text"
                value={backpainyearV}
                name={`page13[${index}].backpainyear`}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>years</span>
            </Grid>
            <Grid item lg={2} md={4} className="pain-time">
              <input
                type="text"
                value={backpainmonthV}
                name={`page13[${index}].backpainmonth`}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>months</span>
            </Grid>
            <Grid item lg={2} md={4} className="pain-time">
              <input
                type="text"
                value={backpainweekV}
                name={`page13[${index}].backpainweek`}
                onChange={formik.handleChange}
              />
              <span style={{ fontSize: "15px", marginLeft: "5px" }}>weeks</span>
            </Grid>
          </Grid>
          <Grid>
            <SoftTypography fontSize="15px" mt={2.5}>
              On the diagram below, please indicate where you are experiencing pain or other
              symptoms, right now. Please complete both sides of this form.
            </SoftTypography>
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}
firstPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default firstPart;
