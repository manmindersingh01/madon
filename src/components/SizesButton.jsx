import React from "react";
import { motion } from "framer-motion";

const SizesButton = ({ size, onClick, isSelected }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center rounded-sm text-xs font-medium uppercase transition-all
        ${
          isSelected
            ? "bg-stone-800 text-white"
            : "bg-white text-stone-800 hover:bg-stone-200"
        } border border-stone-300`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {size}
    </motion.button>
  );
};

export default SizesButton;
