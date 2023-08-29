import React, { useEffect, useState } from "react";
import axios from "axios";
import SoftTypography from "components/SoftTypography";
import { useDispatch, useSelector } from "react-redux";
// import { item } from 'examples/Sidenav/styles/sidenavItem';
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
  serverTimestamp,
  increment,
} from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { FaUserAlt } from "react-icons/fa";
import { Grid } from "@mui/material";
import { url } from "services/AxiosInstance";

const SearchReq = () => {
  const firebaseServerKey =
    "AAAAXk9QFdQ:APA91bHlTc8Et0ICSXv8ivSua1QBDmSW1OTJ7uA_vYCLm0NzCA9xzbXkUdggndKu_fBOjoeAauYox3u-RzUd4W-GcxU280vuuSh5NjrJCYyn9emauKQ9h6TkLUhJJZC52-1jyb6FFYpa";
  const [chatFrnd, setChatFrnd] = useState(null);
  const [friendList, setFriendList] = useState();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.auth.auth.userdata);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      // .get(`http://52.22.34.128/api/user/search-doctors?searchText=${chatFrnd}`)
      .get(`${url}/api/user/search-allUsers?searchText=${chatFrnd}&pageNo=0&limit=10`)
      // search-allUsers?searchText=shubham&pageNo=0&limit=20
      // user/search-doctors?searchText=${searchkey}
      .then((response) => setFriendList(response.data.data.result));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    if (chatFrnd === "") {
      setChatFrnd(null);
    }
  }, [chatFrnd]);

  const addFriend = async (item) => {
    setChatFrnd(null);
    const combinedId =
      loginUser?._id > item._id ? loginUser?._id + item._id : item._id + loginUser?._id;

    try {
      const res = await getDoc(doc(db, "photoChats", combinedId));

      if (!res.exists()) {
        await updateDoc(doc(db, "userPhotoChats", loginUser?._id), {
          [combinedId + ".userInfo"]: {
            uid: item._id,
            displayName: item.name,
            photoURL: item.photoURL ? item.photoURL : "",
          },
          [combinedId + ".date"]: serverTimestamp(),
          [combinedId + ".unreadCount"]: 0,
          [combinedId + ".isFriend"]: false,
          [combinedId + ".requestSenderID"]: loginUser?._id,
        });

        setDoc(doc(db, "photoRequest", item._id), {});
        await updateDoc(doc(db, "photoRequest", item._id), {
          [combinedId + ".userInfo"]: {
            uid: loginUser?._id,
            displayName: loginUser?.name,
            photoURL: loginUser?.UserProfilePIC ? loginUser?.UserProfilePIC : "",
          },
          [combinedId + ".date"]: serverTimestamp(),
          [combinedId + ".unreadCount"]: increment(1),
          [combinedId + ".isFriend"]: false,
          [combinedId + ".requestSenderID"]: loginUser?._id,
        });
      }
    } catch (err) { }

    setChatFrnd("");
    console.log("device token", item?._id);
    gettingDeviceToken(item?._id);
  };

  //Function to get Device Token from database
  const gettingDeviceToken = async (recieverId) => {
    try {
      const userRef = doc(db, "users", recieverId);
      const docRef = await getDoc(userRef);
      const data = await docRef.data();
      handleNotification(data); //Calling Notification Function and sending device tokens
    } catch (err) {
      console.log(err);
    }
  };

  //Function to send Background Notification
  const handleNotification = async (data) => {
    try {
      await axios.post(
        "https://fcm.googleapis.com/fcm/send",
        {
          registration_ids: data?.deviceToken,
          content_available: true,
          data: {
            title: `You receive chat request in Buser Institute`,
            body: `Chat request receive`,
            // body: `hello world`,
          },
          notification: {
            title: `You receive chat request in Buser Institute`,
            body: `Chat request receive`,
            // body: `hello world`,
            vibrate: 1,
            sound: 1,
            show_in_foreground: true,
            priority: "high",
          },
        },
        {
          headers: {
            Authorization: `key=` + firebaseServerKey,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="search-chat">
      <div>
        <input
            style={{ width: "100%" }}

          type="text"
          placeholder="Add Friend..."
          onChange={(e) => setChatFrnd(e.target.value)}
          value={chatFrnd}
        />
        
      </div>
      </div>
      <div style={{marginLeft:"20px"}}>
        {friendList &&
          friendList &&
          friendList.map((item, index) => (
            <div
              className="dropdown"
              key={index}
              style={{
                // position: "absolute",
                zIndex: "1000",
                background: "white",
                height: "auto",
                width: "300px",
                borderRadius: "5px",
                border: "1px solid #e0e0e0",
                padding: "10px 5px 0px 5px",
                marginTop: "5px",
                marginBottom: "5px"
              }}
            >
              {
                <div>
                  <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    className="frnd-req"
                  >
                    <Grid container>
                      <Grid items lg={2} xs={2}>
                        {item?.UserProfilePIC ? (
                          <>
                            <img
                              src={item?.UserProfilePIC}
                              alt=""
                              className="cover"
                              width={35}
                              height={35}
                              style={{ borderRadius: "5px" }}
                            />
                          </>
                        ) : (
                          <>
                            <FaUserAlt className="demoprofile" style={{ fontSize: "30px" }} />
                          </>
                        )}
                      </Grid>

                      <Grid items lg={6} xs={6} className="textShort">
                        <span style={{ fontSize: "18px", marginBottom: "10px" }}>{item.name}</span>
                      </Grid>
                      <Grid items lg={4} xs={4}>
                        <button
                          className="addFriendbtn"
                          style={{ marginBottom: "11px" }}
                          onClick={() => addFriend(item)}
                        >
                          Add Friend
                        </button>
                      </Grid>
                    </Grid>
                  </SoftTypography>
                </div>
              }
            </div>
          ))}
      </div>
      </>

  );
};

export default SearchReq;
