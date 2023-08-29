import moment from "moment";
const initialValues = {
  page15: [
    {
      pain: [
        {
          name: "I have no pain at the moment",
          paincheck: false,
        },
        {
          name: "The pain is mild at the moment.",
          paincheck: false,
        },
        {
          name: "The pain comes and goes and is moderate.",
          paincheck: false,
        },
        {
          name: "The pain is moderate and does not vary much.",
          paincheck: false,
        },
        {
          name: "The pain is severe but comes and goes.",
          paincheck: false,
        },
        {
          name: "The pain is severe and does not vary much.",
          paincheck: false,
        },
      ],
      care: [
        {
          name: "I can look after myself without causing extra pain.",
          carecheck: false,
        },
        {
          name: "I can look after myself normally but it causes extra pain.",
          carecheck: false,
        },
        {
          name: "It is painful to look after myself and I am slow and careful.",
          carecheck: false,
        },
        {
          name: "I need some help, but manage most of my personal care.",
          carecheck: false,
        },
        {
          name: "I need help every day in most aspects of self-care.",
          carecheck: false,
        },
        {
          name: "I do not get dressed, I wash with difficulty and stay in bed.      ",
          carecheck: false,
        },
      ],

      lifting: [
        {
          name: "I can lift heavy weights without extra pain.",
          liftingcheck: false,
        },
        {
          name: "I can lift heavy weights, but it causes extra pain.",
          liftingcheck: false,
        },
        {
          name: "Pain prevents me from lifting heavy weights off the floor but I can if they are conveniently positioned, for example on a table.",
          liftingcheck: false,
        },
        {
          name: "Pain prevents me from lifting heavy weights, but I can manage light to medium weights if they are conveniently positioned.",
          liftingcheck: false,
        },
        {
          name: "I can lift very light weights.",
          liftingcheck: false,
        },
        {
          name: "I cannot lift or carry anything at all.",
          liftingcheck: false,
        },
      ],
      reading: [
        {
          name: "I can read as much as I want to with no pain in my neck.",
          readingcheck: false,
        },
        {
          name: "I can read as much as I want with slight pain in my neck.",
          readingcheck: false,
        },
        {
          name: "I can read as much as I want with moderate pain in my neck.",
          readingcheck: false,
        },
        {
          name: "I cannot read as much as I want because of moderate pain in my neck.",
          readingcheck: false,
        },

        {
          name: "I cannot read as much as I want because of severe pain in my neck.",
          readingcheck: false,
        },
        {
          name: "I cannot read at all.",
          readingcheck: false,
        },
      ],
      headache: [
        {
          name: "I have no headaches at all.",
          headachecheck: false,
        },
        {
          name: "I have slight headaches which come infrequently.      ",
          headachecheck: false,
        },
        {
          name: "I have moderate headaches which come infrequently.      ",
          headachecheck: false,
        },

        {
          name: "I have moderate headaches which come frequently.      ",
          headachecheck: false,
        },
        {
          name: "I have severe headaches which come frequently.      ",
          headachecheck: false,
        },
        {
          name: "I have headaches almost all the time.      ",
          headachecheck: false,
        },
      ],
      concentration: [
        {
          name: "I can concentrate fully when I want to with no difficulty.",
          concentrationcheck: false,
        },
        {
          name: "I can concentrate fully when I want to with slight difficulty.      ",
          concentrationcheck: false,
        },
        {
          name: "I have a fair degree of difficulty in concentrating when I want to.",
          concentrationcheck: false,
        },
        {
          name: "I have a lot of difficulty in concentrating when I want to.",
          concentrationcheck: false,
        },
        {
          name: "I have a great deal of difficulty in concentrating when I want to.",
          concentrationcheck: false,
        },
        {
          name: "I cannot concentrate at all.",
          concentrationcheck: false,
        },
      ],
      work: [
        {
          name: "I can do as much work as I want to.",
          workcheck: false,
        },
        {
          name: "I can only do my usual work, but no more.",
          workcheck: false,
        },
        {
          name: "I can do most of my usual work, but no more.      ",
          workcheck: false,
        },
        {
          name: ". I cannot do my usual work.",
          workcheck: false,
        },
        {
          name: "I can hardly do any work at all.",
          workcheck: false,
        },
        {
          name: "I cannot do any work at all.",
          workcheck: false,
        },
      ],
      driving: [
        {
          name: "I can drive my car without neck pain.",
          drivingcheck: false,
        },
        {
          name: "I can drive my car as long as I want with slight pain in my neck.",
          drivingcheck: false,
        },
        {
          name: "I can drive my car as long as I want with moderate pain in my neck.",
          drivingcheck: false,
        },
        {
          name: "I cannot drive my car as long as I want because of moderate pain in my neck.",
          drivingcheck: false,
        },
        {
          name: "I can hardly drive my car at all because of severe pain in my neck.",
          drivingcheck: false,
        },
        {
          name: ". I cannot drive my car at all.",
          drivingcheck: false,
        },
      ],
      sleeping: [
        {
          name: "I have no trouble sleeping",
          sleepingcheck: false,
        },
        {
          name: "My sleep is slightly disturbed (less than 1 hour sleepless).",
          sleepingcheck: false,
        },
        {
          name: "My sleep is mildly disturbed (1-2 hours sleepless).      ",
          sleepingcheck: false,
        },
        {
          name: "My sleep is moderately disturbed (2-3 hours sleepless).      ",
          sleepingcheck: false,
        },
        {
          name: "My sleep is greatly disturbed (3-5 hours sleepless).      ",
          sleepingcheck: false,
        },
        {
          name: "My sleep is completely disturbed (5-7 hours sleepless).",
          sleepingcheck: false,
        },
      ],
      recreation: [
        {
          name: "I am able to engage in all recreational activities with no pain in my neck at all.",
          recreationcheck: false,
        },
        {
          name: "I am able to engage in all recreational activities with some pain in my neck.",
          recreationcheck: false,
        },
        {
          name: "I am able to engage in most, but not all recreational activities because of pain in my neck.",
          recreationcheck: false,
        },
        {
          name: "I am able to engage in a few of my usual recreational activities because of pain in my neck.",
          recreationcheck: false,
        },
        {
          name: ". I can hardly do any recreational activities because of pain in my neck.",
          recreationcheck: false,
        },
        {
          name: "I cannot do any recreational activities all all.      ",
          recreationcheck: false,
        },
      ],

      clientName: "",
      disabilityindexscore: "",
      formCreatedDate: moment().format("DD-MM-YYYY"),
    },
  ],
};

export default initialValues;
