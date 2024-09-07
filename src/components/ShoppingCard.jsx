import React from 'react';
import SizesButton from './SizesButton';

const ShoppingCard = ({ image, name, description, price, sizes, onClick }) => {
  const handleSizes = () => {

  }
  return (
    <>
      <div onClick={onClick} class="group my-10 flex w-60 items-center justify-center max-w-xs flex-col   bg-black p-4">
        <button class="relative flex h-60 w-52 overflow-hidden" onClick={onClick} >
          <img class="absolute top-0 right-0 h-full w-full object-contain" src={image} alt="product image" />
          <div class="absolute bottom-0 mb-4 flex w-full justify-center space-x-4">
            <button>
              <div class="h-3 w-3 rounded-full border-2 border-white bg-white"></div>
            </button>
            <button>
              <div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
            </button>

            <button>
              <div class="h-3 w-3 rounded-full border-2 border-white bg-transparent"></div>
            </button>
          </div>
          <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
            <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">

              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
          </div>
        </button>
        <div class="mt-2 pb-5  w-full">
          <a href="#">
            <h5 class="text-center tracking-tight text-gray-500">{name}</h5>
          </a>
          <div class=" flex justify-center">
            <p>
              <span class="text-sm mx-1 font-bold text-gray-50">{`₹${price}`}</span>
              <span class="text-sm text-gray-400 line-through">$499</span>
            </p>
          </div>
          <p className=' text-xs text-gray-400 pl-6'>availabe size - </p>
          <div className=' flex gap-2 justify-center overflow-scroll  '>
            {
              sizes.map((val, idx) => (
                <SizesButton onClick={handleSizes} key={idx} size={val} />
              ))
            }

          </div>
        </div>
      </div>

    </>
  );
}

export default ShoppingCard;
