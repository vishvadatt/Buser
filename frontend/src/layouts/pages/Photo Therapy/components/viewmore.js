// @mui material components
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import "../style.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import pageRoutes from "page.routes";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import {
  getDoctorPhotoTheraphi,
  logout,
  getPTCount,
  findOneInformConsent,
} from "../../../../store/actions/actions";
import Footer from "examples/Footer";
import SoftButton from "components/SoftButton";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "react-photo-view/dist/react-photo-view.css";
import { axiosInstance } from "services/AxiosInstance";
import RedLines from "./RedLines";
import PageLayout from "examples/LayoutContainers/PageLayout";
import SoftInput from "components/SoftInput";
import QuizForm from "components/QuizForm";

function UploadAndViewMore() {
  const dispatch = useDispatch();
  const userType = useSelector((state) => state.auth.auth.userType);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const root = searchParams.get("root");
  const imageid = searchParams.get("id");
  const clientId = searchParams.get("clientId");
  const doctorId = searchParams.get("doctorId");
  const tabValue = searchParams.get("tabValue");
  const [docInstruction, setDocInstructions] = useState("");
  // console.log(imageid, "imageid");
  const [photoName, setPhotoName] = useState("");
  const [checked, setChecked] = useState(false);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const [groups, setGroups] = useState([]);
  const UserId = useSelector((state) => state.auth.auth._id);

  const [informConsetData, setinformConsetData] = useState("");

  console.log(groups);

  const fetchPatientIC = async () => {
    try {
      const res = await axiosInstance.get(
        `informConsent/patientLastInformedConsentRecord/${groups?.userId}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setinformConsetData(res?.data?.data?.result[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (groups) {
      fetchPatientIC();
    }
  }, [groups]);

  useLayoutEffect(() => {
    localStorage.setItem("lastVisitedUrlofPhotoTherapy", location?.pathname);
    localStorage.setItem("NotVisitToViewMore", "");
  }, []);

  const photoTherapy = async () => {
    try {
      const response = await axios.get(
        `https://api.buserinstitute.com/api/photoTherapy/photoTherapyDetail/${imageid}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response.data.data);
      setGroups(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const videoTherapyData = async () => {
    try {
      const combinedId = clientId > doctorId ? clientId + doctorId : doctorId + clientId;
      const querySnapshot = await getDocs(collection(db, "videoChats", combinedId, "messages"));
      const messageData = querySnapshot.docs.map((doc) => doc.data());
      const gallaryData = messageData.filter(
        (session) => session.sessionId == imageid && session?.file?.url
      );
      console.log("gallaryData..", gallaryData);
      setGroups(gallaryData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    photoTherapy();
    videoTherapyData();
  }, [imageid]);

  const rejectPT = async () => {
    try {
      const response = await axiosInstance.get(`photoTherapy/cancelPhotoTherapy/${imageid}`, {
        headers: {
          authorization: token,
        },
      });
      if (response?.status === 200) {
        photoTherapy();
        dispatch(getPTCount({ token, UserId }));
        dispatch(getDoctorPhotoTheraphi({ UserId, token }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const acceptPT = async () => {
    try {
      const response = await axiosInstance.get(`photoTherapy/confirmPhotoTherapy/${imageid}`, {
        headers: {
          authorization: token,
        },
      });
      // console.log(response);
      if (response?.status === 200) {
        photoTherapy();
        dispatch(getPTCount({ token, UserId }));
        dispatch(getDoctorPhotoTheraphi({ UserId, token }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [avatarPreview, setAvatarPreview] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(false);

  const handleComplete = async (quizData) => {
    if (!image) {
      setError(true);
      return;
    }
    setError(false);
    const formData = new FormData();
    formData.append("sequenceImage", image);
    formData.append("photoName", photoName);
    formData.append("recommendation", checked);
    formData.append("quiz", JSON.stringify(quizData.formData));
    formData.append("instruction", docInstruction);

    try {
      const res = await axiosInstance.put(
        `photoTherapy/completePhotoTherapy/${imageid}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );
      if (res.status === 200) {
        photoTherapy();
      }
    } catch (error) {
      console.log(error);
    }
    setChecked(false);
    setDocInstructions("");
  };

  const handleComplete1 = async () => {
    const Idata = {
      instruction: docInstruction,
      photoName: photoName,
      notForSale: true,
    };
    try {
      const res = await axiosInstance.put(`photoTherapy/completePhotoTherapy/${imageid}`, Idata, {
        headers: {
          authorization: token,
        },
      });
      if (res.status === 200) {
        photoTherapy();
      }
    } catch (error) {
      console.log(error);
    }
    setDocInstructions("");
  };

  const handleImage = (e) => {
    setImage(e.currentTarget.files[0]);
    setError(false);

    const reader = new FileReader();
    reader.readAsDataURL(e.currentTarget.files[0]);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
      }
    };
  };

  const [edit, setEdit] = useState(false);
  const [coordinatesData, setCoordinatesData] = useState(null);
  const [lineData, setLineData] = useState();

  const updateCoordinates = (line_data) => {
    fetch(`https://api.buserinstitute.com/api/photoTherapy/updatePhotoTherapyDetail/${imageid}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify(line_data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "update clicked");
      });
  };

  // console.log(groups)
  useEffect(() => {
    if (groups.length != 0) {
      // console.log("ok")
      if (groups.lineData) {
        setLineData({ ...groups.lineData });
        // console.log("line data is present", groups.lineData)
      } else {
        // console.log("line data is not present")
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
  }, [groups]);

  const onUpdate = async () => {
    const obj = { ...lineData };
    if (coordinatesData && coordinatesData.title == "front") obj.front = coordinatesData.data;
    if (coordinatesData && coordinatesData.title == "back") obj.back = coordinatesData.data;
    if (coordinatesData && coordinatesData.title == "left") obj.left = coordinatesData.data;
    if (coordinatesData && coordinatesData.title == "right") obj.right = coordinatesData.data;
    if (coordinatesData && coordinatesData.title == "hoh") obj.hoh = coordinatesData.data;
    if (coordinatesData && coordinatesData.title == "pt") obj.pt = coordinatesData.data;
    if (coordinatesData && coordinatesData.title == "dog") obj.dog = coordinatesData.data;
    if (coordinatesData && coordinatesData.title == "cat") obj.cat = coordinatesData.data;
    if (coordinatesData && coordinatesData.title == "both") obj.both = coordinatesData.data;
    setLineData({ ...obj });
    updateCoordinates({
      lineData: obj,
    });
  };

  function getData(param) {
    setCoordinatesData(param);
    // console.log(param)
  }

  return (
    <PageLayout>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "https://material-ui.com/store/items/soft-ui-pro-dashboard/",
          label: "buy now",
        }}
      />
      <SoftBox
        item
        lg={12}
        xs={12}
        position="absolute"
        top={{ xs: 35, lg: 50 }}
        right={{ xs: 5, sm: 20, md: 50 }}
      >
        <SoftButton
          style={{ color: "inherit" }}
          component={Link}
          to="/"
          onClick={() => dispatch(logout())}
          className="doctor-soap-btn navbar-btn"
        >
          Logout
        </SoftButton>
      </SoftBox>

      <Grid item xs={12} lg={12}>
        <SoftBox
          justifyContent="center"
          sx={{ padding: "0 0.9rem 0 0.4rem", paddingTop: "10rem", height: "100%" }}
        >
          <SoftBox mb={1} p={5}>
            {groups?.Status === "Cancelled" && userType === "doctor" && (
              <SoftBox style={{ marginLeft: "1rem" }}>
                <p style={{ fontSize: "1.5rem", color: "red" }}>Rejected</p>
              </SoftBox>
            )}
            {groups?.Status === "Pending" && userType === "doctor" && tabValue === "0" && (
              <div style={{ display: "flex", justifyContent: "flex-end", margin: "1rem" }}>
                <div style={{ marginRight: "1rem" }}>
                  <SoftButton onClick={acceptPT} className="instructions">
                    Accept
                  </SoftButton>
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ marginLeft: "10px" }}>
                    <SoftButton
                      onClick={rejectPT}
                      style={{
                        color: "#344767",
                        paddingTop: "0",
                        paddingBottom: "0",
                      }}
                    >
                      Reject
                    </SoftButton>
                  </div>
                </div>
              </div>
            )}
            {root == "photo" && (
              <>
                <Grid container spacing={1}>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
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
                        <img src={groups?.uploadFront} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :
                        <img
                          src={groups?.uploadFront}
                          className="uploadimageshow"
                        />
                      } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "front" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit("front");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "front" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
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
                        <img src={groups?.uploadBack} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :
                        <img src={groups?.uploadBack} className="uploadimageshow" />
                      } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "back" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit("back");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "back" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
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
                        <img src={groups?.uploadLeft} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :  
                    <img src={groups?.uploadLeft} className="uploadimageshow" />
                    } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "left" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit("left");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "left" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
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
                        <img src={groups?.uploadRight} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :
                      <img src={groups?.uploadRight} className="uploadimageshow" />
                      } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "right" ? "inline-block" : "none"}`,
                            }}
                            // disabled={root == "photo"}
                            onClick={() => {
                              setEdit("right");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "right" ? "inline-block" : "none"}`,
                            }}
                            // disabled={root == "photo"}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                </Grid>

                <Grid container spacing={1} mt={4}>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
                    >
                      Right Side Hands-on-Head
                      <input
                        hidden
                        name="uploadHandsOnHead"
                        accept="image/*"
                        multiple
                        type="file"
                      />
                    </Button>
                    <div className="uploadimage">
                      <RedLines
                        editTitle={edit == "hoh" ? "hoh" : false}
                        getdata={getData}
                        line_data={lineData && lineData.hoh}
                      >
                        <img src={groups?.uploadHandsOnHead} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :  
                    <img src={groups?.uploadHandsOnHead} className="uploadimageshow" />
                    } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "hoh" ? "inline-block" : "none"}`,
                            }}
                            // disabled={root == "photo"}
                            onClick={() => {
                              setEdit("hoh");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "hoh" ? "inline-block" : "none"}`,
                            }}
                            // disabled={root == "photo"}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
                    >
                      Right Side Pidgeon Toed
                      <input
                        hidden
                        name="uploadPidgeonToed"
                        accept="image/*"
                        multiple
                        type="file"
                      />
                    </Button>
                    <div className="uploadimage">
                      <RedLines
                        editTitle={edit == "pt" ? "pt" : false}
                        getdata={getData}
                        line_data={lineData && lineData.pt}
                      >
                        <img src={groups?.uploadPidgeonToed} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :
                      <img src={groups?.uploadPidgeonToed} className="uploadimageshow" />
                      } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "pt" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit("pt");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "pt" ? "inline-block" : "none"}`,
                            }}
                            // disabled={root == "photo"}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
                    >
                      Right Side Both
                      <input hidden name="uploadBoth" accept="image/*" multiple type="file" />
                    </Button>
                    <div className="uploadimage">
                      {/* {tabValue == "0" ?  */}
                      <RedLines
                        editTitle={edit == "both" ? "both" : false}
                        getdata={getData}
                        line_data={lineData && lineData.both}
                      >
                        <img src={groups?.uploadBoth} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :
                      <img src={groups?.uploadBoth} className="uploadimageshow" />
                      } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "both" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit("both");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "both" ? "inline-block" : "none"}`,
                            }}
                            // disabled={root == "photo"}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
                    >
                      Right Side cat
                      <input hidden name="uploadCat" accept="image/*" multiple type="file" />
                    </Button>
                    <div className="uploadimage">
                      {/* {tabValue == "0" ?  */}
                      <RedLines
                        editTitle={edit == "cat" ? "cat" : false}
                        getdata={getData}
                        line_data={lineData && lineData.cat}
                      >
                        <img src={groups?.uploadCat} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :
                      <img src={groups?.uploadCat} className="uploadimageshow" />
                      } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "cat" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit("cat");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "cat" ? "inline-block" : "none"}`,
                            }}
                            // disabled={root == "photo"}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid item lg={3} sm={6} xs={12}>
                    <Button
                      variant="contained"
                      component="label"
                      style={{ width: "100%" }}
                      disabled={root == "photo"}
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
                        <img src={groups?.uploadDog} className="uploadimageshow_viewmore" />
                      </RedLines>
                      {/* :
                      <img src={groups?.uploadDog} className="uploadimageshow" />
                      } */}
                    </div>
                    {userType == "doctor" && tabValue === "0" && (
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            margin: "auto",
                          }}
                        >
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit != "dog" ? "inline-block" : "none"}`,
                            }}
                            onClick={() => {
                              setEdit("dog");
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            // component="label"
                            style={{
                              margin: "auto",
                              width: "100%",
                              display: `${edit == "dog" ? "inline-block" : "none"}`,
                            }}
                            // disabled={root == "photo"}
                            onClick={() => {
                              setEdit(false);
                              onUpdate();
                            }}
                          >
                            update
                          </Button>
                        </div>
                      </div>
                    )}
                  </Grid>
                </Grid>

                <Grid item xs={12} spacing={2} mt={5}>
                  <ol style={{ paddingLeft: "20px", fontSize: "18px" }}>
                    {groups?.quesAnsData?.map((item, ind) => (
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
                  {groups?.description && (
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
                      <div style={{ fontSize: "15px" }}>{groups?.description}</div>
                    </div>
                  )}
                  {groups?.instruction && (
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
                      <div style={{ fontSize: "15px" }}>{groups?.instruction}</div>
                    </div>
                  )}
                </Grid>

                {tabValue === "0" &&
                  groups?.Status === "Confirmed" &&
                  groups?.Status !== "Completed" &&
                  userType === "doctor" && (
                    <>
                      <SoftBox className="complete-box">
                        <SoftBox className="complete-input">
                          <SoftInput
                            className="name-input"
                            type="text"
                            value={photoName}
                            name="link"
                            placeholder="Enter Photo Name Here.."
                            onChange={(e) => setPhotoName(e.target.value)}
                          />
                        </SoftBox>
                        <SoftBox className="complete-input">
                          <textarea
                            className="inputI"
                            name="description"
                            placeholder="Enter Instructions Here..."
                            value={docInstruction}
                            onChange={(e) => setDocInstructions(e.target.value)}
                          />
                        </SoftBox>

                        {informConsetData &&
                        informConsetData?.commitment_initial2 &&
                        informConsetData?.commitment_initial2 !== "" ? (
                          <>
                            <Box
                              display={"flex"}
                              alignItems={"center"}
                              flexDirection={"column"}
                              marginBottom={"10px"}
                            >
                              <Box
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                marginBottom={"10px"}
                              >
                                <Checkbox
                                  value={checked}
                                  onChange={(e) => setChecked(e.target.checked)}
                                />
                                <Typography variant="body2" color="text.secondary">
                                  Recommeded For Sale
                                </Typography>
                              </Box>

                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                flexDirection={"column"}
                                gap={"5px"}
                              >
                                <Box
                                  display={"flex"}
                                  justifyContent={"center"}
                                  alignItems={"center"}
                                  gap={"10px"}
                                >
                                  {avatarPreview && (
                                    <img
                                      src={avatarPreview}
                                      alt="Preview"
                                      className="preview-image"
                                    />
                                  )}
                                  <input
                                    type="file"
                                    onChange={(e) => handleImage(e)}
                                    className="file-input"
                                  />
                                </Box>
                                {error && <div className="error-message">Image is required.</div>}
                              </Box>
                            </Box>

                            <Box width="800px" margin="auto">
                              <QuizForm onSubmit={handleComplete} />
                            </Box>
                          </>
                        ) : (
                          <Box display={"contents"}>
                            <Typography sx={{ fontSize: "18px", marginBottom: "10px" }}>
                              The client has not agreed to share his details.
                            </Typography>
                            <SoftButton
                              color="dark"
                              background="gradient"
                              onClick={handleComplete1}
                            >
                              Submit
                            </SoftButton>
                          </Box>
                        )}
                      </SoftBox>
                    </>
                  )}
              </>
            )}
            {root == "video" && (
              <>
                <Grid container spacing={2}>
                  {groups && groups?.length > 0 ? (
                    groups.map((ele, i) => {
                      console.log("ele.", ele);
                      let extention = ele?.file?.type.split("/");

                      return (
                        <>
                          <Grid item lg={3} sm={6} xs={12}>
                            <PhotoProvider>
                              <PhotoView src={ele?.file?.url}>
                                <div
                                  key={i}
                                  className="uploadimage"
                                  style={{
                                    height: "305px",
                                    width: "100%",
                                    padding: "1px",
                                    borderRadius: "10px",
                                  }}
                                >
                                  {extention[0] == "image" ? (
                                    <img
                                      src={ele?.file?.url}
                                      className="uploadimageshow"
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "10px",
                                      }}
                                    />
                                  ) : (
                                    <video
                                      className="card-content"
                                      height="100%"
                                      width="100%"
                                      autoPlay
                                      loop
                                      muted
                                      controls
                                    >
                                      <source src={ele?.file?.url} type="video/mp4" />
                                      Your browser does not support HTML video.
                                    </video>
                                  )}
                                </div>
                              </PhotoView>
                            </PhotoProvider>
                          </Grid>
                        </>
                      );
                    })
                  ) : (
                    <h5>No Data Found</h5>
                  )}
                </Grid>

                <Grid item xs={12} spacing={2} mt={1}>
                  <ol style={{ paddingLeft: "20px", fontSize: "18px" }}>
                    {groups?.quesAnsData?.map((item, ind) => (
                      <li style={{ marginBottom: "1rem" }} key={ind}>
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
                  {groups?.description && (
                    <div style={{ marginBottom: "1rem" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          fontSize: "18px",
                        }}
                      >
                        Description
                      </div>
                      <div style={{ fontSize: "15px" }}>{groups?.description}</div>
                    </div>
                  )}
                </Grid>
              </>
            )}
          </SoftBox>
        </SoftBox>
      </Grid>

      <Footer />
    </PageLayout>
  );
}

export default UploadAndViewMore;
