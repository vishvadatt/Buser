import { Grid, Box, Dialog, DialogTitle, DialogContent } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import PageLayout from "examples/LayoutContainers/PageLayout";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_ACTION } from "store/actions/actions";
import { VMT_PURCHASED_VIDEO_LIST_ACTION } from "store/actions/actions";
import { VMT_PURCHASED_VIDEO_DETAILS } from "store/actions/actions";
import { PT_GRANDE_LIST_ACTION } from "store/actions/actions";
import { PT_PURCHASED_DETAILS } from "store/actions/actions";
import { BsDot } from "react-icons/bs";
import { BsCheckCircle } from "react-icons/bs";

const Videos = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const grandeRoundPurchasedVideoList = useSelector(
    (state) => state?.auth?.grandeRoundPurchasedVideoList
  );
  const grandeRoundPurchasedVMTList = useSelector(
    (state) => state?.auth?.grandeRoundPurchasedVMTList
  );
  const grandeRoundPTList = useSelector((state) => state?.auth?.grandeRoundPTList);

  console.log(grandeRoundPurchasedVMTList, "edd");
  console.log(grandeRoundPTList, "sd");
  console.log(grandeRoundPurchasedVideoList, "eddd");

  useEffect(() => {
    dispatch(LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_ACTION({ token }));
    dispatch(VMT_PURCHASED_VIDEO_LIST_ACTION({ token }));
    dispatch(PT_GRANDE_LIST_ACTION({ token }));
  }, []);

  const dividedArrays = _.groupBy(grandeRoundPurchasedVideoList, "therapyType");
  const LiveInPersonList = dividedArrays["Live in person therapy"] || [];
  const LiveVideoList = dividedArrays["Live video therapy"] || [];

  const handleVideo = (video) => {
    navigate(`/Education-Material/GrandeRoundPurchasedVideos/VideoAndQuiz/${video._id}`);
  };
  const handleVMTVideo = (video) => {
    dispatch(VMT_PURCHASED_VIDEO_DETAILS({ video }));
    navigate(`/Education-Material/GrandeRoundPurchasedVideos/VMTVideoAndQuiz`);
  };
  const handlePT = (photo) => {
    dispatch(PT_PURCHASED_DETAILS({ photo }));
    navigate("/Education-Material/GrandeRoundPurchasedVideos/PTPhotoAndQuiz");
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
              Grande Round Education Purchased Archives
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
        <Grid container spacing={2}>
          <Grid bgcolor={"#f1f1f1"} minHeight={150} item xs={12}>
            <SoftTypography textGradient fontWeight="bold">
              Video Messaging Therapy
            </SoftTypography>
            <Box>
              {grandeRoundPurchasedVMTList &&
                grandeRoundPurchasedVMTList?.map((video, index) => (
                  <Box
                    key={index}
                    onClick={() => handleVMTVideo(video)}
                    style={{ cursor: "pointer", display: "flex" }}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      {video?.completeQuiz &&
                      video?.completeQuiz.length > 0 &&
                      video?.completeQuiz.includes(userId) ? (
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

          <Grid bgcolor={"#d7d7d7"} minHeight={150} item xs={12}>
            <SoftTypography textGradient fontWeight="bold">
              Photo Therapy
            </SoftTypography>
            <Box>
              {grandeRoundPTList &&
                grandeRoundPTList?.map((video, index) => (
                  <Box
                    key={index}
                    onClick={() => handlePT(video)}
                    style={{ cursor: "pointer", display: "flex" }}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      {video?.completeQuiz &&
                      video?.completeQuiz.length > 0 &&
                      video?.completeQuiz.includes(userId) ? (
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

          <Grid bgcolor={"#f1f1f1"} minHeight={150} item xs={12}>
            <SoftTypography textGradient fontWeight="bold">
              Live Video Therapy
            </SoftTypography>
            <Box>
              {LiveVideoList?.map((video, index) => (
                <Box
                  key={index}
                  onClick={() => handleVideo(video)}
                  style={{ cursor: "pointer", display: "flex" }}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    {video?.completeQuiz &&
                    video?.completeQuiz.length > 0 &&
                    video?.completeQuiz.includes(userId) ? (
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

          <Grid bgcolor={"#d7d7d7"} minHeight={150} item xs={12}>
            <SoftTypography textGradient fontWeight="bold">
              Live In-Person Therapy
            </SoftTypography>
            <Box>
              {LiveInPersonList?.map((video, index) => (
                <Box
                  key={index}
                  onClick={() => handleVideo(video)}
                  style={{ cursor: "pointer", display: "flex" }}
                >
                  <Box display={"flex"} alignItems={"center"}>
                    {video?.completeQuiz &&
                    video?.completeQuiz.length > 0 &&
                    video?.completeQuiz.includes(userId) ? (
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
    </PageLayout>
  );
};

export default Videos;
