import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function Bottom({ formik }) {

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

  return (
    <div>
      <Grid item xs={12} sm={12}>
        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Signature Of Practitioner:</span>
        {/* <FormField
          type="text"
          label="Signature Of Doctor"
          name="signatureOfDoctor"
          value={values.signatureOfDoctor}
          placeholder="Doctor Signature"
        /> */}

        {values.signatureOfDoctor !== undefined ? (
          <Grid item xs={12} lg={6} sm={6} className="parentClass">
            <img src={values.signatureOfDoctor} />
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
                    "signatureOfDoctor",
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
    </div>
  );
}

Bottom.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Bottom;
