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
  <section className="flex justify-center bg-[#f4f6fb] px-6">

    {/* CARD CONTAINER — SAME AS HEADER */}
    <div className="relative w-full max-w-[1300px] rounded-2xl bg-white shadow-xl overflow-hidden">

      {/* RIGHT GRADIENT SHAPE */}
      <div className="absolute right-0 top-0 h-full w-[78%]">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-purple-600" />
        <div className="absolute left-[-120px] top-0 h-full w-[280px] bg-white rounded-r-[200px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-14">

        {/* TITLE */}
        <div className="mb-14 max-w-[520px]">
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-indigo-600 to-purple-600 mt-3 rounded-full" />
        </div>

        {/* SLIDER */}
        <ScrollAnimationWrapper>
          <Slider {...settings}>

            {projectData.map((project) => (
              <motion.div
                key={project.name}
                variants={scrollAnimation}
                className="px-4"
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {/* IMAGE CARD */}
                  <div className="rounded-2xl overflow-hidden shadow-md group-hover:shadow-2xl transition duration-300">

                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
                    />

                  </div>

                  {/* TEXT */}
                  <div className="mt-5">

                    <h3 className="uppercase text-xl font-extrabold tracking-wide text-gray-900 group-hover:text-indigo-600 transition">
                      {project.name}
                    </h3>

                    <div className="w-16 h-[3px] bg-indigo-600 mt-1 rounded-full"></div>

                    {/* TOOLS */}
                    <div className="flex flex-wrap mt-3 gap-2">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-semibold bg-gray-100 border border-gray-300 rounded-full text-gray-700 hover:bg-indigo-100 hover:border-indigo-400 transition"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                  </div>
                </a>
              </motion.div>
            ))}

          </Slider>
        </ScrollAnimationWrapper>

      </div>
    </div>
  </section>
);
};

export default Projects;
