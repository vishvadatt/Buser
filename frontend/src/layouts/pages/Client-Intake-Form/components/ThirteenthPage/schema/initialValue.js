import moment from "moment";
const initialValues = {
  page17: [
    {
      CategoryIi: [
        {
          name: "Feeling that bowels do not empty completely",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "Lower abdominal pain relieved by passing stool or gas",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "Alternating constipation and diarrhea ",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "Diarrhea",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "Constipation",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "Hard, dry, or small stool",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "Coated tongue or “fuzzy” debris on tongue",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "Pass large amount of foul-smelling gas",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "More than 3 bowel movements daily",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
        {
          name: "Use laxatives frequently",
          CategoryIi0check: false,
          CategoryIi1check: false,
          CategoryIi2check: false,
          CategoryIi3check: false,
        },
      ],

      CategoryII: [
        {
          name: "Increasing frequency of food reactions",
          CategoryII0check: false,
          CategoryII1check: false,
          CategoryII2check: false,
          CategoryII3check: false,
        },
        {
          name: "Unpredictable food reactions",
          CategoryII0check: false,
          CategoryII1check: false,
          CategoryII2check: false,
          CategoryII3check: false,
        },
        {
          name: "Aches, pains, and swelling throughout the body",
          CategoryII0check: false,
          CategoryII1check: false,
          CategoryII2check: false,
          CategoryII3check: false,
        },
        {
          name: "Unpredictable abdominal swelling",
          CategoryII0check: false,
          CategoryII1check: false,
          CategoryII2check: false,
          CategoryII3check: false,
        },
        {
          name: "Frequent bloating and distention after eating",
          CategoryII0check: false,
          CategoryII1check: false,
          CategoryII2check: false,
          CategoryII3check: false,
        },
      ],

      CategoryIII: [
        {
          name: "Intolerance to smells",
          CategoryIII0check: false,
          CategoryIII1check: false,
          CategoryIII2check: false,
          CategoryIII3check: false,
        },
        {
          name: "Intolerance to jewelry",
          CategoryIII0check: false,
          CategoryIII1check: false,
          CategoryIII2check: false,
          CategoryIII3check: false,
        },
        {
          name: "Intolerance to shampoo, lotion, detergents, etc",
          CategoryIII0check: false,
          CategoryIII1check: false,
          CategoryIII2check: false,
          CategoryIII3check: false,
        },
        {
          name: "Multiple smell and chemical sensitivities",
          CategoryIII0check: false,
          CategoryIII1check: false,
          CategoryIII2check: false,
          CategoryIII3check: false,
        },
        {
          name: "Constant skin outbreaks",
          CategoryIII0check: false,
          CategoryIII1check: false,
          CategoryIII2check: false,
          CategoryIII3check: false,
        },
      ],
      CategoryIV: [
        {
          name: "Excessive belching, burping, or bloating",
          CategoryIV0check: false,
          CategoryIV1check: false,
          CategoryIV2check: false,
          CategoryIV3check: false,
        },
        {
          name: "Gas immediately following a meal",
          CategoryIV0check: false,
          CategoryIV1check: false,
          CategoryIV2check: false,
          CategoryIV3check: false,
        },
        {
          name: "Offensive breath",
          CategoryIV0check: false,
          CategoryIV1check: false,
          CategoryIV2check: false,
          CategoryIV3check: false,
        },
        {
          name: "Difficult bowel movements",
          CategoryIV0check: false,
          CategoryIV1check: false,
          CategoryIV2check: false,
          CategoryIV3check: false,
        },
        {
          name: "Sense of fullness during and after meals",
          CategoryIV0check: false,
          CategoryIV1check: false,
          CategoryIV2check: false,
          CategoryIV3check: false,
        },
        {
          name: "Difficulty digesting proteins and meats; undigested food found in stools",
          CategoryIV0check: false,
          CategoryIV1check: false,
          CategoryIV2check: false,
          CategoryIV3check: false,
        },
      ],
      CategoryV: [
        {
          name: "Stomach pain, burning, or aching 1-4 hours after eating",
          CategoryV0check: false,
          CategoryV1check: false,
          CategoryV2check: false,
          CategoryV3check: false,
        },
        {
          name: "Use of antacids",
          CategoryV0check: false,
          CategoryV1check: false,
          CategoryV2check: false,
          CategoryV3check: false,
        },
        {
          name: "Feel hungry an hour or two after eating",
          CategoryV0check: false,
          CategoryV1check: false,
          CategoryV2check: false,
          CategoryV3check: false,
        },
        {
          name: "Heartburn when lying down or bending forward",
          CategoryV0check: false,
          CategoryV1check: false,
          CategoryV2check: false,
          CategoryV3check: false,
        },
        {
          name: "Temporary relief by using antacids, food, milk, or carbonated beverages",
          CategoryV0check: false,
          CategoryV1check: false,
          CategoryV2check: false,
          CategoryV3check: false,
        },
        {
          name: "Digestive problems subside with rest and relaxation",
          CategoryV0check: false,
          CategoryV1check: false,
          CategoryV2check: false,
          CategoryV3check: false,
        },
        {
          name: "Heartburn due to spicy foods, chocolate, citrus, peppers, alcohol, and caffeine",
          CategoryV0check: false,
          CategoryV1check: false,
          CategoryV2check: false,
          CategoryV3check: false,
        },
      ],
      CategoryVIi: [
        {
          name: "Difficulty digesting roughage and fiber",
          CategoryVIi0check: false,
          CategoryVIi1check: false,
          CategoryVIi2check: false,
          CategoryVIi3check: false,
        },
        {
          name: "Indigestion and fullness last 2-4 hours after eating",
          CategoryVIi0check: false,
          CategoryVIi1check: false,
          CategoryVIi2check: false,
          CategoryVIi3check: false,
        },
        {
          name: "Pain, tenderness, soreness on left side under rib cage",
          CategoryVIi0check: false,
          CategoryVIi1check: false,
          CategoryVIi2check: false,
          CategoryVIi3check: false,
        },
        {
          name: "Excessive passage of gas",
          CategoryVIi0check: false,
          CategoryVIi1check: false,
          CategoryVIi2check: false,
          CategoryVIi3check: false,
        },
        {
          name: "Nausea and/or vomiting",
          CategoryVIi0check: false,
          CategoryVIi1check: false,
          CategoryVIi2check: false,
          CategoryVIi3check: false,
        },
        {
          name: "Stool undigested, foul smelling, mucus like, greasy, or poorly formed",
          CategoryVIi0check: false,
          CategoryVIi1check: false,
          CategoryVIi2check: false,
          CategoryVIi3check: false,
        },
        {
          name: "Frequent loss of appetite      ",
          CategoryVIi0check: false,
          CategoryVIi1check: false,
          CategoryVIi2check: false,
          CategoryVIi3check: false,
        },
      ],

      CategoryVII: [
        {
          name: "Abdominal distention after consumption of fiber, starches, and sugar",
          CategoryVII0check: false,
          CategoryVII1check: false,
          CategoryVII2check: false,
          CategoryVII3check: false,
        },
        {
          name: "Abdominal distention after certain probiotic or natural supplements",
          CategoryVII0check: false,
          CategoryVII1check: false,
          CategoryVII2check: false,
          CategoryVII3check: false,
        },
        {
          name: "Decreased gastrointestinal motility, constipation",
          CategoryVII0check: false,
          CategoryVII1check: false,
          CategoryVII2check: false,
          CategoryVII3check: false,
        },
        {
          name: "Increased gastrointestinal motility, diarrhea",
          CategoryVII0check: false,
          CategoryVII1check: false,
          CategoryVII2check: false,
          CategoryVII3check: false,
        },
        {
          name: "Alternating constipation and diarrhea",
          CategoryVII0check: false,
          CategoryVII1check: false,
          CategoryVII2check: false,
          CategoryVII3check: false,
        },
        {
          name: "Suspicion of nutritional malabsorption",
          CategoryVII0check: false,
          CategoryVII1check: false,
          CategoryVII2check: false,
          CategoryVII3check: false,
        },
        {
          name: "Frequent use of antacid medication      ",
          CategoryVII0check: false,
          CategoryVII1check: false,
          CategoryVII2check: false,
          CategoryVII3check: false,
        },
        {
          name: "Have you been diagnosed with Celiac Disease, Irritable Bowel Syndrome, Diverticulosis/Diverticulitis, or Leaky Gut Syndrome?",
          CategoryVIIredio1: "",
        },
      ],
      CategoryVIII: [
        {
          name: "Greasy or high-fat foods cause distress",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "Lower bowel gas and/or bloating several hours after eating",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "Bitter metallic taste in mouth, especially in the morning",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "Burpy, fishy taste after consuming fish oils",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "Unexplained itchy skin",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "Yellowish cast to eyes",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "Stool color alternates from clay colored to normal brown",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },

        {
          name: "Reddened skin, especially palms",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "Dry or flaky skin and/or hair",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "History of gallbladder attacks or stones",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
        {
          name: "Have you had your gallbladder removed?",
          CategoryVIII0check: false,
          CategoryVIII1check: false,
          CategoryVIII2check: false,
          CategoryVIII3check: false,
        },
      ],

      CategoryIX: [
        {
          name: "Acne and unhealthy skin",
          CategoryIX0check: false,
          CategoryIX1check: false,
          CategoryIX2check: false,
          CategoryIX3check: false,
        },
        {
          name: "Excessive hair loss",
          CategoryIX0check: false,
          CategoryIX1check: false,
          CategoryIX2check: false,
          CategoryIX3check: false,
        },
        {
          name: "Overall sense of bloating      ",
          CategoryIX0check: false,
          CategoryIX1check: false,
          CategoryIX2check: false,
          CategoryIX3check: false,
        },
        {
          name: "Bodily swelling for no reason",
          CategoryIX0check: false,
          CategoryIX1check: false,
          CategoryIX2check: false,
          CategoryIX3check: false,
        },
        {
          name: "Hormone imbalances",
          CategoryIX0check: false,
          CategoryIX1check: false,
          CategoryIX2check: false,
          CategoryIX3check: false,
        },
        {
          name: "Weight gain",
          CategoryIX0check: false,
          CategoryIX1check: false,
          CategoryIX2check: false,
          CategoryIX3check: false,
        },
        {
          name: "Poor bowel function",
          CategoryIX0check: false,
          CategoryIX1check: false,
          CategoryIX2check: false,
          CategoryIX3check: false,
        },
        {
          name: "Excessively foul-smelling sweat      ",
          CategoryIX0check: false,
          CategoryIX1check: false,
          CategoryIX2check: false,
          CategoryIX3check: false,
        },
      ],

      CategoryX: [
        {
          name: "Crave sweets during the day",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
        {
          name: "Irritable if meals are missed",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
        {
          name: "Depend on coffee to keep going/get started",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
        {
          name: "Get light-headed if meals are missed",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
        {
          name: "Eating relieves fatigue",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
        {
          name: "My pain is rapidly worsening.",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
        {
          name: "Feel shaky, jittery, or have tremors",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },

        {
          name: "Agitated, easily upset, nervous",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
        {
          name: "Poor memory, forgetful between meals",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
        {
          name: "Blurred vision",
          CategoryX0check: false,
          CategoryX1check: false,
          CategoryX2check: false,
          CategoryX3check: false,
        },
      ],

      CategoryXIi: [
        {
          name: "Fatigue after meals",
          CategoryXIi0check: false,
          CategoryXIi1check: false,
          CategoryXIi2check: false,
          CategoryXIi3check: false,
        },
        {
          name: "Crave sweets during the day",
          CategoryXIi0check: false,
          CategoryXIi1check: false,
          CategoryXIi2check: false,
          CategoryXIi3check: false,
        },
        {
          name: "Eating sweets does not relieve cravings for sugar",
          CategoryXIi0check: false,
          CategoryXIi1check: false,
          CategoryXIi2check: false,
          CategoryXIi3check: false,
        },
        {
          name: "Must have sweets after meals",
          CategoryXIi0check: false,
          CategoryXIi1check: false,
          CategoryXIi2check: false,
          CategoryXIi3check: false,
        },
        {
          name: "Waist girth is equal or larger than hip girth      ",
          CategoryXIi0check: false,
          CategoryXIi1check: false,
          CategoryXIi2check: false,
          CategoryXIi3check: false,
        },
        {
          name: "Frequent urination",
          CategoryXIi0check: false,
          CategoryXIi1check: false,
          CategoryXIi2check: false,
          CategoryXIi3check: false,
        },
        {
          name: "Increased thirst and appetite",
          CategoryXIi0check: false,
          CategoryXIi1check: false,
          CategoryXIi2check: false,
          CategoryXIi3check: false,
        },

        {
          name: "Difficulty losing weight",
          CategoryXIi0check: false,
          CategoryXIi1check: false,
          CategoryXIi2check: false,
          CategoryXIi3check: false,
        },
      ],

      difficulty0check: false,
      difficulty1check: false,
      difficulty2check: false,
      difficulty3check: false,
      categoryVIIradio0: "",
      CategoryVII0radio: "",
      CategoryVIII0radio: "",
      healthConcer1: "",
      healthConcer2: "",
      healthConcer3: "",
      healthConcer4: "",
      healthConcer5: "",

      clientName: "",
      age: "",
      gender: "",
      date: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
    },
  ],
};

export default initialValues;