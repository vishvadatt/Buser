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
import FirstPart from "./components/firstform";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page15);
  const Intro1Details = useSelector((state) => state.auth.clientIntakeForm?.intro1);
  // console.log("clientIntakeformDetails2", soappatientId, UserId);
  const newClientName = { clientName: Intro1Details?.ClientName };

  const patientIntakeFormDetail = useSelector((state) => state?.auth?.patientIntakeFormDetail);

  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  const personalInformation = {
    clientName: loginUser?.name,
  };
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
      page15: values.page15,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
  };

  const form15Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValue.page15[0] }]
    : [{ ...initialValue.page15[0], ...personalInformation }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page15: [...form15Data],
          }}
          enableReinitialize
          onSubmit={(values) => {
            const data = {
              patientId: UserId,
              page15: values.page15,
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
                    name="page15"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page15.map((page, index) => (
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
                                <SoftTypography
                                  fontWeight="bold"
                                  fontSize="20px"
                                  marginTop="10px"
                                  marginBottom="10px"
                                >
                                  <span style={{ fontSize: "33px" }}>NECK PAIN INDEX</span>
                                </SoftTypography>
                              </SoftBox>
                              <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                                Please Read: This questionnaire is designed to enable us to
                                understand how much your neck pain has affected your ability to
                                manage everyday activities. Please answer each Section by circling
                                the
                                <b style={{ fontSize: "15px", fontWeight: "bold" }}>
                                  {" "}
                                  ONE CHOICE
                                </b>{" "}
                                that most applies to you. We realize that you may feel that more
                                than one statement may relate to you, but Please{" "}
                                <b style={{ fontWeight: "bold", fontSize: "15px" }}>
                                  just circle the one choice which closely describes your problem
                                  right now.
                                </b>
                              </p>

                              <Grid>
                                <FirstPart formik={formik} index={index} />
                              </Grid>
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
                                  formik?.values?.page15?.length,
                                  formik.values.page15[formik.values.page15.length - 1]
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
