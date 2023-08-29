import React, { useState } from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
import SearchReq from "./SearchReq";
import Request from "./Request";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import CloseIcon from "@mui/icons-material/Close";
const Sidebar = (openBoxValue) => {
  const { openBox, setChatActive } = openBoxValue;
  const [isMessageActive, setIsMessageActive] = useState(true);

  return (
    <div
    //  style={{display : openBox ? "none" : ""}}
    >
      <Navbar setIsMessageActive={setIsMessageActive} isMessageActive={isMessageActive} />
      {isMessageActive ? (
        <>
          {/* <Search/> */}
          <Chats setChatActive={setChatActive} />
        </>
      ) : (
        <>
          <Request />
        </>
      )}
    </div>
  );
};

export default Sidebar;
