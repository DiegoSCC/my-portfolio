"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [lang, setLang] = useState("es");

  useEffect(() => {
    // Read theme initialized by the head script
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    // Read stored language preference
    try {
      const savedLang = localStorage.getItem("lang");
      if (savedLang === "en" || savedLang === "es") {
        setLang(savedLang);
      }
    } catch (e) {}
  }, []);

  const handleSetLang = (newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem("lang", newLang);
    } catch (e) {}
  };

  const handleSetTheme = (valueOrUpdater) => {
    setIsDarkMode((prev) => {
      const next =
        typeof valueOrUpdater === "function"
          ? valueOrUpdater(prev)
          : valueOrUpdater;

      if (next) {
        document.documentElement.classList.add("dark");
        try {
          localStorage.setItem("theme", "dark");
        } catch (e) {}
      } else {
        document.documentElement.classList.remove("dark");
        try {
          localStorage.setItem("theme", "light");
        } catch (e) {}
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={handleSetTheme}
        lang={lang}
        setLang={handleSetLang}
      />
      <main id="main-content">
        <Header isDarkMode={isDarkMode} lang={lang} />
        <About isDarkMode={isDarkMode} lang={lang} />
        <Services isDarkMode={isDarkMode} lang={lang} />
        <Projects isDarkMode={isDarkMode} lang={lang} />
        <Contact isDarkMode={isDarkMode} lang={lang} />
      </main>
      <Footer isDarkMode={isDarkMode} lang={lang} />
    </div>
  );
}

