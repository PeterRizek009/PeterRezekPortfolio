import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai'
import {
    BiLogoCss3, BiLogoTailwindCss, BiLogoBootstrap,
    BiLogoJavascript, BiLogoReact, BiLogoTypescript,
    BiLogoRedux, BiLogoGithub, BiLogoFigma, BiLogoMongodb
} from 'react-icons/bi'

import { SiNextdotjs, SiExpress } from 'react-icons/si'
import CustomSVG from '../components/circleSVG';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from '../components/customArrows/customArrows';



const Skills = () => {

    const skills = [
        <AiFillHtml5 color='gray' size={70} />,
        <BiLogoCss3 color='gray' size={70} />,
        <BiLogoBootstrap color='gray' size={70} />,
        <BiLogoTailwindCss color='gray' size={70} />,
        <BiLogoFigma color='gray' size={70} />,
        <BiLogoJavascript color='gray' size={70} />,
        <BiLogoTypescript color='gray' size={70} />,
        <BiLogoReact color='gray' size={70} />,
        <BiLogoRedux color='gray' size={70} />,
        <BiLogoMongodb color='gray' size={70} />,
        <SiExpress color='gray' size={70} />,
        <SiNextdotjs color='gray' size={70} />,
        <BiLogoGithub color='gray' size={70} />

    ]


    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 7,
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

            <div className='my-8'>
                <Slider {...settings}>
                    {skills.map((skill, index) =>
                        <div key={index} className="py-8 px-2">
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