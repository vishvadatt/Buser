import React, { useEffect, useState } from "react";
import Chats from "./VideoTherapyChats";
import Navbar from "./Navbar";
import Search from "./Search";
import SearchReq from "./SearchReq";
import Request from "./Request";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import SoftBox from "components/SoftBox";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { Box, Tab, Tabs } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { useSelector } from "react-redux";
const Sidebar = (openBoxValue) => {
  const { openBox, sessionActive, setSessionActive } = openBoxValue;
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const [isMessageActive, setIsMessageActive] = useState(true);
  const [tabValue, setTabValue] = useState("add");
  const [chats, setChats] = useState([]);
  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
  };
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

  const LightTooltip = styled(({ className, placement, ...props }) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      placement={placement ? placement : "bottom"}
      TransitionComponent={Fade}
      arrow
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 15,
    },
  }));
  return (
    <div>
      <Navbar
        LightTooltip={LightTooltip}
        setIsMessageActive={setIsMessageActive}
        isMessageActive={isMessageActive}
      />
      {isMessageActive ? (
        <>
          <Chats chats={chats} sessionActive={sessionActive} setSessionActive={setSessionActive} />
        </>
      ) : (
        <>
          <Box padding={1}>
            {loginUser?.userType === "doctor" && (
              <Tabs
                style={{ height: "47px" }}
                orientation={"horizontal"}
                value={tabValue}
                onChange={handleSetTabValue}
              >
                <Tab
                  style={{ fontWeight: "bold" }}
                  value={"add"}
                  className="tabClass"
                  label="Add new contact"
                />

                <LightTooltip placement={"top"} title="Pending Contact Requests">
                  <Tab
                    style={{ fontWeight: "bold" }}
                    iconPosition="end"
                    icon={
                      <>
                        {chats && Object.entries(chats).length > 0 && (
                          <span className="tab_badge">
                            {chats && Object.entries(chats).length > 0
                              ? Object.entries(chats).length
                              : ""}
                          </span>
                        )}
                      </>
                    }
                    className="tabClass"
                    label={`Requests`}
                  />
                </LightTooltip>
              </Tabs>
            )}
          </Box>
          {tabValue === "add" ? (
            <SearchReq setIsMessageActive={setIsMessageActive} isMessageActive={isMessageActive} />
          ) : (
            loginUser?.userType === "doctor" && (
              <Request setIsMessageActive={setIsMessageActive} isMessageActive={isMessageActive} />
            )
          )}
        </>
      )}
    </div>
  );
};

export default Sidebar;
