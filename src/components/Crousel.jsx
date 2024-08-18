import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import images from '../images';

const Carousel = () => {
  const controls = useAnimation();

  return (
    <div className='relative h-auto w-full px-10 py-20 bg-[#B8693D] '>
      <h2 className='text-[#F9EBCC] font-moli text-3xl pl-2'>Scroll to view</h2>
      <motion.div
        className='flex overflow-x-scroll scrollbar-hide'
        drag='x'
        dragConstraints={{ left: -1000, right: 0 }}
        animate={controls}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className='flex-shrink-0 w-full sm:w-[30rem] p-2'
          >
            <img
              className='bg-[#B8693D] h-[32rem] w-full object-cover rounded-[30px]'
              src={image}
              alt={`carousel-img-${index}`}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* <button
        className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
        onClick={() => controls.start({ x: '+=' + 300 })}
      >
        Prev
      </button> */}
      {/* <button
        className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
        onClick={() => controls.start({ x: '-=' + 300 })}
      >
        Next
      </button> */}
    </div>
  );
};

export default Carousel;
