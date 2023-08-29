import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function firstForm({ formik, formData, index }) {
  const { values } = formik;

  const {
    physicalexam: physicalexamV,
    obgynexam: obgynexamV,
    wellnessexam: wellnessexamV,
    eyeexam: eyeexamV,
    dentalexam: dentalexamV,
    agemenstruation: agemenstruationV,
    cycleduration: cycledurationV,
    cyclefrequency: cyclefrequencyV,
    abnormaltexture: abnormaltextureV,
    paindiscomfort: paindiscomfortV,
    datemenopause: datemenopauseV,
    lastpap: lastpapV,
    birthcontrol: birthcontrolV,
    hormonetherapy: hormonetherapyV,
  } = values?.page6[index];

  console.log("valuesonpage", values);

  return (
    <>
      <SoftBox mb={3}>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="10px">
          Recent Exams (List date):
        </SoftTypography>
        <Grid container>
          <Grid item lg={4} xs={12} md={6}>
            <div className="Physical">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Physical:</span>
              <input
                type="date"
                onChange={formik.handleChange}
                name={`page6[${index}].physicalexam`}
                label="physicalexam"
                value={physicalexamV}
              />
            </div>
            <div className="ObGyn">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Ob/Gyn:</span>
              <input
                type="date"
                onChange={formik.handleChange}
                name={`page6[${index}].obgynexam`}
                label="obgynexam"
                value={obgynexamV}
              />
            </div>
            <div className="WellnessE">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Wellness Exam:</span>
              <input
                type="date"
                onChange={formik.handleChange}
                name={`page6[${index}].wellnessexam`}
                label="wellnessexam"
                value={wellnessexamV}
              />
            </div>
          </Grid>

          {/* <Grid item lg={0.5}></Grid> */}
          <Grid item lg={5} xs={12} md={5}>
            <div className="Eye">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Eye:</span>
              <input
                type="date"
                onChange={formik.handleChange}
                name={`page6[${index}].eyeexam`}
                label="eyeexam"
                value={eyeexamV}
              />
            </div>
            <div className="Dental">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Dental:</span>
              <input
                type="date"
                onChange={formik.handleChange}
                name={`page6[${index}].dentalexam`}
                label="dentalexam"
                value={dentalexamV}
              />
            </div>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={3}>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="10px">
          Females :
        </SoftTypography>
        <Grid className="Females">
          <div className="Age">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>
              Age of first menstruation:
            </span>
            <input
              style={{ width: "30%" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].agemenstruation`}
              label="agemenstruation"
              value={agemenstruationV}
            />
          </div>
          <div className="lastcycle">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Last Cycle Duration:</span>
            <input
              style={{ width: "31.1%" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].cycleduration`}
              label="cycleduration"
              value={cycledurationV}
            />
          </div>
          <div className="cycle">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Cycle Frequency:</span>
            <input
              style={{ width: "31.7%" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].cyclefrequency`}
              label="cyclefrequency"
              value={cyclefrequencyV}
            />
          </div>
          <div className="abnormal">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Abnormal Odor/Texture:</span>
            <input
              style={{ width: "30.5%" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].abnormaltexture`}
              label="abnormaltexture"
              value={abnormaltextureV}
            />
          </div>
          <div className="pain">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Pain/Discomfort:</span>
            <input
              style={{ width: "32%" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].paindiscomfort`}
              label="paindiscomfort"
              value={paindiscomfortV}
            />
          </div>
          <div className="dateofmeno">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>
              Date of Menopause, if applicable:
            </span>
            <input
              style={{ width: "29%" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].datemenopause`}
              label="datemenopause"
              value={datemenopauseV}
            />
          </div>
          <div className="lastpap">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Last PAP:</span>
            <input
              style={{ width: "33.5%" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].lastpap`}
              label="lastpap"
              value={lastpapV}
            />
          </div>
          <div className="birth">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Birth Control:</span>
            <input
              style={{ width: "32.7%" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].birthcontrol`}
              label="birthcontrol"
              value={birthcontrolV}
            />
          </div>
          <div className="hormone">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>
              Hormone/Estrogen Therapy:
            </span>
            <input
              style={{ width: "30.3" }}
              type="text"
              onChange={formik.handleChange}
              name={`page6[${index}].hormonetherapy`}
              label="hormonetherapy"
              value={hormonetherapyV}
            />
          </div>
        </Grid>
      </SoftBox>
    </>
  );
}
firstForm.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default firstForm;
