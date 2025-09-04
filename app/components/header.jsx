"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <div className="flex justify-center">
        <h3 className="text-xl md:text-2xl mb-3 font-ovo">
        Hola! soy Diego Cuello.
        </h3>
      </div>
      
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Desarrollador web enfocado en Backend
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        Soy programador/desarrollador web nacido en Argentina, resido actualmente en
        la provincia de Chaco.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-gray-500 text-white bg-black flex items-center gap-2 font-outfit hover:-translate-y-1 duration-500 hover:shadow-light"
        >
          contactame{" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="rounded-full w-4"
          />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 font-outfit hover:-translate-y-1 duration-500 hover:shadow-light"
        >
          Mi CV
          <Image
            src={assets.download_icon}
            alt=""
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
