import moment from "moment";
const initialValues = {
  page10: [
    {
      AbnormalCheck: false,
      AbnormalInput: "",

      DifficultyCheck: false,
      DifficultyInput: "",

      StaySleepCheck: false,
      SatySleepInput: "",

      FatigueCheck: false,
      FatigueInput: "",

      ChillsCheck: false,
      ChillsInput: "",

      RecentCheck: false,
      RecentInput: "",

      SleepCheck: false,
      SleepInput: "",

      ChestCheck: false,
      ChestInput: "",

      ColdnessCheck: false,
      ColdnessInput: "",

      CoughingCheck: false,
      CoughingInput: "",

      HeartbeatCheck: false,
      HeartbeatInput: "",

      NumbnessCheck: false,
      NumbnessInput: "",

      dizzinessCheck: false,
      dizzinessinput: "",

      AbdominalCheck: false,
      AbdominalInput: "",

      UrineColorCheck: false,
      UrineColorInput: "",

      BadCheck: false,
      BadInput: "",

      BloodCheck: false,
      BloodInput: "",

      ConstipationCheck: false,
      ConstipationInput: "",

      DiarrheaCheck: false,
      DiarrheaInput: "",

      GasCheck: false,
      GasInput: "",

      NeuroCheck: false,
      NeuroInput: "",

      BowelCheck: false,
      BowelInput: "",

      UrinationCheck: false,
      UrinationInput: "",

      VomitCheck: false,
      VomitInput: "",

      general: [
        {
          name: "Abnormal appetite",
          generalcheck: false,
          generalinput: "",
        },
        {
          name: "Difficulty falling/staying asleep",
          generalcheck: false,
          generalinput: "",
        },
        {
          name: "Fatigue",
          generalcheck: false,
          generalinput: "",
        },
        {
          name: "Recent fever/chills",
          generalcheck: false,
          generalinput: "",
        },
        {
          name: "Recent weight gain/loss",
          generalcheck: false,
          generalinput: "",
        },
        {
          name: "Sleep apnea/snoring",
          generalcheck: false,
          generalinput: "",
        },
      ],
      skin: [
        {
          name: "Body odors",
          skincheck: false,
          skininput: "",
        },
        {
          name: "Bruising",
          skincheck: false,
          skininput: "",
        },
        {
          name: "Eczema",
          skincheck: false,
          skininput: "",
        },
        {
          name: "Itching",
          skincheck: false,
          skininput: "",
        },
        {
          name: "Loss of hair",
          skincheck: false,
          skininput: "",
        },
        {
          name: "New growths/masses",
          skincheck: false,
          skininput: "",
        },
        {
          name: "Rashes",
          skincheck: false,
          skininput: "",
        },
        {
          name: "Recent hair/skin changes",
          skincheck: false,
          skininput: "",
        },
      ],
      chest: [
        {
          name: "Chest pain",
          chestcheck: false,
          chestinput: "",
        },
        {
          name: "Coldness in hands/feet",
          chestcheck: false,
          chestinput: "",
        },
        {
          name: "Coughing with blood",
          chestcheck: false,
          chestinput: "",
        },
        {
          name: "Difficulty breathing",
          chestcheck: false,
          chestinput: "",
        },
        {
          name: "Irregular heartbeat",
          chestcheck: false,
          chestinput: "",
        },
        {
          name: "Numbness in hands/feet",
          chestcheck: false,
          chestinput: "",
        },
      ],

      // right

      head: [
        {
          name: "Dizziness, balance problems",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Ear discharge",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Ear pain",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Eye pain",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Fillings/amalgams/crowns",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Food no longer tastes the same",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Headaches",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Jaw pain",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Migraines",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Mouth/Tongue sores",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Recurrent nosebleeds/discharge",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Ringing in the ears",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Sinus problems/congestion",
          headcheck: false,
          headinput: "",
        },
        {
          name: "Visual disturbances",
          headcheck: false,
          headinput: "",
        },
      ],
      abdomen: [
        {
          name: "Abdominal pain/cramps",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Abnormal urine color/Blood in urine",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Bad breath",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Blood in stool",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Constipation",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Diarrhea",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Gas/Bloating",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Nausea",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Pain with bowel movements",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Pain with urination",
          abdomencheck: false,
          abdomeninput: "",
        },
        {
          name: "Vomiting",
          abdomencheck: false,
          abdomeninput: "",
        },
      ],
      experienced: "",
      clientName: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
    },
  ],
};

export default initialValues;
