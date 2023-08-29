import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { Player } from "video-react";
import ReactAudioPlayer from "react-audio-player";
import moment from "moment";
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayRemove,
  arrayUnion,
  Timestamp,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import {
  Avatar,
  Box,
  Button,
  InputBase,
  useMediaQuery,
  Grid,
  Card,
  styled,
  Checkbox,
  Drawer,
  SwipeableDrawer,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import SendIcon from "@mui/icons-material/Send";
import Typography from "@mui/material/Typography";
import { BsChatText } from "react-icons/bs";
import { RiChatForwardLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { MdSend } from "react-icons/md";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Picker from "emoji-picker-react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import { v4 as uuid } from "uuid";
import { FaUserAlt } from "react-icons/fa";

const Message = (messageProps) => {
  const { message } = messageProps;
  const ref = useRef();
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);

  // console.log("message", message, currentChatChangeUsr?.curUserID)

  useEffect(() => {
    let senrecID =
      loginUser._id > currentChatChangeUsr?.data?.uid
        ? loginUser._id + currentChatChangeUsr?.data?.uid
        : currentChatChangeUsr?.data?.uid + loginUser._id;

    // updateDoc(doc(db, "userChats", loginUser._id), {
    //   [senrecID + ".unreadCount"]: 0,
    // });
    updateDoc(doc(db, "userPhotoChats", loginUser._id), {
      [senrecID + ".unreadCount"]: 0,
    });
    ref.current?.scrollIntoView({ behavior: "auto" });
  }, [message]);

  let filetype = message?.file?.mime;
  let file_type;
  file_type = filetype && filetype.split("/");
  console.log(message?.file?.mime, "file");
  let image = message?.img?.url?.length > 0 ? message.img.url : null;
  console.log(image, "img");

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      placement="bottom"
      TransitionComponent={Fade}
      arrow
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 15,
    },
  }));

  //  chat popup
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // delete message
  const chatDelete = () => {
    updateDoc(doc(db, "photoChats", chatid), {
      messages: arrayRemove(message),
    });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [showDelete, setShowDelete] = useState(true);
  setTimeout(function () {
    setShowDelete(false);
  }, 120000);

  const [opens, setOpens] = React.useState(false);
  const handleOpen = () => {
    setOpens(true);
    setAnchorEl(null);
  };
  const handleCloses = () => setOpens(false);
  // console.log("message.text", message);

  const [threadDrawar, setThreadDrawar] = useState(false);
  const threadDrawarClose = () => {
    setThreadDrawar(false);
  };
  const threadDrawarOpen = () => {
    setAnchorEl(null);
    setThreadDrawar(true);
  };
  const openReplay = () => {
    setThreadDrawar(true);
  };
  // model Style
  const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "5px",
  };
  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userPhotoChats", loginUser._id), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    getChats();
  }, []);
  // console.log("message100", message);
  const chatid = useSelector((state) => state.auth.chatId);
  const [showP, setShowP] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  const [texts, setTexts] = useState("");

  const [displayUserName, setDisplayUserName] = useState();
  const [chatIdCombine, setChatIdCombine] = useState([]);
  const [showSendbtn, setshowSendbtn] = useState(false);
  const [checkChat, setCheckChat] = useState([]);
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "photoChats", chatid), (doc) => {
      doc.exists() && setMsg(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [chatid]);
  let threadfrommsg = msg.filter((o) => o.parentmsgId == message.id);

  console.log("abcd", threadfrommsg);
  let counter = 0;

  threadfrommsg.map((data, i) => {
    counter++;
  });

  const handleSelected = (data, index) => {
    if (checkChat.includes(index)) {
      setCheckChat(checkChat.filter((res) => res !== index));
    } else {
      setCheckChat([...checkChat, index]);
    }
    if (data != "") {
      setDisplayUserName(data.displayName);
    } else {
      console.log("not");
    }
    if (
      chatIdCombine.includes(
        loginUser._id > data?.uid ? loginUser._id + data?.uid : data?.uid + loginUser._id
      )
    ) {
      setChatIdCombine(
        chatIdCombine.filter((res) =>
          res !== loginUser._id > data?.uid ? loginUser._id + data?.uid : data?.uid + loginUser._id
        )
      );
    } else {
      setChatIdCombine(
        ...chatIdCombine.push(
          loginUser._id > data?.uid ? loginUser._id + data?.uid : data?.uid + loginUser._id
        )
      );
    }
    setChatIdCombine(chatIdCombine.splice(index, 1));
  };
  const handlethreadSend = async () => {
    // console.log("another page sendBtn");
    if (!texts) {
      return;
    }

    await updateDoc(doc(db, "photoChats", chatid), {
      messages: arrayUnion({
        id: uuid(),
        parentmsgId: message.id,
        replay: texts,
        senderId: loginUser._id,
        senderName: loginUser.name,
        senderProfilePIC: loginUser.UserProfilePIC,
        date: Timestamp.now(),
      }),
    });
    setTexts("");

    await updateDoc(doc(db, "userPhotoChats", loginUser._id), {
      [chatid + ".lastMessage"]: {
        text: texts,
        // file: downloadObject,
        // videorecord: videoTherapy,
      },
      [chatid + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userPhotoChats", currentChatChangeUsr?.data?.uid), {
      [chatid + ".lastMessage"]: {
        text: texts,
        // file: downloadObject,
        // videorecord: videoTherapy,
      },
      [chatid + ".date"]: serverTimestamp(),
      [chatid + ".unreadCount"]: increment(1),
    });

    setTexts("");
    // setImg(false);
    // setvideoTherapy(null);
    setDownloadObject(null);
    gettingDeviceToken(currentChatChangeUsr?.data?.uid);
  };
  const sendMessage = (values) => {
    const text = message.text;

    const Video = message.videorecord;
    const uploadFiles = message.file;

    // console.log("Video", Video);

    if (!text && !Video && !uploadFiles) {
      return;
    }

    if (text) {
      {
        chatIdCombine.map((combineId, i) => {
          try {
            updateDoc(doc(db, "photoChats", combineId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: loginUser._id,
                date: Timestamp.now(),
                file: uploadFiles ? uploadFiles : null,
                videorecord: Video ? Video : null,
              }),
            });
            setOpens(false);
            setSoftSnakbar(true);
          } catch (err) {
            console.log("error", err);
          }
        });
      }
    } else if (Video) {
      {
        chatIdCombine.map((combineId, i) => {
          try {
            updateDoc(doc(db, "photoChats", combineId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: loginUser._id,
                date: Timestamp.now(),
                file: uploadFiles ? uploadFiles : null,
                videorecord: Video ? Video : null,
              }),
            });
            setOpens(false);
          } catch (err) {
            console.log("error", err);
          }
        });
      }
    } else if (uploadFiles) {
      {
        chatIdCombine.map((combineId, i) => {
          try {
            updateDoc(doc(db, "photoChats", combineId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: loginUser._id,
                date: Timestamp.now(),
                file: uploadFiles ? uploadFiles : null,
                videorecord: Video ? Video : null,
              }),
            });
            setOpens(false);
          } catch (err) {
            console.log("error", err);
          }
        });
      }
    }
  };
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        style={{ left: "-72px", top: "-1px" }}
        className="main-popover"
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleOpen}>
            <ListItemIcon className="popupIcon">
              <RiChatForwardLine />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "14.5px" }}
              primary="Forward Message"
            />
          </ListItemButton>
          <ListItemButton onClick={threadDrawarOpen}>
            <ListItemIcon className="popupIcon">
              <BsChatText />
            </ListItemIcon>
            <ListItemText primaryTypographyProps={{ fontSize: "14.5px" }} primary="Thread" />
          </ListItemButton>
          {showDelete ? (
            <>
              <ListItemButton onClick={chatDelete}>
                <ListItemIcon className="popupIcon">
                  <MdDeleteOutline />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: "14.5px" }}
                  primary="Delete Message"
                />
              </ListItemButton>
            </>
          ) : (
            ""
          )}
        </List>
      </Popover>

      {/* model open for forward message */}
      <Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="model-responsive">
          <Grid container className="model-header-forward">
            <Typography id="modal-modal-title" variant="h5" component="h1">
              Forward message to
            </Typography>

            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpens(false)}
              aria-label="close"
              style={{ padding: "0px 10px 10px 0px" }}
              className="close-btn"
            >
              <LightTooltip title="Close">
                <CloseIcon className="close-icon-forward" />
              </LightTooltip>
            </IconButton>
          </Grid>
          <Grid p={2} style={{ marginTop: "0px" }} className="model-desc-forward">
            {chats &&
              Object.entries(chats)
                ?.sort((a, b) => b[1].date - a[1].date)
                .map((chat, i) => (
                  <div className="active" key="">
                    <Grid container mt={0.5}>
                      <Grid items lg={1.5} xs={2}>
                        <Checkbox
                          className="forward-checkBox"
                          name={chat[1].userInfo}
                          id={i}
                          value={chat[1].userInfo}
                          onChange={() => handleSelected(chat[1].userInfo, i)}
                        />
                      </Grid>
                      <Grid items lg={1.8} xs={2.8}>
                        <div className="img-bx">
                          {chat[1]?.userInfo?.photoURL ? (
                            <img
                              src={chat[1]?.userInfo?.photoURL}
                              alt=""
                              className="cover forward-img"
                            />
                          ) : (
                            <>
                              <FaUserAlt style={{ borderRadius: "5px" }} className="demoprofile" />
                            </>
                          )}
                        </div>
                      </Grid>
                      <Grid items lg={8} xs={7} className="forward-char-part">
                        <div className="chat-detail forward-checkBox">
                          <div className="list-head">
                            <h5>{chat[1].userInfo?.displayName}</h5>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                ))}
          </Grid>
          {checkChat?.length > 0 ? (
            <>
              <Grid container className="sendbutton-part">
                <Grid items lg={10}>
                  <p>{displayUserName ? displayUserName : null}</p>
                </Grid>
                <Grid items lg={2}>
                  <MdSend onClick={sendMessage} className="sendIcon" />
                </Grid>
              </Grid>
            </>
          ) : (
            ""
          )}
        </Box>
      </Modal>

      {/* Thread Drawar */}
      <Drawer anchor="right" open={threadDrawar} onClose={threadDrawarClose}>
        <Box className="">
          <Grid container className="thread-head">
            <Grid items lg={10} xs={9}>
              <Typography variant="h4" style={{ color: "#344767" }}>
                Thread{" "}
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  ({currentChatChangeUsr.data.displayName})
                </span>
              </Typography>
            </Grid>
            <Grid items lg={2} xs={2}>
              <CloseIcon className="thread-close" onClick={threadDrawarClose} />
            </Grid>
          </Grid>
          <Grid p={2}>
            <Grid container>
              <Grid items lg={2} xs={3}>
                <div className="img-bx">
                  {message?.senderProfilePIC ? (
                    <>
                      <img
                        src={message?.senderProfilePIC}
                        alt=""
                        style={{ borderRadius: "5px" }}
                        className="cover"
                        width={45}
                        height={45}
                      />
                    </>
                  ) : (
                    <>
                      <FaUserAlt style={{ borderRadius: "5px" }} className="demoprofile" />
                    </>
                  )}
                </div>
              </Grid>
              <Grid items lg={10} xs={9} mt={0.3}>
                <div className="thread-name">
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      color: "#344767",
                      marginBottom: "0px",
                    }}
                  >
                    {message?.senderName}

                    <small style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}>
                      {moment(message?.date.toDate()).format("LT")}
                    </small>
                  </p>
                  {file_type && file_type[0] === "image" ? (
                    <>
                      <Grid container>
                        <small style={{ fontSize: "14px", color: "gray", fontWeight: "400" }}>
                          {message?.file?.name}
                        </small>

                        <a href={message?.file?.uri} target="blank" style={{
                          marginTop:"16px"
                        }} >
                          <img src={message?.file?.uri} alt="img" className="img_img" />
                        </a>
                      </Grid>
                    </>
                  ) : file_type && file_type[0] === "application" ? (
                    <a href={message?.file?.uri} target="blank">
                      <div>
                        <img
                          src="https://www.shareicon.net/download/2017/04/20/884681_document_512x512.png"
                          width={30}
                          height={30}
                        />
                        {message?.file?.name}
                        <small style={{ color: "#555" }}>{message?.file?.mime}</small>
                      </div>
                    </a>
                  ) : file_type && file_type[0] === "video" ? (
                    <>
                      <Grid container>
                        <small style={{ fontSize: "14px", color: "gray", fontWeight: "400" }}>
                          {message?.file?.name}
                        </small>
                        <video height="200px" loop muted controls className="video_img">
                          <source src={message?.file?.uri} type="video/mp4" />
                          Your browser does not support HTML video.
                        </video>
                      </Grid>
                    </>
                  ) : file_type && file_type[0] === "audio" ? (
                    <>
                      <Grid container>
                        <small style={{ fontSize: "14px", color: "gray", fontWeight: "400" }}>
                          {message?.file?.name}
                        </small>
                        <ReactAudioPlayer
                          width="auto"
                          src={message?.file?.uri}
                          className="audio-control"
                          controls
                        />
                      </Grid>
                    </>
                  ) : message.type === "liveVideo/mp4" ? (
                    <>
                      <Grid container>
                        <video loop muted controls className="livevideo_img">
                          <source src={message?.videorecord} type="video/mp4" />
                          Your browser does not support HTML video.
                        </video>
                      </Grid>
                    </>
                  ) : (
                    ""
                  )}
                  <>
                    <p style={{ fontSize: "14px" }}>{message.text}</p>
                  </>
                </div>
              </Grid>
            </Grid>
            <Grid container mt={0.5}>
              <Grid items lg={2.5} xs={3.5}>
                <Typography style={{ fontSize: "16px", color: "#344767" }}>
                  {counter ? counter : "0"} replies
                </Typography>
              </Grid>
              <Grid items lg={9.5} xs={8.5} className="thread-main"></Grid>
            </Grid>

            <Grid>
              {threadfrommsg.map((e, i) => {
                console.log("threadfrommsg", e);
                return (
                  <>
                    <Grid container mt={1}>
                      <Grid items lg={2} xs={3}>
                        <div className="img-bx">
                          {e.senderProfilePIC ? (
                            <>
                              <img
                                src={e.senderProfilePIC}
                                alt=""
                                className="cover profileURL"
                                width={45}
                                height={45}
                              />
                            </>
                          ) : (
                            <>
                              <div className="demoprofilediv">
                                <FaUserAlt
                                  style={{ borderRadius: "5px" }}
                                  className="demoprofile"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </Grid>
                      <Grid items lg={10} xs={9}>
                        <div className="thread-name">
                          <p
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#344767",
                              marginBottom: "0px",
                            }}
                          >
                            {e.senderName}
                            <small style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}>
                              {e.date ? moment(e?.date.toDate()).format("LT") : ""}
                            </small>
                          </p>

                          <p style={{ fontSize: "15px" }}>{e.replay ? e.replay : ""}</p>
                        </div>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
          <Grid p={2} pt={0} style={{ background: "#f8f9fa" }}>
            <div className="chatbox_input">
              <TagFacesIcon
                style={{ cursor: "pointer", width: "30px", height: "30px", color: "#344767" }}
                onClick={() =>
                  setShowP((value) => {
                    return !value;
                  })
                }
              />
              {showP && (
                <div className={matches ? "emojiBoxs" : "mobileEmojiBox"}>
                  <Picker
                    searchDisabled="true"
                    lazyLoadEmojis="false"
                    autoFocusSearch="false"
                    width={"100%"}
                    height={300}
                    disableAutoFocus={true}
                    onEmojiClick={onEmojiclick}
                  />
                </div>
              )}
              <input
                type="text"
                placeholder="Type a message..."
                onChange={(e) => setTexts(e.target.value)}
                value={texts}
              />
              &nbsp;&nbsp;
              {progress > 0 ? (
                <CircularProgress color="inherit" />
              ) : (
                <SendIcon
                  style={{ width: "30px", height: "30px", color: "#344767", cursor: "pointer" }}
                  onClick={handlethreadSend}
                />
              )}
            </div>
          </Grid>
        </Box>
      </Drawer>
      {/* <div className={`message ${message?.senderId === "nBpNmjDkdockOuXhqX0Mj0KEmkl1" && "owner"}`}>
        <div className='messageInfo'>
            <img src="https://i.pinimg.com/originals/b3/c9/df/b3c9dfa78c7a93bbd84f9c8fcbcc2a0e.jpg" width="10" hieght="10" alt="" />
            <span>just Now</span>
        </div>
        <div className='messageContent'>
            <p>{message?.text}</p>
        </div>
    </div> */}

      {message.replay ? (
        <></>
      ) : (
        <>
          <div
            // className=`message ${message.senderId === loginUser._id} my_message`
            className={`message ${
              message.senderId === loginUser._id ? "my_message" : "frnd_message"
            }`}
            ref={ref}
          >
            <p>
              <div style={{ height: "10px", display: "flex", justifyContent: "end" }}>
                <ExpandMoreIcon
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                  className="expandmore"
                />
              </div>
              {/* {file_type && file_type[0] === "image"  && <img src={message?.file?.uri} alt="img" className="message_img"/>}
        {message?.file  && <a href="https://www.w3schools.com" target="blank">{message?.file?.name}</a>} */}

              {/* {
        file_type && file_type[0] === "image" ?
        <>
        <a href={message?.file?.uri} target="blank">
          <img src={message?.file?.uri} alt="img" className="message_img"/>
          </a>
          </> 
           ? file_type && file_type[0] === "image" ?
           <>
           <a href={message?.file?.uri} target="blank">
            {message?.file?.name}
            </a>
           </>
           :
           ""
           <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
            width="300px"
            height="240px"/>      
       }  */}
              {image ? (
                <>
                  <a href={image} target="blank">
                    <img
                      src={image}
                      alt="img"
                      className="message_img"
                      style={{ marginTop: "15px" }}
                    />
                  </a>
                </>
              ) : null}
              {file_type && file_type[0] === "image" ? (
                <>
                  <a href={message?.file?.uri} target="blank">
                    <img
                      src={message?.file?.uri}
                      alt="img"
                      className="message_img"
                      style={{ marginTop: "15px" }}
                    />
                  </a>
                </>
              ) : file_type && file_type[0] === "application" ? (
                <a href={message?.file?.uri} target="blank">
                  <div>
                    <img
                      src="https://www.shareicon.net/download/2017/04/20/884681_document_512x512.png"
                      width={30}
                      height={30}
                    />
                    {message?.file?.name}
                    <small style={{ color: "#555" }}>{message?.file?.mime}</small>
                  </div>
                </a>
              ) : file_type && file_type[0] === "video" ? (
                //   <ReactPlayer url={message?.file?.uri}
                // width="300px"
                // height="240px"/>
                <>
                  <video
                    height="200px"
                    loop
                    muted
                    controls
                    className="message_img"
                    style={{ marginTop: "15px" }}
                  >
                    <source src={message?.file?.uri} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                  <small>{message?.file?.name}</small>
                </>
              ) : file_type && file_type[0] === "audio" ? (
                // <a href={message?.file?.uri} target="blank">
                //   {message?.file?.name}
                // </a>
                <>
                  <ReactAudioPlayer
                    width="auto"
                    src={message?.file?.uri}
                    className="message_audio"
                    controls
                    style={{ marginTop: "15px" }}
                  />
                  <small>{message?.file?.name}</small>
                </>
              ) : (
                ""
              )}
              <Grid container>
                <div style={{ marginRight: "10px", fontSize: "16px" }}>
                  {message.text ? message.text : ""}
                </div>
                <small style={{ marginTop: "12px" }}>
                  {moment(message?.date.toDate()).format("LT")}
                </small>
              </Grid>
              {counter == 0 ? (
                ""
              ) : (
                <>
                  <span
                    style={{ cursor: "pointer", fontSize: "15px" }}
                    className="thread-replay"
                    onClick={openReplay}
                  >
                    {counter} replies
                  </span>
                </>
              )}
            </p>
          </div>
        </>
      )}
      {/* <div className='message frnd_message'>
        <p>Hey<br/><small>12:00</small></p>
      </div> */}
    </>
  );
};

export default Message;
