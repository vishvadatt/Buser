// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import "./style.css"
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import breakpoints from "assets/theme/base/breakpoints";

import { Box, DialogContent } from "@mui/material";
import Middel from './components/Middel'

import ContactUsCard from './components/contactus'
function ContactUs() {
  const { values } = breakpoints;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mb={1}>
        <Grid container justifyContent="center" sx={{ height: "50%" }} item xs={12} lg={12}>
          {/* <DialogTitle id="scroll-dialog-title">Details And Agreement</DialogTitle> */}
          <DialogContent dividers={scroll === "paper"}>
            <Box sx={{ width: "100%" }}>
            <Middel/> 
               <ContactUsCard/>
        </Box>
        </DialogContent> 
        </Grid>  
      </SoftBox>
  
      <Footer />
    </DashboardLayout>
  );
}

export default ContactUs;
