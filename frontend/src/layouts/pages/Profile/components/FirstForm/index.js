import { Card, Grid, Switch } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftSnackbar from "components/SoftSnackbar";
import SoftTypography from "components/SoftTypography";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearMessage } from "store/actions/actions";
import { popupAction } from "store/actions/actions";
import "./style.css";
import * as Yup from "yup";
import FormField from "../FormField";
import selectData from "./data/selectData";
import SoftSelect from "components/SoftSelect";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { Country, State, City } from "country-state-city";
// import csc from "country-state-city";
import { PhotoProvider, PhotoView } from "react-photo-view";

import SoftAvatar from "components/SoftAvatar";

import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import SoftDropzoneRoot from "components/SoftDropzone/SoftDropzoneRoot";
window.Buffer = window.Buffer || require("buffer").Buffer;
const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
import "react-photo-view/dist/react-photo-view.css";
import { CleaningServicesSharp } from "@mui/icons-material";
import { db } from "../../../../../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";

function FirstForm() {
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const userType = useSelector((state) => state.auth.auth.userType);
  const navigate = useNavigate();
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const [available, setAvailable] = useState(true);
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const userdata = useSelector((state) => state.auth.auth.userdata);

  var dateOffset = 24 * 60 * 60 * 1000 * 1;
  var myDate = new Date();
  myDate.setTime(myDate.getTime() - dateOffset);

  function updateProfile() {
    try {
      const docRef = doc(db, "users", UserId);
      console.log(UserId);
      updateDoc(docRef, {
        available: !available,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (userdata.available) {
      setAvailable(userdata.available);
    } else {
      setAvailable(false);
    }
  }, [userdata]);

  let validate = Yup.object().shape({
    firstName: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("first name is required")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    Occupation: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid Occupation")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    lastName: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("last name is required")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    DOB: Yup.date()
      // .min(new Date("01-01-1900"), "You Cannot Enter Below 1900 DOB Date")
      .max(new Date(), "You Cannot Enter Future DOB Date"),
    startTime: Yup.string().required("time is required"),
    ClinicOpenDate: Yup.date().min(myDate, "You Cannot Enter Below Past Date"),
    // .max(new Date(), "You Cannot Enter Future DOB Date"),
    NumberofChildren: Yup.string().max(2, "enter valid number"),
    UserWorkHours: Yup.string().max(2, "max 2 digit of work hours"),

    address1: Yup.string()
      .trim()
      //.matches(/^[A-Za-z ]*$/, "Please enter valid address name")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    address2: Yup.string()
      .trim()
      //.matches(/^[A-Za-z ]*$/, "Please enter valid address name")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    EmergencyName: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),

    EmergencyRelation: Yup.string()
      .trim()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(25, "max 25 character")
      .min(1, "min 1 character"),
  });

  const handleZoomChange = async () => {
    const res = await axios.get("https://api.buserinstitute.com/api/zoom/getAuthCode");
    console.log(res, "Zoom api");
  };

  const handleAvailability = async () => {
    try {
      dispatch(
        popupAction({
          id: UserId,
          data: { available: !available },
          navigate,
          token,
          update: true,
        })
      );
      await updateProfile();
      setAvailable(!available);
    } catch (err) {
      setAvailable(!available);
      console.log(err);
    }
  };
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          About me
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory information
        </SoftTypography>
        {/* <div style={{ display: "grid", placeItems: "end" }}>
          {" "}
          <SoftButton onClick={() => handleZoomChange()}>Zoom</SoftButton>
        </div> */}
      </SoftBox>
      <Formik
        initialValues={{
          firstName: userdata.firstName,
          email: userdata.email,
          gender: userdata.gender,
          lastName: userdata.lastName,
          company: userdata.company,
          language: userdata.language,
          MaritalStatus: userdata.MaritalStatus,
          Cellphonenumber: userdata.Cellphonenumber,
          Workphonenumber: userdata.Workphonenumber,
          SocialSecurityNumber: userdata.SocialSecurityNumber,
          NumberofChildren: userdata.NumberofChildren,
          Occupation: userdata.Occupation,
          UserWorkHours: userdata.UserWorkHours,
          DOB: userdata.DOB,
          startTime: userdata.startTime,
          endTime: userdata.endTime,
          ClinicOpenDate: userdata.ClinicOpenDate,
          address1: userdata.address1,
          address2: userdata.address2,
          UserProfilePIC: userdata.UserProfilePIC,
          license: userdata.license,
          insurance: userdata.insurance,
          insurancecompany: userdata.insurancecompany,
          insuranceaccountno: userdata.insuranceaccountno,
          Insurancephonenumber: userdata.Insurancephonenumber,
          Insuranceaddress: userdata.Insuranceaddress,
          zip: userdata.zip,
          available: userdata.available,
          EmergencyName: userdata.EmergencyName,
          EmergencyRelation: userdata.EmergencyRelation,
          EmergencyPhoneNumber: userdata.EmergencyPhoneNumber,
          // city: userdata.city,
          // state: userdata.state

          country: userdata.country.name,
          state: userdata.state.name,
          city: userdata.city.name,
        }}
        validationSchema={validate}
      >
        {({ handleChange, touched, errors, values, setFieldValue, setValues }) => {
          // console.log("value..", values.Workphonenumber, "   ", userdata.Workphonenumber);
          // console.log("Country", Country.getAllCountries());
          const [countryData, setCountryData] = useState([]);
          const [stateData, setStateData] = useState([]);
          const [cityData, setCityData] = useState([]);
          const license = async (e) => {
            const formData = new FormData();
            formData.append("bucketName", "user-records");
            formData.append("document", e.target.files[0]);

            try {
              const res = await axios.post(
                `http://52.22.34.128/api/user/user-uploadDocument/${UserId}`,
                formData,
                {
                  headers: {
                    authorization: token,
                  },
                }
              );
              setFieldValue("license", res.data.data);
              console.log("as", res.data.data);
            } catch (error) {
              console.log("errror");
              return false;
            }
          };
          const insurance = async (e) => {
            console.log("insurance", e.target.files[0]);
            const formData = new FormData();
            formData.append("bucketName", "user-records");
            formData.append("document", e.target.files[0]);

            try {
              const res = await axios.post(
                `http://52.22.34.128/api/user/user-uploadDocument/${UserId}`,
                formData,
                {
                  headers: {
                    authorization: token,
                  },
                }
              );
              setFieldValue("insurance", res.data.data);
              console.log("as", res.data.data);
            } catch (error) {
              console.log("errror");
              return false;
            }
          };
          const getCountrys = useCallback(async () => {
            var config = {
              method: "get",
              url: "https://api.countrystatecity.in/v1/countries",
              headers: {
                "X-CSCAPI-KEY": "anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw==",
              },
            };

            const response = await axios(config);
            const getCountryData = response.data;
            const updatedCountries = getCountryData.map((country) => ({
              label: country.name,
              value: country.id,
              ...country,
            }));
            setCountryData(updatedCountries);
          });

          useEffect(() => {
            getCountrys();
          }, []);

          const updatedStates = useCallback(
            async (country) => {
              var config = {
                method: "get",
                url: `https://api.countrystatecity.in/v1/countries/${country?.iso2}/states`,
                headers: {
                  "X-CSCAPI-KEY": "anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw==",
                },
              };

              const response = await axios(config);
              const getStatesOfCountry = response.data;
              return getStatesOfCountry?.map((state) => ({
                label: state.name,
                value: state.id,
                ...state,
              }));
            },
            [countryData]
          );

          const updatedCities = useCallback(
            async (countryCode, StateCode) => {
              var config = {
                method: "get",
                url: `https://api.countrystatecity.in/v1/countries/${countryCode?.iso2}/states/${StateCode?.iso2}/cities`,
                headers: {
                  "X-CSCAPI-KEY": "anhvY3BHazdnbTkzSHo0ZmNsOXZHQkk0TGJEbVNwb0ZCYjZPbVEwcw==",
                },
              };

              const response = await axios(config);
              const countryDataOdState = response.data;
              return countryDataOdState.map((city) => ({
                label: city.name,
                value: city.id,
                ...city,
              }));
            },
            [stateData]
          );

          // useEffect(() => {
          //   // const countries = Country.getAllCountries();
          //   const countries = csc?.getAllCountries();
          //   const updatedCountries = countries.map((country) => ({
          //     label: country.name,
          //     value: country.id,
          //     ...country,
          //   }));
          //   setCountryData(updatedCountries);
          // },[]);

          // const updatedStates = useCallback((countryId) =>{
          //   return csc?.getStatesOfCountry(countryId).map((state) => ({
          //     label: state.name,
          //     value: state.id,
          //     ...state,
          //   }))
          // },[countryData]);

          // const updatedCities = useCallback((stateId) =>{
          //   return csc?.getCitiesOfState(stateId?.id).map((city) => ({
          //     label: city.name,
          //     value: city.id,
          //     ...city,
          //   }))
          // },[stateData]);

          return (
            <>
              <SoftBox mt={1.625}>
                <Grid container spacing={0}>
                  <Grid item xs={4} sm={4} lg={4}></Grid>
                  <Grid item xs={4} sm={4} lg={4} className="paddingLeftClass">
                    <ImageLabel htmlfor="image" style={{ marginLeft: "-10px" }}>
                      <SoftBox mb={3} ml={0.5} lineHeight={0} display="inline-block">
                        <SoftTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                          textTransform="capitalize"
                          position="absolute"
                          mt={-5}
                          ml={2.5}
                        >
                          Profile Picture
                        </SoftTypography>
                      </SoftBox>
                      {values.UserProfilePIC ? (
                        <SoftAvatar src={values.UserProfilePIC} alt="" size="xl" />
                      ) : (
                        <SoftAvatar
                          src={values.UserProfilePIC}
                          alt=""
                          variant="rounded"
                          size="xl"
                          style={{ color: "grey", border: "2px", marginTop: "15px" }}
                        />
                      )}
                      <Input
                        onChange={(e) => {
                          const files = e.target.files;
                          let reader = new FileReader();
                          reader.readAsDataURL(files[0]);

                          reader.onload = (e) => {
                            setFieldValue("UserProfilePIC", e.target.result);
                          };
                        }}
                        type="file"
                        name="image"
                        id="image"
                        label="Profile Picture"
                      />
                    </ImageLabel>
                  </Grid>
                  {/* {userType === "doctor" && (
                    <Grid item xs={4} sm={4} lg={4}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                          flexDirection: "column",
                        }}
                      >
                        Available:
                        <Switch checked={available} onChange={handleAvailability} />
                      </div>
                    </Grid>
                  )} */}
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="first name"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      errorMsg
                      error={errors.firstName && touched.firstName}
                      success={values.firstName.length > 0 && !errors.firstName}
                    />
                    {/* {console.log("values", errors )}  */}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="last Name"
                      name="lastName"
                      placeholder="name"
                      value={values.lastName}
                      onChange={handleChange}
                      errorMsg
                      error={errors.lastName && touched.lastName}
                      success={values.lastName.length > 0 && !errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="company"
                      name="company"
                      placeholder="eg. Creative Tim"
                      value={values.company}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        Language
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      // value={values.gender}
                      placeholder={values.language}
                      options={selectData.language}
                      onChange={(e) => setFieldValue("language", e.value)}
                    />
                  </Grid>
                </Grid>
                <Grid mt={0.5} container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="email"
                      name="email"
                      placeholder="email"
                      value={values.email}
                      onChange={handleChange}
                      errorMsg
                      error={errors.email && touched.email}
                      success={values.email.length > 0 && !errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        Cell Phone Number
                      </SoftTypography>
                    </SoftBox>
                    <PhoneInput
                      className="stylet"
                      placeholder="Enter number"
                      value={values.Cellphonenumber}
                      onChange={(e) => {
                        console.log("e..", e);
                        setFieldValue("Cellphonenumber", e);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="number"
                      label="Social Security Number"
                      name="SocialSecurityNumber"
                      value={values.SocialSecurityNumber}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        Work Phone Number
                      </SoftTypography>
                    </SoftBox>
                    <PhoneInput
                      className="stylet"
                      placeholder="Enter number"
                      value={values.Workphonenumber}
                      onChange={(e) => {
                        setFieldValue("Workphonenumber", e);
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid mt={0.5} container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="number"
                      label="Number of Children"
                      name="NumberofChildren"
                      value={values.NumberofChildren}
                      onChange={handleChange}
                      errorMsg
                      error={errors.NumberofChildren && touched.NumberofChildren}
                      success={values.NumberofChildren.length > 0 && !errors.NumberofChildren}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="Occupation"
                      name="Occupation"
                      value={values.Occupation}
                      onChange={handleChange}
                      errorMsg
                      error={errors.Occupation && touched.Occupation}
                      success={values.Occupation.length > 0 && !errors.Occupation}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="number"
                      label="Work Hours"
                      name="UserWorkHours"
                      value={values.UserWorkHours}
                      onChange={handleChange}
                      errorMsg
                      error={errors.UserWorkHours && touched.UserWorkHours}
                      success={values.UserWorkHours.length > 0 && !errors.UserWorkHours}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                    <FormField
                      type="date"
                      label="DOB"
                      name="DOB"
                      value={values.DOB}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Grid mt={0} container spacing={3}>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        gender
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      // value={values.gender}
                      placeholder={values.gender}
                      options={selectData.gender}
                      onChange={(e) => setFieldValue("gender", e.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} mt={0} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        Marital Status
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      // value={values.gender}
                      placeholder={values.MaritalStatus}
                      options={selectData.MaritalStatus}
                      onChange={(e) => setFieldValue("MaritalStatus", e.value)}
                    />
                  </Grid>
                  {userType === "doctor" ? (
                    <>
                      {" "}
                      <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                        <FormField
                          type="time"
                          label="Start Time"
                          name="startTime"
                          value={values.startTime}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                        <FormField
                          type="time"
                          label="End Time"
                          name="endTime"
                          value={values.endTime}
                          onChange={handleChange}
                        />
                      </Grid>

                      {/* <Grid item xs={12} sm={6} lg={3} className="paddingClass">
                        <FormField
                          type="date"
                          label="Clinic Open Date"
                          name="ClinicOpenDate"
                          value={values.ClinicOpenDate}
                          onChange={handleChange}
                        />
                      </Grid> */}
                    </>
                  ) : (
                    ""
                  )}
                  {/* document upload */}
                  {userType === "doctor" ? (
                    <>
                      <Grid item xs={12} sm={5} className="paddingClass">
                        <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SoftTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            License
                          </SoftTypography>
                        </SoftBox>
                        <div className="d-flex">
                          <SoftDropzoneRoot
                            component="form"
                            action="/file-upload"
                            // ref={dropzoneRef}
                            className="form-control dropzone"
                            mb={2}
                          >
                            <SoftBox ml={1}>
                              <SoftBox
                                component="input"
                                name="license"
                                type="file"
                                onChange={license}
                                accept="image/png, image/jpeg, image/jpg"
                              />
                            </SoftBox>
                          </SoftDropzoneRoot>
                        </div>
                        {userdata.license ? (
                          <>
                            <Card>
                              <PhotoProvider>
                                <PhotoView src={userdata.license}>
                                  <img
                                    src={userdata.license}
                                    alt="license"
                                    height="200px"
                                    width="auto"
                                  />
                                </PhotoView>
                              </PhotoProvider>
                            </Card>
                          </>
                        ) : (
                          ""
                        )}
                        {/* <img src={userdata.license} alt="license" height="100px" width="100px" /> */}
                      </Grid>

                      {/* <Grid item xs={12} sm={4} className="paddingClass">
                        <div>
                          <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                            <SoftTypography
                              component="label"
                              variant="caption"
                              fontWeight="bold"
                              textTransform="capitalize"
                            >
                              Copy of Insurance Card
                            </SoftTypography>
                          </SoftBox>
                          <SoftDropzoneRoot
                            component="form"
                            action="/file-upload"
                            // ref={dropzoneRef}
                            className="form-control dropzone"
                            mb={2}
                          >
                            <SoftBox ml={1}>
                              <SoftBox
                                component="input"
                                name="insurance"
                                type="file"
                                onChange={insurance}
                                accept="image/png, image/jpeg, image/jpg"
                              />
                            </SoftBox>
                          </SoftDropzoneRoot>
                        </div>
                        {userdata.insurance ? (
                          <>
                            <Card>
                              <PhotoProvider>
                                <PhotoView src={userdata.insurance}>
                                  <img
                                    src={userdata.insurance}
                                    alt="insurance"
                                    height="200px"
                                    width="auto"
                                  />
                                </PhotoView>
                              </PhotoProvider>
                            </Card>
                          </>
                        ) : (
                          ""
                        )}
                      </Grid> */}
                    </>
                  ) : userType === "student" ? (
                    <>
                      <Grid item xs={12} sm={5} className="paddingClass">
                        <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                          <SoftTypography
                            component="label"
                            variant="caption"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            License
                          </SoftTypography>
                        </SoftBox>
                        <div className="d-flex">
                          <SoftDropzoneRoot
                            component="form"
                            action="/file-upload"
                            // ref={dropzoneRef}
                            className="form-control dropzone"
                            mb={2}
                          >
                            <SoftBox ml={1}>
                              <SoftBox
                                component="input"
                                name="license"
                                type="file"
                                onChange={license}
                                accept="image/png, image/jpeg, image/jpg"
                              />
                            </SoftBox>
                          </SoftDropzoneRoot>
                        </div>
                        {userdata.license ? (
                          <>
                            <Card>
                              <PhotoProvider>
                                <PhotoView src={userdata.license}>
                                  <img
                                    src={userdata.license}
                                    alt="license"
                                    height="200px"
                                    width="auto"
                                  />
                                </PhotoView>
                              </PhotoProvider>
                            </Card>
                          </>
                        ) : (
                          ""
                        )}
                      </Grid>
                    </>
                  ) : userType === "client" ? (
                    <></>
                  ) : (
                    ""
                  )}
                </Grid>
                {/* insurance section */}
                <SoftTypography mt={4} mb={3} variant="h5" fontWeight="bold">
                  Insurance Carrier
                </SoftTypography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={5} className="paddingClass">
                    <div>
                      <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                        <SoftTypography
                          component="label"
                          variant="caption"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          Copy of Insurance Card
                        </SoftTypography>
                      </SoftBox>
                      <SoftDropzoneRoot
                        component="form"
                        action="/file-upload"
                        // ref={dropzoneRef}
                        className="form-control dropzone"
                        mb={2}
                      >
                        <SoftBox ml={1}>
                          <SoftBox
                            component="input"
                            name="insurance"
                            type="file"
                            onChange={insurance}
                            accept="image/png, image/jpeg, image/jpg"
                          />
                        </SoftBox>
                      </SoftDropzoneRoot>
                    </div>
                    {userdata.insurance ? (
                      <>
                        <Card>
                          <PhotoProvider>
                            <PhotoView src={userdata.insurance}>
                              <img
                                src={userdata.insurance}
                                alt="insurance"
                                height="200px"
                                width="auto"
                              />
                            </PhotoView>
                          </PhotoProvider>
                        </Card>
                      </>
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid item xs={12} sm={3.5} className="paddingClass">
                    <FormField
                      type="text"
                      label="Insurance Comapny Name"
                      name="insurancecompany"
                      placeholder="Insurance Comapny Name"
                      value={values.insurancecompany}
                      onChange={handleChange}
                    />
                    <FormField
                      type="text"
                      label="Account Number"
                      name="insuranceaccountno"
                      placeholder="account Number"
                      value={values.insuranceaccountno}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3.5} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        Insurance Phone Number
                      </SoftTypography>
                    </SoftBox>

                    <PhoneInput
                      className="stylet"
                      placeholder="Enter number"
                      value={values.Insurancephonenumber}
                      onChange={(e) => {
                        console.log("e", e);
                        setFieldValue("Insurancephonenumber", e);
                      }}
                      style={{ marginBottom: "12px" }}
                    />
                    <FormField
                      type="text"
                      label="Insurance Address"
                      name="Insuranceaddress"
                      placeholder="Insurance Address"
                      value={values.Insuranceaddress}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <SoftTypography mt={4} variant="h5" fontWeight="bold">
                  Address
                </SoftTypography>
                <Grid mt={0.5} mb={5} container spacing={3}>
                  <Grid item xs={12} sm={6} className="paddingClass">
                    <FormField
                      type="text"
                      label="address 1:"
                      name="address1"
                      rows={2}
                      multiline
                      value={values.address1}
                      onChange={handleChange}
                      errorMsg
                      error={errors.address1 && touched.address1}
                      success={values.address1.length > 0 && !errors.address1}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="paddingClass">
                    <FormField
                      type="text"
                      label="address 2:"
                      name="address2"
                      rows={2}
                      multiline
                      value={values.address2}
                      onChange={handleChange}
                      errorMsg
                      error={errors.address2 && touched.address2}
                      success={values.address2.length > 0 && !errors.address2}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        Country
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      placeholder={values.country ? values.country : userdata.country}
                      options={countryData}
                      onChange={async (value) => {
                        setFieldValue("country", value);
                        let data = await updatedStates(value);
                        // let data = updatedStates(value?.value)
                        setStateData(data);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        State
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      placeholder={values.state ? values.state : userdata.state}
                      options={stateData}
                      onChange={async (value) => {
                        setFieldValue("state", value);
                        let data = await updatedCities(values?.country, value);
                        // let data = updatedCities(value)
                        setCityData(data);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        City
                      </SoftTypography>
                    </SoftBox>
                    <SoftSelect
                      placeholder={values.city ? values.city : userdata.city}
                      options={cityData}
                      onChange={(value) => setFieldValue("city", value)}
                    />
                  </Grid>
                </Grid>
                <SoftTypography mt={2} variant="h5" fontWeight="bold">
                  Emergency Contact Information:
                </SoftTypography>
                <Grid mt={0.5} container spacing={3}>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="Emergency Person Name"
                      name="EmergencyName"
                      value={values.EmergencyName}
                      onChange={handleChange}
                      errorMsg
                      error={errors.EmergencyName && touched.EmergencyName}
                      success={values.EmergencyName.length > 0 && !errors.EmergencyName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <FormField
                      type="text"
                      label="Emergency Person Relation"
                      name="EmergencyRelation"
                      value={values.EmergencyRelation}
                      onChange={handleChange}
                      errorMsg
                      error={errors.EmergencyRelation && touched.EmergencyRelation}
                      success={values.EmergencyRelation.length > 0 && !errors.EmergencyRelation}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} className="paddingClass">
                    <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                      <SoftTypography
                        component="label"
                        variant="caption"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        Emergency Phone Number
                      </SoftTypography>
                    </SoftBox>
                    <PhoneInput
                      className="stylet"
                      placeholder="Enter number"
                      value={values.EmergencyPhoneNumber}
                      onChange={(e) => {
                        setFieldValue("EmergencyPhoneNumber", e);
                      }}
                    />
                  </Grid>
                </Grid>
              </SoftBox>
              {/* )}
    </Formik>   */}
              <SoftBox my={2}>
                <SoftButton
                  component={Link}
                  to="/settings"
                  type="submit"
                  variant="gradient"
                  color="dark"
                  onClick={() => {
                    dispatch(
                      popupAction({
                        id: UserId,
                        data: { ...values, available },
                        navigate,
                        token,
                        update: true,
                      })
                    );
                  }}
                >
                  Update
                </SoftButton>
              </SoftBox>
            </>
          );
        }}
      </Formik>
      <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </SoftBox>
  );
}

export default FirstForm;
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
