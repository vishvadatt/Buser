import { Box, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import PageLayout from "examples/LayoutContainers/PageLayout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Quiz from "react-quiz-component";
import { db } from "../../../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { CLEAR_VMT_PURCHASED_VIDEO_DETAILS } from "store/actions/actions";
import { axiosInstance } from "services/AxiosInstance";

const VMTVideoAndQuiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [vmtDetails, setVMTDetails] = useState([]);
  const token = useSelector((state) => state.auth.auth.idToken);

  const VMTPurchasedVideoDetails = useSelector(
    (state) => state?.auth?.VMTPurchasedVideoDetails?.video
  );

  console.log(VMTPurchasedVideoDetails, "ss");

  const clientId = VMTPurchasedVideoDetails?.clientId;
  const doctorId = VMTPurchasedVideoDetails?.practitionerId;
  const imageid = VMTPurchasedVideoDetails?.videoMessagingTherapyId;

  const videoTherapyData = async () => {
    try {
      const combinedId = clientId > doctorId ? clientId + doctorId : doctorId + clientId;
      const querySnapshot = await getDocs(collection(db, "videoChats", combinedId, "messages"));
      const messageData = querySnapshot.docs.map((doc) => doc.data());
      const gallaryData = messageData.filter(
        (session) => session.sessionId == imageid && session?.file?.url
      );
      console.log("gallaryData..", gallaryData);
      setVMTDetails(gallaryData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    videoTherapyData();
  }, []);

  const setQuizResult = async (obj) => {
    console.log(obj);
    try {
      const id = VMTPurchasedVideoDetails?.videoMessagingTherapyId;
      const res = await axiosInstance.get(`videoMsgSession/videoMessagingCompleteQuiz/${id}`, {
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
            <SoftTypography className="video-page-title1">
              {VMTPurchasedVideoDetails?.VMTName}
            </SoftTypography>
          </SoftBox>
          <SoftBox className="video-page-header-action">
            <SoftButton
              onClick={() => {
                dispatch(CLEAR_VMT_PURCHASED_VIDEO_DETAILS());
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
        <SoftBox width={"80%"}>
          <Grid container spacing={2}>
            {vmtDetails && vmtDetails?.length > 0 ? (
              vmtDetails?.map((ele, i) => {
                let extention = ele?.file?.type.split("/");
                return (
                  <Grid item lg={3} sm={6} xs={12} key={i}>
                    <div
                      className="uploadimage"
                      style={{
                        height: "300px",
                        width: "100%",
                        padding: "1px",
                        borderRadius: "10px",
                      }}
                    >
                      {extention[0] == "image" ? (
                        <PhotoProvider>
                          <PhotoView src={ele?.file?.url}>
                            <img
                              src={ele?.file?.url}
                              className="uploadimageshow"
                              style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: "10px",
                              }}
                            />
                          </PhotoView>
                        </PhotoProvider>
                      ) : (
                        <video
                          className="card-content"
                          height="100%"
                          width="100%"
                          autoPlay={false}
                          loop
                          muted
                          controls
                        >
                          <source src={ele?.file?.url} type="video/mp4" />
                          Your browser does not support HTML video.
                        </video>
                      )}
                    </div>
                  </Grid>
                );
              })
            ) : (
              <h5>No Data Found</h5>
            )}
          </Grid>
        </SoftBox>
        {VMTPurchasedVideoDetails && VMTPurchasedVideoDetails?.sequenceImage && (
          <Box className="sequence-img">
            <img src={VMTPurchasedVideoDetails?.sequenceImage} alt="Sequence Image" />
          </Box>
        )}
        {VMTPurchasedVideoDetails &&
          VMTPurchasedVideoDetails?.quiz &&
          VMTPurchasedVideoDetails?.quiz.length > 0 && (
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
          {VMTPurchasedVideoDetails &&
            VMTPurchasedVideoDetails?.quiz &&
            VMTPurchasedVideoDetails?.quiz.length > 0 && (
              <Quiz
                disableSynopsis
                quiz={VMTPurchasedVideoDetails?.quiz[0]}
                onComplete={setQuizResult}
              />
            )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default VMTVideoAndQuiz;
