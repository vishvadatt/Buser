import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import { useFormik } from "formik";
import FormField from "layouts/pages/account/components/FormField";
import React from "react";

function FirstForm() {
  const formik = useFormik({
    initialValues: {
      OverallHealth: "",
      PhysicalHealth: "",
    },
  });

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Current Health Status:
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Rate it Between 1-10 (1 is so poor and 10 is excilent)
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Overall Health
                </SoftTypography>
              </SoftBox>
              <FormControl>
                <RadioGroup
                  row
                  // value={headpainLevel}
                  // onChange={(e) => formik.setFieldValue("Overall Health", e.target.value)}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                  <FormControlLabel value="5" control={<Radio />} label="5" />
                  <FormControlLabel value="6" control={<Radio />} label="6" />
                  <FormControlLabel value="7" control={<Radio />} label="7" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="9" control={<Radio />} label="9" />
                  <FormControlLabel value="10" control={<Radio />} label="10" />
                </RadioGroup>
              </FormControl>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Physical Health
                </SoftTypography>
              </SoftBox>
              <FormControl>
                <RadioGroup
                  row
                  // value={headpainLevel}
                  // onChange={(e) => formik.setFieldValue("Overall Health", e.target.value)}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                  <FormControlLabel value="5" control={<Radio />} label="5" />
                  <FormControlLabel value="6" control={<Radio />} label="6" />
                  <FormControlLabel value="7" control={<Radio />} label="7" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="9" control={<Radio />} label="9" />
                  <FormControlLabel value="10" control={<Radio />} label="10" />
                </RadioGroup>
              </FormControl>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Mental Health
                </SoftTypography>
              </SoftBox>
              <FormControl>
                <RadioGroup
                  row
                  // value={headpainLevel}
                  // onChange={(e) => formik.setFieldValue("Overall Health", e.target.value)}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                  <FormControlLabel value="5" control={<Radio />} label="5" />
                  <FormControlLabel value="6" control={<Radio />} label="6" />
                  <FormControlLabel value="7" control={<Radio />} label="7" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="9" control={<Radio />} label="9" />
                  <FormControlLabel value="10" control={<Radio />} label="10" />
                </RadioGroup>
              </FormControl>
            </SoftBox>
          </Grid>
        </Grid>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Stress Levels
                </SoftTypography>
              </SoftBox>
              <FormControl>
                <RadioGroup
                  row
                  // value={headpainLevel}
                  // onChange={(e) => formik.setFieldValue("Overall Health", e.target.value)}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                  <FormControlLabel value="5" control={<Radio />} label="5" />
                  <FormControlLabel value="6" control={<Radio />} label="6" />
                  <FormControlLabel value="7" control={<Radio />} label="7" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="9" control={<Radio />} label="9" />
                  <FormControlLabel value="10" control={<Radio />} label="10" />
                </RadioGroup>
              </FormControl>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Exposure To Toxins/Pollution
                </SoftTypography>
              </SoftBox>
              <FormControl>
                <RadioGroup
                  row
                  // value={headpainLevel}
                  // onChange={(e) => formik.setFieldValue("Overall Health", e.target.value)}
                >
                  <FormControlLabel value="1" control={<Radio />} label="1" />
                  <FormControlLabel value="2" control={<Radio />} label="2" />
                  <FormControlLabel value="3" control={<Radio />} label="3" />
                  <FormControlLabel value="4" control={<Radio />} label="4" />
                  <FormControlLabel value="5" control={<Radio />} label="5" />
                  <FormControlLabel value="6" control={<Radio />} label="6" />
                  <FormControlLabel value="7" control={<Radio />} label="7" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="9" control={<Radio />} label="9" />
                  <FormControlLabel value="10" control={<Radio />} label="10" />
                </RadioGroup>
              </FormControl>
            </SoftBox>
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h5" fontWeight="bold">
          Recent Exams List date:
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField type="date" label="Physical:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField type="date" label="Eye:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField type="date" label="Ob/Gyn:" name="fristname" placeholder="name" />
          </Grid>
        </Grid>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField type="date" label="Dental:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField type="date" label="Wellness Exam:" name="fristname" placeholder="name" />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h5" fontWeight="bold">
          Special Breast/Exams List date if possible:
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Blood test:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="date"
              label="Blood test date:"
              name="Blood test date :"
              placeholder="name"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Breast test:" name="Breast test:" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="date"
              label="Breast test date:"
              name="Breast test date:"
              placeholder="name"
            />
          </Grid>
        </Grid>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Colonoscopy:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Colonoscopy date:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="CT Scan:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="CT Scan date: " name="fristname" placeholder="name" />
          </Grid>
        </Grid>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Ultrasound::" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Ultrasound date:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="DEXA:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="DEXA date:" name="fristname" placeholder="name" />
          </Grid>
        </Grid>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Endoscope::" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Endoscope date:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="MRI" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="MRI date" name="fristname" placeholder="name" />
          </Grid>
        </Grid>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="X-ray:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="X-ray date:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="text"
              label="Other test (If Any)"
              name="fristname"
              placeholder="name"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Other test date" name="fristname" placeholder="name" />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h5" fontWeight="bold">
          Females:
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Only Female Client need to fill this Section
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="number" label="Age of first menstruation:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="number"
              label="Last Cycle Duration:"
              name="Last Cycle Duration"
              placeholder="name"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="number"
              label="Cycle Frequency:"
              name="Breast test:"
              placeholder="name"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="text"
              label="Abnormal Odor/Texture:"
              name="Breast test date:"
              placeholder="name"
            />
          </Grid>
        </Grid>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Pain/Discomfort:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="date"
              label="Blood test date:"
              name="Blood test date :"
              placeholder="name"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="date"
              label="Date of Menopause, if applicable:"
              name="Breast test:"
              placeholder="name"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Last PAP:" name="Breast test date:" placeholder="name" />
          </Grid>
        </Grid>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Birth Control:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField
              type="text"
              label="Hormone/Estrogen Therapy:"
              name="Blood test date :"
              placeholder="name"
            />
          </Grid>
        </Grid>
      </SoftBox>

      <SoftBox my={2} A>
        <SoftButton type="submit" variant="gradient" color="dark">
          submit
        </SoftButton>
      </SoftBox>
    </SoftBox>
  );
}

export default FirstForm;
