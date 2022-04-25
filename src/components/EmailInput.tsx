export default function EmailInput() {
  return (
    <div className="relative ">
      <input
        type="text"
        className="z-0 h-12 w-96  border-2 border-r-0 border-slate-400 pl-10 pr-20 hover:border-sky-600 focus:shadow"
        placeholder="Enter your email"
      />
      <button className="h-12 w-40 border-2 border-l-0 border-slate-400 bg-green-600 text-white hover:bg-green-700">
        Join waitlist
      </button>
    </div>
  );
}
