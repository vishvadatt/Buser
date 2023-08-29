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
import { DeleteFilled } from "@ant-design/icons";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "react-photo-view/dist/react-photo-view.css";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { Skeleton, Stack } from "@mui/material";
import SoftButton from "components/SoftButton";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
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

const ClientReport = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const DoctorId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);

  const labCardsData = useSelector((state) => state.auth?.reportList?.list);
  const totalCount = useSelector((state) => state.auth?.reportList?.totalCount);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const successMessage = useSelector((state) => state.auth?.successMessage);
  const errorMessage = useSelector((state) => state.auth?.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  const searchParams = new URLSearchParams(location.search);
  const UserId = searchParams.get("clientId");

  // const onLoadLabdata = (token, UserId, page, limit) => {
  //   dispatch(reportListAction({ token: token, UserId, page: page, limit: limit }));
  // };

  useEffect(() => {
    dispatch(reportListAction({ token, UserId, page, limit }));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // console.log(labCardsData);
  // const deletelabReport = (id) => {
  //   dispatch(deleteLabReport({ token: token, reportId: id, UserId }));
  //   // setTimeout(() => {
  //   //   onLoadLabdata(token,UserId,page,PageSize);
  //   // },2000)
  // };

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
    navigate("/labs");
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox>
        <SoftBox className="upload-box">
          <SoftButton onClick={handleUpload} className="upload-btn">
            Back
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
                                      <p style={{ fontSize: "16px" }}>{finalName}</p>
                                      {e.doctor && (
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "red",
                                            marginLeft: "5px",
                                          }}
                                        >
                                          By {doctorName}
                                        </p>
                                      )}
                                    </SoftBox>
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
                                  </div>
                                </>
                              ) : photoExtention?.includes(extention) ? (
                                <>
                                  <Card className="labsImageClassName">
                                    <PhotoProvider>
                                      <PhotoView src={e.report}>
                                        <img
                                          src={e.report}
                                          alt=""
                                          style={{ objectFit: "contain" }}
                                        />
                                      </PhotoView>
                                    </PhotoProvider>
                                  </Card>
                                  <div className="deleteItemCss">
                                    <SoftBox className="lab-name">
                                      <p style={{ fontSize: "16px" }}>{finalName}</p>
                                      {e.doctor && (
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "red",
                                            marginLeft: "5px",
                                          }}
                                        >
                                          By {doctorName}
                                        </p>
                                      )}
                                    </SoftBox>
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
                                      <p style={{ fontSize: "16px" }}>{finalName}</p>
                                      {e.doctor && (
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "red",
                                            marginLeft: "5px",
                                          }}
                                        >
                                          By {doctorName}
                                        </p>
                                      )}
                                    </SoftBox>
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
      <Footer />
    </DashboardLayout>
  );
};

export default ClientReport;
