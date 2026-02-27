"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const sections = [ "Home", "About", "Gallery"]

export default function Navbar() {
const [ active, setActive ] = useState("hero")

useEffect(() => {
  const observers: IntersectionObserver[] = []

  sections.forEach((id) => {
    const element = document.getElementById(id)
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(id)
        }
      },
      { threshold: 0.6}
    )

    observer.observe(element)
    observers.push(observer)
  })

  return () => observers.forEach((obs) => obs.disconnect())
 }, [])


  return (
    
      <nav className="navbar">
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
      
      </nav>
    
  );
}
