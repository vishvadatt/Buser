import PageLayout from "examples/LayoutContainers/PageLayout";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import "./index.scss";
import Quiz from "react-quiz-component";
import { axiosInstance } from "services/AxiosInstance";
import { useSelector } from "react-redux";

const ViewVideoAndQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [video, setVideo] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const token = useSelector((state) => state.auth.auth.idToken);

  const fetchDetails = async () => {
    try {
      const res = await axiosInstance.get(
        `EducationMaterial/myPurchaseEducationVideoDetail/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (res?.status === 200) {
        setVideo(res?.data?.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [id]);

  console.log(video, "axx");

  const setQuizResult = async (obj) => {
    console.log(obj);
    try {
      const id = video[0]?.AppointmentMeetingLinkId;
      const res = await axiosInstance.get(`doctorAppointmentSlot/completeQuiz/${id}`, {
        headers: {
          authorization: token,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <Box position={"relative"} px={10} py={5}>
        <SoftBox className="video-page-header">
          <SoftBox>
            <SoftTypography className="video-page-title1">{video[0]?.videoName}</SoftTypography>
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
                top: 50,
                left: 55,
              }}
            >
              Back
            </SoftButton>
          </SoftBox>
        </SoftBox>
        {video.length > 0 && video[0]?.completeMeetingLink && (
          <div className="video-div1">
            <ReactPlayer url={video[0]?.completeMeetingLink} controls width="100%" height="100%" />
          </div>
        )}

        {video.length > 0 && video[0]?.sequenceImage && (
          <Box className="sequence-img">
            <img src={video[0]?.sequenceImage} alt="Sequence Image" />
          </Box>
        )}
        {video?.length > 0 && video[0]?.quiz && (
          <div className="quiz">
            <SoftButton
              onClick={() => {
                setOpenModal(true);
              }}
              variant="gradient"
              color="dark"
              sx={{
                position: "absolute",
                top: 50,
                right: 55,
              }}
            >
              View Quiz
            </SoftButton>
          </div>
        )}
      </Box>
      <Dialog fullWidth maxWidth={"lg"} open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle sx={{ margin: "auto" }}>Quiz</DialogTitle>
        <DialogContent className="quiz-wraper" sx={{ padding: "20px" }}>
          {video?.length > 0 && video[0]?.quiz && (
            <Quiz quiz={video[0]?.quiz[0]} disableSynopsis onComplete={setQuizResult} />
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default ViewVideoAndQuiz;
