// @mui material components
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Plans from "layouts/dashboards/plans/Plans";
import { useSelector } from "react-redux";

function Services() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  let userType = useSelector((state) => state.auth.auth.userType);
  const [tabValue, setTabValue] = useState(0);
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  const handletabvalue = () => setTabValue(0);

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        {userType === "doctor" ? (<>
          <AppBar position="static">
            <Tabs
              style={{ margin: "10px" }}
              orientation={tabsOrientation}
              value={tabValue}
              onChange={handleSetTabValue}
            >
              <Tab style={{ fontWeight: "bold" }} label="Practitioner Services" />
              <Tab style={{ fontWeight: "bold" }} label="Client Services" />
              {/* <Tab label="Backup" /> */}
            </Tabs>
          </AppBar>
        </>) : ""}

        <SoftBox py={3}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <Plans tabValue={tabValue}  />
            </Grid>
          </Grid>
        </SoftBox>

        <Footer />
      </DashboardLayout>
    </>
  );
}

export default Services;
