import React from 'react'

const Products = () => {
  return (
    <div className='w-full max-w-9xl h-auto bg-[#F9EBCC] '>
      <div className='p-5'>
        <div className='py-16 flex flex-col md:flex-row items-center md:justify-around'>
          <div className='flex flex-col items-center justify-center md:h-[500px] md:w-[600px] '>
            <h1 className='text-5xl md:text-9xl font-extrabold text-[#313832]  p-10 pb-0' >
              Be Curl, Calm, and Collected
            </h1>
            <p className='p-10  font-moli tracking-wide text-[#313832]'>
              "Looped is a salon specializing in hair that spirals, swirls, waves, whirls, loops, and curls.
            </p>
          </div>
          <div>
            <div className=' bg-[#90A8AA] h-[34rem] w-[22rem] mt-10 rounded-lg'>

            </div>
            <div className='px-5'>
              {/* <button className='bg-[#A2B6A2]  text-[#313832] w-[22rem] mt-5 h-16 rounded-[30px] text-xl tracking-wider' >Get it </button> */}
            </div>
          </div>


        </div>
      </div>

      <div className='text-[#313832] font-extrabold font-moli text-6xl'>
        <h1>ABOUT</h1>
      </div>


    </div>
  )
}

export default Products