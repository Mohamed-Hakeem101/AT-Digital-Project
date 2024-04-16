import React from 'react'
import ImageBg from '../assets/hero-image.jpg'

const Hero = () => {
  return (
    <div className='w-full h-[40vh] md:h-[60vh]'>
      <img className='top-0 left-0 object-cover w-full h-full' src={ImageBg} alt="bg-image" />
    </div>
  )
}

export default Hero