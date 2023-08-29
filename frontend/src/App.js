import { useEffect, useMemo, useState, useRef } from "react";
// react-router components
import { Route, useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";
// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Routers from "./routes/index";
import Draggable from "react-draggable";
// Soft UI Dashboard PRO React components

// Soft UI Dashboard PRO React example components
// import Configurator from "examples/Configurator";
import Sidenav from "examples/Sidenav";

// Soft UI Dashboard PRO React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import videoConvertor from "common/videoConvertor";
// RTL plugins
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

// Soft UI Dashboard PRO React routes
import routes from "routes";
// import Routes from
// Soft UI Dashboard PRO React contexts
import {
  BsRecordCircle,
  BsStopCircleFill,
  BsPauseCircle,
  BsPlayCircle,
  BsFillRecordFill,
} from "react-icons/bs";
import { setMiniSidenav, useSoftUIController } from "context";

// Images
import brand from "assets/images/Logo-01.jpeg";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "./store/selectors/selector";
import CloseIcon from "@mui/icons-material/Close";
import SoftButton from "components/SoftButton";
import VideoRecorder from "react-video-recorder";
import { successToaster } from "components/toastify/index";
import "react-phone-input-2/lib/style.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { Card, Grid, IconButton, Modal, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./App.css";
import { SET_RECORDING_MODEL } from "store/actions/actions";
import { useDispatch } from "react-redux";
import { SCREEN_RECORDING_WITH_VIDEO } from "store/actions/actions";
import RecordRTC, { RecordRTCPromisesHandler } from "recordrtc";
import { SET_RECORDING_BLOB } from "store/actions/actions";
import { SET_SCREEEN_RECORDING_BLOB } from "store/actions/actions";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
  uploadString,
} from "firebase/storage";
import { Timestamp, arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { ReactMediaRecorder, useReactMediaRecorder } from "react-media-recorder";
import { SET_RECORDING_CHAT_ID } from "store/actions/actions";
import { SET_RECORDING_USER_DETAILS } from "store/actions/actions";
import { messaging, onMessageListener } from "./firebase/firebase";
import { processMediaFile } from "layouts/pages/Video Messaging Therapy/components/mediaProcessor";
import SoftSnackbar from "components/SoftSnackbar";
// const Login = lazy(() => import('./layouts/authentication/sign-in/basic'));
import { useStopwatch } from "react-timer-hook";
import { SET_RECORDING_TYPE } from "./store/actions/actions";


export default function App() {
  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === 'PrintScreen' || e.key === 'Print') {
        navigator.clipboard.writeText("");
      }
    })
  }, []);

  const { seconds, minutes, hours, start, pause, resume, reset } = useStopwatch({
    autoStart: false,
  });
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    pauseRecording,
    resumeRecording,
    previewStream,
    onRecordingStop,
  } = useReactMediaRecorder({ video: true, screen: true });
  const videoRecorderRef = useRef(null);
  const videoRecorderPreviewRef = useRef(null);
  const [controller, dispatch] = useSoftUIController();
  const [recorderObject, setRecorderObject] = useState(null);
  const dispatcher = useDispatch();
  const storage = getStorage();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
  const isRecordingModelActive = useSelector((state) => state.auth.isRecordingModelActive);
  const screenRecordingWithVideo = useSelector((state) => state.auth.screenRecordingWithVideo);
  const vmtActiveSession = useSelector((state) => state.auth.vmtActiveSession);
  const recordingChatId = useSelector((state) => state.auth.recordingChatId);
  const screenRecordingType = useSelector((state) => state.auth.screenRecordingType);
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const [cameraPause, setCameraPause] = useState(false);
  const [isScreenRecordingPause, setIsScreenRecordingPause] = useState(false);
  const [isRecordingActive, setIsRecodingActive] = useState(false);
  const [myCameraOn, setMyCameraOn] = useState(false);
  const [isFirstPlay, setIsFirstPlay] = useState(false);
  const [screenShareActive, setScreenShareActive] = useState(false);
  const [notification, setNotification] = useState({
    title: "",
    body: "",
    data: {
      type: "",
    },
  });
  // const [videoUrl, setVideoUrl] = useState(null);

  const uploadScreenRecordingFunction = async () => {
    const response = await fetch(mediaBlobUrl);
    const blob = await response.blob();
    let resizedURL = await processMediaFile(blob);
    uploadScreenRecording(
      {
        type: blob.type,
        name: `screenRecord_${new Date()}`,
        url: URL.createObjectURL(blob),
      },
      resizedURL
    );

    // const data =
    // const url = URL.createObjectURL(blob);
    // setVideoUrl(url);
  };
  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  onMessageListener()
    .then((payload) => {
      console.log("payload", payload);

      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
        data: payload.data,
      });
    })
    .catch((err) => console.log("failed: ", err));

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 20,
    overflow: "auto",
    p: 2,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      placement="bottom"
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

  // Change the openConfigurator state
  // const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  const handleScreenRecording = async (type) => {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
        audio: true,
        disablePictureInPicture: true,
      })
      .then(async (screenStream) => {
        navigator.mediaDevices
          .getUserMedia({ video: false, audio: true })
          .then((audioStream) => {
            const combinedStream = new MediaStream([
              ...screenStream.getTracks(),
              ...audioStream.getTracks(),
            ]);
            const recorder = RecordRTC(combinedStream, {
              type: "video",
              mimeType: "video/webm",
            });
            setRecorderObject(recorder);
            screenStream.getVideoTracks()[0].addEventListener("ended", async () => {
              await recorder.stopRecording(async () => {
                const blob = await recorder.getBlob();
                let resizedURL = await processMediaFile(blob);
                setScreenShareActive(false);
                uploadScreenRecording(
                  {
                    type: blob.type,
                    name: `screenRecord_${new Date()}`,
                    url: URL.createObjectURL(blob),
                  },
                  resizedURL
                );
                dispatcher(SCREEN_RECORDING_WITH_VIDEO(false));
              });
              dispatcher(SET_RECORDING_TYPE(null));
            });
            if (type === "screen recording with video") {
              dispatcher(SCREEN_RECORDING_WITH_VIDEO(true));
              videoRecorderPreviewRef?.current?.turnOnCamera();
            }
            recorder.startRecording();
            setScreenShareActive(true);
            dispatcher(SET_RECORDING_MODEL(false));
          })
          .catch((error) => {
            console.error("Error accessing audio:", error);
          });
      })
      .catch((error) => {
        console.error("Error starting screen recording:", error);
      });
  };

  useEffect(() => {
    if (screenRecordingType !== null) {
      if (screenRecordingType === "only_screen") {
        dispatcher(SCREEN_RECORDING_WITH_VIDEO(false));
        // handleScreenRecording("screen recording");
        startRecording();
      } else {
        // handleScreenRecording("screen recording with video");
        startRecording();
      }
    }
  }, [screenRecordingType]);

  useEffect(() => {
    if (screenRecordingType === "only_screen") {
      if (status === "acquiring_media") {
        setScreenShareActive(true);
      }
      if (status === "idle") {
        setScreenShareActive(false);
      }
    }
    if (screenRecordingType === "screen_with_camera") {
      if (status === "acquiring_media") {
        dispatcher(SCREEN_RECORDING_WITH_VIDEO(true));
        setScreenShareActive(true);
        videoRecorderPreviewRef?.current?.turnOnCamera();
        // dispatcher(SET_RECORDING_TYPE(null));
      }
      if (status === "idle") {
        dispatcher(SCREEN_RECORDING_WITH_VIDEO(false));
        setScreenShareActive(false);
        videoRecorderPreviewRef?.current?.turnOffCamera();
      }
    }
    if (status === "stopped") {
      uploadScreenRecordingFunction();
    }
  }, [status]);

  // const handleScreenRecording = async (type) => {
  //   const mediaDevices = navigator.mediaDevices;
  //   const stream = await mediaDevices.getDisplayMedia({
  //     video: true,
  //     audio: true,
  //   });

  //   const recorder = new RecordRTCPromisesHandler(stream, { type: "video" });

  //   stream.getVideoTracks()[0].addEventListener("ended", async () => {
  //     await recorder.stopRecording();
  //     const blob = await recorder.getBlob();
  //     stream.stop();
  //     // setFileData([blob]);
  //     // setPreview([
  //     //   {
  //     //     type: blob.type,
  //     //     name: `screenRecord_${new Date()}`,
  //     //     url: URL.createObjectURL(blob),
  //     //   },
  //     // ]);
  //     let resizedURL = await processMediaFile(blob);
  //     uploadScreenRecording(
  //       { type: blob.type, name: `screenRecord_${new Date()}`, url: URL.createObjectURL(blob) },
  //       resizedURL
  //     );
  //     dispatcher(SCREEN_RECORDING_WITH_VIDEO(false));
  //   });
  //   if (type === "screen recording with video") {
  //     dispatcher(SCREEN_RECORDING_WITH_VIDEO(true));
  //     videoRecorderPreviewRef?.current?.turnOnCamera();
  //   }
  //   await recorder.startRecording();
  //   dispatcher(SET_RECORDING_MODEL(false));
  // };

  var base64String;
  const getBase64 = (blob) => {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      base64String = reader.result;
      console.log("recoding complete");
      uploadVideoTherapyFile(base64String);
    };
  };

  // Video name Generator
  function generateHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }

  const generateNameFromBase64 = (base64String) => {
    const timestamp = new Date().getTime();
    const hash = generateHash(base64String);
    return `${timestamp}-${hash}.mp4`;
  };

  const uploadVideoTherapyFile = async (fileData) => {
    const filename = await generateNameFromBase64(fileData);
    const storageRef = ref(storage, `chatImages/${filename}`);
    const message4 = fileData;
    if (fileData) {
      const uploadTask = await uploadString(storageRef, fileData, "data_url");
      getDownloadURL(uploadTask.ref).then(async (url) => {
        try {
          let id = uuid();
          const docRef = doc(db, "videoChats", recordingChatId, "messages", id);
          await setDoc(docRef, {
            id,
            text: "",
            senderId: loginUser._id,
            date: Timestamp.now(),
            file: {
              type: "video",
            },
            videorecord: url,
            type: "liveVideo/mp4",
            senderName: loginUser.firstName,
            senderProfilePIC: loginUser.UserProfilePIC,
            sessionId: vmtActiveSession,
          });
          // updateDoc(doc(db, "videoChats", recordingChatId), {
          //   messages: arrayUnion({
          //     id: uuid(),
          //     text: "",
          //     senderId: loginUser._id,
          //     date: Timestamp.now(),
          //     file: {
          //       type: "video",
          //     },
          //     videorecord: url,
          //     type: "liveVideo/mp4",
          //     senderName: loginUser.name,
          //     senderProfilePIC: loginUser.UserProfilePIC,
          //   }),
          // });
        } catch (err) {
          console.log("error", err);
        }
      });
    }
  };
  const uploadScreenRecording = async (fileData, processURL) => {
    const storageRef = ref(storage, `chatImages/${fileData.name}`);
    const uploadTask = uploadBytesResumable(storageRef, processURL);
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100); // update progress
          // setProgress(percent);
          console.log("percent", percent);
        },
        (err) => {
          console.log(err);
        },
        () => {
          // setProgress(0);
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            let id = uuid();
            const docRef = doc(db, "videoChats", recordingChatId, "messages", id);
            await setDoc(docRef, {
              id,
              text: "",
              senderId: loginUser._id,
              date: Timestamp.now(),
              file: {
                name: fileData.name,
                type: fileData.type,
                source: url,
                uri: url,
                url,
              },
              videorecord: url,
              senderName: loginUser.firstName,
              senderProfilePIC: loginUser.UserProfilePIC,
              sessionId: vmtActiveSession,
            });
            // updateDoc(doc(db, "videoChats", recordingChatId), {
            //   messages: arrayUnion({
            //     id: uuid(),
            //     text: "",
            //     senderId: loginUser._id,
            //     date: Timestamp.now(),
            //     file: {
            //       name: fileData.name,
            //       type: fileData.type,
            //       source: url,
            //       uri: url,
            //       url,
            //     },
            //     videorecord: url,
            //     senderName: loginUser.name,
            //     senderProfilePIC: loginUser.UserProfilePIC,
            //   }),
            // });
          });
        }
      );
    });
  };

  // const configsButton = (
  //   <SoftBox
  //     display="flex"
  //     justifyContent="center"
  //     alignItems="center"
  //     width="3.5rem"
  //     height="3.5rem"
  //     bgColor="white"
  //     shadow="sm"
  //     borderRadius="50%"
  //     position="fixed"
  //     right="2rem"
  //     bottom="2rem"
  //     zIndex={99}
  //     color="dark"
  //     sx={{ cursor: "pointer" }}
  //     onClick={handleConfiguratorOpen}
  //   >
  //     <Icon fontSize="default" color="inherit">
  //       settings
  //     </Icon>
  //   </SoftBox>
  // );
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  const authenticated = useSelector(isAuthenticated);

  // if (authenticated) {
  // 	return (
  //     <CacheProvider value={rtlCache}>
  //     <ThemeProvider theme={themeRTL}>
  // 				<Index />
  //         {/* <Routers.ProtectedRoutes /> */}
  //      </ThemeProvider>
  //     </CacheProvider>
  // 	);

  // } else {
  // 	return (
  //     <CacheProvider value={rtlCache}>
  //     <ThemeProvider theme={themeRTL}>
  //       <CssBaseline />

  //           <Routers.Routers />

  //       </ThemeProvider>
  //   </CacheProvider>
  // 	);

  // }
  const closeErrorSB = () => {
    setNotification({
      title: "",
      body: "",
      data: {},
    });
  };
  return (
    <>
      {authenticated ? (
        <ThemeProvider theme={themeRTL}>
          {/* <CssBaseline /> */}
          {layout === "dashboard" && (
            <>
              {pathname !== "/termsandsignature" &&
                pathname !== "/profileafterlogin" &&
                pathname !== "/dashbordplan" &&
                // pathname !== "/messages" &&
                // pathname !== "/photo-therapy" &&
                pathname !== "/doctor-soap-form" &&
                pathname !== "/video-messaging-therapy" &&
                pathname !== "/client-intake-form" && (
                  <Sidenav
                    color={sidenavColor}
                    brand={brand}
                    brandName="Buser Institute"
                    routes={routes}
                    onMouseEnter={handleOnMouseEnter}
                    onMouseLeave={handleOnMouseLeave}
                  />
                )}
              {/* <Configurator /> */}

              {/* {configsButton} */}
            </>
          )}
          {/* {layout === "vr" && <Configurator />} */}
          <Routers.ProtectedRoutes />
          <SoftSnackbar
            color={"info"}
            icon="star"
            title={notification?.title}
            content={notification?.body ?? ""}
            open={notification?.body && notification?.body !== "" ? true : false}
            onClose={closeErrorSB}
            close={closeErrorSB}
            bgWhite
            onClick={() => {
              // console.log(
              //   "check",
              //   notification.data.type && notification.data?.type === "Photo Therapy"
              // );
              if (notification.data?.type && notification.data?.type === "Photo Therapy") {
                navigate(`/view-more?root=photo&id=${notification.data.photoTherapyId}&tabValue=0`);
              }
            }}
          />
        </ThemeProvider>
      ) : (
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          {layout === "dashboard" && (
            <>
              {/* <Sidenav
                color={sidenavColor}
                brand={brand}
                brandName="Buser Institute"
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              /> */}
              {/* <Configurator /> */}
              {/* {configsButton} */}
            </>
          )}
          {/* {layout === "vr" && <Configurator />} */}
          <Routers.Routers />
          <SoftSnackbar
            color={"success"}
            icon="star"
            title={notification?.title}
            content={notification?.body ?? ""}
            open={notification?.body && notification?.body !== "" ? true : false}
            onClose={closeErrorSB}
            close={closeErrorSB}
            bgWhite
          />
        </ThemeProvider>
      )}
      <Modal hideBackdrop open={isRecordingModelActive} aria-labelledby="modal-modal-title">
        <Card sx={style}>
          <Box display={"flex"} gap={3} flexWrap={"wrap"}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
            // className="recording_modal"
            >
              Video Recording
            </Typography>
            <Box display={"flex"} gap={2}>
              {/* <Button
                className="MuiRestyleButton"
                variant="outlined"
                onClick={() => {
                  dispatcher(SCREEN_RECORDING_WITH_VIDEO(false));
                  handleScreenRecording("screen recording");
                }}
              >
                Screen Sharing, No Camera 
              </Button>
              <Button
                variant="outlined"
                className="MuiRestyleButton"
                onClick={async () => {
                  handleScreenRecording("screen recording with video");
                  videoRecorderPreviewRef?.current?.turnOnCamera();
                }}
              >
                Screen Sharing, With Camera
              </Button> */}
            </Box>
            <IconButton
              sx={{ position: "absolute", right: "25px", top: "10px" }}
              edge="end"
              color="inherit"
              onClick={() => {
                dispatcher(SCREEN_RECORDING_WITH_VIDEO(false));
                dispatcher(SET_RECORDING_MODEL(false));
                dispatcher(SET_RECORDING_CHAT_ID(""));
                dispatcher(SET_RECORDING_USER_DETAILS({}));
                setIsRecodingActive(false);
                setIsFirstPlay(false);
                setMyCameraOn(false);
                setCameraPause(false);
              }}
              aria-label="close"
            >
              <LightTooltip title="Close">
                <CloseIcon className="close-icon" />
              </LightTooltip>
            </IconButton>
          </Box>
          <Box
            sx={{ height: "calc(100% - 40px)", position: "relative" }}
            className="vedio_recorder_wrapper"
          >
            {isFirstPlay && (
              <Box
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "20px",
                  zIndex: 10,
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <BsFillRecordFill color="red" />
                <b
                  style={{
                    color: "white",
                  }}
                >
                  {hours}:{minutes}:{seconds}
                </b>
              </Box>
            )}
            {!myCameraOn && (
              <Button
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, 50%)",
                  zIndex: 10,
                }}
                variant="outlined"
                className="MuiRestyleButton"
                onClick={async () => {
                  videoRecorderRef?.current?.turnOnCamera();
                  setMyCameraOn(true);
                }}
              >
                Turn my camera on
              </Button>
            )}
            {myCameraOn && (
              <Box
                sx={{
                  position: "absolute",
                  right: "20px",
                  top: "45%",
                  zIndex: 10,
                  color: "white",
                }}
                position={"absolute"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                gap={1.5}
              >
                {isRecordingActive ? (
                  <>
                    <BsStopCircleFill
                      color="#bc3433"
                      size={50}
                      onClick={() => {
                        videoRecorderRef?.current?.handleStopRecording();
                        // stopRecording();
                        setIsRecodingActive(false);
                        pause();
                        setIsFirstPlay(false);
                        setMyCameraOn(false);
                        setCameraPause(false);
                      }}
                    />
                    {cameraPause ? (
                      <BsPlayCircle
                        color="white"
                        size={40}
                        onClick={() => {
                          start();
                          videoRecorderRef?.current?.handleResumeRecording();
                          // resumeRecording();
                          setCameraPause(false);
                        }}
                      />
                    ) : (
                      <BsPauseCircle
                        color="white"
                        size={40}
                        onClick={async () => {
                          videoRecorderRef?.current?.handlePauseRecording();
                          // pauseRecording();
                          setCameraPause(true);
                          pause();
                        }}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {" "}
                    <Typography variant="body1">
                      <b>
                        PRESS <span style={{ color: "#bc3433" }}>REC</span> WHEN READY
                      </b>
                    </Typography>
                    <BsRecordCircle
                      color="#bc3433"
                      size={50}
                      onClick={() => {
                        videoRecorderRef.current?.startRecording();
                        // startRecording();
                        reset();
                        setIsFirstPlay(true);
                        setIsRecodingActive(true);
                      }}
                    />
                  </>
                )}
              </Box>
            )}
            <VideoRecorder
              ref={videoRecorderRef}
              className="video-recorder"
              mimeType="video/webm"
              renderActions={() => <div></div>}
              onRecordingComplete={(videoBlob) => {
                dispatcher(SET_RECORDING_MODEL(false));
                setIsRecodingActive(false);
                setIsFirstPlay(false);
                setMyCameraOn(false);
                setCameraPause(false);
                getBase64(videoBlob);
              }}
            />
          </Box>
        </Card>
      </Modal>
      <Draggable>
        <div
          style={{
            position: "fixed",
            left: "20px",
            bottom: "20px",
            zIndex: 9999,
            height: 230,
            width: 230,
            visibility: screenRecordingWithVideo ? "visible" : "hidden",
          }}
          className="draggable_model"
        >
          <VideoRecorder
            ref={videoRecorderPreviewRef}
            className="video-recorder"
            mimeType="video/webm"
            renderActions={() => <div></div>}
          />
        </div>
      </Draggable>
      {screenShareActive && (
        <Draggable>
          <div className="screen_share_button_wrapper">
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={1}>
              <Typography variant="caption">
                <b>Screen share</b>
              </Typography>
              {isScreenRecordingPause ? (
                <BsPlayCircle
                  color="black"
                  size={20}
                  onClick={() => {
                    setIsScreenRecordingPause(false);
                    // recorderObject?.resumeRecording();
                    resumeRecording();
                  }}
                />
              ) : (
                <BsPauseCircle
                  color="black"
                  size={20}
                  onClick={() => {
                    setIsScreenRecordingPause(true);
                    // recorderObject?.pauseRecording();
                    pauseRecording();
                  }}
                />
              )}
              <BsStopCircleFill
                color="#bc3433"
                size={20}
                onClick={() => {
                  stopRecording();
                  dispatcher(SET_RECORDING_TYPE(null));
                  dispatcher(SCREEN_RECORDING_WITH_VIDEO(false));
                  setScreenShareActive(false);
                  // recorderObject?.stopRecording(async () => {
                  //   const blob = await recorderObject.getBlob();
                  //   let resizedURL = await processMediaFile(blob);
                  //   uploadScreenRecording(
                  //     {
                  //       type: blob.type,
                  //       name: `screenRecord_${new Date()}`,
                  //       url: URL.createObjectURL(blob),
                  //     },
                  //     resizedURL
                  //   );
                  //   setScreenShareActive(false);
                  //   dispatcher(SCREEN_RECORDING_WITH_VIDEO(false));
                  //   dispatcher(SET_RECORDING_TYPE(null));
                  // });
                }}
              />
            </Box>
          </div>
        </Draggable>
      )}
      {/* <video src={videoUrl} controls height={500} width={500} /> */}
    </>
  );
}
