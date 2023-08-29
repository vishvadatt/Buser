import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
// import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved9 from "assets/images/curved-images/signin.png";

import { useDispatch } from "react-redux";
import { loginAction } from "store/actions/actions";
import { useSelector } from "react-redux";
import { successToaster } from "components/toastify/index";
import { SuccessSoft } from "components/Toaster/toast";
import { ErrorSoft } from "components/Toaster/toast";
import SoftSnackbar from "components/SoftSnackbar";
import { clearMessage } from "store/actions/actions";
import { requestPermission } from "../../../firebase/firebase";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  // const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth.idToken);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [signin, setSignin] = useState({
    email: "",
    password: "",
  });

  const [isTokenFound, setTokenFound] = useState(false);
  const [token, setToken] = useState("");
  const { username, email, password } = signin;
  const onInputChange = (e) => {
    setSignin({ ...signin, [e.target.name]: e.target.value });
  };
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  useEffect(() => {
    requestPermission(setTokenFound, setToken);
  }, []);

  // console.log(token);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter") {
        event.preventDefault();
        dispatch(loginAction(signin));
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [signin]);

  return (
    <BasicLayout
      title="Welcome To The Buser Institute"
      description=" Please Log in below!"
      image={curved9}
    >
      <Card style={{ marginTop: "-40px" }}>
        <SoftBox p={2} textAlign="center">
          <SoftTypography variant="h5" fontWeight="medium">
            Sign in
          </SoftTypography>
        </SoftBox>
        {/* <SoftBox mb={2}>
          <Socials />
        </SoftBox> */}
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
            <SoftBox mb={2}>
              <SoftInput
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </SoftBox>
            <SoftBox display="flex" alignItems="center">
              <SoftTypography
                variant="button"
                fontWeight="regular"
                sx={{ cursor: "pointer", userSelect: "none" }}
                component={Link}
                to="/authentication/forgot-password"
              >
                &nbsp;&nbsp;Forgot Password?
              </SoftTypography>
            </SoftBox>

            {/* <SoftBox display="flex" alignItems="center">
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <SoftTypography
                variant="button"
                fontWeight="regular"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                &nbsp;&nbsp;Remember me
              </SoftTypography>
            </SoftBox> */}
            <SoftBox mt={4} mb={1}>
              <SoftButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={() => {
                  console.log(token, "token11");
                  dispatch(loginAction({ ...signin, deviceToken: token }));
                }}
              >
                sign in
              </SoftButton>
            </SoftBox>
            <Separator />
            <SoftBox mt={1} mb={3}>
              <SoftButton
                component={Link}
                to="/authentication/sign-up"
                variant="gradient"
                color="dark"
                fullWidth
              >
                sign up
              </SoftButton>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>

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
    </BasicLayout>
  );
}

export default Basic;
