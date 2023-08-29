// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React base styles

import "../style.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import GroupIcon from "@mui/icons-material/Group";
import { Button, TextField } from "@mui/material";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import pageRoutes from "page.routes";
import { useDispatch, useSelector } from "react-redux";
import { db, requestForToken, app, requestPermission } from "../../../../firebase/firebase";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import phototherapy from "assets/images/video_tharapyimg/phototherapy.png";
import SoftButton from "components/SoftButton";
import { Formik, Form } from "formik";
import imff from "../../../../assets/images/contactUs/contactusimageBuser.jpg";
import e from "cors";
import { useLocation, useParams } from "react-router-dom";
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

function PhotosVideosDetails() {
  const dispatch = useDispatch();
  const photolist = useSelector((state) => state.auth.photolist);
  const doctorPhotolist = useSelector((state) => state?.auth?.doctorPhotolist);
  const pucheslist = useSelector((state) => state?.auth?.pucheslist);
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const [data, setData] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location?.search);
  const clientDetailId = searchParams.get("id");
  const groupArrays = useSelector((state) => state?.auth?.clientPhotoGalley?.result);

  const UserId = useSelector((state) => state?.auth?.auth?._id);

  const [openUploadPhoto, setOpenUploadPhoto] = useState(false);

  useLayoutEffect(() => {
    localStorage.setItem("NotVisitToDetail", "");
    localStorage.setItem("lastVisitedUrlofPhotoAndVideo", "/details");
    setData(groupArrays.find((ele) => ele?._id == clientDetailId).photoData);
  }, [groupArrays, clientDetailId]);

  // useLayoutEffect(() => {
  //   let groupCustomizeData =
  //     groupArrays.length > 0 ? groupArrays.find((ele) => ele?._id === clientDetailId) : {};

  //   setData(groupCustomizeData);
  // }, [groupArrays]);

  let groupData = groupArrays.find((ele) => ele._id === clientDetailId);

  const handleSubmit = (e) => {
  };

  return (
    <DashboardLayout>
      <SoftBox mb={1} p={5}>
        <DashboardNavbar />

        <Grid className={`${root === "viewmore" ? "" : "display-none"}`} mt={2}>
          {data?.map((ele, ind) => (
            <>
              <Grid container>
                <Grid
                  item
                  style={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <div>{`Visit  ${ind + 1}:`}</div>
                  <div>{ele?.visitDate}</div>
                  {/* <div>2023</div> */}
                </Grid>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadFront} className="uploadimageshowp" />
                  </div>
                </Grid>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadBack} className="uploadimageshowp" />
                  </div>
                </Grid>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadLeft} className="uploadimageshowp" />
                  </div>
                </Grid>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadRight} className="uploadimageshowp" />
                  </div>
                </Grid>
              </Grid>
              <Grid container style={{ marginTop: "4px" }}>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadHandsOnHead} className="uploadimageshowp" />
                  </div>
                </Grid>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadPidgeonToed} className="uploadimageshowp" />
                  </div>
                </Grid>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadBoth} className="uploadimageshowp" />
                  </div>
                </Grid>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadCat} className="uploadimageshowp" />
                  </div>
                </Grid>
                <Grid item style={{ width: "20%" }}>
                  <div className="uploadimagep">
                    <img src={ele?.uploadDog} className="uploadimageshowp" />
                  </div>
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default PhotosVideosDetails;
