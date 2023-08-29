import React from "react";
import "../style.css";
import { Box, Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function secondForm({ formik, formData, index }) {
  const { values } = formik;
  const {
    acupuncturepast: acupuncturepastV,
    acupuncturecurrent: acupuncturecurrentV,
    chiropracticpast: chiropracticpastV,
    chiropracticcurrent: chiropracticcurrentV,
    massagepast: massagepastV,
    massagecurrent: massagecurrentV,
    medicalpast: medicalpastV,
    medicalcurrent: medicalcurrentV,
    naturopathicpast: naturopathicpastV,
    naturopathiccurrent: naturopathiccurrentV,
    nutritionistpast: nutritionistpastV,
    nutritionistcurrent: nutritionistcurrentV,
    otherspecialistpast: otherspecialistpastV,
    otherspecialistcurrent: otherspecialistcurrentV,
    Describe: DescribeV,
    bloodtest: bloodtestV,
    breast: breastV,
    colonoscopy: colonoscopyV,
    ctscan: ctscanV,
    dexa: dexaV,
    endoscope: endoscopeV,
    mri: mriV,
    prostate: prostateV,
    ultrasound: ultrasoundV,
    xray: xrayV,
    other: otherV,
    bloodtestText: bloodtestTextV,
    breastText: breastTextV,
    colonoscopyText: colonoscopyTextV,
    ctscanText: ctscanTextV,
    dexaText: dexaTextV,
    endoscopeText: endoscopeTextV,
    mriText: mriTextV,
    prostateText: prostateTextV,
    ultrasoundText: ultrasoundTextV,
    xrayText: xrayTextV,
    otherText: otherTextV,
    clientName: clientNameV,
  } = values?.page6[index];

  console.log(values, "sss");
  return (
    <>
      <SoftBox mb={3}>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="10px">
          Other Care Providers:
        </SoftTypography>
        <Grid container className="providers">
          <Grid item lg={5} xs={12} md={6} className="providers-table">
            <table style={{ fontSize: "16px" }}>
              <tr>
                <th style={{ paddingLeft: "200px" }}>Past</th>
                <th style={{ padding: "8px" }}>Current</th>
              </tr>
              <tr>
                <td style={{ padding: "8px", paddingRight: "7rem" }}>Acupuncture</td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].acupuncturepast`}
                    value={acupuncturepastV}
                    checked={acupuncturepastV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].acupuncturecurrent`}
                    value={acupuncturecurrentV}
                    checked={acupuncturecurrentV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", paddingRight: "25px" }}>Chiropractic</td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].chiropracticpast`}
                    value={chiropracticpastV}
                    checked={chiropracticpastV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].chiropracticcurrent`}
                    value={chiropracticcurrentV}
                    checked={chiropracticcurrentV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", paddingRight: "25px" }}>Massage</td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].massagepast`}
                    value={massagepastV}
                    checked={massagepastV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].massagecurrent`}
                    value={massagecurrentV}
                    checked={massagecurrentV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", paddingRight: "25px" }}>Medical</td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].medicalpast`}
                    value={medicalpastV}
                    checked={medicalpastV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].medicalcurrent`}
                    value={medicalcurrentV}
                    checked={medicalcurrentV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", paddingRight: "25px" }}>Naturopathic</td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].naturopathicpast`}
                    value={naturopathicpastV}
                    checked={naturopathicpastV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].naturopathiccurrent`}
                    value={naturopathiccurrentV}
                    checked={naturopathiccurrentV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", paddingRight: "25px" }}>Nutritionist/Dietitian</td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].nutritionistpast`}
                    value={nutritionistpastV}
                    checked={nutritionistpastV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].nutritionistcurrent`}
                    value={nutritionistcurrentV}
                    checked={nutritionistcurrentV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px", paddingRight: "25px" }}>Other specialist:</td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].otherspecialistpast`}
                    value={otherspecialistpastV}
                    checked={otherspecialistpastV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <Checkbox
                    name={`page6[${index}].otherspecialistcurrent`}
                    value={otherspecialistcurrentV}
                    checked={otherspecialistcurrentV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
            </table>
          </Grid>
          <Grid item lg={4.5} xs={12} md={6}>
            <div className="Describe">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Describe:</span>
              <input
                className="bor"
                type="text"
                name={`page6[${index}].Describe`}
                label="Describe"
                value={DescribeV}
                onChange={formik.handleChange}
              />
            </div>
          </Grid>
          <Grid item lg={1.5}></Grid>
        </Grid>
      </SoftBox>
      <SoftBox mb={5}>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="10px">
          Special Test/Exams, list reason for and date if possible:
        </SoftTypography>
        <Grid container>
          <Grid item lg={4.5} xs={12} md={5.5}>
            <div className="bloodtest">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Blood test:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].bloodtest`}
                  label="bloodtest"
                  value={bloodtestV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].bloodtestText`}
                  value={bloodtestTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="breast">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Breast Exam:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].breast`}
                  label="breast"
                  value={breastV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].breastText`}
                  value={breastTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="colonoscopy">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Colonoscopy:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].colonoscopy`}
                  label="colonoscopy"
                  value={colonoscopyV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].colonoscopyText`}
                  value={colonoscopyTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="ctscan">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>CT Scan:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].ctscan`}
                  label="ctscan"
                  value={ctscanV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].ctscanText`}
                  value={ctscanTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="dexa">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>DEXA:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].dexa`}
                  label="dexa"
                  value={dexaV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].dexaText`}
                  value={dexaTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="endoscope">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Endoscope:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].endoscope`}
                  label="endoscope"
                  value={endoscopeV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].endoscopeText`}
                  value={endoscopeTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="mri">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>MRI:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].mri`}
                  label="mri"
                  value={mriV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].mriText`}
                  value={mriTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="prostate">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Prostate:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].prostate`}
                  label="prostate"
                  value={prostateV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].prostateText`}
                  value={prostateTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="ultrasound">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Ultrasound:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].ultrasound`}
                  label="ultrasound"
                  value={ultrasoundV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].ultrasoundText`}
                  value={ultrasoundTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="x-ray">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>X-ray:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].xray`}
                  label="xray"
                  value={xrayV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].xrayText`}
                  value={xrayTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
            <div className="other">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Other:</span>
              <Box display={"flex"} flexDirection={"column"} width={"75%"} gap={"2px"}>
                <input
                  type="date"
                  name={`page6[${index}].other`}
                  label="other"
                  value={otherV}
                  onChange={formik.handleChange}
                />
                <input
                  type="text"
                  placeholder="Reason for"
                  name={`page6[${index}].otherText`}
                  value={otherTextV}
                  onChange={formik.handleChange}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftBox mt={3}>
        <Grid className="clientaction">
          <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
          <input
            type="text"
            name={`page6[${index}].clientName`}
            label="clientName"
            onChange={formik.handleChange}
            value={clientNameV}
          />
        </Grid>
      </SoftBox>
    </>
  );
}
secondForm.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default secondForm;
