// @mui material components
import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// Soft UI Dashboard PRO React base styles
const moment = require("moment");
import { useEffect, useMemo, useState } from "react";
import Calendar from "examples/Calendar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import SoftButton from "components/SoftButton";
import SoftSnackbar from "components/SoftSnackbar";
import {
  createEventAction,
  eventListAction,
  clearMessage,
  upcomingClientAction,
  upcomingTotalAppointmentAction,
  setUpcomingClientAppointmentDate,
  setPatientUpcomingAppointmentDate,
  getTotalPendingAppointmentAction,
  getTotalPendingClientAppointmentAction,
  findOneUserAction,
} from "store/actions/actions";
import DialogBox from "../DialogBox/index";

function calendar() {
  const successMessage = useSelector((state) => state?.auth?.successMessage);

  const errorMessage = useSelector((state) => state?.auth?.errorMessage);
  const token = useSelector((state) => state.auth.auth.idToken);
  const navigate = useNavigate();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date();
  let day = weekday[d?.getDay()];
  let year = [d?.getFullYear()];
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const dispatch = useDispatch();
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const userID = useSelector((state) => state?.auth?.auth);
  const UserID = useSelector((state) => state?.auth?.auth?._id);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const eventList = useSelector((state) =>
    state?.auth?.eventList !== undefined ? state?.auth?.eventList : []
  );

  const upcomingClientList = useSelector((state) =>
    state?.auth?.upcomingClientList !== undefined ? state?.auth?.upcomingClientList : []
  );

  const pendingAppointmentList = useSelector((state) =>
    state?.auth?.pendingAppointmentList !== undefined ? state?.auth?.pendingAppointmentList : []
  );
  const pendingClientAppointmentList = useSelector((state) =>
    state?.auth?.pendingClientAppointmentList !== undefined
      ? state?.auth?.pendingClientAppointmentList
      : []
  );

  const upcomingTotalAppointmentList = useSelector((state) =>
    state?.auth?.upcomingTotalAppointmentList !== undefined
      ? state?.auth?.upcomingTotalAppointmentList
      : []
  );
  console.log(eventList, "eventList");
  {
    userType === "client"
      ? useEffect(() => {
          dispatch(eventListAction(token));
          setTimeout(
            () =>
              dispatch(upcomingTotalAppointmentAction({ patientId: userID?._id, token: token })),
            1000
          );
        }, [])
      : useEffect(() => {
          setTimeout(
            () =>
              dispatch(upcomingTotalAppointmentAction({ patientId: userID?._id, token: token })),
            1000
          );
          dispatch(eventListAction(token));
          setTimeout(
            () => dispatch(upcomingClientAction({ doctorId: userID?._id, token: token })),
            1000
          );
        }, []);
  }

  useEffect(() => {
    if (userType === "client") {
      dispatch(getTotalPendingAppointmentAction({ patientId: userID?._id, token: token }));
    } else if (userType === "doctor") {
      dispatch(getTotalPendingAppointmentAction({ patientId: userID?._id, token: token }));
      dispatch(getTotalPendingClientAppointmentAction({ doctorId: userID?._id, token: token }));
    }
  }, []);

  useEffect(() => {
    dispatch(findOneUserAction({ userId: UserID, token }));
  }, []);

  const eventData = () => {
    dispatch(eventListAction({ doctorId: userID?._id }));
  };

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  const validationSchema = Yup.object({
    title: Yup.string().trim().required("Required!"),
    startTime: Yup.string().required("Required!"),
    //email: Yup.string().email("Please enter a valid email address.").required("Required!"),
    endTime: Yup.string().required("Required!"),
    description: Yup.string().trim().required("Required!"),
  });

  const handleEventClick = (info) => {
    console.log(info, "onfo");
    var eventObj = info?.event;
    const date = moment(info.event._instance.range.start).format("YYYY-MM-DD");
    console.log("date", date);
    dispatch(setUpcomingClientAppointmentDate(date));
    if (eventObj?.id === "upcomingClient") {
      navigate(`/upcoming-Clients/?date=${date}`);
    } else if (eventObj?.id === "upcomingAppointment") {
      navigate(`/upcoming-appointment/?date=${date}`);
    } else {
      navigate(`/upcoming-Events/event_detail?id=${eventObj._def.extendedProps._id}&root=calender`);
    }
  };

  const handleEventClickPatient = (info) => {
    var eventObj = info?.event;
    const date = moment(info.event._instance.range.start).format("YYYY-MM-DD");
    dispatch(setPatientUpcomingAppointmentDate(date));
    if (eventObj?.id === "upcomingAppointment") {
      navigate(`/upcoming-appointments/?date=${date}`);
    } else {
      navigate(`/upcoming-Events/event_detail?id=${eventObj._def.extendedProps._id}`);
    }
  };

  const multipleEvent = [
    upcomingClientList,
    upcomingTotalAppointmentList,
    pendingClientAppointmentList,
    pendingAppointmentList,
  ];

  console.log("multipleEvent", multipleEvent);

  const totalAppointmentList = [upcomingTotalAppointmentList, pendingAppointmentList]; //pendingAppointmentList
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <>
          {userType === "client" ? (
            <SoftBox py={5}>
              <Grid item xs={12} lg={7}>
                {useMemo(
                  () => (
                    <Calendar
                      header={{ title: "calendar", date: `${day} ${year}` }}
                      headerToolbar={{
                        left: "prev,next",
                        center: "title",
                        right: "",
                      }}
                      initialView="dayGridMonth"
                      events={eventList}
                      eventSources={totalAppointmentList}
                      editable={false}
                      selectable={false}
                      selectMirror={true}
                      displayEventEnd={true}
                      progressiveEventRendering={true}
                      eventClick={handleEventClickPatient}
                    />
                  ),
                  [upcomingTotalAppointmentList, pendingAppointmentList]
                )}
              </Grid>
            </SoftBox>
          ) : (
            <>
              <SoftBox py={3}>
                <Grid item xs={12} lg={7}>
                  {useMemo(
                    () => (
                      <Calendar
                        header={{ title: "calendar", date: `${day} ${year}` }}
                        headerToolbar={{
                          left: "prev,next",
                          center: "title",
                          right: "",
                        }}
                        initialView="dayGridMonth"
                        events={eventList}
                        eventSources={multipleEvent}
                        allDaySlot={false}
                        editable={false}
                        selectable={false}
                        selectMirror={true}
                        eventClick={handleEventClick}
                      />
                    ),
                    [upcomingClientList, multipleEvent, pendingClientAppointmentList]
                  )}
                </Grid>
              </SoftBox>
              {/* <>
                {
                  <div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box className="events">
                        <Typography
                          style={{
                            textAlign: "center",
                          }}
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Create Event
                        </Typography>
                        <>
                          <Formik
                            initialValues={{
                              title: "",
                              description: "",
                              Date: date,
                              start: "",
                              startTime: "",
                              endTime: "",
                              doctorId: userID._id,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values, onSubmitProps) => {
                              setTimeout(() => handleClose(), 500);
                              dispatch(
                                createEventAction({
                                  values,
                                })
                              );
                              setTimeout(() => eventData(), 3000);
                              // onSubmitProps.resetForm();
                              // setTimeout(() => dispatch(doctoSlotData({ doctorId: location.state.doctorid, Date: location.state.date })), 500);
                            }}
                          >
                            {(formik) => {
                              return (
                                // <Grid container spacing={2} >
                                <Grid>
                                  <br />
                                  <input
                                    style={{ height: "50px" }}
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Title"
                                    // value={userID.name}
                                    onChange={formik?.handleChange}
                                    onBlur={formik?.handleBlur}
                                  />
                                  {formik?.touched?.title && formik?.errors?.title && (
                                    <div style={{ color: "red" }}>{formik?.errors?.title}</div>
                                  )}
                                  <br />
                                  <input
                                    style={{ height: "50px" }}
                                    type="time"
                                    placeholder="12:00am"
                                    name="startTime"
                                    className="form-control"
                                    // placeholder="Start Time"
                                    // value={userID.email}
                                    onChange={formik?.handleChange}
                                    onBlur={formik?.handleBlur}
                                  />
                                  {formik?.touched?.start && formik?.errors?.start && (
                                    <div style={{ color: "red" }}>{formik?.errors?.start}</div>
                                  )}
                                  <br />
                                  <input
                                    style={{ height: "50px" }}
                                    type="time"
                                    name="endTime"
                                    className="form-control"
                                    data-placeholder="End Time"
                                    // value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  {formik?.touched?.end && formik?.errors?.end && (
                                    <div style={{ color: "red" }}>{formik?.errors?.end}</div>
                                  )}
                                  <br />
                                  <textarea
                                    style={{ height: "100px" }}
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    placeholder="Description"
                                    // value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                  />
                                  {formik?.touched?.description && formik?.errors?.description && (
                                    <div style={{ color: "red" }}>
                                      {formik?.errors?.description}
                                    </div>
                                  )}
                                  <br />
                                  <Grid item xs={12} lg={6}>
                                    <SoftBox display="flex" justifyContent="center">
                                      <SoftButton
                                        type="submit"
                                        variant="gradient"
                                        color="dark"
                                        onClick={formik.handleSubmit}
                                      >
                                        Create
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
                  </div>
                }
              </> */}
            </>
          )}
        </>
        <Footer />
        <DialogBox open={informConsentStatus} />
      </DashboardLayout>
    </>
  );
}
export default calendar;
