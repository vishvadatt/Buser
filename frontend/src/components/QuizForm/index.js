import { Box, MenuItem, Typography } from "@mui/material";
import SoftInput from "components/SoftInput";
import SoftSelect from "components/SoftSelect";
import SoftTypography from "components/SoftTypography";
import { Formik, FieldArray, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import SoftButton from "components/SoftButton";
import "./index.scss";
import PropTypes from "prop-types";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const validationSchema = Yup.object().shape({
  formData: Yup.array().of(
    Yup.object().shape({
      quizTitle: Yup.string().required("Quiz title is required"),
      questions: Yup.array().of(
        Yup.object().shape({
          question: Yup.string().required("Question is required"),
          answers: Yup.array()
            .min(1, "At least one answer is required")
            .of(Yup.string().required("Answer is required")),
          correctAnswer: Yup.number().required("Correct answer is required"),
        })
      ),
    })
  ),
});

const QuizForm = ({ onSubmit, onClose }) => {
  const initialValues = [
    {
      quizTitle: "Quiz",
      questions: [
        {
          questionType: "text",
          question: "",
          answerSelectionType: "single",
          answers: [""],
          correctAnswer: "",
          point: "20",
        },
      ],
    },
  ];

  const handleSubmit = (values) => {
    // Handle form submission here
    // console.log(values);
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{ formData: initialValues }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, handleSubmit }) => (
        <Box className="quizWrapper">
          <FieldArray name="formData">
            {({ push, remove }) => (
              <div>
                {values.formData.map((item, quizIndex) => (
                  <Box key={quizIndex}>
                    <FieldArray name={`formData.${quizIndex}.questions`}>
                      {({ push: pushQuestion, remove: removeQuestion }) => (
                        <div>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            mt={2}
                          >
                            <Typography variant="body2">Add Session Quiz</Typography>
                            <SoftButton
                              style={{
                                padding: 1,
                                minWidth: "40px",
                              }}
                              color="dark"
                              background="gradient"
                              onClick={() =>
                                pushQuestion({
                                  questionType: "text",
                                  question: "",
                                  answerSelectionType: "single",
                                  answers: [""],
                                  correctAnswer: "",
                                  point: "20",
                                })
                              }
                            >
                              <IoMdAdd color="white" />
                            </SoftButton>
                          </Box>
                          {item.questions.map((question, questionIndex) => (
                            <>
                              {questionIndex !== 0 && (
                                <Box display={"flex"} justifyContent={"flex-end"}>
                                  <SoftButton
                                    style={{
                                      padding: 1,
                                      minWidth: "40px",
                                    }}
                                    color="dark"
                                    background="gradient"
                                    onClick={() => removeQuestion(questionIndex)}
                                  >
                                    <IoMdRemove color="white" />
                                  </SoftButton>
                                </Box>
                              )}
                              <Box
                                p={2}
                                my={2}
                                border={"1px solid lightgray"}
                                borderRadius={3}
                                key={questionIndex}
                              >
                                <Typography variant="caption">
                                  Question {questionIndex + 1}
                                </Typography>
                                <Field
                                  type="text"
                                  name={`formData.${quizIndex}.questions.${questionIndex}.question`}
                                  as={SoftInput}
                                  label="Question"
                                />
                                <ErrorMessage
                                  name={`formData.${quizIndex}.questions.${questionIndex}.question`}
                                  component="p"
                                  className="errorMessage"
                                />
                                <FieldArray
                                  name={`formData.${quizIndex}.questions.${questionIndex}.answers`}
                                >
                                  {({ push: pushAnswer, remove: removeAnswer }) => (
                                    <Box position={"relative"}>
                                      <Box
                                        position={"absolute"}
                                        right={0}
                                        mt={0.5}
                                        display={"flex"}
                                        justifyContent={"flex-end"}
                                      >
                                        <SoftButton
                                          color="dark"
                                          background="gradient"
                                          type="SoftButton"
                                          onClick={() => pushAnswer("")}
                                        >
                                          Add Answer
                                        </SoftButton>
                                      </Box>
                                      {question.answers.map((answer, answerIndex) => (
                                        <Box mb={0.5} key={answerIndex}>
                                          <Typography variant="caption">
                                            Answer {answerIndex + 1}
                                          </Typography>
                                          <Box display={"flex"} gap={1}>
                                            <Field
                                              style={{
                                                maxWidth: "250px",
                                              }}
                                              type="text"
                                              name={`formData.${quizIndex}.questions.${questionIndex}.answers.${answerIndex}`}
                                              as={SoftInput}
                                              label={`Answer ${answerIndex + 1}`}
                                            />
                                            {answerIndex !== 0 && (
                                              <SoftButton
                                                style={{
                                                  padding: 1,
                                                  minWidth: "40px",
                                                }}
                                                color="dark"
                                                background="gradient"
                                                onClick={() => removeAnswer(answerIndex)}
                                              >
                                                <IoMdRemove color="white" />
                                              </SoftButton>
                                            )}
                                          </Box>
                                          <ErrorMessage
                                            name={`formData.${quizIndex}.questions.${questionIndex}.answers.${answerIndex}`}
                                            component="p"
                                            className="errorMessage"
                                          />
                                        </Box>
                                      ))}
                                    </Box>
                                  )}
                                </FieldArray>
                                <Box display={"flex"} flexDirection={"column"} mt={1}>
                                  <Typography variant="body2">Correct Answer</Typography>
                                  <Field
                                    style={{
                                      minWidth: "200px",
                                    }}
                                    className="redesignSelectComponent"
                                    as="select"
                                    label="Correct Answer"
                                    name={`formData.${quizIndex}.questions.${questionIndex}.correctAnswer`}
                                  >
                                    <option value={""}>Please select correct answer</option>
                                    {question.answers.map((answer, answerIndex) => (
                                      <option key={answerIndex} value={answerIndex + 1}>
                                        {`Answer ${answerIndex + 1}`}
                                      </option>
                                    ))}
                                  </Field>
                                  <ErrorMessage
                                    name={`formData.${quizIndex}.questions.${questionIndex}.correctAnswer`}
                                    component="p"
                                    className="errorMessage"
                                  />
                                </Box>
                              </Box>
                            </>
                          ))}
                        </div>
                      )}
                    </FieldArray>
                  </Box>
                ))}
                <Box display={"flex"} justifyContent={"flex-end"} gap={2}>
                  {onClose && <SoftButton onClick={() => onClose()}>Close</SoftButton>}
                  <SoftButton color="dark" background="gradient" onClick={() => handleSubmit()}>
                    Submit
                  </SoftButton>
                </Box>
              </div>
            )}
          </FieldArray>
        </Box>
      )}
    </Formik>
  );
};

export default QuizForm;
QuizForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.any,
};
