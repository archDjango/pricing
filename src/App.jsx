import { useState, useEffect } from "react";
import PricingTable from "./components/PricingTable";
import FaqSection from "./components/FaqSection";
import "./styles/styles.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="container-fluid full-screen">
      <h1 className="app-title">HBO Max Subscription Plans</h1>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <PricingTable />
      <FaqSection />
    </div>
  );
}
