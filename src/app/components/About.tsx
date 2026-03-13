"use client";


import { motion } from "framer-motion";
export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 py-24 bg-black text-white">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-6xl mb-6 tracking-wide">ABOUT</h1>

        <p className="text-lg leading-relaxed text-neutral-300">
          With over 16 years of experience in photography, I specialize in
          families and portraits, with a love for natural light and authentic
          outdoor moments. My style blends relaxed, genuine expression with a
          subtle fashion-inspired edge. I’m also educated in digital
          marketing, UI design, and front-end development, which strengthens
          my visual storytelling and creative perspective. Inspired by people,
          children, colors, travel, and music, I aim to create photographs
          that feel natural, timeless, and full of life.
        </p>

        <div className="mt-8">
          <h3 className="text-xl mb-2">Contact information</h3>
          <p>Phone: +47 90 75 75 19</p>
          <p>Email: post@fotograf-ms.com</p>
        </div>
      </motion.div>

    </section>
  );
}