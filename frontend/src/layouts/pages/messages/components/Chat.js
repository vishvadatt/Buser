import React, { useState, useEffect } from "react";
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
import Input from "./Input";
import Messages from "./Messages";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Menu from "@mui/material/Menu";
import { IconButton, MenuItem } from "@mui/material";
import SoftButton from "components/SoftButton";
import { useDispatch, useSelector } from "react-redux";
import { currentChatChangeUser } from "store/actions/actions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CHAT_ACTIVE } from "store/actions/actions";
import { useLocation } from "react-router-dom";
const Chat = () => {

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const chatid = useSelector((state) => state.auth.chatId);
  const [messages, setMessages] = useState([]);
  const [oneChat, setOneChat] = useState();
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const docRef = doc(db, "userAdminChats", "64781fcf297c8b644f232891");
  // const [isFriend, setIsFriend] = useState(false)
  const currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const open = Boolean(anchorEl);
  let unsubscribe;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log("logggggg", currentChatChangeUsr?.data?.uid, loginUser._id)

  // const getChats = async () => {
  //   try {
  // unsubscribe = onSnapshot(docRef, async (document) => {
  //   // setOneChat();
  //   let chatData = await document.data()[`64781fcf297c8b644f232891${loginUser._id}`];
  //   console.log("chatData", chatData);
  //   if (chatData && chatData?.senderId !== loginUser._id) {
  //     updateDoc(docRef, {
  //       [`64781fcf297c8b644f232891${loginUser._id}` + ".unreadCount"]: 0,
  //     });
  //   }
  // });
  //     return () => {
  //       if(unsubscribe){
  //         unsubscribe();
  //       }
  //     };
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const stopListening = () => {
    // Unsubscribe from real-time updates when explicitly called
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null; // Reset the reference to the unsubscribe function after unsubscribing
    }
  };

  useEffect(() => {
    unsubscribe = onSnapshot(docRef, async (document) => {
      // setOneChat();
      let chatData = await document.data()[`64781fcf297c8b644f232891${loginUser._id}`];
      console.log("chatData", chatData);
      if (chatData && chatData?.senderId !== loginUser._id) {
        updateDoc(docRef, {
          [`64781fcf297c8b644f232891${loginUser._id}` + ".unreadCount"]: 0,
        });
      }
    });
    return () => {
      // Unsubscribe from real-time updates when the component unmounts
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <div className="chat">
      <div className="chat-right-header">
        <IconButton
          className="message_back_button_for_mobile_view"
          onClick={() => {
            stopListening();
            window.history.back();
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="imgText">
          <img
            className="user-img"
            src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
            alt=""
          />
          <h5>
            Admin
            <br />
          </h5>
        </div>
      </div>
      <Messages setMessages={setMessages} messages={messages} />
      <Input messages={messages} />
    </div>
  );
};

export default Chat;

// {currentChatChangeUsr?.curUserID ? (
//   <>
//     <div className="chat-right-header">
//       <IconButton className="message_back_button_for_mobile_view" onClick={() => dispatch(CHAT_ACTIVE(false))}>
//         <ArrowBackIcon />
//       </IconButton>
//       <div className="imgText">
//         <img
//           className="user-img"
//           src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
//           alt=""
//         />
//         <h5>
//           {currentChatChangeUsr?.data?.displayName}
//           <br />
//           {/* <small>Online</small> */}
//         </h5>
//       </div>
//       {/* <div className="chatIcons">
//         <MoreHorizIcon
//           style={{ width: "30px", height: "30px", color: "#344676" }}
//           onClick={handleClick}
//         />
//         <Menu
//           id="basic-menu"
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleClose}
//           MenuListProps={{
//             "aria-labelledby": "basic-button",
//           }}
//         >
//           <MenuItem
//             // component={Link} to="/profile"
//             onClick={handleClose}
//           >
//             Profile
//           </MenuItem>
//           <MenuItem
//             // component={Link} to="/settings"
//             onClick={handleClose}
//           >
//             Settings
//           </MenuItem>
//         </Menu>
//       </div> */}
//     </div>
//     {!oneChat?.[chatid]?.isFriend ? (
//       <>
//         <>
//           {oneChat?.[chatid]?.requestSenderID === loginUser._id ? (
//             <div className="not_friend">
//               <span style={{ color: "#344767" }}>
//                 Chat request sent to {currentChatChangeUsr?.data?.displayName}
//                 {/* {
//           oneChat?.[chatid].status === "Rejected" && <p>Request Rejected</p>
//         } */}
//               </span>
//             </div>
//           ) : (
//             <div className="not_friend">
//               <span style={{ color: "#344767" }}>
//                 Request Rejected
//                 {/* {
//           oneChat?.[chatid].status === "Rejected" && <p>Request Rejected</p>
//         } */}
//               </span>
//               {/* <div className="accept_reject">
//                 <SoftButton variant="gradient" color="info"
//                 // onClick={acceptRequest}
//                 >
//                   ACCEPT
//                 </SoftButton>
//                 <SoftButton
//                   variant="gradient"
//                   color="error"
//                   // onClick={rejectRequest}
//                 >
//                   REJECT
//                 </SoftButton>
//               </div> */}
//             </div>
//           )}
//         </>
//       </>
//     ) : (
//       <>
//         <Messages />
//         <Input />
//       </>
//     )}
//   </>
// ) : (
//   <div className="empty_chat">
//     <h3>Buser Institute</h3>
//     <small>Start a Conversation with your friend</small>
//   </div>
// )}
