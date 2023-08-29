import { Box, Button, Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import PageLayout from "examples/LayoutContainers/PageLayout";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Quiz from "react-quiz-component";
import { useNavigate } from "react-router-dom";
import { CLEAR_PT_PURCHASED_DETAILS } from "store/actions/actions";
import axios from "axios";
import "./index.scss";
import RedLines from "layouts/pages/Photo Therapy/components/RedLines";
import { axiosInstance } from "services/AxiosInstance";

const PTPhotoAndQuiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ptDetails, setPTDetails] = useState([]);
  const [edit, setEdit] = useState(false);
  const [coordinatesData, setCoordinatesData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [lineData, setLineData] = useState();
  const token = useSelector((state) => state.auth.auth.idToken);
  const PTPurchasedDetails = useSelector((state) => state?.auth?.PTPurchasedDetails?.photo);

  console.log(PTPurchasedDetails, "df");

  const photoTherapy = async () => {
    try {
      const id = PTPurchasedDetails._id;
      const response = await axios.get(
        `https://api.buserinstitute.com/api/photoTherapy/photoTherapyDetail/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setPTDetails(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    photoTherapy();
  }, []);

  console.log(ptDetails, "dd");

  useEffect(() => {
    if (ptDetails) {
      if (ptDetails?.lineData) {
        setLineData({ ...ptDetails?.lineData });
      } else {
        setLineData({
          front: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
          back: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
          left: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
          right: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
          hoh: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
          pt: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
          dog: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
          cat: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
          both: {
            lineX: [{ top: "50%", left: "-100%", width: "300%" }],
            lineY: [{ top: "-100%", left: "50%", height: "300%" }],
            rotateX: 0,
            rotateY: 0,
          },
        });
      }
    }
  }, [ptDetails]);

  function getData(param) {
    setCoordinatesData(param);
  }

  const setQuizResult = async (obj) => {
    console.log(obj);
    try {
      const res = await axiosInstance.get(
        `photoTherapy/photoTherapyCompleteQuiz/${ptDetails._id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
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
            <SoftTypography className="video-page-title1">{ptDetails?.photoName}</SoftTypography>
          </SoftBox>
          <SoftBox className="video-page-header-action">
            <SoftButton
              onClick={() => {
                dispatch(CLEAR_PT_PURCHASED_DETAILS());
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
        <SoftBox>
          <>
            <Grid container spacing={1}>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Front
                  <input
                    hidden
                    name="uploadFront"
                    id="files"
                    accept="image/*"
                    multiple
                    type="file"
                  />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "front" ? "front" : false}
                    getdata={getData}
                    line_data={lineData && lineData.front}
                  >
                    <img src={ptDetails?.uploadFront} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :
                        <img
                          src={ptDetails?.uploadFront}
                          className="uploadimageshow"
                        />
                      } */}
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Back
                  <input
                    hidden
                    name="uploadBack"
                    id="files"
                    accept="image/*"
                    multiple
                    type="file"
                  />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "back" ? "back" : false}
                    getdata={getData}
                    line_data={lineData && lineData.back}
                  >
                    <img src={ptDetails?.uploadBack} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :
                        <img src={ptDetails?.uploadBack} className="uploadimageshow" />
                      } */}
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Left
                  <input hidden name="uploadLeft" accept="image/*" multiple type="file" />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "left" ? "left" : false}
                    getdata={getData}
                    line_data={lineData && lineData.left}
                  >
                    <img src={ptDetails?.uploadLeft} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :  
                    <img src={ptDetails?.uploadLeft} className="uploadimageshow" />
                    } */}
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Right
                  <input hidden name="uploadRight" accept="image/*" multiple type="file" />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "right" ? "right" : false}
                    getdata={getData}
                    line_data={lineData && lineData.right}
                  >
                    <img src={ptDetails?.uploadRight} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :
                      <img src={ptDetails?.uploadRight} className="uploadimageshow" />
                      } */}
                </div>
              </Grid>
            </Grid>

            <Grid container spacing={1} mt={4}>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Right Side Hands-on-Head
                  <input hidden name="uploadHandsOnHead" accept="image/*" multiple type="file" />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "hoh" ? "hoh" : false}
                    getdata={getData}
                    line_data={lineData && lineData.hoh}
                  >
                    <img src={ptDetails?.uploadHandsOnHead} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :  
                    <img src={ptDetails?.uploadHandsOnHead} className="uploadimageshow" />
                    } */}
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Right Side Pidgeon Toed
                  <input hidden name="uploadPidgeonToed" accept="image/*" multiple type="file" />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "pt" ? "pt" : false}
                    getdata={getData}
                    line_data={lineData && lineData.pt}
                  >
                    <img src={ptDetails?.uploadPidgeonToed} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :
                      <img src={ptDetails?.uploadPidgeonToed} className="uploadimageshow" />
                      } */}
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Right Side Both
                  <input hidden name="uploadBoth" accept="image/*" multiple type="file" />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "both" ? "both" : false}
                    getdata={getData}
                    line_data={lineData && lineData.both}
                  >
                    <img src={ptDetails?.uploadBoth} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :
                      <img src={ptDetails?.uploadBoth} className="uploadimageshow" />
                      } */}
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Right Side cat
                  <input hidden name="uploadCat" accept="image/*" multiple type="file" />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "cat" ? "cat" : false}
                    getdata={getData}
                    line_data={lineData && lineData.cat}
                  >
                    <img src={ptDetails?.uploadCat} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :
                      <img src={ptDetails?.uploadCat} className="uploadimageshow" />
                      } */}
                </div>
              </Grid>
              <Grid item lg={3} sm={6} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  style={{ width: "100%" }}
                  disabled={true}
                >
                  Right Side Dog
                  <input hidden name="uploadDog" accept="image/*" multiple type="file" />
                </Button>
                <div className="uploadimage">
                  <RedLines
                    editTitle={edit == "dog" ? "dog" : false}
                    getdata={getData}
                    line_data={lineData && lineData.dog}
                  >
                    <img src={ptDetails?.uploadDog} className="uploadimageshow_viewmore" />
                  </RedLines>
                  {/* :
                      <img src={ptDetails?.uploadDog} className="uploadimageshow" />
                      } */}
                </div>
              </Grid>
            </Grid>

            {/* <Grid item xs={12} spacing={2} mt={5}>
              <ol style={{ paddingLeft: "20px", fontSize: "18px" }}>
                {ptDetails?.quesAnsData?.map((item, ind) => (
                  <li style={{ marginBottom: "2rem" }} key={ind}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          fontSize: "18px",
                        }}
                      >
                        {item?.question}
                      </div>
                      <div style={{ fontSize: "15px" }}>{item?.answer}</div>
                    </div>
                  </li>
                ))}
              </ol>
              {ptDetails?.description && (
                <div style={{ marginBottom: "2rem", marginLeft: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "18px",
                    }}
                  >
                    Description
                  </div>
                  <div style={{ fontSize: "15px" }}>{ptDetails?.description}</div>
                </div>
              )}
              {ptDetails?.instruction && (
                <div style={{ marginBottom: "2rem", marginLeft: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "18px",
                    }}
                  >
                    Instructions
                  </div>
                  <div style={{ fontSize: "15px" }}>{ptDetails?.instruction}</div>
                </div>
              )}
            </Grid> */}
          </>
        </SoftBox>
        {ptDetails && ptDetails?.sequenceImage && (
          <Box className="sequence-img">
            <img src={ptDetails?.sequenceImage} alt="Sequence Image" />
          </Box>
        )}
        {ptDetails && ptDetails?.quiz && ptDetails?.quiz?.length > 0 && (
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
          {ptDetails && ptDetails?.quiz && ptDetails?.quiz?.length > 0 && (
            <Quiz disableSynopsis quiz={ptDetails?.quiz[0]} onComplete={setQuizResult} />
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
};

export default PTPhotoAndQuiz;
