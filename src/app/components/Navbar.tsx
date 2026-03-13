"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Some from "./Some";

const sections = ["Home", "Portfolio", "About",];

export default function Navbar() {
  const [active, setActive] = useState("hero");

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
   
      <div className="flex content-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          style={{ color: "#ffffff" }}
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      </div>
      <nav className="navbar flex items-center px-6 py-4 text-white">
        <div className="flex-1"></div>
        <div className="flex gap-8 justify-center">
        {sections.map((id) => (
          <div key={id} className="nav-item">
            <a href={`#${id}`}>{id}</a>

            {active === id && (
              <motion.div
                layoutId="underline"
                className="underline"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </div>
        
        ))}
        </div>
        <div  className="flex-1 flex justify-end">
          <Some />
          </div>
      </nav>
    </>
  );
}
