import React from 'react'

export default function Lenguajes() {
    return (
        <div>
            <h4 className='text-[22px]'>Lenguajes</h4>
            <div className='w-[40px] h-[5px] bg-yellow-400 mt-[.3rem]'></div>

            <div className='flex gap-[3rem] mt-[1rem]'>

                <div className='w-[80px] flex justify-center'>
                    <div className=''>
                        <div className='w-full flex justify-center'>
                            <div className='w-[60px]'>
                                <img src="./js.png" alt="JavaScript" className='w-full p-[.4rem]' />
                            </div>
                        </div>
                        <p className='text-center'>JavaScript</p>
                    </div>
                </div>

                <div className='w-[80px] flex justify-center'>
                    <div className='w-[60px] text-center'>
                        <img src="./python.png" alt="C#" className='w-full' />
                        <a target="_blank" href="https://icons8.com/icon/13441/python">Python</a>
                    </div>
                </div>

                <div className='w-[60px] text-center'>
                    <img src="./c-sharp-logo.png" alt="C#" className='w-full' />
                    <a target="_blank" href="https://icons8.com/icon/45490/c-sharp-logo-2">C#</a>
                </div>
            </div>
        </div>
    )
}
