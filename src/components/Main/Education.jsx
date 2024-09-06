import React from 'react'
import Curriculum from '../Curriculum'
import Subtitle from '../Subtitle'
import Card from '../Card'

export default function Education() {
  return (
    <>
      <div className='flex justify-between gap-8'>
        <div className=''>
          <Subtitle titulo='formación' />
        </div>

        <div className=' flex justify-center items-start mt-2'>
          <Curriculum color='black' />
        </div>
      </div>

      <div className='flex justify-between gap-8 h-[200px] mt-[2rem]'>
        <Card puesto='Software Development'
          empresa='Brigham Young University'
          tiempo='2022 - Actualidad'
          descripcion='Carrera universitaria en desarrollo de software, abarcando múltiples lenguajes, plataformas y todas las fases del ciclo de vida del software, con enfoque en estándares de la industria.' />

        <Card puesto='Desarrollo Web FullStack'
          empresa='Funval Internacional (bootcamp)'
          tiempo='2024 (Certificación)'
          descripcion='Desarrollo de aplicaciones web full stack (HTML, CSS, JavaScript, React, Express, MySql y otras bases de datos relacionales, MongoDB, Git, GitHub, Taildwind CSS y otros)' />

        <Card puesto='Web & Computer Programming'
          empresa='Brigham Young University'
          tiempo='2023 (Certificación)'
          descripcion='Creación de aplicaciones de escritorio y web aplicando las mejores prácticas, como patrones de diseño UX/UI (Python, C#, HTML, CSS, JavaScript).' />
      </div>
    </>
  )
}
