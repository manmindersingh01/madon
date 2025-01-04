import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "MADON's products are simply amazing. The quality is unmatched!",
    author: "Emily S.",
  },
  {
    id: 2,
    text: "I love the unique designs. MADON has become my go-to fashion brand.",
    author: "Michael T.",
  },
  {
    id: 3,
    text: "The customer service is top-notch. They really care about their clients.",
    author: "Sarah L.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-40">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center"
        >
          <p className="text-lg italic mb-2">
            {testimonials[currentIndex].text}
          </p>
          <p className="font-semibold">- {testimonials[currentIndex].author}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TestimonialCarousel;
