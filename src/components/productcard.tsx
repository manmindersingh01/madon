import React from "react";
import { motion } from "framer-motion";

const ProductCard = ({ item, onCardClick }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#313832] mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {item.name}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-[#313832bf] font-moli tracking-wide mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {item.description}
        </motion.p>
        <motion.button
          onClick={() => onCardClick(item)}
          className="bg-[#A2B6A2] text-[#313832] px-8 py-3 rounded-full text-lg font-semibold tracking-wider hover:bg-[#90A8AA] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get it now
        </motion.button>
      </div>
      <motion.div
        className="w-full lg:w-1/2 relative"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#90A8AA] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={item.ImageUrl}
            alt={item.name}
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
