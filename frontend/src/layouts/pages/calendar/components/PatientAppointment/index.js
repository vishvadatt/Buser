import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftSnackbar from "components/SoftSnackbar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Paper, Card, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  doctoSlotData,
  doctoSlotDetail,
  patientBookAppointment,
  clearMessage,
  patientPurchaseServiceList,
  doctorBookedAppointment,
} from "store/actions/actions";
import { useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import { useTheme } from "@mui/material/styles";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SlotRoot from "../SlotRoot";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #364969",
  boxShadow: 24,
  p: 4,
};

const validationSchema = Yup.object({
  // name: Yup.string().required("Required!"),
  serviceId: Yup.string().required("Required!"),
  //email: Yup.string().email("Please enter a valid email address.").required("Required!"),
  painDetails: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
});

function PatientAppointment() {
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const successMessage = useSelector((state) => state?.auth?.successMessage);
  const errorMessage = useSelector((state) => state?.auth?.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const userID = useSelector((state) => state?.auth?.auth);
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [noProgress, setProgress] = useState(true);
  const userType = useSelector((state) => state?.auth?.auth?.userType);

  useEffect(() => {
    dispatch(patientPurchaseServiceList({ patientId: userID?._id }));
    dispatch(doctoSlotData({ doctorId: location?.state?.doctorid, Date: location?.state?.date }));
    setTimeout(() => setProgress(false), 2000);
  }, []);

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const handleClose = () => setOpen(false);
  const doctorSlot = useSelector((state) =>
    state?.auth?.doctorSlotList !== undefined ? state.auth.doctorSlotList : []
  );
  const myPurchaseServiceList = useSelector((state) =>
    state.auth.myPurchaseServiceList !== undefined ? state.auth.myPurchaseServiceList : []
  );
  console.log("newPurchaseServiceListType..", myPurchaseServiceList[0].service.length);

  // const newPurchaseServiceType = []
  if (myPurchaseServiceList[0].service.length === 1) {
    let newPurchaseServiceList = myPurchaseServiceList.map((a) => ({
      planId: a.planId,
      planName: a.planName,
      serviceName: a.service[0].serviceName,
    }));
    var newPurchaseServiceType = newPurchaseServiceList.map((a) => ({
      value: a.planId,
      label: a.planName + "-" + a.serviceName,
    }));
  }
  const doctorBookedAppointmentList = useSelector((state) =>
    state.auth.doctorBookedAppointmentList !== undefined
      ? state.auth.doctorBookedAppointmentList
      : []
  );

  //console.log("Doctor Appointment List---", doctorSlot);
  const slotDetail = useSelector((state) =>
    state.auth.doctorSlotDetail !== undefined ? state.auth.doctorSlotDetail : []
  );
  var myStyle = {
    borderLeft: "1px solid #222",
    marginLeft: "22px",
    marginRight: "13px",
  };

  const cardAction = async (id) => {
    dispatch(doctoSlotDetail({ slotId: id }));
    setTimeout(() => setOpen(true), 2000);
  };
  return (
    <>
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
            {location.state.date}
          </Typography>
          {noProgress == true ? (
            <>
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                <CircularProgress style={{ color: "#364969" }} size={50} />
              </Box>
            </>
          ) : (
            <>
              {console.log("slot length---", doctorSlot.length)}
              {doctorSlot.length === 0 ? (
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
                        {doctorSlot &&
                          doctorSlot
                            .filter((d) => d.startTime.start < "12:00")
                            .map((slot, i) => (
                              <>
                                <Grid key={i} item xs={4} sm={4} md={4} lg={6}>
                                  {slot.book === true ? (
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
                                              <Card className="slot-error">
                                                <Typography
                                                  style={{
                                                    justifyContent: "center",
                                                    display: "flex",
                                                  }}
                                                  variant="h5"
                                                >
                                                  {`${slot.startTime.start} to ${slot.startTime.end}`}
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
                                            onClick={(e) => cardAction(slot._id)}
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
                                                  {`${slot.startTime.start} to ${slot.startTime.end}`}
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
                                v.startTime.start >= "12:00" &&
                                v.startTime.start !== "13:00" &&
                                v.startTime.start !== "13:30"
                            )
                            .map((slot, i) => (
                              <>
                                <Grid key={i} item xs={4} sm={4} md={4} lg={6}>
                                  {slot.book === true ? (
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
                                                  variant="h5"
                                                >
                                                  {`${slot.startTime.start} to ${slot.startTime.end}`}
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
                                            onClick={(e) => cardAction(slot._id)}
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
                                                  {`${slot.startTime.start} to ${slot.startTime.end}`}
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
                  Book Appointment
                </Typography>
                <>
                  {console.log("Slot Time", slotDetail[0]?.startTime?.start)}
                  <Formik
                    initialValues={{
                      name: userID.name,
                      serviceId: "",
                      email: userID.email,
                      doctorId: location.state.doctorid,
                      address: "",
                      painDetails: "",
                      bookedBy: userID._id,
                      Date: location.state.date,
                      startTime: slotDetail[0]?.startTime?.start,
                      endTime: slotDetail[0]?.startTime?.end,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, onSubmitProps) => {
                      console.log(values, "val");
                      setTimeout(() => handleClose(), 500);
                      dispatch(
                        patientBookAppointment({
                          values,
                          token,
                        })
                      );
                      // onSubmitProps.resetForm();
                      setTimeout(
                        () =>
                          dispatch(
                            doctoSlotData({
                              doctorId: location.state.doctorid,
                              Date: location.state.date,
                            })
                          ),
                        500
                      );
                    }}
                  >
                    {(formik) => {
                      {
                        console.log("PurchaseServiceList", myPurchaseServiceList);
                      }
                      return (
                        // <Grid container spacing={2} >
                        <Grid>
                          <br />
                          <select
                            //id="1"
                            placeholder="Please Select Service"
                            name="serviceId"
                            className="form-control"
                            value={formik.values.serviceId}
                            onChange={formik.handleChange}
                          >
                            {myPurchaseServiceList[0].service.length > 0 ? (
                              <option disabled={true} value="">
                                Please Select Service
                              </option>
                            ) : (
                              ""
                            )}
                            {myPurchaseServiceList[0].service.length === 0 ? (
                              <option>No Service Available Please Purchase Service</option>
                            ) : (
                              newPurchaseServiceType.map((option, index) => {
                                return (
                                  <option value={option.value} key={index}>
                                    {option.label}
                                  </option>
                                );
                              })
                            )}
                          </select>
                          <br />
                          <input
                            style={{ height: "50px" }}
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            value={userID.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.name && formik.errors.name && (
                            <div style={{ color: "red" }}>{formik.errors.name}</div>
                          )}
                          <br />
                          <input
                            style={{ height: "50px" }}
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email Address"
                            value={userID.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.email && formik.errors.email && (
                            <div style={{ color: "red" }}>{formik.errors.email}</div>
                          )}
                          <br />
                          <input
                            style={{ height: "50px" }}
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.address && formik.errors.address && (
                            <div style={{ color: "red" }}>{formik.errors.address}</div>
                          )}
                          <br />
                          <textarea
                            style={{ height: "100px" }}
                            type="text"
                            name="painDetails"
                            className="form-control"
                            placeholder="Pain Description"
                            value={formik.values.painDetails}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.painDetails && formik.errors.painDetails && (
                            <div style={{ color: "red" }}>{formik.errors.painDetails}</div>
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
                                Book
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
      </>
    </>
  );
}

export default PatientAppointment;
