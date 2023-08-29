import React, { useEffect } from "react";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/account/components/FormField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Divider, Radio } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import "../style.css";
import PropTypes from "prop-types";

import PhoneInput from "react-phone-input-2";
import {
  getSearchPatient,
  patientsoapdata,
  soapFormPatientData,
  clientIntakeFormPatientData,
  getDoctorShopFormDataAction,
} from "store/actions/actions";
// import {
//   patientsoapdata,
//   // getDoctorShopFormDataAction,
//   doctorShopFromDetails,
//   doctorShopFormDataAction,
// } from "../../../../../store/actions/actions";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  RadioGroup,
} from "@mui/material";

function LastPart({ formik, formData, stepIndex }) {
  const dispatch = useDispatch();

  // const { formField, setFieldValue } = form;
  // const { email } = formField;
  // const { name } = formField;
  const { handleChange, formField, errors, touched, setFieldValue } = formData;

  //   const { email } = formField;
  //   const { name } = formField;
  const { values } = formik;
  //   const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  //   const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  //   const UserId = useSelector((state) => state.auth.auth._id);

  //   const onSearch = (searchTerm) => {
  //     console.log("serchTerm", searchTerm.name);
  //     formik.setFieldValue(email.name, searchTerm.email);
  //     formik.setFieldValue(name.name, searchTerm.name);
  //     dispatch(patientsoapdata({ patientId: searchTerm._id }));
  //     dispatch(getDoctorShopFormDataAction({ patientId: searchTerm._id, practitionerId: UserId }));
  //     dispatch(soapFormPatientData(searchTerm._id));
  //   };
  //   console.log("setFieldValue", setFieldValue)
  const {
    name: nameV,
    todaydate: todaydateV,
    dob: dobV,
    height: heightV,
    weight: weightV,
    dominant: dominantV,
    address: addressV,
    city: cityV,
    zip: zipV,
    Cellphonenumber1: Cellphonenumber1V,
    phonenumbrCell1: phonenumbrCell1V,
    phonenumbrWork: phonenumbrWorkV,
    email: emailV,
    dl: dlV,
    health: healthV,
    policy: policyV,
    address1: address1V,
    city1: city1V,
    zip1: zip1V,
    adjuster: adjusterV,
    phone: phoneV,
    car: carV,
    address2: address2V,
    city2: city2V,
    zip2: zip2V,
    adjuster1: adjuster1V,
    phone1: phone1V,
    agent: agentV,
    phone2: phone2V,
    policy1: policy1V,
    claim: claimV,
    medicalpayments: medicalpaymentsV,
    uninsuredmotorist: uninsuredmotoristV,
    lawfirm: lawfirmV,
    address3: address3V,
    city3: city3V,
    zip3: zip3V,
    lawyer: lawyerV,
    phone3: phone3V,
    carpolicy: carpolicyV,
    patient: patientV,
    lossaccident: lossaccidentV,
    afteraccident: afteraccidentV,
    medicaltreatment: medicaltreatmentV,
    income: incomeV,
    propertydamage: propertydamageV,
    personal: personalV,
    phone4: phone4V,
    address4: address4V,
    city4: city4V,
    zip4: zip4V,
    lastname: lastnameV,
    type: typeV,
    lastphone: lastphoneV,
    lastamount: lastamountV,
    record: recordV,
  } = values;
  //   useEffect(() => {
  //     dispatch(getSearchPatient({ searchkey: nameV }));
  //   }, [nameV]);
  //   useEffect(() => {
  //     dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, practitionerId: UserId }));
  //   }, []);
  //   useEffect(() => {
  //     dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, practitionerId: UserId }));
  //   }, [stepIndex]);
  return (
    <Box mt={-2}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormField
            // type={NameofPersonalMD.type}
            label="Name of Personal MD"
            name="personal"
            value={personalV}
            placeholder="Name of Personal MD"
            onChange={formik.handleChange}

            // error={errors.NameofPersonalMD && touched.NameofPersonalMD}
            // success={AdjusterV.length > 0 && !errors.Adjuster}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <FormField
                type={Phone4.type}
                label={Phone4.label}
                name={Phone4.name}
                value={Phone4V}
                placeholder={Phone4.placeholder}
                error={errors.Phone4 && touched.Phone4}
                // success={PhoneV.length > 0 && !errors.language}
              /> */}
          <SoftBox ml={0.5} lineHeight={0} display="inline-block" className="phone-input-label">
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              textTransform="capitalize"
              // mb={}
            >
              Phone
            </SoftTypography>
          </SoftBox>
          <>
            <PhoneInput
              label="Phone"
              // className="stylet"
              placeholder="Enter number"
              name="phone4"
              // onChange={(value) => {
              //   setFieldValue("Cellphonenumber4", value);
              // }}
              value={phone4V}
              onChange={(value) => {
                formik.setFieldValue("phone4", value);
              }}

              // inputProps ={{required: true}}
            />
            {/* {errors.Cellphonenumber4 && touched.Cellphonenumber4 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber4.errorMsg}
                        </small>
                      )} */}
          </>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="lastpart-adress2-row-container">
        <Grid item xs={12} sm={6} className="topspace">
          <FormField
            // type={address4.type}
            label="Address"
            name="address4"
            value={address4V}
            placeholder="Address"
            onChange={formik.handleChange}

            // error={errors.address4 && touched.address4}
            // success={addressV.length > 0 && !errors.address4}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormField
            // type={city4.type}
            label="City"
            name="city4"
            value={city4V}
            placeholder="city"
            onChange={formik.handleChange}

            // error={errors.city4 && touched.city4}
            // success={city4.length > 0 && !errors.city4}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormField
            // type={zip4.type}
            label="Zip"
            name="zip4"
            value={zip4V}
            placeholder="zip"
            onChange={formik.handleChange}

            // error={errors.zip4 && touched.zip4}
            // success={pincodeV.length > 0 && !errors.zip4}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} className="lastpart-label-row-container">
        <Grid item xs={12} sm={12}>
          <SoftTypography
            component="label"
            variant="caption"
            fontWeight="bold"
            // textTransform="capitalize"
          >
            Write any Ambulance, Hospital, M.D, Chiropractor, Dentist, Acupuncturist, PT, etc.,since
            accident
          </SoftTypography>
        </Grid>
      </Grid>

      <Grid container spacing={3} className="lastpart-section-name-row-container">
        <Grid item xs={12} sm={3}>
          <FormField
            // type={lastSectionName.type}
            label="Last Section Name"
            name="lastname"
            value={lastnameV}
            placeholder="last Section Name"
            onChange={formik.handleChange}

            // error={errors.lastSectionName && touched.lastSectionName}
            // success={firstNameV.length > 0 && !errors.lastSectionName}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormField
            // type={lastSectionType.type}
            label="Last Section Type"
            name="type"
            value={typeV}
            placeholder="last Section Type"
            onChange={formik.handleChange}

            // error={errors.lastSectionType && touched.lastSectionType}
            // success={lastSectionTypeV.length > 0 && !errors.lastSectionType}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* <FormField
                type={lastSectionPhone.type}
                label={lastSectionPhone.label}
                name={lastSectionPhone.name}
                value={lastSectionPhoneV}
                placeholder={lastSectionPhone.placeholder}
                error={errors.lastSectionPhone && touched.lastSectionPhone}
                // success={firstNameV.length > 0 && !errors.lastSectionPhone}
              /> */}
          <SoftBox
            mb={1}
            ml={0.5}
            lineHeight={0}
            display="inline-block"
            className="phone-input-label"
          >
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              textTransform="capitalize"
              // mb={}
            >
              Phone
            </SoftTypography>
          </SoftBox>
          <>
            <PhoneInput
              label="Phone"
              // className="stylet"
              placeholder="Enter number"
              // onChange={(value) => {
              //   setFieldValue("Cellphonenumber", value);
              // }}
              name="lastphone"
              value={lastphoneV}
              onChange={(value) => {
                formik.setFieldValue("lastphone", value);
              }}

              // inputProps ={{required: true}}
            />
            {/* {errors.Cellphonenumber && touched.Cellphonenumber && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber.errorMsg}
                        </small>
                      )} */}
          </>
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormField
            // type={lastSectionBill.type}
            label="Last Section Bill"
            name="lastamount"
            value={lastamountV}
            placeholder="last Section Bill"
            onChange={formik.handleChange}

            // error={errors.lastSectionBill && touched.lastSectionBill}
            // success={lastSectionBillV.length > 0 && !errors.lastSectionBill}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <FormField
            // type={lastSectionRecords.type}
            label="Last Section Records"
            name="record"
            value={recordV}
            placeholder="last Section Records"
            onChange={formik.handleChange}

            // error={errors.lastSectionRecords && touched.lastSectionRecords}
            // success={lastSectionRecordsV.length > 0 && !errors.lastSectionRecords}
          />
        </Grid>
      </Grid>
      <br />
    </Box>
  );
}
LastPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  // form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default LastPart;
