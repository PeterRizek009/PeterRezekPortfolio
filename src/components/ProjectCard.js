import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function ProjectCard({ image }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{ scale: 1.03 }}
      className="rounded-3xl overflow-hidden shadow-xl transition"
    >
      <img src={image} className="w-full h-[320px] object-cover" />
    </motion.div>
  );
}