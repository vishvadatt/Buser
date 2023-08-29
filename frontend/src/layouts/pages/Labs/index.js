// @mui material components
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

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
import { findOneUserAction, reportListAction, setLabsTab } from "../../../store/actions/actions";
import LabsCard from "./LabsCard";
import LabsForm from "./LabsForm";
import DialogBox from "../DialogBox/index";
import ClientList from "./ClientList";

function Labs() {
  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const tabValue = useSelector((state) => state.auth.labsTabValue);
  const userType = useSelector((state) => state?.auth?.auth?.userType);

  const handleSetTabValue = (event, newValue) => {
    dispatch(setLabsTab(newValue));
  };

  useEffect(() => {
    dispatch(findOneUserAction({ userId: UserId, token: token }));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      {userType === "doctor" && (
        <>
          <AppBar position="static">
            <Tabs
              style={{ marginTop: "10px" }}
              orientation={tabsOrientation}
              value={tabValue}
              onChange={handleSetTabValue}
            >
              <Tab style={{ fontWeight: "bold" }} label="Client Reports" />
              <Tab style={{ fontWeight: "bold" }} label="My Reports" />
            </Tabs>
          </AppBar>

          <SoftBox py={1}>
            {tabValue === 0 && <ClientList />}
            {tabValue === 1 && <LabsCard />}
          </SoftBox>
        </>
      )}
      {userType !== "doctor" && <LabsCard />}
      <Footer />
      <DialogBox open={informConsentStatus} />
    </DashboardLayout>
  );
}

export default Labs;
