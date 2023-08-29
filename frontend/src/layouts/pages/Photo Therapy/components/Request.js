import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { db } from "../../../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { currentChatChangeUser } from "store/actions/actions";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import moment from "moment";
import SearchReq from "./SearchReq";

const Request = () => {
  // const [chatId, setChatId] = useState(null)
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const dispatch = useDispatch();
  const chatid = useSelector((state) => state.auth.chatId);

  // console.log("currentChatChangeUsr", currentChatChangeUsr)
  // console.log("currentChatChangeUsr?.data?.uid",loginUser._id, currentChatChangeUsr?.data?.uid)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "photoRequest", loginUser._id), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    getChats();
  }, []);
  console.log("length", chats && Object.entries(chats).length);

  const acceptRequest = async (item) => {
    const combinedId =
      loginUser?._id > item[1].userInfo.uid
        ? loginUser?._id + item[1].userInfo.uid
        : item[1].userInfo.uid + loginUser?._id;

    console.log("loginUser?._id", item);

    try {
      const res = await getDoc(doc(db, "photoChats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "photoChats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userPhotoChats", loginUser?._id), {
            [combinedId + ".userInfo"]: {
              uid: item[1].requestSenderID,
              displayName: item[1].userInfo.displayName,
              photoURL: item[1].userInfo.photoURL ? item[1].userInfo.photoURL  : "",
            },
            [combinedId + ".date"]: serverTimestamp(),
            [combinedId + ".unreadCount"]: 0,
            [combinedId + ".isFriend"]: true,
            [combinedId + ".requestSenderID"]: item[1].requestSenderID
          });

        await updateDoc(doc(db, "userPhotoChats", item[1].userInfo.uid), {
          [combinedId + ".date"]: serverTimestamp(),
          [combinedId + ".unreadCount"]: increment(1),
          [combinedId + ".isFriend"]: true,
        });

        const chatRef = doc(db, "photoRequest", loginUser?._id);
        await updateDoc(chatRef, {
          [combinedId]: deleteField(),
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const rejectRequest = async (item) => {
    const combinedId =
      loginUser?._id > item[1].userInfo.uid
        ? loginUser?._id + item[1].userInfo.uid
        : item[1].userInfo.uid + loginUser?._id;

    try {
      const chatRef = doc(db, "userPhotoChats", item[1].userInfo.uid);
      await updateDoc(chatRef, {
        [combinedId]: deleteField(),
      });

      const chatRef2 = doc(db, "photoRequest", loginUser?._id);
      await updateDoc(chatRef2, {
        [combinedId]: deleteField(),
      });

      // await updateDoc(doc(db, "userChats", loginUser?._id), {
      //   [combinedId + ".date"]: serverTimestamp(),
      //   [combinedId + ".unreadCount"]: increment(1),
      //   [combinedId + ".status"]: "Rejected",
      // });

      // await updateDoc(doc(db, "userChats", currentChatChangeUsr?.data?.uid), {
      //   [combinedId + ".date"]: serverTimestamp(),
      //   [combinedId + ".status"]: "Rejected",
      // });
    } catch (err) {
      console.log("eroroorororo", err);
    }
  };

  console.log("length", chats && Object.entries(chats).length);

  return (
    <>
      <SearchReq />
      <div className="chatlist">
        {chats &&
          Object.entries(chats)
            ?.sort((a, b) => b[1].date - a[1].date)
            .map((chat) => (
              <div
                className={`block ${chat[1].userInfo?.uid === selectedChat ? "active" : ""}`}
                key={chat[0]}
                // onClick={()=> setChatId(chats[0].id)}
                // onClick={() => handleSelect(chat[1].userInfo)}
              >
                {/* {chat[1].isFriend && chat[1].requestSenderID === loginUser._id ? "request sent" : "req receive"} */}

                {/* {console.log("chattts", chat[1].date.toDate().toTimeString())} */}
                <div className="img-bx">
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
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    {!chat[1].isFriend ? (
                      <>
                        <p style={{ color: "black" }}>Request receive</p>
                        {/* {chat[1]?.unreadCount > 0 && <b>{chat[1]?.unreadCount}</b>} */}
                        <div className="acceptrejectbtn">
                          <b onClick={() => acceptRequest(chat)}>
                            <CheckIcon style={{ height: "15px", width: "15px" }} />
                          </b>
                          <b onClick={() => rejectRequest(chat)}>
                            <ClearIcon style={{ height: "15px", width: "15px" }} />
                          </b>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* {chat[1].requestSenderID === loginUser._id ? <p style={{color:"black"}}>Request sent</p> : <p style={{color:"black"}}>Request receive</p>} */}
                        <p style={{ color: "black" }}>Request receive</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        {chats && Object.entries(chats).length === 0 && (
          <div style={{ display: "flex", justifyContent: "center" }}>No Request Found</div>
        )}
      </div>
    </>
  );
};

export default Request;
