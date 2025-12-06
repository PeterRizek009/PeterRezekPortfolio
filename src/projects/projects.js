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

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 p-3 rounded-full cursor-pointer hover:bg-violet-700"
      onClick={onClick}
    >
      <FaChevronLeft size={24} color="white" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 p-3 rounded-full cursor-pointer hover:bg-violet-700"
      onClick={onClick}
    >
      <FaChevronRight size={24} color="white" />
    </div>
  );

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
      <div className="title">Projects</div>

      <ScrollAnimationWrapper>
        <Slider {...settings} className="w-full md:p-6">
          {projectData.map((project) => (
          <motion.div
  key={project.name}
  className="project w-full h-full p-4 flex flex-col items-center"
  variants={scrollAnimation}
>
  <a href={project.url} className="w-full">
    <div className="w-full mx-auto h-[320px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
   <img
  src={project.image}
  alt={project.name}
  className="w-full h-full object-fill bg-white"
  />

    </div>
  </a>

  {/* New Card Style */}
  <div className="w-full mt-4">

    {/* Title */}
    <h1 className="uppercase text-xl font-extrabold tracking-wide text-gray-900 hover:text-violet-700 transition">
      {project.name}
    </h1>

    {/* Underline Effect */}
    <div className="w-14 h-1 bg-violet-600 mt-1 rounded"></div>

    {/* Tools as Tags */}
    <div className="flex flex-wrap mt-3 gap-2">
      {project.tools.map((tool, idx) => (
        <span
          key={idx}
          className="px-3 py-1 text-xs font-semibold bg-gray-100 border border-gray-300 rounded-full text-gray-700"
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

      <div className="md:max-w-[1800px] h-[2px] bg-violet-800 mx-auto mt-28" />
    </div>
  );
};

export default Projects;
