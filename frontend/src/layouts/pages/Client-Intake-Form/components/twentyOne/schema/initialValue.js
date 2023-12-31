import moment from "moment";
const initialValues = {
  page25: [
    {
      formCreatedDate: moment().format("DD-MM-YYYY"),
      name: "",
      age: "",
      gender: "",
      date: "",
      sections1: [
        {
          name: "Low brain endurance for focus and concentration",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Cold hands and feet",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Must exercise or drink coffee to improve brain function",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Poor nail health",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Fungal growth on toenails",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Must wear socks at night",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Nail beds are white instead of pink",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "The tip of the nose is cold",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
      ],
      sections2: [
        {
          name: "Irritable, nervous, shaky, or light-headed between meals",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Feel energized after meals",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty eating large meals in the morning",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Energy level drops in the afternoon",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Crave sugar and sweets in the afternoon",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Wake up in the middle of the night",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty concentrating before eating",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },

        {
          name: "Depend on coffee to keep going",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
      ],
      sections3: [
        {
          name: "Fatigue after meals",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Sugar and sweet cravings after meals",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Need for a stimulant, such as coffee, after meals",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty losing weight",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Increased frequency of urination",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty falling asleep",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Increased appetite",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
      ],
      sections4: [
        {
          name: "Always have projects and things that need to be done",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Never have time for yourself",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Not getting enough sleep or rest",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty getting regular exercise",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Feel that you are not accomplishing your life’s purpose",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
      ],
      sections5: [
        {
          name: "Dry and unhealthy skin",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Dandruff or a flaky scalp",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Consumption of processed foods that are bagged or boxed",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Consumption of fried foods",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty consuming raw nuts or seeds",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty consuming fish (not fried)",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "	 Difficulty consuming olive oil, avocados, flax seed oil, or natural fats",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
      ],
      sections6: [
        {
          name: "Difficulty digesting foods",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Constipation or inconsistent bowel movements",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Increased bloating or gas",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Abdominal distention after meals",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty digesting protein-rich foods",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty digesting starch-rich foods",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty digesting fatty or greasy foods",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Difficulty swallowing supplements or large bites of food",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Abnormal gag reflex",
          sections6radio: "",
        },
      ],
      sections7: [
        {
          name: "Brain fog (unclear thoughts or concentration)",
          sections7radio: "",
        },
        {
          name: "Pain and inflammation",
          sections7radio: "",
        },
        {
          name: "Noticeable variations in mental speed",
          sections7radio: "",
        },
        {
          name: "Brain fatigue after meals",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Brain fatigue after exposure to chemicals, scents, or pollutants",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Brain fatigue when the body is inflamed",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
      ],
      sections8: [
        {
          name: "Grain consumption leads to tiredness",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Grain consumption makes it difficult to focus and concentrate",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Feel better when bread and grains are avoided",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "Grain consumption causes the development of any symptoms",
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false,
        },
        {
          name: "A 100% gluten-free diet",
          sections8radio: "",
        },
      ],
    },
  ],
};

export default initialValues;
