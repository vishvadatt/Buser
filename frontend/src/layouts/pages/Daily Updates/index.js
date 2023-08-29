// @mui material components

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard PRO React example components
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DialogBox from "../DialogBox/index";

import DailyTables from "./components/tableUI";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findOneUserAction } from "store/actions/actions";
import { useEffect } from "react";

function DailyUpdates() {
const informConsentStatus = useSelector((state) => state.auth.informConsentStatus);
const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.auth);

useEffect(() => {
  dispatch(findOneUserAction({ userId : userData?._id, token : userData?.idToken}));
},[]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox>
        <SoftBox>
          <DailyTables />
        </SoftBox>
      </SoftBox>
      <Footer />
      <DialogBox open={informConsentStatus}/>
    </DashboardLayout>
  );
}

export default DailyUpdates;
