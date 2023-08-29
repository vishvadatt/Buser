import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
// import Image from "../contactusimageBuser.jpg";
import Image from "../../../../assets/images/contactUs/contactusimageBuser.jpg";
// Soft UI Dashboard PRO React example components

import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

import SoftSnackbar from "components/SoftSnackbar";
import { clearMessage } from "store/actions/actions";

import { Box, Grid, Paper } from "@mui/material";
import Item from "antd/lib/list/Item";
import { styled } from "@mui/material/styles";
import FormField from "layouts/pages/Profile/components/FormField";
import { Formik } from "formik";
import * as Yup from "yup";
import { userId } from "store/selectors/selector";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const validationSchema = Yup.object({
  firstName: Yup.string().required("Required!"),
  lastName: Yup.string().required("Required!"),
  email: Yup.string().email("Please enter a valid email address.").required("Required!"),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Please enter a valid phone number.').required("Required!"),
  // phoneNumber: Yup.number("Please enter a valid phone number.").required("Required!"),
  description: Yup.string().required("Required!"),
});
const ContactUsForm = () => {
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const userID = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const [errorSB, setErrorSB] = useState(successMessage ? false : true);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  console.log(userID, "id")
  return (<>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        description: "",
        userId: userID
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, onSubmitProps) => {
        console.log(values, "val")
        await dispatch({ type: "POST_INQUIRY", payload: { value: values, token: token }})
        onSubmitProps.resetForm();
      }}
    >
      {(formik) => {

        return (
          <Box sx={{ width: "100%" }} p={3}>
            <Grid container spacing={2} direction={"row"}>
              <Grid container spacing={5} lg={6}>
                <Grid item xs={12} lg={12}>
                  <SoftBox pt={5} pb={2} lg={12}>
                    <h3 style={{ textAlign: "left", color: "#41ced3" }}>Get in Touch</h3>
                    <h2 style={{ textAlign: "left", color: "inherit" }}>
                      <b>Write a Message</b>
                    </h2>
                    <br />
                    <h5 style={{ textAlign: "left", color: "inherit" }}>Write a message to the Buser Institute.</h5>
                  </SoftBox>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <input
                    style={{ height: "50px" }}
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName && <div style={{ color: "red" }}>{formik.errors.firstName}</div>}
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <input
                    style={{ height: "50px" }}
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName && <div style={{ color: "red" }}>{formik.errors.lastName}</div>}
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <input
                    style={{ height: "50px" }}
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && <div style={{ color: "red" }}>{formik.errors.email}</div>}
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <input
                    style={{ height: "50px" }}
                    type="text"
                    name="phoneNumber"
                    id=""
                    className="form-control"
                    placeholder="Phone Number"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>}
                </Grid>
                <Grid item md={12} xs={12}>
                  <textarea
                    style={{ height: "250px" }}
                    name="description"
                    className="form-control"
                    placeholder="How can we help you?"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.description && formik.errors.description && <div style={{ color: "red" }}>{formik.errors.description}</div>}
                </Grid>
                <Grid item>
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      width: "130px",
                      height: "50px",
                      backgroundColor: "#273044",
                      color: "white",
                    }}
                    onClick={formik.handleSubmit}
                  >
                    Submit
                  </button>
                </Grid>
              </Grid>

              <Grid container direction={"row"} lg={6} mx={"auto"} py={3}>
                <Grid item lg={12} sm={12}>
                  <Box sx={{ height: "100%", backgroundColor: "#273044" }} px={7} py={30}>
                    <Grid item lg={12} sm={12}>
                      {" "}
                      <img
                        className="image"
                        src={Image}
                        alt="contact us"
                        style={{
                          width: "100%",
                          maxHeight: "300px",
                          maxWidth: "550px",
                          height: "auto",
                        }}
                      ></img>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        );
      }}

    </Formik>
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
    {/* <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={successMessage}
        open={successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      /> */}
  </>

  );
};

export default ContactUsForm;
