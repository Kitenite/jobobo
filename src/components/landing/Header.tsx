export default function Header() {
  return (
    <div className="p-6">
      <div className="flow-root space-x-4 ">
        <a
          href="#"
          aria-current="page"
          className="float-left text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl"
        >
          Jobs by Kiet
        </a>
        <a
          href="#how-it-works"
          className="float-right text-lg font-medium leading-7 sm:truncate sm:text-lg"
        >
          How it works
        </a>
      </div>
    </div>
  );
}
