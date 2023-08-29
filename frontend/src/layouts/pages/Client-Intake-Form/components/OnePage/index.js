import React, { useEffect } from "react";
import SoftBox from "components/SoftBox";
import initialValue from "./schema/initialValue";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button, Grid } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
import form from "./schema/form";
import "./style.css";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet, getDoctorShopFormDataAction } from "store/actions/actions";
import IntroPart from "./components/introPart";
import CurrentHelthstatus from "./components/Currenthealth/currentHelthstatus";
import { doctorShopFormDataAction } from "store/actions/actions";
import { getIntakeFormDetailsAction } from "store/actions/actions";
import SoftTypography from "components/SoftTypography";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page5);
  const Intro1Details = useSelector((state) => state.auth.clientIntakeForm?.intro1);
  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  console.log(loginUser, "lu");

  const personalInformation = {
    prefreedLanguage: loginUser?.language,
    name: loginUser?.name,
    address: loginUser?.address1,
    city: loginUser?.city,
    state: loginUser?.state,
    zip: loginUser?.zip,
    gender: loginUser?.gender,
    phonenumbrCell: loginUser?.Cellphonenumber,
    phonenumbrWork: loginUser?.Workphonenumber,
    dob: loginUser?.DOB,
    phonenumbrSocial: loginUser?.SocialSecurityNumber,
    maritialStatus: loginUser?.MaritalStatus,
    noofChildren: loginUser?.NumberofChildren,
    ocuupation: loginUser?.Occupation,
    hoursweek: loginUser?.UserWorkHours,
    econtactName: loginUser?.EmergencyName,
    econtactPhoneno: loginUser?.EmergencyPhoneNumber,
    econtactRelation: loginUser?.EmergencyRelation,
    email: loginUser?.email,
  };

  console.log(personalInformation, "qa");
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
      page5: values.page5,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
  };

  const form5Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValue.page5[0] }]
    : [{ ...initialValue.page5[0], ...personalInformation }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page5: [...form5Data],
          }}
          enableReinitialize
          onSubmit={(values) => {
            const data = {
              patientId: UserId,
              page5: values.page5,
            };
            console.log(data, "dddd");
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
                    name="page5"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page5.map((page, index) => (
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

                              <Grid>
                                <IntroPart
                                  formData={formData}
                                  formik={formik}
                                  form={form}
                                  index={index}
                                />
                              </Grid>

                              <Grid mb={3}>
                                <CurrentHelthstatus
                                  formData={formData}
                                  formik={formik}
                                  form={form}
                                  index={index}
                                />
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
                                  formik?.values?.page5?.length,
                                  formik.values.page5[formik.values.page5.length - 1]
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
