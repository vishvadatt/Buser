// import { Pagination } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftSnackbar from "components/SoftSnackbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, deleteLabReport, reportListAction } from "store/actions/actions";
import "./pagistyles.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import ReactAudioPlayer from "react-audio-player";
import { PhotoProvider, PhotoView } from "react-photo-view";
import SoftTypography from "components/SoftTypography";
import { DeleteFilled } from "@ant-design/icons";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "react-photo-view/dist/react-photo-view.css";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import SearchClient from "../DoctorSoapFrom/components/UploadPhotoAndVideo/SearchClient";
import { Button, Skeleton, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { axiosInstance } from "services/AxiosInstance";
import SoftButton from "components/SoftButton";
import { useNavigate } from "react-router-dom";
import FileViewer from "react-file-viewer";

export const Skeletoncomponent = () => {
  return (
    <div>
      <Stack spacing={1}>
        <Skeleton variant="rounded" width={300} height={200} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Skeleton variant="text" sx={{ fontSize: "rem" }} width={200} />
          <Skeleton variant="circular" width={40} height={40} />
        </div>
      </Stack>
    </div>
  );
};

const LabsCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);

  const labCardsData = useSelector((state) => state.auth?.reportList?.list);
  const totalCount = useSelector((state) => state.auth?.reportList?.totalCount);
  // const userData = useSelector((state) => state.auth?.auth?.userdata);
  // const patientlist = useSelector((state) => state.auth.searchpatientlist);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [showClient, setShowClient] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [patientName, setPatientName] = useState("");
  const [pId, setPId] = useState(UserId);

  // const [clientList, setClientList] = useState([]);
  // const setEntriesPerPage = ({ value }) => setPageSize(value);
  const successMessage = useSelector((state) => state.auth?.successMessage);
  const errorMessage = useSelector((state) => state.auth?.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  // console.log("clintlist", clientList);
  // console.log(patientlist);
  // console.log("showClient", showClient);
  // console.log("Seach", searchValue);
  // console.log("lab", labCardsData);

  // useEffect(() => {
  //   const loadPatient = async () => {
  //     const response = await axios.get(`${url}/api/user/userList`, {
  //       headers: {
  //         Authorization: token,
  //       },
  //     });
  //     setClientList(response.data.data.result);
  //   };
  //   loadPatient();
  // }, []);

  const search = async () => {
    if (searchValue.trim() !== "") {
      const response = await axiosInstance.get(
        `doctorAppointmentSlot/doctorAllPatientRecordsList/${UserId}?&pageNo=1&limit=10&searchText=${searchValue}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      //  console.log("response.data.data serch", response.data.data);
      setShowClient(response?.data?.data?.result[0]?.dataWithIds);
    }
  };
  useEffect(() => {
    search();
  }, [searchValue]);

  const onHandleChange = (text) => {
    setSearchValue(text);
    if (text.length > 0) {
      // let matches = [];
      // matches = clientList.filter((user) => {
      //   const regex = new RegExp(`${text}`, "gi");
      //   return user.name.match(regex);
      // });
      // setShowClient(matches);
    } else {
      setShowClient([]);
    }
  };

  const onSuggestHandle = (item) => {
    setPId(item?._id);
    setPatientName(item?.name);
    setSearchValue("");
    setPage(1);
    setShowClient([]);
    setLoading(true);
    onLoadLabdata(token, item._id, page, PageSize);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const handleMyReport = () => {
    setLoading(true);
    setPatientName("");
    setPId(UserId);
    setPage(1);
    onLoadLabdata(token, UserId, page, PageSize);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // const onLoadLabdata = (token, Id, page, limit) => {
  //   dispatch(reportListAction({ token, UserId: Id, page, limit: pageSize }));
  // };

  useEffect(() => {
    dispatch(reportListAction({ token, UserId, page, limit }));
    setTimeout(() => {
      setLoading(false);
    }, 11000);
  }, []);

  const deletelabReport = async (id) => {
    await dispatch(deleteLabReport({ token: token, reportId: id, UserId }));
    await dispatch(reportListAction({ token, UserId, page, limit }));
    // setTimeout(() => {
    //   onLoadLabdata(token,UserId,page,PageSize);
    // },2000)
  };

  useEffect(() => {
    setLoading(true);
    dispatch(reportListAction({ token, UserId, page, limit }));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [page, limit]);

  const onShowSizeChange = (current, pageSize) => {
    setLimit(pageSize);
  };

  const videoExtention = ["webm", "mp4", "mov", "wmv", "avi", "avchd", "flv", "f4v", "swf", "mkv"];
  const documentExtention = [
    "doc",
    "docx",
    "html",
    "odt",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "zip",
    "txt",
    "pdf",
  ];
  const photoExtention = [
    "jpeg",
    "gif",
    "tiff",
    "psd",
    "jpg",
    "jpeg",
    "svg",
    "ai",
    "webp",
    "raw",
    "png",
  ];
  const audioExtention = ["mp3", "aac", "ogg vorbis", "flac", "alac", "wav", "aiff", "dsd", "pcm"];
  // let entries = [10, 15, 20, 25];
  const handleUpload = () => {
    navigate("/labs/upload-report");
  };
  return (
    <SoftBox>
      <SoftBox className="upload-box">
        <SoftButton onClick={handleUpload} className="upload-btn">
          Upload
        </SoftButton>
      </SoftBox>

      <Grid sx={{ flexGrow: 1 }} container>
        <Grid
          item
          // md={12}
          xs={12}
        >
          <Grid container justifyContent="center" spacing={2}>
            {/* <SoftBox className="pName">{patientName} </SoftBox>
            {patientName ? (
              <SoftBox className="report-btn">
                <SoftButton variant="gradient" color="info" onClick={handleMyReport}>
                  My Report
                </SoftButton>
              </SoftBox>
            ) : null} */}
            {labCardsData?.length > 0 ? (
              labCardsData.map((e, index) => {
                let extention = e.report.substr(e.report.lastIndexOf(".") + 1);
                let finalName = e.reportName;
                let doctorName = e?.doctor?.firstName + " " + e?.doctor?.lastName;
                return (
                  <>
                    <Grid key={index} item xs={12} sm={6} lg={6}>
                      <div className="mainDivLab">
                        <div className="parentDivLab">
                          <div className="childDivLab">
                            {loading ? (
                              <Skeletoncomponent />
                            ) : videoExtention?.includes(extention) ? (
                              <>
                                <video
                                  className="videoHeightLabs"
                                  width=""
                                  autoPlay={true}
                                  loop
                                  muted
                                  controls
                                >
                                  <source src={e?.report} type="video/mp4" />
                                  Your browser does not support HTML video.
                                </video>

                                <div className="deleteItemCss">
                                  <SoftBox className="lab-name">
                                    <p style={{ fontSize: "16px", paddingTop: "2px" }}>
                                      {finalName}
                                    </p>
                                    {e.doctor && (
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          color: "red",
                                          marginLeft: "5px",
                                        }}
                                      >
                                        By Dr. {doctorName}
                                      </p>
                                    )}
                                  </SoftBox>
                                  <DeleteFilled
                                    style={{ cursor: "pointer", fontSize: "20px" }}
                                    onClick={() => deletelabReport(e._id)}
                                  />
                                </div>
                              </>
                            ) : documentExtention?.includes(extention) ? (
                              <>
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                                  <div className="labsPdfClassName">
                                    {extention === "xlsx" || extention === "docx" ? (
                                      <FileViewer fileType={extention} filePath={e?.report} />
                                    ) : (
                                      <>
                                        <p style={{ margin: "2px", color: "red" }}>
                                          For zoom in and zoom out use shortcut <b>CTRL +/- </b>
                                          (Windows) <b>COMMAND +/- </b>
                                          (Mac) in full screen mode.
                                        </p>
                                        <Viewer
                                          fileUrl={e?.report}
                                          scale={100}
                                          plugins={[defaultLayoutPluginInstance]}
                                        />
                                      </>
                                    )}
                                  </div>
                                </Worker>
                                <div className="deleteItemCss1">
                                  <SoftBox className="lab-name">
                                    <p style={{ fontSize: "16px", paddingTop: "2px" }}>
                                      {finalName}
                                    </p>
                                    {e.doctor && (
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          color: "red",
                                          marginLeft: "5px",
                                        }}
                                      >
                                        By {doctorName}
                                      </p>
                                    )}
                                  </SoftBox>
                                  <DeleteFilled
                                    style={{ cursor: "pointer", fontSize: "20px" }}
                                    onClick={() => deletelabReport(e._id)}
                                  />
                                </div>
                              </>
                            ) : photoExtention?.includes(extention) ? (
                              <>
                                <Card className="labsImageClassName">
                                  <PhotoProvider>
                                    <PhotoView src={e.report}>
                                      <img src={e.report} alt="" style={{ objectFit: "contain" }} />
                                    </PhotoView>
                                  </PhotoProvider>
                                </Card>
                                <div className="deleteItemCss">
                                  <SoftBox className="lab-name">
                                    <p style={{ fontSize: "16px", paddingTop: "2px" }}>
                                      {finalName}
                                    </p>
                                    {e.doctor && (
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          color: "red",
                                          marginLeft: "5px",
                                        }}
                                      >
                                        By {doctorName}
                                      </p>
                                    )}
                                  </SoftBox>
                                  <DeleteFilled
                                    style={{ cursor: "pointer", fontSize: "20px" }}
                                    onClick={() => deletelabReport(e._id)}
                                  />
                                </div>
                              </>
                            ) : audioExtention?.includes(extention) ? (
                              <>
                                <Card className="labsImageClassName">
                                  <ReactAudioPlayer
                                    width="auto"
                                    min-height="350px"
                                    src={e.report}
                                    controls
                                    className="audiocontrols audio card-content"
                                  />
                                </Card>
                                <div className="deleteItemCss">
                                  <SoftBox className="lab-name">
                                    <p style={{ fontSize: "16px", paddingTop: "2px" }}>
                                      {finalName}
                                    </p>
                                    {e.doctor && (
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          color: "red",
                                          marginLeft: "5px",
                                        }}
                                      >
                                        By {doctorName}
                                      </p>
                                    )}
                                  </SoftBox>
                                  <DeleteFilled
                                    style={{ cursor: "pointer", fontSize: "20px" }}
                                    onClick={() => deletelabReport(e._id)}
                                  />
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </>
                );
              })
            ) : (
              <>
                <div className="lengthmsg">No Data Found...</div>
              </>
            )}
          </Grid>
        </Grid>

        <div className="educationPagination">
          <Pagination
            pageSize={limit}
            total={totalCount}
            current={page}
            onChange={(value) => setPage(value)}
            showSizeChanger
            showQuickJumper
            onShowSizeChange={onShowSizeChange}
          />
        </div>
      </Grid>
      <SoftSnackbar
        color={successMessage !== "" ? "success" : "error"}
        icon="star"
        title="Buser Institute"
        content={errorMessage || successMessage}
        open={errorMessage !== "" || successMessage !== "" ? true : false}
        onClose={closeErrorSB}
        close={closeErrorSB}
        bgWhite
      />
    </SoftBox>
  );
};

export default LabsCard;
