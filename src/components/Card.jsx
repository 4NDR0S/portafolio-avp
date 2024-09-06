import React from 'react'

export default function Card({puesto, empresa, tiempo, descripcion}) {
    return (
        <div className='min-w-[250px]'>
            <h3 className='font-bold text-[18px]'>{puesto}</h3>
            <h4 className='font-semibold italic'>{empresa}</h4>
            <h4 className='font-semibold text-[#2e4975]'>{tiempo}</h4>
            <div className='mt-[1rem]'>
                <p className='text-[14px]'>{descripcion}</p>
            </div>
        </div>
    )
}
