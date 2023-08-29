
import { Box, Grid } from '@mui/material'
import LocationImage from "../../../../assets/images/contactUs/trifold.png"
import TelephoneImage from "../../../../assets/images/contactUs/telephone.png"
import MessageImage from '../../../../assets/images/contactUs/email.png'
import SoftBox from 'components/SoftBox'
import React from 'react'

const Middel = () => {
  return (<>
    <SoftBox py={7} lg={12}>
      <h3 style={{ textAlign: "center", color: "#41ced3" }}>Get in Touch</h3>
      <br />
      <h2 style={{ textAlign: "center", color: "inherit" }}><b>CALL NOW OR WRITE A MESSAGE</b></h2>
      <br />
      <h5 style={{ textAlign: "center", color: "inherit" }}>Have a question or feedback? We would love to hear from you!</h5>
    </SoftBox>
    <SoftBox pb={10}>
      <Grid container spacing={0} >
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              width: "auto",
              height: 350,
              border: '1px solid black'

            }}
          >
            <Box p={7} sx={{ textAlign: "center" }}>
              <p><img style={{
                width: "100%",
                maxHeight: "50px", maxWidth: "50px", height: "auto"
              }} src={LocationImage}></img></p>
              <h3 style={{ color: "inherit" }} >Our Locations​​</h3>
              <br />
              <span>San Diego</span><br />
              <span>New York</span><br />
              <span>Barcelona, Spain</span><br />
              <span>Paris, France</span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              width: "auto",
              height: 350,
              border: '1px solid black'

            }}
          >
            <Box p={10} sx={{ textAlign: "center" }}>
              <p><img style={{
                width: "100%",
                maxHeight: "50px", maxWidth: "50px", height: "auto"
              }} src={TelephoneImage}></img></p>
              <h3 style={{ color: "inherit" }} >Phone Number​​</h3>
              <br />
              <p><u className="btn email" style={{ color: "#41ced3", fontSize: "18px" }}>(657) 215-5642</u></p>

            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              width: "auto",
              height: 350,
              border: '1px solid black'

            }}
          >
            <Box p={10} sx={{ textAlign: "center" }}>
              <p><img style={{
                width: "100%",
                maxHeight: "50px", maxWidth: "50px", height: "auto"
              }} src={MessageImage}></img></p>
              <h3 style={{ color: "inherit" }} >Email Address​​</h3>
              <br />
              <p className='email'><u className="btn " style={{ color: "#41ced3", fontSize: "18px" }}>admin@buserinstitute.com</u></p>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </SoftBox>
  </>
  )
}

export default Middel