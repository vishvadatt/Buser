import Footer from "examples/Footer";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Paper, Card, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import DoctorAppointment from "./DoctorAppointment";
import PatientAppointment from "./PatientAppointment";

function CalendarTimeSlot() {
  const userType = useSelector((state) => state.auth.auth.userType);

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        {userType === "client" ? <PatientAppointment /> : <DoctorAppointment />}
        <br />
        <Grid item xs={12} lg={6}>
          <SoftBox display="flex" justifyContent="flex-end">
            <SoftButton variant="gradient" color="dark" component={Link} to="/calendar">
              Back
            </SoftButton>
          </SoftBox>
        </Grid>
        <Footer />
      </DashboardLayout>
    </>
  );
}

export default CalendarTimeSlot;
