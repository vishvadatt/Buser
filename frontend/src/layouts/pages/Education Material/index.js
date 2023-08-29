import SoftBox from "components/SoftBox";
import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useDispatch } from "react-redux";
import { DOCTOR_PURCHASE_SERVICE_LIST_ACTION } from "store/actions/actions";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import { LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_ACTION } from "store/actions/actions";
import OnDemand from "./on-demand videos";
import PurchaseSection from "./Purchase section";
import { SET_MY_EDUCATION_TAB } from "store/actions/actions";

const index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [tabValue, setTabValue] = useState(0);
  const tabsOrientation = "horizontal";
  const token = useSelector((state) => state?.auth?.auth.idToken);
  const tabValue = useSelector((state) => state?.auth?.myEducationTab);
  const doctorServiceList = useSelector((state) => state?.auth?.doctorAllServiceList?.result);
  const grandeRoundPurchasedVideoList = useSelector(
    (state) => state?.auth?.grandeRoundPurchasedVideoList
  );
  const handleSetTabValue = (event, newValue) => {
    dispatch(SET_MY_EDUCATION_TAB(newValue));
  };

  useEffect(() => {
    dispatch(DOCTOR_PURCHASE_SERVICE_LIST_ACTION({ token }));
  }, []);

  useEffect(() => {
    dispatch(LIVE_VIDEO_AND_INPERSON_PURCHASED_LIST_ACTION({ token }));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <AppBar position="static">
        <Tabs
          style={{ margin: "10px", width: "700px" }}
          orientation={tabsOrientation}
          value={tabValue}
          onChange={handleSetTabValue}
        >
          <Tab style={{ fontWeight: "bold" }} label="Educational Materials" />
          <Tab style={{ fontWeight: "bold" }} label="On-Demand Videos" />
          <Tab style={{ fontWeight: "bold" }} label="Booking & Purchase Section" />
        </Tabs>
      </AppBar>
      <Box sx={{ minHeight: "78vh" }} px={1} py={2} display={"flex"} flexDirection={"column"}>
        {tabValue === 0 && (
          <>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={3}>
              <Typography variant="h4">My Education Material</Typography>
            </Box>

            {doctorServiceList &&
              doctorServiceList?.some(
                (item) => item.serviceName === "Buser Institute Exercise Education Archives"
              ) && (
                <SoftBox className="my-ed-box">
                  <Typography variant="subtitle2">
                    Buser Institute Exercise Education Archives
                  </Typography>
                  <SoftBox>
                    <SoftButton
                      variant="gradient"
                      color="dark"
                      onClick={() => {
                        navigate("/Education-Material/EducationArchives");
                      }}
                    >
                      View Videos
                    </SoftButton>
                  </SoftBox>
                </SoftBox>
              )}

            {grandeRoundPurchasedVideoList && grandeRoundPurchasedVideoList.length > 0 && (
              <SoftBox className="my-ed-box">
                <Typography variant="subtitle2">
                  Buser Institute Grande Round Education Archives
                </Typography>
                <SoftBox>
                  <SoftButton
                    variant="gradient"
                    color="dark"
                    onClick={() => {
                      navigate("/Education-Material/GrandeRoundPurchasedVideos");
                    }}
                  >
                    View Videos
                  </SoftButton>
                </SoftBox>
              </SoftBox>
            )}
          </>
        )}
        {tabValue === 1 && <OnDemand />}
        {tabValue === 2 && <PurchaseSection />}
      </Box>
      <Footer />
    </DashboardLayout>
  );
};

export default index;
