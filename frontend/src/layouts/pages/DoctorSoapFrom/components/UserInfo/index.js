// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { Divider, Radio } from "@mui/material";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// NewUser page components
import FormField from "layouts/pages/DoctorSoapFrom/components/FormField/index";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SoftButton from "components/SoftButton";
import { clientIntakeFormCreate } from "store/actions/actions";
import initialValues from "../../schemas/initialValues";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  RadioGroup,
} from "@mui/material";
import { getSearchPatient, soapFormPatientData } from "../../../../../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import NextButton from "../../NextButton";
import { Formik } from "formik";
import {
  patientsoapdata,
  getDoctorShopFormDataAction,
  doctorShopFromDetails,
  doctorShopFormDataAction,
} from "../../../../../store/actions/actions";

const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function PatientInfo({ formData, stepIndex, setActiveStep }) {
  console.log("initialValues", initialValues.initialValues1)
  const initialValue = initialValues.initialValues1;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const [dominantHandData, setDominantHandData] = useState([]);
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  const doctorShopFromDetails = useSelector((state) => state.auth.doctorShopForm?.page1);
  console.log("detauiawd", doctorShopFromDetails)
  // const [searchKey,setSearchKey] = useState()
  console.log("Id'stest", soappatientId);
  let date = new Date().toLocaleDateString("en-CA");

  const handleDominantHandChange = (event) => {
    const index = dominantHandData.indexOf(event.target.value);
    if (index === -1) {
      setDominantHandData([...dominantHandData, event.target.value]);
    } else {
      setDominantHandData(dominantHandData.filter((hand) => hand !== event.target.value));
    }
  };
  const { handleChange, formField, values, errors, touched, setFieldValue } = formData;

  console.log("handle", formData);

  const {
    firstName,
    name,
    TODAYDATE,
    DOB,
    dob,
    height,
    weight,
    dominantHand,
    address,
    city,
    zip,
    email,
    address1,
    city1,
    zip1,
    address2,
    city2,
    zip2,
    address3,
    city3,
    zip3,
    address4,
    city4,
    zip4,
    Agent,
    Phone2,
    Policy2,
    Claim,
    Medicalpaymentcoverage,
    Uninsuredmotoristcoverage,
    Lawfirmrepresent,
    Workphonenumber,
    Cellphonenumber,
    Cellphonenumber1,
    phonenumbrCell,
    Cellphonenumber4,
    Cellphonenumber3,
    Cellphonenumber2,
    Cellphonenumber0,
    CellphonenumberA,
    DL,
    HealthInsurancecompany,
    Policy,
    Phone,
    Adjuster,
    Phone1,
    Adjuster1,
    CarInsurancecompany,
    Lawyersname,
    Phone3,
    Patient,
    Insuredoncarpolicy,
    Dateforfirstsawanydoctor,
    Dateoflossaccident,
    Costofallmedicaltretmentsinceaccident,
    Howmuchincomeyoulost,
    Propertydamageofyourcar,
    NameofPersonalMD,
    Phone4,
    lastSectionName,
    lastSectionType,
    lastSectionPhone,
    lastSectionBill,
    lastSectionRecords,
  } = formField;

  const {
    firstName: firstNameV,
    name: nameV,
    TODAYDATE: TODAYDATEV,
    DOB: DOBV,
    dob: dobV,
    height: heightV,
    weight: weightV,
    dominantHand: dominantHandV,
    address: addressV,
    city: cityV,
    zip: zipV,
    pincode: pincodeV,
    email: emailV,
    lastName: lastNameV,
    company: companyV,
    Workphonenumber: WorkphonenumberV,
    Cellphonenumber: CellphonenumberV,
    Cellphonenumber1: Cellphonenumber1V,
    phonenumbrCell: phonenumbrCellV,
    Cellphonenumber4: Cellphonenumber4V,
    Cellphonenumber3: Cellphonenumber3V,
    Cellphonenumber2: Cellphonenumber2V,
    Cellphonenumber0: Cellphonenumber0V,
    CellphonenumberA: CellphonenumberAV,
    SocialSecurityNumber: SocialSecurityNumberV,
    NumberofChildren: NumberofChildrenV,
    Occupation: OccupationV,
    UserWorkHours: UserWorkHoursV,
    DL: DLV,
    address1: address1V,
    city1: city1V,
    zip1: zip1V,
    address2: address2V,
    city2: city2V,
    zip2: zip2V,
    HealthInsurancecompany: HealthInsurancecompanyV,
    Policy: PolicyV,
    Phone: PhoneV,
    Adjuster: AdjusterV,
    Phone1: Phone1V,
    Adjuster1: Adjuster1V,
    CarInsurancecompany: CarInsurancecompanyV,
    Agent: AgentV,
    Phone2: Phone2V,
    Policy2: Policy2V,
    Claim: ClaimV,
    Medicalpaymentcoverage: MedicalpaymentcoverageV,
    Uninsuredmotoristcoverage: UninsuredmotoristcoverageV,
    Lawfirmrepresent: LawfirmrepresentV,
    address3: address3V,
    city3: city3V,
    zip3: zip3V,
    Lawyersname: LawyersnameV,
    Phone3: Phone3V,
    Insuredoncarpolicy: InsuredoncarpolicyV,
    Patient: PatientV,
    Dateforfirstsawanydoctor: DateforfirstsawanydoctorV,
    Dateoflossaccident: DateoflossaccidentV,
    Costofallmedicaltretmentsinceaccident: CostofallmedicaltretmentsinceaccidentV,
    Howmuchincomeyoulost: HowmuchincomeyoulostV,
    Propertydamageofyourcar: PropertydamageofyourcarV,
    NameofPersonalMD: NameofPersonalMDV,
    Phone4: Phone4V,
    address4: address4V,
    city4: city4V,
    zip4: zip4V,
    lastSectionName: lastSectionNameV,
    lastSectionType: lastSectionTypeV,
    lastSectionPhone: lastSectionPhoneV,
    lastSectionBill: lastSectionBillV,
    lastSectionRecords: lastSectionRecordsV,
  } = values;
  console.log("values11111", nameV);
  // console.log("no values", Workphonenumber);

  console.log("multicheckboxvalues", DateoflossaccidentV, values);

  useEffect(() => {
    dispatch(getSearchPatient({ searchkey: nameV }));
  }, [nameV]);

  useEffect(() => {
    dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, practitionerId: UserId, token: token }));
  }, []);
  useEffect(() => {
    dispatch(getDoctorShopFormDataAction({ patientId: soappatientId, practitionerId: UserId, token: token }));
  }, [stepIndex]);

  const data = {
    firstName: firstNameV,
    name: nameV,
    TODAYDATE: TODAYDATEV,
    DOB: DOBV,
    dob: dobV,
    height: heightV,
    weight: weightV,
    dominantHand: dominantHandV,
    address: addressV,
    city: cityV,
    zip: zipV,
    pincode: pincodeV,
    email: emailV,
    lastName: lastNameV,
    company: companyV,
    Workphonenumber: WorkphonenumberV,
    Cellphonenumber: CellphonenumberV,
    Cellphonenumber1: Cellphonenumber1V,
    Cellphonenumber4: Cellphonenumber4V,
    Cellphonenumber3: Cellphonenumber3V,
    Cellphonenumber2: Cellphonenumber2V,
    Cellphonenumber0: Cellphonenumber0V,
    CellphonenumberA: CellphonenumberAV,
    SocialSecurityNumber: SocialSecurityNumberV,
    NumberofChildren: NumberofChildrenV,
    Occupation: OccupationV,
    UserWorkHours: UserWorkHoursV,
    DL: DLV,
    address1: address1V,
    city1: city1V,
    zip1: zip1V,
    address2: address2V,
    city2: city2V,
    zip2: zip2V,
    HealthInsurancecompany: HealthInsurancecompanyV,
    Policy: PolicyV,
    Phone: PhoneV,
    Adjuster: AdjusterV,
    Phone1: Phone1V,
    Adjuster1: Adjuster1V,
    CarInsurancecompany: CarInsurancecompanyV,
    Agent: AgentV,
    Phone2: Phone2V,
    Policy2: Policy2V,
    Claim: ClaimV,
    Medicalpaymentcoverage: MedicalpaymentcoverageV,
    Uninsuredmotoristcoverage: UninsuredmotoristcoverageV,
    Lawfirmrepresent: LawfirmrepresentV,
    address3: address3V,
    city3: city3V,
    zip3: zip3V,
    Lawyersname: LawyersnameV,
    Phone3: Phone3V,
    Insuredoncarpolicy: InsuredoncarpolicyV,
    Patient: PatientV,
    Dateforfirstsawanydoctor: DateforfirstsawanydoctorV,
    Dateoflossaccident: DateoflossaccidentV,
    Costofallmedicaltretmentsinceaccident: CostofallmedicaltretmentsinceaccidentV,
    Howmuchincomeyoulost: HowmuchincomeyoulostV,
    Propertydamageofyourcar: PropertydamageofyourcarV,
    NameofPersonalMD: NameofPersonalMDV,
    Phone4: Phone4V,
    address4: address4V,
    city4: city4V,
    zip4: zip4V,
    lastSectionName: lastSectionNameV,
    lastSectionType: lastSectionTypeV,
    lastSectionPhone: lastSectionPhoneV,
    lastSectionBill: lastSectionBillV,
    lastSectionRecords: lastSectionRecordsV,
  };
  console.log("data", data)
  const onSearch = (searchTerm) => {
    console.log("searchterm", searchTerm)
    // dispatch(patientsoapdata({patientId : searchTerm._id}))
    setFieldValue(name.name, searchTerm.name);
    dispatch(patientsoapdata({ patientId: searchTerm._id }));
    dispatch(getDoctorShopFormDataAction({ patientId: searchTerm._id, practitionerId: UserId, token: token }));
    dispatch(soapFormPatientData(searchTerm));
  };

  console.log("datattta", data, values);

  // const submit = () => {
  //   dispatch(
  //     doctorShopFormDataAction({
  //       practitionerId: UserId,
  //       patientId: soappatientId,
  //       page1: data,
  //     })
  //   );
  //   setActiveStep(stepIndex + 1);
  // }

  return (

    <SoftBox>

      <Formik
        initialValues={{ ...initialValue, ...doctorShopFromDetails }}
        enableReinitialize
        onSubmit={(values) => {
          console.log(
            "valuesdfahjgd", values
          )
          const data = {
            practitionerId: UserId,
            patientId: soappatientId,
            page1: values,
          }
          dispatch(
            doctorShopFormDataAction({
              data: data,
              token: token
            })
          );
          setActiveStep(stepIndex + 1);
        }}
      >
        {(formik) => {
          console.log("formik12", formik);
          const { values } = formik;
          return (
            <>
              <SoftBox lineHeight={0}>
                <h2 style={{ textAlign: "center" }} fontWeight="bold">
                  PATIENT INFORMATION
                </h2>
                <SoftTypography variant="button" fontWeight="regular" color="text">
                  Mandatory informations
                </SoftTypography>
              </SoftBox>
              <SoftBox mt={1.5}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>

                    <FormField
                      // type={firstName.type}
                      // label={firstName.label}
                      // name={firstName.name}
                      // value={firstNameV}
                      // placeholder={firstName.placeholder}
                      // error={errors.firstName && touched.firstName}
                      // success={firstNameV.length > 0 && !errors.firstName}
                      type={name.type}
                      label={name.label}
                      name={name.name}
                      value={values.name}
                      placeholder={name.placeholder}
                      error={errors.name && touched.name}
                      // success={nameV.length > 0 && !errors.name}/
                      onChange={formik.handleChange}

                    />
                    <div className="name_dropdown">
                      {nameV &&
                        patientlist &&
                        patientlist.slice(0, 5).map((item, index) => (
                          <>
                            {
                              item.name !== nameV && (
                                <div className="dropdown_item_name" style={{ display: "flex", flexDirection: "row" }}>
                                  <div>
                                    {item.UserProfilePIC ? (
                                      <>
                                        <div
                                          
                                          // style={{ marginLeft: "10px", marginTop: "9px" }}
                                          // className="profile-select"
                                          style={{ marginRight: "10px",padding: "16px", }}
                                        >
                                          <img src={item.UserProfilePIC} height={40} width={40} />
                                        </div>
                                      </>
                                    ) : (
                                      <div
                                        // style={{ marginLeft: "10px", marginTop: "9px" }}
                                        // className="profile-select"
                                        style={{ marginRight: "10px",padding: "16px", }}
                                      >
                                        <AccountCircleIcon
                                          style={{ fontSize: "20px", height: "45px", width: "45px" }}
                                        />
                                      </div>
                                    )}
                                  </div>
                                  <div style={{ marginTop: "-5px", cursor: "pointer" }}>
                                    <SoftTypography
                                      variant="button"
                                      fontWeight="regular"
                                      color="text"
                                      onClick={() => onSearch(item)}
                                      key={index}
                                    >
                                      {item.name}
                                    </SoftTypography>
                                    <div style={{ marginTop: "-10px", cursor: "pointer" }}>
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
                                  </div>
                                </div>
                              )
                            }
                          </>
                        ))}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <FormField
                error={errors.TODAYDATE && touched.TODAYDATE}
                type={TODAYDATE.type}
                label={TODAYDATE.label}
                name={TODAYDATE.name}
                value={TODAYDATEV}
                success={TODAYDATE.length > 0 && !errors.TODAYDATE}
                max={TODAYDATE.date}
                onChange={(e) => setFieldValue("TODAYDATE", e.target.value)}
              /> */}
                    <span className="spanLabb" >Todays Date</span>
                    <input

                      max={date}
                      min={date}
                      type="date"
                      label="Date"
                      name={TODAYDATE.name}
                      value={TODAYDATEV}
                      onChange={(e) => setFieldValue("TODAYDATE", e.target.value)}
                      className="form5date"
                    />
                  </Grid>
                </Grid>

                <Grid pt={2} container spacing={3}>
                  <Grid item xs={12} sm={3} className="dobb">

                    <span className="spanLabb" style={{ marginRight: "30px" }}>DOB</span>
                    <input
                      max={date}
                      type="date"
                      label="DOB"
                      name={dob.name}
                      value={dobV}
                      onChange={(e) => setFieldValue("dob", e.target.value)}
                      className="form5date"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <FormField
                      type={height.type}
                      label={height.label}
                      name={height.name}
                      value={heightV}
                      placeholder={height.placeholder}
                      error={errors.height && touched.height}
                    // success={heightV.length > 0 && !errors.height}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <FormField
                      type={weight.type}
                      label={weight.label}
                      name={weight.name}
                      value={weightV}
                      placeholder={weight.placeholder}
                      error={errors.weight && touched.weight}
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
                      {/* <FormControl>
                  <FormGroup>
                    <FormControlLabel
                      label="Left"
                      control={
                        <Checkbox
                          // value="left"
                          name=""
                          checked={dominantHandData.includes("left")}
                          onChange={handleDominantHandChange}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
                <FormControl>
                  <FormGroup>
                    <FormControlLabel
                      label="Right"
                      control={
                        <Checkbox
                          value="right"
                          checked={dominantHandData.includes("right")}
                          onChange={handleDominantHandChange}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl> */}
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="dominantHand"
                        value={dominantHandV}
                        onChange={handleChange}
                      >
                        <FormControlLabel value="Left" control={<Radio />} label="Left" />
                        <FormControlLabel
                          // value={formik.values?.practitionerAndPatientDetails?.patientHtn}
                          value="Right"
                          control={<Radio />}
                          label="Right"
                        />
                      </RadioGroup>
                    </SoftBox>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={address.type}
                      label={address.label}
                      name={address.name}
                      value={addressV}
                      placeholder={address.placeholder}
                      error={errors.address && touched.address}
                    // success={addressV.length > 0 && !errors.address}

                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormField
                      type={city.type}
                      label={city.label}
                      name={city.name}
                      value={cityV}
                      placeholder={city.placeholder}
                      error={errors.city && touched.city}
                    // success={cityV.length > 0 && !errors.city}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormField
                      type={zip.type}
                      label={zip.label}
                      name={zip.name}
                      value={zipV}
                      placeholder={zip.placeholder}
                      error={errors.zip && touched.zip}
                    // success={pincodeV.length > 0 && !errors.zip}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <SoftBox mb={1} ml={0.5} lineHeight={0} className="topspace" display="inline-block">
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
                      <PhoneInput
                        className="stylet"
                        placeholder="Enter number"
                        onChange={(value) => {
                          console.log("values", value);
                          setFieldValue("Cellphonenumber1", value);
                        }}
                        value={values.Cellphonenumber1}
                      // inputProps ={{required: true}}
                      />
                      {errors.Cellphonenumber1 && touched.Cellphonenumber1 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber1.errorMsg}
                        </small>
                      )}

                    </>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
                        className="stylet"
                        placeholder="Enter number"
                        onChange={(value) => {
                          setFieldValue("Workphonenumber", value);
                        }}
                        value={values.Workphonenumber}
                      // inputProps ={{required: true}}
                      />
                      {errors.Workphonenumber && touched.Workphonenumber && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Workphonenumber.errorMsg}
                        </small>
                      )}
                    </>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={8} className="topspace">
                    <FormField
                      type={email.type}
                      label={email.label}
                      name={email.name}
                      value={emailV}
                      placeholder={email.placeholder}
                      error={errors.email && touched.email}
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
                      type={DL.type}
                      label={DL.label}
                      name={DL.name}
                      value={DLV}
                      placeholder={DL.placeholder}
                      error={errors.DL && touched.DL}
                    // success={DLV.length > 0 && !errors.language}
                    />
                  </Grid>
                </Grid>
                <br />
                {/* <Divider variant="fullWidth" /> */}
                <hr style={{ borderTop: "1px solid #bbb" }}></hr>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      type={HealthInsurancecompany.type}
                      label={HealthInsurancecompany.label}
                      name={HealthInsurancecompany.name}
                      value={HealthInsurancecompanyV}
                      placeholder={HealthInsurancecompany.placeholder}
                      error={errors.HealthInsurancecompany && touched.HealthInsurancecompany}
                    // success={NumberofChildrenV.length > 0 && !errors.HealthInsurancecompany}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      type={Policy.type}
                      label={Policy.label}
                      name={Policy.name}
                      value={PolicyV}
                      placeholder={Policy.placeholder}
                      error={errors.Policy && touched.Policy}
                    // success={languageV.length > 0 && !errors.language}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      type={address1.type}
                      label={address1.label}
                      name={address1.name}
                      value={address1V}
                      placeholder={address1.placeholder}
                      error={errors.address1 && touched.address1}
                    // success={addressV.length > 0 && !errors.address1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormField
                      type={city1.type}
                      label={city1.label}
                      name={city1.name}
                      value={city1V}
                      placeholder={city1.placeholder}
                      error={errors.city1 && touched.city1}
                    // success={cityV.length > 0 && !errors.city1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormField
                      type={zip1.type}
                      label={zip1.label}
                      name={zip1.name}
                      value={zip1V}
                      placeholder={zip1.placeholder}
                      error={errors.zip1 && touched.zip1}
                    // success={pincodeV.length > 0 && !errors.zip1}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={Adjuster.type}
                      label={Adjuster.label}
                      name={Adjuster.name}
                      value={AdjusterV}
                      placeholder={Adjuster.placeholder}
                      error={errors.Adjuster && touched.Adjuster}
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

                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
                        className="stylet"
                        placeholder="Enter number"
                        onChange={(value) => {
                          setFieldValue("CellphonenumberA", value);
                        }}
                        value={values.CellphonenumberA}
                      // inputProps ={{required: true}}
                      />
                      {errors.CellphonenumberA && touched.CellphonenumberA && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {CellphonenumberA.errorMsg}
                        </small>
                      )}
                    </>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} className="topspace">
                    <FormField
                      type={CarInsurancecompany.type}
                      label={CarInsurancecompany.label}
                      name={CarInsurancecompany.name}
                      value={CarInsurancecompanyV}
                      placeholder={CarInsurancecompany.placeholder}
                      error={errors.CarInsurancecompany && touched.CarInsurancecompany}
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={address2.type}
                      label={address2.label}
                      name={address2.name}
                      value={address2V}
                      placeholder={address2.placeholder}
                      error={errors.address2 && touched.address2}
                    // success={address2V.length > 0 && !errors.address2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormField
                      type={city2.type}
                      label={city2.label}
                      name={city2.name}
                      value={city2V}
                      placeholder={city2.placeholder}
                      error={errors.city2 && touched.city2}
                    // success={city2V.length > 0 && !errors.city2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormField
                      type={zip2.type}
                      label={zip2.label}
                      name={zip2.name}
                      value={zip2V}
                      placeholder={zip2.placeholder}
                      error={errors.zip2 && touched.zip2}
                    // success={zip2V.length > 0 && !errors.zip2}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={Adjuster1.type}
                      label={Adjuster1.label}
                      name={Adjuster1.name}
                      value={Adjuster1V}
                      placeholder={Adjuster1.placeholder}
                      error={errors.Adjuster1 && touched.Adjuster1}
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
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
                        className="stylet"
                        placeholder="Enter number"
                        onChange={(value) => {
                          setFieldValue("Cellphonenumber0", value);
                        }}
                        value={values.Cellphonenumber0}
                      // inputProps ={{required: true}}
                      />
                      {errors.Cellphonenumber0 && touched.Cellphonenumber0 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber0.errorMsg}
                        </small>
                      )}
                    </>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={Agent.type}
                      label={Agent.label}
                      name={Agent.name}
                      value={AgentV}
                      placeholder={Agent.placeholder}
                      error={errors.Agent && touched.Agent}
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
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
                        className="stylet"
                        placeholder="Enter number"
                        onChange={(value) => {
                          setFieldValue("Cellphonenumber2", value);
                        }}
                        value={values.Cellphonenumber2}
                      // inputProps ={{required: true}}
                      />
                      {errors.Cellphonenumber2 && touched.Cellphonenumber2 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber2.errorMsg}
                        </small>
                      )}
                    </>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={Policy2.type}
                      label={Policy2.label}
                      name={Policy2.name}
                      value={Policy2V}
                      placeholder={Policy2.placeholder}
                      error={errors.Policy2 && touched.Policy2}
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      type={Claim.type}
                      label={Claim.label}
                      name={Claim.name}
                      value={ClaimV}
                      placeholder={Claim.placeholder}
                      error={errors.Claim && touched.Claim}
                    // success={PhoneV.length > 0 && !errors.language}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={Medicalpaymentcoverage.type}
                      label={Medicalpaymentcoverage.label}
                      name={Medicalpaymentcoverage.name}
                      value={MedicalpaymentcoverageV}
                      placeholder={Medicalpaymentcoverage.placeholder}
                      error={errors.Medicalpaymentcoverage && touched.Medicalpaymentcoverage}
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      type={Uninsuredmotoristcoverage.type}
                      label={Uninsuredmotoristcoverage.label}
                      name={Uninsuredmotoristcoverage.name}
                      value={UninsuredmotoristcoverageV}
                      placeholder={Uninsuredmotoristcoverage.placeholder}
                      error={errors.Uninsuredmotoristcoverage && touched.Uninsuredmotoristcoverage}
                    // success={PhoneV.length > 0 && !errors.language}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} className="topspace">
                    <FormField
                      type={Lawfirmrepresent.type}
                      label={Lawfirmrepresent.label}
                      name={Lawfirmrepresent.name}
                      value={LawfirmrepresentV}
                      placeholder={Lawfirmrepresent.placeholder}
                      error={errors.Lawfirmrepresent && touched.Lawfirmrepresent}
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={address3.type}
                      label={address3.label}
                      name={address3.name}
                      value={address3V}
                      placeholder={address3.placeholder}
                      error={errors.address3 && touched.address3}
                    // success={address3V.length > 0 && !errors.address3}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormField
                      type={city3.type}
                      label={city3.label}
                      name={city3.name}
                      value={city3V}
                      placeholder={city3.placeholder}
                      error={errors.city3 && touched.city3}
                    // success={city2V.length > 0 && !errors.city2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormField
                      type={zip3.type}
                      label={zip3.label}
                      name={zip3.name}
                      value={zip3V}
                      placeholder={zip3.placeholder}
                      error={errors.zip3 && touched.zip3}
                    // success={zip2V.length > 0 && !errors.zip2}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={7} className="topspace">
                    <FormField
                      type={Lawyersname.type}
                      label={Lawyersname.label}
                      name={Lawyersname.name}
                      value={LawyersnameV}
                      placeholder={Lawyersname.placeholder}
                      error={errors.Lawyersname && touched.Lawyersname}
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
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
                        className="stylet"
                        placeholder="Enter number"
                        onChange={(value) => {
                          setFieldValue("Cellphonenumber3", value);
                        }}
                        value={values.Cellphonenumber3}
                      // inputProps ={{required: true}}
                      />
                      {errors.Cellphonenumber3 && touched.Cellphonenumber3 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber3.errorMsg}
                        </small>
                      )}
                    </>
                  </Grid>
                </Grid>
                <br />
                {/* <Divider variant="fullWidth" /> */}
                <hr style={{ borderTop: "1px solid #bbb" }}></hr>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={8}>
                    <FormField
                      type={Insuredoncarpolicy.type}
                      label={Insuredoncarpolicy.label}
                      name={Insuredoncarpolicy.name}
                      value={InsuredoncarpolicyV}
                      placeholder={Insuredoncarpolicy.placeholder}
                      error={errors.Insuredoncarpolicy && touched.Insuredoncarpolicy}
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormField
                      type={Patient.type}
                      label={Patient.label}
                      name={Patient.name}
                      value={PatientV}
                      placeholder={Patient.placeholder}
                      error={errors.Patient && touched.Patient}
                    // success={PhoneV.length > 0 && !errors.language}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5} className="topspace">
                    <FormField
                      type={Dateoflossaccident.type}
                      label={Dateoflossaccident.label}
                      name={Dateoflossaccident.name}
                      value={DateoflossaccidentV}
                      placeholder={Dateoflossaccident.placeholder}
                      error={errors.Dateoflossaccident && touched.Dateoflossaccident}
                      onChange={(e) => setFieldValue("Dateoflossaccident", e.target.value)}
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                  <Grid item xs={12} sm={7}>
                    <FormField
                      type={Dateforfirstsawanydoctor.type}
                      label={Dateforfirstsawanydoctor.label}
                      name={Dateforfirstsawanydoctor.name}
                      value={DateforfirstsawanydoctorV}
                      placeholder={Dateforfirstsawanydoctor.placeholder}
                      error={errors.Dateforfirstsawanydoctor && touched.Dateforfirstsawanydoctor}
                    // success={PhoneV.length > 0 && !errors.language}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} className="topspace">
                    <FormField
                      type={Costofallmedicaltretmentsinceaccident.type}
                      label={Costofallmedicaltretmentsinceaccident.label}
                      name={Costofallmedicaltretmentsinceaccident.name}
                      value={CostofallmedicaltretmentsinceaccidentV}
                      placeholder={Costofallmedicaltretmentsinceaccident.placeholder}
                      error={
                        errors.Costofallmedicaltretmentsinceaccident &&
                        touched.Costofallmedicaltretmentsinceaccident
                      }
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} className="topspace">
                    <FormField
                      type={Howmuchincomeyoulost.type}
                      label={Howmuchincomeyoulost.label}
                      name={Howmuchincomeyoulost.name}
                      value={HowmuchincomeyoulostV}
                      placeholder={Howmuchincomeyoulost.placeholder}
                      error={errors.Howmuchincomeyoulost && touched.Howmuchincomeyoulost}
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} className="topspace">
                    <FormField
                      type={Propertydamageofyourcar.type}
                      label={Propertydamageofyourcar.label}
                      name={Propertydamageofyourcar.name}
                      value={PropertydamageofyourcarV}
                      placeholder={Propertydamageofyourcar.placeholder}
                      error={errors.Propertydamageofyourcar && touched.Propertydamageofyourcar}
                    // success={AdjusterV.length > 0 && !errors.Adjuster}
                    />
                  </Grid>
                </Grid>
                <br />
                {/* <Divider variant="fullWidth" /> */}
                <hr style={{ borderTop: "1px solid #bbb" }}></hr>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <FormField
                      type={NameofPersonalMD.type}
                      label={NameofPersonalMD.label}
                      name={NameofPersonalMD.name}
                      value={NameofPersonalMDV}
                      placeholder={NameofPersonalMD.placeholder}
                      error={errors.NameofPersonalMD && touched.NameofPersonalMD}
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
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
                        className="stylet"
                        placeholder="Enter number"
                        onChange={(value) => {
                          setFieldValue("Cellphonenumber4", value);
                        }}
                        value={values.Cellphonenumber4}
                      // inputProps ={{required: true}}
                      />
                      {errors.Cellphonenumber4 && touched.Cellphonenumber4 && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber4.errorMsg}
                        </small>
                      )}
                    </>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} className="topspace">
                    <FormField
                      type={address4.type}
                      label={address4.label}
                      name={address4.name}
                      value={address4V}
                      placeholder={address4.placeholder}
                      error={errors.address4 && touched.address4}
                    // success={addressV.length > 0 && !errors.address4}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <FormField
                      type={city4.type}
                      label={city4.label}
                      name={city4.name}
                      value={city4V}
                      placeholder={city4.placeholder}
                      error={errors.city4 && touched.city4}
                    // success={city4.length > 0 && !errors.city4}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormField
                      type={zip4.type}
                      label={zip4.label}
                      name={zip4.name}
                      value={zip4V}
                      placeholder={zip4.placeholder}
                      error={errors.zip4 && touched.zip4}
                    // success={pincodeV.length > 0 && !errors.zip4}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <SoftTypography
                      component="label"
                      variant="caption"
                      fontWeight="bold"
                    // textTransform="capitalize"
                    >
                      Write any Ambulance, Hospital, M.D, Chiropractor, Dentist, Acupuncturist, PT,
                      etc.,since accident
                    </SoftTypography>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <FormField
                      type={lastSectionName.type}
                      label={lastSectionName.label}
                      name={lastSectionName.name}
                      value={lastSectionNameV}
                      placeholder={lastSectionName.placeholder}
                      error={errors.lastSectionName && touched.lastSectionName}
                    // success={firstNameV.length > 0 && !errors.lastSectionName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormField
                      type={lastSectionType.type}
                      label={lastSectionType.label}
                      name={lastSectionType.name}
                      value={lastSectionTypeV}
                      placeholder={lastSectionType.placeholder}
                      error={errors.lastSectionType && touched.lastSectionType}
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
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
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
                        className="stylet"
                        placeholder="Enter number"
                        onChange={(value) => {
                          setFieldValue("Cellphonenumber", value);
                        }}
                        value={values.Cellphonenumber}
                      // inputProps ={{required: true}}
                      />
                      {errors.Cellphonenumber && touched.Cellphonenumber && (
                        <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                          {Cellphonenumber.errorMsg}
                        </small>
                      )}
                    </>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormField
                      type={lastSectionBill.type}
                      label={lastSectionBill.label}
                      name={lastSectionBill.name}
                      value={lastSectionBillV}
                      placeholder={lastSectionBill.placeholder}
                      error={errors.lastSectionBill && touched.lastSectionBill}
                    // success={lastSectionBillV.length > 0 && !errors.lastSectionBill}
                    />
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <FormField
                      type={lastSectionRecords.type}
                      label={lastSectionRecords.label}
                      name={lastSectionRecords.name}
                      value={lastSectionRecordsV}
                      placeholder={lastSectionRecords.placeholder}
                      error={errors.lastSectionRecords && touched.lastSectionRecords}
                    // success={lastSectionRecordsV.length > 0 && !errors.lastSectionRecords}
                    />
                  </Grid>
                </Grid>
                <div style={{ float: "right", marginTop: "26px" }}>
                  <SoftButton
                    // className="nx"
                    type="submit"
                    variant="gradient"
                    color="dark"
                    onClick={formik.handleChange}
                  >
                    Next
                  </SoftButton>
                </div>
              </SoftBox>
            </>
          )
        }}
      </Formik>
    </SoftBox>


  );
}

// typechecking props for PatientInfo
PatientInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setActiveStep: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default PatientInfo;
const Label = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 700;
    ${media.miniTab} {
      font-size: 16px;
    }
    ${media.mobile} {
      font-size: 15px;
    }
  `;
const ImageLabel = styled(Label)`
    justify-content: center;
    display: flex;

    height: 100px;
    cursor: pointer;
    align-items: center;
    gap: 20px;
    padding-bottom: 10px;
  `;

const Preview = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50px;
  `;

const LabelButton = styled(Label)`
    justify-content: center;
  `;

const Input = styled.input`
    display: none;
    visibility: hidden;
    height: 40px;
    width: 350px;
    font-weight: 700;
    padding: 5px;
    font-size: 17px;
    ${media.miniTab} {
      width: 250px;
      font-size: 15px;
    }
    ${media.mobile} {
      width: 200px;
    }
  `;
