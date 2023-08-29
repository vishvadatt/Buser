import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";

import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function BottomCheckbox({ formik }) {
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);

  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginOfc(true);
  }

  const { values, setFieldValue } = formik;

  const { signatureDoctor } = values;

  console.log(values, "signatureDoctor")

  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    setChecked([...abc]);
  };

  return (
    <div>
      <Grid container>
        <Grid xs={12} lg={6.3} sm={12}>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck1"
              checked={values.btmemptycheck1}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck1", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt1"
              value={values.btmemptyinpt1}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt1", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck2"
              checked={values.btmemptycheck2}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck2", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt2"
              value={values.btmemptyinpt2}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt2", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck3"
              checked={values.btmemptycheck3}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck3", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt3"
              value={values.btmemptyinpt3}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt3", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck4"
              checked={values.btmemptycheck4}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck4", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt4"
              value={values.btmemptyinpt4}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt4", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck5"
              checked={values.btmemptycheck5}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck5", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt5"
              value={values.btmemptyinpt5}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt5", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
        </Grid>
        <Grid xs={12} lg={5.7} sm={12}>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck6"
              checked={values.btmemptycheck6}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck6", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt6"
              value={values.btmemptyinpt6}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt6", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck7"
              checked={values.btmemptycheck7}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck7", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt7"
              value={values.btmemptyinpt7}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt7", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck8"
              checked={values.btmemptycheck8}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck8", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt8"
              value={values.btmemptyinpt8}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt8", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck9"
              checked={values.btmemptycheck9}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck9", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt9"
              value={values.btmemptyinpt9}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt9", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>
          <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
            <Checkbox
              name="btmemptycheck10"
              checked={values.btmemptycheck10}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptycheck10", e.target.checked)}
              className="checkboxwithinput"
            />
            <input
              type="input"
              name="btmemptyinpt10"
              value={values.btmemptyinpt10}
              // onChange={formik.handleChange}
              onChange={(e) => setFieldValue("btmemptyinpt10", e.target.value)}
              className="therapiCss"
              style={{ width: "100%", maxWidth: "400px", height: "23px" }}
            />
          </div>

          <Grid item xs={12} sm={12}>
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Signature Of Practitioner:</span>
            {/* <FormField
              type="text"
              label="Signature Of Doctor"
              name="signatureDoctor"
              value={values.signatureDoctor}
              placeholder="Doctor Signature"
            /> */}
            {values.signatureDoctor !== undefined ? (
              <Grid item xs={12} lg={6} sm={6} className="parentClass">
                <img src={values.signatureDoctor} />
                <h5 style={{ fontSize: "15px" }}>Sign here</h5>
              </Grid>
            ) : (
              <Grid item xs={12} md={6} lg={4}>
                <SignaturePad
                  canvasProps={{ width: 240, height: 150 }}
                  ref={sigPad}
                  penColor="black"
                  backgroundColor="#f1f1f1"
                  placeholder="sign"
                  onBegin={(e) => onBeginfun1(e.isTrusted)}
                />
                <div className="saveAndClear">
                  <SoftButton
                    onClick={clear}
                    style={{ marginRight: "10px" }}
                    disabled={signBeginOfc}
                  >
                    Clear
                  </SoftButton>
                  <SoftButton
                    disabled={signBeginOfc}
                    onClick={() => {
                      formik.setFieldValue(
                        "signatureDoctor",
                        sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                      );
                    }}
                  >
                    Save
                  </SoftButton>
                </div>
              </Grid>
            )}

            {/* <label className="spanLab">Signature Of Doctor</label> */}
          </Grid>

          {/* <Grid item xs={12} sm={12} mt={3}>
          <label className="spanLab">Signature Of Doctor</label>
            <FormField
              type="text"
              name="signatureDoctor"
              value={values.signatureDoctor}
              placeholder="Doctor Signature"
            />
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}

BottomCheckbox.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default React.memo(BottomCheckbox);
