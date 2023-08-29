import SoftBox from "components/SoftBox";
import React, { useEffect } from "react";
import initialValue from "./schema/initialValue";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import { Form, Formik } from "formik";
import SoftButton from "components/SoftButton";
import form from "./schema/form";
import { clientIntakeFormCreate } from "store/actions/actions";
import { clientIntakeFormGet } from "store/actions/actions";
import "./style.css";
import { getIntakeFormDetailsAction } from "store/actions/actions";

function index({ formData, stepIndex, setActiveStep }) {
  console.log("formData100", formData);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm);
  console.log("clientIntakeformDetailsredux", clientIntakeformDetails);
  useEffect(() => {
    dispatch(
      clientIntakeFormGet({ patientId: soappatientId, practitionerId: UserId, token: token })
    );
  }, []);

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
  // useEffect(() => {
  //   console.log("running log 13.");
  //   dispatch(clientIntakeFormGet({ patientId: soappatientId, practitionerId: UserId, token: token }));
  // }, [stepIndex]);
  return (
    <>
      <SoftBox>
        <Formik
          initialValues={{ ...initialValue, ...clientIntakeformDetails }}
          enableReinitialize
          onSubmit={(values) => {
            console.log("client-intake-form...", values);
            const data = {
              practitionerId: UserId,
              patientId: soappatientId,
              clientName: values,
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
            console.log("values...12", formik);
            return (
              <>
                <Grid mb={3}>
                  <SoftBox mt={3}>
                    <Grid className="clientaction">
                      <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
                      <input
                        type="text"
                        label="clientName"
                        onChange={formik.handleChange}
                        // value={clientNameV}
                        name="clientName"
                      />
                    </Grid>
                  </SoftBox>
                </Grid>

                {/* <div style={{ float: "right", position: "relative" }}>
                  <SoftButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    onClick={formik.handleSubmit}
                    className="nextButton5"
                  >
                    Next
                  </SoftButton>
                </div> */}
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
