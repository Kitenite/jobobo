import { v4 as uuidv4 } from "uuid";

export default function FormChoices(props: {
  selected?: number;
  choices: any;
}) {
  const genID = `${uuidv4()}`;
  const renderChoices = props.choices.map((choice: any, index: number) => {
    const choiceKey = `${uuidv4()}`;
    return (
      <div className="form-check " key={choiceKey}>
        <label className="flex cursor-pointer flex-col justify-center	">
          <input
            className="peer appearance-none"
            type="radio"
            name={genID}
            value={choice.label}
            checked={props.selected == index}
          />
          <span
            className="flex h-40 w-40 flex-col justify-center rounded-md border-2 peer-checked:border-8 peer-checked:border-transparent peer-checked:text-lg peer-checked:font-bold peer-checked:ring-2 peer-checked:ring-green-400"
            htmlFor={genID}
          >
            <div className="flex w-full justify-center">
              {choice.img ? (
                <img className="h-20 w-20" src={choice.img} />
              ) : (
                <div className="h-20 w-20 rounded-md bg-slate-300" />
              )}
            </div>
            <label className="pt-5">{choice.label}</label>
          </span>
        </label>
      </div>
    );
  });

  return (
    <div className="flex justify-center">
      <div className="row bg-bla flex grow justify-center space-x-20">
        {renderChoices}
      </div>
    </div>
  );
}
