import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../features/cart/cartSlice";
import SizesButton from "./SizesButton";

const ShopModel = ({ isOpen, onClose, product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const id = product ? product["$id"] : "";

  if (!isOpen) return null;
  const handleSize = (val) => {
    setSelectedSize(val);
  };

  const handleSubmit = () => {
    if (selectedSize && quantity > 0) {
      dispatch(
        addItem({
          id: id,
          name: product.name,
          size: selectedSize,
          quantity,
          price: product.discountedPrice,
          imageUrl: product.ImageUrl,
        })
      );
      onClose();
    } else {
      alert("Please select a size and quantity.");
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-wrapper") {
      onClose();
    }
  };

  const handleBuy = () => {
    if (selectedSize && quantity > 0) {
      dispatch(
        addItem({
          id: id,
          name: product.name,
          size: selectedSize,
          quantity,
          price: product.discountedPrice,
          imageUrl: product.ImageUrl,
        })
      );
      navigate("/cart");
      onClose();
    } else {
      alert("Please select a size and quantity.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="modal-wrapper"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center overflow-hidden z-[99999999999999999999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black text-[#F9EBCC] w-full max-w-md rounded-lg overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
          >
            <div className="flex flex-col">
              <div className="relative w-full h-64 overflow-hidden">
                <motion.img
                  src={product.ImageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24" />
              </div>
              <div className="p-4 -mt-12 relative z-10">
                <h1 className="font-bold text-2xl mb-2">{product.name}</h1>
                <p className="text-sm text-[#F9EBCC] opacity-80 mb-3">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <p className="line-through text-[#F9EBCC] opacity-60">{`₹${product.prize}`}</p>
                  <p className="text-xl font-semibold">{`₹${product.discountedPrice}`}</p>
                </div>
                <div className="mb-3">
                  <p className="text-xs text-[#F9EBCC] opacity-80 mb-1">
                    Available sizes:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((val, idx) => (
                      <SizesButton
                        key={idx}
                        onClick={() => handleSize(val)}
                        size={val}
                        isSelected={selectedSize === val}
                      />
                    ))}
                  </div>
                </div>
                {selectedSize && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-[#F9EBCC] mb-3"
                  >
                    Selected size: {selectedSize}
                  </motion.p>
                )}
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm">Quantity:{quantity}</p>
                  <div className="flex items-center border border-[#F9EBCC] rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 py-1 text-lg hover:bg-[#F9EBCC] hover:text-black transition-colors"
                    >
                      -
                    </button>
                    <span className="px-2 py-1">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 py-1 text-lg hover:bg-[#F9EBCC] hover:text-black transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    className="flex-1 bg-[#F9EBCC] text-black font-semibold py-2 px-4 rounded text-sm hover:bg-opacity-90 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBuy}
                    className="flex-1 bg-transparent border border-[#F9EBCC] text-[#F9EBCC] font-semibold py-2 px-4 rounded text-sm hover:bg-[#F9EBCC] hover:text-black transition-colors"
                  >
                    Buy Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShopModel;
