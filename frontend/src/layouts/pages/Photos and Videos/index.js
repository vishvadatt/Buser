// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useSelector } from "react-redux";

// Soft UI Dashboard PRO React base styles
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

import "react-photo-view/dist/react-photo-view.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./style.css";

import AppBar from "@mui/material/AppBar";

import AddPhotosVideo from "./Component/ClientGallery";
import ListPhotosVideos from "./Component/MyGallery";
import PhotonvideoSearch from "./Component/photonVideoSearcj";
import DialogBox from "../DialogBox/index";
import { findOneUserAction } from "store/actions/actions";
import { useDispatch } from "react-redux";

function PhotosandVideos() {
  const userData = useSelector((state) => state?.auth?.auth);
  const [textValue, setTextValue] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [pageNo, setPageNo] = useState(1);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  const handletabvalue = () => setTabValue(0);
  const pageSizeHandler = (val) => {
    setPageSize(val);
  };
  const pageNoHandler = (val) => {
    setPageNo(val);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findOneUserAction({ userId : userData?._id, token : userData?.idToken}));
  },[]);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <PhotonvideoSearch
        searchTextValue={setTextValue}
        tabValue={tabValue}
        setTabValue={setTabValue}
        pageSize={pageSize}
        pageNo={pageNo}
      /> */}
      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <SoftBox mb={3} p={1}>
              {userData?.userType === "doctor" && (
                <AppBar position="static">
                  <Tabs
                    style={{ margin: "10px" }}
                    orientation="horizontal"
                    value={tabValue}
                    onChange={handleSetTabValue}
                  >
                    <Tab label="My Gallery" className="tabClass" />
                    <Tab label="Client Gallery" className="tabClass" />
                  </Tabs>
                </AppBar>
              )}
              <SoftBox
                display="flex"
                flexDirection="column"
                justifyContent="flex-end"
                height="100%"
              ></SoftBox>
              {tabValue === 0 && (
                <ListPhotosVideos
                  tabValue={tabValue}
                  searchTextValue={textValue}
                  pageSizeHandler={pageSizeHandler}
                  pageNoHandler={pageNoHandler}
                />
              )}
              {tabValue === 1 && (
                <AddPhotosVideo
                  handletabvalue={handletabvalue}
                  searchTextValue={textValue}
                  pageSizeHandler={pageSizeHandler}
                  pageNoHandler={pageNoHandler}
                />
              )}
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <DialogBox open={informConsentStatus}/>
      <Footer />
    </DashboardLayout>
  );
}

export default PhotosandVideos;
