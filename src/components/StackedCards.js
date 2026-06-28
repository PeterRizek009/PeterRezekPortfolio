import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function StackedCards() {


  const x = useMotionValue(0);

  const rotate1 = useTransform(x, [-200, 200], [-15, -5]);
  const rotate2 = useTransform(x, [-200, 200], [-5, 5]);
  const rotate3 = useTransform(x, [-200, 200], [5, 15]);

//   function handleMove(e) {
//     const rect = ref.current.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left - rect.width / 2;
//     x.set(mouseX);
//   }

  return (
    <div
      className="relative max-w-[400px] max-h-[200px] py-2"
    >
      {/* Back */}
      <motion.img
        src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200"
        style={{ rotate: rotate1 }}
        className="absolute w-full rounded-3xl shadow-2xl"
      />

      {/* Middle */}
      <motion.img
        src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200"
        style={{ rotate: rotate2 }}
        className="absolute w-full rounded-3xl shadow-2xl"
      />

      {/* Front */}
      <motion.img
        src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200"
        style={{ rotate: rotate3 }}
        className="absolute w-full rounded-3xl shadow-2xl"
      />
    </div>
  );
}