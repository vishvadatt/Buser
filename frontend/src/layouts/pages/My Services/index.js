import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import breakpoints from "assets/theme/base/breakpoints";
import "./style.css";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import { useSelector } from "react-redux";
import MyServicesTable from "./My Services Table";
// import UpcomingEvent from "./components/Upcoming Events";

function MyServices() {
  const { values } = breakpoints;
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  let userType = useSelector((state) => state.auth.auth.userType);
  const [tabValue, setTabValue] = useState(1);
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <SoftBox py={1}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <SoftBox>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                MY SERVICES
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox> */}

      {userType === "doctor" ? (
        <>
          <AppBar position="static">
            <Tabs
              style={{ margin: "10px" }}
              orientation={tabsOrientation}
              value={tabValue}
              onChange={handleSetTabValue}
            >
              <Tab style={{ fontWeight: "bold" }} label="Practitioner Service" />
              <Tab style={{ fontWeight: "bold" }} label="Client Service" />
              {/* <Tab label="Backup" /> */}
            </Tabs>
          </AppBar>
        </>
      ) : (
        ""
      )}

      <MyServicesTable tabValue={tabValue} />
      <Footer />
    </DashboardLayout>
  );
}

export default MyServices;
