/* eslint-disable react/prop-types */
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { getDoctorPhotoTheraphi } from "store/actions/actions";
import { getPhotoTheraphi } from "store/actions/actions";
import ReactSelect from "react-select";

function PhotoTherapySearch({
  UserId,
  pageNo,
  searchTextValue,
  tabValue,
  postPerPage,
  searchingDoctor,
  searchingClient,
}) {
  const userType = useSelector((state) => state?.auth?.auth?.userType);
  const token = useSelector((state) => state?.auth?.auth?.idToken);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [selectedDocValue, setSelectedDocValue] = useState("");
  const [selectedClientValue, setSelectedClientValue] = useState("");
  useLayoutEffect(() => {
    if (
      localStorage.getItem("lastVisitedUrlofPhotoTherapy") === "/viewmore" &&
      localStorage.getItem("NotVisitToViewMore") === ""
    ) {
      searchTextValue(localStorage.getItem("photoTharepySearch"));
      setSearchText(localStorage.getItem("photoTharepySearch"));
      localStorage.setItem("NotVisitToViewMore", "yes");
      localStorage.setItem("lastVisitedUrlofPhotoTherapy", "");
    } else if (localStorage.getItem("NotVisitToViewMore") === "yes") {
      localStorage.setItem("photoTharepySearch", "");
      localStorage.setItem("lastVisitedUrlofPhotoTherapy", "");
      searchTextValue("");
      setSearchText("");
    }
  }, []);

  useEffect(() => {
    setSearchText("");
  }, [tabValue]);

  const onHandleChange = (text) => {
    setSelectedClientValue(text);
    if (text === null) {
      setSearchText("");
      searchTextValue("");
      localStorage.setItem("photoTharepySearch", text);
    } else {
      setSearchText(text?.label);
      searchTextValue(text?.label);
      localStorage.setItem("photoTharepySearch", text?.label);
    }
  };

  const onHandleChangeDoc = (text) => {
    setSelectedDocValue(text);
    if (text === null) {
      setSearchText("");
      searchTextValue("");
      localStorage.setItem("photoTharepySearch", text);
    } else {
      setSearchText(text?.label);
      searchTextValue(text?.label);
      localStorage.setItem("photoTharepySearch", text?.label);
    }
  };

  // console.log("tabValue", tabValue);

  useLayoutEffect(() => {
    console.log(searchText, "searchTextsearchText");
    const data = setTimeout(() => {
      if (userType === "doctor") {
        if (tabValue === 1) {
          dispatch(
            getPhotoTheraphi({
              token: token,
              UserId: UserId,
              limit: postPerPage,
              pageNo: pageNo,
              searchText: { searchText },
            })
          );
        } else if (tabValue === 0) {
          dispatch(
            getDoctorPhotoTheraphi({
              token: token,
              UserId: UserId,
              limit: postPerPage,
              pageNo: pageNo,
              searchText: { searchText },
            })
          );
        }
      } else if (userType === "client") {
        dispatch(
          getPhotoTheraphi({
            token: token,
            UserId: UserId,
            limit: postPerPage,
            pageNo: pageNo,
            searchText: { searchText },
          })
        );
      }
    }, 2000);

    return () => {
      clearTimeout(data);
    };
  }, [searchText]);

  return (
    <div className="searchpatients">
      <Grid item xs={12} lg={6} sm={6}>
        {userType === "doctor" && tabValue === 1 && (
          <ReactSelect
            className="doctorNameInputs"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: "15px !important",
                borderRadius: "8px",
              }),
            }}
            placeholder="Search Practitioner here"
            closeMenuOnSelect={true}
            options={searchingDoctor}
            onChange={(e) => {
              onHandleChangeDoc(e);
            }}
            value={selectedDocValue}
            isClearable={true} // Enable clear option
          />
        )}
        {userType === "doctor" && tabValue === 0 && (
          <ReactSelect
            className="doctorNameInputs1"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: "15px !important",
                borderRadius: "8px",
              }),
            }}
            placeholder="Search Patient here..."
            closeMenuOnSelect={true}
            options={searchingClient}
            onChange={(e) => {
              onHandleChange(e);
            }}
            value={selectedClientValue}
            isClearable={true}
          />
        )}

        {userType === "client" && (
          <ReactSelect
            className="doctorNameInputs"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: "15px !important",
                borderRadius: "8px",
              }),
            }}
            placeholder="Search Practitioner here"
            closeMenuOnSelect={true}
            options={searchingDoctor}
            onChange={(e) => {
              onHandleChangeDoc(e);
            }}
            value={selectedDocValue}
            isClearable={true} // Enable clear option
          />
        )}
      </Grid>
    </div>
  );
}

export default PhotoTherapySearch;
