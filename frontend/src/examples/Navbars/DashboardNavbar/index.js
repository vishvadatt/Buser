/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import * as React from "react";
import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

// Soft UI Dashboard PRO React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";
import "./style.css";
// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarDesktopMenu,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// Soft UI Dashboard PRO React context
import {
  useSoftUIController,
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context";

// Images
import team2 from "assets/images/team-2.jpg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import { useDispatch } from "react-redux";
import { logout, turnOffPreviewOfPatientSoapForm } from "store/actions/actions";
import { MenuItem, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { successToast } from "components/Toaster/toast";
import SoftButton from "components/SoftButton";
import JoyRide from "react-joyride";
import { steps } from "../../../common/IntroDescription/IntroDesc";
import { db } from "../../../firebase/firebase";
import { doc, getDoc, onSnapshot, where } from "firebase/firestore";
import { axiosInstance } from "services/AxiosInstance";
import { requestPermission } from "../../../firebase/firebase";
import { turnOffPreviewOfPatientIntakeForm } from "store/actions/actions";

function DashboardNavbar({ absolute, light, isMini }) {
  const mediaQuery = useMediaQuery("(max-width:550px)");
  const sideNavHandle = useMediaQuery("(max-width:1200px)");

  const [run, setRun] = useState(false);
  const tour = () => {
    setRun(true);
    handleClose();
  };
  const tourstart = (data) => {
    if (data.action == "skip") {
      setRun(false);
    }
  };
  const userType = useSelector((state) => state.auth.auth.userType);
  const token1 = useSelector((state) => state?.auth?.auth?.idToken);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentNavbar, fixedNavbar, openConfigurator } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);
  const [unreadCount, setUnreadCount] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const UserProfilePIC = useSelector((state) => state?.auth?.auth?.userdata?.UserProfilePIC);
  const username = useSelector((state) => state?.auth?.auth?.userdata?.firstName);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);
  useEffect(() => {
    getUnreadMessages();
  }, [unreadCount]);

  const getUnreadMessages = async () => {
    try {
      let data;
      const unSub = onSnapshot(doc(db, "userAdminChats", `64781fcf297c8b644f232891`), (doc) => {
        if (doc.exists()) {
          data = doc.data()[`64781fcf297c8b644f232891${loginUser._id}`];
          if (data && data?.senderId !== loginUser._id) {
            setUnreadCount(data.unreadCount ? data.unreadCount : null);
          }
        }
      });
      return () => {
        unSub();
      };
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const usedispatch = useDispatch();

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem
        image={<img src={team2} alt="person" />}
        title={["New message", "from Laur"]}
        date="13 minutes ago"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        image={<img src={logoSpotify} alt="person" />}
        title={["New album", "by Travis Scott"]}
        date="1 day"
        onClick={handleCloseMenu}
      />
      <NotificationItem
        color="secondary"
        image={
          <Icon fontSize="small" sx={{ color: ({ palette: { white } }) => white.main }}>
            payment
          </Icon>
        }
        title={["", "Payment successfully completed"]}
        date="2 days"
        onClick={handleCloseMenu}
      />
    </Menu>
  );

  const [isTokenFound, setTokenFound] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    requestPermission(setTokenFound, setToken);
  }, []);

  const handleLogout = async () => {
    try {
      usedispatch(logout());
      console.log("ss");
      const tokenData = {
        deviceToken: token,
      };
      const res = await axiosInstance.post("auth/userLogOut", tokenData, {
        headers: {
          authorization: token1,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) => navbar(theme, { transparentNavbar, absolute, light })}
      className="headerClass"
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SoftBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
          <Breadcrumbs icon="home" title={route[route.length - 1]} route={route} light={light} />
          <Icon fontSize="medium" sx={navbarDesktopMenu} onClick={handleMiniSidenav}>
            {miniSidenav ? "menu_open" : "menu"}
          </Icon>
        </SoftBox>
        <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
          {/* <SoftBox pr={1}>
              <SoftInput
                placeholder="Type here..."
                icon={{ component: "search", direction: "left" }}
              />
            </SoftBox> */}
          <SoftBox color={light ? "white" : "inherit"} className="navbar-menus">
            <SoftButton
              style={{ marginRight: "20px" }}
              component={Link}
              to="/client-intake-form"
              id="client-intake-form"
              className="doctor-soap-btn navbar-btn"
              onClick={() => {
                usedispatch(turnOffPreviewOfPatientIntakeForm());
              }}
            >
              Client Intake Form
            </SoftButton>

            {userType === "doctor" ? (
              <SoftButton
                style={{ marginRight: "20px" }}
                component={Link}
                to="/doctor-soap-form"
                id="doctor-soap-form"
                className="doctor-soap-btn navbar-btn"
                onClick={() => {
                  usedispatch(turnOffPreviewOfPatientSoapForm());
                }}
              >
                Practitioner-Soap Form
              </SoftButton>
            ) : (
              ""
            )}

            <SoftButton
              style={{ marginRight: "20px" }}
              component={Link}
              to="/messages"
              id="messages"
              className="doctor-soap-btn navbar-btn"
            >
              messages
              {unreadCount && <span className="unreadMessageBadge">{unreadCount}</span>}
            </SoftButton>

            <IconButton sx={navbarIconButton} size="small" id="profile">
              {UserProfilePIC ? (
                <SoftAvatar
                  src={UserProfilePIC}
                  alt="Profile Picture"
                  size="xs"
                  variant="rounded"
                  sx={{ cursor: "pointer" }}
                  onClick={handleClick}
                />
              ) : (
                <Icon
                  sx={({ palette: { dark, white } }) => ({
                    color: light ? white.main : dark.main,
                  })}
                  onClick={handleClick}
                >
                  account_circle
                </Icon>
              )}
              <SoftTypography
                variant="button"
                fontWeight="medium"
                color={light ? "white" : "dark"}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                {username}
              </SoftTypography>
              <Menu
                sx={{ outline: "none" }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem component={Link} to="/profile" onClick={handleClose}>
                  Profile
                </MenuItem>
                {loginUser.userType === "doctor" && (
                  <MenuItem component={Link} to="/calender-shedule" onClick={handleClose}>
                    Calender schedule
                  </MenuItem>
                )}
                <MenuItem component={Link} to="/settings" onClick={handleClose}>
                  Settings
                </MenuItem>
                <MenuItem onClick={tour}>Project Tour</MenuItem>
                {/* <div className="tourdiv">
                  <button onClick={tour} className="touricon">
                    <span className="iconmiddle" />
                    <span className="iconborder" />
                  </button>
                </div> */}

                <MenuItem component={"div"} onClick={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </IconButton>
            <IconButton
              size="small"
              color="inherit"
              sx={navbarMobileMenu}
              onClick={handleMiniSidenav}
            >
              <Icon className={light ? "text-white" : "text-dark"}>
                {miniSidenav ? "menu_open" : "menu"}
              </Icon>
            </IconButton>
            {/* <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon>settings</Icon>
              </IconButton> */}
            {/* <IconButton
              size="small"
              color="inherit"
              sx={navbarIconButton}
              aria-controls="notification-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleOpenMenu}
            >
              <Icon className={light ? "text-white" : "text-dark"}>notifications</Icon>
            </IconButton> */}
            {renderMenu()}
          </SoftBox>
        </SoftBox>
        {isMini ? null : <></>}
      </Toolbar>
      <JoyRide
        continuous={true}
        run={run}
        // callback={tourstart}
        hideCloseButton
        scrollToFirstStep
        showProgress
        showSkipButton
        showStepsProgress
        autoStart
        disableCloseOnEsc
        disableOverlayClose
        steps={steps}
        disableBeacon
        styles={{
          options: {
            beaconSize: 50,
            overlayColor: "rgba(0, 0, 0, 0.5)",
            primaryColor: "#3E506F",
            zIndex: "1200",
            width: mediaQuery ? "260px" : "350px",
            spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
            arrowColor: "#fff",
          },
        }}
        // stepIndex={3} // Assuming step 4 is at index 3
        callback={(data) => {
          if (sideNavHandle && data.index === 3) {
            handleMiniSidenav(); // Call handleMiniSidenav when mediaQuery is true on step 4
          }
          tourstart(data); // Continue with the default callback
        }}
      />
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
