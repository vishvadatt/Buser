// import React from 'react'
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { clientIntakeFormGet } from "store/actions/actions";
import { Checkbox, Grid } from "@mui/material";
import SoftTypography from "components/SoftTypography";
import moment from "moment";

function LMPQRSTU({ index, formik, answers, setAnswers }) {
  const { values } = formik;
  const orthopadic = values.page14[index]?.orthopadic;
  const neurological = values.page14[index]?.neurological;
  const injuries = values.page14[index]?.injuries;
  const brain = values.page14[index]?.brain;
  const clientIntakeformDetails = useSelector(
    (state) => state.auth.clientIntakeForm?.page12?.page12
  );

  //   console.log("neurological", neurological);
  //   const token = useSelector((state) => state.auth.auth.idToken);
  //   const dispatch = useDispatch();
  //   const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  //   const UserId = useSelector((state) => state.auth.auth._id);

  const pain = clientIntakeformDetails[clientIntakeformDetails.length - 1]?.orthopedic;
  const pain1 = clientIntakeformDetails[clientIntakeformDetails.length - 1]?.neurological;
  const pain2 = clientIntakeformDetails[clientIntakeformDetails.length - 1]?.injuries;
  const pain3 = clientIntakeformDetails[clientIntakeformDetails.length - 1]?.brain;

  console.log("pain1", pain1);

  const check1 = pain?.filter((item) => item.orthopediccheck === true);
  const check2 = pain1?.filter((item) => item.neurologicalcheck === true);
  const check3 = pain2?.filter((item) => item.injuriescheck === true);
  const check4 = pain3?.filter((item) => item.braincheck === true);

  //   useEffect(() => {
  //     dispatch(clientIntakeFormGet({ patientId: UserId, token: token }));
  //   }, [stepIndex]);
  const QuesList = [
    {
      name: "a. Location: Where do you feel the pain? ",
    },
    {
      name: "b. Mechanism: Was there an event or injury that you can recall that contributed to this condition? ",
    },
    {
      name: "c. Provocative/Palliative: Is there anything (that aggravates or alleviates the pain?",
    },
    {
      name: "d. Quality of the pain: Is it sharp or dull, constant, aching, throbbing, burning, stinging, stabbing, shooting, tingling, numb, stiff, cramping, other, etc?",
    },
    {
      name: "e. Radiation: Does the pain move around, radiate, “shoot” or travel anywhere in the body from that initial area?",
    },
    {
      name: "f. Restrictions and Limitations: What things does this condition limit you from doing in your life?",
    },
    {
      name: "g. Severity: On a scale of 0-10 (0 being no pain, 10 being the worst pain you have ever experienced), what level is it now?  What level is it at it’s worst?  What level is it at it’s least?",
    },
    {
      name: "h. Timing, Frequency, Duration: How long have you had this condition?  How often?  How long does it last?",
    },
    {
      name: "i. Treatment(s)/Diagnoses: Have you been diagnosed or treated for this condition?   Have you been treated for this condition (medication, surgery, therapy, self-care or anything else)? ",
    },
    {
      name: "j. Understanding: What do you think caused this condition and why isn't it getting better?",
    },
    {
      name: "k. Mind and Nutrition: Have you correlated any nutritional or psychological patterns that may be involved with your pain in a positive or negative way?",
    },
    {
      name: "l. Fitness: How often do you perform a physical activity for fitness purposes and what is it?",
    },
    {
      name: "m. Life Priorities: On a scale of 0-10, how important is your long-term physical health to you (10 being the highest priority in your life)?",
    },
    {
      name: "n. Functional Goals: What physical activities would you like to be able to do?",
    },
    {
      name: "o. Time management: How much time would you be willing to invest daily to accomplish these goals?",
    },
    {
      name: "p.Expectation management: Given the severity of and duration of your conditions, and given the amount of time you are willing to invest now in addressing them, how much time do you think it might take to accomplish these goals? ",
    },
    {
      name: "Please add below description of any changes to your condition(s), discomfort, pain and physical limitations:",
    },
    {
      name: "Let us know how you feel immediately after doing your previous exercise sequence:",
    },
    {
      name: "How long do these effects last:",
    },
    {
      name: "How many times have you completed your previous exercise sequense up until the day of taking the submitted photos:",
    },
  ];

  const handleChangeForProblemComponent = (name, questionIndex, answer, symptomName) => {
    // setAnswers((prevAnswers) => ({
    //   ...prevAnswers,
    //   [name]: {
    //     sysmtomName: symptomName,
    //     ...(prevAnswers[name] || {}),
    //     [questionIndex]: {
    //       question: QuesList[questionIndex].name,
    //       answer: answer,
    //     },
    //   },
    // }));
    formik.setFieldValue(`page14[${index}]`, {
      ...values.page14[index],
      [name]: {
        sysmtomName: symptomName,
        formCreatedDate: moment().format("DD-MM-YYYY"),
        ...(values.page14[index][name] || {}),
        [questionIndex]: {
          question: QuesList[questionIndex].name,
          answer: answer,
        },
      },
    });
  };

  return (
    <div>
      {!!check1 && check1.length > 0 ? (
        <>
          <div>
            <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
              <span style={{ borderBottom: "2px solid" }}>
                Orthopedic & Musculoskeletal Symptoms
              </span>
            </SoftTypography>
            {!!check1 &&
              check1.map((data, i) => {
                const value =
                  !!orthopadic &&
                  Object.keys(orthopadic).filter((keyName) => keyName === data.name);
                // formik.setFieldValue(`page14[${index}].problem`, {
                //   problem: data.name,
                //   questions: QuesList,
                // });
                return (
                  <>
                    <Grid className="P10conditions">
                      <Grid>
                        <div className="condition ques-title">
                          <span
                            style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}
                          >
                            Condition {i + 1}:
                          </span>
                          <input
                            disabled
                            type="text"
                            // onChange={formik.handleChange}
                            // name={`page14[${index}].condition`}
                            // label="condition1"
                            value={data.name}
                          />
                        </div>
                        {/* <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>{data.name}</span> */}
                      </Grid>
                      <Grid>
                        {/* <input
                          value={!!orthopadic ? orthopadic[value] : ""}
                          type="text"
                          name={`orthopadik.${data.name}`}
                          onChange={formik.handleChange}
                        /> */}
                        {QuesList &&
                          QuesList.map((questions, questionIndex) => {
                            const question = questions.name.split("  ");
                            return (
                              <>
                                <Grid container>
                                  <Grid item lg={12} xs={11}>
                                    <div className="ques ques-title">
                                      {question.map((que) => {
                                        return (
                                          <>
                                            <div style={{ fontSize: "15px" }}>{que}</div>
                                          </>
                                        );
                                      })}
                                    </div>
                                    <div className="ques ques-title">
                                      <input
                                        type="text"
                                        // name={`page14[${index}].QuesList[${i}].QuesListInput`}
                                        value={
                                          values.page14[index][data.name]?.[questionIndex]
                                            ?.answer || ""
                                        }
                                        onChange={(e) =>
                                          handleChangeForProblemComponent(
                                            data.name,
                                            questionIndex,
                                            e.target.value,
                                            "Orthopedic & Musculoskeletal Symptoms"
                                          )
                                        }
                                      />
                                    </div>
                                  </Grid>
                                  <br />
                                  <Grid item lg={1}></Grid>
                                </Grid>
                              </>
                            );
                          })}
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}

      {!!check2 && check2.length > 0 ? (
        <>
          <div>
            <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
              <span style={{ borderBottom: "2px solid" }}>Neurological Symptoms</span>
            </SoftTypography>
            {!!check2 &&
              check2.map((data, i) => {
                const value =
                  !!neurological &&
                  Object.keys(neurological).filter((keyName) => keyName === data.name);
                console.log("valueaaaa", value);
                return (
                  <>
                    <Grid className="P10conditions">
                      <Grid>
                        <div className="condition ques-title">
                          <span
                            style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}
                          >
                            Condition {i + 1}:
                          </span>
                          <input
                            disabled
                            type="text"
                            // onChange={formik.handleChange}
                            // name={`page14[${index}].condition`}
                            // label="condition1"
                            value={data.name}
                          />
                        </div>
                        {/* <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>{data.name}</span> */}
                      </Grid>
                      <Grid>
                        {/* <input
                          value={!!orthopadic ? orthopadic[value] : ""}
                          type="text"
                          name={`orthopadik.${data.name}`}
                          onChange={formik.handleChange}
                        /> */}
                        {QuesList &&
                          QuesList.map((questions, questionIndex) => {
                            const question = questions.name.split("  ");
                            return (
                              <>
                                <Grid container>
                                  <Grid item lg={12} xs={11}>
                                    <div className="ques ques-title">
                                      {question.map((que) => {
                                        return (
                                          <>
                                            <div style={{ fontSize: "15px" }}>{que}</div>
                                          </>
                                        );
                                      })}
                                    </div>
                                    <div className="ques ques-title">
                                      <input
                                        type="text"
                                        // name={`page14[${index}].QuesList[${i}].QuesListInput`}
                                        // value={answers[data.name]?.[questionIndex]?.answer || ""}
                                        value={
                                          values.page14[index][data.name]?.[questionIndex]
                                            ?.answer || ""
                                        }
                                        onChange={(e) =>
                                          handleChangeForProblemComponent(
                                            data.name,
                                            questionIndex,
                                            e.target.value,
                                            "Neurological Symptoms"
                                          )
                                        }
                                      />
                                    </div>
                                  </Grid>
                                  <br />
                                  <Grid item lg={1}></Grid>
                                </Grid>
                              </>
                            );
                          })}
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}

      {!!check3 && check3.length > 0 ? (
        <>
          <div>
            <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
              <span style={{ borderBottom: "2px solid" }}>Symptoms Associated with Injuries</span>
            </SoftTypography>
            {!!check3 &&
              check3.map((data, i) => {
                const value =
                  !!injuries && Object.keys(injuries).filter((keyName) => keyName === data.name);
                console.log("valueaaaa", value);
                return (
                  <>
                    <Grid className="P10conditions">
                      <Grid>
                        <div className="condition ques-title">
                          <span
                            style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}
                          >
                            Condition {i + 1}:
                          </span>
                          <input
                            disabled
                            type="text"
                            // onChange={formik.handleChange}
                            // name={`page14[${index}].condition`}
                            // label="condition1"
                            value={data.name}
                          />
                        </div>
                        {/* <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>{data.name}</span> */}
                      </Grid>
                      <Grid>
                        {/* <input
                          value={!!orthopadic ? orthopadic[value] : ""}
                          type="text"
                          name={`orthopadik.${data.name}`}
                          onChange={formik.handleChange}
                        /> */}
                        {QuesList &&
                          QuesList.map((questions, questionIndex) => {
                            const question = questions.name.split("  ");
                            return (
                              <>
                                <Grid container>
                                  <Grid item lg={12} xs={11}>
                                    <div className="ques ques-title">
                                      {question.map((que) => {
                                        return (
                                          <>
                                            <div style={{ fontSize: "15px" }}>{que}</div>
                                          </>
                                        );
                                      })}
                                    </div>
                                    <div className="ques ques-title">
                                      <input
                                        type="text"
                                        // name={`page14[${index}].QuesList[${i}].QuesListInput`}
                                        value={
                                          values.page14[index][data.name]?.[questionIndex]
                                            ?.answer || ""
                                        }
                                        onChange={(e) =>
                                          handleChangeForProblemComponent(
                                            data.name,
                                            questionIndex,
                                            e.target.value,
                                            "Symptoms Associated with Injuries"
                                          )
                                        }
                                      />
                                    </div>
                                  </Grid>
                                  <br />
                                  <Grid item lg={1}></Grid>
                                </Grid>
                              </>
                            );
                          })}
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}

      {!!check4 && check4.length > 0 ? (
        <>
          <div>
            <SoftTypography fontWeight="bold" fontSize="16px" marginBottom="8px" mt={2}>
              <span style={{ borderBottom: "2px solid" }}>Brain/Neuropsych/MTBI/PTSD Symptoms</span>
            </SoftTypography>
            {!!check4 &&
              check4.map((data, i) => {
                const value =
                  !!brain && Object.keys(brain).filter((keyName) => keyName === data.name);
                console.log("valueaaaa", value);
                return (
                  <>
                    <Grid className="P10conditions">
                      <Grid>
                        <div className="condition ques-title">
                          <span
                            style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}
                          >
                            Condition {i + 1}:
                          </span>
                          <input
                            disabled
                            type="text"
                            // onChange={formik.handleChange}
                            // name={`page14[${index}].condition`}
                            // label="condition1"
                            value={data.name}
                          />
                        </div>
                        {/* <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>{data.name}</span> */}
                      </Grid>
                      <Grid>
                        {/* <input
                          value={!!orthopadic ? orthopadic[value] : ""}
                          type="text"
                          name={`orthopadik.${data.name}`}
                          onChange={formik.handleChange}
                        /> */}
                        {QuesList &&
                          QuesList.map((questions, questionIndex) => {
                            const question = questions.name.split("  ");
                            return (
                              <>
                                <Grid container>
                                  <Grid item lg={12} xs={11}>
                                    <div className="ques ques-title">
                                      {question.map((que) => {
                                        return (
                                          <>
                                            <div style={{ fontSize: "15px" }}>{que}</div>
                                          </>
                                        );
                                      })}
                                    </div>
                                    <div className="ques ques-title">
                                      <input
                                        type="text"
                                        // name={`page14[${index}].QuesList[${i}].QuesListInput`}
                                        value={
                                          values.page14[index][data.name]?.[questionIndex]
                                            ?.answer || ""
                                        }
                                        onChange={(e) =>
                                          handleChangeForProblemComponent(
                                            data.name,
                                            questionIndex,
                                            e.target.value,
                                            "Brain/Neuropsych/MTBI/PTSD Symptoms"
                                          )
                                        }
                                      />
                                    </div>
                                  </Grid>
                                  <br />
                                  <Grid item lg={1}></Grid>
                                </Grid>
                              </>
                            );
                          })}
                      </Grid>
                    </Grid>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
LMPQRSTU.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
  answers: PropTypes.array,
  setAnswers: PropTypes.func,
};
export default LMPQRSTU;
