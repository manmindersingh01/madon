import React from 'react'
import Navbar from '../components/Navbar';
const Hero = () => {
  return (
    <div className='relative h-[40rem] w-full'>
      <Navbar />
      <div className='absolute top-0 left-0 w-full h-full -z-10'>
        <img src="/hero.jpg" alt="Hero" className='w-full h-full object-cover' />
      </div>
      <div className='w-full  mx-auto  bg-black absolute bottom-0 p-4 text-xs md:text-base font-moli text-center tracking-wider text-[#F9EBCC]'>
        <h3>
          Welcome to MADON! A digital platform for crafting, selling, and reselling unique items inspired by the world of fashion.
        </h3>
      </div>
    </div>
  )
}

export default Hero