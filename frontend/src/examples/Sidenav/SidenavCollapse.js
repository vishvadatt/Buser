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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Custom styles for the SidenavCollapse
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
  collapseArrow,
} from "examples/Sidenav/styles/sidenavCollapse";

// Soft UI Dashboard PRO React context
import { useSoftUIController } from "context";
import Badge from "@mui/material/Badge";
import { Typography } from "@mui/material";
// import { fetchCount1 } from "./BadgeCount";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { axiosInstance } from "services/AxiosInstance";
import { useDispatch } from "react-redux";
import { getPTCount } from "store/actions/actions";

function SidenavCollapse({ icon, name, children, active, noCollapse, open, isValid, ...rest }) {
  const [controller] = useSoftUIController();
  const dispatch = useDispatch();
  const { miniSidenav, transparentSidenav, sidenavColor } = controller;
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const UserId = useSelector((state) => state.auth.auth._id);
  const PTCount = useSelector((state) => (state?.auth?.pTCount ? state.auth.pTCount : 0));
  const [count, setCount] = useState(0);
  let listItem;

  const getPT = async () => {
    await dispatch(getPTCount({ token, UserId }));

    // if (PTCount > 0) {
    //   setCount(PTCount);
    // }
  };
  // const list = [{ name: "Photo Therapy", endpoint: "photoTherapy/totalPendingPhotoTherapy" }];

  useEffect(() => {
    const list = ["Photo Therapy"];
    if (userType === "doctor") {
      listItem = list.find((item) => item === name);
      if (listItem === "Photo Therapy") {
        getPT();
      }
    }
  }, []);

  // const fetchCount = async (endpoint) => {
  //   const dynamicEndpoint = `${endpoint}/${UserId}`;
  //   const res = await axiosInstance.get(dynamicEndpoint, {
  //     headers: {
  //       authorization: token,
  //     },
  //   });
  //   return res?.data?.data?.result[0]?.total ?? 0;
  // };

  // useEffect(() => {
  //   if (listItem && userType === "doctor") {
  //     fetchCount(listItem.endpoint).then((val) => {
  //       setCount(val);
  //     });
  //   }
  // }, []);

  const renderListItemText = () => {
    if (listItem && PTCount > 0) {
      return (
        <>
          <ListItemText
            style={{ marginRight: "10px" }}
            primary={name}
            sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
          />
          <Badge
            badgeContent={
              <Typography variant="caption" style={{ fontSize: "0.7rem" }}>
                {PTCount}
              </Typography>
            }
            color="error"
            style={{ marginRight: "2rem" }}
          ></Badge>
        </>
      );
    } else {
      return (
        <ListItemText
          primary={name}
          sx={(theme) => collapseText(theme, { miniSidenav, transparentSidenav, active })}
        />
      );
    }
  };

  return (
    <ListItem component="div" disabled={isValid}>
      <ListItem component="li">
        <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSidenav })}>
          <ListItemIcon
            sx={(theme) =>
              collapseIconBox(theme, {
                active,
                transparentSidenav,
                sidenavColor,
              })
            }
          >
            {typeof icon === "string" ? (
              <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
            ) : (
              icon
            )}
          </ListItemIcon>

          {renderListItemText()}
          {/* <ListItemText
            primary={name}
            sx={(theme) =>
              collapseText(theme, { miniSidenav, transparentSidenav, active })
            }
          /> */}

          <Icon
            sx={(theme) =>
              collapseArrow(theme, {
                noCollapse,
                transparentSidenav,
                miniSidenav,
                open,
              })
            }
          >
            expand_less
          </Icon>
        </SoftBox>
      </ListItem>
      {children && (
        <Collapse in={open} unmountOnExit>
          {children}
        </Collapse>
      )}
    </ListItem>
  );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
  color: "info",
  active: false,
  noCollapse: false,
  children: false,
  open: false,
};

// Typechecking props for the SidenavCollapse
SidenavCollapse.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  active: PropTypes.bool,
  noCollapse: PropTypes.bool,
  open: PropTypes.bool,
  isValid: PropTypes.bool,
};

export default SidenavCollapse;
