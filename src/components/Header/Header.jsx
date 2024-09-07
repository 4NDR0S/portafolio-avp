import React from 'react'
import './header.css'
import Curriculum from '../Curriculum'

export default function Header() {
  return (
    <>
      <div>
        <div className='backgroundh h-[50px]'></div>

        <div className='px-[4rem] flex justify-center
        sm:flex sm:justify-between'>
          <button className='hidden uppercase text-white text-[20px] font-semibold hover:text-red-500
          sm:block
          '>inicio</button>
          <Curriculum color='white'/>
        </div>
      </div>
      <div className=' mt-[90px] text-center'>
        <h1 className='text-[65px] text-white font-semibold'>Anthony Vela</h1>
        <h2 className='text-[22px] uppercase text-[#bbc8dd]'>Desarrollador Full Stack</h2>
      </div>
      
      <div className='flex justify-center items-center mt-[50px]'>
        <div className=' z-20 profile-pic'>
          <img src="./avp-pic.png" alt="" className='rounded-full h-[248px] w-[244px]' />
        </div>
      </div>

      <div className='bg-[#edeff5] h-[100px] z-10 mt-[-135px]'></div>
    </>
  )
}
