import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../appwrite/config";
import Modal from "../components/ShopModel";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { Sun, Moon, ArrowUp } from "lucide-react";
import ProductDetails from "../components/productdetails";
import ProductCard from "../components/productcard";

const Products = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    product: {},
  });
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const productsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productsRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await service.getPosts();
        setLoading(false);
        setData(posts.documents);
      } catch (error) {
        console.log("Error in getPosts in Appwrite", error);
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  const handleCardClick = (props) => {
    if (isAuthenticated) {
      setIsModalOpen({ isOpen: true, product: props });
    } else {
      navigate("/login");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen({ isOpen: false, product: {} });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="relative">
      <motion.div
        ref={productsRef}
        className="relative min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: darkMode
              ? "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%), url('/bg1.jpg')"
              : "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 100%), url('/bg.jpg')",
            y: backgroundY,
          }}
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AnimatePresence>
            {data.map((item, idx) => (
              <motion.div
                key={idx}
                className="mb-12 last:mb-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProductCard
                  item={item}
                  onCardClick={handleCardClick}
                  darkMode={darkMode}
                />
                <ProductDetails item={item} darkMode={darkMode} />
              </motion.div>
            ))}
          </AnimatePresence>

          <Modal
            isOpen={isModalOpen.isOpen}
            onClose={handleCloseModal}
            product={isModalOpen.product}
          />
        </div>
      </motion.div>

      <motion.button
        className={`fixed bottom-4 right-4 p-3 rounded-full shadow-lg ${
          darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        }`}
        onClick={toggleDarkMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>

      <motion.button
        className={`fixed bottom-20 right-4 p-3 rounded-full shadow-lg ${
          darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
};

export default Products;
