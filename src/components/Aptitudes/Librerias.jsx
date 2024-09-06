import React from 'react'

export default function Librerias() {
    return (
        <div>
            <h4 className='text-[22px]'>Librerías y Frameworks</h4>
            <div className='w-[40px] h-[5px] bg-yellow-400 mt-[.3rem]'></div>
            <div className='flex gap-[3rem] mt-[1rem]'>
                <div className='w-[60px] text-center'>
                    <img src="./react.png" alt="C#" className='w-full p-[.4rem]' />
                    <p>React</p>
                </div>

                <div className='w-[60px] text-center'>
                    <img src="./nodejs.png" alt="C#" className='w-full' />
                    <p>Node js</p>
                </div>
                <div>
                    <div className='w-[60px] text-center'>
                        <img src="./expressjs.png" alt="C#" className='w-full' />

                    </div>
                    <p>Express js</p>
                </div>
            </div>
        </div>
    )
}
