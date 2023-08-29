import React, { useEffect, useState } from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import { axiosInstance } from "services/AxiosInstance";
import { useSelector } from "react-redux";

function firstPart({ formik, index }) {
  const { values } = formik;

  const {
    condition1,
    condition2,
    condition3,
    condition4,
    condition5,
    condition6,
    condition7,
    condition8,
    condition9,
    condition10,
    clientName,
  } = values.page14[index];

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

  return (
    <>
      <SoftBox container>
        <SoftBox mt={5}>
          <Grid className="conditions">
            <div className="condition ques-title">
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 1:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition`}
                label="condition1"
                value={condition1}
              />
            </div>
          </Grid>
        </SoftBox>

        <SoftBox ml={1} lg={12} mt={3} className="quesslist">
          {QuesList &&
            QuesList.map((data, i) => {
              const question = data.name.split("  ");
              return (
                <>
                  <Grid container>
                    <Grid item lg={12} xs={11}>
                      <div className="ques ques-title">
                        {question.map((que, i) => {
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
                          name={`page14[${index}].QuesList[${i}].QuesListInput`}
                          value={values?.page14[index]?.QuesList[i]?.QuesListInput}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </Grid>
                    <br />
                    <Grid item lg={1}></Grid>
                  </Grid>
                </>
              );
            })}
        </SoftBox>
        <SoftBox mb={3} mt={1}>
          <Grid className="conditions">
            <div className="condition ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 2:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition2`}
                label="condition2"
                value={condition2}
              />
            </div>
            <div className="condition ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 3:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition3`}
                label="condition3"
                value={condition3}
              />
            </div>
            <div className="condition ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 4:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition4`}
                label="condition4"
                value={condition4}
              />
            </div>
            <div className="condition ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 5:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition5`}
                label="condition5"
                value={condition5}
              />
            </div>
            <div className="condition ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 6:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition6`}
                label="condition6"
                value={condition6}
              />
            </div>
            <div className="condition ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 7:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition7`}
                label="condition7"
                value={condition7}
              />
            </div>
            <div className="condition ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 8:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition8`}
                label="condition8"
                value={condition8}
              />
            </div>
            <div className="condition ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 9:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition9`}
                label="condition9"
                value={condition9}
              />
            </div>
            <div className="conditionten ques-title" style={{ marginTop: "5px" }}>
              <span style={{ fontWeight: "bold", fontSize: "16px", marginRight: "0.5rem" }}>
                Condition 10:
              </span>
              <input
                type="text"
                onChange={formik.handleChange}
                name={`page14[${index}].condition10`}
                label="condition10"
                value={condition10}
              />
            </div>
          </Grid>
        </SoftBox>
        <SoftBox mt={3} mb={3} ml={3}>
          <Grid className="clientaction">
            <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
            <input
              type="text"
              name={`page14[${index}].clientName`}
              label="clientName"
              onChange={formik.handleChange}
              value={clientName}
            />
          </Grid>
        </SoftBox>
      </SoftBox>
    </>
  );
}
firstPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};

export default firstPart;
