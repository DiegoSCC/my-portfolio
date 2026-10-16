"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import { useState } from "react";
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
        setStatus({ state: "success", message: t.form.successMsg });
        form.reset();
      } else {
        setStatus({
          state: "error",
          message: data.message || t.form.errorMsg,
        });
      }
    } catch {
      setStatus({ state: "error", message: t.form.errorMsg });
    }
  };

  const contactMethods = [
    {
      title: t.cards.email,
      value: "diegosantinocuello@gmail.com",
      link: "mailto:diegosantinocuello@gmail.com",
    },
    { title: t.cards.location, value: t.cards.locationVal, link: null },
    { title: t.cards.status, value: t.cards.statusVal, link: null },
  ];

  const fieldClass = `w-full rounded-lg border px-4 py-3 text-base leading-normal transition-colors sm:text-sm ${
    isDarkMode
      ? "border-white/15 bg-white/5 text-white placeholder:text-gray-500 focus:border-emerald-400"
      : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-emerald-700"
  }`;

  return (
    <section id="contact" className="w-full scroll-mt-24 px-[7%] py-20 lg:px-[12%]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
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

        <dl className="mb-10 grid max-w-5xl border-y border-gray-200 dark:border-white/15 sm:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="min-w-0 border-b border-gray-200 py-4 last:border-b-0 dark:border-white/15 sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:pr-0 sm:[&+div]:border-l sm:[&+div]:border-gray-200 sm:dark:[&+div]:border-white/15"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 dark:text-gray-400">
                {method.title}
              </dt>
              <dd className="mt-1 break-words text-sm font-medium text-gray-900 dark:text-gray-100">
                {method.link ? (
                  <a href={method.link} className="text-emerald-800 underline decoration-emerald-500/50 underline-offset-4 hover:text-emerald-600 dark:text-emerald-300 dark:hover:text-emerald-200">
                    {method.value}
                  </a>
                ) : (
                  method.value
                )}
              </dd>
            </motion.div>
          ))}
        </dl>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/15 dark:bg-[#121916] sm:p-8"
          onSubmit={onSubmit}
          aria-busy={status.state === "submitting"}
        >
          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                {lang === "en" ? "Name / Company" : "Nombre o Empresa"} <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder={t.form.namePlaceholder}
                required
                name="name"
                autoComplete="name"
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                {lang === "en" ? "Email Address" : "Correo Electrónico"} <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder={t.form.emailPlaceholder}
                required
                name="email"
                autoComplete="email"
                inputMode="email"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
              {lang === "en" ? "Message / Inquiry" : "Mensaje o Consulta"} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              rows="5"
              placeholder={t.form.msgPlaceholder}
              required
              name="message"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.16 }}
              type="submit"
              disabled={status.state === "submitting"}
              className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto ${
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
            <p
              role={status.state === "error" ? "alert" : "status"}
              aria-live={status.state === "error" ? "assertive" : "polite"}
              aria-atomic="true"
              className={`text-sm font-medium ${
                status.state === "success"
                  ? "text-emerald-700 dark:text-emerald-400"
                  : status.state === "error"
                    ? "text-rose-600 dark:text-rose-400"
                    : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {status.message}
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
