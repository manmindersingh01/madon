import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegTrashCan } from 'react-icons/fa6';
import { incrementItem, decrementItem, removeItem, clearCart } from '../features/cart/cartSlice'; // Update the path as per your project structure
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem('persist:root'); // Clear persisted state from local storage
  };

  // Function to handle checkout and redirect to Google Form
  const handleCheckout = () => {
    if (cart.items.length === 0) {
      alert('Cart is empty');
      return;
    }

    // Base Google Form URL
    let formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeodWKtYHaBfDIS3S5k8fSuvTz3ALL9mN9zat0gh05q35pUSg/viewform?usp=pp_url';
    const items = [];
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.items.forEach((product, index) => {
      items.push(product.name);
      totalQuantity = totalQuantity + product.quantity;
      totalPrice = totalPrice + product.price * product.quantity;
    });
    {
      items.map((val) => formUrl += `&entry.747256111=${encodeURIComponent(val)}`)
    }
    {
      formUrl += `&entry.544642850=${totalQuantity}`
    }
    {
      formUrl += `&entry.335807612=${totalPrice}`;
    }

    window.open(formUrl);
    // console.log(formUrl);

  };

  return (
    <div className='bg-zinc-950'>
      <div className='bg-zinc-950 w-full max-w-3xl mx-auto h-screen text-white flex flex-col p-10 justify-start'>
        <div className='flex justify-between items-center p-4'>
          <h1 className='text-3xl text-amber-800'>Shopping Cart</h1>
          <button onClick={() => navigate('/')} className='text-sm text-red-600'>Go Back</button>
        </div>
        {cart.items.length === 0 ? (
          <h1>Cart is empty</h1>
        ) : (
          cart.items.map((product) => (
            <div key={`${product.id}-${product.size}`} className='w-full bg-neutral-900 h-56 rounded-lg flex overflow-hidden mb-4'>
              <div className='object-cover w-1/2 h-full overflow-hidden'>
                <img src={product.imageUrl} alt={product.name} className='w-auto object-cover' />
              </div>
              <div className='p-3 w-1/2 bg-zinc-950 border border-zinc-900'>
                <h2 className='text-4xl text-amber-400'>{product.name}</h2>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione aperiam, iste beatae voluptate mollitia hic consectetur</p>
                <p className='border w-fit px-5 m-2 rounded-lg'>
                  <span className='text-red-600 mr-2'>Quantity:</span>
                  {product.quantity}
                </p>
                <p>Price/item: ₹{product.price}</p>
                <div className='flex justify-between'>
                  <div className='flex gap-2'>
                    <button onClick={() => dispatch(decrementItem({ id: product.id, size: product.size }))}>-</button>
                    <button onClick={() => dispatch(incrementItem({ id: product.id, size: product.size }))}>+</button>
                  </div>
                  <button onClick={() => dispatch(removeItem({ id: product.id, size: product.size }))}>
                    <FaRegTrashCan />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        <div className='w-full bg-zinc-800 my-5 p-2 flex justify-between'>
          <p>Total price: ₹{cart.totalPrice}</p>
          <p>Total quantity: {cart.totalQuantity}</p>
        </div>
        <div className='flex justify-between m-4'>
          <button
            onClick={handleCheckout} // Add onClick handler for checkout
            className='border-2 p-2 rounded-3xl hover:bg-purple-700 hover:scale-110 active:scale-105'
          >
            Checkout
          </button>
          <button onClick={() => navigate('/')} className='border-2 p-2 rounded-3xl hover:bg-purple-700 hover:scale-110 active:scale-105'>Continue Shopping</button>
        </div>
        <button onClick={handleClearCart} className='border-2 p-2 rounded-3xl hover:bg-red-700 hover:scale-110 active:scale-105 mt-4'>Clear Cart</button>
      </div>
    </div>
  );
}

export default Cart;
