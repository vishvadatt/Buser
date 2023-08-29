import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";
import { CheckBox } from "@mui/icons-material";

function Table({ formik, form, index }) {
  const { values } = formik;
  const {
    AllergiesInput: AllergiesInputV,
    AllergiesCheck: AllergiesCheckV,
    AllergiesMaternal: AllergiesMaternalV,
    AllergiesPaternal: AllergiesPaternalV,

    ArthritisInput: ArthritisInputV,
    ArthritisCheck: ArthritisCheckV,
    ArthritisMaternal: ArthritisMaternalV,
    ArthritisPaternal: ArthritisPaternalV,

    AsthmaInput: AsthmaInputV,
    AsthmaCheck: AsthmaCheckV,
    AsthmaMaternal: AsthmaMaternalV,
    AsthmaPaternal: AsthmaPaternalV,

    BloodDisordersInput: BloodDisordersInputV,
    BloodDisordersCheck: BloodDisordersCheckV,
    BloodDisordersMaternal: BloodDisordersMaternalV,
    BloodDisordersPaternal: BloodDisordersPaternalV,

    CancerInput: CancerInputV,
    CancerCheck: CancerCheckV,
    CancerMaternal: CancerMaternalV,
    CancerPaternal: CancerPaternalV,

    DepressionInput: DepressionInputV,
    DepressionCheck: DepressionCheckV,
    DepressionMaternal: DepressionMaternalV,
    DepressionPaternal: DepressionPaternalV,

    DiabetesInput: DiabetesInputV,
    DiabetesCheck: DiabetesCheckV,
    DiabetesMaternal: DiabetesMaternalV,
    DiabetesPaternal: DiabetesPaternalV,

    AttackInput: AttackInputV,
    AttackCheck: AttackCheckV,
    AttackMaternal: AttackMaternalV,
    AttackPaternal: AttackPaternalV,

    LiverInput: LiverInputV,
    LiverCheck: LiverCheckV,
    LiverMaternal: LiverMaternalV,
    LiverPaternal: LiverPaternalV,

    HBPInput: HBPInputV,
    HBPCheck: HBPCheckV,
    HBPMaternal: HBPMaternalV,
    HBPPaternal: HBPPaternalV,

    KidneyDiseaseInput: KidneyDiseaseInputV,
    KidneyDiseaseCheck: KidneyDiseaseCheckV,
    KidneyDiseaseMaternal: KidneyDiseaseMaternalV,
    KidneyDiseasePaternal: KidneyDiseasePaternalV,

    LBPInput: LBPInputV,
    LBPCheck: LBPCheckV,
    LBPMaternal: LBPMaternalV,
    LBPPaternal: LBPPaternalV,

    LungInput: LungInputV,
    LungCheck: LungCheckV,
    LungMaternal: LungMaternalV,
    LungPaternal: LungPaternalV,

    NeuroInput: NeuroInputV,
    NeuroCheck: NeuroCheckV,
    NeuroMaternal: NeuroMaternalV,
    NeuroPaternal: NeuroPaternalV,

    PsychologicalDisorderInput: PsychologicalDisorderInputV,
    PsychologicalDisorderCheck: PsychologicalDisorderCheckV,
    PsychologicalDisorderMaternal: PsychologicalDisorderMaternalV,
    PsychologicalDisorderPaternal: PsychologicalDisorderPaternalV,

    RheumaticFeverInput: RheumaticFeverInputV,
    RheumaticFeverCheck: RheumaticFeverCheckV,
    RheumaticFeverMaternal: RheumaticFeverMaternalV,
    RheumaticFeverPaternal: RheumaticFeverPaternalV,

    SeizuresInput: SeizuresInputv,
    SeizuresCheck: SeizuresCheckV,
    SeizuresMaternal: SeizuresMaternalV,
    SeizuresPaternal: SeizuresPaternalV,

    SmallInput: SmallInputV,
    SmallCheck: SmallCheckV,
    SmallMaternal: SmallMaternalV,
    SmallPaternal: SmallPaternalV,

    StomachInput: StomachInputV,
    StomachCheck: StomachCheckV,
    StomachMaternal: StomachMaternalV,
    StomachPaternal: StomachPaternalV,

    StrokeInput: StrokeInputV,
    StrokeCheck: StrokeCheckV,
    StrokeMaternal: StrokeMaternalV,
    StrokePaternal: StrokePaternalV,

    ThyroidDiseaseInput: ThyroidDiseaseInputV,
    ThyroidDiseaseCheck: ThyroidDiseaseCheckV,
    ThyroidDiseaseMaternal: ThyroidDiseaseMaternalV,
    ThyroidDiseasePaternal: ThyroidDiseasePaternalV,

    VascularInput: VascularInputV,
    VascularCheck: VascularCheckV,
    VascularMaternal: VascularMaternalV,
    VascularPaternal: VascularPaternalV,

    OtherInput: OtherInputV,
    OtherCheck: OtherCheckV,
    OtherMaternal: OtherMaternalV,
    OtherPaternal: OtherPaternalV,
  } = values.page7[index];

  console.log(values.page7, "value1");

  console.log(formik.values.page7[index].AllergiesInput, "abc");

  const medical = [
    {
      disease: "Allergies",
    },
    {
      disease: "Arthritis",
    },
    {
      disease: "Asthma",
    },
    {
      disease: "Blood Disorders",
    },
    {
      disease: "Cancer",
    },
    {
      disease: "Depression",
    },
    {
      disease: "Diabetes",
    },
    {
      disease: "Heart Disease / Attack",
    },
    {
      disease: "Liver / Gall bladder disease",
    },
    {
      disease: "High Blood Pressure",
    },
    {
      disease: "Kidney Disease/stones",
    },
    {
      disease: "Low Blood Pressure",
    },
    {
      disease: "Lung Disease",
    },
    {
      disease: "Neurological Disease",
    },
    {
      disease: "Psychological Disorder",
    },
    {
      disease: "Rheumatic Fever",
    },
    {
      disease: "Seizures",
    },
    {
      disease: "Small/Large Intestine",
    },
    {
      disease: "Stomach",
    },
    {
      disease: "Stroke",
    },
    {
      disease: "Thyroid Disease",
    },
    {
      disease: "Vascular Disease",
    },
    {
      disease: "Other:",
    },
  ];

  return (
    <>
      <SoftBox mb={3} style={{ overflowX: "auto" }}>
        <SoftTypography fontWeight="bold" fontSize="16px" marginTop="10px" marginBottom="10px">
          Medical History (For Personal experience please list dates of initial onset and
          descriptions if possible):
        </SoftTypography>
        <Grid className="table-body">
          <div>
            <table className="madical" border={1} style={{ fontSize: "16px" }}>
              <tr>
                <th style={{ textAlign: "center", paddingLeft: "2rem", paddingRight: "2rem" }}>
                  Personal
                </th>
                <th
                  style={{ textAlign: "center", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  className="tablecheck"
                >
                  Current
                </th>
                <th></th>
                <th
                  style={{ textAlign: "center", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  className="tablecheck"
                >
                  Maternal
                </th>
                <th
                  style={{ textAlign: "center", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  className="tablecheck"
                >
                  Paternal
                </th>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={AllergiesInputV}
                    name={`page7[${index}].AllergiesInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AllergiesCheck`}
                    checked={AllergiesCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Allergies
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AllergiesMaternal`}
                    checked={AllergiesMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AllergiesPaternal`}
                    checked={AllergiesPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={ArthritisInputV}
                    name={`page7[${index}].ArthritisInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].ArthritisCheck`}
                    checked={ArthritisCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Arthritis
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].ArthritisMaternal`}
                    checked={ArthritisMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].ArthritisPaternal`}
                    checked={ArthritisPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={AsthmaInputV}
                    name={`page7[${index}].AsthmaInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AsthmaCheck`}
                    checked={AsthmaCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Asthma
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AsthmaMaternal`}
                    checked={AsthmaMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AsthmaPaternal`}
                    checked={AsthmaPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={BloodDisordersInputV}
                    name={`page7[${index}].BloodDisordersInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].BloodDisordersCheck`}
                    checked={BloodDisordersCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Blood Disorders
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].BloodDisordersMaternal`}
                    checked={BloodDisordersMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].BloodDisordersPaternal`}
                    checked={BloodDisordersPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={CancerInputV}
                    name={`page7[${index}].CancerInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].CancerCheck`}
                    checked={CancerCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Cancer
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].CancerMaternal`}
                    checked={CancerMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].CancerPaternal`}
                    checked={CancerPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={DepressionInputV}
                    name={`page7[${index}].DepressionInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].DepressionCheck`}
                    checked={DepressionCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Depression
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].DepressionMaternal`}
                    checked={DepressionMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].DepressionPaternal`}
                    checked={DepressionPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={DiabetesInputV}
                    name={`page7[${index}].DiabetesInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].DiabetesCheck`}
                    checked={DiabetesCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Diabetes
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].DiabetesMaternal`}
                    checked={DiabetesMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].DiabetesPaternal`}
                    checked={DiabetesPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={AttackInputV}
                    name={`page7[${index}].AttackInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AttackCheck`}
                    checked={AttackCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Heart Disease/Attack
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AttackMaternal`}
                    checked={AttackMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].AttackPaternal`}
                    checked={AttackPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={LiverInputV}
                    name={`page7[${index}].LiverInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LiverCheck`}
                    checked={LiverCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Liver/Gall bladder disease
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LiverMaternal`}
                    checked={LiverMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LiverPaternal`}
                    checked={LiverPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={HBPInputV}
                    name={`page7[${index}].HBPInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].HBPCheck`}
                    checked={HBPCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}High Blood Pressure
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].HBPMaternal`}
                    checked={HBPMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].HBPPaternal`}
                    checked={HBPPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={KidneyDiseaseInputV}
                    name={`page7[${index}].KidneyDiseaseInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].KidneyDiseaseCheck`}
                    checked={KidneyDiseaseCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Kidney Disease/stones
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].KidneyDiseaseMaternal`}
                    checked={KidneyDiseaseMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].KidneyDiseasePaternal`}
                    checked={KidneyDiseasePaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={LBPInputV}
                    name={`page7[${index}].LBPInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LBPCheck`}
                    checked={LBPCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Low Blood Pressure
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LBPMaternal`}
                    checked={LBPMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LBPPaternal`}
                    checked={LBPPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={LungInputV}
                    name={`page7[${index}].LungInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LungCheck`}
                    checked={LungCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Lung Disease
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LungMaternal`}
                    checked={LungMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].LungPaternal`}
                    checked={LungPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={NeuroInputV}
                    name={`page7[${index}].NeuroInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].NeuroCheck`}
                    checked={NeuroCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Neurological Disease
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].NeuroMaternal`}
                    checked={NeuroMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].NeuroPaternal`}
                    checked={NeuroPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={PsychologicalDisorderInputV}
                    name={`page7[${index}].PsychologicalDisorderInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].PsychologicalDisorderCheck`}
                    checked={PsychologicalDisorderCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Psychological Disorder
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].PsychologicalDisorderMaternal`}
                    checked={PsychologicalDisorderMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].PsychologicalDisorderPaternal`}
                    checked={PsychologicalDisorderPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={RheumaticFeverInputV}
                    name={`page7[${index}].RheumaticFeverInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].RheumaticFeverCheck`}
                    checked={RheumaticFeverCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Rheumatic Fever
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].RheumaticFeverMaternal`}
                    checked={RheumaticFeverMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].RheumaticFeverPaternal`}
                    checked={RheumaticFeverPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={SeizuresInputv}
                    name={`page7[${index}].SeizuresInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].SeizuresCheck`}
                    checked={SeizuresCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Seizures
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].SeizuresMaternal`}
                    checked={SeizuresMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].SeizuresPaternal`}
                    checked={SeizuresPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={SmallInputV}
                    name={`page7[${index}].SmallInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].SmallCheck`}
                    checked={SmallCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Small/Large Intestine
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].SmallMaternal`}
                    checked={SmallMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].SmallPaternal`}
                    checked={SmallPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={StomachInputV}
                    name={`page7[${index}].StomachInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].StomachCheck`}
                    checked={StomachCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Stomach
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].StomachMaternal`}
                    checked={StomachMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].StomachPaternal`}
                    checked={StomachPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={StrokeInputV}
                    name={`page7[${index}].StrokeInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].StrokeCheck`}
                    checked={StrokeCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Stroke
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].StrokeMaternal`}
                    checked={StrokeMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].StrokePaternal`}
                    checked={StrokePaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={ThyroidDiseaseInputV}
                    name={`page7[${index}].ThyroidDiseaseInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].ThyroidDiseaseCheck`}
                    checked={ThyroidDiseaseCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Thyroid Disease
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].ThyroidDiseaseMaternal`}
                    checked={ThyroidDiseaseMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].ThyroidDiseasePaternal`}
                    checked={ThyroidDiseasePaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={VascularInputV}
                    name={`page7[${index}].VascularInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].VascularCheck`}
                    checked={VascularCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Vascular Disease
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].VascularMaternal`}
                    checked={VascularMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].VascularPaternal`}
                    checked={VascularPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="personalone">
                  <input
                    type="text"
                    value={OtherInputV}
                    name={`page7[${index}].OtherInput`}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].OtherCheck`}
                    checked={OtherCheckV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ paddingLeft: "5px", paddingRight: "2rem" }} className="tabledesc">
                  {/* {data.disease} */}Other:
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].OtherMaternal`}
                    checked={OtherMaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
                <td style={{ textAlign: "center" }}>
                  <Checkbox
                    name={`page7[${index}].OtherPaternal`}
                    checked={OtherPaternalV}
                    onChange={formik.handleChange}
                  />
                </td>
              </tr>
              {/* {medical &&
              medical.map((data, i) => {
                return (
                  <>
                    <tr>
                      <td className="personalone">
                        <input
                          type="text"
                          name={`medicalhistory[${i}].diseaseInput`}
                          value={values.medicalhistory[i]?.diseaseInput}
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <Checkbox
                          name={`medicalhistory[${i}].diseasecurrent`}
                          checked={values.medicalhistory[i]?.diseasecurrent}
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td
                        style={{ paddingLeft: "5px", paddingRight: "2rem" }}
                        className="tabledesc"
                      >
                        {data.disease}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <Checkbox
                          name={`medicalhistory[${i}].diseasematernal`}
                          checked={values.medicalhistory[i]?.diseasematernal}
                          onChange={formik.handleChange}
                        />
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <Checkbox
                          name={`medicalhistory[${i}].diseasepaternal`}
                          checked={values.medicalhistory[i]?.diseasepaternal}
                          onChange={formik.handleChange}
                        />
                      </td>
                    </tr>
                  </>
                );
              })} */}
            </table>
          </div>
        </Grid>
      </SoftBox>
    </>
  );
}
Table.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,
};
export default Table;
