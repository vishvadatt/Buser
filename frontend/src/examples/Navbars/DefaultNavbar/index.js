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

import { useState, useEffect } from "react";

// react-router components
import { Link, useLocation } from "react-router-dom";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

// DefaultNavbar dropdown menus
import PagesMenu from "examples/Navbars/DefaultNavbar/Menus/PagesMenu";
import AuthenticationMenu from "examples/Navbars/DefaultNavbar/Menus/AuthenticationMenu";
import EcommerceMenu from "examples/Navbars/DefaultNavbar/Menus/EcommerceMenu";
import ApplicationsMenu from "examples/Navbars/DefaultNavbar/Menus/ApplicationsMenu";
import DocsMenu from "examples/Navbars/DefaultNavbar/Menus/DocsMenu";
import brand from "assets/images/Logo-01.jpeg";
import brand1 from "assets/images/Logo-01-rm.png";
import { useSelector } from "react-redux";
import { isAuthenticated } from "store/selectors/selector";

import "./style.css";
function DefaultNavbar({ routes, transparent, light, action }) {
  const { pathname } = useLocation();
  const authenticated = useSelector(isAuthenticated);
  return (
    <Container>
      <SoftBox
        className="default-nav-bar-container"
        // py={1}
        px={{ xs: 0, sm: 0, lg: transparent ? 0 : 5 }}
        // my={2}
        // mx={3}
        width="calc(100% - 48px)"
        height="auto"
        borderRadius="section"
        // shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        // alignItems="center"
        // position="absolute"
        // left={0}
        zIndex={3}
        // sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
        //   backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
        //   backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        // })}
      >
        <SoftBox className="brand default-nav-bar-brand-container">
          {brand && (
            <SoftBox
              component="img"
              src={authenticated ? brand1 : brand}
              alt="buser institute Logo"
              width={{ xs: "6rem", lg: "10rem", sm: "7rem" }}
              borderRadius="12px"
              position={pathname !== "/doctor-soap-form" ? "absolute" : "initial"}
              // pb={10}
              // pt={1}
              pt={{ xs: "5px", lg: 0 }}
              className="default-nav-bar-img-container"
            />
          )}
        </SoftBox>
        {/* <SoftBox className="logo" display={{ xs: "none", lg: "inline-block" }}>
          <SoftTypography variant="h4" fontWeight="bold" color={light ? "white" : "dark"}>
            Buser Institute
          </SoftTypography>
        </SoftBox> */}
        <SoftBox
          display={{ xs: "none", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          // onClick={openMobileNavbar}
          className="logo"
        >
          <SoftTypography
            className="logo1"
            variant="h6"
            fontWeight="bold"
            color={light ? "white" : "dark"}
          >
            Buser Institute
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
