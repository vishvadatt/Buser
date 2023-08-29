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
import { clientIntakeFormGet, getDoctorShopFormDataAction } from "store/actions/actions";
import FirstPart from "./components/firstPart";
import SecondPart from "./components/secondPart";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const token = useSelector((state) => state.auth.auth.idToken);
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page9);
  const Doctotsoapform = useSelector((state) => state.auth.doctorShopForm?.page9);
  const Intro1Details = useSelector((state) => state.auth.clientIntakeForm?.intro1);
  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  const personalInformation = {
    clientName: loginUser?.name,
  };

  // console.log("clientIntakeformDetails2", clientIntakeformDetails);
  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({ patientId: UserId, /* practitionerId: UserId */ token: token })
  //   );
  // }, []);
  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({ patientId: UserId, /* practitionerId: UserId */ token: token })
  //   );
  // }, [stepIndex]);

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
      page9: values.page9,
    };
    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
  };
  const form9Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
    ? [{ ...initialValue.page9[0] }]
    : [{ ...initialValue.page9[0], ...personalInformation }];
  console.log(form9Data, "hh");
  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{
            page9: [...form9Data],
          }}
          enableReinitialize
          onSubmit={async (values) => {
            const page9Obj = {
              BurnsInput: values?.BurnsInput,
              BurnsCheck: values?.BurnsCheck,

              LocCheck: values?.LocCheck,
              LocInput: values?.LocInput,

              ConcussionsCheck: values?.ConcussionsCheck,
              ConcussionsInput: values?.ConcussionsInput,

              DiplopiaCheck: values?.DiplopiaCheck,
              Diplopiainput: values?.Diplopiainput,

              CosmeticsurgeriesCheck: values?.CosmeticsurgeriesCheck,
              CosmeticsurgeriesInput: values?.CosmeticsurgeriesInput,

              dizzinessCheck: values?.dizzinessCheck,
              dizzinessinput: values?.dizzinessinput,

              FracturesCheck: values?.FracturesCheck,
              FracturesInput: values?.FracturesInput,

              DropCheck: values?.DropCheck,
              DropInput: values?.DropInput,

              FrequentCheck: values?.FrequentCheck,
              FrequentInput: values?.FrequentInput,

              DysphasiaCheck: values?.DysphasiaCheck,
              DysphasiaInput: values?.DysphasiaInput,

              HeadCheck: values?.HeadCheck,
              HeadInput: values?.HeadInput,

              DysphagiaCheck: values?.DysphagiaCheck,
              DysphagiaInput: values?.DysphagiaInput,

              LocCheck: values?.LocCheck,
              LocInput: values?.LocInput,

              DifficultyCheck: values?.DifficultyCheck,
              DifficultyInput: values?.DifficultyInput,

              MajorCheck: values?.MajorCheck,
              MajorInput: values?.MajorInput,

              NauseaCheck: values?.NauseaCheck,
              NauseaInput: values?.NauseaInput,

              MVACheck: values?.MVACheck,
              MVAInput: values?.MVAInput,

              sensationCheck: values?.sensationCheck,
              sensationInput: values?.sensationInput,

              OrganCheck: values?.OrganCheck,
              OrganInput: values?.OrganInput,

              InvoluntaryCheck: values?.InvoluntaryCheck,
              InvoluntaryInput: values?.InvoluntaryInput,

              TraumaCheck: values?.TraumaCheck,
              TraumaInput: values?.TraumaInput,

              BalanceCheck: values?.BalanceCheck,
              BalanceInput: values?.BalanceInput,

              CesareanCheck: values?.CesareanCheck,
              CesareanInput: values?.CesareanInput,

              DexterityCheck: values?.DexterityCheck,
              DexterityInput: values?.DexterityInput,

              HomeCheck: values?.HomeCheck,
              HomeInput: values?.HomeInput,

              BowelCheck: values?.BowelCheck,
              BowelInput: values?.BowelInput,

              HospitalCheck: values?.HospitalCheck,
              HospitalInput: values?.HospitalInput,

              LocalizedCheck: values?.LocalizedCheck,
              LocalizedInput: values?.LocalizedInput,

              OtherCheck: values?.OtherCheck,
              OtherInput: values?.OtherInput,

              MentalCheck: values?.MentalCheck,
              MentalInput: values?.MentalInput,

              immunizations: values?.immunizations,
              clientName: values?.clientName,
            };
            const page9Object = { ...Doctotsoapform, ...page9Obj };
            // console.log("page9Object..", page9Object);
            const data = {
              patientId: patientIntakeFormDetail.shouldShowPatientIntakeFormDetail
                ? patientIntakeFormDetail.patientId
                : UserId,
              page9: values.page9,
            };
            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            const soapData = {
              patientId: UserId,
              page9: page9Object,
            };
            // await dispatch(
            //   doctorShopFormDataAction({
            //     data: soapData,
            //     token: token,
            //   })
            // );
            setActiveStep(stepIndex + 1);
          }}
        >
          {(formik) => {
            return (
              <>
                <Grid>
                  <FieldArray
                    name="page9"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik.values.page9.map((page, index) => (
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

                              <SoftBox style={{ marginTop: "10px" }}>
                                <SoftTypography
                                  fontWeight="bold"
                                  fontSize="15px"
                                  marginBottom="8px"
                                >
                                  Illness/Injuries/Surgeries/Hospitalizations (List dates and
                                  details if possible):
                                </SoftTypography>
                              </SoftBox>
                              <Grid>
                                <FirstPart formik={formik} form={form} index={index} />
                              </Grid>
                              <Grid>
                                <SecondPart formik={formik} form={form} index={index} />
                              </Grid>

                              <Grid mt={1} className="mainfooter">
                                <p>
                                  © Andrew Buser<span>, D.C., CSCS</span>
                                </p>
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
                                  formik?.values?.page9?.length,
                                  formik.values.page9[formik.values.page9.length - 1]
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
