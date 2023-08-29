import React, { useState, useEffect } from "react";
// import '../style.css'
import { Link, useNavigate } from "react-router-dom";
import SoftButton from "components/SoftButton";
import { useDispatch, useSelector } from "react-redux";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MessageIcon from "@mui/icons-material/Message";
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
import { currentChatChangeUser } from "store/actions/actions";
import { db } from "../../../../firebase/firebase";
import { Avatar } from "@mui/material";
const Navbar = (messageProps) => {
  const { setIsMessageActive, isMessageActive, LightTooltip } = messageProps;
  const UserId = useSelector((state) => state.auth.auth._id);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const dispatch = useDispatch();
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

  return (
    // <div className='navbar'>
    //     <span className='userlogo'>
    //     <img src="https://img.icons8.com/badges/28/null/experimental-left-badges.png" alt="" className='currentUserImg'
    //       onClick={()=> navigate(-1)}
    //      />
    //       BuserInstitute</span>
    //     <div className='user'>
    //         <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" width="20" height="20" alt="" className='currentUserImg' />
    //         <span>Jack Sparrow</span>
    //     </div>
    // </div>
    <div className="chat-left-header">
      {/* <img src="https://img.icons8.com/ios-glyphs/30/344767/less-than.png" alt="" className='currentUserImg' 
          onClick={()=> navigate(-1)}
          /> */}

      {loginUser?.UserProfilePIC.length > 1 ? (
        <Avatar className="user-img" src={loginUser?.UserProfilePIC} />
      ) : (
        <Avatar
          className="user-img"
          src={
            "https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
          }
        />
      )}
      <Link to="/video-messaging-therapy-instruction" target="_blank" rel="noopener noreferrer">
        <SoftButton color="info">Instructions</SoftButton>
      </Link>
      <div className="chat-left-body2">
        <span
          style={{
            cursor: "pointer",
            fontSize: "25px",
            marginRight: "10px",
            marginTop: "12px",
          }}
          onClick={() => setIsMessageActive(!isMessageActive)}
        >
          {isMessageActive ? (
            <div
              style={{
                position: "relative",
                margin: "10px",
                color: "#62c2e8",
                fontSize: "25px",
                marginLeft: "5px",
              }}
            >
              <LightTooltip title="Contacts">
                <PeopleAltIcon />
              </LightTooltip>
              <span className="badge badge-light">
                {chats && Object.entries(chats).length > 0 ? Object.entries(chats).length : ""}
              </span>
            </div>
          ) : (
            <div
              style={{
                position: "relative",
                margin: "10px",
                color: "#62c2e8",
                fontSize: "25px",
                marginLeft: "5px",
              }}
            >
              <LightTooltip title="Active Chats">
                <MessageIcon />
              </LightTooltip>
            </div>
          )}
        </span>
        <p
          className="back_btn"
          onClick={() => {
            dispatch(currentChatChangeUser({ data: null, curUserID: null }));
            navigate(-1);
          }}
          style={{ marginTop: "20px" }}
        >
          Back
        </p>
      </div>
      {/* <div className='user_data'>
             <img className='user-img' src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" alt="" />
             <span>Jack Sparrow</span>
         </div> */}
    </div>
  );
};

export default Navbar;
