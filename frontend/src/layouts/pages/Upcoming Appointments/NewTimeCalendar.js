import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./styles.css";
import PropTypes from "prop-types";
import moment from "moment";

const NewTimeCalendar = ({ CustomEventContent, upcommingAppointmentPatient }) => {
  const localizer = momentLocalizer(moment);

  return (
    <Calendar
      localizer={localizer}
      events={upcommingAppointmentPatient}
      views={["week"]}
      defaultView="week"
      startAccessor="start"
      endAccessor="end"
      components={{
        event: (event)=>{
            console.log("event",event);
        },
      }}
      min={new Date(0, 0, 0, 8, 0)} // Minimum selectable time (8:00 AM)
      max={new Date(0, 0, 0, 20, 0)} // Maximum selectable time (8:00 PM)
      step={30} // Step size for time slots in minutes (30 minutes)
    />
  );
};

export default NewTimeCalendar;

NewTimeCalendar.propTypes = {
  upcommingAppointmentPatient: PropTypes.any.isRequired,
  CustomEventContent: PropTypes.any.isRequired,
};
