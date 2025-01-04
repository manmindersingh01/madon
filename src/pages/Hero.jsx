import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div className="hero bg-black min-h-screen">
      <Navbar />
      <motion.div
        className="relative w-full h-screen flex items-center justify-center p-8 md:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* TV Frame Container */}
        <div className="relative w-full h-full max-w-[2000px] mx-auto">
          {/* TV Frame Border */}
          <div className="absolute inset-0 bg-black rounded-[40px] shadow-2xl transform scale-[1.02]" />

          {/* Main Content Container */}
          <motion.div
            className="relative h-full w-full bg-black text-white overflow-hidden rounded-[100px] border-[20px] border-black"
            style={{
              boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/hero.jpg"
                alt="Hero Background"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end pb-32 px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wider">
                  NEW IN
                  <span className="block text-4xl md:text-6xl font-bold mt-2">
                    RESORT 2025 COLLECTION
                  </span>
                </h2>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/women"
                      className="inline-block px-8 py-3 bg-white text-black text-sm tracking-wider hover:bg-opacity-90 transition-colors"
                    >
                      FOR WOMEN
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/men"
                      className="inline-block px-8 py-3 border border-white text-white text-sm tracking-wider hover:bg-white hover:text-black transition-colors"
                    >
                      FOR MEN
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* TV Stand/Base (Optional) */}
          <motion.div
            className="absolute left-1/2 -bottom-8 w-40 h-16 bg-black rounded-b-lg"
            style={{ transform: "translateX(-50%)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-2 bg-black rounded-lg" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
