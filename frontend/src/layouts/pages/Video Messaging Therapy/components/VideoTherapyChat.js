import React, { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  updateDoc,
  getDoc,
  setDoc,
  serverTimestamp,
  increment,
  deleteField,
} from "firebase/firestore";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";
import { db } from "../../../../firebase/firebase";
import Input from "./Input";
import Messages from "./Messages";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import { Avatar, MenuItem } from "@mui/material";
import SoftButton from "components/SoftButton";
import { useDispatch, useSelector } from "react-redux";
import { currentChatChangeUser } from "store/actions/actions";
import { FaVideo } from "react-icons/fa";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CHAT_ACTIVE } from "store/actions/actions";

const Chat = ({ sessionActive, setSessionActive }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const chatid = useSelector((state) => state.auth.chatId);
  const [oneChat, setOneChat] = useState();
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  // const [isFriend, setIsFriend] = useState(false)
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log("logggggg", currentChatChangeUsr?.data?.uid, loginUser._id)

  useEffect(() => {
    if (chatid) {
      const getChats = () => {
        // const q = query(collection(db, "userChats"), where("state", "==", "CA"));
        const unsub = onSnapshot(
          doc(db, "userVideoChats", loginUser._id, "threads", chatid),
          (doc) => {
            setOneChat(doc.data());
          }
        );

        return () => {
          unsub();
        };
      };

      getChats();
    }
  }, [chatid]);
  const navigate = useNavigate();

  const videoCallControl = () => {
    // navigate("/video-messaging-therapy/video-call");
    console.log("videoCallControl");
  };

  return (
    <div className="chat">
      {currentChatChangeUsr?.curUserID ? (
        <>
          <div className="chat-right-header">
            <IconButton
              className="message_back_button_for_mobile_view"
              onClick={() => dispatch(CHAT_ACTIVE(false))}
            >
              <ArrowBackIcon />
            </IconButton>
            <div className="imgText">
              <Avatar
                className="user-img"
                src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
                alt=""
              />
              <h5>
                {currentChatChangeUsr?.data?.displayName}
                <br />
                {/* <small>Online</small> */}
              </h5>
            </div>
            {/* <div className="chatIcons">
              <MoreHorizIcon
                style={{ width: "30px", height: "30px", color: "#344676" }}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  // component={Link} to="/profile"
                  onClick={handleClose}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  // component={Link} to="/settings"
                  onClick={handleClose}
                >
                  Settings
                </MenuItem>
              </Menu>
            </div> */}
            {/* <div>
              <Tooltip title="Video Calling ">
                <IconButton>
                  <FaVideo
                    className="video-call"
                    style={{
                      fontSize: "25px",
                      marginRight: "10px",
                      marginTop: "6px",
                      color: "#62c2e8",
                      cursor: "pointer",
                    }}
                    // onClick={videoCallControl}
                  />
                </IconButton>
              </Tooltip>
            </div> */}
          </div>
          {!oneChat?.isFriend ? (
            <>
              <>
                {oneChat?.requestSenderID === loginUser._id ? (
                  <div className="not_friend">
                    <span style={{ color: "#344767" }}>
                      Chat request sent to {currentChatChangeUsr?.data?.displayName}
                      {/* {
                oneChat?.[chatid].status === "Rejected" && <p>Request Rejected</p>
              } */}
                    </span>
                  </div>
                ) : (
                  <div className="not_friend">
                    <span style={{ color: "#344767" }}>
                      Request Rejected
                      {/* {
                oneChat?.[chatid].status === "Rejected" && <p>Request Rejected</p>
              } */}
                    </span>
                    {/* <div className="accept_reject">
                      <SoftButton variant="gradient" color="info" 
                      // onClick={acceptRequest}
                      >
                        ACCEPT
                      </SoftButton>
                      <SoftButton
                        variant="gradient"
                        color="error"
                        // onClick={rejectRequest}
                      >
                        REJECT
                      </SoftButton>
                    </div> */}
                  </div>
                )}
              </>
            </>
          ) : (
            <>
              <Messages />
              <Input sessionActive={sessionActive} setSessionActive={setSessionActive} />
            </>
          )}
        </>
      ) : (
        <div className="empty_chat">
          <h3>Buser Institute</h3>
          <small>Start a conversation with your practitioner</small>
        </div>
      )}

      {/* {
        isFriend ? 
          <>
          <Messages />
          <Input />
        </>
        :
        <div className='not_friend'>
        <span style={{color:"#344767"}}>Jesse wants to start a Chat With you</span>
        <div className='accept_reject'>
          <SoftButton
              variant="gradient"
              color="info"
              // onClick={()=>setIsFriend(true)}
            >
              ACCEPT
            </SoftButton>
            <SoftButton
              variant="gradient"
              color="error"
              // onClick={()=>setIsFriend(false)}
            >
              REJECT
            </SoftButton>
          </div>
        </div>
        } */}
    </div>
  );
};
Chat.propTypes = {
  setSessionActive: PropTypes.func.isRequired,
  sessionActive: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ).isRequired,
};
export default Chat;
