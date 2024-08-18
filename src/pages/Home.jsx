import React from 'react';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import Products from './Products';
import { Carousel } from '../components/ui/Apple-cards-carousel';

const Home = () => {
  // Define the data to pass to the Carousel


  return (
    <>
      <Hero />
      <Products />

    </>
  );
}

export default Home;
