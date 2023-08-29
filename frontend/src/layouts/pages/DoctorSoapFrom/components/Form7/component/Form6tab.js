import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Checkbox,
  Paper,
  TableHead,
  Box,
} from "@mui/material";
import FormField from "layouts/pages/Profile/components/FormField";
import PropTypes from "prop-types";
import "../style.css";

import SignaturePad from "react-signature-canvas";
import SoftButton from "components/SoftButton";

function Form6tab({ formik, form, index }) {
  console.log("index", index);
  let sigPad = React.useRef({});
  let signPad1 = React.useRef({});
  const [signBeginClient, setSignBeginClient] = React.useState(true);
  const [signBeginOfc, setSignBeginOfc] = React.useState(true);
  const onBeginfun = (e) => {
    setSignBeginClient(e?.isTrusted);
  };
  const onBeginfun1 = (e) => {
    setSignBeginOfc(e?.isTrusted);
  };

  function clear() {
    sigPad.current.clear();
    setSignBeginOfc(true);
  }

  function clear1() {
    signPad1.current.clear();
    setSignBeginClient(true);
  }
  const { formField } = form;
  const { values } = formik;

  const {
    clunkSoundwithNeckNever,
    clunkSoundwithNeckHealed,
    clunkSoundwithNeckStillHave,
    clunkSoundwithNeckImprovedLittle,
    clunkSoundwithNeckImprovedMedium,
    clunkSoundwithNeckImprovedLot,
    clunkSoundwithNeckNotImproving,
    clunkSoundwithNeckGettingWorse,

    neckPainNever,
    neckPainHealed,
    neckPainStillHave,
    neckPainImprovedLittle,
    neckPainImprovedMedium,
    neckPainImprovedLot,
    neckPainNotImproving,
    neckPainGettingWorse,

    upperBackPainNever,
    upperBackPainHealed,
    upperBackPainStillHave,
    upperBackPainImprovedLittle,
    upperBackPainImprovedMedium,
    upperBackPainImprovedLot,
    upperBackPainNotImproving,
    upperBackPainGettingWorse,

    lowBackPainNever,
    lowBackPainHealed,
    lowBackPainStillHave,
    lowBackPainImprovedLittle,
    lowBackPainImprovedMedium,
    lowBackPainImprovedLot,
    lowBackPainNotImproving,
    lowBackPainGettingWorse,

    shoulderPainLeftNever,
    shoulderPainLeftHealed,
    shoulderPainLeftStillHave,
    shoulderPainLeftImprovedLittle,
    shoulderPainLeftImprovedMedium,
    shoulderPainLeftImprovedLot,
    shoulderPainLeftNotImproving,
    shoulderPainLeftGettingWorse,

    shoulderPainRightNever,
    shoulderPainRightHealed,
    shoulderPainRightStillHave,
    shoulderPainRightImprovedLittle,
    shoulderPainRightImprovedMedium,
    shoulderPainRightImprovedLot,
    shoulderPainRightNotImproving,
    shoulderPainRightGettingWorse,
    // kk
    elbowPainLeftNever,
    elbowPainLeftHealed,
    elbowPainLeftStillHave,
    elbowPainLeftImprovedLittle,
    elbowPainLeftImprovedMedium,
    elbowPainLeftImprovedLot,
    elbowPainLeftNotImproving,
    elbowPainLeftGettingWorse,

    elbowPainRightNever,
    elbowPainRightHealed,
    elbowPainRightStillHave,
    elbowPainRightImprovedLittle,
    elbowPainRightImprovedMedium,
    elbowPainRightImprovedLot,
    elbowPainRightNotImproving,
    elbowPainRightGettingWorse,

    wristPainLeftNever,
    wristPainLeftHealed,
    wristPainLeftStillHave,
    wristPainLeftImprovedLittle,
    wristPainLeftImprovedMedium,
    wristPainLeftImprovedLot,
    wristPainLeftNotImproving,
    wristPainLeftGettingWorse,

    wristPainRightNever,
    wristPainRightHealed,
    wristPainRightStillHave,
    wristPainRightImprovedLittle,
    wristPainRightImprovedMedium,
    wristPainRightImprovedLot,
    wristPainRightNotImproving,
    wristPainRightGettingWorse,

    //ll

    handfingerPainLeftNever,
    handfingerPainLeftHealed,
    handfingerPainLeftStillHave,
    handfingerPainLeftImprovedLittle,
    handfingerPainLeftImprovedMedium,
    handfingerPainLeftImprovedLot,
    handfingerPainLeftNotImproving,
    handfingerPainLeftGettingWorse,

    handfingerPainRightNever,
    handfingerPainRightHealed,
    handfingerPainRightStillHave,
    handfingerPainRightImprovedLittle,
    handfingerPainRightImprovedMedium,
    handfingerPainRightImprovedLot,
    handfingerPainRightNotImproving,
    handfingerPainRightGettingWorse,

    hipPainLeftNever,
    hipPainLeftHealed,
    hipPainLeftStillHave,
    hipPainLeftImprovedLittle,
    hipPainLeftImprovedMedium,
    hipPainLeftImprovedLot,
    hipPainLeftNotImproving,
    hipPainLeftGettingWorse,

    hipPainRightNever,
    hipPainRightHealed,
    hipPainRightStillHave,
    hipPainRightImprovedLittle,
    hipPainRightImprovedMedium,
    hipPainRightImprovedLot,
    hipPainRightNotImproving,
    hipPainRightGettingWorse,

    kneePainLeftNever,
    kneePainLeftHealed,
    kneePainLeftStillHave,
    kneePainLeftImprovedLittle,
    kneePainLeftImprovedMedium,
    kneePainLeftImprovedLot,
    kneePainLeftNotImproving,
    kneePainLeftGettingWorse,

    kneePainRightNever,
    kneePainRightHealed,
    kneePainRightStillHave,
    kneePainRightImprovedLittle,
    kneePainRightImprovedMedium,
    kneePainRightImprovedLot,
    kneePainRightNotImproving,
    kneePainRightGettingWorse,

    //hh

    ankleFootpainLeftNever,
    ankleFootpainLeftHealed,
    ankleFootpainLeftStillHave,
    ankleFootpainLeftImprovedLittle,
    ankleFootpainLeftImprovedMedium,
    ankleFootpainLeftImprovedLot,
    ankleFootpainLeftNotImproving,
    ankleFootpainLeftGettingWorse,

    ankleFootpainRightNever,
    ankleFootpainRightHealed,
    ankleFootpainRightStillHave,
    ankleFootpainRightImprovedLittle,
    ankleFootpainRightImprovedMedium,
    ankleFootpainRightImprovedLot,
    ankleFootpainRightNotImproving,
    ankleFootpainRightGettingWorse,

    jawChewingPainLeftNever,
    jawChewingPainLeftHealed,
    jawChewingPainLeftStillHave,
    jawChewingPainLeftImprovedLittle,
    jawChewingPainLeftImprovedMedium,
    jawChewingPainLeftImprovedLot,
    jawChewingPainLeftNotImproving,
    jawChewingPainLeftGettingWorse,

    jawChewingPainRightNever,
    jawChewingPainRightHealed,
    jawChewingPainRightStillHave,
    jawChewingPainRightImprovedLittle,
    jawChewingPainRightImprovedMedium,
    jawChewingPainRightImprovedLot,
    jawChewingPainRightNotImproving,
    jawChewingPainRightGettingWorse,

    facePainNever,
    facePainHealed,
    facePainStillHave,
    facePainImprovedLittle,
    facePainImprovedMedium,
    facePainImprovedLot,
    facePainNotImproving,
    facePainGettingWorse,

    chestribsPainNever,
    chestribsPainHealed,
    chestribsPainStillHave,
    chestribsPainImprovedLittle,
    chestribsPainImprovedMedium,
    chestribsPainImprovedLot,
    chestribsPainNotImproving,
    chestribsPainGettingWorse,

    //kk

    stomachPainNever,
    stomachPainHealed,
    stomachPainStillHave,
    stomachPainImprovedLittle,
    stomachPainImprovedMedium,
    stomachPainImprovedLot,
    stomachPainNotImproving,
    stomachPainGettingWorse,

    BrnisesonNever,
    BrnisesonHealed,
    BrnisesonStillHave,
    BrnisesonImprovedLittle,
    BrnisesonImprovedMedium,
    BrnisesonImprovedLot,
    BrnisesonNotImproving,
    BrnisesonGettingWorse,

    cutsscrapesOnNever,
    cutsscrapesOnHealed,
    cutsscrapesOnStillHave,
    cutsscrapesOnImprovedLittle,
    cutsscrapesOnImprovedMedium,
    cutsscrapesOnImprovedLot,
    cutsscrapesOnNotImproving,
    cutsscrapesOnGettingWorse,

    scarsOnNever,
    scarsOnHealed,
    scarsOnStillHave,
    scarsOnImprovedLittle,
    scarsOnImprovedMedium,
    scarsOnImprovedLot,
    scarsOnNotImproving,
    scarsOnGettingWorse,

    numbtinglingArmHandLeftNever,
    numbtinglingArmHandLeftHealed,
    numbtinglingArmHandLeftStillHave,
    numbtinglingArmHandLeftImprovedLittle,
    numbtinglingArmHandLeftImprovedMedium,
    numbtinglingArmHandLeftImprovedLot,
    numbtinglingArmHandLeftNotImproving,
    numbtinglingArmHandLeftGettingWorse,

    numbtinglingArmHandRightNever,
    numbtinglingArmHandRightHealed,
    numbtinglingArmHandRightStillHave,
    numbtinglingArmHandRightImprovedLittle,
    numbtinglingArmHandRightImprovedMedium,
    numbtinglingArmHandRightImprovedLot,
    numbtinglingArmHandRightNotImproving,
    numbtinglingArmHandRightGettingWorse,

    numbtinglingLegFootLeftNever,
    numbtinglingLegFootLeftHealed,
    numbtinglingLegFootLeftStillHave,
    numbtinglingLegFootLeftImprovedLittle,
    numbtinglingLegFootLeftImprovedMedium,
    numbtinglingLegFootLeftImprovedLot,
    numbtinglingLegFootLeftNotImproving,
    numbtinglingLegFootLeftGettingWorse,

    numbtinglingLegFootRightNever,
    numbtinglingLegFootRightHealed,
    numbtinglingLegFootRightStillHave,
    numbtinglingLegFootRightImprovedLittle,
    numbtinglingLegFootRightImprovedMedium,
    numbtinglingLegFootRightImprovedLot,
    numbtinglingLegFootRightNotImproving,
    numbtinglingLegFootRightGettingWorse,

    weakclumsyArmHandLeftNever,
    weakclumsyArmHandLeftHealed,
    weakclumsyArmHandLeftStillHave,
    weakclumsyArmHandLeftImprovedLittle,
    weakclumsyArmHandLeftImprovedMedium,
    weakclumsyArmHandLeftImprovedLot,
    weakclumsyArmHandLeftNotImproving,
    weakclumsyArmHandLeftGettingWorse,

    weakclumsyArmHandRightNever,
    weakclumsyArmHandRightHealed,
    weakclumsyArmHandRightStillHave,
    weakclumsyArmHandRightImprovedLittle,
    weakclumsyArmHandRightImprovedMedium,
    weakclumsyArmHandRightImprovedLot,
    weakclumsyArmHandRightNotImproving,
    weakclumsyArmHandRightGettingWorse,

    weakclumsyLegFootLeftNever,
    weakclumsyLegFootLeftHealed,
    weakclumsyLegFootLeftStillHave,
    weakclumsyLegFootLeftImprovedLittle,
    weakclumsyLegFootLeftImprovedMedium,
    weakclumsyLegFootLeftImprovedLot,
    weakclumsyLegFootLeftNotImproving,
    weakclumsyLegFootLeftGettingWorse,

    weakclumsyLegFootRightNever,
    weakclumsyLegFootRightHealed,
    weakclumsyLegFootRightStillHave,
    weakclumsyLegFootRightImprovedLittle,
    weakclumsyLegFootRightImprovedMedium,
    weakclumsyLegFootRightImprovedLot,
    weakclumsyLegFootRightNotImproving,
    weakclumsyLegFootRightGettingWorse,

    //dd

    stiffnessInJointsNever,
    stiffnessInJointsHealed,
    stiffnessInJointsStillHave,
    stiffnessInJointsImprovedLittle,
    stiffnessInJointsImprovedMedium,
    stiffnessInJointsImprovedLot,
    stiffnessInJointsNotImproving,
    stiffnessInJointsGettingWorse,

    headachesNever,
    headachesHealed,
    headachesStillHave,
    headachesImprovedLittle,
    headachesImprovedMedium,
    headachesImprovedLot,
    headachesNotImproving,
    headachesGettingWorse,

    SoreorSpasmInMusclesNever,
    SoreorSpasmInMusclesHealed,
    SoreorSpasmInMusclesStillHave,
    SoreorSpasmInMusclesImprovedLittle,
    SoreorSpasmInMusclesImprovedMedium,
    SoreorSpasmInMusclesImprovedLot,
    SoreorSpasmInMusclesNotImproving,
    SoreorSpasmInMusclesGettingWorse,

    lightheadedNever,
    lightheadedHealed,
    lightheadedStillHave,
    lightheadedImprovedLittle,
    lightheadedImprovedMedium,
    lightheadedImprovedLot,
    lightheadedNotImproving,
    lightheadedGettingWorse,

    visionChangesNever,
    visionChangesHealed,
    visionChangesStillHave,
    visionChangesImprovedLittle,
    visionChangesImprovedMedium,
    visionChangesImprovedLot,
    visionChangesNotImproving,
    visionChangesGettingWorse,

    sleepChangesNever,
    sleepChangesHealed,
    sleepChangesStillHave,
    sleepChangesImprovedLittle,
    sleepChangesImprovedMedium,
    sleepChangesImprovedLot,
    sleepChangesNotImproving,
    sleepChangesGettingWorse,

    radiatingPainNever,
    radiatingPainHealed,
    radiatingPainStillHave,
    radiatingPainImprovedLittle,
    radiatingPainImprovedMedium,
    radiatingPainImprovedLot,
    radiatingPainNotImproving,
    radiatingPainGettingWorse,

    anxietyNever,
    anxietyHealed,
    anxietyStillHave,
    anxietyImprovedLittle,
    anxietyImprovedMedium,
    anxietyImprovedLot,
    anxietyNotImproving,
    anxietyGettingWorse,

    lackOfEnthusiasmNever,
    lackOfEnthusiasmHealed,
    lackOfEnthusiasmStillHave,
    lackOfEnthusiasmImprovedLittle,
    lackOfEnthusiasmImprovedMedium,
    lackOfEnthusiasmImprovedLot,
    lackOfEnthusiasmNotImproving,
    lackOfEnthusiasmGettingWorse,

    medicationsNever,
    PatientSignature,
    DrSignature,
    // medicationsImprovedLittle, medicationsImprovedMedium,medicationsImprovedLot,
    // medicationsNotImproving,medicationsGettingWorse,
  } = formField;

  const {
    clunkSoundwithNeckNever: clunkSoundwithNeckNeverV,
    clunkSoundwithNeckHealed: clunkSoundwithNeckHealedV,
    clunkSoundwithNeckStillHave: clunkSoundwithNeckStillHaveV,
    clunkSoundwithNeckImprovedLittle: clunkSoundwithNeckImprovedLittleV,
    clunkSoundwithNeckImprovedMedium: clunkSoundwithNeckImprovedMediumV,
    clunkSoundwithNeckImprovedLot: clunkSoundwithNeckImprovedLotV,
    clunkSoundwithNeckNotImproving: clunkSoundwithNeckNotImprovingV,
    clunkSoundwithNeckGettingWorse: clunkSoundwithNeckGettingWorseV,

    neckPainNever: neckPainNeverV,
    neckPainHealed: neckPainHealedV,
    neckPainStillHave: neckPainStillHaveV,
    neckPainImprovedLittle: neckPainImprovedLittleV,
    neckPainImprovedMedium: neckPainImprovedMediumV,
    neckPainImprovedLot: neckPainImprovedLotV,
    neckPainNotImproving: neckPainNotImprovingV,
    neckPainGettingWorse: neckPainGettingWorseV,

    upperBackPainNever: upperBackPainNeverV,
    upperBackPainHealed: upperBackPainHealedV,
    upperBackPainStillHave: upperBackPainStillHaveV,
    upperBackPainImprovedLittle: upperBackPainImprovedLittleV,
    upperBackPainImprovedMedium: upperBackPainImprovedMediumV,
    upperBackPainImprovedLot: upperBackPainImprovedLotV,
    upperBackPainNotImproving: upperBackPainNotImprovingV,
    upperBackPainGettingWorse: upperBackPainGettingWorseV,

    lowBackPainNever: lowBackPainNeverV,
    lowBackPainHealed: lowBackPainHealedV,
    lowBackPainStillHave: lowBackPainStillHaveV,
    lowBackPainImprovedLittle: lowBackPainImprovedLittleV,
    lowBackPainImprovedMedium: lowBackPainImprovedMediumV,
    lowBackPainImprovedLot: lowBackPainImprovedLotV,
    lowBackPainNotImproving: lowBackPainNotImprovingV,
    lowBackPainGettingWorse: lowBackPainGettingWorseV,

    shoulderPainLeftNever: shoulderPainLeftNeverV,
    shoulderPainLeftHealed: shoulderPainLeftHealedV,
    shoulderPainLeftStillHave: shoulderPainLeftStillHaveV,
    shoulderPainLeftImprovedLittle: shoulderPainLeftImprovedLittleV,
    shoulderPainLeftImprovedMedium: shoulderPainLeftImprovedMediumV,
    shoulderPainLeftImprovedLot: shoulderPainLeftImprovedLotV,
    shoulderPainLeftNotImproving: shoulderPainLeftNotImprovingV,
    shoulderPainLeftGettingWorse: shoulderPainLeftGettingWorseV,

    shoulderPainRightNever: shoulderPainRightNeverV,
    shoulderPainRightHealed: shoulderPainRightHealedV,
    shoulderPainRightStillHave: shoulderPainRightStillHaveV,
    shoulderPainRightImprovedLittle: shoulderPainRightImprovedLittleV,
    shoulderPainRightImprovedMedium: shoulderPainRightImprovedMediumV,
    shoulderPainRightImprovedLot: shoulderPainRightImprovedLotV,
    shoulderPainRightNotImproving: shoulderPainRightNotImprovingV,
    shoulderPainRightGettingWorse: shoulderPainRightGettingWorseV,
    // kk
    elbowPainLeftNever: elbowPainLeftNeverV,
    elbowPainLeftHealed: elbowPainLeftHealedV,
    elbowPainLeftStillHave: elbowPainLeftStillHaveV,
    elbowPainLeftImprovedLittle: elbowPainLeftImprovedLittleV,
    elbowPainLeftImprovedMedium: elbowPainLeftImprovedMediumV,
    elbowPainLeftImprovedLot: elbowPainLeftImprovedLotV,
    elbowPainLeftNotImproving: elbowPainLeftNotImprovingV,
    elbowPainLeftGettingWorse: elbowPainLeftGettingWorseV,

    elbowPainRightNever: elbowPainRightNeverV,
    elbowPainRightHealed: elbowPainRightHealedV,
    elbowPainRightStillHave: elbowPainRightStillHaveV,
    elbowPainRightImprovedLittle: elbowPainRightImprovedLittleV,
    elbowPainRightImprovedMedium: elbowPainRightImprovedMediumV,
    elbowPainRightImprovedLot: elbowPainRightImprovedLotV,
    elbowPainRightNotImproving: elbowPainRightNotImprovingV,
    elbowPainRightGettingWorse: elbowPainRightGettingWorseV,

    wristPainLeftNever: wristPainLeftNeverV,
    wristPainLeftHealed: wristPainLeftHealedV,
    wristPainLeftStillHave: wristPainLeftStillHaveV,
    wristPainLeftImprovedLittle: wristPainLeftImprovedLittleV,
    wristPainLeftImprovedMedium: wristPainLeftImprovedMediumV,
    wristPainLeftImprovedLot: wristPainLeftImprovedLotV,
    wristPainLeftNotImproving: wristPainLeftNotImprovingV,
    wristPainLeftGettingWorse: wristPainLeftGettingWorseV,

    wristPainRightNever: wristPainRightNeverV,
    wristPainRightHealed: wristPainRightHealedV,
    wristPainRightStillHave: wristPainRightStillHaveV,
    wristPainRightImprovedLittle: wristPainRightImprovedLittleV,
    wristPainRightImprovedMedium: wristPainRightImprovedMediumV,
    wristPainRightImprovedLot: wristPainRightImprovedLotV,
    wristPainRightNotImproving: wristPainRightNotImprovingV,
    wristPainRightGettingWorse: wristPainRightGettingWorseV,

    //kk

    handfingerPainLeftNever: handfingerPainLeftNeverV,
    handfingerPainLeftHealed: handfingerPainLeftHealedV,
    handfingerPainLeftStillHave: handfingerPainLeftStillHaveV,
    handfingerPainLeftImprovedLittle: handfingerPainLeftImprovedLittleV,
    handfingerPainLeftImprovedMedium: handfingerPainLeftImprovedMediumV,
    handfingerPainLeftImprovedLot: handfingerPainLeftImprovedLotV,
    handfingerPainLeftNotImproving: handfingerPainLeftNotImprovingV,
    handfingerPainLeftGettingWorse: handfingerPainLeftGettingWorseV,

    handfingerPainRightNever: handfingerPainRightNeverV,
    handfingerPainRightHealed: handfingerPainRightHealedV,
    handfingerPainRightStillHave: handfingerPainRightStillHaveV,
    handfingerPainRightImprovedLittle: handfingerPainRightImprovedLittleV,
    handfingerPainRightImprovedMedium: handfingerPainRightImprovedMediumV,
    handfingerPainRightImprovedLot: handfingerPainRightImprovedLotV,
    handfingerPainRightNotImproving: handfingerPainRightNotImprovingV,
    handfingerPainRightGettingWorse: handfingerPainRightGettingWorseV,

    hipPainLeftNever: hipPainLeftNeverV,
    hipPainLeftHealed: hipPainLeftHealedV,
    hipPainLeftStillHave: hipPainLeftStillHaveV,
    hipPainLeftImprovedLittle: hipPainLeftImprovedLittleV,
    hipPainLeftImprovedMedium: hipPainLeftImprovedMediumV,
    hipPainLeftImprovedLot: hipPainLeftImprovedLotV,
    hipPainLeftNotImproving: hipPainLeftNotImprovingV,
    hipPainLeftGettingWorse: hipPainLeftGettingWorseV,

    hipPainRightNever: hipPainRightNeverV,
    hipPainRightHealed: hipPainRightHealedV,
    hipPainRightStillHave: hipPainRightStillHaveV,
    hipPainRightImprovedLittle: hipPainRightImprovedLittleV,
    hipPainRightImprovedMedium: hipPainRightImprovedMediumV,
    hipPainRightImprovedLot: hipPainRightImprovedLotV,
    hipPainRightNotImproving: hipPainRightNotImprovingV,
    hipPainRightGettingWorse: hipPainRightGettingWorseV,

    kneePainLeftNever: kneePainLeftNeverV,
    kneePainLeftHealed: kneePainLeftHealedV,
    kneePainLeftStillHave: kneePainLeftStillHaveV,
    kneePainLeftImprovedLittle: kneePainLeftImprovedLittleV,
    kneePainLeftImprovedMedium: kneePainLeftImprovedMediumV,
    kneePainLeftImprovedLot: kneePainLeftImprovedLotV,
    kneePainLeftNotImproving: kneePainLeftNotImprovingV,
    kneePainLeftGettingWorse: kneePainLeftGettingWorseV,

    kneePainRightNever: kneePainRightNeverV,
    kneePainRightHealed: kneePainRightHealedV,
    kneePainRightStillHave: kneePainRightStillHaveV,
    kneePainRightImprovedLittle: kneePainRightImprovedLittleV,
    kneePainRightImprovedMedium: kneePainRightImprovedMediumV,
    kneePainRightImprovedLot: kneePainRightImprovedLotV,
    kneePainRightNotImproving: kneePainRightNotImprovingV,
    kneePainRightGettingWorse: kneePainRightGettingWorseV,
    //kkk

    ankleFootpainLeftNever: ankleFootpainLeftNeverV,
    ankleFootpainLeftHealed: ankleFootpainLeftHealedV,
    ankleFootpainLeftStillHave: ankleFootpainLeftStillHaveV,
    ankleFootpainLeftImprovedLittle: ankleFootpainLeftImprovedLittleV,
    ankleFootpainLeftImprovedMedium: ankleFootpainLeftImprovedMediumV,
    ankleFootpainLeftImprovedLot: ankleFootpainLeftImprovedLotV,
    ankleFootpainLeftNotImproving: ankleFootpainLeftNotImprovingV,
    ankleFootpainLeftGettingWorse: ankleFootpainLeftGettingWorseV,

    ankleFootpainRightNever: ankleFootpainRightNeverV,
    ankleFootpainRightHealed: ankleFootpainRightHealedV,
    ankleFootpainRightStillHave: ankleFootpainRightStillHaveV,
    ankleFootpainRightImprovedLittle: ankleFootpainRightImprovedLittleV,
    ankleFootpainRightImprovedMedium: ankleFootpainRightImprovedMediumV,
    ankleFootpainRightImprovedLot: ankleFootpainRightImprovedLotV,
    ankleFootpainRightNotImproving: ankleFootpainRightNotImprovingV,
    ankleFootpainRightGettingWorse: ankleFootpainRightGettingWorseV,

    jawChewingPainLeftNever: jawChewingPainLeftNeverV,
    jawChewingPainLeftHealed: jawChewingPainLeftHealedV,
    jawChewingPainLeftStillHave: jawChewingPainLeftStillHaveV,
    jawChewingPainLeftImprovedLittle: jawChewingPainLeftImprovedLittleV,
    jawChewingPainLeftImprovedMedium: jawChewingPainLeftImprovedMediumV,
    jawChewingPainLeftImprovedLot: jawChewingPainLeftImprovedLotV,
    jawChewingPainLeftNotImproving: jawChewingPainLeftNotImprovingV,
    jawChewingPainLeftGettingWorse: jawChewingPainLeftGettingWorseV,

    jawChewingPainRightNever: jawChewingPainRightNeverV,
    jawChewingPainRightHealed: jawChewingPainRightHealedV,
    jawChewingPainRightStillHave: jawChewingPainRightStillHaveV,
    jawChewingPainRightImprovedLittle: jawChewingPainRightImprovedLittleV,
    jawChewingPainRightImprovedMedium: jawChewingPainRightImprovedMediumV,
    jawChewingPainRightImprovedLot: jawChewingPainRightImprovedLotV,
    jawChewingPainRightNotImproving: jawChewingPainRightNotImprovingV,
    jawChewingPainRightGettingWorse: jawChewingPainRightGettingWorseV,

    facePainNever: facePainNeverV,
    facePainHealed: facePainHealedV,
    facePainStillHave: facePainStillHaveV,
    facePainImprovedLittle: facePainImprovedLittleV,
    facePainImprovedMedium: facePainImprovedMediumV,
    facePainImprovedLot: facePainImprovedLotV,
    facePainNotImproving: facePainNotImprovingV,
    facePainGettingWorse: facePainGettingWorseV,

    chestribsPainNever: chestribsPainNeverV,
    chestribsPainHealed: chestribsPainHealedV,
    chestribsPainStillHave: chestribsPainStillHaveV,
    chestribsPainImprovedLittle: chestribsPainImprovedLittleV,
    chestribsPainImprovedMedium: chestribsPainImprovedMediumV,
    chestribsPainImprovedLot: chestribsPainImprovedLotV,
    chestribsPainNotImproving: chestribsPainNotImprovingV,
    chestribsPainGettingWorse: chestribsPainGettingWorseV,

    //kk

    stomachPainNever: stomachPainNeverV,
    stomachPainHealed: stomachPainHealedV,
    stomachPainStillHave: stomachPainStillHaveV,
    stomachPainImprovedLittle: stomachPainImprovedLittleV,
    stomachPainImprovedMedium: stomachPainImprovedMediumV,
    stomachPainImprovedLot: stomachPainImprovedLotV,
    stomachPainNotImproving: stomachPainNotImprovingV,
    stomachPainGettingWorse: stomachPainGettingWorseV,

    BrnisesonNever: BrnisesonNeverV,
    BrnisesonHealed: BrnisesonHealedV,
    BrnisesonStillHave: BrnisesonStillHaveV,
    BrnisesonImprovedLittle: BrnisesonImprovedLittleV,
    BrnisesonImprovedMedium: BrnisesonImprovedMediumV,
    BrnisesonImprovedLot: BrnisesonImprovedLotV,
    BrnisesonNotImproving: BrnisesonNotImprovingV,
    BrnisesonGettingWorse: BrnisesonGettingWorseV,

    cutsscrapesOnNever: cutsscrapesOnNeverV,
    cutsscrapesOnHealed: cutsscrapesOnHealedV,
    cutsscrapesOnStillHave: cutsscrapesOnStillHaveV,
    cutsscrapesOnImprovedLittle: cutsscrapesOnImprovedLittleV,
    cutsscrapesOnImprovedMedium: cutsscrapesOnImprovedMediumV,
    cutsscrapesOnImprovedLot: cutsscrapesOnImprovedLotV,
    cutsscrapesOnNotImproving: cutsscrapesOnNotImprovingV,
    cutsscrapesOnGettingWorse: cutsscrapesOnGettingWorseV,

    scarsOnNever: scarsOnNeverV,
    scarsOnHealed: scarsOnHealedV,
    scarsOnStillHave: scarsOnStillHaveV,
    scarsOnImprovedLittle: scarsOnImprovedLittleV,
    scarsOnImprovedMedium: scarsOnImprovedMediumV,
    scarsOnImprovedLot: scarsOnImprovedLotV,
    scarsOnNotImproving: scarsOnNotImprovingV,
    scarsOnGettingWorse: scarsOnGettingWorseV,

    numbtinglingArmHandLeftNever: numbtinglingArmHandLeftNeverV,
    numbtinglingArmHandLeftHealed: numbtinglingArmHandLeftHealedV,
    numbtinglingArmHandLeftStillHave: numbtinglingArmHandLeftStillHaveV,
    numbtinglingArmHandLeftImprovedLittle: numbtinglingArmHandLeftImprovedLittleV,
    numbtinglingArmHandLeftImprovedMedium: numbtinglingArmHandLeftImprovedMediumV,
    numbtinglingArmHandLeftImprovedLot: numbtinglingArmHandLeftImprovedLotV,
    numbtinglingArmHandLeftNotImproving: numbtinglingArmHandLeftNotImprovingV,
    numbtinglingArmHandLeftGettingWorse: numbtinglingArmHandLeftGettingWorseV,

    numbtinglingArmHandRightNever: numbtinglingArmHandRightNeverV,
    numbtinglingArmHandRightHealed: numbtinglingArmHandRightHealedV,
    numbtinglingArmHandRightStillHave: numbtinglingArmHandRightStillHaveV,
    numbtinglingArmHandRightImprovedLittle: numbtinglingArmHandRightImprovedLittleV,
    numbtinglingArmHandRightImprovedMedium: numbtinglingArmHandRightImprovedMediumV,
    numbtinglingArmHandRightImprovedLot: numbtinglingArmHandRightImprovedLotV,
    numbtinglingArmHandRightNotImproving: numbtinglingArmHandRightNotImprovingV,
    numbtinglingArmHandRightGettingWorse: numbtinglingArmHandRightGettingWorseV,

    numbtinglingLegFootLeftNever: numbtinglingLegFootLeftNeverV,
    numbtinglingLegFootLeftHealed: numbtinglingLegFootLeftHealedV,
    numbtinglingLegFootLeftStillHave: numbtinglingLegFootLeftStillHaveV,
    numbtinglingLegFootLeftImprovedLittle: numbtinglingLegFootLeftImprovedLittleV,
    numbtinglingLegFootLeftImprovedMedium: numbtinglingLegFootLeftImprovedMediumV,
    numbtinglingLegFootLeftImprovedLot: numbtinglingLegFootLeftImprovedLotV,
    numbtinglingLegFootLeftNotImproving: numbtinglingLegFootLeftNotImprovingV,
    numbtinglingLegFootLeftGettingWorse: numbtinglingLegFootLeftGettingWorseV,

    numbtinglingLegFootRightNever: numbtinglingLegFootRightNeverV,
    numbtinglingLegFootRightHealed: numbtinglingLegFootRightHealedV,
    numbtinglingLegFootRightStillHave: numbtinglingLegFootRightStillHaveV,
    numbtinglingLegFootRightImprovedLittle: numbtinglingLegFootRightImprovedLittleV,
    numbtinglingLegFootRightImprovedMedium: numbtinglingLegFootRightImprovedMediumV,
    numbtinglingLegFootRightImprovedLot: numbtinglingLegFootRightImprovedLotV,
    numbtinglingLegFootRightNotImproving: numbtinglingLegFootRightNotImprovingV,
    numbtinglingLegFootRightGettingWorse: numbtinglingLegFootRightGettingWorseV,

    weakclumsyArmHandLeftNever: weakclumsyArmHandLeftNeverV,
    weakclumsyArmHandLeftHealed: weakclumsyArmHandLeftHealedV,
    weakclumsyArmHandLeftStillHave: weakclumsyArmHandLeftStillHaveV,
    weakclumsyArmHandLeftImprovedLittle: weakclumsyArmHandLeftImprovedLittleV,
    weakclumsyArmHandLeftImprovedMedium: weakclumsyArmHandLeftImprovedMediumV,
    weakclumsyArmHandLeftImprovedLot: weakclumsyArmHandLeftImprovedLotV,
    weakclumsyArmHandLeftNotImproving: weakclumsyArmHandLeftNotImprovingV,
    weakclumsyArmHandLeftGettingWorse: weakclumsyArmHandLeftGettingWorseV,

    weakclumsyArmHandRightNever: weakclumsyArmHandRightNeverV,
    weakclumsyArmHandRightHealed: weakclumsyArmHandRightHealedV,
    weakclumsyArmHandRightStillHave: weakclumsyArmHandRightStillHaveV,
    weakclumsyArmHandRightImprovedLittle: weakclumsyArmHandRightImprovedLittleV,
    weakclumsyArmHandRightImprovedMedium: weakclumsyArmHandRightImprovedMediumV,
    weakclumsyArmHandRightImprovedLot: weakclumsyArmHandRightImprovedLotV,
    weakclumsyArmHandRightNotImproving: weakclumsyArmHandRightNotImprovingV,
    weakclumsyArmHandRightGettingWorse: weakclumsyArmHandRightGettingWorseV,

    weakclumsyLegFootLeftNever: weakclumsyLegFootLeftNeverV,
    weakclumsyLegFootLeftHealed: weakclumsyLegFootLeftHealedV,
    weakclumsyLegFootLeftStillHave: weakclumsyLegFootLeftStillHaveV,
    weakclumsyLegFootLeftImprovedLittle: weakclumsyLegFootLeftImprovedLittleV,
    weakclumsyLegFootLeftImprovedMedium: weakclumsyLegFootLeftImprovedMediumV,
    weakclumsyLegFootLeftImprovedLot: weakclumsyLegFootLeftImprovedLotV,
    weakclumsyLegFootLeftNotImproving: weakclumsyLegFootLeftNotImprovingV,
    weakclumsyLegFootLeftGettingWorse: weakclumsyLegFootLeftGettingWorseV,

    weakclumsyLegFootRightNever: weakclumsyLegFootRightNeverV,
    weakclumsyLegFootRightHealed: weakclumsyLegFootRightHealedV,
    weakclumsyLegFootRightStillHave: weakclumsyLegFootRightStillHaveV,
    weakclumsyLegFootRightImprovedLittle: weakclumsyLegFootRightImprovedLittleV,
    weakclumsyLegFootRightImprovedMedium: weakclumsyLegFootRightImprovedMediumV,
    weakclumsyLegFootRightImprovedLot: weakclumsyLegFootRightImprovedLotV,
    weakclumsyLegFootRightNotImproving: weakclumsyLegFootRightNotImprovingV,
    weakclumsyLegFootRightGettingWorse: weakclumsyLegFootRightGettingWorseV,

    //dd

    stiffnessInJointsNever: stiffnessInJointsNeverV,
    stiffnessInJointsHealed: stiffnessInJointsHealedV,
    stiffnessInJointsStillHave: stiffnessInJointsStillHaveV,
    stiffnessInJointsImprovedLittle: stiffnessInJointsImprovedLittleV,
    stiffnessInJointsImprovedMedium: stiffnessInJointsImprovedMediumV,
    stiffnessInJointsImprovedLot: stiffnessInJointsImprovedLotV,
    stiffnessInJointsNotImproving: stiffnessInJointsNotImprovingV,
    stiffnessInJointsGettingWorse: stiffnessInJointsGettingWorseV,

    headachesNever: headachesNeverV,
    headachesHealed: headachesHealedV,
    headachesStillHave: headachesStillHaveV,
    headachesImprovedLittle: headachesImprovedLittleV,
    headachesImprovedMedium: headachesImprovedMediumV,
    headachesImprovedLot: headachesImprovedLotV,
    headachesNotImproving: headachesNotImprovingV,
    headachesGettingWorse: headachesGettingWorseV,

    SoreorSpasmInMusclesNever: SoreorSpasmInMusclesNeverV,
    SoreorSpasmInMusclesHealed: SoreorSpasmInMusclesHealedV,
    SoreorSpasmInMusclesStillHave: SoreorSpasmInMusclesStillHaveV,
    SoreorSpasmInMusclesImprovedLittle: SoreorSpasmInMusclesImprovedLittleV,
    SoreorSpasmInMusclesImprovedMedium: SoreorSpasmInMusclesImprovedMediumV,
    SoreorSpasmInMusclesImprovedLot: SoreorSpasmInMusclesImprovedLotV,
    SoreorSpasmInMusclesNotImproving: SoreorSpasmInMusclesNotImprovingV,
    SoreorSpasmInMusclesGettingWorse: SoreorSpasmInMusclesGettingWorseV,

    lightheadedNever: lightheadedNeverV,
    lightheadedHealed: lightheadedHealedV,
    lightheadedStillHave: lightheadedStillHaveV,
    lightheadedImprovedLittle: lightheadedImprovedLittleV,
    lightheadedImprovedMedium: lightheadedImprovedMediumV,
    lightheadedImprovedLot: lightheadedImprovedLotV,
    lightheadedNotImproving: lightheadedNotImprovingV,
    lightheadedGettingWorse: lightheadedGettingWorseV,

    visionChangesNever: visionChangesNeverV,
    visionChangesHealed: visionChangesHealedV,
    visionChangesStillHave: visionChangesStillHaveV,
    visionChangesImprovedLittle: visionChangesImprovedLittleV,
    visionChangesImprovedMedium: visionChangesImprovedMediumV,
    visionChangesImprovedLot: visionChangesImprovedLotV,
    visionChangesNotImproving: visionChangesNotImprovingV,
    visionChangesGettingWorse: visionChangesGettingWorseV,

    sleepChangesNever: sleepChangesNeverV,
    sleepChangesHealed: sleepChangesHealedV,
    sleepChangesStillHave: sleepChangesStillHaveV,
    sleepChangesImprovedLittle: sleepChangesImprovedLittleV,
    sleepChangesImprovedMedium: sleepChangesImprovedMediumV,
    sleepChangesImprovedLot: sleepChangesImprovedLotV,
    sleepChangesNotImproving: sleepChangesNotImprovingV,
    sleepChangesGettingWorse: sleepChangesGettingWorseV,

    radiatingPainNever: radiatingPainNeverV,
    radiatingPainHealed: radiatingPainHealedV,
    radiatingPainStillHave: radiatingPainStillHaveV,
    radiatingPainImprovedLittle: radiatingPainImprovedLittleV,
    radiatingPainImprovedMedium: radiatingPainImprovedMediumV,
    radiatingPainImprovedLot: radiatingPainImprovedLotV,
    radiatingPainNotImproving: radiatingPainNotImprovingV,
    radiatingPainGettingWorse: radiatingPainGettingWorseV,

    anxietyNever: anxietyNeverV,
    anxietyHealed: anxietyHealedV,
    anxietyStillHave: anxietyStillHaveV,
    anxietyImprovedLittle: anxietyImprovedLittleV,
    anxietyImprovedMedium: anxietyImprovedMediumV,
    anxietyImprovedLot: anxietyImprovedLotV,
    anxietyNotImproving: anxietyNotImprovingV,
    anxietyGettingWorse: anxietyGettingWorseV,

    lackOfEnthusiasmNever: lackOfEnthusiasmNeverV,
    lackOfEnthusiasmHealed: lackOfEnthusiasmHealedV,
    lackOfEnthusiasmStillHave: lackOfEnthusiasmStillHaveV,
    lackOfEnthusiasmImprovedLittle: lackOfEnthusiasmImprovedLittleV,
    lackOfEnthusiasmImprovedMedium: lackOfEnthusiasmImprovedMediumV,
    lackOfEnthusiasmImprovedLot: lackOfEnthusiasmImprovedLotV,
    lackOfEnthusiasmNotImproving: lackOfEnthusiasmNotImprovingV,
    lackOfEnthusiasmGettingWorse: lackOfEnthusiasmGettingWorseV,

    medicationsNever: medicationsNeverV,
    PatientSignature: PatientSignatureV,
    DrSignature: DrSignatureV,
    // medicationsImprovedLittle: medicationsImprovedLittleV,
    // medicationsImprovedMedium: medicationsImprovedMediumV,
    // medicationsImprovedLot: medicationsImprovedLotV,
    // medicationsNotImproving: medicationsNotImprovingV,
    // medicationsGettingWorse: medicationsGettingWorseV,
  } = values;

  const dataArry1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
  ];

  return (
    <>
      <Grid container>
        <Grid item lg={12} sm={12} xs={12} style={{ overflowX: "auto" }}>
          <Paper style={{ overflowX: "auto" }}>
            <table style={{ width: "98%" }} className="SymptomsUpdateTable">
              <tr>
                <th width="20%"> </th>
                <th>Never Had</th>
                <th>100% Healed</th>
                <th>Still Have</th>
                <th>Improved A Little</th>
                <th>Improved Medium</th>
                <th>Improved A Lot</th>
                <th>Not Improving</th>
                <th>Getting Worse</th>
              </tr>
              {dataArry1 &&
                dataArry1.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td width="20%">{formik.values.form7[index]?.symptomsupdate[i]?.name}</td>
                      <td className="had">
                        {/* <input
                          className="table_input"
                          type="text"
                          name={`symptomsupdate[${i}].neverhad`}
                          // value={formik.values.symptomsupdate[i]?.neverhad}
                          // onChange={formik.handleChange}
                          value={formik.values?.form7[index]?.symptomsupdate[i]?.neverhad}
                          onChange={(e) => {
                            formik.setFieldValue(
                              `form7[${index}].symptomsupdate[${i}].neverhad`,
                              e.target.value
                            );
                          }}
                        /> */}
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Checkbox
                            name={`symptomsupdate[${i}].neverhad`}
                            // checked={FitnessCheckV}
                            // onChange={formik.handleChange}
                            checked={formik.values?.form7[index]?.symptomsupdate[i]?.neverhad}
                            onChange={(e) =>
                              formik.setFieldValue(
                                `form7[${index}].symptomsupdate[${i}].neverhad`,
                                e.target.checked
                              )
                            }
                          />
                        </Box>
                      </td>
                      <td className="had">
                        {/* <input
                          className="table_input"
                          type="text"
                          name={`symptomsupdate[${i}].healed`}
                          // value={formik.values.symptomsupdate[i]?.healed}
                          // onChange={formik.handleChange}
                          value={formik.values?.form7[index]?.symptomsupdate[i]?.healed}
                          onChange={(e) =>
                            formik.setFieldValue(
                              `form7[${index}].symptomsupdate[${i}].healed`,
                              e.target.value
                            )
                          }
                        /> */}
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Checkbox
                            name={`symptomsupdate[${i}].healed`}
                            // checked={FitnessCheckV}
                            // onChange={formik.handleChange}
                            checked={formik.values?.form7[index]?.symptomsupdate[i]?.healed}
                            onChange={(e) =>
                              formik.setFieldValue(
                                `form7[${index}].symptomsupdate[${i}].healed`,
                                e.target.checked
                              )
                            }
                          />
                        </Box>
                      </td>
                      <td className="had">
                        {/* <input
                          className="table_input"
                          type="text"
                          name={`symptomsupdate[${i}].stillhave`}
                          // value={formik.values.symptomsupdate[i]?.stillhave}
                          // onChange={formik.handleChange}
                          value={formik.values?.form7[index]?.symptomsupdate[i]?.stillhave}
                          onChange={(e) =>
                            formik.setFieldValue(
                              `form7[${index}].symptomsupdate[${i}].stillhave`,
                              e.target.value
                            )
                          }
                        /> */}
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Checkbox
                            name={`symptomsupdate[${i}].stillhave`}
                            // checked={FitnessCheckV}
                            // onChange={formik.handleChange}
                            checked={formik.values?.form7[index]?.symptomsupdate[i]?.stillhave}
                            onChange={(e) =>
                              formik.setFieldValue(
                                `form7[${index}].symptomsupdate[${i}].stillhave`,
                                e.target.checked
                              )
                            }
                          />
                        </Box>
                      </td>
                      <td className="had">
                        {/* <input
                          className="table_input"
                          type="text"
                          name={`symptomsupdate[${i}].improvelittle`}
                          // value={formik.values.symptomsupdate[i]?.improvelittle}
                          // onChange={formik.handleChange}
                          value={formik.values?.form7[index]?.symptomsupdate[i]?.improvelittle}
                          onChange={(e) =>
                            formik.setFieldValue(
                              `form7[${index}].symptomsupdate[${i}].improvelittle`,
                              e.target.value
                            )
                          }
                        /> */}
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Checkbox
                            name={`symptomsupdate[${i}].improvelittle`}
                            // checked={FitnessCheckV}
                            // onChange={formik.handleChange}
                            checked={formik.values?.form7[index]?.symptomsupdate[i]?.improvelittle}
                            onChange={(e) =>
                              formik.setFieldValue(
                                `form7[${index}].symptomsupdate[${i}].improvelittle`,
                                e.target.checked
                              )
                            }
                          />
                        </Box>
                      </td>
                      <td className="had">
                        {/* <input
                          className="table_input"
                          type="text"
                          name={`symptomsupdate[${i}].improvemedium`}
                          // value={formik.values.symptomsupdate[i]?.improvemedium}
                          // onChange={formik.handleChange}
                          value={formik.values?.form7[index]?.symptomsupdate[i]?.improvemedium}
                          onChange={(e) =>
                            formik.setFieldValue(
                              `form7[${index}].symptomsupdate[${i}].improvemedium`,
                              e.target.value
                            )
                          }
                        /> */}
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Checkbox
                            name={`symptomsupdate[${i}].improvemedium`}
                            // checked={FitnessCheckV}
                            // onChange={formik.handleChange}
                            checked={formik.values?.form7[index]?.symptomsupdate[i]?.improvemedium}
                            onChange={(e) =>
                              formik.setFieldValue(
                                `form7[${index}].symptomsupdate[${i}].improvemedium`,
                                e.target.checked
                              )
                            }
                          />
                        </Box>
                      </td>
                      <td className="had">
                        {/* <input
                          className="table_input"
                          type="text"
                          name={`symptomsupdate[${i}].improvealot`}
                          // value={formik.values.symptomsupdate[i]?.improvealot}
                          // onChange={formik.handleChange}
                          value={formik.values?.form7[index]?.symptomsupdate[i]?.improvealot}
                          onChange={(e) =>
                            formik.setFieldValue(
                              `form7[${index}].symptomsupdate[${i}].improvealot`,
                              e.target.value
                            )
                          }
                        /> */}
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Checkbox
                            name={`symptomsupdate[${i}].improvealot`}
                            // checked={FitnessCheckV}
                            // onChange={formik.handleChange}
                            checked={formik.values?.form7[index]?.symptomsupdate[i]?.improvealot}
                            onChange={(e) =>
                              formik.setFieldValue(
                                `form7[${index}].symptomsupdate[${i}].improvealot`,
                                e.target.checked
                              )
                            }
                          />
                        </Box>
                      </td>
                      <td className="had">
                        {/* <input
                          className="table_input"
                          type="text"
                          name={`symptomsupdate[${i}].notimprove`}
                          // value={formik.values.symptomsupdate[i]?.notimprove}
                          // onChange={formik.handleChange}
                          value={formik.values?.form7[index]?.symptomsupdate[i]?.notimprove}
                          onChange={(e) =>
                            formik.setFieldValue(
                              `form7[${index}].symptomsupdate[${i}].notimprove`,
                              e.target.value
                            )
                          }
                        /> */}
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Checkbox
                            name={`symptomsupdate[${i}].notimprove`}
                            // checked={FitnessCheckV}
                            // onChange={formik.handleChange}
                            checked={formik.values?.form7[index]?.symptomsupdate[i]?.notimprove}
                            onChange={(e) =>
                              formik.setFieldValue(
                                `form7[${index}].symptomsupdate[${i}].notimprove`,
                                e.target.checked
                              )
                            }
                          />
                        </Box>
                      </td>
                      <td className="had">
                        {/* <input
                          className="table_input"
                          type="text"
                          name={`symptomsupdate[${i}].gettingworse`}
                          // value={formik.values.symptomsupdate[i]?.gettingworse}
                          // onChange={formik.handleChange}
                          value={formik.values?.form7[index]?.symptomsupdate[i]?.gettingworse}
                          onChange={(e) =>
                            formik.setFieldValue(
                              `form7[${index}].symptomsupdate[${i}].gettingworse`,
                              e.target.value
                            )
                          }
                        /> */}
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                          <Checkbox
                            name={`symptomsupdate[${i}].gettingworse`}
                            // checked={FitnessCheckV}
                            // onChange={formik.handleChange}
                            checked={formik.values?.form7[index]?.symptomsupdate[i]?.gettingworse}
                            onChange={(e) =>
                              formik.setFieldValue(
                                `form7[${index}].symptomsupdate[${i}].gettingworse`,
                                e.target.checked
                              )
                            }
                          />
                        </Box>
                      </td>
                    </tr>
                  );
                })}
              <tr>
                {/* <div className='drspan1-css'> */}
                {/* <div className='patient-sign'>Patient Signature </div> */}
                <td rowSpan={2} style={{ width: "275px" }}>
                  Patient Signature{" "}
                </td>
                <td rowSpan={2} colSpan={3}>
                  {/* <FormField
                    type={PatientSignature.type}
                    name={PatientSignature.name}
                    // value={PatientSignatureV}
                    // onChange={formik.handleChange}
                    value={formik.values?.form7[index]?.PatientSignatureV}
                    onChange={(e) => {
                      formik.setFieldValue(`form7[${index}].PatientSignatureV`, e.target.value);
                    }}
                    className="symtomsInput therapiCss1"
                  /> */}

                  {formik.values?.form7[index]?.PatientSignatureV !== undefined ? (
                    <Grid item xs={12} lg={6} sm={6} className="parentClass">
                      <img src={formik.values?.form7[index]?.PatientSignatureV} />
                      <h5 style={{ fontSize: "15px" }}>Sign here</h5>
                    </Grid>
                  ) : (
                    <Grid item xs={12}>
                      <SignaturePad
                        canvasProps={{ width: 240, height: 150 }}
                        ref={sigPad}
                        penColor="black"
                        backgroundColor="#f1f1f1"
                        placeholder="sign"
                        onBegin={(e) => onBeginfun1(e.isTrusted)}
                      />
                      <Box display={"flex"} gap={"67px"}>
                        <SoftButton
                          onClick={clear}
                          style={{ marginRight: "5px" }}
                          disabled={signBeginOfc}
                        >
                          Clear
                        </SoftButton>
                        <SoftButton
                          disabled={signBeginOfc}
                          onClick={() => {
                            formik.setFieldValue(
                              `form7[${index}].PatientSignatureV`,
                              sigPad.current.getTrimmedCanvas().toDataURL("image/png")
                            );
                          }}
                        >
                          Save
                        </SoftButton>
                      </Box>
                    </Grid>
                  )}
                </td>

                {/* </div> */}
                {/* <div className='drspan2-css'> */}
                <td rowSpan={2} colSpan={2} style={{ width: "275px" }}>
                  Practitioner Signature{" "}
                </td>

                <td rowSpan={2} colSpan={3}>
                  {/* <FormField
                    type={DrSignature.type}
                    name={DrSignature.name}
                    // value={DrSignatureV}
                    // onChange={formik.handleChange}
                    value={formik.values?.form7[index]?.DrSignatureV}
                    onChange={(e) => {
                      formik.setFieldValue(`form7[${index}].DrSignatureV`, e.target.value);
                    }}
                    className="symtomsInput therapiCss1"
                  /> */}
                  {formik.values?.form7[index]?.DrSignatureV !== undefined ? (
                    <Grid item xs={12} sm={4} className="parentClass">
                      <img src={formik.values?.form7[index]?.DrSignatureV} />
                      <h5 style={{ fontSize: "15px" }}>Sign here</h5>
                    </Grid>
                  ) : (
                    <Grid item xs={12}>
                      <SignaturePad
                        canvasProps={{ width: 240, height: 150 }}
                        ref={signPad1}
                        penColor="black"
                        backgroundColor="#f1f1f1"
                        placeholder="sign"
                        onBegin={(e) => onBeginfun(e.isTrusted)}
                      />
                      <Box display={"flex"} gap={"67px"}>
                        <SoftButton
                          onClick={clear1}
                          style={{ marginRight: "5px" }}
                          disabled={signBeginClient}
                        >
                          Clear
                        </SoftButton>
                        <SoftButton
                          disabled={signBeginClient}
                          onClick={() => {
                            formik.setFieldValue(
                              `form7[${index}].DrSignatureV`,
                              signPad1.current.getTrimmedCanvas().toDataURL("image/png")
                            );
                          }}
                        >
                          Save
                        </SoftButton>
                      </Box>
                    </Grid>
                  )}
                </td>
                {/* </div> */}
              </tr>
            </table>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

Form6tab.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default Form6tab;
