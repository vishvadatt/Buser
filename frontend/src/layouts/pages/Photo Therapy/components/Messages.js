import React, { useState, useEffect } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";

const Messages = () => {
  const chatid = useSelector((state) => state.auth.chatId);
  const [messages, setMessages] = useState([]);
  const currentChatChangeUsr = useSelector((state)=> state.auth.currentChatChangeUser)
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "photoChats", chatid), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

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
