"use client";

import { assets, toolsData } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import { motion } from "motion/react";

const About = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.about || translations.es.about;
  const icons = [
    { icon: assets.code_icon, dark: assets.code_icon_dark },
    { icon: assets.edu_icon, dark: assets.edu_icon_dark },
    { icon: assets.project_icon, dark: assets.project_icon_dark },
  ];

  return (
    <section id="about" className="w-full scroll-mt-24 px-[7%] py-20 lg:px-[12%]">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="mb-10 max-w-3xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-400">
          {t.subtitle}
        </p>
        <h2 className="font-ovo text-4xl leading-tight tracking-tight sm:text-5xl">
          {t.title}
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.6fr)] lg:gap-16">
        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="border-l-2 border-emerald-600 pl-5 dark:border-emerald-400"
          aria-label={lang === "en" ? "Profile details" : "Datos del perfil"}
        >
          <p className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true" />
            {t.available}
          </p>
          <dl className="space-y-5">
            {t.profileDetails.map((detail) => (
              <div key={detail.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-base font-medium leading-snug text-gray-900 dark:text-white">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.aside>

        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg"
          >
            <p>{t.bio1}</p>
            <p>{t.bio2}</p>
          </motion.div>

          <ul className="my-9 grid gap-5 border-y border-gray-200 py-6 dark:border-white/15 sm:grid-cols-3 sm:gap-6">
            {t.infoCards.map((card, index) => (
              <li key={card.title} className="min-w-0">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/50">
                  <Image
                    className="w-5"
                    src={isDarkMode ? icons[index % icons.length].dark : icons[index % icons.length].icon}
                    alt=""
                  />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-gray-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800 dark:text-emerald-300">
                {t.skillsHeading}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {t.skillsList.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 dark:border-white/15 dark:text-gray-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800 dark:text-emerald-300">
                {t.toolsHeading}
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 dark:text-gray-300">
                {toolsData.map((tool, index) => (
                  <li key={tool.name} className="flex items-center gap-3">
                    {index > 0 && <span aria-hidden="true" className="text-emerald-600">·</span>}
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
