import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import Products from './Products';
import Crousel from '../components/Crousel';
import Footer from '../components/Footer';
// import Preloader from '../components/Preloader';
import Shop from './Shop';
import authService, { AuthService } from '../appwrite/auth';
import { login } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
const Home = () => {
  const dispatch = useDispatch();
  // Define the data to pass to the Carousel
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await authService.getCurrentUser();
        dispatch(login(data))
        // console.log("User data:", data);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className=' scroll-smooth w-full overflow-hidden'>
        {/* <Preloader /> */}
        <Hero />
        <Shop />
        <Products />

        <Crousel />
        <Footer />
      </div>


    </>
  );
}

export default Home;
