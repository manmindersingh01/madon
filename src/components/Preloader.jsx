import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animation/index'
const Preloader = () => {
  useEffect(() => {
    preLoaderAnim()
  })
  return (
    <div className='preloader h-screen w-full bg-zinc-950 text-white font-moli flex justify-center items-center overflow-hidden'>
      <div className='texts-container flex gap-6 justify-center items-center overflow-hidden'>
        <span className='font-bold text-9xl tracking-wide'>lets</span>
        <span className='font-bold tracking-wide text-9xl  text-yellow-300'>style</span>
        <span className='font-bold tracking-wide text-9xl '>with</span>
        <span className='font-extrabold text-red-500 text-9xl tracking-wide'>MADON</span>
      </div>

    </div>
  )
}

export default Preloader