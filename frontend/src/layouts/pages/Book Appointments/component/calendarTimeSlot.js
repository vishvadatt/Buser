import Footer from "examples/Footer";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Grid,
  Paper,
  Card,
  Typography,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import DoctorAppointment from "./DoctorAppointment";
import PatientAppointment from "./PatientAppointment";
import Search from "./search";
import { useDispatch } from "react-redux";
import {
  GET_DOCTOR_BOOKINGS,
  clearMessage,
  patientBookAppointment,
  latestServicePurchased,
} from "store/actions/actions";
import SlotRoot from "./SlotRoot";
import moment from "moment";
import SoftSnackbar from "components/SoftSnackbar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SoftSelect from "components/SoftSelect";

function CalendarTimeSlot() {
  useEffect(() => {
    localStorage.setItem("lastVisitedUrl", "/timeslote");
    localStorage.setItem("appointmentVisited", "");
  }, []);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const userID = useSelector((state) => state?.auth?.auth);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [open, setOpen] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);
  const [bookingAlert, setBookingAlert] = useState(false);
  const successMessage = useSelector((state) => state?.auth?.successMessage);
  const errorMessage = useSelector((state) => state?.auth?.errorMessage);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [pbuttonDisable, setPButtonDisable] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const doctorAppointmentBookings = useSelector((state) => state.auth.doctorAppointmentBookings);
  const bookedAppointmentListByDate = useSelector(
    (state) => state.auth.bookedAppointmentListByDate
  );
  const bookingTimeSlot = useSelector((state) => state.auth.bookingTimeSlot);
  const validationSchema = Yup.object({
    // therapyType: Yup.string().required("Required!"),
    serviceId: Yup.string().required("Required!"),
    //email: Yup.string().email("Please enter a valid email address.").required("Required!"),
    painDetails: Yup.string().required("Required!"),
    // address: Yup.string().required("Required!"),
  });

  const city = [
    { value: "San Diego", label: "San Diego" },
    { value: "New York City", label: "New York City" },
  ];

  console.log("bookingTimeSlot", bookingTimeSlot);

  useEffect(() => {
    if (location.state?.doctorId) {
      dispatch(
        GET_DOCTOR_BOOKINGS({
          doctorId: location.state?.doctorId,
          Date: location.state.date,
          token: token,
          id: userID?._id,
        })
      );
    }
  }, [location.state?.doctorId]);

  const handleClose = () => {
    setOpen(false);
    setCancelModal(false);
  };

  const bookingAlertClose = () => {
    setBookingAlert(false);
  };

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  const seeDoctor = () => {
    const url = "https://www.buserinstitute.com/our-team";
    window.open(url, "_blank");
  };
  console.log("location", location);

  const isTimeSlotBooked = (startTime, endTime) => {
    const appointments = doctorAppointmentBookings?.bookAppointmentList ?? [];
    for (let i = 0; i < appointments?.length; i++) {
      const appointment = appointments[i];
      const appointmentStartTime = appointment.startTime;
      const appointmentEndTime = appointment.endTime;
      if (
        (startTime >= appointmentStartTime && startTime < appointmentEndTime) ||
        (endTime > appointmentStartTime && endTime <= appointmentEndTime) ||
        (startTime <= appointmentStartTime && endTime >= appointmentEndTime)
      ) {
        return true;
      }
    }
    return false;
  };

  const hasBookingConflict = (newStart, newEnd) => {
    const newStartTime = moment(newStart, "HH:mm");
    const newEndTime = moment(newEnd, "HH:mm");
    if (bookedAppointmentListByDate && bookedAppointmentListByDate.length > 0) {
      for (const booking of bookedAppointmentListByDate) {
        console.log("booking", booking);
        const existingStartTime = moment(booking.startTime, "HH:mm");
        const existingEndTime = moment(booking.endTime, "HH:mm");
        if (
          (newStartTime.isSameOrAfter(existingStartTime) &&
            newStartTime.isBefore(existingEndTime)) ||
          (newEndTime.isAfter(existingStartTime) && newEndTime.isSameOrBefore(existingEndTime)) ||
          (newStartTime.isBefore(existingStartTime) && newEndTime.isAfter(existingEndTime))
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const cardAction = async (slot) => {
    // let result = await handleCheckBooking(location?.state?.date, slot.startTime);
    // if (!result) {
    setStartTime(slot?.startTime);
    setEndTime(slot?.endTime);
    if (hasBookingConflict(slot?.startTime, slot?.endTime)) {
      setBookingAlert(true);
    } else {
      setOpen(true);
    }
  };

  const createTimeSlots = (startTime, endTime, date) => {
    const timeSlots = [];
    const startHour = parseFloat(moment(startTime, "HH:mm").format("H"));
    const endHour = parseFloat(moment(endTime, "HH:mm").format("H"));
    const slotDuration = location.state.serviceHour;
    for (let hour = startHour; hour < endHour; hour += slotDuration) {
      const startTime = moment()
        .startOf("day")
        .add(Math.floor(hour), "hours")
        .add((hour % 1) * 60, "minutes")
        .format("HH:mm");
      const endTime = moment()
        .startOf("day")
        .add(Math.floor(hour + slotDuration), "hours")
        .add(((hour + slotDuration) % 1) * 60, "minutes")
        .format("HH:mm");
      const currentDateTime = moment().add(1, "hour");
      const checkSheduleTime = moment(startTime, "HH:mm");
      const scheduleDate = moment(date);
      const scheduleDateForCheck = moment(date);
      const scheduleDateCheck = moment().set({
        date: scheduleDate.date(),
        hour: checkSheduleTime.hour(),
        minute: checkSheduleTime.minute(),
      });

      if (parseFloat(moment(endTime, "HH:mm").format("H")) <= endHour) {
        const isBooked = isTimeSlotBooked(startTime, endTime);
        const timeSlot = {
          key: startTime,
          startTime,
          endTime,
          isBooked: isBooked,
          disabled: scheduleDateForCheck.isSame(moment().format("YYYY-MM-DD"))
            ? !(scheduleDateCheck > currentDateTime)
            : false,
        };

        timeSlots.push(timeSlot);
      }
    }

    return timeSlots;
  };

  const renderTimeSlots = (slots) => {
    return (
      <Grid container mt={2}>
        <Grid items sm={12}>
          <Grid container spacing={2}>
            {slots &&
              slots.map((slot, i) => (
                <>
                  <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                    {slot?.isBooked === true ? (
                      <>
                        <div key={i}>
                          <SlotRoot>
                            <Card
                              key={i}
                              style={{
                                // opacity: "0.5",
                                padding: "2px",
                              }}
                            >
                              <Box>
                                <Card
                                  className={
                                    slot.disabled && !slot.isBooked ? "slot-blocked" : "slot-error"
                                  }
                                >
                                  <Typography
                                    style={{
                                      justifyContent: "center",
                                      display: "flex",
                                    }}
                                    variant="h6"
                                  >
                                    {`${slot?.startTime} to ${slot?.endTime}`}
                                  </Typography>
                                </Card>
                              </Box>
                            </Card>
                          </SlotRoot>
                        </div>
                      </>
                    ) : (
                      <>
                        <div key={i}>
                          <SlotRoot>
                            <Card
                              key={i}
                              style={{
                                padding: "2px",
                                color: "#ffffff",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                if (!slot.disabled) {
                                  cardAction(slot);
                                }
                              }}
                            >
                              <Box>
                                <Card className={slot.disabled ? "slot-blocked" : "slot-success"}>
                                  <Typography
                                    color="#fffcfc"
                                    style={{
                                      justifyContent: "center",
                                      display: "flex",
                                    }}
                                    variant="h6"
                                  >
                                    {`${slot?.startTime} to ${slot?.endTime}`}
                                  </Typography>
                                </Card>
                              </Box>
                            </Card>
                          </SlotRoot>
                        </div>
                      </>
                    )}
                  </Grid>
                </>
              ))}
          </Grid>
        </Grid>
        {/* <Grid items lg={5.7}>
          <Grid container spacing={2} mt={1}>
            {slots &&
              slots.map((slot, i) => (
                <>
                  <Grid key={i} item xs={4} sm={4} md={4} lg={6}>
                    {slot?.isBooked === true ? (
                      <>
                        <div key={i}>
                          <SlotRoot>
                            <Card
                              key={i}
                              style={{
                                // opacity: "0.5",
                                padding: "2px",
                                color: "#ffffff",
                              }}
                            >
                              <Box>
                                <Card className="slot-error">
                                  <Typography
                                    style={{
                                      justifyContent: "center",
                                      display: "flex",
                                    }}
                                    variant="h6"
                                  >
                                    {`${slot?.startTime} to ${slot?.endTime}`}
                                  </Typography>
                                </Card>
                              </Box>
                            </Card>
                          </SlotRoot>
                        </div>
                      </>
                    ) : (
                      <>
                        <div key={i}>
                          <SlotRoot>
                            <Card
                              key={i}
                              style={{
                                padding: "2px",
                                color: "#ffffff",
                                cursor: "pointer",
                              }}
                              onClick={() => cardAction(slot)}
                            >
                              <Box>
                                <Card className="slot-success">
                                  <Typography
                                    style={{
                                      justifyContent: "center",
                                      display: "flex",
                                    }}
                                    variant="h6"
                                  >
                                    {`${slot?.startTime} to ${slot?.endTime}`}
                                  </Typography>
                                </Card>
                              </Box>
                            </Card>
                          </SlotRoot>
                        </div>
                      </>
                    )}
                  </Grid>
                </>
              ))}
          </Grid>
          <Grid container mt={1}></Grid>
        </Grid> */}
      </Grid>
    );
  };

  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <Box sx={{ minHeight: "78vh" }}>
          <SoftBox
            style={{
              justifyContent: "space-between",
              display: "flex",
              padding: "0 10px 5px 0",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} lg={6}>
              <SoftBox display="flex" justifyContent="flex-start">
                <SoftButton
                  variant="gradient"
                  color="dark"
                  component={Link}
                  to="/book-appointments"
                >
                  Back
                </SoftButton>
              </SoftBox>
            </Grid>
            <Typography
              sx={{
                flex: 0.58,
              }}
              pt={2}
              variant="h5"
            >
              {location.state.date}
            </Typography>
            {/* <SoftButton className="seeDoc" onClick={seeDoctor}>
              See Our Doctors..
            </SoftButton> */}
          </SoftBox>
          {/* {userType === "client" ? <PatientAppointment /> : <DoctorAppointment />} */}
          {/* <Search func={setDoctorid} date={location.state.date} /> */}
          <Box my={2} textAlign={"center"}>
            <Typography sx={{ color: "#344767" }} variant="subtitle2">
              All times are in Pacific Time Pacific Daylight Time = UTC – 7:00 (March-November)
              Pacific Standard Time = UTC – 8:00 (November-March)
            </Typography>
          </Box>
          {location.state.doctorId ? (
            <Box display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={"center"}>
              {bookingTimeSlot?.timeArray?.length > 0 ? (
                bookingTimeSlot?.timeArray.map((slot, index) => {
                  return (
                    <>
                      {slot?.type === "Live video therapy"
                        ? renderTimeSlots(
                            createTimeSlots(slot.startTime, slot.endTime, bookingTimeSlot?.date)
                          )
                        : renderTimeSlots(
                            createTimeSlots(slot.startTime, slot.endTime, bookingTimeSlot?.date)
                          )}
                    </>
                  );
                })
              ) : (
                <Card
                  sx={{
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Typography width={"100%"} variant="body2">
                    This practitioner is not available for selected service
                  </Typography>
                </Card>
              )}
            </Box>
          ) : (
            <Card sx={{ p: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography variant="body2"> Please select Practitioner</Typography>
            </Card>
          )}
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="bookSlots">
                <Typography
                  style={{
                    textAlign: "center",
                  }}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Book Appointment
                </Typography>
                <>
                  <Formik
                    initialValues={{
                      therapyType: location.state?.serviceType,
                      name: userID?.name,
                      serviceId: location.state.serviceId,
                      planId: location.state.planId,
                      email: userID?.email,
                      doctorId: location.state?.doctorId,
                      Date: location.state.date,
                      painDetails: "",
                      bookedBy: userID?._id,
                      startTime: startTime,
                      endTime: endTime,
                      SessionCount: location?.state?.sessionCount,
                      city: selectedCity,
                    }}
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    onSubmit={(values, onSubmitProps) => {
                      // values.planId = planId;
                      setTimeout(() => handleClose(), 500);
                      dispatch(
                        patientBookAppointment({
                          values,
                          token,
                        })
                      );
                      // onSubmitProps.resetForm();
                      localStorage.setItem("searchId", "");
                      localStorage.setItem("searchValue", "");
                      localStorage.setItem("lastVisitedUrl", "");
                      localStorage.setItem("appointmentVisited", "yes");
                      localStorage.removeItem("modal");
                      localStorage.removeItem("startTime");
                      localStorage.removeItem("endTime");

                      // if (photoTherapyType === "Live In-Person") {
                      //   dispatch(
                      //     latestServicePurchased({
                      //       latestServicePurchasedName:
                      //         "live_In_Person_and_Travel_Exercise_Therapy_Balance",
                      //     })
                      //   );
                      // } else {
                      //   dispatch(
                      //     latestServicePurchased({
                      //       latestServicePurchasedName:
                      //         "live_Video_Online_Exercise_Therapy_Balance",
                      //     })
                      //   );
                      // }
                      setTimeout(() => {
                        navigate("/labs");
                      }, 1000);

                      localStorage.setItem("date", "");
                      localStorage.setItem("doctorId", "");
                    }}
                  >
                    {(formik) => {
                      {
                        if (
                          // formik?.values?.therapyType &&
                          formik?.values?.painDetails &&
                          // formik?.values?.address &&
                          formik?.values?.serviceId !== null &&
                          formik?.values?.planId !== null
                        ) {
                          setButtonDisable(false);
                        }
                        if (
                          formik?.values?.serviceId == null ||
                          formik?.values?.planId == null ||
                          formik?.values?.painDetails === ""
                          // formik?.values?.address === ""
                        ) {
                          setButtonDisable(true);
                        }
                        if (policyAccepted) {
                          setPButtonDisable(false);
                        }
                        if (!policyAccepted) {
                          setPButtonDisable(true);
                        }
                      }
                      return (
                        <>
                          {cancelModal ? (
                            <Grid>
                              <Grid className="heading-grid">
                                <b style={{ fontSize: "12px", padding: "10px" }}>
                                  Photo, Video and Video Message Consultation Change and Cancelation
                                  Policy:
                                </b>
                                <SoftButton
                                  className="back-policy"
                                  onClick={() => setCancelModal(false)}
                                >
                                  Back
                                </SoftButton>
                              </Grid>
                              <Typography
                                className="policy-textbox"
                                style={{ fontSize: "12px", padding: "10px" }}
                              >
                                48 Hours, two business days, change and/or cancellation notice is
                                required to avoid a 100% fee for scheduled services.
                              </Typography>
                              <Grid>
                                <b style={{ fontSize: "12px", padding: "10px" }}>
                                  Travel Clinic Consultation Change and Cancelation Policy:
                                </b>

                                <Typography
                                  className="policy-textbox"
                                  style={{ fontSize: "12px", padding: "10px" }}
                                >
                                  Travel Clinic appointments involve some unique variables for
                                  consideration due to unrecoverable travel costs incurred by the
                                  Buser Institute when we travel to a Travel Clinic location. As you
                                  have experienced today, booking an appointment initially places a
                                  client on a pending waitlist for that date, time and location
                                  until that Travel Clinic meets the number of appointments required
                                  to energize a Travel Clinic confirmation and processing of client
                                  payments. Changes of an appointment time to another open time in
                                  the same Travel Clinic week and location are permitted if done at
                                  least 48 hours (two business days) in advance of one’s originally
                                  scheduled appointment. For cancellations of an appointment, again
                                  due to travel costs incurred by the Buser Institute for Travel
                                  Clinics, once a final booking confirmation is made with client
                                  payment processing, we are unable to refund scheduled appointments
                                  for any reason of cancellation. If a client must cancel such a
                                  confirmed (payment processed) appointment, the client may transfer
                                  their appointment to another client who will only incur any
                                  differential costs in appointments due to the Buser Institute (ie.
                                  Existing Client appointment transferred to a New Client
                                  appointment which is more expensive). Alternatively, if the client
                                  is able to refer another paying client to take their appointment
                                  (same appointment date & time or another open date & time at the
                                  same Travel Clinic location and week), a commensurate refund to
                                  the original client may be honored. In such a case of confirmed
                                  appointment cancellation, the Buser Institute will also make every
                                  reasonable effort to fill that canceled appointment (same date,
                                  time and location) with another client from the waitlist for that
                                  Travel Clinic, in which case the original client may be refunded.
                                  However, if the original client and the Buser Institute are unable
                                  to re-book the same appointment date, time and location for that
                                  Travel Clinic, we will be unable to refund the client for that
                                  appointment cost due to the opportunity loss. Please contact the
                                  Buser Institute at admin@buserinstitue.com if you have any
                                  questions or concerns regarding this Travel Clinic Change and
                                  Cancellation Policy.
                                </Typography>
                              </Grid>

                              <div className="radio">
                                <input
                                  type="checkbox"
                                  name="accept"
                                  checked={policyAccepted}
                                  onChange={(event) => setPolicyAccepted(event.target.checked)}
                                />
                                <label name accept>
                                  Accept Policy
                                </label>
                              </div>
                              <Grid item xs={12} lg={6}>
                                <SoftBox display="flex" justifyContent="center">
                                  <SoftButton
                                    type="submit"
                                    disabled={pbuttonDisable}
                                    variant="gradient"
                                    color="dark"
                                    onClick={formik?.handleSubmit}
                                  >
                                    Book
                                  </SoftButton>
                                </SoftBox>
                              </Grid>
                            </Grid>
                          ) : (
                            <Grid>
                              <br />
                              <input
                                style={{ height: "50px", marginTop: "-3%" }}
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Name"
                                value={userID?.name}
                                onChange={formik?.handleChange}
                                onBlur={formik?.handleBlur}
                              />
                              {formik?.touched?.name && formik?.errors?.name && (
                                <div style={{ color: "red" }}>{formik?.errors?.name}</div>
                              )}
                              <br />
                              <input
                                style={{ height: "50px", marginTop: "-3%" }}
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email Address"
                                value={userID?.email}
                                onChange={formik?.handleChange}
                                onBlur={formik?.handleBlur}
                              />
                              {formik?.touched?.email && formik?.errors?.email && (
                                <div style={{ color: "red" }}>{formik?.errors?.email}</div>
                              )}
                              <br />

                              <textarea
                                style={{ height: "100px", marginTop: "-3%" }}
                                type="text"
                                name="painDetails"
                                className="form-control"
                                placeholder="Pain Description"
                                value={formik?.values?.painDetails}
                                onChange={formik?.handleChange}
                                onBlur={formik?.handleBlur}
                              />
                              {formik?.touched?.painDetails && formik?.errors?.painDetails && (
                                <div style={{ color: "red" }}>{formik?.errors?.painDetails}</div>
                              )}
                              <br />
                              <Grid item xs={12} lg={6}>
                                <SoftBox display="flex" justifyContent="center">
                                  <SoftButton
                                    disabled={buttonDisable}
                                    variant="gradient"
                                    color="dark"
                                    onClick={() => setCancelModal(true)}
                                  >
                                    Next
                                  </SoftButton>
                                </SoftBox>
                              </Grid>
                            </Grid>
                          )}
                        </>
                      );
                    }}
                  </Formik>
                </>
              </Box>
            </Modal>
          </div>
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
        </Box>
        <Dialog
          open={bookingAlert}
          onClose={bookingAlertClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Booking appointment alert</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This time slot is already booked by you with diffrent doctor please select another
              time slot
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <SoftButton variant="gradient" color="dark" onClick={bookingAlertClose}>
              Ok
            </SoftButton>
          </DialogActions>
        </Dialog>
        <Footer />
      </DashboardLayout>
    </>
  );
}

export default CalendarTimeSlot;
