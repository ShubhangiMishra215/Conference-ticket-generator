import React from 'react'

const Header = ({title, des}) => {
  return (
    <div>
      <div className='flex items-center justify-center p-3'>
        <img src="/assets/images/logo-full.svg" alt="Coding Conf logo" width={180}/>
      </div>
        <h1 className='text-center pt-10 text-[1.8rem] text-[white] font-bold md:text-5xl md:tracking-wider md:leading-15'>
            {title}
        </h1>
        <p className='text-center text-[1.2rem] text-[hsl(245,15%,58%)] font-medium pt-4 tracking-wider'>
            {des}
        </p>
    </div>
  )
}

export default Header