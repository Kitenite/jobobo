import Title from "../components/forms/Title";
import Subtitle from "../components/forms/Subtitle";
import Form from "../components/forms/Form";
import FormChoices from "../components/forms/FormChoices";
import FormFooter from "../components/forms/FormFooter";
import FormInput from "../components/forms/FormInput";

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

  const choiceItems = [
    {
      subtitle: "What kind of position are you looking for?",
      choices: [
        {
          label: "Full-time",
          img: "https://via.placeholder.com/40x60/b0f/fff&text=B",
        },
        {
          label: "Part-time",
          img: "https://via.placeholder.com/40x60/b0f/fff&text=B",
        },
        {
          label: "Internship",
          img: "https://via.placeholder.com/40x60/b0f/fff&text=B",
        },
      ],
    },
    {
      subtitle: "What career level are you aiming for?",
      choices: [
        { label: "Entry level", img: "" },
        { label: "Mid career", img: "" },
        { label: "Executive", img: "" },
      ],
    },
    {
      subtitle: "Where would you prefer to work?",
      choices: [
        { label: "Specific location", img: "" },
        { label: "Remote only", img: "" },
        { label: "No preference", img: "" },
      ],
    },
  ];
  return (
    <div className="h-screen w-full space-y-5 p-6 text-center	">
      <Title content={"Now let’s talk about your future job"} />

      <div className="space-y-20">
        {choiceItems.map((item) => {
          return (
            <Form>
              <div className="space-y-10">
                <Subtitle content={item.subtitle} />
                <FormChoices choices={item.choices} />
              </div>
            </Form>
          );
        })}

        <Form>
          <Subtitle content={"Preferred city?"} />
          <div className="p-10">
            <FormInput required={true} type={"text"} placeholder={""} />
          </div>
        </Form>

        <Form>
          <Subtitle
            content={
              "Finally, what’s the title of the position you’re looking for?"
            }
          />
          <FormInput required={true} type={"text"} placeholder={""} />
        </Form>
      </div>
      <FormFooter buttons={buttons} />
    </div>
  );
}
