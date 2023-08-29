import React from "react";
import { Grid } from "@mui/material";
import "../style.css";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import PropTypes from "prop-types";
import { Container } from "@mui/system";

function introPart({ formik, form, index }) {
  let date = new Date().toLocaleDateString("en-CA");
  const { values } = formik;
  const {
    prefreedLanguage: prefreedLanguageV,
    prefreedLanguageOther: prefreedLanguageOtherV,
    name: nameV,
    gender: genderV,
    genderOther: genderOtherV,
    address: addressV,
    city: cityV,
    state: stateV,
    zip: zipV,
    phonenumbrHome: phonenumbrHomeV,
    phonenumbrWork: phonenumbrWorkV,
    phonenumbrCell: phonenumbrCellV,
    email: emailV,
    dob: dobV,
    phonenumbrSocial: phonenumbrSocialV,
    maritialStatus: maritialStatusV,
    noofChildren: noofChildrenV,
    ocuupation: ocuupationV,
    hoursweek: hoursweekV,
    econtactName: econtactNameV,
    econtactPhoneno: econtactPhonenoV,
    econtactRelation: econtactRelationV,
  } = values?.page5[index];

  return (
    <>
      <Container>
        <SoftBox>
          <SoftBox>
            <Grid container style={{ marginLeft: "1rem" }}>
              <Grid item xs={12} lg={1} md={2} className="langPart">
                <p
                  style={{ fontSize: "16px", marginRight: "3rem", marginTop: "5px" }}
                  className="Language"
                >
                  Preferred Language:
                </p>
              </Grid>
              <Grid item lg={6}>
                <RadioGroup className="maritals" name="prefreedLanguage">
                  <Grid item xs={12} lg={2.5} md={3} className="martalspart">
                    <Radio
                      id="english"
                      value="english"
                      checked={prefreedLanguageV === "english"}
                      name={`page5[${index}].prefreedLanguage`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "14px" }}>English</span>
                  </Grid>
                  <Grid item xs={12} lg={2.5} md={3} className="martalspart">
                    <Radio
                      id="spanish"
                      value="spanish"
                      checked={prefreedLanguageV === "spanish"}
                      name={`page5[${index}].prefreedLanguage`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "14px" }}>Spanish</span>
                  </Grid>
                  <Grid item xs={12} lg={6} md={7} className="othergenderpart ">
                    <Radio
                      id="other"
                      value="other"
                      checked={prefreedLanguageV === "other"}
                      name={`page5[${index}].prefreedLanguage`}
                      onChange={formik.handleChange}
                    />
                    <span style={{ fontSize: "14px", marginRight: "0.5rem" }}>Other :</span>
                    <input
                      type="text"
                      className="otherlang"
                      onChange={formik.handleChange}
                      name={`page5[${index}].prefreedLanguageOther`}
                      label="prefreedLanguageOther"
                      value={prefreedLanguageOtherV}
                    />
                  </Grid>
                </RadioGroup>
              </Grid>
            </Grid>
          </SoftBox>

          <SoftBox lineHeight={0}>
            <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="10px">
              Personal Information
            </SoftTypography>
            <Grid container mt={1} ml={1}>
              <Grid item xs={12} lg={4} className="names">
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Name :</span>

                <input
                  type="text"
                  className="otherlang  name-span"
                  onChange={formik.handleChange}
                  name={`page5[${index}].name`}
                  value={nameV}
                />
              </Grid>
              <Grid item xs={12} lg={8} style={{ marginTop: "3px" }}>
                <Grid container>
                  <Grid item xs={12} lg={3} md={2} className="langPart">
                    <p style={{ fontSize: "16px", marginRight: "1rem", marginTop: "10px" }}>
                      Gender:
                    </p>
                  </Grid>
                  <RadioGroup className="maritals" name="gender">
                    <Grid item xs={12} lg={2} md={3} className="gender martalspart">
                      <Radio
                        id="male"
                        value="male"
                        checked={genderV === "male"}
                        name={`page5[${index}].gender`}
                        onChange={formik.handleChange}
                      />
                      <span style={{ fontSize: "16px" }}>Male</span>
                    </Grid>
                    <Grid item xs={12} lg={2.5} md={3} className="gender martalspart">
                      {/* <div className=""> */}
                      <Radio
                        id="female"
                        value="female"
                        checked={genderV === "female"}
                        name={`page5[${index}].gender`}
                        onChange={formik.handleChange}
                      />
                      <span style={{ fontSize: "16px" }}>Female</span>
                      {/* </div> */}
                    </Grid>
                    <Grid item xs={12} lg={5} md={12} className="gender othergenderpart ">
                      {/* <div className=""> */}
                      <Radio
                        id="other"
                        value="other"
                        checked={genderV === "other"}
                        name={`page5[${index}].gender`}
                        onChange={formik.handleChange}
                      />
                      <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Other :</span>
                      <input
                        type="text"
                        label="other"
                        className="othergender"
                        onChange={formik.handleChange}
                        name={`page5[${index}].genderOther`}
                        value={genderOtherV}
                      />
                    </Grid>
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid mt={0.8} ml={1} className="address">
              <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Address :</span>
              <input
                className="addr"
                type="text"
                label="address"
                onChange={formik.handleChange}
                name={`page5[${index}].address`}
                value={addressV}
              />
            </Grid>
            <Grid container mt={0.8} ml={1}>
              <Grid item lg={4} xs={12} md={6} className="addresscity">
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>City :</span>
                <input
                  type="text"
                  label="city"
                  className="name-spans"
                  onChange={formik.handleChange}
                  name={`page5[${index}].city`}
                  value={cityV?.name}
                />
              </Grid>
              <Grid item lg={4} xs={12} md={6} className="addressstate">
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>State :</span>
                <input
                  type="text"
                  label="state"
                  onChange={formik.handleChange}
                  name={`page5[${index}].state`}
                  value={stateV?.name}
                />
              </Grid>
              <Grid item lg={4} xs={12} md={6} className="addresszip">
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Zip :</span>
                <input
                  type="number"
                  maxLength={8}
                  label="zip"
                  onChange={formik.handleChange}
                  name={`page5[${index}].zip`}
                  value={zipV}
                />
              </Grid>
            </Grid>
          </SoftBox>

          <SoftBox mt={3}>
            <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="10px">
              Phone Number
            </SoftTypography>

            <Grid container mt={1} ml={1}>
              <Grid item xs={12} lg={4} md={6} className="homenumber">
                <span style={{ fontSize: "16px", fontWeight: "bold", marginRight: "0.5rem" }}>
                  Home :
                </span>

                <input
                  type="number"
                  label="phonenumbrHome"
                  className="otherlang"
                  onChange={formik.handleChange}
                  name={`page5[${index}].phonenumbrHome`}
                  value={phonenumbrHomeV}
                />
              </Grid>
              <Grid item xs={12} lg={4} md={6} className="worknumber">
                <span style={{ fontSize: "16px", marginRight: "0.5rem", fontWeight: "bold" }}>
                  Work :
                </span>
                <input
                  type="text"
                  label="phonenumbrWork"
                  className="otherlang"
                  onChange={formik.handleChange}
                  name={`page5[${index}].phonenumbrWork`}
                  value={phonenumbrWorkV}
                />
              </Grid>
              <Grid item xs={12} lg={4} md={6} className="cellnumber">
                <span style={{ fontSize: "16px", fontWeight: "bold", marginRight: "0.5rem" }}>
                  Cell :
                </span>
                <input
                  type="number"
                  label="phonenumbrCell"
                  className="otherlang"
                  onChange={formik.handleChange}
                  name={`page5[${index}].phonenumbrCell`}
                  value={phonenumbrCellV}
                />
              </Grid>
            </Grid>
            <Grid mt={0.8} ml={1} className="email">
              <span style={{ fontSize: "16px", fontWeight: "bold", marginRight: "0.5rem" }}>
                Email :
              </span>
              <input
                type="email"
                label="email"
                onChange={formik.handleChange}
                name={`page5[${index}].email`}
                value={emailV}
              />
              {/* <div className="dropdown" style={{}}>
              {emailV &&
                patientlist &&
                patientlist.slice(0, 5).map((item, index) => (
                  <>
                    {item.email !== emailV && (
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
                    )}
                  </>
                ))}
            </div> */}
            </Grid>

            <Grid container mt={0.8} ml={1}>
              <Grid item lg={4} xs={12} md={4} className="DOB">
                <span style={{ fontSize: "16px", fontWeight: "bold", marginRight: "0.5rem" }}>
                  DOB :
                </span>
                <input
                  type="date"
                  max={date}
                  label="dob"
                  onChange={formik.handleChange}
                  name={`page5[${index}].dob`}
                  value={dobV}
                />
              </Grid>

              <Grid item lg={7} xs={12} md={8} className="Socialnumber">
                <span style={{ fontSize: "16px", fontWeight: "bold", marginRight: "0.5rem" }}>
                  Social Security Number:
                </span>
                <input
                  type="number"
                  label="phonenumbrSocial"
                  onChange={formik.handleChange}
                  name={`page5[${index}].phonenumbrSocial`}
                  value={phonenumbrSocialV}
                />
              </Grid>
            </Grid>
          </SoftBox>
          <SoftBox mt={3}>
            <span
              style={{
                fontSize: "16px",
                marginRight: "6rem",
                marginTop: "9px",
                fontStyle: "italic",
              }}
            >
              Choose one:
            </span>
            <Grid>
              <RadioGroup className="maritals" name="maritialStatus">
                <div className="martalspart">
                  <Radio
                    id="single"
                    value="single"
                    name={`page5[${index}].maritialStatus`}
                    checked={maritialStatusV === "single"}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "14px", marginRight: "2px" }}>Single</span>
                </div>
                <div className="martalspart marriedpart">
                  <Radio
                    id="married"
                    value="married"
                    name={`page5[${index}].maritialStatus`}
                    checked={maritialStatusV === "married"}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "14px", marginRight: "2px" }}>Married</span>
                </div>
                <div className="martalspart">
                  <Radio
                    id="divorced"
                    value="divorced"
                    name={`page5[${index}].maritialStatus`}
                    checked={maritialStatusV === "divorced"}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "14px", marginRight: "2px" }}>Divorced</span>
                </div>
                <div className="martalspart widowedpart">
                  <Radio
                    id="widowed"
                    value="widowed"
                    name={`page5[${index}].maritialStatus`}
                    checked={maritialStatusV === "widowed"}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "14px", marginRight: "2px" }}>Widowed</span>
                </div>
                <div className="martalspart">
                  <Radio
                    id="Separated"
                    value="Separated"
                    name={`page5[${index}].maritialStatus`}
                    checked={maritialStatusV === "Separated"}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "14px", marginRight: "2px" }}>Separated</span>
                </div>
                <div className="martalspart partneredpart">
                  <Radio
                    id="Partnered"
                    value="Partnered"
                    name={`page5[${index}].maritialStatus`}
                    checked={maritialStatusV === "Partnered"}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "14px", marginRight: "2px" }}>Partnered</span>
                </div>
              </RadioGroup>
            </Grid>
          </SoftBox>
          <SoftBox style={{ marginTop: "9px" }} className="noofChild">
            <span style={{ fontSize: "16px", marginRight: "5px" }}>
              Number of children (and age if applicable):
            </span>
            <input
              type="text"
              label="noofChildren"
              onChange={formik.handleChange}
              name={`page5[${index}].noofChildren`}
              value={noofChildrenV}
            />
          </SoftBox>
          <SoftBox style={{ marginTop: "9px", marginLeft: "3.5rem" }} className="occupationpart">
            <Grid className="occupation">
              <span style={{ fontSize: "16px", marginRight: "5px" }}>Occupation :</span>
              <input
                type="text"
                style={{ marginLeft: "3px" }}
                label="ocuupation"
                onChange={formik.handleChange}
                name={`page5[${index}].ocuupation`}
                value={ocuupationV}
              />
            </Grid>
            <Grid className="occupation">
              <span style={{ fontSize: "16px", marginRight: "5px" }}>Hours/Week:</span>
              <input
                type="text"
                label="hoursweek"
                onChange={formik.handleChange}
                name={`page5[${index}].hoursweek`}
                value={hoursweekV}
              />
            </Grid>
          </SoftBox>
          <SoftBox style={{ marginTop: "9px" }} className="occupationpart">
            <Grid>
              <span style={{ fontSize: "16px" }}>Emergency Contact:</span>
            </Grid>
            <SoftBox style={{ marginLeft: "3.5rem" }} className="econtact">
              <Grid className="emcname">
                <span style={{ fontSize: "16px", fontWeight: "bold", marginRight: "5px" }}>
                  Name :
                </span>
                <input
                  type="text"
                  style={{ marginLeft: "3px" }}
                  label="econtactName"
                  onChange={formik.handleChange}
                  name={`page5[${index}].econtactName`}
                  value={econtactNameV}
                />
              </Grid>
              <Grid className="emcphone">
                <span style={{ fontSize: "16px", fontWeight: "bold", marginRight: "5px" }}>
                  Phone Number:
                </span>
                <input
                  type="number"
                  style={{ marginLeft: "3px" }}
                  label="econtactPhoneno"
                  onChange={formik.handleChange}
                  name={`page5[${index}].econtactPhoneno`}
                  value={econtactPhonenoV}
                />
              </Grid>
              <Grid className="emcrealation">
                <span style={{ fontSize: "16px", fontWeight: "bold", marginRight: "5px" }}>
                  Relation:
                </span>
                <input
                  type="text"
                  label="econtactRelation"
                  onChange={formik.handleChange}
                  name={`page5[${index}].econtactRelation`}
                  value={econtactRelationV}
                />
              </Grid>
            </SoftBox>
          </SoftBox>
          {/* </>
            );
          }} */}
          {/* </Formik> */}
        </SoftBox>
      </Container>
    </>
  );
}
introPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default introPart;
