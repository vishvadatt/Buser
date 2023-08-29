import React, { useEffect, useMemo, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Calendar from "examples/ScheduleCalendar";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/ri";
import moment, { isDate } from "moment";
import SoftButton from "components/SoftButton";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import dayjs from "dayjs";
import "./CalendarShedule.scss";
import { useDispatch } from "react-redux";
import { SET_CALENDAR_SHEDULE } from "store/actions/actions";
import { useSelector } from "react-redux";
import { GET_CALENDER_SHEDULE_LIST, popupAction } from "store/actions/actions";
import _ from "lodash";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { RRule, RRuleSet, rrulestr } from "rrule";
import SoftSelect from "components/SoftSelect";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { DELETE_CALENDAR_SHEDULE } from "store/actions/actions";

const CalendarShedule = () => {
  const [timeFields, setTimeFields] = useState([
    {
      startTime: moment("08:00", "HH:mm").format("HH:mm"),
      endTime: moment("12:00", "HH:mm").format("HH:mm"),
      type: "Live video therapy",
    },
  ]);
  const validationSchema = Yup.object().shape({
    events: Yup.array().of(
      Yup.object().shape({
        type: Yup.string().required("Type is required"),
        city: Yup.string().when("type", {
          is: "Live in person therapy",
          then: Yup.string().required("City is required"),
        }),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      events: timeFields,
    },
    validationSchema,
    enableReinitialize: true,
  });

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [selectedDate, setSelectedDate] = useState({
    startDate: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(true);
  const [generatedEvent, setGeneratedEvent] = useState([]);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const [available, setAvailable] = useState(loginUser ? loginUser?.available : true);
  const calendarSheduleList = useSelector((state) => state.auth.calendarSheduleList);
  const token = useSelector((state) => state.auth.auth.idToken);
  const [openSelectTimeModal, setOpenSelectTimeModal] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [editModeActive, setEditModeActive] = useState(false);
  const [selectedMorningStartTime, setSelectedMorningStartTime] = useState(
    moment("08:00", "HH:mm").format("HH:mm")
  );
  const [selectedMorningEndTime, setSelectedMorningEndTime] = useState(
    moment("11:00", "HH:mm").format("HH:mm")
  );
  const [selectedAfternoonStartTime, setSelectedAfternoonStartTime] = useState(
    moment("12:00", "HH:mm").format("HH:mm")
  );
  const [selectedAfternoonEndTime, setSelectedAfternoonEndTime] = useState(
    moment("16:00", "HH:mm").format("HH:mm")
  );
  const [eventList, setEventList] = useState([]);
  const d = new Date();
  let day = weekday[d?.getDay()];
  let year = [d?.getFullYear()];

  useEffect(() => {
    dispatch(GET_CALENDER_SHEDULE_LIST({ token }));
  }, []);

  const bookingType = [
    { value: "Live video therapy", label: "Live video therapy" },
    { value: "Live in person therapy", label: "Live in person therapy" },
  ];
  const city = [
    { value: "San Diego", label: "San Diego" },
    { value: "New York City", label: "New York City" },
  ];

  const handleClickOpen = () => {
    setOpenSelectTimeModal(true);
  };

  const handleClose = () => {
    setOpenSelectTimeModal(false);
    setGeneratedEvent([]);
    setStatus(true);
    setEditModeActive(false);
    setTimeFields([
      {
        startTime: moment("08:00", "HH:mm").format("HH:mm"),
        endTime: moment("12:00", "HH:mm").format("HH:mm"),
        type: "Live video therapy",
      },
    ]);
  };
  const checkDateDay = (type) => {
    switch (type) {
      case "Monday":
        return RRule.MO;
      case "Tuesday":
        return RRule.TU;
      case "Wednesday":
        return RRule.WE;
      case "Thursday":
        return RRule.TH;
      case "Friday":
        return RRule.FR;
      case "Saturday":
        return RRule.SA;
      case "Sunday":
        return RRule.SU;
    }
  };

  function generateRecurringEvents(type) {
    const rruleOptions = {
      dtstart: new Date(),
      until: moment().add(3, "months"),
    };
    if (type === "Daily") {
      rruleOptions["freq"] = RRule.DAILY;
    } else if (type === "Every weekday (Mon to Fri)") {
      rruleOptions["freq"] = RRule.WEEKLY;
      rruleOptions["byweekday"] = [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR];
    } else if (type === `Weekly on ${moment(selectedDate.startDate).format("dddd")}`) {
      rruleOptions["freq"] = RRule.WEEKLY;
      rruleOptions["byweekday"] = checkDateDay(moment(selectedDate.startDate).format("dddd"));
    } else if (type === `Monthly on the fourth ${moment(selectedDate.startDate).format("dddd")}`) {
      rruleOptions["freq"] = RRule.MONTHLY;
      rruleOptions["byweekday"] = checkDateDay(moment(selectedDate.startDate).format("dddd"));
      rruleOptions["bysetpos"] = 4;
    } else if (type === `Monthly on the last ${moment(selectedDate.startDate).format("dddd")}`) {
      rruleOptions["freq"] = RRule.MONTHLY;
      rruleOptions["byweekday"] = checkDateDay(moment(selectedDate.startDate).format("dddd"));
      rruleOptions["bysetpos"] = -1;
    } else {
      rruleOptions["freq"] = RRule.YEARLY;
      rruleOptions["bymonth"] = moment(selectedDate.startDate).month() + 1;
      rruleOptions["bymonthday"] = moment(selectedDate.startDate).date();
      rruleOptions["until"] = moment().add(2, "year");
    }
    const rule = new RRule(rruleOptions);
    const recurringDates = rule.all();
    const events = recurringDates.map((date) => ({
      date: moment(date).format("YYYY-MM-DD"),
      timeArray: timeFields,
      status: status,
    }));

    setGeneratedEvent(events);
    console.log("events", events);
  }

  const handleTimeChange = (index, field, value) => {
    const updatedFields = [...timeFields];
    updatedFields[index][field] = value;
    setTimeFields(updatedFields);
  };

  const handleAddTimeField = () => {
    if (timeFields.length < 5) {
      setTimeFields([
        ...timeFields,
        {
          startTime: moment("12:00", "HH:mm").format("HH:mm"),
          endTime: moment("15:00", "HH:mm").format("HH:mm"),
          type: "Live video therapy",
        },
      ]);
    }
    // const data = generateRecurringEvents();
    // console.log("data", data);
  };

  const handleRemoveTimeField = (index) => {
    if (timeFields.length > 1) {
      const updatedFields = timeFields.filter((_, i) => i !== index);
      setTimeFields(updatedFields);
    }
  };

  const dateClickFunction = function (data) {
    // const clickedDate = moment(info?.date);
    // const currentDate = moment();
    // console.log("date",clickedDate.isBefore(currentDate, "day"))
    const isDateExist = _.find(calendarSheduleList, { date: data.startDate });
    console.log("isDateExist", isDateExist);
    if (isDateExist) {
      setEditModeActive(true);
      setTimeFields(isDateExist?.timeArray);
      setStatus(isDateExist?.status);
    }
    setSelectedDate(data);
    handleClickOpen();
  };

  const handleConfirmClick = () => {
    const { startDate, endDate, dayCount } = selectedDate;
    // let dateList = [];
    // for (let i = 0; i < dayCount; i++) {
    //   let object = {};
    //   object[
    //     "title"
    //   ] = `${selectedMorningStartTime} - ${selectedMorningEndTime} to ${selectedAfternoonStartTime} - ${selectedAfternoonEndTime}`;
    //   object["start"] = moment(startDate).add(i, "day").format("YYYY-MM-DD");
    //   object["end"] = moment(startDate)
    //     .add(i - 1, "day")
    //     .format("YYYY-MM-DD");
    //   object["className"] = "booked";
    //   object;
    //   dateList.push(object);
    // }
    // setEventList(dateList);
    const isDateExist = _.find(calendarSheduleList, { start: startDate });
    dispatch(
      SET_CALENDAR_SHEDULE({
        token,
        data: {
          doctorName: `${loginUser?.firstName} ${loginUser?.lastName}`,
          doctorId: loginUser._id,
          doctorSchedule:
            generatedEvent.length > 0
              ? generatedEvent
              : [
                  {
                    date: selectedDate.startDate,
                    timeArray: timeFields,
                    status: status,
                  },
                ],
        },
      })
    );
    handleClose();
  };
  const handleAvailability = async () => {
    try {
      dispatch(
        popupAction({
          id: loginUser._id,
          data: { available: !available },
          navigate,
          token,
          update: true,
        })
      );
      await updateProfile();
      setAvailable(!available);
    } catch (err) {
      setAvailable(!available);
      console.log(err);
    }
  };

  console.log("startDate", selectedDate);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Typography mt={2} variant="h4">
        Asynchronous Session (VMT, Photo) Availability
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        p={1.7}
        borderRadius={2.5}
        border={"1px solid lightgray"}
        gap={3}
        mt={1}
        mb={2}
      >
        <Typography variant="p">
          Indicates ability at current time to receive and complete VMT and Photo Therapy in 5
          Business Days = Mondays – Fridays
        </Typography>
        <div>
          <Switch checked={available} onChange={handleAvailability} />
        </div>
      </Box>
      <Typography mt={3} variant="h4">
        Synchronous Calendar Schedule
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"column"}
        p={1.7}
        borderRadius={2.5}
        border={"1px solid lightgray"}
        mt={1}
        mb={2}
      >
        <Typography sx={{ color: "#344767" }} variant="subtitle2">
          All times are in Pacific Time Pacific Daylight Time = UTC – 7:00 (March-November) Pacific
          Standard Time = UTC – 8:00 (November-March)
        </Typography>
        <div>
          <span style={{ color: "#b2d9b2" }}>
            <strong>Green</strong>
          </span>{" "}
          color indicates you are active ,{" "}
          <span style={{ color: "#ffb2b2" }}>
            <strong>Red</strong>{" "}
          </span>
          color indicates you are Inactive &{" "}
          <span style={{ color: "#b2af9c" }}>
            <strong>Gray</strong>{" "}
          </span>
          color for current date.
        </div>
      </Box>
      <Box mt={2} className="calendar_wrapper">
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
              events={calendarSheduleList}
              allDaySlot={false}
              editable={false}
              selectable={false}
              selectMirror={true}
              dateClick={(date) => {
                dateClickFunction({
                  startDate: date?.dateStr,
                });
              }}
              // select={(date) => {
              //   const startDate = moment(date.startStr);
              //   const endDate = moment(date.endStr);
              //   const dayCount = endDate.diff(startDate, "days");
              //   dateClickFunction({
              //     startDate: date.startStr,
              //     endDate: date.endStr,
              //     dayCount,
              //   });
              // }}
              // navLinks={true}
              // initialEvents={calendarEventsData}
              // eventClick={handleEventClick}
            />
          ),
          [calendarSheduleList]
        )}
      </Box>
      <Dialog
        open={openSelectTimeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={isSmallScreen ? "xs" : "lg"}
      >
        <DialogTitle>
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
            pt={1}
            px={1.5}
          >
            <b>Set time shedule</b>
            {editModeActive && (
              <Box
                bgcolor={"red"}
                px={1}
                pt={1}
                borderRadius={6}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(
                    DELETE_CALENDAR_SHEDULE({
                      date: selectedDate?.startDate,
                      token,
                    })
                  );
                  handleClose();
                }}
              >
                <RiDeleteBin6Line color="white" size={22} />
              </Box>
            )}
          </Box>
        </DialogTitle>
        <Box
          display={"flex"}
          p={2}
          pt={0}
          gap={1}
          sx={{
            minHeight: 450,
          }}
        >
          <DialogContentText
            sx={{
              height: 415,
              overflowY: "scroll",
              padding: 1,
            }}
          >
            {timeFields.map((field, index) => (
              <>
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} my={1}>
                  {timeFields.length > 1 && index !== 0 && (
                    <IoRemoveCircleOutline size={25} onClick={() => handleRemoveTimeField(index)} />
                  )}
                </Box>
                <Box
                  className="time_picker"
                  key={index}
                  display="flex"
                  flexDirection={"column"}
                  gap={1}
                >
                  <SoftSelect
                    options={bookingType}
                    value={
                      bookingType.filter((li) => li.value === timeFields[index]?.type)?.length > 0
                        ? bookingType.filter((li) => li.value === timeFields[index]?.type)
                        : ""
                    }
                    onChange={(e) => {
                      handleTimeChange(index, "type", e.value);
                    }}
                  />
                  {timeFields[index]?.type && timeFields[index]?.type === "Live in person therapy" && (
                    <SoftSelect
                      options={city}
                      placeholder="Select city"
                      name={`events[${index}].city`}
                      onChange={(e) => {
                        handleTimeChange(index, "city", e.value);
                        formik.handleSubmit();
                      }}
                      value={
                        city.filter((li) => li.value === timeFields[index]?.city)?.length > 0
                          ? city.filter((li) => li.value === timeFields[index]?.city)
                          : ""
                      }
                      error={(formik?.errors?.events && formik?.errors?.events[index]?.city) ?? ""}
                    />
                  )}

                  <Box display={"flex"} flexDirection={isSmallScreen ? "column" : "row"} gap={1.5}>
                    <Box className="time_picker" display={"flex"} flexDirection={"column"}>
                      <Typography variant="caption">Start time</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                          className="calendar_date_wrapper"
                          // sx={{ width: 200 }}
                          components={["MobileTimePicker"]}
                        >
                          <MobileTimePicker
                            ampmInClock={false}
                            defaultValue={dayjs(timeFields[index]?.startTime, "HH:mm")}
                            placeholder="select start time"
                            onChange={(e) =>
                              handleTimeChange(index, "startTime", moment(e.$d).format("HH:mm"))
                            }
                            skipDisabled
                            minutesStep={30}
                            view="hours"
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Box>
                    <Box className="time_picker" display={"flex"} flexDirection={"column"}>
                      <Typography variant="caption">End time</Typography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["MobileTimePicker"]}>
                          <MobileTimePicker
                            ampmInClock={false}
                            defaultValue={dayjs(timeFields[index]?.endTime, "HH:mm")}
                            placeholder="select start time"
                            onChange={(e) =>
                              handleTimeChange(index, "endTime", moment(e.$d).format("HH:mm"))
                            }
                            skipDisabled
                            minutesStep={30}
                            view="hours"
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Box>
                  </Box>
                </Box>
              </>
            ))}
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={1}>
              {timeFields.length < 5 && (
                <IoMdAddCircleOutline size={25} onClick={handleAddTimeField} />
              )}
            </Box>
          </DialogContentText>
          <hr />
          <Box display={"flex"} flexDirection={"column"} gap={1} padding={1}>
            {editModeActive && (
              <Box display={"flex"} gap={3} alignItems={"center"}>
                <Typography variant="caption">{status ? "Active" : "Inactive"}</Typography>
                <FormControlLabel
                  control={
                    <Switch checked={status} onChange={(e) => setStatus(e.target.checked)} />
                  }
                />
              </Box>
            )}
            <Box>
              <Typography variant="caption">Reoccurring </Typography>
              <SoftSelect
                options={[
                  { value: "Daily", label: "Daily" },
                  {
                    value: `Weekly on ${moment(selectedDate.startDate).format("dddd")}`,
                    label: `Weekly on ${moment(selectedDate.startDate).format("dddd")}`,
                  },
                  {
                    value: `Monthly on the fourth ${moment(selectedDate.startDate).format("dddd")}`,
                    label: `Monthly on the fourth ${moment(selectedDate.startDate).format("dddd")}`,
                  },
                  {
                    value: `Monthly on the last ${moment(selectedDate.startDate).format("dddd")}`,
                    label: `Monthly on the last ${moment(selectedDate.startDate).format("dddd")}`,
                  },
                  {
                    value: `Annually on ${moment(selectedDate.startDate).format("MMMM D")}`,
                    label: `Annually on ${moment(selectedDate.startDate).format("MMMM D")}`,
                  },
                  { value: "Every weekday (Mon to Fri)", label: "Every weekday (Mon to Fri)" },
                ]}
                onChange={(e) => {
                  generateRecurringEvents(e.value);
                }}
              />
            </Box>
          </Box>
        </Box>
        <DialogActions>
          <SoftButton onClick={handleClose} color="error">
            Cancel
          </SoftButton>
          <SoftButton
            onClick={() => {
              formik.handleSubmit();
              if (formik.isSubmitting) {
                handleConfirmClick();
              }
            }}
          >
            Confirm
          </SoftButton>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
};

export default CalendarShedule;
