import React, { useEffect } from "react";
import logo from "../resources/logo.png";
// import ActiveUsersList from "./components/ActiveUsersList/ActiveUsersList";
// import * as webRTCHandler from "../utils/webRTC/webRTCHandler";
// import * as webRTCGroupHandler from "../utils/webRTC/webRTCGroupCallHandler";
// import DirectCall from "./components/DirectCall/DirectCall";
import { connect } from "react-redux";
// import DashboardInformation from "./components/Dashboardinformation/Dashboardinformation";
// import { callStates } from "../store/actions/callActions";
// import GroupCallRoomsList from "./components/GroupCallRoomsList/GroupCallRoomsList";
// import GroupCall from "./components/GroupCall/GroupCall";
import "./Dashboard.css";
import PropTypes from "prop-types";

// video calling App Using WebRTC

const Dashboard = ({ username, callState }) => {
  console.log("usernamexyz", username);
  useEffect(() => {
    // webRTCHandler.getLocalStream();
    // webRTCGroupHandler.connectWithMyPeer();
  }, []);

  return (
    <div className="dashboard_container background_main_color">
      <div className="dashboard_left_section">
        <div
          className="dashboard_content_container"
          style={{ backgroundColor: "#f7f9fb", marginLeft: "40px" }}
        >
          <div style={{ marginTop: "150px" }}>
            <h1>Hello df welcome in VideoChat.</h1>
          </div>
          <div>
            <p>
              You can start a call calling directy to a person from the list or you can create or
              join group call.
            </p>
          </div>
        </div>
        <div
          className="dashboard_rooms_container background_secondary_color"
          style={{ backgroundColor: "#b4becf" }}
        >
          {/* <GroupCallRoomsList /> */}
        </div>
      </div>
      <div
        className="dashboard_right_section background_secondary_color"
        style={{ backgroundColor: "#b4becf" }}
      >
        <div className="dashboard_active_users_list">
          {/* <ActiveUsersList /> */}
          <div>User 1</div>
          <div>User 2</div>
          <div>User 3</div>
          <div>User 4</div>
        </div>
        <div className="dashboard_logo_container">
          <img className="dashboard_logo_image" src={logo} alt="logo" />
        </div>
      </div>
      {/* <footer> <small>&#9400; Copyright 2021, shubham khatal</small> </footer> */}
    </div>
  );
};

const mapStateToProps = ({ call, dashboard }) => ({
  ...call,
  ...dashboard,
});
Dashboard.propTypes = {
  username: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  callState: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default connect(mapStateToProps)(Dashboard);
