import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import images from "../images";

const Carousel = () => {
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const updateWidths = () => {
        setCarouselWidth(carousel.scrollWidth);
        setContainerWidth(carousel.offsetWidth);
      };
      updateWidths();
      window.addEventListener("resize", updateWidths);
      return () => window.removeEventListener("resize", updateWidths);
    }
  }, []);

  const progress = useTransform(
    x,
    [0, -carouselWidth + containerWidth],
    [0, 1]
  );

  const borderVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="relative w-full px-4 py-12 bg-[#B8693D] overflow-hidden">
      <motion.h2
        className="text-[#F9EBCC] font-moli text-3xl mb-6 text-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Collection
      </motion.h2>
      <motion.div
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide"
        drag="x"
        dragConstraints={{ left: -carouselWidth + containerWidth, right: 0 }}
        animate={controls}
        style={{ x }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-60 sm:w-72 p-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                className="bg-[#B8693D] h-80 w-full object-cover"
                src={image}
                alt={`carousel-img-${index}`}
              />
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,0 L100,0 L100,100 L0,100 Z"
                  fill="none"
                  stroke="#F9EBCC"
                  strokeWidth="0.5"
                  variants={borderVariants}
                  initial="initial"
                  animate="animate"
                />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div className="mt-4 w-full max-w-md mx-auto h-1 bg-[#F9EBCC] bg-opacity-30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#F9EBCC]"
          style={{ scaleX: progress, originX: 0 }}
        />
      </motion.div>
      <motion.p
        className="text-center text-[#F9EBCC] font-moli mt-4 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Drag to explore more
      </motion.p>
    </div>
  );
};

export default Carousel;
