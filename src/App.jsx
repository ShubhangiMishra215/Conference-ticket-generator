import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'

const App = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden
    bg-[url('/assets/images/background-mobile.png')]
    md:bg-[url('/assets/images/background-tablet.png')]
    lg:bg-[url('/assets/images/background-desktop.png')]">
  
      <img 
        src="/assets/images/pattern-lines.svg" 
        alt="" aria-hidden="true"
        className='absolute top-0 left-1/2 -translate-x-1/2 w-full scale-[2.95] md:scale-100 md:top-0'
      />

      <img 
        src="/assets/images/pattern-circle.svg" 
        alt="" aria-hidden="true" width={140}
        className='absolute top-0 -translate-y-1/2 -left-[11.11%] md:left-15 md:w-[15rem]'
      />

      <img 
        src="/assets/images/pattern-squiggly-line-top.svg" 
        alt="" aria-hidden="true" width={160}
        className='absolute right-0 top-8 md:w-md'
      /> 

      <img 
        src="/assets/images/pattern-circle.svg" 
        alt="" aria-hidden="true" width={140}
        className='absolute bottom-1/7 -translate-y-1/2 -right-1/6 md:right-1/5 md:w-[15rem]'
      />

      <img 
        src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg" 
        alt="" aria-hidden="true" width={300}
        className='absolute bottom-0 lg:hidden'
      />
      <img 
        src="/assets/images/pattern-squiggly-line-bottom-desktop.svg"
        alt="" aria-hidden="true" width={1050}
        className='hidden lg:block absolute bottom-0'
      />

      <div className="relative z-10 overflow-hidden">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App