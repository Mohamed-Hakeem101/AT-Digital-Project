import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
    if(!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }
  return (
    <header className='w-full px-4 py-2 bg-purple-800 text-white flex justify-between items-center z-20 md:py-4'>
        <h1 className='font-bold'>AT DIGITAL</h1> 
        {nav ? <IoClose className='md:hidden' onClick={handleNav} /> : <IoMdMenu className='md:hidden' onClick={handleNav} />}
        <div className={`md:w-auto md:top-0 md:h-auto md:bg-transparent md:text-white md:pr-4 md:py-5 md:right-0 ${nav ? 'fixed right-0 top-10 w-[60%] h-[70%] bg-white text-black px-4 py-7 flex-col ease-in duration-500 z-10' : 'absolute top-10 w-[60%] h-[70%] right-[-100%] ease-in duration-500 z-10'}`}>
          <ul className='flex flex-col justify-start gap-5 md:flex-row'>
            <a href='#services'><li className='text-xs md:text-sm md:mb-0 lg:text-auto'>SERVICES</li></a>
            <a href='#about'><li className='text-xs md:text-sm md:mb-0 lg:text-auto'>ABOUT US</li></a>
            <a href='#contact'><li className='text-xs md:text-sm md:mb-0 lg:text-auto'>CONTACT US</li></a>
            <a href='#careers'><li className='text-xs md:text-sm md:mb-0 lg:text-auto'>CAREERS</li></a>
          </ul>
        </div>
    </header>
  )
}

export default Header