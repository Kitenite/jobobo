import { NavLink } from "react-router-dom";

interface buttonSchema {
  disabled: boolean;
  path: string;
}

export default function FormFooter(props: {
  buttons: {
    back: buttonSchema;
    next: buttonSchema;
  };
}) {
  const backButton = props.buttons.back;
  const nextButton = props.buttons.next;

  return (
    <div className="w-full">
      <div className="mb-10 mt-20 w-full border-t border-gray-300" />
      {backButton ? (
        <NavLink to={backButton.path}>
          <button
            className={`float-left  rounded py-2 px-4 font-bold text-gray-800 ${
              props.buttons.back.disabled
                ? " bg-slate-400 opacity-50"
                : "bg-green-300 hover:bg-green-400"
            }`}
            disabled={backButton.disabled}
          >
            {"< Back"}
          </button>
        </NavLink>
      ) : undefined}
      {nextButton ? (
        <NavLink to={nextButton.path}>
          <button
            className={`float-right rounded py-2 px-4 font-bold text-gray-800 ${
              props.buttons.next.disabled
                ? " bg-slate-400 opacity-50"
                : "bg-green-300 hover:bg-green-400"
            }`}
            disabled={nextButton.disabled}
          >
            {"Next >"}
          </button>
        </NavLink>
      ) : undefined}
    </div>
  );
}
