import React from 'react'

const SizesButton = ({ size }, onClick) => {
  return (
    <button onClick={onClick} className='flex w-10 rounded-lg items-center justify-center h-fit p-2 text-sm  bg-white/40 hover:scale-110 transition-all active:scale-105 text-white'>
      {size}
    </button>
  )
}

export default SizesButton