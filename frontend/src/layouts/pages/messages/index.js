// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
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
function Messages() {
  const firebaseServerKey =
    "AAAAXk9QFdQ:APA91bHlTc8Et0ICSXv8ivSua1QBDmSW1OTJ7uA_vYCLm0NzCA9xzbXkUdggndKu_fBOjoeAauYox3u-RzUd4W-GcxU280vuuSh5NjrJCYyn9emauKQ9h6TkLUhJJZC52-1jyb6FFYpa";
  const UserId = useSelector((state) => state.auth.auth._id);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const isChatActive = useSelector((state) => state.auth.chatActive);
  const tokens = useSelector((state) => state.auth.auth.idToken);
  const [openBox, setOpenBox] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [isTokenFound, setTokenFound] = useState(false);
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
  }, []);

  const storeUser = async () => {
    let availUser;
    let displayName = loginUser?.name;
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
        await setDoc(doc(db, "adminChats", loginUser._id), {
          uid: loginUser._id,
          displayName,
          email,
          photoURL: file,
          deviceToken: [token],
        });
        //create empty user chats on firestore
        // await setDoc(doc(db, "userChats", loginUser._id), {});
        // await setDoc(doc(db, "messageRequest", loginUser._id), {});
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
    <DashboardLayout>
      {/* <DashboardNavbar/> */}
    <div className="chat-home">
      {/* <div style={{display:!isChatActive && "initial"}}  className="left-container message_mobile_view ">
        <Sidebar openBox={openBox} />
      </div> */}
      <div  className="right-container">
        <Chat />
      </div>
    </div>
    </DashboardLayout>

    // {/* <Grid container justifyContent="center" sx={{ height: "100%" }} className="home">
    //           <Grid item xs={12} lg={12} className="container">
    //                   <Sidebar openBox={openBox} />
    //                   <Chat />
    //   </Grid>
    // </Grid> */}

    // <>
    // {/* <DashboardLayout> */}
    //   {/* <DashboardNavbar /> */}
    //   {/* <DefaultNavbar
    //     routes={pageRoutes}
    //     action={{
    //       type: "external",
    //       route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
    //       label: "buy now",
    //     }}
    //   /> */}

    //   {/* <SoftBox py={0}> */}
    //     {/* <Grid container>
    //       <Grid item xs={12} >
    //         <SoftBox mb={3} p={1}> */}
    //           {/* <SoftTypography
    //             variant={window.innerWidth < values.sm ? "h3" : "h2"}
    //             textTransform="capitalize"
    //             fontWeight="bold"
    //           >
    //
    //           </SoftTypography> */}
    //           {/* <button value={openBox} onClick={(e) => openChatBox(e)}>Open Chat box</button> */}

    //         {/* </SoftBox>
    //       </Grid>
    //     </Grid> */}
    //   {/* </SoftBox> */}
    //   {/* <Footer /> */}
    // {/* </DashboardLayout> */}
    // </>
  );
}

export default Messages;
