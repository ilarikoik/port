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
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-neutral-100 min-h-screen w-screen dark:bg-neutral-900">
        <NavBar darkMode={darkMode} />
        <About darkMode={darkMode} />
      </div>
      <button
        onClick={toggleDarkMode}
        className="absolute top-20 right-14 w-14 h-10 bg-gray dark:bg-neutral-100 rounded-full border-none dark:text-gray"
      >
        {darkMode ? "light" : "dark"}
      </button>
    </div>
  );
}

export default App;
