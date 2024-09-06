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

        <div className=' flex justify-center items-start mt-2'>
          <Curriculum color='black' />
        </div>
      </div>

      <div className='flex justify-between gap-8 h-[200px] mt-[2rem]'>

        <Card puesto='Desarrollador Full-Stack'
          empresa='bootcamp'
          tiempo='2024'
          descripcion='Desarrollé y diseñé una aplicación de gestión de incidencias para edificios y condominios, permitiendo al administrador manejar incidencias, editar estados, y gestionar información de residentes y cámaras de seguridad, mientras que los residentes pueden reportar y seguir el estado de incidencias.' />

        <Card puesto='Desarrollador Front-end'
          empresa='Trabajo grupal - plataforma Educa'
          tiempo='2024'
          descripcion='Diseñé y programe la interfaz y experiencia de usuario para una plataforma educativa, permitiendo a maestros gestionar exámenes y revisar respuestas en video, mientras los alumnos pueden tomar exámenes y subir videos como parte de las evaluaciones.'/>

        <Card puesto='Técnico en mantenimiento de computadoras'
          empresa=''
          tiempo='2018 - Actualidad'
          descripcion='Me encargué del mantenimiento de computadoras, realizando tareas como limpieza, formateo, instalación de software y reparación de hardware. También llevé a cabo el diagnóstico y reemplazo de componentes dañados para asegurar un funcionamiento óptimo.' />

      </div>
    </>
  )
}
