import { Button, Grid, Icon, Skeleton, Stack } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import SoftBox from "components/SoftBox";

import SoftSnackbar from "components/SoftSnackbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import moment from "moment";
import pageRoutes from "page.routes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearMessage,
  dashBordPlanAction,
  intervalAction,
  paymentCheckout,
  planIdAction,
  popupAction,
  serviceIdAction,
  sessionIdAction,
} from "store/actions/actions";
import LoadingPage from "../../../../../common/LoadingPage";
import { logout } from "store/actions/actions";
import DefaultPricingCard from "./DefaultPricingCard";
const payment_Key =
  "pk_test_51LTRs5DCf23U0HEkKGQqbNLjDAd3oZhCBgTlAvGK51q5u40Or6FM8KgdrIneIqux57ESsnkYeZbpNsF0ttB3OVTy000gijMl90";
const stripePromise = loadStripe(payment_Key);
import "./style.css";
import SoftButton from "components/SoftButton";

export const Skeletoncomponent = () => {
  return (
    <div>
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: "rem" }} width={450} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={450} height={60} />
        <Skeleton variant="rounded" width={450} height={60} />
      </Stack>
    </div>
  );
};
const Dashbordplan = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  let userType = useSelector((state) => state.auth.auth.userType);
  userType !== "student" ? userType : (userType = "doctor");
  console.log("userType", userType);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(dashBordPlanAction({ userType, userId, token }));
    setLoading(false);
  }, []);

  const Navigate = useNavigate();
  const dashBordPlans = useSelector((state) => state.auth.dashBordPlan);
  const customerId = useSelector((state) => state.auth.auth.customerId);
  const autoDebitValue = useSelector((state) => state.auth.autodebit);
  const paymentId = useSelector((state) => state.auth.paymentInformation);

  const planId = useSelector((state) => state.auth.setPlanId);
  const serviceId = useSelector((state) => state.auth.serviceId);
  const sessionId = useSelector((state) => state.auth.sessionId);

  const setInterval = useSelector((state) => state.auth.setInterval);
  const isDashBoardPlan = useSelector((state) => state.auth.auth.isDashBoardPlan);
  console.log("isDashBoardPlan..", isDashBoardPlan);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const [loader, setLoader] = useState(false);

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  useEffect(() => {
    const loadSessionUrl = async () => {
      if (paymentId !== "") {
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
          sessionId: paymentId,
        });
        if (result.error) {
          console.log(result.error);
        }
      }
    };
    loadSessionUrl();
  }, [paymentId]);

  useEffect(() => {
    const storeSession = async () => {
      console.log("log1..call Function");
      let isExpiredDate = moment().add(1, setInterval).format("YYYY-MM-DDThh:mm:ssn");
      let path = window.location.href;
      console.log("log1..path", path);
      let splitPath = path.split("/");
      const id = splitPath[4].split("=");
      console.log("log1..id[1]", id);
      if (id[1]) {
        console.log("log1..inside", id[1]);
        dispatch(sessionIdAction(id[1]));
        setLoader(true);
        var index = isDashBoardPlan.findIndex((x) => x == planId);
        index === -1 ? isDashBoardPlan.push(planId) : [];

        dispatch(
          popupAction({
            data: {
              isDashBordPurchase: true,
              isDashBordAutoDebit: autoDebitValue,
              isExpiredDate: isExpiredDate,
              dashBoardPlan: isDashBoardPlan,
            },
            id: userId,
            token: token,
          })
        );
        // setTimeout(() => {
        Navigate("/welcome");
        // }, 1000);
        // setLoader(false)
      }
    };
    storeSession();
  }, []);

  let liveHttpsSuccess = "https://app.buserinstitute.com/#/dashbordplan";
  let liveHttpsCancel = "https://app.buserinstitute.com/#/dashboard/plans/cancle";

  let localSuccess = "http://localhost:3000/#/dashbordplan";
  let localCancel = "http://localhost:3000/#/dashboard/plans/cancle";

  let liveSuccess = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/dashbordplan";
  let liveCancel = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/dashboard/plans/cancle";
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
      <Grid item lg={12} xs={12} style={{ paddingTop: "60px", paddingLeft: "80%" }}>
        <SoftButton>
          <Link to="/" style={{ color: "inherit" }} onClick={() => dispatch(logout())}>
            Logout
          </Link>
        </SoftButton>
      </Grid>
      <SoftBox position="relative" zIndex={10} px={{ xs: 1, sm: 0 }}>
        <h2 className="dashbordPlan">Dashbord Plans</h2>
        <div style={{ textAlign: "center" }}>
          {loader ? <LoadingPage /> : ""}
          {/* <LoadingPage /> */}
        </div>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          {/* {
            true ? <Skeletoncomponent /> : "data display"
          } */}
          {
            // dashBordPlans && dashBordPlans.length !== 0 ? (
            //   // <h3 style={{ textAlign: "center" }}>No Data Found</h3>
            //   <>
            //   <Skeleton  sx={{ bgcolor: 'grey' }}  variant="rounded" width={250} height={200}/>
            //   </>
            // ) :
            // (
            loading ? (
              <Skeletoncomponent />
            ) : (
              dashBordPlans.map((el, i) => (
                <>
                  <h5 style={{ textAlign: "center", color: "black" }}>{el.serviceName}</h5>
                  <Grid container justifyContent="center">
                    <>
                      {el.Plan.map((data, index) => (
                        <Grid item xs={10} lg={4} md={8} key={i} p={2}>
                          <DefaultPricingCard
                            badgeD={{
                              color: data.packageType && data.packageType ? "success" : "secondary",
                              label: data.packageType && data.packageType,
                            }}
                            badge={{
                              color: "secondary",
                              // label: data.packageType ? data.packageType : "starter",
                              label: data.interval === "month" ? "Monthly" : "Yearly",
                            }}
                            price={{ currency: "$", value: data.amount }}
                            specifications={[
                              { label: data.name, includes: true, autodebit: false },
                            ]}
                            description={{ description: data?.description }}
                            action={{
                              type: "internal",
                              route: "",
                              color: "dark",
                              label: (
                                <SoftButton
                                  className="purchaseButton"
                                  fullWidth
                                  variant="gradient"
                                  color="dark"
                                  style={{ color: "#17c1e8" }}
                                  // disabled={isDashBoardPlan.includes(data._id)}
                                  onClick={() => {
                                    dispatch(planIdAction(data._id));
                                    dispatch(serviceIdAction(data.serviceId));
                                    dispatch(intervalAction(data.interval));
                                    dispatch(
                                      paymentCheckout({
                                        autoDebit: autoDebitValue,
                                        customerId: customerId,
                                        priceId: autoDebitValue
                                          ? data.recurringPriceId
                                          : data.oneTimePriceId,
                                        successURL: liveHttpsSuccess,
                                        cancelURL: liveHttpsCancel,
                                        // successURL: localSuccess,
                                        // cancelURL: localCancel,
                                        qty: 1,
                                      })
                                    );
                                  }}
                                >
                                  {isDashBoardPlan.includes(data._id) ? "Purchased" : "Purchase"}
                                  <Icon
                                    style={{
                                      color: "white",
                                      paddingBottom: "16px",
                                      marginLeft: "15px",
                                    }}
                                    sx={{ fontWeight: "bold" }}
                                  >
                                    arrow_forward
                                  </Icon>{" "}
                                </SoftButton>
                              ),
                            }}
                          />
                        </Grid>
                      ))}
                    </>
                  </Grid>
                </>
              ))
            )
            // )
          }
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
    </PageLayout>
  );
};

export default Dashbordplan;
