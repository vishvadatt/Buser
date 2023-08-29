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
import { AppBar, Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import { url } from "services/AxiosInstance";
import PropTypes from "prop-types";
import SoftButton from "components/SoftButton";
import ListSkeleton from "common/LoadingComponent/ListSkeleton";

const SearchReq = ({ setIsMessageActive, isMessageActive }) => {
  const firebaseServerKey =
    "AAAAXk9QFdQ:APA91bHlTc8Et0ICSXv8ivSua1QBDmSW1OTJ7uA_vYCLm0NzCA9xzbXkUdggndKu_fBOjoeAauYox3u-RzUd4W-GcxU280vuuSh5NjrJCYyn9emauKQ9h6TkLUhJJZC52-1jyb6FFYpa";
  const [chatFrnd, setChatFrnd] = useState("");
  const [friendList, setFriendList] = useState();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const token = useSelector((state) => state.auth.auth.idToken);
  const [loading, setLoading] = useState(false);

  const fetchList = (chatFrnd) => {
    setLoading(true);
    axios
      .get(
        `${url}/api/user/search-allUsers?searchText=${chatFrnd ? chatFrnd : ""}&pageNo=0&limit=20`,
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((response) => {
        setFriendList(response.data.data.result);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    fetchList(chatFrnd);
  }, [chatFrnd]);

  const addFriend = async (item) => {
    const combinedId =
      loginUser?._id > item._id ? loginUser?._id + item._id : item._id + loginUser?._id;
    try {
      const friendRef = doc(db, "friendRequests", item._id);
      const isFriendRef = await getDoc(friendRef);
      if (!isFriendRef.exists()) {
        await setDoc(doc(db, "friendRequests", item._id), {
          [combinedId]: {
            userInfo: {
              uid: loginUser?._id,
              displayName: `${loginUser?.firstName} ${loginUser?.lastName}`,
              photoURL: loginUser?.UserProfilePIC ? loginUser?.UserProfilePIC : "",
            },
            date: serverTimestamp(),
            unreadCount: increment(1),
            isFriend: false,
            requestSenderID: loginUser?._id,
          },
        });
      } else {
        await updateDoc(doc(db, "friendRequests", item._id), {
          [combinedId + ".userInfo"]: {
            uid: loginUser?._id,
            displayName: `${loginUser?.firstName} ${loginUser?.lastName}`,
            photoURL: loginUser?.UserProfilePIC ? loginUser?.UserProfilePIC : "",
          },
          [combinedId + ".date"]: serverTimestamp(),
          [combinedId + ".unreadCount"]: increment(1),
          [combinedId + ".isFriend"]: false,
          [combinedId + ".requestSenderID"]: loginUser?._id,
        });
      }
      const docRef = doc(db, "userVideoChats", loginUser?._id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // document already exists, update it
        await updateDoc(doc(db, "userVideoChats", loginUser?._id, "threads", combinedId), {
          userInfo: {
            uid: item._id,
            displayName: `${item.firstName} ${item.lastName}`,
            photoURL: item.photoURL ? item.photoURL : "",
          },
          date: serverTimestamp(),
          unreadCount: 0,
          isFriend: false,
          requestSenderID: loginUser?._id,
          currentSessionId: null,
        });
      } else {
        await setDoc(doc(db, "userVideoChats", loginUser?._id, "threads", combinedId), {
          userInfo: {
            uid: item._id,
            displayName: `${item.firstName} ${item.lastName}`,
            photoURL: item.photoURL ? item.photoURL : "",
          },
          date: serverTimestamp(),
          unreadCount: 0,
          isFriend: false,
          requestSenderID: loginUser?._id,
        });
      }
      setIsMessageActive(true);
      await axios.post(
        `${url}/api/Chat/addFriendRequest`,
        {
          senderId: loginUser?._id,
          receiverId: item._id,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
    // gettingDeviceToken(item?._id);
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

  const checkReqStatus = (item) => {
    const userId = loginUser?._id;

    if (item?.Request?.includes(userId)) {
      return "Request Sent";
    } else if (item?.ConfrimFriendRequest?.includes(userId)) {
      return "Already Connected";
    } else if (item?.pendingRequest?.includes(userId)) {
      return "Pending";
    } else {
      return "Invite";
    }
  };

  return (
    <>
      <div className="search-chat">
        <div>
          <input
            type="text"
            placeholder="Add Friend..."
            onChange={(e) => setChatFrnd(e.target.value)}
            value={chatFrnd}
          />
        </div>
      </div>
      <div className="friendListWrapper">
        {loading ? (
          <Box display={"flex"} flexDirection={"column"} gap={1.5} mt={2}>
            {chatFrnd === "" ? (
              <>
                <ListSkeleton width={"100%"} height={45} />
                <ListSkeleton width={"100%"} height={45} />
                <ListSkeleton width={"100%"} height={45} />
                <ListSkeleton width={"100%"} height={45} />
                <ListSkeleton width={"100%"} height={45} />
              </>
            ) : (
              <ListSkeleton width={"100%"} height={45} />
            )}
          </Box>
        ) : (
          <>
            {friendList && friendList.length > 0 ? (
              friendList.map(
                (item, index) =>
                  item._id !== loginUser._id && (
                    <div
                      className="dropdown"
                      key={index}
                      style={{
                        // position: "absolute",
                        zIndex: "1000",
                        background: "white",
                        height: "auto",
                        // width: "300px",
                        borderRadius: "7px",
                        border: "1px solid #e0e0e0",
                        padding: "6px 10px",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    >
                      {
                        <div>
                          <SoftTypography variant="button" fontWeight="regular" color="text">
                            <Grid container alignItems="center">
                              <Grid items lg={2} xs={2}>
                                {item?.UserProfilePIC ? (
                                  <>
                                    <img
                                      src={item?.UserProfilePIC}
                                      alt=""
                                      className="cover"
                                      width={35}
                                      height={35}
                                      style={{ borderRadius: "50px" }}
                                    />
                                  </>
                                ) : (
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      height: 40,
                                      width: 40,
                                      backgroundColor: "rgb(216 229 255)",
                                      borderRadius: "50px",
                                    }}
                                  >
                                    <FaUserAlt className="nonProfile" size={20} />
                                  </div>
                                )}
                              </Grid>

                              <Grid items lg={6} xs={6} className="textShort">
                                <span style={{ fontSize: "13px", marginLeft: "10px" }}>
                                  {item.firstName} {item.lastName}
                                </span>
                              </Grid>
                              <Grid items lg={4} xs={4}>
                                {checkReqStatus(item) === "Request Sent" ? (
                                  <button className="addFriendbtn_success">Invited</button>
                                ) : checkReqStatus(item) === "Already Connected" ? (
                                  <button className="addFriendbtn_friend">Connected</button>
                                ) : checkReqStatus(item) === "Pending" ? (
                                  <button className="addFriendbtn_friend">Requested</button>
                                ) : (
                                  <button className="addFriendbtn" onClick={() => addFriend(item)}>
                                    Invite
                                  </button>
                                )}
                              </Grid>
                            </Grid>
                          </SoftTypography>
                        </div>
                      }
                    </div>
                  )
              )
            ) : (
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={2}>
                <Typography variant="caption">No Record found</Typography>
              </Box>
            )}
          </>
        )}
      </div>
    </>
  );
};
SearchReq.propTypes = {
  setIsMessageActive: PropTypes.func.isRequired,
  isMessageActive: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ).isRequired,
};
export default SearchReq;
