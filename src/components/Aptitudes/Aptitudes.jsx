import React from 'react'
import './aptitudes.css'
import Subtitle from '../Subtitle'
import Lenguajes from './Lenguajes'
import Idiomas from './Idiomas'
import Librerias from './Librerias'
import BasesDatos from './BasesDatos'

export default function Aptitudes() {
    return (
        <>
            
            <div className='background-apt'></div>
            <div className='py-[1rem] sm:flex sm:justify-center sm:h-[530px] items-center bg-[#1d2423] sm:bg-transparent'>
                <div className=' w-[1000px] px-[1rem]'>

                    <Subtitle titulo='Aptitudes'
                        color='white' />

                    <div className='w-[full] sm:flex sm:justify-between gap-[4rem] text-white mt-[3rem]'>
                        <div className=''>
                            <div className=''><Lenguajes /></div>

                            <div className='mt-[2rem] sm:mt-[3rem]'><Librerias /></div>

                        </div>

                        <div className=''>
                            <div className='mt-[2rem] sm:mt-[0px]'><Idiomas /></div>

                            <div className='mt-[2rem] sm:mt-[3rem]'><BasesDatos /></div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
