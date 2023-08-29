import React, { useEffect } from "react";
import PageLayout from "examples/LayoutContainers/PageLayout";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import SoftButton from "components/SoftButton";
import { useDispatch, useSelector } from "react-redux";
import "../FoundationsFunctionVideos/FoundationFunctionVideos.scss";
import SoftTypography from "components/SoftTypography";
import SoftBox from "components/SoftBox";
import { ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION } from "store/actions/actions";
import _ from "lodash";

const AffiliatePractioner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.auth.idToken);
  const onDemandPurchasedVideoList = useSelector(
    (state) => state?.auth?.onDemandPurchasedVideoList
  );
  console.log(onDemandPurchasedVideoList, "az");

  const groupedData = _.groupBy(onDemandPurchasedVideoList, "serviceName");

  const List =
    groupedData["Buser Institute Affiliate Practitioner Certification Course Modules 1-4"] || [];

  useEffect(() => {
    dispatch(ON_DEMAND_FOUNDATION_PURCHASED_LIST_ACTION({ token }));
  }, []);

  return (
    <PageLayout>
      <Box position={"relative"} px={10} py={6}>
        <SoftBox className="video-page-header">
          <SoftBox>
            <Typography textAlign={"center"} variant="h3">
              Buser Institute Affiliate Practitioner Certification Course Modules 1-4
            </Typography>
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
            {List &&
              List?.map((item, itemIndex) => (
                <Card sx={{ width: 250, border: "1px solid #f1f1f1" }} key={itemIndex}>
                  <CardContent>
                    <Typography variant="h5">{item?.name}</Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {item?.location}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: 16 }} color="text.secondary">
                      {item?.startDate}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <SoftButton
                      sx={{ width: "100%" }}
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

export default AffiliatePractioner;
