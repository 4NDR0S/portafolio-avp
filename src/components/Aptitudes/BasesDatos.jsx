import React from 'react'

export default function BasesDatos() {
    return (
        <div><h4 className='text-[22px]'>Base de Datos</h4>
            <div className='w-[40px] h-[5px] bg-yellow-400 mt-[.3rem]'></div>


            <div className='flex gap-[3rem] mt-[1rem]'>
                <div>
                    <div className='w-[60px] text-center'>
                        <img src="./mongo-db.png" alt="C#" className='w-full p-[.4rem]' />

                    </div>
                    <p>Mongo DB</p>
                </div>

                <div className='text-center'>
                    <div className='w-[60px]'>
                        <img src="./servidor-sql.png" alt="C#" className='w-full p-[.4rem]' />

                    </div>
                    <p>MySQL</p>
                </div>
            </div>
        </div>
    )
}
