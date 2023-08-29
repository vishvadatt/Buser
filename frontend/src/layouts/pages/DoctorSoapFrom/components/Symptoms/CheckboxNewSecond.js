import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";

function CheckboxNewTwo({ formik }) {
  const { values, setFieldValue } = formik;
  const data = [
    {
      type: "checkbox",
      label: "I prefer being alone not(not socializing)",
      errorMsg: "",
      name: "brain_neuro_check1",
      value: values.brain_neuro_check1,
    },
    {
      type: "checkbox",
      label: "I am sleepy, tired during day or doze of easily",
      errorMsg: "",
      name: "brain_neuro_check2",
      value: values.brain_neuro_check2,
    },
    {
      type: "checkbox",
      label: "Upset stomach, nausea, heartburn or vomiting",
      errorMsg: "",
      name: "brain_neuro_check3",
      value: values.brain_neuro_check3,
    },
    {
      type: "checkbox",
      label: "Difficulty concentrating, mind wanders easily",
      errorMsg: "",
      name: "brain_neuro_check4",
      value: values.brain_neuro_check4,
    },
    {
      type: "chekckbox",
      label: "I get overwhelmed easily",
      errorMsg: "",
      value: values.brain_neuro_check5,
      name: "brain_neuro_check5",
    },
    {
      type: "chekckbox",
      label: "Mood swings, happy one moment then sad",
      errorMsg: "",

      name: "brain_neuro_check6",
      value: values.brain_neuro_check6,
    },
    {
      type: "chekckbox",
      label: "Agitation (can't sit stil, need to move around)",
      errorMsg: "",
      name: "brain_neuro_check7",
      value: values.brain_neuro_check7,
    },
    {
      type: "chekckbox",
      label: "Sadness, tearful episodes, crying easily",
      errorMsg: "",
      name: "brain_neuro_check8",
      value: values.brain_neuro_check8,
    },
    {
      type: "chekckbox",
      label: "Blurry vision, had to get or change glasses",
      errorMsg: "",
      name: "brain_neuro_check9",
      value: values.brain_neuro_check9,
    },
    {
      type: "chekckbox",
      label: "Asking people to repeat things or hearing problem",
      errorMsg: "",
      name: "brain_neuro_check10",
      value: values.brain_neuro_check10,
    },
    {
      type: "chekckbox",
      label: "I make wrong turns driving or can't remember time",
      errorMsg: "",
      name: "brain_neuro_check11",
      value: values.brain_neuro_check11,
    },
    {
      type: "chekckbox",
      label: "I get confused easily or cannot multi-task anymore",
      errorMsg: "",
      name: "brain_neuro_check12",
      value: values.brain_neuro_check12,
    },
    {
      type: "chekckbox",
      label: "I have difficulty finding some words when talking",
      errorMsg: "",
      name: "brain_neuro_check13",
      value: values.brain_neuro_check13,
    },
    {
      type: "chekckbox",
      label: "Bright lights bother me",
      errorMsg: "",
      name: "brain_neuro_check14",
      value: values.brain_neuro_check14,
    },
    {
      type: "chekckbox",
      label: "I cannot pay attention as long as before",
      errorMsg: "",
      name: "brain_neuro_check15",
      value: values.brain_neuro_check15,
    },
    {
      type: "chekckbox",
      label: "I am eating more or less than normal",
      errorMsg: "",
      name: "brain_neuro_check16",
      value: values.brain_neuro_check16,
    },
    {
      type: "chekckbox",
      label: "Room spins, lightheaded or woozy feeling",
      errorMsg: "",
      name: "brain_neuro_check17",
      value: values.brain_neuro_check17,
    },
    {
      type: "chekckbox",
      label: "Balance problems",
      errorMsg: "",
      name: "brain_neuro_check18",
      value: values.brain_neuro_check18,
    },
    {
      type: "chekckbox",
      label: "Feel like my head is “Foggy”",
      errorMsg: "",
      name: "brain_neuro_check19",
      value: values.brain_neuro_check19,
    },
    {
      type: "chekckbox",
      label: "I have forgotten computer passwords or ATM PIN",
      errorMsg: "",
      name: "brain_neuro_check20",
      value: values.brain_neuro_check20,
    },
    {
      type: "chekckbox",
      label: "I have to re-read things to understand what I read",
      errorMsg: "",
      name: "brain_neuro_check21",
      value: values.brain_neuro_check21,
    },
    {
      type: "chekckbox",
      label: "My thinking is slowed down",
      errorMsg: "",
      name: "brain_neuro_check22",
      value: values.brain_neuro_check22,
    },
    {
      type: "chekckbox",
      label: "Difficulty with adding/subtracting numbers",
      errorMsg: "",
      name: "brain_neuro_check23",
      value: values.brain_neuro_check23,
    },
    {
      type: "chekckbox",
      label: "Fear I will never be the same again",
      errorMsg: "",
      name: "brain_neuro_check24",
      value: values.brain_neuro_check24,
    },
    {
      type: "chekckbox",
      label: "Difficutty learning new things",
      errorMsg: "",
      name: "brain_neuro_check25",
      value: values.brain_neuro_check25,
    },
    {
      type: "chekckbox",
      label: "Difficulty understanding what people say to me",
      errorMsg: "",
      name: "brain_neuro_check26",
      value: values.brain_neuro_check26,
    },
    {
      type: "chekckbox",
      label: "Difficulty remembering or memory problems",
      errorMsg: "",
      name: "brain_neuro_check27",
      value: values.brain_neuro_check27,
    },
    {
      type: "chekckbox",
      label: "Cannot take on any more responsibilty",
      errorMsg: "",
      name: "brain_neuro_check28",
      value: values.brain_neuro_check28,
    },
    {
      type: "chekckbox",
      label: "I can't make decisions as quickly as before",
      errorMsg: "",
      name: "brain_neuro_check29",
      value: values.brain_neuro_check29,
    },
    {
      type: "chekckbox",
      label: "Loss of libido or lack of sexual desire",
      errorMsg: "",
      name: "brain_neuro_check30",
      value: values.brain_neuro_check30,
    },
    {
      type: "chekckbox",
      label: "I do not feel as confident of my abilities",
      errorMsg: "",
      name: "brain_neuro_check31",
      value: values.brain_neuro_check31,
    },
    {
      type: "chekckbox",
      label: "I get panic attacks, fast heartbeat, nervous",
      errorMsg: "",
      name: "brain_neuro_check32",
      value: values.brain_neuro_check32,
    },
    {
      type: "chekckbox",
      label: "I am more irritable than usual",
      errorMsg: "",
      name: "brain_neuro_check33",
      value: values.brain_neuro_check33,
    },
    {
      type: "chekckbox",
      label: "Some food or drink tastes “Funny” to me now",
      errorMsg: "",
      name: "brain_neuro_check34",
      value: values.brain_neuro_check34,
    },
    {
      type: "chekckbox",
      label: "I get frustrated very easily",
      errorMsg: "",
      name: "brain_neuro_check35",
      value: values.brain_neuro_check35,
    },
    {
      type: "chekckbox",
      label: "Difficulty planning my life or organizing my work",
      errorMsg: "",
      name: "brain_neuro_check36",
      value: values.brain_neuro_check36,
    },
    {
      type: "chekckbox",
      label: "Flashbacks or frightening thoughts about accident",
      errorMsg: "",
      name: "brain_neuro_check37",
      value: values.brain_neuro_check37,
    },
    {
      type: "chekckbox",
      label: "I have had bad dreams about the accident",
      errorMsg: "",
      name: "brain_neuro_check38",
      value: values.brain_neuro_check38,
    },
    {
      type: "chekckbox",
      label: "I avoid places & objects that remind me about it",
      errorMsg: "",
      name: "brain_neuro_check39",
      value: values.brain_neuro_check39,
    },
    {
      type: "chekckbox",
      label: "I feel emotionally numb-no interest in my hobbies",
      errorMsg: "",
      name: "brain_neuro_check40",
      value: values.brain_neuro_check40,
    },
    {
      type: "chekckbox",
      label: "I'm feeling strong guilt, worry or depression",
      errorMsg: "",
      name: "brain_neuro_check41",
      value: values.brain_neuro_check41,
    },
    {
      type: "chekckbox",
      label: "I am having trouble remembering the accident",
      errorMsg: "",
      name: "brain_neuro_check42",
      value: values.brain_neuro_check42,
    },
    {
      type: "chekckbox",
      label: "I am easily startled since the accident - “jumpy”",
      errorMsg: "",
      name: "brain_neuro_check43",
      value: values.brain_neuro_check43,
    },
    {
      type: "chekckbox",
      label: "I feel tense or 'on edge' most of the time",
      errorMsg: "",
      name: "brain_neuro_check44",
      value: values.brain_neuro_check44,
    },
    {
      type: "chekckbox",
      label: "I am having difficulty sleeping",
      errorMsg: "",
      name: "brain_neuro_check45",
      value: values.brain_neuro_check45,
    },
    {
      type: "chekckbox",
      label: "I get angry easily or even yell at people now",
      errorMsg: "",
      name: "brain_neuro_check46",
      value: values.brain_neuro_check46,
    },
  ];
  const [menuItems, setChecked] = useState(data);
  console.log(menuItems, "dsdads");
  const handleCheck = (box, index) => {
    let abc = menuItems;
    abc[index].value = !box.value;
    console.log(abc[index].options);
    console.log(box.value);

    if (abc[index].options && !box.value) {
      abc[index].options = abc[index].options.map((item) => {
        item.value = false;
        console.log(abc[index].options && box.value);
        return item;
      });
    }
    // console.log(abc)
    // const { value } = event.target;
    // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
    setChecked([...abc]);
  };

  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    // console.log(abc)
    // const { value } = event.target;
    // setChecked(menuItems(label) ? menuItems.filter(c => c.label == label) : [...menuItems, label]);
    setChecked([...abc]);
  };
  // useEffect(() => {}, [menuItems]);

  return (
    <div>
      <FormControl className="neuropsych-part">
        {data.map((box, index) => {
          console.log(index);
          return (
            <FormGroup key={index}>
              
              <FormControlLabel
               style={{display: "flex"}}
                label={box.label}
                control={
                  
                  <Checkbox
                    // key={"main" + index}
                    // onChange={(e) => handleCheck(box, index)}
                    // checked={menuItems[index].value}
                    name={box.name}
                    key={"main" + index}
                    onChange={(e) => setFieldValue(box.name, e.target.checked)}
                    checked={box.value}
                  />
                }
              />
              {/* {box.options ? (
                box.options.map(({ value, label }, ind) => {
                  return (
                    <FormControlLabel
                      key={"option" + index}
                      label={label}
                      control={
                        <Checkbox
                          key={"option" + ind}
                          disabled={!box.value}
                          onChange={(e) => innerBoxHandler(index, ind)}
                          checked={box.options[ind].value}
                        />
                      }
                    />
                  );
                })
              ) : (
                <></>
              )} */}
            </FormGroup>
          );
        })}
      </FormControl>
    </div>
  );
}

CheckboxNewTwo.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default CheckboxNewTwo;
