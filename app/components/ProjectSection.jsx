"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsHero() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      name: "StriRise",
      logo: "/StriRise-logo.svg",
      description:
        "AI-powered application to provide roadmap, suggestions and a marketplace for women seeking self-dependence or starting a business thus empowering women.",
      tech: ["React", "Next.js", "Tailwind", "Flask", "Pandas", "Numpy"],
      website: "https://stri-rise.vercel.app/",
      github: "https://github.com/yourusername/myapp",
    },
    {
      name: "KrishiGram",
      logo: "/KrishiGram-logo.svg",
      description:
        "A AIML powered application which helps in recommending suitable crops, fertilizers, detecting pests using image, providing weather alerts and market prices.",
      tech: ["React", "Next JS", "Flask", "Numpy", "Pandas", "Keras"],
      website: "https://krishi-gram.vercel.app/",
      github: "https://github.com/yourusername/fittrack",
    },
    {
      name: "EduVault",
      logo: "/open-book.svg",
      description:
        "A platform full of Ebooks, cheat Sheets, courses and case studies.",
      tech: ["Node.js", "MongoDB", "Next JS", "React"],
      website: "https://eduvault-79fv.onrender.com/",
      github: "https://github.com/yourusername/devhub",
    },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(index);
    };

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToProject = (index) => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({
        left: index * el.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
  <section className="relative w-full h-screen bg-gradient-to-br bg-[#1e0730] overflow-hidden">

    <style jsx global>{`
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {/* Horizontal Scroll Container */}
    <div
      ref={scrollRef}
      className="h-screen flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar scroll-smooth"
      style={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full snap-center flex items-center justify-center px-4 md:px-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                flex flex-col md:flex-row items-stretch
                bg-gradient-to-br from-[#2a0d4f] to-[#1c0739]
                border border-yellow-400
                rounded-3xl shadow-2xl
                p-6 md:p-12
                w-full max-w-6xl
                gap-8
                min-h-[520px] md:min-h-[480px]
              "
            >
              {/* Logo Section */}
              <div className="relative w-full md:w-1/2 h-52 md:h-auto flex-shrink-0">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col justify-between w-full md:w-1/2">
                
                {/* Top Content */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    {project.name}
                  </h2>

                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-white/10 text-white rounded-md border border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.website}
                    target="_blank"
                    className="px-6 md:px-8 py-2 md:py-3 bg-yellow-400 text-black font-bold rounded-lg hover:scale-105 transition"
                  >
                    Visit
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-6 md:px-8 py-2 md:py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition"
                  >
                    Code
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToProject(i)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === i
                ? "w-8 h-2 bg-yellow-400"
                : "w-2 h-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
