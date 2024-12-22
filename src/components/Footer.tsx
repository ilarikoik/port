import { dark } from "@mui/material/styles/createPalette";

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <>
      <hr
        className={
          !darkMode
            ? "border-2 border-neutral-700"
            : "border-2 border-neutral-900"
        }
      />
      <div className="h-36 w-full  flex justify-center flex-row">
        <ul className="flex justify-around items-center flex-row w-full max-w-[1200px]">
          <li
            className={`"text-md font-semibold" ${
              !darkMode ? " text-white" : "text-neutral-900"
            }`}
          >
            &copy;Ilari
          </li>
          <li
            className={`"text-md font-semibold" ${
              !darkMode ? " text-white" : "text-neutral-900"
            }`}
          >
            <a href="">Github</a>
          </li>
          <li
            className={`"text-md font-semibold" ${
              !darkMode ? " text-white" : "text-neutral-900"
            }`}
          >
            <a href="">Leetcode</a>
          </li>
        </ul>
      </div>
    </>
  );
}
