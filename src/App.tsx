import { useState } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import About from "./components/About";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { dark } from "@mui/material/styles/createPalette";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={!darkMode ? "dark" : ""}>
        <div className="bg-neutral-100 min-h-screen w-screen dark:bg-neutral-900">
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <About darkMode={darkMode} />
          <div className="flex justify-end sticky bottom-20 mr-10 z-10  text-white">
            <a
              href="#navbar"
              className={`${
                darkMode
                  ? "bg-neutral-300 text-black rounded-full p-2"
                  : "bg-black rounded-full p-2"
              }`}
            >
              <ArrowUpwardIcon href="#navbar" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
