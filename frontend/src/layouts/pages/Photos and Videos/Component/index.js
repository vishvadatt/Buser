import { Grid } from '@mui/material'
import SoftBox from 'components/SoftBox'
import FormField from 'layouts/pages/Profile/components/FormField'
import React from 'react'
import PropTypes from "prop-types";
import SoftButton from 'components/SoftButton';

function index({formik}) {


  return (
    <SoftBox>
        {/* <Grid mt={-5} container spacing={1}>
          <Grid item xs={12} sm={6} lg={6} className="fontTitle">
            <div className="form-label-group">
              <>
                <FormField
                  type="file"
                  name="photos"
                  label="Select Photo or Video:"
                //   onChange={(e) => setreportimg(e.target.files[0])}
                    onChange={(e) => {
                        console.log("e..",e.target.files[0]?.name);
                        // formik.setFieldValue('photos',e.target.files[0]?.name)
                        formik.setFieldValue('photos',e.target.files[0])
                        
                    }}
                  id="files"
                  class="hidden"
                  style={{ color: "transparent", width: "auto" }}
                />
              </>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} className="fontTitle">
            <FormField
              type="text"
              placeholder="Enter title of photo or video"
              label="Title Name:"
              name="titleName"
              value={formik.values.titleName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={6} className="fontTitle">
            <FormField
              type="text"
              placeholder="Enter Description"
              label="Description:"
              name="discription"
              value={formik.values.discription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Grid>
        </Grid>
        <SoftBox my={4} >
          <SoftButton type="submit" variant="gradient" color="dark" onClick={formik.handleSubmit}>
            submit
          </SoftButton>
        </SoftBox> */}
    </SoftBox>
  )
}
index.propTypes = {
    formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  };
export default index