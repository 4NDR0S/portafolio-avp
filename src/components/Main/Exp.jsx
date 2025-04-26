import React from 'react'
import Curriculum from '../Curriculum'
import Subtitle from '../Subtitle'
import Card from '../Card'

export default function Exp() {
  return (
    <>
      <div className='flex justify-between gap-8'>
        <div className=''>
          <Subtitle titulo='Experiencia' />
        </div>

        <div className='hidden sm:flex justify-center items-start mt-2'>
          <Curriculum color='black' />
        </div>
      </div>

      <div className='sm:flex sm:justify-between gap-8 sm:h-[200px] mt-[2rem]'>

        <Card puesto='Soporte de Integraciones'
          empresa='Pedidos Ya & Concentrix'
          tiempo='2024 - Actualidad'
          descripcion='Brindo soporte técnico para las integraciones y locales en la aplicación de Pedidos Ya, gestionando tareas como la activación de productos, codificación de menús y verificación de pedidos. Esta experiencia me permitió trabajar con APIs y resolver problemas técnicos en entornos dinámicos.' />

        <hr className='block my-[1rem] sm:hidden' />

        <Card puesto='Desarrollador Full-Stack'
          empresa='Freelance'
          tiempo='2024'
          descripcion='Participe en el desarrollo de una plataforma web colaborativa para la gestión de incidencias en edificios y condominios, enfocándome en la creación de interfaces con React y Tailwind. Implementé flujos para el reporte y seguimiento de casos, y colaboré en el desarrollo del back-end con Node.js, Express y MongoDB.' />

        <hr className='block my-[1rem] sm:hidden' />

        <Card puesto='Desarrollador Front-end'
          empresa='Plataforma Educa'
          tiempo='2024'
          descripcion='Diseñé y programe la interfaz y experiencia de usuario para una plataforma educativa, permitiendo a maestros gestionar exámenes y revisar respuestas en video, mientras los alumnos pueden tomar exámenes y subir videos como parte de las evaluaciones.' />

        <hr className='block my-[1rem] sm:hidden' />

        {/* <Card puesto='Técnico en mantenimiento de computadoras'
          empresa=''
          tiempo='2018 - Actualidad'
          descripcion='Me encargué del mantenimiento de computadoras, realizando tareas como limpieza, formateo, instalación de software y reparación de hardware. También llevé a cabo el diagnóstico y reemplazo de componentes dañados para asegurar un funcionamiento óptimo.' />

        <hr className='block my-[1rem] sm:hidden' /> */}

      </div>
    </>
  )
}
