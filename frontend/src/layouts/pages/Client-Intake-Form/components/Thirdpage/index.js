import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValue from "./schema/initialValue.js";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { FieldArray, Formik } from "formik";
import SoftButton from "components/SoftButton";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import Table from "./components/Table";
import EndPart from "./components/endPart";
import "./style.css";
import { doctorShopFormDataAction } from "store/actions/actions.js";
import { getIntakeFormDetailsAction } from "store/actions/actions.js";
import SoftTypography from "components/SoftTypography/index.js";
import { MinusCircleOutlined } from "@ant-design/icons";

function index({ formData, stepIndex, setActiveStep }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page7);

  const Doctotsoapform = useSelector((state) => state.auth.doctorShopForm?.page9);
  const loginUser = useSelector((state) => state.auth.auth?.userdata);

  const personalInformation = {
    clientName: loginUser?.name,
  };
  // console.log("clientIntakeformDetails2", clientIntakeformDetails);
  // console.log("Doctotsoapform1", Doctotsoapform);

  // useEffect(() => {
  //   dispatch(
  //     getDoctorShopFormDataAction({ patientId: UserId, /* practitionerId: UserId */ token: token })
  //   );
  // }, []);

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
    const page9Obj = {
      CancerInput: values?.CancerInput,
      CancerCheck: values?.CancerCheck,

      DiabetesInput: values?.DiabetesInput,
      DiabetesCheck: values?.DiabetesCheck,

      AttackInput: values?.AttackInput,
      AttackCheck: values?.AttackCheck,

      LiverInput: values?.LiverInput,
      LiverCheck: values?.LiverCheck,

      HBPInput: values?.HBPInput,
      HBPCheck: values?.HBPCheck,

      LBPInput: values?.LBPInput,
      LBPCheck: values?.LBPCheck,

      LungInput: values?.LungInput,
      LungCheck: values?.LungCheck,

      NeuroInput: values?.NeuroInput,
      NeuroCheck: values?.NeuroCheck,

      SeizuresInput: values?.SeizuresInput,
      SeizuresCheck: values?.SeizuresCheck,

      StrokeInput: values?.StrokeInput,
      StrokeCheck: values?.StrokeCheck,

      VascularInput: values?.VascularInput,
      VascularCheck: values?.VascularCheck,

      OtherInput: values?.OtherInput,
      OtherCheck: values?.OtherCheck,
    };
    const page9Object = { ...Doctotsoapform, ...page9Obj };
    const data = {
      patientId: UserId,
      page7: values.page7,
    };

    dispatch(
      clientIntakeFormCreate({
        data: data,
        token: token,
      })
    );
    const shopData = {
      patientId: UserId,
      page9: page9Object,
    };
    // await dispatch(
    //   doctorShopFormDataAction({
    //     data: shopData,
    //     token: token,
    //   })
    // );
  };
  const form7Data = clientIntakeformDetails
    ? clientIntakeformDetails
    : [{ ...initialValue.page7[0] }];

  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{ page7: [...form7Data] }}
          enableReinitialize
          onSubmit={async (values) => {
            const page9Obj = {
              CancerInput: values?.CancerInput,
              CancerCheck: values?.CancerCheck,

              DiabetesInput: values?.DiabetesInput,
              DiabetesCheck: values?.DiabetesCheck,

              AttackInput: values?.AttackInput,
              AttackCheck: values?.AttackCheck,

              LiverInput: values?.LiverInput,
              LiverCheck: values?.LiverCheck,

              HBPInput: values?.HBPInput,
              HBPCheck: values?.HBPCheck,

              LBPInput: values?.LBPInput,
              LBPCheck: values?.LBPCheck,

              LungInput: values?.LungInput,
              LungCheck: values?.LungCheck,

              NeuroInput: values?.NeuroInput,
              NeuroCheck: values?.NeuroCheck,

              SeizuresInput: values?.SeizuresInput,
              SeizuresCheck: values?.SeizuresCheck,

              StrokeInput: values?.StrokeInput,
              StrokeCheck: values?.StrokeCheck,

              VascularInput: values?.VascularInput,
              VascularCheck: values?.VascularCheck,

              OtherInput: values?.OtherInput,
              OtherCheck: values?.OtherCheck,
            };
            const page9Object = { ...Doctotsoapform, ...page9Obj };
            const data = {
              patientId: UserId,
              page7: values.page7,
            };

            dispatch(
              clientIntakeFormCreate({
                data: data,
                token: token,
              })
            );
            const shopData = {
              patientId: UserId,
              page9: page9Object,
            };
            // await dispatch(
            //   doctorShopFormDataAction({
            //     data: shopData,
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
                    name="page7"
                    render={(arrayhelpers, push) => {
                      return (
                        <>
                          {formik?.values?.page7.map((page, index) => (
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

                              <Grid className="table">
                                <Table formData={formData} formik={formik} index={index} />
                              </Grid>

                              {/* <Grid className="table">
                                <EndPart formData={formData} formik={formik} index={index} />
                              </Grid> */}
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
                                  formik?.values?.page7?.length,
                                  formik.values.page7[formik.values.page7.length - 1]
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

{
  /* <Grid>
                  <EndPart formData={formData} formik={formik} form={form} />
                </Grid> */
}
