export default function FormInput(props: { choices: any }) {
  const renderChoices = props.choices.map((choice: any) => {
    return (
      <div className="form-check">
        {/* <input
          className="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label inline-block text-gray-800">
          {choice.label}
        </label> */}

        <label className="flex flex-col justify-center ">
          <input
            className="peer appearance-none"
            type="radio"
            name="radio-input"
            value={choice.label}
          />
          <span
            htmlFor="radio-input"
            className="flex h-40 w-40 flex-col justify-center rounded-md border-2 peer-checked:border-8 peer-checked:border-transparent peer-checked:text-lg peer-checked:font-bold peer-checked:ring-2 peer-checked:ring-green-400"
          >
            <div className="flex w-full items-center justify-center ">
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
