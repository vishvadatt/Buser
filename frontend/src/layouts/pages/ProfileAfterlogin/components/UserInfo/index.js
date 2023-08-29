// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// NewUser page components
import FormField from "layouts/pages/ProfileAfterlogin/components/FormField";

import React, { useState, useEffect } from "react";

import selectData from "./data/selectData";
import SoftSelect from "components/SoftSelect";
import SoftAvatar from "components/SoftAvatar";

import styled from "styled-components";

const media = {
  tab: "@media(max-width:940px)",
  miniTab: "@media(max-width:620px)",
  mobile: "@media(max-width:470px)",
};
function UserInfo({ formData }) {
  const { formField, values, errors, touched, setFieldValue } = formData;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const {
    firstName,
    lastName,
    company,
    // email,
    language,
    MaritalStatus,

    gender,
    DOB,
    SocialSecurityNumber,
    NumberofChildren,
    Occupation,
    UserWorkHours,
    Workphonenumber,
    Cellphonenumber,
  } = formField;

  const {
    firstName: firstNameV,
    lastName: lastNameV,
    company: companyV,

    DOB: DOBV,
    SocialSecurityNumber: SocialSecurityNumberV,
    NumberofChildren: NumberofChildrenV,
    Occupation: OccupationV,
    UserWorkHours: UserWorkHoursV,
  } = values;


  // console.log("values", values);

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          About me
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory information
        </SoftTypography>
      </SoftBox>
      <br />
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={4} lg={4}></Grid>
          <Grid item xs={4} sm={4} lg={4} className="paddingLeftClass">
            <ImageLabel htmlfor="image" style={{ marginLeft: "-10px" }}>
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                  position="absolute"
                  mt={-7}
                  ml={2.5}
                >
                  Profile Picture
                </SoftTypography>
              </SoftBox>
              {values.UserProfilePIC ? (
                <SoftAvatar src={values.UserProfilePIC} alt="" size="xl" />
              ) : (
                <SoftAvatar
                  alt=""
                  variant="rounded"
                  size="xl"
                  style={{ color: "grey", border: "2px" }}
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
          <Grid item xs={4} sm={4} lg={4}></Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={firstName.type}
              label={firstName.label}
              name={firstName.name}
              value={firstNameV}
              placeholder={firstName.placeholder}
              error={errors.firstName && touched.firstName}
              success={firstNameV.length > 0 && !errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={lastName.type}
              label={lastName.label}
              name={lastName.name}
              value={lastNameV}
              placeholder={lastName.placeholder}
              error={errors.lastName && touched.lastName}
              success={lastNameV.length > 0 && !errors.lastName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={company.type}
              label={company.label}
              name={company.name}
              value={companyV}
              placeholder={company.placeholder}
              error={errors.company && touched.company}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="Email"
              name="email"
              value={}
              // placeholder={email.placeholder}
              // error={errors.email && touched.email}
              // success={emailV.length > 0 && !errors.email}
            />
          </Grid> */}

          <Grid item xs={12} sm={6}>
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
              type={language.type}
              name="language"
              error={errors.language && touched.language}
              errorMsg={language.errorMsg}
              // value={genderV}
              options={selectData.language}
              onChange={(e) => {
                setFieldValue("language", e.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
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
              type={gender.type}
              name="gender"
              error={errors.gender && touched.gender}
              errorMsg={gender.errorMsg}
              // value={genderV}
              options={selectData.gender}
              onChange={(e) => {
                setFieldValue("gender", e.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
              type={MaritalStatus.type}
              name="gender"
              error={errors.MaritalStatus && touched.MaritalStatus}
              errorMsg={MaritalStatus.errorMsg}
              // value={genderV}
              placeholder={MaritalStatus.placeholder}
              options={selectData.MaritalStatus}
              onChange={(e) => {
                setFieldValue("MaritalStatus", e.value);
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
                // mb={5}
              >
                Cell Phone Number
              </SoftTypography>
            </SoftBox>
            <>
              <PhoneInput
                className="stylet"
                placeholder="Enter number"
                onChange={(value) => {
                  setFieldValue("Cellphonenumber", value);
                }}
                // inputProps ={{required: true}}
              />
              {errors.Cellphonenumber && touched.Cellphonenumber && (
                <small style={{ color: "red", fontSize: 12, fontFamily: "inherit" }}>
                  {Cellphonenumber.errorMsg}
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
                Work Phone Number
              </SoftTypography>
            </SoftBox>
            <>
              <PhoneInput
                className="stylet"
                placeholder="Enter number"
                onChange={(value) => {
                  setFieldValue("Workphonenumber", value);
                }}
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
          <Grid item xs={12} sm={6}>
            <FormField
              type={SocialSecurityNumber.type}
              label={SocialSecurityNumber.label}
              name={SocialSecurityNumber.name}
              value={SocialSecurityNumberV}
              placeholder={SocialSecurityNumber.placeholder}
              error={errors.SocialSecurityNumber && touched.SocialSecurityNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              error={errors.DOB && touched.DOB}
              type={DOB.type}
              label={DOB.label}
              name={DOB.name}
              value={DOBV}
              // success={DOBV.length > 0 && !errors.DOB}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={NumberofChildren.type}
              label={NumberofChildren.label}
              name={NumberofChildren.name}
              value={NumberofChildrenV}
              placeholder={NumberofChildren.placeholder}
              error={errors.NumberofChildren && touched.NumberofChildren}
              success={NumberofChildrenV.length > 0 && !errors.NumberofChildren}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={Occupation.type}
              label={Occupation.label}
              name={Occupation.name}
              value={OccupationV}
              placeholder={Occupation.placeholder}
              error={errors.Occupation && touched.Occupation}
              // success={languageV.length > 0 && !errors.language}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={UserWorkHours.type}
              label={UserWorkHours.label}
              name={UserWorkHours.name}
              value={UserWorkHoursV}
              placeholder={UserWorkHours.placeholder}
              error={errors.UserWorkHours && touched.UserWorkHours}
              // success={languageV.length > 0 && !errors.language}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
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
