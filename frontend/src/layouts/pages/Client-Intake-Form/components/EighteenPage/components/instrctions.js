import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { max } from "moment";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function instrctions({ formik, index }) {
  let sigPad = React.useRef({});
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);

  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginOfc(true);
  }

  const { values } = formik;
  let date = new Date().toLocaleDateString("en-CA");

  const {
    que1: que1V,
    que2: que2V,
    que3: que3V,
    que4: que4V,
    que5: que5V,
    que6: que6V,
    que7: que7V,
    que8: que8V,
    que9: que9V,
    que10: que10V,
    que11: que11V,
    que12: que12V,
    que13: que13V,
    que14: que14V,
    que15: que15V,
    que16: que16V,
    que17: que17V,
    sign: signV,
    date: dateV,
  } = values.page22[index];

  return (
    <>
      <SoftBox mt={2}>
        <SoftTypography fontSize="23px" marginBottom="5px">
          INSTRUCTIONS:
        </SoftTypography>
        <SoftTypography fontSize="16px" marginBottom="8px">
          The purpose of this questionnaire is to identify difficulties that you may be
          experiencing. Please select yes or no.
        </SoftTypography>
        <Grid mt={3} className="instruction">
          <table border={2}>
            <tr style={{ backgroundColor: "black", color: "white" }}>
              <th style={{ paddingLeft: "13px" }}>Epileptiform Activity</th>
              <th
                className="yes"
                style={{ paddingLeft: "13px", paddingRight: "13px", textAlign: "center" }}
              >
                Yes / No
              </th>
            </tr>
            <tr>
              <td
                className="short"
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  width: "83% ",
                }}
              >
                Have you ever been diagnosed with a seizure disorder?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que1">
                    <Radio
                      // className="radio1"
                      id="yes"
                      value="yes"
                      checked={que1V === "yes"}
                      name={`page22[${index}].que1`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      // className="radio1"
                      id="no"
                      value="no"
                      checked={que1V === "no"}
                      name={`page22[${index}].que1`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Have you ever been diagnosed with epilepsy?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que2">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que2V === "yes"}
                      name={`page22[${index}].que2`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes / </span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que2V === "no"}
                      name={`page22[${index}].que2`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}> No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Have you ever been told that you seemed frozen, absent, or tuned out at times
                without any recollection of the event?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que3">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que3V === "yes"}
                      name={`page22[${index}].que3`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que3V === "no"}
                      name={`page22[${index}].que3`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Have you ever experienced sudden muscle stiffness and rigidity throughout your body?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que4">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que4V === "yes"}
                      name={`page22[${index}].que4`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que4V === "no"}
                      name={`page22[${index}].que4`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Have you ever experienced sudden muscle jerks throughout your body?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que5">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que5V === "yes"}
                      name={`page22[${index}].que5`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que5V === "no"}
                      name={`page22[${index}].que5`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Have you ever experienced a total loss of your muscle tone that lead to loss of
                control of your muscles or a fall?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que6">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que6V === "yes"}
                      name={`page22[${index}].que6`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que6V === "no"}
                      name={`page22[${index}].que6`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Have you ever been told that you stare into space while you’re lip smacking,
                chewing, or fidgeting that you are not aware of?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que7">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que7V === "yes"}
                      name={`page22[${index}].que7`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que7V === "no"}
                      name={`page22[${index}].que7`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience sudden emotional responses such as anxiety, sadness, cry, or
                laugh for no real reason?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que8">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que8V === "yes"}
                      name={`page22[${index}].que8`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que8V === "no"}
                      name={`page22[${index}].que8`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience sudden racing heart rate, sudden loss of bladder function,
                intestinal spasm, respiration, sweating, or any other sudden changes of function?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que9">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que9V === "yes"}
                      name={`page22[${index}].que9`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que9V === "no"}
                      name={`page22[${index}].que9`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience sudden involuntary muscle contractures or jerks in any
                individual parts of your limbs or face?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que10">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que10V === "yes"}
                      name={`page22[${index}].que10`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que10V === "no"}
                      name={`page22[${index}].que10`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience sudden involuntary head rotation and your eyes move
                forcefully to one side?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que11">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que11V === "yes"}
                      name={`page22[${index}].que11`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que11V === "no"}
                      name={`page22[${index}].que11`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience sudden involuntary shift in your eyes to the side or upwards?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que12">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que12V === "yes"}
                      name={`page22[${index}].que12`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que12V === "no"}
                      name={`page22[${index}].que12`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience sudden vocalization of random words or notice a sudden
                inability to speak?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que13">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que13V === "yes"}
                      name={`page22[${index}].que13`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que13V === "no"}
                      name={`page22[${index}].que13`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience any spontaneous sensations of tingling, pins and needles”
                numbness, coldness, burning or other random sensations in any region of your body?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que14">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que14V === "yes"}
                      name={`page22[${index}].que14`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que14V === "no"}
                      name={`page22[${index}].que14`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience a ringing sensation in your ears (tinnitus), sounds, or
                voices spontaneously?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que15">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que15V === "yes"}
                      name={`page22[${index}].que15`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que15V === "no"}
                      name={`page22[${index}].que15`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience spontaneous perception of smells such as burning rubber, foul
                smells, or other odors without finding the source of the odor?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que16">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que16V === "yes"}
                      name={`page22[${index}].que16`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que16V === "no"}
                      name={`page22[${index}].que16`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Do you ever experience flashing lights, stars, or jagged lines in your visual field?
              </td>
              <td>
                <div
                  className="ye"
                  style={{
                    // paddingLeft: "10px",
                    // paddingRight: "13px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  <RadioGroup className="maritals" name="que17">
                    <Radio
                      id="yes"
                      value="yes"
                      checked={que17V === "yes"}
                      name={`page22[${index}].que17`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px", marginRight: "3px" }}>Yes /</span>

                    <Radio
                      id="no"
                      value="no"
                      checked={que17V === "no"}
                      name={`page22[${index}].que17`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "16px" }}>No</span>
                  </RadioGroup>
                </div>
              </td>
            </tr>
          </table>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12} lg={8} md={6}>
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Signature :</span>

            {/* <input
              type="text"
              className="sign"
              onChange={formik.handleChange}
              name="sign"
              value={signV}
            /> */}
            {signV ? (
              <Grid item xs={12} lg={6} sm={6} className="parentClass">
                <img src={signV} />
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
                        `page22[${index}].sign`,
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
          <Grid item xs={12} lg={4} md={6}>
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date :</span>

            <input
              max={date}
              type="date"
              className="signdate"
              onChange={formik.handleChange}
              name={`page22[${index}].date`}
              value={dateV}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}

instrctions.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default instrctions;
