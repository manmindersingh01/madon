import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialWall from "./TestimonialWall";
import ContactModal from "./ContactModal";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-[#F9EACB] text-[#313832] py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
          <TestimonialWall />
        </motion.div>

        <div className="text-center mb-12">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#313832] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contact Us
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Quick Links
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 mb-8">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
          <SocialLinks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p>&copy; 2023 MADON. All rights reserved.</p>
          <p className="mt-2">Thank you for visiting our site!</p>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
