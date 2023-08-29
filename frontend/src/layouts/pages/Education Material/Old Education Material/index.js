import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import breakpoints from "assets/theme/base/breakpoints";
import "./index.css";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  getPurchaseEducationProductAction,
  planIdAction,
  sessionIdAction,
  purchaseEducationProductAction,
} from "store/actions/actions";
import { useLocation, useNavigate } from "react-router-dom";
import { popupAction } from "store/actions/actions";
import { Button, Card } from "@mui/material";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import SoftSnackbar from "components/SoftSnackbar";

import ReactAudioPlayer from "react-audio-player";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "react-photo-view/dist/react-photo-view.css";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import { findOneUserAction } from "store/actions/actions";
import SoftInput from "components/SoftInput";
import { informConsentMessage } from "store/actions/actions";
import { clearMessage } from "store/actions/actions";
// import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import DialogBox from "../DialogBox/index";

const payment_Key =
  "pk_test_51LTRs5DCf23U0HEkKGQqbNLjDAd3oZhCBgTlAvGK51q5u40Or6FM8KgdrIneIqux57ESsnkYeZbpNsF0ttB3OVTy000gijMl90";
const stripePromise = loadStripe(payment_Key);

export const DialogBoxComponent = () => {
  console.log("open..call dialog");
  return (
    <div>
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          // onClick={handleClose}
          >
            Disagree
          </Button>
          <Button
          // onClick={handleClose} autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

function EducationMaterial() {
  const { values } = breakpoints;
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const customerId = useSelector((state) => state.auth.auth.customerId);
  const [postPerPage, setPostPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const paymentId = useSelector((state) => state.auth.paymentInformation);
  const educationProduct = useSelector((state) =>
    state.auth.educationProduct?.list !== undefined ? state.auth.educationProduct?.list : []
  );
  const totalCount = useSelector((state) => state.auth?.educationProduct?.totalCount);

  const userData = useSelector((state) => state.auth.auth.userdata);
  const EducationProductList = userData?.EducationProductList;
  const planId = useSelector((state) => state.auth.setPlanId);
  const userId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  console.log("informConsentStatus..",informConsentStatus);
  const successMessage = useSelector((state) => state.auth.successMessage);
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const [errorSB, setErrorSB] = useState(errorMessage ? true : false);

  const closeErrorSB = () => {
    setErrorSB(false);
    dispatch(clearMessage());
  };

  const fetchPayment = async () => {
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      sessionId: paymentId,
    });
    if (result.error) {
      console.log(result.error);
    }
  };
  useEffect(() => {
    if (paymentId !== "") {
      return fetchPayment();
    }
  }, [paymentId]);

  useEffect(() => {
    dispatch(
      getPurchaseEducationProductAction({
        searchText: search,
        pageNo: page,
        limit: postPerPage,
        token: token,
      })
    );
    // navigate('/Education-Material')
  }, []);


  useEffect(() => {
    dispatch(
      getPurchaseEducationProductAction({
        searchText: search,
        pageNo: page,
        limit: postPerPage,
        token: token,
      })
    );
  }, [page, postPerPage, search]);

  useEffect(() => {
    const storeSession = async () => {
      let path = window.location.href;
      let splitPath = path.split("/");
      const id = splitPath[4].split("=");

      if (id[1]) {
        dispatch(sessionIdAction(id[1]));
        // setLoader(true);
        var index = EducationProductList.findIndex((x) => x == planId);
        index === -1 ? EducationProductList.push(planId) : [];

        dispatch(
          popupAction({
            data: {
              EducationProductList: EducationProductList,
            },
            id: userId,
            token: token,
          })
        );
        setTimeout(() => {
          navigate("/Education-Material");
        }, 1000);

        // setLoader(false)
      }
    };
    storeSession();
  }, []);
  useEffect(() => {
    dispatch(findOneUserAction({ userId, token }));
  }, []);
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
  const photoExtention = ["jpeg", "gif", "tiff", "psd", "jpg", "svg", "ai", "raw", "png", "webp"];
  const audioExtention = ["mp3", "aac", "ogg vorbis", "flac", "alac", "wav", "aiff", "dsd", "pcm"];

  let localSuccess = "http://localhost:3000/#/Education-Material";
  let localCancel = "http://localhost:3000/#/Education-Material";

  // let liveSuccess = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/Education-Material";
  //let liveCancel = "http://buser-web.s3-website-us-east-1.amazonaws.com/#/Education-Material";

  let liveSuccess = "https://app.buserinstitute.com/#/Education-Material";
  let liveCancel = "https://app.buserinstitute.com/#/Education-Material";

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize);
  };

  
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox py={3}>
        <SoftBox display="flex" justifyContent="flex-end" pb={2} className="mainClassOfSearch">
          <SoftInput
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search here"
            className="productSearch"
          />
        </SoftBox>

        <Grid container spacing={1}>
          {educationProduct &&
            educationProduct.map((data, i) => {
              let extention = data.productImage.substr(data.productImage.lastIndexOf(".") + 1);
              let finalName = data.productName;
              console.log("extention..", extention);
              return (
                <>
                  <Grid item xs={12} sm={6} lg={6}>
                    <div className="mainDiv">
                      <div className="parentDiv">
                        <div className="childDiv">
                          {videoExtention?.includes(extention) ? (
                            <>
                              {EducationProductList?.includes(data._id) ? (
                                <video
                                  className="videoHeight"
                                  width=""
                                  autoPlay={true}
                                  loop
                                  muted
                                  controls
                                >
                                  <source src={data?.productImage} type="video/mp4" />
                                  Your browser does not support HTML video.
                                </video>
                              ) : (
                                <Button disabled style={{ height: "100%" }}>
                                  <PhotoProvider>
                                    <PhotoView src={data.thumbnailImage}>
                                      <img
                                        src={data.thumbnailImage}
                                        alt=""
                                        style={{ objectFit: "contain" }}
                                      />
                                    </PhotoView>
                                  </PhotoProvider>
                                </Button>
                                // <Button disabled>

                                //   <video height="200px" width="100%" autoPlay={false} loop muted controls>
                                //     <source src={data?.productImage} type="video/mp4" />
                                //     Your browser does not support HTML video.
                                //   </video>
                                // </Button>
                              )}
                            </>
                          ) : documentExtention?.includes(extention) ? (
                            <>
                              {EducationProductList?.includes(data._id) ? (
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                                  <div className="pdfClassName">
                                    <Viewer
                                      fileUrl={data.productImage}
                                      scale={100}
                                      plugins={[defaultLayoutPluginInstance]}
                                    />
                                  </div>
                                </Worker>
                              ) : (
                                <Button disabled style={{ height: "100%" }}>
                                  <PhotoProvider>
                                    <PhotoView src={data.thumbnailImage}>
                                      <img
                                        src={data.thumbnailImage}
                                        alt=""
                                        style={{ objectFit: "contain" }}
                                      />
                                    </PhotoView>
                                  </PhotoProvider>
                                </Button>
                                // <Card style={{ pointerEvents: "none", opacity: 0.4 }}>

                                //   <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                                //     <div style={{ height: "200px" }}>
                                //       <Viewer
                                //         fileUrl={data.productImage}
                                //         scale={100}
                                //         plugins={[defaultLayoutPluginInstance]}
                                //       />
                                //     </div>
                                //   </Worker>
                                // </Card>
                              )}
                            </>
                          ) : photoExtention?.includes(extention) ? (
                            <>
                              {EducationProductList?.includes(data._id) ? (
                                <Card className="imageClassName">
                                  <PhotoProvider>
                                    <PhotoView src={data.productImage}>
                                      <img
                                        src={data.productImage}
                                        alt=""
                                        style={{ objectFit: "contain" }}
                                      />
                                    </PhotoView>
                                  </PhotoProvider>
                                </Card>
                              ) : (
                                <Button disabled style={{ height: "100%" }}>
                                  <PhotoProvider>
                                    <PhotoView src={data.thumbnailImage}>
                                      <img
                                        src={data.thumbnailImage}
                                        alt=""
                                        style={{ objectFit: "contain" }}
                                      />
                                    </PhotoView>
                                  </PhotoProvider>
                                </Button>
                              )}
                            </>
                          ) : (
                            // : audioExtention.includes(extention) ? (
                            //   <>
                            //     <Card className="audio">
                            //       <ReactAudioPlayer
                            //         width="auto"
                            //         src={data.productImage}
                            //         controls
                            //         className="audiocontrols audio"
                            //       />
                            //     </Card>
                            //   </>
                            // )
                            ""
                          )}
                        </div>
                        <div
                          // className="title"
                          style={{ display: "flex", justifyContent: "space-around" }}
                        >
                          <p style={{ fontSize: "17px" }}>{finalName}</p>
                          <p style={{ fontSize: "17px" }}>{data.amount}$</p>
                        </div>
                        <Button
                          className="educationPurchaseButton"
                          disabled={EducationProductList?.includes(data._id)}
                          onClick={() => {
                            dispatch(planIdAction(data._id));
                            dispatch(
                              purchaseEducationProductAction({
                                customerId,
                                priceId: data?.oneTimePriceId,
                                successURL: liveSuccess,
                                cancelURL: liveCancel,
                                // successURL: localSuccess,
                                // cancelURL: localCancel,
                                qty: 1,
                                token: token,
                              })
                            );
                          }}
                          variant="contained"
                        >
                          {EducationProductList?.includes(data._id) ? "Purchased" : "Purchase"}
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </>
              );
            })}
        </Grid>
        <div style={{ display: "flex" }} className="educationPagination">
          <Pagination
            pageSize={postPerPage}
            total={totalCount}
            current={page}
            onChange={(value) => setPage(value)}
            showSizeChanger
            showQuickJumper
            onShowSizeChange={onShowSizeChange}
          />
        </div>
      </SoftBox>
      <Footer />
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

      <DialogBox open={informConsentStatus}/>
    </DashboardLayout>
  );
}

export default EducationMaterial;
