import React, { Suspense } from 'react'
import lightCubes from '../assets/Light Cubes.png'


export default function AboutMe() {
  return (
    <div className='bg-black w-full h-[100vh]' id='aboutme'>
      <div className='flex flex-none relative justify-center items-center h-full  ' >

        <img src={lightCubes} className='absolute  z-10 w-full h-full ' alt="" />
        <div className='w-1/2 h-96 flex flex-none  justify-center items-center relative z-20 bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg font-mono text-white text-xl text-justify p-4'>
          <p>
          Soy un joven de 17 años de la República Dominicana, también conocido como Gazkey. Mi pasión es brindar un servicio excepcional aprovechando las últimas tecnologías. Me enfoco en el desarrollo web y la inteligencia artificial. Soy altamente responsable y siempre estoy dispuesto a aprender nuevas habilidades que puedan beneficiarme. ¡No dudes en contactarme! Estoy entusiasmado por colaborar en proyectos emocionantes y ofrecer soluciones innovadoras. Juntos, podemos lograr grandes cosas.
                <br/>
                <br/>
            -Ronaldo Suero

          </p>
        </div>
      </div>


    </div>
  )
}

