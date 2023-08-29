// @mui material components
import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SoftTypography from "components/SoftTypography";
import FormControlLabel from "@mui/material/FormControlLabel";
// Soft UI Dashboard PRO React base styles
const moment = require("moment");
// Data
import { useEffect, useMemo, useState } from "react";
import Calendar from "examples/ScheduleCalendar";
// import calendarEventsData from "./data/calendarEventsData";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Search from "../Book Appointments/component/search";
import DialogBox from "../DialogBox/index";
import SoftButton from "components/SoftButton";
import { url } from "services/AxiosInstance";
import { Box, Card, Typography } from "@mui/material";
import SoftSelect from "components/SoftSelect";
import { useTheme } from "@emotion/react";
import { SET_BOOKING_SERVICE_AND_PLAN, SET_BOOKING_TIMESLOT } from "store/actions/actions";
import { SET_SELECTED_BOOKING_APT_DOC } from "store/actions/actions";

function BookAppointments() {
  const theme = useTheme();
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const navigate = useNavigate();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const array = [];
  const d = new Date();
  let day = weekday[d?.getDay()];
  let year = [d?.getFullYear()];
  const [value, setValue] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [doctorList, setdoctorList] = useState([]);
  const [showDoctor, setshowDoctor] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const doctorid = useSelector((state) => state.auth.selectedAptDoc);
  // const [doctorid, setDoctorid] = useState(selectedAptDoc ? selectedAptDoc : "");
  const dispatch = useDispatch();
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const userID = useSelector((state) => state?.auth?.auth);
  const selectedServiceAndPlan = useSelector((state) => state.auth.selectedServiceAndPlan);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceDetails, setSelectedServiceDetails] = useState(
    selectedServiceAndPlan?.selectedService ?? null
  );
  const [plansList, setPlansList] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(selectedServiceAndPlan?.selectedPlan ?? null);
  const [serviceList, setServiceList] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const doctorSlot = useSelector((state) =>
    state?.auth?.doctorSlotList !== undefined ? state?.auth?.doctorSlotList : []
  );
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const [therapyType, setTherapyType] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const city = [
    { value: "San Diego", label: "San Diego" },
    { value: "New York City", label: "New York City" },
  ];
  console.log("doctorid", doctorid);
  console.log("therapyType", therapyType);
  const dateClick = function (info) {
    const filteredDate = doctorid
      ? doctorid?.doctorSchedule.filter((li) => li.date === info.dateStr && li.status === true)
      : [];
    if (filteredDate.length > 0) {
      dispatch(SET_BOOKING_TIMESLOT(filteredDate[0]));
      const clickedDate = new Date(info?.date);
      const currentDate = new Date();
      const date1Year = clickedDate?.getFullYear();
      const date1Month = clickedDate?.getMonth();
      const date1Day = clickedDate?.getDate();

      const date2Year = currentDate?.getFullYear();
      const date2Month = currentDate?.getMonth();
      const date2Day = currentDate?.getDate();

      if (date1Year <= date2Year && date1Month <= date2Month && date1Day < date2Day) {
        return; // Prevent further execution if clicked date is in the past
      } else {
        var date = new Date(
          currentDate?.getFullYear(),
          currentDate?.getMonth(),
          currentDate?.getDate()
        );
        var mydate = new Date(info?.dateStr);
        const weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let day = weekday[mydate?.getDay()];
        console.log("Day----", day);

        if (date > mydate) {
        } else {
          localStorage.setItem("date", info?.dateStr);
          localStorage.setItem("doctorId", doctorid);
          localStorage.setItem("appointmentVisited", "yes");
          dispatch(
            SET_BOOKING_SERVICE_AND_PLAN({
              ...selectedServiceAndPlan,
              selectedService: selectedServiceDetails,
              selectedPlan: selectedPlan,
              selectedDate: info?.dateStr,
            })
          );
          {
            userType === "client"
              ? navigate("/book-appointments/timeSlot", {
                  state: {
                    date: info?.dateStr,
                    planId: selectedPlan?.planId,
                    serviceId: selectedServiceDetails?._id,
                    sessionCount: selectedPlan?.totalCredit - selectedPlan?.remainingCredit + 1,
                    serviceHour: parseFloat(selectedServiceDetails?.serviceHour),
                    serviceType: selectedPlan?.planDetails?.therapyType,
                    doctorId: doctorid?._id,
                  },
                })
              : navigate("/book-appointments/timeSlot", {
                  state: {
                    date: info?.dateStr,
                    planId: selectedPlan?.planId,
                    serviceId: selectedServiceDetails?._id,
                    sessionCount: selectedPlan?.totalCredit - selectedPlan?.remainingCredit + 1,
                    serviceHour: parseFloat(selectedServiceDetails?.serviceHour),
                    serviceType: selectedPlan?.planDetails?.therapyType,
                    doctorId: doctorid?._id,
                  },
                });
          }
        }
      }
    }
  };

  useEffect(() => {
    if (selectedPlan?.planDetails?.therapyType === "Live in person therapy" && selectCity !== "") {
      // dispatch(SET_SELECTED_BOOKING_APT_DOC(""));
      setTherapyType(selectedPlan?.planDetails?.therapyType);
    }
    if (selectedPlan?.planDetails?.therapyType === "Live video therapy") {
      // dispatch(SET_SELECTED_BOOKING_APT_DOC(""));
      setTherapyType(selectedPlan?.planDetails?.therapyType);
    }
  }, [selectedPlan, selectCity]);

  const dateClickFunction = function (info) {
    // console.log("calendarDate---", info)
    // alert('Error: Date click is not allowed!');
    const clickedDate = new Date(info?.date);
    const currentDate = new Date();

    const date1Year = clickedDate?.getFullYear();
    const date1Month = clickedDate?.getMonth();
    const date1Day = clickedDate?.getDate();

    const date2Year = currentDate?.getFullYear();
    const date2Month = currentDate?.getMonth();
    const date2Day = currentDate?.getDate();

    if (date1Year <= date2Year && date1Month <= date2Month && date1Day < date2Day) {
      return; // Prevent further execution if clicked date is in the past
    } else {
      setErrorMessage("Please Select Doctor");
      setErrorVisible(true);

      setTimeout(() => setErrorMessage(""), 3000);
    }

    // setErrorVisible(true)
  };

  const select = function (info) {
    console.log(info?.startStr, info?.endStr);
  };

  // const doctor_list = (id) => {
  //   setDoctorid(id);
  // };

  const errorFunction = (ele) => {
    setErrorVisible(ele);
  };
  console.log("doctorid", doctorid);

  const seeDoctor = () => {
    const url = "https://www.buserinstitute.com/our-team";
    window.open(url, "_blank");
  };

  const loadService = async () => {
    const response = await axios.get(`${url}/api/Appointment/serviceList`, {
      headers: {
        authorization: token,
      },
    });
    // console.log("response", response);
    const data = response?.data?.data;
    const list = data?.map((a) => ({
      ...a,
      label: a?.serviceName,
    }));
    setServiceList(list);
    console.log("list", list);
    setIsInitialLoad(false);
  };
  useEffect(() => {
    loadService();
  }, []);

  useEffect(() => {
    if (selectedService) {
      fetchPlanByService();
      setSelectedPlan(null);
    }
  }, [selectedService]);

  const fetchPlanByService = async () => {
    try {
      const response = await axios.get(
        `${url}/api/Appointment/servicePlanList?serviceId=${selectedService}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      const data = response.data.data;
      const list =
        data.length > 0
          ? data?.map((a) => ({
              ...a,
              label: a?.planDetails?.name,
            }))
          : [];
      setPlansList(list);
    } catch (error) {
      console.log("error", error);
    }
  };

  const openInstructions = () => {
    const Liveurl = "https://app.buserinstitute.com/#/book-appointments/instructions";
    // const Localurl = "http://localhost:3000/#/book-appointments/instructions";

    window.open(Liveurl, "_blank");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box sx={{ minHeight: "78vh" }}>
        <SoftBox
          style={{ justifyContent: "space-between", display: "flex", padding: "0 10px 5px 0" }}
        >
          <SoftButton className="seeDoc" onClick={openInstructions}>
            Instructions
          </SoftButton>
          <SoftButton className="seeDoc" onClick={seeDoctor}>
            See Our Doctors..
          </SoftButton>
        </SoftBox>
        <Box
          display={"flex"}
          gap={2}
          marginTop={2}
          sx={{
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
          }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
            <Typography variant="caption">Select service</Typography>
            <SoftSelect
              placeholder="Please Select ..."
              options={serviceList}
              onChange={(event) => {
                setSelectedService(event._id);
                setSelectedServiceDetails(event);
                setSelectCity("");
                dispatch(SET_SELECTED_BOOKING_APT_DOC(""));
              }}
              value={selectedServiceDetails}
            />
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
            <Typography variant="caption">Select plan</Typography>
            <SoftSelect
              placeholder="Please Select ..."
              options={plansList === null ? [] : plansList}
              onChange={(plan) => {
                setSelectedPlan(plan);
                dispatch(SET_SELECTED_BOOKING_APT_DOC(""));
              }}
              value={selectedPlan}
            />
          </Box>
          {selectedPlan?.planDetails?.therapyType === "Live in person therapy" && (
            <>
              <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
                <Typography variant="caption">Select city</Typography>
                <SoftSelect
                  placeholder="Select city..."
                  options={city}
                  onChange={(city) => {
                    setSelectCity(city.label);
                  }}
                />
              </Box>
            </>
          )}
        </Box>
        {selectedPlan ? (
          // <>
          //   {doctorid === "" ?
          //   (
          //     <>
          //       {userType === "doctor" ? (
          //         <>
          //           <SoftBox>
          //             <Grid item xs={12} lg={7}>
          //               {useMemo(
          //                 () => (
          //                   <>
          //                     <Calendar
          //                       header={{ title: "calendar", date: `${day} ${year}` }}
          //                       headerToolbar={{
          //                         left: "prev,next",
          //                         center: "title",
          //                         right: "",
          //                       }}
          //                       initialView="dayGridMonth"
          //                       editable={true}
          //                       selectable={true}
          //                       dateClick={dateClickFunction}
          //                     />
          //                   </>
          //                 ),
          //                 [errorMessage]
          //               )}
          //             </Grid>
          //           </SoftBox>
          //         </>
          //       ) : (
          //         <SoftBox>
          //           <Grid item xs={12} lg={7}>
          //             {useMemo(
          //               () => (
          //                 <Calendar
          //                   header={{ title: "calendar", date: `${day} ${year}` }}
          //                   headerToolbar={{
          //                     left: "prev,next",
          //                     center: "title",
          //                     right: "",
          //                   }}
          //                   initialView="dayGridMonth"
          //                   //events={calendarEventsData}
          //                   allDaySlot={false}
          //                   editable={true}
          //                   selectable={true}
          //                   selectMirror={true}
          //                   dateClick={dateClickFunction}
          //                   // navLinks={true}
          //                   // initialEvents={calendarEventsData}
          //                   // eventClick={handleEventClick}
          //                 />
          //               ),
          //               [doctorid]
          //             )}
          //           </Grid>
          //         </SoftBox>
          //       )}
          //     </>
          //   ) : (
          //     <>
          <>
            {selectedPlan?.planDetails?.therapyType === "Live in person therapy" ? (
              <>
                {selectCity !== "" && (
                  <Search type={therapyType} city={selectCity} value={doctorid} />
                )}
              </>
            ) : (
              <Search type={therapyType} city={""} value={doctorid} />
            )}
            <Card
              sx={{ p: 1, mt: 2, display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <Typography variant="body2">
                {" "}
                {selectedPlan?.planDetails?.therapyType === "Live in person therapy"
                  ? selectCity !== ""
                    ? "Please select a practitioner"
                    : "Please select a city"
                  : selectedPlan?.planDetails?.therapyType === "Live video therapy" &&
                    doctorid === ""
                  ? "Please select Practitioner"
                  : "Please select an available date"}
              </Typography>
            </Card>
            {doctorid && (
              <Box mt={2}>
                <Grid item xs={12} lg={7}>
                  {/* {useMemo(
                    () => ( */}
                  <Calendar
                    header={{ title: "calendar", date: `${day} ${year}` }}
                    headerToolbar={{
                      left: "prev,next",
                      center: "title",
                      right: "",
                    }}
                    initialView="dayGridMonth"
                    events={
                      doctorid && doctorid?.doctorSchedule?.length > 0
                        ? doctorid?.doctorSchedule.map((li) => {
                            return {
                              start: li?.date,
                              end: li?.date,
                              display: "background",
                              backgroundColor: li?.status ? "green" : "red",
                              ...li,
                            };
                          })
                        : []
                    }
                    editable={true}
                    dragScroll={true}
                    selectable={true}
                    selectMirror={true}
                    //navLinks={true}
                    allDaySlot={false}
                    slotMinTime="09:00"
                    slotMaxTime="21:00"
                    dateClick={dateClick}
                    select={select}
                    initialDate={selectedServiceAndPlan?.selectedDate}
                  />
                  {/* ),
                    [doctorid]
                  )} */}
                </Grid>
              </Box>
            )}
          </>
        ) : plansList?.length === 0 ? (
          <Card
            sx={{ p: 1, mt: 2, display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Typography variant="body2">
              {" "}
              No {selectedServiceDetails?.serviceName} Service Available. To Purchase Service
            </Typography>
            <span
              style={{ color: "blue", fontSize: 16, cursor: "pointer" }}
              onClick={() => navigate("/services")}
            >
              Click here
            </span>
          </Card>
        ) : (
          <Card
            sx={{ p: 1, mt: 2, display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Typography variant="body2"> Please select service and plan</Typography>
          </Card>
        )}
      </Box>
      <Footer />
      <DialogBox open={informConsentStatus} />
    </DashboardLayout>
  );
}

export default BookAppointments;
