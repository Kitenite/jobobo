import { validateEmail, submitEmail } from "../../utils/email-helpers";

export default function EmailInput() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    if (validateEmail(email)) {
      submitEmail(email);
      alert(
        "Thanks for signing up!\nWe've added your email to the early access queue."
      );
      e.target[0].value = "";
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="relative w-full max-w-lg p-10">
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none"
            type="text"
            placeholder="Enter your email"
            aria-label="email"
          />
          <input
            className="flex-shrink-0 rounded border-4 border-teal-500 bg-teal-500 py-1 px-2 text-sm text-white hover:border-teal-700 hover:bg-teal-700"
            type="submit"
            value="Sign up"
          />
        </div>
      </form>
    </div>
  );
}
