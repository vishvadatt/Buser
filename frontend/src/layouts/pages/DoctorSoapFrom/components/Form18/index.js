import { Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import ComponentOne from "./Component/component1/index";
import ComponentTwo from "./Component/component2/index";
import initialValues from "./Component/Schema/initialValues";
import CommonIndex from "../InfoCommon/index";
import { Form, Formik } from "formik";
import NextButton from "../../NextButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import { doctorShopFormDataAction } from "store/actions/actions";
import SoftButton from "components/SoftButton";
import PropTypes from "prop-types";
import { fontSize } from "@mui/system";

const FormEighteen = ({ stepIndex, setActiveStep }) => {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page18);

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
    console.log("running log 18.");
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
      <Formik
        initialValues={{ ...initialValues, ...doctorShopFromDetails }}
        enableReinitialize
        onSubmit={(values) => {
          console.log("Aaaa..", values);
          const data = {
            patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
              ? patientSoapFormDetail.patientId
              : selectedPatientId
              ? selectedPatientId
              : soappatientId,
            // practitionerId: UserId,
            page18: values,
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
          console.log("formik.", formik);
          return (
            <>
              <Form>
                <CommonIndex formik={formik} />
                <Grid container>
                  <Grid item lg={8} sm={12} xs={12} style={{ background: "#e2efda" }}>
                    <ComponentOne formik={formik} />
                  </Grid>
                  <Grid item lg={4} sm={12} xs={12} pl={1}>
                    <ComponentTwo formik={formik} />
                  </Grid>
                  <span style={{ fontSize: "15px" }}>Notes:</span>
                  <Grid lg={12} xs={12} sm={12} pt={1}>
                    <textarea
                      style={{
                        paddingTop: "0px",
                        width: "100%",
                        height: "500px",
                        background: "#F1F4FF",
                        border: "1px solid black",
                        outline: "none",
                        fontSize: "15px",
                      }}
                      value={formik.values.notesArea1}
                      name="notesArea1"
                      onChange={formik.handleChange}
                    ></textarea>
                  </Grid>
                </Grid>
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
                    className="nxt1"
                  >
                    Next
                  </SoftButton>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </SoftBox>
  );
};

FormEighteen.propTypes = {
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default FormEighteen;
