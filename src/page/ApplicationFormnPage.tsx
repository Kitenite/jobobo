import Title from "../components/forms/Title";
import Subtitle from "../components/forms/Subtitle";
import Form from "../components/forms/Form";
import FormChoices from "../components/forms/FormChoices";
import FormFooter from "../components/forms/FormFooter";
import FormUploadFile from "../components/forms/FormUploadFile";
import { useState } from "react";

export default function ApplicationFormnPage() {
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
      subtitle:
        "Let’s get the best information we can to get you that next job",
      choices: [
        {
          label: "Use information from my resume",
          img: "",
        },
        {
          label: "Take a guided application",
          img: "",
        },
        {
          label: "Get help from an expert",
          img: "",
        },
      ],
    },
  ];

  const [choiceItems, setChoiceItems] = useState(choiceItemsInitial);
  const inputItemsInitial = [
    {
      show: false,
      subtitle: "Attach your resume below",
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

    console.log(choiceItems[0].choices);
    // Should use index match to reduce this logic. But I'm tired...
    switch (value) {
      case choiceItems[0].choices[0].label:
        newChoiceItems[0].selected = 0;
        inputItems[0].show = true;
        break;
      case choiceItems[0].choices[1].label:
        newChoiceItems[0].selected = 1;
        inputItems[0].show = false;
        break;
      case choiceItems[0].choices[2].label:
        newChoiceItems[0].selected = 2;
        inputItems[0].show = false;
        break;
    }
    setInputItems(newInputItems);
    setChoiceItems(newChoiceItems);
  };

  const onInputChangeCallback = (event: any) => {
    let newInputItems = inputItems.slice();
    newInputItems[1].show = event.target.value != "";
    setInputItems(newInputItems);
  };

  return (
    <div className="h-screen w-full space-y-5 p-6 text-center	">
      <Title content={"Your application information"} />

      <div className="space-y-20">
        {choiceItems.map((item) => {
          return (
            <Form onChangeCallback={onChoiceChangeCallback}>
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
            <div style={{ display: item.show ? "block" : "none" }}>
              <Form onChangeCallback={onInputChangeCallback}>
                <Subtitle content={item.subtitle} />
                <div className="flex w-full justify-center p-10">
                  <div className="w-1/3 min-w-[25rem] ">
                    <FormUploadFile
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
      <FormFooter buttons={buttons} />
    </div>
  );
}
