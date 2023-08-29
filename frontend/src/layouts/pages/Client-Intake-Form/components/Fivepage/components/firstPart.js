import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function firstPart({ formik, form, index }) {
  const { values } = formik;

  const {
    BurnsInput: BurnsInputV,
    BurnsCheck: BurnsCheckV,

    LoTCheck: LoTCheckV,
    LoTInput: LoTInputV,

    LocCheck: LocCheckV,
    LocInput: LocInputV,

    ConcussionsCheck: ConcussionsCheckV,
    ConcussionsInput: ConcussionsInputV,

    DiplopiaCheck: DiplopiaCheckV,
    Diplopiainput: DiplopiainputV,

    CosmeticsurgeriesCheck: CosmeticsurgeriesCheckV,
    CosmeticsurgeriesInput: CosmeticsurgeriesInputV,

    dizzinessCheck: dizzinessCheckV,
    dizzinessinput: dizzinessinputV,

    FracturesCheck: FracturesCheckV,
    FracturesInput: FracturesInputV,

    DropCheck: DropCheckV,
    DropInput: DropInputV,

    FrequentCheck: FrequentCheckV,
    FrequentInput: FrequentInputV,

    DysphasiaCheck: DysphasiaCheckV,
    DysphasiaInput: DysphasiaInputV,

    HeadCheck: HeadCheckV,
    HeadInput: HeadInputV,

    DysphagiaCheck: DysphagiaCheckV,
    DysphagiaInput: DysphagiaInputV,

    DifficultyCheck: DifficultyCheckV,
    DifficultyInput: DifficultyInputV,

    MajorCheck: MajorCheckV,
    MajorInput: MajorInputV,

    NauseaCheck: NauseaCheckV,
    NauseaInput: NauseaInputV,

    MVACheck: MVACheckV,
    MVAInput: MVAInputV,

    sensationCheck: sensationCheckV,
    sensationInput: sensationInputV,

    OrganCheck: OrganCheckV,
    OrganInput: OrganInputV,

    InvoluntaryCheck: InvoluntaryCheckV,
    InvoluntaryInput: InvoluntaryInputV,

    TraumaCheck: TraumaCheckV,
    TraumaInput: TraumaInputV,

    BalanceCheck: BalanceCheckV,
    BalanceInput: BalanceInputV,

    CesareanCheck: CesareanCheckV,
    CesareanInput: CesareanInputV,

    DexterityCheck: DexterityCheckV,
    DexterityInput: DexterityInputV,

    HomeCheck: HomeCheckV,
    HomeInput: HomeInputV,

    BowelCheck: BowelCheckV,
    BowelInput: BowelInputV,

    HospitalCheck: HospitalCheckV,
    HospitalInput: HospitalInputV,

    LocalizedCheck: LocalizedCheckV,
    LocalizedInput: LocalizedInputV,

    OtherCheck: OtherCheckV,
    OtherInput: OtherInputV,

    MentalCheck: MentalCheckV,
    MentalInput: MentalInputV,
  } = values.page9[index];

  const listDates = [
    {
      name: "Burns",
    },
    {
      name: "Have you ever felt you lost track of time?",
    },
    {
      name: "Concussions",
    },
    {
      name: "Double vision or other vision problems",
    },
    {
      name: "Cosmetic surgeries/augmentations",
    },
    {
      name: "Vertigo, light-headedness",
    },
    {
      name: "Fractures",
    },
    {
      name: "Sudden numbness/weakness of face/arm/leg",
    },
    {
      name: "Frequent/Recurring illness or infections",
    },
    {
      name: "Difficulty speaking",
    },
    {
      name: "Head injuries ",
    },
    {
      name: "Difficulty swallowing",
    },
    {
      name: "Loss of consciousness",
    },
    {
      name: "Difficulty walking",
    },
    {
      name: "Major lacerations ",
    },
    {
      name: "Vomiting or queasiness",
    },
    {
      name: "Motor vehicle accidents",
    },
    {
      name: "Loss of sensation on one side",
    },
    {
      name: "Organ transplants",
    },
    {
      name: "Involuntary rapid eye movements",
    },
    {
      name: "Serious falls or trauma",
    },
    {
      name: "Loss of balance/tripping falling",
    },
    {
      name: "Pregnancy: Cesarean",
    },
    {
      name: "Loss of dexterity/or dropping things",
    },
    {
      name: "Pregnancy: Home delivery",
    },
    {
      name: "Abnormal bowel/bladder movements",
    },
    {
      name: "Pregnancy: Hospital natural delivery",
    },
    {
      name: "Localized weakness",
    },
    {
      name: "Other (Describe):",
    },
    {
      name: "Mental fog, recently forgetful",
    },
  ];

  return (
    <>
      <SoftBox>
        <SoftBox ml={2} mt={3} className="dateslist">
          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].BurnsCheck`}
                checked={BurnsCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} sm={10} xs={11}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Burns</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={BurnsInputV}
                  name={`page9[${index}].BurnsInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].LoTCheck`}
                checked={LoTCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Have you ever felt you lost track of time?
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={LoTInputV}
                  name={`page9[${index}].LoTInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].ConcussionsCheck`}
                checked={ConcussionsCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Concussions</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={ConcussionsInputV}
                  name={`page9[${index}].ConcussionsInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].DiplopiaCheck`}
                checked={DiplopiaCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Double vision or other vision problems
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={DiplopiainputV}
                  name={`page9[${index}].Diplopiainput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].CosmeticsurgeriesCheck`}
                checked={CosmeticsurgeriesCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Cosmetic surgeries/augmentations</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={CosmeticsurgeriesInputV}
                  name={`page9[${index}].CosmeticsurgeriesInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].dizzinessCheck`}
                checked={dizzinessCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Vertigo, light-headedness
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={dizzinessinputV}
                  name={`page9[${index}].dizzinessinput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].FracturesCheck`}
                checked={FracturesCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Fractures</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={FracturesInputV}
                  name={`page9[${index}].FracturesInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].DropCheck`}
                checked={DropCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Sudden numbness/weakness of face/arm/leg
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={DropInputV}
                  name={`page9[${index}].DropInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].FrequentCheck`}
                checked={FrequentCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Frequent/Recurring illness or infections</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={FrequentInputV}
                  name={`page9[${index}].FrequentInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].DysphasiaCheck`}
                checked={DysphasiaCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>Difficulty speaking</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={DysphasiaInputV}
                  name={`page9[${index}].DysphasiaInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].HeadCheck`}
                checked={HeadCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Head injuries</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={HeadInputV}
                  name={`page9[${index}].HeadInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].DysphagiaCheck`}
                checked={DysphagiaCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>Difficulty swallowing</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={DysphagiaInputV}
                  name={`page9[${index}].DysphagiaInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].LocCheck`}
                checked={LocCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Loss of consciousness </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={LocInputV}
                  name={`page9[${index}].LocInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].DifficultyCheck`}
                checked={DifficultyCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>Difficulty walking </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={DifficultyInputV}
                  name={`page9[${index}].DifficultyInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].MajorCheck`}
                checked={MajorCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Major lacerations </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={MajorInputV}
                  name={`page9[${index}].MajorInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].NauseaCheck`}
                checked={NauseaCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Vomiting or queasiness{" "}
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={NauseaInputV}
                  name={`page9[${index}].NauseaInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].MVACheck`}
                checked={MVACheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Motor vehicle accidents</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={MVAInputV}
                  name={`page9[${index}].MVAInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].sensationCheck`}
                checked={sensationCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Loss of sensation on one side
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={sensationInputV}
                  name={`page9[${index}].sensationInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].OrganCheck`}
                checked={OrganCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Organ transplants</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={OrganInputV}
                  name={`page9[${index}].OrganInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].InvoluntaryCheck`}
                checked={InvoluntaryCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Involuntary rapid eyemovements
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={InvoluntaryInputV}
                  name={`page9[${index}].InvoluntaryInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].TraumaCheck`}
                checked={TraumaCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Serious falls or trauma</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={TraumaInputV}
                  name={`page9[${index}].TraumaInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].BalanceCheck`}
                checked={BalanceCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Loss of balance/trippingfalling
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={BalanceInputV}
                  name={`page9[${index}].BalanceInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].CesareanCheck`}
                checked={CesareanCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Pregnancy: Cesarean</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={CesareanInputV}
                  name={`page9[${index}].CesareanInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].DexterityCheck`}
                checked={DexterityCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Loss of dexterity/or droppingthings
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={DexterityInputV}
                  name={`page9[${index}].DexterityInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].HomeCheck`}
                checked={HomeCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Pregnancy: Home delivery</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={HomeInputV}
                  name={`page9[${index}].HomeInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].BowelCheck`}
                checked={BowelCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Abnormal bowel/bladdermovements
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={BowelInputV}
                  name={`page9[${index}].BowelInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].HospitalCheck`}
                checked={HospitalCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Pregnancy: Hospital naturaldelivery</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={HospitalInputV}
                  name={`page9[${index}].HospitalInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].LocalizedCheck`}
                checked={LocalizedCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>Localized weakness</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={LocalizedInputV}
                  name={`page9[${index}].LocalizedInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].OtherCheck`}
                checked={OtherCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px" }}>Other (Describe):</span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={OtherInputV}
                  name={`page9[${index}].OtherInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>

          <Grid container>
            <Grid item lg={1} xs={1}>
              <Checkbox
                name={`page9[${index}].MentalCheck`}
                checked={MentalCheckV}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item lg={10} xs={11} sm={10}>
              <div className="list-title">
                <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Mental fog, recently forgetful
                </span>
              </div>
              <div className="dates list-title">
                <input
                  type="text"
                  value={MentalInputV}
                  name={`page9[${index}].MentalInput`}
                  onChange={formik.handleChange}
                />
              </div>
            </Grid>
            <Grid item lg={1}></Grid>
          </Grid>
          {/* {listDates &&
            listDates.map((data, i) => {
              return (
                <>
                  <Grid container>
                    <Grid item lg={1} xs={1}>
                      <Checkbox
                        name={`listDates[${i}].listDatescheck`}
                        checked={values.listDates[i]?.listDatescheck}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid item lg={10} xs={11}>
                      <div className="list-title">
                        <span style={{ fontSize: "15px" }}>{data.name}</span>
                      </div>
                      <div className="dates list-title">
                        <input
                          type="text"
                          name={`listDates[${i}].listDatesInput`}
                          value={values.listDates[i]?.listDatesInput}
                          onChange={formik.handleChange}
                        />
                      </div>
                    </Grid>
                    <Grid item lg={1}></Grid>
                  </Grid>
                </>
              );
            })} */}
        </SoftBox>
      </SoftBox>
    </>
  );
}
firstPart.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default firstPart;
