import PageLayout from "examples/LayoutContainers/PageLayout";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { EDUCATION_EVENT_LIST_ACTION } from "store/actions/actions";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "services/AxiosInstance";
import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";
import SoftInput from "components/SoftInput";
import moment from "moment";
import { DOCTOR_PURCHASE_SERVICE_LIST_ACTION } from "store/actions/actions";
import _ from "lodash";

const EducationEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.auth.idToken);
  const educationEventList = useSelector((state) => state?.auth?.educationEventList);

  const [eventDetails, setEventDetails] = useState("");
  const [showBookModal, setShowBookModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const groupedData = _.groupBy(educationEventList, "serviceName");

  const [agree, setAgree] = useState(false);
  const [reason, setReason] = useState("");
  const [error, setError] = useState(false);
  console.log(educationEventList, "event");
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

  useEffect(() => {
    dispatch(EDUCATION_EVENT_LIST_ACTION({ token }));
    // dispatch(DOCTOR_PURCHASE_SERVICE_LIST_ACTION({ token }));
  }, []);

  const handleCancel = (item) => {
    setEventDetails(item);
    setShowCancelModal(true);
  };

  const handleCancelEvent = async () => {
    if (!reason) {
      setError(true);
      return;
    }
    setError(false);
    try {
      const id = eventDetails && eventDetails?.bookEvent[0]._id;
      const res = await axiosInstance.post(
        `event/cancelEvent/${id}`,
        {
          cancelReason: reason,
          Date: eventDetails.startDate,
          Time: eventDetails.startTime,
          planId: eventDetails?.planId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res, "aa");
      if (res?.status === 200) {
        dispatch(EDUCATION_EVENT_LIST_ACTION({ token }));
      }
    } catch (error) {
      console.log(error);
    }
    setEventDetails("");
    setReason("");
    setShowCancelModal(false);
  };

  const handleBook = (item) => {
    setEventDetails(item);
    setShowBookModal(true);
  };

  const handleBookEvent = async () => {
    try {
      const res = await axiosInstance.post("event/bookEvent",
        {
          eventId: eventDetails?._id,
          planId: eventDetails?.planId,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res, "ss");
      if (res?.status === 200) {
        dispatch(EDUCATION_EVENT_LIST_ACTION({ token }));
      }
    } catch (error) {
      console.log(error);
    }
    setEventDetails("");
    setAgree(false);
    setReason("");
    setShowBookModal(false);
  };
  const handleChange = (e) => {
    setReason(e.target.value);
    setError(false);
  };
  return (
    <PageLayout>
      <Box position={"relative"} px={10} py={4}>
        <SoftBox className="video-page-header">
          <SoftBox>
            <SoftTypography className="video-page-title">Education Events</SoftTypography>
          </SoftBox>
          <SoftBox className="video-page-header-action">
            <SoftButton
              onClick={() => {
                navigate(-1);
              }}
              variant="gradient"
              color="dark"
              sx={{
                position: "absolute",
                top: 50,
                left: 55,
              }}
            >
              Back
            </SoftButton>

            <SoftButton
              onClick={() => {
                navigate("/Education");
              }}
              variant="gradient"
              color="dark"
              sx={{
                position: "absolute",
                top: 50,
                right: 55,
              }}
            >
              Purchase Service
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <Box width={"100%"}>
          {Object.entries(groupedData).map(([serviceName, items], index) => (
            <Box key={index} mb={3}>
              <Typography variant="h4" textAlign={"center"} style={{ margin: "10px" }}>
                {serviceName}
              </Typography>
              {Object.entries(_.groupBy(items, "planType")).map(
                ([planType, planItems], planIndex) => (
                  <Box key={planIndex} mt={"20px"} mb={"20px"}>
                    <Typography variant="h5" style={{ margin: "10px" }}>
                      {planType}
                    </Typography>
                    <Box display={"flex"} gap={"50px"} flexWrap={"wrap"}>
                      {planItems.map((item, itemIndex) => (
                        <Card
                          sx={{ width: 250, marginTop: "15px" }}
                          key={itemIndex}
                          variant="outlined"
                        >
                          <CardContent sx={{ margin: "auto" }}>
                            <Typography variant="h6" component="div">
                              {item?.title}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              {item?.location}
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} color="text.secondary">
                              {item?.startDate}
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} color="text.secondary">
                              Remaining Credit:
                              {item?.purchasePlan && item?.purchasePlan.length > 0
                                ? item?.purchasePlan[0]?.remainingCredit
                                : 0}
                            </Typography>
                          </CardContent>
                          <CardActions sx={{ margin: "auto" }}>
                            {item?.bookEvent && item?.bookEvent.length > 0 ? (
                              <SoftButton
                                variant="gradient"
                                color="error"
                                onClick={() => handleCancel(item)}
                              >
                                Cancel Event
                              </SoftButton>
                            ) : (
                              <SoftButton
                                variant="gradient"
                                color="dark"
                                onClick={() => handleBook(item)}
                                disabled={
                                  item?.purchasePlan.length === 0 ||
                                  item?.purchasePlan[0]?.remainingCredit === 0
                                }
                              >
                                Book Event
                              </SoftButton>
                            )}
                          </CardActions>
                          ;
                        </Card>
                      ))}
                    </Box>
                  </Box>
                )
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog
        fullWidth
        maxWidth={"md"}
        open={showBookModal}
        onClose={() => {
          setEventDetails("");
          setAgree(false);
          setShowBookModal(false);
        }}
      >
        <DialogTitle sx={{ margin: "auto" }}>Cancellation Policy</DialogTitle>
        <DialogContent sx={{ padding: "20px" }}>
          <Typography>
            Live-Stream (Online) Seminar Reservation Change and Cancelation Policy:
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "black !important" }}>
            Due to recording studio, audio/visual hosting and continuing education certification
            costs incurred, 48 hours (two business days) change and/or cancelation notice is
            required to avoid a 100% fee for Live-stream (Online) seminar reservations. Please note
            however, all Live-Stream Seminar purchases also include access to the On-Demand video
            recording of the seminar to view at one’s own convenience on your My Education Material
            tab of your Practitioner Dashboard. Please also note that many states assess
            participation in Live-Stream attendance and On-Demand (recorded video) viewing
            differently in terms of continuing education unit credit. To receive credit from the
            Buser Institute for Live-Stream Seminar attendance one must be present in the seminar
            Live-Stream meeting room on the dates and times of the seminar. Extenuating
            circumstances for Live-Stream Seminar reservation changes and cancelations may be
            considered on a case-by-case basis by contacting our Administration at
            admin@buserinstitute.com
          </Typography>
          <br />
          <Typography>Live In-Person Seminar Reservation Change and Cancelation Policy:</Typography>

          <Typography sx={{ fontSize: "15px", color: "black !important" }}>
            Live In-Person Seminars involve some unique variables for consideration due to
            unrecoverable travel and seminar space reservation costs incurred by the Buser Institute
            when we conduct Live In-Person seminars. As you have experienced today, booking a Live
            In-Person seminar seat initially places an attendee on a waitlist for that seminar date,
            time and location until that seminar meets the number of attendees required to energize
            a Live In-Person Seminar seat confirmation and processing of payment. Changes of a
            reserved (waitlisted) seminar seat for a particular course/date/location to another
            seminar course/date/location are permitted if done so before payments and confirmation
            of the originally requested (waitlisted) seat have been processed. For cancellations of
            a confirmed seminar reservation, due to limited space available for attendees,
            reasonable time needed for other waitlisted individuals to respond to and fill an opened
            seat, and travel costs incurred by the Buser Institute for conducting in-person
            seminars, once a final confirmation is made with attendee payment processing completed
            we are unable to refund confirmed seminar seats for any reason. If an attendee must
            cancel such a confirmed (payment processed) seminar seat reservation, the attendee may
            transfer their reservation to another individual who has not already booked a seminar
            seat. Alternatively, if the attendee is able to refer another paying individual to take
            their seminar seat (same seminar course, date and location) a commensurate refund to the
            original attendee may be honored. In such a case of a confirmed seminar seat requested
            cancellation, the Buser Institute will also make every reasonable effort to fill that
            seminar seat (same course, date and location) with another individual from the seminar
            waitlist, in which case the original attendee may be refunded. However, if the original
            attendee and the Buser Institute are unable to re-book the reserved seat for the same
            seminar course, date and location, we will be unable to refund the client for that
            seminar seat cost due to the opportunity loss. Please contact the Buser Institute at
            admin@buserinstitue.com if you have any questions or concerns regarding this Live
            In-Person Seminar Change and Cancellation Policy.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Box ml={2}>
              <FormControlLabel
                required
                control={<Checkbox value={agree} onChange={() => setAgree(!agree)} />}
                label="Accept"
              />
            </Box>
            <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
              <SoftButton
                onClick={() => {
                  setAgree(false);
                  setEventDetails("");
                  setShowBookModal(false);
                }}
              >
                Close
              </SoftButton>
              <SoftButton
                variant="gradient"
                color="dark"
                onClick={handleBookEvent}
                disabled={!agree}
              >
                Book
              </SoftButton>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth
        maxWidth={"md"}
        open={showCancelModal}
        onClose={() => {
          setEventDetails("");
          setReason("");
          setShowCancelModal(false);
        }}
      >
        <DialogTitle sx={{ margin: "auto" }}>Cancel Event Booking</DialogTitle>
        <DialogContent sx={{ padding: "20px" }}>
          <Box>
            <SoftInput
              multiline={true}
              rows={4}
              type="text"
              value={reason}
              onChange={(e) => handleChange(e)}
              placeholder="Enter Reason For Cancellation..."
            />
            {error && <div className="error-message">Reason is required.</div>}
            {eventDetails &&
              eventDetails?.Plan[0]?.name === "2 Day Live Stream Video Seminar" &&
              currentTime > date48(eventDetails?.startDate, eventDetails?.startTime) && (
                <Typography>
                  You will loose your credit, if you still want to cancel then proceed ?
                </Typography>
              )}
            {eventDetails &&
              eventDetails?.Plan[0]?.name === "2 Day In-Person Seminar" &&
              currentTime > date5days(eventDetails?.startDate, eventDetails?.startTime) && (
                <Typography>
                  You will loose your credit, if you still want to cancel then proceed ?
                </Typography>
              )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
            <SoftButton
              onClick={() => {
                setShowCancelModal(false);
                setEventDetails("");
                setReason("");
              }}
            >
              Close
            </SoftButton>
            <SoftButton
              variant="gradient"
              color="dark"
              onClick={handleCancelEvent}
              disabled={!reason}
            >
              Cancel Booking
            </SoftButton>
          </Box>
        </DialogActions>
      </Dialog>
    </PageLayout>
  );
};

export default EducationEvents;
