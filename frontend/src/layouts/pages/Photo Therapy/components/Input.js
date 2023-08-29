import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { v4 as uuid } from "uuid";
import axios from "axios";
// import { collection, getDocs, getDoc,doc, addDoc,updateDoc,arrayUnion,  deleteDoc, setDoc, query, where } from "firebase/firestore";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
  increment,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { processMediaFile } from "./mediaProcessor";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadString,
  uploadBytesResumable,
} from "@firebase/storage";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import Picker from "emoji-picker-react";
import {
  Avatar,
  Box,
  Button,
  InputBase,
  useMediaQuery,
  IconButton,
  Tooltip,
  Grid,
  Card,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import NoPhotographyIcon from "@mui/icons-material/NoPhotography";
import ImageCapture from "react-image-data-capture";
const Input = () => {
  const style = {
    position: "absolute",
    // top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    // border: "1px solid #000",
    borderRadius: "15px",
    boxShadow: 20,
    overflow: "auto",
    p: 2,
  };
  const firebaseServerKey =
    "AAAAXk9QFdQ:APA91bHlTc8Et0ICSXv8ivSua1QBDmSW1OTJ7uA_vYCLm0NzCA9xzbXkUdggndKu_fBOjoeAauYox3u-RzUd4W-GcxU280vuuSh5NjrJCYyn9emauKQ9h6TkLUhJJZC52-1jyb6FFYpa";
  const [text, setText] = useState("");
  const [img, setImg] = useState(true);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const chatid = useSelector((state) => state.auth.chatId);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const storage = getStorage();
  const [downloadObject, setDownloadObject] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showP, setShowP] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");
  const [photoTherapy, setPhotoTherapy] = useState({ url: "" });

  const onEmojiclick = (event) => {
    setText((prevInput) => prevInput + event.emoji);
    setShowP(false);
  };

  const handleSend = async () => {
    // if(photoTherapy.url.length>0){
    //  await onAddPhotoTherapyPress()
    //  console.log("alert")
    // }
    setImgSrc(null);
    if (!text && !downloadObject && !photoTherapy) {
      return;
    }

    if (downloadObject || photoTherapy) {
      try {
        await updateDoc(doc(db, "photoChats", chatid), {
          messages: arrayUnion({
            id: uuid(),
            text,
            senderId: loginUser._id,
            date: Timestamp.now(),
            file: downloadObject ? downloadObject : null,
            img: photoTherapy ? photoTherapy : null,
            senderName: loginUser.name,
            senderProfilePIC: loginUser.UserProfilePIC,
          }),
        });
      } catch (err) {
        console.log("error", err);
      }
    } else {
      await updateDoc(doc(db, "photoChats", chatid), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: loginUser._id,
          date: Timestamp.now(),
          senderName: loginUser.name,
          senderProfilePIC: loginUser.UserProfilePIC,
        }),
      });
    }
    await updateDoc(doc(db, "userPhotoChats", loginUser._id), {
      [chatid + ".lastMessage"]: {
        text,
        file: downloadObject,
        img: photoTherapy,
      },
      [chatid + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userPhotoChats", currentChatChangeUsr?.data?.uid), {
      [chatid + ".lastMessage"]: {
        text,
        file: downloadObject,
        img: photoTherapy,
      },
      [chatid + ".date"]: serverTimestamp(),
      [chatid + ".unreadCount"]: increment(1),
    });
    setShowImgCapture(true);
    setShowPhoto(false);
    setImgSrc(null);
    setText("");
    setImg(false);
    setDownloadObject(null);
    setPhotoTherapy(null);
    gettingDeviceToken(currentChatChangeUsr?.data?.uid);
  };
  const onAddDocPress = async (e) => {
    try {
      let resizedURL = await processMediaFile(e.target.files[0]);
      uploadFile(e.target.files[0], resizedURL);
      // console.log("resizedURL", resizedURL, e.target.files[0])
    } catch (err) {
      console.log(err);
    }
  };
  const onAddPhotoTherapyPress = async (e) => {
    console.log("trigger");
    try {
      // let resizedURL = await processMediaFile(imgSrc);
      //console.log(resizedURL,"resizedURL")
      uploadPhotoTherapyFile(imgSrc);
      // console.log("resizedURL", resizedURL, e.target.files[0])
    } catch (err) {
      console.log(err);
    }
  };
  const uploadFile = async (fileData, processURL) => {
    console.log("uploadfile inn N", fileData);
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
            });
          }
        );
      });
    }
  };
  //function for photoTherapy
  function generateHash(str) {
    let hash = 0;
    if (str) {
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
      }
      return hash;
    }
  }
  const generateNameFromBase64 = (base64String) => {
    const timestamp = new Date().getTime();
    const hash = generateHash(base64String);
    return `${timestamp}-${hash}.jpg`;
  };

  const uploadPhotoTherapyFile = async (fileData) => {
    // setProgress(10)
    // let image = fileData?.type.split("/");
    // const filename = fileData.lastModified + 1;
    const filename = await generateNameFromBase64(fileData);
    const storageRef = ref(storage, `chatImages/${filename}`);

    const message4 = imgSrc;
    // const uploadTask = await uploadString(storageRef,  message4, 'base64');

    if (imgSrc) {
      setProgress(2);
      const uploadTask = await uploadString(storageRef, message4, "data_url");
      console.log("Uploaded a data_url string!");
      console.log("Uploaded a data_url string!", uploadTask);
      getDownloadURL(uploadTask.ref).then((url) => {
        setPhotoTherapy({
          url,
        });
        setProgress(0);
      });
    }
    // else {
    //   const uploadTask = uploadBytesResumable(storageRef);

    //   return new Promise((resolve, reject) => {
    //     uploadTask.on(
    //       "state_changed",
    //       (snapshot) => {
    //         const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100); // update progress

    //         setProgress(percent);
    //       },
    //       (err) => {
    //         console.log(err);
    //         setProgress(0);
    //       },
    //       () => {
    //         setProgress(0);
    //         getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //           setPhotoTherapy({
    //             url,
    //           });
    //         });
    //       }
    //     );
    //   });
    // }
  };

  console.log(photoTherapy, "phototherapy");
  //Function to get Device Token from database
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
            body: `${text}`,
            // body: `hello world`,
          },
          notification: {
            title: `Someone Messaged you in Buser Institute`,
            body: `${text}`,
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
  //changes
  // photo, video and Audio part
  const [showPhoto, setShowPhoto] = useState(false);
  const [webSet, setWebSet] = useState(false);
  const webcamRef = useRef(null);
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  // const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [showCapture, setShowCapture] = useState(false);
  const [ImgPhotoTherapy, setImgPhotoTherapy] = useState(null);
  const [showAudio, setShowAudio] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  // image part
  const [showImgCapture, setShowImgCapture] = useState(true);
  const config = useMemo(() => ({ video: true }), []);
  const [imgSrc, setImgSrc] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const onCapture = (imageData) => {
    // read as webP
    console.log(imageData, "imageData");
    setImgSrc(imageData.webP);
    // read as file
    setImgFile(imageData.file);
    setImgPhotoTherapy(imageData.webP);
    // Unmount component to stop the video track and release camera
    setShowImgCapture(false);
  };
  const onError = useCallback((error) => {
    console.log(error);
  }, []);
  console.log(imgSrc, "imgSrc");
  // imgFile can be used as a file upload form submission
  const formData = new FormData();
  formData.append("file", imgFile);
  const checkWebcam = () => {
    navigator.getMedia =
      navigator.getUserMedia || // use the proper vendor prefix
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    navigator.getMedia(
      { video: true },
      function () {
        console.log("yes");
        // video.srcObject = stream;
        // video.play();
        setWebSet(true);
      },
      function () {
        setWebSet(false);
        console.log("no");
        // webcam is not available
      }
    );
  };
  console.log(showPhoto, "check");
  useEffect(() => {
    onAddPhotoTherapyPress();
  }, [imgSrc]);
  useEffect(() => {
    // console.log(webSet)
    checkWebcam();
  }, []);
  const handleOpen = () => {
    console.log("hii");
    setOpen(true);
    setShowAudio(false);
  };
  console.log(showPhoto, "photo");
  return (
    // <div className='input'>
    //     <input type="text" placeholder='Type something...'/>
    //     <div className='send'>
    //         <AttachFileIcon />
    //         <input type="file" style={{display : "none"}} id="file" />
    //         <label htmlFor="file" style={{paddingTop : "7px"}}>
    //             <ImageIcon />
    //         </label>
    //         <SendIcon />
    //     </div>
    // </div>
    <div className="chatbox_input">
      <TagFacesIcon
        style={{ cursor: "pointer", width: "30px", height: "30px", color: "#62c2e8" }}
        onClick={() =>
          setShowP((value) => {
            return !value;
          })
        }
      />
      {showP && (
        <div className={matches ? "emojiBox" : "mobileEmojiBox"}>
          <Picker width={"100%"} onEmojiClick={onEmojiclick} />
        </div>
      )}
      <input
        type="text"
        placeholder="Type a message..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input
        type="file"
        style={{ display: "none" }}
        id="icon-button-file"
        onChange={onAddDocPress}
      />
      <label htmlFor="icon-button-file">
        <AttachFileIcon
          style={{
            width: "30px",
            height: "30px",
            color: "#62c2e8",
            marginTop: "15px",
            cursor: "pointer",
          }}
        />
      </label>
      <Tooltip title={!webSet ? "Please connect webcam" : null}>
        <label>
          {webSet ? (
            <CameraAltIcon
              style={{
                width: "30px",
                height: "30px",
                color: "#62c2e8",
                marginTop: "15px",
                cursor: "pointer",
              }}
              onClick={() => {
                setShowPhoto(true);
              }}
              onChange={onAddPhotoTherapyPress}
              disabled={!webSet ? true : false}
            />
          ) : (
            <NoPhotographyIcon
              style={{ width: "30px", height: "30px", color: "#62c2e8", marginTop: "15px" }}
            />
          )}
        </label>
      </Tooltip>
      &nbsp;&nbsp;
      {progress > 0 ? (
        <CircularProgress color="inherit" style={{ color: "#62c2e8" }} />
      ) : (
        <SendIcon
          style={{ width: "30px", height: "30px", color: "#62c2e8", cursor: "pointer" }}
          onClick={handleSend}
        />
      )}
      <div style={{ zIndex: "10" }}>
        {showPhoto && (
          <>
            {showImgCapture && (
              <>
                <Card className="uploadPhoto" style={{ padding: "15px" }}>
                  <Grid container className="model-header">
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                      Photo Capture
                    </Typography>
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() => setShowPhoto(false)}
                      aria-label="close"
                      //  style={{ display: "flex", justifyContent: "end" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                  <ImageCapture
                    onCapture={onCapture}
                    onError={onError}
                    width={650}
                    height={200}
                    className="imageCapturePhoto"
                    //  style={{top:"80%"}}
                    userMediaConfig={config}
                  />
                </Card>
              </>
            )}
            {imgSrc && (
              <>
                <Card className="uploadPhoto" style={{ padding: "15px" }}>
                  <Grid container className="model-header">
                    <Typography id="modal-modal-title" variant="h4" component="h2">
                      Photo Capture
                    </Typography>
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() => {
                        setShowPhoto(false);
                        setPhotoTherapy({ url: "" });
                        setImgSrc(false);
                      }}
                      aria-label="close"
                      //  style={{ display: "flex", justifyContent: "end" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                  <div>
                    <div>Captured Image:</div>
                    <img src={imgSrc} alt="captured-img" />
                  </div>
                </Card>
              </>
            )}
          </>
        )}{" "}
      </div>
    </div>
  );
};
export default Input;
