import React, { useEffect } from "react";
import SoftButton from "components/SoftButton";
import { Box, Grid, Paper, Card, Typography, Modal } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SoftBox from "components/SoftBox";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import SoftSnackbar from "components/SoftSnackbar";
import "./styles.css";
import { patientPurchaseServiceList } from "store/actions/actions";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  serviceId: Yup.string().required("Required!"),
  email: Yup.string().email("Please enter a valid email address.").required("Required!"),
  painDetails: Yup.string().required("Required!"),
  address: Yup.string().required("Required!"),
});
const UpdateAppointment = (props) => {
    const dispatch = useDispatch();
  const { appointmentDetails, showModel, setShowModel } = props;
  const userdata = useSelector((state) => state.auth.auth);
  const myPurchaseServiceList = useSelector((state) =>
    state.auth.myPurchaseServiceList !== undefined ? state.auth.myPurchaseServiceList : []
  );

  let newPurchaseServiceList;
  var newPurchaseServiceType;

  useEffect(()=>{
    dispatch(patientPurchaseServiceList({ patientId: userdata._id }));

  });
  
  useEffect(() => {
    if (myPurchaseServiceList[0].service.length === 1) {
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

  console.log('services list', myPurchaseServiceList)

  return (
    <div>
      <Modal
        open={showModel}
        onClose={() => setShowModel(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="update-appointment-modal"
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
            Create Event
          </Typography>
          <>
            <Formik
              initialValues={{
                // name: appointmentDetails.name,
                // serviceId: appointmentDetails.services[0]._id,
                // email:
                //   userdata.userType === "client"
                //     ? appointmentDetails.patient[0].email
                //     : appointmentDetails.doctor[0].email,
                // doctorId: appointmentDetails.doctor[0]._id,
                // address: appointmentDetails.address,
                // painDetails: appointmentDetails.painDetails,
                // bookedBy: userdata._id,
                // Date: appointmentDetails.Date,
                // startTime: appointmentDetails.startTime,
                // endTime: appointmentDetails.endTime,
                name: appointmentDetails.patient[0].patientName,
                serviceId: appointmentDetails.services[0]._id,
                email:appointmentDetails.patient[0].email,
                doctorId: appointmentDetails.doctor[0]._id,
                address: appointmentDetails.address,
                painDetails: appointmentDetails.painDetails,
                bookedBy: userdata._id,
                Date: appointmentDetails.Date,
                startTime: appointmentDetails.startTime,
                endTime: appointmentDetails.endTime,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, onSubmitProps) => {
                console.log(values, "val dddddd");
                setTimeout(() => handleClose(), 500);
                //   dispatch(createEventAction({
                //     values,
                //   }));
                setTimeout(() => eventData(), 3000);
                // onSubmitProps.resetForm();
                // setTimeout(() => dispatch(doctoSlotData({ doctorId: location.state.doctorid, Date: location.state.date })), 500);
              }}
            >
              {(formik) => {
                return (
                  // <Grid container spacing={2} >
                  <Grid>
                    <select
                      //id="1"
                      placeholder="Please Select Service"
                      name="serviceId"
                      className="form-control"
                      value={formik.values.serviceId}
                      onChange={formik.handleChange}
                      style={{marginBottom:'15px'}}
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
                    
                    <input
                      style={{ height: "50px", marginBottom:'15px'}}
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div style={{ color: "red" }}>{formik.errors.name}</div>
                    )}
                    
                    <input
                      style={{ height: "50px" , marginBottom:'15px'}}
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={
                        userdata.userType === "client"
                          ? appointmentDetails.patient[0].email
                          : appointmentDetails.doctor[0].email
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div style={{ color: "red" }}>{formik.errors.email}</div>
                    )}
                    
                    <input
                      style={{ height: "50px", marginBottom:'15px' }}
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
                    
                    <input
                      style={{ height: "50px", marginBottom:'15px' }}
                      type="time"
                      placeholder="12:00am"
                      name="startTime"
                      className="form-control"
                      // placeholder="Start Time"
                      value={formik.values.startTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.start && formik.errors.start && (
                      <div style={{ color: "red" }}>{formik.errors.start}</div>
                    )}
                    
                    <input
                      style={{ height: "50px", marginBottom:'15px'}}
                      type="time"
                      name="endTime"
                      className="form-control"
                      data-placeholder="End Time"
                      value={formik.values.endTime}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.end && formik.errors.end && (
                      <div style={{ color: "red" }}>{formik.errors.end}</div>
                    )}
                    
                    <textarea
                      style={{ height: "80px", marginBottom:'15px' }}
                      type="text"
                      name="painDetails"
                      className="form-control"
                      placeholder="Description"
                      value={formik.values.painDetails}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.painDetails && formik.errors.painDetails && (
                      <div style={{ color: "red" }}>{formik.errors.painDetails}</div>
                    )}
                    
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
        //   color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        //   content={errorMessage || successMessage}
        //   open={errorMessage !== "" || successMessage !== "" ? true : false}
        //   onClose={closeErrorSB}
        //   close={closeErrorSB}
        //   bgWhite
      />
    </div>
  );
};

UpdateAppointment.propTypes = {
  appointmentDetails: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  showModel: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  setShowModel: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UpdateAppointment;
