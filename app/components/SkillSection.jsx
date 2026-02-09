"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import OrbitCard from "./OrbitCard";

export default function SkillSection() {
  const skills = [
     {
      category: "Web Development",
      items: ["HTML", "CSS", "React", "Next.js", "Tailwind","Express","NodeJS","Flask"],
    },
    {
      category: "Data & AIML",
      items: ["NumPy", "Pandas","Matplotlib","Seaborn", "TensorFlow", "Keras"],
    },
    {
      category: "Programming",
      items: ["Python", "JavaScript", "C"],
    },
    
    {
      category: "Tools",
      items: ["Git", "GitHub", "Linux", "VS Code"],
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % skills.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? skills.length - 1 : prev - 1
    );

  return (
    <section className="relative bg-[#1e0730] py-28 px-6 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-yellow-300">
          What Suryan brings to the table
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl">
          Technologies I actively use and explore.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto flex items-center justify-center">
        
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 h-12 w-12 rounded-full border border-yellow-300/40 text-yellow-300 hover:bg-yellow-300/10 transition"
        >
          ◀
        </button>

        {/* Slide */}
        <div className="w-full py-14 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={skills[index].category}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <OrbitCard
                category={skills[index].category}
                items={skills[index].items}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-0 z-20 h-12 w-12 rounded-full border border-yellow-300/40 text-yellow-300 hover:bg-yellow-300/10 transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
