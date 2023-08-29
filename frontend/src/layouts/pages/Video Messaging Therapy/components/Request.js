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
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { currentChatChangeUser } from "store/actions/actions";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import moment from "moment";
import SearchReq from "./SearchReq";
import { Box } from "@mui/material";
import { url } from "services/AxiosInstance";
import PropTypes from "prop-types";

const Request = ({ setIsMessageActive, isMessageActive }) => {
  // const [chatId, setChatId] = useState(null)
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const dispatch = useDispatch();
  const chatid = useSelector((state) => state.auth.chatId);
  const [searchChat, setSearchChat] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const token = useSelector((state) => state.auth.auth.idToken);

  // console.log("currentChatChangeUsr", currentChatChangeUsr)
  // console.log("currentChatChangeUsr?.data?.uid",loginUser._id, currentChatChangeUsr?.data?.uid)

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "friendRequests", loginUser._id), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    getChats();
  }, []);
  const acceptRequest = async (item) => {
    const combinedId =
      loginUser?._id > item[1].userInfo.uid
        ? loginUser?._id + item[1].userInfo.uid
        : item[1].userInfo.uid + loginUser?._id;
    try {
      // const res1 = await getDoc(doc(db, "videoChats", combinedId));
      //create a chat in chats collection
      // await setDoc(collection(db, "videoChats", combinedId,"messages"));

      const chatRef = doc(db, "friendRequests", loginUser?._id);
      await updateDoc(chatRef, {
        [combinedId]: deleteField(),
      });
      await setDoc(doc(db, "videoChats", combinedId), { messages: [] });
      const docRef = doc(db, "userVideoChats", loginUser?._id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // document already exists, update it
        await updateDoc(doc(db, "userVideoChats", loginUser?._id, "threads", combinedId), {
          userInfo: {
            uid: item[1].requestSenderID,
            displayName: item[1].userInfo.displayName,
            photoURL: item[1].userInfo.photoURL ? item[1].userInfo.photoURL : "",
          },
          date: serverTimestamp(),
          unreadCount: 0,
          isFriend: true,
          requestSenderID: item[1].requestSenderID,
          currentSessionId: null,
        });
      } else {
        await setDoc(doc(db, "userVideoChats", loginUser?._id, "threads", combinedId), {
          userInfo: {
            uid: item[1].requestSenderID,
            displayName: item[1].userInfo.displayName,
            photoURL: item[1].userInfo.photoURL ? item[1].userInfo.photoURL : "",
          },
          date: serverTimestamp(),
          unreadCount: 0,
          isFriend: true,
          requestSenderID: item[1].requestSenderID,
        });
      }
      await updateDoc(doc(db, "userVideoChats", item[1].userInfo.uid, "threads", combinedId), {
        date: serverTimestamp(),
        unreadCount: increment(1),
        isFriend: true,
      });
      await axios.post(
        `${url}/api/Chat/confirmFriendRequest`,
        {
          senderId: item[1].requestSenderID,
          receiverId: loginUser?._id,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setIsMessageActive(true);
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
      const chatRef = doc(db, "userVideoChats", item[1].userInfo.uid,"threads",combinedId);
      await deleteDoc(chatRef);

      const chatRef2 = doc(db, "friendRequests", loginUser?._id);
      await updateDoc(chatRef2, {
        [combinedId]: deleteField(),
      });
      await axios.post(
        `${url}/api/Chat/cancelFriendRequest`,
        {
          senderId: item[1].userInfo.uid,
          receiverId: loginUser?._id,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (err) {
      console.log("error", err);
    }
  };

  function searchUser(username) {
    setFilterValue(username);
    const regex = new RegExp(username, "i"); // 'i' flag for case-insensitive search
    const result = {};
    Object.entries(chats || {}).forEach(([key, user]) => {
      if (regex.test(user.userInfo.displayName)) {
        result[key] = user;
      }
    });
    setSearchChat(result);

    // timedOut(Object.keys(result).length);
  }
  let requestChats = filterValue.length ? searchChat : chats;

  return (
    <Box padding={1}>
      <div>
        <input
          className="search_input"
          type="text"
          placeholder="Search requests..."
          onInput={(e) => searchUser(e.target.value)}
          value={filterValue}
        />
      </div>
      <div className="chatlist">
        {requestChats &&
          Object.entries(requestChats)
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
    </Box>
  );
};

Request.propTypes = {
  setIsMessageActive: PropTypes.func.isRequired,
  isMessageActive: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ).isRequired,
};
export default Request;
