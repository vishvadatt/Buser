// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import "./style.css"

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard PRO React base styles

// Data
import { useMemo } from "react";
import Calendar from "examples/Calendar";
import calendarEventsData from "./Data/CalendarEventsData";
import CalendarRoot from "./Data/CalendarRoot";

const size = (arg) => {
  console.log("calendar", arg.view);
}


function Schedule() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox py={3}>
        {/* <Grid container> */}
        <Grid item xs={12} lg={12}>
          {useMemo(
            () => (
              <Calendar
              style={{border:"1px solid"}}
                header={{ title: "calendar", date: "Monday, 2021" }}
                headerToolbar={false}
                initialView="dayGridMonth"
                initialDate="2021-08-10"
                events={calendarEventsData}
                // initialEvents={calendarEventsData}
                selectable
                // handleWindowResize
                editable
                handleWindowResize={false}
                // windowResize={size}
                updateSize
              />
            ),
            [calendarEventsData]
          )}
        </Grid>
        {/* </Grid> */}
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Schedule;
