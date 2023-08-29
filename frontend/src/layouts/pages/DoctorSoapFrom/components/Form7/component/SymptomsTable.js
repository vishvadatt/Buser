import React from "react";
import { Table, TableBody, TableRow, TableCell, Grid, Paper, TableHead } from "@mui/material";
import FormField from "layouts/pages/Profile/components/FormField";
import PropTypes from "prop-types";

function SymptomsTable({ formik, form }) {
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
  console.log("ffvv", values);

  return (
    <div>
      {/* <ResponsiveDrawer> */}
      <Grid container justify={"center"}>
        <Grid item xs={12} md={10} lg={12} style={{ padding: "8px" }}>
          <Paper style={{ overflowX: "auto" }}>
            <Table style={{ minWidth: "340px" }}>
              <TableHead className="th-symptoms">
                <TableRow>
                  <TableCell classname="TableCell_tc" style={{ width: "200px" }}>
                    {" "}
                  </TableCell>
                  <TableCell classname="TableCell_tc ">Never Had</TableCell>
                  <TableCell classname="TableCell_tc ">100% Healed</TableCell>
                  <TableCell classname="TableCell_tc ">Still Have</TableCell>
                  <TableCell classname="TableCell_tc ">Improved A Little</TableCell>
                  <TableCell classname="TableCell_tc ">Improved Medium</TableCell>
                  <TableCell classname="TableCell_tc"> Improved A Lot</TableCell>
                  <TableCell classname="TableCell_tc">Not Improving</TableCell>
                  <TableCell classname="TableCell_tc">Getting Worse </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* 1st row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>
                    &rdquo;Clunk&rdquo; sound with neck movements{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={clunkSoundwithNeckNever.type}
                      name={clunkSoundwithNeckNever.name}
                      value={clunkSoundwithNeckNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={clunkSoundwithNeckHealed.type}
                      name={clunkSoundwithNeckHealed.name}
                      value={clunkSoundwithNeckHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={clunkSoundwithNeckStillHave.type}
                      name={clunkSoundwithNeckStillHave.name}
                      value={clunkSoundwithNeckStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={clunkSoundwithNeckImprovedLittle.type}
                      name={clunkSoundwithNeckImprovedLittle.name}
                      value={clunkSoundwithNeckImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={clunkSoundwithNeckImprovedMedium.type}
                      name={clunkSoundwithNeckImprovedMedium.name}
                      value={clunkSoundwithNeckImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={clunkSoundwithNeckImprovedLot.type}
                      name={clunkSoundwithNeckImprovedLot.name}
                      value={clunkSoundwithNeckImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={clunkSoundwithNeckNotImproving.type}
                      name={clunkSoundwithNeckNotImproving.name}
                      value={clunkSoundwithNeckNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={clunkSoundwithNeckGettingWorse.type}
                      name={clunkSoundwithNeckGettingWorse.name}
                      value={clunkSoundwithNeckGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 2nd row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Neck pain </TableCell>
                  <TableCell>
                    <FormField
                      type={neckPainNever.type}
                      name={neckPainNever.name}
                      value={neckPainNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={neckPainHealed.type}
                      name={neckPainHealed.name}
                      value={neckPainHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={neckPainStillHave.type}
                      name={neckPainStillHave.name}
                      value={neckPainStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={neckPainImprovedLittle.type}
                      name={neckPainImprovedLittle.name}
                      value={neckPainImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={neckPainImprovedMedium.type}
                      name={neckPainImprovedMedium.name}
                      value={neckPainImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={neckPainImprovedLot.type}
                      name={neckPainImprovedLot.name}
                      value={neckPainImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={neckPainNotImproving.type}
                      name={neckPainNotImproving.name}
                      value={neckPainNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={neckPainGettingWorse.type}
                      name={neckPainGettingWorse.name}
                      value={neckPainGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                </TableRow>

                {/* 3rd row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Upper back pain </TableCell>
                  <TableCell>
                    <FormField
                      type={upperBackPainNever.type}
                      name={upperBackPainNever.name}
                      value={upperBackPainNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={upperBackPainHealed.type}
                      name={upperBackPainHealed.name}
                      value={upperBackPainHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={upperBackPainStillHave.type}
                      name={upperBackPainStillHave.name}
                      value={upperBackPainStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={upperBackPainImprovedLittle.type}
                      name={upperBackPainImprovedLittle.name}
                      value={upperBackPainImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={upperBackPainImprovedMedium.type}
                      name={upperBackPainImprovedMedium.name}
                      value={upperBackPainImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={upperBackPainImprovedLot.type}
                      name={upperBackPainImprovedLot.name}
                      value={upperBackPainImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={upperBackPainNotImproving.type}
                      name={upperBackPainNotImproving.name}
                      value={upperBackPainNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={upperBackPainGettingWorse.type}
                      name={upperBackPainGettingWorse.name}
                      value={upperBackPainGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Low back pain </TableCell>
                  <TableCell>
                    <FormField
                      type={lowBackPainNever.type}
                      name={lowBackPainNever.name}
                      value={lowBackPainNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lowBackPainHealed.type}
                      name={lowBackPainHealed.name}
                      value={lowBackPainHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lowBackPainStillHave.type}
                      name={lowBackPainStillHave.name}
                      value={lowBackPainStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lowBackPainImprovedLittle.type}
                      name={lowBackPainImprovedLittle.name}
                      value={lowBackPainImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lowBackPainImprovedMedium.type}
                      name={lowBackPainImprovedMedium.name}
                      value={lowBackPainImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lowBackPainImprovedLot.type}
                      name={lowBackPainImprovedLot.name}
                      value={lowBackPainImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lowBackPainNotImproving.type}
                      name={lowBackPainNotImproving.name}
                      value={lowBackPainNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lowBackPainGettingWorse.type}
                      name={lowBackPainGettingWorse.name}
                      value={lowBackPainGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 5th row  */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Shoulder pain (left)</TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainLeftNever.type}
                      name={shoulderPainLeftNever.name}
                      value={shoulderPainLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainLeftHealed.type}
                      name={shoulderPainLeftHealed.name}
                      value={shoulderPainLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainLeftStillHave.type}
                      name={shoulderPainLeftStillHave.name}
                      value={shoulderPainLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainLeftImprovedLittle.type}
                      name={shoulderPainLeftImprovedLittle.name}
                      value={shoulderPainLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainLeftImprovedMedium.type}
                      name={shoulderPainLeftImprovedMedium.name}
                      value={shoulderPainLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainLeftImprovedLot.type}
                      name={shoulderPainLeftImprovedLot.name}
                      value={shoulderPainLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainLeftNotImproving.type}
                      name={shoulderPainLeftNotImproving.name}
                      value={shoulderPainLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainLeftGettingWorse.type}
                      name={shoulderPainLeftGettingWorse.name}
                      value={shoulderPainLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 6th row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Shoulder pain (right) </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainRightNever.type}
                      name={shoulderPainRightNever.name}
                      value={shoulderPainRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainRightHealed.type}
                      name={shoulderPainRightHealed.name}
                      value={shoulderPainRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainRightStillHave.type}
                      name={shoulderPainRightStillHave.name}
                      value={shoulderPainRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainRightImprovedLittle.type}
                      name={shoulderPainRightImprovedLittle.name}
                      value={shoulderPainRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainRightImprovedMedium.type}
                      name={shoulderPainRightImprovedMedium.name}
                      value={shoulderPainRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainRightImprovedLot.type}
                      name={shoulderPainRightImprovedLot.name}
                      value={shoulderPainRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainRightNotImproving.type}
                      name={shoulderPainRightNotImproving.name}
                      value={shoulderPainRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={shoulderPainRightGettingWorse.type}
                      name={shoulderPainRightGettingWorse.name}
                      value={shoulderPainRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 7th row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Elbow pain (left) </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainLeftNever.type}
                      name={elbowPainLeftNever.name}
                      value={elbowPainLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainLeftHealed.type}
                      name={elbowPainLeftHealed.name}
                      value={elbowPainLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainLeftStillHave.type}
                      name={elbowPainLeftStillHave.name}
                      value={elbowPainLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainLeftImprovedLittle.type}
                      name={elbowPainLeftImprovedLittle.name}
                      value={elbowPainLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainLeftImprovedMedium.type}
                      name={elbowPainLeftImprovedMedium.name}
                      value={elbowPainLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainLeftImprovedLot.type}
                      name={elbowPainLeftImprovedLot.name}
                      value={elbowPainLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainLeftNotImproving.type}
                      name={elbowPainLeftNotImproving.name}
                      value={elbowPainLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainLeftGettingWorse.type}
                      name={elbowPainLeftGettingWorse.name}
                      value={elbowPainLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 8th row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Elbow pain (right) </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainRightNever.type}
                      name={elbowPainRightNever.name}
                      value={elbowPainRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainRightHealed.type}
                      name={elbowPainRightHealed.name}
                      value={elbowPainRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainRightStillHave.type}
                      name={elbowPainRightStillHave.name}
                      value={elbowPainRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainRightImprovedLittle.type}
                      name={elbowPainRightImprovedLittle.name}
                      value={elbowPainRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainRightImprovedMedium.type}
                      name={elbowPainRightImprovedMedium.name}
                      value={elbowPainRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainRightImprovedLot.type}
                      name={elbowPainRightImprovedLot.name}
                      value={elbowPainRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainRightNotImproving.type}
                      name={elbowPainRightNotImproving.name}
                      value={elbowPainRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={elbowPainRightGettingWorse.type}
                      name={elbowPainRightGettingWorse.name}
                      value={elbowPainRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 9th row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Wrist pain (left)</TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainLeftNever.type}
                      name={wristPainLeftNever.name}
                      value={wristPainLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainLeftHealed.type}
                      name={wristPainLeftHealed.name}
                      value={wristPainLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainLeftStillHave.type}
                      name={wristPainLeftStillHave.name}
                      value={wristPainLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainLeftImprovedLittle.type}
                      name={wristPainLeftImprovedLittle.name}
                      value={wristPainLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainLeftImprovedMedium.type}
                      name={wristPainLeftImprovedMedium.name}
                      value={wristPainLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainLeftImprovedLot.type}
                      name={wristPainLeftImprovedLot.name}
                      value={wristPainLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainLeftNotImproving.type}
                      name={wristPainLeftNotImproving.name}
                      value={wristPainLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainLeftGettingWorse.type}
                      name={wristPainLeftGettingWorse.name}
                      value={wristPainLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 10th row     */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Wrist pain (right) </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainRightNever.type}
                      name={wristPainRightNever.name}
                      value={wristPainRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainRightHealed.type}
                      name={wristPainRightHealed.name}
                      value={wristPainRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainRightStillHave.type}
                      name={wristPainRightStillHave.name}
                      value={wristPainRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainRightImprovedLittle.type}
                      name={wristPainRightImprovedLittle.name}
                      value={wristPainRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainRightImprovedMedium.type}
                      name={wristPainRightImprovedMedium.name}
                      value={wristPainRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainRightImprovedLot.type}
                      name={wristPainRightImprovedLot.name}
                      value={wristPainRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainRightNotImproving.type}
                      name={wristPainRightNotImproving.name}
                      value={wristPainRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={wristPainRightGettingWorse.type}
                      name={wristPainRightGettingWorse.name}
                      value={wristPainRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 11th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Hand/finger pain (left) </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainLeftNever.type}
                      name={handfingerPainLeftNever.name}
                      value={handfingerPainLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainLeftHealed.type}
                      name={handfingerPainLeftHealed.name}
                      value={handfingerPainLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainLeftStillHave.type}
                      name={handfingerPainLeftStillHave.name}
                      value={handfingerPainLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainLeftImprovedLittle.type}
                      name={handfingerPainLeftImprovedLittle.name}
                      value={handfingerPainLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainLeftImprovedMedium.type}
                      name={handfingerPainLeftImprovedMedium.name}
                      value={handfingerPainLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainLeftImprovedLot.type}
                      name={handfingerPainLeftImprovedLot.name}
                      value={handfingerPainLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainLeftNotImproving.type}
                      name={handfingerPainLeftNotImproving.name}
                      value={handfingerPainLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainLeftGettingWorse.type}
                      name={handfingerPainLeftGettingWorse.name}
                      value={handfingerPainLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 12th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Hand/finger pain (right)</TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainRightNever.type}
                      name={handfingerPainRightNever.name}
                      value={handfingerPainRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainRightHealed.type}
                      name={handfingerPainRightHealed.name}
                      value={handfingerPainRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainRightStillHave.type}
                      name={handfingerPainRightStillHave.name}
                      value={handfingerPainRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainRightImprovedLittle.type}
                      name={handfingerPainRightImprovedLittle.name}
                      value={handfingerPainRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainRightImprovedMedium.type}
                      name={handfingerPainRightImprovedMedium.name}
                      value={handfingerPainRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainRightImprovedLot.type}
                      name={handfingerPainRightImprovedLot.name}
                      value={handfingerPainRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainRightNotImproving.type}
                      name={handfingerPainRightNotImproving.name}
                      value={handfingerPainRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={handfingerPainRightGettingWorse.type}
                      name={handfingerPainRightGettingWorse.name}
                      value={handfingerPainRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 13th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Hip pain (left) </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainLeftNever.type}
                      name={hipPainLeftNever.name}
                      value={hipPainLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainLeftHealed.type}
                      name={hipPainLeftHealed.name}
                      value={hipPainLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainLeftStillHave.type}
                      name={hipPainLeftStillHave.name}
                      value={hipPainLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainLeftImprovedLittle.type}
                      name={hipPainLeftImprovedLittle.name}
                      value={hipPainLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainLeftImprovedMedium.type}
                      name={hipPainLeftImprovedMedium.name}
                      value={hipPainLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainLeftImprovedLot.type}
                      name={hipPainLeftImprovedLot.name}
                      value={hipPainLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainLeftNotImproving.type}
                      name={hipPainLeftNotImproving.name}
                      value={hipPainLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainLeftGettingWorse.type}
                      name={hipPainLeftGettingWorse.name}
                      value={hipPainLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 14th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Hip pain (right)</TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainRightNever.type}
                      name={hipPainRightNever.name}
                      value={hipPainRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainRightHealed.type}
                      name={hipPainRightHealed.name}
                      value={hipPainRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainRightStillHave.type}
                      name={hipPainRightStillHave.name}
                      value={hipPainRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainRightImprovedLittle.type}
                      name={hipPainRightImprovedLittle.name}
                      value={hipPainRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainRightImprovedMedium.type}
                      name={hipPainRightImprovedMedium.name}
                      value={hipPainRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainRightImprovedLot.type}
                      name={hipPainRightImprovedLot.name}
                      value={hipPainRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainRightNotImproving.type}
                      name={hipPainRightNotImproving.name}
                      value={hipPainRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={hipPainRightGettingWorse.type}
                      name={hipPainRightGettingWorse.name}
                      value={hipPainRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 15th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Knee pain (left)</TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainLeftNever.type}
                      name={kneePainLeftNever.name}
                      value={kneePainLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainLeftHealed.type}
                      name={kneePainLeftHealed.name}
                      value={kneePainLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainLeftStillHave.type}
                      name={kneePainLeftStillHave.name}
                      value={kneePainLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainLeftImprovedLittle.type}
                      name={kneePainLeftImprovedLittle.name}
                      value={kneePainLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainLeftImprovedMedium.type}
                      name={kneePainLeftImprovedMedium.name}
                      value={kneePainLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainLeftImprovedLot.type}
                      name={kneePainLeftImprovedLot.name}
                      value={kneePainLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainLeftNotImproving.type}
                      name={kneePainLeftNotImproving.name}
                      value={kneePainLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainLeftGettingWorse.type}
                      name={kneePainLeftGettingWorse.name}
                      value={kneePainLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 16th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Knee pain (right) </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainRightNever.type}
                      name={kneePainRightNever.name}
                      value={kneePainRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainRightHealed.type}
                      name={kneePainRightHealed.name}
                      value={kneePainRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainRightStillHave.type}
                      name={kneePainRightStillHave.name}
                      value={kneePainRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainRightImprovedLittle.type}
                      name={kneePainRightImprovedLittle.name}
                      value={kneePainRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainRightImprovedMedium.type}
                      name={kneePainRightImprovedMedium.name}
                      value={kneePainRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainRightImprovedLot.type}
                      name={kneePainRightImprovedLot.name}
                      value={kneePainRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainRightNotImproving.type}
                      name={kneePainRightNotImproving.name}
                      value={kneePainRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={kneePainRightGettingWorse.type}
                      name={kneePainRightGettingWorse.name}
                      value={kneePainRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 17th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Ankle/foot pain (left) </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainLeftNever.type}
                      name={ankleFootpainLeftNever.name}
                      value={ankleFootpainLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainLeftHealed.type}
                      name={ankleFootpainLeftHealed.name}
                      value={ankleFootpainLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainLeftStillHave.type}
                      name={ankleFootpainLeftStillHave.name}
                      value={ankleFootpainLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainLeftImprovedLittle.type}
                      name={ankleFootpainLeftImprovedLittle.name}
                      value={ankleFootpainLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainLeftImprovedMedium.type}
                      name={ankleFootpainLeftImprovedMedium.name}
                      value={ankleFootpainLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainLeftImprovedLot.type}
                      name={ankleFootpainLeftImprovedLot.name}
                      value={ankleFootpainLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainLeftNotImproving.type}
                      name={ankleFootpainLeftNotImproving.name}
                      value={ankleFootpainLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainLeftGettingWorse.type}
                      name={ankleFootpainLeftGettingWorse.name}
                      value={ankleFootpainLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 18th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Ankle/foot pain (right) </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainRightNever.type}
                      name={ankleFootpainRightNever.name}
                      value={ankleFootpainRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainRightHealed.type}
                      name={ankleFootpainRightHealed.name}
                      value={ankleFootpainRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainRightStillHave.type}
                      name={ankleFootpainRightStillHave.name}
                      value={ankleFootpainRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainRightImprovedLittle.type}
                      name={ankleFootpainRightImprovedLittle.name}
                      value={ankleFootpainRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainRightImprovedMedium.type}
                      name={ankleFootpainRightImprovedMedium.name}
                      value={ankleFootpainRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainRightImprovedLot.type}
                      name={ankleFootpainRightImprovedLot.name}
                      value={ankleFootpainRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainRightNotImproving.type}
                      name={ankleFootpainRightNotImproving.name}
                      value={ankleFootpainRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={ankleFootpainRightGettingWorse.type}
                      name={ankleFootpainRightGettingWorse.name}
                      value={ankleFootpainRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 19th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Jaw/chewing pain (left) </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainLeftNever.type}
                      name={jawChewingPainLeftNever.name}
                      value={jawChewingPainLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainLeftHealed.type}
                      name={jawChewingPainLeftHealed.name}
                      value={jawChewingPainLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainLeftStillHave.type}
                      name={jawChewingPainLeftStillHave.name}
                      value={jawChewingPainLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainLeftImprovedLittle.type}
                      name={jawChewingPainLeftImprovedLittle.name}
                      value={jawChewingPainLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainLeftImprovedMedium.type}
                      name={jawChewingPainLeftImprovedMedium.name}
                      value={jawChewingPainLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainLeftImprovedLot.type}
                      name={jawChewingPainLeftImprovedLot.name}
                      value={jawChewingPainLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainLeftNotImproving.type}
                      name={jawChewingPainLeftNotImproving.name}
                      value={jawChewingPainLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainLeftGettingWorse.type}
                      name={jawChewingPainLeftGettingWorse.name}
                      value={jawChewingPainLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 20th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Jaw/chewing pain (right)</TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainRightNever.type}
                      name={jawChewingPainRightNever.name}
                      value={jawChewingPainRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainRightHealed.type}
                      name={jawChewingPainRightHealed.name}
                      value={jawChewingPainRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainRightStillHave.type}
                      name={jawChewingPainRightStillHave.name}
                      value={jawChewingPainRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainRightImprovedLittle.type}
                      name={jawChewingPainRightImprovedLittle.name}
                      value={jawChewingPainRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainRightImprovedMedium.type}
                      name={jawChewingPainRightImprovedMedium.name}
                      value={jawChewingPainRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainRightImprovedLot.type}
                      name={jawChewingPainRightImprovedLot.name}
                      value={jawChewingPainRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainRightNotImproving.type}
                      name={jawChewingPainRightNotImproving.name}
                      value={jawChewingPainRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={jawChewingPainRightGettingWorse.type}
                      name={jawChewingPainRightGettingWorse.name}
                      value={jawChewingPainRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 21th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Face pain </TableCell>
                  <TableCell>
                    <FormField
                      type={facePainNever.type}
                      name={facePainNever.name}
                      value={facePainNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={facePainHealed.type}
                      name={facePainHealed.name}
                      value={facePainHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={facePainStillHave.type}
                      name={facePainStillHave.name}
                      value={facePainStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={facePainImprovedLittle.type}
                      name={facePainImprovedLittle.name}
                      value={facePainImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={facePainImprovedMedium.type}
                      name={facePainImprovedMedium.name}
                      value={facePainImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={facePainImprovedLot.type}
                      name={facePainImprovedLot.name}
                      value={facePainImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={facePainNotImproving.type}
                      name={facePainNotImproving.name}
                      value={facePainNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={facePainGettingWorse.type}
                      name={facePainGettingWorse.name}
                      value={facePainGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 22th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Chest/ribs pain </TableCell>
                  <TableCell>
                    <FormField
                      type={chestribsPainNever.type}
                      name={chestribsPainNever.name}
                      value={chestribsPainNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={chestribsPainHealed.type}
                      name={chestribsPainHealed.name}
                      value={chestribsPainHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={chestribsPainStillHave.type}
                      name={chestribsPainStillHave.name}
                      value={chestribsPainStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={chestribsPainImprovedLittle.type}
                      name={chestribsPainImprovedLittle.name}
                      value={chestribsPainImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={chestribsPainImprovedMedium.type}
                      name={chestribsPainImprovedMedium.name}
                      value={chestribsPainImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={chestribsPainImprovedLot.type}
                      name={chestribsPainImprovedLot.name}
                      value={chestribsPainImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={chestribsPainNotImproving.type}
                      name={chestribsPainNotImproving.name}
                      value={chestribsPainNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={chestribsPainGettingWorse.type}
                      name={chestribsPainGettingWorse.name}
                      value={chestribsPainGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 23th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Stomach pain</TableCell>
                  <TableCell>
                    <FormField
                      type={stomachPainNever.type}
                      name={stomachPainNever.name}
                      value={stomachPainNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stomachPainHealed.type}
                      name={stomachPainHealed.name}
                      value={stomachPainHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stomachPainStillHave.type}
                      name={stomachPainStillHave.name}
                      value={stomachPainStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stomachPainImprovedLittle.type}
                      name={stomachPainImprovedLittle.name}
                      value={stomachPainImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stomachPainImprovedMedium.type}
                      name={stomachPainImprovedMedium.name}
                      value={stomachPainImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stomachPainImprovedLot.type}
                      name={stomachPainImprovedLot.name}
                      value={stomachPainImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stomachPainNotImproving.type}
                      name={stomachPainNotImproving.name}
                      value={stomachPainNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stomachPainGettingWorse.type}
                      name={stomachPainGettingWorse.name}
                      value={stomachPainGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 24th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Brnises on </TableCell>
                  <TableCell>
                    <FormField
                      type={BrnisesonNever.type}
                      name={BrnisesonNever.name}
                      value={BrnisesonNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={BrnisesonHealed.type}
                      name={BrnisesonHealed.name}
                      value={BrnisesonHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={BrnisesonStillHave.type}
                      name={BrnisesonStillHave.name}
                      value={BrnisesonStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={BrnisesonImprovedLittle.type}
                      name={BrnisesonImprovedLittle.name}
                      value={BrnisesonImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={BrnisesonImprovedMedium.type}
                      name={BrnisesonImprovedMedium.name}
                      value={BrnisesonImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={BrnisesonImprovedLot.type}
                      name={BrnisesonImprovedLot.name}
                      value={BrnisesonImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={BrnisesonNotImproving.type}
                      name={BrnisesonNotImproving.name}
                      value={BrnisesonNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={BrnisesonGettingWorse.type}
                      name={BrnisesonGettingWorse.name}
                      value={BrnisesonGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 25th row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Cuts/scrapes on</TableCell>
                  <TableCell>
                    <FormField
                      type={cutsscrapesOnNever.type}
                      name={cutsscrapesOnNever.name}
                      value={cutsscrapesOnNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={cutsscrapesOnHealed.type}
                      name={cutsscrapesOnHealed.name}
                      value={cutsscrapesOnHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={cutsscrapesOnStillHave.type}
                      name={cutsscrapesOnStillHave.name}
                      value={cutsscrapesOnStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={cutsscrapesOnImprovedLittle.type}
                      name={cutsscrapesOnImprovedLittle.name}
                      value={cutsscrapesOnImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={cutsscrapesOnImprovedMedium.type}
                      name={cutsscrapesOnImprovedMedium.name}
                      value={cutsscrapesOnImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={cutsscrapesOnImprovedLot.type}
                      name={cutsscrapesOnImprovedLot.name}
                      value={cutsscrapesOnImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={cutsscrapesOnNotImproving.type}
                      name={cutsscrapesOnNotImproving.name}
                      value={cutsscrapesOnNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={cutsscrapesOnGettingWorse.type}
                      name={cutsscrapesOnGettingWorse.name}
                      value={cutsscrapesOnGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 26th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Scars on</TableCell>
                  <TableCell>
                    <FormField
                      type={scarsOnNever.type}
                      name={scarsOnNever.name}
                      value={scarsOnNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={scarsOnHealed.type}
                      name={scarsOnHealed.name}
                      value={scarsOnHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={scarsOnStillHave.type}
                      name={scarsOnStillHave.name}
                      value={scarsOnStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={scarsOnImprovedLittle.type}
                      name={scarsOnImprovedLittle.name}
                      value={scarsOnImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={scarsOnImprovedMedium.type}
                      name={scarsOnImprovedMedium.name}
                      value={scarsOnImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={scarsOnImprovedLot.type}
                      name={scarsOnImprovedLot.name}
                      value={scarsOnImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={scarsOnNotImproving.type}
                      name={scarsOnNotImproving.name}
                      value={scarsOnNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={scarsOnGettingWorse.type}
                      name={scarsOnGettingWorse.name}
                      value={scarsOnGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 27th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Numb/tingling arm/hand (left)</TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandLeftNever.type}
                      name={numbtinglingArmHandLeftNever.name}
                      value={numbtinglingArmHandLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandLeftHealed.type}
                      name={numbtinglingArmHandLeftHealed.name}
                      value={numbtinglingArmHandLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandLeftStillHave.type}
                      name={numbtinglingArmHandLeftStillHave.name}
                      value={numbtinglingArmHandLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandLeftImprovedLittle.type}
                      name={numbtinglingArmHandLeftImprovedLittle.name}
                      value={numbtinglingArmHandLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandLeftImprovedMedium.type}
                      name={numbtinglingArmHandLeftImprovedMedium.name}
                      value={numbtinglingArmHandLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandLeftImprovedLot.type}
                      name={numbtinglingArmHandLeftImprovedLot.name}
                      value={numbtinglingArmHandLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandLeftNotImproving.type}
                      name={numbtinglingArmHandLeftNotImproving.name}
                      value={numbtinglingArmHandLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandLeftGettingWorse.type}
                      name={numbtinglingArmHandLeftGettingWorse.name}
                      value={numbtinglingArmHandLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 28th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Numb/tingling arm/hand (right)</TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandRightNever.type}
                      name={numbtinglingArmHandRightNever.name}
                      value={numbtinglingArmHandRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandRightHealed.type}
                      name={numbtinglingArmHandRightHealed.name}
                      value={numbtinglingArmHandRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandRightStillHave.type}
                      name={numbtinglingArmHandRightStillHave.name}
                      value={numbtinglingArmHandRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandRightImprovedLittle.type}
                      name={numbtinglingArmHandRightImprovedLittle.name}
                      value={numbtinglingArmHandRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandRightImprovedMedium.type}
                      name={numbtinglingArmHandRightImprovedMedium.name}
                      value={numbtinglingArmHandRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandRightImprovedLot.type}
                      name={numbtinglingArmHandRightImprovedLot.name}
                      value={numbtinglingArmHandRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandRightNotImproving.type}
                      name={numbtinglingArmHandRightNotImproving.name}
                      value={numbtinglingArmHandRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingArmHandRightGettingWorse.type}
                      name={numbtinglingArmHandRightGettingWorse.name}
                      value={numbtinglingArmHandRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 29th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Numb/tingling leg/foot (left) </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootLeftNever.type}
                      name={numbtinglingLegFootLeftNever.name}
                      value={numbtinglingLegFootLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootLeftHealed.type}
                      name={numbtinglingLegFootLeftHealed.name}
                      value={numbtinglingLegFootLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootLeftStillHave.type}
                      name={numbtinglingLegFootLeftStillHave.name}
                      value={numbtinglingLegFootLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootLeftImprovedLittle.type}
                      name={numbtinglingLegFootLeftImprovedLittle.name}
                      value={numbtinglingLegFootLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootLeftImprovedMedium.type}
                      name={numbtinglingLegFootLeftImprovedMedium.name}
                      value={numbtinglingLegFootLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootLeftImprovedLot.type}
                      name={numbtinglingLegFootLeftImprovedLot.name}
                      value={numbtinglingLegFootLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootLeftNotImproving.type}
                      name={numbtinglingLegFootLeftNotImproving.name}
                      value={numbtinglingLegFootLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootLeftGettingWorse.type}
                      name={numbtinglingLegFootLeftGettingWorse.name}
                      value={numbtinglingLegFootLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 30th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Numb/tingling leg/foot (right) </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootRightNever.type}
                      name={numbtinglingLegFootRightNever.name}
                      value={numbtinglingLegFootRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootRightHealed.type}
                      name={numbtinglingLegFootRightHealed.name}
                      value={numbtinglingLegFootRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootRightStillHave.type}
                      name={numbtinglingLegFootRightStillHave.name}
                      value={numbtinglingLegFootRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootRightImprovedLittle.type}
                      name={numbtinglingLegFootRightImprovedLittle.name}
                      value={numbtinglingLegFootRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootRightImprovedMedium.type}
                      name={numbtinglingLegFootRightImprovedMedium.name}
                      value={numbtinglingLegFootRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootRightImprovedLot.type}
                      name={numbtinglingLegFootRightImprovedLot.name}
                      value={numbtinglingLegFootRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootRightNotImproving.type}
                      name={numbtinglingLegFootRightNotImproving.name}
                      value={numbtinglingLegFootRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={numbtinglingLegFootRightGettingWorse.type}
                      name={numbtinglingLegFootRightGettingWorse.name}
                      value={numbtinglingLegFootRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 31th row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Weak/clumsy arm/hand (left)</TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandLeftNever.type}
                      name={weakclumsyArmHandLeftNever.name}
                      value={weakclumsyArmHandLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandLeftHealed.type}
                      name={weakclumsyArmHandLeftHealed.name}
                      value={weakclumsyArmHandLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandLeftStillHave.type}
                      name={weakclumsyArmHandLeftStillHave.name}
                      value={weakclumsyArmHandLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandLeftImprovedLittle.type}
                      name={weakclumsyArmHandLeftImprovedLittle.name}
                      value={weakclumsyArmHandLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandLeftImprovedMedium.type}
                      name={weakclumsyArmHandLeftImprovedMedium.name}
                      value={weakclumsyArmHandLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandLeftImprovedLot.type}
                      name={weakclumsyArmHandLeftImprovedLot.name}
                      value={weakclumsyArmHandLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandLeftNotImproving.type}
                      name={weakclumsyArmHandLeftNotImproving.name}
                      value={weakclumsyArmHandLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandLeftGettingWorse.type}
                      name={weakclumsyArmHandLeftGettingWorse.name}
                      value={weakclumsyArmHandLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 32th row */}

                {/* 33 row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Weak/clumsy arm/hand (right)</TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandRightNever.type}
                      name={weakclumsyArmHandRightNever.name}
                      value={weakclumsyArmHandRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandRightHealed.type}
                      name={weakclumsyArmHandRightHealed.name}
                      value={weakclumsyArmHandRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandRightStillHave.type}
                      name={weakclumsyArmHandRightStillHave.name}
                      value={weakclumsyArmHandRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandRightImprovedLittle.type}
                      name={weakclumsyArmHandRightImprovedLittle.name}
                      value={weakclumsyArmHandRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandRightImprovedMedium.type}
                      name={weakclumsyArmHandRightImprovedMedium.name}
                      value={weakclumsyArmHandRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandRightImprovedLot.type}
                      name={weakclumsyArmHandRightImprovedLot.name}
                      value={weakclumsyArmHandRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandRightNotImproving.type}
                      name={weakclumsyArmHandRightNotImproving.name}
                      value={weakclumsyArmHandRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyArmHandRightGettingWorse.type}
                      name={weakclumsyArmHandRightGettingWorse.name}
                      value={weakclumsyArmHandRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 34 row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Weak/clumsy leg/foot (left)</TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootLeftNever.type}
                      name={weakclumsyLegFootLeftNever.name}
                      value={weakclumsyLegFootLeftNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootLeftHealed.type}
                      name={weakclumsyLegFootLeftHealed.name}
                      value={weakclumsyLegFootLeftHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootLeftStillHave.type}
                      name={weakclumsyLegFootLeftStillHave.name}
                      value={weakclumsyLegFootLeftStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootLeftImprovedLittle.type}
                      name={weakclumsyLegFootLeftImprovedLittle.name}
                      value={weakclumsyLegFootLeftImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootLeftImprovedMedium.type}
                      name={weakclumsyLegFootLeftImprovedMedium.name}
                      value={weakclumsyLegFootLeftImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootLeftImprovedLot.type}
                      name={weakclumsyLegFootLeftImprovedLot.name}
                      value={weakclumsyLegFootLeftImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootLeftNotImproving.type}
                      name={weakclumsyLegFootLeftNotImproving.name}
                      value={weakclumsyLegFootLeftNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootLeftGettingWorse.type}
                      name={weakclumsyLegFootLeftGettingWorse.name}
                      value={weakclumsyLegFootLeftGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 35 row */}
                <TableRow>
                  <TableCell style={{ width: "275px" }}>Weak/clumsy leg/foot (right)</TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootRightNever.type}
                      name={weakclumsyLegFootRightNever.name}
                      value={weakclumsyLegFootRightNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootRightHealed.type}
                      name={weakclumsyLegFootRightHealed.name}
                      value={weakclumsyLegFootRightHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootRightStillHave.type}
                      name={weakclumsyLegFootRightStillHave.name}
                      value={weakclumsyLegFootRightStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootRightImprovedLittle.type}
                      name={weakclumsyLegFootRightImprovedLittle.name}
                      value={weakclumsyLegFootRightImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootRightImprovedMedium.type}
                      name={weakclumsyLegFootRightImprovedMedium.name}
                      value={weakclumsyLegFootRightImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootRightImprovedLot.type}
                      name={weakclumsyLegFootRightImprovedLot.name}
                      value={weakclumsyLegFootRightImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootRightNotImproving.type}
                      name={weakclumsyLegFootRightNotImproving.name}
                      value={weakclumsyLegFootRightNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={weakclumsyLegFootRightGettingWorse.type}
                      name={weakclumsyLegFootRightGettingWorse.name}
                      value={weakclumsyLegFootRightGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 36 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Stiffness in joints </TableCell>
                  <TableCell>
                    <FormField
                      type={stiffnessInJointsNever.type}
                      name={stiffnessInJointsNever.name}
                      value={stiffnessInJointsNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stiffnessInJointsHealed.type}
                      name={stiffnessInJointsHealed.name}
                      value={stiffnessInJointsHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stiffnessInJointsStillHave.type}
                      name={stiffnessInJointsStillHave.name}
                      value={stiffnessInJointsStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stiffnessInJointsImprovedLittle.type}
                      name={stiffnessInJointsImprovedLittle.name}
                      value={stiffnessInJointsImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stiffnessInJointsImprovedMedium.type}
                      name={stiffnessInJointsImprovedMedium.name}
                      value={stiffnessInJointsImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stiffnessInJointsImprovedLot.type}
                      name={stiffnessInJointsImprovedLot.name}
                      value={stiffnessInJointsImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stiffnessInJointsNotImproving.type}
                      name={stiffnessInJointsNotImproving.name}
                      value={stiffnessInJointsNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={stiffnessInJointsGettingWorse.type}
                      name={stiffnessInJointsGettingWorse.name}
                      value={stiffnessInJointsGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 37 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Headaches</TableCell>
                  <TableCell>
                    <FormField
                      type={headachesNever.type}
                      name={headachesNever.name}
                      value={headachesNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={headachesHealed.type}
                      name={headachesHealed.name}
                      value={headachesHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={headachesStillHave.type}
                      name={headachesStillHave.name}
                      value={headachesStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={headachesImprovedLittle.type}
                      name={headachesImprovedLittle.name}
                      value={headachesImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={headachesImprovedMedium.type}
                      name={headachesImprovedMedium.name}
                      value={headachesImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={headachesImprovedLot.type}
                      name={headachesImprovedLot.name}
                      value={headachesImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={headachesNotImproving.type}
                      name={headachesNotImproving.name}
                      value={headachesNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={headachesGettingWorse.type}
                      name={headachesGettingWorse.name}
                      value={headachesGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 38 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Sore or spasm in muscles</TableCell>
                  <TableCell>
                    <FormField
                      type={SoreorSpasmInMusclesNever.type}
                      name={SoreorSpasmInMusclesNever.name}
                      value={SoreorSpasmInMusclesNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={SoreorSpasmInMusclesHealed.type}
                      name={SoreorSpasmInMusclesHealed.name}
                      value={SoreorSpasmInMusclesHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={SoreorSpasmInMusclesStillHave.type}
                      name={SoreorSpasmInMusclesStillHave.name}
                      value={SoreorSpasmInMusclesStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={SoreorSpasmInMusclesImprovedLittle.type}
                      name={SoreorSpasmInMusclesImprovedLittle.name}
                      value={SoreorSpasmInMusclesImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={SoreorSpasmInMusclesImprovedMedium.type}
                      name={SoreorSpasmInMusclesImprovedMedium.name}
                      value={SoreorSpasmInMusclesImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={SoreorSpasmInMusclesImprovedLot.type}
                      name={SoreorSpasmInMusclesImprovedLot.name}
                      value={SoreorSpasmInMusclesImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={SoreorSpasmInMusclesNotImproving.type}
                      name={SoreorSpasmInMusclesNotImproving.name}
                      value={SoreorSpasmInMusclesNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={SoreorSpasmInMusclesGettingWorse.type}
                      name={SoreorSpasmInMusclesGettingWorse.name}
                      value={SoreorSpasmInMusclesGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 39 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Dizzy/lightheaded/woozy</TableCell>
                  <TableCell>
                    <FormField
                      type={lightheadedNever.type}
                      name={lightheadedNever.name}
                      value={lightheadedNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lightheadedHealed.type}
                      name={lightheadedHealed.name}
                      value={lightheadedHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lightheadedStillHave.type}
                      name={lightheadedStillHave.name}
                      value={lightheadedStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lightheadedImprovedLittle.type}
                      name={lightheadedImprovedLittle.name}
                      value={lightheadedImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lightheadedImprovedMedium.type}
                      name={lightheadedImprovedMedium.name}
                      value={lightheadedImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lightheadedImprovedLot.type}
                      name={lightheadedImprovedLot.name}
                      value={lightheadedImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lightheadedNotImproving.type}
                      name={lightheadedNotImproving.name}
                      value={lightheadedNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lightheadedGettingWorse.type}
                      name={lightheadedGettingWorse.name}
                      value={lightheadedGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 40 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Vision changes</TableCell>
                  <TableCell>
                    <FormField
                      type={visionChangesNever.type}
                      name={visionChangesNever.name}
                      value={visionChangesNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={visionChangesHealed.type}
                      name={visionChangesHealed.name}
                      value={visionChangesHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={visionChangesStillHave.type}
                      name={visionChangesStillHave.name}
                      value={visionChangesStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={visionChangesImprovedLittle.type}
                      name={visionChangesImprovedLittle.name}
                      value={visionChangesImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={visionChangesImprovedMedium.type}
                      name={visionChangesImprovedMedium.name}
                      value={visionChangesImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={visionChangesImprovedLot.type}
                      name={visionChangesImprovedLot.name}
                      value={visionChangesImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={visionChangesNotImproving.type}
                      name={visionChangesNotImproving.name}
                      value={visionChangesNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={visionChangesGettingWorse.type}
                      name={visionChangesGettingWorse.name}
                      value={visionChangesGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>
                {/* 41 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Sleep changes </TableCell>
                  <TableCell>
                    <FormField
                      type={sleepChangesNever.type}
                      name={sleepChangesNever.name}
                      value={sleepChangesNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={sleepChangesHealed.type}
                      name={sleepChangesHealed.name}
                      value={sleepChangesHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={sleepChangesStillHave.type}
                      name={sleepChangesStillHave.name}
                      value={sleepChangesStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={sleepChangesImprovedLittle.type}
                      name={sleepChangesImprovedLittle.name}
                      value={sleepChangesImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={sleepChangesImprovedMedium.type}
                      name={sleepChangesImprovedMedium.name}
                      value={sleepChangesImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={sleepChangesImprovedLot.type}
                      name={sleepChangesImprovedLot.name}
                      value={sleepChangesImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={sleepChangesNotImproving.type}
                      name={sleepChangesNotImproving.name}
                      value={sleepChangesNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={sleepChangesGettingWorse.type}
                      name={sleepChangesGettingWorse.name}
                      value={sleepChangesGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 42 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Radiating pain </TableCell>
                  <TableCell>
                    <FormField
                      type={radiatingPainNever.type}
                      name={radiatingPainNever.name}
                      value={radiatingPainNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={radiatingPainHealed.type}
                      name={radiatingPainHealed.name}
                      value={radiatingPainHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={radiatingPainStillHave.type}
                      name={radiatingPainStillHave.name}
                      value={radiatingPainStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={radiatingPainImprovedLittle.type}
                      name={radiatingPainImprovedLittle.name}
                      value={radiatingPainImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={radiatingPainImprovedMedium.type}
                      name={radiatingPainImprovedMedium.name}
                      value={radiatingPainImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={radiatingPainImprovedLot.type}
                      name={radiatingPainImprovedLot.name}
                      value={radiatingPainImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={radiatingPainNotImproving.type}
                      name={radiatingPainNotImproving.name}
                      value={radiatingPainNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={radiatingPainGettingWorse.type}
                      name={radiatingPainGettingWorse.name}
                      value={radiatingPainGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 43 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Anxiety/nervousness</TableCell>
                  <TableCell>
                    <FormField
                      type={anxietyNever.type}
                      name={anxietyNever.name}
                      value={anxietyNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={anxietyHealed.type}
                      name={anxietyHealed.name}
                      value={anxietyHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={anxietyStillHave.type}
                      name={anxietyStillHave.name}
                      value={anxietyStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={anxietyImprovedLittle.type}
                      name={anxietyImprovedLittle.name}
                      value={anxietyImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={anxietyImprovedMedium.type}
                      name={anxietyImprovedMedium.name}
                      value={anxietyImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={anxietyImprovedLot.type}
                      name={anxietyImprovedLot.name}
                      value={anxietyImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={anxietyNotImproving.type}
                      name={anxietyNotImproving.name}
                      value={anxietyNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={anxietyGettingWorse.type}
                      name={anxietyGettingWorse.name}
                      value={anxietyGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 44 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>Lack of enthusiasm for life</TableCell>
                  <TableCell>
                    <FormField
                      type={lackOfEnthusiasmNever.type}
                      name={lackOfEnthusiasmNever.name}
                      value={lackOfEnthusiasmNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lackOfEnthusiasmHealed.type}
                      name={lackOfEnthusiasmHealed.name}
                      value={lackOfEnthusiasmHealedV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lackOfEnthusiasmStillHave.type}
                      name={lackOfEnthusiasmStillHave.name}
                      value={lackOfEnthusiasmStillHaveV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lackOfEnthusiasmImprovedLittle.type}
                      name={lackOfEnthusiasmImprovedLittle.name}
                      value={lackOfEnthusiasmImprovedLittleV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lackOfEnthusiasmImprovedMedium.type}
                      name={lackOfEnthusiasmImprovedMedium.name}
                      value={lackOfEnthusiasmImprovedMediumV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lackOfEnthusiasmImprovedLot.type}
                      name={lackOfEnthusiasmImprovedLot.name}
                      value={lackOfEnthusiasmImprovedLotV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lackOfEnthusiasmNotImproving.type}
                      name={lackOfEnthusiasmNotImproving.name}
                      value={lackOfEnthusiasmNotImprovingV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <FormField
                      type={lackOfEnthusiasmGettingWorse.type}
                      name={lackOfEnthusiasmGettingWorse.name}
                      value={lackOfEnthusiasmGettingWorseV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />{" "}
                  </TableCell>
                </TableRow>

                {/* 45 row */}

                <TableRow>
                  <TableCell style={{ width: "275px" }}>I take these medications </TableCell>
                  <TableCell colSpan={8}>
                    <FormField
                      type={medicationsNever.type}
                      name={medicationsNever.name}
                      value={medicationsNeverV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    // style={{width:"600px"}}
                    />
                  </TableCell>

                  {/*  <TableCell>
                     <FormField
                        type={medicationsHealed.type}
                        name={medicationsHealed.name}
                        value={medicationsHealedV}                        
                        onChange={formik.handleChange}
                        className='symtomsInput therapiCss1'              

                    />
                    </TableCell>
                    <TableCell>
                     <FormField
                        type={medicationsStillHave.type}
                        name={medicationsStillHave.name}
                        value={medicationsStillHaveV}                        
                        onChange={formik.handleChange}
                        className='symtomsInput therapiCss1'              

                    />                    
                    </TableCell>
                    <TableCell>
                     <FormField
                        type={medicationsImprovedLittle.type}
                        name={medicationsImprovedLittle.name}
                        value={medicationsImprovedLittleV}                        
                        onChange={formik.handleChange}
                        className='symtomsInput therapiCss1'              

                    />                    </TableCell>
                    <TableCell>
                     <FormField
                        type={medicationsImprovedMedium.type}
                        name={medicationsImprovedMedium.name}
                        value={medicationsImprovedMediumV}                        
                        onChange={formik.handleChange}
                        className='symtomsInput therapiCss1'              

                    />                    </TableCell>
                    <TableCell>
                     <FormField
                        type={medicationsImprovedLot.type}
                        name={medicationsImprovedLot.name}
                        value={medicationsImprovedLotV}                        
                        onChange={formik.handleChange}
                        className='symtomsInput therapiCss1'              

                    />                    </TableCell>
                    <TableCell>
                     <FormField
                        type={medicationsNotImproving.type}
                        name={medicationsNotImproving.name}
                        value={medicationsNotImprovingV}                        
                        onChange={formik.handleChange}
                        className='symtomsInput therapiCss1'              

                    />                    </TableCell>
                    <TableCell>
                     <FormField
                        type={medicationsGettingWorse.type}
                        name={medicationsGettingWorse.name}
                        value={medicationsGettingWorseV}                        
                        onChange={formik.handleChange}
                        className='symtomsInput therapiCss1'              

                    />                    </TableCell> */}
                </TableRow>

                <TableRow>
                  {/* <div className='drspan1-css'> */}
                  {/* <div className='patient-sign'>Patient Signature </div> */}
                  <TableCell rowSpan={2} style={{ width: "275px" }}>
                    Patient Signature{" "}
                  </TableCell>
                  <TableCell rowSpan={2} colSpan={3}>
                    <FormField
                      type={PatientSignature.type}
                      name={PatientSignature.name}
                      value={PatientSignatureV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>

                  {/* </div> */}
                  {/* <div className='drspan2-css'> */}
                  <TableCell rowSpan={2} colSpan={2} style={{ width: "275px" }}>
                    Dr. Signature{" "}
                  </TableCell>

                  <TableCell rowSpan={2} colSpan={3}>
                    <FormField
                      type={DrSignature.type}
                      name={DrSignature.name}
                      value={DrSignatureV}
                      onChange={formik.handleChange}
                      className="symtomsInput therapiCss1"
                    />
                  </TableCell>
                  {/* </div> */}
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
      {/* </ResponsiveDrawer> */}
    </div>
  );
}

SymptomsTable.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default SymptomsTable;
