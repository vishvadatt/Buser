import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import moment from "moment";
import { axiosInstance } from "services/AxiosInstance";

function AppointmentDetail() {
  const { values } = breakpoints;
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const searchParams = new URLSearchParams(location.search);
  const [appointmentDetail, setAppointmentDetail] = useState({});
  const id = searchParams.get("id");
  const tab = searchParams.get("tab");

  const getappointmentDetail = async () => {
    try {
      const response = await axiosInstance.get(`Appointment/bookAppointmentAllDetail/${id}`, {
        headers: {
          authorization: token,
        },
      });
      console.log(response.data.data.result[0], "nnnnnn");
      setAppointmentDetail(response?.data?.data?.result[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getappointmentDetail();
  }, [id]);

  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  const formatDate = (date) => {
    const eventStartDate = moment(date);
    const formattedDate = `${eventStartDate.format(
      "MMMM"
    )} ${eventStartDate.date()}${getOrdinalSuffix(eventStartDate.date())} ${eventStartDate.year()}`;
    return formattedDate;
  };

  function formatTimeInAmPm(time) {
    return moment(time, "HH:mm").format("hh:mm A");
  }

  const handleBack = () => {
    if (tab === "upcClient") {
      navigate("/upcoming-Clients");
    } else if (tab === "upcDoctor") {
      navigate("/upcoming-appointment");
    }
  };

  // console.log(appointmentDetail);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <SoftBox mb={3} p={1} style={{ display: "flex", justifyContent: "space-between" }}>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                APPOINTMENT DETAIL
              </SoftTypography>
              <SoftButton onClick={handleBack}>Back</SoftButton>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Practitioner Name
          </SoftTypography>
          {appointmentDetail?.doctor && appointmentDetail.doctor[0]?.name
            ? appointmentDetail.doctor[0].name
            : ""}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Patient Name
          </SoftTypography>
          {appointmentDetail?.name}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Appointment Status
          </SoftTypography>
          {appointmentDetail?.Status}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Appointment Date
          </SoftTypography>
          {formatDate(appointmentDetail?.Date)}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Appointment Booked on
          </SoftTypography>
          {formatDate(appointmentDetail?.createdAt)}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Appointment Start Time
          </SoftTypography>
          {formatTimeInAmPm(appointmentDetail?.startTime)}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Appointment End Time
          </SoftTypography>
          {formatTimeInAmPm(appointmentDetail?.endTime)}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Service type
          </SoftTypography>
          {appointmentDetail?.serviceType && appointmentDetail?.serviceType[0]?.serviceName}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            plan type
          </SoftTypography>
          {appointmentDetail?.plan && appointmentDetail?.plan[0]?.name}
        </Grid>

        <Grid item xs={12}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            appointment Description
          </SoftTypography>
          {appointmentDetail?.painDetails}
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default AppointmentDetail;
