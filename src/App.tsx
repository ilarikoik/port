import { useState } from "react";
import "./App.css";
import NavBar from "./components/Nav";
import About from "./components/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={!darkMode ? "dark" : ""}>
      <div className="bg-neutral-100 min-h-screen w-screen dark:bg-neutral-900">
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} />
        <button
          onClick={toggleDarkMode}
          className="  w-14 h-fit p-3 bg-gray dark:bg-neutral-100 rounded-full border-none dark:text-gray z-10"
        >
          {darkMode ? "light" : "dark"}
        </button>
      </div>
    </div>
  );
}

export default App;
