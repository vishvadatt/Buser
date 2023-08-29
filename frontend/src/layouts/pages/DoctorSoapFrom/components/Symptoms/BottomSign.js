import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/DoctorSoapFrom/components/Symptoms/FormField/index";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function BottomSign({ formik }) {
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [signBeginClient, setSignBeginClient] = React.useState(true);
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);
  const onBeginfun = (e) => {
    setSignBeginClient(e?.isTrusted);
  };
  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginOfc(true);
  }

  function clear1() {
    signPad1.current.clear();
    setSignBeginClient(true);
  }

  const { values,
    setFieldValue, } = formik;

  console.log("values", values)
  const {
    patientSignature: patientsignV,
    doctorSignature: doctorsignV,
  } = values;

  return (
    //   <FormControl>
    // <Grid container spacing={3} ml={0} mt={1}>
    // <Grid container spacing={3} style={{ marginTop: "10px" }}>
    //   <Grid item xs={12} sm={6}>
    //     <FormField
    //       type="input"
    //       label="Patient Signature"
    //       name="patientSignature"
    //       value={values.patientSignature}
    //       onChange={(e) => setFieldValue("patientSignature", e.target.value)}
    //       // placeholder={Patient.placeholder}
    //       // error={errors.Patient && touched.Patient}
    //       //   success={PatientV.length > 0 && !errors.Patient}
    //     />
    //     {/* <label className="spanLab">Patient Signature</label> */}
    //   </Grid>
    //   <Grid item xs={12} sm={6}>
    //     <FormField
    //       type="input"
    //       label="Dr. Signature"
    //       name="doctorSignature"
    //       value={values.doctorSignature}
    //       onChange={(e) => setFieldValue("doctorSignature", e.target.value)}

    //       // placeholder={Patient.placeholder}
    //       // error={errors.Patient && touched.Patient}
    //       //   success={PatientV.length > 0 && !errors.Patient}
    //     />
    //     {/* <label className="spanLab">Dr. Signature</label> */}
    //   </Grid>
    // </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6} >
        <br />
        <span><b>Client Signature</b> </span>
        {patientsignV !== undefined ? (
          <Grid item xs={12} lg={6} sm={6} className="parentClass">
            <img src={patientsignV} />
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
                  setFieldValue(
                    "patientSignature",
                    sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                  );
                }}
              >
                Save
              </SoftButton>
            </div>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} lg={6} >
        <br />
        {/* <span ><b>Dr. Signature</b> </span> */}
        <span ><b>Practitioner Signature</b> </span>
        {doctorsignV !== undefined ? (
          <Grid item xs={12} sm={4} className="parentClass">
            <img src={doctorsignV} />
            <h5 style={{ fontSize: "15px" }}>Sign here</h5>
          </Grid>
        ) : (
          <Grid item xs={12} md={6} lg={4}>
            <SignaturePad
              canvasProps={{ width: 240, height: 150 }}
              ref={signPad1}
              penColor="black"
              backgroundColor="#f1f1f1"
              placeholder="sign"
              onBegin={(e) => onBeginfun(e.isTrusted)}
            />
            <div className="saveAndClear">
              <SoftButton
                onClick={clear1}
                style={{ marginRight: "10px" }}
                disabled={signBeginClient}
              >
                Clear
              </SoftButton>
              <SoftButton
                disabled={signBeginClient}
                onClick={() => {
                  setFieldValue(
                    "doctorSignature",
                    signPad1.current.getTrimmedCanvas().toDataURL("image/png")
                  );
                }}
              >
                Save
              </SoftButton>
            </div>
          </Grid>
        )}
      </Grid>
    </Grid>
    // </Grid>
    //   </FormControl>
  );
}

BottomSign.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default BottomSign;
