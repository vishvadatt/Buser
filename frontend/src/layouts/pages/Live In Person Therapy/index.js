// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import brand from "assets/images/Logo-01-rm.png";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import moment from "moment";

// Data
import { Box, DialogContent } from "@mui/material";
import { sessionIdAction } from "store/actions/actions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { popupAction } from "store/actions/actions";
import { loadStripe } from "@stripe/stripe-js";
const payment_Key =
  "pk_test_51LTRs5DCf23U0HEkKGQqbNLjDAd3oZhCBgTlAvGK51q5u40Or6FM8KgdrIneIqux57ESsnkYeZbpNsF0ttB3OVTy000gijMl90";
const stripePromise = loadStripe(payment_Key);

function LiveInPersonTherapy() {
  const [loader, setLoader] = useState(false);
  const isDashBoardPlan = useSelector((state) => state.auth.auth.isDashBoardPlan);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const paymentId = useSelector((state) => state.auth.paymentInformation);

  // useEffect(() => {
  //   const loadSessionUrl = async () => {
  //     if (paymentId !== "") {
  //       const stripe = await stripePromise;
  //       const result = await stripe.redirectToCheckout({
  //         sessionId: paymentId,
  //       });
  //       if (result.error) {
  //         console.log(result.error);
  //       }
  //     }
  //   };
  //   loadSessionUrl();
  // }, [paymentId]);

  //  useEffect(() => {
  //   console.log("log1..call useEffect on welcom");
  //   const storeSession = async () => {
  //   console.log("log1..call Function");
  //     let isExpiredDate = moment().add(1, setInterval).format("YYYY-MM-DDThh:mm:ssn");
  //     let path = window.location.href;
  //   console.log("log1..path",path);
  //     let splitPath = path.split("/");
  //     const id = splitPath[4].split("=");
  //   console.log("log1..id[1]",id);
  //     if (id[1]) {
  //   console.log("log1..inside",id[1]);
  //       dispatch(sessionIdAction(id[1]));
  //       setLoader(true);
  //       var index = isDashBoardPlan.findIndex((x) => x == planId);
  //       index === -1 ? isDashBoardPlan.push(planId) : [];

  //       dispatch(
  //         popupAction({
  //           data: {
  //             isDashBordPurchase: true,
  //             // isDashBordAutoDebit: autoDebitValue,
  //             isExpiredDate: isExpiredDate,
  //             dashBoardPlan: isDashBoardPlan,
  //           },
  //           id: userId,
  //           token: token,
  //         })
  //       );
  //       // setTimeout(() => {
  //         // Navigate("/welcome");
  //       // }, 1000);
  //       // setLoader(false)
  //     }
  //   };
  //   storeSession();
  // }, []);

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
                <h2 style={{ textAlign: "center" }}>Travel Clinic Consultations </h2>
                <br />

                <p style={{ textAlign: "justify" }}>
                  <b>
                    Welcome to the Buser Institute and thank you for your interest in becoming a
                    client.
                  </b>
                  Travel Clinics are the most personalized way to get Buser Institute Corrective
                  Exercise Consultations with peer-reviewed proven results. In this consultation you
                  will be able to discuss your personal health history in as much detail as you
                  please and ask us any questions you may have about your conditions, your
                  imbalances contributing to your conditions, your recommended exercise sequences
                  and your continued path to your health goals.
                  <br />
                  <br />
                  <b>To prepare you for success </b>
                  during your visit, we would like to recommend the following:
                  <br />
                  <br />
                  <ul style={{ listStyleType: "square", marginLeft: "4rem" }}>
                    <li>
                      Prior to your visit, please download and fill out your{" "}
                      <b>Client Intake Form</b> and submit it to our staff for review at the
                      download and upload links below.
                    </li>
                    <br />
                    <li>
                      Watch your email for directions to the Travel Clinic location with
                      instructions specific to each location.
                    </li>
                    <br />
                    <li>
                      Please <b>arrive early</b> to your appointment, with{" "}
                      <b>
                        shorts that display your knees, a short-sleeve T-shirt, socks and athletic
                        shoes.
                      </b>
                    </li>
                    <br />
                    <li>
                      Please <b>allow two hours</b> for your consultation. Although your appointment
                      may not take this long, two hours will ensure we can fully evaluate your case
                      and instruct you in all of your personalized exercises.
                    </li>
                    <br />
                    {/* <li>
                      <b>Fifth</b>, on the date and time of your appointment, go to your{" "}
                      <b style={{ color: "dodgerblue" }}>Live Video Portal</b> tab to check into the
                      waiting room of your practitioner.
                    </li> */}
                  </ul>
                  <br />
                  <b>What to expect during your In-person consultation:</b>
                  <br /> Initially we will review your Client Intake form and health history for any
                  additional information you might like to add or more specific questions we may
                  have for your case. We will then conduct a thorough Functional Testing Evaluation
                  including Postural and Gait analysis, followed by specific Functional Movement
                  Tests specific to your case. Based on this evaluation, we will design your
                  personalized Corrective Exercise Program and instruct you in each of the exercises
                  in your Body-Balance Sequence. And lastly, you will be emailed an electronic copy
                  of your Body-Balance Exercise Sequence with detailed instructions and videos so
                  you can perform your Sequence in the comfort of your home or anywhere in the world
                  that your life takes you. So now, we would like to take a moment to introduce you
                  to our Institute’s mission, our clients’ role in that mission, our commitment to
                  our clients, and the commitment that we in turn expect from our clients to achieve
                  their goals.
                  <br />
                  <br />
                  <b>Our mission:</b>
                  <br /> The Buser Institute is a collaborative group of functional exercise subject
                  matter experts and a post-graduate educational organization dedicated to the
                  research, development and application of cutting-edge, peer-review validated,
                  functional corrective exercise application with clients and other practitioners
                  around the world. As such, we spend a great deal of time with and take great care
                  in collecting and safeguarding information from our clients and our community of
                  practitioners, conducting research studies in our dedicated kinesiology lab,
                  publishing articles in peer-reviewed clinical journals, and then offering seminars
                  for other practitioners to incorporate these findings into their practices.
                  Ultimately, we have found that teaching other practitioners to impart this
                  revolutionary approach to others is far more meaningful when taught in the
                  supplemental context of a real client case study. In doing so, with a client’s
                  permission, we utilize clinically relevant client case information, including
                  client intake data, Trainer evaluations, as well as photos and videos obtained in
                  the course of real-world consultations for both archival research analysis and
                  grande round reviews with our practitioner students. We are careful to withhold
                  and protect all confidential information such as personal billing and contact
                  information (i.e. phone numbers, mailing and email addresses, credit card numbers,
                  international fund transfer accounts, etc) from these studies and publications. We
                  respectfully request that you consider allowing other practitioners to benefit
                  from the education provided in the context of your case. If you agree you will
                  have the opportunity to elect to do so in our Client Agreement form, and we thank
                  you in advance for your assistance in our mission to end needless suffering from
                  chronic pain due to dysfunction.
                  <br />
                  <br />
                  <b>The Client’s Role:</b>
                  <br /> In this process, if needed and desired we will ultimately evaluate and
                  study almost every physiological system in your body to determine what systems
                  need support to reach your goals. Each client’s case is different from the next,
                  and some clients, and some of their body systems, may need more attention than
                  others to fully support your corrective exercise program. We will figure that out
                  with you, and we will invest a great deal of time in educating you on how to
                  recognize system dysfunctions and give you the tools to address them throughout
                  your life to sustain and continue to enhance your gains. Such a comprehensive
                  approach inherently requires an equally comprehensive Client Intake form. Hence,
                  our initial Client Intake form is somewhat more detailed than your average
                  experience with other practitioners. And depending on how your body reacts to the
                  corrective exercises we will then customize your subsequent intake forms as you
                  progress through each phase of your program. Similarly, our Functional Evaluations
                  and many of our personalized exercise protocols also include a significant
                  investment of time and energy to obtain the outcomes our clients frequently
                  achieve. As we say in our clinic,{" "}
                  <b>“Anything worth doing, is worth doing well.”</b> To that end, we will teach you
                  how to do it well, but it will be you that must actually do it. Thus, we expect
                  our clients to take personal responsibility for, and an active role in their
                  health care pathway. We encourage clients to track their conduct of our
                  recommended protocols (exercises, and nutrition if incorporated), and recording
                  daily changes in pain and performance so that your Buser Institute Trainer can
                  incorporate that into their clinical decision making process. Only through your
                  commitment and active participation in this program will you achieve the full
                  benefits that this approach has to offer. And if you do commit and take the
                  actions we recommend and make them habit, it can change your life forever.
                  <br />
                  <br />
                  <b>Our commitment:</b>
                  Our commitment is to care as much about you as you do, and we look forward to
                  joining you in this journey. <br />
                  In consideration of being allowed to participate in the Buser Institute therapy
                  program, we ask that you consider seriously and agree to the following:
                  <br />
                  <br />
                  <b>Your commitment:</b>
                  <br />
                  <ul style={{ listStyleType: "square", marginLeft: "4rem" }}>
                    <li>
                      Prior to your visit, please download and fill out your{" "}
                      <b>Client Intake Form</b> and submit it to our staff for review at the
                      download and upload links below.
                    </li>
                    <br />
                    <li>
                      Watch your email for directions to the Travel Clinic location with
                      instructions specific to each location.
                    </li>
                    <br />
                    <li>
                      Understand the above process and the expectations of your{" "}
                      <b>active involvement</b> in this program.
                    </li>
                    <br />
                    <li>
                      <b>Take responsibility</b> for your health, the former things that contributed
                      to your current state of health as you know it now, and the present and future
                      actions that can change it forever.
                    </li>
                    <br />
                    <li>
                      <b>Prioritize</b> your health appropriately commensurate with your goals and
                      expectations.
                    </li>
                    <br />
                    <li>
                      <b>Do the work</b> to make it happen.{" "}
                    </li>
                  </ul>
                  <b>
                    Understanding the Buser Institute Travel Clinic Appointment Change and
                    Cancellation Policy:
                  </b>
                  <br /> Travel Clinic appointments involve some unique variables for consideration
                  due to unrecoverable travel costs incurred by the Buser Institute when we travel
                  to a Travel Clinic location. As you have experienced today, booking an appointment
                  initially places a client on a pending waitlist for that date, time and location
                  until that Travel Clinic meets the number of appointments required to energize a
                  Travel Clinic confirmation and processing of client payments. Changes of an
                  appointment time to another open time in the same Travel Clinic week and location
                  are permitted if done at least 48 hours (two business days) in advance of one’s
                  originally scheduled appointment. For cancellations of an appointment, again due
                  to travel costs incurred by the Buser Institute for Travel Clinics, once a final
                  booking confirmation is made with client payment processing, we are unable to
                  refund scheduled appointments for any reason of cancellation. If a client must
                  cancel such a confirmed (payment processed) appointment, the client may transfer
                  their appointment to another client who will only incur any differential costs in
                  appointments due to the Buser Institute (ie. Existing Client appointment
                  transferred to a New Client appointment which is more expensive). Alternatively,
                  if the client is able to refer another paying client to take their appointment
                  (same appointment date & time or another open date & time at the same Travel
                  Clinic location and week), a commensurate refund to the original client may be
                  honored. In such a case of confirmed appointment cancellation, the Buser Institute
                  will also make every reasonable effort to fill that canceled appointment (same
                  date, time and location) with another client from the waitlist for that Travel
                  Clinic, in which case the original client may be refunded. However, if the
                  original client and the Buser Institute are unable to re-book the same appointment
                  date, time and location for that Travel Clinic, we will be unable to refund the
                  client for that appointment cost due to the opportunity loss. Please contact the
                  Buser Institute at <span style={{ color: "blue" }}>admin@buserinstitue.com</span>{" "}
                  if you have any questions or concerns regarding this Travel Clinic Change and
                  Cancellation Policy.
                  <br />
                  Thank you again for joining our community and we look forward to joining you on
                  your journey to your best self.
                  <br />
                  <br />
                  <b>See you soon!</b>
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

export default LiveInPersonTherapy;
