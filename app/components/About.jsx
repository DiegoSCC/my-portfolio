"use client";

import { assets, toolsData } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.about || translations.es.about;

  return (
    <section id="about" className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <h4 className="text-center mb-2 text-base md:text-lg font-ovo tracking-wide text-emerald-600 dark:text-emerald-400 font-medium">
          {t.subtitle}
        </h4>
        <h2 className="text-center text-4xl sm:text-5xl font-ovo tracking-tight">
          {t.title}
        </h2>
      </motion.div>

      <div className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 my-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 sm:w-64 lg:w-72 shrink-0"
        >
          <div
            className={`p-2 rounded-3xl border transition-colors duration-300 ${
              isDarkMode
                ? "border-emerald-500/20 bg-[#121916]"
                : "border-gray-200 bg-white shadow-xs"
            }`}
          >
            <Image
              src={assets.user_image}
              alt="Diego Cuello"
              className="w-full rounded-2xl object-cover aspect-square"
              priority
            />
          </div>
          <div className="mt-4 text-center">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full font-medium ${
                isDarkMode
                  ? "bg-emerald-950/60 text-emerald-300 border border-emerald-800/50"
                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.available}
            </span>
          </div>
        </motion.div>

        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 space-y-4 text-base sm:text-lg leading-relaxed font-ovo text-gray-700 dark:text-gray-300"
          >
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
          </motion.div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mb-10">
            {t.infoCards.map((card, index) => {
              const icons = [
                { icon: assets.code_icon, dark: assets.code_icon_dark },
                { icon: assets.edu_icon, dark: assets.edu_icon_dark },
                { icon: assets.project_icon, dark: assets.project_icon_dark },
              ];
              const currentIcon = icons[index % icons.length];

              return (
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    y: -5,
                    boxShadow: isDarkMode
                      ? "0px 5px 0px rgba(16,185,129,0.25), 0px 10px 20px rgba(0,0,0,0.5)"
                      : "0px 5px 0px rgba(0,0,0,0.08), 0px 10px 20px rgba(0,0,0,0.06)",
                  }}
                  className={`border rounded-2xl p-5 duration-200 transition-colors ${
                    isDarkMode
                      ? "border-white/10 bg-[#121916]/80 hover:bg-[#16221d] hover:border-emerald-500/30"
                      : "border-gray-200 bg-white/70 hover:bg-emerald-50/40 hover:border-emerald-300"
                  }`}
                  key={index}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                      isDarkMode ? "bg-emerald-950/40" : "bg-emerald-50"
                    }`}
                  >
                    <Image
                      className="w-5"
                      src={isDarkMode ? currentIcon.dark : currentIcon.icon}
                      alt={card.title}
                    />
                  </div>
                  <h3
                    className={`text-base font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-normal ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {card.description}
                  </p>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h4
              className={`text-sm font-semibold uppercase tracking-wider mb-3 font-ovo ${
                isDarkMode ? "text-emerald-400" : "text-emerald-800"
              }`}
            >
              {t.skillsHeading}
            </h4>
            <div className="flex flex-wrap gap-2">
              {t.skillsList.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 text-xs rounded-lg font-medium border transition-colors ${
                    isDarkMode
                      ? "border-emerald-500/20 bg-emerald-950/25 text-emerald-300 hover:border-emerald-500/50"
                      : "border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-400"
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4
              className={`text-sm font-semibold uppercase tracking-wider mb-4 font-ovo ${
                isDarkMode ? "text-emerald-400" : "text-emerald-800"
              }`}
            >
              {t.toolsHeading}
            </h4>
            <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
              {toolsData.map((tool, index) => (
                <motion.li
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{
                    y: -4,
                    boxShadow: isDarkMode
                      ? "0px 4px 0px rgba(16,185,129,0.3), 0px 8px 16px rgba(0,0,0,0.4)"
                      : "0px 4px 0px rgba(0,0,0,0.12), 0px 8px 14px rgba(0,0,0,0.08)",
                  }}
                  whileTap={{ y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                  className={`relative flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-xl cursor-pointer duration-200 transition-colors group ${
                    isDarkMode
                      ? "border-white/10 bg-white/5 hover:border-emerald-500/40 hover:bg-white/10"
                      : "border-gray-200 bg-white hover:border-emerald-400"
                  }`}
                  key={index}
                  title={`${tool.name} - ${tool.category}`}
                >
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    className="w-6 sm:w-7 object-contain"
                  />

                  <div
                    className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-2.5 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20 shadow-md ${
                      isDarkMode ? "bg-white text-black" : "bg-black text-white"
                    }`}
                  >
                    <span className="font-semibold">{tool.name}</span>
                    <span className="opacity-75 block text-[10px]">{tool.category}</span>
                    <span
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                        isDarkMode ? "border-t-white" : "border-t-black"
                      }`}
                    ></span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
