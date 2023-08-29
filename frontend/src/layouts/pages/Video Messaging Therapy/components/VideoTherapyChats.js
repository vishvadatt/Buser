import React, { useState, useEffect } from "react";
import axios from "axios";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { currentChatChangeUser } from "store/actions/actions";
import moment from "moment";
import { Grid } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import { useSoftUIController } from "context";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PropTypes from "prop-types";
import { FaUserAlt } from "react-icons/fa";
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
  collapseArrow,
} from "examples/Sidenav/styles/sidenavCollapse";
import { useLocation, NavLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { CHAT_ACTIVE } from "store/actions/actions";

const Chats = ({ sessionActive, setSessionActive }) => {
  // const [chatId, setChatId] = useState(null)
  const [chats, setChats] = useState([]);
  const [searchChat, setSearchChat] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [noData, setNoData] = useState(true);
  const [noProgress, setProgress] = useState(true);
  const [showRender, setShowRender] = useState(false);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const [selectedChat, setSelectedChat] = useState(
    currentChatChangeUsr?.data?.uid ? currentChatChangeUsr?.data?.uid : null
  );
  const dispatch = useDispatch();
  const chatid = useSelector((state) => state.auth.chatId);

  // console.log("currentChatChangeUsr?.data?.uid",loginUser._id, currentChatChangeUsr?.data?.uid)

  useEffect(() => {
    const getChats = () => {
      // const unsub = onSnapshot(doc(db, "userChats", loginUser._id), (doc) => {
      const unsub = onSnapshot(
        collection(db, "userVideoChats", loginUser._id, "threads"),
        (snapshot) => {
          let list = snapshot.docs.map((doc) => doc.data());
          setChats(list);
          setProgress(false);
          // setSearchChat(doc.data());
        }
      );

      return () => {
        unsub();
      };
    };

    getChats();
  }, []);
  // useEffect(() => {
  //     const getChats = () => {
  //       const unsub = onSnapshot(doc(db, "userChats", currentChatChangeUsr.uid), (doc) => {
  //         setChats(doc.data());
  //       });

  //       return () => {
  //         unsub();
  //       };
  //     };

  //     currentChatChangeUsr.uid && getChats();
  //   }, [currentChatChangeUsr.uid]);
  const handleSelect = (data, selectedUser) => {
    // dispatch({ type: "CURR_CHAT_CHANGE_USER", payload: data });
    selectedUser.currentSessionId
      ? setSessionActive(selectedUser.currentSessionId)
      : setSessionActive(false);
    dispatch(CHAT_ACTIVE(true));
    dispatch(currentChatChangeUser({ data, curUserID: loginUser._id, ...selectedUser }));
    setSelectedChat(data?.uid);

    let senrecID =
      loginUser._id > data?.uid ? loginUser._id + data?.uid : data?.uid + loginUser._id;

    updateDoc(doc(db, "userVideoChats", loginUser._id, "threads", senrecID), {
      unreadCount: 0,
    });
    // console.log("datauid", data?.uid)
  };
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav, sidenavColor } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  function timedOut(length) {
    setTimeout(function () {
      length ? setNoData(false) : setNoData(true);
    }, 2000); // 2000 milliseconds = 2 seconds
  }

  function searchUser(username) {
    setFilterValue(username);
    const regex = new RegExp(username, "i"); // 'i' flag for case-insensitive search

    setProgress(true);
    // Loop through the user objects and check for a match
    let list = chats.filter((user) => {
      if (regex.test(user.userInfo?.displayName)) {
        return user;
      }
    });
    setSearchChat(list);
    setProgress(false);
    timedOut(list.length);
  }
  let activeChat = filterValue.length ? searchChat : chats;

  return (
    // <div className='chats'>
    //     {
    //         chats && chats.map((chat) => {
    //             console.log("chat..", chat);
    //             return(
    //                 <div className='userChat' key={chat.id}>
    //                 <img src={chat?.userInfo?.photoURL} alt="" />
    //                 <div className='userChatInfo'>
    //                     <span>{chat?.userInfo?.displayName}</span>
    //                     <p>{chat?.lastMessage?.text}</p>
    //                 </div>
    //             </div>
    //             )
    //         })
    //     }

    // </div>
    <>
      <div className="search-chat">
        <div>
          <input
            type="text"
            placeholder="Search..."
            onInput={(e) => searchUser(e.target.value)}
            value={filterValue}
          />
        </div>
      </div>
      <div className="chatlist">
        {Object.keys(chats || {}).length === 0 ? (
          <>
            {noProgress == true ? (
              <>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "13px" }}>
                  <CircularProgress style={{ color: "#62c2e8" }} size={50} />
                </Box>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
        {Object.keys(activeChat || {}).length === 0 && noProgress !== true ? (
          <span style={{ display: "flex", justifyContent: "center", marginTop: "13px" }}>
            No Record Found...
          </span>
        ) : (
          Object?.entries(activeChat || {})
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat) => (
              <>
                <div
                  className={`block ${chat[1].userInfo?.uid === selectedChat ? "active" : ""} `}
                  key={chat[0]}
                  // onClick={()=> setChatId(chats[0].id)}
                  onClick={() => handleSelect(chat[1].userInfo, chat[1])}
                >
                  <ListItem component="li" className="css-uoqfohhh">
                    <SoftBox
                      sx={(theme) => collapseItem(theme, { collapseName, transparentSidenav })}
                    >
                      <Grid container className="side-list">
                        <div
                          style={{
                            flex: 0.15,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {chat[1]?.userInfo?.photoURL ? (
                            <img
                              src={chat[1]?.userInfo?.photoURL}
                              alt=""
                              height={35}
                              width={35}
                              style={{ borderRadius: "50px" }}
                              className="sidebar-profile"
                              // className="cover profile-side"
                            />
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 40,
                                width: 40,
                                backgroundColor: "rgb(216 229 255)",
                                borderRadius: "50px",
                              }}
                            >
                              <FaUserAlt className="nonProfile" size={20} />
                            </div>
                          )}
                        </div>
                        <div className="slidebar_list_items">
                          <div className="nameAndLastChatWrapper">
                            <h6>{chat[1].userInfo?.displayName}</h6>
                            {chat[1].isFriend ? (
                              <>
                                <span>
                                  {chat[1]?.lastMessage?.text
                                    ? chat[1]?.lastMessage?.text
                                    : chat[1]?.lastMessage?.file?.type
                                    ? chat[1]?.lastMessage?.file?.type
                                    : ""}
                                </span>
                                <>
                                  {chat[1]?.unreadCount > 0 && (
                                    <Tooltip title="Unread Messages">
                                      <b
                                        style={{
                                          fontSize: "14px",
                                          // marginLeft: "13.5rem",
                                          borderRadius: "50%",
                                          padding: "0px 7.5px 0px 7.5px",
                                          background: "#62C2E8",
                                          color: "white",
                                          position: "absolute",
                                          // bottom: "12px",
                                          right: "75px",
                                        }}
                                      >
                                        {chat[1]?.unreadCount}
                                      </b>
                                    </Tooltip>
                                  )}
                                </>
                              </>
                            ) : (
                              <>
                                {chat[1].requestSenderID === loginUser._id ? (
                                  <span
                                    style={{
                                      color: "darkslategray",
                                      fontSize: "14px",
                                    }}
                                  >
                                    Request sent
                                  </span>
                                ) : (
                                  <span style={{ color: "gray", fontSize: "15px" }}>
                                    Request receive
                                  </span>
                                )}
                              </>
                            )}
                          </div>
                          <p className="lastChatTime">
                            {_.compact(
                              moment(chat[1]?.date?.toDate())
                                .calendar()
                                .replace("at", "")
                                .replace("Last", "")
                                .split(" ")
                            ).includes("Today")
                              ? moment(chat[1]?.date?.toDate())
                                  .calendar()
                                  .replace("Today", "")
                                  .replace("at", "")
                                  .replace("Last", "")
                              : moment(chat[1]?.date?.toDate()).format("DD/MM/YYYY")}
                          </p>
                        </div>
                      </Grid>
                    </SoftBox>
                  </ListItem>
                </div>
              </>
            ))
        )}
      </div>
    </>
  );
};
Chats.propTypes = {
  setSessionActive: PropTypes.func.isRequired,
  sessionActive: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ).isRequired,
};
export default Chats;
