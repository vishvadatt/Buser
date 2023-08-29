// // @mui material components


// import { useLocation, Link } from "react-router-dom";

// // prop-types is a library for typechecking of props.
// import PropTypes from "prop-types";

// // @mui core components
import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import Icon from "@mui/material/Icon";


// import SoftTypography from "components/SoftTypography";

// // Soft UI Dashboard PRO React example components
// import Breadcrumbs from "examples/Breadcrumbs";
// import NotificationItem from "examples/Items/NotificationItem";
// import "./style.css";
// // Custom styles for DashboardNavbar
// import {
//   navbar,
//   navbarContainer,
//   navbarRow,
//   navbarIconButton,
//   navbarDesktopMenu,
//   navbarMobileMenu,
// } from "examples/Navbars/DashboardNavbar/styles";

// // Soft UI Dashboard PRO React context
// import {
//   useSoftUIController,
//   setTransparentNavbar,
//   setMiniSidenav,
//   setOpenConfigurator,
// } from "context";

// // Images
// import team2 from "assets/images/team-2.jpg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";

// import { logout } from "store/actions/actions";
// import { MenuItem } from "@mui/material";
// import { successToast } from "components/Toaster/toast";




import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import brand from "assets/images/Logo-01-rm.png";
import "./style.css";
import { Box, Checkbox, DialogContent } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import SoftInput from "components/SoftInput";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { popupAction } from "store/actions/actions";
import JoyRide from "react-joyride";
import { steps } from "./data/stepData";
import SoftSnackbar from "components/SoftSnackbar";
import { clearMessage } from "store/actions/actions";
import { Formik } from "formik";
import * as Yup from "yup";
// import FormField from "../Profile/components/FormField";


import FormField from "../../pages/Profile/components/FormField";
import { useNavigate } from "react-router-dom";
function Default() {
  const userData = useSelector((state) => state.auth.auth.userdata);
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const [buttonDiable, setButtonDisable] = useState(true);
  const [agreeFlag, setAgree] = useState(false);
  const navigate = useNavigate();

  const [initialValue, SetNewInitialValue] = useState(userData?.Retroactive_initial_Welcome ?? "");
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const updateInitialValue = () => {
    const values = {
      Retroactive_initial_Welcome: initialValue,
      welcomePage_flag: agreeFlag,
    };
    console.log("initialValue..", initialValue);
    dispatch(popupAction({ id: UserId, data: values, token }));
  };

  const [run, setRun] = useState(false);
  const tour = () => {
    setRun(true);
  };

  // const tourstart = (data) => {
  //   if (data.action == "skip") {
  //     setRun(false);
  //   }
  // };

  let validate = Yup.object({
    Retroactive_initial: Yup.string().required("Please Enter Initial Name"),
  });


  let handleSubmit = (values, actions) => {
    // if (isLastStep) {
    submitForm(values, actions);
    // } else {
    //   setActiveStep(activeStep + 1);
    //   actions.setTouched({});
    //   actions.setSubmitting(false);
    // }
    // console.log("hello", values);
  };

  const tourstart = (data) => {
    console.log("action--", data.action);
    // if (data.action == "close") {
    //     navigate("/services");
    // }
  };
  // useEffect(() => {
  //   setTimeout(() => setRun(true), 500);
  // }, [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <div className="tourdiv">
        <button onClick={tour} className="touricon">
          <span className="iconmiddle" />
          <span className="iconborder" />
        </button>
      </div> */}
      <Formik
        initialValues={{
          Retroactive_initial_Welcome: initialValue,
          welcomePage_flag: agreeFlag,
        }}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ handleChange, touched, isSubmitting, errors, values, setFieldValue }) => {

          useEffect(() => {
            validation_flieds();
          }, [values]);
          const validation_flieds = () => {
            let {
              Retroactive_initial_Welcome,
              welcomePage_flag
            } = values;
            if (
              Retroactive_initial_Welcome &&
              welcomePage_flag
            ) {
              setButtonDisable(false);
            }
          };
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
                      // ml={45}
                      />
                    )}

                    <Box sx={{ width: "100%" }} mt={2}>
                      <SoftBox>
                        <h2 style={{ textAlign: "center", color: "#344767" }}>
                          Welcome to the Buser Institute{" "}
                        </h2>
                        <h2 style={{ textAlign: "center", color: "#344767" }}>
                          And
                        </h2>
                        <h2 style={{ textAlign: "center", color: "#344767" }}>
                          Thank you for your interest in becoming a client
                        </h2>
                        <br />
                        <p style={{ textAlign: "justify" }}>
                          We are proud to say that we are the gold-standard for remote and personalised
                          Corrective Exercise Therapy with peer-reviewed proven results. Here on your
                          Dashboard will be able to meet with a Buser Institute Therapist in a variety of
                          ways, from Photo Therapy to Video Messaging Therapy to Live Online Video Sessions
                          to In-Person Travel Therapy at one of our travel clinics. In any of those cases
                          you will be able to discuss your personal health history in as much detail as you
                          please and ask us any questions you may have about your conditions, your
                          imbalances contributing to your conditions, your recommended therapy and your
                          continued path to your health goals.
                          <br />
                          <br />
                          After evaluating your postural integration, gait and functional tests, you will be
                          given detailed instruction and videos to perform your therapy in the comfort of
                          your home or anywhere in the world that your life takes you.
                          <br />
                          <br />
                          So now, we would like to take a moment to introduce you to our mission, our
                          guiding principles to our process, our commitment to you, and the commitment that
                          we in turn expect from you.
                          <br />
                          <br />
                          <h3 style={{ color: "#344767" }}>Our mission: </h3>
                          <br />
                          The Buser Institute is a complementary healthcare clinic and organization
                          dedicated to the research, development and application of cutting-edge,
                          peer-review validated, functional physiotherapy with clients and other
                          practitioners around the world. As such, we spend a great deal of time and take
                          great care in collecting and safeguarding information from our clients and our
                          community of practitioners, conducting research studies in our dedicated
                          kinesiology lab, publishing articles in peer-reviewed clinical journals, and then
                          offering seminars for other practitioners to incorporate these findings into their
                          practices. Ultimately, we have found that teaching other practitioners to impart
                          this revolutionary therapy to others is far more profound when taught in the
                          context of a case study and the story of a real client. In doing so, we utilize
                          clinically relevant client case information, including client intake data,
                          therapist evaluations, as well as photos and videos obtained in the course of
                          real-world therapy for both archival research analysis and grand round reviews
                          with our practitioner students. We are careful to withhold and protect all
                          confidential information such as personal billing and contact information (i.e.
                          phone numbers, mailing and email addresses, credit card numbers, international
                          fund transfer accounts, etc) from these studies and publications.
                          <br />
                          <br />
                          <h3 style={{ color: "#344767" }}>The process: </h3>
                          <br />
                          In this process we will ultimately evaluate and study almost every physiological
                          system in your body to determine what systems need support to reach your goals.
                          Each client’s case is different from the next, and some clients, and some of their
                          body systems, may need more attention than others. We will figure that out with
                          you, and we will invest a great deal of time in educating you on how to recognize
                          system dysfunctions and give you the tools to address them throughout your life to
                          sustain and continue to enhance your gains. Such a comprehensive approach
                          inherently requires an equally comprehensive Client Intake form. Hence, ours is
                          somewhat more detailed than your average experience with other practitioners.
                          Similarly, our therapist evaluations and many of our treatment approaches also
                          include a significant investment of time and energy to obtain the outcomes our
                          clients frequently achieve. As we say in our clinic,
                          <b> “Anything worth doing, is worth doing well.”</b> To that end, we will teach
                          you how to do it <b>well , </b>
                          but it will be
                          <b> you </b>
                          that must actually
                          <b> do </b>
                          it. Thus, we expect our clients to take personal responsibility for, and an active
                          role in, their health care pathway. We encourage tracking of your conduct of our
                          recommended therapy protocols (exercises and nutrition), and recording daily
                          changes in pain and performance so that your Buser Institute therapist can
                          incorporate that into their clinical decision making process. Only through your
                          commitment and active participation in this program will you achieve the full
                          benefits that this therapy has to offer. And if you do commit and take the actions
                          we recommend and make them habit, it can change your life forever.
                          <br />
                          <br />
                          <h3 style={{ color: "#344767" }}>Our commitment:</h3>
                          <br />
                          Our commitment is to care as much about you as you do, and we look forward to
                          joining you in this journey.
                          <br />
                          <br />
                          In consideration of being allowed to participate in the Buser Institute therapy
                          program, we ask that you consider seriously and agree to the following:
                          <br />
                          <br />
                          <h3 style={{ color: "#344767" }}>Your commitment:</h3>
                          <br />
                          <ul style={{ paddingLeft: "40px" }}>
                            <li>
                              Understand the above process and the expectations of your{" "}
                              <b> active involvement</b> in this program.{" "}
                            </li>
                            <li>
                              <b>Take responsibility </b>for your health, the former things that attributed
                              to your state of health as you know it now, and the present and future actions
                              that can change it forever.{" "}
                            </li>
                            <li>
                              <b>Prioritize</b> your health appropriately commensurate with your goals and
                              expectations.
                            </li>
                            <li>
                              <b>Do the work </b>to make it happen.
                            </li>
                          </ul>
                          <br />I agree to the above :
                          <Grid container spacing={5}>
                            <Grid item xs={6} sm={4} lg={4} mt={-4} ml={20}>
                              <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                                <SoftInput
                                  // onChange={(e) => SetNewInitialValue(e.target.value)}
                                  // value={initialValue}

                                  // className="initalName"
                                  // placeholder="Write initial"
                                  // name="Retroactive_initial"
                                  width="48"
                                  height="48"
                                  className="initialName"
                                  placeholder="Agree"
                                  name="Retroactive_initial_Welcome"
                                  value={values.Retroactive_initial_Welcome}
                                  onChange={handleChange}
                                  errorMsg
                                  error={
                                    errors.Retroactive_initial_Welcome && touched.Retroactive_initial_Welcome
                                  }
                                  success={-
                                    values?.Retroactive_initial_Welcome?.length > 0 &&
                                    !errors.Retroactive_initial_Welcome
                                  }
                                />
                                {/* <SoftButton color="info" onClick={() => updateInitialValue()}>
                          Update
                        </SoftButton> */}
                              </div>
                            </Grid>
                          </Grid>
                          <br />
                          <h3 style={{ color: "#344767" }}>What’s Next:</h3>
                          <br />
                          We now invite you to explore your Dashboard to include:
                          <br />
                          <br />
                          <ul style={{ listStyleType: "square", paddingLeft: "35px" }}>
                            <li>
                              Our various Therapy tabs- see our Photo Therapy, Video Messaging, Live Video
                              Therapy, In-Person Travel Therapy tabs to determine which method of receiving
                              therapy is best for you <a href={"https://buser-photos-gallery.s3.amazonaws.com/screen-capture+-+2023-04-28T141857.275.webm"}>click here </a>
                            </li>
                            <li>Services tab- to determine which type of therapy fits your budget </li>
                            <li>
                              Book Appointments tab- to request a Therapy session. Pre-purchase of a service
                              is required to submit a therapy session request.
                            </li>
                            <li>
                              Contact Us tab- if you have any questions or would like a Buser Institute
                              representative to give you a tour.
                            </li>
                          </ul>
                          <br />
                          Again, thank you for joining our community and we look forward to joining you on
                          your journey to your best self.
                          <br />
                          <br />
                          <b>See you soon!</b>
                        </p>
                        <SoftBox display="flex" alignItems="center">
                        </SoftBox>
                        <SoftBox mt={3}>
                          <Grid container spacing={5}>
                            <Grid item xs={12} sm={4} ></Grid>
                            <Grid item xs={12} sm={4} className="Iaggre"></Grid>
                            <Grid item xs={12} sm={4} >
                              <FormControlLabel
                                style={{
                                  backgroundColor: "rgba(0,0,0,0.04)",
                                  width: "max-content",
                                  marginLeft: "100px",
                                }}
                                pl={2}
                                control={
                                  <Checkbox
                                    // defaultChecked={agreeFlag}
                                    // name="welcomePage_flag"
                                    // onChange={(e) => setAgree(e.target.checked)}

                                    className="stylebox"
                                    defaultChecked={values.welcomePage_flag}
                                    name="welcomePage_flag"
                                    onChange={handleChange}
                                  />
                                }
                                label={"I Agree"}
                              />
                            </Grid>
                          </Grid>
                        </SoftBox>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            pt: 2,
                            marginLeft: "10rem",
                          }}
                          className="nxtButton"
                        >
                          <Box sx={{ flex: "1 1 auto" }} />
                          <SoftButton color="dark"
                            type="submit"
                            disabled={buttonDiable}
                            onClick={() => {
                              dispatch(popupAction({ id: UserId, data: values, token }));
                              navigate("/services");
                              // tour();
                            }}
                          >
                            Submit
                          </SoftButton>
                        </Box>
                      </SoftBox>
                    </Box>
                  </DialogContent>
                </Grid>

                {/* <JoyRide
                  continuous={true}
                  run={run}
                  callback={tourstart}
                  hideCloseButton
                  scrollToFirstStep
                  showProgress
                  showSkipButton
                  showStepsProgress
                  autoStart
                  disableCloseOnEsc
                  disableOverlayClose
                  steps={steps}
                  disableBeacon
                  styles={{
                    options: {
                      beaconSize: 50,
                      overlayColor: "rgba(0, 0, 0, 0.5)",
                      primaryColor: "#3E506F",
                      spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
                      arrowColor: "#fff",
                    },
                  }}
                /> */}

                {/* <SoftSnackbar
                  color={successMessage !== "" ? "success" : "error"}
                  icon="star"
                  title="Buser Institute"
                  content={errorMessage || successMessage}
                  open={errorMessage !== "" || successMessage !== "" ? true : false}
                  onClose={closeErrorSB}
                  close={closeErrorSB}
                  bgWhite
                /> */}
              </SoftBox>
            </>)
        }}
      </Formik>

      <AppBar
      // position={absolute ? "absolute" : navbarType}
      // color="inherit"
      // sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
      // className="headerClass"
      >
        <JoyRide
          //continuous={true}
          run={run}
          callback={tourstart}
          hideCloseButton
          // scrollToFirstStep
          disableScrolling
          showProgress
          showSkipButton
          showStepsProgress
          // autoStart
          disableCloseOnEsc
          isableOverlayClose
          steps={steps}
          disableBeacon
          hideBackButton={true}
          // hideCloseButton={false}
          styles={{
            options: {
              beaconSize: 50,
              overlayColor: "rgba(0, 0, 0, 0.5)",
              primaryColor: "#3E506F",
              spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
              arrowColor: "#fff",
            },
          }}
          locale={{ close: "OK" }}
        />
      </AppBar>

      <Footer />
    </DashboardLayout>
  );
}

export default Default;
