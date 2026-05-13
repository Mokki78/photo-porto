"use client";

import Image from "next/image";

import { motion, Variants } from "framer-motion";

const images = [
  `/square_2.jpg`,
  `/wide_4.jpg`,
  `/wide_1.jpg`,
  `/long_14.jpg`,
  `/square_9.jpg`,
  `/long_16.jpg`,
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
  `/square_16.jpg`,
  `/square_18.jpg`,
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      duration: 0.35,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const MasonryGrid = ({ onSelect }: { onSelect: (src: string) => void }) => {
  return (
    <>
      <div>
        <h1 className="text-6xl text-white flex items-center justify-center ">
          PORTFOLIO
        </h1>
      </div>

      <motion.div
        layout
        variants={container}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        className="columns-1  sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 sm:mx-10 md:mx-40 lg:mx-80"
      >
        {images.map((src, index) => (
          <motion.div
            key={src}
            variants={item}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => onSelect(src)}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
          >
            <Image
              src={src}
              alt=""
              width={800}
              height={1000}
              className="w-full rounded-md "
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default MasonryGrid;
