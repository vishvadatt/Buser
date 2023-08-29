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
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Setting pages components
import TableCell from "layouts/pages/account/settings/components/TableCell";
import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { popupAction } from "store/actions/actions";
import SoftSnackbar from "components/SoftSnackbar";

function Notifications() {
  const dispatch = useDispatch();
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  const userdata = useSelector((state) => state.auth.auth.userdata);
  const [ notificationSend, SetNotiicationSend ] = useState(false);
console.log("notificationSend..",notificationSend);
  const sendNotification = (e) =>{
    const values = {
      isSendNotification : e.target.checked
    }
    dispatch(popupAction({ id: UserId, data : values, token }));
  }

  const notificationReceive = (e) => {
    const values = {
      isReceiveNotification : e.target.checked
    }
    dispatch(popupAction({ id: UserId, data : values, token }));

  }
  return (
    <Card id="notifications">
      <SoftBox p={3} lineHeight={1}>
        <SoftBox mb={1}>
          <SoftTypography variant="h5">Notifications</SoftTypography>
        </SoftBox>
        <SoftTypography variant="button" color="text" fontWeight="regular">
          Choose how you receive notifications. These notification settings apply to the things
          you’re watching.
        </SoftTypography>
      </SoftBox>
      <SoftBox pb={3} px={3}>
        <SoftBox minWidth="auto" sx={{ overflow: "scroll" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <SoftBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]}>
                  Activity
                </TableCell>
                <TableCell align="center" padding={[1.5, 3, 1.5, 3]}>
                  Email
                </TableCell>
                {/* <TableCell align="center" padding={[1.5, 3, 1.5, 3]}>
                  Push
                </TableCell>  */}
                
              </TableRow>
            </SoftBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <SoftBox lineHeight={1.4}>
                    <SoftTypography display="block" variant="button" fontWeight="regular">
                    Receive Updates
                    </SoftTypography>
                    <SoftTypography variant="caption" color="text" fontWeight="regular">
                      Notify me when the Buser Institute has sent me updates.
                    </SoftTypography>
                  </SoftBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked={userdata?.isReceiveNotification ? userdata?.isReceiveNotification : false} onChange={(e) => notificationReceive(e)}/>
                </TableCell>
                {/* <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell> */}
                {/* <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell> */}
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <SoftBox lineHeight={1.4}>
                    <SoftTypography display="block" variant="button" fontWeight="regular">
                    Alerts
                    </SoftTypography>
                    <SoftTypography variant="caption" color="text" fontWeight="regular">
                    Receive alerts regarding Buser Institute events (i.e. Travel Therapy, Seminars, Retreats, Podcasts, etc).
                    </SoftTypography>
                  </SoftBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked={userdata?.isSendNotification ? userdata?.isSendNotification : false} onChange={(e) =>{
                      sendNotification(e)
                    }}/>
                </TableCell>
                {/* <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell> */}
                {/* <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell> */}
              </TableRow>
              {/* <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <SoftBox lineHeight={1.4}>
                    <SoftTypography display="block" variant="button" fontWeight="regular">
                      Follows
                    </SoftTypography>
                    <SoftTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user follows you.
                    </SoftTypography>
                  </SoftBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <SoftTypography
                    display="block"
                    variant="button"
                    color="text"
                    fontWeight="regular"
                  >
                    Log in from a new device
                  </SoftTypography>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
              </TableRow> */}
            </TableBody>
          </Table>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Notifications;
