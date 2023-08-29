import React, { useCallback, useEffect, useRef, useState, useMemo } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { v4 as uuid } from "uuid";
import axios from "axios";
import SoftSelect from "components/SoftSelect";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import VideoRecorder from "react-video-recorder";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import Modal from "@mui/material/Modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { RecordRTCPromisesHandler } from "recordrtc";
import { styled } from "@mui/material/styles";
import VMTSpeedDial from "../../../../common/VMTSpeedDial";
// import { collection, getDocs, getDoc,doc, addDoc,updateDoc,arrayUnion,  deleteDoc, setDoc, query, where } from "firebase/firestore";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
  increment,
  getDoc,
  collection,
  setDoc,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  getDocs,
  limit,
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
import Fade from "@mui/material/Fade";
import {
  Avatar,
  Box,
  Button,
  InputBase,
  useMediaQuery,
  Grid,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { CHECK_VIDEO_THREAPY_BALANCE } from "store/actions/actions";
import { deductService } from "store/actions/actions";
import { errorToast } from "components/Toaster/toast";
import { useNavigate } from "react-router-dom";
import { url, axiosInstance } from "services/AxiosInstance";
import { currentChatChangeUser } from "store/actions/actions";
import { SET_RECORDING_MODEL } from "store/actions/actions";
import { SET_RECORDING_CHAT_ID } from "store/actions/actions";
import { SET_RECORDING_USER_DETAILS } from "store/actions/actions";
import { data } from "jquery";
import PropTypes from "prop-types";
import { SET_VMT_ACTICE_SESSION } from "store/actions/actions";
import QuizForm from "components/QuizForm";

const Input = ({ sessionActive, setSessionActive }) => {
  const firebaseServerKey =
    "AAAAXk9QFdQ:APA91bHlTc8Et0ICSXv8ivSua1QBDmSW1OTJ7uA_vYCLm0NzCA9xzbXkUdggndKu_fBOjoeAauYox3u-RzUd4W-GcxU280vuuSh5NjrJCYyn9emauKQ9h6TkLUhJJZC52-1jyb6FFYpa";
  const Navigate = useNavigate();
  const [text, setText] = useState("");
  const [img, setImg] = useState(true);
  const [webSet, setWebSet] = useState(false);
  let currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const chatid = useSelector((state) => state.auth.chatId);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const checkVideoTherapyBalance = useSelector((state) => state.auth.videoTherapyBalance);
  const sessionDeductData = useSelector((state) => state.auth.deductServiceData);
  const token = useSelector((state) => state.auth.auth.idToken);
  const storage = getStorage();
  const [downloadObject, setDownloadObject] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showP, setShowP] = useState(false);
  const [preview, setPreview] = useState([]);
  const [available, setAvailable] = useState(true);
  const [closeSessionEndModal, setCloseSessionEndModal] = useState(false);
  // const [multiplePreview, setMultiplePreview] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [base55, setbase55] = useState("");
  const [creditScore, setCreditScore] = useState(false);
  const [endSessionState, setEndSessionState] = useState(false);
  const [nextUserTYpe, setNextUserType] = useState("");
  const [VMTName, setVMTName] = useState("");
  const [recommendationCheck, setRecommendationCheck] = useState(false);
  const [category, setCategory] = useState("");
  const [informConsetData, setinformConsetData] = useState("");
  // const [sessionActive, setSessionActive] = useState(currentChatChangeUsr?.currentSessionId);
  const [videoTherapy, setvideoTherapy] = useState({ url: "" });
  const [avatarPreview, setAvatarPreview] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const matches = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    dispatch(CHECK_VIDEO_THREAPY_BALANCE({ token, userId: loginUser._id }));
  }, []);
  useEffect(() => {
    checkWebcam();
  }, []);

  const fetchPatientIC = async () => {
    try {
      const res = await axiosInstance.get(
        `informConsent/patientLastInformedConsentRecord/${currentChatChangeUsr.data.uid}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setinformConsetData(res?.data?.data?.result[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImage = (e) => {
    setImage(e.currentTarget.files[0]);
    setError(false);

    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
  };

  useEffect(() => {
    if (sessionActive) {
      getSessionData(sessionActive);
    }
  }, [sessionActive]);
  const getSessionData = async (sessionId) => {
    try {
      const combinedId =
        loginUser?._id > currentChatChangeUsr.data.uid
          ? loginUser?._id + currentChatChangeUsr.data.uid
          : currentChatChangeUsr.data.uid + loginUser?._id;
      const response = await axios.get(`${url}/api/videoMsgSession/getSessionData/${sessionId}`, {
        headers: {
          authorization: token,
        },
      });
      const data = response.data.data;
      let sessionExpired = checkEndTimeExpiry(data.expiry_time);
      if (sessionExpired) {
        await axios.put(
          `${url}/api/videoMsgSession/updateSession/${sessionId}`,
          {
            IsExpired: true,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        // updateDoc(doc(db, "videoTherapySession", sessionId), {
        //   IsExpired: true,
        // });
        updateDoc(doc(db, "userVideoChats", loginUser._id, "threads", combinedId), {
          currentSessionId: null,
        });
        updateDoc(doc(db, "userVideoChats", currentChatChangeUsr.data.uid, "threads", combinedId), {
          currentSessionId: null,
        });
        dispatch(currentChatChangeUser({ data, curUserID: loginUser._id }));
      } else if (data.practitionerId === loginUser._id) {
        setEndSessionState(sessionId);
      } else if (data.practitionerId !== loginUser._id) {
        setEndSessionState(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(SET_VMT_ACTICE_SESSION(""));
    let data;
    let Id =
      loginUser?._id > currentChatChangeUsr.data.uid
        ? loginUser?._id + currentChatChangeUsr.data.uid
        : currentChatChangeUsr.data.uid + loginUser?._id;
    const unsub = onSnapshot(doc(db, "userVideoChats", loginUser?._id, "threads", Id), (doc) => {
      data = doc.data();
      setSessionActive(data?.currentSessionId);
      dispatch(SET_VMT_ACTICE_SESSION(data?.currentSessionId));
    });

    return () => unsub();
  }, [currentChatChangeUsr]);
  useEffect(() => {
    let data;
    const unsub = onSnapshot(doc(db, "users", currentChatChangeUsr.data.uid), (doc) => {
      data = doc.data();
      setAvailable(data?.available);
      setNextUserType(data?.userType);
    });
    return () => unsub();
  }, [currentChatChangeUsr]);

  const checkEndTimeExpiry = (expiryTime) => {
    var currentTime = new Date();

    // Create a Date object for the end time
    var endTime = new Date(expiryTime);

    // Add 24 hours to the end time
    var endTimePlus24Hours = new Date(endTime.getTime());

    // Compare the current time with the end time plus 24 hours
    if (currentTime > endTimePlus24Hours) {
      return true;
      // return true;
    } else {
      return false;
      // return false;
    }
  };

  const handleCloseVMTModal = () => {
    setImage("");
    setAvatarPreview("");
    setCloseSessionEndModal(false);
    setError(false);
  };

  const handleEndSession = async (quizData) => {
    try {
      if (!image) {
        setError(true);
        return;
      }
      const formData = new FormData();
      formData.append("IsExpired", true);
      formData.append("expiry_time", new Date());
      formData.append("VMTName", VMTName);
      formData.append("quiz", JSON.stringify(quizData.formData));
      formData.append("recommendation", recommendationCheck);

      const formDataWithoutQuiz = new FormData();
      formDataWithoutQuiz.append("IsExpired", true);
      formDataWithoutQuiz.append("expiry_time", new Date());
      formDataWithoutQuiz.append("VMTName", VMTName);
      formDataWithoutQuiz.append("notForSale", true);

      handleCloseVMTModal();
      const combinedId =
        loginUser?._id > currentChatChangeUsr.data.uid
          ? loginUser?._id + currentChatChangeUsr.data.uid
          : currentChatChangeUsr.data.uid + loginUser?._id;
      await axios.put(
        `${url}/api/videoMsgSession/updateSession/${endSessionState}`,
        quizData ? formData : formDataWithoutQuiz,
        {
          headers: {
            authorization: token,
          },
        }
      );
      let id = uuid();
      const docRef = doc(db, "videoChats", combinedId, "messages", id);
      await setDoc(docRef, {
        type: "session_data",
        sessionId: endSessionState,
        endTime: new Date(),
        date: new Date(),
      });
      await updateDoc(doc(db, "userVideoChats", loginUser._id, "threads", combinedId), {
        currentSessionId: null,
        startTime: null,
        endTime: null,
      });
      await updateDoc(
        doc(db, "userVideoChats", currentChatChangeUsr.data.uid, "threads", combinedId),
        {
          currentSessionId: null,
          startTime: null,
          endTime: null,
        }
      );
      let data = { ...currentChatChangeUsr, currentSessionId: null };
      currentChatChangeUsr.currentSessionId = null;
      // dispatch(currentChatChangeUser({ data, curUserID: loginUser._id }));
      setSessionActive(false);
    } catch (err) {
      console.log(err);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 20,
    overflow: "auto",
    p: 2,
  };
  const handleNewSession = async () => {
    try {
      setCreditScore(false);
      // await dispatch(deductService({ token, userId: loginUser._id }));
      // if (sessionDeductData.status === 200) {
      const combinedId =
        loginUser?._id > currentChatChangeUsr.data.uid
          ? loginUser?._id + currentChatChangeUsr.data.uid
          : currentChatChangeUsr.data.uid + loginUser?._id;
      const nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 10);
      let data = {
        serviceId: checkVideoTherapyBalance.serviceId,
        clientId: loginUser._id,
        clientName: loginUser.firstName,
        practitionerId: currentChatChangeUsr.data.uid,
        practitionerName: currentChatChangeUsr.data.displayName,
        startTime: new Date(),
        expiry_time: nextDay,
        IsExpired: false,
      };
      let response = await axios.post(`${url}/api/videoMsgSession/create_video_msg_session`, data, {
        headers: {
          authorization: token,
        },
      });
      let id = uuid();
      const docRef = doc(db, "videoChats", combinedId, "messages", id);
      await setDoc(docRef, {
        type: "session_data",
        sessionId: response.data.data._id,
        startTime: new Date(),
        date: new Date(),
      });
      await updateDoc(doc(db, "userVideoChats", loginUser._id, "threads", combinedId), {
        currentSessionId: response.data.data._id,
        startTime: new Date(),
        endTime: nextDay,
      });
      await updateDoc(
        doc(db, "userVideoChats", currentChatChangeUsr.data.uid, "threads", combinedId),
        {
          currentSessionId: response.data.data._id,
          startTime: new Date(),
          endTime: nextDay,
        }
      );
      await dispatch(CHECK_VIDEO_THREAPY_BALANCE({ token, userId: loginUser._id }));
      setSessionActive(response.data.data._id);
    } catch (err) {
      setSessionActive(false);
      console.log(err);
    }
  };

  // Convert VideoUrl Blob to Base64
  var base64String;
  const getBase64 = (blob) => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      base64String = reader.result;
      setbase55(reader.result);
      onAddVideoTherapyPress(base64String);
    };
  };

  // Screen recording Start function
  const handleScreenRecording = async () => {
    const mediaDevices = navigator.mediaDevices;
    const stream = await mediaDevices.getDisplayMedia({
      video: true,
      audio: false,
    });

    const recorder = new RecordRTCPromisesHandler(stream, { type: "video" });

    stream.getVideoTracks()[0].addEventListener("ended", async () => {
      await recorder.stopRecording();
      const blob = await recorder.getBlob();
      stream.stop();
      setFileData([blob]);
      setPreview([
        {
          type: blob.type,
          name: `screenRecord_${new Date()}`,
          url: URL.createObjectURL(blob),
        },
      ]);
    });
    await recorder.startRecording();
    dispatch(SET_RECORDING_MODEL(false));
  };

  // Video name Generator
  function generateHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }
  const generateNameFromBase64 = (base64String) => {
    const timestamp = new Date().getTime();
    const hash = generateHash(base64String);
    return `${timestamp}-${hash}.mp4`;
  };

  const onEmojiclick = (event) => {
    setText((prevInput) => prevInput + event.emoji);
    setShowP(false);
  };

  const handleSend = async (downObject) => {
    if (!text && !downObject) {
      return;
    }
    if (downloadObject || downObject) {
      try {
        if (!downObject.name) {
          downObject.name = `screenRecord_${new Date()}`;
        }
        let id = uuid();
        const docRef = doc(db, "videoChats", chatid, "messages", id);
        await setDoc(docRef, {
          id,
          text,
          senderId: loginUser._id,
          date: Timestamp.now(),
          file: downObject ? downObject : downloadObject,
          senderName: loginUser.firstName,
          // senderProfilePIC: loginUser.UserProfilePIC,
          sessionId: sessionActive,
        });
      } catch (err) {
        console.log("error", err);
      }
    } else {
      let id = uuid();
      const docRef = doc(db, "videoChats", chatid, "messages", id);
      await setDoc(docRef, {
        id,
        text,
        senderId: loginUser._id,
        date: Timestamp.now(),
        senderName: loginUser.firstName,
        // senderProfilePIC: loginUser.UserProfilePIC,
        sessionId: sessionActive,
      });
      // await updateDoc(doc(db, "videoChats", chatid), {
      //   messages: arrayUnion({
      //     id: uuid(),
      //     text,
      //     senderId: loginUser._id,
      //     date: Timestamp.now(),
      //     senderName: loginUser.name,
      //     senderProfilePIC: loginUser.UserProfilePIC,
      //     sessionId: sessionActive,
      //   }),
      // });
    }

    await updateDoc(doc(db, "userVideoChats", loginUser._id, "threads", chatid), {
      lastMessage: {
        text,
        file: downObject ? downObject : downloadObject,
        // videorecord: videoTherapy,
      },
      date: serverTimestamp(),
    });

    await updateDoc(doc(db, "userVideoChats", currentChatChangeUsr?.data?.uid, "threads", chatid), {
      lastMessage: {
        text,
        file: downObject ? downObject : downloadObject,
        // videorecord: videoTherapy,
      },
      date: serverTimestamp(),
      unreadCount: increment(1),
    });

    setText("");
    setImg(false);
    setvideoTherapy(null);
    setDownloadObject(null);
    gettingDeviceToken(currentChatChangeUsr?.data?.uid);
  };

  const onAddDocPress = async (e) => {
    try {
      const file = e.target.files[0];
      if (e?.target?.files?.length === 1) {
        setFileData([file]);
        setPreview([
          {
            type: file.type,
            name: file.name,
            url: URL.createObjectURL(file),
          },
        ]);
      } else {
        const allFiles = e.target.files;
        const fileArray = [];
        const multipleFiles = [];
        for (let i = 0; i < allFiles.length; i++) {
          const file = allFiles[i];
          const fileObject = {
            name: file.name,
            type: file.type,
            url: URL.createObjectURL(file),
          };
          fileArray.push(fileObject);
          multipleFiles.push(file);
        }

        setFileData(multipleFiles);
        setPreview(fileArray);
      }

      // let resizedURL = await processMediaFile(e.target.files[0]);
      // uploadFile(e.target.files[0], resizedURL);
      // console.log("resizedURL", resizedURL, e.target.files[0])
    } catch (err) {
      console.log(err);
    }
  };

  const uploadVideoTherapyFile = async (fileData) => {
    // let image = fileData?.type.split("/");
    // const filename = fileData.lastModified + 1;
    const filename = await generateNameFromBase64(fileData);
    const storageRef = ref(storage, `chatImages/${filename}`);
    const message4 = fileData;
    // const uploadTask = await uploadString(storageRef,  message4, 'base64');
    if (fileData) {
      setProgress(2);
      const uploadTask = await uploadString(storageRef, fileData, "data_url");
      getDownloadURL(uploadTask.ref).then(async (url) => {
        try {
          let id = uuid();
          const docRef = doc(db, "videoChats", chatid, "messages", id);
          await setDoc(docRef, {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: loginUser._id,
              date: Timestamp.now(),
              file: downloadObject ? downloadObject : null,
              videorecord: url,
              type: "liveVideo/mp4",
              senderName: loginUser.firstName,
              senderProfilePIC: loginUser.UserProfilePIC,
              sessionStartTime: currentChatChangeUsr.data.startTime,
              sessionEndTime: currentChatChangeUser.data.endTime,
            }),
          });
          // updateDoc(doc(db, "videoChats", chatid), {
          //   messages: arrayUnion({
          //     id: uuid(),
          //     text,
          //     senderId: loginUser._id,
          //     date: Timestamp.now(),
          //     file: downloadObject ? downloadObject : null,
          //     videorecord: url,
          //     type: "liveVideo/mp4",
          //     senderName: loginUser.name,
          //     senderProfilePIC: loginUser.UserProfilePIC,
          //   }),
          // });
        } catch (err) {
          console.log("error", err);
        }
        setvideoTherapy({
          url,
        });
        setProgress(0);
      });
      // } else {
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
      //           setvideoTherapy({
      //             url,
      //           });
      //         });
      //       }
      //     );
      //   });
    }
  };
  const onAddVideoTherapyPress = async (base64) => {
    try {
      uploadVideoTherapyFile(base64);
    } catch (err) {
      console.log(err);
    }
  };

  const uploadFile = async (fileData, processURL) => {
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
          text,
        });
        handleSend({
          name: fileData.name,
          size: fileData.size,
          type: fileData.type,
          source: url,
          uri: url,
          url,
          mime: fileData.type,
          text,
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
              handleSend({
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

  // check Webcame is on or Off
  const checkWebcam = () => {
    if (navigator?.mediaDevices && navigator?.mediaDevices?.getUserMedia) {
      navigator.getMedia =
        navigator.getUserMedia || // use the proper vendor prefix
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      navigator?.getMedia(
        { video: true },
        function () {
          setWebSet(true);
        },
        function () {
          setWebSet(false);
        }
      );

      const constraints = {
        audio: true,
        video: true,
      };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          setWebSet(true);
        })
        .catch(function (error) {
          setWebSet(false);
        });
    } else {
      console.error("getUserMedia is not supported in this browser.");
    }
  };

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
    <>
      {/* <video src={vvx} controls autoPlay loop /> */}
      {preview.length > 0 && (
        <div className="preview_section">
          <AiOutlineCloseCircle onClick={() => setPreview([])} size={25} className="close_icon" />
          <div className="preview_image_wrapper">
            {preview.length > 0 &&
              preview.map((prev, key) => (
                <>
                  {prev?.type?.includes("image") ? (
                    <img
                      src={prev.url}
                      style={{
                        height: 200,
                        width: 200,
                        objectFit: "contain",
                        border: "1px dashed lightgray",
                        borderRadius: 8,
                      }}
                    />
                  ) : prev?.type?.includes("video") ? (
                    <video
                      controls
                      src={prev.url}
                      style={{
                        height: 200,
                        width: 200,
                      }}
                    />
                  ) : prev?.type?.includes("audio") ? (
                    <audio
                      controls
                      src={prev.url}
                      style={{
                        width: 300,
                      }}
                    />
                  ) : prev?.type ? (
                    <>
                      <img
                        src="https://www.shareicon.net/download/2017/04/20/884681_document_512x512.png"
                        width={30}
                        height={30}
                      />
                      <span>{prev?.name}</span>
                    </>
                  ) : null}
                </>
              ))}
          </div>
        </div>
      )}
      {sessionActive ? (
        <>
          {endSessionState && (
            <div className="end_session_button_box">
              <Button
                className="end_conversation_button"
                //  onClick={handleEndSession}
                onClick={() => {
                  setCloseSessionEndModal(true);
                  fetchPatientIC();
                }}
              >
                End Session
              </Button>
            </div>
          )}
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
              onKeyDownCapture={async (e) => {
                if (e.keyCode === 13) {
                  if (preview.length > 0) {
                    if (preview.length === 1) {
                      let resizedURL = await processMediaFile(fileData[0]);
                      uploadFile(fileData[0], resizedURL);
                      setPreview([]);
                    } else {
                      for (let i = 0; i < preview.length; i++) {
                        let resizedURL = await processMediaFile(fileData[i]);
                        uploadFile(fileData[i], resizedURL);
                      }
                      setPreview([]);
                    }
                  } else {
                    handleSend();
                  }
                }
              }}
              value={text}
            />
            <input
              type="file"
              style={{ display: "none" }}
              id="icon-button-file"
              onChange={onAddDocPress}
              multiple
            />
            <Tooltip
              title={
                checkVideoTherapyBalance.Video_Messaging_and_Photo_Therapy_Balance <= 0 &&
                loginUser.userType === "client"
                  ? "Please purchase video program package"
                  : null
              }
            >
              <label htmlFor={"icon-button-file"}>
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
            </Tooltip>
            <Tooltip title={!webSet ? "Please connect webcam" : null}>
              <div>
                <VMTSpeedDial
                  tooltipText={
                    checkVideoTherapyBalance.Video_Messaging_and_Photo_Therapy_Balance <= 0 &&
                    loginUser.userType === "client"
                      ? "Please purchase video program package"
                      : !webSet
                      ? "Please connect webcam"
                      : null
                  }
                  condition={
                    loginUser.userType === "client" &&
                    checkVideoTherapyBalance.Video_Messaging_and_Photo_Therapy_Balance <= 0
                  }
                  chatid={chatid}
                  currentChatChangeUsr={currentChatChangeUsr}
                />
              </div>
              {/* <VideoCameraBackIcon
                  style={{
                    width: "30px",
                    height: "30px",
                    color: "#62c2e8",
                    marginTop: "15px",
                    cursor: "pointer",
                  }} */}
              {/* onChange={onAddVideoTherapyPress} */}
              {/* onClick={() => {
                    if (
                      !(
                        loginUser.userType === "client" &&
                        checkVideoTherapyBalance.Video_Messaging_and_Photo_Therapy_Balance <= 0
                      ) &&
                      webSet !== false
                    ) {
                      dispatch(SET_RECORDING_MODEL(true));
                      dispatch(SET_RECORDING_CHAT_ID(chatid));
                      dispatch(SET_RECORDING_USER_DETAILS(currentChatChangeUsr));
                    }
                  }} */}
              {/* /> */}
            </Tooltip>
            &nbsp;&nbsp;
            {progress > 0 ? (
              <CircularProgress color="inherit" />
            ) : (
              <IconButton
                onClick={async () => {
                  if (preview.length > 0) {
                    if (preview.length === 1) {
                      let resizedURL = await processMediaFile(fileData[0]);
                      uploadFile(fileData[0], resizedURL);
                      setPreview([]);
                    } else {
                      for (let i = 0; i < preview.length; i++) {
                        let resizedURL = await processMediaFile(fileData[i]);
                        uploadFile(fileData[i], resizedURL);
                      }
                      setPreview([]);
                    }
                  } else {
                    handleSend();
                  }
                }}
              >
                <SendIcon
                  style={{ width: "30px", height: "30px", color: "#62c2e8", cursor: "pointer" }}
                />
              </IconButton>
            )}
          </div>
        </>
      ) : (
        <>
          {creditScore ? (
            <div className="start_session_error_box">
              <Typography className="start_session_error_message">
                You Don&apos;t Have Enough Credit for Videos Therapy Session{" "}
                <span onClick={() => Navigate("/services")} className="service_link_span">
                  Buy Plan
                </span>
              </Typography>
            </div>
          ) : !available ? (
            nextUserTYpe === "doctor" && (
              <div className="start_session_error_box">
                <Typography className="start_session_error_message">
                  Doctor is Not available
                </Typography>
              </div>
            )
          ) : null}

          {nextUserTYpe === "doctor" ? (
            <div className="chatbox_input">
              <Button
                className="start_conversation_button"
                onClick={() => {
                  checkVideoTherapyBalance.Video_Messaging_and_Photo_Therapy_Balance <= 0
                    ? setCreditScore(true)
                    : available
                    ? handleNewSession()
                    : setAvailable(false);
                }}
              >
                Start Session
              </Button>
            </div>
          ) : (
            <div className="chatbox_input">Client hasn&apos;t started session yet</div>
          )}
        </>
      )}
      <Dialog fullWidth maxWidth={"md"} open={closeSessionEndModal}>
        <DialogTitle>End Video Message Session</DialogTitle>
        <DialogContent>
          <Box>
            <Typography variant="caption">VMT Name</Typography>
            <SoftInput
              type="text"
              name="VMTName"
              value={VMTName}
              onChange={(e) => setVMTName(e.target.value)}
            />
          </Box>
          {informConsetData &&
          informConsetData?.commitment_initial2 &&
          informConsetData?.commitment_initial2 !== "" ? (
            <>
              <Box display={"flex"} alignItems={"center"} my={1}>
                <Checkbox
                  value={recommendationCheck}
                  onChange={(e) => setRecommendationCheck(e.target.checked)}
                />
                <Typography variant="body2" color="text.secondary">
                  Recommeded For Sale
                </Typography>
              </Box>
              <SoftSelect
                placeholder="Select session category"
                options={[
                  { value: "Practitioner - Client", label: "Practitioner - Client" },
                  { value: "Practitioner - Practitioner", label: "Practitioner - Practitioner" },
                  {
                    value: "ED Practitioner - Practitioner",
                    label: "ED Practitioner - Practitioner",
                  },
                ]}
                onChnage={(e) => setCategory(e.target.value)}
              />
              <Box display={"flex"} alignItems={"center"} flexDirection={"column"} gap={"5px"}>
                <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
                  <Typography variant="caption">Upload Sequence</Typography>
                  {avatarPreview && (
                    <img src={avatarPreview} alt="Preview" className="preview-image" />
                  )}
                  <input type="file" onChange={(e) => handleImage(e)} className="file-input" />
                </Box>
                {error && <div className="error-message">Image is required.</div>}
              </Box>

              <QuizForm onSubmit={handleEndSession} onClose={() => handleCloseVMTModal()} />
            </>
          ) : (
            <Box mt={2} display={"flex"} justifyContent={"flex-end"} alignItems={"center"} gap={1}>
              <SoftButton onClick={() => handleCloseVMTModal()}>Close</SoftButton>
              <SoftButton
                color="dark"
                variant="gradient"
                onClick={() => {
                  handleEndSession();
                }}
              >
                Complete
              </SoftButton>
            </Box>
          )}
        </DialogContent>
        {/* <DialogActions>
          <SoftButton onClick={() => setCloseSessionEndModal(false)}>Close</SoftButton>
        </DialogActions> */}
      </Dialog>
    </>
  );
};

Input.propTypes = {
  setSessionActive: PropTypes.func.isRequired,
  sessionActive: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ).isRequired,
};
export default Input;
