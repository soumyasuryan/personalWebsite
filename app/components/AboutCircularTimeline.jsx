"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stages = [
  { title: "Secondary Schooling", subtitle: "Jindal Public School", year: "2022–2023", status: "done" },
  { title: "Senior Secondary Schooling", subtitle: "Jindal Public School", year: "2024–2025", status: "done" },
  { title: "University", subtitle: "GGSIPU (CSE – AIML)", year: "2025–2029", status: "active" },
  { title: "Certifications & Projects", subtitle: "Latest tech stacks", year: "2024–2029", status: "active" },
  { title: "Internships", subtitle: "Industry exposure", year: "Upcoming", status: "locked" },
  { title: "Your Favourite Developer", subtitle: "Expert-level growth", year: "Future", status: "locked" },
];

export default function AboutCircularTimeline() {
  const [isMobile, setIsMobile] = useState(false);
  const [radius, setRadius] = useState(220);
  const [cardWidth, setCardWidth] = useState(180);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        if (window.innerWidth < 1024) {
          setRadius(170);
          setCardWidth(160);
        } else {
          setRadius(220);
          setCardWidth(180);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= MOBILE LAYOUT ================= */

  if (isMobile) {
  return (
    <section className="bg-[#1e0730] text-white py-16 px-6">
      <div className="space-y-6">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`backdrop-blur-md p-4 rounded-xl border transition-all duration-300
              ${
                stage.status === "locked"
                  ? "bg-white/5 text-white/40 border-white/10"
                  : stage.status === "active"
                  ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-[1.02]"
                  : "bg-white/10 border-white/20"
              }
            `}
          >
            <h4 className="font-semibold text-base">
              {stage.title}
            </h4>
            <p className="text-sm opacity-70">
              {stage.subtitle}
            </p>
            <span className="block text-xs mt-1 font-mono">
              {stage.year}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

  /* ================= DESKTOP CIRCLE ================= */

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#1e0730] text-white overflow-hidden px-4">
      <div
        className="relative flex items-center justify-center"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {/* Center Image */}
        <div className="absolute z-20">
          <img
            src="/Roadmap-img.jpeg"
            alt="Me"
            className="rounded-full object-cover border-4 border-yellow-400
                       shadow-[0_0_20px_rgba(250,204,21,0.3)]
                       h-36 w-36"
          />
        </div>

        {/* Ring */}
        <div
          className="absolute rounded-full border border-white/10"
          style={{ width: radius * 2, height: radius * 2 }}
        />

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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1, x, y }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -(cardWidth / 2),
                marginTop: "-2rem",
              }}
            >
              <div
                style={{ width: cardWidth }}
                className={`rounded-xl px-4 py-3 text-center text-sm
                ${
                  isLocked
                    ? "bg-white/5 text-white/40 border border-white/10"
                    : isActive
                    ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-110 z-30"
                    : "bg-white/10 border border-white/20 hover:bg-white/20"
                }`}
              >
                <h4 className="font-semibold">{stage.title}</h4>
                <p className="text-xs opacity-70">{stage.subtitle}</p>
                <span className="block text-xs mt-1 font-mono">{stage.year}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
