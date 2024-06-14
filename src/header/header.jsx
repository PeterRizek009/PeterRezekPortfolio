import React, { useMemo } from 'react';
import CustomSVG from '../components/circleSVG';

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Header = () => {


    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (

        <div className='header max-w-[80%] h-auto mx-auto'>


            <CustomSVG HorizPos={`left-0`} VertiPos={`top-[150px]`} leftSVG={false} />

            <ScrollAnimationWrapper>
                <motion.div variants={scrollAnimation}>
                    <div className="w-auto h-auto my-10 flex flex-col flex-wrap justify-between md:items-start items-center gap-[20px] mx-auto">
                        <div className="w-[280px]  md:w-auto  dark:text-white md:text-[80px] text-[30px] font-bold">Nice to meet you! <br />I’m <span className='border-b-4 border-violet-800'>Peter Rezeik.</span> </div>
                        <p className="md:w-[700px] w-[300px]  h-auto dark:text-zinc-300 text-lg font-medium leading-7 my-10">I'm a passionate front-end developer dedicated to creating visually stunning and user-friendly websites and with strong experience in turning designs into websites. With a strong foundation in HTML, CSS, and JavaScript, React JS, I blend creativity with technical expertise to craft engaging digital experiences that leave a lasting impression.</p>

                    </div>


                    <div className='md:block hidden'>
                        <div className="Oval absolute top-44 left-[50%] w-32 h-32 rounded-full border dark:border-white" />
                        <div className="Rectangle1  md:absolute top-56 left-[80%] w-32 h-32 border dark:border-white" />
                    </div>
                </motion.div>
            </ScrollAnimationWrapper>
            <div className="md:max-w-[1800px] h-[2px] bg-violet-800 mx-auto mt-28" />

        </div>
    );
}

export default Header;