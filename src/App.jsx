import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  // Estado para el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // Cambia los estilos de la aplicación según el modo oscuro
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${styles.App} ${darkMode && styles.darkMode}`}>
      <Navbar />

      {/* Botón de modo oscuro */}
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </button>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
