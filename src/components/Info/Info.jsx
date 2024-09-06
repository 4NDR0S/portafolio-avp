import React from 'react'
import Subtitle from '../Subtitle'
import Otros from './Otros'

export default function Info() {
    return (
        <div className='w-full flex gap-0 h-[400px] mt-[2.5rem]'>
            <div className='w-[50%] bg-[#2e4975] flex justify-end'>
                <div className='w-[500px] px-[1rem] py-[1rem] mt-[2rem]'>
                    <Subtitle titulo='info' color='white' />
                    <div className='mt-[2rem] text-white flex justify-start gap-[2rem] border-b-2 pb-[1.5rem] mr-[2rem]'>
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
            <div className='w-[50%] bg-[#bbc8dd] flex justify-start'>
                <div className='w-[500px] px-[1rem] py-[1rem] mt-[2rem] ml-[2rem]'>
                    <Subtitle titulo='otros' color='#070a0e' />
                    <div className='mt-[3rem] text-[#070a0e] border-b-2 border-[#070a0e] pb-[2.7rem]'>
                        <Otros />
                    </div>
                </div>
            </div>
        </div>
    )
}
