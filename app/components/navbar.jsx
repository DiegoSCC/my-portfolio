"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Navbar = ({ isDarkMode, setIsDarkMode, lang = "es", setLang }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const wasMenuOpen = useRef(false);
  const previousOverflow = useRef("");
  const t = translations[lang]?.nav || translations.es.nav;

  const navLinks = [
    { label: t.home, href: "#home", id: "home" },
    { label: t.projects, href: "#projects", id: "projects" },
    { label: t.about, href: "#about", id: "about" },
    { label: t.services, href: "#services", id: "services" },
    { label: t.contact, href: "#contact", id: "contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 24);
      const scrollPosition = window.scrollY + 180;
      for (let index = navLinks.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(navLinks[index].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[index].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lang]);

  useEffect(() => {
    if (!isMenuOpen) {
      if (wasMenuOpen.current) menuButtonRef.current?.focus();
      wasMenuOpen.current = false;
      return;
    }

    wasMenuOpen.current = true;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = drawerRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow.current;
    };
  }, [isMenuOpen]);

  const languageButtons = (
    <div
      role="group"
      aria-label={lang === "en" ? "Choose language" : "Elegir idioma"}
      className="flex items-center gap-1"
    >
      {["es", "en"].map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => setLang(locale)}
          aria-pressed={lang === locale}
          className={`min-h-11 min-w-11 rounded-full px-3 text-xs font-semibold transition-colors ${
            lang === locale
              ? "bg-emerald-700 text-white dark:bg-emerald-500 dark:text-black"
              : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b px-[6%] pb-2 lg:px-[8%] ${
          isScroll
            ? isDarkMode
              ? "border-white/10 bg-[#0c100e]/90 shadow-sm backdrop-blur-md"
              : "border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-md"
            : "border-transparent bg-transparent"
        } pt-[calc(0.5rem+env(safe-area-inset-top))] transition-colors duration-200`}
      >
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-4">
          <a
            href="#home"
            aria-label={lang === "en" ? "Diego Cuello — home" : "Diego Cuello — inicio"}
            className="inline-flex min-h-11 items-center rounded-md"
          >
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              className="w-28 sm:w-32"
              alt="Diego Cuello"
              priority
            />
          </a>

          <nav aria-label={t.ariaNav} className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border border-gray-200/80 bg-white/90 p-1 backdrop-blur-md dark:border-white/10 dark:bg-[#141b18]/90">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`inline-flex min-h-11 items-center rounded-full px-3 text-sm whitespace-nowrap transition-colors ${
                        isActive
                          ? "bg-emerald-50 font-semibold text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-300"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-950 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden md:block">{languageButtons}</div>
            <motion.button
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() => setIsDarkMode((previous) => !previous)}
              aria-label={isDarkMode ? t.toggleLight : t.toggleDark}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 transition-colors hover:bg-gray-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <Image
                alt=""
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                className="h-5 w-5"
              />
            </motion.button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label={t.ariaMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-800 transition-colors hover:bg-gray-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 md:hidden"
            >
              <Image
                alt=""
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <button
          type="button"
          aria-label={lang === "en" ? "Close navigation menu" : "Cerrar menú de navegación"}
          onClick={closeMenu}
          className="fixed inset-0 z-40 cursor-default bg-black/45 backdrop-blur-[2px] md:hidden"
        />
      )}

      <aside
        id="mobile-navigation"
        ref={drawerRef}
        role="dialog"
        aria-modal={isMenuOpen ? "true" : undefined}
        aria-label={lang === "en" ? "Mobile navigation" : "Navegación móvil"}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed bottom-0 right-0 z-50 flex h-dvh w-[min(22rem,88vw)] flex-col justify-between border-l px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-[calc(1.5rem+env(safe-area-inset-top))] transition-transform duration-300 md:hidden ${
          isDarkMode
            ? "border-white/10 bg-[#0f1412] text-white shadow-2xl"
            : "border-gray-200 bg-white text-gray-900 shadow-2xl"
        } ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              className="w-28"
              alt="Diego Cuello"
            />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              aria-label={t.ariaClose}
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-white/10"
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt=""
                className="h-4 w-4"
              />
            </button>
          </div>

          <div className="mt-5 rounded-xl border border-gray-200 px-3 py-2 dark:border-white/10">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {lang === "en" ? "Language" : "Idioma"}
            </p>
            {languageButtons}
          </div>

          <nav className="mt-5" aria-label={t.ariaNav}>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex min-h-12 items-center justify-between rounded-lg px-3 text-base transition-colors ${
                        isActive
                          ? "bg-emerald-50 font-semibold text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-300"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                      <span aria-hidden="true" className="text-xs opacity-50">→</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <a
          href="#contact"
          onClick={closeMenu}
          className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold ${
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
      </aside>
    </>
  );
};

export default Navbar;
