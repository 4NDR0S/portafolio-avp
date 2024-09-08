import React from 'react'

export default function BasesDatos() {
    return (
        <div><h4 className='text-[22px]'>Base de Datos</h4>
            <div className='w-[40px] h-[5px] bg-yellow-400 mt-[.3rem]'></div>


            <div className='flex gap-[3rem] mt-[1rem]'>

                <div className='w-[80px] flex justify-center'>
                    <div>
                        <div className='w-full flex justify-center'>
                            <div className='w-[60px]'>
                                <img src="./mongo-db.png" alt="Mongodb" className='w-full' />
                            </div>
                        </div>
                        <p className='text-center'>Mongo DB</p>
                    </div>
                </div>

                <div className='w-[90px] flex justify-center'>
                    <div>
                    <div className='w-[60px]'>
                        <img src="./servidor-sql.png" alt="mysql" className='w-full p-[.4rem]' />
                    </div>
                    <p className='text-center'>MySQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
