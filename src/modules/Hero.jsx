import React, { useState } from 'react'
import { useEffect, useRef } from "react";
import Myphoto from '../assets/myPhoto.png'

import Typed from "typed.js";

export default function Hero() {
    const [quote, setQuote] = useState([])

    // useEffect(() => {
    //     fetch('https://type.fit/api/quotes')
    //       .then(response => response.json())
    //       .then(data => {
    //         const randomIndex = Math.floor(Math.random() * data.length);
    //         setQuote(data[randomIndex].text);
    //       })
    //       .catch(error => console.log(error));
    //   }, []);

    const badges = ['JS', 'HTML Vanilla', 'CSS', ' Manejo de Bases De Datos', 'POO' ]
    return (
        <div class="grid grid-rows-3 grid-flow-col gap-4 mt-12 select-none h-[90vh]	">
            <div class="col-span-2 row-span-3  flex flex-col font-bebasn justify-center items-center font-[400] ">
                <p className='text-8xl'>HOLA! SOY <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-800 via-teal-400 to-purple-900'>RONALDO</span></p>
                <p className='text-left text-[2.8rem]  break-keep'>Y soy <Writing /></p>
            </div>
            {/* <div class="col-span-2 h-48">
                <p className='text-left text-4xl font-bebasn  flex flex-row items-center justify-center'>Me especifico en:</p>
                <div className='flex flex-col items-start justify-center gap-1 '>

                    {badges.map((badge) => (
                    
                    <p key={badge} className={`text-4xl border  border-2	 rounded-md	bg-[#111111] text-white px-2 text-[1.5rem]`}>{badge}</p>
                    ))
                }
                </div>

            </div> */}
            <div class="row-span-3 col-span-2 h-auto flex justify-center">
                <img src={Myphoto} alt="" className='' />
            </div>
            
        </div>
    )
}



const Writing = (props) => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Diseñador Web', 'Programador Web', 'Fullstack Developer', 'Freelancer'],
            startDelay: 150,
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 500,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });


        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <span id='typedText' ref={el} />);
};