"use client";

import { motion } from "framer-motion";

const OUTER_RADIUS = 220; // Radius from center to the cards

const stages = [
  { title: "Secondary Schooling", subtitle: "Jindal Public School", year: "2022-2023", status: "done" },
  { title: "Senior Secondary Schooling", subtitle: "Jindal Public School", year: "2024-2025", status: "done" },
  { title: "University", subtitle: "GGSIPU (CSE – AIML)", year: "2025–2029", status: "active" },
  { title: "Certifications & Projects", subtitle: "Latest tech stacks", year: "2024–2029", status: "active" },
  { title: "Internships", subtitle: "Industry exposure", year: "Upcoming", status: "locked" },
//   { title: "Startup / Research", subtitle: "Impact driven work", year: "Future", status: "locked" },
//   { title: "Leadership", subtitle: "Communities & teams", year: "Future", status: "locked" },
  { title: "Your Favourite Developer", subtitle: "Expert-level growth", year: "Future", status: "locked" },
];

export default function AboutCircularTimeline() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black text-white overflow-hidden container1">
      {/* Circle container */}
      <div className="relative h-[440px] w-[440px] flex items-center justify-center">
        
        {/* Center image container */}
        <div className="absolute z-20">
          <img
            src="/Roadmap-img.jpeg"
            alt="Me"
            className="h-50 w-50 rounded-full object-cover border-4 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          />
        </div>

        {/* Circular ring (Visual guide) */}
        <div 
          className="absolute rounded-full border border-white/10" 
          style={{ width: OUTER_RADIUS * 2, height: OUTER_RADIUS * 2 }}
        />

        {/* Timeline nodes */}
        {stages.map((stage, i) => {
          // Calculate angle for equal distribution: 
          // (360 / total) * current index. Subtract 90 to start at the top.
          const angle = (360 / stages.length) * i - 90;
          const rad = (angle * Math.PI) / 180;

          // Trigonometry for positioning
          const x = Math.cos(rad) * OUTER_RADIUS;
          const y = Math.sin(rad) * OUTER_RADIUS;

          const isLocked = stage.status === "locked";
          const isActive = stage.status === "active";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                x: x, 
                y: y 
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1, 
                type: "spring", 
                stiffness: 100 
              }}
              className="absolute"
              style={{
                // We use transform translate to keep the card centered on the (x,y) point
                left: "50%",
                top: "50%",
                marginLeft: "-5.5rem", // half of w-44 (176px / 2 = 88px)
                marginTop: "-2.5rem", // half of approx height
              }}
            >
              <div
                className={`w-44 rounded-xl px-4 py-3 text-center text-sm backdrop-blur-md transition-all duration-300
                ${
                  isLocked
                    ? "bg-white/5 text-white/40 border border-white/10"
                    : isActive
                    ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-110 z-30"
                    : "bg-white/10 border border-white/20 hover:bg-white/20"
                }`}
              >
                <h4 className="font-semibold leading-tight">{stage.title}</h4>
                <p className="text-[10px] uppercase tracking-wider opacity-70">{stage.subtitle}</p>
                <span className="mt-1 block text-xs font-mono">{stage.year}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}