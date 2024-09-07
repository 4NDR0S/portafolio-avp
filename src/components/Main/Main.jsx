import React from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Me from './Me'
import Exp from './Exp'
import Education from './Education'

export default function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const routes = ['/', '/experience', '/education'];

  const handleNextClick = () => {
    const currentIndex = routes.indexOf(location.pathname);
    const nextIndex = (currentIndex + 1) % routes.length;
    navigate(routes[nextIndex]);
  };

  const handlePrevClick = () => {
    const currentIndex = routes.indexOf(location.pathname);
    const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
    navigate(routes[prevIndex]);
  };

  return (
    <div className='mt-[50px] bg-[#edeff5] min-w[350px]
    sm:flex sm:justify-center sm:h-[370px] sm:px-[4rem]'>

      <div className='flex sm:items-center justify-center'>
        <button className='h-[40px] px-8' onClick={handlePrevClick}>
          <img src="./flecha-izquierda.png" alt="flecha izquierda" className='h-full w-full hover:scale-125' />
        </button></div>

      <div className=' px-[1rem] py-[.5rem] 
      lg:w-[1000px]'>
        <Routes>
          <Route path='/' element={<Me />} />
          <Route path='/experience' element={<Exp />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </div>

      <div className='hidden sm:flex sm:items-center justify-center'>
      <button className='h-[40px] px-8' onClick={handleNextClick}>
        <img src="./flecha-derecha.png" alt="flecha derecha" className='h-full w-full hover:scale-125' />
      </button></div>
    </div>
  )
}