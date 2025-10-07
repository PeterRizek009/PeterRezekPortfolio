import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai'
import {
    BiLogoCss3, BiLogoTailwindCss, BiLogoBootstrap,
    BiLogoJavascript, BiLogoReact, 
    BiLogoRedux, BiLogoGithub, BiLogoFigma, BiLogoMongodb
} from 'react-icons/bi'

import { SiExpress } from 'react-icons/si'
import CustomSVG from '../components/circleSVG';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from '../components/customArrows/customArrows';



const Skills = () => {

    const size =  80;

    const skills = [
        <AiFillHtml5 color='orange' size={size} />,
        <BiLogoCss3 color='lightblue' size={size} />,
        <BiLogoBootstrap color='purple' size={size} />,
        <BiLogoTailwindCss color='lightblue' size={size} />,
        <BiLogoFigma color='pink' size={size} />,
        <BiLogoJavascript color='yellow' size={size} />,
        // <BiLogoTypescript color='gray' size={size} />,
        <BiLogoReact color='lightblue' size={size} />,
        <BiLogoRedux color='lightpurple' size={size} />,
        <BiLogoMongodb color='green' size={size} />,
        <SiExpress color='lightyellow' size={size} />,
        // <SiNextdotjs color='gray' size={size} />,
        <BiLogoGithub color='white'  size={size} />

    ]


    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  
                }
            }
        ]
    };


    return (
        <div className='md:max-w-[80%] mx-auto py-4'>
            <div className='title'>Coding skills</div>

            <div className='mx-10 my-4'>
                <Slider {...settings}>
                    {skills.map((skill, index) =>
                        <div key={index} className="py-8 px-1">
                            {skill}
                        </div>

                    )}
                </Slider>
            </div>
            <CustomSVG HorizPos={`right-0`} VertiPos={`top-[800px]`} leftSVG={true} />


            <div className="md:max-w-[1800px]  h-px dark:bg-white bg-newBlack mx-auto mt-28 mb-8" />
        </div>
    );

}

export default Skills;