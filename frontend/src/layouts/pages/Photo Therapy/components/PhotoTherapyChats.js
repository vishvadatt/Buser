import React, { useState, useEffect } from "react";
import axios from "axios";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
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
import { FaUserAlt } from "react-icons/fa";
import {
  collapseItem,
  collapseIconBox,
  collapseIcon,
  collapseText,
  collapseArrow,
} from "examples/Sidenav/styles/sidenavCollapse";
import { useLocation, NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Chats = () => {
  // const [chatId, setChatId] = useState(null)
  const [chats, setChats] = useState([]);
  const [searchChat, setSearchChat] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [noData, setNoData] = useState(false);
  const [noProgress, setProgress] = useState(true);
  const [showRender, setShowRender] = useState(false);
  const [photochats, setPhotoChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const dispatch = useDispatch();
  const chatid = useSelector((state) => state.auth.chatId);

  // console.log("currentChatChangeUsr", currentChatChangeUsr)
  // console.log("currentChatChangeUsr?.data?.uid",loginUser._id, currentChatChangeUsr?.data?.uid)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userPhotoChats", loginUser._id), (doc) => {
        setChats(doc.data());
        setSearchChat(doc.data());
      });
      return () => {
        unsub();
      };
    };

    getChats();
  }, []);
  console.log(chats, "chats");
  const handleSelect = (data) => {
    // dispatch({ type: "CURR_CHAT_CHANGE_USER", payload: data });
    dispatch(currentChatChangeUser({ data, curUserID: loginUser._id }));
    setSelectedChat(data?.uid);

    let senrecID =
      loginUser._id > data?.uid ? loginUser._id + data?.uid : data?.uid + loginUser._id;

    updateDoc(doc(db, "userPhotoChats", loginUser._id), {
      [senrecID + ".unreadCount"]: 0,
    });

    // console.log("datauid", data?.uid)
  };
  const [controller] = useSoftUIController();
  const { miniSidenav, transparentSidenav, sidenavColor } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];

  function timedOut() {
    setNoData(true);
    setProgress(false);
  }

  const handleFilter = (data) => {
    console.log("serch vakg", data);
    setFilterValue(data);
    if (data === "") {
      setChats(searchChat);
    } else {
      const asArray = Object.entries(searchChat);
      const filtered = asArray.filter(([key, value]) => value?.userInfo?.displayName === data);
      console.log("filtered", filtered);
      const obj = Object.fromEntries(filtered);
      setShowRender(true);
      setChats(obj);
      setShowRender(false);
      setTimeout(timedOut, 20000);
    }
  };

  // set a timer
  setTimeout(timedOut, 20000);

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
            onInput={(e) => handleFilter(e.target.value)}
            value={filterValue}
          />
        </div>
      </div>
      <div className="chatlist">
        {/* <div className={`block ${chatId === chats[0].id ? 'active' : ''}`} key={chats[0].id}
    onClick={()=> setChatId(chats[0].id)}
    >
                    <div className='img-bx'>
                    <img src={chats[0]?.userInfo?.photoURL} alt="" className='cover'/>
                    </div>
                    <div className='chat-detail'>
                    <div className='list-head'>
                        <h4>Robin Hood</h4>
                        <p className='time'>10:44</p>
                    </div>
                    <div className='list-message'>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
        </div>
    </div> */}
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
            {noData == true ? (
              <>
                <span style={{ display: "flex", justifyContent: "center", marginTop: "13px" }}>
                  No Record Found...
                </span>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}

        {chats &&
          Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat) => (
              // <div
              //   className="userChat"
              //   key={chat[0]}
              //   onClick={() => handleSelect(chat[1].userInfo)}
              // >
              //   <img src={chat[1].userInfo.photoURL} alt="" />
              //   <div className="userChatInfo">
              //     <span>{chat[1].userInfo.displayName}</span>
              //     <p>{chat[1].lastMessage?.text}</p>
              //   </div>
              // </div>

              <div
                className={`block ${chat[1].userInfo?.uid === selectedChat ? "active" : ""}`}
                key={chat[0]}
                // onClick={()=> setChatId(chats[0].id)}
                onClick={() => handleSelect(chat[1].userInfo)}
              >
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
                  <p className="time">{moment(chat[1]?.date?.toDate()).format("LT")}</p>
                </div>
                <div className="list-message">
                  {chat[1].isFriend ? (
                    <>
                      <p>
                        {chat[1]?.lastMessage?.text
                          ? chat[1]?.lastMessage?.text
                          : chat[1]?.lastMessage?.file?.type
                          ? chat[1]?.lastMessage?.file?.type
                          : ""}
                      </p>
                      <>{chat[1]?.unreadCount > 0 && <b>{chat[1]?.unreadCount}</b>}</>
                    </>
                  ) : (
                    <>
                      {chat[1].requestSenderID === loginUser._id ? (
                        <p style={{ color: "black" }}>Request sent</p>
                      ) : (
                        <p style={{ color: "black" }}>Request receive</p>
                      )}
                    </>
                  )}
                </div>
              </div> */}
                <ListItem component="li" className="css-uoqfohhh">
                  <SoftBox
                    sx={(theme) => collapseItem(theme, { collapseName, transparentSidenav })}
                  >
                    <Grid container className="side-list">
                      <Grid items lg={2.2} xs={3.5}>
                        <ListItemIcon
                          sx={(theme) =>
                            collapseIconBox(theme, {
                              collapseName,
                              transparentSidenav,
                              sidenavColor,
                            })
                          }
                        >
                          {chat[1]?.userInfo?.photoURL ? (
                            <img
                              src={chat[1]?.userInfo?.photoURL}
                              alt=""
                              height={35}
                              width={35}
                              style={{ borderRadius: "5px" }}
                              className="sidebar-profile"
                              // className="cover profile-side"
                            />
                          ) : (
                            <FaUserAlt className="" />
                          )}
                        </ListItemIcon>
                      </Grid>
                      <Grid items lg={9.8} xs={8.5}>
                        <Grid>
                          <ListItemText
                            className="name-chat"
                            style={{ marginTop: "13px" }}
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
                                className="msgtext-chat "
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
                                <p style={{ color: "black" }}>Request sent</p>
                              ) : (
                                <p style={{ color: "black" }}>Request receive</p>
                              )}
                            </>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </SoftBox>
                </ListItem>
              </div>
            ))}
      </div>
    </>
  );
};

export default Chats;
