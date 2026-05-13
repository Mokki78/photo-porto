"use client";

import { motion } from "framer-motion";
import ContactModal from "./EmailModal";

export default function About() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-18 py-10
     bg-black text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl text-center"
      >
        <h1 className ="text-6xl mb-6 tracking-wide">ABOUT</h1>

        <p className="text-lg leading-relaxed text-neutral-300">
          With over 16 years of experience in photography, I specialize in
          families and portraits, with a love for natural light and authentic
          outdoor moments. My style blends relaxed, genuine expression with a
          subtle fashion-inspired edge. I’m also educated in digital marketing,
          UI design, and front-end development, which strengthens my visual
          storytelling and creative perspective. Inspired by people, children,
          colors, travel, and music, I aim to create photographs that feel
          natural, timeless, and full of life.
        </p>

        <div className="mt-8">
          <h3 className="text-xl mb-2">Contact information</h3>
          <div>
            <a
              href="tel:+4790757519"
              className="inline-flex items-center gap-2 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone-icon lucide-phone h-6 w-6 text-white group-hover:text-orange-400 transition-colors"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              <span className="text-white group-hover:text-color-orange-400">
              Call me
              </span>
            </a>
          </div>
          <div>
            <ContactModal />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
