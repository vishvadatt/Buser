import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftSnackbar from "components/SoftSnackbar";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Card, Typography, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  doctoSlotData,
  patientBookAppointment,
  clearMessage,
  bookAppointmentToast,
  patientPurchaseServiceList,
} from "store/actions/actions";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import SlotRoot from "../SlotRoot";
import CircularProgress from "@mui/material/CircularProgress";
import SoftSelect from "components/SoftSelect";
import { url } from "services/AxiosInstance";
import axios from "axios";
import { latestServicePurchased } from "store/actions/actions";
import { GET_DOCTOR_BOOKINGS } from "store/actions/actions";
import moment from "moment";

const validationSchema = Yup.object({
  // therapyType: Yup.string().required("Required!"),
  serviceId: Yup.string().required("Required!"),
  //email: Yup.string().email("Please enter a valid email address.").required("Required!"),
  painDetails: Yup.string().required("Required!"),
  // address: Yup.string().required("Required!"),
});

function PatientAppointment() {
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const successMessage = useSelector((state) => state?.auth?.successMessage);
  const errorMessage = useSelector((state) => state?.auth?.errorMessage);
  // const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const userID = useSelector((state) => state?.auth?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [errorVisible, setErrorVisible] = useState(false);
  const [noProgress, setProgress] = useState(true);
  // const userType = useSelector((state) => state.auth.auth.userType);
  const [photoTherapyType, setphotoTherapyType] = useState("");

  const [planId, setPlanId] = useState("");
  const [buttonDisable, setButtonDisable] = useState(true);
  const [checkService, setCheckService] = useState(false);
  const [checkPersonService, setCheckPersonService] = useState(false);
  // const [selectedOption, setSelectedOption] = useState([]);
  const [checkPlan, setCheckPlan] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const [cancelModal, setCancelModal] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [pbuttonDisable, setPButtonDisable] = useState(true);
  const [selectedService, setSelectedService] = useState("");
  const [selectedServiceDetails, setSelectedServiceDetails] = useState({});
  const [plansList, setPlansList] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const STime = localStorage.getItem("startTime") || "";
  const ETime = localStorage.getItem("endTime") || "";
  const ModalOpen = localStorage.getItem("modal") || false;

  // console.log(STime, ETime, ModalOpen, "eeeeeeeeeee");

  const [startTime, setStartTime] = useState(STime);
  const [endTime, setEndTime] = useState(ETime);
  const [open, setOpen] = useState(ModalOpen);
  const theme = useTheme();
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const doctorAppointmentBookings = useSelector((state) => state.auth.doctorAppointmentBookings);
  const myPurchaseServiceList = useSelector((state) =>
    state?.auth?.myPurchaseServiceList !== undefined ? state?.auth?.myPurchaseServiceList : []
  );

  const doctorID = localStorage.getItem("doctorId");
  const bookingDate = localStorage.getItem("date");
  // console.log("doctorSlot",doctorSlot)
  useEffect(() => {
    if (doctorID) {
      dispatch(
        GET_DOCTOR_BOOKINGS({
          doctorId: doctorID,
          Date: bookingDate,
          token: token,
        })
      );
    }
    setTimeout(() => setProgress(false), 3000);
  }, []);

  // const closeErrorSB = () => {
  //   setErrorSB(false);
  //   dispatch(clearMessage());
  // };

  if (myPurchaseServiceList && photoTherapyType) {
    let newPurchaseServiceList = myPurchaseServiceList?.map((a) => ({
      planId: a?.planId,
      planName: a?.planName,
      serviceId: a?.service?._id,
      serviceName: a?.service?.serviceName,
      remainingCredit: a?.remainingCredit,
      totalCredit: a?.totalCredit,
    }));

    var newPurchaseServiceType = newPurchaseServiceList?.map((a) => ({
      value: a?.serviceId,
      label: a?.planName + "-" + a?.serviceName,
      planId: a?.planId,
      remainingCredit: a?.remainingCredit,
      totalCredit: a?.totalCredit,
    }));
  }
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

  console.log("location",location)

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (!isInitialLoad) {
  //       if (photoTherapyType === "Live Video") {
  //         if (serviceList.length === 0) {
  //           setCheckService(false);
  //           setCheckPlan(true);
  //         } else {
  //           setCheckPlan(false);
  //         }
  //       } else {
  //         if (serviceList.length === 0) {
  //           setCheckPlan(false);
  //           setCheckService(true);
  //         } else {
  //           setCheckService(false);
  //         }
  //       }
  //     }
  //   }, 500);
  // }, [photoTherapyType, serviceList, isInitialLoad]);

  // console.log("servicelist", serviceList);

  // console.log("myPS", myPurchaseServiceList);
  // console.log("newPT", newPurchaseServiceType);
  //console.log("newPS", newPurchaseServiceList);
  //console.log("EE",errorVisible);

  const handleChange = (event, formik) => {
    const eventvalue = event?.planId;
    newPurchaseServiceType.map((data) => {
      if (data?.planId === eventvalue) {
        if (data?.remainingCredit <= 0) {
          setErrorVisible(true);
          formik?.setFieldValue("serviceId", null);
          formik?.setFieldValue("planId", null);
          return;
        } else {
          setErrorVisible(false);
          formik?.setFieldValue("SessionCount", data?.totalCredit - data?.remainingCredit + 1);
          setPlanId(data?.planId);
          formik?.setFieldValue("serviceId", data?.value);
          formik?.setFieldValue("planId", data?.planId);
        }
      }
    });
  };

  var myStyle = {
    borderLeft: "1px solid #222",
    marginLeft: "22px",
    marginRight: "13px",
  };

  const handleTherapyTypeChange = (event, formik) => {
    setIsInitialLoad(true);
    dispatch(
      patientPurchaseServiceList({
        patientId: userID?._id,
        token: token,
        therapyType: event?.target?.value,
      })
    );
    setErrorVisible(false);
    formik.handleChange(event);
    setphotoTherapyType(event?.target?.value);
    formik.setFieldValue("therapyType", event?.target?.value);
    setTimeout(() => {
      if (event?.target?.value === "Live Video") {
        setPlanId("");
        formik?.setFieldValue("serviceId", null);
        setCheckPersonService(false);
      } else {
      }
    }, 500);
  };

  const handleClose = () => {
    setOpen(false);
    setCancelModal(false);
    localStorage.removeItem("modal");
    localStorage.removeItem("startTime");
    localStorage.removeItem("endTime");
    setButtonDisable(true);
    setPButtonDisable(true);
    setphotoTherapyType("");
    setErrorVisible(false);
    setCheckService(false);
    setCheckPersonService(false);
    setCheckPlan(false);
  };

  const cardAction = async (slot) => {
    // let result = await handleCheckBooking(location?.state?.date, slot.startTime);
    // if (!result) {
    setStartTime(slot?.startTime);
    setEndTime(slot?.endTime);
    setOpen(true);
    // } else {
    //   dispatch(bookAppointmentToast());
    // }
  };

  //! Chech whether we have not any other Appointmnet at this given time
  const handleCheckBooking = async (date, time) => {
    const data = {
      Date: date,
      Time: time,
    };

    try {
      const response = await axios.post(
        `${url}/api/Appointment/checkAppointmentSlot/${userID._id}`,
        data,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data.data.result.length;
    } catch (err) {
      console.log(err);
    }
  };

  const handlePurchase = (photoTherapyType) => {
    localStorage.setItem("modal", open);
    localStorage.setItem("startTime", startTime);
    localStorage.setItem("endTime", endTime);

    navigate(`/purchase-service?serviceName=${photoTherapyType}`);
  };


  return (
    <>
      {/* <Typography
        style={{
          justifyContent: "center",
          display: "flex",
          color: "#364969",
          fontWeight: "500",
        }}
      >
        {location.state.date}
      </Typography> */}
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
            }}
          />
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={1} width={"100%"}>
          <Typography variant="caption">Select plan</Typography>
          <SoftSelect
            placeholder="Please Select ..."
            options={plansList === null ? [] : plansList}
            onChange={(plan) => {
              setSelectedPlan(plan);
            }}
            value={selectedPlan}
          />
        </Box>
      </Box>
      {selectedPlan ? (
        <Card sx={{ p: 1, mt: 2 }}>
          <Grid style={{ padding: "25px" }}>
            <Box display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={"center"}>
              {renderTimeSlots(createTimeSlots())}
            </Box>
          </Grid>
        </Card>
      ) : plansList?.length === 0 ? (
        <Card sx={{ p: 1, mt: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
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
        <Card sx={{ p: 1, mt: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography variant="body2"> Please select service and plan</Typography>
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
                  // therapyType: "",
                  name: userID?.name,
                  serviceId: selectedService,
                  planId: selectedPlan?.planId,
                  email: userID?.email,
                  doctorId: localStorage.getItem("doctorId"),
                  Date: location.state.date,
                  painDetails: "",
                  bookedBy: userID?._id,
                  startTime: startTime,
                  endTime: endTime,
                  SessionCount: selectedPlan?.totalCredit - selectedPlan?.remainingCredit + 1,
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

                  if (photoTherapyType === "Live In-Person") {
                    dispatch(
                      latestServicePurchased({
                        latestServicePurchasedName:
                          "live_In_Person_and_Travel_Exercise_Therapy_Balance",
                      })
                    );
                  } else {
                    dispatch(
                      latestServicePurchased({
                        latestServicePurchasedName: "live_Video_Online_Exercise_Therapy_Balance",
                      })
                    );
                  }
                  setTimeout(() => {
                    navigate("/labs");
                  }, 1000);
                  setTimeout(
                    () =>
                      dispatch(
                        doctoSlotData({
                          doctorId: doctorID,
                          Date: bookingDate,
                          token: token,
                        })
                      ),
                    500
                  );
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
                              consideration due to unrecoverable travel costs incurred by the Buser
                              Institute when we travel to a Travel Clinic location. As you have
                              experienced today, booking an appointment initially places a client on
                              a pending waitlist for that date, time and location until that Travel
                              Clinic meets the number of appointments required to energize a Travel
                              Clinic confirmation and processing of client payments. Changes of an
                              appointment time to another open time in the same Travel Clinic week
                              and location are permitted if done at least 48 hours (two business
                              days) in advance of one’s originally scheduled appointment. For
                              cancellations of an appointment, again due to travel costs incurred by
                              the Buser Institute for Travel Clinics, once a final booking
                              confirmation is made with client payment processing, we are unable to
                              refund scheduled appointments for any reason of cancellation. If a
                              client must cancel such a confirmed (payment processed) appointment,
                              the client may transfer their appointment to another client who will
                              only incur any differential costs in appointments due to the Buser
                              Institute (ie. Existing Client appointment transferred to a New Client
                              appointment which is more expensive). Alternatively, if the client is
                              able to refer another paying client to take their appointment (same
                              appointment date & time or another open date & time at the same Travel
                              Clinic location and week), a commensurate refund to the original
                              client may be honored. In such a case of confirmed appointment
                              cancellation, the Buser Institute will also make every reasonable
                              effort to fill that canceled appointment (same date, time and
                              location) with another client from the waitlist for that Travel
                              Clinic, in which case the original client may be refunded. However, if
                              the original client and the Buser Institute are unable to re-book the
                              same appointment date, time and location for that Travel Clinic, we
                              will be unable to refund the client for that appointment cost due to
                              the opportunity loss. Please contact the Buser Institute at
                              admin@buserinstitue.com if you have any questions or concerns
                              regarding this Travel Clinic Change and Cancellation Policy.
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
    </>
  );
}

export default PatientAppointment;
