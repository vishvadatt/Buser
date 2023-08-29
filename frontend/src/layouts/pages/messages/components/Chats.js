import React, { useState, useEffect } from "react";
import axios from "axios";
// import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { currentChatChangeUser } from "store/actions/actions";
import moment from "moment";
import Search from "./Search";
import { Grid, Tooltip } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import { FaUserAlt } from "react-icons/fa";
import { useSoftUIController } from "context";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import _ from "lodash";

import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
  collapseArrow,
} from "examples/Sidenav/styles/sidenavCollapse";

import {
  doc,
  onSnapshot,
  updateDoc,
  getDocs,
  setDoc,
  serverTimestamp,
  increment,
  deleteField,
  collection,
} from "firebase/firestore";
import { CHAT_ACTIVE } from "store/actions/actions";

const Chats = (props) => {
  // const [chatId, setChatId] = useState(null)
  const [chatFrnd, setChatFrnd] = useState(null);
  const [filterdata, setFiterdata] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [users, setUsers] = useState();
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const dispatch = useDispatch();
  const chatid = useSelector((state) => state.auth.chatId);
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav, sidenavColor } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  // console.log("currentChatChangeUsr", currentChatChangeUsr)
  // console.log("currentChatChangeUsr?.data?.uid",loginUser._id, currentChatChangeUsr?.data?.uid)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userAdminChats", "64781fcf297c8b644f232891"), (doc) => {
        setChats(doc.data());
        console.log("getData", doc.data());
      });

      return () => {
        unsub();
      };
    };

    getChats();
  }, []);

  //Function handle the user search
  const handleSearch = async (searchKeyword) => {
    setSearchKey(searchKeyword);
  };

  const handleSelect = (data) => {
    // dispatch({ type: "CURR_CHAT_CHANGE_USER", payload: data });
    dispatch(currentChatChangeUser({ data, curUserID: loginUser._id }));
    dispatch(CHAT_ACTIVE(true));
    setSelectedChat(data?.uid);

    // let senrecID = `64781fcf297c8b644f232891${loginUser._id}`;
    // updateDoc(doc(db, "userAdminChats", "64781fcf297c8b644f232891"), {
    //   [senrecID + ".unreadCount"]: 0,
    // });
    // console.log("datauid", data?.uid)

    setSearchKey("");
  };
  // if(_.compact(moment(chat[1]?.date?.toDate())
  // .calendar()
  // .replace("Today","")
  // .replace("at", "")
  // .replace("Last", "").split(" ")).length === 3){

  // }

  return (
    <>
      <div className="search-chat">
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => handleSearch(e.target.value)}
            value={searchKey}
          />
          {/* {friendList &&
          friendList &&
          friendList.map((item, index) => (
            <div
              className="dropdown"
              key={index}
              style={{
                position: "absolute",
                zIndex: "1000",
                background: "white",
                height: "auto",
                width: "300px",
                borderRadius: "5px",
                cursor: "pointer",
                border: "1px solid grey",
              }}
            >
              {
                <div>
                  <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    // onClick={() => addFriend(item)}
                    // key={index}
                  >
                    <img
                      src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"
                      alt=""
                      className="cover"
                      width={20}
                      height={20}
                    />
                    &nbsp;
                    {item.name}
                  </SoftTypography>
                </div>
              }
            </div>
          ))} */}
        </div>
      </div>

      <div className="chatlist">
        {chats &&
          Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .filter((chat) => {
              if (searchKey === "") {
                return chat;
              } else if (
                chat[1]?.userInfo?.displayName.toLowerCase().includes(searchKey.toLowerCase()) ||
                chat[1]?.userInfo?.displayName.toLowerCase().includes(searchKey.toLowerCase())
              ) {
                return chat;
              }
            })
            .map((chat) => (
              <div
                className={`block ${chat[1].userInfo?.uid === selectedChat ? "active" : ""}`}
                key={chat[0]}
                // onClick={()=> setChatId(chats[0].id)}
                onClick={() => handleSelect(chat[1].userInfo)}
              >
                {/* {chat[1].isFriend && chat[1].requestSenderID === loginUser._id ? "request sent" : "req receive"} */}

                {/* {console.log("chattts", chat[1].date.toDate().toTimeString())} */}

                <ListItem component="li" className="css-uoqfohhh">
                  <SoftBox
                    sx={(theme) => collapseItem(theme, { collapseName, transparentSidenav })}
                  >
                    <Grid container className="side-list">
                      {/* <Grid items lg={2.2} xs={3.5}> */}
                      {/* <ListItemIcon
                          sx={(theme) =>
                            collapseIconBox(theme, {
                              collapseName,
                              transparentSidenav,
                              sidenavColor,
                            })
                          }
                        > */}
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
                        {/* </ListItemIcon> */}
                      </div>
                      {/* </Grid> */}
                      {/* <Grid style={{ flex: 0.85 }} items lg={9.8} xs={8.5}>
                     
                        <Grid>
                          <ListItemText
                            className="name-chat"
                            style={{ marginTop: "25px" }}
                            primary={chat[1].userInfo?.displayName}
                            sx={(theme) =>
                              collapseText(theme, {
                                miniSidenav,
                                transparentSidenav,
                                collapseName,
                              })
                            }
                          />
                          <ListItemText
                            style={{ marginTop: "3px", justifyContent: "end", display: "flex" }}
                            className="timing-chat"
                            primary={moment(chat[1]?.date?.toDate()).format("LT")}
                            sx={(theme) =>
                              collapseText(theme, {
                                miniSidenav,
                                transparentSidenav,
                                collapseName,
                              })
                            }
                          />
                        </Grid>
                        <Grid>
                          {chat[1].isFriend ? (
                            <>
                              <ListItemText
                                className="msgtext-chat"
                                primary={
                                  chat[1]?.lastMessage?.text
                                    ? chat[1]?.lastMessage?.text
                                    : chat[1]?.lastMessage?.file?.type
                                    ? chat[1]?.lastMessage?.file?.type
                                    : ""
                                }
                              />

                              <>
                                {chat[1]?.unreadCount > 0 && (
                                  <Tooltip title="Unread Messages">
                                    <b
                                      style={{
                                        fontSize: "14px",
                                        marginLeft: "13.5rem",
                                        borderRadius: "50%",
                                        padding: "0px 7.5px 0px 7.5px",
                                        background: "#62C2E8",
                                        color: "white",
                                        position: "absolute",
                                        bottom: "7px",
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
                                <p
                                  style={{
                                    color: "darkslategray",
                                    fontSize: "14px",
                                    marginLeft: "12px",
                                    marginTop: "5px",
                                  }}
                                >
                                  Request sent
                                </p>
                              ) : (
                                <p style={{ color: "gray", fontSize: "15px", marginLeft: "10px" }}>
                                  Request receive
                                </p>
                              )}
                            </>
                          )}
                        </Grid>
                      </Grid> */}
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
                                        marginLeft: "13.5rem",
                                        borderRadius: "50%",
                                        padding: "0px 7.5px 0px 7.5px",
                                        background: "#62C2E8",
                                        color: "white",
                                        position: "absolute",
                                        bottom: "7px",
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
                          {/* {moment(chat[1]?.date?.toDate()).format("LT")} */}
                          {/* {moment(chat[1]?.date?.toDate())
                            .calendar()
                            .replace("Today", "")
                            .replace("at", "")
                            .replace("Last", "")} */}

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
                {/* <div className="img-bx">
              {chat[1]?.userInfo?.photoURL ? (
                <img src={chat[1]?.userInfo?.photoURL} alt="" className="cover" />
              ) : (
                <img
                  src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"
                  alt=""
                  className="cover"
                  width={10}
                  height={10}
                />
              )}
            </div>
            <div className="chat-detail">
              <div className="list-head">
                <h4>{chat[1].userInfo?.displayName}</h4>
                <p className="time">{moment(chat[1]?.date?.toDate()).format('LT')}</p>
              </div>
              <div className="list-message">

                {
                  chat[1].isFriend ?
                  <>
                  <p>
                  {chat[1]?.lastMessage?.text
                    ? chat[1]?.lastMessage?.text
                    : chat[1]?.lastMessage?.file?.type
                    ? chat[1]?.lastMessage?.file?.type
                    : ""}
                </p>
                <>
                {chat[1]?.unreadCount > 0 && <b>{chat[1]?.unreadCount}</b>}
                </>
                </>
                :
                  <>
                    {chat[1].requestSenderID === loginUser._id ? <p style={{color:"black"}}>Request sent</p> : <p style={{color:"black"}}>Request receive</p>}
                  </>
                }
              </div>
            </div> */}
              </div>
            ))}
      </div>
    </>
  );
};

export default Chats;
