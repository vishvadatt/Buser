import React, { useEffect, useRef } from "react";

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
import { toggleSoapFormAction } from "store/actions/actions";

function Mandatory({ formik, formData, stepIndex, usernameError, setUserNameError }) {
  const dispatch = useDispatch();

  // const { formField, setFieldValue } = form;
  // const { email } = formField;
  // const { name } = formField;
  const { handleChange, formField, errors, touched, setFieldValue, setValues, onChange } = formData;
  const emailRef = useRef();
  const { email } = formField;
  const { name } = formField;
  const { values } = formik;
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);

  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  let date = new Date().toLocaleDateString("en-CA");
  let currentDate = new Date().toJSON().slice(0, 10);
  const onSearch = (searchTerm) => {
    console.log("serchTermvvx", searchTerm);
    formik.setFieldValue(email.name, searchTerm.email);
    formik.setFieldValue(name.name, searchTerm.name);
    dispatch(
      toggleSoapFormAction({ patientId: searchTerm._id, shouldShowPatientSoapFormDetail: true })
    );
    dispatch(
      getDoctorShopFormDataAction({
        patientId: searchTerm._id,
        practitionerId: UserId,
        token: token,
      })
    );
    dispatch(soapFormPatientData(searchTerm._id));
  };
  console.log("setFieldValue", setFieldValue);
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
  useEffect(() => {
    dispatch(getSearchPatient({ searchkey: nameV, token: token }));
  }, [nameV]);
  // useEffect(() => {
  //   dispatch(getDoctorShopFormDataAction({ patientId: soappatientId,/* practitionerId: UserId, */token: token }));
  // }, []);
  useEffect(() => {
    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      dispatch(
        getDoctorShopFormDataAction({
          patientId: patientSoapFormDetail.patientId,
          /* practitionerId: UserId,*/
          token: token,
        })
      );
    }
  }, [stepIndex]);

  return (
    <>
      <div className="patient-info">
        <SoftBox lineHeight={0}>
          <h2 style={{ textAlign: "center" }} fontWeight="bold">
            PATIENT INFORMATION
          </h2>
          <SoftTypography variant="button" fontWeight="regular" color="text">
            Mandatory informations
          </SoftTypography>
        </SoftBox>
        <br />
        <SoftBox mt={{ xs: 0, sm: 1 }}>
          <Grid container spacing={3} className={"mandatory-name-row-container"}>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Name"
                placeholder="Name"
                ref={emailRef}
                // className="otherlang1  name-span"
                name="name"
                value={nameV}
                onChange={formik.handleChange}
              />
              <div className="name_dropdown">
                {nameV &&
                  patientlist &&
                  patientlist.slice(0, 5).map((item, index) => (
                    <>
                      {item.name !== nameV && (
                        <div
                          className="dropdown_item_name"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            background: "#fff",
                            zIndex: "1080",
                            height: 55,
                            alignItems: "center",
                          }}
                          onClick={() => onSearch(item)}
                        >
                          <div>
                            {item.UserProfilePIC ? (
                              <>
                                <div style={{ marginRight: "10px", padding: "16px" }}>
                                  <img src={item.UserProfilePIC} height={40} width={40} />
                                </div>
                              </>
                            ) : (
                              <div style={{ marginRight: "10px", padding: "10px 5px 10px 15px" }}>
                                <AccountCircleIcon style={{ height: "35px", width: "35px" }} />
                              </div>
                            )}
                          </div>
                          <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", paddingTop: "6px"}}>
                            <SoftTypography
                              className="form2Name"
                              variant="button"
                              fontWeight="regular"
                              color="text"
                              // onClick={() => onSearch(item)}
                              key={index}
                            >
                              {item.name}
                            </SoftTypography>
                            <div style={{ cursor: "pointer" }}>
                              <SoftTypography
                                variant="button"
                                fontWeight="regular"
                                color="text"
                                // onClick={() => onSearch(item)}
                                key={index}
                              >
                                {item.email}
                              </SoftTypography>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
              </div>
              {!!usernameError && <span style={{ color: "red" }}>{usernameError}</span>}
            </Grid>
            <Grid item xs={12} sm={6} className="date-input-field-container">
              <span className="spanLabb">Todays Date</span>
              <input
                max={date}
                min={date}
                type="date"
                label="Date"
                className="form5date"
                name="todaydate"
                value={currentDate}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>

          <Grid mt={0} className="mandatory-dob-row-container" container spacing={3}>
            <Grid item xs={12} sm={3}>
              <span className="spanLabb" style={{ padding: "5px" }}>
                DOB
              </span>
              <input
                max={date}
                type="date"
                label="DOB"
                name="dob"
                value={dobV}
                onChange={formik.handleChange}
                //   onChange={(e) => setFieldValue("dob", e.target.value)}
                className="form5date"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormField
                //   type={height.type}
                label="Height"
                name="height"
                value={heightV}
                placeholder="height"
                onChange={formik.handleChange}
                error={errors.height && touched.height}
                success={heightV.length > 0 && !errors.height}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormField
                //   type={weight.type}
                label="Weight"
                name="weight"
                value={weightV}
                placeholder="weight"
                onChange={formik.handleChange}

              //   error={errors.weight && touched.weight}
              // success={weightV.length > 0 && !errors.weight}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <SoftBox mt={2} ml={0} lineHeight={0} display="block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Dominant Hand?
                </SoftTypography>
              </SoftBox>
              <SoftBox mt={1} ml={1.5} lineHeight={0} display="block">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="dominantHand"
                // value={dominantHandV}
                // onChange={handleChange}
                >
                  <FormControlLabel value="Left" control={<Radio />} label="Left" />
                  <FormControlLabel
                    // value={formik.values?.practitionerAndPatientDetails?.patientHtn}
                    //   value="Right"
                    control={<Radio />}
                    label="Right"
                  />
                </RadioGroup>
              </SoftBox>
            </Grid>
          </Grid>

          <Grid container spacing={3} className="mandatory-address-row-container">
            <Grid item xs={12} sm={6} className="topspace">
              <FormField
                //   type={address.type}
                label="address"
                name="address"
                value={addressV}
                placeholder="address"
                onChange={formik.handleChange}

              //   error={errors.address && touched.address}
              // success={addressV.length > 0 && !errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormField
                //   type={city.type}
                label="City"
                name="city"
                value={cityV}
                placeholder="city"
                onChange={formik.handleChange}

              //   error={errors.city && touched.city}
              // success={cityV.length > 0 && !errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <FormField
                //   type={zip.type}
                label="Zip"
                name="zip"
                value={zipV}
                onChange={formik.handleChange}

              //   placeholder={zip.placeholder}
              //   error={errors.zip && touched.zip}
              // success={pincodeV.length > 0 && !errors.zip}
              />
            </Grid>
          </Grid>
          <Grid className="mandatory-phone-row-container" container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SoftBox mb={0} ml={0} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                // mb={}
                >
                  Phone(cell)
                </SoftTypography>
              </SoftBox>
              <>
                {/* <FormField

                  label="Phone(cell)"
                  // className="stylet"
                  placeholder="Enter number"
                  name="Cellphonenumber1"
                  value={Cellphonenumber1V}
                  onChange={formik.handleChange}
                /> */}
                <PhoneInput
                  className="stylet"
                  placeholder="Enter number"
                  name="Cellphonenumber1"
                  value={Cellphonenumber1V}
                  // label="Phone (Cell)"

                  onChange={(value) => {
                    formik.setFieldValue("Cellphonenumber1", value);
                  }}
                // value={values.phonenumbrCellV}
                // inputProps ={{required: true}}
                />
                {/* {errors.Cellphonenumber1 && touched.Cellphonenumber1 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber1.errorMsg}
                        </small>
                      )}  */}
              </>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SoftBox mb={0} ml={0} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                // mb={5}
                >
                  Phone(other)
                </SoftTypography>
              </SoftBox>
              <>
                <PhoneInput
                  label="Phone(other)"
                  // className="stylet"
                  placeholder="Enter number"
                  name="phonenumbrWork"
                  value={phonenumbrWorkV}
                  onChange={(value) => {
                    formik.setFieldValue("phonenumbrWork", value);
                  }}

                // onChange={(value) => {
                //   setFieldValue("Workphonenumber", value);
                // }}
                // value={values.Workphonenumber}
                // inputProps ={{required: true}}
                />
                {/* {errors.Workphonenumber && touched.Workphonenumber && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Workphonenumber.errorMsg}
                        </small>
                      )} */}
              </>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="mandatory-email-row-container">
            <Grid item xs={12} sm={8} className="topspace">
              <FormField
                //   type={email.type}
                label="Email"
                name="email"
                value={emailV}
                placeholder="email"
                onChange={formik.handleChange}

              //   error={errors.email && touched.email}
              // success={emailV.length > 0 && !errors.email}
              />
              {/* <div className="dropdown" style={{}}>
                {emailV &&
                  patientlist &&
                  patientlist.slice(0, 5).map((item, index) => (
                    <>
                      {
                        item.email !== emailV && (
                          <div style={{ marginLeft: "10px" }}>
                            <SoftTypography
                              variant="button"
                              fontWeight="regular"
                              color="text"
                              onClick={() => onSearch(item)}
                              key={index}
                            >
                              {item.email}
                            </SoftTypography>
                          </div>
                        )
                        // <div
                        //   onClick={() => onSearch(item)}
                        //   key={index}
                        // >
                        //   {item.email}
                        // </div>
                      }
                    </>
                  ))}
              </div> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormField
                //   type={DL.type}
                label="Driver’s License #"
                name="dl"
                value={dlV}
                placeholder="Driver’s License #"
                onChange={formik.handleChange}

              //   error={errors.DL && touched.DL}
              // success={DLV.length > 0 && !errors.language}
              />
            </Grid>
          </Grid>

          {/* <hr style={{ borderTop: "1px solid #bbb" }}></hr>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormField
                // type={HealthInsurancecompany.type}
                label="Health Insurance company"
                name="health"
                value={healthV}
                placeholder="HealthInsurancecompany"
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
          </Grid> */}

          {/* <Grid container spacing={3}>
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
                label="zip"
                name="zip1"
                value={zip1V}
                placeholder="zip"
                onChange={formik.handleChange}

              // error={errors.zip1 && touched.zip1}
              // success={pincodeV.length > 0 && !errors.zip1}
              />
            </Grid>
          </Grid> */}
        </SoftBox>
      </div>
    </>
  );
}
Mandatory.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  usernameError: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,

  setUserNameError: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Mandatory;
