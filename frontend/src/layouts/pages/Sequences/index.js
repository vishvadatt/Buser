// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard PRO React base styles

import breakpoints from "assets/theme/base/breakpoints";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { patientsoapdata } from "store/actions/actions";
import SoftInput from "components/SoftInput";
import { useSelector } from "react-redux";
import { getSearchPatient } from "store/actions/actions";
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import Sequence from "./SequenceTable";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import "./style.css";
import DialogBox from "../DialogBox/index";
import { findOneUserAction } from "store/actions/actions";

function Sequences() {
  const { values } = breakpoints;
  const [clientList, setClientList] = useState([]);
  const [showClient, setShowClient] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.auth);
  const patientlist = useSelector((state) => state.auth.searchpatientlist.result);
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);

  useEffect(() => {
    const loadPatient = async () => {
      if (searchValue !== "") {
        const response = await axios.get("https://api.buserinstitute.com/api/user/userList", {
          headers: {
            authorization: userData?.idToken,
          },
        });
        setClientList(response.data.data.result);
      }
    };
    loadPatient();
  }, [searchValue]);

  useEffect(() => {
    dispatch(findOneUserAction({ userId: userData?._id, token: userData?.idToken }));
  }, []);

  let entries = [10, 15, 20, 25];
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
    dispatch(patientsoapdata({ patientId: item._id }));

    setShowClient([]);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox py={3}>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={6} sm={6} mb={3}>
            <input
              type="text"
              className="sequenceInput"
              onChange={(e) => onHandleChange(e.target.value)}
              placeholder="Search Client here"
              value={searchValue}
            />
            <div className="SearchingSequence">
              {showClient &&
                showClient.map((user, i) => (
                  <div key={i} onClick={() => onSuggestHandle(user)}>
                    <Grid className="select-item4">
                      <Grid container>
                        <Grid item lg={2} className="profile-details-select4">
                          {user.UserProfilePIC ? (
                            <>
                              <div
                                style={{ marginLeft: "10px", marginTop: "9px", paddding: "16px" }}
                                className="profile-select"
                              >
                                <img src={user.UserProfilePIC} height={40} width={40} />
                              </div>
                            </>
                          ) : (
                            <div
                              style={{ marginLeft: "10px", marginTop: "9px", paddding: "16px" }}
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
          </Grid>
          <Grid item xs={4} lg={4} sm={4} mb={4}>
            <SoftBox color={"white"} className="navbar-menus">
              <SoftButton
                style={{ marginRight: "20px" }}
                component={Link}
                target="_blank"
                rel="noreferrer"
                disabled={!searchValue}
                onClick={() => window.open("https://sandbox.optimum-method.com/#/programs/abc")}
                // onClick="window.location.href = 'https://sandbox.optimum-method.com/#/programs/abc'; return false;"
                to="https://sandbox.optimum-method.com/#/programs/abc"
                className="doctor-soap-btn navbar-btn"
              >
                Create Sequence
              </SoftButton>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <Sequence />
      <Footer />
      <DialogBox open={informConsentStatus} />
    </DashboardLayout>
  );
}

export default Sequences;
