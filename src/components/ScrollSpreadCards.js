// ScrollSpreadCards.jsx
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: "a",
    img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200",
    content: (
      <div className="p-7">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs text-white mb-4">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> kora™
        </div>
        <h2 className="font-black text-white text-[22px] leading-tight" style={{ fontFamily: "Syne" }}>
          Your growth partner for<br />companies ready to scale.
        </h2>
      </div>
    ),
  },
  {
    id: "b",
    img: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?q=80&w=1200",
    dark: true,
    content: (
      <div className="p-7 pt-10">
        <h2 className="font-black text-white text-[24px] leading-tight" style={{ fontFamily: "Syne" }}>
          SCALE YOUR OPERATIONS{" "}
          <span className="text-[#b2ff00]">[10X]</span>
          <br />WITHOUT HIRING{" "}
          <span className="text-[#b2ff00]">[100]</span> PEOPLE.
        </h2>
      </div>
    ),
  },
  {
    id: "c",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200",
  },
];

// Initial stacked state → fan → spread
//           [stacked]       [fan]       [spread]
const ANIM = {
  a: { x: [0, -60, -310], y: [0, -30, 0],  r: [-2, -6, -2], s: [1.0, 1.02, 1.0]  },
  b: { x: [-30, 60, 310], y: [20,  30, 0], r: [-8,  6,  2], s: [0.97, 0.98, 1.0] },
  c: { x: [20,   0,   0], y: [35,  50, 80],r: [ 5,  0,  0], s: [0.93, 0.90, 0.80]},
};

function Card({ card, scrollYProgress }) {
  const anim = ANIM[card.id];

  // Split scroll into 2 phases: 0-0.45 = fan, 0.45-1 = spread
  // We use keyframes directly in useTransform
  const x = useTransform(scrollYProgress, [0, 0.45, 1], anim.x);
  const y = useTransform(scrollYProgress, [0, 0.45, 1], anim.y);
  const rotate = useTransform(scrollYProgress, [0, 0.45, 1], anim.r);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], anim.s);
  const opacity = useTransform(
    scrollYProgress,
    card.id === "c" ? [0, 0.45, 1] : [0, 1],
    card.id === "c" ? [0.8, 0.7, 0] : [1, 1]
  );
  const gtOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const gtY = useTransform(scrollYProgress, [0.85, 1], [10, 0]);

  const zMap = { a: 3, b: 2, c: 1 };

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity, zIndex: zMap[card.id] }}
      className="absolute left-[170px] top-0 w-[560px] h-[360px] rounded-3xl overflow-hidden shadow-2xl"
    >
      {/* Background */}
      <div className={`absolute inset-0 ${card.dark ? "bg-black" : ""}`}>
        <img
          src={card.img}
          className={`w-full h-full object-cover ${card.dark ? "opacity-20" : ""}`}
          alt=""
        />
        {!card.dark && (
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {card.content}

        {/* Get Template badge */}
        <motion.div
          style={{ opacity: gtOpacity, y: gtY }}
          className="absolute bottom-3 right-3 bg-white text-black rounded-xl px-4 py-2.5 flex items-center gap-2 text-[13px] font-semibold"
        >
          Get Template
          <span className="bg-[#ff4d1c] text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs">
            ↗
          </span>
        </motion.div>

        {/* LaunchNow */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/40 text-xs">
          <span className="w-5 h-5 bg-[#ff4d1c] rounded-md flex items-center justify-center text-[9px]">↗</span>
          LaunchNow
        </div>
      </div>
    </motion.div>
  );
}

export default function ScrollSpreadCards() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);
  const pillOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[350vh] bg-[#0e0e0e]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Hero headline */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="text-center mb-12 absolute top-20"
        >
          <h1
            className="text-[64px] font-black leading-tight"
            style={{ fontFamily: "Syne" }}
          >
            Design that <br />
            <span className="text-gray-600">delivers results.</span>
          </h1>
          <p className="text-gray-500 mt-3">Scroll to explore the work</p>
        </motion.div>

        {/* Cards Stage */}
        <div className="relative w-[900px] h-[500px]">
          {cards.map((card) => (
            <Card key={card.id} card={card} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* Speak pill */}
        <motion.div
          style={{ opacity: pillOpacity }}
          className="absolute bottom-14 flex items-center gap-4 bg-white/10 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3"
        >
          <div>
            <p className="text-white font-semibold text-[14px]" style={{ fontFamily: "Syne" }}>
              Speak to me
            </p>
            <p className="text-gray-400 text-[11px]">Email or book a call</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
              ✉️
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              📅
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}