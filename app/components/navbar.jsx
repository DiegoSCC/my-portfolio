"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const Navbar = ({ isDarkMode, setIsDarkMode, lang = "es", setLang }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const t = translations[lang]?.nav || translations.es.nav;

  const navLinks = [
    { label: t.home, href: "#home", id: "home" },
    { label: t.about, href: "#about", id: "about" },
    { label: t.services, href: "#services", id: "services" },
    { label: t.projects, href: "#projects", id: "projects" },
    { label: t.contact, href: "#contact", id: "contact" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }

      // Track active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] pointer-events-none transition-opacity duration-500 ${
          isDarkMode ? "hidden" : "block opacity-70"
        }`}
      >
        <Image alt="" src={assets.header_bg_color} className="w-full" priority />
      </div>

      <header
        className={`w-full fixed top-0 left-0 px-6 lg:px-12 xl:px-[8%] py-3.5 z-40 border-b transition-all duration-300 ${
          isScroll
            ? isDarkMode
              ? "bg-[#0c100e]/85 backdrop-blur-md border-emerald-950/40 shadow-xs"
              : "bg-white/85 backdrop-blur-md border-gray-200/60 shadow-xs"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Left Column: Logo */}
          <div className="flex items-center justify-start flex-1 min-w-0">
            <a
              href="#home"
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
              aria-label="Diego Cuello - Inicio"
            >
              <Image
                src={isDarkMode ? assets.logo_dark : assets.logo}
                className="w-28 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                alt="Diego Cuello"
                priority
              />
            </a>
          </div>

          {/* Center Column: Perfectly Centered Desktop Nav Pill */}
          <div className="hidden md:flex items-center justify-center">
            <nav aria-label={t.ariaNav}>
              <ul
                className={`flex items-center gap-0.5 lg:gap-1.5 rounded-full py-1.5 px-3 lg:px-4 transition-all duration-300 border ${
                  isDarkMode
                    ? "bg-[#141b18]/90 border-white/15 backdrop-blur-md shadow-xs"
                    : "bg-white/90 border-gray-200/80 backdrop-blur-md shadow-xs"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.id}>
                      <a
                        className={`font-ovo text-xs lg:text-sm px-2.5 lg:px-3.5 py-1.5 rounded-full transition-colors duration-200 block whitespace-nowrap ${
                          isActive
                            ? isDarkMode
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium"
                              : "bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium"
                            : isDarkMode
                            ? "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                            : "text-gray-700 hover:text-black hover:bg-gray-100/80 border border-transparent"
                        }`}
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Right Column: Actions (Language Switcher + Dark Mode + Contact CTA) */}
          <div className="flex items-center justify-end flex-1 gap-2 sm:gap-3">
            {/* Language Switcher Pill - Hidden on mobile, moved to drawer menu to declutter */}
            <div
              className={`hidden md:flex items-center p-0.5 rounded-full border text-xs font-semibold tracking-wide transition-colors ${
                isDarkMode
                  ? "border-white/15 bg-white/5"
                  : "border-gray-200 bg-white"
              }`}
              role="group"
              aria-label="Language selector"
            >
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                  lang === "es"
                    ? "bg-emerald-600 text-white font-semibold"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
                aria-pressed={lang === "es"}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full cursor-pointer transition-colors ${
                  lang === "en"
                    ? "bg-emerald-600 text-white font-semibold"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                }`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>

            {/* Dark mode toggle */}
            <motion.button
              whileHover={{
                y: -2,
                boxShadow: isDarkMode
                  ? "0px 2px 0px rgba(255,255,255,0.2), 0px 4px 8px rgba(0,0,0,0.3)"
                  : "0px 2px 0px rgba(0,0,0,0.12), 0px 4px 8px rgba(0,0,0,0.06)",
              }}
              whileTap={{ y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={isDarkMode ? t.toggleLight : t.toggleDark}
              className={`p-2 rounded-full transition-colors duration-200 cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center border ${
                isDarkMode
                  ? "border-white/15 bg-white/5 hover:bg-white/10 text-white"
                  : "border-gray-200 bg-white hover:bg-gray-100 text-gray-800"
              }`}
            >
              <Image
                alt=""
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 hover:rotate-12"
              />
            </motion.button>

            {/* Quick contact button on desktop */}
            <motion.a
              whileHover={{
                y: -3,
                boxShadow: isDarkMode
                  ? "0px 3px 0px rgba(16,185,129,0.4), 0px 6px 12px rgba(0,0,0,0.4)"
                  : "0px 3px 0px rgba(6,78,59,0.3), 0px 6px 12px rgba(6,78,59,0.15)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
              }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              href="#contact"
              className={`hidden lg:flex items-center gap-2 px-5 py-2 border rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                isDarkMode
                  ? "border-emerald-500/30 text-emerald-300 bg-emerald-950/20 hover:bg-emerald-900/30"
                  : "border-emerald-600/40 text-emerald-900 bg-emerald-50/60 hover:bg-emerald-100"
              }`}
            >
              {t.contactBtn}
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                className="w-2.5"
                alt=""
              />
            </motion.a>

            {/* Mobile hamburger button */}
            <button
              className={`md:hidden p-2 rounded-lg border transition-colors cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center ${
                isDarkMode
                  ? "border-white/15 bg-white/5 text-white hover:bg-white/10"
                  : "border-gray-200 bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={toggleMenu}
              aria-label={t.ariaMenu}
              aria-expanded={isMenuOpen}
            >
              <Image
                alt=""
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 md:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Menu */}
      <aside
        className={`fixed top-0 bottom-0 right-0 w-80 max-w-[85vw] z-50 h-screen transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between p-6 border-l overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${
          isDarkMode
            ? "bg-[#0f1412] text-white border-white/15 shadow-2xl"
            : "bg-white text-gray-900 border-gray-200 shadow-2xl"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-white/10">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              className="w-24"
              alt="Diego Cuello"
            />
            <button
              onClick={closeMenu}
              className={`p-2 rounded-full cursor-pointer transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center ${
                isDarkMode ? "hover:bg-white/10" : "hover:bg-gray-100"
              }`}
              aria-label={t.ariaClose}
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt=""
                className="w-4 h-4"
              />
            </button>
          </div>

          {/* Language Switcher inside Drawer */}
          <div className="mt-4 p-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              {lang === "es" ? "Idioma / Language" : "Language / Idioma"}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[36px] ${
                  lang === "es"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : isDarkMode
                    ? "text-gray-300 hover:bg-white/10"
                    : "text-gray-700 hover:bg-white border border-gray-200/60"
                }`}
              >
                Español (ES)
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer min-h-[36px] ${
                  lang === "en"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : isDarkMode
                    ? "text-gray-300 hover:bg-white/10"
                    : "text-gray-700 hover:bg-white border border-gray-200/60"
                }`}
              >
                English (EN)
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-1">
              {lang === "es" ? "Navegación" : "Navigation"}
            </div>
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      className={`font-ovo text-base py-3 px-4 rounded-xl flex items-center justify-between transition-colors ${
                        isActive
                          ? isDarkMode
                            ? "bg-emerald-500/15 text-emerald-400 font-medium border border-emerald-500/30"
                            : "bg-emerald-50 text-emerald-800 font-medium border border-emerald-200"
                          : isDarkMode
                          ? "text-gray-300 hover:bg-white/10"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={closeMenu}
                      href={link.href}
                    >
                      {link.label}
                      <span className="text-xs opacity-50">→</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10 space-y-3">
          <a
            href="#contact"
            onClick={closeMenu}
            className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold transition-colors cursor-pointer min-h-[44px] ${
              isDarkMode
                ? "bg-emerald-500 text-black hover:bg-emerald-400"
                : "bg-emerald-700 text-white hover:bg-emerald-800"
            }`}
          >
            {t.contactBtn}
            <Image
              src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white}
              className="w-3"
              alt=""
            />
          </a>

          <div className="text-xs text-center text-gray-500 dark:text-gray-400">
            Diego Cuello · Backend & Full Stack
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
