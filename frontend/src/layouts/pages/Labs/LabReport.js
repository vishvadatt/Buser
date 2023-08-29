// @mui material components
import Grid from "@mui/material/Grid";
import { useEffect } from "react";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getSingleLabReport } from "../../../store/actions/actions";

// Soft UI Dashboard PRO React base styles

import { ArrowLeftOutlined } from "@ant-design/icons";
import breakpoints from "assets/theme/base/breakpoints";
import { useNavigate } from "react-router-dom";

function LabReport() {
  const { values } = breakpoints;
  const labreportid = useSelector((state) => state.auth.labreportId);
  const singleLabReport = useSelector((state) => state.auth.signlelabreport);
  const token = useSelector((state) => state.auth.auth.idToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleLabReport({ token: token, reportId: labreportid }));
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={12}>
            <SoftBox mb={3} p={1}>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h5"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                <ArrowLeftOutlined
                  style={{ cursor: "pointer", paddingLeft: "16px" }}
                  onClick={() => navigate("/Labs")}
                />{" "}
                Back On Labs
              </SoftTypography>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                <CardMedia
                  component="img"
                  image={singleLabReport?.report}
                  alt=""
                  style={{
                    height: "100%",
                    width: "98%",
                    marginBottom: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ marginLeft: "20px" }}
                >
                  {singleLabReport?.reportName}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ marginLeft: "20px" }}>
                  {singleLabReport?.description}
                </Typography>
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default LabReport;
