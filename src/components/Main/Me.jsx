import React from 'react'
import Social from '../Social'
import Subtitle from '../Subtitle'

export default function Me() {
    return (
        <>
            <div className='flex justify-between gap-8'>
                <div className=' w-[50%]'>
                    <Subtitle titulo='Sobre mí'/>
                </div>

                <div className=' w-[50%] mt-2'>
                    <Social/>
                </div>
            </div>

            <div className='flex justify-between gap-8 h-[200px] mt-[2rem]'>
                <div className=' w-[50%]'>
                    <p>Soy Anthony Vela, desarrollador web FullStack especializado en Front-end. Familiarizado con el stack MERN (MongoDB, Express, React, Node.js). Actualmente curso la carrera de Desarrollo de Software en la Universidad Brigham Young - Idaho, donde estoy ampliando mis conocimientos en tecnologías web y software de vanguardia.
                    </p>
                </div>

                <div className=' w-[50%]'>
                    <p>Mi experiencia se centra en la creación de aplicaciones web robustas y escalables, combinando mi pasión por la programación con un enfoque en la calidad, diseño y eficiencia. Soy un apasionado del aprendizaje continuo y busco constantemente nuevas formas de mejorar mi conocimiento y habilidades.
                    </p>
                </div>
            </div>
        </>
    )
}
