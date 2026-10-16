"use client";

import { assets } from "@/assets/assets";
import { translations } from "@/assets/translations";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

const Projects = ({ isDarkMode, lang = "es" }) => {
  const t = translations[lang]?.projects || translations.es.projects;
  const projectList = t.items;

  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(t.allFilter);
  const initialItemsToShow = 4;

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projectList.map((p) => p.category)));
    return [t.allFilter, ...uniqueCategories];
  }, [projectList, t.allFilter]);

  const filteredProjects = useMemo(() => {
    if (selectedFilter === t.allFilter) return projectList;
    return projectList.filter((p) => p.category === selectedFilter);
  }, [selectedFilter, projectList, t.allFilter]);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialItemsToShow);

  const hasMoreItems = filteredProjects.length > initialItemsToShow;

  return (
    <section id="projects" className="w-full px-[6%] md:px-[10%] lg:px-[12%] py-16 scroll-mt-20 overflow-hidden">
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
        <p className="text-center max-w-2xl mx-auto mt-4 mb-8 font-ovo text-gray-700 dark:text-gray-300 text-base sm:text-lg">
          {t.intro}
        </p>
      </motion.div>

      {/* Filter Chips */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-center justify-center gap-2 mb-10"
      >
        {categories.map((cat) => {
          const isSelected = selectedFilter === cat;
          return (
            <motion.button
              key={cat}
              onClick={() => {
                setSelectedFilter(cat);
                setShowAll(false);
              }}
              whileHover={{
                y: -2.5,
                boxShadow: isDarkMode
                  ? "0px 2.5px 0px rgba(16,185,129,0.35), 0px 4px 10px rgba(0,0,0,0.4)"
                  : "0px 2.5px 0px rgba(0,0,0,0.12), 0px 4px 8px rgba(0,0,0,0.06)",
              }}
              whileTap={{ y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap min-h-[38px] flex items-center justify-center ${
                isSelected
                  ? isDarkMode
                    ? "bg-emerald-500 text-black font-semibold"
                    : "bg-emerald-700 text-white font-semibold"
                  : isDarkMode
                  ? "border border-white/15 text-gray-300 hover:bg-white/10 hover:text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              key={project.title}
              whileHover={{
                y: -6,
                boxShadow: isDarkMode
                  ? "0px 6px 0px rgba(16,185,129,0.2), 0px 12px 24px rgba(0,0,0,0.6)"
                  : "0px 6px 0px rgba(0,0,0,0.08), 0px 12px 24px rgba(0,0,0,0.08)",
              }}
              className={`rounded-2xl border overflow-hidden flex flex-col transition-colors duration-200 group ${
                isDarkMode
                  ? "border-white/10 bg-[#121916]/80 hover:border-emerald-500/40 hover:bg-[#15221d]"
                  : "border-gray-200 bg-white hover:border-emerald-400"
              }`}
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900/50">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 relative"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wider rounded-md uppercase bg-black/75 text-emerald-300 backdrop-blur-md border border-white/20">
                  {project.category}
                </span>
              </div>

              {/* Body Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-lg font-semibold mb-2 font-outfit ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                            isDarkMode
                              ? "bg-emerald-950/40 text-emerald-300 border border-emerald-500/20"
                              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <div className="pt-3 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors ${
                      isDarkMode
                        ? "text-emerald-400 hover:text-emerald-300"
                        : "text-emerald-700 hover:text-emerald-800"
                    }`}
                  >
                    {t.viewCode}
                    <Image
                      src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                      alt=""
                      className="w-3 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {hasMoreItems && (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            y: -4,
            boxShadow: isDarkMode
              ? "0px 4px 0px rgba(16,185,129,0.4), 0px 8px 16px rgba(0,0,0,0.5)"
              : "0px 4px 0px rgba(6,78,59,0.3), 0px 8px 14px rgba(6,78,59,0.15)",
          }}
          whileTap={{
            y: 0,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setShowAll(!showAll)}
          className={`w-max flex items-center justify-center gap-2 border rounded-full py-3 px-8 mx-auto mt-12 duration-200 transition-colors font-medium text-sm cursor-pointer whitespace-nowrap min-h-[44px] ${
            isDarkMode
              ? "text-emerald-300 border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-900/30"
              : "text-emerald-900 border-emerald-600/40 bg-emerald-50/60 hover:bg-emerald-100"
          }`}
        >
          {showAll ? t.showLess : t.showMore}
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt="arrow"
            className={`w-3.5 transition-transform duration-300 ${
              showAll ? "-rotate-90" : "rotate-90"
            }`}
          />
        </motion.button>
      )}
    </section>
  );
};

export default Projects;
