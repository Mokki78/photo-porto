"use client";

import Image from "next/image";
import { Variants } from "framer-motion";

import { motion } from "framer-motion";

const images = [
  `/square_2.jpg`,
  `/wide_4.jpg`,
  `/wide_1.jpg`,
  `/long_14.jpg`,
  `/square_9.jpg`,
  `/long_16.jpg`,
  `/square_5.jpg`,
  `/long_9.jpg`,
  `/wide_6.jpg`,
  `/long_10.jpg`,
  `/wide_8.jpg`,
  `/square_10.jpg`,
  `/long_13.jpg`,
  `/square_19.jpg`,
  `/wide_2.jpg`,
  `/square_7.jpg`,
  `/wide_3.jpg`,
  `/long_11.jpg`,
];

const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };
  
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
     
    },
    show: {
      opacity: 1,
      y: 0,
      
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
        mass: 0.6,
      },
    },
  };

const MasonryGrid = () => {
  return (
    <>
      <div>
        <h1 className="text-6xl text-white flex items-center justify-center ">
          PORTFOLIO
        </h1>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="columns-1  sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 sm:mx-10 md:mx-40 lg:mx-80"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            variants={item}
            className="mb-4 break-inside-avoid"
          >
            <img
              src={src}
              className="w-full object-cover rounded-md transition-transform duration-500 hover:scale-[1.03]"
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default MasonryGrid;
