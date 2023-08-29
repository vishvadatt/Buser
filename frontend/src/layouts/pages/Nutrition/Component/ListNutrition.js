// import { Pagination } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftSnackbar from "components/SoftSnackbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearMessage,
  getNutritionAction,
  deleteNutritionAction,
  patientsoapdata,
  getSearchPatient,
} from "store/actions/actions";
// import "./pagistyles.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import ReactAudioPlayer from "react-audio-player";
import { PhotoProvider, PhotoView } from "react-photo-view";
import SoftTypography from "components/SoftTypography";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { DeleteFilled } from "@ant-design/icons";
import "../Nutrition.css";
import SoftSelect from "components/SoftSelect";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { Skeleton, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "react-photo-view/dist/react-photo-view.css";
import axios from "axios";
import { url } from "services/AxiosInstance";

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

const NutritionList = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const UserId = useSelector((state) => state.auth.auth._id);
  const NutritionData = useSelector((state) => state.auth.nutritionData.list);
  const totalCount = useSelector((state) => state.auth.nutritionData?.totalCount);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [page, setPage] = useState(1);
  const [PageSize, setPageSize] = useState(10);
  const [clientList, setClientList] = useState([]);
  const [showClient, setShowClient] = useState([]);

  const setEntriesPerPage = ({ value }) => setPageSize(value);
  let entries = [10, 15, 20, 25];
  const [pageNumber, setPageNumber] = useState(1);
  const userData = useSelector((state) => state.auth.auth.userdata);

  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);
  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  const [searchValue, setSearchValue] = useState("");

  const onLoadNutrition = (Id, page, limit, token) => {
    console.log("onLoadNutrition--", Id, page, limit, token);
    dispatch(getNutritionAction({ UserId: Id, page: page, PageSize: limit, token: token }));
  };

  useEffect(() => {
    const loadPatient = async () => {
      if (searchValue !== "") {
        const response = await axios.get(`${url}/api/user/userList`, {
          headers: {
            authorization: token,
          },
        });
        setClientList(response.data.data.result);
      }
    };
    loadPatient();
  }, [searchValue]);

  const onHandleChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = clientList.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.name.match(regex);
      });
    }
    setShowClient(matches);
    setSearchValue(text);
  };
  const onSuggestHandle = (item) => {
    setSearchValue(item?.name);
    setLoading(true);
    onLoadNutrition(item._id, page, PageSize, token);
    setTimeout(() => {
      setLoading(false);
    }, 500);

    setShowClient([]);
  };

  // const onSearch = (searchTerm) => {
  //   dispatch(patientsoapdata({ patientId: searchTerm._id }));
  //   // dispatch(getNutritionAction({ UserId: searchTerm._id,page : page,PageSize : PageSize }));
  //   setLoading(true);
  //   onLoadNutrition(searchTerm._id, page, PageSize);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // };
  // useEffect(() => {
  //   if (searchValue !== "") {
  //     dispatch(getSearchPatient({ searchkey: searchValue }));
  //   }
  // }, [searchValue]);

  useEffect(() => {
    onLoadNutrition(UserId, page, PageSize, token);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setLoading(true);
    if (searchValue === "") {
      // dispatch(getNutritionAction({ UserId: UserId,page : page,PageSize : PageSize }));
      onLoadNutrition(UserId, page, PageSize, token);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [searchValue, page, PageSize]);

  const deleteNutrition = (id) => {
    dispatch(deleteNutritionAction({ Id: id, UserId, token: token }));
    // setTimeout(() => {
    //   onLoadNutrition(UserId,page,PageSize);
    // },2000)
  };

  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize);
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
  const photoExtention = ["jpeg", "gif", "tiff", "psd", "jpg", "svg", "ai", "raw", "png"];
  const audioExtention = ["mp3", "aac", "ogg vorbis", "flac", "alac", "wav", "aiff", "dsd", "pcm"];
  return (
    <SoftBox mt={-1}>
      <Grid sx={{ flexGrow: 1 }} container spacing={1}>
        <Grid item xs={12} lg={4} className="names">
          {userData?.userType === "doctor" && (
            <>
              <input
                type="text"
                className="otherlang3  name-span3"
                onChange={(e) => onHandleChange(e.target.value)}
                placeholder="Search Client here"
                value={searchValue}
              />
              <div className="SearchingClientNutrition">
                {showClient &&
                  showClient.map((user, i) => (
                    <div key={i} onClick={() => onSuggestHandle(user)}>
                      <Grid className="select-item4">
                        <Grid container>
                          <Grid item lg={2} className="profile-details-select4">
                            {user.UserProfilePIC ? (
                              <>
                                <div
                                  style={{ marginLeft: "10px", marginTop: "9px", padding: "16px" }}
                                  className="profile-select"
                                >
                                  <img src={user.UserProfilePIC} height={40} width={40} />
                                </div>
                              </>
                            ) : (
                              <div
                                style={{ marginLeft: "10px", marginTop: "9px",padding: "16px" }}
                                className="profile-select"
                              >
                                <AccountCircleIcon
                                  style={{
                                    fontSize: "20px",
                                    height: "45px",
                                    width: "45px",
                                  }}
                                />
                              </div>
                            )}
                          </Grid>
                          <Grid
                            item
                            lg={10}
                            className="profile-details-select4"
                            p={1}
                            // style={{ borderRight: "1px solid", borderColor: "#D8DDE6" }}
                          >
                            <div style={{ marginLeft: "10px" }}>
                              <SoftTypography variant="button" fontWeight="regular" color="text">
                                {user.name}
                              </SoftTypography>
                            </div>
                            <div style={{ marginLeft: "10px" }}>
                              <SoftTypography variant="button" fontWeight="regular" color="text">
                                {user.email}
                              </SoftTypography>
                            </div>
                          </Grid>
                          {/* <Grid item lg={1.5}></Grid> */}
                        </Grid>
                      </Grid>
                    </div>
                  ))}
              </div>
            </>
          )}
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <Grid sx={{ flexGrow: 1 }} container spacing={1}>
        <Grid
          item
          xs={12}
          // md={12}
        >
          {/* <SoftBox sm={12} style={{ float: "right", marginRight: "30px" }}>
            <SoftInput
              placeholder="Search..."
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />
          </SoftBox> */}
          <Grid container justifyContent="center" spacing={1}>
            {NutritionData?.length > 0 ? (
              NutritionData.map((e, index) => {
                console.log("e.filePath..", e);
                let extention = e.uploadNutrition.substr(e.uploadNutrition.lastIndexOf(".") + 1);
                let finalName = e.name;
                console.log("extention..", extention);
                return (
                  <>
                    <Grid item xs={12} sm={6} lg={6}>
                      {loading ? (
                        <Skeletoncomponent />
                      ) : videoExtention.includes(extention) ? (
                        <>
                          <Card className="cardProperty">
                            <video className="videoNutrition" autoPlay loop muted controls>
                              <source src={e?.uploadNutrition} type="video/mp4" />
                              Your browser does not support HTML video.
                            </video>
                            <div className="nutritionTitle">
                              <p>{finalName}</p>
                              <DeleteFilled
                                style={{ cursor: "pointer" }}
                                onClick={() => deleteNutrition(e._id)}
                              />
                            </div>
                          </Card>
                        </>
                      ) : documentExtention.includes(extention) ? (
                        <>
                          <Card className="cardProperty">
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                              <div className="pdfCartNutrition">
                                <Viewer
                                  fileUrl={e?.uploadNutrition}
                                  scale={100}
                                  plugins={[defaultLayoutPluginInstance]}
                                />
                              </div>
                            </Worker>
                            <div className="nutritionTitle">
                              <p>{finalName}</p>
                              <DeleteFilled
                                // style={{ cursor: "pointer" }}
                                onClick={() => deleteNutrition(e._id)}
                              />
                            </div>

                            {/* <div className="deleteIcon">
                              <DeleteFilled
                                // style={{ cursor: "pointer" }}
                                onClick={() => deleteNutrition(e._id)}
                              />
                            </div> */}
                          </Card>
                        </>
                      ) : photoExtention.includes(extention) ? (
                        <>
                          <Card className="cardProperty">
                            <PhotoProvider>
                              <PhotoView src={e.uploadNutrition}>
                                <img
                                  src={e.uploadNutrition}
                                  alt=""
                                  height="200px"
                                  width="auto"
                                  className="imageNutrtion"
                                />
                              </PhotoView>
                            </PhotoProvider>
                            <div className="nutritionTitle">
                              <p>{finalName}</p>
                              <DeleteFilled
                                style={{ cursor: "pointer" }}
                                onClick={() => deleteNutrition(e._id)}
                              />
                            </div>
                          </Card>
                        </>
                      ) : audioExtention.includes(extention) ? (
                        <>
                          <Card className="audio cardProperty">
                            <ReactAudioPlayer
                              width="auto"
                              src={e.uploadNutrition}
                              controls
                              className="audiocontrols audio"
                            />
                            <div className="nutritionTitle">
                              <p>{finalName}</p>
                              <DeleteFilled
                                style={{ cursor: "pointer" }}
                                onClick={() => deleteNutrition(e._id)}
                              />
                            </div>
                          </Card>
                        </>
                      ) : (
                        ""
                      )}
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

        <div style={{ display: "flex", marginTop: "15px" }}>
          {/* <SoftSelect 
          defaultValue={PageSize}
          options={entries.map((entry) => ({value : entry, label: entry}))}
          onChange={setEntriesPerPage}
          size="small"
        /> */}
          {/* <Pagination
            style={{ padding: "5px" }}
            count={10}
            color="secondary"
            page={page}
            hideNextButton={true}
            hidePrevButton={true}
            onChange={(e, value) => setPage(value)}
          /> */}
          <Pagination
            pageSize={PageSize}
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

export default NutritionList;
