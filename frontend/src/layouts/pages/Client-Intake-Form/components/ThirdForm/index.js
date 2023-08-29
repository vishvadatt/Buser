import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import FormField from "layouts/pages/account/components/FormField";
import React from "react";

function ThirdForm() {
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Have you ever experienced any of the following Please give dates and details if possible
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          for example General - Recent weight gain/loss ,Fatigue  , Skin - Itching , Recent
          hair/skin changes , Head - Headaches ,Dizziness, balance problems , Abdomen/Gastrointestinal: Gas/Bloating,Diarrhea , Chest: Chest pain ,Chest pain 
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
      <SoftTypography variant="h6" fontWeight="bold" ml={2}>
      General:
        </SoftTypography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Abnormal appetite"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Difficulty falling/staying asleep"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Fatigue"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Recent fever/chills"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Recent fever/chills"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Sleep apnea/snoring"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
         
        </Grid>

        <SoftTypography variant="h6" fontWeight="bold" ml={2} mt={3}>
        Head:
        </SoftTypography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Dizziness, balance problems"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Ear discharge"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Ear pain"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Eye pain"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Fillings/amalgams/crowns"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Food no longer tastes the same"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Headaches"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Jaw pain"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Migraines"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Mouth/Tongue sores"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Recurrent nosebleeds/discharge"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Ringing in the ears"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Sinus problems/congestion"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Visual disturbances"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
</Grid>
        <SoftTypography variant="h6" fontWeight="bold" ml={2} mt={3}>
        Abdomen/Gastrointestinal:
        </SoftTypography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Abdominal pain/cramps"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Abnormal urine color/Blood in urine"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Bad breath"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Blood in stool"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Constipation"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Diarrhea"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Gas/Bloating"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Nausea"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pain with bowel movements"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pain with urination"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Vomiting"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
         </Grid>
         <SoftTypography variant="h6" fontWeight="bold" ml={2} mt={3}>
         Skin: 
        </SoftTypography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Body odors"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Bruising"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Eczema"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Itching"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Loss of hair"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"New growths/masses"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Rashes"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Recent hair/skin changes"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
         </Grid>
         <SoftTypography variant="h6" fontWeight="bold" ml={2} mt={3}>
         Chest: 
        </SoftTypography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Chest pain"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Coldness in hands/feet"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Coughing with blood"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Difficulty breathing"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Irregular heartbeat"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Numbness in hands/feet"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          
         </Grid>
        <SoftTypography mt={3} variant="h5" fontWeight="bold">
          Illness , Injuries , Surgeries , Hospitalizations (List dates and details if possible):
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          for example Pregnancy ,Burns , Fractures , Head injuries , Major lacerations , Difficulty speaking
          , Other (Describe):
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Colume 1:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Colume 1 date:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Colume 2:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Colume 2 date: " name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Colume 3:" name="fristname" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Colume 3 date:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="Colume 4:" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="Colume 4 date: " name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type="text"
              label="List any immunizations you have had:"
              name="fristname"
              rows={5}
              multiline
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

export default ThirdForm;
