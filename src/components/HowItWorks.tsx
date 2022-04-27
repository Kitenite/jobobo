import step_1 from "../assets/step_1.png";
import step_2 from "../assets/step_2.png";
import step_3 from "../assets/step_3.png";
import step_4 from "../assets/step_4.png";
import StepExample from "./StepExamples";

export default function HowItWorks() {
  return (
    <div
      id="how-it-works"
      className="flex h-screen max-h-screen flex-col items-center p-6"
    >
      <StepExample
        header={"Step 1:"}
        subtitle={"Fill out your job information"}
        imgSrc={step_1}
      />
      <StepExample
        header={"Step 2:"}
        subtitle={"We look across major job sites for the perfect match"}
        imgSrc={step_2}
      />
      <StepExample
        header={"Step 3:"}
        subtitle={
          "You’re presented with a list of the top matching jobs to approve"
        }
        imgSrc={step_3}
      />
      <StepExample
        header={"Step 4:"}
        subtitle={"We automatically apply for those positions"}
        imgSrc={step_4}
      />
    </div>
  );
}
