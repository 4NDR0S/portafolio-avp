import React from 'react'

export default function Subtitle({ titulo, color }) {
    return (
        <><h2 className='text-[35px] uppercase font-semibold'
            style={{
                color: color,
            }}
            >{titulo}</h2>
            <div className='mt-[.4rem] w-[80px] h-[8px] bg-red-500'></div></>

    )
}
