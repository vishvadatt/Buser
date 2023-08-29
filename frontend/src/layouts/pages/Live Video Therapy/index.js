// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import brand from "assets/images/Logo-01-rm.png";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import { Box, DialogContent } from "@mui/material";

function LiveVideoTherapy() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

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
            <Box sx={{ width: "100%" }} mt={2}>
              <SoftBox>
                <h2 style={{ textAlign: "center" }}>Buser Institute Live Video Therapy </h2>
                <br />

                <p style={{ textAlign: "justify" }}>
                  <b>Welcome to the Buser Institute Live Video Therapy Department.</b> This is the
                  gold-standard for remote and personalized Buser Institute Exercise Therapy with
                  proven results. You will be able to meet with a Buser Institute Therapist in a
                  live online video session to discuss your personal health history in as much
                  detail as you please and ask us any questions you may have about your conditions,
                  your imbalances contributing to your conditions, your recommended therapy and your
                  continued path to your health goals.
                  <br />
                  <br />
                  After evaluating your postural views, gait and functional tests, your therapist
                  will take you through each of your recommended exercises right there during your
                  session. For your continued self-home care, you will also receive your
                  personalized exercise therapy sequence as a pdf document with pictures, video and
                  written instructions for each of your corrective exercises.
                  <br />
                  <br />
                  <p style={{ marginBottom: 8 }}>
                    So now, please follow the below steps to request and prepare for your Live Video
                    Therapy session.
                  </p>
                  See you soon!
                  <br />
                  <h2 style={{ textAlign: "center", color: "dodgerblue" }}>
                    Five easy steps to your{" "}
                  </h2>
                  <h2 style={{ textAlign: "center", color: "dodgerblue" }}>
                    Buser Institute Video Consultation
                  </h2>
                  <br />
                  {/* <div style={{ alignItems: "center"}}> */}
                  <ul style={{ listStyleType: "square" }}>
                    <li>
                      <b>First</b>, please ensure that you have visit credits by visiting our
                      <b style={{ color: "dodgerblue" }}> Services</b> tab on your Dashboard{" "}
                      <b style={{ textDecoration: "underline" }}>
                        {/* <a
                          style={{ color: "dodgerblue", textDecoration: "underline" }}
                          href="https://buserinstitute.com"
                        >
                          www.buserinstitue.com
                        </a>{" "} */}
                      </b>
                      and purchasing either <b>one session</b> or a package{" "}
                      <b>of 4 or 8 Live Video (Online) Exercise Therapy </b>.
                    </li>
                    <br />
                    <li>
                      <b>Second</b>, fill out and submit the <b>Client Intake Form</b> with your
                      patient information and condition(s) history, found on the{" "}
                      <b style={{ color: "dodgerblue" }}>Client Intake tab</b> on your Dashboard.
                    </li>
                    <br />
                    <li>
                      <b>Third</b>, upload any other medical <b>records</b>, doctors notes, Imaging
                      reports (X-ray, MRI, CT Scan, Ultrasound, EMG, etc), and biochemical tests
                      (blood, urine, stool, hair, etc) to the
                      <b style={{ color: "dodgerblue" }}> Labs</b> tab on your Dashboard.
                    </li>
                    <br />
                    <li>
                      <b>Fourth</b>, go to the
                      <b style={{ color: "dodgerblue" }}> Book Appointments</b> tab on your
                      Dashboard to select a date, time and practitioner (optional) for your visit.
                      Submit this <b style={{ color: "red" }}>request</b> and await its{" "}
                      <b style={{ color: "green" }}>approval</b> and{" "}
                      <b style={{ color: "dodgerblue" }}>confirmation</b> on your Upcoming
                      Appointments list on your Dashboard.
                    </li>
                    <br />
                    <li>
                      <b>Fifth</b>, on the day of your appointment please kindly check your email
                      inbox for an email with subject “Buser Institute Live Video Link,” and follow
                      this link to your Live Video session waiting room. Your Practitioner will then
                      start your session at your appointment time
                    </li>
                    <br />
                    {/* <li>
                      <b>Sixth</b>, await the <b style={{ color: "green" }}>approval</b> and{" "}
                      <b style={{ color: "dodgerblue" }}>confirmation</b> email from{" "}
                      <b style={{ textDecoration: "underline" }}>
                        <a style={{ color: "dodgerblue" }} href="mailto: admin@buserinstitute.com">
                          admin@buserinstitute.com
                        </a>{" "}
                      </b>
                      for your appointment. On the day and time of your appointment, follow the
                      emailed link to your practitioners online waiting room to check in and wait
                      for your practitioner to meet with you.
                    </li> */}
                  </ul>
                </p>
              </SoftBox>
            </Box>
          </DialogContent>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LiveVideoTherapy;
