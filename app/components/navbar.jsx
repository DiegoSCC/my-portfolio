"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${
          isDarkMode ? "hidden" : "block"
        }`}
      >
        <Image alt="" src={assets.header_bg_color} className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? `bg-white/30 backdrop-blur-lg shadow-sm ${
                isDarkMode ? "bg-dark-theme  shadow-white/20" : ""
              }`
            : ""
        }`}
      >
        <a href="">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>

        <ul
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-6 lg:gap-8 rounded-full py-3 px-12 transition-all duration-300 ${
            isScroll
              ? isDarkMode
                ? " "
                : "bg-white/80"
              : isDarkMode
              ? "bg-transparent border border-white/50 shadow-sm"
              : "bg-white/30 shadow-sm"
          }`}
        >
          <li>
            <a
              className={`font-ovo px-3 py-1 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "hover:bg-white/20 hover:text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
              href="#home"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className={`font-ovo px-3 py-1 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "hover:bg-white/20 hover:text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
              href="#about"
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a
              className={`font-ovo px-3 py-1 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "hover:bg-white/20 hover:text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
              href="#projects"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              className={`font-ovo px-3 py-1 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? "hover:bg-white/20 hover:text-white"
                  : "hover:bg-gray-200 hover:text-black"
              }`}
              href="#contact"
            >
              Contacto
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className={` border-transparent p-1 rounded-full transition-all duration-500 hover:scale-110 hover:ring-2 ${
              isDarkMode ? "hover:ring-light-hover/70" : "hover:ring-dark-hover/80"
            }`}
          >
            <Image
              alt=""
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              className="w-6 transition-all duration-300"
            />
          </button>

          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border-[2px] rounded-full ml-4 hover:-translate-y-1 duration-500  ${
              isDarkMode ? "border-white/50 hover:shadow-dark" : "border-gray-500 hover:shadow-light"
            }`}
          >
            Contactame
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              alt=""
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              className="w-6"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${
            isDarkMode ? "bg-dark-hover text-white" : "bg-rose-50"
          }`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="cursor-pointer w-5"
            />
          </div>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#top">
              Inicio
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#about">
              Sobre mi
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#services">
              Servicios
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#projects">
              Mis proyectos
            </a>
          </li>
          <li>
            <a className="font-ovo" onClick={closeMenu} href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
