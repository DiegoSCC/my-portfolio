"use client";

import { translations } from "@/assets/translations";
import { motion } from "motion/react";

const Services = ({ lang = "es" }) => {
  const t = translations[lang]?.services || translations.es.services;

  return (
    <section id="services" className="w-full scroll-mt-24 px-[7%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-6xl">
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
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
            {t.intro}
          </p>
        </motion.div>

        <ol className="grid border-t border-gray-300 dark:border-white/20 md:grid-cols-3">
          {t.items.map((service, index) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="flex min-w-0 flex-col border-b border-gray-300 py-6 dark:border-white/20 md:border-b-0 md:px-5 md:first:pl-0 md:last:pr-0 md:[&+li]:border-l md:[&+li]:border-gray-300 md:dark:[&+li]:border-white/20"
            >
              <span className="mb-5 font-ovo text-sm text-emerald-700 dark:text-emerald-400">
                0{index + 1}
              </span>
              <h3 className="text-xl font-semibold leading-snug text-gray-950 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-600 dark:text-emerald-300 dark:hover:text-emerald-200"
              >
                {t.cta}
                <span aria-hidden="true">↗</span>
              </a>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Services;
