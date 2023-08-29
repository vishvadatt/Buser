import { Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import { FieldArray, Formik } from "formik";
import React, { useEffect, useState } from "react";
import "./style.scss";
import initialValues from "./Schema/initialValues";
import SoftButton from "components/SoftButton";
import { doctorShopFormDataAction } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import SoftSnackbar from "components/SoftSnackbar";
import { clearMessage } from "store/actions/actions";
import InfoCommon from "../InfoCommon/index";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import SoftTypography from "components/SoftTypography";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowUpLong, FaArrowDownLong, FaArrowsUpDown } from 'react-icons/fa6';

const FormTwentySix = ({ stepIndex, setActiveStep }) => {
  const navigate = useNavigate();

  console.log("stepIndex..", stepIndex);
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  console.log("soappatientId..", soappatientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);

  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);

  const [therapyVisits, setTherapyVisits] = useState(initialValues);
  console.log("therapyVisits...", therapyVisits);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page26);
  console.log("doctorShopFromDetails..", doctorShopFromDetails);

  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, /* practitionerId: UserId, */ token: token }));
  // }, []);

  useEffect(() => {
    console.log("running log 25.");
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId: UserId, */ token: token,
      })
    );
  }, [stepIndex]);

  let staticArray = [
    {
      color: "#676767",
      name: "Reduce the Strain",
    },
    // {
    //   color: "#32CD32",
    //   name: "Gut Autoimmunity",
    // },
    {
      color: "#00BFFF",
      name: "Neuroinflammation",
    },
    {
      color: "#32CD32",
      name: "Gut Inflammation",
    },
    {
      color: "#676767",
      name: "Connect KC (,+,!)",
    },
    {
      color: "#00BFFF",
      name: "Brain Fatigue (FoF)",
    },
    {
      color: "#32CD32",
      name: "Circulation",
    },
    {
      color: "#676767",
      name: "Activate the AGKC",
    },
    {
      color: "#00BFFF",
      name: "Mitochondria Biogen",
    },
    {
      color: "#32CD32",
      name: "Oxygen Delivery",
    },
    {
      color: "#676767",
      name: "Reduce Compensation",
    },
    {
      color: "#00BFFF",
      name: "Brain Dysglycemia",
    },
    {
      color: "#32CD32",
      name: "Glucose Handling",
    },
    {
      color: "#676767",
      name: "Recruit Chains",
    },
    {
      color: "#00BFFF",
      name: "Leaky Brain",
    },
    {
      color: "#32CD32",
      name: "Leaky Gut",
    },
    {
      color: "#676767",
      name: "Integrate ADLs",
    },
    {
      color: "#00BFFF",
      name: "Brain-Gut Axis",
    },
    {
      color: "#32CD32",
      name: "Plasticity & Myelination",
    },
    {
      color: "#676767",
      name: "Functional Fitness",
    },
    {
      color: "#00BFFF",
      name: "Brain Autoimmunity",
    },
  ];
  return (
    <SoftBox>
      <Grid container>
        <Formik
          initialValues={{ ...therapyVisits, ...doctorShopFromDetails }}
          enableReinitialize
          onSubmit={(values) => {
            console.log("lllll", values);
            const data = {
              patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
                ? patientSoapFormDetail.patientId
                : selectedPatientId
                  ? selectedPatientId
                  : soappatientId,
              // practitionerId: UserId,
              page26: values,
            };
            dispatch(
              doctorShopFormDataAction({
                data: data,
                token: token,
              })
            );
            // setActiveStep(stepIndex + 1);
            navigate("/welcome");
          }}
        >
          {(formik) => {
            console.log("AAAAAA...", formik);
            return (
              <>
                <Box>
                  <InfoCommon formik={formik} />
                </Box>
                <Grid item lg={12} sm={12} xs={12} mb={3} style={{ overflowX: "auto" }}>
                  {formik.values?.therapyVisits?.map((data, mainIndex) => {
                    return (
                      <>
                        {mainIndex > 0 && (
                          <div className="divNewPtProgram">
                            <button
                              className="newPtProgram"
                              onClick={() => {
                                let list = formik.values?.therapyVisits.filter(
                                  (data, index) => index !== mainIndex
                                );
                                formik.setFieldValue("therapyVisits", list);
                              }}
                              style={{ marginBottom: "5px" }}
                            >
                              Remove Seq FLOW Page
                            </button>
                          </div>
                        )}
                        <table border={1} className="tableContainer6">
                          <tr>
                            <th rowSpan={4} style={{ backgroundColor: "#c5bfbf", textAlign: "center" }}>
                              The Buser Institute Priorities of Therapy
                            </th>
                            <th colSpan={2}>
                              <Grid container sx={{ backgroundColor: "#c5bfbf" }}>
                                <Grid lg={3} sm={3} xs={12}>
                                  KC:
                                </Grid>
                                <Grid lg={3} sm={3} xs={3} className="kc-checkbox">

                                  <Box>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          name={`therapyVisits[${mainIndex}].kc1`}
                                          checked={formik.values?.therapyVisits[mainIndex]?.kc1}
                                          onChange={(e) => {
                                            formik.setFieldValue(
                                              `therapyVisits[${mainIndex}].kc1`,
                                              e.target.checked
                                            );
                                          }}
                                        />
                                      }
                                    />
                                    < FaArrowUpLong />
                                  </Box>
                                </Grid>


                                <Grid lg={3} sm={3} xs={3}>
                                  <Box>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          name={`therapyVisits[${mainIndex}].kc2`}
                                          checked={formik.values?.therapyVisits[mainIndex]?.kc2}
                                          onChange={(e) => {
                                            formik.setFieldValue(
                                              `therapyVisits[${mainIndex}].kc2`,
                                              e.target.checked
                                            );
                                          }}
                                        />
                                      }
                                    />
                                    < FaArrowDownLong />
                                  </Box>
                                </Grid>
                                <Grid lg={3} sm={3} xs={3}>
                                  <Box>
                                    <FormControlLabel
                                      control={
                                        <Checkbox
                                          name={`therapyVisits[${mainIndex}].kc3`}
                                          checked={formik.values?.therapyVisits[mainIndex]?.kc3}
                                          onChange={(e) => {
                                            formik.setFieldValue(
                                              `therapyVisits[${mainIndex}].kc3`,
                                              e.target.checked
                                            );
                                          }}
                                        />
                                      }
                                    />
                                    <FaArrowsUpDown />
                                  </Box>
                                </Grid>
                              </Grid>
                            </th>
                            <th colSpan={5} style={{ backgroundColor: "#c5bfbf", textAlign: "right" }}>
                              Postural Purpose:
                            </th>
                            <th>
                              <input
                                type="text"
                                value={formik.values?.therapyVisits[mainIndex]?.PosturalPurpose}
                                name={`therapyVisits[${mainIndex}].PosturalPurpose`}
                                onChange={formik.handleChange}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th style={{ backgroundColor: "#c5bfbf", textAlign: "center" }}>Ld Joint</th>
                            <th style={{ backgroundColor: "#c5bfbf", textAlign: "center" }}>Joint Mx</th>
                            <th style={{ backgroundColor: "#c5bfbf", textAlign: "center" }}>Mm</th>
                            <th colSpan={4} style={{ backgroundColor: "#c5bfbf", textAlign: "right" }}>
                              Date:
                            </th>
                            <th>
                              <input
                                type="date"
                                value={formik.values?.therapyVisits[mainIndex]?.date}
                                name={`therapyVisits[${mainIndex}].date`}
                                onChange={formik.handleChange}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th rowSpan={2} style={{ backgroundColor: "#c5bfbf", paddingTop: "25px", textAlign: "center" }}>
                              Position
                            </th>
                            <th rowSpan={2} style={{ backgroundColor: "#c5bfbf", paddingTop: "25px", textAlign: "center" }}>
                              Jt ld
                            </th>
                            <th rowSpan={2} style={{ backgroundColor: "#c5bfbf", paddingTop: "25px", textAlign: "center" }}>
                              Work
                            </th>
                            <th colSpan={4} style={{ backgroundColor: "#c5bfbf" }}>Sequence:</th>
                            <th>
                              <input
                                type="text"
                                value={formik.values?.therapyVisits[mainIndex]?.Sequence}
                                name={`therapyVisits[${mainIndex}].Sequence`}
                                onChange={formik.handleChange}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th style={{ backgroundColor: "#c5bfbf", textAlign: "center" }}>P</th>
                            <th style={{ backgroundColor: "#c5bfbf", textAlign: "center" }}>S</th>
                            <th style={{ backgroundColor: "#c5bfbf", textAlign: "center" }}>M</th>
                            <th style={{ backgroundColor: "#c5bfbf", textAlign: "center" }}>No</th>
                            <th>
                              <input type="text" />
                            </th>
                          </tr>

                          <tbody>
                            {staticArray &&
                              staticArray.map((data, i) => {
                                return (
                                  <tr key={i}>
                                    <td
                                      style={{
                                        color: data.color,
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        backgroundColor: "#e3dddd"
                                      }}
                                    >
                                      {data.name}
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name={`therapyVisits[${mainIndex}].therapys[${i}].position`}
                                        value={
                                          formik.values?.therapyVisits[mainIndex]?.therapys[i]
                                            ?.position ?? ""
                                        }
                                        onChange={formik.handleChange}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name={`therapyVisits[${mainIndex}].therapys[${i}].Jtld`}
                                        value={
                                          formik.values?.therapyVisits[mainIndex]?.therapys[i]?.Jtld
                                        }
                                        onChange={formik.handleChange}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        type="text"
                                        name={`therapyVisits[${mainIndex}].therapys[${i}].work`}
                                        value={
                                          formik.values?.therapyVisits[mainIndex]?.therapys[i]?.work
                                        }
                                        onChange={formik.handleChange}
                                      />
                                    </td>

                                    <td className="widthOfPsmo">
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            name={`therapyVisits[${mainIndex}].therapys[${i}].P`}
                                            checked={
                                              formik.values?.therapyVisits[mainIndex]?.therapys[i]
                                                ?.P
                                            }
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `therapyVisits[${mainIndex}].therapys[${i}].P`,
                                                e.target.checked
                                              );
                                            }}
                                          />
                                        }
                                      />
                                    </td>
                                    <td className="widthOfPsmo">
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            name={`therapyVisits[${mainIndex}].therapys[${i}].S`}
                                            checked={
                                              formik.values?.therapyVisits[mainIndex]?.therapys[i]
                                                ?.S
                                            }
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `therapyVisits[${mainIndex}].therapys[${i}].S`,
                                                e.target.checked
                                              );
                                            }}
                                          />
                                        }
                                      />
                                    </td>
                                    <td className="widthOfPsmo">
                                      <FormControlLabel
                                        control={
                                          <Checkbox
                                            name={`therapyVisits[${mainIndex}].therapys[${i}].M`}
                                            checked={
                                              formik.values?.therapyVisits[mainIndex]?.therapys[i]
                                                ?.M
                                            }
                                            onChange={(e) => {
                                              formik.setFieldValue(
                                                `therapyVisits[${mainIndex}].therapys[${i}].M`,
                                                e.target.checked
                                              );
                                            }}
                                          />
                                        }
                                      />
                                    </td>
                                    <td className="widthOfPsmo1" style={{ textAlign: "center" }}>
                                      {i + 1}
                                    </td>

                                    <td colSpan={3}>
                                      <input
                                        type="text"
                                        name={`therapyVisits[${mainIndex}].therapys[${i}].discription`}
                                        value={
                                          formik.values?.therapyVisits[mainIndex]?.therapys[i]
                                            ?.discription
                                        }
                                        onChange={formik.handleChange}
                                      />
                                    </td>
                                  </tr>
                                );
                              })}
                            <tr>
                              <td style={{ color: "#32CD32", textAlign: "center", backgroundColor: "#e3dddd" }}>
                                Gut Autoimmunity
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td colSpan={4} style={{ backgroundColor: "#c5bfbf", color: "#0000FF", fontWeight: 600 }}>
                                POST Notes:
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={formik.values?.therapyVisits[mainIndex]?.postNotes}
                                  name={`therapyVisits[${mainIndex}].postNotes`}
                                  onChange={formik.handleChange}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ color: "#32CD32", fontWeight: 600 }}>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td colSpan={4} style={{ backgroundColor: "#c5bfbf", fontWeight: 600 }}>
                                Pain:
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={formik.values?.therapyVisits[mainIndex]?.painNotes}
                                  name={`therapyVisits[${mainIndex}].painNotes`}
                                  onChange={formik.handleChange}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ color: "#32CD32" }}>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td colSpan={4} style={{ backgroundColor: "#c5bfbf", fontWeight: 600 }}>
                                Perfomance:
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={formik.values?.therapyVisits[mainIndex]?.perfomaceNotes}
                                  name={`therapyVisits[${mainIndex}].perfomaceNotes`}
                                  onChange={formik.handleChange}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td style={{ color: "#32CD32" }}>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td colSpan={4} style={{ backgroundColor: "#c5bfbf", fontWeight: 600 }}>
                                Alt With:
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={formik.values?.therapyVisits[mainIndex]?.AltWithNotes}
                                  name={`therapyVisits[${mainIndex}].AltWithNotes`}
                                  onChange={formik.handleChange}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <Grid
                          item
                          lg={12}
                          sm={12}
                          xs={12}
                          style={{ border: "1px solid black" }}
                          mt={3}
                        >
                          <span style={{ fontSize: "15px" }}>Sequence Notes:</span>
                          <textarea
                            className="inputTextAera"
                            value={formik.values.SequenceNotes}
                            name="SequenceNotes"
                            onChange={formik.handleChange}
                          ></textarea>
                        </Grid>
                      </>
                    );
                  })}

                  <div className="divNewPtProgram">
                    <button
                      className="newPtProgram"
                      onClick={() => {
                        formik.setFieldValue("therapyVisits", [
                          ...formik.values?.therapyVisits,
                          ...initialValues?.therapyVisits,
                        ]);
                      }}
                    >
                      New Seq FLOW Page
                    </button>
                  </div>
                </Grid>
                <br />
                <div style={{ float: "right" }}>
                  <SoftButton
                    variant="gradient"
                    color="dark"
                    onClick={() => {
                      if (formik.dirty) {
                        formik.handleSubmit();
                      } else {
                        setActiveStep(stepIndex + 1);
                      }
                    }}
                    className="nextButttonclass1"
                  >
                    Submit
                  </SoftButton>
                </div>
                {/* <div className="divNewPtProgram">
                  <button className="newPtProgram">New Seq FLOW Page</button>
                </div> */}
              </>
            );
          }}
        </Formik>
        <SoftSnackbar
          color={successMessage !== "" ? "success" : "error"}
          icon="star"
          title="Buser Institute"
          content={errorMessage || successMessage}
          open={errorMessage !== "" || successMessage !== "" ? true : false}
          onClose={closeErrorSB}
          close={closeErrorSB}
        // bgWhite
        />
      </Grid>
    </SoftBox>
  );
};
FormTwentySix.propTypes = {
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default FormTwentySix;
