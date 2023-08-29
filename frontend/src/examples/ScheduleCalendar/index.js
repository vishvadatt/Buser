/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @fullcalendar components
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Custom styles for Calendar
import CalendarRoot from "examples/Calendar/CalendarRoot";
import { useSelector } from "react-redux";
import "./style.css";
import moment from "moment";
import styled from "styled-components";

function Calendar({ header, ...rest }) {
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const validClassNames = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "pink",
    "booked",
  ];

  const events = rest?.events
    ? rest?.events?.map((el) => ({
        ...el,
        start: el?.startDate,
        end: el?.endDate,
      }))
    : [];
  const eventSources = rest?.eventSources
    ? rest?.eventSources?.map((ele) =>
        ele.map((el) => {
          if (el.title.includes("awaiting")) {
            return {
              ...el,
              className:
                userType === "doctor" ? "event-awaiting-container" : "event-pending-container",
            };
          }
          if (el.title.includes("Requested")) {
            return {
              ...el,
              className: "event-pending-container",
            };
          }
          if (el?.id === "upcomingClient") {
            return {
              ...el,
              className: userType === "doctor" ? "event-pink" : "event-info",
            };
          } else if (el?.id === "upcomingAppointment") {
            return {
              ...el,
              className: userType === "doctor" ? "event-info" : "event-info",
            };
          }
        })
      )
    : [];

  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox pt={1} px={2} lineHeight={1} style={{ display: "flex" }}>
        {header?.title ? (
          <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {header?.title}
          </SoftTypography>
        ) : null}
        {/* {header.date ? (
          <SoftTypography
            component="p"
            variant="button"
            color="text"
            fontWeight="medium"
            style={{ paddingTop: "3px", marginLeft: "10px" }}
          >
            {header.date}
          </SoftTypography>
        ) : null} */}
      </SoftBox>
      <CalendarRoot style={{ padding: "0 0px 8px 4px" }}>
        <FullCalendar
          {...rest}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          eventSources={eventSources}
          events={events}
          height="100%"
          // height="68vh"
        />
      </CalendarRoot>
    </Card>
  );
}

// Setting default values for the props of Calendar
Calendar.defaultProps = {
  header: {
    title: "",
    date: "",
  },
};

// Typechecking props for the Calendar
Calendar.propTypes = {
  header: PropTypes?.shape({
    title: PropTypes?.string,
    date: PropTypes?.string,
  }),
};

export default Calendar;
