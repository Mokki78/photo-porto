"use client";


import { motion, useScroll, useTransform} from "framer-motion";

export default function ParallaxImage() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])

    return (
        <motion.div
        style={{ y }}
        className="h-screen bg-cover bg-center"
        />
    )

  
}
