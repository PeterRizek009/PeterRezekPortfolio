import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Header = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="header max-w-[80%] mx-auto pt-20 pb-10 relative">

      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>

          {/* TEXT SECTION */}
          <div className="flex flex-col gap-6 md:gap-10 md:items-start items-center text-center md:text-left">

            {/* TITLE */}
            <h1 className="font-extrabold leading-tight text-[34px] md:text-[70px] tracking-tight">
              Nice to meet you! <br />
              I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-700">
                Peter Rezeik.
              </span>
            </h1>

            {/* STRONG FRONT-END STATEMENT */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              I’m a strong Front-End Developer - 
              <span className="text-violet-700 font-bold"> I build fast, modern, and elegant UIs. </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="md:w-[650px] w-[330px] text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
              I specialize in creating clean, responsive, and beautiful user
              experiences using React, Tailwind CSS, and modern front-end tools.  
              I also have solid experience in IT Support and System Administration.
            </p>

          </div>

          {/* Decorative shapes */}
          <div className="hidden md:block">
            <div className="absolute top-40 left-[55%] w-24 h-24 rounded-full border border-gray-300/50" />
            <div className="absolute top-56 left-[78%] w-28 h-28 border border-gray-300/50" />
          </div>

        </motion.div>
      </ScrollAnimationWrapper>

      <div className="h-[2px] bg-violet-700 mx-auto mt-24 opacity-70" />
    </div>
  );
};

export default Header;
