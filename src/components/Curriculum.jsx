import React from 'react'

export default function Curriculum({ color, py, px }) {
  return (
    <a
      href="./avp-cv.pdf" // Ruta correcta del archivo
      download
      target="_blank"
      rel="noopener noreferrer" // Para seguridad
    >
      <button
        className='uppercase border-2 py-1 px-8 text-[17px] hover:scale-110'
        style={{
          color: color,
          borderColor: color,
          paddingBlock: py,
          paddingInline: px
        }}
      >
        descargar mi cv
      </button>
    </a>
  )
}