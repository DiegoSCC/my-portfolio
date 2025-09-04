"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";

const Navbar = () => {


  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = " translateX(-16rem)"
  };

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = " translateX(16rem)"
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])


  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image alt="" src={assets.header_bg_color} className="w-full" />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-around ${isScroll ? "duration-600 bg-white/50 backdrop-blur-lg shadow-sm" : " "} z-50`}>
        <a href="">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>

        <ul className={`hidden md:flex justify-center items-center gap-6 lg:gap-8 rounded-full py-3 px-12  ${isScroll ? "" : "duration-600 bg-white/50 shadow-sm"} `}>
          <li>
            <a className="font-ovo" href="#top">
              Inicio
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              Sobre mi
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#projects">
              Mis proyectos
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">
              Contacto
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Image alt="" src={assets.moon_icon} className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:-translate-y-1 duration-500 hover:shadow-light"
          >
            Contactame <Image src={assets.arrow_icon} className="w-3" alt=" " />
          </a>

          <button className="block md:hidden ml-3">
            <Image alt="" src={assets.menu_black} onClick={openMenu} className="w-6" />
          </button>
        </div>

        {/* mobile menu */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
        ">

          <div className="absolute- right-6 top-6" onClick={closeMenu}>
            <Image src={assets.close_black}  alt="" className="cursor-pointer w-5"/>
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
