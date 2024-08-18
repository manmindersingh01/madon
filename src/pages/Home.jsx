import React from 'react';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import Products from './Products';
import Crousel from '../components/Crousel';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';


const Home = () => {
  // Define the data to pass to the Carousel


  return (
    <>
      <div className=' scroll-smooth w-full overflow-hidden'>
        <Preloader />
        <Hero />
        <Products />

        <Crousel />
        <Footer />
      </div>


    </>
  );
}

export default Home;
