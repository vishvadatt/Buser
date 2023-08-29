import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function index({ formik, index }) {
  let sigPad = React.useRef({});
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);

  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginOfc(true);
  }

  const { values } = formik;
  let date = new Date().toLocaleDateString("en-CA");

  const { clientName, signature, todayDate, disabilityIndexScore } = values.page16[index];

  const section1 = [
    {
      name: "The pain comes and goes and is very mild.",
    },
    {
      name: "The pain is mild and does not vary much.",
    },
    {
      name: "The pain comes and goes and is moderate.",
    },
    {
      name: "The pain is moderate and does not vary much.",
    },
    {
      name: "The pain is severe but comes and goes.",
    },
    {
      name: "The pain is severe and does not vary much.",
    },
  ];
  const section2 = [
    {
      name: "I would not have to change my way of washing or dressing in order to avoid pain.",
    },
    {
      name: "I do not normally change my way of washing or dressing even though it causes some pain.",
    },
    {
      name: "Washing and dressing increase the pain, but I manage not to change my way of doing it.",
    },
    {
      name: "Washing and dressing increase the pain and I find it necessary to change my way of doing it.",
    },
    {
      name: "Because of the pain, I am unable to do any washing and dressing without help.",
    },
    {
      name: "Because of the pain, I am unable to do any washing or dressing and essentially remain in bed.",
    },
  ];
  const section3 = [
    {
      name: "I can lift heavy weights without extra pain.",
    },
    {
      name: "I can lift heavy weights, but it causes extra pain.",
    },
    {
      name: "Pain prevents me from lifting heavy weights off the floor.",
    },
    {
      name: "Pain prevents me from lifting heavy weights off the floor, but I can manage if they are conveniently positioned, e.g. on the table.",
    },
    {
      name: "Pain prevents me from lifting heavy weights , but I can manage light to medium weights if they are conveniently positioned.",
    },
    {
      name: "I can only lift very light weights, at the most.",
    },
  ];
  const section4 = [
    {
      name: "Pain does not prevent me from walking any distance.",
    },
    {
      name: "Pain prevents me from walking more than one mile.",
    },
    {
      name: "Pain prevents me from walking more than 1/4 mile.",
    },
    {
      name: "Pain prevents me from walking more than 100 yards.",
    },
    {
      name: "I can only walk while using a cane or on crutches.",
    },
    {
      name: "I am in bed most of the time and have to crawl to the toilet.",
    },
  ];
  const section5 = [
    {
      name: "I can sit in any chair as long as I like without pain.",
    },
    {
      name: "I can only sit in my favorite chair as long as I like.",
    },
    {
      name: "Pain prevents me from sitting more than one hour.",
    },
    {
      name: "Pain prevents me from sitting more than 1/2 hour.",
    },
    {
      name: "Pain prevents me from sitting more than ten minutes.",
    },
    {
      name: "Pain prevents me from sitting at all.",
    },
  ];
  const section6 = [
    {
      name: "I can stand as long as I want without pain.",
    },
    {
      name: "I have some pain while standing, but it does not increase with time.",
    },
    {
      name: "I cannot stand for longer than one hour without increasing pain.",
    },
    {
      name: "I cannot stand for longer than ½ hour without increasing pain.",
    },
    {
      name: "I cannot stand for more than 10 minutes without increasing pain.",
    },
    {
      name: "Pain prevents me from standing at all.",
    },
  ];
  const section7 = [
    {
      name: "I get no pain in bed.",
    },
    {
      name: "I get pain in bed, but it does not prevent me from sleeping.",
    },
    {
      name: "Because of pain , my normal night’s sleep is reduced by less than one-quarter.",
    },
    {
      name: "Because of pain, my normal night’s sleep is reduced by less than one-half.",
    },
    {
      name: "Because of pain, my normal night’s sleep is reduced by less than three-quarters.",
    },
    {
      name: "Pain prevents me from sleeping at all.",
    },
  ];
  const section8 = [
    {
      name: "My social life is normal and gives me no pain.",
    },
    {
      name: "My social life is normal, but increases the degree of my pain.",
    },
    {
      name: "Pain has no significant effect on my social life apart from limiting my more energetic interests, e.g., dancing, etc.",
    },
    {
      name: "Pain has restricted my social life and I do not go out very often.",
    },
    {
      name: "Pain has restricted my social life to my home.",
    },
    {
      name: "I have no social life due to pain.",
    },
  ];
  const section9 = [
    {
      name: "I get no pain while traveling.",
    },
    {
      name: "I get some pain while traveling, but none of my usual forms of travel make it any worse.",
    },
    {
      name: "I get extra pain while traveling, but it does not compel me to seek alternative forms of travel.",
    },
    {
      name: "I get extra pain while traveling which compels me to seek alternative forms of travel.",
    },
    {
      name: "Pain prevents all forms of travel except that done lying down.",
    },
    {
      name: "Pain prevents all forms of travel.",
    },
  ];
  const section10 = [
    {
      name: "My pain is rapidly getting better.",
    },
    {
      name: "My pain fluctuates, but overall is definitely getting better.",
    },
    {
      name: "My pain seems to be getting better, but improvement is slow at present.",
    },
    {
      name: "My pain is neither getting better nor worse.",
    },
    {
      name: "My pain is gradually worsening.",
    },
    {
      name: "My pain is rapidly worsening.",
    },
  ];
  return (
    <>
      <SoftBox>
        <Grid container spacing={1}>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>
                  SECTION 1--Pain Intensity
                </span>
              </SoftTypography>
              <SoftBox className="sections">
                {section1 &&
                  section1.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} xs={1} sm={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section1[${i}].section1check`}
                              checked={values?.page16[index]?.section1[i]?.section1check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>
                  SECTION 2--Personal Care
                </span>
              </SoftTypography>
              <SoftBox className="sections">
                {section2 &&
                  section2.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section2[${i}].section2check`}
                              checked={values?.page16[index]?.section2[i]?.section2check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>SECTION 3--Lifting</span>
              </SoftTypography>
              <SoftBox className="sections">
                {section3 &&
                  section3.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section3[${i}].section3check`}
                              checked={values?.page16[index]?.section3[i]?.section3check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>SECTION 4 --Walking</span>
              </SoftTypography>
              <SoftBox className="sections">
                {section4 &&
                  section4.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section4[${i}].section4check`}
                              checked={values?.page16[index]?.section4[i]?.section4check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>SECTION 5--Sitting</span>
              </SoftTypography>
              <SoftBox className="sections">
                {section5 &&
                  section5.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section5[${i}].section5check`}
                              checked={values?.page16[index]?.section5[i]?.section5check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item lg={6} md={12} xs={12}>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>SECTION 6 -- Standing</span>
              </SoftTypography>
              <SoftBox className="sections">
                {section6 &&
                  section6.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section6[${i}].section6check`}
                              checked={values?.page16[index]?.section6[i]?.section6check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>SECTION 7--Sleeping</span>
              </SoftTypography>
              <SoftBox className="sections">
                {section7 &&
                  section7.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section7[${i}].section7check`}
                              checked={values?.page16[index]?.section7[i]?.section7check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>SECTION 8--Social Life</span>
              </SoftTypography>
              <SoftBox className="sections">
                {section8 &&
                  section8.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section8[${i}].section8check`}
                              checked={values?.page16[index]?.section8[i]?.section8check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>SECTION 9--Traveling</span>
              </SoftTypography>
              <SoftBox className="sections">
                {section9 &&
                  section9.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section9[${i}].section9check`}
                              checked={values?.page16[index]?.section9[i]?.section9check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox style={{ border: "2px solid black", marginBottom: "5px" }}>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="0px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>
                  SECTION 10--Changing Degree of Pain
                </span>
              </SoftTypography>
              <SoftBox className="sections">
                {section10 &&
                  section10.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={1} sm={1} xs={1} md={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page16[${index}].section10[${i}].section10check`}
                              checked={values?.page16[index]?.section10[i]?.section10check}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={10} sm={10} md={10} marginLeft={1}>
                            <span style={{ fontSize: "15px" }}>{data.name}</span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <Grid className="clientaction">
        <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>Client Name:</span>
        <input
          type="text"
          name={`page16[${index}].clientName`}
          label="clientName"
          onChange={formik.handleChange}
          value={clientName}
        />
      </Grid>
      <SoftBox mt={3}>
        <Grid container>
          <Grid item lg={6} xs={12} className="clientaction">
            <Grid container direction={"column"}>
              <Grid item lg={12} xs={12}>
                <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>SIGNATURE:</span>
                {/* <input
                  type="text"
                  name="signature"
                  label="signature"
                  onChange={formik.handleChange}
                  value={signature}
                /> */}
                {signature ? (
                  <Grid item xs={12} lg={6} sm={6} className="parentClass">
                    <img src={signature} />
                    <h5 style={{ fontSize: "15px" }}>Sign here</h5>
                  </Grid>
                ) : (
                  <Grid item xs={12} md={6} lg={4}>
                    <SignaturePad
                      canvasProps={{ width: 240, height: 150 }}
                      ref={sigPad}
                      penColor="black"
                      backgroundColor="#f1f1f1"
                      placeholder="sign"
                      onBegin={(e) => onBeginfun1(e.isTrusted)}
                    />
                    <div className="saveAndClear">
                      <SoftButton
                        onClick={clear}
                        style={{ marginRight: "10px" }}
                        disabled={signBeginOfc}
                      >
                        Clear
                      </SoftButton>
                      <SoftButton
                        disabled={signBeginOfc}
                        onClick={() => {
                          formik.setFieldValue(
                            `page16[${index}].signature`,
                            sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                          );
                        }}
                      >
                        Save
                      </SoftButton>
                    </div>
                  </Grid>
                )}
                <br />
              </Grid>
              <Grid item lg={12} xs={12}>
                <Grid container direction={"row"}>
                  <Grid item lg={2.3} md={1.7} xs={12}>
                    <span style={{ fontSize: "16px", marginRight: "0.5rem" }}>DATE:</span>
                  </Grid>
                  <Grid item lg={9.6} md={9.6} xs={12} className="date">
                    <input
                      max={date}
                      type="date"
                      name={`page16[${index}].todayDate`}
                      label="todayDate"
                      onChange={formik.handleChange}
                      value={todayDate}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} xs={12} className="clientaction">
            <SoftBox mt={3}>
              <Grid container>
                <Grid item lg={12} xs={12} className="clientaction">
                  <SoftTypography fontSize="15px">
                    [Score/(Sections completed X 5)]100
                  </SoftTypography>
                  <div className="name-div">
                    <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                      DISABILITY INDEX SCORE: %{" "}
                    </SoftTypography>
                    <input
                      type="number"
                      name={`page16[${index}].disabilityIndexScore`}
                      label="disabilityIndexScore"
                      onChange={formik.handleChange}
                      value={disabilityIndexScore}
                    />
                  </div>
                </Grid>
              </Grid>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
