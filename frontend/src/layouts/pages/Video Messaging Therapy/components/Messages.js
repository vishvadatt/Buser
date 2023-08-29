import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  limit,
  startAfter,
  startAt,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import moment from "moment";
import SoftButton from "components/SoftButton";

const Messages = () => {
  const chatid = useSelector((state) => state.auth.chatId);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const [messages, setMessages] = useState([]);
  const [sessionActive, setSessionActive] = useState(null);
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState(null);
  const messagesEndRef = useRef(null);
  const messagesStartRef = useRef(null);

  const loadMoreMessages = () => {
    const chatRef = collection(db, "videoChats", chatid, "messages");
    const queryRef = query(chatRef, orderBy("date", "desc"), startAfter(lastDoc), limit(50));

    onSnapshot(queryRef, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data());
      let newMessageReverse = newMessages.reverse();
      setMessages((prevMessages) => {
        let lastMessages = [...newMessageReverse, ...prevMessages];
        return lastMessages;
      });
      messagesStartRef.current.scrollIntoView({ behavior: "smooth" });
      if (snapshot.docs.length > 0) {
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      } else {
        setHasMore(false);
      }
    });
  };

  useEffect(() => {
    const chatRef = collection(db, "videoChats", chatid, "messages");
    const queryRef = query(chatRef, orderBy("date", "desc"), limit(50));

    onSnapshot(queryRef, (snapshot) => {
      let list = [];
      const newMessages = snapshot.docs.map((doc) => list.push(doc.data()));
      setMessages(list.reverse());
      if (list.length <= 50) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      if (snapshot.docs.length > 0) {
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      } else {
        setHasMore(false);
      }
    });

    let data;
    let Id =
      loginUser?._id > currentChatChangeUsr.data.uid
        ? loginUser?._id + currentChatChangeUsr.data.uid
        : currentChatChangeUsr.data.uid + loginUser?._id;
    const unsub = onSnapshot(doc(db, "userVideoChats", loginUser?._id, "threads", Id), (doc) => {
      data = doc.data();
      setSessionActive(data);
    });

    return () => {
      unsub();
    };
  }, [chatid]);
  async function fetchStartTime(sessionId) {
    const docRef = doc(db, "videoTherapySession", sessionId);
    let data = await getDoc(docRef);
    // return data.startTime
  }
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function dateTime(Time) {
    const milliseconds = Math.floor(Time.nanoseconds / 1000000);
    const messageDate = new Date(Time.seconds * 1000 + milliseconds);
    return moment(messageDate).format("LT DD-MM-YYYY");
  }
  return (
    <div className="chatBox">
      <div ref={messagesStartRef} />
      {hasMore && (
        <div className="loadMoreDiv">
          {" "}
          <SoftButton onClick={loadMoreMessages}>Load more</SoftButton>
        </div>
      )}
      {messages.map((m, index) => (
        <>
          {m.type === "session_data" ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              {m.startTime ? (
                <>Session Started {m.startTime ? `on ${dateTime(m.startTime)}` : ""}</>
              ) : (
                <> Session Ended {m.endTime ? `on ${dateTime(m.endTime)}` : ""}</>
              )}
            </div>
          ) : (
            <Message message={m} key={m.id} />
          )}
        </>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
