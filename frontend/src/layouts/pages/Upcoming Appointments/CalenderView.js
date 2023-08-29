import { useEffect, useMemo, useState } from "react";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import "./styles.css";
import breakpoints from "assets/theme/base/breakpoints";
import moment from "moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { patientPurchaseServiceList } from "store/actions/actions";
import SoftButton from "components/SoftButton";
import { Box, Grid, Paper, Card, Typography, Modal } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import UpdateAppointment from "./UpdateAppointment";
import closeImg from "../../../assets/images/close.png";
import SoftSnackbar from "components/SoftSnackbar";
import { clearMessage, patientCancelAppointment } from "store/actions/actions";
import DialogBox from "../DialogBox/index";
import { findOneUserAction } from "store/actions/actions";
import { useLocation, useNavigate } from "react-router-dom";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
const validationSchema = Yup.object({
  cancelReason: Yup.string().required("Required!"),
});

function CalenderView() {
  const currentTime = moment().format("YYYY-MM-DDTHH:mm:ss");

  const date48 = (date, time) => {
    const startDate = moment(`${date}T${time}`);
    let remainingHours = 48;
    while (remainingHours > 0) {
      startDate.subtract(1, "hour");
      if (startDate.day() === 0 || startDate.day() === 6) {
        continue;
      }
      remainingHours--;
    }
    return startDate.format("YYYY-MM-DDTHH:mm:ss");
    // return moment(`${date}T${time}`)
    //   .subtract(48, "hours")
    //   .format("YYYY-MM-DDThh:mm:ss");
  };

  const date5days = (date, time) => {
    const startDate = moment(`${date}T${time}`);
    let remainingHours = 120;
    while (remainingHours > 0) {
      startDate.subtract(1, "hour");
      if (startDate.day() === 0 || startDate.day() === 6) {
        continue;
      }
      remainingHours--;
    }
    return startDate.format("YYYY-MM-DDTHH:mm:ss");
  };
  const localizer = momentLocalizer(moment);
  const { values } = breakpoints;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.auth.idToken);
  const upcommingAppointments = useSelector((state) => state.auth.upcommingAppointments);
  const upcommingAppointmentPatient = useSelector(
    (state) => state.auth.upcommingAppointmentPatient
  );
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const patientUpcomingAppointmentDate = useSelector(
    (state) => state?.auth?.patientUpcomingAppointmentDate
  );
  const [appointmentList, setAppointmentList] = useState(null);
  const location = useLocation();
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get("date");

  useEffect(() => {
    dispatch(findOneUserAction({ userId: userdata?._id, token: token }));
  }, []);

  const [pastDays, setPastDays] = useState(null);
  const [weekDate, setWeekDates] = useState({
    name: null,
    day: null,
    Date: null,
    time: null,
    patientName: null,
    doctorName: null,
    services: null,
    appointmentTime: null,
    endTime: null,
    startTime: null,
    painDetails: null,
    planDetails: null,
  });
  var currentDate = moment();

  const [weekStartDate, setWeekStartDate] = useState(moment(currentDate.clone().startOf("week")));
  const [weekEndDate, setWeekEndDate] = useState(moment(currentDate.clone().endOf("week")));
  const [doctorSloat] = useState([
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ]);
  const [doctorSloat1] = useState([
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
  ]);
  const [showModel, setShowModel] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const handleClose = () => setShowModel(false);
  const cancelAPICall = () => {
    dispatch({
      type: "SET_UPCOMMING_APPOINTMENTS_PATIENT_ACTION",
      payload: { doctorId: userdata._id, token: token },
    });
  };

  const cancelAppointmet = useSelector((state) => state.auth.cancelAppointmet);

  const myPurchaseServiceList = useSelector((state) =>
    state.auth.myPurchaseServiceList !== undefined ? state.auth.myPurchaseServiceList : []
  );
  const getWeekdata = (weekStartDate1) => {
    let labels = [];
    for (let i = 0; i <= 6; i++) {
      labels.push({
        name: moment(weekStartDate1).add(i, "days").format("dddd"),
        day: moment(weekStartDate1).add(i, "days").format("MMM DD,YYYY"),
        Date: null,
        time: null,
        doctor: null,
        patient: null,
        services: null,
        appointmentTime: null,
        endTime: null,
        startTime: null,
        painDetails: null,
        planDetails: null,
      });
    }
    setWeekDates(labels);
    checkUpcommingAppointment(labels);
    const nextWeekStart = moment(weekStartDate1).add(1, "weeks").startOf("week");
    // const previousWeek = moment(weekStartDate1).subtract(1, 'weeks').startOf('week');
    // var weekStart = currentDate.clone().startOf("week");
    setWeekEndDate(nextWeekStart);
    setWeekStartDate(weekStartDate1);
  };

  useEffect(() => {
    if (userdata.userType === "doctor") {
      // dispatch({
      //   type: "SET_UPCOMMING_APPOINTMENTS_ACTION",
      //   payload: { doctorId: userdata._id, token: token },
      // });
      dispatch({
        type: "DOCTOR_SLOTS_LIST_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
    } else {
      dispatch({
        type: "SET_UPCOMMING_APPOINTMENTS_PATIENT_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
    }
    var currentDate = moment();
    var weekStart = currentDate.clone().startOf("week");
    const weekStart1 = moment().startOf("week");
    // const nextWeekStart = moment(currentDate).add(1, 'weeks').startOf('week');
    const nextWeekEnd = moment(currentDate).subtract(1, "weeks").startOf("week");
    setWeekStartDate(nextWeekEnd);
    setWeekEndDate(weekStart);
    // getWeekdata(weekStart);
    const currentDate1 = moment();
    const currentWeekStart = moment().startOf("week");
    let pastDaysOfWeek = [];

    for (let i = 0; i < currentDate1.day(); i++) {
      const pastDay = moment(currentWeekStart).add(i, "days");
      pastDaysOfWeek.push(pastDay.format("MMM DD,YYYY"));
    }
    setPastDays(pastDaysOfWeek);
  }, []);

  useEffect(() => {
    if (userdata.userType === "doctor") {
      // dispatch({
      //   type: "SET_UPCOMMING_APPOINTMENTS_ACTION",
      //   payload: { doctorId: userdata._id, token: token },
      // });
      dispatch({
        type: "SET_UPCOMMING_APPOINTMENTS_PATIENT_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
      dispatch({
        type: "DOCTOR_SLOTS_LIST_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
    } else {
      dispatch({
        type: "SET_UPCOMMING_APPOINTMENTS_PATIENT_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
    }
  }, [cancelAppointmet]);

  useEffect(() => {
    if (userdata.userType === "doctor") {
      setAppointmentList(upcommingAppointmentPatient);
      // setAppointmentList(upcommingAppointments);
    } else {
      setAppointmentList(upcommingAppointmentPatient);
    }
  }, [upcommingAppointments, upcommingAppointmentPatient, cancelAppointmet]);

  useEffect(() => {
    // const weekStart1 = moment("2023-06-21").startOf("week");
    const weekStart1 = patientUpcomingAppointmentDate
      ? moment(patientUpcomingAppointmentDate).startOf("week")
      : moment().startOf("week");
    checkUpcommingAppointment(weekDate);
    getWeekdata(weekStart1);
  }, [appointmentList]);
  let newPurchaseServiceList;
  var newPurchaseServiceType;
  useEffect(() => {
    if (myPurchaseServiceList[0]?.service.length === 1) {
      newPurchaseServiceList = myPurchaseServiceList.map((a) => ({
        planId: a.planId,
        planName: a.planName,
        serviceName: a.service[0].serviceName,
      }));

      newPurchaseServiceType = newPurchaseServiceList.map((a) => ({
        value: a.planId,
        label: a.planName + "-" + a.serviceName,
      }));
    }
  }, [myPurchaseServiceList]);

  const checkUpcommingAppointment = (weekDate) => {
    let newDate = [];
    let found = false;
    let avai = weekDate;
    if (
      weekDate !== undefined &&
      weekDate.length > 0 &&
      appointmentList !== null &&
      appointmentList.length > 0
    ) {
      for (let i = 0; i < weekDate.length; i++) {
        for (let j = 0; j < appointmentList.length; j++) {
          if (
            moment(weekDate[i].day).format("YYYY-MM-DD") ===
            moment(appointmentList[j].Date).format("YYYY-MM-DD")
          ) {
            found = true;
            newDate.push({
              ...weekDate[i],
              _id: appointmentList[j]._id,
              Date: appointmentList[j].Date,
              time: appointmentList[j].startTime,
              patientName: appointmentList[j].patient[0].name,
              doctorName: appointmentList[j].doctor[0].name,
              services: appointmentList[j]?.Services,
              appointmentTime: appointmentList[j].appointmentTime,
              endTime: appointmentList[j].endTime,
              startTime: appointmentList[j].startTime,
              painDetails: appointmentList[j].painDetails,
              planDetails: appointmentList[j].planDetails,
              address: appointmentList[j].address,
              status: appointmentList[j].Status,
              // patient: appointmentList[j].patient,
              // doctor: appointmentList[j].doctor
            });
          } else {
          }
          found = false;
        }
        if (found) {
          avai.splice(i, 1);
        }
      }
      let camapreDate = [...newDate, ...avai];
      camapreDate.sort(function compare(a, b) {
        var dateA = new Date(a.day);
        var dateB = new Date(b.day);
        return dateA - dateB;
      });

      const result = camapreDate.reduce((acc, cur) => {
        const index = acc.findIndex((obj) => obj.day === cur.day);
        if (index >= 0) {
          acc[index]["patient"] = [
            ...acc[index]["patient"],
            {
              patientName: cur.patientName ? cur.patientName : "",
              time: cur?.time ? cur.time : "",
              Date: cur?.Date ? cur.Date : "",
              startTime: cur?.startTime ? cur.startTime : "",
              endTime: cur?.endTime ? cur.endTime : "",
              _id: cur?._id,
              email: acc[index]["patient"].email,
              UserProfilePIC: acc[index]["patient"].UserProfilePIC,
            },
          ];
          acc[index]["doctor"] = [
            ...acc[index]["doctor"],
            {
              doctorName: cur.doctorName ? cur.doctorName : "",
              time: cur.time ? cur.time : "",
              Date: cur?.Date ? cur.Date : "",
              email: acc[index]["patient"]?.email,
              startTime: cur?.startTime ? cur.startTime : "",
              endTime: cur?.endTime ? cur.endTime : "",
              _id: cur?._id,
              UserProfilePIC: cur?.patient?.UserProfilePIC,
            },
          ];
        } else {
          const obj = { ...cur, day: cur.day };
          obj["patient"] = [
            {
              patientName: cur.patientName ? cur.patientName : "",
              time: cur.time ? cur.time : "",
              Date: cur?.Date ? cur.Date : "",
              startTime: cur?.startTime ? cur.startTime : "",
              endTime: cur?.endTime ? cur.endTime : "",
              _id: cur?._id,
              email: cur?.patient?.email,
              UserProfilePIC: cur?.patient?.UserProfilePIC,
            },
          ];
          obj["doctor"] = [
            {
              doctorName: cur.doctorName ? cur.doctorName : "",
              time: cur?.time ? cur.time : "",
              Date: cur?.Date ? cur.Date : "",
              startTime: cur?.startTime ? cur.startTime : "",
              endTime: cur?.endTime ? cur.endTime : "",
              email: cur?.patient?.email,
              _id: cur?._id,
              UserProfilePIC: cur?.patient?.UserProfilePIC,
            },
          ];
          acc.push(obj);
        }
        return acc;
      }, []);

      setWeekDates(result);
    }
  };

  // 645349affbb464fc8636e1b7 - 2.30

  // 645349a2fbb464fc8636e1b4  - 12

  const handlePreviousWeekData = () => {
    const nextWeekEnd = moment(weekEndDate).subtract(2, "weeks").startOf("week");
    getWeekdata(nextWeekEnd);
  };
  const handleNextWeekData = (val) => {
    const weekstart1 = moment(weekEndDate).startOf("week");
    getWeekdata(weekEndDate);
    setWeekStartDate(weekstart1);
  };

  const handleAppointmentDetails = (item) => {
    setShowModel(true);
    setAppointmentDetails(item);
  };
  const closeErrorSB = () => {
    // setErrorSB(false);
    dispatch(clearMessage());
  };
  const handleCancelAppointment = async (val) => {
    // await dispatch({
    //   type: "SET_CANCEL_APPOINTMENT_STATUS_ACTION",
    //   payload: {
    //     token: token,
    //     appointmentId: appointmentDetails._id,
    //     Date: appointmentDetails.Date,
    //     Time: appointmentDetails.time
    //   }
    // });
    // const weekStart1 = moment().startOf("week");
    // console.log('start date', weekStartDate)
    // // getWeekdata(weekStartDate)
    // checkUpcommingAppointment(weekStartDate)
    // await setShowModel(false);
    dispatch(
      patientCancelAppointment({
        appointmentId: appointmentDetails._id,
        cancelReason: val.cancelReason,
        patientId: userdata._id,
        token: token,
      })
    );

    checkUpcommingAppointment(weekStartDate);
  };

  const apptDetail = (aId) => {
    navigate(`/appointment-details/?id=${aId}&tab=upcDoctor`);
  };

  const CustomEventContent = (event) => {
    return (
      <div
        style={{
          height: "100%",
        }}
        onClick={() => apptDetail(event.event?._id)}
      >
        <div className="slot-info" style={{ padding: ".6rem" }}>
          <div className={`name3 ${event.event?.Status === "Pending" ? "pendingD" : "confirmedD"}`}>
            <strong style={{ textTransform: "capitalize" }}>{event.event.doctorName}</strong>
            <p
              style={{
                fontSize: "11px",
                color: "#364969",
                margin: "5px 0px 0px 0px",
              }}
            >
              {event.event.serviceName}
            </p>
          </div>
          <>
            <Box width={"100%"}>
              <button
                style={{
                  width: "100%",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAppointmentDetails(event.event);
                }}
                className="cancle-btns"
              >
                Cancel
              </button>
            </Box>
          </>
        </div>
      </div>
    );
  };

  return (
    <>
      <p>
        <span style={{ color: "red" }}>
          <strong>Red </strong>
        </span>
        color indicates an appointment is
        <span style={{ color: "red" }}>
          <strong> requested and pending Practitioner confirmation. </strong>
        </span>
        <span style={{ color: "#17c1e8" }}>
          <strong>Blue</strong>
        </span>{" "}
        color indicates an appointment is
        <span style={{ color: "#17c1e8" }}>
          <strong> accepted and confirmed </strong>
        </span>
        by your Practitioner.
      </p>

      {/* {useMemo(
        () => (
          <>
            <SoftBox py={1}>
              <p className="color-detail">
                <span style={{ color: "#17c1e8" }}>Blue</span> color indicates confirmed appointment
                & <span style={{ color: "red" }}>Red </span>color indicates requested appointment.
              </p>
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <SoftBox mb={3} className="upcoming-appointment-container">
                    <div className="main-appointment-div">
                      <div className="week-appointment-div">
                        <div className="slot-div">
                          <div className="slot-time-div-empty" key="slot-time-div-empty"></div>
                          {weekDate &&
                            weekDate.length > 0 &&
                            doctorSloat.map((sol, i) => {
                              return (
                                // <div className="slot-time-div" key={sol}>{parseInt(sol) <= parseInt('11:30') ? `${sol} AM` : `${sol} PM`}</div>
                                <div className="slot-time-div" key={sol}>
                                  {sol}
                                </div>
                              );
                            })}
                        </div>
                        {weekDate &&
                          weekDate.length > 0 &&
                          appointmentList !== null &&
                          weekDate.map((item, i) => (
                            <div className="week-body-div" key={i}>
                              <div
                                className={!pastDays.includes(item.day) ? "week-div" : "beforeDay"}
                              >
                                <div className="table-head">
                                  <div className="week-days">
                                    <div className="week-name">{item?.name}</div>
                                    <p className="week-day">{item?.day}</p>
                                  </div>
                                </div>
                                <div className="body-div">
                                  {doctorSloat.map((slot, i) => {
                                    return (
                                      <>
                                        <div
                                          className="week-appointment"
                                          key={i}
                                          style={{ overflowY: "auto", padding: "unset" }}
                                        >
                                          {userdata.userType === "doctor" &&
                                            item.doctor !== null &&
                                            item.doctor.length > 0 &&
                                            item.doctor[0].doctorName !== "" &&
                                            item.doctor.map((ind, i) => {
                                              console.log("slott", slot,ind);
                                              return ind._id &&  ind.time <= slot && slot <= ind.endTime ? (
                                                <div
                                                  className="slot-info_container"
                                                  key={i}
                                                  // onClick={() => apptDetail(item?.doctor[i]._id)}
                                                >
                                                  <div
                                                    className="slot-info"
                                                    style={{ padding: ".6rem" }}
                                                  >
                                                    <div
                                                      className={`name3 ${
                                                        ind.Status === "Pending"
                                                          ? "pendingD"
                                                          : "confirmedD"
                                                      }`}
                                                    >
                                                      {ind.doctorName}

                                                      <p
                                                        style={{
                                                          fontSize: "11px",
                                                          color: "#364969",
                                                        }}
                                                      >
                                                        {item?.services[0].serviceName}
                                                      </p>
                                                    </div>

                                                    {currentTime < data(ind.Date, ind.time) ? (
                                                      <>
                                                        <div className="name4">
                                                          <button
                                                            onClick={() =>
                                                              handleAppointmentDetails(
                                                                item.doctor[i]
                                                              )
                                                            }
                                                            className="cancle-btns"
                                                          >
                                                            Cancel
                                                          </button>
                                                        </div>
                                                      </>
                                                    ) : null}
                                                  </div>
                                                </div>
                                              ) : null;
                                            })}
                                          {userdata.userType === "client" &&
                                            item.doctor !== null &&
                                            item.doctor.length > 0 &&
                                            item.doctor[0].doctorName !== "" &&
                                            item.doctor.map((ind, i) => {
                                              return (ind.doctorName !== "" || ind.time !== "") &&
                                                slot === ind.time ? (
                                                <div className="slot-info-container" key={i}>
                                                  <div className="slot-info">
                                                    <div
                                                      className={`name3 ${
                                                        ind.Status === "Pending"
                                                          ? "pendingD"
                                                          : "confirmedD"
                                                      }`}
                                                    >
                                                      {ind.doctorName}

                                                      <p
                                                        style={{
                                                          fontSize: "11px",
                                                          color: "#364969",
                                                        }}
                                                      >
                                                        {item?.services[0].serviceName}
                                                      </p>
                                                    </div>
                                                    {currentTime < data(ind.Date, ind.time) ? (
                                                      <div className="slot-desc-container">
                                                        <div className="name4"></div>
                                                        <button
                                                          onClick={() =>
                                                            handleAppointmentDetails(item.doctor[i])
                                                          }
                                                          className="cancle-btns"
                                                        >
                                                          Cancel
                                                        </button>
                                                        <div />
                                                      </div>
                                                    ) : (
                                                      ""
                                                    )}
                                                  </div>
                                                </div>
                                              ) : null;
                                            })}
                                        </div>
                                      </>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </SoftBox>
                  {new Date(weekStartDate._d).getTime() !==
                    new Date(moment().startOf("week")._d).getTime() && (
                    <SoftButton
                      type="submit"
                      className="btn"
                      style={{
                        width: "130px",
                        height: "50px",
                        backgroundColor: "#273044",
                        color: "white",
                        float: "left",
                      }}
                      onClick={handlePreviousWeekData}
                    >
                      Previous Week
                    </SoftButton>
                  )}
                  <SoftButton
                    type="submit"
                    className="btn"
                    style={{
                      width: "130px",
                      height: "50px",
                      backgroundColor: "#273044",
                      color: "white",
                      float: "right",
                    }}
                    onClick={() => handleNextWeekData("next")}
                  >
                    Next Week
                  </SoftButton>
                </Grid>
              </Grid>
            </SoftBox>
          </>
        ),
        [upcommingAppointments, weekDate, doctorSloat, upcommingAppointmentPatient]
      )} */}
      <Box
        sx={{
          overflowX: "scroll",
        }}
      >
        <Calendar
          localizer={localizer}
          defaultDate={date ?? ""}
          events={upcommingAppointmentPatient}
          views={["week"]}
          defaultView="week"
          startAccessor="start"
          endAccessor="end"
          components={{
            event: CustomEventContent,
          }}
          min={new Date(0, 0, 0, 8, 0)} // Minimum selectable time (8:00 AM)
          max={new Date(0, 0, 0, 20, 0)} // Maximum selectable time (8:00 PM)
          step={30} // Step size for time slots in minutes (30 minutes)
        />
      </Box>
      <Modal
        open={showModel}
        onClose={() => setShowModel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="cancelAppointment">
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Cancel Appointment
          </Typography>

          {appointmentDetails &&
            appointmentDetails.Status === "Confirmed" &&
            appointmentDetails.serviceName === "Client Live Video (Online) Exercise Therapy" &&
            currentTime > date48(appointmentDetails?.Date, appointmentDetails?.startTime) && (
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
                id="modal-modal-title2"
              >
                You will loose your credit, if you still want to cancel then proceed ?
              </Typography>
            )}
          {appointmentDetails &&
            appointmentDetails.Status === "Confirmed" &&
            appointmentDetails.serviceName ===
              "Client Live In-Person and Travel Exercise Therapy" &&
            currentTime > date5days(appointmentDetails?.Date, appointmentDetails?.startTime) && (
              <Typography
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
                id="modal-modal-title3"
              >
                You will loose your credit, if you still want to cancel then proceed ?
              </Typography>
            )}

          <>
            <Formik
              initialValues={{
                cancelReason: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, onSubmitProps) => {
                setTimeout(() => handleClose(), 500);
                handleCancelAppointment(values);
                setTimeout(() => cancelAPICall(), 300);
              }}
            >
              {(formik) => {
                return (
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <br />
                    <div style={{ width: "90%" }}>
                      <textarea
                        style={{ height: "50px" }}
                        type="text"
                        name="cancelReason"
                        placeholder="Reason"
                        className="form-Reason"
                        value={formik.values.cancelReason}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.cancelReason && formik.errors.cancelReason && (
                        <div style={{ color: "red" }}>{formik.errors.cancelReason}</div>
                      )}
                    </div>
                    <br />
                    <Grid item xs={12} lg={6}>
                      <SoftBox display="flex" justifyContent="center">
                        <SoftButton
                          type="submit"
                          variant="gradient"
                          style={{
                            backgroundColor: "#17C1E8",
                            color: "white",
                          }}
                          onClick={formik.handleSubmit}
                        >
                          submit
                        </SoftButton>
                      </SoftBox>
                    </Grid>
                  </Grid>
                );
              }}
            </Formik>
          </>
        </Box>
      </Modal>
      <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </>
  );
}

export default CalenderView;
