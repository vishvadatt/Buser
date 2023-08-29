import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

function Table2({ formik, form, index }) {
  const { formField } = form;
  const { values } = formik;

  const {
    table9Check,
    table10Check,
    table11Check,
    table12Check,
    table13Check,
    table14Check,
    table15Check,
    table16Check,
    table17Check,
    table18Check,
    table19Check,
    table20Check,
    table21Check,
    table22Check,
    table23Check,
    table24Check,
    table25Check,
    table26Check,
    table27Check,
    table28Check,
    table29Check,
    table30Check,
    table31Check,
    table32Check,
    table33Check,
    table34Check,
    table35Check,
    EstablishedPati99213Inp,
    EstablishedPati99214Inp,
    EstablishedPati99215Inp,
    CMT940Inp,
    CMT941Inp,
    CMT942Inp,
    CMT943Inp,
    CommonTherapies97140Inp,
    CommonTherapies97010Inp,
    CommonTherapies97014Inp,
    CommonTherapies97035Inp,
    CommonTherapies97012Inp,
    CommonTherapies97112Inp,
    CommonTherapies97530Inp,
    CommonTherapies97116Inp,
    CommonTherapies97110Inp,
    OtherTherapies97124Inp,
    OtherTherapies97750Inp,
    Modifier_AT,
    Modifier_GA,
    Modifier_GZ,
    Modifier_GY,
    Modifier_GP,
    Modifier_GX,
    Modifier_25,
    Modifier_51,
    Modifier_59,
  } = formField;

  const {
    table9Check: table9CheckV,
    table10Check: table10CheckV,
    table11Check: table11CheckV,
    table12Check: table12CheckV,
    table13Check: table13CheckV,
    table14Check: table14CheckV,
    table15Check: table15CheckV,
    table16Check: table16CheckV,
    table17Check: table17CheckV,
    table18Check: table18CheckV,
    table19Check: table19CheckV,
    table20Check: table20CheckV,
    table21Check: table21CheckV,
    table22Check: table22CheckV,
    table23Check: table23CheckV,
    table24Check: table24CheckV,
    table25Check: table25CheckV,
    table26Check: table26CheckV,
    table27Check: table27CheckV,
    table28Check: table28CheckV,
    table29Check: table29CheckV,
    table30Check: table30CheckV,
    table31Check: table31CheckV,
    table32Check: table32CheckV,
    table33Check: table33CheckV,
    table34Check: table34CheckV,
    table35Check: table35CheckV,
    EstablishedPati99213Inp: EstablishedPati99213InpV,
    EstablishedPati99214Inp: EstablishedPati99214InpV,
    EstablishedPati99215Inp: EstablishedPati99215InpV,
    CMT940Inp: CMT940InpV,
    CMT941Inp: CMT941InpV,
    CMT942Inp: CMT942InpV,
    CMT943Inp: CMT943InpV,

    CommonTherapies97140Inp: CommonTherapies97140InpV,
    CommonTherapies97010Inp: CommonTherapies97010InpV,
    CommonTherapies97014Inp: CommonTherapies97014InpV,
    CommonTherapies97035Inp: CommonTherapies97035InpV,
    CommonTherapies97012Inp: CommonTherapies97012InpV,
    CommonTherapies97112Inp: CommonTherapies97112InpV,
    CommonTherapies97530Inp: CommonTherapies97530InpV,
    CommonTherapies97116Inp: CommonTherapies97116InpV,
    CommonTherapies97110Inp: CommonTherapies97110InpV,

    OtherTherapies97124Inp: OtherTherapies97124InpV,
    OtherTherapies97750Inp: OtherTherapies97750InpV,

    Modifier_AT: Modifier_ATV,
    Modifier_GA: Modifier_GAV,
    Modifier_GZ: Modifier_GZV,
    Modifier_GY: Modifier_GYV,
    Modifier_GP: Modifier_GPV,
    Modifier_GX: Modifier_GXV,
    Modifier_25: Modifier_25V,
    Modifier_51: Modifier_51V,
    Modifier_59: Modifier_59V,
  } = values;
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="tableCss">
        <tbody>
          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table9Check.name}
                    // checked={table9CheckV}
                    // onChange={formik.handleChange}\
                    checked={formik.values?.ninethPage[index]?.[table9Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table9Check.name}`,
                        e.target.checked
                      )
                    }
                    className="checkbox-css"
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab">99213-25</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                Requires at least 2 of these 3 key components:
                <div>An expanded problem focused</div>
                <div>history</div>
                <div>An expanded problem focused</div>
                <div>examination</div>
                <div>Medical decision making of low</div>
                complexity
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>Presenting problem(s) are of low to moderate severity</div>
                <div>15 minutes spent face-to-face</div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={EstablishedPati99213Inp.type}
                name={EstablishedPati99213Inp.name}
                // value={EstablishedPati99213InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[EstablishedPati99213Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${EstablishedPati99213Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$70"
              />
            </td>
          </tr>
          <tr className="tr-css ">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table10Check.name}
                    // checked={table10CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table10Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table10Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">99214-25</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Requires at least 2 of these 3 key components:</div>
                <div>A detailed history</div>
                <div>
                  A detailed examination <br />
                  Medical decision making of moderate complexity
                </div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>Presenting problem(s) are of moderate to high severity</div>
                <div>25 minutes spent face-to-face</div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={EstablishedPati99214Inp.type}
                name={EstablishedPati99214Inp.name}
                // value={EstablishedPati99214InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[EstablishedPati99214Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${EstablishedPati99214Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$100"
              />
            </td>
          </tr>

          <tr className="tr-css last-ele">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table11Check.name}
                    // checked={table11CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table11Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table11Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab">99215-25</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Requires at least 2 of these 3 key</div>
                <div>components:</div>
                <div>A comprehensive history</div>
                <div>A comprehensive examination</div>
                <div>Medical decision making of high</div>
                <div>complexity</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>Presenting problem(s) are of moderate to high severity</div>
                <div>40 minutes spent face-to-face</div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={EstablishedPati99215Inp.type}
                name={EstablishedPati99215Inp.name}
                // value={EstablishedPati99215InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[EstablishedPati99215Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${EstablishedPati99215Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$170"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type ">
              <span className="VBAIlabel therapiLab">CMT</span>
            </td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table12Check.name}
                    // checked={table12CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table12Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table12Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab">98940</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">Spinal CMT 1-2 regions</span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                If also doing therapies, don&rsquo;t need extremity dx, but it wouldn&rsquo;t hurt
              </span>
            </td>
            <td className="input-td">
              <input
                type={CMT940Inp.type}
                name={CMT940Inp.name}
                // value={CMT940InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CMT940Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${CMT940Inp.name}`, e.target.value);
                }}
                className="input-Css"
                placeholder="$60"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table13Check.name}
                    // checked={table13CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table13Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table13Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">98941</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Spinal CMT 3-4 regions</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                If also doing therapies, need an extremity dx
              </span>
            </td>
            <td className="input-td">
              <input
                type={CMT941Inp.type}
                name={CMT941Inp.name}
                // value={CMT941InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CMT941Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${CMT941Inp.name}`, e.target.value);
                }}
                className="input-Css"
                placeholder="$70"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table14Check.name}
                    // checked={table14CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table14Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table14Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">98942</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Spinal CMT 5 regions</div>
              </span>
            </td>
            <td className="presenting-td"></td>
            <td className="input-td">
              <input
                type={CMT942Inp.type}
                name={CMT942Inp.name}
                // value={CMT942InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CMT942Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${CMT942Inp.name}`, e.target.value);
                }}
                className="input-Css"
                placeholder="$80"
              />
            </td>
          </tr>

          <tr className="tr-css last-ele">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table15Check.name}
                    // checked={table15CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table15Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table15Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">98943 -51</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Extraspinal CMT</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                Typically not accepted and reimbursed, Use -51 modifier
              </span>
            </td>
            <td className="input-td">
              <input
                type={CMT943Inp.type}
                name={CMT943Inp.name}
                // value={CMT943InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CMT943Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${CMT943Inp.name}`, e.target.value);
                }}
                className="input-Css"
                placeholder="$50"
              />
            </td>
          </tr>

          {/* kdmkglsmgl */}

          <tr className="tr-css">
            <td className="therapies-type">
              <span className="VBAIlabel therapiLab"> Common Therapies</span>
            </td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table16Check.name}
                    // checked={table16CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table16Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table16Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab">97140 -59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                Manual therapy (1 unit, 15min) (WC =97250)
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                Connective tissue massage, mobilization/manipulation, & manual traction
              </span>
            </td>
            <td className="input-td">
              <input
                type={CommonTherapies97140Inp.type}
                name={CommonTherapies97140Inp.name}
                // value={CommonTherapies97140InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97140Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97140Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$35"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table17Check.name}
                    // checked={table17CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table17Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table17Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97010-59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Hot & Cold packs</div>
              </span>
            </td>
            <td className="presenting-td"></td>
            <td className="input-td">
              <input
                type={CommonTherapies97010Inp.type}
                name={CommonTherapies97010Inp.name}
                // value={CommonTherapies97010InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97010Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97010Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$15"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table18Check.name}
                    // checked={table18CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table18Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table18Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97014 -59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Electrical stimulation (Unattended, United = G0283)</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                Strengthen/rehabilitate muscles, promote healing, decrease pain/inflammation
              </span>
            </td>
            <td className="input-td">
              <input
                type={CommonTherapies97014Inp.type}
                name={CommonTherapies97014Inp.name}
                // value={CommonTherapies97014InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97014Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97014Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$35"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table19Check.name}
                    // checked={table19CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table19Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table19Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97035 -59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Ultrasound (1 unit, 15min)</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                Tissue relaxation, ↑ blood flow to reduce local swelling/chronic inflammation, scar
                tissue breakdown, & fracture healing
              </span>
            </td>
            <td className="input-td">
              <input
                type={CommonTherapies97035Inp.type}
                name={CommonTherapies97035Inp.name}
                // value={CommonTherapies97035InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97035Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97035Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$35"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table20Check.name}
                    // checked={table20CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table20Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table20Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97012 -59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Mechanical traction</div>
              </span>
            </td>
            <td className="presenting-td"></td>
            <td className="input-td">
              <input
                type={CommonTherapies97012Inp.type}
                name={CommonTherapies97012Inp.name}
                // value={CommonTherapies97012InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97012Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97012Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$35"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table21Check.name}
                    // checked={table21CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table21Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table21Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97112-59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Neuromusular re-education (1 unit,15min)</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                Re-education of movement, balance, coordination, kinesthetic sense, posture,
                proprioception
              </span>
            </td>
            <td className="input-td">
              <input
                type={CommonTherapies97112Inp.type}
                name={CommonTherapies97112Inp.name}
                // value={CommonTherapies97112InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97112Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97112Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$45"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table22Check.name}
                    // checked={table22CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table22Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table22Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97530 -59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Therapeutic activities (1 unit, 15min)</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                Dynamic activities to improve functional performance, direct (one-on-one) with the
                patient
              </span>
            </td>
            <td className="input-td">
              <input
                type={CommonTherapies97530Inp.type}
                name={CommonTherapies97530Inp.name}
                // value={CommonTherapies97530InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97530Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97530Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$45"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table23Check.name}
                    // checked={table23CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table23Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table23Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97116 -59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Gait training (1 unit, 15min)</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>Gait correction, includes stair climbing</div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={CommonTherapies97116Inp.type}
                name={CommonTherapies97116Inp.name}
                // value={CommonTherapies97116InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97116Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97116Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$35"
              />
            </td>
          </tr>

          <tr className="tr-css last-ele">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table24Check.name}
                    // checked={table24CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table24Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table24Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97110 -59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Therapeutic procedure (1+ Area(s), 15min ea)</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>To develop strength, endurance, rom, & flexibility</div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={CommonTherapies97110Inp.type}
                name={CommonTherapies97110Inp.name}
                // value={CommonTherapies97110InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[CommonTherapies97110Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${CommonTherapies97110Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$35"
              />
            </td>
          </tr>

          {/* other */}

          <tr className="tr-css ">
            <td className="therapies-type">
              <span className="VBAIlabel therapiLab "> Other Therapies</span>
            </td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table25Check.name}
                    // checked={table25CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table25Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table25Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97124-59</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Massage therapy (1 unit, 15min) </div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  Massage, including effleurage, petrissage, and/or tapotement (stroking,
                  compression, percussion)
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={OtherTherapies97124Inp.type}
                name={OtherTherapies97124Inp.name}
                // value={OtherTherapies97124InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[OtherTherapies97124Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${OtherTherapies97124Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$35"
              />
            </td>
          </tr>

          <tr className="tr-css last-ele">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table26Check.name}
                    // checked={table26CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table26Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table26Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">97750</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Physical performance test (1 unit, 15min)</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>Test/measure musculoskeletal or functional capacity with written report</div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={OtherTherapies97750Inp.type}
                name={OtherTherapies97750Inp.name}
                // value={OtherTherapies97750InpV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[OtherTherapies97750Inp.name]}
                onChange={(e) => {
                  formik.setFieldValue(
                    `ninethPage[${index}].${OtherTherapies97750Inp.name}`,
                    e.target.value
                  );
                }}
                className="input-Css"
                placeholder="$45"
              />
            </td>
          </tr>

          {/* //modifier */}
          <tr className="tr-css ">
            <td className="therapies-type">
              <span className="VBAIlabel therapiLab "> Modifier</span>
            </td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table27Check.name}
                    // checked={table27CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table27Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table27Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab">AT</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <span className="VBAIlabel therapiLab">Active Treatment</span>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  Used on Medically Necessary Spinal CMT Only. Consists of acute/chronic
                  active/corrective care
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_AT.type}
                name={Modifier_AT.name}
                // value={Modifier_ATV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_AT.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_AT.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table28Check.name}
                    // checked={table28CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table28Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table28Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">GA</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Advance Beneficiary Notice (ABN) on File</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  {" "}
                  Used on Medically Unnecessary Spinal CMT Only. ABN used when Covered Spinal CMT is
                  for maintenance care
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_GA.type}
                name={Modifier_GA.name}
                // value={Modifier_GAV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_GA.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_GA.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table29Check.name}
                    // checked={table29CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table29Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table29Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">GZ</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>ABN NOT on File</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  {" "}
                  Medically Unnecessary Spinal CMT Only. ABN wasn’t signed. (Good faith towards
                  Medicare for error) (NO payment from the patient)
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_GZ.type}
                name={Modifier_GZ.name}
                // value={Modifier_GZV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_GZ.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_GZ.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table30Check.name}
                    // checked={table30CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table30Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table30Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">GY</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Non-Covered Service</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  Used on All Non-Covered Items/Services. Includes: x-rays, extra-spinal CMT,
                  therapy modalities, & exams
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_GY.type}
                name={Modifier_GY.name}
                // value={Modifier_GYV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_GY.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_GY.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table31Check.name}
                    // checked={table31CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table31Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table31Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">GP</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Services under Outpatient PT care plan</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  Used on Therapy Services Only. Required on most therapy codes & used in addition
                  to GY modifier (e.g., 97035 GPGY)
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_GP.type}
                name={Modifier_GP.name}
                // value={Modifier_GPV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_GP.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_GP.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table32Check.name}
                    // checked={table32CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table32Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table32Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">GX</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Non-covered service with expected denial: ABN signed</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  {" "}
                  Used to indicate an ABN filed to voluntarily notify a beneficiary that a
                  statutorily noncovered Medicare service will not be covered
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_GX.type}
                name={Modifier_GX.name}
                // value={Modifier_GXV}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_GX.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_GX.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table33Check.name}
                    // checked={table33CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table33Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table33Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">25</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Separate & Distinct Service (Evaluation) in Same Visit</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  {" "}
                  Re-Exam Modifier Significant, separately identifiable E/M service by the same
                  physician on the same day of the procedure or other service
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_25.type}
                name={Modifier_25.name}
                // value={Modifier_25V}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_25.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_25.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          <tr className="tr-css">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table34Check.name}
                    // checked={table34CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table34Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table34Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">51</span>
            </td>
            <td className="requries-td">
              <span className="VBAIlabel therapiLab">
                <div>Separate & Distinct Service in Same Visit</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>
                  {" "}
                  Separate & distinct service for the same condition; Use for CMT to separate &
                  distinct regions, such as extremity CMT
                </div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_51.type}
                name={Modifier_51.name}
                // value={Modifier_51V}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_51.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_51.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          <tr className="tr-css last-ele">
            <td className="therapies-type"></td>
            <td className="checkbox-td">
              <FormControlLabel
                style={{ marginTop: "4px" }}
                control={
                  <Checkbox
                    name={table35Check.name}
                    // checked={table35CheckV}
                    // onChange={formik.handleChange}
                    checked={formik.values?.ninethPage[index]?.[table35Check.name]}
                    onChange={(e) =>
                      formik.setFieldValue(
                        `ninethPage[${index}].${table35Check.name}`,
                        e.target.checked
                      )
                    }
                  />
                }
              />
            </td>
            <td className="number-td">
              <span className="VBAIlabel therapiLab ">59</span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div> Separate & Distinct Service (Therapies) in Same Visit</div>
              </span>
            </td>
            <td className="presenting-td">
              <span className="VBAIlabel therapiLab">
                <div>Separate & distinct service for a different condition</div>
              </span>
            </td>
            <td className="input-td">
              <input
                type={Modifier_59.type}
                name={Modifier_59.name}
                // value={Modifier_59V}
                // onChange={formik.handleChange}
                value={formik.values?.ninethPage[index]?.[Modifier_59.name]}
                onChange={(e) => {
                  formik.setFieldValue(`ninethPage[${index}].${Modifier_59.name}`, e.target.value);
                }}
                className="input-Css"
              />
            </td>
          </tr>

          {/* nmjkhjh */}
        </tbody>
      </table>
    </div>
  );
}
Table2.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};

export default Table2;
