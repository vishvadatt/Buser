import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SoftBox from "components/SoftBox";
import Grid from "@mui/material/Grid";
import Footer from "examples/Footer";
import PricingPage from "./pricing-page/index";
import "./index.css";

const PurchaseService = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <PricingPage />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default PurchaseService;
