import { useState } from "react";

export default function NavBar({ darkMode }: { darkMode: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  //   "w-full h-fit p-4 ";
  return (
    <div
      className={`w-full h-fit p-4 text-white ${
        darkMode ? "bg-green" : "bg-blue-500"
      }`}
    >
      <div className="flex flex-row justify-between">
        <h1 className="p-2 font-bold text-2xl">IK</h1>
        {/* desktop */}
        <ul className="hidden md:flex flex-row  w-2/4  justify-around">
          <li className="p-2 font-semibold">About</li>
          <li className="p-2 font-semibold">Projects</li>
          <li className="p-2 font-semibold">Work</li>
        </ul>
        <div className="flex md:hidden flex-col justify-center ">
          <button onClick={toggleOpen}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              className="w-6 h-6"
              color="white"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* mobile */}
      <div className="flex flex-col ">
        {!isOpen && (
          <ul className="flex flex-col md:hidden justify-center items-center">
            <li className="p-2 font-semibold">About</li>
            <li className="p-2 font-semibold">Projects</li>
            <li className="p-2 font-semibold">Work</li>
          </ul>
        )}
      </div>
    </div>
  );
}
