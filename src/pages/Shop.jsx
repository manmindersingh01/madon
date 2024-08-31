import React, { useState, useEffect } from 'react'
import ShoppingCard from '../components/ShoppingCard'
import service from "../appwrite/config.js";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth.status)
  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await service.getPosts();
        console.log(posts);  // This logs the full response object
        setData(posts.documents);  // Setting data to the documents array
      } catch (error) {
        console.log("Error in getPosts in Appwrite", error);
      }
    };
    getPosts();
  }, []);
  const handleCardClick = () => {
    if (isAuthenticated) {
      navigate('/cart')
    } else {
      navigate('/login')
    }
  }
  return (
    <div className='w-full bg-[#b8693d]'>
      <div className='p-2 flex justify-center'>
        <div className='grid grid-cols-2 gap-2 md:grid-cols-4 sm:gap-7 md:gap-16'>
          {
            data.map((item, idx) => (
              <ShoppingCard
                onClick={handleCardClick}
                key={idx}
                image={item.ImageUrl}
                name={item.name}
                description={item.description}
                price={item.prize}
                discountedPrice={item.discountedPrice}
                sizes={item.sizes}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Shop;
