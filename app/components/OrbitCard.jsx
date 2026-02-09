"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ICONS = {
  Python: "/icons/python.svg",
  Matplotlib: "/icons/matplotlib.png",
  Seaborn: "/icons/seaborn.svg",
  Express: "/icons/Express.svg",
  NodeJS: "/icons/NodeJS.svg",
  Flask: "/icons/Flask.svg",
  JavaScript: "/icons/javascript.svg",
  "C": "/progc.webp",
  HTML: "/icons/html.svg",
  CSS: "/icons/css.svg",
  React: "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  Tailwind: "/icons/tailwind.svg",
  NumPy: "/icons/numpy.svg",
  Pandas: "/icons/pandas.svg",
  TensorFlow: "/icons/tensorflow.svg",
  Keras: "/icons/keras.svg",
  Git: "/icons/git.svg",
  GitHub: "/icons/github.webp",
  Linux: "/icons/linux.svg",
  "VS Code": "/icons/vscode.svg",
};

export default function OrbitCard({ category, items }) {
  const radius = 120;
  const step = 360 / items.length;

  return (
    <div className="relative min-h-100 w-100 rounded-full bg-gradient-to-br from-[#2b0d46] to-[#1e0730] flex items-center justify-center group">

   
{/* Orbit container */}
<motion.div
  className="absolute inset-0 flex items-center justify-center"
  animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    duration: 18,
    ease: "linear",
  }}
>
  {items.map((item, i) => {
    const angle = (360 / items.length) * i;

    return (
      <div
        key={item}
        className="absolute"
        style={{
          transform: `rotate(${angle}deg) translateY(-140px)`,
          transformOrigin: "center",
        }}
      >
        <div className="h-12 w-12 rounded-full bg-[#240a3a] borde border-yellow-300/30 flex flex-col items-center justify-center shadow-lg">
          <Image
            src={ICONS[item]}
            alt={item}
            width={30}
            height={30}
          />
          <p className="text-xs">{item}</p>
        </div>
      </div>
    );
  })}
</motion.div>






      {/* Center category */}
      <div className="z-10 text-center">
        <h3 className="text-xl font-bold text-yellow-300 tracking-wide">
          {category}
        </h3>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 rounded-full group-hover:shadow-[0_0_80px_#fde04733] transition-shadow duration-500" />
    </div>
  );
}
