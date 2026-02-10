"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ================= DATA ================= */

const stages = [
  { title: "Secondary Schooling", subtitle: "Jindal Public School", year: "2022–2023", status: "done" },
  { title: "Senior Secondary Schooling", subtitle: "Jindal Public School", year: "2024–2025", status: "done" },
  { title: "University", subtitle: "GGSIPU (CSE – AIML)", year: "2025–2029", status: "active" },
  { title: "Certifications & Projects", subtitle: "Latest tech stacks", year: "2024–2029", status: "active" },
  { title: "Internships", subtitle: "Industry exposure", year: "Upcoming", status: "locked" },
  { title: "Your Favourite Developer", subtitle: "Expert-level growth", year: "Future", status: "locked" },
];

/* ================= COMPONENT ================= */

export default function AboutCircularTimeline() {
  const [radius, setRadius] = useState(220);
  const [cardWidth, setCardWidth] = useState(176);

  /* Responsive sizing */
  useEffect(() => {
    const updateSizes = () => {
      if (window.innerWidth < 640) {
        setRadius(140);
        setCardWidth(140);
      } else if (window.innerWidth < 1024) {
        setRadius(180);
        setCardWidth(160);
      } else {
        setRadius(220);
        setCardWidth(176);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center bg-black text-white overflow-hidden">
      {/* Circle container */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      >
        {/* Center image */}
        <div className="absolute z-20">
          <img
            src="/Roadmap-img.jpeg"
            alt="Me"
            className="rounded-full object-cover border-4 border-yellow-400
                       shadow-[0_0_20px_rgba(250,204,21,0.3)]
                       h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
          />
        </div>

        {/* Ring */}
        <div
          className="absolute rounded-full border border-white/10"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
        />

        {/* Nodes */}
        {stages.map((stage, i) => {
          const angle = (360 / stages.length) * i - 90;
          const rad = (angle * Math.PI) / 180;

          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          const isLocked = stage.status === "locked";
          const isActive = stage.status === "active";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
              whileInView={{ opacity: 1, scale: 1, x, y }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -(cardWidth / 2),
                marginTop: "-2.5rem",
              }}
            >
              <div
                style={{ width: cardWidth }}
                className={`rounded-xl px-3 py-2 text-center text-xs sm:text-sm
                            backdrop-blur-md transition-all duration-300
                ${
                  isLocked
                    ? "bg-white/5 text-white/40 border border-white/10"
                    : isActive
                    ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-110 z-30"
                    : "bg-white/10 border border-white/20 hover:bg-white/20"
                }`}
              >
                <h4 className="font-semibold leading-tight">
                  {stage.title}
                </h4>
                <p className="text-[9px] uppercase tracking-wider opacity-70">
                  {stage.subtitle}
                </p>
                <span className="mt-1 block text-[10px] font-mono">
                  {stage.year}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
                }
