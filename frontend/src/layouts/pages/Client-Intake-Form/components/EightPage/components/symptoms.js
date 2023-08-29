import React, { useEffect } from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { painListAction } from "store/actions/actions";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function symptoms({ formik, form, index }) {
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

  const { values } = formik;
  console.log("valuesvvvv", values);
  const {
    dateofinjuries: dateofinjuriesV,
    patientsign: patientsignV,
    doctorsign: doctorsignV,
  } = values.page12[index];

  // console.log("patientV..", patientsignV);
  // console.log("doctor", doctorsignV);
  let date = new Date().toLocaleDateString("en-CA");
  let currentDate = new Date().toJSON().slice(0, 10);
  // const Orthopedic = [
  //   {
  //     name: `"Clunk" ${"sound with neck movements"}`,
  //   },
  //   {
  //     name: "Neck pain",
  //   },
  //   {
  //     name: "Upper back pain",
  //   },
  //   {
  //     name: "Low back pain",
  //   },
  //   {
  //     name: "Shoulder pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Upper arm pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Elbow pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Forearm pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Wrist pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Hand pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Hip pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: " Upper leg pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Knee pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Lower leg pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Ankle pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Foot pain",
  //     left: "Left",
  //     right: "Right",
  //   },
  //   {
  //     name: "Jaw pain",
  //   },
  //   {
  //     name: "Clicking in Jaw",
  //   },
  //   {
  //     name: "Pain when chewing",
  //   },
  //   {
  //     name: "Face pain",
  //   },
  //   {
  //     name: "Chest pain",
  //   },
  //   {
  //     name: "Stomach pain",
  //   },
  //   {
  //     name: "Bruise to",
  //     input: "Bruiseto",
  //   },
  //   {
  //     name: "Scrape/Cut to ",
  //     input: "Scrape/Cut",
  //   },
  //   {
  //     name: "Other Symptom1",
  //     input: "Symptom",
  //   },
  //   {
  //     name: "Other Symptom2",
  //     input: "Other",
  //   },
  // ];
  const Neurological = [
    {
      name: "Numb/Tingling Arm / Hand",
      left: "L",
      right: "R",
    },
    {
      name: "Numb/Tingling Leg / Foot",
      left: "L",
      right: "R",
    },
    {
      name: "Weakness Arm / Hand",
      left: "L",
      right: "R",
    },
    {
      name: "Weakness Leg / Foot",
      left: "L",
      right: "R",
    },
  ];
  const Injuries = [
    {
      name: "Stiffness or limited movement in joint(s)",
    },
    {
      name: "Headaches",
    },
    {
      name: "Muscle spasms/sore muscles",
    },
    {
      name: "Dizziness, lightheaded, woozy feeling",
    },
    {
      name: "Visual disturbances or vision change",
    },
    {
      name: "Sleep changes/disruption of patterns",
    },
    {
      name: "Pain radiates from one place to another",
    },
    {
      name: "Anxiety or nervous when driving",
    },
    {
      name: "Irregular Heartbeat or uneven pulse",
    },
    {
      name: "Feeling depressed about things",
    },
    {
      name: "I am taking the following medications",
      input: "medication",
    },
  ];
  const Brain = [
    {
      name: "I prefer being alone now (not socializing)",
    },
    {
      name: "I am sleepy, tired during day or doze off easily",
    },
    {
      name: "Upset stomach, nausea, heartburn or vomiting",
    },
    {
      name: "Difficulty concentrating, mind wanders easily",
    },
    {
      name: "I get overwhelmed easily",
    },
    {
      name: "Mood swings, happy one moment then sad",
    },
    {
      name: "Agitation (can't sit still, need to move around)",
    },
    {
      name: "Sadness, tearful episodes, crying easily",
    },
    {
      name: "Blurry vision, had to get or change glasses",
    },
    {
      name: "Asking people to repeat things or hearing problem",
    },
    {
      name: "I make wrong turns driving or can't remember time",
    },
    {
      name: "I get confused easily or cannot multi-task anymore",
    },
    {
      name: "I have difficulty finding some words when talking",
    },
    {
      name: "Bright lights bother me",
    },
    {
      name: "I cannot pay attention as long as before",
    },
    {
      name: "I am eating more or less than normal",
    },
    {
      name: "Room spins, lightheaded or woozy feeling",
    },
    {
      name: "Balance problems",
    },
    {
      name: `${"I feel like my head is "} "Foggy"`,
    },
    {
      name: "I have forgotten computer passwords or ATM PIN",
    },
    {
      name: "I have to re-read things to understand what I read",
    },
    {
      name: "My thinking is slowed down",
    },
    {
      name: "Difficulty with adding/subtracting numbers",
    },
    {
      name: "Fear I will never be the same again",
    },
    {
      name: "Difficulty learning new things",
    },
    {
      name: "Difficulty understanding what people say to me",
    },
    {
      name: "Difficulty remembering or memory problems",
    },
    {
      name: "Cannot take on any more responsibility",
    },
    {
      name: "I can't make decisions as quickly as before",
    },
    {
      name: "Loss of libido or lack of sexual desire",
    },
    {
      name: "I do not feel as confident of my abilities",
    },
    {
      name: "I get panic attacks, fast heartbeat, nervous",
    },
    {
      name: "I am more irritable than usual",
    },
    {
      name: `${"Some food or drink tastes"} "Funny" ${"to me now"}`,
    },
    {
      name: "I get frustrated very easily",
    },
    {
      name: "Difficulty planning my life or organizing my work",
    },
    {
      name: "Flashbacks or frightening thoughts about accident",
    },
    {
      name: "I have had bad dreams about the accident",
    },
    {
      name: "I avoid places & objects that remind me about it",
    },
    {
      name: "I feel emotionally numb-no interest in my hobbies",
    },
    {
      name: "I'm feeling strong guilt, worry or depression ",
    },
    {
      name: "I am having trouble remembering the accident ",
    },
    {
      name: `"Clunk" ${"sound with neck movements"}`,

      name: `${"I am easily startled since the accident"} - "jumpy"`,
    },
    {
      name: `${"I feel tense or"} "on edge" ${"most of the time"}`,
    },
    {
      name: "I am having difficulty sleeping",
    },
    {
      name: "I get angry easily or even yell at people now",
    },
  ];
  console.log(values?.page12[index]?.orthopedic, "annn");
  return (
    <>
      <SoftBox mt={2.5}>
        <h2 style={{ textAlign: "center", fontWeight: "700", fontSize: "33px" }}>
          General Symptoms:
        </h2>
        <Grid container>
          <Grid item lg={5} xs={12} md={6} className="sysmptonspatient">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client</span>
            <input
              type="text"
              className="otherlang"
              onChange={formik.handleChange}
              name={`page12[${index}].name`}
              value={values.name}
            />
          </Grid>
          <Grid item lg={3.5} xs={12} md={6} className="sysmptonsdate">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date</span>

            <input
              max={date}
              type="date"
              className="otherlang"
              onChange={formik.handleChange}
              name={`page12[${index}].date`}
              value={currentDate}
            />
          </Grid>
          <Grid item lg={3.5} xs={12} md={6} className="sysmptonsdate">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Date of Injuries</span>

            <input
              type="date"
              max={date}
              className="otherlang"
              onChange={formik.handleChange}
              name={`page12[${index}].dateofinjuries`}
              value={dateofinjuriesV}
            />
          </Grid>
        </Grid>

        <SoftTypography fontSize="16px" mt={2.5} style={{ fontStyle: "italic" }}>
          Please fill in all symptoms you currently have:
        </SoftTypography>

        <Grid container>
          <Grid lg={5.6} ml={2} className="symptomsleft">
            <SoftBox>
              <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
                <span style={{ borderBottom: "2px solid" }}>
                  Orthopedic & Musculoskeletal Symptoms
                </span>
              </SoftTypography>
              {/* {Orthopedic &&
                Orthopedic.map((data, i) => {
                  return (
                    <>
                      <Grid container>
                        <Grid item lg={6} xs={6} md={6}>
                          <Checkbox
                            name={`orthopedic[${i}].orthopediccheck`}
                            checked={values.orthopedic[i]?.orthopediccheck}
                            onChange={formik.handleChange}
                          />

                          <span style={{ fontSize: "15px" }}>{data.name}</span>
                        </Grid>
                        <Grid item lg={6} xs={6} md={6}>
                          {data.left ? (
                            <>
                              <Checkbox
                                name={`orthopedic[${i}].orthopedileft`}
                                checked={values.orthopedic[i]?.orthopedileft}
                                onChange={formik.handleChange}
                              />
                              <span style={{ fontSize: "15px" }}>{data.left}</span>
                            </>
                          ) : (
                            ""
                          )}
                          {data.right ? (
                            <>
                              <Checkbox
                                name={`orthopedic[${i}].orthopediright`}
                                checked={values.orthopedic[i]?.orthopediright}
                                onChange={formik.handleChange}
                              />
                              <span style={{ fontSize: "15px" }}>{data.right}</span>
                            </>
                          ) : (
                            ""
                          )}
                          {data.input ? (
                            <>
                              <input
                                className="sysptos-input"
                                name={`orthopedic[${i}].orthopedicinput`}
                                value={values.orthopedic[i]?.orthopedicinput}
                                onChange={formik.handleChange}
                              />
                            </>
                          ) : (
                            ""
                          )}
                        </Grid>

                        
                      </Grid>
                    </>
                  );
                })} */}

              {values?.page12[index]?.orthopedic ? (
                values?.page12[index]?.orthopedic?.map((data, i) => {
                  {
                    console.log("data...", data);
                  }
                  return (
                    <>
                      {data?.isClientIntake !== undefined && data?.isClientIntake === true && (
                        <Grid container>
                          <Grid item lg={6} xs={6} md={6}>
                            <Checkbox
                              name={`page12[${index}].orthopedic[${i}].orthopediccheck`}
                              checked={values?.page12[index]?.orthopedic[i]?.orthopediccheck}
                              onChange={formik.handleChange}
                            />

                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                          <Grid item lg={6} xs={6} md={6}>
                            {data.left ? (
                              <>
                                <Checkbox
                                  name={`page12[${index}].orthopedic[${i}].orthopedileft`}
                                  checked={values?.page12[index]?.orthopedic[i]?.orthopedileft}
                                  onChange={formik.handleChange}
                                />
                                <span style={{ fontSize: "15px" }}>{data.left}</span>
                              </>
                            ) : (
                              ""
                            )}
                            {data.right ? (
                              <>
                                <Checkbox
                                  name={`page12[${index}].orthopedic[${i}].orthopediright`}
                                  checked={values?.page12[index]?.orthopedic[i]?.orthopediright}
                                  onChange={formik.handleChange}
                                />
                                <span style={{ fontSize: "15px" }}>{data.right}</span>
                              </>
                            ) : (
                              ""
                            )}
                            {data.input ? (
                              <>
                                <input
                                  className="sysptos-input"
                                  name={`page12[${index}].orthopedic[${i}].orthopedicinput`}
                                  value={values?.page12[index].orthopedic[i]?.orthopedicinput}
                                  onChange={formik.handleChange}
                                />
                              </>
                            ) : (
                              ""
                            )}
                          </Grid>
                        </Grid>
                      )}
                    </>
                  );
                })
              ) : (
                <h4>No Pain Found</h4>
              )}
            </SoftBox>
            <SoftBox>
              <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
                <span style={{ borderBottom: "2px solid" }}>Neurological Symptoms</span>
              </SoftTypography>
              {Neurological &&
                Neurological.map((data, i) => {
                  return (
                    <>
                      <Grid container>
                        <Grid item lg={6} xs={6} md={8} sm={6}>
                          <Checkbox
                            name={`page12[${index}].neurological[${i}].neurologicalcheck`}
                            checked={values?.page12[index].neurological[i]?.neurologicalcheck}
                            onChange={formik.handleChange}
                          />
                          <span style={{ fontSize: "15px" }}>{data.name}</span>
                        </Grid>
                        <Grid item lg={6} md={4} xs={6} sm={6}>
                          {data.left ? (
                            <>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page12[${index}].neurological[${i}].neurologicalleft`}
                                checked={values?.page12[index].neurological[i]?.neurologicalleft}
                                onChange={formik.handleChange}
                              />
                              <span style={{ fontSize: "15px" }}>{data.left}</span>
                            </>
                          ) : (
                            ""
                          )}
                          {data.right ? (
                            <>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                name={`page12[${index}].neurological[${i}].neurologicalright`}
                                checked={values?.page12[index].neurological[i]?.neurologicalright}
                                onChange={formik.handleChange}
                              />
                              <span style={{ fontSize: "15px" }}>{data.right}</span>
                            </>
                          ) : (
                            ""
                          )}
                        </Grid>
                      </Grid>
                    </>
                  );
                })}
            </SoftBox>
            <SoftBox>
              <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
                <span style={{ borderBottom: "2px solid" }}>
                  Symptoms Associated with Injuries{" "}
                </span>
              </SoftTypography>
              {Injuries &&
                Injuries.map((data, i) => {
                  return (
                    <>
                      <Grid>
                        <Checkbox
                          name={`page12[${index}].injuries[${i}].injuriescheck`}
                          checked={values?.page12[index].injuries[i]?.injuriescheck}
                          onChange={formik.handleChange}
                        />
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </Grid>
                      {data.input ? (
                        <>
                          <div style={{ marginLeft: "15px" }} className="medications-input">
                            <input
                              name={`page12[${index}].injuries[${i}].injuriesInput`}
                              value={values?.page12[index]?.injuries[i]?.injuriesInput}
                              onChange={formik.handleChange}
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
            </SoftBox>
          </Grid>
          <Grid lg={0.2}></Grid>
          <Grid lg={5.9}>
            <SoftBox>
              <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
                <span style={{ borderBottom: "2px solid" }}>
                  Brain/Neuropsych/MTBI/PTSD Symptoms
                </span>
              </SoftTypography>
              {Brain &&
                Brain.map((data, i) => {
                  return (
                    <>
                      <div>
                        <Grid>
                          <Checkbox
                            name={`page12[${index}].brain[${i}].braincheck`}
                            checked={values?.page12[index]?.brain[i]?.braincheck}
                            onChange={formik.handleChange}
                          />
                          <span style={{ fontSize: "15px" }}>{data.name}</span>
                        </Grid>
                      </div>
                    </>
                  );
                })}
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container mt={2} ml={1} mb={2}>
          {/* <Grid item lg={6} xs={12} md={6} className="signature">
            <span style={{ fontSize: "15px" }}>Patient Signature</span>
            <input value={values.patientsign} name="patientsign" onChange={formik.handleChange} />
          </Grid>
          <Grid item lg={6} xs={12} md={6} className="signature">
            <span style={{ fontSize: "15px" }}> Dr. Signature</span>
            <input value={values.doctorsign} name="doctorsign" onChange={formik.handleChange} />
          </Grid> */}
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <span>
                <b>Client Signature</b>{" "}
              </span>
              <br />
              <br />
              {patientsignV ? (
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
                        formik.setFieldValue(
                          `page12[${index}].patientsign`,
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
            <Grid item xs={12} lg={6}>
              <span>
                <b>Practitioner Signature</b>
              </span>
              <br />
              <br />
              {doctorsignV ? (
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
                        formik.setFieldValue(
                          `page12[${index}].doctorsign`,
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
        </Grid>
      </SoftBox>
    </>
  );
}
symptoms.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default symptoms;
