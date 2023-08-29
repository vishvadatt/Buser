import Grid from "@mui/material/Grid";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import breakpoints from "assets/theme/base/breakpoints";
import PatientRecord from "./components/patientRecords";
import DialogBox from "../DialogBox/index";
import { useSelector } from "react-redux";
import { findOneUserAction } from "store/actions/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function PatientRecords() {
  const { values } = breakpoints;
  const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
  const userData = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findOneUserAction({ userId : userData?._id, token : userData?.idToken}));
  },[]);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <SoftBox mb={3} p={1}>
              <SoftTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
              >
                CLIENT RECORDS
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>

      <PatientRecord />
      <Footer />
      <DialogBox open={informConsentStatus}/>
    </DashboardLayout>
  );
}

export default PatientRecords;
