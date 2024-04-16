import React from 'react'
import Button from '../components/Button'
import webImage from '../assets/image-1.png'
import searchImage from '../assets/image-2.png'

const WhatWeDo = () => {
  return (
    <div className='p-4 flex flex-col justify-center gap-4 mx-auto md:gap-6 lg:w-[60rem] xl:w-[80rem]'>
      <div className='flex flex-col justify-center items-center p-2 gap-2 md:flex-row md:gap-4'>
        <div className='w-full h-[10rem] md:w-[40rem] md:h-[15rem]'>
          <img src={webImage} alt="" class="top-0 left-0 object-contain w-full h-full"/>
        </div>
        <div className='md:w-[60rem] lg:w-[80rem]'>
          <p className='text-[#6B3CC9] font-bold'>Web & Mobile App Development</p>
          <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <Button text="learn more" />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center p-2 gap-2 md:flex-row-reverse md:gap-4'>
        <div className='w-full h-[10rem] md:w-[40rem] md:h-[15rem]'>
          <img src={searchImage} alt="" class="top-0 left-0 object-contain w-full h-full"/>
        </div>
        <div className='md:w-[60rem] lg:w-[80rem]'>
          <p className='text-[#6B3CC9] font-bold'>Digital Strategy Consulting</p>
          <p>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
          <Button text="learn more" />
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo