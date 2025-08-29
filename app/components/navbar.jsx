import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image alt="" src={assets.header_bg_color} className="w-full" />
      </div>

      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50">
        <a href="">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full py-3 px-12 bg-white shadow-sm bg-opacity-50">
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
            <a className="font-ovo" href="#services">
              Servicios
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
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contactame <Image src={assets.arrow_icon} className="w-3" alt=" " />
          </a>

          <button className="block md:hidden ml-3">
            <Image alt="" src={assets.menu_black} className="w-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
