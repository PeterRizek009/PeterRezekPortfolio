
import React  ,  {useMemo} from 'react';
import {  BiLogoReact } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs'
import { MdWeb } from "react-icons/md";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import { motion } from "framer-motion";


const WahtICanDo = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);


    const services = [

        {
            icon: <MdWeb color='orange' size={50} />,
            title: "Front-End Development",
            description: "Building responsive and customizable UI with HTML , CSS  , TailwindCSS."
        },

        {
            icon: <BiLogoReact color='lightblue' size={50} />,
            title: "React & Redux",
            description: "Crafting dynamic UIs with React, mastering state with Redux"
        },
        {
            icon: <BsDatabase color='red' size={40} />,
            title: "Database",
            description: "Developing and managing databases using MongoDB and Creating RESTful APIs and server-side applications with Express.js."
        },

    ];


    return (

        <div className='md:max-w-[80%] mx-auto mt-8'>
            <div className='title'>What I can do</div>
            <ScrollAnimationWrapper>
            <div className="flex justify-between items-center text-center flex-wrap w-full my-4">
                {services.map((service, index) => (
                     
                    <motion.div key={index} className="p-4 text-center w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center" variants={scrollAnimation}>
                        <div className="mb-4 border-2 border-white p-4 rounded-full">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className='w-2/3'>{service.description}</p>
                    </motion.div>
                ))}
            </div>
            </ScrollAnimationWrapper>
            <div className="md:max-w-[1800px]  h-px dark:bg-white bg-newBlack mx-auto mt-28 mb-8" />
        </div>

    );
};




export default WahtICanDo;