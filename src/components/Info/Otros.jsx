import React from 'react'

export default function Otros() {
    return (
        <div>
            <p>Herramientas y tecnologias utilizadas para este protafolio | CV</p>
            <div className='flex justify-start gap-[2rem] mt-[2rem]'>

                <div className='w-[80px] text-center '>

                    <div className='w-full flex justify-center'>
                        <div className='w-[50px]'>
                            <img src="./react.png" alt="" className='w-full' />
                        </div>
                    </div>
                    <p className='text-[14px] mt-[.4rem]'>React</p>
                </div>

                <div className='w-[90px] text-center '>

                    <div className='w-full flex justify-center'>
                        <div className='w-[50px]'>
                            <img src="./taildwin.png" alt="" className='w-full' />
                        </div>
                    </div>
                    <p className='text-[14px] mt-[.4rem]'>Tailwind CSS</p>
                </div>

                <div className='w-[80px] text-center '>

                    <div className='w-full flex justify-center'>
                        <div className='w-[50px]'>
                            <img src="./github.png" alt="" className='w-full' />
                        </div>
                    </div>
                    <p className='text-[14px] mt-[.4rem]'>GitHub</p>
                </div>

                <div className='w-[80px] text-center '>

                    <div className='w-full flex justify-center'>
                        <div className='w-[50px]'>
                            <img src="./vercel.svg" alt="" className='w-full' />
                        </div>
                    </div>
                    <p className='text-[14px] mt-[.4rem]'>Vercel</p>
                </div>

            </div>
        </div>
    )
}
