import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
import lock from "assets/images/illustrations/lock.png";
//APi
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { reset_passwordAction } from "store/actions/actions";

import SoftSnackbar from "components/SoftSnackbar";
import { useSelector } from "react-redux";
import { clearMessage } from "store/actions/actions";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Illustration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const useremail = useSelector((state) => state.auth.resetPasswordEmail);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const [passwordError, setPasswordError] = useState("");
  const [reset_password, setReset_password] = useState({
    email: useremail,
    otp: "",
    newPassword: "",
  });
  const { email, otp, newPassword } = reset_password;
  const onInputChange = (e) => {
    setReset_password({ ...reset_password, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (successMessage === "RESET password Successfully") {
      navigate("/authentication/sign-in");
    }
  }, [successMessage]);

  const validatePassword = () => {
    // Minimum 6 characters
    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return false;
    }
    // At least one special character
    const specialCharsRegex = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
    if (!specialCharsRegex.test(newPassword)) {
      setPasswordError("Password must contain at least one special character");
      return false;
    }
    // At least 1 numbers
    const numbersRegex = /\d/g;
    const numbersCount = (newPassword.match(numbersRegex) || []).length;
    if (numbersCount < 1) {
      setPasswordError("Password must contain at least 1 number (2 are recommended)");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleResetPAssword = () => {
    const isValidPassword = validatePassword();

    if (isValidPassword) {
      dispatch(reset_passwordAction(reset_password));
    }
  };

  return (
    <IllustrationLayout
      title="Reset Password"
      description="You will receive an e-mail in maximum 60 seconds"
      illustration={{
        image: lock,
        title: "Buser Institute",
      }}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftInput
            type="email"
            placeholder="Email"
            size="large"
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput
            type="text "
            placeholder="Verification Code"
            size="large"
            name="otp"
            value={otp}
            onChange={onInputChange}
          />
        </SoftBox>
        <SoftBox mb={2}>
          <SoftInput
            type="password"
            placeholder="New Password"
            size="large"
            name="newPassword"
            value={newPassword}
            onChange={onInputChange}
            error={passwordError !== ""}
            helperText={passwordError}
          />
          {passwordError && <span style={{ color: "red", fontSize: "12px" }}>{passwordError}</span>}
        </SoftBox>
        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="info"
            size="large"
            fullWidth
            // component={Link}
            // to="/authentication/sign-in"
            onClick={handleResetPAssword}
          >
            Reset
          </SoftButton>
        </SoftBox>
      </SoftBox>
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
    </IllustrationLayout>
  );
}

export default Illustration;
