import PropTypes from "prop-types";
// @mui material components
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import { useEffect, useState } from "react";
// Soft UI Dashboard PRO React example components
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";
// import PopUpDilogBox from "layouts/pages/popup/PopUpDilogBox";
import { Button, Chip, Icon, Skeleton, Stack } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import SoftButton from "components/SoftButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import {
  findOneUserAction,
  paymentCheckout,
  planIdAction,
  popupAction,
  serviceIdAction,
  sessionIdAction,
} from "store/actions/actions";
import { latestServicePurchased } from "store/actions/actions";
import SoftTypography from "components/SoftTypography";
import { EDUCATION_EVENT_LIST_ACTION } from "store/actions/actions";
const payment_Key =
  "pk_test_51LTRs5DCf23U0HEkKGQqbNLjDAd3oZhCBgTlAvGK51q5u40Or6FM8KgdrIneIqux57ESsnkYeZbpNsF0ttB3OVTy000gijMl90";
const stripePromise = loadStripe(payment_Key);

export const Skeletoncomponent = () => {
  return (
    <div>
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "rem" }} width={210} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    </div>
  );
};

function PricingCards({ plans, loading }) {
  let path = window.location.href;
  let splitPath = path.split("/");
  const id = splitPath[4].split("=");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerId = useSelector((state) => state.auth.auth.customerId);
  const paymentId = useSelector((state) => state.auth.paymentInformation);
  const userId = useSelector((state) => state.auth.auth._id);
  const planId = useSelector((state) => state.auth.setPlanId);
  const token = useSelector((state) => state.auth.auth.idToken);
  const serviceId = useSelector((state) => state.auth.serviceId);
  const sessionId = useSelector((state) => state.auth.sessionId);
  const autoDebitValue = useSelector((state) => state.auth.autodebit);
  const servicePlan = useSelector((state) => state.auth.auth.userdata?.servicePlan);
  const userData = useSelector((state) => state.auth.auth.userdata);
  const [arrowColor, setArrowColor] = useState(false);
  const educationPlans =
    plans.filter((list) => list.isEducation === true).length > 0
      ? plans.filter((list) => list.isEducation === true)
      : [];
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const educationEventList = useSelector((state) => state?.auth?.educationEventList);

  console.log(educationEventList, "education");
  const fetchPayment = async () => {
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      sessionId: paymentId,
    });
    if (result.error) {
      console.log(result.error);
    }
  };
  useEffect(() => {
    if (paymentId !== "") {
      return fetchPayment();
    }
  }, [paymentId]);

  useEffect(() => {
    let path = window.location.href;
    let splitPath = path.split("/");
    const id = splitPath[4].split("=");
    if (id[1]) {
      dispatch(sessionIdAction(id[1]));
      var index = servicePlan?.findIndex((x) => x == planId);
      index === -1 ? servicePlan?.push(planId) : [];

      setTimeout(() => {
        dispatch(
          popupAction({
            data: {
              // isPlanPurchase: true,
              servicePlan: servicePlan,
            },
            id: userId,
            token: token,
          })
        );
      }, 1000);
      navigate("/Education");
    }
  }, []);
  useEffect(() => {
    dispatch(findOneUserAction({ userId, token }));
    dispatch(EDUCATION_EVENT_LIST_ACTION({ token }));
  }, []);

  function checkDisable(clientStatus, planStatus) {
    if (clientStatus === true) {
      // is new client
      if (planStatus === true) {
        //plan is also new
        return false;
      } else {
        return true;
      }
    } else {
      // client is old
      if (planStatus === true) {
        return true;
      } else {
        return false;
      }
    }
  }
  // let liveHttpsSuccess = "https://app.buserinstitute.com/#/services";
  let liveClientIntakeSuccess = "https://app.buserinstitute.com/#/client-intake-form";
  let liveServicesSuccess = "https://app.buserinstitute.com/#/Education";
  let liveHttpsCancel = "https://app.buserinstitute.com/#/dashboard/plans/cancle";

  let localBookappointmentSuccess = "http://localhost:3000/#/client-intake-form";
  let localServicesSuccess = "http://localhost:3000/#/Education";
  let localCancel = "http://localhost:3000/#/dashboard/plans/cancle";
  //let liveSuccess = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/services";
  //let liveCancel = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/dashboard/plans/cancle";

  // console.log(educationPlans, "plansss");
  return (
    <>
      {plans &&
        plans.length > 0 &&
        plans.filter((list) => list.isEducation === true).length > 0 &&
        plans
          .filter((list) => list.isEducation === true)
          .map((elem, index) => {
            const checkEducationFunctionPurchase = educationPlans?.filter(
              (list) =>
                list?.Plan[0]?.serviceId === "62e225db1381a49dfb75f8f5" &&
                list?.Plan[0]?.purchaseService.length > 0
            );
            const checkEducationArchivesPurchase = educationPlans?.filter(
              (list) =>
                list?.Plan[0]?.serviceId === "62e226041381a49dfb75f8f6" &&
                list?.Plan[0]?.purchaseService.length > 0
            );

            return (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: "column",
                    gap: 20,
                  }}
                  key={index}
                >
                  {loading ? (
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={450} />
                  ) : (
                    <>
                      {elem?.serviceName === "Buser Institute Foundations of Function Course" && (
                        <>
                          <p style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
                            PRACTITIONER EDUCATION Services (Courses):
                          </p>
                          <p className="serviceDescription1" style={{ marginTop: "-1.4rem" }}>
                            Note: cost of individual course CEU credits for all courses is optional
                            and a separate fee dependent upon your state and license. Please contact
                            admin@buserinstitute.com to calculate your cost for CEU hours.
                          </p>
                          <img
                            width={"100%"}
                            style={{
                              marginBottom: "10px",
                            }}
                            src={
                              "https://buser-chat-media.s3.amazonaws.com/undefined/education%20image-1691585414765.png"
                            }
                          />
                        </>
                      )}

                      {elem?.serviceName ===
                        "Exercise Sequence Generator Software Program Plug-In" && (
                          <>
                            <p style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
                              Practitioner Dashboard Plug-ins
                            </p>
                          </>
                        )}
                      <h4 style={{ color: "#344767" }}>{elem.serviceName}</h4>
                      {elem?.subTitleOne && (
                        <h5 style={{ color: "#344767", marginTop: "-20px" }}>
                          {elem?.subTitleOne}
                        </h5>
                      )}
                      {elem?.subTitleTwo && (
                        <h4
                          style={{
                            color: "#2dceda",
                            fontWeight: "bolder",
                            marginTop: "-15px",
                          }}
                        >
                          {elem?.subTitleTwo}
                        </h4>
                      )}
                      <div className="serviceImageDiv">
                        <img src={elem.serviceImage} className="serviceImageImg" />
                      </div>

                      {elem?.description && (
                        <p
                          dangerouslySetInnerHTML={{ __html: elem.description }}
                          className="serviceDescription"
                        >
                          {/* {elem?.description} */}
                        </p>
                      )}

                      {elem?.noteOne && (
                        <p
                          style={{
                            fontSize: "1rem",
                            width: "100%",
                            marginTop: "-2rem",
                          }}
                          dangerouslySetInnerHTML={{ __html: elem?.noteOne }}
                        >
                          {/* {elem?.noteOne} */}
                        </p>
                      )}
                      {elem?.studentNote && (
                        <p
                          style={{ fontSize: "1rem", marginTop: "-2rem" }}
                          dangerouslySetInnerHTML={{ __html: elem?.studentNote }}
                        >
                          {/* {elem?.studentNote} */}
                        </p>
                      )}

                      {elem?.note && <p className="serviceDescription1">{elem?.note}</p>}

                      {elem?.preReqisites && (
                        <p className="serviceDescription1">{elem?.preReqisites}</p>
                      )}

                      {elem?.serviceName == "Client Video Messaging and Photo Therapy" && (
                        <p
                          style={{
                            fontSize: "16px",
                            color: "red",
                            textAlign: "center",
                          }}
                        >
                          For Video Messaging Therapy, please go to the
                          <span
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              cursor: "pointer",
                              margin: "0 5px",
                            }}
                            onClick={() => navigate("/video-messaging-therapy")}
                          >
                            Video Messaging Therapy
                          </span>
                          tab which will include a video message and postural photo analysis. If you
                          would like to only upload postural photos for Photo Therapy, please
                          proceed to the
                          <span
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              cursor: "pointer",
                              margin: "0 5px",
                            }}
                            onClick={() => navigate("/photo-therapy")}
                          >
                            Photo Therapy
                          </span>
                          tab
                        </p>
                      )}

                      {elem?.serviceName == "Client Live In-Person and Travel Exercise Therapy" && (
                        <p
                          style={{
                            fontSize: "16px",
                            textAlign: "center",
                            marginBottom: "20px",
                          }}
                        >
                          In-Person Travel Clinics are offered periodically in select cities.Check
                          out our calendar
                          <span
                            style={{
                              color: "blue",
                              fontWeight: "bold",
                              cursor: "pointer",
                              margin: "0 5px",
                            }}
                            onClick={() => navigate("/calendar")}
                          >
                            here
                          </span>
                          to find out when The Buser Institute will be conducting In-person Travel
                          Clinics in your city and add you name to our waiting list. New Client
                          introductory sessions are required for new clients.
                        </p>
                      )}
                    </>
                  )}
                  {elem?.serviceName ===
                    "Buser Institute Affiliate Practitioner Certification Course Modules 1-4" && (
                      <>
                        <SoftBox>
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography
                                style={{ color: "#344767", fontSize: "16px", marginBottom: 0 }}
                              >
                                <b>Affiliate Practitioner Certification Modules 1-4 Descriptions</b>
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <p style={{ color: "#344767", fontSize: "16px", marginBottom: 0 }}>
                                  {" "}
                                  <b> Module 1 (12 hrs):</b> <br />
                                  <b>Buser Institute Principles</b>:{" "}
                                  <u>“Kinetic Chains, Dysfunction, Directionality and Strain”</u>
                                  <br />
                                  <li>
                                    {" "}
                                    <b>Review:</b> “The Posturelate” principles including the
                                    Collapsing Tendency, the Anti-Gravity Kinetic Chain (AGKC),
                                    Hierarchy of the Nervous System, Priorities of PhysioTherapy
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Functional Tests:</b> Primary Kinetic Chain tests (identifying
                                    Directionality and Disconnects)
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Flight Time:</b> Sagittal Plane Posture, Primary Functional
                                    Tests, Directionality, Disconnects
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Documentation:</b> Patient Intake & Practitioner SOAP,
                                    Metabolic and Neuro surveys overview
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Exercises:</b> Symptom Exercises, AGKC exercises
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Sequences:</b> Symptom sequences, Directional Sequences,
                                    Disconnect Sequences
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Neurology:</b> Functional Neurology Priorities of Work,
                                    Transneural Degeneration
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Biochemistry:</b> Functional Nutrition Priorities of Work,
                                    Inflammation, Circulation
                                  </li>
                                  <br />
                                  <b> Module 2 (12 hrs):</b> <br />
                                  <b>Buser Institute Principles</b>:{" "}
                                  <u>
                                    “Load Joints, Functional Joint Mechanics, Peripheral Kinetic
                                    Chains and Compensation”
                                  </u>
                                  <br />
                                  <li>
                                    {" "}
                                    <b>Review:</b> The Line of Gravity, Center of Gravity
                                    stabilization and Load Joint relationships. Functional Joint
                                    Mechanics in positions and exercises and gait. Review of the
                                    neurology of joint proprioception (feedback and feed-forward),
                                    Cerebellum and Cerebellar Nuclei in relation to Load Joints.
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Functional Tests:</b> Secondary Functional Tests, Posture and
                                    Gait Analysis
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Flight Time:</b> Frontal Plane Posture, Deconflicting Weakness
                                    & Compensation
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Exercises:</b> Loading Exercises, Joint Neutralization
                                    Exercises, Compensation Restructuring Exercises
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Sequences:</b> Postural Therapy Sequences
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Neurology:</b> Mitochondrial Biogenesis
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Biochemistry:</b> Oxygen Delivery
                                  </li>
                                  <br />
                                  <b> Module 3 (12 hrs):</b> <br />
                                  <b>Buser Institute Principles</b>:{" "}
                                  <u>“The Anti-Gravity Kinetic Chain in Posture and Movement”</u>
                                  <br />
                                  <li>
                                    {" "}
                                    <b>Review:</b> Collapsing Tendency of Skeleton, The muscles of the
                                    AGKC. The AGKC in Posture (Torque due to Gravity vs Torque due to
                                    the AGKC), Posture to Gait (Righting Reflex and Central Drive
                                    Patterns), and Functional Movements. AGKC therapy vectors. Review
                                    of the Vestibular system, the Corpus Callosum, Hemisphericity,
                                    Intermediolateral Cell Column and Pyramidal distribution of muscle
                                    activation.
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Functional Tests:</b> AGKC muscle tests, Peripheral Chain
                                    muscle tests
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Flight Time:</b> Individual joint mechanic aberrations
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Exercises:</b> Position Exercises for Joint Distraction and
                                    AGKC Activation, AGKC Challenge exercises, IML Exercises
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Sequences:</b> AGKC Muscle Sequences, AGKC Sequence, Peripheral
                                    Chain Sequences
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Neurology:</b> Central Axis Dysglycemia
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Biochemistry:</b> Glucose handling
                                  </li>
                                  <br />
                                  <b> Module 4 (12 hrs):</b> <br />
                                  <b>Buser Institute Principles</b>:{" "}
                                  <u>
                                    “Foundation Therapy, Fit for Life, Functional Fitness, Integrated
                                    Systems Training”
                                  </u>
                                  <br />
                                  <li>
                                    {" "}
                                    <b>Review</b> of compensatory patterns. Biomechanics of Postural
                                    Challenges (Origins, Insertions, Actions, Reverse Actions),
                                    Functional Activities of Daily Living (FADLs), Functional Fitness.
                                    Review of Muscle-Organ-Gland Associations, Embryonic and
                                    Sclerotogenous relationships and their effect on muscle function,
                                    Energy Systems.{" "}
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Functional Tests:</b> Compensation Tests, Postural Challenge
                                    tests, ADL Tests, Functional Fitness Tests
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Flight Time:</b> Linking Compensatory Biomechanics (Peeling the
                                    Onion), Modern vs Classical Fitness, Geographic and Societal
                                    trends (West vs East)
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Exercises:</b> Postural Challenge Exercises, Isometric
                                    Exercises
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Sequences:</b> Postural Challenge Sequences, FADL Sequences,
                                    Functional Fitness Workouts
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Neurology:</b> Plasticity and myelination, Brain Area
                                    Localization, Integration of Neuro Surveys
                                  </li>
                                  <li>
                                    {" "}
                                    <b>Biochemistry:</b> Brain-Gut Axis, Integration of Metabolic
                                    Surveys
                                  </li>
                                </p>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </SoftBox>
                      </>
                    )}
                  {educationEventList &&
                    educationEventList.length > 0 &&
                    educationEventList.filter((item) => item.serviceName === elem.serviceName)
                      .length > 0 && (
                      <SoftBox
                        display={"flex"}
                        width={"100%"}
                        justifyContent={"space-around"}
                        gap={"20px"}
                        flexWrap={"wrap"}
                      >
                        {educationEventList
                          .filter((item) => item.serviceName === elem.serviceName)
                          .map((item, i) => (
                            <SoftBox key={i} className="event-box">
                              <SoftTypography sx={{ fontSize: "16px" }}>
                                {item?.title}
                              </SoftTypography>
                              <SoftBox
                                className="date-box"
                                onClick={() => navigate("/Education-Material/EducationEvents")}
                              >
                                {item?.startDate}
                              </SoftBox>
                            </SoftBox>
                          ))}
                      </SoftBox>
                    )}

                  {elem?.serviceName === "Advanced Education Topic Seminars" && (
                    <SoftBox>
                      <p style={{ color: "#2dceda", marginBottom: 0 }}>COMING SOON</p>
                      <p className="serviceDescription">
                        Request to enroll and your name will be added to waiting list. We will
                        contact you as soon as the course becomes available.
                      </p>
                      <p
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Advanced Education Topic Seminars
                      </p>
                      <p style={{ fontSize: "16px", marginBottom: 0 }}>
                        {" "}
                        <u> Topics Include:</u>
                      </p>
                      <p style={{ fontSize: "16px", marginBottom: 0 }}>
                        (1 day Seminar Extracurricular and Post-Graduate Learning for each Topic)
                      </p>
                      <Typography
                        style={{ color: "#344767", fontSize: "16px", marginBottom: 0 }}
                      >
                        <b>Dates and locations</b>
                      </Typography>
                      <ul
                        style={{
                          fontSize: "16px",
                          paddingLeft: "15px",
                          paddingBottom: "10px",
                        }}
                      >
                        <li>
                          {" "}
                          Neurology of Posture, Advanced Postural Analysis and Implications-{" "}
                          <b>October 5, 2024</b>
                        </li>
                        <li>
                          {" "}
                          Neurology of Gait, Advanced Gait Analysis and Implications-{" "}
                          <b>October 6, 2024</b>
                        </li>
                        <li>
                          {" "}
                          Neurology of Functional Tests, Advanced Functional Analysis and
                          Implications- <b>December 2024 (date & location TBD)</b>
                        </li>
                        <li>
                          {" "}
                          Neurology of the Anti-Gravity Kinetic Chain, Advanced Muscle Test
                          Analysis and Implications-{" "}
                          <b>December 2025 (date & location TBD)</b>
                        </li>
                        <li>
                          {" "}
                          Movement-Muscle-Organ-Gland Associations-{" "}
                          <b>February 2025 (date & location TBD)</b>
                        </li>
                        <li>
                          {" "}
                          Movement-Muscle-Organ-Gland Analysis and Implications-{" "}
                          <b>February 2025 (date & location TBD)</b>
                        </li>
                        <li>
                          {" "}
                          Functional Blood Biochemistry Integration-{" "}
                          <b>April 2025 (date & location TBD)</b>
                        </li>
                        <li>
                          {" "}
                          Functional Brain Biochemistry Integration-{" "}
                          <b>April 2025 (date & location TBD)</b>
                        </li>
                      </ul>

                      {/* <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            style={{ color: "#344767", fontSize: "16px", marginBottom: 0 }}
                          >
                            <b>Dates and locations</b>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <p style={{ color: "#344767", fontSize: "16px", marginBottom: 0 }}>
                              {" "}
                              <li>
                                {" "}
                                Neurology of Posture, Advanced Postural Analysis and Implications-{" "}
                                <b>October 5, 2024</b>
                              </li>
                              <li>
                                {" "}
                                Neurology of Gait, Advanced Gait Analysis and Implications-{" "}
                                <b>October 6, 2024</b>
                              </li>
                              <li>
                                {" "}
                                Neurology of Functional Tests, Advanced Functional Analysis and
                                Implications- <b>December 2024 (date & location TBD)</b>
                              </li>
                              <li>
                                {" "}
                                Neurology of the Anti-Gravity Kinetic Chain, Advanced Muscle Test
                                Analysis and Implications-{" "}
                                <b>December 2025 (date & location TBD)</b>
                              </li>
                              <li>
                                {" "}
                                Movement-Muscle-Organ-Gland Associations-{" "}
                                <b>February 2025 (date & location TBD)</b>
                              </li>
                              <li>
                                {" "}
                                Movement-Muscle-Organ-Gland Analysis and Implications-{" "}
                                <b>February 2025 (date & location TBD)</b>
                              </li>
                              <li>
                                {" "}
                                Functional Blood Biochemistry Integration-{" "}
                                <b>April 2025 (date & location TBD)</b>
                              </li>
                              <li>
                                {" "}
                                Functional Brain Biochemistry Integration-{" "}
                                <b>April 2025 (date & location TBD)</b>
                              </li>
                            </p>
                          </Typography>
                        </AccordionDetails>
                      </Accordion> */}
                    </SoftBox>
                  )}
                  <div
                    style={{
                      width: "100%",
                      // height:"100%",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-evenly",
                      gap: 30,
                    }}
                  >
                    {elem.Plan &&
                      elem.Plan.length > 0 &&
                      elem.Plan.map((item, index) => {
                        return (
                          <>
                            <div
                              style={{
                                width: 350,
                                display: "inline-block",
                              }}
                              key={index}
                            >
                              {loading ? (
                                <Skeletoncomponent />
                              ) : (
                                <DefaultPricingCard
                                  badge={{
                                    color:
                                      item.packageType && item.packageType
                                        ? "success"
                                        : "secondary",
                                    label: item.packageType && item.packageType,
                                  }}
                                  price={{ currency: "$", value: item.amount }}
                                  specifications={[{ label: item.name, includes: true }]}
                                  note={{ note: item?.note }}
                                  description={{ description: item?.description }}
                                  credit={{ credit: item?.purchaseService }}
                                  action={{
                                    type: "internal",
                                    route: "",
                                    color: "dark",
                                    label: (
                                      <SoftButton
                                        color="dark"
                                        variant="gradient"
                                        fullWidth
                                        // disabled={
                                        //   elem?._id === "62e225db1381a49dfb75f8f5" &&
                                        //   checkEducationFunctionPurchase.length === 0
                                        //     ? false
                                        //     : elem?._id === "62e225db1381a49dfb75f8f5" &&
                                        //       checkEducationFunctionPurchase.length > 0 &&
                                        //       checkEducationFunctionPurchase[0].planId === item._id
                                        //     ? true
                                        //     : elem?._id !== "62e225db1381a49dfb75f8f5" &&
                                        //       checkEducationFunctionPurchase.length > 0
                                        //     ? true
                                        //     : elem?._id !== "62e225db1381a49dfb75f8f5" &&
                                        //       checkEducationFunctionPurchase.length > 0
                                        //     ? false
                                        //     : true
                                        // }
                                        onClick={() => {
                                          // setOpenModel((data) => !data)
                                          dispatch(planIdAction(item._id));
                                          dispatch(serviceIdAction(item.serviceId));
                                          dispatch(
                                            latestServicePurchased({
                                              latestServicePurchasedName: elem.walletName,
                                            })
                                          );
                                          dispatch(
                                            paymentCheckout({
                                              customerId,
                                              priceId: item.oneTimePriceId,
                                              successURL:
                                                elem.userType === "client"
                                                  ? liveClientIntakeSuccess
                                                  : liveServicesSuccess,
                                              cancelURL: liveHttpsCancel,
                                              // successURL:
                                              //   elem.userType === "client"
                                              //     ? localBookappointmentSuccess
                                              //     : localServicesSuccess,
                                              // cancelURL: liveHttpsCancel,
                                              // successURL: elem.userType === "client"? localBookappointmentSuccess : localServicesSuccess,
                                              // cancelURL: liveHttpsCancel,
                                              qty: 1,
                                            })
                                          );
                                        }}
                                        style={{ color: "rgb(23, 193, 232)" }}
                                      >
                                        <div>Purchase&nbsp;</div>
                                        <span className="arrow_forward">
                                          {" "}
                                          <Icon
                                            sx={{
                                              fontWeight: "bold",
                                              height: "16.8px",
                                              color: arrowColor && "blue",
                                            }}
                                          >
                                            arrow_forward
                                          </Icon>
                                        </span>
                                      </SoftButton>
                                    ),
                                  }}
                                />
                              )}
                            </div>
                          </>
                        );
                      })}
                  </div>
                </div>
                <br />
              </>
            );
          })}
    </>
  );
}
// Typechecking props for the PricingCards
PricingCards.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.array).isRequired,
  loading: PropTypes.arrayOf(PropTypes.boolean).isRequired,
};
export default PricingCards;
