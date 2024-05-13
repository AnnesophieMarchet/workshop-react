import { Outlet } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Header/Navbar";
import { UseDarkMode } from "./hooks/useDarkmode";

function App() {
  const { isDarkMode, toggleDarkMode } = UseDarkMode();

  return (
    <>
      <div
        id="app"
        className={isDarkMode === true ? "dark-mode" : "light-mode"}
      >
        <button onClick={toggleDarkMode}>
          {isDarkMode === true ? "Mode clair" : "Mode sombre "}
        </button>
        <div>
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
