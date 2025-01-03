import React, { useState } from "react";
import { motion } from "framer-motion";
import SizesButton from "./SizesButton";

const ShoppingCard = ({ image, name, description, price, sizes, onClick }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <motion.div
      className="group relative w-full max-w-sm overflow-hidden bg-stone-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative aspect-[3/4] w-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img className="h-full w-full object-cover" src={image} alt={name} />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm">{description}</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute right-2 top-2 z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button className="rounded-full bg-white/80 p-2 text-stone-800 backdrop-blur-sm transition-all hover:bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </motion.div>
      <div className="p-4">
        <motion.h3
          className="mb-1 text-lg font-bold text-stone-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {name}
        </motion.h3>
        <motion.div
          className="mb-2 flex items-baseline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-xl font-semibold text-stone-900">₹{price}</span>
          <span className="ml-2 text-sm text-stone-500 line-through">
            ₹{Math.round(price * 1.2)}
          </span>
          <span className="ml-2 text-xs font-medium text-emerald-700">
            {Math.round((1 - price / (price * 1.2)) * 100)}% OFF
          </span>
        </motion.div>
        <motion.div
          className="mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="mb-1 text-xs font-medium uppercase text-stone-500">
            Select Size
          </p>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size, idx) => (
              <SizesButton
                key={idx}
                size={size}
                onClick={() => handleSizeClick(size)}
                isSelected={selectedSize === size}
              />
            ))}
          </div>
        </motion.div>
        <motion.button
          onClick={onClick}
          className="w-full bg-stone-800 py-2 text-center text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-stone-700"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ShoppingCard;
