/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "layouts/pages/pricing-page/components/Header";
import Footer from "layouts/pages/pricing-page/components/Footer";
import PricingCards from "layouts/pages/pricing-page/components/PricingCards";
import TrustedBrands from "layouts/pages/pricing-page/components/TrustedBrands";
import Faq from "layouts/pages/pricing-page/components/Faq";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashBordPlan from 'layouts/pages/pricing-page/components/dashbordPrice'

import { getPlanAction, getClientPlanAction } from "store/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllPlanAction } from "store/actions/actions";
import "./style.css";

function PricingPage({ tabValues }) {
  let userType = useSelector((state) => state.auth.auth.userType);
  userType !== "student" ? userType : (userType = "doctor");
  const [loading, setLoading] = useState(true);
  const plans = useSelector((state) => state.auth.plansData);
  const userID = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.auth.idToken);
  const clientId = userID._id;

  const [tabValue, setTabValue] = useState(0);
  const [prices, setPrices] = useState(["59", "89", "99"]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userType === "doctor") {
      if (tabValues === 0) {
        dispatch(getAllPlanAction({ clientId, token }));
      } else {
        dispatch(getClientPlanAction({ userType: "client", clientId, token }));
      }
    } else {
      dispatch(getClientPlanAction({ userType, clientId, token }));
      // dispatch(getPlanAction(userType))
    }
    setLoading(false);
  }, [tabValues]);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);

    if (event.currentTarget.id === "annual") {
      setPrices(["119", "159", "399"]);
    } else {
      setPrices(["59", "89", "99"]);
    }
  };
  // -------------------------test------------------------
  // console.log(plans,"sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
  return (
    // <PageLayout>
    <div className="pricing_card_container">
      {/* <Header tabValue={tabValue} tabHandler={handleSetTabValue} /> */}
      <Container>
        <PricingCards plans={plans} prices={prices} loading={loading} />
        {/* <TrustedBrands /> */}
        {/* <Faq /> */}
      </Container>
      <SoftBox mt={8}>{/* <Footer /> */}</SoftBox>
      {/* </PageLayout> */}
    </div>
  );
}

PricingPage.propTypes = {
  tabValues: PropTypes.checkPropTypes.string,
};

export default PricingPage;
