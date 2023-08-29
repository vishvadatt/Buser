import moment from "moment";
const initialValues = {
  page21: [
    {
      Difficultywithbalance: [
        {
          name: "Difficulty with balance, or balance that is worse on one side",
          Difficultywithbalance0check: false,
          Difficultywithbalance1check: false,
          Difficultywithbalance2check: false,
          Difficultywithbalance3check: false,
          Difficultywithbalance4check: false,
        },
      ],

      holdthehandrail: [
        {
          name: "A need to hold the handrail or watch each step carefully when going down stairs",
          holdthehandrail0check: false,
          holdthehandrail1check: false,
          holdthehandrail2check: false,
          holdthehandrail3check: false,
          holdthehandrail4check: false,
        },
      ],

      Feelingunsteady: [
        {
          name: "Feeling unsteady and prone to falling in the dark",
          Feelingunsteady0check: false,
          Feelingunsteady1check: false,
          Feelingunsteady2check: false,
          Feelingunsteady3check: false,
          Feelingunsteady4check: false,
        },
      ],

      Pronesstosway: [
        {
          name: "Proness to sway to one side when walking or standing",
          Pronesstosway0check: false,
          Pronesstosway1check: false,
          Pronesstosway2check: false,
          Pronesstosway3check: false,
          Pronesstosway4check: false,
        },
      ],

      clumsinessinhands: [
        {
          name: "Recent clumsiness in hands",
          clumsinessinhands0check: false,
          clumsinessinhands1check: false,
          clumsinessinhands2check: false,
          clumsinessinhands3check: false,
          clumsinessinhands4check: false,
        },
      ],

      clumsinessinfeet: [
        {
          name: "Recent clumsiness in feet or frequent tripping",
          clumsinessinfeet0check: false,
          clumsinessinfeet1check: false,
          clumsinessinfeet2check: false,
          clumsinessinfeet3check: false,
          clumsinessinfeet4check: false,
        },
      ],

      slighthandshake: [
        {
          name: "A slight hand shake when reaching for something at the end of movement",
          slighthandshake0check: false,
          slighthandshake1check: false,
          slighthandshake2check: false,
          slighthandshake3check: false,
          slighthandshake4check: false,
        },
      ],

      Episodesofdizziness: [
        {
          name: "Episodes of dizziness or disorientation ",
          Episodesofdizziness0check: false,
          Episodesofdizziness1check: false,
          Episodesofdizziness2check: false,
          Episodesofdizziness3check: false,
          Episodesofdizziness4check: false,
        },
      ],

      Backmusclestire: [
        {
          name: "Back muscles that tire quickly when standing or walking",
          Backmusclestire0check: false,
          Backmusclestire1check: false,
          Backmusclestire2check: false,
          Backmusclestire3check: false,
          Backmusclestire4check: false,
        },
      ],

      Chronicneck: [
        {
          name: "Chronic neck or back muscle tightness",
          Chronicneck0check: false,
          Chronicneck1check: false,
          Chronicneck2check: false,
          Chronicneck3check: false,
          Chronicneck4check: false,
        },
      ],

      Nauseaval: [
        {
          name: "Nausea, car sickness, or sea sickness",
          Nauseaval0check: false,
          Nauseaval1check: false,
          Nauseaval2check: false,
          Nauseaval3check: false,
          Nauseaval4check: false,
        },
      ],

      Feelingofdisorientation: [
        {
          name: "Feeling of disorientation or shifting of the environment",
          Feelingofdisorientation0check: false,
          Feelingofdisorientation1check: false,
          Feelingofdisorientation2check: false,
          Feelingofdisorientation3check: false,
          Feelingofdisorientation4check: false,
        },
      ],

      Crowdedplaces: [
        {
          name: "Crowded places cause anxiety",
          Crowdedplaces0check: false,
          Crowdedplaces1check: false,
          Crowdedplaces2check: false,
          Crowdedplaces3check: false,
          Crowdedplaces4check: false,
        },
      ],

      Slownessinmovements: [
        {
          name: "Slowness in movements",
          Slownessinmovements0check: false,
          Slownessinmovements1check: false,
          Slownessinmovements2check: false,
          Slownessinmovements3check: false,
          Slownessinmovements4check: false,
        },
      ],

      Stiffnessinyourmuscles: [
        {
          name: "Stiffness in your muscles (notjoints) that goes away when you move",
          Stiffnessinyourmuscles0check: false,
          Stiffnessinyourmuscles1check: false,
          Stiffnessinyourmuscles2check: false,
          Stiffnessinyourmuscles3check: false,
          Stiffnessinyourmuscles4check: false,
        },
      ],

      Crampingofhands: [
        {
          name: "Cramping of hands when writing",
          Crampingofhands0check: false,
          Crampingofhands1check: false,
          Crampingofhands2check: false,
          Crampingofhands3check: false,
          Crampingofhands4check: false,
        },
      ],

      stoopedposture: [
        {
          name: "A stooped posture when walking",
          stoopedposture0check: false,
          stoopedposture1check: false,
          stoopedposture2check: false,
          stoopedposture3check: false,
          stoopedposture4check: false,
        },
      ],

      Voicehasbecomesofter: [
        {
          name: "Voice has become softer",
          Voicehasbecomesofter0check: false,
          Voicehasbecomesofter1check: false,
          Voicehasbecomesofter2check: false,
          Voicehasbecomesofter3check: false,
          Voicehasbecomesofter4check: false,
        },
      ],

      Facialexpressionchanged: [
        {
          name: "Facial expression changed leading people to frequently ask if you are upset or angry",
          Facialexpressionchanged0check: false,
          Facialexpressionchanged1check: false,
          Facialexpressionchanged2check: false,
          Facialexpressionchanged3check: false,
          Facialexpressionchanged4check: false,
        },
      ],

      Uncontrollablemusclemovements: [
        {
          name: "Uncontrollable muscle movements",
          Uncontrollablemusclemovements0check: false,
          Uncontrollablemusclemovements1check: false,
          Uncontrollablemusclemovements2check: false,
          Uncontrollablemusclemovements3check: false,
          Uncontrollablemusclemovements4check: false,
        },
      ],
      Intenseneedtoclear: [
        {
          name: "Intense need to clear your throat regularly or contract a group of muscles",
          Intenseneedtoclear0check: false,
          Intenseneedtoclear1check: false,
          Intenseneedtoclear2check: false,
          Intenseneedtoclear3check: false,
          Intenseneedtoclear4check: false,
        },
      ],
      Obsessivecompulsivetendencies: [
        {
          name: "Obsessive compulsive tendencies",
          Obsessivecompulsivetendencies0check: false,
          Obsessivecompulsivetendencies1check: false,
          Obsessivecompulsivetendencies2check: false,
          Obsessivecompulsivetendencies3check: false,
          Obsessivecompulsivetendencies4check: false,
        },
      ],
      Constantnervousness: [
        {
          name: "Constant nervousness and restless mind",
          Constantnervousness0check: false,
          Constantnervousness1check: false,
          Constantnervousness2check: false,
          Constantnervousness3check: false,
          Constantnervousness4check: false,
        },
      ],
      Drymouthoreyes: [
        {
          name: "Dry mouth or eyes",
          Drymouthoreyes0check: false,
          Drymouthoreyes1check: false,
          Drymouthoreyes2check: false,
          Drymouthoreyes3check: false,
          Drymouthoreyes4check: false,
        },
      ],
      Difficultyswallowing: [
        {
          name: "Difficulty swallowing supplements or large bites of food",
          Difficultyswallowing0check: false,
          Difficultyswallowing1check: false,
          Difficultyswallowing2check: false,
          Difficultyswallowing3check: false,
          Difficultyswallowing4check: false,
        },
      ],
      tendencyforconstipation: [
        {
          name: "Slow bowel movements and tendency for constipation",
          tendencyforconstipation0check: false,
          tendencyforconstipation1check: false,
          tendencyforconstipation2check: false,
          tendencyforconstipation3check: false,
          tendencyforconstipation4check: false,
        },
      ],
      Chronicdigestivecomplaints: [
        {
          name: "Chronic digestive complaints",
          Chronicdigestivecomplaints0check: false,
          Chronicdigestivecomplaints1check: false,
          Chronicdigestivecomplaints2check: false,
          Chronicdigestivecomplaints3check: false,
          Chronicdigestivecomplaints4check: false,
        },
      ],
      bladderincontinenceresulting: [
        {
          name: "Bowel or bladder incontinenceresulting in staining your underwear",
          bladderincontinenceresulting0check: false,
          bladderincontinenceresulting1check: false,
          bladderincontinenceresulting2check: false,
          bladderincontinenceresulting3check: false,
          bladderincontinenceresulting4check: false,
        },
      ],

      Tendencyforanxiety: [
        {
          name: "Tendency for anxiety",
          Tendencyforanxiety0check: false,
          Tendencyforanxiety1check: false,
          Tendencyforanxiety2check: false,
          Tendencyforanxiety3check: false,
          Tendencyforanxiety4check: false,
        },
      ],
      Easilystartled: [
        {
          name: "Easily startled",
          Easilystartled0check: false,
          Easilystartled1check: false,
          Easilystartled2check: false,
          Easilystartled3check: false,
          Easilystartled4check: false,
        },
      ],
      Difficultyrelaxing: [
        {
          name: "Difficulty relaxing",
          Difficultyrelaxing0check: false,
          Difficultyrelaxing1check: false,
          Difficultyrelaxing2check: false,
          Difficultyrelaxing3check: false,
          Difficultyrelaxing4check: false,
        },
      ],
      Sensitivetobright: [
        {
          name: "Sensitive to bright or flashing lights",
          Sensitivetobright0check: false,
          Sensitivetobright1check: false,
          Sensitivetobright2check: false,
          Sensitivetobright3check: false,
          Sensitivetobright4check: false,
        },
      ],
      Episodesofracingheart: [
        {
          name: "Episodes of racing heart",
          Episodesofracingheart0check: false,
          Episodesofracingheart1check: false,
          Episodesofracingheart2check: false,
          Episodesofracingheart3check: false,
          Episodesofracingheart4check: false,
        },
      ],
      Difficultysleeping: [
        {
          name: "Difficulty sleeping",
          Difficultysleeping0check: false,
          Difficultysleeping1check: false,
          Difficultysleeping2check: false,
          Difficultysleeping3check: false,
          Difficultysleeping4check: false,
        },
      ],

      alcoholicBeverages: "",
      caffeinatedBeverages: "",
      eatCount: "",
      stressLevel: "",
      eatFishCount: "",
      workoutCount: "",
      nutCount: "",
      worstFoodA: "",
      worstFoodB: "",
      worstFoodC: "",
      healthyFoodA: "",
      healthyFoodB: "",
      healthyFoodC: "",
      CategoryXXinput: "",
      supplements: "",
      medication: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
    },
  ],
};

export default initialValues;
