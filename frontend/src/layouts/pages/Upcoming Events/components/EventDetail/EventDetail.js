import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { url } from "services/AxiosInstance";
import axios from "axios";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import moment from "moment";

function EventDetail() {
  const { values } = breakpoints;
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const searchParams = new URLSearchParams(location.search);
  const [eventDetail, setEventDetail] = useState({});
  const id = searchParams.get("id");
  const tab = searchParams.get("root");

  useEffect(() => {
    getEventDetail();
  }, [id]);

  const getEventDetail = async () => {
    try {
      const response = await axios.get(`${url}/api/event/eventDetails/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setEventDetail(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const eventStartDate = moment(eventDetail?.startDate);
  const eventEndDate = moment(eventDetail?.endDate);

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
  const formattedDate = `${eventStartDate.format(
    "MMMM"
  )} ${eventStartDate.date()}${getOrdinalSuffix(eventStartDate.date())} ${eventStartDate.year()}`;

  const formattedDate2 = `${eventEndDate.format("MMMM")} ${eventEndDate.date()}${getOrdinalSuffix(
    eventEndDate.date()
  )} ${eventEndDate.year()}`;

  function formatTimeInAmPm(time) {
    return moment(time, "HH:mm").format("hh:mm A");
  }
  const handleBack = () => {
    if (tab === "calender") {
      navigate("/calendar");
    } else {
      navigate("/upcoming-Events");
    }
  };
  // console.log(eventDetail);

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
                EVENT DETAIL
              </SoftTypography>
              <SoftButton onClick={handleBack}>Back</SoftButton>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Event Name
          </SoftTypography>
          {eventDetail?.title}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Event Location
          </SoftTypography>
          {eventDetail?.location}
        </Grid>

        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Event Start Date
          </SoftTypography>
          {formattedDate}
        </Grid>
        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Event End Date
          </SoftTypography>
          {formattedDate2}
        </Grid>
        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Event Start Time
          </SoftTypography>
          {formatTimeInAmPm(eventDetail?.startTime)}
        </Grid>
        <Grid item xs={12} sm={4}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Event End Time
          </SoftTypography>
          {formatTimeInAmPm(eventDetail?.endTime)}
        </Grid>
        <Grid item xs={12}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Event Description
          </SoftTypography>
          {eventDetail?.description}
        </Grid>
        <Grid item xs={12}>
          <SoftTypography variant={"h5"} textTransform="capitalize" fontWeight="bold">
            Note
          </SoftTypography>
          {eventDetail?.note}
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

export default EventDetail;
