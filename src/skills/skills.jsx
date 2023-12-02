import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai'
import {
    BiLogoCss3, BiLogoTailwindCss, BiLogoBootstrap,
    BiLogoJavascript, BiLogoReact, BiLogoTypescript,
    BiLogoRedux, BiLogoGithub , BiLogoFigma
} from 'react-icons/bi'

import { SiNextdotjs } from 'react-icons/si'


const Skills = () => {

    const skills = [
        {
            name: 'HTML',
            icon: <AiFillHtml5 color='orange' size={33} />,
            text :'Proficient and experienced in HTML, with a solid track record in web development'

        },
        {
            name: 'CSS',
            icon: <BiLogoCss3 color='blue' size={33} />,
               text :'Skilled and knowledgeable in  CSS, with substantial expertise in responsive design'

        },
        {
            name: 'Bootstrap',
            icon: <BiLogoBootstrap color='indigo' size={33} />,
            text :'Experienced in Bootstrap,with completed  projects using Bootstrap.'
        },
        {
            name: 'TailwindCSS',
            icon: <BiLogoTailwindCss color='lightblue' size={35} />,
            text :'Experienced and Proficient in Tailwind CSS, applied in multiple projects.'
        },
        {
            name: 'Figma ',
            icon: <BiLogoFigma color='pink' size={35} />,
            text :'I have successfully translated numerous Figma designs into pixel-perfect projects'
        },
        {
            name: 'JavaScript',
            icon: <BiLogoJavascript color='yellow' size={35} />,
            text :'Proficient and experienced in JavaScript '

        },
        {
            name: 'TypeScript',
            icon: <BiLogoTypescript color='blue' size={35} />,
            text :'I am currently at an entry level in TypeScript and making notable progress in my learning journey.'

        },
        {
            name: 'React',
            icon: <BiLogoReact color='lightblue' size={35} />,
            text :'Proficient and experienced in React JS , applied in multiple projects.'
        },
        {
            name: 'Redux',
            icon: <BiLogoRedux color='lightblue' size={35} />,
            text :'I possess strong knowledge in Redux technology, with practical application demonstrated in projects'
        },
        {
            name: 'Next JS',
            icon: <SiNextdotjs color='lightblue' size={35} />,
            text :'I am currently at an entry level in Next Js  and making notable progress in my learning journey.'
        },
        {
            name: 'Git & Github',
            icon: <BiLogoGithub color='gray' size={35} />,
            text :'Proficient and experienced in GitHub '
        },
    ]
    return (
        <div className='md:max-w-[80%]   mx-auto py-4'>
            <div className='block text-white text-2xl md:text-5xl font-bold leading-10 md:pb-4 p-2  border-b-4 border-violet-800 md:w-[400px] w-[200px] mx-auto md:mx-2'>Technical Skills</div>
            <div className='flex w-full justify-between items-center flex-wrap mt-8'>
                {skills.map((skill) =>
                    // <div className="skill md:w-80 w-[140px] mx-2 h-auto mt-8 py-8 flex-col justify-center md:items-start items-center  md:gap-3.5" key={el.name}>
                    //     <div className="text-white text-2xl md:text-5xl font-bold leading-10">{el.name}</div>
                    //     <div className="md:w-80 w-[140px] text-zinc-300 text-md font-medium leading-7">2 Years Experience</div>
                    // </div>

                    <div class="xl:w-1/4 md:w-1/2 w-1/2 p-4 cursor-pointer">
                        <div class="border border-gray-200 p-6 rounded-lg hover:border-violet-800 hover:scale-105 shadow-md">
                            <div class="w-10 h-10  text-white  mb-4">
                                {skill.icon}
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{skill.name}</h2>
                            <p class="leading-relaxed text-base">{skill.text}</p>
                        </div>
                    </div>
                )}

            </div>

            <svg className="opacity-25 md:w-[530px] w-[350px] h-[129px] absolute right-0 top-[800px]">
                <ellipse cx="80%" cy="35%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="80%" cy="42%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="80%" cy="50%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="80%" cy="58%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="80%" cy="63%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="80%" cy="65%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
            </svg>


            <div className="md:max-w-[1800px]  h-px bg-white mx-auto mt-28 mb-8" />
        </div>
    );

}

export default Skills;