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
            <div className='bg-[#edeff5] h-[2rem] mt-[2rem]'></div>
            <div className='background-apt'></div>
            <div className='flex justify-center'>
                <div className=' w-[1000px] px-[1rem] py-[1rem] mt-[2rem]'>

                    <Subtitle titulo='Aptitudes'
                        color='white' />

                    <div className='w-[full] flex justify-between gap-[4rem] text-white mt-[3rem]'>
                        <div className=''>
                            <div><Lenguajes /></div>

                            <div className='mt-[3rem]'><Librerias /></div>

                        </div>

                        <div className=''>
                            <div><Idiomas /></div>

                            <div className='mt-[3rem]'><BasesDatos /></div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
