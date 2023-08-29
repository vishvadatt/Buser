// import React from 'react'
import Mandatory from "./Components/Mandatory";
import Health from "./Components/Health";
import CarPolicy from "./Components/CarPolicy";
import LastPart from "./Components/LastPart";
import initialValue from "../Form27/Schema/initialValue";
import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import form from "../Form27/Schema/form";
import SoftButton from "components/SoftButton";
import * as Yup from "yup";
// import { clientIntakeFormGet,getDoctorShopFormDataAction } from "store/actions/actions";

import {
  patientsoapdata,
  getDoctorShopFormDataAction,
  doctorShopFromDetails,
  doctorShopFormDataAction,
  clientIntakeFormGet,
} from "../../../../../store/actions/actions";
function FormTwentySeven({ formData, stepIndex, setActiveStep }) {
  console.log("formData11", initialValue);
  const dispatch = useDispatch();
  const [usernameError, setUserNameError] = useState("");
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page1);
  console.log("clientIntakeformDetails...", clientIntakeformDetails);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page1);

  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({
  //     patientId: soappatientId,
  //     // practitionerId: UserId,
  //     token: token
  //   }));
  // }, []);
  // useEffect(() => {
  //   dispatch(clientIntakeFormGet({
  //     patientId: soappatientId,
  //     // practitionerId: UserId,
  //     token: token
  //   }));
  // }, [stepIndex]);

  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({
  //     patientId: soappatientId,
  //     // practitionerId: UserId,
  //     token: token
  //   }));
  // }, []);

  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({
  //     patientId: soappatientId,
  //     // practitionerId: UserId,
  //     token: token
  //   }));
  // }, [stepIndex]);

  console.log("doctorShopFromDetails....", doctorShopFromDetails);
  const updatedFields = {
    Cellphonenumber1: doctorShopFromDetails?.Cellphonenumber,
    city: doctorShopFromDetails?.city,
    dob: doctorShopFromDetails?.DOB,
  };
  console.log("updatedFields...", updatedFields);
  return (
    <>
      <div>
        <Formik
          initialValues={{
            ...initialValue,
            ...updatedFields,
            ...doctorShopFromDetails,

            // ...clientIntakeformDetails
          }}
          enableReinitialize
          onSubmit={(values) => {
            console.log("tableee", values);
            console.table(values);

            const data = {
              // practitionerId: UserId,
              patientId: patientSoapFormDetail.shouldShowPatientSoapFormDetail
                ? patientSoapFormDetail.patientId
                : selectedPatientId
                ? selectedPatientId
                : soappatientId,
              // patientId: UserId,
              page1: values,
            };
            if (!!values.name) {
              // if () {}
              dispatch(
                doctorShopFormDataAction({
                  data: data,
                  token: token,
                })
              );
              setActiveStep(stepIndex + 1);
            } else {
              setUserNameError("User name is required");
            }
          }}
        >
          {(formik) => {
            return (
              <>
                <Mandatory
                  formData={formData}
                  formik={formik}
                  form={form}
                  stepIndex={stepIndex}
                  usernameError={usernameError}
                  setUserNameError={setUserNameError}
                />
                <hr style={{ borderTop: "1px solid #bbb" }}></hr>
                <Health formData={formData} formik={formik} form={form} stepIndex={stepIndex} />
                <hr style={{ borderTop: "1px solid #bbb" }}></hr>
                <CarPolicy formData={formData} formik={formik} form={form} stepIndex={stepIndex} />
                <hr style={{ borderTop: "1px solid #bbb" }}></hr>
                <LastPart formData={formData} formik={formik} form={form} stepIndex={stepIndex} />

                <div style={{ float: "right" }}>
                  <SoftButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    onClick={formik.handleSubmit}
                    className={"nxt1"}
                  >
                    Next
                  </SoftButton>
                </div>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
FormTwentySeven.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default FormTwentySeven;
