import React from 'react'

const Footer = () => {
  return (
    <footer className='p-4 md:px-4 md:pt-4 bg-[#6B3CC9] text-white'>
        <div className='grid grid-cols-1 gap-[3rem] lg:gap-3 lg:grid-cols-2 '>
            <div className='xl:h-auto'>
                <h2 className='font-bold md:mb-2'>AT DIGITAL</h2>
                <p className='w-auto md:w-[20rem]'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-2 lg:ml-[30%]'>
                <div className='xl:h-auto'>
                    <h6 className='font-bold md:mb-2'>Our Technologies</h6>
                    <ul>
                        <li className='text-xs md:text-sm md:mb-2 lg:text-auto'>ReactJS</li>
                        <li className='text-xs md:text-sm md:mb-2 lg:text-auto'>Gatsby</li>
                        <li className='text-xs md:text-sm md:mb-2 lg:text-auto'>NextJS</li>
                        <li className='text-xs md:text-sm md:mb-2 lg:text-auto'>NodeJS</li>
                    </ul>
                </div>
                <div className='xl:h-auto'>
                    <h6 className='font-bold md:mb-2'>Our Services</h6>
                    <ul>
                        <li className='text-xs md:text-sm md:mb-2 lg:text-auto'>Social media Marketing</li>
                        <li className='text-xs md:text-sm md:mb-2 lg:text-auto'>Web & Mobile App Developmen</li>
                        <li className='text-xs md:text-sm md:mb-2 lg:text-auto'>Data & Analytics</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='mx-auto flex justify-center items-center gap-3 p-1 mt-7 border-t-2 border-white lg:w-[30rem]'>
            <p>Privacy Police</p>
            <p>|</p>
            <p>Terms & Conditions</p>
        </div>
    </footer>
  )
}

export default Footer