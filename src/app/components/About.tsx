"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-md mx-auto"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/self_portrait.jpg"
              alt="Self portrait"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="text-4xl mb-6 tracking-wide">About</h2>

          <p className="text-lg leading-relaxed text-neutral-600">
            I am a photographer inspired by light, people and the magic in mother nature.
            I love capturing the small moments and the big details.
             
            I started the journey becoming a photographer kind of by accident. And did not start photographing until a started 
          </p>
        </motion.div>
      </div>
    </section>
  );
}
