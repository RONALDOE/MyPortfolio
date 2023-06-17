import React from 'react'
import Logo from '../assets/logo.svg'

export default function Navbar() {
    return (

        <nav className=" bg-white   top-0 ">
            <div className="flex flex-wrap items-center justify-between mx-auto p-1 text-[#212427] sticky" >

                <div className='h-[10vh]  flex flex-row  items-center justify-center gap-2  justify-self-start'>
                    <img src={Logo} alt="" className=' ml-3  h-8 object-cover' />
                    <p className='font-kanit  text-[1.5rem] font-bold'>GAZKEY</p>
                </div>
                <div>
                    <ul className='flex flex-row gap-4   text-[1rem] font-bold mr-3'>
                        <li><a href="">INICIO</a></li>
                        <li><a href="/#aboutme">SOBRE MI</a></li>
                        {/* <li><a href="">EXPERIENCIA</a></li> */}
                        <li><a href="">PROYECTOS</a></li>
                        <li><a href="">SERVICIOS</a></li>
                        <li><a href="">CONTACTO</a></li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}
