// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React base styles

import "./style.css";
import React, { useState, useEffect } from "react";

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
import {
  photoStore,
  photosData,
  getPhotoTheraphi,
  purchasePackege,
  getDoctorPhotoTheraphi,
  findOneUserAction,
} from "../../../store/actions/actions";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import SoftButton from "components/SoftButton";

import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { userId } from "store/selectors/selector";
import PhotoTherapySearch from "./components/searchPhotoTharepy";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { AppBar, Tab, Tabs } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "react-photo-view/dist/react-photo-view.css";
import DialogBox from "../DialogBox/index";
import { axiosInstance } from "services/AxiosInstance";

const CustomAccordion = styled((props) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  ".MuiAccordionSummary-content": {
    marginLeft: 0,
    "&:last-of-type": {
      marginBottomLeftRadius: 0,
    },
  },
  ".MuiAccordionSummary-root": {
    height: "52px",
    padding: 0,
    background: "#F3F5F4",
    borderTop: "1px solid #F3F5F4",
    borderLeft: "1px solid #F3F5F4",
    borderRight: "1px solid #F3F5F4",
    borderBottom: "1px solid #F3F5F4",
    overFlow: "hidden",
  },
  ".MuiAccordionSummary-root[aria-expanded=true]": {
    height: "54px",

    backgroundColor: "#F3F5F4",

    borderTop: "1px solid #F3F5F4",
    borderBottom: "1px solid #F3F5F4",

    overFlow: "hidden",
  },

  ".MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    width: 0,
    height: 0,
  },
  ".MuiAccordionSummary-expandIconWrapper": {
    width: 0,
    height: 0,
  },

  "&:not(:last-child)": {
    borderBottom: 0,
  },
}));

const CustomAccordionSummary = styled((props) => (
  <AccordionSummary expandIcon={<i className="fa fa-chevron-down"></i>} {...props} />
))(({ theme }) => ({
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  borderBottomLeftRadius: "10px",

  backgroundColor: "#e7e7e7",

  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },

  "&[aria-expanded=true]": {
    backgroundColor: "#999999",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },

  "& i": {
    width: "36px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "21px",
  },
}));

const CustomAccordionDetails = styled((props) => <AccordionDetails {...props} />)((theme) => ({
  backgroundColor: "white",
}));

function PhotoTherapy() {
  const dispatch = useDispatch();
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(1);
  const handleSetTabValue = (event, newValue) => {
    localStorage.setItem("lastVisitedUrlofPhotoTherapy", "");
    setTabValue(newValue);
    localStorage.setItem("photoTharepySearch", "");
  };

  const pucheslist = useSelector((state) => state?.auth?.pucheslist);
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const tokens = useSelector((state) => state?.auth?.auth?.idToken);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);

  const navigate = useNavigate();

  const UserId = useSelector((state) => state?.auth?.auth?._id);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  // // console.log("UserId", UserId);
  // const loginUser = useSelector((state) => state?.auth?.auth?.userdata);

  // const [isTokenFound, setTokenFound] = useState(false);
  // const [token, setToken] = useState("");
  // const [clientDatas, setClientDatas] = useState([]);
  // const [openUploadPhoto, setOpenUploadPhoto] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [expanded, setExpanded] = React.useState("panel0");
  const [text, setText] = useState("");
  const [groupArrays, setGroupsArrays] = useState([]);
  const [balanseZero, setBalanceZero] = useState(false);
  const [searchingDoctor, setSearchingDoctor] = useState([]);
  const [searchingClient, setSearchingClient] = useState([]);

  const handleChange = (panel) => (e, newPanel) => {
    setExpanded(newPanel ? panel : false);
  };
  // console.log("imagimag",img)
  useEffect(() => {
    dispatch(purchasePackege({ UserId, token: tokens }));
  }, []);
  useEffect(() => {
    if (userType === "client") {
      if (localStorage.getItem("lastVisitedUrlofPhotoTherapy") !== "/viewmore") {
        dispatch(
          getPhotoTheraphi({
            token: tokens,
            UserId: UserId,
            limit: postPerPage,
            pageNo: pageNo,
            searchText: { searchText: text },
          })
        );
      }
    }
    if (userType === "doctor") {
      if (localStorage.getItem("lastVisitedUrlofPhotoTherapy") !== "/viewmore") {
        if (tabValue === 1) {
          dispatch(
            getPhotoTheraphi({
              token: tokens,
              UserId: UserId,
              limit: postPerPage,
              pageNo: pageNo,
              searchText: { searchText: text },
            })
          );
        } else if (tabValue === 0) {
          dispatch(
            getDoctorPhotoTheraphi({
              token: tokens,
              UserId: UserId,
              limit: postPerPage,
              pageNo: pageNo,
              searchText: { searchText: text },
            })
          );
        }
      }
    }
  }, [tabValue, pageNo, postPerPage]);

  useEffect(() => {
    dispatch(findOneUserAction({ userId: UserId, token: tokens }));
  }, []);

  const photolist = useSelector((state) => state?.auth?.photolist);
  const photolistTotalCount = useSelector((state) => state?.auth?.photolistTotalCount);
  const doctorPhotolist = useSelector((state) => state?.auth?.doctorPhotolist);
  const doctorPhotolistTotalCount = useSelector((state) => state?.auth?.doctorPhotolistTotalCount);

  // console.log(doctorPhotolist, doctorPhotolistTotalCount, "photolistTotalCount");
  // console.log(doctorPhotolist, photolist);
  // console.log(photolist, doctorPhotolist, "doctorPhotolist");

  const handleSubmit = (e) => {
    console.log("e", e);
  };

  console.log(tabValue, userType, "axio...");

  const onloadData = async () => {
    if (userType === "doctor" && tabValue === 1) {
      const res = await axiosInstance.get(`photoTherapy/myPhotoTherapySearchList/${UserId}`, {
        headers: {
          authorization: token,
        },
      });
      setSearchingDoctor(
        res?.data?.data?.result?.map((data, i) => {
          return {
            value: data?._id,
            label: data?.name,
          };
        })
      );
    } else if (userType === "doctor" && tabValue === 0) {
      const response = await axiosInstance.get(
        `photoTherapy/clientPhotoTherapySearchList/${UserId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setSearchingClient(
        response?.data?.data?.result?.map((data, i) => {
          return {
            value: data?._id,
            label: data?.name,
          };
        })
      );
    } else if (userType === "client") {
      const res = await axiosInstance.get(`photoTherapy/myPhotoTherapySearchList/${UserId}`, {
        headers: {
          authorization: token,
        },
      });
      setSearchingDoctor(
        res?.data?.data?.result?.map((data, i) => {
          return {
            value: data?._id,
            label: data?.name,
          };
        })
      );
    }
  };

  useEffect(() => {
    onloadData();
  }, [tabValue]);

  useEffect(() => {
    if (userType === "doctor" && tabValue === 1) {
      photolist !== undefined && setGroupsArrays([...photolist]);
    } else if (userType === "doctor" && tabValue === 0) {
      doctorPhotolist !== undefined && setGroupsArrays([...doctorPhotolist]);
    } else if (userType === "client") {
      photolist !== undefined && setGroupsArrays([...photolist]);
    }
  }, [photolist, doctorPhotolist]);

  const handlePageChange = (value) => {
    setPageNo(value);
  };

  const searchTextValue = (txt) => {
    setText(txt);
  };

  const onShowSizeChange = (current, pageLimit) => {
    setPostPerPage(pageLimit);
  };

  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };
  const handleUpload = () => {
    pucheslist.some(
      (e) =>
        e.Video_Messaging_and_Photo_Therapy_Balance <= 0 ||
        e.Video_Messaging_and_Photo_Therapy_Balance == undefined
    )
      ? setBalanceZero(true)
      : navigate("/upload");
  };
  const Liveurl = "https://app.buserinstitute.com/#/photo-therapy-instructions";
  const Localurl = "http://localhost:3000/#/photo-therapy-instructions";
  const handleInstructions = () => {
    window.open(Liveurl, "_blank");
  };

  const handleContextMenu = (el, e) => {
    el.preventDefault();
    const link = document.createElement("a");
    const localhost = `http://localhost:3000/#/view-more?root=photo&id=${e?._id}&tabValue=${tabValue}`;
    const liveUrl = `https://app.buserinstitute.com/#/view-more?root=photo&id=${e?._id}&tabValue=${tabValue}`;
    // link.href = localhost;
    link.href = liveUrl;
    link.target = "_blank";
    link.click();
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mb={1} p={5}>
        {userType === "doctor" && (
          <AppBar position="static" style={{ marginTop: "0px" }}>
            <Tabs
              style={{ height: "47px" }}
              orientation={tabsOrientation}
              value={tabValue}
              onChange={handleSetTabValue}
            >
              <Tab style={{ fontWeight: "bold" }} className="tabClass" label="Client Therapy" />
              <Tab style={{ fontWeight: "bold" }} className="tabClass" label="My Therapy" />
            </Tabs>
          </AppBar>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
          <div style={{ marginRight: "2rem" }}>
            <SoftButton onClick={() => handleInstructions()} className="instructions">
              Instructions
            </SoftButton>
          </div>

          <div style={{ display: "flex" }}>
            <SoftBox>
              <PhotoTherapySearch
                tabValue={tabValue}
                UserId={UserId}
                limit={postPerPage}
                pageNo={pageNo}
                postPerPage={postPerPage}
                searchTextValue={searchTextValue}
                searchingDoctor={searchingDoctor}
                searchingClient={searchingClient}
              />
            </SoftBox>
            {tabValue !== 0 && (
              <div style={{ marginLeft: "2rem", marginTop: "5px" }}>
                <SoftButton
                  onClick={handleUpload}
                  style={{
                    color: "#344767",
                    paddingTop: "0",
                    paddingBottom: "0",
                  }}
                >
                  Upload
                </SoftButton>
              </div>
            )}
          </div>
        </div>

        {tabValue !== 0 && balanseZero && (
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "5px" }}>
            <div style={{ color: "red", fontSize: "12px" }}>
              You dont have enough credit balance
            </div>
          </div>
        )}
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            marginLeft: "3px",
            marginTop: "20px",
            // borderBottom: groupArrays?.length > 0 ? "1px solid black" : "",
          }}
        >
          {/* {console.log(groupArrays, "groupArraysss")} */}
          {groupArrays?.length > 0 &&
            groupArrays?.map((e, index) => {
              return (
                <>
                  <Grid container>
                    <>
                      <Grid xs={12}>
                        <CustomAccordion
                          // expanded={expanded === `panel${index}`}
                          onChange={handleChange(`panel${index}`)}
                          style={{ marginBottom: "5px" }}
                        >
                          <CustomAccordionSummary
                            aria-controls="panel1bh-content"
                            id="panel1a-header"
                          >
                            <div
                              style={{
                                width: "100%",
                                height: "52px",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                              }}
                            >
                              {userType === "client" && (
                                <div
                                  style={{
                                    color: "rgb(52, 71, 103)",
                                    margin: "0 1rem",

                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div>{e?.doctor?.name}</div>
                                </div>
                              )}

                              {userType === "doctor" ? (
                                tabValue === 1 ? (
                                  <div
                                    style={{
                                      color: "rgb(52, 71, 103)",
                                      margin: "0 1rem",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div>{e?.doctor?.name}</div>
                                  </div>
                                ) : tabValue === 0 ? (
                                  <>
                                    <div
                                      style={{
                                        color: "rgb(52, 71, 103)",
                                        margin: "0 1rem",
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div>{e?.patient?.name}</div>
                                    </div>
                                  </>
                                ) : userType === "client" ? (
                                  <div
                                    style={{
                                      color: "rgb(52, 71, 103)",
                                      margin: "0 1rem",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <div>{e?.doctor?.name}</div>
                                  </div>
                                ) : (
                                  ""
                                )
                              ) : (
                                ""
                              )}

                              <div
                                style={{
                                  color: "rgb(52, 71, 103)",

                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                {userType === "doctor" && tabValue === 0 && e.Status === "Pending" && (
                                  <div className="new-badge">
                                    <div className="new">New</div>
                                  </div>
                                )}
                                {tabValue === 1 && e.Status === "Cancelled" && (
                                  <div className="new-badge">
                                    <div className="new">Rejected</div>
                                  </div>
                                )}
                                <div style={{ marginRight: "8px" }}>{e?.visitDate}</div>

                                <div
                                  style={{
                                    background: "#F3F5F4",
                                    width: "40px",
                                    height: "50px",
                                    fontWeight: "lighter",
                                    overflow: "hidden",
                                    borderTopRightRadius: "10px",
                                    borderBottomRightRadius: "10px",
                                  }}
                                >
                                  {expanded === `panel${index}` ? (
                                    <ExpandMoreIcon
                                      style={{
                                        marginLeft: "5px",
                                        background: "#F3F5F4",
                                        width: "30px",
                                        height: "50px",
                                        fontWeight: "lighter",

                                        borderTopRightRadius: "10px",
                                        borderBottomRightRadius: "10px",
                                      }}
                                    />
                                  ) : (
                                    <ExpandLessIcon
                                      style={{
                                        marginLeft: "5px",
                                        background: "#F3F5F4",
                                        width: "30px",
                                        height: "50px",
                                        fontWeight: "lighter",
                                        borderTopRightRadius: "10px",
                                        borderBottomRightRadius: "10px",
                                      }}
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                          </CustomAccordionSummary>
                          <CustomAccordionDetails
                            style={{
                              borderLeft: "2px solid #F3F5F4",
                              borderRight: "2px solid #F3F5F4",
                              borderBottom: "2px solid #F3F5F4",
                              borderBottomLeftRadius: "10px",
                              borderBottomRightRadius: "10px",
                            }}
                          >
                            <div className="imageDisplay">
                              <PhotoProvider>
                                <PhotoView src={e.uploadFront}>
                                  <div className="image-wrap">
                                    <img
                                      src={e.uploadFront}
                                      className="uploadimageshow"
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  </div>
                                </PhotoView>
                              </PhotoProvider>
                              <PhotoProvider>
                                <PhotoView src={e.uploadBack}>
                                  <div className="image-wrap">
                                    <img
                                      src={e.uploadBack}
                                      className="uploadimageshow"
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  </div>
                                </PhotoView>
                              </PhotoProvider>
                              <PhotoProvider>
                                <PhotoView src={e.uploadLeft}>
                                  <div className="image-wrap">
                                    <img
                                      src={e.uploadLeft}
                                      className="uploadimageshow"
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  </div>
                                </PhotoView>
                              </PhotoProvider>
                              <PhotoProvider>
                                <PhotoView src={e.uploadRight}>
                                  <div className="image-wrap">
                                    <img
                                      src={e.uploadRight}
                                      className="uploadimageshow"
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  </div>
                                </PhotoView>
                              </PhotoProvider>
                              <div className="viewmore-wrap">
                                <SoftButton
                                  onClick={(el) => {
                                    // localStorage.setItem("NotVisitToViewMore", "yes");
                                    // navigate(
                                    //   `/view-more?root=photo&id=${e?._id}&tabValue=${tabValue}`
                                    // );
                                    handleContextMenu(el, e);
                                  }}
                                  // onContextMenu={(el) => handleContextMenu(el, e)}
                                  style={{ color: "#344767", margin: "1rem" }}
                                >
                                  view more
                                </SoftButton>
                              </div>
                            </div>
                          </CustomAccordionDetails>
                        </CustomAccordion>
                      </Grid>
                    </>
                  </Grid>
                </>
              );
            })}
        </Grid>
        {/* {console.log("11111111111111111111")} */}
        <div style={{ display: "flex", marginTop: "1rem" }} className="educationPagination">
          <Pagination
            pageNo={postPerPage}
            total={
              userType === "doctor"
                ? tabValue === 0
                  ? doctorPhotolistTotalCount
                  : tabValue === 1
                  ? photolistTotalCount
                  : ""
                : userType === "client"
                ? photolistTotalCount
                : ""
            }
            current={pageNo}
            onChange={(value) => handlePageChange(value)}
            showSizeChanger
            showQuickJumper
            onShowSizeChange={(current, value) => onShowSizeChange(current, value)}
          />
        </div>
      </SoftBox>
      <Footer />
      <DialogBox open={informConsentStatus} />
    </DashboardLayout>
  );
}

export default PhotoTherapy;
