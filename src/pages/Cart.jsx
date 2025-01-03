import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaRegTrashCan,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  // FaShoppingCart,
} from "react-icons/fa6";
import {
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
} from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IconShoppingBag } from "@tabler/icons-react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.removeItem("persist:root");
  };

  const handleCheckout = () => {
    if (cart.items.length === 0) {
      alert("Cart is empty");
      return;
    }

    let formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeodWKtYHaBfDIS3S5k8fSuvTz3ALL9mN9zat0gh05q35pUSg/viewform?usp=pp_url";
    const items = [];
    let totalQuantity = 0;
    let totalPrice = 0;

    cart.items.forEach((product) => {
      items.push(product.name);
      totalQuantity += product.quantity;
      totalPrice += product.price * product.quantity;
    });

    items.forEach((val) => {
      formUrl += `&entry.747256111=${encodeURIComponent(val)}`;
    });
    formUrl += `&entry.544642850=${totalQuantity}`;
    formUrl += `&entry.335807612=${totalPrice}`;

    window.open(formUrl);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-purple-900 via-zinc-900 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-4xl mx-auto h-full flex flex-col p-6 md:p-10 justify-start">
        <motion.div
          className="flex justify-between items-center p-4 mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-amber-400">Shopping Cart</h1>
          <motion.button
            onClick={() => navigate("/")}
            className="text-sm text-red-400 flex items-center gap-2 hover:text-red-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft /> Go Back
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {cart.items.length === 0 ? (
            <motion.div
              className="text-center py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <IconShoppingBag className="text-6xl mx-auto mb-4 text-gray-600" />
              <h2 className="text-2xl text-gray-400">Your cart is empty</h2>
            </motion.div>
          ) : (
            cart.items.map((product) => (
              <motion.div
                key={`${product.id}-${product.size}`}
                className="w-full bg-gradient-to-r from-neutral-900 to-zinc-900 rounded-lg flex flex-col md:flex-row overflow-hidden mb-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="md:w-1/2 h-48 md:h-auto overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-amber-400 mb-2">
                      {product.name}
                    </h2>
                    <p className="text-sm text-gray-400 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-lg">
                      <span className="text-red-400 mr-2">Quantity:</span>
                      {product.quantity}
                    </p>
                    <p className="text-lg">
                      Price: ₹{product.price * product.quantity}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={() =>
                            dispatch(
                              decrementItem({
                                id: product.id,
                                size: product.size,
                              })
                            )
                          }
                          className="bg-red-600 p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaMinus />
                        </motion.button>
                        <motion.button
                          onClick={() =>
                            dispatch(
                              incrementItem({
                                id: product.id,
                                size: product.size,
                              })
                            )
                          }
                          className="bg-green-600 p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaPlus />
                        </motion.button>
                      </div>
                      <motion.button
                        onClick={() =>
                          dispatch(
                            removeItem({ id: product.id, size: product.size })
                          )
                        }
                        className="text-red-500 hover:text-red-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaRegTrashCan size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        <motion.div
          className="w-full bg-gradient-to-r from-zinc-800 to-neutral-800 my-6 p-4 rounded-lg flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl">
            Total price:{" "}
            <span className="font-bold text-amber-400">₹{cart.totalPrice}</span>
          </p>
          <p className="text-xl">
            Total quantity:{" "}
            <span className="font-bold text-amber-400">
              {cart.totalQuantity}
            </span>
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-between gap-4 mt-6">
          <motion.button
            onClick={handleCheckout}
            className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={cart.items.length === 0}
          >
            Proceed to Checkout
          </motion.button>
          <motion.button
            onClick={() => navigate("/")}
            className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue Shopping
          </motion.button>
          <motion.button
            onClick={handleClearCart}
            className="bg-red-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={cart.items.length === 0}
          >
            Clear Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
