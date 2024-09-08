import React from 'react'

export default function Idiomas() {
    return (
        <div><h4 className='text-[22px]'>Idiomas</h4>
            <div className='w-[40px] h-[5px] bg-yellow-400 mt-[.3rem]'></div>



            <div className='flex gap-[3rem] mt-[1rem]'>

                <div className='w-[80px] flex justify-center'>
                    <div>
                        <div className='w-[60px] text-center'>
                            <img src="./spain.png" alt="spain" className='w-full p-[.4rem]' />

                        </div>
                        <p className='text-center'>Nativo</p>
                    </div>
                </div>


                <div className='w-[90px] flex justify-center'>
                    <div> 
                        <div className='flex justify-center'>
                        <div className='w-[60px]'>
                            <img src="./reino-unido.png" alt="reino unido" className='w-full p-[.4rem]' />
                        </div>
                        </div>
                        <p className='text-center'>Avanzado(C1)</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
