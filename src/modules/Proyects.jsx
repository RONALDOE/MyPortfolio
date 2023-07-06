import React from 'react'
import Tempus from '../assets/Tempuslogo.png'
export default function Proyects() {


  return (
    <div className="bg-black  h-[100vh]" id='proyects'>
        <h1 className='text-[5rem]   text-white font-bebasn text-center '>PROYECTOS</h1>
        <div className=' mt-10 grow flex flex-col gap-12 p-12'>


          <div className='shadow-2xl shadow-slate-900 w-2/5  h-grow  justify-center items-center flex flex-row bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded drop-shadow-lg font-mono text-white text-xl text-justify p-4 gap-4'>

    <div>

          <h1 className='text-[2.5rem] text-center'>TEMPUS</h1>
          <br/>
          <p className='text-[1rem] text-justify '>Administrador de archivos en la nube de Amazon AW3 con sistema de login y manejo de grupos de usuarios. </p>
    </div>
          <img className='object-fit h-[12rem] rounded-md' src={Tempus} alt="" srcset="" />

          </div>
        </div>

    </div>
  )
}
