const initialValues = {
  page12: [
    {
      patient: "",
      date: "",
      dateofinjuries: "",
      // orthopedic: [
      //   {
      //     name: "Clunk sound with neck movements",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Neck pain",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Upper back pain",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Low back pain",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Shoulder pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Upper arm pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Elbow pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   // {
      //   //   name: "Elbow pain",
      //   //   orthopediccheck: false,
      //   //   orthopedileft: false,
      //   //   orthopediright: false,
      //   // },
      //   {
      //     name: "Forearm pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Wrist pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name:"Hand pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Hip pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Upper leg pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Knee pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Lower leg pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Ankle pain",
      //     orthopediccheck: false,
      //     orthopedileft: false,
      //     orthopediright: false,
      //   },
      //   {
      //     name: "Foot pain",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Jaw pain",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Clicking in Jaw",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Pain when chewing",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Face pain",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Chest pain",
      //     orthopediccheck: false,
      //   },
      //   {
      //     name: "Stomach pain",
      //     orthopediccheck: false,
      //     orthopedicinput: "",
      //   },
      //   {
      //     name: "Bruise to",
      //     orthopediccheck: false,
      //     orthopedicinput: "",
      //   },
      //   {
      //     name: "Scrape/Cut to",
      //     orthopediccheck: false,
      //     orthopedicinput: "",
      //   },
      //   {
      //     name: "Other Symptom1",
      //     orthopediccheck: false,
      //     orthopedicinput: "",
      //   },
      //   {
      //     name: "Other Symptom2",
      //     orthopediccheck: false,
      //     orthopedicinput: "",
      //   },
      // ],
      neurological: [
        {
          name: "Numb/Tingling Arm / Hand",
          neurologicalcheck: false,
          neurologicalleft: false,
          neurologicalright: false,
        },
        {
          name: "Numb/Tingling Leg / Foot",
          neurologicalcheck: false,
          neurologicalleft: false,
          neurologicalright: false,
        },
        {
          name: "Weakness Arm / Hand",
          neurologicalcheck: false,
          neurologicalleft: false,
          neurologicalright: false,
        },
        {
          name: "Weakness Leg / Foot",
          neurologicalcheck: false,
          neurologicalleft: false,
          neurologicalright: false,
        },
      ],
      injuries: [
        {
          name: "Stiffness or limited movement in joint(s)",
          injuriescheck: false,
        },
        {
          name: "Headaches",
          injuriescheck: false,
        },
        {
          name: "Muscle spasms/sore muscles",
          injuriescheck: false,
        },
        {
          name: "Dizziness, lightheaded, woozy feeling",
          injuriescheck: false,
        },
        {
          name: "Visual disturbances or vision change",
          injuriescheck: false,
        },
        {
          name: "Sleep changes/disruption of patterns",
          injuriescheck: false,
        },
        {
          name: "Pain radiates from one place to another",
          injuriescheck: false,
        },
        {
          name: "Anxiety or nervous when driving",
          injuriescheck: false,
        },
        {
          name: "Irregular Heartbeat or uneven pulse",
          injuriescheck: false,
        },
        {
          name: "Feeling depressed about things",
          injuriescheck: false,
        },
        {
          name: "I am taking the following medications",
          injuriescheck: false,
          injuriesInput: "",
        },
      ],
      brain: [
        {
          name: "I prefer being alone now (not socializing)",
          braincheck: false,
        },
        {
          name: "I am sleepy, tired during day or doze off easily",
          braincheck: false,
        },
        {
          name: "Upset stomach, nausea, heartburn or vomiting",
          braincheck: false,
        },
        {
          name: "Difficulty concentrating, mind wanders easily",
          braincheck: false,
        },
        {
          name: "I get overwhelmed easily",
          braincheck: false,
        },
        {
          name: "Mood swings, happy one moment then sad",
          braincheck: false,
        },
        {
          name: "Agitation (can't sit still, need to move around)",
          braincheck: false,
        },
        {
          name: "Agitation (can't sit still, need to move around)",
          braincheck: false,
        },
        {
          name: "Sadness, tearful episodes, crying easily",
          braincheck: false,
        },
        {
          name: "Blurry vision, had to get or change glasses",
          braincheck: false,
        },
        {
          name: "Asking people to repeat things or hearing problem",
          braincheck: false,
        },
        {
          name: "I make wrong turns driving or can't remember time",
          braincheck: false,
        },
        {
          name: "I get confused easily or cannot multi-task anymore",
          braincheck: false,
        },
        {
          name: "I have difficulty finding some words when talking",
          braincheck: false,
        },
        {
          name: "Bright lights bother me",
          braincheck: false,
        },
        {
          name: "I cannot pay attention as long as before",
          braincheck: false,
        },
        {
          name: "I am eating more or less than normal",
          braincheck: false,
        },
        {
          name: "Room spins, lightheaded or woozy feeling",
          braincheck: false,
        },
        {
          name: "Balance problems",
          braincheck: false,
        },
        {
          name: `$("I feel like my head is") "Foggy"`,
          braincheck: false,
        },
        {
          name: "I have forgotten computer passwords or ATM PIN",
          namebraincheck: false,
        },
        {
          name: "I have to re-read things to understand what I read",
          braincheck: false,
        },
        {
          name: "My thinking is slowed down",
          braincheck: false,
        },
        {
          name: "Difficulty with adding/subtracting numbers",
          braincheck: false,
        },
        {
          name: "Fear I will never be the same again",
          braincheck: false,
        },
        {
          name: "Difficulty learning new things",
          braincheck: false,
        },
        {
          name: "Difficulty understanding what people say to me",
          braincheck: false,
        },
        {
          name: "Cannot take on any more responsibility",
          braincheck: false,
        },
        {
          name: "I can't make decisions as quickly as before",
          braincheck: false,
        },
        {
          name: "Loss of libido or lack of sexual desire",
          braincheck: false,
        },
        {
          name: "I do not feel as confident of my abilities",
          braincheck: false,
        },
        {
          name: "I get panic attacks, fast heartbeat, nervous",
          braincheck: false,
        },
        {
          name: "I am more irritable than usual",
          braincheck: false,
        },
        {
          name: `$("Some food or drink tastes "Funny" to me now")`,
          braincheck: false,
        },
        {
          name: "I get frustrated very easily",
          braincheck: false,
        },
        {
          name: "Difficulty planning my life or organizing my work",
          braincheck: false,
        },
        {
          name: "Flashbacks or frightening thoughts about accident",
          braincheck: false,
        },
        {
          name: "I have had bad dreams about the accident",
          braincheck: false,
        },
        {
          name: "I avoid places & objects that remind me about it",
          braincheck: false,
        },
        {
          name: "I feel emotionally numb-no interest in my hobbies",
          braincheck: false,
        },
        {
          name: "I'm feeling strong guilt, worry or depression",
          braincheck: false,
        },
        {
          name: "I'm feeling strong guilt, worry or depression",
          braincheck: false,
        },

        {
          name: `$("I am easily startled since the accident -") "jumpy"`,
          braincheck: false,
        },
        {
          name: `$("I feel tense or "on edge" most of the time")`,
          braincheck: false,
        },
        {
          name: "I am having difficulty sleeping",
          braincheck: false,
        },
        {
          name: "I get angry easily or even yell at people now",
          braincheck: false,
        },
      ],
      patientsign: "",
      doctorsign: "",
    },
  ],
};

export default initialValues;
