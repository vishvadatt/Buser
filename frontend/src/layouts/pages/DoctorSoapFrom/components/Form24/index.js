import { Box, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import FormField from "../FormField";
import "./style.scss";
import initialValues from "./Schema/initialValues";
import { Formik } from "formik";
import SoftButton from "components/SoftButton";
import Table1 from "./Componnet/Table1";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDoctorShopFormDataAction } from "store/actions/actions";
import NextButton from "../../NextButton";
import { doctorShopFormDataAction } from "store/actions/actions";
import PropTypes from "prop-types";
import InfoCommon from "../InfoCommon/index";

const TwentyFour = ({ stepIndex, setActiveStep }) => {
  const dispatch = useDispatch();
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page24);
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
    <Grid container>
      <Grid item lg={12}>
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
              page24: values,
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
            console.log("formik..", formik.values);
            return (
              <div className="formik-container">
                <Box>
                  <InfoCommon formik={formik} />
                </Box>

                <Table1 formik={formik} />
                <div
                  style={{ float: "right", position: "relative" }}
                  className="page24-next-btn-container"
                >
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
                    // className="nextButttonclass"
                    className="nxt1"
                  >
                    Next
                  </SoftButton>
                </div>
              </div>
            );
          }}
        </Formik>
      </Grid>
    </Grid>
  );
};
TwentyFour.propTypes = {
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default TwentyFour;
