import moment from "moment";
const initialValues = {
  page16: [
    {
      section1: [
        {
          name: "The pain comes and goes and is very mild.",
          section1check: false,
        },
        {
          name: "The pain is mild and does not vary much.",
          section1check: false,
        },
        {
          name: "The pain comes and goes and is moderate.",
          section1check: false,
        },
        {
          name: "The pain is moderate and does not vary much.",
          section1check: false,
        },
        {
          name: "The pain is severe but comes and goes.",
          section1check: false,
        },
        {
          name: "The pain is severe and does not vary much.",
          section1check: false,
        },
      ],
      section2: [
        {
          name: "I would not have to change my way of washing or dressing in order to avoid pain.",
          section2check: false,
        },
        {
          name: "I do not normally change my way of washing or dressing even though it causes some pain.",
          section2check: false,
        },
        {
          name: "Washing and dressing increase the pain, but I manage not to change my way of doing it.",
          section2check: false,
        },
        {
          name: "Washing and dressing increase the pain and I find it necessary to change my way of doing it.",
          section2check: false,
        },
        {
          name: "Because of the pain, I am unable to do any washing and dressing without help.",
          section2check: false,
        },
        {
          name: "Because of the pain, I am unable to do any washing or dressing and essentially remain in bed.",
          section2check: false,
        },
      ],
      section3: [
        {
          name: "I can lift heavy weights without extra pain.",
          section3check: false,
        },
        {
          name: "I can lift heavy weights, but it causes extra pain.",
          section3check: false,
        },
        {
          name: "Pain prevents me from lifting heavy weights off the floor.",
          section3check: false,
        },
        {
          name: "Pain prevents me from lifting heavy weights off the floor, but I can manage if they are conveniently positioned, e.g. on the table.",
          section3check: false,
        },
        {
          name: "Pain prevents me from lifting heavy weights , but I can manage light to medium weights if they are conveniently positioned.",
          section3check: false,
        },
        {
          name: "I can only lift very light weights, at the most.",
          section3check: false,
        },
      ],
      section4: [
        {
          name: "Pain does not prevent me from walking any distance.",
          section4check: false,
        },
        {
          name: "Pain prevents me from walking more than one mile.",
          section4check: false,
        },
        {
          name: "Pain prevents me from walking more than 1/4 mile.",
          section4check: false,
        },
        {
          name: "Pain prevents me from walking more than 100 yards.",
          section4check: false,
        },
        {
          name: "I can only walk while using a cane or on crutches.",
          section4check: false,
        },
        {
          name: "I am in bed most of the time and have to crawl to the toilet.",
          section4check: false,
        },
      ],
      section5: [
        {
          name: "I can sit in any chair as long as I like without pain.",
          section5check: false,
        },
        {
          name: "I can only sit in my favorite chair as long as I like.",
          section5check: false,
        },
        {
          name: "Pain prevents me from sitting more than one hour.",
          section5check: false,
        },
        {
          name: "Pain prevents me from sitting more than 1/2 hour.",
          section5check: false,
        },
        {
          name: "Pain prevents me from sitting more than ten minutes.",
          section5check: false,
        },
        {
          name: "Pain prevents me from sitting at all.",
          section5check: false,
        },
      ],
      section6: [
        {
          name: "I can stand as long as I want without pain.",
          section6check: false,
        },
        {
          name: "I have some pain while standing, but it does not increase with time.",
          section6check: false,
        },
        {
          name: "I cannot stand for longer than one hour without increasing pain.",
          section6check: false,
        },
        {
          name: "I cannot stand for longer than ½ hour without increasing pain.",
          section6check: false,
        },
        {
          name: "I cannot stand for more than 10 minutes without increasing pain.",
          section6check: false,
        },
        {
          name: "Pain prevents me from standing at all.",
          section6check: false,
        },
      ],
      section7: [
        {
          name: "I get no pain in bed.",
          section7check: false,
        },
        {
          name: "I get pain in bed, but it does not prevent me from sleeping.",
          section7check: false,
        },
        {
          name: "Because of pain , my normal night’s sleep is reduced by less than one-quarter.",
          section7check: false,
        },
        {
          name: "Because of pain, my normal night’s sleep is reduced by less than one-half.",
          section7check: false,
        },
        {
          name: "Because of pain, my normal night’s sleep is reduced by less than three-quarters.",
          section7check: false,
        },
        {
          name: "Pain prevents me from sleeping at all.",
          section7check: false,
        },
      ],
      section8: [
        {
          name: "My social life is normal and gives me no pain.",
          section8check: false,
        },
        {
          name: "My social life is normal, but increases the degree of my pain.",
          section8check: false,
        },
        {
          name: "Pain has no significant effect on my social life apart from limiting my more energetic interests, e.g., dancing, etc.",
          section8check: false,
        },
        {
          name: "Pain has restricted my social life and I do not go out very often.",
          section8check: false,
        },
        {
          name: "Pain has restricted my social life to my home.",
          section8check: false,
        },
        {
          name: "I have no social life due to pain.",
          section8check: false,
        },
      ],
      section9: [
        {
          name: "I get no pain while traveling.",
          section9check: false,
        },
        {
          name: "I get some pain while traveling, but none of my usual forms of travel make it any worse.",
          section9check: false,
        },
        {
          name: "I get extra pain while traveling, but it does not compel me to seek alternative forms of travel.",
          section9check: false,
        },
        {
          name: "I get extra pain while traveling which compels me to seek alternative forms of travel.",
          section9check: false,
        },
        {
          name: "Pain prevents all forms of travel except that done lying down.",
          section9check: false,
        },
        {
          name: "Pain prevents all forms of travel.",
          section9check: false,
        },
      ],
      section10: [
        {
          name: "My pain is rapidly getting better.",
          section10check: false,
        },
        {
          name: "My pain fluctuates, but overall is definitely getting better.",
          section10check: false,
        },
        {
          name: "My pain seems to be getting better, but improvement is slow at present.",
          section10check: false,
        },
        {
          name: "My pain is neither getting better nor worse.",
          section10check: false,
        },
        {
          name: "My pain is gradually worsening.",
          section10check: false,
        },
        {
          name: "My pain is rapidly worsening.",
          section10check: false,
        },
      ],
      clientName: "",
      signature: "",
      todayDate: "",
      disabilityIndexScore: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
    },
  ],
};

export default initialValues;
