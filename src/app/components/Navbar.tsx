"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Some from "./Some";
import CustomHamburger from "./CustomHamburger";

const sections = ["Home", "Portfolio", "About"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[9999] flex items-center px-6 py-4 text-white bg-black z-50">
        {/* LEFT */}
        <div className="flex-1"></div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 justify-center">
          {sections.map((id) => (
            <div key={id} className="relative">
              <a href={`#${id}`}>{id}</a>

              {active === id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <div className="hidden md:block z-[9999]">
            <Some />
          </div>

          {/* HAMBURGER (mobile only) */}
          <div className="md:hidden z-[9999]">
            <CustomHamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full z-[9999] md:hidden flex flex-col items-center gap-6 py-10 bg-black text-white">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className="text-lg"
            >
              {id}
            </a>
          ))}
          <Some />
        </div>
      )}
    </>
  );
}
