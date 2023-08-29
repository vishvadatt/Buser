// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import brand from "assets/images/Logo-01-rm.png";
import Footer from "examples/Footer";
import SendIcon from "@mui/icons-material/Send";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Images import

import first from "./images/first.jpg";
import second from "./images/second.jpg";
import third from "./images/third.jpg";
import fourth from "./images/fourth.jpg";
import fifth from "./images/fifth.jpg";
import sixth from "./images/sixth.jpg";
import seventh from "./images/seventh.jpg";
import eigth from "./images/eigth.jpg";
import nigth from "./images/nigth.jpg";
import AttachFileIcon from "@mui/icons-material/AttachFile";

// Data
import { Box, DialogContent } from "@mui/material";

function PhotoTherapyInstructions() {
  return (
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
                width="10rem"
                borderRadius="12px"
              // ml={50}
              />
            )}
            <Box sx={{ width: "100%" }} mt={2}>
              <SoftBox>
                <h2 style={{ textAlign: "center" }}>
                  Instructions for taking Photo Therapy pictures:
                </h2>
                <br />
                <br />
                <p>
                  <b style={{ textAlign: "justify" }}>You Will Need the following:</b>
                  <ul>
                    <li>A smartphone camera or computer camera.</li>
                    <li>A well lit area.</li>
                    <li>
                      A plumb-line or vertical door frame that can be somewhere within the frame of
                      the picture.
                    </li>
                    <li>
                      Wear shorts that show your knees and a short sleeve shirt (preferably not
                      black).{" "}
                    </li>
                    <li>
                      Please tuck in your shirt into your pants so we can see the curvature of your
                      spine from the side.
                    </li>
                  </ul>
                  <br />
                  When taking the pictures, make sure that your entire body (from head to toe) is
                  included in the frame of the picture. <br />
                  <br />
                  Please take the following pictures:
                  <br />
                  <ul>
                    <li>
                      <b>Front view:</b>Stand facing the camera, behind the plumb-line or in the
                      frame of a door which gives us a vertical frame of reference. Relax and stand
                      naturally. Make sure that your entire body is in the frame of the camera –
                      from the feet to the top of the head.{" "}
                      <span style={{ textDecoration: "underline" }}>
                        Relax, give us your natural posture, smile and take your picture
                      </span>
                    </li>
                    <li>
                      <b> Back view:</b> Stand with your back to the camera behind the plumb-line or
                      a frame of a door, relax and stand naturally. Make sure that your entire body
                      is in the frame of the camera – from the feet to the top of the head. Take
                      your picture.
                    </li>
                    <li>
                      <b> Left side view:</b> Stand behind the plumb-line (or at a doorway) with
                      your left side towards the camera. Relax and stand naturally. Make sure that
                      your entire body is in the frame of the camera – from the feet to the top of
                      the head. Take your picture
                    </li>
                    <li>
                      <b> Right side view:</b> Stand behind the plumb-line (or at a doorway) with
                      your right side towards the camera. Relax and stand naturally. Make sure that
                      your entire body is in the frame of the camera – from the feet to the top of
                      the head. Take your picture.
                    </li>
                    <li>
                      <b> Hands on Head:</b> Stand with your right side towards the camera. Relax
                      and stand naturally. Now interlace your fingers behind your head and pull your
                      elbows as far back as possible. Relax your stomach while standing in this
                      position. Take your picture
                    </li>
                    <li>
                      <b>Standing Pigeon-Toed:</b> Stand with your right side towards the camera.
                      Relax and stand naturally. Now turn your feet inwards so that your big toes
                      touch and your heels point out to the sides approximately 45 degrees each. Be
                      sure to turn your feet inwards equally. Tighten your thighs and lock your
                      knees out to straighten your legs. Relax your stomach while standing in this
                      position. Look straight ahead, and take your picture.
                    </li>
                    <li>
                      <b> Hands-on-Head & Pigeon-toed:</b> Stand with your right side towards the
                      camera. Relax and stand naturally. Now turn your feet inwards so that your big
                      toes touch and your heels point out to the sides approximately 45 degrees
                      each. Be sure to turn your feet inwards equally. Tighten your thighs and lock
                      your knees out to straighten your legs. Relax your stomach while standing in
                      this position. Now interlace your fingers behind your head and pull your
                      elbows as far back as possible. Remember to relax your stomach while standing
                      in this position. Take your picture.
                    </li>
                    <li>
                      <b>Cat:</b> With your right side to the camera, get on the floor on your hands
                      and knees. Position yourself so that your shoulders are over your hands and
                      your hips are over your knees. Your feet, knees and hands should all be
                      hip-width apart. Your arms should be straight with your elbows locked
                      comfortably. From this position, let your head drop down, tuck your pelvis
                      under and arch your back up towards the ceiling as high as possible. Take your
                      picture.
                    </li>
                    <li>
                      <b>Dog:</b> With your right side to the camera, get on the floor on your hands
                      and knees. Position yourself so that your shoulders are over your hands and
                      your hips are over your knees. Your feet, knees and hands should all be
                      hip-width apart. Your arms should be straight with your elbows locked
                      comfortably. From this position, let your shoulder blades collapse and come
                      together, tilt your pelvis forward sticking your buttocks out to arch your
                      back down towards the floor and lift your head up and look up towards the
                      ceiling. Take your picture.{" "}
                    </li>
                  </ul>
                  <br />
                  Good job! You are done with the photos.
                  <br /> Now, on this page click   <AttachFileIcon
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#62c2e8",
                      // marginTop: "15px",
                      cursor: "pointer",
                    }}
                  />  Attachment button on your Video Message Thread for each of your photos and then click the
                  <SendIcon
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#62c2e8",
                      // marginTop: "15px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  /> Submit button to send your photos to us. For convenience, you can
                  also attach the photos in bulk by clicking attach and selecting all 9 of your photos at once and clicking submit once.
                  <br />
                  <br />A Buser Institute therapist will now evaluate your photos and functional
                  tests and create an individualized corrective exercise therapy sequence for you.
                  This sequence can be found here on your Client Dashboard under the Sequences tab
                  and will also be emailed to you within 5 business days in PDF-format with pictures
                  and instructions and video instructions of your exercises. Please email at
                  <span style={{ color: "blue" }}>admin@buserinstitute.com</span> us with any
                  questions.
                  <br />
                  <br />
                  Thank you,
                  <br />
                  <br />
                  The Buser Institute
                </p>
              </SoftBox>
            </Box>
          </DialogContent>
        </Grid>
      </SoftBox>
      <Footer />
    </>
  );
}

export default PhotoTherapyInstructions;
