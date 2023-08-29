import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React base styles
import { Grid } from "@mui/material";

function Footer() {
  return (
    <SoftBox component="footer" py={1}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <SoftTypography variant="body2" color="secondary">
            &copy; {new Date().getFullYear()}, Buser Institute. All Rights Reserved <br /> Designed
            & Developed by{" "}
            <a href="https://www.ipangram.com/" target="_blank" rel="noreferrer">
              i-Pangram
            </a>{" "}
          </SoftTypography>
        </Grid>
      </Grid>
    </SoftBox>
  );
}

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
