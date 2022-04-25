import { validateEmail, submitEmail } from "../utils/email-helpers";

export default function EmailInput() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log();
    const email = e.target[0].value;
    if (validateEmail(email)) {
      submitEmail(email);
      alert(
        "Thanks for signing up!\nYou'll receive an email when the product is ready."
      );
      e.target[0].value = "";
    } else {
      alert("Please enter a valid email");
    }
  };

  return (
    <div className="relative w-full max-w-lg p-10">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="h-12 w-3/4 border-2 border-r-0 border-slate-400 pl-10 pr-20 hover:border-sky-600"
          placeholder="Enter your email"
        />
        <input
          className="h-12 w-1/4 border-2 border-l-0 border-slate-400 bg-green-600 text-white hover:bg-green-700"
          type="submit"
          value="Join waitlist"
        />
      </form>
    </div>
  );
}
