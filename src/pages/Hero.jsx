import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5 }}
      >
        <img
          src="/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="w-full mx-auto bg-black/80 backdrop-blur-sm absolute bottom-0 p-6 font-moli text-center tracking-wider text-[#F9EBCC]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl"
        >
          Welcome to MADON! A digital platform for crafting, selling, and
          reselling unique items inspired by the world of fashion.
        </motion.h3>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
