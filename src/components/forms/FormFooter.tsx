interface buttonSchema {
  disabled: boolean;
  hidden: boolean;
}

export default function FormFooter(props: {
  buttons: {
    back: buttonSchema;
    next: buttonSchema;
  };
}) {
  const backButtonClassName = `float-left  rounded py-2 px-4 font-bold text-gray-800 ${
    props.buttons.back.disabled
      ? " bg-slate-400 opacity-50"
      : "bg-green-300 hover:bg-green-400"
  }`;

  const nextButtonClassName = `float-right rounded py-2 px-4 font-bold text-gray-800 ${
    props.buttons.next.disabled
      ? " bg-slate-400 opacity-50"
      : "bg-green-300 hover:bg-green-400"
  }`;

  return (
    <div className="w-full">
      <div className="mb-10 mt-20 w-full border-t border-gray-300" />
      <button
        className={backButtonClassName}
        disabled={props.buttons.back.disabled}
        hidden={props.buttons.back.hidden}
      >
        {"< Back"}
      </button>
      <button
        className={nextButtonClassName}
        disabled={props.buttons.next.disabled}
        hidden={props.buttons.next.hidden}
      >
        {"Next >"}
      </button>
    </div>
  );
}
