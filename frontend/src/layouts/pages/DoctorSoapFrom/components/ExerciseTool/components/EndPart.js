import React from "react";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import Box from "@mui/material/Box";
import "../style.css";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function EndPart({ formik, index }) {
  const values = formik.values.excerciseDetails;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={2}></Grid>
        <Grid item xs={12} md={4}>
          <SoftBox>
            <Grid item className="clientname d-flex">
              <label style={{ fontSize: "15px", fontWeight: "bold"}}>Client Name:</label>
              <input
                style={{borderBottom: "1px solid", height: "28px"}} 
                type="text"
                label="ClientName"
                name={`excerciseDetails[${index}].ClientName`}
                value={formik.values?.excerciseDetails[index]?.ClientName}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].ClientName`, e.target.value)
                }
              />
            </Grid>
            <Grid item className="ChiefCom d-flex">
              <label style={{ fontSize: "15px", fontWeight: "bold" }}>Chief Complaint:</label>
              <input
                style={{borderBottom: "1px solid",height: "28px"}}
              className="pain"
                type="text"
                label="Chiefcomplaint"
                name={`excerciseDetails[${index}].Chiefcomplaint`}
                value={formik.values?.excerciseDetails[index]?.Chiefcomplaint}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].Chiefcomplaint`, e.target.value)
                }
              />
            </Grid>
            <Grid item className="painlevel d-flex">
              <label style={{ fontSize: "15px", fontWeight: "bold" }}>Pain Level:</label>
              <input
                style={{borderBottom: "1px solid",height: "28px"}}
                type="text"
                label="Painlevel"
                name={`excerciseDetails[${index}].Painlevel`}
                value={formik.values?.excerciseDetails[index]?.Painlevel}
                onChange={(e) =>
                  formik.setFieldValue(`excerciseDetails[${index}].Painlevel`, e.target.value)
                }
              />
            </Grid>
          </SoftBox>
        </Grid>
        <Grid item xs={12} md={5} className="practitioner-sub-section">
          <Grid item>
            <Grid container>
              <Grid item lg={12} xs={12} className="Practitioner d-flex">
                <label style={{ fontSize: "15px", fontWeight: "bold" }}>Practitioner: </label>
                <input
                style={{borderBottom: "1px solid"}}
                  type="text"
                  name={`excerciseDetails[${index}].Practitioner`}
                  value={formik.values?.excerciseDetails[index]?.Practitioner}
                  onChange={(e) =>
                    formik.setFieldValue(`excerciseDetails[${index}].Practitioner`, e.target.value)
                  }
                  label="Practitioner"
                />
              </Grid>

              <Grid container>
                <Grid item xs={12} md={8} lg={8} xl={5} className="pracdob d-flex">
                  <label style={{ fontSize: "15px", fontWeight: "bold" }}>Date:</label>
                  <input
                    className="pracdob"
                    type="date"
                    label="Date"
                    name={`excerciseDetails[${index}].Date`}
                    value={formik.values?.excerciseDetails[index]?.Date}
                    onChange={(e) =>
                      formik.setFieldValue(`excerciseDetails[${index}].Date`, e.target.value)
                    }
                  />
                </Grid>
                <Grid item className="Clearance">
                  <label style={{ fontSize: "15px", fontWeight: "bold" }}>
                    Physician Clearance:
                  </label>

                  <RadioGroup name="physicianclearance" className="radioGroup">
                    <div className=" d-inline-block ms-5 ">
                      <Radio
                        name={`excerciseDetails[${index}].physicianclearance`}
                        onChange={(e) =>
                          formik.setFieldValue(
                            `excerciseDetails[${index}].physicianclearance`,
                            e.target.value
                          )
                        }
                        checked={
                          formik.values?.excerciseDetails[index]?.physicianclearance === "yes"
                        }
                        id="yes"
                        className="form-check-input radioclear "
                        value="yes"
                      />
                      <span style={{ fontSize: "8px" }}>Yes</span>
                    </div>

                    <div className="form-check d-inline-block ms-5">
                      <Radio
                        checked={
                          formik.values?.excerciseDetails[index]?.physicianclearance === "no"
                        }
                        id="no"
                        name={`excerciseDetails[${index}].physicianclearance`}
                        className="form-check-input radioclear"
                        value="no"
                        onChange={(e) =>
                          formik.setFieldValue(
                            `excerciseDetails[${index}].physicianclearance`,
                            e.target.value
                          )
                        }
                      />
                      <span style={{ fontSize: "8px" }}>No</span>
                    </div>
                  </RadioGroup>
                </Grid>
                {/* <Grid container>
                  <Grid item lg={8}>
                    <div className="contactdesc">
                      <p style={{ marginRight: "10px" }}>Email: bgtherapy@gmail.com</p>
                    </div>
                  </Grid>
                  <Grid item lg={4}>
                    <div className="contactdesc">
                      <p>Fax:858.724.1419</p>
                    </div>
                  </Grid>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
    </>
  );
}

EndPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EndPart;
