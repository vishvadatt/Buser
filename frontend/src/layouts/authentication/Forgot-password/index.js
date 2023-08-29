// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication layout components
import Footer from "layouts/authentication/components/Footer";

// Soft UI Dashboard PRO React page layout routes
import pageRoutes from "page.routes";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { forgot_password_action } from "store/actions/actions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { clearMessage } from "store/actions/actions";
import SoftSnackbar from "components/SoftSnackbar";

function Basic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const [forgot_password, setForgot_password] = useState({
    email: "",
  });
  const { email } = forgot_password;
  const onInputChange = (e) => {
    setForgot_password({ ...forgot_password, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (successMessage !== "") {
      navigate("/authentication/reset-password");
    }
  }, [successMessage]);
  return (
    <PageLayout background="light">
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
          label: "buy now",
        }}
      />
      <Grid container spacing={3} justifyContent="center" sx={{ minHeight: "75vh" }}>
        <Grid item xs={10} md={6} lg={4}>
          <SoftBox mt={32} mb={3} px={{ xs: 0, lg: 2 }}>
            <Card style={{ marginTop: "-100px" }}>
              <SoftBox pt={3} px={3} pb={1} textAlign="center">
                <SoftTypography variant="h4" fontWeight="bold" textGradient>
                  Forgot Password
                </SoftTypography>
                <SoftTypography variant="body2" color="text">
                  You will receive an e-mail in maximum 60 seconds
                </SoftTypography>
              </SoftBox>
              <SoftBox p={3}>
                <SoftBox component="form" role="form">
                  <SoftBox mb={2}>
                    <SoftInput
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={onInputChange}
                    />
                  </SoftBox>
                  <SoftBox mt={3} textAlign="center">
                    <SoftTypography variant="button" color="text" fontWeight="regular">
                      Want to try Sign in Again ?&nbsp;
                      <SoftTypography
                        component={Link}
                        to="/authentication/sign-in"
                        variant="button"
                        color="dark"
                        fontWeight="bold"
                        textGradient
                      >
                        Sign in
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                  <SoftBox mt={5} mb={1}>
                    <SoftButton
                      variant="gradient"
                      color="dark"
                      size="large"
                      fullWidth
                      onClick={() => {
                        dispatch(forgot_password_action(forgot_password));
                      }}
                    >
                      send
                    </SoftButton>
                  </SoftBox>
                </SoftBox>
              </SoftBox>
            </Card>
          </SoftBox>
        </Grid>
      </Grid>
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
      <Footer />
    </PageLayout>
  );
}

export default Basic;
