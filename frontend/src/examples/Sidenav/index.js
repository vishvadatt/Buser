import { useEffect, useState } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./styles/style.css";

// Soft UI Dashboard PRO React example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavList from "examples/Sidenav/SidenavList";
import SidenavItem from "examples/Sidenav/SidenavItem";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Soft UI Dashboard PRO React context
import { useSoftUIController, setMiniSidenav } from "context";
import _ from "lodash";
import { useSelector } from "react-redux";
import moment from "moment";


function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const userDetails = useSelector((state) => state.auth.auth.userdata);

  const accessRoutes = routes.filter((route) => {
    if (userDetails?.userType === "client" && route.isClient) {
      return route;
    } else if (userDetails?.userType === "doctor" && route.isDoctor) {
      return route;
    }
  });

  const [openCollapse, setOpenCollapse] = useState(false);
  const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, transparentSidenav } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const itemName = pathname.split("/").slice(1)[1];

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the nested collapse items from the routes.js
  const renderNestedCollapse = (collapse) => {
    const template = collapse.map(({ name, route, key, href, id }) =>
      href ? (
        <Link
          key={key}
          href={href}
          target="_blank"
          id={id}
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavItem name={name} nested />
        </Link>
      ) : (
        <NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
          <SidenavItem name={name} active={route === pathname} nested />
        </NavLink>
      )
    );

    return template;
  };

  // Render the all the collpases from the routes.js
  const renderCollapse = (collapses) =>
    collapses.map(({ name, collapse, route, href, key, id }) => {
      let returnValue;

      if (collapse) {
        returnValue = (
          <SidenavItem
            key={key}
            id={id}
            name={name}
            active={key === itemName}
            open={openNestedCollapse === name}
            onClick={() =>
              openNestedCollapse === name
                ? setOpenNestedCollapse(false)
                : setOpenNestedCollapse(name)
            }
          >
            {renderNestedCollapse(collapse)}
          </SidenavItem>
        );
      } else {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            id={id}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavItem
             name={name}
              active={key === itemName} />
          </Link>
        ) : (
          <NavLink to={route} key={key} sx={{ textDecoration: "none" }}>
            <SidenavItem name={name} active={key === itemName} />
          </NavLink>
        );
      }
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const currentDate = moment().format("YYYY-MM-DDThh:mm:ss");
  // client service
  let routeArray =
    userDetails?.userType === "doctor" ||
    (userDetails?.live_In_Person_and_Travel_Exercise_Therapy_Balance > 0 &&
      userDetails?.live_In_Person_and_Travel_Exercise_Therapy_Balance)
      ? []
      : ["/calendar", "/bookappointments", "/upcomingappointments"];
  let routeArray1 =
    userDetails?.userType === "doctor" ||
    (userDetails?.Video_Messaging_and_Photo_Therapy_Balance > 0 &&
      userDetails?.Video_Messaging_and_Photo_Therapy_Balance)
      ? []
      : ["/videomessagingtherapy"];
  let routeArray2 =
    userDetails?.userType === "doctor" ||
    (userDetails?.live_Video_Online_Exercise_Therapy_Balance > 0 &&
      userDetails?.live_Video_Online_Exercise_Therapy_Balance)
      ? []
      : ["/livevideoprotal"];

  // doctor service
  let routeArray3 =
    userDetails?.userType === "client" ||
    (userDetails?.exercise_Sequence_Generator_Software_Program_Plug_In_Exp_Date > currentDate &&
      userDetails?.exercise_Sequence_Generator_Software_Program_Plug_In_Exp_Date)
      ? []
      : ["/sequences"];
  let temp = [...routeArray, ...routeArray1, ...routeArray2, ...routeArray3];
  const newArr = _.uniq(temp);
  const renderRoutes = accessRoutes.map(
    ({ type, name, icon, title, collapse, noCollapse, key, href, route, id }) => {
      let returnValue;

      if (type === "collapse") {
        if (href) {
          returnValue = (
            <Link
              href={href}
              key={key}
              id={id}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <SidenavCollapse
                name={name}
                icon={icon}
                id={id}
                active={key === collapseName}
                noCollapse={noCollapse}
              />
            </Link>
          );
        } else if (noCollapse && route) {
          // console.log("d...",routeArray.filter((d) => d === route).length > 0 ? "" : route);
          returnValue = (
            <NavLink to={route} key={key}>
              <SidenavCollapse
                name={name}
                icon={icon}
                id={id}
                noCollapse={noCollapse}
                active={key === collapseName}
                // isValid={newArr.filter((d) => d === route).length > 0 ? true : false}
              ></SidenavCollapse>
              {collapse ? renderCollapse(collapse) : null}
            </NavLink>
          );
        } else {
          returnValue = (
            <SidenavCollapse
              key={key}
              name={name}
              icon={icon}
              id={id}
              active={key === collapseName}
              // open={openCollapse === key}
              // onClick={() => (openCollapse === key ? setOpenCollapse(false) : setOpenCollapse(key))}
            >
              {collapse ? renderCollapse(collapse) : null}
            </SidenavCollapse>
          );
        }
      } else if (type === "title") {
        returnValue = (
          <SoftTypography
            key={key}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            opacity={0.6}
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </SoftTypography>
        );
      } else if (type === "divider") {
        returnValue = <Divider key={key} />;
      }

      return returnValue;
    }
  );

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ transparentSidenav, miniSidenav }}>
      <SoftBox pt={3} pb={1} px={4} textAlign="center">
        <SoftBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <SoftTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </SoftTypography>
        </SoftBox>
        <SoftBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <SoftBox component="img" src={brand} alt="buser institute Logo" width="3rem" />}
          <SoftBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <SoftTypography component="h6" variant="button" fontWeight="medium">
              {brandName}
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      </SoftBox>
      <Divider />
      <List>{renderRoutes}</List>

      {/* <SoftBox pt={2} my={2} mx={2}>
        <SidenavCard />
      </SoftBox> */}
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
