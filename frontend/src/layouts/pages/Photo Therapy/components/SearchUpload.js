import React, { useLayoutEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SoftTypography from "components/SoftTypography";
import { url } from "services/AxiosInstance";
import index from "layouts/pages/Client-Intake-Form/components/OnePage";
import ReactSelect from "react-select";
import { axiosInstance } from "services/AxiosInstance";
import logger from "redux-logger";

function search(props) {
  const [searchValue, setSearchValue] = useState("");
  const [doctorList, setdoctorList] = useState([]);
  const [showDoctor, setshowDoctor] = useState([]);
  const [doctorid, setDoctorid] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const userID = useSelector((state) => state?.auth?.auth);
  const token = useSelector((state) => state?.auth?.auth?.idToken);

  const loadDoctor = async () => {
    // if (searchValue !== "") {
      const response = await axios.get(
        `https://api.buserinstitute.com/api/user/searchPractitioner?searchText=${searchValue}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      const newResponse = response?.data?.data?.result?.map((a, i) => ({
        value: a._id,
        label: a.name,
      }));
      console.log("newResponse..",newResponse);
      setdoctorList(newResponse);
    // }
  };

  useEffect(() => {
    loadDoctor();
  }, []);

  const onHandleChange = (text) => {
    props.func("");
    props?.errorFunction(false);
    let matches = [];
    if (text.length > 0) {
      matches = doctorList?.filter((user) => {
        const regex = new RegExp(`${text}`, "gi");
        return user?.name?.match(regex);
      });
    }

    setshowDoctor(matches);
    setSearchValue(text);
  };

  const onSuggestHandle = (item) => {
    // setSearchValue(item?.name);
    setSearchValue(item?.label);
    // setDoctorid(item?._id);
    setDoctorid(item?.value);
    // props?.func(item?._id);
    props?.func(item?.value);
    // dispatch(doctoSlotData({ doctorId: item._id }));
    // setshowDoctor([]);
  };

  return (
    <div className="searchpatientupd" style={{ height: "0 !important" }}>
      <Grid
        item
        xs={12}
        lg={6}
        sm={6}
        style={{ justifyContent: "end", display: "flex", position: "relative", top: "-10px" }}
      >
        {props?.errorVisible && (
          <div
            style={{
              fontSize: "15px",
              position: "absolute",
              top: "7px",
              right: "20px",
              color: "red",
              zIndex: "500",
            }}
          >
            {props?.errorMessage}
          </div>
        )}
        {/* <input
          type="text"
          className="doctorNameInputupd"
          onChange={(e) => onHandleChange(e?.target?.value)}
          placeholder="Search Doctor here"
          value={searchValue}
          style={{ width: "150px important" }}
        /> */}

        <ReactSelect
          className="doctorNameInputupd"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              // borderColor: state.isFocused ? 'grey' : 'red',
              // height : "40px",
              fontSize: "15px !important",
              borderRadius: "8px",
            }),
          }}
          placeholder="Select Doctor Here"
          closeMenuOnSelect={true}
          // isMulti
          options={doctorList}
          onChange={(e) => {
            onHandleChange(e?.label);
            onSuggestHandle(e);
          }}
        />
        {/* <div className="SearchingDoctorupd">
          {showDoctor &&
            showDoctor
              .filter((users) => users?._id !== userID?._id)
              .map((user, i) => (
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
                      <Grid item lg={10} className="profile-details-select4" p={1}>
                        <div style={{ marginLeft: "10px" }}>
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
      </Grid>
    </div>
  );
}

export default search;
