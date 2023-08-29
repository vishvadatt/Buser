import React, { useEffect } from "react";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import SoftButton from "components/SoftButton";
import { useDispatch, useSelector } from "react-redux";
import "./FoundationFunctionVideos.scss";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION } from "store/actions/actions";
import _ from "lodash";

const FoundationFunctionVideos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const onDemandPurchasedVideoList = useSelector(
    (state) => state?.auth?.onDemandPurchasedVideoList
  );

  console.log(onDemandPurchasedVideoList, "az");

  const groupedData = _.groupBy(onDemandPurchasedVideoList, "serviceName");

  const FoundationFuctionList = groupedData["Buser Institute Foundations of Function Course"] || [];

  useEffect(() => {
    dispatch(ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION({ token }));
  }, []);

  return (
    <PageLayout>
      <Box position={"relative"} px={10} py={6}>
        <SoftBox className="video-page-header">
          <SoftBox>
            <SoftTypography className="video-page-title">
              Foundation of Function Session
            </SoftTypography>
          </SoftBox>
          <SoftBox className="video-page-header-action">
            <SoftButton
              onClick={() => {
                navigate(-1);
              }}
              variant="gradient"
              color="dark"
              sx={{
                position: "absolute",
                top: 55,
                left: 55,
              }}
            >
              Back
            </SoftButton>
          </SoftBox>
        </SoftBox>
        <Box width={"100%"}>
          <Box display={"flex"} gap={"50px"} flexWrap={"wrap"} margin={1}>
            {FoundationFuctionList &&
              FoundationFuctionList?.map((item, itemIndex) => (
                <Card sx={{ width: 250 }} key={itemIndex} variant="outlined">
                  <CardContent sx={{ margin: "auto" }}>
                    <Typography variant="h5" component="div">
                      {item?.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {item?.location}
                    </Typography>

                    <Typography sx={{ mb: 1.5, fontSize: 16 }} color="text.secondary">
                      {item?.startDate}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ margin: "auto" }}>
                    <SoftButton
                      variant="gradient"
                      color="dark"
                      onClick={() =>
                        navigate(
                          `/Education-Material/OnDemand/SessionDetails/${item?.onDemandEducationSessionId}`
                        )
                      }
                    >
                      View
                    </SoftButton>
                  </CardActions>
                </Card>
              ))}
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
};

export default FoundationFunctionVideos;
