import React, { useEffect, useState } from "react";
import PageLayout from "examples/LayoutContainers/PageLayout";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import SoftButton from "components/SoftButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import "./FoundationFunctionVideos.scss";
import { PopupButton } from "@typeform/embed-react";
import { axiosInstance } from "services/AxiosInstance";
import { useParams } from "react-router-dom";
import Quiz from "react-quiz-component";
import { AiOutlineClose } from "react-icons/ai";

const FoundationFunctionVideos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [sessionQuiz, setSessionQuiz] = useState("");
  const token = useSelector((state) => state.auth.auth.idToken);
  const [sessionDetails, setSessionDetails] = useState([]);
  const { id } = useParams();
  const fetchDetails = async () => {
    try {
      const res = await axiosInstance.get(
        `EducationMaterial/educationOnDemandSessionDetail/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data.data, "aa");
      if (res.status === 200) {
        setSessionDetails(res?.data?.data?.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  const handleModalOpen = (item) => {
    setOpenModal(true);
    setSessionQuiz(item);
  };
  const closeModal = () => {
    setOpenModal(false);
    setSessionQuiz("");
  };
  console.log(sessionQuiz, "oo");
  return (
    <PageLayout>
      <Box position={"relative"} flexDirection={"column"} px={10} py={6} gap={2}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <SoftButton
            onClick={() => {
              navigate(-1);
            }}
            variant="gradient"
            color="dark"
          >
            Back
          </SoftButton>
          {/* <Typography variant="h3" textAlign={"center"}>
            {sessionDetails && sessionDetails?.serviceName}
          </Typography> */}

          <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={2}>
            <SoftButton
              target="_blank"
              rel="noreferrer"
              href="https://buser-photos-gallery.s3.amazonaws.com/FoundofFunction.pdf"
              download
            >
              foundation of function
            </SoftButton>
            <SoftButton
              target="_blank"
              rel="noreferrer"
              href="https://buser-photos-gallery.s3.amazonaws.com/posturelate+book.pdf"
              download
            >
              Posturelate book
            </SoftButton>
          </Box>
        </Box>
        <Box>
          <Box
            className="foundation_video_container"
            my={3}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={6}
          >
            {sessionDetails.length > 0 &&
              sessionDetails?.map((list, index) => (
                <Box className="foundation_video_wrapper" key={index}>
                  <Typography textAlign={"center"} variant="h5">
                    {list?.name}
                  </Typography>
                  <ReactPlayer url={list.link} controls width="100%" />
                  <Box display={"flex"} justifyContent={"flex-end"}>
                    {list?.quiz && (
                      <SoftButton className="Quiz-button" onClick={() => handleModalOpen(list)}>
                        View Quiz
                      </SoftButton>
                    )}
                    {/* {list?.formId && (
                      <PopupButton id={list?.formId} className="Quiz_button">
                        Start Quiz
                      </PopupButton>
                    )} */}
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
      <Dialog fullWidth maxWidth={"lg"} open={openModal} >
        <DialogTitle display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h5">{sessionQuiz.name} Quiz</Typography>
          <IconButton
            onClick={closeModal}
            sx={{
              position: "absolute",
              right: "5px",
              top: "5px",
            }}
          >
            <AiOutlineClose color="black" size={24} />
          </IconButton>
        </DialogTitle>

        <DialogContent className="quiz-wraper" sx={{ padding: "20px" }}>
          {sessionQuiz && <Quiz disableSynopsis quiz={sessionQuiz?.quiz[0]} />}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default FoundationFunctionVideos;
