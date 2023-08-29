import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SoftTypography from "components/SoftTypography";
import index from "layouts/pages/Client-Intake-Form/components/OnePage";
import { axiosInstance } from "services/AxiosInstance";
import axios from "axios";
import SoftSelect from "components/SoftSelect";
import ReactSelect from "react-select";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { SET_SELECTED_BOOKING_APT_DOC } from "store/actions/actions";

function search(props) {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [showDoctor, setshowDoctor] = useState([]);
  const [shouldApiCall, setShouldApiCall] = useState(false);
  const [doctorid, setDoctorid] = useState("");
  const userID = useSelector((state) => state?.auth?.auth);
  const token = useSelector((state) => state?.auth?.auth?.idToken);

  // useLayoutEffect(() => {
  //   if (
  //     localStorage.getItem("lastVisitedUrl") === "/timeslote" &&
  //     localStorage.getItem("appointmentVisited") !== "yes"
  //   ) {
  //     // setDoctorid(localStorage.getItem("searchId"));
  //     setSearchValue(localStorage.getItem("searchValue"));
  //     // props.func(localStorage.getItem("searchId"));
  //     localStorage.setItem("lastVisitedUrl", "");
  //     localStorage.setItem("appointmentVisited", "yes");
  //   } else if (localStorage.getItem("appointmentVisited") === "yes") {
  //     // localStorage.setItem("searchId", "");
  //     localStorage.setItem("searchValue", "");
  //     localStorage.getItem("");
  //     // setDoctorid("");
  //     setSearchValue("");
  //     // props.func("");
  //   }
  // }, []);

  const loadDoctor = async () => {
    try {
      const response = await axiosInstance.post(
        `Appointment/doctorsListByTheropyType`,
        {
          therapyType: props.type,
          city: props.city,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );
      const newResponse = response?.data?.data?.map((a, i) => ({
        ...a,
        value: a._id,
        label: a.doctorName,
      }));
      setshowDoctor(newResponse);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.log("API request error", error);
      }
    }
  };

  // useEffect(() => {
  //   loadDoctor()
  //   if (shouldApiCall) {
  //     console.log(shouldApiCall, "sAPi");
  //     loadDoctor();
  //   }
  //   return () => {
  //     if (cancelToken) {
  //       cancelToken.cancel("Request canceled");
  //     }
  //   };
  // }, [searchValue, shouldApiCall]);

  useEffect(() => {
    if (props?.type) {
      loadDoctor();
    }
  }, [props?.type, props?.city]);

  console.log(
    showDoctor.filter((li) => li.value === props.value.value),
    props.value.value,
    "sAPi"
  );

  const onHandleChange = (text) => {
    console.log("text..", text);
    setShouldApiCall(true);
    setSearchValue(text);
    // props.func("");
    // props?.errorFunction(false);
    if (text?.length > 0) {
      // setshowDoctor(doctorList);
    } else {
      setshowDoctor([]);
    }
    // let matches = [];
    // if (text.length > 0) {
    //   matches = doctorList?.filter((user) => {
    //     const regex = new RegExp(`${text}`, "gi");
    //     return user?.name?.match(regex);
    //   });
    // }
  };

  const onSuggestHandle = (item) => {
    console.log("item..", item);
    // setshowDoctor([]);
    setShouldApiCall(false);
    // setdoctorList([]);
    // localStorage.setItem("searchId", item?._id);
    localStorage.setItem("searchId", item?.value);
    localStorage.setItem("searchValue", item?.label);

    // setSearchValue(item?.name);
    setSearchValue(item?.label);
    // setDoctorid(item?._id);
    setDoctorid(item);
    // props?.func(item?._id);
    // props?.func(item);
    dispatch(SET_SELECTED_BOOKING_APT_DOC(item));

    // dispatch(doctoSlotData({ doctorId: item._id }));
  };

  return (
    <div className="searchpatientss" style={{ height: "0 !important" }}>
      <Box style={{ justifyContent: "end", display: "flex", position: "relative", top: "12px" }}>
        {props?.errorVisible && (
          <div
            style={{
              fontSize: "15px",
              position: "absolute",
              top: "-23px",
              color: "red",
              zIndex: "1000",
            }}
          >
            {props?.errorMessage}
          </div>
        )}
        {/* <input
          type="text"
          className="doctorNameInputss"
          onChange={(e) => onHandleChange(e?.target?.value)}
          placeholder="Search Doctor here"
          value={searchValue}
          style={{ width: "150px important" }}
        /> */}

        <ReactSelect
          className="doctorNameInputss"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              fontSize: "15px !important",
              borderRadius: "8px",
            }),
          }}
          placeholder="Select Practitioner Here"
          closeMenuOnSelect={true}
          // isMulti
          // isClearable={true}
          value={
            showDoctor.length > 0
              ? showDoctor.filter((li) => li.value === props.value.value).length > 0 &&
                showDoctor.filter((li) => li.value === props.value.value)[0]
              : []
          }
          options={showDoctor}
          onChange={(e) => {
            // onHandleChange(e?.label);
            onSuggestHandle(e);
          }}
        />
        {/* <div className="SearchingDoctorss">
          {showDoctor &&
            showDoctor.map((user, i) => (
              <div key={i} onClick={() => onSuggestHandle(user)}>
                <Grid className="select-item4">
                  <Grid container>
                    <Grid item lg={2}>
                      {user?.UserProfilePIC ? (
                        <>
                          <div
                            p={1}
                            style={{ marginLeft: "10px", marginTop: "9px" }}
                            className="profile-select"
                          >
                            <img src={user?.UserProfilePIC} height={40} width={40} />
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
                    <Grid
                      item
                      lg={10}
                      className="profile-details-select4"
                      p={1}
                      style={{ display: "flex", alignItems: "center", justifyContent: "end" }}
                    >
                      <div
                        style={{
                          marginLeft: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <SoftTypography variant="button" fontWeight="regular" color="text">
                          {user?.name}
                        </SoftTypography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            ))}
        </div> */}
      </Box>
    </div>
  );
}

export default search;
