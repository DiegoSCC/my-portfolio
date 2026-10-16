"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import { motion } from "motion/react";

const Footer = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.footer || translations.es.footer;
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="mt-12 border-t border-gray-200 px-[7%] py-8 dark:border-white/15 lg:px-[12%]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#home" className="inline-flex min-h-11 items-center rounded-md">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt="Diego Cuello — Inicio"
              className="w-32"
            />
          </a>
          <a
            href="mailto:diegosantinocuello@gmail.com"
            className="mt-1 block text-sm text-gray-600 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-300"
          >
            diegosantinocuello@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-300 sm:items-end">
          <nav aria-label={lang === "en" ? "Social links" : "Enlaces sociales"}>
            <ul className="flex min-h-11 items-center gap-6 font-medium">
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/DiegoSCC" className="rounded-sm hover:text-emerald-700 dark:hover:text-emerald-300">
                  GitHub
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/diego-cuello" className="rounded-sm hover:text-emerald-700 dark:hover:text-emerald-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
          <p>© {currentYear} Diego Cuello. {t.rights}</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
