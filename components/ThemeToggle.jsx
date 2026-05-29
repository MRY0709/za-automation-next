"use client";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-theme");

      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☾" : "☼"}
    </button>
  );
}

export default ThemeToggle;
