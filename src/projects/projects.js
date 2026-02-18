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

  /* ---------- ARROWS ---------- */
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20
      w-10 h-10 flex items-center justify-center
      bg-white/70 hover:bg-white shadow-md rounded-full
      backdrop-blur text-gray-700 transition"
    >
      <FaChevronLeft size={16} />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20
      w-10 h-10 flex items-center justify-center
      bg-white/70 hover:bg-white shadow-md rounded-full
      backdrop-blur text-gray-700 transition"
    >
      <FaChevronRight size={16} />
    </button>
  );

  /* ---------- SLIDER ---------- */
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  /* ---------- DATA ---------- */
  const projectData = [
    {
      image: news,
      url: "https://thetodaynews.netlify.app/",
      name: "News Platform System",
      tools: [
        "Fast loading experience",
        "Mobile optimized interface",
        "Clean UI structure",
      ],
    },
    {
      image: library,
      url: "https://books-ecommerceapp.netlify.app/",
      name: "E-Commerce Store Solution",
      tools: [
        "Product showcase system",
        "Customer friendly browsing",
        "Conversion focused design",
      ],
    },
    {
      image: company,
      url: "https://companylanpgtemplate.netlify.app/",
      name: "Corporate Website Platform",
      tools: [
        "Professional presence",
        "Lead generation layout",
        "Modern design",
      ],
    },
    {
      image: ecommece,
      url: "https://peterrizek009.github.io/ecommerce-redux",
      name: "Retail Management Interface",
      tools: [
        "Scalable architecture",
        "Secure logic",
        "Performance optimized",
      ],
    },
    {
      image: career,
      url: "https://www.youtube.com/watch?v=ZJXpM-DohW0",
      name: "Career Tracking System",
      tools: [
        "Database integration",
        "Automation logic",
        "Structured workflow",
      ],
    },
  ];

  /* ---------- UI ---------- */
  return (
    <section className="flex justify-center bg-[#f4f6fb] px-6 py-24">

      {/* OUTER CARD */}
      <div className="relative w-full max-w-[1300px] rounded-2xl bg-white shadow-xl overflow-hidden">

        {/* RIGHT SHAPE */}
        <div className="absolute right-0 top-0 h-full w-[42%]">

          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-purple-500" />

          <div className="absolute left-[-160px] top-0 h-full w-[420px] bg-white rounded-r-[240px]" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 p-16">

          {/* TITLE */}
          <div className="mb-16 max-w-[520px]">

            <h2 className="text-4xl font-bold text-gray-900">
              Business Solutions Portfolio
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Real systems and platforms built to help businesses improve
              performance, increase credibility, and operate efficiently.
            </p>

            <div className="w-24 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 mt-6 rounded-full" />

          </div>

          {/* SLIDER */}
          <ScrollAnimationWrapper>
            <Slider {...settings}>

              {projectData.map((project) => (
                <motion.div
                  key={project.name}
                  variants={scrollAnimation}
                  className="px-5"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >

                    {/* IMAGE */}
                    <div className="rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition duration-300">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    {/* TEXT */}
                    <div className="mt-6">

                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                        {project.name}
                      </h3>

                      <div className="w-14 h-[3px] bg-indigo-500 mt-2 rounded-full"></div>

                      {/* TAGS */}
                      <div className="flex flex-wrap mt-4 gap-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium
                            bg-gray-100 border border-gray-200
                            rounded-full text-gray-600
                            hover:bg-indigo-50 hover:border-indigo-300
                            transition"
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
