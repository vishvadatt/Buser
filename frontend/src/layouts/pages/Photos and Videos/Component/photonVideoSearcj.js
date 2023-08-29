/* eslint-disable react/prop-types */
import React, { useLayoutEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SoftTypography from "components/SoftTypography";
import { url } from "services/AxiosInstance";
import { useDispatch } from "react-redux";
import { getDoctorPhotoTheraphi } from "store/actions/actions";
import { getPhotoTheraphi } from "store/actions/actions";
import { getClientPhotosGalleryAction } from "store/actions/actions";
import { getMyPhotosGalleryAction } from "store/actions/actions";
import ReactSelect from "react-select";

function PhotonvideoSearch({
  UserId,
  pageNo,

  searchTextValue,
  tabValue,
  setTabValue,
  pageSize,
}) {
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const userId = useSelector((state) => state?.auth?.auth?._id);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const [searchValue, setSearchValue] = useState("");
  const [doctorList, setdoctorList] = useState([]);
  const [showDoctor, setshowDoctor] = useState([]);
  const dispatch = useDispatch();
  const [doctorid, setDoctorid] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchDoctorList,setSearchDoctorList] = useState([]);
  const groupArrays = useSelector((state) =>
    state.auth.photoGalley.result ? state.auth.photoGalley.result : []
  );

  useLayoutEffect(() => {
    if (
      localStorage.getItem("lastVisitedUrlofPhotoAndVideo") === "/details" &&
      localStorage.getItem("NotVisitToDetail") === ""
    ) {
      setTabValue(1);
      searchTextValue(localStorage.getItem("photoAndVideoSearch"));
      setSearchText(localStorage.getItem("photoAndVideoSearch"));
      localStorage.setItem("NotVisitToDetail", "yes");
      localStorage.setItem("lastVisitedUrlofPhotoAndVideo", "");
    } else if (localStorage.getItem("NotVisitToDetail") === "yes") {
      localStorage.setItem("photoAndVideoSearch", "");
      localStorage.setItem("lastVisitedUrlofPhotoAndVideo", "");
      searchTextValue("");
      setSearchText("");
    }
  }, []);

  const onLoadGetDoctor = async () => {
    const response = await axios.get(`https://api.buserinstitute.com/api/photoTherapy/doctorPhotoTherapySearch/${userId}?pageNo=${1}&limit=${10}&searchText=`,{
      headers : {
        authorization : token
      }
    });
    // console.log("response..",response.data.data.result);
    const newResponse = response.data?.data?.result?.map((a, i) => ({
      value: a?._id,
      label: a?.name,
    }));
    setSearchDoctorList(newResponse)
  }

  useEffect(() => {
    onLoadGetDoctor()
  },[]);

  const onHandleChange = (text) => {
    setSearchText(text);
    searchTextValue(text);
    localStorage.setItem("photoAndVideoSearch", text);
  };

  useLayoutEffect(() => {
    const data = setTimeout(() => {
      if (userType === "doctor") {
        if (tabValue === 0) {
          dispatch(getMyPhotosGalleryAction({ pageNo: pageNo, limit: pageSize, token }));
        } else if (tabValue === 1) {
          dispatch(
            getClientPhotosGalleryAction({
              pageNo: pageNo,
              limit: pageSize,
              searchText: searchText,
              token,
            })
          );
        }
      } else if (userType === "client") {
        dispatch(
          getMyPhotosGalleryAction({
            UserId: UserId,
            pageNo: pageNo,
            limit: pageSize,
            searchText: searchText,
            token,
          })
        );
      }
    }, 2000);

    return () => {
      clearTimeout(data);
    };
  }, []);

  return (
    <div className="searchpatientp" style={{ marginTop: "10px" }}>
      <Grid item xs={12} lg={6} sm={6} style={{ justifyContent: "end", display: "flex" }}>
        {/* <input
          type="text"
          className="doctorNameInputp"
          onChange={(e) => onHandleChange(e.target.value)}
          placeholder={
            userType === "doctor"
              ? "Search Patient here"
              : userType === "client"
              ? "Search Doctor here"
              : ""
          }
          value={searchText}
        /> */}

        <ReactSelect
          className="photovideoDoctorSearch"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontSize: "15px !important",
              borderRadius: "8px",
            }),
          }}
          placeholder={
            userType === "doctor" && tabValue === 1
              ? "Search Patient here"
              : "Search Doctor here"
          }
          closeMenuOnSelect={true}
          options={searchDoctorList}
          onChange={(e) => {
            onHandleChange(e?.label);
            // onSuggestHandle(e);
          }}
        />

        {/* <div className="SearchingDoctor">
          {showDoctor &&
            showDoctor
              .filter((users) => users._id !== userID._id)
              .map((user, i) => (
                <div key={i} onClick={() => onSuggestHandle(user)}>
                  <Grid className="select-item4">
                    <Grid container>
                      <Grid item lg={2}>
                        {user.UserProfilePIC ? (
                          <>
                            <div
                              p={1}
                              style={{ marginLeft: "10px", marginTop: "9px" }}
                              className="profile-select"
                            >
                              <img src={user.UserProfilePIC} height={40} width={40} />
                            </div>
                          </>
                        ) : (
                          <div
                            p={1}
                            style={{ marginLeft: "10px", marginTop: "9px" }}
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
                      <Grid item lg={10} className="profile-details-select4" p={1}>
                        <div style={{ marginLeft: "10px" }}>
                          <SoftTypography variant="button" fontWeight="regular" color="text">
                            {user.name}
                          </SoftTypography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              ))}
        </div> */}
      </Grid>
    </div>
  );
}

export default PhotonvideoSearch;
