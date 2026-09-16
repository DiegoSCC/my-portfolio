"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.header || translations.es.header;

  return (
    <header
      id="home"
      className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-24 pb-12 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div
          className={`p-1.5 rounded-full border transition-colors duration-300 ${
            isDarkMode
              ? "border-emerald-500/30 bg-[#121916] ring-4 ring-emerald-500/15"
              : "border-gray-200 bg-white ring-4 ring-emerald-500/10 shadow-xs"
          }`}
        >
          <Image
            src={assets.user_image}
            alt="Diego Cuello"
            className="rounded-full w-28 sm:w-32 object-cover aspect-square"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center gap-2"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-ovo flex items-center gap-2 text-gray-800 dark:text-gray-200">
          {t.greetingPrefix}{" "}
          <span className="font-semibold text-black dark:text-white">
            {t.name}
          </span>
        </h3>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl lg:text-6xl font-ovo leading-tight max-w-3xl tracking-tight"
      >
        {t.rolePrefix}{" "}
        <span className="underline decoration-emerald-500/70 underline-offset-8">
          {t.roleHighlight}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto font-ovo text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed px-4"
      >
        {t.bio}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
      >
        <motion.a
          whileHover={{
            y: -4,
            boxShadow: isDarkMode
              ? "0px 4px 0px #042f2e, 0px 8px 16px rgba(16,185,129,0.35)"
              : "0px 4px 0px #064e3b, 0px 8px 16px rgba(6,78,59,0.3)",
          }}
          whileTap={{
            y: 0,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          href="#contact"
          className={`w-full max-w-xs sm:w-auto sm:min-w-[190px] px-7 py-3.5 rounded-full flex items-center justify-center gap-2.5 font-outfit text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
            isDarkMode
              ? "bg-emerald-500 text-black hover:bg-emerald-400"
              : "bg-emerald-700 text-white hover:bg-emerald-800"
          }`}
        >
          {t.ctaContact}
          <Image
            src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white}
            alt=""
            className="w-3.5"
          />
        </motion.a>

        <motion.a
          whileHover={{
            y: -4,
            boxShadow: isDarkMode
              ? "0px 4px 0px rgba(16,185,129,0.35), 0px 8px 16px rgba(0,0,0,0.5)"
              : "0px 4px 0px rgba(0,0,0,0.18), 0px 8px 14px rgba(0,0,0,0.1)",
          }}
          whileTap={{
            y: 0,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          href="/Diego-Santino-Cuello-Resume.pdf"
          download="Diego-Santino-Cuello-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full max-w-xs sm:w-auto sm:min-w-[190px] px-7 py-3.5 border rounded-full flex items-center justify-center gap-2.5 font-outfit text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
            isDarkMode
              ? "border-emerald-500/30 text-emerald-300 bg-emerald-950/20 hover:bg-emerald-900/30"
              : "border-gray-300 text-gray-800 bg-white hover:bg-gray-50"
          }`}
        >
          {t.ctaResume}
          <Image
            src={assets.download_icon}
            alt=""
            className="w-3.5 dark:invert transition-all"
          />
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Header;
