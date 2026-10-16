"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.contact || translations.es.contact;
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "submitting", message: t.form.sendingBtn });
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "e7158b21-9425-4e7c-a378-ec1377dc17d2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          state: "success",
          message: t.form.successMsg,
        });
        form.reset();
      } else {
        setStatus({
          state: "error",
          message: data.message || t.form.errorMsg,
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: t.form.errorMsg,
      });
    }
  };

  const contactMethods = [
    {
      title: t.cards.email,
      value: "diegosantinocuello@gmail.com",
      link: "mailto:diegosantinocuello@gmail.com",
    },
    {
      title: t.cards.location,
      value: t.cards.locationVal,
      link: null,
    },
    {
      title: t.cards.status,
      value: t.cards.statusVal,
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full px-[6%] md:px-[10%] lg:px-[12%] py-20 scroll-mt-20 relative bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none overflow-hidden"
    >
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

      {/* Quick Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
        {contactMethods.map((method, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              y: -4,
              boxShadow: isDarkMode
                ? "0px 4px 0px rgba(16,185,129,0.25), 0px 8px 16px rgba(0,0,0,0.5)"
                : "0px 4px 0px rgba(0,0,0,0.08), 0px 8px 16px rgba(0,0,0,0.06)",
            }}
            className={`p-4 rounded-xl border text-center transition-colors duration-200 ${
              isDarkMode
                ? "border-white/10 bg-[#121916]/80"
                : "border-gray-200 bg-white"
            }`}
          >
            <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold block mb-1">
              {method.title}
            </span>
            {method.link ? (
              <a
                href={method.link}
                className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline break-all"
              >
                {method.value}
              </a>
            ) : (
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {method.value}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.form
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#121916]/90 backdrop-blur-md transition-colors"
        onSubmit={onSubmit}
      >
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300"
            >
              {lang === "en" ? "Name / Company" : "Nombre o Empresa"} <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder={t.form.namePlaceholder}
              required
              name="name"
              className={`w-full p-3.5 outline-none border rounded-xl text-sm transition-colors focus:ring-2 focus:ring-emerald-500/30 ${
                isDarkMode
                  ? "border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-emerald-600"
              }`}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300"
            >
              {lang === "en" ? "Email Address" : "Correo Electrónico"} <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder={t.form.emailPlaceholder}
              required
              name="email"
              className={`w-full p-3.5 outline-none border rounded-xl text-sm transition-colors focus:ring-2 focus:ring-emerald-500/30 ${
                isDarkMode
                  ? "border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-emerald-600"
              }`}
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-700 dark:text-gray-300"
          >
            {lang === "en" ? "Message / Inquiry" : "Mensaje o Consulta"} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            rows="5"
            placeholder={t.form.msgPlaceholder}
            required
            name="message"
            className={`w-full p-3.5 outline-none border rounded-xl text-sm transition-colors focus:ring-2 focus:ring-emerald-500/30 ${
              isDarkMode
                ? "border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-emerald-500"
                : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-emerald-600"
            }`}
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.button
            whileHover={{
              y: -4,
              boxShadow: isDarkMode
                ? "0px 4px 0px #042f2e, 0px 8px 16px rgba(16,185,129,0.35)"
                : "0px 4px 0px #064e3b, 0px 8px 16px rgba(6,78,59,0.35)",
            }}
            whileTap={{
              y: 0,
              boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            type="submit"
            disabled={status.state === "submitting"}
            className={`w-full sm:w-auto py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed ${
              isDarkMode
                ? "bg-emerald-500 text-black hover:bg-emerald-400"
                : "bg-emerald-700 text-white hover:bg-emerald-800"
            }`}
          >
            {status.state === "submitting" ? t.form.sendingBtn : t.form.sendBtn}
            <Image
              src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white}
              alt=""
              className="w-3"
            />
          </motion.button>

          {status.message && (
            <p
              className={`text-xs sm:text-sm font-medium ${
                status.state === "success"
                  ? "text-emerald-500"
                  : status.state === "error"
                  ? "text-rose-500"
                  : isDarkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </div>
      </motion.form>
    </section>
  );
};

export default Contact;
