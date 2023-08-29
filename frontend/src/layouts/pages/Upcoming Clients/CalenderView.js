import { useEffect, useState } from "react";
import SoftTypography from "components/SoftTypography";
import "./style.css";
import moment from "moment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SoftButton from "components/SoftButton";
import {
  Box,
  Typography,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  Checkbox,
} from "@mui/material";
import { clearMessage, confirmAppointmentAction } from "store/actions/actions";
import { findOneUserAction } from "store/actions/actions";
import SoftInput from "components/SoftInput";
import { axiosInstance } from "services/AxiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import QuizForm from "../../../components/QuizForm";
import { findOneInformConsent } from "store/actions/actions";

function CalenderView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localizer = momentLocalizer(moment);
  const userdata = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.auth.auth.idToken);
  const upcommingAppointments = useSelector((state) => state.auth.upcommingAppointments);
  const upcommingAppointmentPatient = useSelector(
    (state) => state.auth.upcommingAppointmentPatient
  );
  const upcomingClientAppointmentDate = useSelector(
    (state) => state?.auth?.upcomingClientAppointmentDate
  );
  const [appointmentList, setAppointmentList] = useState(null);
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
    Status: null,
  });
  var currentDate = moment("2023-06-20");

  // currentDate.set("year", 2010);
  // currentDate.set("month", 6);
  // currentDate.set("date", 10);
  const [weekStartDate, setWeekStartDate] = useState(moment(currentDate.clone().startOf("week")));
  const [weekEndDate, setWeekEndDate] = useState(moment(currentDate.clone().endOf("week")));

  const [showModel, setShowModel] = useState(false);
  const [showCompleteModel, setShowCompleteModel] = useState(false);
  const [link, setLink] = useState("");
  const [videoName, setVideoName] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);
  // const [linkError, setLinkError] = useState("");
  const [aptId, setAptId] = useState("");
  const [open, setOpen] = useState(false);
  const [cancel, setCancel] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const cancelAppointmet = useSelector((state) => state.auth.cancelAppointmet);
  const myPurchaseServiceList = useSelector((state) =>
    state.auth.myPurchaseServiceList !== undefined ? state.auth.myPurchaseServiceList : []
  );
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const [record, setRecord] = useState(null);
  const [informConsetData, setinformConsetData] = useState("");
  const fetchPatientIC = async () => {
    try {
      const res = await axiosInstance.get(
        `informConsent/patientLastInformedConsentRecord/${record?.patientId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setinformConsetData(res?.data?.data?.result[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (record) {
      fetchPatientIC();
    }
  }, [record]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get("date");

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
        Status: null,
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
      dispatch({
        type: "SET_UPCOMMING_APPOINTMENTS_ACTION",
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

  console.log("upcommingAppointments", upcommingAppointments);

  useEffect(() => {
    if (userdata.userType === "doctor") {
      dispatch({
        type: "SET_UPCOMMING_APPOINTMENTS_ACTION",
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
      setAppointmentList(upcommingAppointments);
    } else {
      setAppointmentList(upcommingAppointmentPatient);
    }
  }, [upcommingAppointments, upcommingAppointmentPatient, cancelAppointmet]);

  useEffect(() => {
    dispatch(findOneUserAction({ userId: userdata?._id, token }));
  }, []);

  useEffect(() => {
    const weekStart1 = upcomingClientAppointmentDate
      ? moment(upcomingClientAppointmentDate).startOf("week")
      : moment().startOf("week");
    checkUpcommingAppointment(weekDate);
    getWeekdata(weekStart1);
  }, [appointmentList]);

  let newPurchaseServiceList;

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
      // console.log("list---", appointmentList);
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
              Status: appointmentList[j].Status,
              patientName: appointmentList[j].patient[0].name,
              doctorName: appointmentList[j].doctor[0].name,
              services: appointmentList[j]?.Services,
              appointmentTime: appointmentList[j].appointmentTime,
              endTime: appointmentList[j].endTime,
              startTime: appointmentList[j].startTime,
              painDetails: appointmentList[j].painDetails,
              planDetails: appointmentList[j].planDetails,
              address: appointmentList[j].address,
              deniedStatus: appointmentList[j].deniedStatus,
              meetingLink: appointmentList[j].meetingLink,
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

      const result = camapreDate.reduce((acc, cur, i) => {
        const index = acc.findIndex((obj) => obj.day === cur.day);
        if (index > 0) {
          // console.log("found", acc);
          // console.log("cur--", cur.time);
          acc[index]["patient"] = [
            ...acc[index]["patient"],
            {
              patientName: cur.patientName ? cur.patientName : "",
              Status: cur.Status ? cur.Status : "",
              time: cur.time ? cur.time : "",
              meetingLink: cur.meetingLink ? cur.meetingLink : "",
              _id: cur._id,
              email: acc[index]["patient"].email,
              UserProfilePIC: acc[index]["patient"].UserProfilePIC,
            },
          ];
          acc[index]["doctor"] = [
            ...acc[index]["doctor"],
            {
              doctorName: cur.doctorName ? cur.doctorName : "",
              time: cur.time ? cur.time : "",
              email: acc[index]["patient"]?.email,
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
              Status: cur.Status ? cur.Status : "",
              meetingLink: cur.meetingLink ? cur.meetingLink : "",
              _id: cur?._id,
              email: cur?.patient?.email,
              UserProfilePIC: cur?.patient?.UserProfilePIC,
            },
          ];
          obj["doctor"] = [
            {
              doctorName: cur.doctorName ? cur.doctorName : "",
              time: cur?.time ? cur.time : "",
              email: cur?.patient?.email,
              _id: cur?._id,
              UserProfilePIC: cur?.patient?.UserProfilePIC,
            },
          ];
          acc.push(obj);
        }
        return acc;
      }, []);
      // console.log("result----", result);
      setWeekDates(result);
    }
  };

  const handleModalClose = () => {
    setLink("");
    setAptId("");
    setRecord(null);
    setShowCompleteModel(false);
  };
  const handleInputChange = (e) => {
    setLink(e.target.value);
    // setLinkError("");
  };

  const handleImage = (e) => {
    setImage(e.currentTarget.files[0]);
    setError(false);

    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
  };

  const handleLinkSubmission = async (quizData) => {
    // if (link.trim() === "") {
    //   setLinkError("Link is required");
    //   return;
    // }
    // setLinkError("");
    if (!image) {
      setError(true);
      return;
    }
    setError(false);
    const formData = new FormData();

    formData.append("sequenceImage", image);
    formData.append("videoName", videoName);
    formData.append("recommendation", checked);
    formData.append("quiz", JSON.stringify(quizData.formData));
    try {
      const response = await axiosInstance.put(
        `doctorAppointmentSlot/doctorCompleteAppointment/${aptId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );
      console.log(response);
      handleModalClose();
      dispatch({
        type: "SET_UPCOMMING_APPOINTMENTS_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
      dispatch({
        type: "DOCTOR_SLOTS_LIST_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLinkSubmission1 = async () => {
    const data = {
      meetingLink: link,
      videoName: videoName,
      notForSale: true,
    };
    try {
      const response = await axiosInstance.put(
        `doctorAppointmentSlot/doctorCompleteAppointment/${aptId}`,
        data,
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response);
      handleModalClose();
      dispatch({
        type: "SET_UPCOMMING_APPOINTMENTS_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
      dispatch({
        type: "DOCTOR_SLOTS_LIST_ACTION",
        payload: { doctorId: userdata._id, token: token },
      });
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleDeniedAppointment = (item) => {
    setOpen(true);
    setAppointmentDetails(item);
  };

  const handleAppointment = (item) => {
    setCancel(true);
    setAppointmentDetails(item);
  };

  const closeErrorSB = () => {
    // setErrorSB(false);
    dispatch(clearMessage());
  };
  const handleCancelAppointment = async () => {
    dispatch({
      type: "SET_CANCEL_APPOINTMENT_STATUS_ACTION",
      payload: {
        token: token,
        appointmentId: appointmentDetails._id,
        Date: appointmentDetails.Date,
        Time: appointmentDetails.time,
      },
    });
    setOpen(false);
    setCancel(false);
  };

  const handleDenied = async () => {
    // console.log('details', appointmentDetails);
    dispatch({
      type: "SET_DENIED_APPOINTMENT_STATUS_ACTION",
      payload: {
        appointmentId: appointmentDetails._id,
        token: token,
      },
    });
    const weekStart1 = moment().startOf("week");
    // getWeekdata(weekStartDate)
    checkUpcommingAppointment(weekStartDate);
    setOpen(false);
    setCancel(false);
    dispatch({
      type: "SET_UPCOMMING_APPOINTMENTS_ACTION",
      payload: { doctorId: userdata._id, token: token },
    });
  };

  const handleConfirmAppointment = async () => {
    dispatch(
      confirmAppointmentAction({
        appointmentId: appointmentDetails._id,
        token: token,
      })
    );
    const weekStart1 = moment().startOf("week");
    // console.log("start date", weekStartDate);
    // getWeekdata(weekStartDate)
    checkUpcommingAppointment(weekStartDate);
    setShowModel(false);
    dispatch({
      type: "SET_UPCOMMING_APPOINTMENTS_ACTION",
      payload: { doctorId: userdata._id, token: token },
    });
  };
  console.log(weekDate, "sss");

  const apptDetail = (aId) => {
    navigate(`/appointment-details/?id=${aId}&tab=upcClient`);
  };

  const CustomEventContent = (event) => {
    console.log("event", event);
    return (
      <div
        style={{
          padding: "5px",
        }}
        className="slot_container"
        onClick={() => apptDetail(event.event?._id)}
      >
        <div className={`name1c ${event?.event?.Status === "Pending" ? "pendingC" : "confirmedC"}`}>
          <strong style={{ textTransform: "capitalize" }}> {event?.event?.patientName}</strong>
          <p
            style={{
              fontSize: "11px",
              color: "#364969",
              margin: "5px 0px 0px 0px",
            }}
          >
            {event?.event?.serviceName}
          </p>
        </div>
        {event.event.Status === "Pending" ? (
          <div className="name2c">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAppointmentDetails(event?.event);
              }}
              className="confirm-btnc"
            >
              Confirm
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeniedAppointment(event?.event);
              }}
              className="denied-btnc"
            >
              Deny
            </button>
          </div>
        ) : (
          <div className="name4c">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAppointment(event?.event);
              }}
              className="cancel-btnc btn1"
            >
              Cancel
            </button>
            {event?.event?.planDetails?.therapyType === "Live video therapy" && (
              <button
                className="cancel-btnc"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(event?.event?.meetingLink, "_blank");
                }}
              >
                Zoom
              </button>
            )}
            <button
              className="cancel-btnc btn2"
              onClick={(e) => {
                e.stopPropagation();
                setAptId(event.event?._id);
                setShowCompleteModel(true);
                setRecord(event?.event);
              }}
            >
              Complete
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <p className="color-detail">
        <span style={{ color: "orangered" }}>
          <strong>Orange</strong>
        </span>{" "}
        color indicates pending appointment &{" "}
        <span style={{ color: "purple" }}>
          <strong>Purple</strong>{" "}
        </span>
        color indicates confirmed appointment.
      </p>

      {/* {useMemo(
        () => (
          <>
            <SoftBox py={1}>
              <p className="color-detail">
                <span style={{ color: "orangered" }}>Orange</span> color indicates pending
                appointment & <span style={{ color: "purple" }}>Purple </span>color indicates
                confirmed appointment.
              </p>
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <SoftBox mb={3} p={1} className="upcoming-clients-container">
                    <div className="main-appointment-divc">
                      <div className="week-appointment-divc">
                        <div className="slot-divc">
                          <div className="slot-time-divc-empty" key="slot-time-divc-empty"></div>
                          {weekDate &&
                            weekDate.length > 0 &&
                            doctorSloat.map((sol, i) => {
                              return (
                                <div className="slot-time-divc" key={sol}>
                                  {sol}
                                </div>
                              );
                            })}
                        </div>

                        {weekDate &&
                          weekDate.length > 0 &&
                          appointmentList !== null &&
                          weekDate.map((item, i) => (
                            <div className="week-body-divc" key={i}>
                              <div
                                className={
                                  !pastDays.includes(item.day) ? "week-divc" : "beforeDayc"
                                }
                              >
                                <div className="table-headc">
                                  <div className="week-daysc">
                                    <div className="week-namec">{item?.name}</div>
                                    <p className="week-dayc">{item?.day}</p>
                                  </div>
                                </div>
                                <div className="body-divc">
                                  {doctorSloat.map((slot, i) => {
                                    return (
                                      <>
                                        <div className="week-appointmentc" key={i}>
                                          {userdata.userType === "doctor" &&
                                            item.patient !== null &&
                                            item.patient.length > 0 &&
                                            item.patient[0].patientName !== "" &&
                                            item.patient.map((ind, i) => {
                                              return ind._id && slot === ind.time ? (
                                                <div key={i} className="slot_container">
                                                  <div className="slot-infoc">
                                                    <div
                                                      className={`name1c ${
                                                        ind.Status === "Pending"
                                                          ? "pendingC"
                                                          : "confirmedC"
                                                      }`}
                                                    >
                                                      {ind.patientName}
                                                      <p
                                                        style={{
                                                          fontSize: "11px",
                                                          color: "#364969",
                                                        }}
                                                      >
                                                        {item?.services[0].serviceName}
                                                      </p>
                                                    </div>
                                                    {ind.Status === "Pending" ? (
                                                      <div className="name2c">
                                                        <button
                                                          onClick={() =>
                                                            handleAppointmentDetails(
                                                              item.patient[i]
                                                            )
                                                          }
                                                          className="confirm-btnc"
                                                        >
                                                          Confirm
                                                        </button>
                                                        <button
                                                          onClick={() =>
                                                            handleDeniedAppointment(item.patient[i])
                                                          }
                                                          className="denied-btnc"
                                                        >
                                                          Deny
                                                        </button>
                                                      </div>
                                                    ) : (
                                                      <div className="name4c">
                                                        <button
                                                          onClick={() =>
                                                            handleAppointment(item.patient[i])
                                                          }
                                                          className="cancel-btnc btn1"
                                                        >
                                                          Cancel
                                                        </button>
                                                        <button
                                                          className="cancel-btnc"
                                                          onClick={() => {
                                                            window.open(ind.meetingLink, "_blank");
                                                          }}
                                                        >
                                                          Zoom
                                                        </button>
                                                        <button
                                                          className="cancel-btnc btn2"
                                                          onClick={() => {
                                                            setAptId(item?._id);
                                                            setShowCompleteModel(true);
                                                          }}
                                                        >
                                                          Complete
                                                        </button>
                                                      </div>
                                                    )}
                                                  </div>
                                                </div>
                                              ) : null;
                                            })}
                                          {userdata.userType === "client" &&
                                            item.doctor !== null &&
                                            item.doctor.length > 0 &&
                                            item.doctor[0].doctorName !== "" &&
                                            item.doctor.map((ind, i) => {
                                              return (
                                                <div key={i}>
                                                  <>
                                                    {ind.doctorName !== "" || ind.time !== "" ? (
                                                      <div>
                                                        {slot === ind.time ? (
                                                          <div className="slot-infoc">
                                                            Name: {ind.doctorName}
                                                            <button
                                                              onClick={() =>
                                                                handleAppointmentDetails(
                                                                  item.doctor[i]
                                                                )
                                                              }
                                                              className="cancle-btnc"
                                                            >
                                                              Cancel
                                                            </button>
                                                          </div>
                                                        ) : null}
                                                      </div>
                                                    ) : null}
                                                  </>
                                                </div>
                                              );
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
                      className="btnc"
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
                    className="btnc"
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
        [weekDate, doctorSloat, appointmentList]
      )} */}
      <Box
        sx={{
          overflowX: "scroll",
        }}
      >
        <Calendar
          localizer={localizer}
          events={upcommingAppointments}
          views={["week"]}
          defaultDate={date ?? ""}
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

      <Dialog fullWidth maxWidth={"md"} open={showCompleteModel} onClose={handleModalClose}>
        <DialogTitle>Complete Session</DialogTitle>
        <DialogContent sx={{ padding: "10px" }}>
          <SoftInput
            type="text"
            value={videoName}
            name="link"
            placeholder="Enter Video Name Here.."
            onChange={(e) => setVideoName(e.target.value)}
          />
          <SoftInput
            sx={{ margin: "15px 0" }}
            type="text"
            value={link}
            name="link"
            placeholder="Enter Link Here.."
            onChange={(e) => setLink(e.target.value)}
          />
          {informConsetData &&
          informConsetData?.commitment_initial2 &&
          informConsetData?.commitment_initial2 !== "" ? (
            <>
              <Box
                display={"flex"}
                alignItems={"center"}
                flexDirection={"column"}
                marginBottom={"10px"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  marginBottom={"10px"}
                >
                  <Checkbox value={checked} onChange={(e) => setChecked(e.target.checked)} />
                  <Typography variant="body2" color="text.secondary">
                    Recommeded For Sale
                  </Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"5px"}>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    gap={"10px"}
                  >
                    {avatarPreview && (
                      <img src={avatarPreview} alt="Preview" className="preview-image" />
                    )}
                    <input type="file" onChange={(e) => handleImage(e)} className="file-input" />
                  </Box>
                  {error && <div className="error-message">Image is required.</div>}
                </Box>
              </Box>

              <QuizForm onSubmit={handleLinkSubmission} onClose={handleModalClose} />
            </>
          ) : (
            <Box>
              <SoftTypography sx={{ fontSize: "18px", marginBottom: "10px" }}>
                The client has not agreed to share his details.
              </SoftTypography>
              <SoftButton  onClick={handleModalClose}>
                Close
              </SoftButton>
              <SoftButton color="dark" background="gradient" onClick={handleLinkSubmission1}>
                Submit
              </SoftButton>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* <Modal
        open={showCompleteModel}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="docComplete">
          <Typography
            className="conplete-modal-label"
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Enter Meeting Link
          </Typography>
          <SoftInput
            type="text"
            value={link}
            name="link"
            placeholder="Enter Link Here.."
            onChange={handleInputChange}
          />

          <div className="complete-divc">
            <SoftButton type="submit" className="modal-btn-cancel" onClick={handleModalClose}>
              Cancel
            </SoftButton>
            <SoftButton type="submit" className="modal-btn-complete" onClick={handleLinkSubmission}>
              Save
            </SoftButton>
          </div>
        </Box>
      </Modal> */}

      <Modal
        open={showModel}
        onClose={() => setShowModel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="docConfirm">
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Confirm Appointment
          </Typography>
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h4"
          >
            Do you want to confirm appointment?
          </Typography>

          <div className="cancel-divc">
            <SoftButton
              type="submit"
              className="btn-cancelc"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={handleConfirmAppointment}
            >
              Yes
            </SoftButton>
            <SoftButton
              type="submit"
              className="btn-cancel1c"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={() => setShowModel(false)}
            >
              No
            </SoftButton>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="Denied-appointment">
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Deny Appointment
          </Typography>
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h4"
          >
            Do you want to deny appointment?
          </Typography>

          <div className="cancel-divc">
            <SoftButton
              type="submit"
              className="btn-cancelc"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={handleDenied}
            >
              Yes
            </SoftButton>
            <SoftButton
              type="submit"
              className="btn-cancel1c"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={() => setOpen(false)}
            >
              No
            </SoftButton>
          </div>
        </Box>
      </Modal>
      <Modal
        open={cancel}
        onClose={() => setCancel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
      >
        <Box className="canceldoc-appointment">
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
          <Typography
            style={{
              textAlign: "center",
            }}
            id="modal-modal-title"
            variant="h6"
            component="h4"
          >
            Do you want to cancel appointment?
          </Typography>

          <div className="cancel-divc">
            <SoftButton
              type="submit"
              className="btn-cancelc"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={handleCancelAppointment}
            >
              Yes
            </SoftButton>
            <SoftButton
              type="submit"
              className="btn-cancel1c"
              style={{
                width: "15%",
                height: "45px",
                backgroundColor: "#17C1E8",
                color: "white",
                margin: "10px",
              }}
              onClick={() => setCancel(false)}
            >
              No
            </SoftButton>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default CalenderView;
