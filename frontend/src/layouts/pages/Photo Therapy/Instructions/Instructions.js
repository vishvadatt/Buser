// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import brand from "assets/images/Logo-01-rm.png";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { AppBar, Tab, Tabs } from "@mui/material";
import "../style.css";

// Data
import { Box, DialogContent } from "@mui/material";
import Welcome from "./Welcome";
import Instruction from "./instruction";
import { useState } from "react";
import PageLayout from "examples/LayoutContainers/PageLayout";

function Instructions() {
  const [tabValue, setTabValue] = useState(0);
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <PageLayout>
      <DashboardNavbar />
      <AppBar position="static">
        <Tabs
          style={{ height: "40px", width: "90%", margin: "1rem auto", border: "1px solid black" }}
          orientation={tabsOrientation}
          value={tabValue}
          onChange={handleSetTabValue}
        >
          <Tab style={{ fontWeight: "bold" }} className="tabClass" label="Photo Therapy Welcome" />
          <Tab
            style={{ fontWeight: "bold" }}
            className="tabClass"
            label="Photo Therapy Instructions"
          />

          {/* <Tab label="Backup" /> */}
        </Tabs>
      </AppBar>

      {tabValue === 0 && <Welcome />}
      {tabValue === 1 && <Instruction />}

      <Footer />
    </PageLayout>
  );
}

export default Instructions;
