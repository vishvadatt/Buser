// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import brand from "assets/images/Logo-01-rm.png";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import "../style.css";

// Data
import { Box, DialogContent } from "@mui/material";
import PageLayout from "examples/LayoutContainers/PageLayout";

function Instructions() {
  return (
    <PageLayout>
      <DashboardNavbar />
      <>
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
                  width="12rem"
                  borderRadius="12px"
                  // ml={50}
                />
              )}
              <Box sx={{ width: "80%" }} mt={4}>
                <SoftBox>
                  <h1 style={{ textAlign: "center" }}>
                    Instructions for booking appointment with practioner:
                  </h1>
                  <br />
                  <br />
                  <h3 style={{ textAlign: "left" }}>You will need the following:</h3>
                  <br />
                  <ul style={{ fontSize: "18px" }}>
                    <li>
                      Select the type of session you are requesting (ie. Live Video, Live
                      In-Person).
                    </li>
                    <li>Select a credit to use.</li>
                    <li>Click on the date you would like to request an appointment.</li>
                    <li>Choose your Practitioner here.</li>
                    <li>Select the time from those listed.</li>
                    <li>
                      Fill in your primary condition you are seeking assistance with on that
                      appointment.
                    </li>
                    <li> Submit your appointment request.</li>
                  </ul>
                  <p>Thank you.</p>
                  <p style={{ marginBottom: "20px" }}>The Buser Institute</p>
                </SoftBox>
              </Box>
            </DialogContent>
          </Grid>
        </SoftBox>
      </>
      <Footer />
    </PageLayout>
  );
}

export default Instructions;
