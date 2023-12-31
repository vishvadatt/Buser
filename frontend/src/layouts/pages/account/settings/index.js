/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
// Settings page components
import BaseLayout from "layouts/pages/account/components/BaseLayout";
import Sidenav from "layouts/pages/account/settings/components/Sidenav";
import Header from "layouts/pages/account/settings/components/Header";
import BasicInfo from "layouts/pages/account/settings/components/BasicInfo";
import ChangePassword from "layouts/pages/account/settings/components/ChangePassword";
import Authentication from "layouts/pages/account/settings/components/Authentication";
import Accounts from "layouts/pages/account/settings/components/Accounts";
import Notifications from "layouts/pages/account/settings/components/Notifications";
import PaymentMethod from "layouts/pages/account/billing/components/PaymentMethod";
import Sessions from "layouts/pages/account/settings/components/Sessions";
import DeleteAccount from "layouts/pages/account/settings/components/DeleteAccount";
import BillingInformation from "../billing/components/BillingInformation";
import Bill from "../billing/components/Bill";
import SearchDoctor from './components/SearchDoctor'
import { useSelector } from "react-redux";


function Settings() {
  const userType = useSelector((state) => state.auth.auth.userType);
  return (
    <BaseLayout>
      <SoftBox mt={4}>
        <Grid justifyContent="center">
          {/* <Grid item xs={12} lg={3}>
            <Sidenav />
          </Grid> */}
          <Grid item xs={12} lg={9}>
            <SoftBox mb={3}>
              <Grid container spacing={3}>
                {/* <Grid item xs={12}>
                  <Header />
                </Grid> */}

                {/* {userType === "client" ? (
                  <Grid item xs={12}>
                    <SearchDoctor />
                  </Grid>
                ) : (
                  ""
                )} */}
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
                {/* <Grid item xs={12}>
                  <BillingInformation />
                </Grid> */}
                {/* <Grid item xs={12}>
                  <BasicInfo />
                </Grid> */}
                <Grid item xs={12}>
                  <ChangePassword />
                </Grid>
                {/* <Grid item xs={12}>
                  <Authentication />
                </Grid> */}
                {/* <Grid item xs={12}>
                  <Accounts />
                </Grid> */}
                <Grid item xs={12}>
                  <Notifications />
                </Grid>
                {/* <Grid item xs={12}>
                  <Sessions />
                </Grid> */}
                {/* <Grid item xs={12}>
                  <DeleteAccount />
                </Grid> */}
              </Grid>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </BaseLayout>
  );
}

export default Settings;
