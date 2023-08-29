// import { Pagination } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPhotosGalleryAction } from "store/actions/actions";
// import "./pagistyles.css";
import SoftButton from "components/SoftButton";
import PropTypes from "prop-types";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useLocation, useNavigate } from "react-router-dom";
import { getClientPhotosGalleryAction } from "store/actions/actions";

import { Divider, Table } from "antd";
import { clientVideoMessageTherapyAction } from "store/actions/actions";
import { getDoctorPhotoTheraphi } from "store/actions/actions";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/firebase";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
export const LoaderComponent = () => {
  return (
    <div
      style={{
        color: "#344767",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // gap: 2,
        // zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      // open={open}
      // onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </div>
  );
};
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {},
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

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

const ClientGallery = ({ tabValue, searchTextValue, pageSizeHandler, pageNoHandler }) => {
  const equipmentsList = useSelector((state) => state.auth.equipmentsList);
  const [expanded, setExpanded] = useState("panel00"); //* Expands the Photos Tab
  const [activeList, setActiveList] = useState("photo"); //* Used to have the check whether user is viewing photos or videos
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state?.auth?.auth?._id);
  const [clientVideoTherapyData, clientSetVideoTherapyData] = useState([]);
  const [videoLoader, setVideoLoader] = useState(false);

  const token = useSelector((state) => state.auth.auth.idToken); //* Token  required to send in API call
  const userType = useSelector((state) => state?.auth?.auth?.userType); //* gets the user logged is patient or Doctor
  const totalCount = useSelector((state) =>
    state.auth.clientPhotoGalley.totalCount ? state.auth.clientPhotoGalley.totalCount : null
  );
  //* Getting My Photos List
  const groupArrays = useSelector((state) =>
    state.auth.clientPhotoGalley.result ? state.auth.clientPhotoGalley.result : []
  );

  const doctorPhotolist = useSelector((state) => state?.auth?.doctorPhotolist);
  const doctorPhotolistTotalCount = useSelector((state) => state?.auth?.doctorPhotolistTotalCount);

  const clientVideoTherapyGallary = useSelector((state) =>
    state.auth.clientVideoTherapyGallary ? state.auth.clientVideoTherapyGallary : []
  );
  //* Calling My photos function
  useEffect(() => {
    if (activeList == "photo") {
      // dispatch(
      //   getClientPhotosGalleryAction({
      //     pageNo: pageNo,
      //     limit: pageSize,
      //     token,
      //     searchText: searchTextValue,
      //   })
      // );
      dispatch(
        getDoctorPhotoTheraphi({
          token: token,
          UserId: userId,
          limit: pageSize,
          pageNo: pageNo,
          searchText: { searchText: searchTextValue },
        })
      );
    } else {
      dispatch(
        clientVideoMessageTherapyAction({
          id: userId,
          pageNo: pageNo,
          limit: pageSize,
          token,
          searchText: searchTextValue,
        })
      );
    }
  }, [pageNo, pageSize, activeList, searchTextValue]);

  // useLayoutEffect(() => {
  //   let groupCustomizeData =
  //     groupArrays.length > 0
  //       ? groupArrays.map((ele, ind, arg) => {
  //           return {
  //             name: ele?.patientName,
  //             id: ele?._id,
  //             date: ele?.photoData[ele?.photoData?.length - 1]?.visitDate,
  //           };
  //         })
  //       : [];

  //   setData(groupCustomizeData);
  // }, [groupArrays]);
  // console.log(groupArrays, data, "groupsarray");

  //* Function used to handle the tab change
  const handleChange = (panel) => (e, newPanel) => {
    setExpanded(newPanel ? panel : false);
  };

  //* Handle the Page Change
  const handlePageChange = (value) => {
    setPageNo(value);
  };
  const onShowSizeChange = (current, value) => {
    setPageSize(value);
  };
  const columns = [
    {
      dataIndex: "name",
      key: "name",
    },
    {
      dataIndex: "date",
      key: "date",
    },
    {
      key: "actions",
      render: (_, record) => (
        <SoftButton type="primary" onClick={() => handleButtonClick(record)}>
          View
        </SoftButton>
      ),
    },
    // other columns...
  ];

  function handleButtonClick(data) {
    navigate(`/details?id=${data?.id}`);
  }

  const clientCallVideoTherapy = async (e, index) => {
    setVideoLoader(true);

    try {
      const combinedId =
        e?.practitionerId > e?.patient?._id
          ? e?.practitionerId + e?.patient?._id
          : e?.patient?._id + e?.practitionerId;

      // const combinedId = "64913a27c4dc8904e34fcb6d64509b00b8a8a4c4680df999";

      const querySnapshot = await getDocs(collection(db, "videoChats", combinedId, "messages"));
      // console.log("querySnapshot..", querySnapshot.data());
      const messageData = querySnapshot.docs.map((doc) => doc.data());
      const gallaryData = messageData.filter(
        (session) => session.sessionId == e._id && session?.file?.url
      );
      const newGallaryData = gallaryData.slice(0, 4);
      // clientSetVideoTherapyData(newGallaryData);
      clientSetVideoTherapyData((prevState) => {
        const updatedArray = [...prevState]; // Create a copy of the array
        updatedArray[index] = newGallaryData; // Update the value at the specified index
        return updatedArray; // Return the updated array as the new state value
      });
      setVideoLoader(false);
    } catch (err) {
      setVideoLoader(false);
      console.log(err);
    }
  };

  const openImageInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleContextMenu = (el, e) => {
    el.preventDefault();
    const link = document.createElement("a");
    // const localhost = `http://localhost:3000/#/view-more?root=photo&id=${e?._id}&tabValue=${tabValue}`
    const liveUrl = `https://app.buserinstitute.com/#/view-more?root=photo&id=${e?._id}&tabValue=${tabValue}`;
    // link.href = localhost;
    link.href = liveUrl;
    link.target = "_blank";
    link.click();
  };

  const handleContextMenu1 = (el, e) => {
    el.preventDefault();
    const link = document.createElement("a");
    // const localhost = `http://localhost:3000/#/view-more?root=video&id=${e._id}&clientId=${e?.practitionerId}&doctorId=${e?.patient?._id}`
    const liveUrl = `https://app.buserinstitute.com/#/view-more?root=video&id=${e._id}&clientId=${e?.practitionerId}&doctorId=${e?.patient?._id}`;
    // link.href = localhost;
    link.href = liveUrl;
    link.target = "_blank";
    link.click();
  };

  return (
    <Box
      container
      spacing={2}
      sx={{
        width: "100%",
        marginLeft: "3px",
        marginTop: "20px",
        // borderBottom: groupArrays?.length > 0 ? "1px solid black" : "",
      }}
    >
      <FormControl>
        <RadioGroup
          row
          value={activeList}
          onChange={(e) => setActiveList(e.target.value)}
          style={{ paddingLeft: "13px" }}
        >
          <FormControlLabel value={"photo"} control={<Radio />} label="Photo Therapy" />
          <FormControlLabel value={"video"} control={<Radio />} label="Video Therapy" />
        </RadioGroup>
      </FormControl>
      {/* <Table dataSource={data} columns={columns} showHeader={false} pagination={false} /> */}
      {
        activeList == "photo" ? (
          doctorPhotolist && doctorPhotolist?.length > 0 ? (
            doctorPhotolist?.map((e, index, grp) => {
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

                              <div
                                style={{
                                  color: "rgb(52, 71, 103)",

                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
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
                                {" "}
                                <SoftButton
                                  // onClick={() => navigate(`/view-more?root=photo&id=${e?._id}&tabValue=${tabValue}`)}
                                  style={{ color: "#344767", margin: "1rem" }}
                                  onClick={(el) => handleContextMenu(el, e)}
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
            })
          ) : (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              No Found Data
            </p>
          )
        ) : clientVideoTherapyGallary && clientVideoTherapyGallary?.length > 0 ? (
          clientVideoTherapyGallary?.map((e, index, grp) => {
            return (
              <>
                <Grid container>
                  <>
                    <Grid xs={12}>
                      <CustomAccordion
                        // expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        style={{ marginBottom: "5px" }}
                        onClick={() => clientCallVideoTherapy(e, index)}
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

                            <div
                              style={{
                                color: "rgb(52, 71, 103)",

                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
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
                          <div
                            // style={{
                            //   display: "flex",
                            //   justifyContent: "space-between",
                            // }}
                            className="imageDisplay"
                          >
                            {clientVideoTherapyData[index] &&
                            clientVideoTherapyData[index]?.length > 0 ? (
                              clientVideoTherapyData[index].map((ele, i) => {
                                let extention = ele?.file?.type.split("/");
                                return (
                                  <>
                                    {extention[0] == "image" ? (
                                      <div
                                        onClick={() => openImageInNewTab(ele?.file?.url)}
                                        key={i}
                                        className="image-wrap"
                                      >
                                        <PhotoProvider>
                                          <PhotoView src={ele?.file?.url}>
                                            <img src={ele?.file?.url} className="uploadimageshow" />
                                          </PhotoView>
                                        </PhotoProvider>
                                      </div>
                                    ) : (
                                      <div
                                        onClick={() => openImageInNewTab(ele?.file?.url)}
                                        key={i}
                                        className="video_wrap"
                                      >
                                        <video
                                          className="card-content"
                                          height="100%"
                                          width="100%"
                                          autoPlay={false}
                                          muted
                                          controls
                                        >
                                          <source src={ele?.file?.url} type="video/mp4" />
                                          Your browser does not support HTML video.
                                        </video>
                                      </div>
                                    )}
                                  </>
                                );
                              })
                            ) : (
                              <h5>No Data Found</h5>
                            )}
                            <div className="viewmore-wrap">
                              <SoftButton
                                style={{ color: "#344767", marginLeft: "1rem" }}
                                onClick={(el) => handleContextMenu1(el, e)}
                              >
                                view more
                              </SoftButton>
                            </div>
                          </div>
                          {/* <VideoTherapy e={e} videoTherapyData={videoTherapyData} /> */}
                        </CustomAccordionDetails>
                      </CustomAccordion>
                    </Grid>
                  </>
                </Grid>
              </>
            );
          })
        ) : (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            No Found Data
          </p>
        )
        // <h5>video...</h5>
      }
      <div style={{ marginTop: "1rem" }}>
        <Pagination
          pageSize={pageSize}
          total={totalCount}
          current={pageNo}
          onChange={(value) => handlePageChange(value)}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={(current, value) => onShowSizeChange(current, value)}
        />
      </div>
    </Box>
  );
};

ClientGallery.propTypes = {
  tabValue: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  searchTextValue: PropTypes.string,
  pageSizeHandler: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  pageNoHandler: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
export default ClientGallery;
