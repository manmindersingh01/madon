import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='font-moli flex justify-around w-full mx-w-7xl h-20 items-center text-white sm:pt-10 lg:pt-16 '>
      <div className='text-sm tracking-widest flex gap-4'>
        <Link to="/">Shop</Link>
        <Link to="/review">Review</Link>
      </div>
      <div className='font-extrabold text-4xl sm:text-8xl lg:text-9xl  tracking-wider'>
        MADON
      </div>
      <div className='text-sm tracking-widest flex gap-4'>
        <Link to="/review">Cart</Link>
      </div>


    </div>
  )
}

export default Navbar