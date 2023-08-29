import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import "./style.css";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import FirstForm from "../FirstForm/index.js";
import SoftSnackbar from "components/SoftSnackbar";
import initialValues from "../OnePage/schema/initialValue";
import form from "../OnePage/schema/form.js";
import validations from "../OnePage/schema/validation.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OnePage from "../OnePage/index";
import SecondPage from "../SecondPage/index";
import Thirdpage from "../Thirdpage/index";
import Fourthpage from "../Fourthpage/index";
import Fivepage from "../Fivepage/index";
import Sixpage from "../SixPage/index";
import SevenPage from "../SevenPage/index";
import EightPage from "../EightPage/index";
import NinePage from "../NinePage/index";

import TenthPage from "../TenthPage/index";
import EleventhPage from "../EleventhPage/index";
import TwelthPage from "../Twelthpage/index";
import EighteenPage from "../EighteenPage/index";
import NineteenPage from "../NineteenPage/index";
import Twentypage from "../TwentyPage/index";
import ThirteenthPage from "../ThirteenthPage/index";

import FourteenthPage from "../fourteenPage/index";
import FifteenthPage from "../fifteenPage/index";
import SixteenthPage from "../SixteenPage/index";
import TwentyOnePage from "../twentyOne/index";
import SeventeenPage from "../SeventeenPage/index";
import TwentyTwoPage from "../TwentyTwo/index";
import TwntryThree from "../twentythree/index";
import TwentyFourPage from "../TwentyThreePage/index";
import Intro from "../Intro/index";
import Intro1 from "../Intro1/index";
import Intro2 from "../Intro2/index";
import Intro3 from "../Intro3/index";
import Intro4 from "../Intro4/index";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import pageRoutes from "page.routes";
import { clearMessage } from "store/actions/actions";
import { Box, Typography, Modal } from "@mui/material";
import { axiosInstance } from "services/AxiosInstance";
import { logout, clientIntakeFormGet, getIntakeFormDetailsAction } from "store/actions/actions";
import { turnOffPreviewOfPatientIntakeForm } from "store/actions/actions";

function getSteps() {
  return [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29,
  ];
}

function BasePatientLayout({ stickyNavbar, children }) {
  const [activeStep, setActiveStep] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const doctorShopFromDetails = useSelector((state) => state?.auth?.doctorShopForm?.data?.page1);
  // const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);

  const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm);

  const patientIntakeFormDetail = useSelector((state) => state?.auth?.patientIntakeFormDetail);

  const isLastStep = activeStep === steps.length - 1;
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const latestService = useSelector((state) => state.auth.latestServicePurchased);
  // const isPractitioner = useSelector((state) => state.auth.auth.userType);
  const location = useLocation();

  // const searchParams = new URLSearchParams(location.search);
  // const session = searchParams.get("sessionId");

  // console.log("ssss", session);
  // console.log(showModel);
  // console.log(latestService);

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  useEffect(() => {
    const fetchClient = async () => {
      const response = await axiosInstance.get(`user/checkNewUser/${UserId}`, {
        headers: {
          authorization: token,
        },
      });
      // console.log(response.data.data);
      if (response?.data?.data?.newClient !== true) {
        setShowModel(true);
      }
    };
    fetchClient();
  }, []);

  function getStepContent(stepIndex, formData) {
    switch (stepIndex) {
      case 0:
        return <Intro formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 1:
        return <Intro1 formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 2:
        return <Intro2 formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 3:
        return <Intro3 formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 4:
        return <Intro4 formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 5:
        return <OnePage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 6:
        return (
          <SecondPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 7:
        return (
          <Thirdpage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );

      case 8:
        return (
          <Fourthpage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 9:
        return <Fivepage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 10:
        return <Sixpage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;
      case 11:
        return (
          <SevenPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 12:
        return (
          <EightPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 13:
        return <NinePage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />;

      case 14:
        return (
          <TenthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 15:
        return (
          <EleventhPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 16:
        return (
          <TwelthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 17:
        return (
          <ThirteenthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 18:
        return (
          <FourteenthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 19:
        return (
          <FifteenthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 20:
        return (
          <SixteenthPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 21:
        return (
          <SeventeenPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );

      case 22:
        return (
          <EighteenPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 23:
        return (
          <NineteenPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 24:
        return (
          <Twentypage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 25:
        return (
          <TwentyOnePage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 26:
        return (
          <TwentyTwoPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 27:
        return (
          <TwntryThree formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );
      case 28:
        return (
          <TwentyFourPage formData={formData} stepIndex={stepIndex} setActiveStep={setActiveStep} />
        );

      default:
        return null;
    }
  }

  useEffect(() => {
    if (patientIntakeFormDetail.shouldShowPatientIntakeFormDetail) {
      dispatch(
        getIntakeFormDetailsAction({
          patientId: patientIntakeFormDetail.patientId,
          token: token,
        })
      );
    } else {
      dispatch(
        clientIntakeFormGet({
          patientId: UserId,
          token: token,
        })
      );
    }
  }, []);

  console.log("intake", clientIntakeformDetails);

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);

    // eslint-disable-next-line no-alert
    // alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const handleSteps = (val) => {
    // setActiveStep(val - 1);
    dispatch(setActiveStep(val - 1));
  };

  const handleStepsClick = (no) => {
    getStepContent(no);
  };

  const handleConfirmChange = () => {
    setShowModel(false);
    if (
      latestService === "live_In_Person_and_Travel_Exercise_Therapy_Balance" ||
      latestService === "live_Video_Online_Exercise_Therapy_Balance"
    ) {
      navigate("/book-appointments");
      // console.log(latestService,"aa");
    } else {
      navigate("/labs");
    }
  };
  return (
    <PageLayout>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
          label: "buy now",
        }}
      />
      <>
        <Modal
          open={showModel}
          onClose={() => setShowModel(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="update-appointment-modal"
        >
          <Box className="docConfirm">
            <Typography
              style={{
                textAlign: "center",
                padding: "1rem",
              }}
              id="modal-modal-title"
              variant="h4"
              component="h2"
            >
              Do you want to make any changes in client intake form ?
            </Typography>

            <div className="cancel-divc">
              <SoftButton
                type="submit"
                className="btn-cancelc"
                style={{
                  width: "15%",
                  height: "45px",
                  backgroundColor: "#364969",
                  color: "white",
                  margin: "10px",
                }}
                onClick={() => setShowModel(false)}
              >
                Yes
              </SoftButton>
              <SoftButton
                type="submit"
                className="btn-cancel1c"
                style={{
                  width: "15%",
                  height: "45px",
                  backgroundColor: "#17C1E8",
                  color: "white",
                  margin: "10px",
                }}
                onClick={handleConfirmChange}
              >
                No
              </SoftButton>
            </div>
          </Box>
        </Modal>
      </>
      <Grid
        item
        // lg={12}
        // xs={12}
        style={{ paddingTop: "66px", paddingLeft: "77.5%", display: "flex" }}
        className="soap-control-btn"
      >
        <SoftButton
          style={{ marginRight: "20px", color: "inherit" }}
          onClick={() => {
            navigate("/welcome");
            dispatch(turnOffPreviewOfPatientIntakeForm());
          }}
          className="doctor-soap-btn navbar-btn"
        >
          Back
        </SoftButton>
        <SoftButton
          style={{ color: "inherit", marginRight: "20px" }}
          component={Link}
          to="/"
          onClick={() => dispatch(logout())}
          className="doctor-soap-btn navbar-btn"
        >
          Logout
        </SoftButton>
      </Grid>
      {/* <Link to="/welcome" style={{ color: "inherit", paddingRight: "10%" }}>
          Back
        </Link> */}
      {/* <Link to="/" style={{ color: "inherit" }} onClick={() => dispatch(logout())}>
          Logout
        </Link> */}
      {/* <DashboardNavbar /> */}
      <SoftBox>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={12} sx={{ overflowX: "scroll" }}>
            <Stepper className="step" activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel onClick={() => setActiveStep(label - 1)}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik
              // initialValues={initialValues}
              // enableReinitialize
              initialValues={{ ...initialValues, ...clientIntakeformDetails }}
              enableReinitialize
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                isSubmitting,
                setFieldValue,
                setValues,
                handleChange,
              }) => {
                return (
                  <Form mt={0} id={formId} autoComplete="off">
                    <Card sx={{ height: "100%" }}>
                      <SoftBox p={2}>
                        <SoftBox>
                          {getStepContent(activeStep, {
                            values,
                            touched,
                            formField,
                            errors,
                            setFieldValue,
                            setValues,
                            handleChange,
                          })}
                          <SoftBox
                            mt={2}
                            width="100%"
                            display="flex"
                            justifyContent="space-between"
                          >
                            {activeStep === 0 ? (
                              <SoftBox />
                            ) : (
                              <SoftButton
                                variant="gradient"
                                color="light"
                                onClick={handleBack}
                                className="soap-back"
                              >
                                back
                              </SoftButton>
                            )}
                          </SoftBox>
                        </SoftBox>
                      </SoftBox>
                    </Card>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />

      <Footer />
    </PageLayout>
  );
}

// Setting default values for the props of BasePatientLayout
BasePatientLayout.defaultProps = {
  stickyNavbar: false,
};

// Typechecking props for BasePatientLayout
BasePatientLayout.propTypes = {
  stickyNavbar: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default BasePatientLayout;
