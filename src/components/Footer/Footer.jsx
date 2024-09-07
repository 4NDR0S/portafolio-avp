import React, { useState } from 'react'
import Social from '../Social'
import Curriculum from '../Curriculum'

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    return (
        <div className='flex justify-center'>
            <div className=' w-[1000px] px-[1rem] py-[5rem] sm:flex sm:justify-between'>
                <div>

                    {/* dimenciones para pantalla chica */}
                    <div className='flex justify-center sm:hidden'>
                        <Curriculum color='black' py='.5rem' px='7rem' />
                    </div>

                    <div className='hidden sm:block'>
                        <Curriculum color='black' py='.5rem' px='10rem' />
                    </div>
                    <p className='text-center mt-[1rem]  text-[13px]'>
                        <span>© {currentYear} - </span>Creado por <span className='text-[#2e4975] font-semibold'>Anthony Vela</span></p>
                </div>
                <div className='mt-[3rem] sm:mt-[0] flex-col justify-center items-center  px-[10rem]'>
                    <div className='flex items-center mt-[.5rem]'><Social /></div>

                    <p className='text-center mt-[1.1rem] text-[13px]'>Buscame en mis redes</p>
                </div>
            </div>
        </div>
    )
}
