import React from 'react'
import Subtitle from '../Subtitle'
import Otros from './Otros'
import Ejemplos from './Ejemplos'

export default function Info() {
    return (
        <div className='w-full sm:flex gap-0 sm:h-[400px] sm:items-center'>
            
            <div className='sm:w-[50%] bg-[#2e4975] flex sm:justify-end h-full'>
                <div className='min-w-[350px] sm:w-[500px] px-[1rem] py-[1rem] '>
                    <Subtitle titulo='info' color='white' />

                    <div className='mt-[2rem] text-white flex justify-start gap-[2rem] border-b-2  mr-[2rem] h-[230px]'>
                        <div className='flex-col font-semibold'>
                            <p className='py-[1rem]'>Teléfono</p>
                            <p className='py-[1rem]'>Email</p>
                            <p className='py-[1rem]'>Ubicacion</p>
                        </div>

                        <div className='flex-col'>
                            <p className='py-[1rem]'>+51 972 130 045</p>
                            <p className='py-[1rem]'>andros.vela06@gmail.com</p>
                            <p className='py-[1rem]'>Lima, Peru</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sm:w-[50%] bg-[#bbc8dd] flex sm:justify-start h-full'>
                <div className='min-w-[350px] sm:w-[500px] px-[1rem] py-[1rem]  sm:ml-[2rem]'>
                    <Subtitle titulo='elemplos publicos' color='#070a0e' />

                    <div className='mt-[2rem] text-[#070a0e] border-b-2 border-[#070a0e] h-[230px]'>
                        <Ejemplos/>
                    </div>
                </div>
            </div>
        </div>
    )
}
