import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import service from "../appwrite/config";
import Modal from "../components/ShopModel";
import ProductCard from "../components/productcard";
import ProductDetails from "../components/productdetails";
import LoadingSkeleton from "../components/LoadingSkeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    product: {},
  });
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

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

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#F9EBCC] min-h-screen">
      <AnimatePresence>
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            className="mb-24 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <ProductCard item={item} onCardClick={handleCardClick} />
            <ProductDetails item={item} />
          </motion.div>
        ))}
      </AnimatePresence>

      <Modal
        isOpen={isModalOpen.isOpen}
        onClose={handleCloseModal}
        product={isModalOpen.product}
      />
    </div>
  );
};

export default Products;
