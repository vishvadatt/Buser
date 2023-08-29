import { Grid, Modal, IconButton, Box } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import PageLayout from "examples/LayoutContainers/PageLayout";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_ACTION } from "store/actions/actions";
import { axiosInstance } from "services/AxiosInstance";
import { DOCTOR_PURCHASE_SERVICE_LIST_ACTION } from "store/actions/actions";
import { VMT_VIDEO_LIST_ACTION } from "store/actions/actions";
import { PT_GRANDE_LIST_ACTION } from "store/actions/actions";
import { BsDot } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

const Videos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  // const [searchText, setSearchText] = useState("");
  const token = useSelector((state) => state.auth.auth.idToken);
  const grandeRoundVideoList = useSelector((state) => state?.auth?.grandeRoundVideoList);
  const grandeRoundVMTVideoList = useSelector((state) => state?.auth?.grandeRoundVMTVideoList);
  const grandeRoundPTList = useSelector((state) => state?.auth?.grandeRoundPTList);
  const doctorServiceList = useSelector((state) => state.auth.doctorAllServiceList?.result);

  // console.log(grandeRoundVideoList, "ed");
  // console.log(grandeRoundVMTVideoList, "edd");
  // // console.log(doctorServiceList, "ed");
  // console.log(grandeRoundPTList, "ed");

  useEffect(() => {
    dispatch(LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_ACTION({ token }));
    dispatch(VMT_VIDEO_LIST_ACTION({ token }));
    dispatch(PT_GRANDE_LIST_ACTION({ token }));
    dispatch(DOCTOR_PURCHASE_SERVICE_LIST_ACTION({ token }));
  }, []);

  const dividedArrays = _.groupBy(grandeRoundVideoList, "therapyType");
  
  const LiveInPersonList = dividedArrays["Live in person therapy"] || [];

  const LiveVideoList = dividedArrays["Live video therapy"] || [];

  const handleModalOpen = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedVideo(null);
    setModalOpen(false);
  };

  // console.log(selectedVideo, "ax");
  // console.log(doctorServiceList, "dcc");

  const check = doctorServiceList.filter((item) => {
    return item.packageName === selectedVideo?.planName;
  });

  const vmt = doctorServiceList.filter((item) => {
    return (
      item.packageName === "Video Message / Photo Therapy Case Study, (1 case study per purchase)"
    );
  });
  const liveVideo = doctorServiceList.filter((item) => {
    return (
      item.packageName === "Live Video (online) Therapy Case Study, (1 case study per purchase)"
    );
  });
  const liveInperson = doctorServiceList.filter((item) => {
    return item.packageName === "Live In-Person Therapy Case Study, (1 case study per purchase)";
  });
  // console.log(check,"dcc");
  // console.log(vmt, liveInperson, liveVideo, "asd");

  const handlePurchase = async () => {
    try {
      if (selectedVideo?.photoPlanId) {
        const res = await axiosInstance.post(
          "EducationMaterial/purchasePhotoTherapyEducation",
          {
            photoTherapyId: selectedVideo?._id,
            photoName: selectedVideo?.photoName,
            photoPlanId: selectedVideo?.photoPlanId,
            planName: selectedVideo?.planName,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(res);

        if (res.status === 200) {
          dispatch(PT_GRANDE_LIST_ACTION({ token }));
          dispatch(DOCTOR_PURCHASE_SERVICE_LIST_ACTION({ token }));
          handleModalClose();
        }
      } else if (selectedVideo?.videoMessagingPlanId) {
        const res = await axiosInstance.post(
          "videoMsgSession/purchaseVmtEducation",
          {
            videoMessagingTherapyId: selectedVideo?._id,
            VMTName: selectedVideo?.VMTName,
            planId: selectedVideo?.videoMessagingPlanId,
            planName: selectedVideo?.planName,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(res);

        if (res.status === 200) {
          dispatch(VMT_VIDEO_LIST_ACTION({ token }));
          dispatch(DOCTOR_PURCHASE_SERVICE_LIST_ACTION({ token }));
          handleModalClose();
        }
      } else {
        const newData = {
          AppointmentMeetingLinkId: selectedVideo?._id,
          therapyType: selectedVideo?.therapyType,
          completeMeetingLink: selectedVideo?.completeMeetingLink,
          videoName: selectedVideo?.videoName,
          videoPlanId: selectedVideo?.videoPlanId,
          planName: selectedVideo?.planName,
        };
        const res = await axiosInstance.post("EducationMaterial/purchaseEducationVideo", newData, {
          headers: {
            Authorization: token,
          },
        });
        console.log(res);

        if (res.status === 200) {
          dispatch(LIVE_VIDEO_AND_INPERSON_VIDEO_LIST_ACTION({ token }));
          dispatch(DOCTOR_PURCHASE_SERVICE_LIST_ACTION({ token }));
          handleModalClose();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <Box
        display={"flex"}
        flexDirection={"column"}
        position={"relative"}
        minHeight={"100vh"}
        px={10}
        py={6}
      >
        <SoftBox className="video-page-header">
          <SoftBox>
            <SoftTypography className="video-page-title">
              Grande Round Education Archives Library
            </SoftTypography>
          </SoftBox>
          <SoftBox className="video-page-header-action">
            <SoftButton
              onClick={() => {
                navigate(-1);
              }}
              variant="gradient"
              color="dark"
              sx={{
                position: "absolute",
                top: 55,
                left: 55,
              }}
            >
              Back
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <Grid flex={1} container spacing={2} height={"100%"}>
          <Grid bgcolor={"#f1f1f1"} item xs={12} height={400} borderBottom={"2px solid white"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <SoftTypography
                textGradient
                fontWeight="bold"
                sx={{ fontSize: "16px", marginBottom: "5px", textAlign: "center" }}
              >
                Remaining Credit: {vmt.length > 0 ? vmt[0]?.remainingCredit : 0}
              </SoftTypography>
            </Box>
            <Grid container mt={1} spacing={1.5} height={"100%"}>
              <Grid item md={6} xs={12} borderRight={"2px solid white"}>
                <SoftTypography
                  textGradient
                  fontWeight="bold"
                  sx={{ textAlign: "center", width: "100%" }}
                >
                  Video Messaging Therapy
                </SoftTypography>

                <Box>
                  {grandeRoundVMTVideoList &&
                    grandeRoundVMTVideoList?.map((video, index) => (
                      <Box
                        key={index}
                        onClick={
                          video?.purchaseVMT.length === 0 ? () => handleModalOpen(video) : null
                        }
                        style={{
                          cursor: video?.purchaseVMT.length === 0 ? "pointer" : "default",
                          display: "flex",
                        }}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          {video?.purchaseVMT.length > 0 ? (
                            <Box paddingLeft={"7px"} marginRight={"7px"}>
                              <BsCheckCircle style={{ fontSize: "12px", color: "darkgreen" }} />
                            </Box>
                          ) : (
                            <BsDot style={{ fontSize: "26px" }} />
                          )}
                        </Box>
                        <Box>{video.VMTName ?? "no name"}</Box>
                      </Box>
                    ))}
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <SoftTypography
                  textGradient
                  fontWeight="bold"
                  sx={{ textAlign: "center", width: "100%" }}
                >
                  Photo Therapy
                </SoftTypography>

                <Box>
                  {grandeRoundPTList &&
                    grandeRoundPTList?.map((video, index) => (
                      <Box
                        key={index}
                        onClick={
                          video?.purchasePhotoTherapy.length === 0
                            ? () => handleModalOpen(video)
                            : null
                        }
                        style={{
                          cursor: video?.purchasePhotoTherapy.length === 0 ? "pointer" : "default",
                          display: "flex",
                        }}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          {video?.purchasePhotoTherapy.length > 0 ? (
                            <Box paddingLeft={"7px"} marginRight={"7px"}>
                              <BsCheckCircle style={{ fontSize: "12px", color: "darkgreen" }} />
                            </Box>
                          ) : (
                            <BsDot style={{ fontSize: "26px" }} />
                          )}
                        </Box>
                        <Box>{video.photoName ?? "no name"}</Box>
                      </Box>
                    ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid bgcolor={"#d7d7d7"} item xs={12} md={6} height={400} overflow={"scroll"}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <SoftTypography
                textGradient
                fontWeight="bold"
                sx={{ fontSize: "16px", marginBottom: "5px", textAlign: "center" }}
              >
                Remaining Credit: {liveVideo.length > 0 ? liveVideo[0]?.remainingCredit : 0}
              </SoftTypography>

              <SoftTypography textGradient fontWeight="bold">
                Live Video Therapy
              </SoftTypography>
            </Box>
            <Box>
              {LiveVideoList?.map((video, index) => (
                <Box
                  key={index}
                  onClick={video?.purchaseVideo.length === 0 ? () => handleModalOpen(video) : null}
                  style={{
                    cursor: video?.purchaseVideo.length === 0 ? "pointer" : "default",
                    display: "flex",
                  }}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    {video?.purchaseVideo.length > 0 ? (
                      <Box paddingLeft={"7px"} marginRight={"7px"}>
                        <BsCheckCircle style={{ fontSize: "12px", color: "darkgreen" }} />
                      </Box>
                    ) : (
                      <BsDot style={{ fontSize: "26px" }} />
                    )}
                  </Box>
                  <Box>{video.videoName ?? "no name"}</Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid
            bgcolor={"#d7d7d7"}
            item
            xs={12}
            md={6}
            height={400}
            overflow={"scroll"}
            borderLeft={"2px solid white"}
          >
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <SoftTypography
                textGradient
                fontWeight="bold"
                sx={{ fontSize: "16px", textAlign: "center", marginBottom: "5px" }}
              >
                Remaining Credit: {liveInperson.length > 0 ? liveInperson[0]?.remainingCredit : 0}
              </SoftTypography>
              <SoftTypography textGradient fontWeight="bold">
                Live In-Person Therapy
              </SoftTypography>
            </Box>
            <Box>
              {LiveInPersonList?.map((video, index) => (
                <Box
                  key={index}
                  onClick={video?.purchaseVideo.length === 0 ? () => handleModalOpen(video) : null}
                  style={{
                    cursor: video?.purchaseVideo.length === 0 ? "pointer" : "default",
                    display: "flex",
                  }}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    {video?.purchaseVideo.length > 0 ? (
                      <Box paddingLeft={"7px"} marginRight={"7px"}>
                        <BsCheckCircle style={{ fontSize: "12px", color: "darkgreen" }} />
                      </Box>
                    ) : (
                      <BsDot style={{ fontSize: "26px" }} />
                    )}
                  </Box>
                  <Box>{video.videoName ?? "no name"}</Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Modal open={modalOpen}>
        <div className="modal-content1">
          <div className="close-icon">
            <CloseIcon onClick={handleModalClose} className="icon" />
          </div>

          <div className="video-div">
            {selectedVideo?.purchaseVideo && selectedVideo?.purchaseVideo?.length > 0 ? (
              <SoftTypography>You Have Already Purchased This Video</SoftTypography>
            ) : selectedVideo?.purchaseVMT && selectedVideo?.purchaseVMT?.length > 0 ? (
              <SoftTypography>You Have Already Purchased This Video</SoftTypography>
            ) : selectedVideo?.purchasePhotoTherapy &&
              selectedVideo?.purchasePhotoTherapy?.length > 0 ? (
              <SoftTypography>You Have Already Purchased This Video</SoftTypography>
            ) : (check && check.length === 0) || check[0]?.remainingCredit < 1 ? (
              <SoftTypography>You Don&apos;t Have credit For this Video.</SoftTypography>
            ) : check && check[0]?.remainingCredit > 0 ? (
              <>
                <SoftTypography>Please Purchase This Video </SoftTypography>
                <SoftButton className="Purchase-btn" onClick={handlePurchase}>
                  Purchase
                </SoftButton>
              </>
            ) : null}
          </div>
        </div>
      </Modal>
    </PageLayout>
  );
};

export default Videos;
