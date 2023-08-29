// @mui material components
import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
// Soft UI Dashboard PRO React example components
import brand from "assets/images/Logo-01-rm.png";
import "../style.css";
// Data
import { Box, DialogContent } from "@mui/material";
import img from "./ptI.png";

function Welcome() {
  return (
    <SoftBox mb={1}>
      <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
        <DialogContent
          dividers={scroll === "paper"}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {brand && (
            <SoftBox
              component="img"
              src={brand}
              alt="buser institute Logo"
              width="10rem"
              borderRadius="12px"
              // ml={50}
            />
          )}
          <Box sx={{ width: "90%" }} mt={2}>
            <SoftBox>
              <h2 style={{ textAlign: "center" }}>Buser Institute Photo Therapy</h2>
              <br />

              <p>
                <b>Welcome to the Buser Institute Photo Therapy Department. </b> This is an
                excellent way to get personalized Buser Institute Exercise Physiotherapy with proven
                results.
              </p>

              <p>
                To begin, we will then ask that you complete your <b>Client Intake form </b> (on
                your Client Dashboard) and take your <b>postural and functional test photos. </b>
                On the <b>Photo Therapy Instruction tab above</b>
                {"  "}
                we will give you detailed instructions on how to take your photos and send them to
                us. Feel free call or email any questions you may have about your conditions, your
                therapy and your path to your health goals.
              </p>
              <p>
                Within one week a Buser Institute Therapist will evaluate your case and reply to you
                with your personalized exercise therapy sequence including pictures, and video and
                written instructions for each of your corrective exercises.
              </p>
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={2}>
                <img src={img} style={{ width: "30rem", objectFit: "contain" }} />
              </Box>
            </SoftBox>
          </Box>
        </DialogContent>
      </Grid>
    </SoftBox>
  );
}

export default Welcome;
