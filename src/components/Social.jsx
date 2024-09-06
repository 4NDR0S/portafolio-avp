import React from 'react'

export default function Social() {
  return (
    <div className='flex justify-start gap-4'>
        <div className='h-[36px] w-[36px]'>
        <a href="https://www.linkedin.com/in/anthony-vela-853573280/" target="_blank" rel>
        <img src="./linkedin-icon.png" alt="linkedin" className='w-full h-full hover:scale-110' /></a>
        </div>

        <div className='h-[36px] w-[36px]'>
        <a href="mailto:andros.vela06@gmail.com?subject=Consulta" target="_blank" rel>
        <img src="./gmail-icon.png" alt="gmail" className='w-full h-full hover:scale-110' /></a>
        </div>

        <div className='h-[36px] w-[36px]'>
        <a href="https://github.com/4NDR0S" target="_blank" rel>
        <img src="./github-icon.png" alt="github" className='w-full h-full hover:scale-110' /></a>
        </div>
    </div>
  )
}
