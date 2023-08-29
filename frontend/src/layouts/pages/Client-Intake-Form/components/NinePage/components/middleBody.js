import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import Middlebody from "../../../../../../assets/images/middle-preview.png";

function middleBody({ formik, form, index }) {
  const { values } = formik;
  const {
    middlefirstone: middlefirstoneV,
    middlefirsttwo: middlefirsttwoV,
    middlefirstthree: middlefirstthreeV,
    middlefirstfour: middlefirstfourV,
    middlefirstfive: middlefirstfiveV,
    middlefirstsix: middlefirstsixV,
    middlefirstseven: middlefirstsevenV,
    middlefirsteight: middlefirsteightV,
    middlefirstnine: middlefirstnineV,
    middlefirstten: middlefirsttenV,
    middlefirsteleven: middlefirstelevenV,
    middlefirsttwleve: middlefirsttwleveV,
    middlefirstthirteen: middlefirstthirteenV,
    middlefirstfourteen: middlefirstfourteenV,
    middlefirstfifteen: middlefirstfifteenV,

    middlesecondone: middlesecondoneV,
    middlesecondtwo: middlesecondtwoV,
    middlesecondthree: middlesecondthreeV,
    middlesecondfour: middlesecondfourV,
    middlesecondfive: middlesecondfiveV,
    middlesecondsix: middlesecondsixV,
    middlesecondseven: middlesecondsevenV,
    middlesecondeight: middlesecondeightV,
    middlesecondnine: middlesecondnineV,
    middlesecondten: middlesecondtenV,
    middlesecondeleven: middlesecondelevenV,
    middlesecondtwleve: middlesecondtwleveV,
    middlesecondthirteen: middlesecondthirteenV,
    middlesecondfourteen: middlesecondfourteenV,
    middlesecondfifteen: middlesecondfifteenV,
  } = values.page13[index];
  return (
    <>
      <SoftBox>
        <div className="container">
          <img src={Middlebody} className="middleimg" />
          <div className="middlefirsticon1 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstone`}
              checked={middlefirstoneV}
              value={middlefirstoneV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon2 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirsttwo`}
              onChange={formik.handleChange}
              checked={middlefirsttwoV}
              value={middlefirsttwoV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon3 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstthree`}
              onChange={formik.handleChange}
              checked={middlefirstthreeV}
              value={middlefirstthreeV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon4 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstfour`}
              onChange={formik.handleChange}
              checked={middlefirstfourV}
              value={middlefirstfourV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon5 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstfive`}
              onChange={formik.handleChange}
              checked={middlefirstfiveV}
              value={middlefirstfiveV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon6 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstsix`}
              onChange={formik.handleChange}
              checked={middlefirstsixV}
              value={middlefirstsixV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon7 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstseven`}
              onChange={formik.handleChange}
              checked={middlefirstsevenV}
              value={middlefirstsevenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon8 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirsteight`}
              onChange={formik.handleChange}
              checked={middlefirsteightV}
              value={middlefirsteightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon9 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirsteight`}
              onChange={formik.handleChange}
              checked={middlefirstnineV}
              value={middlefirstnineV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon10 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstten`}
              onChange={formik.handleChange}
              checked={middlefirsttenV}
              value={middlefirsttenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon11 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirsteleven`}
              onChange={formik.handleChange}
              checked={middlefirstelevenV}
              value={middlefirstelevenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon12 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirsttwleve`}
              onChange={formik.handleChange}
              checked={middlefirsttwleveV}
              value={middlefirsttwleveV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon13 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstthirteen`}
              onChange={formik.handleChange}
              checked={middlefirstthirteenV}
              value={middlefirstthirteenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon14 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstfourteen`}
              onChange={formik.handleChange}
              checked={middlefirstfourteenV}
              value={middlefirstfourteenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlefirsticon15 round-check1">
            <Checkbox
              name={`page13[${index}].middlefirstfifteen`}
              onChange={formik.handleChange}
              checked={middlefirstfifteenV}
              value={middlefirstfifteenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon1 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondone`}
              onChange={formik.handleChange}
              checked={middlesecondoneV}
              value={middlesecondoneV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlesecondicon2 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondtwo`}
              onChange={formik.handleChange}
              checked={middlesecondtwoV}
              value={middlesecondtwoV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon3 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondthree`}
              onChange={formik.handleChange}
              checked={middlesecondthreeV}
              value={middlesecondthreeV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon4 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondfour`}
              onChange={formik.handleChange}
              checked={middlesecondfourV}
              value={middlesecondfourV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="middlesecondicon5 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondfive`}
              onChange={formik.handleChange}
              checked={middlesecondfiveV}
              value={middlesecondfiveV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon6 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondsix`}
              onChange={formik.handleChange}
              checked={middlesecondsixV}
              value={middlesecondsixV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon7 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondseven`}
              onChange={formik.handleChange}
              checked={middlesecondsevenV}
              value={middlesecondsevenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon8 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondeight`}
              onChange={formik.handleChange}
              checked={middlesecondeightV}
              value={middlesecondeightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon9 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondnine`}
              onChange={formik.handleChange}
              checked={middlesecondnineV}
              value={middlesecondnineV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon10 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondten`}
              onChange={formik.handleChange}
              checked={middlesecondtenV}
              value={middlesecondtenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon11 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondeleven`}
              onChange={formik.handleChange}
              checked={middlesecondelevenV}
              value={middlesecondelevenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon12 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondtwleve`}
              onChange={formik.handleChange}
              checked={middlesecondtwleveV}
              value={middlesecondtwleveV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon13 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondthirteen`}
              onChange={formik.handleChange}
              checked={middlesecondthirteenV}
              value={middlesecondthirteenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon14 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondfourteen`}
              onChange={formik.handleChange}
              checked={middlesecondfourteenV}
              value={middlesecondfourteenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>

          <div className="middlesecondicon15 round-check1">
            <Checkbox
              name={`page13[${index}].middlesecondfifteen`}
              onChange={formik.handleChange}
              checked={middlesecondfifteenV}
              value={middlesecondfifteenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
        </div>
      </SoftBox>
    </>
  );
}
middleBody.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default middleBody;
