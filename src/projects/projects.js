import React, { useMemo } from "react";
import news from "./newsapp.png";
import library from "./library.png";
import company from "./landing.png";
import ecommece from "./Ecommercewithredux.PNG";
import career from "./career.PNG";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  // CUSTOM ARROWS
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="
        absolute left-3 top-1/2 -translate-y-1/2 z-20
        w-10 h-10 flex items-center justify-center
        bg-black/40 hover:bg-black/60
        rounded-full backdrop-blur-md
        text-white transition
      "
    >
      <FaChevronLeft size={18} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="
        absolute right-3 top-1/2 -translate-y-1/2 z-20
        w-10 h-10 flex items-center justify-center
        bg-black/40 hover:bg-black/60
        rounded-full backdrop-blur-md
        text-white transition
      "
    >
      <FaChevronRight size={18} />
    </button>
  );

  // SLIDER SETTINGS
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // PROJECT DATA
  const projectData = [
    {
      image: news,
      url: "https://thetodaynews.netlify.app/",
      name: "NEWS CAST",
      tools: ["HTML", "Tailwind CSS", "React JS", "Responsive design"],
    },
    {
      image: library,
      url: "https://books-ecommerceapp.netlify.app/",
      name: "ALEX BOOKS STORE",
      tools: ["HTML", "CSS", "Bootstrap", "React JS", "Responsive design"],
    },
    {
      image: company,
      url: "https://companylanpgtemplate.netlify.app/",
      name: "CONTRACTING COMPANY",
      tools: ["HTML", "Tailwind CSS", "React JS", "Responsive design"],
    },
    {
      image: ecommece,
      url: "https://peterrizek009.github.io/ecommerce-redux",
      name: "CLOSET CANVAS",
      tools: ["HTML", "Tailwind CSS", "React JS", "Redux", "Responsive design"],
    },
    {
      image: career,
      url: "https://www.youtube.com/watch?v=ZJXpM-DohW0",
      name: "CAREER TRACKR",
      tools: ["HTML", "Tailwind CSS", "React JS", "Express JS", "MongoDB"],
    },
  ];

  return (
    <div className="block relative w-[80%] mx-auto py-2">
      {/* SECTION TITLE */}
      <div className="title">Projects</div>

      <ScrollAnimationWrapper>
        <Slider {...settings} className="w-full md:p-6">
          {projectData.map((project) => (
            <motion.div
              key={project.name}
              className="project w-full p-4 flex flex-col items-center"
              variants={scrollAnimation}
            >
              {/* PROJECT IMAGE */}
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full block group">
                <div
                  className="
                    w-full h-[330px]
                    rounded-2xl overflow-hidden
                    shadow-md group-hover:shadow-xl 
                    transition-all duration-300
                  "
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="
                      w-full h-full 
                      object-cover 
                      bg-white
                      group-hover:scale-[1.03]
                      transition-all duration-500
                    "
                  />
                </div>
              </a>

              {/* PROJECT TEXT CONTENT */}
              <div className="w-full mt-4">
                <h1 className="uppercase text-xl font-extrabold tracking-wide text-gray-900 group-hover:text-violet-700 transition">
                  {project.name}
                </h1>

                {/* UNDERLINE */}
                <div className="w-16 h-[3px] bg-violet-600 mt-1 rounded-full"></div>

                {/* TOOLS TAGS */}
                <div className="flex flex-wrap mt-3 gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3 py-1 text-xs font-semibold
                        bg-gray-100 border border-gray-300
                        rounded-full text-gray-700
                        hover:bg-violet-100 hover:border-violet-400
                        transition
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </ScrollAnimationWrapper>

      {/* DIVIDER */}
      <div className="md:max-w-[1800px] h-[2px] bg-violet-800 mx-auto mt-28" />
    </div>
  );
};

export default Projects;
