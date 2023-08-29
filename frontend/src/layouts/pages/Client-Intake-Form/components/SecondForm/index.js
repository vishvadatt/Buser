import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import FormField from "layouts/pages/account/components/FormField";
import React from "react";

function SecondForm() {
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Medical History (List dates if possible):
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          for example Allergies , Arthritis , Asthma , Blood Disorders ,Cancer , Depression ,
          Diabetes , Heart Disease , Attack Liver , Gall bladder disease , High Blood Pressure ,
          Kidney Disease , stones Low Blood Pressure
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Allergies"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Arthritis"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Asthma"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Blood Disorders"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Cancer"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Depression"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Diabetes"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Heart Disease/Attack"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Liver/Gall bladder disease"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"High Blood Pressure"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Kidney Disease/stones"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Low Blood Pressure"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Lung Disease"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Neurological Disease"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Psychological Disorder"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>

          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Rheumatic Fever"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Seizures"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Small/Large Intestine"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Stroke"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Thyroid Disease"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Vascular Disease"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Other:"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Maternal"}
            />
          </Grid>
          <Grid item xs={12} sm={3} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paternal"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h5" fontWeight="bold">
          Medication History*
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Please check any of the following medications you have taken in the past or are currently
          taking.
        </SoftTypography>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Noradrenergic and Specific Serotonergic Antidepressants (NaSSAs)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Remeron®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Zispin®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Norset®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Avanza®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Remergil®"}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Axit®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Monoamine Oxidase Inhibitors (MAOIs)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Marplan®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Marsilid®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Aurorix®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Iprozid®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Manerix®"}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Ipronid®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Moclodura®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Rivivol®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Nardil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Azilect®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Adeline®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Zyvox®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Eldepryl®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Zyvoxid®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Propilniazida®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Tricyclic Antidepressants (TCAs)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Elavil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Prothiaden®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Endep®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Adapin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Tryptanol®"}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Sinequan®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Trepiline®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Tofranil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Asendin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Janamine®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Asendis®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Gamanil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Defanyl®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Aventyl®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Demolox®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pamelor®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Moxadil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Opipramol®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Anafranil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Vivactil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Norpramin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Rhotrimine®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pertofrane®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Surmontil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Thadentm"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Norpramin®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Selective Serotonin Reuptake Inhibitors (SSRIs)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paxil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Seromex®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Zoloft®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Seronil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Prozac®"}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Sarafem®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Celexa®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Fluctin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Lexapro®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Faverin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Esertia®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Seroxat®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Luvox®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Aropax®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Cipramil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Deroxat®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Emocal®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Rexetin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Seropram®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Paroxat®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Cipralex®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Lustral®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Fontex®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Serlain®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Priligy®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          D2 Dopamine Receptor Blockers (antipsychotics)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Thorazine®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Acuphase®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Prolixin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Haldol®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Trilafon®"}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Orap®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Compazine®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Clozaril®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Mellaril®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Zyprexa®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Stelazine®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Zydis®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Vesprin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Seroquel XR®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Nozinan®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Geodon®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Depixol®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Solian®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Navane®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Invega®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Fluanxol®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Abilify®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Clopixol®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Agonist Modulators of GABA Receptors (benzodiazepines)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Xanax®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Dalmane®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Lexotanil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Ativan®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Lexotan®"}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Loramet®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Librium®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Sedoxil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Klonopin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Dormicum®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Valium®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Serax®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Prosom®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Restoril®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Rohypnol®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Halcion®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Magadon®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Acetylcholine Receptor Antagonists (neuromuscular blockers)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Tracrium®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Zemuron®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Nimbex®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Anectine®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Nuromax®"}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Tubocurarine®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Metubine®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Norcuron®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Mivacron®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Hemicholinium-3®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pavulon®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Cholinesterase Inhibitors (reversible)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Aricept®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Razadyne®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Prostigmin®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Exelon®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Antilirium®"}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Cognex®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Mestinon®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel style={{ marginLeft: "15px" }} control={<Checkbox />} label={"THC"} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Carbamate insecticides"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Effexor®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pristiq®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Meridia®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Serzone®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Dalcipran®"}
            />
          </Grid>

          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Cymbalta®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Acetylcholine Receptor Agonists
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Urecholine®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Isopto®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Evoxac®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Nicotone"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Salagen®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Agonist Modulators of GABA Receptors (non-benzodiazepines)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Ambien CR® "}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Sonata®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Lunesta®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Imovane®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Acetylcholine Receptor Antagonists (antimuscarinic agents)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"AtroPen®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Atrovent®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Scopace®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Spiriva®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Acetylcholine Receptor Antagonists (ganglionic blockers)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Inversine®"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Hexamethonium"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Nicotine (high doses)"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Arfonad®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Cholinesterase Inhibitors (irreversible)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Echothiophate"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Isoflurophate"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Organophosphate insecticides"}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Organophosphate-containing nerve agents"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Selective Serotonin Reuptake Enhancers (SSREs)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Stablon®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Coaxil®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Tatinol®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Dopamine Receptor Agonists
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Mirapex®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Sifrol®"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Requip®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Norepinephrine–Dopamine Reuptake Inhibitors (NDRIs)
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Wellbutrin XL®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          Acetylcholinesterase Reactivators
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Protopam®"}
            />
          </Grid>
        </Grid>
        <SoftTypography mt={1.625} variant="h6" fontWeight="bold" backgroundColor="gainsboro">
          GABA Antagonist Competitive Binder
        </SoftTypography>
        <Grid mt={0.5} container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Romazicon®"}
            />
          </Grid>
        </Grid>
        <br />
        <SoftTypography mt={1.625} variant="h5" fontWeight="bold">
          Illness/Injuries/Surgeries/Hospitalizations (List dates and details if possible):
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          for example Pregnancy,Burns,Fractures,Head injuries,Major lacerations,Difficulty speaking
          ,Other (Describe):
        </SoftTypography>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Burns"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Have you ever felt you lost track of time?"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Concussions "}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Double vision or other vision problems"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Cosmetic surgeries/augmentations"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Vertigo, light-headedness"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Fractures"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Sudden numbness/weakness "}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Frequent/Recurring illness or infections"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Difficulty speaking"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Head injuries"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Difficulty swallowing"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Loss of consciousness"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Difficulty walking"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Major lacerations"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Vomiting or queasiness"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Motor vehicle accidents"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Loss of sensation on one side"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Motor vehicle accidents"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Loss of sensation on one side"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Organ transplants"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Involuntary rapid eye movements"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Serious falls or trauma"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Loss of balance/tripping falling"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pregnancy: Cesarean "}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Loss of dexterity/or dropping things"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pregnancy: Home delivery"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Abnormal bowel/bladder movements"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Pregnancy: Hospital natural delivery"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Localized weakness"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Other (Describe):"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
          </Grid>
          <Grid item xs={12} sm={4} mt={3}>
            <FormControlLabel
              style={{ marginLeft: "15px" }}
              control={<Checkbox />}
              label={"Mental fog, recently forgetful"}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormField type="date" label="date :" name="fristname" placeholder="name" />
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

export default SecondForm;
