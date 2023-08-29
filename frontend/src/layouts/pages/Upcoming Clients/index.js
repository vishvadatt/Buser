// @mui material components
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import SoftBox from "components/SoftBox";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useDispatch, useSelector } from "react-redux";

// Soft UI Dashboard PRO React base styles

import breakpoints from "assets/theme/base/breakpoints";
import { findOneUserAction } from "../../../store/actions/actions";
import CalenderView from "./CalenderView";
import DialogBox from "../DialogBox/index";
import TableView from "./TableView";

function UpcomingClients() {
  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  //   const tabValue = useSelector((state) => state.auth.labsTabValue);
  const userType = useSelector((state) => state?.auth?.auth?.userType);

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
    //   dispatch(setLabsTab(newValue));
  };

  useEffect(() => {
    dispatch(findOneUserAction({ userId: UserId, token: token }));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <>
        <AppBar position="static">
          <Tabs
            style={{ padding: "10px", width: "250px" }}
            orientation={tabsOrientation}
            value={tabValue}
            onChange={handleSetTabValue}
          >
            <Tab style={{ fontWeight: "bold" }} label="Weekly" />
            <Tab style={{ fontWeight: "bold" }} label="List" />
          </Tabs>
        </AppBar>

        <SoftBox py={1}>
          {tabValue === 0 && <CalenderView />}
          {tabValue === 1 && <TableView />}
        </SoftBox>
      </>

      <Footer />
      <DialogBox open={informConsentStatus} />
    </DashboardLayout>
  );
}

export default UpcomingClients;

{
  /* <SoftTypography
variant={window.innerWidth < values.sm ? "h5" : "h6"}
textTransform="capitalize"
fontWeight="bold"
>
UPCOMING CLIENTS
</SoftTypography> */
}
