"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
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
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    try {
      const savedLang = localStorage.getItem("lang");
      if (savedLang === "en" || savedLang === "es") {
        setLang(savedLang);
      }
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const handleSetTheme = (valueOrUpdater) => {
    setIsDarkMode((previous) => {
      const next =
        typeof valueOrUpdater === "function"
          ? valueOrUpdater(previous)
          : valueOrUpdater;

      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem("theme", next ? "dark" : "light");
      } catch {}
      return next;
    });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
        <a
          href="#main-content"
          className="skip-link fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-emerald-700 px-4 py-2 text-white focus:translate-y-0"
        >
          {lang === "en" ? "Skip to content" : "Saltar al contenido"}
        </a>
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={handleSetTheme}
          lang={lang}
          setLang={setLang}
        />
        <main id="main-content" tabIndex={-1}>
          <Header isDarkMode={isDarkMode} lang={lang} />
          <Projects isDarkMode={isDarkMode} lang={lang} />
          <About isDarkMode={isDarkMode} lang={lang} />
          <Services isDarkMode={isDarkMode} lang={lang} />
          <Contact isDarkMode={isDarkMode} lang={lang} />
        </main>
        <Footer isDarkMode={isDarkMode} lang={lang} />
      </div>
    </MotionConfig>
  );
}
