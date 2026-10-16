"use client";

import { assets } from '@/assets/assets';
import { translations } from '@/assets/translations';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Footer = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.footer || translations.es.footer;
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mt-20 font-outfit overflow-hidden"
    >
      <div className="text-center">
        <a href="#home" className="inline-block transition-transform duration-300 hover:scale-105">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Diego Cuello Logo"
            className="w-36 mx-auto mb-3"
          />
        </a>
        <div className="w-max flex items-center gap-2 mx-auto text-sm sm:text-base">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email icon"
            className="w-5"
          />
          <a
            href="mailto:diegosantinocuello@gmail.com"
            className={`transition-colors duration-200 ${
              isDarkMode ? "hover:text-emerald-400" : "hover:text-emerald-600"
            }`}
          >
            diegosantinocuello@gmail.com
          </a>
        </div>
      </div>

      <div
        className={`text-center sm:flex items-center justify-between border-t mx-[10%] mt-12 py-6 text-sm ${
          isDarkMode
            ? "border-white/15 text-gray-400"
            : "border-gray-200 text-gray-600"
        }`}
      >
        <p>© {currentYear} Diego Cuello. {t.rights}</p>
        <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0 font-medium">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DiegoSCC"
              className={`transition-colors duration-200 ${
                isDarkMode ? "hover:text-emerald-400" : "hover:text-emerald-600"
              }`}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/diego-cuello"
              className={`transition-colors duration-200 ${
                isDarkMode ? "hover:text-emerald-400" : "hover:text-emerald-600"
              }`}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;
