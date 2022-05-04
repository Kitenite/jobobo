import Title from "../components/forms/Title";
import Subtitle from "../components/forms/Subtitle";
import Form from "../components/forms/Form";
import FormChoices from "../components/forms/FormChoices";
import FormFooter from "../components/forms/FormFooter";
import FormInput from "../components/forms/FormInput";
import { useState } from "react";

export default function PreferenceFormPage() {
  let buttons = {
    back: {
      disabled: false,
      hidden: false,
    },
    next: {
      disabled: false,
      hidden: false,
    },
  };

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
  const inputItems = [
    { subtitle: "Preferred city?" },
    {
      subtitle: "Finally, what’s the title of the position you’re looking for?",
    },
  ];

  const onChangeCallback = (event: any) => {
    let newChoiceItems = choiceItems.slice();
    switch (event.target.value) {
      case "Full-time":
        newChoiceItems[0].selected = 0;
        newChoiceItems[1].show = true;
        break;
      case "Part-time":
        newChoiceItems[0].selected = 1;
        newChoiceItems[1].show = false;
        break;
      case "Internship":
        newChoiceItems[0].selected = 2;
        newChoiceItems[1].show = false;
        break;
    }
    setChoiceItems(newChoiceItems);
  };

  return (
    <div className="h-screen w-full space-y-5 p-6 text-center	">
      <Title content={"Now let’s talk about your future job"} />

      <div className="space-y-20">
        {choiceItems.map((item) => {
          return (
            <Form onChangeCallback={onChangeCallback}>
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
        {inputItems.map((item) => {
          return (
            <Form>
              <Subtitle content={item.subtitle} />
              <div className="flex w-full justify-center p-10">
                <div className="w-1/3 min-w-[25rem] ">
                  <FormInput required={true} type={"text"} placeholder={""} />
                </div>
              </div>
            </Form>
          );
        })}
      </div>
      <FormFooter buttons={buttons} />
    </div>
  );
}
