import PageLayout from "examples/LayoutContainers/PageLayout";
import React, { useEffect, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "services/AxiosInstance";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import _ from "lodash";
import { ON_DEMAND_FOUNDATION_VIDEO_LIST_ACTION } from "store/actions/actions";

const OnDemandPurchase = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.auth.idToken);

  const [videoDetails, setVideoDetails] = useState("");
  const [showBookModal, setShowBookModal] = useState(false);

  const onDemandVideoList = useSelector((state) => state?.auth?.onDemandVideoList);

  console.log(onDemandVideoList, "az");

  const groupedData = _.groupBy(onDemandVideoList, "serviceName");

  useEffect(() => {
    dispatch(ON_DEMAND_FOUNDATION_VIDEO_LIST_ACTION({ token }));
  }, []);

  const handleBook = (item) => {
    setVideoDetails(item);
    setShowBookModal(true);
  };

  const handleBuy = async () => {
    try {
      const res = await axiosInstance.post(
        "EducationMaterial/purchaseOndemandSessionVideo",
        {
          eventId: videoDetails?.eventId,
          planId: videoDetails?.planId,
          onDemandEducationSessionId: videoDetails._id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res, "ss");
      if (res?.status === 200) {
        dispatch(ON_DEMAND_FOUNDATION_VIDEO_LIST_ACTION({ token }));
      }
    } catch (error) {
      console.log(error);
    }
    setVideoDetails("");
    setShowBookModal(false);
  };
  return (
    <PageLayout>
      <Box position={"relative"} px={10} py={3}>
        <SoftBox className="video-page-header">
          <SoftBox>
            <SoftTypography className="video-page-title">On Demand Session List</SoftTypography>
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
          {Object.entries(groupedData).map(([serviceName, items], index) => (
            <Box key={index} mb={3}>
              <Typography variant="h4" textAlign={"center"} style={{ margin: "10px" }}>
                {serviceName}
              </Typography>
              {Object.entries(_.groupBy(items, "planType")).map(
                ([planType, planItems], planIndex) => (
                  <Box key={planIndex} mt={"20px"} mb={"20px"}>
                    <Typography variant="h5" style={{ margin: "10px" }}>
                      {planType}
                    </Typography>
                    <Box display={"flex"} gap={"50px"} flexWrap={"wrap"}>
                      {planItems.map((item, itemIndex) => (
                        <Card
                          sx={{ width: 250, marginTop: "15px" }}
                          key={itemIndex}
                          variant="outlined"
                        >
                          <CardContent sx={{ margin: "auto" }}>
                            <Typography variant="h6" component="div">
                              {item?.name}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              {item?.location}
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} color="text.secondary">
                              {item?.startDate}
                            </Typography>
                            <Typography sx={{ mb: 1.5, fontSize: 16 }} color="text.secondary">
                              Remaining Credit: {item?.remainingCredit ? item.remainingCredit : 0}
                            </Typography>
                          </CardContent>
                          <CardActions sx={{ margin: "auto" }}>
                            <SoftButton
                              variant="gradient"
                              color="dark"
                              onClick={() => handleBook(item)}
                              disabled={
                                !item?.remainingCredit ||
                                item?.remainingCredit === 0 ||
                                item?.purchaseOnDemandEducation.length > 0
                              }
                            >
                              {item?.purchaseOnDemandEducation.length > 0
                                ? "Purchased"
                                : "Buy Session"}
                            </SoftButton>
                          </CardActions>
                        </Card>
                      ))}
                    </Box>
                  </Box>
                )
              )}
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={showBookModal}
        onClose={() => {
          setVideoDetails("");
          setShowBookModal(false);
        }}
      >
        <DialogTitle sx={{ margin: "auto" }}>Purchase Session</DialogTitle>
        <DialogContent sx={{ padding: "20px" }}>
          <Typography> Are you Sure You Want To Purchase this Session</Typography>
        </DialogContent>
        <DialogActions>
          <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
              <SoftButton
                onClick={() => {
                  setVideoDetails("");
                  setShowBookModal(false);
                }}
              >
                Close
              </SoftButton>
              <SoftButton variant="gradient" color="dark" onClick={handleBuy}>
                Buy
              </SoftButton>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </PageLayout>
  );
};

export default OnDemandPurchase;
