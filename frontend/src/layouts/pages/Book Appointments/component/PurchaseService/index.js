import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useLocation } from "react-router-dom";
import SoftBox from "components/SoftBox";
import Grid from "@mui/material/Grid";
import Footer from "examples/Footer";
import PricingPage from "./pricing-page/index";
import "./style.css";

const PurchaseService = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceName = decodeURIComponent(searchParams.get("serviceName"));

  // console.log(serviceName);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <PricingPage serviceName={serviceName} />
          </Grid>
        </Grid>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
};

export default PurchaseService;
