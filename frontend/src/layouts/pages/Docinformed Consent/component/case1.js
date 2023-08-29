import * as React from "react";
import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import SoftBox from "components/SoftBox";
import FormField from "../../Profile/components/FormField/index";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const Case1 = ({ values, handleChange, touched, errors, setFieldValue }) => {
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [userdata, setuserdata] = useState({});
  const userdatas = useSelector((state) => state?.auth?.informedConsent);
  const [signBeginClient, setSignBeginClient] = React.useState(true);
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);
  // const [values, setValues] = React.useState({});
  // const userdata = userdatas && userdatas;
  useEffect(() => {
    setuserdata(userdatas);
  }, [userdatas]);
  // React.useEffect(() => {
  //   setValues(userdata);
  // }, [userdata]);
  const onBeginfun = (e) => {
    setSignBeginClient(e?.isTrusted);
  };
  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };
  function clear() {
    sigPad.current.clear();
    signPad1.current.clear();
    setSignBeginClient(true);
    setSignBeginOfc(true);
  }

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  console.log(userdata?.agrrement_flag ? userdata?.agrrement_flag[0] === "on" : 0, "userdata1");
  return (
    <div>
      <SoftBox px={3} mt={5} py={1} mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <Stack direction={"column"}>
            <h2 style={{ color: "#344767" }}>CLIENT PARTICIPATION AGREEMENT</h2>
          </Stack>
        </Grid>
      </SoftBox>

      <SoftBox px={3} className="step1">
        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
          Thank you for your interest in becoming a client of the Buser Institute.
          <br />
          <br />
          <h6 style={{ color: "#344767" }}>Our mission: </h6>
          The Buser Institute is a complementary healthcare clinic and organization dedicated to the
          research, development and application of cutting-edge, peer-review validated, functional
          physiotherapy with clients and other practitioners around the world. As such, we spend a
          great deal of time and take great care in collecting and safeguarding information from our
          clients and our community of practitioners, conducting research studies in our dedicated
          kinesiology lab, publishing articles in peer-reviewed clinical journals, and then offering
          seminars for other practitioners to incorporate these findings into their practices. In
          doing so, we utilize clinically relevant client case information, photos and videos
          obtained in the course of real-world therapy for both research analysis and grand round
          reviews with our practitioner students. We are careful to withhold and protect all
          confidential information such as personal billing and contact information (i.e. phone
          numbers, mailing and email addresses, credit card numbers, international fund transfer
          accounts, etc) from these studies and publications.
          <br />
          <br />
          <h6 style={{ color: "#344767" }}>The process: </h6>
          In this process we will ultimately evaluate and study almost every physiological system in
          your body to determine what systems need support to reach your goals. Each client’s case
          is different from the next, and some clients and some of their systems may need more
          attention than others. We will figure that out with you, and we will invest a great deal
          of time in educating you on how to recognize system dysfunctions and give you the tools to
          address them throughout your life to sustain and continue to enhance your gains. Such a
          comprehensive approach inherently requires an equally comprehensive Client Intake form.
          Hence, ours is somewhat more detailed than your average experience with other
          practitioners. Similarly, our therapist evaluations and many of our treatment approaches
          also include a significant investment of time and energy to obtain the outcomes our
          clients frequently achieve. Thus, we expect our clients to take personal responsibility
          for, and an active role in, their health care pathway. We encourage tracking of your
          conduct of our recommended therapy protocols (exercises and nutrition), and recording
          daily changes in pain and performance so that you can report that to your Buser Institute
          therapist. Only through your commitment and active participation in this program will you
          achieve the benefits of this therapy. But if you do commit and take the actions we
          recommend, it can change your life.
          <br />
          <br />
          <h6 style={{ color: "#344767" }}>Our commitment: </h6>
          Our commitment is to care as much about you as you do, and we look forward to joining you
          in this journey.
          <br />
          <br />
          In consideration of being allowed to participate in the Buser Institute therapy program,
          we ask that you agree to the following:
          <br />
          <br />
        </p>
        <br />
      </SoftBox>
      <SoftBox mt={2}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            {/* {userdata.agrrement_flag && (
              <FormControlLabel
                style={{
                  backgroundColor: "rgba(0,0,0,0.04)",
                  width: "max-content",
                  marginLeft: "2px",
                }}
                pl={2}
                control={
                  <Checkbox
                    defaultChecked={userdata.agrrement_flag}
                    className="stylebox"
                    name="agrrement_flag"
                    disabled="true"

                    //   onChange={handleChange}
                  />
                }
                label={"I Agree"}
              />
            )}
            {!userdata.agrrement_flag && (
              <FormControlLabel
                style={{
                  backgroundColor: "rgba(0,0,0,0.04)",
                  width: "max-content",
                  marginLeft: "2px",
                }}
                pl={2}
                control={
                  <Checkbox
                    defaultChecked={userdata.agrrement_flag}
                    className="stylebox"
                    name="agrrement_flag"
                    disabled="true"

                    //   onChange={handleChange}
                  />
                }
                label={"I Agree"}
              />
            )} */}
          </Grid>
        </Grid>
      </SoftBox>
    </div>
  );
};
Case1.propTypes = {
  values: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  handleChange: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setFieldValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Case1;
