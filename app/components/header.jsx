"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import { motion } from "motion/react";

const Header = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.header || translations.es.header;

  return (
    <header
      id="home"
      className="mx-auto grid min-h-[100svh] w-11/12 max-w-6xl items-center gap-10 px-1 pb-16 pt-28 md:grid-cols-[minmax(0,1.15fr)_minmax(15rem,0.85fr)] md:gap-16 lg:pt-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="min-w-0"
      >
        <p className="mb-4 text-base font-medium text-gray-600 dark:text-gray-300 sm:text-lg">
          {t.greetingPrefix} <span className="font-semibold text-gray-950 dark:text-white">{t.name}</span>
        </p>
        <h1 className="max-w-3xl min-w-0 font-ovo text-4xl leading-[1.08] tracking-[-0.03em] text-gray-950 dark:text-white sm:text-5xl lg:text-6xl [overflow-wrap:anywhere]">
          {t.rolePrefix} {" "}
          <span className="text-emerald-700 dark:text-emerald-400">{t.roleHighlight}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
          {t.bio}
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            href="#projects"
            className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap sm:w-auto ${
              isDarkMode
                ? "bg-emerald-500 text-black hover:bg-emerald-400"
                : "bg-emerald-700 text-white hover:bg-emerald-800"
            }`}
          >
            {t.ctaWork}
            <Image
              src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white}
              alt=""
              className="w-3.5"
            />
          </motion.a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center whitespace-nowrap px-2 text-sm font-semibold text-gray-800 underline decoration-emerald-500/60 underline-offset-4 hover:text-emerald-700 dark:text-gray-100 dark:hover:text-emerald-300"
          >
            {t.ctaContact}
          </a>
        </div>
        <a
          href="/Diego-Santino-Cuello-Resume.pdf"
          download="Diego-Santino-Cuello-Resume.pdf"
          className="mt-2 inline-flex min-h-11 items-center gap-2 whitespace-nowrap px-2 text-sm text-gray-600 underline decoration-gray-400 underline-offset-4 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
        >
          {t.ctaResume}
          <Image
            src={assets.download_icon}
            alt=""
            className="w-3.5 dark:invert"
          />
        </a>
      </motion.div>

      <motion.figure
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto w-full max-w-sm md:justify-self-end"
      >
        <Image
          src={assets.user_image}
          alt="Diego Cuello"
          priority
          className={`aspect-square w-full rounded-[2rem] object-cover ${
            isDarkMode ? "ring-1 ring-white/10" : "ring-1 ring-gray-200"
          }`}
        />
        <figcaption className="mt-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
          {lang === "en" ? "Chaco, Argentina · Backend & APIs" : "Chaco, Argentina · Backend & APIs"}
        </figcaption>
      </motion.figure>
    </header>
  );
};

export default Header;
