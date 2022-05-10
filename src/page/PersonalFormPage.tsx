import Title from "../components/forms/Title";
import Subtitle from "../components/forms/Subtitle";
import Form from "../components/forms/Form";
import FormInput from "../components/forms/FormInput";

export default function PersonalFormPage(props: { handleFilled: any }) {
  return (
    <div className="h-full w-full space-y-5 p-6">
      <Title content={"Let’s get started by getting to know you"} />
      <Subtitle
        content={
          "This will be used to fill in your application. You can always update this information later."
        }
      />
      <div className="">
        <Form>
          <div className="grid grid-cols-2 space-x-5">
            <div className="">
              <FormInput
                required={true}
                label={"First name"}
                type={"fname"}
                placeholder={""}
              />
              <FormInput
                required={true}
                label={"Last name"}
                type={"lname"}
                placeholder={""}
              />
            </div>
            <div className="">
              <FormInput
                required={true}
                label={"Email"}
                type={"email"}
                placeholder={""}
              />
              <FormInput
                required={true}
                label={"Phone number"}
                type={"tel"}
                placeholder={""}
              />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
