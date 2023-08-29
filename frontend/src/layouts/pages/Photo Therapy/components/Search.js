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
import { url } from "services/AxiosInstance";
const Search = () => {
  const [chatFrnd, setChatFrnd] = useState(null);
  const [friendList, setFriendList] = useState();
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const loginUser = useSelector((state) => state?.auth?.auth?.userdata);

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get(`${url}/api/user/search-allUsers?searchText=${chatFrnd}&pageNo=0&limit=5`, {
        headers: {
          authorization: token,
        },
      })
      // search-allUsers?searchText=shubham&pageNo=0&limit=20
      // user/search-doctors?searchText=${searchkey}
      .then((response) => setFriendList(response?.data?.data?.result));
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    if (chatFrnd === "") {
      setChatFrnd(null);
    }
  }, [chatFrnd]);

  console.log("friendList", friendList);

  const addFriend = async (item) => {
    setChatFrnd(null);
    const combinedId =
      loginUser?._id > item._id ? loginUser?._id + item._id : item._id + loginUser?._id;

    try {
      const res = await getDoc(doc(db, "photoChats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        // await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userPhotoChats", loginUser?._id), {
          [combinedId + ".userInfo"]: {
            uid: item?._id,
            displayName: item?.name,
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

        // await updateDoc(doc(db, "userChats", item._id), {
        //   [combinedId + ".userInfo"]: {
        //     uid: loginUser?._id,
        //     displayName: loginUser?.name,
        //     photoURL: loginUser?.UserProfilePIC ? loginUser?.UserProfilePIC : "",
        //   },
        //   [combinedId + ".date"]: serverTimestamp(),
        //   [combinedId + ".unreadCount"]: increment(1),
        //   [combinedId + ".isFriend"]: false,
        //   [combinedId + ".requestSenderID"]: loginUser?._id
        // });
      }
    } catch (err) {}

    setChatFrnd("");
    // if(chatFrnd === ""){
    //   setChatFrnd(null)
    // }
  };

  return (
    // <div className='search'>
    //     <div className='searchFrom'>
    //         <input type="text" placeholder='Find a user here'/>
    //     </div>
    //     <div className='userChat'>
    //         <img src="https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg" width="20" height="20" alt="" />
    //         <div className='userChatInfo'>
    //             <span>Jane</span>
    //         </div>
    //     </div>
    // </div>
    <div className="search-chat">
      <div>
        <input
          type="text"
          placeholder="Search..."
          // onChange={(e) => setChatFrnd(e.target.value)}
          value={chatFrnd}
        />
        {friendList &&
          friendList &&
          friendList.map((item, index) => (
            <div
              className="dropdown"
              key={index}
              style={{
                position: "absolute",
                zIndex: "1000",
                background: "white",
                height: "auto",
                width: "300px",
                borderRadius: "5px",
                cursor: "pointer",
                border: "1px solid grey",
              }}
            >
              {
                <div>
                  <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    // onClick={() => addFriend(item)}
                    // key={index}
                  >
                    <img
                      src="https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png"
                      alt=""
                      className="cover"
                      width={20}
                      height={20}
                    />
                    &nbsp;
                    {item.name}
                  </SoftTypography>
                </div>
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
