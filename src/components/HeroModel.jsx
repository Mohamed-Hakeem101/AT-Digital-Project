import React from 'react'
import Button from './Button'

const HeroModel = () => {
  return (
      <div className='w-full bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD] text-white p-3 md:absolute md:w-[15rem] md:left-10 md:top-[10rem] md:p-4 lg:w-[25rem] lg:top-[15rem] xl:w-[30rem] xl:top-[18rem]'>
        <p className='font-bold text-sm md:text-base lg:text-2xl uppercase'>
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        <Button text="get free consultation" />
      </div>
  )
}

export default HeroModel