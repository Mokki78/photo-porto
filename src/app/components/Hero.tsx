"use client";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/hero_image.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="porto-text">Portfolie</h1>
        <h1 className="main-text">
         Fotograf Monika Sæle
        </h1>
      </div>
    </section>
  );
}
