import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React from "react";
import image from "assets/images/image.png";
import FormField from "../../../FormField";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import "./index.css";

const ImageComponent = ({ formData, formik, form, doctorShopFromDetails, index }) => {
  console.log("doctorShopFromDetails..", doctorShopFromDetails);
  console.log("formik..", formik);
  console.log("form", form);
  const { formField } = form;
  const { values } = formik;
  // const {values,touched,formField,errors,setFieldValue,handleChange} = formData;
  const {
    doe,
    isVitals,
    bp,
    mmHG,
    pulse,
    temp,
    rr,
    spo2,
    isNeurologicalExam,
    isCranialNerves,
    cranialNerves,
    isRombergs,
    rombergs,
    isDiadichodyskinesia,
    diadichodyskinesia,
    isDermatomes,
    dermatomes,
    isMyotomes,
    myotomes,
    isDtrs,
    dtrs,
    isPathological,
    pathological,
    isHomans,
    homans,
  } = formField;

  const {
    doe: doeV,
    isVitals: isVitalsV,
    bp: bpV,
    mmHG: mmHGV,
    pulse: pulseV,
    temp: tempV,
    rr: rrV,
    spo2: spo2V,
    isNeurologicalExam: isNeurologicalExamV,
    isCranialNerves: isCranialNervesV,
    cranialNerves: cranialNervesV,
    isRombergs: isRombergsV,
    rombergs: rombergsV,
    isDiadichodyskinesia: isDiadichodyskinesiaV,
    diadichodyskinesia: diadichodyskinesiaV,
    isDermatomes: isDermatomesV,
    dermatomes: dermatomesV,
    isMyotomes: isMyotomesV,
    myotomes: myotomesV,
    isDtrs: isDtrsV,
    dtrs: dtrsV,
    isPathological: isPathologicalV,
    pathological: pathologicalV,
    isHomans: isHomansV,
    homans: homansV,
  } = values;

  return (
    <>
      {/* <Grid item>
            <label>P=pain – X=Trigger Points – HI=Hyperesthesia – HO=Hypoesthesia – T=Tender – S=Spasm - N=Numb – E=Edema</label>
        </Grid>
        <Grid item >
            <img src={image} width="400px" height="460px" style={{objectFit : "contain"}} alt="" />
        </Grid> */}
      <Grid item lg={6} sm={12} xs={12}>
        <Grid container spacing={1}>
          <Grid item lg={12} sm={12} xs={12} style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "14px" }}>Vitals:&nbsp;&nbsp;&nbsp;</span>
            <FormControlLabel
              control={
                <Checkbox
                  name={isVitals.name}
                  // checked={isVitalsV}
                  //  onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isVitals.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `fifteenthPage[${index}].${isVitals.name}`,
                      e.target.checked
                    )
                  }
                />
              }
              label={"NI"}
            />
          </Grid>
          <Grid
            item
            lg={12}
            sm={4}
            xs={6}
            style={{ display: "flex" }}
            className="imgcompo img-compo-grid-container"
          >
            <label>BP</label>
            <input
              type={bp.type}
              name={bp.name}
              label="BP"
              // value={bpV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[bp.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${bp.name}`, e.target.value);
              }}
            />
            <span>/</span>
            <input
              type={mmHG.type}
              name={mmHG.name}
              label="mmHG"
              // value={mmHGV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[mmHG.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${mmHG.name}`, e.target.value);
              }}
            />
            <label>mmHG</label>
          </Grid>
          <Grid
            item
            lg={12}
            sm={6}
            xs={12}
            style={{ display: "flex", paddingTop: "0px" }}
            className="imgcompo img-compo-grid-container"
          >
            <label>Pulse</label>
            <input
              type={pulse.type}
              name={pulse.name}
              label={pulse.label}
              // value={pulseV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[pulse.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${pulse.name}`, e.target.value);
              }}
            />
            <label>BPM</label>
            <label style={{ marginLeft: "20px" }}>Temp:</label>
            <input
              type={temp.type}
              name={temp.name}
              label={temp.label}
              // value={tempV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[temp.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${temp.name}`, e.target.value);
              }}
            />
            <label>°F</label>

            {/* <FormField type={pulse.type} name={pulse.name} value={pulseV} label={pulse.label} /> */}
          </Grid>
          <Grid
            item
            lg={12}
            sm={4}
            xs={12}
            style={{ display: "flex", paddingTop: "0px" }}
            className="imgcompo img-compo-grid-container"
          >
            <label>RR</label>
            <input
              type={rr.type}
              name={rr.name}
              label={rr.label}
              // value={rrV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[rr.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${rr.name}`, e.target.value);
              }}
            />
            <label>BPM</label>
            <label style={{ marginLeft: "38px" }}>SpO₂:</label>
            <input
              type={spo2.type}
              name={spo2.name}
              label={spo2.label}
              // value={spo2V}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[spo2.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${spo2.name}`, e.target.value);
              }}
            />
            <label>%</label>
            {/* <FormField type={temp.type} name={temp.name} value={tempV} label={temp.label} /> */}
          </Grid>
          {/* <Grid item lg={2} sm={4} xs={6}>
            <FormField type={rr.type} name={rr.name} value={rrV} label={rr.label} />
          </Grid> */}
          {/* <Grid item lg={2} sm={4} xs={6}>
            <FormField type={spo2.type} name={spo2.name} value={spo2V} label={spo2.label} />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Grid>
              <SoftTypography style={{ fontSize: "13px", fontWeight: "bold" }}>
                Neurological Exam.
              </SoftTypography>
            </Grid>
            <Grid>
              <FormControlLabel
                control={
                  <Checkbox
                    name={isNeurologicalExam.name}
                    // checked={isNeurologicalExamV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.fifteenthPage[index]?.[isNeurologicalExam.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `fifteenthPage[${index}].${isNeurologicalExam.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
                label={"NI"}
              />
            </Grid>
          </Grid>
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="cranialner-input"
          >
            <label>Cranial Nerves:</label>
            <FormControlLabel
              style={{ marginRight: "0px" }}
              className="vvx"
              control={
                <Checkbox
                  name={isCranialNerves.name}
                  // checked={isCranialNervesV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isCranialNerves.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `fifteenthPage[${index}].${isCranialNerves.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
            <label className="vvvx">WNL</label>

            <input
              className="carnivaNotes"
              type={cranialNerves.type}
              name={cranialNerves.name}
              label="Cranial Nerves:"
              // value={cranialNervesV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[cranialNerves.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `fifteenthPage[${index}].${cranialNerves.name}`,
                  e.target.value
                );
              }}
            />

            {/* <FormField
              label="Cranial Nerves:"
              type={cranialNerves.type}
              name={cranialNerves.name}
              value={cranialNervesV}
            /> */}
          </Grid>
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="cranialner-input"
          >
            <label>Romberg{"'"}s:</label>
            <FormControlLabel
              style={{ marginRight: "0px" }}
              className="vvx"
              control={
                <Checkbox
                  name={isRombergs.name}
                  // checked={isRombergsV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isRombergs.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `fifteenthPage[${index}].${isRombergs.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
            <label className="vvvx">WNL</label>

            <input
              className="carnivaNotes1"
              label="Romberg's:"
              type={rombergs.type}
              name={rombergs.name}
              // value={rombergsV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[rombergs.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${rombergs.name}`, e.target.value);
              }}
            />

            {/* <FormField
              label="Cranial Nerves:"
              type={cranialNerves.type}
              name={cranialNerves.name}
              value={cranialNervesV}
            /> */}
          </Grid>
          {/* <Grid
            item
            lg={5}
            sm={4}
            xs={6}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FormField
              label="Romberg's:"
              type={rombergs.type}
              name={rombergs.name}
              value={rombergsV}
            />
            <FormControlLabel
              className="CranialNervesLabel"
              control={
                <Checkbox
                  name={isRombergs.name}
                  checked={isRombergsV}
                  onChange={formik.handleChange}
                />
              }
              label={"WNL"}
            />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="cranialner-input"
          >
            <label>Diadichodyskinesia:</label>
            <FormControlLabel
              style={{ marginRight: "0px" }}
              className="vvx"
              control={
                <Checkbox
                  name={isDiadichodyskinesia.name}
                  // checked={isDiadichodyskinesiaV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isDiadichodyskinesia.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `fifteenthPage[${index}].${isDiadichodyskinesia.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
            <label className="vvvx">WNL</label>

            <input
              className="carnivaNotes2"
              type={diadichodyskinesia.type}
              label="Diadichodyskinesia"
              name={diadichodyskinesia.name}
              // value={diadichodyskinesiaV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[diadichodyskinesia.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `fifteenthPage[${index}].${diadichodyskinesia.name}`,
                  e.target.value
                );
              }}
            />

            {/* <FormField
              label="Cranial Nerves:"
              type={cranialNerves.type}
              name={cranialNerves.name}
              value={cranialNervesV}
            /> */}
          </Grid>
          {/* <Grid
            item
            lg={5}
            sm={4}
            xs={6}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FormField
              type={diadichodyskinesia.type}
              label="Diadichodyskinesia:"
              name={diadichodyskinesia.name}
              value={diadichodyskinesiaV}
            />
            <FormControlLabel
              className="CranialNervesLabel"
              control={
                <Checkbox
                  name={isDiadichodyskinesia.name}
                  checked={isDiadichodyskinesiaV}
                  onChange={formik.handleChange}
                />
              }
              label={"WNL"}
            />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="cranialner-input"
          >
            <label>Dermatomes:</label>
            <FormControlLabel
              style={{ marginRight: "0px" }}
              className="vvx"
              control={
                <Checkbox
                  name={isDermatomes.name}
                  // checked={isDermatomesV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isDermatomes.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `fifteenthPage[${index}].${isDermatomes.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
            <label className="vvvx">WNL</label>

            <input
              className="carnivaNotes3"
              // value={dermatomesV}
              label="Dermatomes"
              name={dermatomes.name}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[dermatomes.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${dermatomes.name}`, e.target.value);
              }}
            />

            {/* <FormField
              label="Cranial Nerves:"
              type={cranialNerves.type}
              name={cranialNerves.name}
              value={cranialNervesV}
            /> */}
          </Grid>
          {/* <Grid
            item
            lg={5}
            sm={4}
            xs={6}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FormField value={dermatomesV} label="Dermatomes:" name={dermatomes.name} />
            <FormControlLabel
              className="CranialNervesLabel"
              control={
                <Checkbox
                  name={isDermatomes.name}
                  checked={isDermatomesV}
                  onChange={formik.handleChange}
                />
              }
              label={"WNL"}
            />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="cranialner-input"
          >
            <label>Myotomes:</label>
            <FormControlLabel
              style={{ marginRight: "0px" }}
              control={
                <Checkbox
                  name={isMyotomes.name}
                  // checked={isMyotomesV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isMyotomes.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `fifteenthPage[${index}].${isMyotomes.name}`,
                      e.target.checked
                    )
                  }
                />
              }
              className="vvx"
            />
            <label className="vvvx">WNL</label>

            <input
              className="carnivaNotes4"
              type={myotomes.type}
              label="Myotomes"
              name={myotomes.name}
              // value={myotomesV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[myotomes.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${myotomes.name}`, e.target.value);
              }}
            />

            {/* <FormField
              label="Cranial Nerves:"
              type={cranialNerves.type}
              name={cranialNerves.name}
              value={cranialNervesV}
            /> */}
          </Grid>
          {/* <Grid
            item
            lg={5}
            sm={4}
            xs={6}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FormField
              type={myotomes.type}
              label="Myotomes:"
              name={myotomes.name}
              value={myotomesV}
            />
            <FormControlLabel
              className="CranialNervesLabel"
              control={
                <Checkbox
                  name={isMyotomes.name}
                  checked={isMyotomesV}
                  onChange={formik.handleChange}
                />
              }
              label={"WNL"}
            />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="cranialner-input"
          >
            <label>DTR{"'"}s:</label>
            <FormControlLabel
              className="vvx"
              style={{ marginRight: "0px" }}
              control={
                <Checkbox
                  name={isDtrs.name}
                  // checked={isDtrsV}
                  //  onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isDtrs.name]}
                  onChange={(e) =>
                    formik.setFieldValue(`fifteenthPage[${index}].${isDtrs.name}`, e.target.checked)
                  }
                />
              }
            />
            <label className="vvvx">WNL</label>

            <input
              className="carnivaNotes5"
              type={dtrs.type}
              label="DTR's"
              name={dtrs.name}
              // value={dtrsV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[dtrs.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${dtrs.name}`, e.target.value);
              }}
            />
          </Grid>
          {/* <Grid
            item
            lg={5}
            sm={4}
            xs={6}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FormField type={dtrs.type} label="DTR's:" name={dtrs.name} value={dtrsV} />
            <FormControlLabel
              className="CranialNervesLabel"
              control={
                <Checkbox name={isDtrs.name} checked={isDtrsV} onChange={formik.handleChange} />
              }
              label={"WNL"}
            />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="cranialner-input"
          >
            <label>Pathological:</label>
            <FormControlLabel
              className="vvx"
              style={{ marginRight: "0px" }}
              control={
                <Checkbox
                  name={isPathological.name}
                  // checked={isPathologicalV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isPathological.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `fifteenthPage[${index}].${isPathological.name}`,
                      e.target.checked
                    )
                  }
                />
              }
            />
            <label className="vvvx">WNL</label>

            <input
              className="carnivaNotes6"
              type={pathological.type}
              label="Pathological"
              name={pathological.name}
              // value={pathologicalV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[pathological.name]}
              onChange={(e) => {
                formik.setFieldValue(
                  `fifteenthPage[${index}].${pathological.name}`,
                  e.target.value
                );
              }}
            />
          </Grid>
          {/* <Grid
            item
            lg={5}
            sm={4}
            xs={6}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FormField
              type={pathological.type}
              label="Pathological:"
              name={pathological.name}
              value={pathologicalV}
            />
            <FormControlLabel
              className="CranialNervesLabel"
              control={
                <Checkbox
                  name={isPathological.name}
                  checked={isPathologicalV}
                  onChange={formik.handleChange}
                />
              }
              label={"WNL"}
            />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="cranialner-input homans"
          >
            <label>Homan{"'"}s:</label>
            <FormControlLabel
              style={{ marginRight: "0px" }}
              control={
                <Checkbox
                  name={isHomans.name}
                  // checked={isHomansV}
                  // onChange={formik.handleChange}
                  checked={formik.values?.fifteenthPage[index]?.[isHomans.name]}
                  onChange={(e) =>
                    formik.setFieldValue(
                      `fifteenthPage[${index}].${isHomans.name}`,
                      e.target.checked
                    )
                  }
                />
              }
              label={"NI"}
            />
            <input
              className="carnivaNotes7"
              type={homans.type}
              label="Homan's"
              name={homans.name}
              // value={homansV}
              // onChange={formik.handleChange}
              value={formik.values?.fifteenthPage[index]?.[homans.name]}
              onChange={(e) => {
                formik.setFieldValue(`fifteenthPage[${index}].${homans.name}`, e.target.value);
              }}
            />
          </Grid>
          {/* <Grid
            item
            lg={5}
            sm={4}
            xs={6}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <FormField type={homans.type} label="Homan's:" name={homans.name} value={homansV} />
            <FormControlLabel
              className="CranialNervesLabel"
              control={
                <Checkbox name={isHomans.name} checked={isHomansV} onChange={formik.handleChange} />
              }
              label={"WNL"}
            />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid
        item
        lg={6}
        sm={12}
        xs={12}
        style={{ alignItems: "center", justifyContent: "center", marginTop: "150px" }}
        className="multibodyimg"
      >
        <img src={image} alt="" height="auto" width="auto" />
      </Grid>
    </>
  );
};

ImageComponent.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  doctorShopFromDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.numbers,
};
export default ImageComponent;
