import Grid from "@mui/material/Grid";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import ReactAudioPlayer from "react-audio-player";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { DeleteFilled } from "@ant-design/icons";
import PropTypes from "prop-types";
import { Card } from "@mui/material";
import { deletePhotoAndVideosAction,getPhotoAndVideosAction } from "store/actions/actions";
import { useSelector ,useDispatch} from "react-redux";

function UploadPhotoAndVideo({listData}) {
  const UserId = useSelector((state) => state.auth.auth._id);
  const dispatch = useDispatch();

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
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const onLoadPhotoVideos = (Id,page,limit) => {
    dispatch(getPhotoAndVideosAction({ UserId: Id, page: page,limit : limit }));
  }

  const deletePhotoVideos = (id) => {
    console.log("MMMMMMMMM-3");
    dispatch(deletePhotoAndVideosAction({  Id: id }));
    setTimeout(() => {
      onLoadPhotoVideos(UserId,page,PageSize);
    })
  };

  return (
    <Grid container spacing={3}>
      {listData.length > 0 ? (
        listData.map((e, index) => {
          console.log("e.filePath..", e);
          let extention = e.photos.substr(e.photos.lastIndexOf(".") + 1);
          // let fileName = e.photos.substr(e.photos.lastIndexOf("/") + 1);
          // let file = fileName.split(".").slice(0, -1).join(".");
          // let finalName = file.charAt(0).toUpperCase() + file.slice(1);
          let finalName = e.name;
          console.log("extention..", extention);
          return (
            <>
              <Grid item xs={12} sm={6} lg={4} p={1}>
                {videoExtention.includes(extention) ? (
                  <>
                    <Card>
                      <video height="200px" autoPlay loop muted controls>
                        <source src={e?.photos} type="video/mp4" />
                        Your browser does not support HTML video.
                      </video>
                      <div className="title">
                        <p>{finalName}</p>
                        <DeleteFilled
                          style={{ cursor: "pointer" }}
                          onClick={() => deletePhotoVideos(e._id)}
                        />
                      </div>
                    </Card>
                  </>
                ) : documentExtention.includes(extention) ? (
                  <>
                    <Card>
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                        <div style={{ height: "200px" }}>
                          <Viewer
                            fileUrl={e?.photos}
                            scale={100}
                            plugins={[defaultLayoutPluginInstance]}
                          />
                        </div>
                      </Worker>
                      <div className="title">
                        <p>{finalName}</p>
                        <DeleteFilled
                          style={{ cursor: "pointer" }}
                          onClick={() => deletePhotoVideos(e._id)}
                        />
                      </div>
                    </Card>
                  </>
                ) : photoExtention.includes(extention) ? (
                  <>
                    <Card>
                      <PhotoProvider>
                        <PhotoView src={e.photos}>
                          <img
                            src={e.photos}
                            alt=""
                            height="200px"
                            width="auto"
                            style={{ objectFit: "contain" }}
                          />
                        </PhotoView>
                      </PhotoProvider>
                      <div className="title">
                        <p>{finalName}</p>
                        <DeleteFilled
                          style={{ cursor: "pointer" }}
                          onClick={() => deletePhotoVideos(e._id)}
                        />
                      </div>
                    </Card>
                  </>
                ) : audioExtention.includes(extention) ? (
                  <>
                    <Card className="audio">
                      <ReactAudioPlayer
                        width="auto"
                        src={e.photos}
                        controls
                        className="audiocontrols audio"
                      />
                      <div className="title">
                        <p>{finalName}</p>
                        <DeleteFilled
                          style={{ cursor: "pointer" }}
                          onClick={() => deletePhotoVideos(e._id)}
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
  );
}
UploadPhotoAndVideo.propTypes = {
  listData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default UploadPhotoAndVideo;
