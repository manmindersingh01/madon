import React, { useEffect, useState } from 'react';
import SizesButton from './sizesButton';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';  // Update the path as per your project structure
import { useNavigate } from 'react-router-dom';

const ShopModel = ({ isOpen, onClose, product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const id = product ? product["$id"] : "";

  if (!isOpen) return null;


  const handleSize = (val) => {
    setSelectedSize(val);
  };

  const handleSubmit = () => {
    if (selectedSize && quantity > 0) {

      dispatch(
        addItem({
          id: id, // Ensure the product object contains an id
          name: product.name,
          size: selectedSize,
          quantity,
          price: product.discountedPrice,
          imageUrl: product.ImageUrl, // Adding image URL here
        })
      );
      console.log('Adding item to cart:', {
        id: id,
        name: product.name,
        size: selectedSize,
        quantity,
        price: product.discountedPrice,
        imageUrl: product.ImageUrl,
      });
      onClose();
    } else {
      alert('Please select a size and quantity.');
    }

  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-wrapper') {
      onClose();
    }
  };

  const handleBuy = () => {
    if (selectedSize && quantity > 0) {
      dispatch(
        addItem({
          id: id, // Ensure the product object contains an id
          name: product.name,
          size: selectedSize,
          quantity,
          price: product.discountedPrice,
          imageUrl: product.ImageUrl, // Adding image URL here as well
        })
      );
      console.log('Adding item to cart:', {
        id: id,
        name: product.name,
        size: selectedSize,
        quantity,
        price: product.discountedPrice,
        imageUrl: product.ImageUrl,
      });

      navigate("/cart")
      onClose();
    } else {
      alert('Please select a size and quantity.');
    }
  };

  return (
    <div
      id="modal-wrapper"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center overflow-hidden z-[99999999999999999999]"
    >
      <div className="bg-black text-white w-96 md:w-[35rem] rounded-lg h-96 flex overflow-hidden">
        <div className="h-full w-1/2 overflow-hidden">
          <img src={product.ImageUrl} alt={product.name} className="" />
        </div>
        <div className="h-full w-1/2 p-4 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-3xl">{product.name}</h1>
            <p className="text-gray-400">{product.description}</p>
            <div className="flex gap-2">
              <p className="line-through text-gray-400">{`₹${product.prize}`}</p>
              <p>{`₹${product.discountedPrice}`}</p>
            </div>
            <div>
              <p>-available sizes</p>
              <div className="flex gap-2 justify-center my-5">
                {product.sizes.map((val, idx) => (
                  <SizesButton key={idx} onClick={() => handleSize(val)} size={val} />
                ))}
              </div>
              <p>{`size-${selectedSize}`}</p>
              <div>
                <div className="flex gap-2 justify-between">
                  <div className="flex gap-4">
                    <p>Quantity </p>
                    <p>{quantity}</p>
                  </div>
                  <div className="flex gap-2 border-2 rounded-lg w-24 justify-around">
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={handleSubmit} className="bg-green-400 rounded-lg hover:scale-110 active:scale-105 p-2 px-4 text-black">
              Add to Cart
            </button>
            <button onClick={handleBuy} className="bg-gray-300 rounded-lg hover:scale-110 active:scale-105 p-2 px-4">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopModel;
