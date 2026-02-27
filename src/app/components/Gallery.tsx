"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery_14.jpg",
  "/gallery_8.jpg",

  "/gallery_2.jpg",

  "/gallery_4.jpg",
  "/gallery_1.jpg",
  "/gallery_5.jpg",
  "/gallery_6.jpg",

  "/gallery_3.jpg",
  "/gallery_9.jpg",
  "/gallery_10.jpg",
  "/gallery_11.jpg",
  "/gallery_12.jpg",
];

export default function Gallery() {
  return (
    <section className="px-6 md:px-20 py-24">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={src}
                alt="Gallery image"
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
