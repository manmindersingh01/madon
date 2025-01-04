import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "MADON's products are simply amazing. The quality is unmatched!",
    author: "Emily S.",
    image: "/emily.jpg",
  },
  {
    id: 2,
    text: "I love the unique designs. MADON has become my go-to fashion brand.",
    author: "Michael T.",
    image: "/michael.jpg",
  },
  {
    id: 3,
    text: "The customer service is top-notch. They really care about their clients.",
    author: "Sarah L.",
    image: "/sarah.jpg",
  },
];

const TestimonialWall = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="relative"
          initial={{ opacity: 0, y: 50, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05, rotate: 5, transition: { duration: 0.2 } }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#313832]"
            />
            <p className="text-lg italic mb-4">{testimonial.text}</p>
            <p className="font-semibold text-right">- {testimonial.author}</p>
          </div>
          <motion.div
            className="absolute -top-2 left-1/2 w-4 h-8 bg-[#313832]"
            style={{ translateX: "-50%" }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialWall;
