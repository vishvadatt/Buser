import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SoftButton from "components/SoftButton";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION } from "store/actions/actions";
import _ from "lodash";
import SoftBox from "components/SoftBox";

const OnDemand = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const onDemandPurchasedVideoList = useSelector(
    (state) => state?.auth?.onDemandPurchasedVideoList
  );

  console.log(onDemandPurchasedVideoList, "az");

  const groupedData = _.groupBy(onDemandPurchasedVideoList, "serviceName");

  const FoundationFuctionList = groupedData["Buser Institute Foundations of Function Course"] || [];
  const AdvanceEducationList = groupedData["Advanced Education Topic Seminars"] || [];
  const AffiliatePractionerList =
    groupedData["Buser Institute Affiliate Practitioner Certification Course Modules 1-4"] || [];

  useEffect(() => {
    dispatch(ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION({ token }));
  }, []);

  return (
    <>
      <Box sx={{ minHeight: "78vh" }} px={1} py={2} display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={3}>
          <Typography variant="h4">On Demand Education Videos</Typography>
        </Box>

        {FoundationFuctionList && FoundationFuctionList.length > 0 && (
          <SoftBox className="my-ed-box">
            <Typography variant="subtitle2">
              Buser Institute Foundations of Function Course
            </Typography>
            <SoftBox>
              <SoftButton
                variant="gradient"
                color="dark"
                onClick={() => {
                  navigate("/Education-Material/FundationFunctionCourse");
                }}
              >
                View Videos
              </SoftButton>
            </SoftBox>
          </SoftBox>
        )}

        {AdvanceEducationList && AdvanceEducationList.length > 0 && (
          <SoftBox className="my-ed-box">
            <Typography variant="subtitle2">Advanced Education Topic Seminars</Typography>
            <SoftBox>
              <SoftButton
                variant="gradient"
                color="dark"
                onClick={() => {
                  navigate("/Education-Material/AdvanceEducation");
                }}
              >
                View Videos
              </SoftButton>
            </SoftBox>
          </SoftBox>
        )}

        {AffiliatePractionerList && AffiliatePractionerList.length > 0 && (
          <SoftBox className="my-ed-box">
            <Typography variant="subtitle2">
              Buser Institute Affiliate Practitioner Certification Course Modules 1-4
            </Typography>
            <SoftBox>
              <SoftButton
                variant="gradient"
                color="dark"
                onClick={() => {
                  navigate("/Education-Material/AffiliatePractioner");
                }}
              >
                View Videos
              </SoftButton>
            </SoftBox>
          </SoftBox>
        )}
      </Box>
    </>
  );
};

export default OnDemand;
