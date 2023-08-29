import React, { useEffect, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FileViewer from "react-file-viewer";
// import { collection, getDocs, getDoc,doc, addDoc,updateDoc,arrayUnion,  deleteDoc, setDoc, query, where } from "firebase/firestore";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
  increment,
  getDoc,
  setDoc,
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
import PropTypes from "prop-types";
import { Avatar, Box, Button, InputBase, useMediaQuery, IconButton } from "@mui/material";

const Input = ({ messages }) => {
  const firebaseServerKey =
    "AAAAXk9QFdQ:APA91bHlTc8Et0ICSXv8ivSua1QBDmSW1OTJ7uA_vYCLm0NzCA9xzbXkUdggndKu_fBOjoeAauYox3u-RzUd4W-GcxU280vuuSh5NjrJCYyn9emauKQ9h6TkLUhJJZC52-1jyb6FFYpa";
  const [text, setText] = useState("");
  const [img, setImg] = useState(true);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const chatid = useSelector((state) => state.auth.chatId);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const storage = getStorage();
  const [downloadObject, setDownloadObject] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showP, setShowP] = useState(false);
  const matches = useMediaQuery("(min-width:600px)");

  const onEmojiclick = (event) => {
    setText((prevInput) => prevInput + event.emoji);
    setShowP(false);
  };

  const handleSend = async (downObject) => {
    if (!text && !downObject) {
      return;
    }
    const combinedId = `64781fcf297c8b644f232891${loginUser._id}`;
    const res = await getDoc(doc(db, "adminChats", combinedId));
    if (!res.exists() && messages.length === 0) {
      let id = uuid();
      const docRef = doc(db, "adminChats", combinedId, "messages", id);
      await setDoc(docRef, {
        id,
        text,
        file: downObject ? downObject : downloadObject,
        senderId: loginUser._id,
        date: Timestamp.now(),
        senderName: loginUser.name,
        senderProfilePIC: loginUser.UserProfilePIC,
      });
      // await setDoc(doc(db, "adminChats", combinedId), {
      //   messages: [
      //     {
      //       id: uuid(),
      //       text,
      //       file: downObject ? downObject : downloadObject,
      //       senderId: loginUser._id,
      //       date: Timestamp.now(),
      //       senderName: loginUser.name,
      //       senderProfilePIC: loginUser.UserProfilePIC,
      //     },
      //   ],
      // });
      const res = await getDoc(doc(db, "userAdminChats", "64781fcf297c8b644f232891"));
      if (!res.exists()) {
        await setDoc(doc(db, "userAdminChats", "64781fcf297c8b644f232891"), {
          [combinedId]: {
            userInfo: {
              uid: loginUser._id,
              displayName: loginUser.firstName,
              photoURL: loginUser.photoURL ? item.photoURL : "",
            },
            date: serverTimestamp(),
            unreadCount: 1,
            isFriend: true,
          },
        });
      } else {
        await updateDoc(doc(db, "userAdminChats", "64781fcf297c8b644f232891"), {
          [combinedId + ".userInfo"]: {
            uid: loginUser._id,
            displayName: loginUser.firstName,
            photoURL: loginUser.photoURL ? item.photoURL : "",
          },
          [combinedId + ".date"]: serverTimestamp(),
          [combinedId + ".unreadCount"]: 1,
          [combinedId + ".isFriend"]: true,
        });
      }
      // await updateDoc(doc(db, "adminChats", combinedId), {
      //   messages: arrayUnion([
      //     {
      //       id: uuid(),
      //       text,
      //       senderId: loginUser._id,
      //       date: Timestamp.now(),
      //       senderName: loginUser.name,
      //       senderProfilePIC: loginUser.UserProfilePIC,
      //     },
      //   ]),
      // });
    } else {
      let id = uuid();
      const docRef = doc(db, "adminChats", combinedId, "messages", id);
      await setDoc(docRef, {
        id,
        text,
        file: downObject ? downObject : downloadObject,
        senderId: loginUser._id,
        date: Timestamp.now(),
        senderName: loginUser.name,
        senderProfilePIC: loginUser.UserProfilePIC,
      });
      // await updateDoc(doc(db, "adminChats", combinedId), {
      //   messages: arrayUnion({
      //     id: uuid(),
      //     text,
      //     file: downObject ? downObject : downloadObject,
      //     senderId: loginUser._id,
      //     date: Timestamp.now(),
      //     senderName: loginUser.name,
      //     senderProfilePIC: loginUser.UserProfilePIC,
      //   }),
      // });

      await updateDoc(doc(db, "userAdminChats", "64781fcf297c8b644f232891"), {
        [combinedId + ".lastMessage"]: {
          text,
          file: downObject ? downObject : downloadObject,
        },
        [combinedId + ".senderId"]: loginUser._id,
        [combinedId + ".isFriend"]: true,
        [combinedId + ".date"]: serverTimestamp(),
        [combinedId + ".unreadCount"]: increment(1),
      });
    }
    // await updateDoc(doc(db, "userAdminChats", "64781fcf297c8b644f232891"), {
    //   [combinedId + ".userInfo"]: {
    //     uid: loginUser._id,
    //     displayName: loginUser.name,
    //     photoURL: loginUser.photoURL ? item.photoURL : "",
    //   },
    //   [combinedId + ".lastMessage"]: {
    //     text,
    //     // file: downloadObject,
    //   },
    //   [combinedId + ".isFriend"]: true,
    //   [combinedId + ".date"]: serverTimestamp(),
    //   [combinedId + ".unreadCount"]: increment(1),
    // });

    setText("");
    setImg(false);
    setDownloadObject(null);
    gettingDeviceToken(currentChatChangeUsr?.data?.uid);
  };

  const onAddDocPress = async (e) => {
    try {
      const file = e.target.files[0];
      setFileData(file);
      setPreview({
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

  console.log("preview", preview);

  return (
    <>
      {preview && (
        <div className="preview_section">
          <AiOutlineCloseCircle onClick={() => setPreview(null)} size={25} className="close_icon" />
          {preview?.type?.includes("image") ? (
            <img
              src={preview.url}
              style={{
                height: 200,
                width: 200,
                objectFit: "contain",
                border: "1px dashed lightgray",
                borderRadius: 8,
              }}
            />
          ) : preview?.type?.includes("video") ? (
            <video
              controls
              src={preview.url}
              style={{
                height: 200,
                width: 200,
              }}
            />
          ) : preview?.type?.includes("audio") ? (
            <audio
              controls
              src={preview.url}
              style={{
                width: 300,
              }}
            />
          ) : preview?.type ? (
            <>
              <img
                src="https://www.shareicon.net/download/2017/04/20/884681_document_512x512.png"
                width={30}
                height={30}
              />
              <span>{preview?.name}</span>
            </>
          ) : null}
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
          onKeyDownCapture={(e) => {
            if (e.keyCode === 13) {
              handleSend();
            }
          }}
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
              marginTop: "20px",
              cursor: "pointer",
            }}
          />
        </label>
        &nbsp;&nbsp;
        {progress > 0 ? (
          <CircularProgress size={25} color="inherit" />
        ) : (
          <SendIcon
            style={{ width: "30px", height: "30px", color: "#62c2e8", cursor: "pointer" }}
            onClick={async () => {
              if (preview) {
                let resizedURL = await processMediaFile(fileData);
                uploadFile(fileData, resizedURL);
                setPreview(null);
              } else {
                handleSend();
              }
            }}
          />
        )}
      </div>
    </>
  );
};

export default Input;

Input.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
