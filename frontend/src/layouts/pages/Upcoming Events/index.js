import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import breakpoints from "assets/theme/base/breakpoints";
import UpcomingEvent from "./components/Upcoming Events";

function UpcomingEvents() {
  const { values } = breakpoints;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <SoftBox mb={3} p={1}>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                UPCOMING EVENTS
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <UpcomingEvent />
      <Footer />
    </DashboardLayout>
  );
}

export default UpcomingEvents;
