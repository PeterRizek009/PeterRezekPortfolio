import React ,  {useMemo} from 'react';
import news from './newsapp.png';
import library from './library.png'
import company from './landing.png'
import ecommece from './Ecommercewithredux.PNG'
import career from './career.PNG'
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
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

    const projectData = [
        {
            image: news,
            url: 'https://thetodaynews.netlify.app/',
            name: 'NEWS CAST',
            tools: ['HTML', 'Tailwind CSS', 'React JS', 'Responsive design']

        },
        {
            image: library,
            url: 'https://books-ecommerceapp.netlify.app/',
            name: 'ALEX BOOKS STORE',
            tools: ['HTML', 'CSS', 'Bootstrap', 'React JS', 'Responsive design']
        },
        {
            image: company,
            url: 'https://companylanpgtemplate.netlify.app/',
            name: 'CONTRACTING COMPANY',
            tools: ['HTML', 'Tailwind CSS', 'React JS', 'Responsive design']
        },
        {
            image: ecommece,
            url: 'https://peterrizek009.github.io/ecommerce-redux',
            name: 'CLOSET CANVAS',
            tools: ['HTML', 'Tailwind CSS', 'React JS', 'Redux', 'Responsive design']
        },
        {
            image: career,
            url: 'https://www.youtube.com/watch?v=ZJXpM-DohW0',
            name: 'CAREER TRACKR',
            tools: ['HTML', 'Tailwind CSS', 'React JS', 'Express JS', 'MongoDB']
        },

    ]

  

    return (
 <div className='block relative w-[80%] mx-auto py-2'>
      <div className='title'>Projects</div>

      <ScrollAnimationWrapper>
        <Slider {...settings} className="w-full md:p-6">
          {projectData.map((project) => (
            <motion.div
              key={project.name}
              className='project w-full h-[400px] p-4 flex flex-col items-center'
              variants={scrollAnimation}
            >
              <a href={project.url}>
                <div
                  className='block max-w-3xl mx-auto h-[270px] md:h-[320px] bg-cover  shadow-sm rounded-sm hover:drop-shadow-lg hover:shadow-violet-800'
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </a>
              <div className='flex justify-between mt-3 w-full'>
                <div>
                  <h1 className='uppercase text-xl font-bold  hover:text-violet-800'>
                    {project.name}
                  </h1>
                  <div className='relative flex justify-start items-start flex-wrap'>
                    {project.tools.map((tool, idx) => (
                      <h3 key={idx} className='uppercase me-4 text-sm'>
                        {tool}
                      </h3>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </ScrollAnimationWrapper>

            <div className="md:max-w-[1800px] h-[2px] bg-violet-800 mx-auto mt-28" />

        </div>
    );
}

export default Projects;