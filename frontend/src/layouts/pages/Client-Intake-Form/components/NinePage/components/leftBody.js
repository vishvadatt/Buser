import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import Leftbody from "../../../../../../assets/images/left-preview.png";

function leftBody({ formik, form, index }) {
  const { values } = formik;
  const {
    lhead: lheadV,
    lbrain: lbrainV,
    lbrainleft: lbrainleftV,
    lbrainright: lbrainrightV,
    lchickleft: lchickleftV,
    lchickright: lchickrightV,
    lshoulderleft: lshoulderleftV,
    lthorex: lthorexV,
    lshoulderright: lshoulderrightV,
    lchest: lchestV,
    larmleft: larmleftV,
    larmright: larmrightV,
    llungsleft: llungsleftV,
    llungsright: llungsrightV,
    lelbowleft: lelbowleftV,
    lelbowright: lelbowrightV,
    lumbilicusleft: lumbilicusleftV,
    lumbilicusright: lumbilicusrightV,
    lforarmleft: lforarmleftV,
    lforarmright: lforarmrightV,
    lhandleft: lhandleftV,
    lhandright: lhandrightV,
    ladomenleft: ladomenleftV,
    ladomen: ladomenV,
    ladomenright: ladomenrightV,
    lthighleft: lthighleftV,
    lthighright: lthighrightV,
    lkneeleft: lkneeleftV,
    lkneeright: lkneerightV,
    lcalfleft: lcalfleftV,
    lcalfright: lcalfrightV,
    llegsleft: llegsleftV,
    llegsright: llegsrightV,
    lfeetleft: lfeetleftV,
    lfeetright: lfeetrightV,
    ltoesleft: ltoesleftV,
    ltoesright: ltoesrightV,
  } = values.page13[index];
  return (
    <>
      <SoftBox>
        <div className="container">
          <img src={Leftbody} className="leftImg" />
          <div className="lefticon1 round-check1">
            <Checkbox
              name={`page13[${index}].lhead`}
              onChange={formik.handleChange}
              checked={lheadV}
              value={lheadV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon2 round-check1">
            <Checkbox
              name={`page13[${index}].lbrain`}
              onChange={formik.handleChange}
              checked={lbrainV}
              value={lbrainV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon3 round-check1">
            <Checkbox
              name={`page13[${index}].lbrainleft`}
              onChange={formik.handleChange}
              checked={lbrainleftV}
              value={lbrainleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon4 round-check1">
            <Checkbox
              name={`page13[${index}].lbrainright`}
              onChange={formik.handleChange}
              checked={lbrainrightV}
              value={lbrainrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon5 round-check1">
            <Checkbox
              name={`page13[${index}].lchickleft`}
              onChange={formik.handleChange}
              checked={lchickleftV}
              value={lchickleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon6 round-check1">
            <Checkbox
              name={`page13[${index}].lchickright`}
              onChange={formik.handleChange}
              checked={lchickrightV}
              value={lchickrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon7 round-check1">
            <Checkbox
              name={`page13[${index}].lshoulderleft`}
              onChange={formik.handleChange}
              checked={lshoulderleftV}
              value={lshoulderleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon8 round-check1">
            <Checkbox
              name={`page13[${index}].lthorex`}
              onChange={formik.handleChange}
              checked={lthorexV}
              value={lthorexV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon9 round-check1">
            <Checkbox
              name={`page13[${index}].lshoulderright`}
              onChange={formik.handleChange}
              checked={lshoulderrightV}
              value={lshoulderrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon10 round-check1">
            <Checkbox
              name={`page13[${index}].lchest`}
              onChange={formik.handleChange}
              checked={lchestV}
              value={lchestV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon11 round-check1">
            <Checkbox
              name={`page13[${index}].larmleft`}
              onChange={formik.handleChange}
              checked={larmleftV}
              value={larmleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon12 round-check1">
            <Checkbox
              name={`page13[${index}].larmright`}
              onChange={formik.handleChange}
              checked={larmrightV}
              value={larmrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon13 round-check1">
            <Checkbox
              name={`page13[${index}].llungsleft`}
              onChange={formik.handleChange}
              checked={llungsleftV}
              value={llungsleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon14 round-check1">
            <Checkbox
              name={`page13[${index}].llungsright`}
              onChange={formik.handleChange}
              checked={llungsrightV}
              value={llungsrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon15 round-check1">
            <Checkbox
              name={`page13[${index}].lelbowleft`}
              onChange={formik.handleChange}
              checked={lelbowleftV}
              value={lelbowleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon16 round-check1">
            <Checkbox
              name={`page13[${index}].lelbowright`}
              onChange={formik.handleChange}
              checked={lelbowrightV}
              value={lelbowrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon17 round-check1">
            <Checkbox
              name={`page13[${index}].lumbilicusleft`}
              onChange={formik.handleChange}
              checked={lumbilicusleftV}
              value={lumbilicusleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon18 round-check1">
            <Checkbox
              name={`page13[${index}].lumbilicusright`}
              onChange={formik.handleChange}
              checked={lumbilicusrightV}
              value={lumbilicusrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon19 round-check1">
            <Checkbox
              name={`page13[${index}].lforarmleft`}
              onChange={formik.handleChange}
              checked={lforarmleftV}
              value={lforarmleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon20 round-check1">
            <Checkbox
              name={`page13[${index}].lforarmright`}
              onChange={formik.handleChange}
              value={lforarmrightV}
              checked={lforarmrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon21 round-check1">
            <Checkbox
              name={`page13[${index}].lhandleft`}
              onChange={formik.handleChange}
              checked={lhandleftV}
              value={lhandleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon22 round-check1">
            <Checkbox
              name={`page13[${index}].lhandright`}
              onChange={formik.handleChange}
              value={lhandrightV}
              checked={lhandrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon23 round-check1">
            <Checkbox
              name={`page13[${index}].ladomenleft`}
              onChange={formik.handleChange}
              checked={ladomenleftV}
              value={ladomenleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon24 round-check1">
            <Checkbox
              name={`page13[${index}].ladomen`}
              onChange={formik.handleChange}
              checked={ladomenV}
              value={ladomenV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon25 round-check1">
            <Checkbox
              name={`page13[${index}].ladomenright`}
              onChange={formik.handleChange}
              value={ladomenrightV}
              checked={ladomenrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon26 round-check1">
            <Checkbox
              name={`page13[${index}].lthighleft`}
              onChange={formik.handleChange}
              checked={lthighleftV}
              value={lthighleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon27 round-check1">
            <Checkbox
              name={`page13[${index}].lthighright`}
              onChange={formik.handleChange}
              value={lthighrightV}
              checked={lthighrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon28 round-check1">
            <Checkbox
              name={`page13[${index}].lkneeleft`}
              onChange={formik.handleChange}
              checked={lkneeleftV}
              value={lkneeleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon29 round-check1">
            <Checkbox
              name={`page13[${index}].lkneeright`}
              onChange={formik.handleChange}
              checked={lkneerightV}
              value={lkneerightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon30 round-check1">
            <Checkbox
              name={`page13[${index}].lcalfleft`}
              onChange={formik.handleChange}
              checked={lcalfleftV}
              value={lcalfleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon31 round-check1">
            <Checkbox
              name={`page13[${index}].lcalfright`}
              onChange={formik.handleChange}
              checked={lcalfrightV}
              value={lcalfrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon32 round-check1">
            <Checkbox
              name={`page13[${index}].llegsleftV`}
              onChange={formik.handleChange}
              checked={llegsleftV}
              value={llegsleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon33 round-check1">
            <Checkbox
              name={`page13[${index}].llegsright`}
              onChange={formik.handleChange}
              checked={llegsrightV}
              value={llegsrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon34 round-check1">
            <Checkbox
              name={`page13[${index}].lfeetleft`}
              onChange={formik.handleChange}
              checked={lfeetleftV}
              value={lfeetleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon35 round-check1">
            <Checkbox
              name={`page13[${index}].lfeetright`}
              onChange={formik.handleChange}
              checked={lfeetrightV}
              value={lfeetrightV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon36 round-check1">
            <Checkbox
              name={`page13[${index}].ltoesleft`}
              onChange={formik.handleChange}
              checked={ltoesleftV}
              value={ltoesleftV}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="lefticon37 round-check1">
            <Checkbox
              name={`page13[${index}].ltoesright`}
              onChange={formik.handleChange}
              checked={ltoesrightV}
              value={ltoesrightV}
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
leftBody.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default leftBody;
