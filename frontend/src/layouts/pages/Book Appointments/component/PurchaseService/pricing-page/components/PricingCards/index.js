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
import { useNavigate } from "react-router-dom";
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
import DialogBox from "../../../../../../DialogBox/index";

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

function PricingCards({ plans, loading, serviceName }) {
  // let path = window.location.href;
  // let splitPath = path.split("/");
  // const id = splitPath[4].split("=");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerId = useSelector((state) => state.auth.auth.customerId);
  const paymentId = useSelector((state) => state.auth.paymentInformation);
  const userId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const planId = useSelector((state) => state.auth.setPlanId);
  const sessionId = useSelector((state) => state.auth.sessionId);
  // const serviceId = useSelector((state) => state.auth.serviceId);
  // const autoDebitValue = useSelector((state) => state.auth.autodebit);
  // const userData = useSelector((state) => state.auth.auth.userdata);
  const servicePlan = useSelector((state) => state.auth.auth.userdata?.servicePlan);
  const [arrowColor, setArrowColor] = useState(false);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);

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
      navigate(`/purchase-service?servicename=${serviceName}`);
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
  // let liveHttpsSuccess = "https://app.buserinstitute.com/#/services";
  let liveClientIntakeSuccess = "https://app.buserinstitute.com/#/book-appointments/timeSlot";
  let liveServicesSuccess = "https://app.buserinstitute.com/#/services";
  let liveHttpsCancel = "https://app.buserinstitute.com/#/dashboard/plans/cancel";

  let localBookappointmentSuccess = `http://localhost:3000/#/book-appointments/timeSlot`;
  let localServicesSuccess = "http://localhost:3000/#/services";
  let localCancel = "http://localhost:3000/#/dashboard/plans/cancel";

  //let liveSuccess = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/services";
  //let liveCancel = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/dashboard/plans/cancle";
  
  return (
    <>
      {console.log(plans, "PLANSSSS")}
      {plans &&
        plans.length > 0 &&
        plans?.map((elem, index) => {
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
                  <h4 style={{ color: "#344767" }}>{elem.serviceName}</h4>
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
                  {elem?.Plan &&
                    elem?.Plan?.length > 0 &&
                    elem?.Plan?.map((item, index) => {
                      const checkPlanPurchase = elem?.Plan?.filter((list) => {
                        if (
                          list?.newClient === true &&
                          list?.newClientpurchaseService?.length === 1
                        ) {
                          return list;
                        }
                      });
                      const checkNewClient = elem?.Plan?.find((li) => li.newClient === true);

                      return (
                        <div
                          style={{
                            width: 350,
                            // height:"300px",
                            display: "inline-block",
                          }}
                          key={index}
                        >
                          {loading ? (
                            <Skeletoncomponent />
                          ) : (
                            <DefaultPricingCard
                              badge={{
                                color: "secondary",
                                label: item.packageType && item.packageType,
                              }}
                              price={{ currency: "$", value: item.amount }}
                              // name={{ value: item.name }}
                              specifications={[
                                { label: item.name, includes: true },
                                // { label: "20GB Cloud storage", includes: true },
                                // { label: "Integration help", includes: false },
                                // { label: "Sketch Files", includes: false },
                                // { label: "API Access", includes: false },
                                // { label: "Complete documentation", includes: false },
                              ]}
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
                                      checkPlanPurchase?.length > 0 && item?.newClient === true
                                        ? true
                                        : checkPlanPurchase?.length === 0 &&
                                          item?.newClient === true
                                        ? false
                                        : checkPlanPurchase?.length > 0 && item?.newClient === false
                                        ? false
                                        : checkPlanPurchase?.length === 0 &&
                                          item?.newClient === false &&
                                          checkNewClient
                                        ? true
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
                                          // successURL: liveClientIntakeSuccess,
                                          cancelURL: liveHttpsCancel,
                                          successURL: localBookappointmentSuccess,
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
                      );
                    })}
                </div>
              </div>
              <br />
            </>
          );
        })}
      <DialogBox open={informConsentStatus} />
    </>
  );
}
// Typechecking props for the PricingCards
PricingCards.propTypes = {
  // credit: PropTypes.arrayOf(PropTypes.string).isRequired,
  serviceName: PropTypes.arrayOf(PropTypes.string).isRequired,
  plans: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.arrayOf(PropTypes.boolean).isRequired,
  // description: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default PricingCards;
