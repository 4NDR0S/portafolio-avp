import React from 'react'

export default function Idiomas() {
    return (
        <div><h4 className='text-[22px]'>Idiomas</h4>
            <div className='w-[40px] h-[5px] bg-yellow-400 mt-[.3rem]'></div>



            <div className='flex gap-[3rem] mt-[1rem]'>

                <div className=''>
                    <div className='w-[60px] text-center'>
                        <img src="./spain.png" alt="C#" className='w-full p-[.4rem]' />

                    </div>
                    <p>Nativo</p>
                </div>


                <div>
                    <div className='w-[60px] text-center'>
                        <img src="./reino-unido.png" alt="C#" className='w-full p-[.4rem]' />

                    </div>
                    <p>Avanzado(C1)</p>
                </div>

            </div>
        </div>
    )
}
