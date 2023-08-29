// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React base styles
import { Box, ButtonBase, DialogContent, TextField } from "@mui/material";
import brand from "assets/images/Logo-01-rm.png";
import breakpoints from "assets/theme/base/breakpoints";
import Sidebar from "../components/Sidebar";
import Chat from "../components/PhotoTherapyChat";
import "../style.css";
import React, { useState, useEffect } from "react";
import GroupIcon from "@mui/icons-material/Group";
import { Button } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import pageRoutes from "page.routes";
import { useDispatch, useSelector } from "react-redux";
import { db, requestForToken, app, requestPermission } from "../../../../firebase/firebase";
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
} from "../../../../store/actions/actions";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Loader from "../components/Loader/Loader";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import phototherapy from "assets/images/video_tharapyimg/phototherapy.png";
import SoftButton from "components/SoftButton";
import { Formik, Form, ErrorMessage } from "formik";
import imff from "../../../../assets/images/contactUs/contactusimageBuser.jpg";
import e from "cors";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Search from "./SearchUpload";

import * as Yup from "yup";
import styled from "styled-components";

const CustomTextField = styled((props) => <TextField {...props} />)((theme) => ({
  paddingRight: "0px !important",
  "& .MuiInputBase-root-MuiOutlinedInput-root": {
    paddingRight: "0px !important",
  },
  "& .MuiInputBase-root-MuiOutlinedInput-root .MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "0 !important",
  },

  textarea: {
    width: "100% !important",
  },
}));

const questionArray = [
  {
    question1:
      "Please add below description of any changes to your condition(s), discomfort, pain and physical limitations:",
  },
  {
    question2: "Let us know how you feel immediately after doing your previous exercise sequence:",
  },
  { question3: "How long do these effects last:" },
  {
    question4:
      "How many times have you completed your previous exercise sequense up until the day of taking the submitted photos:",
  },
];

function Upload() {
  const dispatch = useDispatch();
  const photolist = useSelector((state) => state?.auth?.photolist);
  const pucheslist = useSelector((state) => state?.auth?.pucheslist);
  const tokens = useSelector((state) => state?.auth?.auth?.idToken);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location?.search);
  const root = searchParams.get("root");
  const imageid = searchParams.get("ind");
  const [selectDoctor, setSelectDoctor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  console.log(imageid, "imageid");

  const firebaseServerKey =
    "AAAAXk9QFdQ:APA91bHlTc8Et0ICSXv8ivSua1QBDmSW1OTJ7uA_vYCLm0NzCA9xzbXkUdggndKu_fBOjoeAauYox3u-RzUd4W-GcxU280vuuSh5NjrJCYyn9emauKQ9h6TkLUhJJZC52-1jyb6FFYpa";
  const UserId = useSelector((state) => state.auth.auth._id);
  console.log("UserId", UserId);
  const loginUser = useSelector((state) => state.auth.auth.userdata);
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const [openBox, setOpenBox] = useState(true);
  const isChatActive = useSelector((state) => state.auth.chatActive);
  const [currentUser, setCurrentUser] = useState();
  const [isTokenFound, setTokenFound] = useState(false);
  const [doctorid, setDoctorid] = useState("");
  const [token, setToken] = useState("");
  const [img, setimg] = useState(null);
  const [img2, setimg2] = useState(null);
  const [img3, setimg3] = useState(null);
  const [img4, setimg4] = useState(null);
  const [img5, setimg5] = useState(null);
  const [img6, setimg6] = useState(null);
  const [img7, setimg7] = useState(null);
  const [img8, setimg8] = useState(null);
  const [img9, setimg9] = useState(null);
  const [close, setClose] = useState();
  const [photolis, setPhotolis] = useState(photolist);
  const [openUploadPhoto, setOpenUploadPhoto] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const openChatBox = (e) => {
    if (e.target.value === "true") {
      setOpenBox(false);
    } else {
      setOpenBox(true);
    }
  };
  const doctor_list = (id) => {
    setDoctorid(id);
  };
  console.log(doctorid, "doctoriddoctorid");
  const storeTokenInDB = async (token) => {
    try {
      // const result = await axios.post(
      //   "http://localhost:8001/api/addTokens",
      //   data
      // );
      const result = await updateDoc(doc(db, "users", loginUser._id), {
        deviceToken: [token],
      });
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    // let abc = requestForToken(storeTokenInDB)
    // abc.then((token)=> setToken(token))
    storeUser();
    requestPermission(setTokenFound, setToken, storeTokenInDB);
  }, []);

  const storeUser = async () => {
    let availUser;
    let displayName = loginUser?.name;
    let email = loginUser?.email;
    let file = loginUser?.UserProfilePIC;
    const findUser = query(collection(db, "users"), where("uid", "==", loginUser?._id));

    const getUser = await getDocs(findUser);
    getUser.forEach((data) => {
      availUser = { ...data.data(), id: data.id };
      setCurrentUser({ ...data.data(), id: data.id });
    });

    if (!availUser) {
      try {
        // await userService.adduser(userData);
        // dispatch(setLoginData(userData));
        await setDoc(doc(db, "users", loginUser._id), {
          uid: loginUser._id,
          displayName,
          email,
          photoURL: file,
          deviceToken: [token],
          userType:loginUser.userType
        });
        //create empty user chats on firestore
        // await setDoc(doc(db, "userChats", loginUser._id), {});
        await setDoc(doc(db, "userPhotoChats", loginUser._id), {});
        await setDoc(doc(db, "photoRequest", loginUser._id), {});
      } catch (err) {
        console.log(err);
      }
    }
    // else{
    //       await updateDoc(doc(db, "users", loginUser._id), {
    //         deviceToken: [token],
    //       });
    // }
  };
  const handleLoading = () => {
    setIsLoading(!isLoading);
  };

  const groups =
    !!photolist &&
    photolist?.reduce((acc, curr) => {
      const dateIndex = acc.findIndex((elem) => elem[0].visitDate === curr.visitDate);
      if (dateIndex === -1) {
        acc.push([curr]);
      } else {
        acc[dateIndex].push(curr);
      }
      return acc;
    }, []);

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date: groups[date][0].visitDate,
      photos: groups[date],
    };
  });

  console.log("groupedArray", groupArrays[imageid], groupArrays[imageid]?.photos[0]);
  console.log(img2, "ffffffffffffffff");

  const validationSchema = Yup.object().shape({
    uploadFront: Yup.mixed().required("Required Upload Front Image"),
    uploadBack: Yup.mixed().required("Required Upload Back Image"),
    uploadLeft: Yup.mixed().required("Required Upload Left Image"),
    uploadRight: Yup.mixed().required("Required Upload Right Image"),
    uploadHandsOnHead: Yup.mixed().required("Required Upload HandsOnHead Image"),
    uploadPidgeonToed: Yup.mixed().required("Required Upload PidgeonToed Image"),
    uploadBoth: Yup.mixed().required("Required Upload Both Image"),
    uploadCat: Yup.mixed().required("Required Upload Cat Image"),
    uploadDog: Yup.mixed().required("Required Upload Dog Image"),
    answer1: Yup.string().required("Required Answer 1"),
    answer2: Yup.string().required("Required Answer 2"),
    answer3: Yup.string().required("Required Answer 3"),
    answer4: Yup.string().required("Required Answer 4"),

    // image: Yup.mixed().test('fileType', 'Invalid file format', (value) => {
    //   if (value && value.length) {
    //     const file = value[0]; // Assuming only a single file is allowed

    //     // Check file type
    //     const fileType = file.type;
    //     const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];

    //     return supportedFormats.includes(fileType);
    //   }

    //   return true; // No file selected, so it's valid
    // }),
  });

  const errorFunction = (ele) => {
    setErrorVisible(ele);
  };

  return (
    <DashboardLayout>
      {/* //   <DashboardNavbar /> */}

      <DashboardNavbar />
      {!isLoading ? (
        <Loader />
      ) : (
        <SoftBox mb={1} p={5}>
          <div
            style={{
              // position: "absolute",
              width: "100%",
              height: "68px",
              display: "flex",
              justifyContent: "end",
            }}
          >
            {" "}
            <div style={{ position: "absolute", width: "400px" }}>
              <div>
                <Search
                  func={doctor_list}
                  errorMessage={errorMessage}
                  errorVisible={errorVisible}
                  errorFunction={errorFunction}
                />
              </div>
            </div>
          </div>

          <Formik
            initialValues={{
              userId: UserId,
              uploadFront: "",
              uploadBack: "",
              uploadLeft: "",
              uploadRight: "",
              uploadHandsOnHead: "",
              uploadPidgeonToed: "",
              uploadBoth: "",
              uploadCat: "",
              uploadDog: "",
              answer1: "",
              answer2: "",
              answer3: "",
              answer4: "",
              question1: "",
              question2: "",
              question3: "",
              question4: "",
              description: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              console.log("values", values);

              if (!doctorid) {
                setErrorVisible(true);
                setErrorMessage("Please select doctor");

                setTimeout(() => {
                  setErrorVisible(false);
                  setErrorMessage("");
                }, 10000);
                return;
              }
              if (
                values?.userId != "" &&
                questionArray[0]?.question1 != "" &&
                questionArray[1]?.question2 != "" &&
                questionArray[2]?.question3 != "" &&
                questionArray[3]?.question4 != ""
              ) {
                console.log("load", isLoading);

                let formData = new FormData();
                let quesAnsData = [
                  { question: questionArray[0]?.question1, answer: values?.answer1 },
                  { question: questionArray[1]?.question2, answer: values?.answer2 },
                  { question: questionArray[2]?.question3, answer: values?.answer3 },
                  { question: questionArray[3]?.question4, answer: values?.answer4 },
                ];

                console.log("quesAnsData", quesAnsData);
                handleLoading();

                formData.append("userId", UserId);

                formData.append("doctorId", doctorid);
                formData.append("uploadFront", values?.uploadFront);
                formData.append("uploadBack", values?.uploadBack);
                formData.append("uploadLeft", values?.uploadLeft);
                formData.append("uploadRight", values?.uploadRight);
                formData.append("uploadHandsOnHead", values?.uploadHandsOnHead);
                formData.append("uploadPidgeonToed", values?.uploadPidgeonToed);
                formData.append("uploadBoth", values?.uploadBoth);
                formData.append("uploadCat", values?.uploadCat);
                formData.append("uploadDog", values?.uploadDog);

                formData.append("quesAnsData", JSON.stringify(quesAnsData));

                formData.append("description", values?.description);
                console.log("formData", formData);

                dispatch(
                  photoStore({
                    formData,
                    token: tokens,
                    navigate,
                  })
                );
                dispatch(getPhotoTheraphi(UserId));
                console.log("load", isLoading);
                handleLoading();
                console.log("load", isLoading);
                setOpenUploadPhoto(false);
                // setTimeout(() => {
                //   navigate("/photo-therapy");
                // }, 7000);
              } else console.log("image");
            }}
          >
            {(formik) => {
              return (
                <>
                  {pucheslist &&
                    pucheslist.map((e) => {
                      {
                        console.log("e", e.Video_Messaging_and_Photo_Therapy_Balance);
                      }

                      return (
                        <>
                          {e.Video_Messaging_and_Photo_Therapy_Balance == 0 ||
                          e.Video_Messaging_and_Photo_Therapy_Balance == undefined ? (
                            ""
                          ) : (
                            <Grid className="bbt"></Grid>
                          )}
                        </>
                      );
                    })}

                  <Grid mt={2}>
                    <Grid container spacing={2}>
                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                        >
                          Upload Front
                          <input
                            hidden
                            name="uploadFront"
                            id="files"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadFront",
                                e.target.files[0],
                                setimg(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>
                        <div className="uploadimage">
                          <img src={img} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadFront && formik.touched.uploadFront && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadFront}
                          </div>
                        )}
                        {/* <ErrorMessage
                        name={field.name}
                        component="div"
                        className="text-red-500 text-xs"
                      /> */}
                      </Grid>
                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                        >
                          Upload Back
                          <input
                            hidden
                            name="uploadBack"
                            id="files"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadBack",
                                e.target.files[0],
                                setimg2(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>
                        <div className="uploadimage">
                          <img src={img2} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadBack && formik.touched.uploadBack && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadBack}
                          </div>
                        )}
                      </Grid>
                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          className="upd"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                        >
                          Upload Left
                          <input
                            hidden
                            name="uploadLeft"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadLeft",
                                e.target.files[0],
                                setimg3(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>

                        <div className="uploadimage">
                          <img src={img3} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadLeft && formik.touched.uploadLeft && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadLeft}
                          </div>
                        )}
                      </Grid>
                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                        >
                          Upload Right
                          <input
                            hidden
                            name="uploadRight"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadRight",
                                e.target.files[0],
                                setimg4(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>
                        <div className="uploadimage">
                          <img src={img4} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadRight && formik.touched.uploadRight && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadRight}
                          </div>
                        )}
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} mt={2}>
                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                          disabled={root == "viewmore"}
                        >
                          Upload Right Side Hands-on-Head
                          <input
                            hidden
                            name="uploadHandsOnHead"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadHandsOnHead",
                                e.target.files[0],
                                setimg5(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>
                        <div className="uploadimage">
                          <img src={img5} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadHandsOnHead && formik.touched.uploadHandsOnHead && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadHandsOnHead}
                          </div>
                        )}
                      </Grid>
                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                          disabled={root == "viewmore"}
                        >
                          Upload Right Side Pidgeon Toed
                          <input
                            hidden
                            name="uploadPidgeonToed"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadPidgeonToed",
                                e.target.files[0],
                                setimg6(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>
                        <div className="uploadimage">
                          <img src={img6} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadPidgeonToed && formik.touched.uploadPidgeonToed && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadPidgeonToed}
                          </div>
                        )}
                      </Grid>
                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                        >
                          Upload Right Side Both
                          <input
                            hidden
                            name="uploadBoth"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadBoth",
                                e.target.files[0],
                                setimg7(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>
                        <div className="uploadimage">
                          <img src={img7} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadBoth && formik.touched.uploadBoth && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadBoth}
                          </div>
                        )}
                      </Grid>
                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                        >
                          Upload Right Side cat
                          <input
                            hidden
                            name="uploadCat"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadCat",
                                e.target.files[0],
                                setimg8(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>
                        <div className="uploadimage">
                          <img src={img8} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadCat && formik.touched.uploadCat && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadCat}
                          </div>
                        )}
                      </Grid>

                      <Grid item lg={3} sm={6} xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          style={{
                            width: "100%",
                            background: "white",
                            borderBottomRightRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                          disabled={root == "viewmore"}
                        >
                          Upload Right Side Dog
                          <input
                            hidden
                            name="uploadDog"
                            accept="image/*"
                            multiple
                            type="file"
                            onChange={(e) =>
                              formik.setFieldValue(
                                "uploadDog",
                                e.target.files[0],
                                setimg9(URL.createObjectURL(e.target.files[0]))
                              )
                            }
                          />
                        </Button>
                        <div className="uploadimage">
                          <img src={img9} className="uploadimageshow" />
                        </div>
                        {formik.errors.uploadDog && formik.touched.uploadDog && (
                          <div style={{ fontSize: "14px", color: "red" }}>
                            {formik.errors.uploadDog}
                          </div>
                        )}
                      </Grid>

                      <Grid item xs={12} spacing={2} marginTop={4}>
                        <ol style={{ paddingLeft: "20px", fontSize: "18px" }}>
                          <li style={{ marginBottom: "1rem" }}>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  fontSize: "15px",
                                }}
                              >
                                {questionArray[0]?.question1}
                              </div>
                              <CustomTextField
                                id="standard-multiline-static"
                                // label="...write"
                                name="answer1"
                                placeholder="...write"
                                fullWidth
                                multiline
                                rows={4}
                                onChange={formik.handleChange}
                              />
                              {formik.errors.answer1 && formik.touched.answer1 && (
                                <div style={{ fontSize: "14px", color: "red" }}>
                                  {formik.errors.answer1}
                                </div>
                              )}
                            </div>
                          </li>
                          <li style={{ marginBottom: "1rem" }}>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  fontSize: "15px",
                                }}
                              >
                                {questionArray[1]?.question2}
                              </div>
                              <CustomTextField
                                id="standard-multiline-static"
                                // label="...write"
                                placeholder="...write"
                                multiline
                                fullWidth
                                rows={4}
                                name="answer2"
                                onChange={formik.handleChange}
                              />
                              {formik.errors.answer2 && formik.touched.answer2 && (
                                <div style={{ fontSize: "14px", color: "red" }}>
                                  {formik.errors.answer2}
                                </div>
                              )}
                            </div>
                          </li>
                          <li style={{ marginBottom: "1rem" }}>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  fontSize: "15px",
                                }}
                              >
                                {" "}
                                {questionArray[2]?.question3}
                              </div>
                              <CustomTextField
                                id="standard-multiline-static"
                                // label="...write"
                                placeholder="...write"
                                fullWidth
                                multiline
                                rows={4}
                                name="answer3"
                                onChange={formik.handleChange}
                              />
                              {formik.errors.answer3 && formik.touched.answer3 && (
                                <div style={{ fontSize: "14px", color: "red" }}>
                                  {formik.errors.answer3}
                                </div>
                              )}
                            </div>
                          </li>
                          <li style={{ marginBottom: "1rem" }}>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  fontSize: "15px",
                                }}
                              >
                                {questionArray[3]?.question4}
                              </div>
                              <CustomTextField
                                id="standard-multiline-static"
                                // label="...write"
                                placeholder="...write"
                                fullWidth
                                multiline
                                rows={4}
                                name="answer4"
                                onChange={formik.handleChange}
                              />
                              {formik.errors.answer4 && formik.touched.answer4 && (
                                <div style={{ fontSize: "14px", color: "red" }}>
                                  {formik.errors.answer4}
                                </div>
                              )}
                            </div>
                          </li>
                        </ol>
                        <div style={{ marginBottom: "1rem" }}>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              fontSize: "15px",
                            }}
                          >
                            Any other information you would like to relay to your therapist:
                          </div>
                          <CustomTextField
                            id="standard-multiline-static"
                            // label="...write"
                            placeholder="...write"
                            fullWidth
                            multiline
                            rows={4}
                            name="description"
                            onChange={formik.handleChange}
                          />
                          {formik.errors.description && formik.touched.description && (
                            <div style={{ fontSize: "14px", color: "red" }}>
                              {formik.errors.description}
                            </div>
                          )}
                        </div>
                      </Grid>
                    </Grid>

                    <Grid className="suub">
                      <SoftButton type="submit" onClick={formik.handleSubmit}>
                        Submit
                      </SoftButton>
                    </Grid>
                  </Grid>
                </>
              );
            }}
          </Formik>
        </SoftBox>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default Upload;
