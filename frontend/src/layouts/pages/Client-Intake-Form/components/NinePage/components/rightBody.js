import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import Backbody from "../../../../../../assets/images/back-preview.png";

function rightBody({ formik, form, index }) {
  const { values } = formik;
  const {
    rightbrain: rightbrainV,
    rightmounth: rightmounthV,
    rightthroat: rightthroatV,
    rightneckleft: rightneckleftV,
    rightneckright: rightneckrightV,
    rightshoulderleft: rightshoulderleftV,
    rightchest: rightchestV,
    rightshoulderright: rightshoulderrightV,
    rightback: rightbackV,
    rightarmleft: rightarmleftV,
    rightarmright: rightarmrightV,
    rightloin: rightloinV,
    rightelbowleft: rightelbowleftV,
    rightumnilicus: rightumnilicusV,
    rightelbowright: rightelbowrightV,
    rightforarmleft: rightforarmleftV,
    righthipleft: righthipleftV,
    rightadomen: rightadomenV,
    righthipright: righthiprightV,
    rightforarmright: rightforarmrightV,
    righthandleft: righthandleftV,
    rightbuttockleft: rightbuttockleftV,
    rightbuttockright: rightbuttockrightV,
    righthandright: righthandrightV,
    rightpalmleft: rightpalmleftV,
    rightpenish: rightpenishV,
    rightpalmright: rightpalmrightV,
    rightthighleft: rightthighleftV,
    rightthighright: rightthighrightV,
    rightkneeleft: rightkneeleftV,
    rightkneeright: rightkneerightV,
    rightcalfleft: rightcalfleftV,
    rightcalfright: rightcalfrightV,
    rightlegsleft: rightlegsleftV,
    rightlegsright: rightlegsrightV,
    rightfootleft: rightfootleftV,
    rightfootright: rightfootrightV,
    righttoesleft: righttoesleftV,
    righttoesright: righttoesrightV,
  } = values.page13[index];
  return (
    <>
      <SoftBox>
        <div className="container">
          <img src={Backbody} className="leftImg" />

          <div className="righticon1 round-check1">
            <Checkbox
              name={`page13[${index}].rightbrain`}
              value={rightbrainV}
              checked={rightbrainV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon2 round-check1">
            <Checkbox
              name={`page13[${index}].rightmounth`}
              value={rightmounthV}
              checked={rightmounthV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon3 round-check1">
            <Checkbox
              name={`page13[${index}].rightthroat`}
              value={rightthroatV}
              checked={rightthroatV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon4 round-check1">
            <Checkbox
              name={`page13[${index}].rightneckleft`}
              value={rightneckleftV}
              checked={rightneckleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon5 round-check1">
            <Checkbox
              name={`page13[${index}].rightneckright`}
              value={rightneckrightV}
              checked={rightneckrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon6 round-check1">
            <Checkbox
              name={`page13[${index}].rightshoulderleft`}
              value={rightshoulderleftV}
              checked={rightshoulderleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon7 round-check1">
            <Checkbox
              name={`page13[${index}].rightchest`}
              value={rightchestV}
              checked={rightchestV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon8 round-check1">
            <Checkbox
              name={`page13[${index}].rightshoulderright`}
              value={rightshoulderrightV}
              checked={rightshoulderrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon9 round-check1">
            <Checkbox
              name={`page13[${index}].rightback`}
              value={rightbackV}
              checked={rightbackV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon10 round-check1">
            <Checkbox
              name={`page13[${index}].rightarmleft`}
              value={rightarmleftV}
              checked={rightarmleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon11 round-check1">
            <Checkbox
              name={`page13[${index}].rightarmright`}
              value={rightarmrightV}
              checked={rightarmrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon12 round-check1">
            <Checkbox
              name={`page13[${index}].rightloin`}
              value={rightloinV}
              checked={rightloinV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon13 round-check1">
            <Checkbox
              name={`page13[${index}].rightelbowleft`}
              value={rightelbowleftV}
              checked={rightelbowleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon14 round-check1">
            <Checkbox
              name={`page13[${index}].rightumnilicus`}
              value={rightumnilicusV}
              checked={rightumnilicusV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon15 round-check1">
            <Checkbox
              name={`page13[${index}].rightelbowright`}
              value={rightelbowrightV}
              checked={rightelbowrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon16 round-check1">
            <Checkbox
              name={`page13[${index}].rightforarmleft`}
              value={rightforarmleftV}
              checked={rightforarmleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon17 round-check1">
            <Checkbox
              name={`page13[${index}].righthipleft`}
              value={righthipleftV}
              checked={righthipleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon18 round-check1">
            <Checkbox
              name={`page13[${index}].rightadomen`}
              value={rightadomenV}
              checked={rightadomenV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon19 round-check1">
            <Checkbox
              name={`page13[${index}].righthipright`}
              value={righthiprightV}
              checked={righthiprightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon20 round-check1">
            <Checkbox
              name={`page13[${index}].rightforarmright`}
              value={rightforarmrightV}
              checked={rightforarmrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon21 round-check1">
            <Checkbox
              name={`page13[${index}].righthandleft`}
              value={righthandleftV}
              checked={righthandleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon22 round-check1">
            <Checkbox
              name={`page13[${index}].rightbuttockleft`}
              value={rightbuttockleftV}
              checked={rightbuttockleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon23 round-check1">
            <Checkbox
              name={`page13[${index}].rightbuttockright`}
              value={rightbuttockrightV}
              checked={rightbuttockrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon24 round-check1">
            <Checkbox
              name={`page13[${index}].righthandright`}
              value={righthandrightV}
              checked={righthandrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon25 round-check1">
            <Checkbox
              name={`page13[${index}].rightpalmleft`}
              value={rightpalmleftV}
              checked={rightpalmleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon26 round-check1">
            <Checkbox
              name={`page13[${index}].rightpenish`}
              value={rightpenishV}
              checked={rightpenishV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon27 round-check1">
            <Checkbox
              name={`page13[${index}].rightpalmright`}
              value={rightpalmrightV}
              checked={rightpalmrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon28 round-check1">
            <Checkbox
              name={`page13[${index}].rightthighleft`}
              value={rightthighleftV}
              checked={rightthighleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon29 round-check1">
            <Checkbox
              name={`page13[${index}].rightthighright`}
              value={rightthighrightV}
              checked={rightthighrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon30 round-check1">
            <Checkbox
              name={`page13[${index}].rightkneeleft`}
              value={rightkneeleftV}
              checked={rightkneeleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon31 round-check1">
            <Checkbox
              name={`page13[${index}].rightkneeright`}
              value={rightkneerightV}
              checked={rightkneerightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon32 round-check1">
            <Checkbox
              name={`page13[${index}].rightcalfleft`}
              value={rightcalfleftV}
              checked={rightcalfleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon33 round-check1">
            <Checkbox
              name={`page13[${index}].rightcalfright`}
              value={rightcalfrightV}
              checked={rightcalfrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon34 round-check1">
            <Checkbox
              name={`page13[${index}].rightlegsleft`}
              value={rightlegsleftV}
              checked={rightlegsleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon35 round-check1">
            <Checkbox
              name={`page13[${index}].rightlegsright`}
              value={rightlegsrightV}
              checked={rightlegsrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon36 round-check1">
            <Checkbox
              name={`page13[${index}].rightfootleft`}
              value={rightfootleftV}
              checked={rightfootleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon37 round-check1">
            <Checkbox
              name={`page13[${index}].rightfootright`}
              value={rightfootrightV}
              checked={rightfootrightV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon38 round-check1">
            <Checkbox
              name={`page13[${index}].righttoesleft`}
              value={righttoesleftV}
              checked={righttoesleftV}
              onChange={formik.handleChange}
              style={{
                width: 22,
                height: 22,
                borderColor: "black",
              }}
              className="checkBackColor1"
            />
          </div>
          <div className="righticon39 round-check1">
            <Checkbox
              name={`page13[${index}].righttoesright`}
              value={righttoesrightV}
              checked={righttoesrightV}
              onChange={formik.handleChange}
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
rightBody.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default rightBody;
