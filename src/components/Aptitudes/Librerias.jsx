import React from 'react'

export default function Librerias() {
    return (
        <div>
            <h4 className='text-[22px]'>Librerías y Frameworks</h4>
            <div className='w-[40px] h-[5px] bg-yellow-400 mt-[.3rem]'></div>

            <div className='flex gap-[3rem] mt-[1rem]'>

                <div className='w-[80px] flex justify-center'>
                    <div className=''>
                        <div className='w-[60px]'>
                            <img src="./react.png" alt="react" className='w-full' />
                        </div>
                        <p className='text-center'>React</p>
                    </div>
                </div>

                <div className='w-[80px] flex justify-center'>
                    <div className='w-[60px] text-center'>
                    <img src="./nodejs.png" alt="nodejs" className='w-full' />
                    <p>Node js</p>
                    </div>
                </div>

                <div>
                    <div className='w-[60px] text-center'>
                        <img src="./expressjs.png" alt="express" className='w-full' />

                    </div>
                    <p>Express js</p>
                </div>
            </div>
        </div>
    )
}
