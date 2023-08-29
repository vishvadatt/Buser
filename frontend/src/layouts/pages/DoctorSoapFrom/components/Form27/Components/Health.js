import React, { useEffect } from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Grid from "@mui/material/Grid";
import FormField from "layouts/pages/account/components/FormField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Divider, Radio } from "@mui/material";
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

function Health({ formik, formData, stepIndex }) {
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
    <>
      <div>
        <SoftBox mt={2}> 
          <Grid pt={"10px"} container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField
                // type={HealthInsurancecompany.type}
                label="Health Insurance company"
                name="health"
                value={healthV}
                placeholder="Health Insurance company"
                onChange={formik.handleChange}

                // error={errors.HealthInsurancecompany && touched.HealthInsurancecompany}
                // success={NumberofChildrenV.length > 0 && !errors.HealthInsurancecompany}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                // type={Policy.type}
                label="Policy"
                name="policy"
                value={policyV}
                placeholder="Policy"
                onChange={formik.handleChange}

                // error={errors.Policy && touched.Policy}
                // success={languageV.length > 0 && !errors.language}
              />
            </Grid>
          </Grid>

          <Grid className="health-address-row" container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField
                // type={address1.type}
                label="Address"
                name="address1"
                value={address1V}
                placeholder="Address"
                onChange={formik.handleChange}

                // error={errors.address1 && touched.address1}
                // success={addressV.length > 0 && !errors.address1}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormField
                // type={city1.type}
                label="City"
                name="city1"
                value={city1V}
                placeholder="city"
                onChange={formik.handleChange}

                // error={errors.city1 && touched.city1}
                // success={cityV.length > 0 && !errors.city1}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormField
                // type={zip1.type}
                label="Zip"
                name="zip1"
                value={zip1V}
                placeholder="zip"
                onChange={formik.handleChange}

                // error={errors.zip1 && touched.zip1}
                // success={pincodeV.length > 0 && !errors.zip1}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-adjuster-row-container">
            <Grid item xs={12} sm={6} className="topspace">
              <FormField
                // type={Adjuster.type}
                label="Adjuster"
                name="adjuster"
                value={adjusterV}
                placeholder="Adjuster"
                onChange={formik.handleChange}

                // error={errors.Adjuster && touched.Adjuster}
                // success={AdjusterV.length > 0 && !errors.Adjuster}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <FormField
                  type={Phone.type}
                  label={Phone.label}
                  name={Phone.name}
                  value={PhoneV}
                  placeholder={Phone.placeholder}
                  error={errors.Phone && touched.Phone}
                  // success={PhoneV.length > 0 && !errors.language}
                /> */}

              <SoftBox
                mb={1}
                ml={0.5}
                lineHeight={0}
                className="phone-input-label"
                display="inline-block"
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
                  name="phone"
                  placeholder="Enter number"
                  // onChange={(value) => {
                  //   setFieldValue("CellphonenumberA", value);
                  // }}
                  value={phoneV}
                  onChange={(value) => {
                    formik.setFieldValue("phone", value);
                  }}

                  // inputProps ={{required: true}}
                />
                {/* {errors.CellphonenumberA && touched.CellphonenumberA && (
                          <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                            {CellphonenumberA.errorMsg}
                          </small>
                        )} */}
              </>
            </Grid>
          </Grid>

          <Grid className="health-car-row-container" container spacing={3}>
            <Grid item xs={12} sm={12} className="topspace">
              <FormField
                // type={CarInsurancecompany.type}
                label="Car Insurance company"
                name="car"
                value={carV}
                placeholder="Car Insurance company"
                onChange={formik.handleChange}

                // error={errors.CarInsurancecompany && touched.CarInsurancecompany}
                // success={AdjusterV.length > 0 && !errors.Adjuster}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-adress2-row-container">
            <Grid item xs={12} sm={6} className="topspace">
              <FormField
                // type={address2.type}
                label="Address"
                name="address2"
                value={address2V}
                placeholder="Address"
                onChange={formik.handleChange}

                // error={errors.address2 && touched.address2}
                // success={address2V.length > 0 && !errors.address2}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormField
                // type={city2.type}
                label="City"
                name="city2"
                value={city2V}
                placeholder="city"
                onChange={formik.handleChange}

                // error={errors.city2 && touched.city2}
                // success={city2V.length > 0 && !errors.city2}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormField
                // type={zip2.type}
                label="Zip"
                name="zip2"
                value={zip2V}
                placeholder="zip"
                onChange={formik.handleChange}

                // error={errors.zip2 && touched.zip2}
                // success={zip2V.length > 0 && !errors.zip2}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-adjuster1-row-container">
            <Grid item xs={12} sm={6} className="topspace">
              <FormField
                // type={Adjuster1.type}
                label="Adjuster"
                name="adjuster1"
                value={adjuster1V}
                placeholder="Adjuster"
                onChange={formik.handleChange}

                // error={errors.Adjuster1 && touched.Adjuster1}
                // success={AdjusterV.length > 0 && !errors.Adjuster}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <FormField
                type={Phone1.type}
                label={Phone1.label}
                name={Phone1.name}
                value={Phone1V}
                placeholder={Phone1.placeholder}
                error={errors.Phone1 && touched.Phone1}
                // success={PhoneV.length > 0 && !errors.language}
              /> */}
              <SoftBox
                mb={1}
                ml={0.5}
                className="phone-input-label"
                lineHeight={0}
                display="inline-block"
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
                  name="phone1"
                  // onChange={(value) => {
                  //   setFieldValue("Cellphonenumber0", value);
                  // }}
                  value={phone1V}
                  onChange={(value) => {
                    formik.setFieldValue("phone3", value);
                  }}

                  // inputProps ={{required: true}}
                />
                {/* {errors.Cellphonenumber0 && touched.Cellphonenumber0 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber0.errorMsg}
                        </small>
                      )} */}
              </>
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-agent-row-container">
            <Grid item xs={12} sm={6} className="topspace">
              <FormField
                // type={Agent.type}
                label="Agent"
                name="agent"
                value={agentV}
                placeholder="Agent"
                onChange={formik.handleChange}

                // error={errors.Agent && touched.Agent}
                // success={AdjusterV.length > 0 && !errors.Adjuster}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <FormField
                type={Phone2.type}
                label={Phone2.label}
                name={Phone2.name}
                value={Phone2V}
                placeholder={Phone2.placeholder}
                error={errors.Phone2 && touched.Phone2}
                // success={PhoneV.length > 0 && !errors.language}
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
                  name="phone2"
                  // onChange={(value) => {
                  //   setFieldValue("Cellphonenumber2", value);
                  // }}
                  value={phone2V}
                  onChange={(value) => {
                    formik.setFieldValue("phone2", value);
                  }}

                  // inputProps ={{required: true}}
                />
                {/* {errors.Cellphonenumber2 && touched.Cellphonenumber2 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber2.errorMsg}
                        </small>
                      )} */}
              </>
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-policy-row-container">
            <Grid item xs={12} sm={6} className="topspace">
              <FormField
                // type={Policy2.type}
                label="Policy"
                name="policy1"
                value={policy1V}
                placeholder="Policy"
                onChange={formik.handleChange}

                // error={errors.Policy2 && touched.Policy2}
                // success={AdjusterV.length > 0 && !errors.Adjuster}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                // type={Claim.type}
                label="Claim"
                name="claim"
                value={claimV}
                placeholder="Claim"
                onChange={formik.handleChange}

                // error={errors.Claim && touched.Claim}
                // success={PhoneV.length > 0 && !errors.language}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-medical-payment-row-container">
            <Grid item xs={12} sm={6} className="topspace">
              <FormField
                // type={Medicalpaymentcoverage.type}
                label="What Medical Payments Coverage?"
                name="medicalpayments"
                value={medicalpaymentsV}
                placeholder="Medical payment coverage"
                onChange={formik.handleChange}

                // error={errors.Medicalpaymentcoverage && touched.Medicalpaymentcoverage}
                // success={AdjusterV.length > 0 && !errors.Adjuster}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                // type={Uninsuredmotoristcoverage.type}
                label="What Uninsured motorist coverage?"
                name="uninsuredmotorist"
                value={uninsuredmotoristV}
                placeholder="Uninsured motorist coverage"
                onChange={formik.handleChange}

                // error={errors.Uninsuredmotoristcoverage && touched.Uninsuredmotoristcoverage}
                // success={PhoneV.length > 0 && !errors.language}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-law-firm-row-container">
            <Grid item xs={12} sm={12} className="topspace">
              <FormField
                // type={Lawfirmrepresent.type}
                label="what Law firm represents you?"
                name="lawfirm"
                value={lawfirmV}
                placeholder="Law firm represent"
                onChange={formik.handleChange}

                // error={errors.Lawfirmrepresent && touched.Lawfirmrepresent}
                // success={AdjusterV.length > 0 && !errors.Adjuster}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-adress2-row-container">
            <Grid item xs={12} sm={6} className="topspace">
              <FormField
                // type={address3.type}
                label="Address"
                name="address3"
                value={address3V}
                placeholder="Address"
                onChange={formik.handleChange}

                // error={errors.address3 && touched.address3}
                // success={address3V.length > 0 && !errors.address3}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormField
                // type={city3.type}
                label="City"
                name="city3"
                value={city3V}
                placeholder="city"
                onChange={formik.handleChange}

                // error={errors.city3 && touched.city3}
                // success={city2V.length > 0 && !errors.city2}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormField
                // type={zip3.type}
                label="Zip"
                name="zip3"
                value={zip3V}
                placeholder="zip"
                onChange={formik.handleChange}

                // error={errors.zip3 && touched.zip3}
                // success={zip2V.length > 0 && !errors.zip2}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} className="health-lawyer-name-row-container">
            <Grid item xs={12} sm={7} className="topspace">
              <FormField
                // type={Lawyersname.type}
                label="Your Lawyer's Name"
                name="lawyer"
                value={lawyerV}
                placeholder="Lawyers name"
                onChange={formik.handleChange}

                // error={errors.Lawyersname && touched.Lawyersname}
                // success={AdjusterV.length > 0 && !errors.Adjuster}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              {/* <FormField
                type={Phone3.type}
                label={Phone3.label}
                name={Phone3.name}
                value={Phone3V}
                placeholder={Phone3.placeholder}
                error={errors.Phone3 && touched.Phone3}
                // success={PhoneV.length > 0 && !errors.language}
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
                  name="phone3"
                  // onChange={(value) => {
                  //   setFieldValue("Cellphonenumber3", value);
                  // }}
                  value={phone3V}
                  onChange={(value) => {
                    formik.setFieldValue("phone3", value);
                  }}

                  // inputProps ={{required: true}}
                />
                {/* {errors.Cellphonenumber3 && touched.Cellphonenumber3 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber3.errorMsg}
                        </small>
                      )} */}
              </>
            </Grid>
          </Grid>
        </SoftBox>
      </div>
    </>
  );
}
Health.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  // form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Health;
