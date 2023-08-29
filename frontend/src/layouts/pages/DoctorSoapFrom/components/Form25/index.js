import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import { FieldArray, Formik } from "formik";
import React, { useEffect, useState } from "react";
import TableOne from "./Components/TableOne";
import TableTwo from "./Components/TableTwo";
import "./style.scss";
import PropTypes from "prop-types";
import initialValues from "./Schema/initialValues";
import { MinusCircleOutlined } from "@ant-design/icons";
import { doctorShopFormDataAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { useDispatch } from "react-redux";

const TwentyFive = ({ stepIndex, setActiveStep }) => {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  console.log("soappatientId..", soappatientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const [clientPrograms, setClientPrograms] = useState(initialValues);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page25);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  console.log("doctorShopFromDetails..", doctorShopFromDetails);

  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({
  //       patientId: soappatientId,
  //       /* practitionerId: UserId, */ token: token,
  //     })
  //   );
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
  return (
    <SoftBox>
      <Grid container>
        <Formik
          initialValues={{ ...clientPrograms, ...doctorShopFromDetails }}
          enableReinitialize
          onSubmit={(values) => {
            console.log("lllll", values?.clientProgramsList);

            const data = {
              patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
                ? patientSoapFormDetail.patientId
                : selectedPatientId
                ? selectedPatientId
                : soappatientId,
              // practitionerId: UserId,
              page25: values,
            };
            dispatch(
              doctorShopFormDataAction({
                data: data,
                token: token,
              })
            );
            setActiveStep(stepIndex + 1);
          }}
        >
          {(formik) => {
            return (
              <>
                <Grid item lg={12} style={{ overflowX: "scroll" }}>
                  {formik.values?.clientProgramsList &&
                    formik.values?.clientProgramsList.map((data, i) => {
                      return (
                        <>
                          {i > 0 && (
                            <div className="divNewPtProgram">
                              <button
                                type="button"
                                className="newPtProgram"
                                onClick={() => {
                                  let list = formik.values?.clientProgramsList.filter(
                                    (data, index) => index !== i
                                  );
                                  formik.setFieldValue("clientProgramsList", list);
                                }}
                                style={{ marginBottom: "5px" }}
                              >
                                Remove Pt Program Page
                              </button>
                            </div>
                          )}
                          <table>
                            <tr>
                              <th className="clientProgram">Client Program</th>
                            </tr>
                          </table>
                          <TableOne formik={formik} mainIndex={i} />
                          <br />
                          <TableTwo formik={formik} mainIndex={i} />
                        </>
                      );
                    })}
                  <div className="divNewPtProgram">
                    <button
                      type="button"
                      className="newPtProgram"
                      onClick={() => {
                        formik.setFieldValue("clientProgramsList", [
                          ...formik.values?.clientProgramsList,
                          ...initialValues?.clientProgramsList,
                        ]);
                      }}
                    >
                      New Pt Program Page
                    </button>
                  </div>
                </Grid>
                <Grid lg={12} xs={12} sm={12}>
                  <div style={{ float: "right", position: "relative" }}>
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
                      className="nextButttonclass25"
                    >
                      Next
                    </SoftButton>
                  </div>
                </Grid>
              </>
            );
          }}
        </Formik>
      </Grid>
    </SoftBox>
  );
};
TwentyFive.propTypes = {
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TwentyFive;
