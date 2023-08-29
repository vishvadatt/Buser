import React, { useState } from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Tooltip } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import { FaCamera } from "react-icons/fa";
import { MdOutlineScreenShare, MdOutlineVideoCameraFront } from "react-icons/md";
import { tooltipClasses } from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  SET_RECORDING_MODEL,
  SET_RECORDING_USER_DETAILS,
  SET_RECORDING_CHAT_ID,
} from "store/actions/actions";
import { SET_RECORDING_TYPE } from "store/actions/actions";

const IconStyle = {
  background: "white",
  border: "1px solid dodgerblue",
  width: "45px",
  height: "45px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  padding: "12px",
};

const VMTSpeedDial = ({ tooltipText, condition, chatid, currentChatChangeUsr }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setOpen(false);
  const handleSpeedDial = () => {
    dispatch(SET_RECORDING_TYPE(null));
    setOpen((data) => !data);
  };

  const actions = [
    {
      icon: (
        <div
          onClick={() => {
             dispatch(SET_RECORDING_CHAT_ID(chatid));
              dispatch(SET_RECORDING_USER_DETAILS(currentChatChangeUsr));
            dispatch(SET_RECORDING_TYPE("only_screen"));
            handleClose();
          }}
          style={IconStyle}
        >
          <MdOutlineScreenShare size={21} />
        </div>
      ),
      name: "Screen Sharing, No Camera",
    },
    {
      icon: (
        <div
          onClick={() => {
            dispatch(SET_RECORDING_CHAT_ID(chatid));
            dispatch(SET_RECORDING_USER_DETAILS(currentChatChangeUsr));
            dispatch(SET_RECORDING_TYPE("screen_with_camera"));
            handleClose();
          }}
          style={IconStyle}
        >
          <MdOutlineVideoCameraFront size={21} />
        </div>
      ),
      name: "Screen Sharing, With Camera",
    },
    {
      icon: (
        <div
          onClick={() => {
            if (tooltipText === null) {
              dispatch(SET_RECORDING_MODEL(true));
              dispatch(SET_RECORDING_CHAT_ID(chatid));
              dispatch(SET_RECORDING_USER_DETAILS(currentChatChangeUsr));
              handleClose();
            }
          }}
          style={{ ...IconStyle, opacity: tooltipText === null ? 1 : 0.2 }}
        >
          <FaCamera size={21} />
        </div>
      ),
      name: tooltipText === null ? "Full Screen Camera Recording Only" : tooltipText,
    },
  ];

  return (
    <SpeedDial
      ariaLabel="SpeedDial controlled open example"
      sx={{
        position: "relative",
        bottom: 93,
        left: 5,
        "& .MuiFab-root": {
          background: "#f8f9fa !important",
          width: 40,
          height: 40,
          boxShadow: "none !important",
          "&:hover": {
            background: "#f8f9fa !important",
          },
        },
      }}
      icon={
        <VideoCameraBackIcon
          onClick={handleSpeedDial}
          style={{
            color: "#62c2e8",
            width: "30px",
            height: "30px",
          }}
        />
      }
      // onClose={handleClose}
      // onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          // onClick={handleClose}
          tooltipPlacement="left"
        />
      ))}
    </SpeedDial>
  );
};

export default VMTSpeedDial;

VMTSpeedDial.propTypes = {
  tooltipText: PropTypes.any,
  condition: PropTypes.bool,
  chatid: PropTypes.any,
  currentChatChangeUsr: PropTypes.any,
};
