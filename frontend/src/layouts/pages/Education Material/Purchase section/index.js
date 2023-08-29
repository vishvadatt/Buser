import React from "react";
import SoftButton from "components/SoftButton";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const PurchaseSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h4">Purchase Section</Typography>
      <Box sx={{ minHeight: "78vh" }} px={1} py={2} display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={3}>
          <SoftButton
            variant="gradient"
            color="dark"
            onClick={() => {
              navigate("/Education-Material/EducationEvents");
            }}
          >
            Education Events
          </SoftButton>

          <SoftButton
            variant="gradient"
            color="dark"
            onClick={() => {
              navigate("/Education-Material/On-Demand-PurchaseVideos");
            }}
          >
            On Demand Purchase Library
          </SoftButton>

          <SoftButton
            variant="gradient"
            color="dark"
            onClick={() => {
              navigate("/Education-Material/GrandeRoundArchives");
            }}
          >
            Grande Round Archives Library
          </SoftButton>
        </Box>
      </Box>
    </>
  );
};

export default PurchaseSection;
