import React from 'react'

export default function Ejemplos() {
    return (
        <div className='flex justify-between'>

            <div className='flex-col font-medium'>

                <div className='py-[1rem] flex items-center gap-3'>
                    <p><span className='text-[#fae957]'>Cozzumel</span><span className='text-[#2fb2fe]'>Scoots</span></p>
                    <a href="https://4ndr0s.github.io/wdd230/scoots/index.html" className='w-[22px] mt-[4px]' target='_blank'>
                        <img src="./sitio-web.png" alt="" className='w-full' /></a>
                </div>

                <div className='py-[1rem] flex items-center gap-3'>
                    <p className='text-[#1e213a]'>Weather app</p>
                    <a href="https://weather-app-avp.vercel.app/" className='w-[22px] mt-[4px]' target='_blank'>
                        <img src="./sitio-web.png" alt="" className='w-full' /></a>
                </div>

                <div className='py-[1rem] flex items-center gap-3'>
                    <p className='text-[#2e4975]'>Space Tourism</p>
                    <a href="https://space-tourism-avp.vercel.app/" className='w-[22px] mt-[4px]' target='_blank'>
                        <img src="./sitio-web.png" alt="" className='w-full' /></a>
                </div>


            </div>


            <div className='flex flex-col font-medium pr-[1rem]'>

                <div className='py-[1rem] flex items-center gap-3'>
                    <p className='text-[#eb5757]'>Windbnb</p>
                    <a href="https://mini-proyecto-nivel3.vercel.app/" className='w-[22px] mt-[4px]' target='_blank'>
                        <img src="./sitio-web.png" alt="" className='w-full' /></a>
                </div>

                <div className='py-[1rem] flex items-center gap-3'>
                    <p className='text-[#00474b]'>Splitter</p>
                    <a href="https://practica3-splitter.vercel.app/" className='w-[22px] mt-[4px]' target='_blank'>
                        <img src="./sitio-web.png" alt="" className='w-full' /></a>
                </div>

                <div className='py-[1rem] flex items-center gap-3'>
                    <p className='text-[#33319a]'>Pokedex</p>
                    <a href="https://practica7-pokedex.vercel.app/" className='w-[22px] mt-[4px]' target='_blank'>
                        <img src="./sitio-web.png" alt="" className='w-full' /></a>
                </div>


            </div>

        </div>

    )
}
