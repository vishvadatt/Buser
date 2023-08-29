import * as React from "react";
import { Checkbox, FormControlLabel, Grid, Stack } from "@mui/material";
import SoftBox from "components/SoftBox";
import FormField from "../../Profile/components/FormField/index";
import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";
import PropTypes from "prop-types";
import brand from "assets/images/Logo-01-rm.png";
import { Box, DialogContent } from "@mui/material";
const Case1 = ({ values, handleChange, touched, errors, setFieldValue }) => {
  console.log(values);
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [signBeginClient, setSignBeginClient] = React.useState(true);
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);
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
  return (
    <div>
      <SoftBox px={3} mt={5} py={1} mb={1}>
        <DialogContent
          dividers={scroll === "paper"}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {/* {brand && (
            <SoftBox
              component="img"
              src={brand}
              alt="buser institute Logo"
              width="10rem"
              borderRadius="12px"
            // ml={45}
            />
          )} */}
        </DialogContent>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <Stack direction={"column"}>
            <h2 style={{ textAlign: "center", color: "#344767" }}>
              THE BUSER INSTITUTE{" "}
            </h2>
            <h2 style={{ textAlign: "center", color: "#344767" }}>
              STUDENT,
            </h2>
            <h2 style={{ textAlign: "center", color: "#344767" }}>
              INDEPENDENT PRACTITIONER,
            </h2>
            <h2 style={{ textAlign: "center", color: "#344767" }}>
              CERTIFIED PRACTITIONER,
            </h2>
            <h2 style={{ color: "#344767" }}>ASSOCIATE PRACTITIONER (INDEPENDENT CONTRACTOR)</h2>
            <h2 style={{ textAlign: "center", color: "#344767" }}>
              AGREEMENT
            </h2>
          </Stack>
        </Grid>
      </SoftBox>

      <SoftBox px={3} className="step1">
        <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
          This agreement is made and entered into as of the later of the two signature dates below (the “Effective Date”) by and between the Buser Institute,
          whose principal place of business is Solana Beach, California and additional place of business is the greater New York City, New York area, and the Buser Institute <b>Student</b> and/or <b>Independent Practitioner</b>, and/or <b>Buser Institute Certified Practitioner</b> and/or <b>Buser Institute Associate Practitioner</b> (hereby referred to generally as the “<b>Associate</b>” unless otherwise delineated as a Student,
          Independent Practitioner, Certified Practitioner or Associate Practitioner) listed below in the agreement.
          <br />
          <br />
          NOW THEREFORE, the parties hereby agree as set forth on the following pages:
          <br />
          <br />
          <p><b style={{ color: "#344767" }}>1. Term and Termination.</b>
            <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
              <b>1.1 Term.</b> The term of this Agreement (the “Term”) shall commence on the Effective Date and, unless earlier terminated in accordance with this Agreement, continue thereafter unless and until either Party provides the other Party with at least thirty (30) days written notice of its intent to terminate this Agreement.
            </p>
            <br />
            <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
              <b>1.2 Termination.</b> Buser Institute may terminate this Agreement immediately and without advance notice (a) if the Associate is in breach or default of any other obligation set forth in of this Agreement; (b) if Buser Institute determines,
              in its sole discretion, that Associate’s practices are detrimental to the achievement of Buser Institute business objectives; (c) if Buser Institute has reason to believe that there is an alleged or actual violation by Associate of any laws, policies, guidelines, regulations, ordinances, rules and/or orders of any governmental authority or regulatory body having jurisdiction over the subject matter hereof; (d)  Associate violates Buser Institute’s Acceptable Use Policy or Privacy.
            </p>
          </p>
          <br />
          <br />
          <h6 style={{ color: "#344767" }}><b>2. Warranty and Disclaimer.</b></h6>
          <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
            <b>2.1 WARRANTY.</b> DURING THE EFFECTIVE TERM OF THIS AGREEMENT, BUSER INSTITUTE
            REPRESENTS AND WARRANTS THAT THE BUSER INSTITUTE SERVICES WILL CONFORM IN ALL
            MATERIAL RESPECTS TO THE APPLICABLE DOCUMENTATION MADE AVAILABLE TO
            ASSOCIATE BY BUSER INSTITUTE. BUSER INSTITUTE DOES NOT REPRESENT OR WARRANT
            THAT THE BUSER INSTITUTE SERVICES WILL ALWAYS BE AVAILABLE, ACCESSIBLE,
            UNINTERRUPTED, TIMELY, SECURE, ACCURATE, COMPLETE, OR ENTIRELY ERROR-FREE.
            ASSOCIATE ACKNOWLEDGES THAT THE BUSER INSTITUTE SERVICES ARE COMPUTER
            NETWORK-BASED SERVICES, WHICH MAY BE SUBJECT TO OUTAGES, INTERRUPTIONS,
            ATTACKS BY THIRD PARTIES AND DELAY OCCURRENCES. IN SUCH AN EVENT AND SUBJECT
            TO THE TERMS HEREOF, BUSER INSTITUTE SHALL USE COMMERCIALLY REASONABLE
            EFFORTS TO REMEDY MATERIAL INTERRUPTIONS AND WILL PROVIDE ADJUSTMENT, REPAIRS
            AND REPLACEMENTS WITHIN ITS CAPACITY THAT ARE NECESSARY TO ENABLE THE BUSER
            INSTITUTE SERVICES TO PERFORM THEIR INTENDED FUNCTIONS IN A REASONABLE MANNER.
          </p>
          <br />
          <br />
          <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
            <b>2.2 DISCLAIMER.</b> EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, BUSER INSTITUTE
            SPECIFICALLY DISCLAIMS ALL REPRESENTATIONS, WARRANTIES, AND CONDITIONS
            WHETHER EXPRESS OR IMPLIED, ARISING BY STATUTE, OPERATION OF LAW, USAGE OF
            TRADE, COURSE OF DEALING, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO,
            WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            NON-INFRINGEMENT, OR TITLE WITH RESPECT TO THE BUSER INSTITUTE SERVICES, OR OTHER
            SERVICES OR GOODS PROVIDED UNDER THIS AGREEMENT.
          </p>
          <br />
          <br />
          <h6 style={{ color: "#344767" }}><b>3. Limitation of Liability and Disclaimers.</b></h6>
          <p style={{ marginBottom: "-28px", textAlign: "justify" }} className="initialhere">
            <b>3.1 DISCLAIMER.</b>BUSER INSTITUTE EXPRESSLY DISCLAIMS ANY LIABILITY OR LOSS ARISING
            FROM OR RELATED TO THE BUSER INSTITUTE SERVICES, THIRD PARTY SERVICE PROVIDERS
          </p>
        </p>
        <br />
        <br />
        <SoftBox mt={2}>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={4} >
              <FormControlLabel
                style={{
                  backgroundColor: "rgba(0,0,0,0.04)",
                  width: "max-content",
                  marginLeft: "130px",
                }}
                pl={2}
                control={
                  <Checkbox
                    className="stylebox"
                    checked={values.practitioner_agreement_flagPage1}
                    name="practitioner_agreement_flagPage1"
                    // onChange={handleChange}
                    onChange={(e) => setFieldValue("practitioner_agreement_flagPage1", e.target.checked)}
                  />
                }
                label={"I Agree"}
              />
            </Grid>
          </Grid>
        </SoftBox>
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
