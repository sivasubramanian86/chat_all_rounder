"use client";

import React, { useContext } from "react";
import { Context } from "@/context/ContextProvider";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(Context);

  return (
    <div className="theme-toggle-container">
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
      </button>
    </div>
  );
};

export default ThemeToggle;