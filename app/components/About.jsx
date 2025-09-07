import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({ isDarkMode }) => {
  const toolNames = [
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "CSS",
    "HTML",
    // En el mismo orden que toolsData array
  ];
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introducción</h4>
      <h2 className="text-center text-5xl font-ovo">Sobre mi</h2>

      <div className="flex w-full flex-col lg:flex-row gap-20 my-20">
        <div className="w34 sm:w-60 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1 ">
          <p className="mb-10 text-center max-w-3xl font-ovo">
            Soy un desarrollador web de Argentina, actualmente residiendo en la
            provincia de Chaco. Trabajo como freelance y formo parte de un
            equipo independiente que colabora con pequeñas y medianas empresas
            de la región. Me encuentro estudiando en la UTN la carrera de{" "}
            <a className="font-semibold">
              Ingeniería en sistemas de Información
            </a>{" "}
            y tengo un fuerte interés en aprender nuevas tecnologías. Algunos de
            mis pasatiempos son los deportes, el basquet principalmente, el
            gaming y codear. Hablo inglés fluidamente y tengo una certificación
            de nivel B2.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer duration-500 hover:-translate-y-1 ${
                  isDarkMode
                    ? "border-white/50 hover:bg-dark-hover hover:shadow-dark"
                    : "border-gray-400 hover:bg-light-hover hover:shadow-light"
                }`}
                key={index}
              >
                <Image
                  className="w-7 mt-3"
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                />
                <h3
                  className={`my-4 font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <h4
            className={`my-6 font-semibold font-ovo ${
              isDarkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Herramientas que uso
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className={`relative flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer duration-500 hover:-translate-y-1 group ${
                  isDarkMode
                    ? "border-white/50 hover:shadow-dark"
                    : "border-gray-400 hover:shadow-light"
                }`}
                key={index}
              >
                <Image
                  src={tool}
                  alt={toolNames[index]}
                  className="w-5 sm:w-7"
                />

                <span
                  className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none whitespace-nowrap ${
                    isDarkMode ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  {toolNames[index]}
                  <span
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                      isDarkMode ? "border-t-white" : "border-t-black"
                    }`}
                  ></span>
                </span>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default About;
