'use client'

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e7158b21-9425-4e7c-a378-ec1377dc17d2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div
        id="contact"
        className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      >
        <h4 className="text-center mb-2 text-lg font-ovo">Contactame!</h4>
        <h2 className="text-center text-5xl font-ovo">Contacto directo</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
          Si tenés una propuesta, consulta o proyecto en mente, completá el formulario y me pondré en contacto con vos lo antes posible.
        </p>

        <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
          <div className=" grid grid-cols-2 gap-6 mt-10 mb-8">
            <input
              type="text"
              placeholder="Ingresa tu nombre o alias"
              required
              name="name"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
              type="email"
              placeholder="Ingresa tu correo"
              required
              name="email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Ingresa tu mensaje"
            required
            name="message"
            className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          ></textarea>

          <button
            type="submit"
            className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/60 text-white rounded-full mx-auto hover:-translate-y-1 duration-500 hover:shadow-light"
          >
            Enviar{" "}
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </button>

          <p className="mt-4">{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
