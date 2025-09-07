import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Projects = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = 4;

  const displayedProjects = showAll ? workData : workData.slice(0, itemsToShow);
  const hasMoreItems = workData.length > itemsToShow;

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Mi portafolio</h4>
      <h2 className="text-center text-5xl font-ovo">Mis últimos trabajos</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Te invito a revisar algunos de mis últimos trabajos. Encontrarás
        proyectos que varían en complejidad y en el stack utilizado, desde
        aplicaciones completas hasta pruebas de concepto.
      </p>

      {/* Fixed grid: 4 columns max, responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5 max-w-6xl mx-auto">
        {workData.map((project, index) => (
          <div
            className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group transition-all duration-500 ease-out hover:-translate-y-0.2 ${
              index < itemsToShow || showAll
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4 h-0 overflow-hidden"
            } ${index >= itemsToShow && showAll ? "animate-slideIn" : ""} ${
              isDarkMode
                ? "hover:shadow-[3px_3px_0_#fcf4ff]"
                : "hover:shadow-[3px_3px_0_#000]"
            }`}
            key={index}
            style={{
              backgroundImage: `url(${project.bgImage})`,
              transitionDelay:
                index >= itemsToShow
                  ? `${(index - itemsToShow) * 100}ms`
                  : "0ms",
            }}
            onClick={() => {
              if (project.link) {
                window.open(project.link, "_blank");
              }
            }}
          >
            <div
              className={`w-10/12 rounded-md shadow-sm absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 duration-500 group-hover:bottom-7 group-hover:-translate-y-1  ${
                isDarkMode
                  ? "bg-dark-theme border border-white/20 group-hover:shadow-dark group-hover:bg-dark-hover"
                  : "bg-white border-grey/30 group-hover:shadow-light group-hover:bg-light-hover"
              }`}
            >
              <div>
                <h2
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {project.title}
                </h2>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreItems && (
        <button
          onClick={toggleShowMore}
          className={`w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 hover:-translate-y-1 duration-500 transition-all ${
            isDarkMode
              ? "text-white border-white hover:shadow-dark hover:bg-dark-hover"
              : "text-gray-700 border-gray-700 hover:shadow-light hover:bg-light-hover"
          }`}
        >
          {showAll ? "Mostrar menos" : "Mostrar mas"}
          <Image
            src={isDarkMode ? assets.right_arrow_bold : assets.right_arrow_bold}
            alt="arrow"
            className={`w-4 transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default Projects;
