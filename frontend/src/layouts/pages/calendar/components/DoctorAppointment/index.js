import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Paper, Card, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  doctoSlotData,
  doctoSlotDetail,
  bookedAppointmentDetail,
  patientBookAppointment,
  clearMessage,
  patientPurchaseServiceList,
  doctorBookedAppointment,
} from "store/actions/actions";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import SlotRoot from "../SlotRoot";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import CircularProgress from "@mui/material/CircularProgress";

// console.log("Doctor----");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #364969",
  boxShadow: 24,
  p: 4,
};

const DoctorAppointment = () => {
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const successMessage = useSelector((state) => state?.auth?.successMessage);
  const errorMessage = useSelector((state) => state?.auth?.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const handleClose = () => setOpen(false);
  const [Progress, setProgress] = useState(true);

  useEffect(() => {
    dispatch(doctoSlotData({ doctorId: location?.state?.doctorid, Date: location?.state?.date }));
    setTimeout(() => setProgress(false), 2000);
  }, []);

  const doctorSlot = useSelector((state) =>
    state?.auth?.doctorSlotList !== undefined ? state?.auth?.doctorSlotList : []
  );

  const doctorBookedAppointmentDetail = useSelector((state) =>
    state?.auth?.doctorBookedAppointmentDetail !== undefined
      ? state?.auth?.doctorBookedAppointmentDetail
      : []
  );

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const doctorBookedAppointmentList = useSelector((state) =>
    state?.auth?.doctorBookedAppointmentList !== undefined
      ? state?.auth?.doctorBookedAppointmentList
      : []
  );
  // console.log("Doctor Appointment List---", doctorBookedAppointmentDetail);

  var myStyle = {
    borderLeft: "1px solid #222",
    marginLeft: "22px",
    marginRight: "13px",
  };

  const cardAction = async (time) => {
    dispatch(
      bookedAppointmentDetail({
        doctorId: location?.state?.doctorid,
        value: { Date: location?.state?.date, Time: time },
      })
    );
    setTimeout(() => setOpen(true), 1000);
  };

  console.log("time", doctorBookedAppointmentDetail);

  return (
    <>
      {console.log("loading1---", Progress)}
      <Card>
        <Grid style={{ padding: "25px" }}>
          <Typography
            style={{
              justifyContent: "center",
              display: "flex",
              color: "#364969",
              fontWeight: "500",
            }}
          >
            {location?.state?.date}
          </Typography>
          {Progress === true ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                <CircularProgress style={{ color: "#364969" }} size={50} />
              </Box>
            </>
          ) : (
            <>
              {doctorSlot?.length === 0 ? (
                <>
                  <span
                    style={{
                      color: "#364969",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "50px",
                    }}
                  >
                    No Appointment Found...
                  </span>
                </>
              ) : (
                <>
                  <Grid container mt={3}>
                    <Grid items lg={5.7}>
                      <Grid>
                        <Typography
                          style={{
                            justifyContent: "center",
                            display: "flex",
                            color: "#364969",
                            fontWeight: "400",
                          }}
                        >
                          Morning
                        </Typography>
                      </Grid>
                      <Grid container spacing={2} mt={1}>
                        {/* {console.log("Appointment--", doctorSlot)} */}

                        {doctorSlot &&
                          doctorSlot
                            .filter((d) => d?.startTime?.start < "12:00")
                            .map((slot, i) => (
                              <>
                                <Grid item xs={4} sm={4} md={4} lg={6}>
                                  {slot?.book === true ? (
                                    <>
                                      <div>
                                        <SlotRoot>
                                          <Card
                                            key={slot?._id}
                                            style={{
                                              // opacity: "0.5",
                                              padding: "2px",
                                              color: "#ffffff",
                                              cursor: "pointer",
                                              borderRadius: "0.6rem !important",
                                            }}
                                            onClick={(e) => cardAction(slot?.startTime?.start)}
                                          >
                                            <Box>
                                              <Card className="slot-error">
                                                <Typography
                                                  style={{
                                                    justifyContent: "center",
                                                    display: "flex",
                                                  }}
                                                  variant="h5"
                                                >
                                                  {`${slot?.startTime?.start} to ${slot?.startTime?.end}`}
                                                </Typography>
                                              </Card>
                                            </Box>
                                          </Card>
                                        </SlotRoot>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {/* {console.log("id-------", slot._id)} */}
                                      <div>
                                        <SlotRoot>
                                          <Card
                                            key={slot?._id}
                                            style={{
                                              padding: "2px",
                                              color: "#ffffff",
                                              // cursor: "pointer",
                                            }}
                                            //onClick={(e) => cardAction(slot._id)}
                                          >
                                            <Box>
                                              <Card className="slot-success">
                                                <Typography
                                                  color="#fffcfc"
                                                  style={{
                                                    justifyContent: "center",
                                                    display: "flex",
                                                  }}
                                                  variant="h5"
                                                >
                                                  {`${slot?.startTime?.start} to ${slot?.startTime?.end}`}
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

                    <Grid items lg={0.1} style={myStyle}></Grid>
                    <Grid items lg={5.7}>
                      <Grid>
                        <Typography
                          style={{
                            justifyContent: "center",
                            display: "flex",
                            color: "#364969",
                            fontWeight: "400",
                          }}
                        >
                          Afternoon
                        </Typography>
                      </Grid>
                      <Grid container spacing={2} mt={1}>
                        {doctorSlot &&
                          doctorSlot
                            .filter(
                              (v) =>
                                v?.startTime?.start >= "12:00" &&
                                v?.startTime?.start !== "13:00" &&
                                v?.startTime?.start !== "13:30"
                            )
                            .map((slot, i) => (
                              <>
                                <Grid key={i} item xs={4} sm={4} md={4} lg={6}>
                                  {slot.book === true ? (
                                    <>
                                      <div>
                                        <SlotRoot>
                                          <Card
                                            key={slot?._id}
                                            style={{
                                              // opacity: "0.5",
                                              padding: "2px",
                                              color: "#ffffff",
                                              cursor: "pointer",
                                            }}
                                            onClick={(e) => cardAction(slot?.startTime?.start)}
                                          >
                                            <Box>
                                              <Card className="slot-error">
                                                <Typography
                                                  style={{
                                                    justifyContent: "center",
                                                    display: "flex",
                                                  }}
                                                  variant="h5"
                                                >
                                                  {`${slot?.startTime?.start} to ${slot?.startTime?.end}`}
                                                </Typography>
                                              </Card>
                                            </Box>
                                          </Card>
                                        </SlotRoot>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div>
                                        <SlotRoot>
                                          <Card
                                            key={slot?._id}
                                            style={{
                                              padding: "2px",
                                              color: "#ffffff",
                                              // cursor: "pointer",
                                            }}
                                          >
                                            <Box>
                                              <Card className="slot-success">
                                                <Typography
                                                  style={{
                                                    justifyContent: "center",
                                                    display: "flex",
                                                  }}
                                                  variant="h5"
                                                >
                                                  {`${slot?.startTime?.start} to ${slot?.startTime?.end}`}
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
                    </Grid>
                  </Grid>
                </>
              )}
            </>
          )}
        </Grid>
      </Card>
      <>
        {
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  style={{
                    textAlign: "center",
                  }}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Patient Detail
                </Typography>
                <>
                  <br />
                  <table className="table">
                    <tr>
                      <th>
                        <label style={{ color: "#344767" }}> Name:</label>
                      </th>
                      <td>{doctorBookedAppointmentDetail[0]?.name}</td>
                    </tr>
                    <tr>
                      <th>
                        <label style={{ color: "#344767" }}> Email:</label>{" "}
                      </th>
                      <td>{doctorBookedAppointmentDetail[0]?.email}</td>
                    </tr>
                    <tr>
                      <th>
                        <label style={{ color: "#344767" }}> Address:</label>{" "}
                      </th>
                      <td>{doctorBookedAppointmentDetail[0]?.address}</td>
                    </tr>
                    <tr>
                      <th>
                        {" "}
                        <label style={{ color: "#344767" }}> Date:</label>
                      </th>
                      <td>{doctorBookedAppointmentDetail[0]?.Date}</td>
                    </tr>
                    <tr>
                      <th>
                        <label style={{ color: "#344767" }}> Time:</label>{" "}
                      </th>
                      <td>{doctorBookedAppointmentDetail[0]?.startTime}</td>
                    </tr>
                  </table>

                  <Grid item xs={12} lg={6}>
                    <SoftBox display="flex" justifyContent="center">
                      <SoftButton
                        type="submit"
                        variant="gradient"
                        color="dark"
                        onClick={handleClose}
                      >
                        Close
                      </SoftButton>
                    </SoftBox>
                  </Grid>
                </>
              </Box>
            </Modal>
          </div>
        }
      </>
    </>
  );
};

export default DoctorAppointment;
