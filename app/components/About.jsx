import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({ isDarkMode }) => { // Add isDarkMode prop
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduccion</h4>
      <h2 className='text-center text-5xl font-ovo'>Sobre mi</h2>

      <div className='flex w-full flex-col lg:flex-row gap-20 my-20'>
        <div className='w34 sm:w-60 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt="user" className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'> 
          <p className='mb-10 max-w-3xl font-ovo'>
            Soy un desarrollador web de Argentina, actualmente residiendo en la provincia de Chaco. Trabajo como freelance y formo parte de un equipo independiente que colabora con pequeñas y medianas empresas de la región. Me encuentro estudiando en la UTN la carrera de <a className='font-semibold'>Ingenieria en sistemas de Información</a> y tengo un fuerte interés en aprender nuevas tecnologías. Algunos de mis pasatiempos son los deportes, el basquét principalmente, el gaming y codear.
          </p>
          
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li 
                className={`border-[0.5px] rounded-xl p-6 cursor-pointer duration-500 hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'border-white/50 hover:bg-dark-hover hover:shadow-dark' 
                    : 'border-gray-400 hover:bg-light-hover hover:shadow-light'
                }`}
                key={index}
              >
                <Image 
                  className='w-7 mt-3' 
                  src={isDarkMode ? iconDark : icon} 
                  alt={title} 
                />
                <h3 className={`my-4 font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-700'
                }`}>
                  {title}
                </h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className={`my-6 font-ovo ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          }`}>
            Herramientas que uso
          </h4>

          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li 
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer duration-500 hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'border-white/50 hover:shadow-dark' 
                    : 'border-gray-400 hover:shadow-light'
                }`}
                key={index}
              >
                <Image src={tool} alt='tool' className='w-5 sm:w-7'/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About