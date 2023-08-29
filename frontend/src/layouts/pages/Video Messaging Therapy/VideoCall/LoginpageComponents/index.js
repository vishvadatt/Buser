import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Footer from "examples/Footer";
import SoftBox from "components/SoftBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";
import "./style.css";
import { BiVideo } from "react-icons/bi";
// import logo from "./resources/logo.png";
import UsernameInput from "./Usernameinput";
import SubmitButton from "./SubmitButton";
import { connect } from "react-redux";
// import { registerNewUser } from "../utils/wssConnection/wssConnection";
// import { setUsername } from "../store/actions/dashboardActions";

function index({ saveUsername }) {
  const [username, setUsername] = useState("");
  console.log("username", username);

  const navigate = useNavigate();

  const handleSubmitButtonPressed = () => {
    // registerNewUser(username);
    // saveUsername(username);
    navigate("/video-messaging-therapy/video-call/Dashboard");
  };
  return (
    <>
      <PageLayout>
        <Grid>
          <div className="login-page_container background_main_color">
            <div className="login-page_login_box background_secondary_color">
              <div className="login-page_logo_container">
                <BiVideo style={{ fontSize: "100px" }} />
              </div>
              <div className="login-page_title_container">
                <h2>VIDEO CHAT</h2>
              </div>
              <UsernameInput username={username} setUsername={setUsername} />
              <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
            </div>
          </div>
        </Grid>
        <Footer />
      </PageLayout>
    </>
  );
}
const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: (username) => dispatch(setUsername(username)),
  };
};

export default connect(null, mapActionsToProps)(index);
