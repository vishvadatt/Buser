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
const payment_Key =
  "pk_test_51LTRs5DCf23U0HEkKGQqbNLjDAd3oZhCBgTlAvGK51q5u40Or6FM8KgdrIneIqux57ESsnkYeZbpNsF0ttB3OVTy000gijMl90";
const stripePromise = loadStripe(payment_Key);
import DialogBox from "../../../DialogBox/index";

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

function PricingCards({ prices, plans, loading }) {
  let path = window.location.href;
  let splitPath = path.split("/");
  const id = splitPath[4].split("=");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerId = useSelector((state) => state.auth.auth.customerId);
  const paymentId = useSelector((state) => state.auth.paymentInformation);
  const userId = useSelector((state) => state.auth.auth._id);
  const planId = useSelector((state) => state.auth.setPlanId);
  const serviceId = useSelector((state) => state.auth.serviceId);
  const sessionId = useSelector((state) => state.auth.sessionId);
  const token = useSelector((state) => state.auth.auth.idToken);
  const autoDebitValue = useSelector((state) => state.auth.autodebit);
  const servicePlan = useSelector((state) => state.auth.auth.userdata?.servicePlan);
  const userData = useSelector((state) => state.auth.auth.userdata);
  const [arrowColor, setArrowColor] = useState(false);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const withOutEducationPlans =
    plans.filter((list) => list.isEducation === false).length > 0
      ? plans.filter((list) => list.isEducation === false)
      : plans;
  const fetchPayment = async () => {
    // const sessionId = response.data.data.id;
    // console.log(sessionId);
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      sessionId: paymentId,
    });
    if (result.error) {
      // errorToaster(result.error.message);
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
      navigate("/services");
    }
  }, []);
  useEffect(() => {
    dispatch(findOneUserAction({ userId, token }));
  }, []);
  const planDetails = () => {
    // let isExpiredDate = moment().add(1, "month").format("YYYY-MM-DDThh:mm:ssn");
    // console.log("SessionIDdd---", sessionId)
    if (sessionId) {
      try {
        // dispatch(
        //   purchaseDashBordPlan({
        //     id: sessionId,
        //     data: {
        //       type: "plan",
        //       planId: planId,
        //       userId: userId,
        //       serviceId: serviceId,
        //     },
        //   })
        // );
        // navigate("/services");
      } catch (error) {
        console.log("err..", error);
      }
    }
  };
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
  let liveServicesSuccess = "https://app.buserinstitute.com/#/services";
  let liveHttpsCancel = "https://app.buserinstitute.com/#/dashboard/plans/cancle";

  let localBookappointmentSuccess = "http://localhost:3000/#/client-intake-form";
  let localServicesSuccess = "http://localhost:3000/#/services";
  let localCancel = "http://localhost:3000/#/dashboard/plans/cancle";
  //let liveSuccess = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/services";
  //let liveCancel = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/dashboard/plans/cancle";

  return (
    <>
      {withOutEducationPlans &&
        withOutEducationPlans.length > 0 &&
        withOutEducationPlans.map((elem, index) => {
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
                        <p
                          className="serviceDescription1"
                          style={{ width: "70%", marginTop: "-1.4rem" }}
                        >
                          Note: cost of individual course CEU credits for all courses is optional
                          and a separate fee dependent upon your state and license. Please contact
                          admin@buserinstitute.com to calculate your cost for CEU hours.
                        </p> 
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
                      <h4 style={{ color: "#2dceda", fontWeight: "bolder", marginTop: "-15px" }}>
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
                        style={{ fontSize: "1rem", width: "100%", marginTop: "-2rem" }}
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
                      <p style={{ fontSize: "16px", color: "red", textAlign: "center" }}>
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
                      <p style={{ fontSize: "16px", textAlign: "center", marginBottom: "20px" }}>
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
                {elem?.serviceName === "Advanced Education Topic Seminars" && (
                  <SoftBox>
                    <p style={{ color: "#2dceda", marginBottom: 0 }}>COMING SOON</p>
                    <p className="serviceDescription">
                      Request to enroll and your name will be added to waiting list. We will
                      contact you as soon as the course becomes available.
                    </p>
                    <p style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center" }}>
                      Advanced Education Topic Seminars
                    </p>
                    <p style={{ fontSize: "16px", marginBottom: 0 }}>
                      {" "}
                      <u> Topics Include:</u>
                    </p>
                    <p style={{ fontSize: "16px", marginBottom: 0 }}>
                      (1 day Seminar Extracurricular and Post-Graduate Learning for each Topic)
                    </p>
                    <ul style={{ fontSize: "16px", paddingLeft: "15px", paddingBottom: "10px" }}>
                      <li>​SOAP Notes Postural Analysis,</li>
                      <li>Gait Analysis,</li>
                      <li>Functional Tests,</li>
                      <li>AGKC Muscle Tests, </li>
                      <li>Muscle-Organ-Gland Associations, </li>
                      <li>
                        Functional Blood and Brain Biochemistry Integration through Functional
                        Nutrition.
                      </li>
                    </ul>
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
                      {
                        /* const checkPlanPurchase = elem?.Plan?.filter((list) => {
                      if (
                        list?.newClient === true &&
                        list?.newClientpurchaseService?.length === 1
                      ) {
                        return list;
                      }
                    });
                    const checkNewClient = elem?.Plan?.find((li) => li.newClient === true); */
                      }

                      const isSubCategoryOne =
                        item?.type && item?.type === elem?.subCategoryNameOne;
                      const isSubCategoryTwo =
                        item?.type && item?.type === elem?.subCategoryNameTwo;

                      return (
                        <>
                          {isSubCategoryOne && (
                            <>
                              <h5
                                style={{ color: "#6588c5", width: "100%", textAlign: "center" }}
                              >
                                {elem.subCategoryNameOne}
                              </h5>
                              <div className="serviceImageDiv">
                                <img
                                  src={elem?.subCategoryImageOne}
                                  className="serviceImageImg"
                                />
                              </div>
                              <p
                                className="serviceDescription"
                                dangerouslySetInnerHTML={{
                                  __html: elem?.subCategoryDescriptionOne,
                                }}
                              >
                                {/* {elem?.subCategoryDescriptionOne} */}
                              </p>
                            </>
                          )}

                          {isSubCategoryTwo && (
                            <>
                              <h5
                                style={{ color: "#6588c5", width: "100%", textAlign: "center" }}
                              >
                                {elem.subCategoryNameTwo}
                              </h5>
                              <div className="serviceImageDiv">
                                <img
                                  src={elem?.subCategoryImageTwo}
                                  className="serviceImageImg"
                                />
                              </div>
                              <p
                                className="serviceDescription"
                                dangerouslySetInnerHTML={{
                                  __html: elem?.subCategoryDescriptionTwo,
                                }}
                              >
                                {/* {elem?.subCategoryDescriptionTwo} */}
                              </p>
                            </>
                          )}

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
                                      disabled={
                                        elem?.userType === "client"
                                          ? elem?.serviceName !==
                                            "Client Video Messaging and Photo Therapy"
                                            ? checkDisable(userData?.isNewClient, item?.newClient)
                                            : false
                                          : false
                                      }
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
      <SoftBox ml={3}>
        {/* <SoftButton color="info" onClick={() => planDetails()}>Check</SoftButton> */}
      </SoftBox>
      <DialogBox open={informConsentStatus} />
    </>
  );
}
// Typechecking props for the PricingCards
PricingCards.propTypes = {
  credit: PropTypes.arrayOf(PropTypes.string).isRequired,
  prices: PropTypes.arrayOf(PropTypes.string).isRequired,
  plans: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.arrayOf(PropTypes.boolean).isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PricingCards;
