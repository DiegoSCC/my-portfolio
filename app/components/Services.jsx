"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.services || translations.es.services;

  const icons = [
    { icon: assets.code_icon, dark: assets.code_icon_dark },
    { icon: assets.project_icon, dark: assets.project_icon_dark },
    { icon: assets.edu_icon, dark: assets.edu_icon_dark },
  ];

  return (
    <section id="services" className="w-full px-[6%] md:px-[10%] lg:px-[12%] py-16 scroll-mt-20 overflow-hidden">
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
        <p className="text-center max-w-2xl mx-auto mt-4 mb-12 font-ovo text-gray-700 dark:text-gray-300 text-base sm:text-lg">
          {t.intro}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {t.items.map((service, index) => {
          const currentIcon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                boxShadow: isDarkMode
                  ? "0px 6px 0px rgba(16,185,129,0.2), 0px 12px 24px rgba(0,0,0,0.6)"
                  : "0px 6px 0px rgba(0,0,0,0.08), 0px 12px 24px rgba(0,0,0,0.08)",
              }}
              className={`border rounded-2xl p-8 transition-colors duration-200 flex flex-col justify-between ${
                isDarkMode
                  ? "border-white/10 bg-[#121916]/80 hover:border-emerald-500/40 hover:bg-[#15221d]"
                  : "border-gray-200 bg-white hover:border-emerald-400 hover:bg-emerald-50/20"
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    isDarkMode ? "bg-emerald-950/40" : "bg-emerald-50"
                  }`}
                >
                  <Image
                    src={isDarkMode ? currentIcon.dark : currentIcon.icon}
                    alt={service.title}
                    className="w-6"
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 font-outfit ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isDarkMode
                      ? "text-emerald-400 hover:text-emerald-300"
                      : "text-emerald-700 hover:text-emerald-800"
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
