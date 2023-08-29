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
import { db } from "../../../../firebase/firebase";
const Navbar = (messageProps) => {
  const { setIsMessageActive, isMessageActive } = messageProps;
  const UserId = useSelector((state) => state.auth.auth._id);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);

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
      {loginUser?.UserProfilePIC ? (
        <img className="user-img" src={loginUser?.UserProfilePIC} alt="" />
      ) : (
        <img
          className="user-img"
          src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
          alt=""
        />
      )}

      <div className="chat-left-body2">
        <span
          style={{ cursor: "pointer", fontSize: "25px", marginRight: "10px", marginTop: "12px" }}
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
              <PeopleAltIcon />
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
              <MessageIcon />
              {/* <span className="badge badge-light"></span> */}
            </div>
          )}
        </span>
        <p className="back_btn" onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>
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
