import moment from "moment";
const initialValues = {
  page19: [
    {
      restraint: [
        {
          name: "Difficulty with restraint and controlling impulses or desires",
          restraint0check: false,
          restraint1check: false,
          restraint2check: false,
          restraint3check: false,
          restraint4check: false,
        },
      ],

      emotionalinstability: [
        {
          name: "Emotional instability (lability)",
          emotionalinstability0check: false,
          emotionalinstability1check: false,
          emotionalinstability2check: false,
          emotionalinstability3check: false,
          emotionalinstability4check: false,
        },
      ],
      difficultyinPlanning: [
        {
          name: "Difficulty planning and organizing",
          difficultyinPlanning0check: false,
          difficultyinPlanning1check: false,
          difficultyinPlanning2check: false,
          difficultyinPlanning3check: false,
          difficultyinPlanning4check: false,
        },
      ],

      difficultyinDecision: [
        {
          name: "Difficulty making decisions ",
          difficultyinDecision0check: false,
          difficultyinDecision1check: false,
          difficultyinDecision2check: false,
          difficultyinDecision3check: false,
          difficultyinDecision4check: false,
        },
      ],
      lackMotivation: [
        {
          name: "Lack of motivation, enthusiasm, interest and drive (apathetic)",
          lackMotivation0check: false,
          lackMotivation1check: false,
          lackMotivation2check: false,
          lackMotivation3check: false,
          lackMotivation4check: false,
        },
      ],

      difficultyinSound: [
        {
          name: "Difficulty getting a sound or melody out of your thoughts (Perseveration)",
          difficultyinSound0check: false,
          difficultyinSound1check: false,
          difficultyinSound2check: false,
          difficultyinSound3check: false,
          difficultyinSound4check: false,
        },
      ],
      Constantlyevents: [
        {
          name: "Constantly repeat events or thoughts with difficulty letting go",
          Constantlyevents0Check: false,
          Constantlyevents1Check: false,
          Constantlyevents2Check: false,
          Constantlyevents3Check: false,
          Constantlyevents4Check: false,
        },
      ],

      difficultyinTask: [
        {
          name: "Difficulty initiating and finishing tasks",
          difficultyinTask0check: false,
          difficultyinTask1check: false,
          difficultyinTask2check: false,
          difficultyinTask3check: false,
          difficultyinTask4check: false,
        },
      ],
      depressionEp: [
        {
          name: "Episodes of depression",
          depressionEp0check: false,
          depressionEp1check: false,
          depressionEp2check: false,
          depressionEp3check: false,
          depressionEp4check: false,
        },
      ],
      mentalFatigue: [
        {
          name: "Mental fatigue",
          mentalFatigue0check: false,
          mentalFatigue1check: false,
          mentalFatigue2check: false,
          mentalFatigue3check: false,
          mentalFatigue4check: false,
        },
      ],
      decreaseInAttention: [
        {
          name: "Decrease in attention span",
          decreaseInAttention0check: false,
          decreaseInAttention1check: false,
          decreaseInAttention2check: false,
          decreaseInAttention3check: false,
          decreaseInAttention4check: false,
        },
      ],
      difficultyInFocus: [
        {
          name: "Difficulty staying focused and concentrating for extended periods of time",
          difficultyInFocus0check: false,
          difficultyInFocus1check: false,
          difficultyInFocus2check: false,
          difficultyInFocus3check: false,
          difficultyInFocus4check: false,
        },
      ],
      difficultyInCreativity: [
        {
          name: "Difficulty with creativity, imagination, and intuition",
          difficultyInCreativity0check: false,
          difficultyInCreativity1check: false,
          difficultyInCreativity2check: false,
          difficultyInCreativity3check: false,
          difficultyInCreativity4check: false,
        },
      ],
      difficultyInArtAppreciation: [
        {
          name: "Difficulty in appreciating art and music",
          difficultyInArtAppreciation0check: false,
          difficultyInArtAppreciation1check: false,
          difficultyInArtAppreciation2check: false,
          difficultyInArtAppreciation3check: false,
          difficultyInArtAppreciation4check: false,
        },
      ],
      difficultyInlettingGo: [
        {
          name: "Constantly repeat events or thoughts with difficulty letting go",
          difficultyInlettingGo0check: false,
          difficultyInlettingGo1check: false,
          difficultyInlettingGo2check: false,
          difficultyInlettingGo3check: false,
          difficultyInlettingGo4check: false,
        },
      ],

      difficultyInAnalytical: [
        {
          name: "Difficulty with analytical thought",
          difficultyInAnalytical0check: false,
          difficultyInAnalytical1check: false,
          difficultyInAnalytical2check: false,
          difficultyInAnalytical3check: false,
          difficultyInAnalytical4check: false,
        },
      ],
      difficultyInMath: [
        {
          name: "Difficulty with math, number skills and time consciousness",
          difficultyInMath0check: false,
          difficultyInMath1check: false,
          difficultyInMath2check: false,
          difficultyInMath3check: false,
          difficultyInMath4check: false,
        },
      ],
      difficultyInIdeas: [
        {
          name: "Difficulty taking ideas, actions,  and words and putting them in a linear sequence",
          difficultyInIdeas0check: false,
          difficultyInIdeas1check: false,
          difficultyInIdeas2check: false,
          difficultyInIdeas3check: false,
          difficultyInIdeas4check: false,
        },
      ],
      movement: [
        {
          name: "Initiating movements with your arm or leg has become more difficult",
          movement0check: false,
          movement1check: false,
          movement2check: false,
          movement3check: false,
          movement4check: false,
        },
      ],

      armLegHeaviness: [
        {
          name: "Feeling of arm or leg heaviness, especially when tired ",
          armLegHeaviness0check: false,
          armLegHeaviness1check: false,
          armLegHeaviness2check: false,
          armLegHeaviness3check: false,
          armLegHeaviness4check: false,
        },
      ],
      IncMuscleTightness: [
        {
          name: "Increased muscle tightness in your arm or leg ",
          IncMuscleTightness0check: false,
          IncMuscleTightness1check: false,
          IncMuscleTightness2check: false,
          IncMuscleTightness3check: false,
          IncMuscleTightness4check: false,
        },
      ],

      muscleEndurance: [
        {
          name: "Reduced muscle endurance in your arm or leg",
          muscleEndurance0check: false,
          muscleEndurance1check: false,
          muscleEndurance2check: false,
          muscleEndurance3check: false,
          muscleEndurance4check: false,
        },
      ],
      muscleFunction: [
        {
          name: "Noticeable difference in your  muscle function or strength from one side to the other",
          muscleFunction0check: false,
          muscleFunction1check: false,
          muscleFunction2check: false,
          muscleFunction3check: false,
          muscleFunction4check: false,
        },
      ],

      diffInMuscleTightness: [
        {
          name: "Noticeable difference in your  muscle tightness from one side to the other",
          diffInMuscleTightness0check: false,
          diffInMuscleTightness1check: false,
          diffInMuscleTightness2check: false,
          diffInMuscleTightness3check: false,
          diffInMuscleTightness4check: false,
        },
      ],

      difficultyinWords: [
        {
          name: "Difficulty producing words verbally, especially when fatigued",
          difficultyinWords0check: false,
          difficultyinWords1check: false,
          difficultyinWords2check: false,
          difficultyinWords3check: false,
          difficultyinWords4check: false,
        },
      ],
      difficultyInSpeak: [
        {
          name: "Find the actual act of speaking difficult at times",
          difficultyInSpeak0check: false,
          difficultyInSpeak1check: false,
          difficultyInSpeak2check: false,
          difficultyInSpeak3check: false,
          difficultyInSpeak4check: false,
        },
      ],
      changeSpeakingFluency: [
        {
          name: "Notice word pronunciation and speaking fluency change at times",
          changeSpeakingFluency0check: false,
          changeSpeakingFluency1check: false,
          changeSpeakingFluency2check: false,
          changeSpeakingFluency3check: false,
          changeSpeakingFluency4check: false,
        },
      ],

      PositionLimbs: [
        {
          name: "Difficulty in perception of position of limbs",
          PositionLimbs0check: false,
          PositionLimbs1check: false,
          PositionLimbs2check: false,
          PositionLimbs3check: false,
          PositionLimbs4check: false,
        },
      ],
      spatialAwarness: [
        {
          name: "Difficulty with spatial awareness when moving, laying back in a chair, or leaning against a wall",
          spatialAwarness0check: false,
          spatialAwarness1check: false,
          spatialAwarness2check: false,
          spatialAwarness3check: false,
          spatialAwarness4check: false,
        },
      ],
      bumpingBody: [
        {
          name: "Frequently bumping body or limbs into the wall or objects accidently",
          bumpingBody0check: false,
          bumpingBody1check: false,
          bumpingBody2check: false,
          bumpingBody3check: false,
          bumpingBody4check: false,
        },
      ],
      ReoccurringInjury: [
        {
          name: "Reoccurring injury in the same body part or side of the body",
          ReoccurringInjury0check: false,
          ReoccurringInjury1check: false,
          ReoccurringInjury2check: false,
          ReoccurringInjury3check: false,
          ReoccurringInjury4check: false,
        },
      ],

      Hypersensitivities: [
        {
          name: "Hypersensitivities to touch or pain perception",
          Hypersensitivities0check: false,
          Hypersensitivities1check: false,
          Hypersensitivities2check: false,
          Hypersensitivities3check: false,
          Hypersensitivities4check: false,
        },
      ],

      clientName: "",
      date: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
    },
  ],
};

export default initialValues;
