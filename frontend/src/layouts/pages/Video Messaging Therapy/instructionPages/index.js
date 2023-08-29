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
import VideoMessagingTherapyInstruction from "./Instruction";
import PhotoTherapyInstructions from "./photoTherapyInstructions";
import PageLayout from "examples/LayoutContainers/PageLayout";

function InstructionPages() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  const handletabvalue = () => setTabValue(0);

  return (
    <>
      <PageLayout>
        <div style={{ padding: "0 2rem " }}>
          <DashboardNavbar />
          <AppBar position="static">
            <Tabs
              style={{ margin: "10px" }}
              orientation={tabsOrientation}
              value={tabValue}
              onChange={handleSetTabValue}
            >
              <Tab style={{ fontWeight: "bold" }} label="Video Message Instructions" />
              <Tab style={{ fontWeight: "bold" }} label="VMT Postural Photo Instructions (Optional)" />
              {/* <Tab label="Backup" /> */}
            </Tabs>
          </AppBar>

          <SoftBox py={3}>
            {tabValue === 0 ? <VideoMessagingTherapyInstruction /> : <PhotoTherapyInstructions />}
          </SoftBox>
        </div>
      </PageLayout>
    </>
  );
}

export default InstructionPages;
