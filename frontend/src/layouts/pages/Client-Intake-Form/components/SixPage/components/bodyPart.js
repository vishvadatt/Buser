import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function bodyPart({ formik, form, index }) {
  const { values } = formik;
  const {
    AbnormalCheck: AbnormalCheckV,
    AbnormalInput: AbnormalInputV,

    DifficultyCheck: DifficultyCheckV,
    DifficultyInput: DifficultyInputV,

    StaySleepCheck: StaySleepCheckV,
    StaySleepInput: StaySleepInputV,

    FatigueCheck: FatigueCheckV,
    FatigueInput: FatigueInputV,

    ChillsCheck: ChillsCheckV,
    ChillsInput: ChillsInputV,

    RecentCheck: RecentCheckV,
    RecentInput: RecentInputV,

    SleepCheck: SleepCheckV,
    SleepInput: SleepInputV,

    ChestCheck: ChestCheckV,
    ChestInput: ChestInputV,

    ColdnessCheck: ColdnessCheckV,
    ColdnessInput: ColdnessInputV,

    CoughingCheck: CoughingCheckV,
    CoughingInput: CoughingInputV,

    HeartbeatCheck: HeartbeatCheckV,
    HeartbeatInput: HeartbeatInputV,

    NumbnessCheck: NumbnessCheckV,
    NumbnessInput: NumbnessInputV,

    dizzinessCheck: dizzinessCheckV,
    dizzinessinput: dizzinessinputV,

    AbdominalCheck: AbdominalCheckV,
    AbdominalInput: AbdominalInputV,

    UrineColorCheck: UrineColorCheckV,
    UrineColorInput: UrineColorInputV,

    BadCheck: BadCheckV,
    BadInput: BadInputV,

    BloodCheck: BloodCheckV,
    BloodInput: BloodInputV,

    ConstipationCheck: ConstipationCheckV,
    ConstipationInput: ConstipationInputV,

    DiarrheaCheck: DiarrheaCheckV,
    DiarrheaInput: DiarrheaInputV,

    GasCheck: GasCheckV,
    GasInput: GasInputV,

    NeuroCheck: NeuroCheckV,
    NeuroInput: NeuroInputV,

    BowelCheck: BowelCheckV,
    BowelInput: BowelInputV,

    UrinationCheck: UrinationCheckV,
    UrinationInput: UrinationInputV,

    VomitCheck: VomitCheckV,
    VomitInput: VomitInputV,
  } = values.page10[index];

  const general = [
    {
      name: "Abnormal appetite",
    },
    {
      name: "Difficulty falling/staying asleep",
    },
    {
      name: "Fatigue",
    },
    {
      name: "Recent fever/chills",
    },
    {
      name: "Recent weight gain/loss",
    },
    {
      name: "Sleep apnea/snoring",
    },
  ];

  const skin = [
    {
      name: "Body odors",
    },
    {
      name: "Bruising",
    },
    {
      name: "Eczema",
    },
    {
      name: "Itching",
    },
    {
      name: "Loss of hair",
    },
    {
      name: "New growths/masses",
    },
    {
      name: "Rashes",
    },
    {
      name: "Recent hair/skin changes",
    },
  ];

  const chest = [
    {
      name: "Chest pain",
    },
    {
      name: "Coldness in hands/feet",
    },
    {
      name: "Coughing with blood",
    },
    {
      name: "Difficulty breathing",
    },
    {
      name: "Irregular heartbeat",
    },
    {
      name: "Numbness in hands/feet",
    },
  ];

  // right

  const head = [
    // {
    //   name: "Dizziness, balance problems",
    // },
    {
      name: "Ear discharge",
    },
    {
      name: "Ear pain",
    },
    {
      name: "Eye pain",
    },
    {
      name: "Fillings/amalgams/crowns",
    },
    {
      name: "Food no longer tastes the same",
    },
    {
      name: "Headaches",
    },
    {
      name: "Jaw pain",
    },
    {
      name: "Migraines",
    },
    {
      name: "Mouth/Tongue sores",
    },
    {
      name: "Recurrent nosebleeds/discharge",
    },
    {
      name: "Ringing in the ears",
    },
    {
      name: "Sinus problems/congestion",
    },
    {
      name: "Visual disturbances",
    },
  ];
  const abdomen = [
    {
      name: "Abdominal pain/cramps",
    },
    {
      name: "Abnormal urine color/Blood in urine",
    },
    {
      name: "Bad breath",
    },
    {
      name: "Blood in stool",
    },
    {
      name: "Constipation",
    },
    {
      name: "Diarrhea",
    },
    {
      name: "Gas/Bloating",
    },
    {
      name: "Nausea",
    },
    {
      name: "Pain with bowel movements",
    },
    {
      name: "Pain with urination",
    },
    {
      name: "Vomiting",
    },
  ];
  return (
    <>
      <SoftBox>
        <Grid container>
          <Grid item lg={5.75} md={5.75}>
            <SoftBox mt={2}>
              <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                General:
              </SoftTypography>
              <>
                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].AbnormalCheck`}
                    checked={AbnormalCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Abnormal appetite</span>
                  <input
                    type="text"
                    value={AbnormalInputV}
                    name={`page10[${index}].AbnormalInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].StaySleepCheck`}
                    checked={StaySleepCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Difficulty falling/staying asleep</span>
                  <input
                    type="text"
                    value={StaySleepInputV}
                    name={`page10[${index}].StaySleepInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].FatigueCheck`}
                    checked={FatigueCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Fatigue</span>
                  <input
                    type="text"
                    value={FatigueInputV}
                    name={`page10[${index}].FatigueInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].ChillsCheck`}
                    checked={ChillsCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Recent fever/chills</span>
                  <input
                    type="text"
                    value={ChillsInputV}
                    name={`page10[${index}].ChillsInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].RecentCheck`}
                    checked={RecentCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Recent weight gain/loss</span>
                  <input
                    type="text"
                    value={RecentInputV}
                    name={`page10[${index}].RecentInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].SleepCheck`}
                    checked={SleepCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Sleep apnea/snoring</span>
                  <input
                    type="text"
                    value={SleepInputV}
                    name={`page10[${index}].SleepInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </>
            </SoftBox>
            <SoftBox mt={2}>
              <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                Skin:
              </SoftTypography>
              {skin &&
                skin?.map((data, i) => {
                  return (
                    <>
                      <Grid className="experienced" ml={2}>
                        <Checkbox
                          name={`page10[${index}].skin[${i}].skincheck`}
                          checked={values?.page10[index]?.skin[i]?.skincheck}
                          onChange={formik.handleChange}
                        />
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                        <input
                          type="text"
                          name={`page10[${index}].skin[${i}].skininput`}
                          value={values?.page10[index]?.skin[i]?.skininput}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </>
                  );
                })}
            </SoftBox>
            <SoftBox mt={2}>
              <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                Chest:
              </SoftTypography>
              {/* {chest &&
                chest.map((data, i) => {
                  return ( */}
              <>
                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].ChestCheck`}
                    checked={ChestCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Chest pain</span>
                  <input
                    type="text"
                    value={ChestInputV}
                    name={`page10[${index}].ChestInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].ColdnessCheck`}
                    checked={ColdnessCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Coldness in hands/feet</span>
                  <input
                    type="text"
                    value={ColdnessInputV}
                    name={`page10[${index}].ColdnessInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].CoughingCheck`}
                    checked={CoughingCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Coughing with blood</span>
                  <input
                    type="text"
                    value={CoughingInputV}
                    name={`page10[${index}].CoughingInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].DifficultyCheck`}
                    checked={DifficultyCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Difficulty breathing</span>
                  <input
                    type="text"
                    value={DifficultyInputV}
                    name={`page10[${index}].DifficultyInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].HeartbeatCheck`}
                    checked={HeartbeatCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Irregular heartbeat</span>
                  <input
                    type="text"
                    value={HeartbeatInputV}
                    name={`page10[${index}].HeartbeatInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].NumbnessCheck`}
                    checked={NumbnessCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Numbness in hands/feet</span>
                  <input
                    type="text"
                    value={NumbnessInputV}
                    name={`page10[${index}].NumbnessInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </>
              {/* );
                })} */}
            </SoftBox>
          </Grid>
          <Grid item lg={0.5} md={0.5}></Grid>
          <Grid item lg={5.75} md={5.75}>
            <SoftBox mt={2}>
              <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                Head:
              </SoftTypography>
              <Grid className="experienced" ml={2}>
                <Checkbox
                  name={`page10[${index}].dizzinessCheck`}
                  checked={dizzinessCheckV}
                  onChange={formik.handleChange}
                />
                <span style={{ fontSize: "15px" }}>Dizziness, balance problems</span>
                <input
                  type="text"
                  value={dizzinessinputV}
                  name={`page10[${index}].dizzinessinput`}
                  onChange={formik.handleChange}
                />
              </Grid>
              {head &&
                head.map((data, i) => {
                  return (
                    <>
                      <Grid className="experienced" ml={2}>
                        <Checkbox
                          name={`page10[${index}].head[${i}].headcheck`}
                          checked={values.page10[index].head[i]?.headcheck}
                          onChange={formik.handleChange}
                        />
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                        <input
                          type="text"
                          name={`page10[${index}].head[${i}].headinput`}
                          value={values.page10[index].head[i]?.headinput}
                          onChange={formik.handleChange}
                        />
                      </Grid>
                    </>
                  );
                })}
            </SoftBox>
            <SoftBox mt={2}>
              <SoftTypography fontWeight="bold" fontSize="15px" marginBottom="8px">
                Abdomen/Gastrointestinal:
              </SoftTypography>
              {/* {abdomen &&
                abdomen.map((data, i) => {
                  return ( */}
              <>
                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].AbdominalCheck`}
                    checked={AbdominalCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Abdominal pain/cramps</span>
                  <input
                    type="text"
                    value={AbdominalInputV}
                    name={`page10[${index}].AbdominalInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].UrineColorCheck`}
                    checked={UrineColorCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Abnormal urine color/Blood in urine</span>
                  <input
                    type="text"
                    value={UrineColorInputV}
                    name={`page10[${index}].UrineColorInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].BadCheck`}
                    checked={BadCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Bad breath</span>
                  <input
                    type="text"
                    value={BadInputV}
                    name={`page10[${index}].BadInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].BloodCheck`}
                    checked={BloodCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Blood in stool</span>
                  <input
                    type="text"
                    value={BloodInputV}
                    name={`page10[${index}].BloodInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].ConstipationCheck`}
                    checked={ConstipationCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Constipation</span>
                  <input
                    type="text"
                    value={ConstipationInputV}
                    name={`page10[${index}].ConstipationInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].DiarrheaCheck`}
                    checked={DiarrheaCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Diarrhea</span>
                  <input
                    type="text"
                    value={DiarrheaInputV}
                    name={`page10[${index}].DiarrheaInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].GasCheck`}
                    checked={GasCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Gas/Bloating</span>
                  <input
                    type="text"
                    value={GasInputV}
                    name={`page10[${index}].GasInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].NeuroCheck`}
                    checked={NeuroCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Nausea</span>
                  <input
                    type="text"
                    value={NeuroInputV}
                    name={`page10[${index}].NeuroInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].BowelCheck`}
                    checked={BowelCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Pain with bowel movements</span>
                  <input
                    type="text"
                    value={BowelInputV}
                    name={`page10[${index}].BowelInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].UrinationCheck`}
                    checked={UrinationCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Pain with urination</span>
                  <input
                    type="text"
                    value={UrinationInputV}
                    name={`page10[${index}].UrinationInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid className="experienced" ml={2}>
                  <Checkbox
                    name={`page10[${index}].VomitCheck`}
                    checked={VomitCheckV}
                    onChange={formik.handleChange}
                  />
                  <span style={{ fontSize: "15px" }}>Vomiting</span>
                  <input
                    type="text"
                    value={VomitInputV}
                    name={`page10[${index}].VomitInput`}
                    onChange={formik.handleChange}
                  />
                </Grid>
              </>
            </SoftBox>
          </Grid>
        </Grid>
        <SoftBox></SoftBox>
      </SoftBox>
    </>
  );
}
bodyPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default bodyPart;
