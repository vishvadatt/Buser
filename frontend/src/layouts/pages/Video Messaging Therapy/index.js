// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React base styles
import { Box, DialogContent } from "@mui/material";
import brand from "assets/images/Logo-01-rm.png";
import breakpoints from "assets/theme/base/breakpoints";
import Sidebar from "./components/Sidebar";
import Chat from "./components/VideoTherapyChat";
import "./style.css";
import React, { useState, useEffect } from "react";
import GroupIcon from "@mui/icons-material/Group";
import { Button } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import pageRoutes from "page.routes";
import { useDispatch, useSelector } from "react-redux";
import { db, requestForToken, app, requestPermission } from "../../../firebase/firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import DialogBox from "../DialogBox/index";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import phototherapy from "assets/images/video_tharapyimg/phototherapy.png";
import { CHECK_VIDEO_THREAPY_BALANCE } from "store/actions/actions";
import { findOneUserAction } from "store/actions/actions";

function PhotoTherapy() {
  const dispatch = useDispatch();
  const firebaseServerKey =
    "AAAAXk9QFdQ:APA91bHlTc8Et0ICSXv8ivSua1QBDmSW1OTJ7uA_vYCLm0NzCA9xzbXkUdggndKu_fBOjoeAauYox3u-RzUd4W-GcxU280vuuSh5NjrJCYyn9emauKQ9h6TkLUhJJZC52-1jyb6FFYpa";
  const UserId = useSelector((state) => state.auth.auth._id);
  let currentChatChangeUsr = useSelector((state) => state.auth.currentChatChangeUser);
  const tokens = useSelector((state) => state.auth.auth.idToken);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const [openBox, setOpenBox] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [isTokenFound, setTokenFound] = useState(false);
  const isChatActive = useSelector((state) => state.auth.chatActive);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const [sessionActive, setSessionActive] = useState(false);

  const [token, setToken] = useState("");
  const openChatBox = (e) => {
    if (e.target.value === "true") {
      setOpenBox(false);
    } else {
      setOpenBox(true);
    }
  };


  const storeTokenInDB = async (token) => {
    try {
      // const result = await axios.post(
      //   "http://localhost:8001/api/addTokens",
      //   data
      // );
      const result = await updateDoc(doc(db, "users", loginUser._id), {
        deviceToken: [token],
      });
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    // let abc = requestForToken(storeTokenInDB)
    // abc.then((token)=> setToken(token))
    storeUser();
    requestPermission(setTokenFound, setToken, storeTokenInDB);
    if (loginUser.userType === "client") {
      dispatch(CHECK_VIDEO_THREAPY_BALANCE({ userId: UserId, token: tokens }));
    }
  }, []);

  useEffect(() => {
    dispatch(findOneUserAction({ userId : UserId, token : tokens}));
  },[]);

  const storeUser = async () => {
    let availUser;
    let displayName = loginUser?.firstName;
    let email = loginUser?.email;
    let file = loginUser?.UserProfilePIC;
    const findUser = query(collection(db, "users"), where("uid", "==", loginUser?._id));

    const getUser = await getDocs(findUser);
    getUser.forEach((data) => {
      availUser = { ...data.data(), id: data.id };
      setCurrentUser({ ...data.data(), id: data.id });
    });

    if (!availUser) {
      try {
        // await userService.adduser(userData);
        // dispatch(setLoginData(userData));
        await setDoc(doc(db, "users", loginUser._id), {
          uid: loginUser._id,
          displayName,
          email,
          photoURL: file,
          deviceToken: [token],
          userType:loginUser.userType
        });
        //create empty user chats on firestore
        // await setDoc(doc(db, "userChats", loginUser._id), {});
        // await setDoc(doc(db, "userVideoChats", loginUser._id), {});
        // await setDoc(doc(db, "friendRequests", loginUser._id), {});
      } catch (err) {
        console.log(err);
      }
    }
    // else{
    //       await updateDoc(doc(db, "users", loginUser._id), {
    //         deviceToken: [token],
    //       });
    // }
  };
  return (
    <>
      <SoftBox mb={1} p={0}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          <DialogContent
            dividers={scroll === "paper"}
            style={{ display: "flex", flexDirection: "column", alignItems: "center",padding:0 }}
          >
            <div className="chat-home">
              <div
                style={{ display: !isChatActive && "initial" }}
                className="left-container message_mobile_view "
              >
                <Sidebar openBox={openBox} sessionActive={sessionActive} setSessionActive={setSessionActive} />
              </div>
              <div
                style={{ display: isChatActive && "initial" }}
                className="right-container message_mobile_view "
              >
                <Chat sessionActive={sessionActive} setSessionActive={setSessionActive}/>
              </div>
            </div>
          </DialogContent>
        </Grid>
        <DialogBox open={informConsentStatus}/>
      </SoftBox>
      {/* <Footer /> */}
    </>
  );
}

export default PhotoTherapy;
