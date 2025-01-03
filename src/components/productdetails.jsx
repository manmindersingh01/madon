import React from "react";
import { motion } from "framer-motion";

const ProductDetails = ({ item }) => {
  return (
    <div className="mt-16 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
        <div className="relative h-[500px] w-full">
          <motion.div
            className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/j3.png"
              alt="Detail 1"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/j1.png"
              alt="Detail 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <motion.h2
          className="text-4xl font-bold text-[#313832] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-xl font-semibold text-[#313832] mb-2">
              Material
            </h3>
            <p className="text-[#31383296]">
              {item.material ||
                "Premium quality materials ensuring comfort and style."}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#313832] mb-2">
              Details
            </h3>
            <p className="text-[#31383296]">
              {item.details ||
                "Meticulously crafted with attention to every detail, providing a unique and sophisticated look."}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
