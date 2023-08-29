import { MenuItem, Checkbox, ListItemIcon, ListItemText } from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllDoctors } from "store/selectors/selector";
import { getSearchedDoctors } from "store/selectors/selector";
import FormField from "layouts/pages/account/components/FormField";
import "./style.css";
import { popupAction } from "store/actions/actions";
import { getSearchedDoctorsAction } from "store/actions/actions";

const Autocomplete = (props) => {
  const getAllDoctor = useSelector(getAllDoctors);
  const searchedDoctor = useSelector(getSearchedDoctors);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const dispatch = useDispatch();
  const [doctorList, setDoctorList] = useState(getAllDoctor);
  let availableDoc = userdata.selctedDoctors.map((item) => item.name);
  const [searchVal, setSearchVal] = useState("", [availableDoc]);
  // console.log("availableDoc", availableDoc);

  useEffect(() => {
    getSelectedDoctorsDetails(getAllDoctor);
  }, []);

  const getSelectedDoctorsDetails = (data) => {
    let list = data.map((item) => Object.assign(item, { isChecked: false }));
    setDoctorList(data);
    // console.log("LIST", data);
    if (userdata.selctedDoctors) {
      userdata.selctedDoctors &&
        userdata.selctedDoctors &&
        userdata.selctedDoctors.map((item) => {
          for (let i = 0; i < list.length; i++) {
            if (item._id === list[i]._id && item.isChecked === true) {
              list[i]["isChecked"] = true;
            }
          }
        });
    }

    setDoctorList(list);
  };

  const onChange = async (e) => {
    setSearchVal(e.target.value);
    // console.log("list", searchedDoctor);
    if (e.target.value !== "") {
      let searchVal = e.currentTarget.value;

      dispatch({ type: "SEARCHED_DOCTOR_LIST_ACTION", payload: { searchkey: searchVal } });

      setDoctorList(searchedDoctor);
      getSelectedDoctorsDetails(searchedDoctor);
    } else {
      getSelectedDoctorsDetails(getAllDoctor);
      dispatch(getSearchedDoctorsAction([]));
    }
  };

  console.log("available", userdata.selctedDoctors);

  const handleCheckbox = (val) => {
    let doctors = [...doctorList];
    let available = [];
    for (let i = 0; i < doctors.length; i++) {
      if (doctors[i]._id === val._id) {
        doctors[i].isChecked = !val.isChecked;
      }
    }

    available = doctors.filter((item) => item.isChecked !== false);
    let userSelectedDoc = userdata.selctedDoctors.filter((item) => item._id !== val._id);
    let userSelectedDoc1 = [...userSelectedDoc, ...available];
    var result = userSelectedDoc1.reduce((unique, o) => {
      if (!unique.some(obj => obj._id === o._id)) {
        unique.push(o);
      }
      return unique;
    }, []);
    // console.log(result);
    setDoctorList(doctors);
    dispatch(popupAction({ id: UserId, data: { selctedDoctors: result }, token }));
  };

  return (
    <Fragment>
      <FormField
        // label="Search Doctor"
        placeholder="Search Doctor"
        inputProps={{ type: "text", autoComplete: "" }}
        name="oldpassword"
        value={searchVal}
        onChange={onChange}
      />
      <div className="search-doctor">
        {doctorList &&
          doctorList.map((option) => (
            <MenuItem key={option._id} value={option._id} className="serch-list">
              <ListItemIcon>
                <Checkbox
                  checked={option.isChecked === true}
                  value={option._id}
                  onChange={() => handleCheckbox(option)}
                />
              </ListItemIcon>
              <ListItemText primary={option.name} title={option.name}>
                {" "}
                {option.name}
              </ListItemText>
            </MenuItem>
          ))}
      </div>
    </Fragment>
  );
};

export default Autocomplete;
