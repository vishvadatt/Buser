import React, { useState, useEffect } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import PropTypes from "prop-types";

const Messages = ({ messages, setMessages }) => {
  const chatid = useSelector((state) => state.auth.chatId);
  const loginUserId = useSelector((state) => state?.auth?.auth?._id);

  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  useEffect(() => {
    const unSub = onSnapshot(
      query(
        collection(db, "adminChats", `64781fcf297c8b644f232891${loginUserId}`, "messages"),
        orderBy("date", "asc")
      ),
      (snapshot) => {
        const list = snapshot.docs.map((doc) => doc.data());
        setMessages(list);
      }
    );
    return () => {
      unSub();
    };
  }, [chatid]);

  return (
    <div className="chatBox">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;

Messages.propTypes = {
  messages: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  setMessages: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
