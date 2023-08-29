import { Checkbox, FormControlLabel } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftSelect from "components/SoftSelect";
// import React from "react";
import { Grid } from "@mui/material";

import PropTypes from "prop-types";
// import FormField from "../../FormField";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clientIntakeFormGet } from "store/actions/actions";
import { getDoctorShopFormDataAction } from "store/actions/actions";

const Region = ({ form, stepIndex }) => {
  const dispatch = useDispatch();

  const soappatientId = useSelector((state) => state.auth.patientSoapData.patientId);
  const UserId = useSelector((state) => state.auth.auth._id);
  const token = useSelector((state) => state.auth.auth.idToken);
  // const clientIntakeformDetails = useSelector((state) => state.auth.clientIntakeForm?.page15);
  const clientIntakeformDetails16 = useSelector((state) => state.auth.clientIntakeForm?.page16);
  // const clientIntakeformDetails17 = useSelector((state) => state.auth.clientIntakeForm?.page17);
  const clientIntakeformDetails17 = useSelector((state) => state.auth.doctorShopForm?.page10);
  const clientIntakeformDetails = useSelector((state) => state.auth.doctorShopForm?.page10);
  const patientSoapFormDetail = useSelector((state) => state?.auth?.patientSoapFormDetail);
  const selectedPatientId = useSelector((state) => state.auth.doctorShopForm?.patientId);

  useEffect(() => {
    let patientId = selectedPatientId ? selectedPatientId : soappatientId;

    if (patientSoapFormDetail.shouldShowPatientSoapFormDetail) {
      patientId = patientSoapFormDetail.patientId;
    }
    dispatch(
      getDoctorShopFormDataAction({
        patientId: patientId,
        /* practitionerId: UserId, */ token: token,
      })
    );
  }, []);

  console.log("vvii", clientIntakeformDetails17);
  const cat1 = clientIntakeformDetails?.restraint;
  const cat2 = clientIntakeformDetails?.emotionalinstability;
  const cat3 = clientIntakeformDetails?.difficultyinPlanning;
  const cat4 = clientIntakeformDetails?.difficultyinDecision;
  const cat5 = clientIntakeformDetails?.lackMotivation;
  const cat6 = clientIntakeformDetails?.difficultyinSound;
  const catcc = clientIntakeformDetails?.Constantlyevents;

  const cat7 = clientIntakeformDetails?.difficultyinTask;
  const cat8 = clientIntakeformDetails?.depressionEp;
  const cat9 = clientIntakeformDetails?.mentalFatigue;
  const cat10 = clientIntakeformDetails?.decreaseInAttention;
  const cat11 = clientIntakeformDetails?.difficultyInFocus;
  const cat12 = clientIntakeformDetails?.difficultyInCreativity;
  const cat13 = clientIntakeformDetails?.difficultyInArtAppreciation;
  const cat14 = clientIntakeformDetails?.difficultyInlettingGo;
  const cat15 = clientIntakeformDetails?.difficultyInAnalytical;
  const cat16 = clientIntakeformDetails?.difficultyInMath;
  const cat17 = clientIntakeformDetails?.difficultyInIdeas;
  const cat18 = clientIntakeformDetails?.movement;
  const cat19 = clientIntakeformDetails?.armLegHeaviness;
  const cat20 = clientIntakeformDetails?.IncMuscleTightness;
  const cat21 = clientIntakeformDetails?.muscleEndurance;
  const cat22 = clientIntakeformDetails?.muscleFunction;
  const cat23 = clientIntakeformDetails?.diffInMuscleTightness;
  const cat24 = clientIntakeformDetails?.difficultyinWords;
  const cat25 = clientIntakeformDetails?.difficultyInSpeak;
  const cat26 = clientIntakeformDetails?.changeSpeakingFluency;
  const cat27 = clientIntakeformDetails?.PositionLimbs;
  const cat28 = clientIntakeformDetails?.spatialAwarness;
  const cat29 = clientIntakeformDetails?.bumpingBody;
  const cat30 = clientIntakeformDetails?.ReoccurringInjury;
  const cat31 = clientIntakeformDetails?.Hypersensitivities;

  const cat32 = clientIntakeformDetails16?.confusion;
  const cat33 = clientIntakeformDetails16?.mathcalculations;
  const cat34 = clientIntakeformDetails16?.findingwords;
  const cat35 = clientIntakeformDetails16?.writingwords;
  const cat36 = clientIntakeformDetails16?.recognizingsymbols;
  const cat37 = clientIntakeformDetails16?.simpledrawings;
  const cat38 = clientIntakeformDetails16?.interpretingmaps;
  const cat39 = clientIntakeformDetails16?.hearing;
  const cat40 = clientIntakeformDetails16?.scatternoise;
  const cat41 = clientIntakeformDetails16?.pronunciation;
  const cat42 = clientIntakeformDetails16?.saying;
  const cat43 = clientIntakeformDetails16?.sound;
  const cat44 = clientIntakeformDetails16?.predictablerhythmic;
  const cat45 = clientIntakeformDetails16?.nonpredictablerhythmic;
  const cat46 = clientIntakeformDetails16?.Noticeable;
  const cat47 = clientIntakeformDetails16?.comprehending;
  const cat48 = clientIntakeformDetails16?.emotions;
  const cat49 = clientIntakeformDetails16?.Memorylessefficient;
  const cat50 = clientIntakeformDetails16?.impactsdailyactivities;
  const cat51 = clientIntakeformDetails16?.Confusionaboutdates;
  const cat52 = clientIntakeformDetails16?.Difficultyrememberingevents;
  const cat53 = clientIntakeformDetails16?.Misplacementofthings;
  const cat54 = clientIntakeformDetails16?.addresses;
  const cat55 = clientIntakeformDetails16?.visualmemory;
  const cat56 = clientIntakeformDetails16?.Alwaysforgetting;
  const cat57 = clientIntakeformDetails16?.rememberingfaces;
  const cat58 = clientIntakeformDetails16?.Difficultyrememberingnames;
  const cat59 = clientIntakeformDetails16?.Difficultywithrememberingwords;
  const cat60 = clientIntakeformDetails16?.Difficultyrememberingnumbers;
  const cat61 = clientIntakeformDetails16?.Difficultyrememberingtostay;
  const cat62 = clientIntakeformDetails16?.Difficultyindiscriminating;
  const cat63 = clientIntakeformDetails16?.Dullnessofcolors;
  const cat64 = clientIntakeformDetails16?.Difficultycoordinatingvisualinputs;
  const cat65 = clientIntakeformDetails16?.Floaterorhalos;

  const cat67 = clientIntakeformDetails17?.Difficultywithbalance;
  const cat68 = clientIntakeformDetails17?.holdthehandrail;
  const cat69 = clientIntakeformDetails17?.Feelingunsteady;
  const cat70 = clientIntakeformDetails17?.Pronesstosway;
  const cat71 = clientIntakeformDetails17?.clumsinessinhands;
  const cat72 = clientIntakeformDetails17?.clumsinessinfeet;
  const cat73 = clientIntakeformDetails17?.slighthandshake;
  const cat74 = clientIntakeformDetails17?.Episodesofdizziness;
  const cat75 = clientIntakeformDetails17?.Backmusclestire;
  const cat76 = clientIntakeformDetails17?.Chronicneck;
  const cat77 = clientIntakeformDetails17?.Nauseaval;
  const cat78 = clientIntakeformDetails17?.Feelingofdisorientation;
  const cat79 = clientIntakeformDetails17?.Crowdedplaces;
  const cat80 = clientIntakeformDetails17?.Slownessinmovements;
  const cat81 = clientIntakeformDetails17?.Stiffnessinyourmuscles;
  const cat82 = clientIntakeformDetails17?.Crampingofhands;
  const cat83 = clientIntakeformDetails17?.stoopedposture;
  const cat84 = clientIntakeformDetails17?.Voicehasbecomesofter;
  const cat85 = clientIntakeformDetails17?.Facialexpressionchanged;
  const cat86 = clientIntakeformDetails17?.Uncontrollablemusclemovements;
  const cat87 = clientIntakeformDetails17?.Intenseneedtoclear;
  const cat88 = clientIntakeformDetails17?.Obsessivecompulsivetendencies;
  const cat89 = clientIntakeformDetails17?.Constantnervousness;
  const cat90 = clientIntakeformDetails17?.Drymouthoreyes;
  const cat91 = clientIntakeformDetails17?.Difficultyswallowing;
  const cat92 = clientIntakeformDetails17?.tendencyforconstipation;
  const cat93 = clientIntakeformDetails17?.Chronicdigestivecomplaints;
  const cat94 = clientIntakeformDetails17?.bladderincontinenceresulting;
  const cat95 = clientIntakeformDetails17?.Tendencyforanxiety;
  const cat96 = clientIntakeformDetails17?.Easilystartled;
  const cat97 = clientIntakeformDetails17?.Difficultyrelaxing;
  const cat98 = clientIntakeformDetails17?.Sensitivetobright;
  const cat99 = clientIntakeformDetails17?.Episodesofracingheart;
  const cat100 = clientIntakeformDetails17?.Difficultysleeping;

  const check1 = cat1?.filter(
    (item) =>
      item.restraint0check === true ||
      item.restraint1check === true ||
      item.restraint2check === true ||
      item.restraint3check === true ||
      item.restraint4check === true
  );
  const check2 = cat2?.filter(
    (item) =>
      item.emotionalinstability0check === true ||
      item.emotionalinstability1check === true ||
      item.emotionalinstability2check === true ||
      item.emotionalinstability3check === true ||
      item.emotionalinstability4check === true
  );
  const check3 = cat3?.filter(
    (item) =>
      item.difficultyinPlanning0check === true ||
      item.difficultyinPlanning1check === true ||
      item.difficultyinPlanning2check === true ||
      item.difficultyinPlanning3check === true ||
      item.difficultyinPlanning4check === true
  );
  const check4 = cat4?.filter(
    (item) =>
      item.difficultyinDecision0check === true ||
      item.difficultyinDecision1check === true ||
      item.difficultyinDecision2check === true ||
      item.difficultyinDecision3check === true ||
      item.difficultyinDecision4check === true
  );
  const check5 = cat5?.filter(
    (item) =>
      item.lackMotivation0check === true ||
      item.lackMotivation1check === true ||
      item.lackMotivation2check === true ||
      item.lackMotivation3check === true ||
      item.lackMotivation4check === true
  );
  const check6 = cat6?.filter(
    (item) =>
      item.difficultyinSound0check === true ||
      item.difficultyinSound1check === true ||
      item.difficultyinSound2check === true ||
      item.difficultyinSound3check === true ||
      item.difficultyinSound4check === true
  );
  const checkcc = catcc?.filter(
    (item) =>
      item.Constantlyevents0Check === true ||
      item.Constantlyevents1Check === true ||
      item.Constantlyevents2Check === true ||
      item.Constantlyevents3Check === true ||
      item.Constantlyevents4Check === true
  );

  const check7 = cat7?.filter(
    (item) =>
      item.difficultyinTask0check === true ||
      item.difficultyinTask1check === true ||
      item.difficultyinTask2check === true ||
      item.difficultyinTask3check === true ||
      item.difficultyinTask4check === true
  );
  const check8 = cat8?.filter(
    (item) =>
      item.depressionEp0check === true ||
      item.depressionEp1check === true ||
      item.depressionEp2check === true ||
      item.depressionEp3check === true ||
      item.depressionEp4check === true
  );
  const check9 = cat9?.filter(
    (item) =>
      item.mentalFatigue0check === true ||
      item.mentalFatigue1check === true ||
      item.mentalFatigue2check === true ||
      item.mentalFatigue3check === true ||
      item.mentalFatigue4check === true
  );
  const check10 = cat10?.filter(
    (item) =>
      item.decreaseInAttention0check === true ||
      item.decreaseInAttention1check === true ||
      item.decreaseInAttention2check === true ||
      item.decreaseInAttention3check === true ||
      item.decreaseInAttention4check === true
  );
  const check11 = cat11?.filter(
    (item) =>
      item.difficultyInFocus0check === true ||
      item.difficultyInFocus1check === true ||
      item.difficultyInFocus2check === true ||
      item.difficultyInFocus3check === true ||
      item.difficultyInFocus4check === true
  );
  const check12 = cat12?.filter(
    (item) =>
      item.difficultyInCreativity0check === true ||
      item.difficultyInCreativity1check === true ||
      item.difficultyInCreativity2check === true ||
      item.difficultyInCreativity3check === true ||
      item.difficultyInCreativity4check === true
  );
  const check13 = cat13?.filter(
    (item) =>
      item.difficultyInArtAppreciation0check === true ||
      item.difficultyInArtAppreciation1check === true ||
      item.difficultyInArtAppreciation2check === true ||
      item.difficultyInArtAppreciation3check === true ||
      item.difficultyInArtAppreciation4check === true
  );
  const check14 = cat14?.filter(
    (item) =>
      item.difficultyInlettingGo0check === true ||
      item.difficultyInlettingGo1check === true ||
      item.difficultyInlettingGo2check === true ||
      item.difficultyInlettingGo3check === true ||
      item.difficultyInlettingGo4check === true
  );
  const check15 = cat15?.filter(
    (item) =>
      item.difficultyInAnalytical0check === true ||
      item.difficultyInAnalytical1check === true ||
      item.difficultyInAnalytical2check === true ||
      item.difficultyInAnalytical3check === true ||
      item.difficultyInAnalytical4check === true
  );
  const check16 = cat16?.filter(
    (item) =>
      item.difficultyInMath0check === true ||
      item.difficultyInMath1check === true ||
      item.difficultyInMath2check === true ||
      item.difficultyInMath3check === true ||
      item.difficultyInMath4check === true
  );
  const check17 = cat17?.filter(
    (item) =>
      item.difficultyInIdeas0check === true ||
      item.difficultyInIdeas1check === true ||
      item.difficultyInIdeas2check === true ||
      item.difficultyInIdeas3check === true ||
      item.difficultyInIdeas4check === true
  );
  const check18 = cat18?.filter(
    (item) =>
      item.movement0check === true ||
      item.movement1check === true ||
      item.movement2check === true ||
      item.movement3check === true ||
      item.movement4check === true
  );
  const check19 = cat19?.filter(
    (item) =>
      item.armLegHeaviness0check === true ||
      item.armLegHeaviness1check === true ||
      item.armLegHeaviness2check === true ||
      item.armLegHeaviness3check === true ||
      item.armLegHeaviness4check === true
  );
  const check20 = cat20?.filter(
    (item) =>
      item.IncMuscleTightness0check === true ||
      item.IncMuscleTightness1check === true ||
      item.IncMuscleTightness2check === true ||
      item.IncMuscleTightness3check === true ||
      item.IncMuscleTightness4check === true
  );
  const check21 = cat21?.filter(
    (item) =>
      item.muscleEndurance0check === true ||
      item.muscleEndurance1check === true ||
      item.muscleEndurance2check === true ||
      item.muscleFunction3check === true ||
      item.muscleFunction4check === true
  );
  const check22 = cat22?.filter(
    (item) =>
      item.muscleFunction0check === true ||
      item.muscleFunction0check === true ||
      item.muscleFunction1check === true ||
      item.restraint3check === true ||
      item.restraint4check === true
  );
  const check23 = cat23?.filter(
    (item) =>
      item.diffInMuscleTightness0check === true ||
      item.diffInMuscleTightness1check === true ||
      item.diffInMuscleTightness2check === true ||
      item.diffInMuscleTightness3check === true ||
      item.diffInMuscleTightness4check === true
  );
  const check24 = cat24?.filter(
    (item) =>
      item.difficultyinWords0check === true ||
      item.difficultyinWords1check === true ||
      item.difficultyinWords2check === true ||
      item.difficultyinWords3check === true ||
      item.difficultyinWords4check === true
  );
  const check25 = cat25?.filter(
    (item) =>
      item.difficultyInSpeak0check === true ||
      item.difficultyInSpeak1check === true ||
      item.difficultyInSpeak2check === true ||
      item.difficultyInSpeak3check === true ||
      item.difficultyInSpeak4check === true
  );
  const check26 = cat26?.filter(
    (item) =>
      item.changeSpeakingFluency0check === true ||
      item.changeSpeakingFluency1check === true ||
      item.changeSpeakingFluency2check === true ||
      item.changeSpeakingFluency3check === true ||
      item.changeSpeakingFluency4check === true
  );
  const check27 = cat27?.filter(
    (item) =>
      item.PositionLimbs0check === true ||
      item.PositionLimbs1check === true ||
      item.PositionLimbs2check === true ||
      item.PositionLimbs3check === true ||
      item.PositionLimbs4check === true
  );
  const check28 = cat28?.filter(
    (item) =>
      item.spatialAwarness0check === true ||
      item.spatialAwarness1check === true ||
      item.spatialAwarness2check === true ||
      item.spatialAwarness3check === true ||
      item.spatialAwarness4check === true
  );
  const check29 = cat29?.filter(
    (item) =>
      item.bumpingBody0check === true ||
      item.bumpingBody1check === true ||
      item.bumpingBody2check === true ||
      item.bumpingBody3check === true ||
      item.bumpingBody4check === true
  );
  const check30 = cat30?.filter(
    (item) =>
      item.ReoccurringInjury0check === true ||
      item.ReoccurringInjury1check === true ||
      item.ReoccurringInjury2check === true ||
      item.ReoccurringInjury3check === true ||
      item.ReoccurringInjury4check === true
  );
  const check31 = cat31?.filter(
    (item) =>
      item.Hypersensitivities0check === true ||
      item.Hypersensitivities1check === true ||
      item.Hypersensitivities2check === true ||
      item.Hypersensitivities3check === true ||
      item.Hypersensitivities4check === true
  );

  const check32 = cat32?.filter(
    (item) =>
      item.confusion0check === true ||
      item.confusion1check === true ||
      item.confusion2check === true ||
      item.confusion3check === true ||
      item.confusion4check === true
  );
  const check33 = cat33?.filter(
    (item) =>
      item.mathcalculations0check === true ||
      item.mathcalculations1check === true ||
      item.mathcalculations2check === true ||
      item.mathcalculations3check === true ||
      item.mathcalculations4check === true
  );
  const check34 = cat34?.filter(
    (item) =>
      item.findingwords0check === true ||
      item.findingwords1check === true ||
      item.findingwords2check === true ||
      item.findingwords3check === true ||
      item.findingwords4check === true
  );
  const check35 = cat35?.filter(
    (item) =>
      item.writingwords0check === true ||
      item.writingwords1check === true ||
      item.writingwords2check === true ||
      item.writingwords3check === true ||
      item.writingwords4check === true
  );
  const check36 = cat36?.filter(
    (item) =>
      item.recognizingsymbols0check === true ||
      item.recognizingsymbols1check === true ||
      item.recognizingsymbols2check === true ||
      item.recognizingsymbols3check === true ||
      item.recognizingsymbols4check === true
  );
  const check37 = cat37?.filter(
    (item) =>
      item.simpledrawings0check === true ||
      item.simpledrawings1check === true ||
      item.simpledrawings2check === true ||
      item.simpledrawings3check === true ||
      item.simpledrawings4check === true
  );
  const check38 = cat38?.filter(
    (item) =>
      item.interpretingmaps0check === true ||
      item.interpretingmaps1check === true ||
      item.interpretingmaps2check === true ||
      item.interpretingmaps3check === true ||
      item.interpretingmaps4check === true
  );
  const check39 = cat39?.filter(
    (item) =>
      item.hearing0check === true ||
      item.hearing1check === true ||
      item.hearing2check === true ||
      item.hearing3check === true ||
      item.hearing4check === true
  );
  const check40 = cat40?.filter(
    (item) =>
      item.scatternoise0check === true ||
      item.scatternoise1check === true ||
      item.scatternoise2check === true ||
      item.scatternoise3check === true ||
      item.scatternoise4check === true
  );
  const check41 = cat41?.filter(
    (item) =>
      item.pronunciation0check === true ||
      item.pronunciation1check === true ||
      item.pronunciation2check === true ||
      item.pronunciation3check === true ||
      item.pronunciation4check === true
  );
  const check42 = cat42?.filter(
    (item) =>
      item.saying0check === true ||
      item.saying1check === true ||
      item.saying2check === true ||
      item.saying3check === true ||
      item.saying4check === true
  );
  const check43 = cat43?.filter(
    (item) =>
      item.sound0check === true ||
      item.sound1check === true ||
      item.sound2check === true ||
      item.sound3check === true ||
      item.sound4check === true
  );
  const check44 = cat44?.filter(
    (item) =>
      item.predictablerhythmic0check === true ||
      item.predictablerhythmic1check === true ||
      item.predictablerhythmic2check === true ||
      item.predictablerhythmic3check === true ||
      item.predictablerhythmic4check === true
  );
  const check45 = cat45?.filter(
    (item) =>
      item.nonpredictablerhythmic0check === true ||
      item.nonpredictablerhythmic1check === true ||
      item.nonpredictablerhythmic2check === true ||
      item.nonpredictablerhythmic3check === true ||
      item.nonpredictablerhythmic4check === true
  );
  const check46 = cat46?.filter(
    (item) =>
      item.Noticeable0check === true ||
      item.Noticeable1check === true ||
      item.Noticeable2check === true
  );
  const check47 = cat47?.filter(
    (item) =>
      item.comprehending0check === true ||
      item.comprehending1check === true ||
      item.comprehending2check === true ||
      item.comprehending3check === true ||
      item.comprehending4check === true
  );
  const check48 = cat48?.filter(
    (item) =>
      item.emotions0check === true ||
      item.emotions1check === true ||
      item.emotions2check === true ||
      item.emotions3check === true ||
      item.emotions4check === true
  );
  const check49 = cat49?.filter(
    (item) =>
      item.Memorylessefficient0check === true ||
      item.Memorylessefficient1check === true ||
      item.Memorylessefficient2check === true ||
      item.Memorylessefficient3check === true ||
      item.Memorylessefficient4check === true
  );
  const check50 = cat50?.filter(
    (item) =>
      item.impactsdailyactivities0check === true ||
      item.impactsdailyactivities1check === true ||
      item.impactsdailyactivities2check === true ||
      item.impactsdailyactivities3check === true ||
      item.impactsdailyactivities4check === true
  );
  const check51 = cat51?.filter(
    (item) =>
      item.Confusionaboutdates0check === true ||
      item.Confusionaboutdates1check === true ||
      item.Confusionaboutdates2check === true ||
      item.Confusionaboutdates3check === true ||
      item.Confusionaboutdates4check === true
  );
  const check52 = cat52?.filter(
    (item) =>
      item.Difficultyrememberingevents0check === true ||
      item.Difficultyrememberingevents1check === true ||
      item.Difficultyrememberingevents2check === true ||
      item.Difficultyrememberingevents3check === true ||
      item.Difficultyrememberingevents4check === true
  );
  const check53 = cat53?.filter(
    (item) =>
      item.Misplacementofthings0check === true ||
      item.Misplacementofthings1check === true ||
      item.Misplacementofthings2check === true ||
      item.Misplacementofthings3check === true ||
      item.Misplacementofthings4check === true
  );
  const check54 = cat54?.filter(
    (item) =>
      item.addresses0check === true ||
      item.addresses1check === true ||
      item.addresses2check === true ||
      item.addresses3check === true ||
      item.addresses4check === true
  );
  const check55 = cat55?.filter(
    (item) =>
      item.visualmemory0check === true ||
      item.visualmemory1check === true ||
      item.visualmemory2check === true ||
      item.visualmemory3check === true ||
      item.visualmemory4check === true
  );
  const check56 = cat56?.filter(
    (item) =>
      item.Alwaysforgetting0check === true ||
      item.Alwaysforgetting1check === true ||
      item.Alwaysforgetting2check === true ||
      item.Alwaysforgetting3check === true ||
      item.Alwaysforgetting4check === true
  );
  const check57 = cat57?.filter(
    (item) =>
      item.rememberingfaces0check === true ||
      item.rememberingfaces1check === true ||
      item.rememberingfaces2check === true ||
      item.rememberingfaces3check === true ||
      item.rememberingfaces4check === true
  );
  const check58 = cat58?.filter(
    (item) =>
      item.Difficultyrememberingnames0check === true ||
      item.Difficultyrememberingnames1check === true ||
      item.Difficultyrememberingnames2check === true ||
      item.Difficultyrememberingnames3check === true ||
      item.Difficultyrememberingnames4check === true
  );
  const check59 = cat59?.filter(
    (item) =>
      item.Difficultywithrememberingwords0check === true ||
      item.Difficultywithrememberingwords1check === true ||
      item.Difficultywithrememberingwords2check === true ||
      item.Difficultywithrememberingwords3check === true ||
      item.Difficultywithrememberingwords4check === true
  );
  const check60 = cat60?.filter(
    (item) =>
      item.Difficultyrememberingnumbers0check === true ||
      item.Difficultyrememberingnumbers1check === true ||
      item.Difficultyrememberingnumbers2check === true ||
      item.Difficultyrememberingnumbers3check === true ||
      item.Difficultyrememberingnumbers4check === true
  );
  const check61 = cat61?.filter(
    (item) =>
      item.Difficultyrememberingtostay0check === true ||
      item.Difficultyrememberingtostay1check === true ||
      item.Difficultyrememberingtostay2check === true ||
      item.Difficultyrememberingtostay3check === true ||
      item.Difficultyrememberingtostay4check === true
  );
  const check62 = cat62?.filter(
    (item) =>
      item.Difficultyindiscriminating0check === true ||
      item.Difficultyindiscriminating1check === true ||
      item.Difficultyindiscriminating2check === true ||
      item.Difficultyindiscriminating3check === true ||
      item.Difficultyindiscriminating4check === true
  );
  const check63 = cat63?.filter(
    (item) =>
      item.Dullnessofcolors0check === true ||
      item.Dullnessofcolors1check === true ||
      item.Dullnessofcolors2check === true ||
      item.Dullnessofcolors3check === true ||
      item.Dullnessofcolors4check === true
  );
  const check64 = cat64?.filter(
    (item) =>
      item.Difficultycoordinatingvisualinputs0check === true ||
      item.Difficultycoordinatingvisualinputs1check === true ||
      item.Difficultycoordinatingvisualinputs2check === true ||
      item.Difficultycoordinatingvisualinputs3check === true ||
      item.Difficultycoordinatingvisualinputs4check === true
  );
  const check65 = cat65?.filter(
    (item) =>
      item.Floaterorhalos0check === true ||
      item.Floaterorhalos1check === true ||
      item.Floaterorhalos2check === true ||
      item.Floaterorhalos3check === true ||
      item.Floaterorhalos4check === true
  );

  const check67 = cat67?.filter(
    (item) =>
      item.Difficultywithbalance0check === true ||
      item.Difficultywithbalance1check === true ||
      item.Difficultywithbalance2check === true ||
      item.Difficultywithbalance3check === true ||
      item.Difficultywithbalance4check === true
  );
  const check68 = cat68?.filter(
    (item) =>
      item.holdthehandrail0check === true ||
      item.holdthehandrail1check === true ||
      item.holdthehandrail2check === true ||
      item.holdthehandrail3check === true ||
      item.holdthehandrail4check === true
  );
  const check69 = cat69?.filter(
    (item) =>
      item.Feelingunsteady0check === true ||
      item.Feelingunsteady1check === true ||
      item.Feelingunsteady2check === true ||
      item.Feelingunsteady3check === true ||
      item.Feelingunsteady4check === true
  );
  const check70 = cat70?.filter(
    (item) =>
      item.Pronesstosway0check === true ||
      item.Pronesstosway1check === true ||
      item.Pronesstosway2check === true ||
      item.Pronesstosway3check === true ||
      item.Pronesstosway4check === true
  );
  const check71 = cat71?.filter(
    (item) =>
      item.clumsinessinhands0check === true ||
      item.clumsinessinhands1check === true ||
      item.clumsinessinhands2check === true ||
      item.clumsinessinhands3check === true ||
      item.clumsinessinhands4check === true
  );
  const check72 = cat72?.filter(
    (item) =>
      item.clumsinessinfeet0check === true ||
      item.clumsinessinfeet1check === true ||
      item.clumsinessinfeet2check === true ||
      item.clumsinessinfeet3check === true ||
      item.clumsinessinfeet4check === true
  );
  const check73 = cat73?.filter(
    (item) =>
      item.slighthandshake0check === true ||
      item.slighthandshake1check === true ||
      item.slighthandshake2check === true ||
      item.slighthandshake3check === true ||
      item.slighthandshake4check === true
  );
  const check74 = cat74?.filter(
    (item) =>
      item.Episodesofdizziness0check === true ||
      item.Episodesofdizziness1check === true ||
      item.Episodesofdizziness2check === true ||
      item.Episodesofdizziness3check === true ||
      item.Episodesofdizziness4check === true
  );
  const check75 = cat75?.filter(
    (item) =>
      item.Backmusclestire0check === true ||
      item.Backmusclestire1check === true ||
      item.Backmusclestire2check === true ||
      item.Backmusclestire3check === true ||
      item.Backmusclestire4check === true
  );
  const check76 = cat76?.filter(
    (item) =>
      item.Chronicneck0check === true ||
      item.Chronicneck1check === true ||
      item.Chronicneck2check === true ||
      item.Chronicneck3check === true ||
      item.Chronicneck4check === true
  );
  const check77 = cat77?.filter(
    (item) =>
      item.Nauseaval0check === true ||
      item.Nauseaval1check === true ||
      item.Nauseaval2check === true ||
      item.Nauseaval3check === true ||
      item.Nauseaval4check === true
  );
  const check78 = cat78?.filter(
    (item) =>
      item.Feelingofdisorientation0check === true ||
      item.Feelingofdisorientation1check === true ||
      item.Feelingofdisorientation2check === true ||
      item.Feelingofdisorientation3check === true ||
      item.Feelingofdisorientation4check === true
  );
  const check79 = cat79?.filter(
    (item) =>
      item.Crowdedplaces0check === true ||
      item.Crowdedplaces1check === true ||
      item.Crowdedplaces2check === true ||
      item.Crowdedplaces3check === true ||
      item.Crowdedplaces4check === true
  );
  const check80 = cat80?.filter(
    (item) =>
      item.Slownessinmovements0check === true ||
      item.Slownessinmovements1check === true ||
      item.Slownessinmovements2check === true ||
      item.Slownessinmovements3check === true ||
      item.Slownessinmovements4check === true
  );
  const check81 = cat81?.filter(
    (item) =>
      item.Stiffnessinyourmuscles0check === true ||
      item.Stiffnessinyourmuscles1check === true ||
      item.Stiffnessinyourmuscles2check === true ||
      item.Stiffnessinyourmuscles3check === true ||
      item.Stiffnessinyourmuscles4check === true
  );
  const check82 = cat82?.filter(
    (item) =>
      item.Crampingofhands0check === true ||
      item.Crampingofhands1check === true ||
      item.Crampingofhands2check === true ||
      item.Crampingofhands3check === true ||
      item.Crampingofhands4check === true
  );
  const check83 = cat83?.filter(
    (item) =>
      item.stoopedposture0check === true ||
      item.stoopedposture1check === true ||
      item.stoopedposture2check === true ||
      item.stoopedposture3check === true ||
      item.stoopedposture4check === true
  );
  const check84 = cat84?.filter(
    (item) =>
      item.Voicehasbecomesofter0check === true ||
      item.Voicehasbecomesofter1check === true ||
      item.Voicehasbecomesofter2check === true ||
      item.Voicehasbecomesofter3check === true ||
      item.Voicehasbecomesofter4check === true
  );
  const check85 = cat85?.filter(
    (item) =>
      item.Facialexpressionchanged0check === true ||
      item.Facialexpressionchanged1check === true ||
      item.Facialexpressionchanged2check === true ||
      item.Facialexpressionchanged3check === true ||
      item.Facialexpressionchanged4check === true
  );
  const check86 = cat86?.filter(
    (item) =>
      item.Uncontrollablemusclemovements0check === true ||
      item.Uncontrollablemusclemovements1check === true ||
      item.Uncontrollablemusclemovements2check === true ||
      item.Uncontrollablemusclemovements3check === true ||
      item.Uncontrollablemusclemovements4check === true
  );
  const check87 = cat87?.filter(
    (item) =>
      item.Intenseneedtoclear0check === true ||
      item.Intenseneedtoclear1check === true ||
      item.Intenseneedtoclear2check === true ||
      item.Intenseneedtoclear3check === true ||
      item.Intenseneedtoclear4check === true
  );
  const check88 = cat88?.filter(
    (item) =>
      item.Obsessivecompulsivetendencies0check === true ||
      item.Obsessivecompulsivetendencies1check === true ||
      item.Obsessivecompulsivetendencies2check === true ||
      item.Obsessivecompulsivetendencies3check === true ||
      item.Obsessivecompulsivetendencies4check === true
  );
  const check89 = cat89?.filter(
    (item) =>
      item.Constantnervousness0check === true ||
      item.Constantnervousness1check === true ||
      item.Constantnervousness2check === true ||
      item.Constantnervousness3check === true ||
      item.Constantnervousness4check === true
  );
  const check90 = cat90?.filter(
    (item) =>
      item.Drymouthoreyes0check === true ||
      item.Drymouthoreyes1check === true ||
      item.Drymouthoreyes2check === true ||
      item.Drymouthoreyes3check === true ||
      item.Drymouthoreyes4check === true
  );
  const check91 = cat91?.filter(
    (item) =>
      item.Difficultyswallowing0check === true ||
      item.Difficultyswallowing1check === true ||
      item.Difficultyswallowing2check === true ||
      item.Difficultyswallowing3check === true ||
      item.Difficultyswallowing4check === true
  );
  const check92 = cat92?.filter(
    (item) =>
      item.tendencyforconstipation0check === true ||
      item.tendencyforconstipation1check === true ||
      item.tendencyforconstipation2check === true ||
      item.tendencyforconstipation3check === true ||
      item.tendencyforconstipation4check === true
  );
  const check93 = cat93?.filter(
    (item) =>
      item.Chronicdigestivecomplaints0check === true ||
      item.Chronicdigestivecomplaints1check === true ||
      item.Chronicdigestivecomplaints2check === true ||
      item.Chronicdigestivecomplaints3check === true ||
      item.Chronicdigestivecomplaints4check === true
  );
  const check94 = cat94?.filter(
    (item) =>
      item.bladderincontinenceresulting0check === true ||
      item.bladderincontinenceresulting1check === true ||
      item.bladderincontinenceresulting2check === true ||
      item.bladderincontinenceresulting3check === true ||
      item.bladderincontinenceresulting4check === true
  );
  const check95 = cat95?.filter(
    (item) =>
      item.Tendencyforanxiety0check === true ||
      item.Tendencyforanxiety1check === true ||
      item.Tendencyforanxiety2check === true ||
      item.Tendencyforanxiety3check === true ||
      item.Tendencyforanxiety4check === true
  );
  const check96 = cat96?.filter(
    (item) =>
      item.Easilystartled0check === true ||
      item.Easilystartled1check === true ||
      item.Easilystartled2check === true ||
      item.Easilystartled3check === true ||
      item.Easilystartled4check === true
  );
  const check97 = cat97?.filter(
    (item) =>
      item.Difficultyrelaxing0check === true ||
      item.Difficultyrelaxing1check === true ||
      item.Difficultyrelaxing2check === true ||
      item.Difficultyrelaxing3check === true ||
      item.Difficultyrelaxing4check === true
  );
  const check98 = cat98?.filter(
    (item) =>
      item.Sensitivetobright0check === true ||
      item.Sensitivetobright1check === true ||
      item.Sensitivetobright2check === true ||
      item.Sensitivetobright3check === true ||
      item.Sensitivetobright4check === true
  );
  const check99 = cat99?.filter(
    (item) =>
      item.Episodesofracingheart0check === true ||
      item.Episodesofracingheart1check === true ||
      item.Episodesofracingheart2check === true ||
      item.Episodesofracingheart3check === true ||
      item.Episodesofracingheart4check === true
  );
  const check100 = cat100?.filter(
    (item) =>
      item.Difficultysleeping0check === true ||
      item.Difficultysleeping01check === true ||
      item.Difficultysleeping2check === true ||
      item.Difficultysleeping3check === true ||
      item.Difficultysleeping4check === true
  );

  // console.log("check15",check15)
  // useEffect(() => {
  //     dispatch(clientIntakeFormGet({ patientId: soappatientId,/* practitionerId: UserId,*/ token:token }));
  // }, []);
  useEffect(() => {
    console.log("running log 13.");
    let patientId = patientSoapFormDetail.shouldShowPatientSoapFormDetail
      ? patientSoapFormDetail.patientId
      : selectedPatientId
      ? selectedPatientId
      : soappatientId;
    dispatch(
      clientIntakeFormGet({ patientId: patientId, /* practitionerId: UserId,*/ token: token })
    );
  }, [stepIndex]);
  return (
    <SoftBox>
      <div>
        {check1 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Frontal lobe Prefrontal,Dorsolateral and Orbitofrontal
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>

              <tbody>
                {check1 &&
                  check1.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.restraint0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.restraint1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.restraint2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.restraint3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.restraint4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check2 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check2 &&
                  check2.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotionalinstability0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotionalinstability1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotionalinstability2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotionalinstability3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotionalinstability4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check3 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check3 &&
                  check3.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinPlanning0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinPlanning1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinPlanning2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinPlanning3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinPlanning4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check4 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check4 &&
                  check4.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinDecision0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinDecision1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinDecision2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinDecision3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinDecision4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check5 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check5 &&
                  check5.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.lackMotivation0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.lackMotivation1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.lackMotivation2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.lackMotivation3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.lackMotivation4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check6 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check6 &&
                  check6.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinSound0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinSound1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinSound2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinSound3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinSound4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {checkcc === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {checkcc &&
                  checkcc.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Constantlyevents0Check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Constantlyevents1Check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Constantlyevents2Check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Constantlyevents3Check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Constantlyevents4Check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check7 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check7 &&
                  check7.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinTask0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinTask1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinTask2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinTask3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinTask4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check8 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check8 &&
                  check8.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.depressionEp0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.depressionEp1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.depressionEp2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.depressionEp3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.depressionEp4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check9 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check9 &&
                  check9.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mentalFatigue0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mentalFatigue1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mentalFatigue2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mentalFatigue3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mentalFatigue4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check10 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check10 &&
                  check10.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.decreaseInAttention0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.decreaseInAttention1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.decreaseInAttention2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.decreaseInAttention3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.decreaseInAttention4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check11 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check11 &&
                  check11.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInFocus0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInFocus1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInFocus2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInFocus3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInFocus4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check12 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check12 &&
                  check12.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInCreativity0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInCreativity1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInCreativity2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInCreativity3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInCreativity4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check13 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check13 &&
                  check13.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInArtAppreciation0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInArtAppreciation1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInArtAppreciation2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInArtAppreciation3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInArtAppreciation4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check14 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check14 &&
                  check14.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInlettingGo0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInlettingGo1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInlettingGo2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInlettingGo3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInlettingGo4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check15 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check15 &&
                  check15.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInAnalytical0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInAnalytical1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInAnalytical2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInAnalytical3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInAnalytical4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check16 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check16 &&
                  check16.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInMath0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInMath1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInMath2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInMath3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInMath4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check17 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check17 &&
                  check17.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInIdeas0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInIdeas1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInIdeas2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInIdeas3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInIdeas4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check18 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Frontal Lobe Precentral and , Supplementary
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {check18 &&
                  check18.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.movement0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.movement1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.movement2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.movement3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.movement4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check19 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check19 &&
                  check19.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.armLegHeaviness0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.armLegHeaviness1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.armLegHeaviness2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.armLegHeaviness3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.armLegHeaviness4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check20 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check20 &&
                  check20.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.IncMuscleTightness0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.IncMuscleTightness1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.IncMuscleTightness2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.IncMuscleTightness3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.IncMuscleTightness4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check21 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check21 &&
                  check21.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleEndurance0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleEndurance1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleEndurance2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleEndurance3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleEndurance4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check22 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check22 &&
                  check22.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleFunction0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleFunction1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleFunction2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleFunction3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.muscleFunction4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check23 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check23 &&
                  check23.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.diffInMuscleTightness0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.diffInMuscleTightness1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.diffInMuscleTightness2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.diffInMuscleTightness3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.diffInMuscleTightness4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check24 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Frontal Lobe Broca’s Motor Speech Area
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {check24 &&
                  check24.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinWords0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinWords1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinWords2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinWords3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyinWords4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check25 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check25 &&
                  check25.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInSpeak0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInSpeak1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInSpeak2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInSpeak3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.difficultyInSpeak4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check26 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check26 &&
                  check26.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.changeSpeakingFluency0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.changeSpeakingFluency1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.changeSpeakingFluency2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.changeSpeakingFluency3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.changeSpeakingFluency4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check27 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Parietal Somatosensory Area and Parietal Superior Lobule
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {check27 &&
                  check27.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.PositionLimbs0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.PositionLimbs1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.PositionLimbs2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.PositionLimbs3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.PositionLimbs4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check28 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check28 &&
                  check28.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.spatialAwarness0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.spatialAwarness1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.spatialAwarness2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.spatialAwarness3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.spatialAwarness4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check29 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check29 &&
                  check29.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.bumpingBody0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.bumpingBody1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.bumpingBody2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.bumpingBody3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.bumpingBody4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check30 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check30 &&
                  check30.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.ReoccurringInjury0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.ReoccurringInjury1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.ReoccurringInjury2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.ReoccurringInjury3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.ReoccurringInjury4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check31 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check31 &&
                  check31.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Hypersensitivities0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Hypersensitivities1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Hypersensitivities2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Hypersensitivities3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Hypersensitivities4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}

        {check32 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Parietal Inferior Lobule
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {check32 &&
                  check32.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.confusion0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.confusion1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.confusion2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.confusion3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.confusion4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check33 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check33 &&
                  check33.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mathcalculations0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mathcalculations1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mathcalculations2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mathcalculations3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.mathcalculations4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check34 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check34 &&
                  check34.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.findingwords0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.findingwords1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.findingwords2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.findingwords3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.findingwords4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check35 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check35 &&
                  check35.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.writingwords0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.writingwords1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.writingwords2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.writingwords3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.writingwords4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check36 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check36 &&
                  check36.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.recognizingsymbols0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.recognizingsymbols1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.recognizingsymbols2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.recognizingsymbols3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.recognizingsymbols4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check37 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check37 &&
                  check37.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.simpledrawings0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.simpledrawings1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.simpledrawings2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.simpledrawings3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.simpledrawings4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check38 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check38 &&
                  check38.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.interpretingmaps0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.interpretingmaps1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.interpretingmaps2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.interpretingmaps3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.interpretingmaps4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check39 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Temporal Lobe Auditory Cortex
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {check39 &&
                  check39.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.hearing0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.hearing1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.hearing2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.hearing3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.hearing4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check40 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check40 &&
                  check40.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.scatternoise0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.scatternoise1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.scatternoise2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.scatternoise3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.scatternoise4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check41 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check41 &&
                  check41.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.pronunciation0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.pronunciation1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.pronunciation2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.pronunciation3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.pronunciation4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check42 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check42 &&
                  check42.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.saying0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.saying1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.saying2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.saying3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.saying4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check43 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check43 &&
                  check43.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.sound0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.sound1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.sound2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.sound3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.sound4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check44 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check44 &&
                  check44.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.predictablerhythmic0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.predictablerhythmic1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.predictablerhythmic2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.predictablerhythmic3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.predictablerhythmic4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check45 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check45 &&
                  check45.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.nonpredictablerhythmic0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.nonpredictablerhythmic1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.nonpredictablerhythmic2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.nonpredictablerhythmic3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.nonpredictablerhythmic4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check46 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check46 &&
                  check46.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Noticeable0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Noticeable1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Noticeable2check}
                                />
                              </Grid>{" "}
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check47 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Temporal Lobe Auditory Association
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {check47 &&
                  check47.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.comprehending0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.comprehending1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.comprehending2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.comprehending3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.comprehending4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check48 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check47 &&
                  check48.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotions0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotions1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotions2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotions3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.emotions4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check49 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Medial Temporal lobe and Hippocampus
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {check49 &&
                  check49.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Memorylessefficient0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Memorylessefficient1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Memorylessefficient2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Memorylessefficient3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Memorylessefficient4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check50 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check50 &&
                  check50.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.impactsdailyactivities0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.impactsdailyactivities1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.impactsdailyactivities2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.impactsdailyactivities3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.impactsdailyactivities4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check51 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check51 &&
                  check51.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Confusionaboutdates0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Confusionaboutdates1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Confusionaboutdates2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Confusionaboutdates3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Confusionaboutdates4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check52 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check52 &&
                  check52.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingevents0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingevents1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingevents2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingevents3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingevents4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check53 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check53 &&
                  check53.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Misplacementofthings0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Misplacementofthings1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Misplacementofthings2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Misplacementofthings3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Misplacementofthings4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check54 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check54 &&
                  check54.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.addresses0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.addresses1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.addresses2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.addresses3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.addresses4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check55 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check55 &&
                  check55.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.visualmemory0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.visualmemory1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.visualmemory2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.visualmemory3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.visualmemory4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check56 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check56 &&
                  check56.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Alwaysforgetting0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Alwaysforgetting1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Alwaysforgetting2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Alwaysforgetting3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Alwaysforgetting4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check57 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check57 &&
                  check57.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.rememberingfaces0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.rememberingfaces1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.rememberingfaces2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.rememberingfaces3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.rememberingfaces4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check58 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check58 &&
                  check58.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnames0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnames1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnames2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnames3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnames4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check59 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check59 &&
                  check59.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultywithrememberingwords0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultywithrememberingwords1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultywithrememberingwords2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultywithrememberingwords3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultywithrememberingwords4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check60 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check60 &&
                  check60.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnumbers0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnumbers1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnumbers2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnumbers3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingnumbers4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check61 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check61 &&
                  check61.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingtostay0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingtostay1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingtostay2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingtostay3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyrememberingtostay4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check62 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <thead>
                <tr>
                  <td
                    style={{
                      textAlign: "center",
                      padding: "5px",
                      fontSize: "18px",
                      color: "#344767",
                    }}
                    colSpan={2}
                  >
                    Occipital Lobe
                  </td>
                </tr>
                <tr>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                  <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                {check62 &&
                  check62.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyindiscriminating0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyindiscriminating1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyindiscriminating2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyindiscriminating3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultyindiscriminating4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check63 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check63 &&
                  check63.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Dullnessofcolors0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Dullnessofcolors1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Dullnessofcolors2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Dullnessofcolors3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Dullnessofcolors4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check64 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check64 &&
                  check64.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultycoordinatingvisualinputs0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultycoordinatingvisualinputs1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultycoordinatingvisualinputs2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultycoordinatingvisualinputs3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Difficultycoordinatingvisualinputs4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
        {check65 === undefined ? (
          ""
        ) : (
          <>
            <table
              style={{ width: "100%", height: "100%", overflow: "auto" }}
              border={1}
              className="content-table"
            >
              <tbody>
                {check65 &&
                  check65.map((data, item) => {
                    console.log("datagggg", data);
                    return (
                      <>
                        <tr>
                          <td
                            style={{
                              padding: "5px",
                              paddingLeft: "10px",
                              fontSize: "15px",
                              fontWeight: "550",
                            }}
                          >
                            {data.name}
                          </td>
                          <td style={{ paddingLeft: "10px" }}>
                            <Grid container>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  label="0"
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Floaterorhalos0check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Floaterorhalos1check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Floaterorhalos2check}
                                />
                              </Grid>{" "}
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Floaterorhalos3check}
                                />
                              </Grid>
                              <Grid item lg={1} sm={1} md={1} xs={2}>
                                <Checkbox
                                  style={{ marginLeft: "5px" }}
                                  checked={data.Floaterorhalos4check}
                                />
                              </Grid>
                            </Grid>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
      </div>

      {check67 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  Cerebellum - Spinocerebellum
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check67 &&
                check67.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultywithbalance0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultywithbalance1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultywithbalance2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultywithbalance3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultywithbalance4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check68 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check68 &&
                check68.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.holdthehandrail0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.holdthehandrail1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.holdthehandrail2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.holdthehandrail3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.holdthehandrail4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check69 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check69 &&
                check69.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingunsteady0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingunsteady1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingunsteady2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingunsteady3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingunsteady4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check70 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check70 &&
                check70.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Pronesstosway0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Pronesstosway1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Pronesstosway2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Pronesstosway3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Pronesstosway4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check71 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  Cerebellum - Cerebrocerebellum
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check71 &&
                check71.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinhands0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinhands1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinhands2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinhands3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinhands4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check72 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check72 &&
                check72.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinfeet0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinfeet1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinfeet2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinfeet3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.clumsinessinfeet4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check73 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check73 &&
                check73.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.slighthandshake0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.slighthandshake1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.slighthandshake2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.slighthandshake3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.slighthandshake4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check74 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  Cerebellum - Vestibulocerebellum
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check74 &&
                check74.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofdizziness0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofdizziness1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofdizziness2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofdizziness3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofdizziness4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check75 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check75 &&
                check75.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Backmusclestire0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Backmusclestire1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Backmusclestire2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Backmusclestire3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Backmusclestire4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check76 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check76 &&
                check76.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicneck0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicneck1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicneck2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicneck3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicneck4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check77 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check77 &&
                check77.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Nauseaval0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Nauseaval1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Nauseaval2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Nauseaval3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Nauseaval4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check78 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check78 &&
                check78.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingofdisorientation0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingofdisorientation1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingofdisorientation2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingofdisorientation3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Feelingofdisorientation4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check79 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check79 &&
                check79.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Crowdedplaces0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Crowdedplaces1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Crowdedplaces2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Crowdedplaces3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Crowdedplaces4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check80 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  Basal Ganglia Direct Pathway
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check80 &&
                check80.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Slownessinmovements0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Slownessinmovements1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Slownessinmovements2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Slownessinmovements3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Slownessinmovements4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check81 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check81 &&
                check81.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Stiffnessinyourmuscles0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Stiffnessinyourmuscles1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Stiffnessinyourmuscles2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Stiffnessinyourmuscles3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Stiffnessinyourmuscles4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check82 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check82 &&
                check82.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Crampingofhands0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Crampingofhands1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Crampingofhands2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Crampingofhands3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Crampingofhands4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check83 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check83 &&
                check83.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.stoopedposture0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.stoopedposture1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.stoopedposture2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.stoopedposture3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.stoopedposture4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check84 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check84 &&
                check84.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Voicehasbecomesofter0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Voicehasbecomesofter1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Voicehasbecomesofter2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Voicehasbecomesofter3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Voicehasbecomesofter4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check85 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check85 &&
                check85.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Facialexpressionchanged0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Facialexpressionchanged1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Facialexpressionchanged2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Facialexpressionchanged3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Facialexpressionchanged4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check86 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  Basal Ganglia Indirect Pathway
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check86 &&
                check86.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Uncontrollablemusclemovements0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Uncontrollablemusclemovements1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Uncontrollablemusclemovements2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Uncontrollablemusclemovements3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Uncontrollablemusclemovements4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check87 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check87 &&
                check87.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Intenseneedtoclear0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Intenseneedtoclear1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Intenseneedtoclear2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Intenseneedtoclear3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Intenseneedtoclear4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check88 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check88 &&
                check88.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Obsessivecompulsivetendencies0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Obsessivecompulsivetendencies1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Obsessivecompulsivetendencies2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Obsessivecompulsivetendencies3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Obsessivecompulsivetendencies4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check89 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check89 &&
                check89.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Constantnervousness0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Constantnervousness1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Constantnervousness2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Constantnervousness3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Constantnervousness4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check90 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  Autonomic Reduced Parasympathetic Activity
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check90 &&
                check90.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Drymouthoreyes0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Drymouthoreyes1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Drymouthoreyes2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Drymouthoreyes3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Drymouthoreyes4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check91 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check91 &&
                check91.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyswallowing0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyswallowing1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyswallowing2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyswallowing3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyswallowing4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check92 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check92 &&
                check92.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.tendencyforconstipation0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.tendencyforconstipation1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.tendencyforconstipation2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.tendencyforconstipation3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.tendencyforconstipation4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check93 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check93 &&
                check93.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicdigestivecomplaints0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicdigestivecomplaints1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicdigestivecomplaints2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicdigestivecomplaints3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Chronicdigestivecomplaints4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check94 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check94 &&
                check94.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.bladderincontinenceresulting0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.bladderincontinenceresulting1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.bladderincontinenceresulting2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.bladderincontinenceresulting3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.bladderincontinenceresulting4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check95 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <thead>
              <tr>
                <td
                  style={{
                    textAlign: "center",
                    padding: "5px",
                    fontSize: "18px",
                    color: "#344767",
                  }}
                  colSpan={2}
                >
                  Autonomic Increased Sympathetic Activity
                </td>
              </tr>
              <tr>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Question</th>
                <th style={{ padding: "5px", fontSize: "15px", color: "#344767" }}>Answer</th>
              </tr>
            </thead>
            <tbody>
              {check95 &&
                check95.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Tendencyforanxiety0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Tendencyforanxiety1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Tendencyforanxiety2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Tendencyforanxiety3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Tendencyforanxiety4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check96 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check96 &&
                check96.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Easilystartled0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Easilystartled1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Easilystartled2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Easilystartled3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Easilystartled4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check97 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check97 &&
                check97.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyrelaxing0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyrelaxing1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyrelaxing2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyrelaxing3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultyrelaxing4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check98 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check98 &&
                check98.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Sensitivetobright0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Sensitivetobright1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Sensitivetobright2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Sensitivetobright3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Sensitivetobright4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check99 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check99 &&
                check99.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofracingheart0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofracingheart1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofracingheart2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofracingheart3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Episodesofracingheart4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
      {check100 === undefined ? (
        ""
      ) : (
        <>
          <table
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            border={1}
            className="content-table"
          >
            <tbody>
              {check100 &&
                check100.map((data, item) => {
                  console.log("datagggg", data);
                  return (
                    <>
                      <tr>
                        <td
                          style={{
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "550",
                          }}
                        >
                          {data.name}
                        </td>
                        <td style={{ paddingLeft: "10px" }}>
                          <Grid container>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                label="0"
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultysleeping0check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultysleeping1check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultysleeping2check}
                              />
                            </Grid>{" "}
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultysleeping3check}
                              />
                            </Grid>
                            <Grid item lg={1} sm={1} md={1} xs={2}>
                              <Checkbox
                                style={{ marginLeft: "5px" }}
                                checked={data.Difficultysleeping4check}
                              />
                            </Grid>
                          </Grid>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </SoftBox>
  );
};
Region.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  stepIndex: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default Region;
