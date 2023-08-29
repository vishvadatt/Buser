import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  query,
  orderBy,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { HiDownload } from "react-icons/hi";
import { db } from "../../../../firebase/firebase";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import SendIcon from "@mui/icons-material/Send";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { BsChatText } from "react-icons/bs";
import { RiChatForwardLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { MdSend } from "react-icons/md";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
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

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
  uploadBytesResumable,
} from "@firebase/storage";
import axios from "axios";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { currentChatChangeUser } from "store/actions/actions";
import { v4 as uuid } from "uuid";
import SoftSnackbar from "components/SoftSnackbar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Picker from "emoji-picker-react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import CircularProgress from "@mui/material/CircularProgress";
import { processMediaFile } from "./mediaProcessor";
import { fontSize } from "@mui/system";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

const Message = (messageProps) => {
  const [msg, setMsg] = useState([]);
  const refs = useRef();

  const storage = getStorage();

  const matches = useMediaQuery("(min-width:600px)");

  const [texts, setTexts] = useState("");

  const [progress, setProgress] = useState(0);

  const [showP, setShowP] = useState(false);
  const [downloadObject, setDownloadObject] = useState(null);
  const [previewThread, setPreviewThread] = useState(null);
  const [fileData, setFileData] = useState(null);
  const chatid = useSelector((state) => state.auth.chatId);
  // console.log("downloadObject", downloadObject);
  useEffect(() => {
    const chatRef = collection(db, "videoChats", chatid, "messages");
    onSnapshot(query(chatRef, orderBy("date", "asc")), (snapshot) => {
      setMsg(snapshot.docs.map((docs) => docs.data()));
    });
  }, [chatid]);
  const { message } = messageProps;

  let threadfrommsg = msg.filter((o) => o.parentmsgId == message.id);

  let counter = 0;

  threadfrommsg.map((data, i) => {
    counter++;
  });

  const onEmojiclick = (event) => {
    setTexts((prevInput) => prevInput + event.emoji);
    setShowP(false);
  };

  const uploadFileThread = async (fileData, processURL) => {
    let image = fileData?.type.split("/");
    const filename = fileData.lastModified + 1;
    const storageRef = ref(storage, `chatImages/${filename}`);
    if (image[0] === "image") {
      const uploadTask = await uploadString(storageRef, processURL, "data_url");
      getDownloadURL(uploadTask.ref).then((url) => {
        setDownloadObject({
          name: fileData.name,
          size: fileData.size,
          type: fileData.type,
          source: url,
          uri: url,
          url,
          mime: fileData.type,
          text: texts,
        });
        handlethreadSend({
          name: fileData.name,
          size: fileData.size,
          type: fileData.type,
          source: url,
          uri: url,
          url,
          mime: fileData.type,
          text: texts,
        });
      });
    } else {
      const uploadTask = uploadBytesResumable(storageRef, processURL);
      return new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100); // update progress
            setProgress(percent);
          },
          (err) => {
            console.log(err);
            setProgress(0);
          },
          () => {
            setProgress(0);
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              setDownloadObject({
                name: fileData.name,
                size: fileData.size,
                type: fileData.type,
                source: url,
                uri: url,
                url,
                mime: fileData.type,
              });
              handlethreadSend({
                name: fileData.name,
                size: fileData.size,
                type: fileData.type,
                source: url,
                uri: url,
                url,
                mime: fileData.type,
              });
            });
          }
        );
      });
    }
  };
  const gettingDeviceToken = async (recieverId) => {
    try {
      const userRef = doc(db, "users", recieverId);
      const docRef = await getDoc(userRef);
      const data = await docRef.data();
      handleNotification(data); //Calling Notification Function and sending device tokens
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("texts010", texts);

  const handlethreadSend = async (downObject) => {
    if (!texts && !downObject) {
      return;
    }

    if (downObject) {
      try {
        let id = uuid();
        const docRef = doc(db, "videoChats", chatid, "messages", id);
        await setDoc(docRef, {
          id: uuid(),
          text: texts,
          replay: texts,
          parentmsgId: message.id,
          senderId: loginUser._id,
          senderName: loginUser.firstName,
          // senderProfilePIC: loginUser.UserProfilePIC,
          date: Timestamp.now(),
          file: downObject,
          // videorecord: videoTherapy ? videoTherapy : null,
        }),
          // await updateDoc(doc(db, "videoChats", chatid), {
          //   messages: arrayUnion({
          //     id: uuid(),
          //     text: texts,
          //     replay: texts,
          //     parentmsgId: message.id,
          //     senderId: loginUser._id,
          //     senderName: loginUser.name,
          //     senderProfilePIC: loginUser.UserProfilePIC,
          //     date: Timestamp.now(),
          //     file: downObject,
          //     // videorecord: videoTherapy ? videoTherapy : null,
          //   }),
          // });
          setTexts("");
      } catch (err) {
        console.log("error", err);
      }
    } else {
      // console.log("text arrived");
      let id = uuid();
      const docRef = doc(db, "videoChats", chatid, "messages", id);
      await setDoc(docRef, {
        id: uuid(),
        parentmsgId: message.id,
        replay: texts,
        senderId: loginUser._id,
        senderName: loginUser.firstName,
        // senderProfilePIC: loginUser.UserProfilePIC,
        date: Timestamp.now(),
      });
      // await updateDoc(doc(db, "videoChats", chatid), {
      //   messages: arrayUnion({
      //     id: uuid(),
      //     parentmsgId: message.id,
      //     replay: texts,
      //     senderId: loginUser._id,
      //     senderName: loginUser.name,
      //     senderProfilePIC: loginUser.UserProfilePIC,
      //     date: Timestamp.now(),
      //   }),
      // });
      setTexts("");
    }

    await updateDoc(doc(db, "userVideoChats", loginUser._id, "threads", chatid), {
      lastMessage: {
        text: texts,
        file: downObject ? downObject : downloadObject,
        // videorecord: videoTherapy,
      },
      date: serverTimestamp(),
    });

    await updateDoc(doc(db, "userVideoChats", currentChatChangeUsr?.data?.uid, "threads", chatid), {
      lastMessage: {
        text: texts,
        file: downObject ? downObject : downloadObject,
        // videorecord: videoTherapy,
      },
      date: serverTimestamp(),
      unreadCount: increment(1),
    });

    // setImg(false);
    // setvideoTherapy(null);
    setDownloadObject(null);
    gettingDeviceToken(currentChatChangeUsr?.data?.uid);
    setTexts("");
  };
  const onAddDocPress = async (e) => {
    try {
      const file = e.target.files[0];
      setFileData(file);
      setPreviewThread({
        type: file.type,
        name: file.name,
        url: URL.createObjectURL(file),
      });
      // let resizedURL = await processMediaFile(e.target.files[0]);
      // uploadFile(e.target.files[0], resizedURL);
      // console.log("resizedURL", resizedURL, e.target.files[0])
    } catch (err) {
      console.log(err);
    }
  };

  //Function to send Background Notification
  const handleNotification = async (data) => {
    try {
      await axios.post(
        "https://fcm.googleapis.com/fcm/send",
        {
          registration_ids: data?.deviceToken,
          content_available: true,
          data: {
            title: `Someone Messaged you in Buser Institute`,
            body: `${texts}`,
            // body: `hello world`,
          },
          notification: {
            title: `Someone Messaged you in Buser Institute`,
            body: `${texts}`,
            // body: `hello world`,
            vibrate: 1,
            sound: 1,
            show_in_foreground: true,
            priority: "high",
          },
        },
        {
          headers: {
            Authorization: `key=` + firebaseServerKey,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const Closesnalbar = () => {
    setSoftSnakbar(false);
  };
  const [softSnakbar, setSoftSnakbar] = useState(false);

  useEffect(() => {
    let senrecID =
      loginUser._id > currentChatChangeUsr?.data?.uid
        ? loginUser._id + currentChatChangeUsr?.data?.uid
        : currentChatChangeUsr?.data?.uid + loginUser._id;
    // console.log("senrecID", senrecID);
    updateDoc(doc(db, "userVideoChats", loginUser._id, "threads", senrecID), {
      unreadCount: 0,
    });
    refs.current?.scrollIntoView({ behavior: "auto" });
  }, [message]);

  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        collection(db, "userVideoChats", loginUser._id, "threads"),
        (snapshot) => {
          let list = snapshot.docs.map((doc) => doc.data());
          setChats(list);
        }
      );
      return () => {
        unsub();
      };
    };
    getChats();
  }, []);
  // console.log("message100", message);
  const [displayUserName, setDisplayUserName] = useState();
  const [chatIdCombine, setChatIdCombine] = useState([]);
  const [checkChat, setCheckChat] = useState([]);

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
  // console.log("chatIdCombine", chatIdCombine);

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

  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);

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
        chatIdCombine.map(async (combineId, i) => {
          try {
            let id = uuid();
            const docRef = doc(db, "videoChats", combineId, "messages", id);
            await setDoc(docRef, {
              id: uuid(),
              text,
              senderId: loginUser._id,
              date: Timestamp.now(),
              file: uploadFiles ? uploadFiles : null,
              videorecord: Video ? Video : null,
            });
            // updateDoc(doc(db, "videoChats", combineId), {
            //   messages: arrayUnion({
            //     id: uuid(),
            //     text,
            //     senderId: loginUser._id,
            //     date: Timestamp.now(),
            //     file: uploadFiles ? uploadFiles : null,
            //     videorecord: Video ? Video : null,
            //   }),
            // });
            setOpens(false);
            setSoftSnakbar(true);
          } catch (err) {
            console.log("error", err);
          }
        });
      }
    } else if (Video) {
      {
        chatIdCombine.map(async (combineId, i) => {
          try {
            let id = uuid();
            const docRef = doc(db, "videoChats", combineId, "messages", id);
            await setDoc(docRef, {
              id: uuid(),
              text,
              senderId: loginUser._id,
              date: Timestamp.now(),
              file: uploadFiles ? uploadFiles : null,
              videorecord: Video ? Video : null,
            });
            // updateDoc(doc(db, "videoChats", combineId), {
            //   messages: arrayUnion({
            //     id: uuid(),
            //     text,
            //     senderId: loginUser._id,
            //     date: Timestamp.now(),
            //     file: uploadFiles ? uploadFiles : null,
            //     videorecord: Video ? Video : null,
            //   }),
            // });
            setOpens(false);
          } catch (err) {
            console.log("error", err);
          }
        });
      }
    } else if (uploadFiles) {
      {
        chatIdCombine.map(async (combineId, i) => {
          try {
            let id = uuid();
            const docRef = doc(db, "videoChats", combineId, "messages", id);
            await setDoc(docRef, {
              id: uuid(),
              text,
              senderId: loginUser._id,
              date: Timestamp.now(),
              file: uploadFiles ? uploadFiles : null,
              videorecord: Video ? Video : null,
            });
            // updateDoc(doc(db, "videoChats", combineId), {
            //   messages: arrayUnion({
            //     id: uuid(),
            //     text,
            //     senderId: loginUser._id,
            //     date: Timestamp.now(),
            //     file: uploadFiles ? uploadFiles : null,
            //     videorecord: Video ? Video : null,
            //   }),
            // });
            setOpens(false);
          } catch (err) {
            console.log("error", err);
          }
        });
      }
    }
  };

  let filetype = message?.file?.mime;

  let file_type;
  file_type = filetype && filetype.split("/");
  const vid = message?.videorecord ? message.videorecord : null;

  //  chat popup
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // open popup

  const [openPopOver, setopenPopOver] = React.useState(true);

  // delete message
  const chatDelete = () => {
    let docRef = doc(db, "videoChats", chatid, "messages", message.id);
    deleteDoc(docRef);
  };

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
  function dateTime(Time) {
    // Convert nanoseconds to milliseconds
    const milliseconds = Math.floor(Time.nanoseconds / 1000000);

    // Create a new Date object using the milliseconds and seconds
    const messageDate = new Date(Time.seconds * 1000 + milliseconds);

    const dateString = moment(messageDate).format("YYYY-MM-DD");
    const todayDate = moment(new Date()).format("YYYY-MM-DD");
    if (dateString == todayDate) {
      return moment(messageDate).format("LT");
    } else {
      return moment(messageDate).format("LT DD-MM-YYYY");
    }
  }

  // const handleDownload = async (imageUrl) => {
  //   const url = imageUrl.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.href = imageUrl;
  //   link.download = "image.jpg";
  //   link.click();
  // };

  // console.log("currentChatChangeUsr", currentChatChangeUsr);
  return (
    <>
      {/* message popup */}
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
              chats.map((chat, i) => (
                <div className="active" key="">
                  <Grid container mt={0.5}>
                    <Grid items lg={1.5} xs={2}>
                      <Checkbox
                        className="forward-checkBox"
                        name={chat.userInfo}
                        id={i}
                        value={chat.userInfo}
                        onChange={() => handleSelected(chat.userInfo, i)}
                      />
                    </Grid>
                    <Grid items lg={1.8} xs={2.8}>
                      <div className="img-bx">
                        {chat?.userInfo?.photoURL ? (
                          <img
                            src={chat?.userInfo?.photoURL}
                            alt=""
                            className="cover forward-img"
                          />
                        ) : (
                          <img
                            src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"
                            alt=""
                            className="cover"
                            width={50}
                            height={50}
                          />
                        )}
                      </div>
                    </Grid>
                    <Grid items lg={8} xs={7} className="forward-char-part">
                      <div className="chat-detail forward-checkBox">
                        <div className="list-head">
                          <h5>{chat.userInfo?.displayName}</h5>
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
      <Drawer
        className="thread_Wrapper"
        anchor="right"
        open={threadDrawar}
        onClose={threadDrawarClose}
      >
        <Box>
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
                  <img
                    src={
                      loginUser?.UserProfilePIC
                        ? loginUser?.UserProfilePIC
                        : "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"
                    }
                    alt=""
                    style={{ borderRadius: "5px" }}
                    className="cover"
                    width={45}
                    height={45}
                  />
                </div>
              </Grid>
              <Grid items lg={10} xs={9} mt={0.3}>
                <div className="thread-name">
                  <p style={{ fontSize: "18px", fontWeight: "500", color: "#344767" }}>
                    {message?.senderName}
                    <small style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}>
                      {dateTime(message?.date)}
                    </small>
                  </p>
                  {file_type && file_type[0] === "image" ? (
                    <>
                      <Grid container>
                        <small style={{ fontSize: "14px", color: "gray", fontWeight: "400" }}>
                          {message?.file?.name}
                        </small>

                        <a href={message?.file?.uri} target="blank" style={{ marginTop: "16px" }}>
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
                          <source src={message?.file?.uri} />
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
                          <source src={message?.videorecord} />
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
                return (
                  <>
                    <Grid container mt={1}>
                      <Grid items lg={2} xs={3}>
                        <div className="img-bx">
                          <img
                            src={
                              loginUser.UserProfilePIC
                                ? loginUser.UserProfilePIC
                                : "https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"
                            }
                            alt=""
                            className="cover profileURL"
                            width={45}
                            height={45}
                          />
                        </div>
                      </Grid>
                      {e.file ? (
                        <>
                          {" "}
                          {e.file?.type?.includes("image") ? (
                            <div className="media_thread_box">
                              <p
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "500",
                                  color: "#344767",
                                  margin: 0,
                                }}
                              >
                                {e.senderName}
                                <small
                                  style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}
                                >
                                  {e?.date ? dateTime(e.date) : ""}
                                </small>
                              </p>
                              <p style={{ fontSize: "15px" }}>{e.replay ? e.replay : ""}</p>
                              <img
                                src={e.file.url}
                                style={{
                                  height: 200,
                                  width: 200,
                                  objectFit: "contain",
                                  border: "1px dashed lightgray",
                                  borderRadius: 8,
                                }}
                              />
                            </div>
                          ) : e.file?.type?.includes("video") ? (
                            <div className="media_thread_box">
                              <p
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "500",
                                  color: "#344767",
                                  margin: 0,
                                }}
                              >
                                {e.senderName}
                                <small
                                  style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}
                                >
                                  {e?.date ? dateTime(e.date) : ""}
                                </small>
                              </p>
                              <p style={{ fontSize: "15px" }}>{e.replay ? e.replay : ""}</p>
                              <video
                                controls
                                src={e.file.url}
                                style={{
                                  height: 200,
                                  width: 200,
                                }}
                              />
                            </div>
                          ) : e.file?.type?.includes("audio") ? (
                            <div className="media_thread_box">
                              <p
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "500",
                                  color: "#344767",
                                  margin: 0,
                                }}
                              >
                                {e.senderName}
                                <small
                                  style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}
                                >
                                  {e?.date ? dateTime(e.date) : ""}
                                </small>
                              </p>
                              <p style={{ fontSize: "15px" }}>{e.replay ? e.replay : ""}</p>
                              <audio
                                controls
                                src={e.file.url}
                                style={{
                                  width: 300,
                                }}
                              />
                            </div>
                          ) : e.file?.type ? (
                            <div className="media_thread_box">
                              <p
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "500",
                                  color: "#344767",
                                  margin: 0,
                                }}
                              >
                                {e.senderName}
                                <small
                                  style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}
                                >
                                  {e.date ? dateTime(e.date) : ""}
                                </small>
                              </p>
                              <p style={{ fontSize: "15px" }}>{e.replay ? e.replay : ""}</p>
                              <img
                                src="https://www.shareicon.net/download/2017/04/20/884681_document_512x512.png"
                                width={30}
                                height={30}
                              />
                            </div>
                          ) : null}
                        </>
                      ) : (
                        <Grid items lg={10} xs={9}>
                          <div className="thread-name">
                            <p style={{ fontSize: "18px", fontWeight: "500", color: "#344767" }}>
                              {e.senderName}
                              <small
                                style={{ marginLeft: "10px", fontSize: "12px", color: "gray" }}
                              >
                                {e?.date ? dateTime(e.date) : ""}
                              </small>
                            </p>

                            <p style={{ fontSize: "15px" }}>{e.replay ? e.replay : ""}</p>
                          </div>
                        </Grid>
                      )}
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
          <Grid p={2} pt={0} style={{ background: "#f8f9fa" }}>
            <div className="chatbox_input">
              {previewThread && (
                <div className="preview_section_thread">
                  <AiOutlineCloseCircle
                    onClick={() => setPreviewThread(null)}
                    size={25}
                    className="close_icon"
                  />
                  {previewThread?.type?.includes("image") ? (
                    <img
                      src={previewThread.url}
                      style={{
                        height: 200,
                        width: 200,
                        objectFit: "contain",
                        border: "1px dashed lightgray",
                        borderRadius: 8,
                      }}
                    />
                  ) : previewThread?.type?.includes("video") ? (
                    <video
                      controls
                      src={previewThread.url}
                      style={{
                        height: 200,
                        width: 200,
                      }}
                    />
                  ) : previewThread?.type?.includes("audio") ? (
                    <audio
                      controls
                      src={previewThread.url}
                      style={{
                        width: 300,
                      }}
                    />
                  ) : previewThread?.type ? (
                    <>
                      <img
                        src="https://www.shareicon.net/download/2017/04/20/884681_document_512x512.png"
                        width={30}
                        height={30}
                      />
                      <span>{previewThread?.name}</span>
                    </>
                  ) : null}
                </div>
              )}
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
                onKeyDownCapture={async (e) => {
                  if (e.keyCode === 13) {
                    if (previewThread) {
                      let resizedURL = await processMediaFile(fileData);
                      uploadFileThread(fileData, resizedURL);
                      setPreviewThread(null);
                    } else {
                      handlethreadSend();
                    }
                  }
                }}
                value={texts}
              />
              <input
                type="file"
                style={{ display: "none" }}
                id="icon-button-file-thread"
                onChange={onAddDocPress}
              />
              <label htmlFor={"icon-button-file-thread"}>
                <AttachFileIcon
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#344767",
                    marginTop: "15px",
                    cursor: "pointer",
                  }}
                />
              </label>
              &nbsp;&nbsp;
              {progress > 0 ? (
                <CircularProgress color="inherit" />
              ) : (
                <IconButton
                  onClick={async () => {
                    if (previewThread) {
                      let resizedURL = await processMediaFile(fileData);
                      uploadFileThread(fileData, resizedURL);
                      setPreviewThread(null);
                    } else {
                      handlethreadSend();
                    }
                  }}
                >
                  <SendIcon
                    style={{ width: "30px", height: "30px", color: "#344767", cursor: "pointer" }}
                  />
                </IconButton>
              )}
            </div>
          </Grid>
        </Box>
      </Drawer>

      {message.replay ? (
        <></>
      ) : (
        <>
          <div
            className={`message ${
              message.senderId === loginUser._id ? "my_message" : "frnd_message"
            }`}
            ref={refs}
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
              {vid ? (
                <>
                  <div>
                    <video
                      height="200px"
                      loop
                      muted
                      controls
                      className="message_img"
                      style={{ marginTop: "15px" }}
                    >
                      {/* <source src={vid} /> */}
                      <source src={vid} type="video/mp4" />
                      <source src={vid} type="video/ogg" />
                      <source src={vid} type="video/webm" />
                      Your browser does not support HTML video.
                    </video>
                  </div>
                </>
              ) : null}

              {file_type && file_type[0] === "image" ? (
                <Box display={"flex"} flexDirection={"column"}>
                  <a href={message?.file?.uri} target="blank">
                    <img
                      src={message?.file?.uri}
                      alt="img"
                      className="message_img"
                      style={{ marginTop: "15px" }}
                    />
                  </a>
                  {/* <div>
                    <HiDownload size={25} onClick={() => handleDownload(message?.file?.uri)} />
                  </div> */}
                </Box>
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
                  <video
                    height="200px"
                    loop
                    muted
                    controls
                    className="message_img"
                    style={{ marginTop: "15px" }}
                  >
                    {/* <source src={message?.file?.uri} /> */}
                    <source src={message?.file?.uri} type="video/mp4" />
                    <source src={message?.file?.uri} type="video/ogg" />
                    <source src={message?.file?.uri} type="video/webm" />
                    Your browser does not support HTML video.
                  </video>
                  <small>{message?.file?.name}</small>
                </>
              ) : file_type && file_type[0] === "audio" ? (
                <>
                  <ReactAudioPlayer
                    width="auto"
                    src={message?.file?.uri}
                    className="audio-control"
                    controls
                    style={{ marginTop: "15px" }}
                  />
                  <small>{message?.file?.name}</small>
                </>
              ) : (
                ""
              )}

              <Grid container>
                <div style={{ marginRight: "10px", fontSize: "16px", textAlign: "start" }}>
                  {message.text ? message.text : ""}
                </div>
                <small style={{ marginTop: "12px" }}>{dateTime(message?.date)}</small>
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

      {/* <Snackbar
        open={softSnakbar}
        autoHideDuration={1000}
        onClose={Closesnalbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert onClose={Closesnalbar} severity="success" sx={{ width: "100%" }}>
          Message Forward Sucessfully...
        </Alert>
      </Snackbar> */}
      {/* <div className='message frnd_message'>
        <p>Hey<br/><small>12:00</small></p>
      </div> */}
    </>
  );
};

export default Message;
