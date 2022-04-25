export default function EmailInput() {
  return (
    <div className="relative w-full max-w-lg">
      <input
        type="text"
        className="h-12 w-3/4 border-2 border-r-0 border-slate-400 pl-10 pr-20 hover:border-sky-600"
        placeholder="Enter your email"
      />
      <button className="h-12 w-1/4 border-2 border-l-0 border-slate-400 bg-green-600 text-white hover:bg-green-700">
        Join waitlist
      </button>
    </div>
  );
}
