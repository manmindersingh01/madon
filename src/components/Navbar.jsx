import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className="font-moli flex justify-between w-full max-w-7xl mx-auto h-20 items-center text-white px-4 sm:px-6 lg:px-8 sm:pt-10 lg:pt-16"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="text-sm tracking-widest flex gap-4">
        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="/">Shop</Link>
        </motion.div>
        <motion.div variants={linkVariants} whileHover="hover">
          <Link href="/review">Review</Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-wider"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        MADON
      </motion.div>
      <motion.div className="text-sm tracking-widest flex gap-4">
        <motion.div variants={linkVariants} whileHover="hover">
          <a href="/cart">Cart</a>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
