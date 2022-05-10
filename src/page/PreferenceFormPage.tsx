import Title from "../components/forms/Title";
import Subtitle from "../components/forms/Subtitle";
import Form from "../components/forms/Form";
import FormChoices from "../components/forms/FormChoices";
import FormInput from "../components/forms/FormInput";
import { useState } from "react";

export default function PreferenceFormPage(props: { handleFilled: any }) {
  const choiceItemsInitial = [
    {
      show: true,
      subtitle: "What kind of position are you looking for?",
      choices: [
        {
          label: "Full-time",
          img: "",
        },
        {
          label: "Part-time",
          img: "",
        },
        {
          label: "Internship",
          img: "",
        },
      ],
    },
    {
      show: false,
      subtitle: "What career level are you aiming for?",
      choices: [
        { label: "Entry level", img: "" },
        { label: "Mid career", img: "" },
        { label: "Executive", img: "" },
      ],
    },
    {
      show: false,
      subtitle: "Where would you prefer to work?",
      choices: [
        { label: "Specific location", img: "" },
        { label: "Remote only", img: "" },
        { label: "No preference", img: "" },
      ],
    },
  ];

  const [choiceItems, setChoiceItems] = useState(choiceItemsInitial);
  const inputItemsInitial = [
    {
      show: false,
      subtitle: "Preferred city?",
      placeholder: "i.e. San Jose, CA",
    },
    {
      show: false,
      subtitle: "Finally, what’s the title of the position you’re looking for?",
      placeholder: "i.e. Art administrator",
    },
  ];
  const [inputItems, setInputItems] = useState(inputItemsInitial);

  const onChoiceChangeCallback = (event: any) => {
    const value = event.target.value;
    let newChoiceItems = choiceItems.slice();
    let newInputItems = inputItems.slice();

    // Should use index match to reduce this logic. But I'm tired...
    switch (value) {
      case "Full-time":
        newChoiceItems[0].selected = 0;
        newChoiceItems[1].show = true;
        newChoiceItems[2].show = false;
        break;
      case "Part-time":
        newChoiceItems[0].selected = 1;
        newChoiceItems[1].show = false;
        newChoiceItems[2].show = true;
        break;
      case "Internship":
        newChoiceItems[0].selected = 2;
        newChoiceItems[1].show = false;
        newChoiceItems[2].show = true;
        break;

      case "Entry level":
        newChoiceItems[1].selected = 0;
        newChoiceItems[2].show = true;
        break;
      case "Mid career":
        newChoiceItems[1].selected = 1;
        newChoiceItems[2].show = true;
        break;
      case "Executive":
        newChoiceItems[1].selected = 2;
        newChoiceItems[2].show = true;
        break;

      case "Specific location":
        newInputItems[0].show = true;
        newInputItems[1].show = false;
        newChoiceItems[2].selected = 0;
        break;
      case "Remote only":
        newInputItems[0].show = false;
        newInputItems[1].show = true;
        newChoiceItems[2].selected = 1;
        break;
      case "No preference":
        newInputItems[0].show = false;
        newInputItems[1].show = true;
        newChoiceItems[2].selected = 2;
        break;
    }
    setInputItems(newInputItems);
    setChoiceItems(newChoiceItems);
  };

  const onInputChangeCallback = (event: any) => {
    let newInputItems = inputItems.slice();
    if (newInputItems[1].show == false) {
      newInputItems[1].show = event.target.value != "";
      setInputItems(newInputItems);
    }

    const inputs = document.querySelectorAll("input");
    const validInputs = Array.from(inputs).filter(
      (input) => input.value !== ""
    );
    if (newInputItems[0].show) {
      props.handleFilled(!(validInputs.length == inputs.length));
    } else {
      props.handleFilled(!(validInputs.length >= 1));
    }
  };

  return (
    <div className="h-full w-full space-y-5 p-6 text-center	">
      <Title content={"Now let’s talk about your future job"} />
      <div className="space-y-20">
        {choiceItems.map((item, index) => {
          return (
            <Form key={index} onChangeCallback={onChoiceChangeCallback}>
              <div
                className="space-y-10"
                style={{ display: item.show ? "block" : "none" }}
              >
                <Subtitle content={item.subtitle} />
                <FormChoices selected={item.selected} choices={item.choices} />
              </div>
            </Form>
          );
        })}
        {inputItems.map((item, index) => {
          return (
            <div key={index} style={{ display: item.show ? "block" : "none" }}>
              <Form onChangeCallback={onInputChangeCallback}>
                <Subtitle content={item.subtitle} />
                <div className="flex w-full justify-center p-10">
                  <div className="w-1/3 min-w-[25rem] ">
                    <FormInput
                      required={true}
                      type={"text"}
                      placeholder={item.placeholder}
                    />
                  </div>
                </div>
              </Form>
            </div>
          );
        })}
      </div>
    </div>
  );
}
