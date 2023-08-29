import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValue from "./schema/initialValue.js";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
import form from "./schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import FirstPart from "./components/index";
import Endpage from "./components/endpage.js";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm.page8);
  // const clientIntakeformDetails3 = useSelector((state) => state.auth.clientIntakeForm?.page3);

  const patientIntakeFormDetail = useSelector((state) => state?.auth?.patientIntakeFormDetail);

  useEffect(() => {
    if (patientIntakeFormDetail.shouldShowPatientIntakeFormDetail) {
      dispatch(
        getIntakeFormDetailsAction({
          patientId: patientIntakeFormDetail.patientId,
          token: token,
        })
      );
    } else {
      dispatch(
        clientIntakeFormGet({
          patientId: UserId,
          token: token,
        })
      );
    }
  }, [stepIndex]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const handleSave = async (values) => {
    const data = {
      patientId: patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
        ? patientIntakeFormDetail.patientId
        : UserId,
      page8: values.page8,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
  };

  const form8Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : [{ ...initialValue.page8[0] }];
  console.log(form8Data, "azz");
  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page8: [...form8Data],
          }}
          enableReinitialize
          onSubmit={(values) => {
            const data = {
              patientId: UserId,
              page8: values.page8,
            };
            dispatch(
              clientIntakeFormCreate({
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
                <Grid>
                  <FieldArray
                    name="page8"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page8.map((page, index) => (
                            <Grid key={index}>
                              {index > 0 && (
                                <Grid item xs={12} sm={12} lg={12} mb={1}>
                                  <SoftBox
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="center"
                                  >
                                    <SoftTypography mt={3}>
                                      <p style={{ fontWeight: "bold", textAlign: "center" }}>
                                        Click the Minus-Sign to remove Form
                                      </p>
                                    </SoftTypography>
                                  </SoftBox>
                                  <SoftBox
                                    display="flex"
                                    flexDirection="row"
                                    justifyContent="center"
                                    height="100%"
                                  >
                                    <MinusCircleOutlined
                                      style={{
                                        cursor: "pointer",
                                        fontSize: "25px",
                                        color: "#344767",
                                      }}
                                      onClick={() => arrayhelpers.remove(index)}
                                    />
                                  </SoftBox>
                                </Grid>
                              )}
                              <SoftBox style={{ textAlign: "center", marginTop: "10px" }}>
                                <SoftTypography fontWeight="bold" fontSize="25px" marginTop="10px">
                                  <span style={{ borderBottom: "2.5px solid", fontSize: "33px" }}>
                                    MEDICATION HISTORY*
                                  </span>
                                </SoftTypography>
                                <SoftTypography
                                  fontWeight="bold"
                                  fontSize="15px"
                                  marginBottom="8px"
                                >
                                  Please check any of the following medications you have taken in
                                  the past or are currently taking.
                                </SoftTypography>
                              </SoftBox>

                              <Grid>
                                <FirstPart index={index} formik={formik} form={form} />
                              </Grid>

                              <Grid>
                                <Endpage index={index} formik={formik} form={form} />
                              </Grid>

                              <div className="SMGENTAF">
                                <p style={{ fontSize: "12px" }}>
                                  © 2016 Datis Kharrazian. All Rights Reserved.
                                </p>
                                <p style={{ fontSize: "12px" }}>SMGENTAF(032116)</p>
                              </div>
                              <div className="mainfooter">
                                <p
                                  style={{
                                    fontSize: "12px",
                                    fontStyle: "italic",
                                    marginBottom: "3px",
                                    justifyContent: "center ",
                                  }}
                                >
                                  *Please refer to prescribing physician for nutritional
                                  interactions with any medications you are taking.
                                </p>
                              </div>
                            </Grid>
                          ))}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              margin: "1.5rem 0",
                            }}
                          >
                            <SoftButton
                              variant="gradient"
                              color="dark"
                              onClick={() =>
                                arrayhelpers.insert(
                                  formik?.values?.page8?.length,
                                  formik.values.page8[formik.values.page8.length - 1]
                                )
                              }
                            >
                              Add new Page
                            </SoftButton>
                          </div>
                        </>
                      );
                    }}
                  />
                </Grid>
                <div style={{ float: "right", marginTop: "20px" }}>
                  <SoftButton
                    sx={{ marginRight: "20px" }}
                    variant="gradient"
                    color="dark"
                    onClick={() => {
                      if (formik.dirty) {
                        handleSave(formik.values);
                      }
                    }}
                  >
                    Save
                  </SoftButton>
                  <SoftButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    onClick={() => {
                      if (formik.dirty) {
                        formik.handleSubmit();
                      } else {
                        setActiveStep(stepIndex + 1);
                      }
                    }}
                  >
                    Next
                  </SoftButton>
                </div>
              </>
            );
          }}
        </Formik>
      </SoftBox>
    </>
  );
}
index.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default index;
