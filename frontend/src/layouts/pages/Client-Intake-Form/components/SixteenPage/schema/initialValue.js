import moment from "moment";
const initialValues = {
  page20: [
    {
      confusion: [
        {
          name: "Right/left confusion",
          confusion0check: false,
          confusion1check: false,
          confusion2check: false,
          confusion3check: false,
          confusion4check: false,
        },
      ],

      mathcalculations: [
        {
          name: "Difficulty with math calculations",
          mathcalculations0check: false,
          mathcalculations1check: false,
          mathcalculations2check: false,
          mathcalculations3check: false,
          mathcalculations4check: false,
        },
      ],

      findingwords: [
        {
          name: "Difficulty finding words",
          findingwords0check: false,
          findingwords1check: false,
          findingwords2check: false,
          findingwords3check: false,
          findingwords4check: false,
        },
      ],

      writingwords: [
        {
          name: "Difficulty with writing",
          writingwords0check: false,
          writingwords1check: false,
          writingwords2check: false,
          writingwords3check: false,
          writingwords4check: false,
        },
      ],

      recognizingsymbols: [
        {
          name: "Difficulty recognizing symbols or shapes",
          recognizingsymbols0check: false,
          recognizingsymbols1check: false,
          recognizingsymbols2check: false,
          recognizingsymbols3check: false,
          recognizingsymbols4check: false,
        },
      ],

      simpledrawings: [
        {
          name: "Difficulty with simple drawings",
          simpledrawings0check: false,
          simpledrawings1check: false,
          simpledrawings2check: false,
          simpledrawings3check: false,
          simpledrawings4check: false,
        },
      ],

      interpretingmaps: [
        {
          name: "Difficulty interpreting maps",
          interpretingmaps0check: false,
          interpretingmaps1check: false,
          interpretingmaps2check: false,
          interpretingmaps3check: false,
          interpretingmaps4check: false,
        },
      ],

      hearing: [
        {
          name: "Reduced function in overall hearing",
          hearing0check: false,
          hearing1check: false,
          hearing2check: false,
          hearing3check: false,
          hearing4check: false,
        },
      ],

      scatternoise: [
        {
          name: "Difficulty interpreting speech with background or scatter noise",
          scatternoise0check: false,
          scatternoise1check: false,
          scatternoise2check: false,
          scatternoise3check: false,
          scatternoise4check: false,
        },
      ],

      pronunciation: [
        {
          name: "Difficulty comprehending language without perfect pronunciation",
          pronunciation0check: false,
          pronunciation1check: false,
          pronunciation2check: false,
          pronunciation3check: false,
          pronunciation4check: false,
        },
      ],

      saying: [
        {
          name: "Need to look at someone’s mouth when they are speaking to understand what they are saying",
          saying0check: false,
          saying1check: false,
          saying2check: false,
          saying3check: false,
          saying4check: false,
        },
      ],

      sound: [
        {
          name: "Difficulty in localizing sound",
          sound0check: false,
          sound1check: false,
          sound2check: false,
          sound3check: false,
          sound4check: false,
        },
      ],

      predictablerhythmic: [
        {
          name: "Dislike of left predictable rhythmic, repeated tempo and beat music",
          predictablerhythmic0check: false,
          predictablerhythmic1check: false,
          predictablerhythmic2check: false,
          predictablerhythmic3check: false,
          predictablerhythmic4check: false,
        },
      ],

      nonpredictablerhythmic: [
        {
          name: "Dislike of non-predictable rhythmic with multiple instruments",
          nonpredictablerhythmic0check: false,
          nonpredictablerhythmic1check: false,
          nonpredictablerhythmic2check: false,
          nonpredictablerhythmic3check: false,
          nonpredictablerhythmic4check: false,
        },
      ],

      Noticeable: [
        {
          name: "Noticeable ear preference when using your phone",
          Noticeable0check: false,
          Noticeable1check: false,
          Noticeable2check: false,
        },
      ],

      comprehending: [
        {
          name: "Difficulty comprehending meaning of spoken word",
          comprehending0check: false,
          comprehending1check: false,
          comprehending2check: false,
          comprehending3check: false,
          comprehending4check: false,
        },
      ],

      emotions: [
        {
          name: "Tend toward monotone speech without fluctuations or emotions",
          emotions0check: false,
          emotions1check: false,
          emotions2check: false,
          emotions3check: false,
          emotions4check: false,
        },
      ],

      Memorylessefficient: [
        {
          name: "Memory less efficient",
          Memorylessefficient0check: false,
          Memorylessefficient1check: false,
          Memorylessefficient2check: false,
          Memorylessefficient3check: false,
          Memorylessefficient4check: false,
        },
      ],
      impactsdailyactivities: [
        {
          name: "Memory loss that impacts daily activities",
          impactsdailyactivities0check: false,
          impactsdailyactivities1check: false,
          impactsdailyactivities2check: false,
          impactsdailyactivities3check: false,
          impactsdailyactivities4check: false,
        },
      ],
      Confusionaboutdates: [
        {
          name: "Confusion about dates, the passage of time, or place",
          Confusionaboutdates0check: false,
          Confusionaboutdates1check: false,
          Confusionaboutdates2check: false,
          Confusionaboutdates3check: false,
          Confusionaboutdates4check: false,
        },
      ],
      Difficultyrememberingevents: [
        {
          name: "Difficulty remembering events",
          Difficultyrememberingevents0check: false,
          Difficultyrememberingevents1check: false,
          Difficultyrememberingevents2check: false,
          Difficultyrememberingevents3check: false,
          Difficultyrememberingevents4check: false,
        },
      ],
      Misplacementofthings: [
        {
          name: "Misplacement of things and difficulty retracing steps",
          Misplacementofthings0check: false,
          Misplacementofthings1check: false,
          Misplacementofthings2check: false,
          Misplacementofthings3check: false,
          Misplacementofthings4check: false,
        },
      ],
      addresses: [
        {
          name: "Difficulty with memory of locations (addresses)",
          addresses0check: false,
          addresses1check: false,
          addresses2check: false,
          addresses3check: false,
          addresses4check: false,
        },
      ],
      visualmemory: [
        {
          name: "Difficulty with visual memory",
          visualmemory0check: false,
          visualmemory1check: false,
          visualmemory2check: false,
          visualmemory3check: false,
          visualmemory4check: false,
        },
      ],
      Alwaysforgetting: [
        {
          name: "Always forgetting where you put items such as keys, wallet, phone, etc.",
          Alwaysforgetting0check: false,
          Alwaysforgetting1check: false,
          Alwaysforgetting2check: false,
          Alwaysforgetting3check: false,
          Alwaysforgetting4check: false,
        },
      ],
      rememberingfaces: [
        {
          name: "Difficulty remembering faces",
          rememberingfaces0check: false,
          rememberingfaces1check: false,
          rememberingfaces2check: false,
          rememberingfaces3check: false,
          rememberingfaces4check: false,
        },
      ],
      Difficultyrememberingnames: [
        {
          name: "Difficulty remembering names with faces",
          Difficultyrememberingnames0check: false,
          Difficultyrememberingnames1check: false,
          Difficultyrememberingnames2check: false,
          Difficultyrememberingnames3check: false,
          Difficultyrememberingnames4check: false,
        },
      ],
      Difficultywithrememberingwords: [
        {
          name: "Difficulty with remembering words",
          Difficultywithrememberingwords0check: false,
          Difficultywithrememberingwords1check: false,
          Difficultywithrememberingwords2check: false,
          Difficultywithrememberingwords3check: false,
          Difficultywithrememberingwords4check: false,
        },
      ],
      Difficultyrememberingnumbers: [
        {
          name: "Difficulty remembering numbers",
          Difficultyrememberingnumbers0check: false,
          Difficultyrememberingnumbers1check: false,
          Difficultyrememberingnumbers2check: false,
          Difficultyrememberingnumbers3check: false,
          Difficultyrememberingnumbers4check: false,
        },
      ],
      Difficultyrememberingtostay: [
        {
          name: "Difficulty remembering to stay or be on time",
          Difficultyrememberingtostay0check: false,
          Difficultyrememberingtostay1check: false,
          Difficultyrememberingtostay2check: false,
          Difficultyrememberingtostay3check: false,
          Difficultyrememberingtostay4check: false,
        },
      ],
      Difficultyindiscriminating: [
        {
          name: "Difficulty in discriminating similar shades of color",
          Difficultyindiscriminating0check: false,
          Difficultyindiscriminating1check: false,
          Difficultyindiscriminating2check: false,
          Difficultyindiscriminating3check: false,
          Difficultyindiscriminating4check: false,
        },
      ],
      Dullnessofcolors: [
        {
          name: "Dullness of colors in visual field",
          Dullnessofcolors0check: false,
          Dullnessofcolors1check: false,
          Dullnessofcolors2check: false,
          Dullnessofcolors3check: false,
          Dullnessofcolors4check: false,
        },
      ],
      Difficultycoordinatingvisualinputs: [
        {
          name: "Difficulty coordinating visual inputs and hand movements, resulting in an inability to efficiently reach out for objects",
          Difficultycoordinatingvisualinputs0check: false,
          Difficultycoordinatingvisualinputs1check: false,
          Difficultycoordinatingvisualinputs2check: false,
          Difficultycoordinatingvisualinputs3check: false,
          Difficultycoordinatingvisualinputs4check: false,
        },
      ],
      Floaterorhalos: [
        {
          name: "Floater or halos in visual field",
          Floaterorhalos0check: false,
          Floaterorhalos1check: false,
          Floaterorhalos2check: false,
          Floaterorhalos3check: false,
          Floaterorhalos4check: false,
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
