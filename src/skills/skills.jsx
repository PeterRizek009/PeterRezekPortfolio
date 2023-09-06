import React from 'react';



const Skills = () => {

    const skills = [
        {
            name: 'HTML',
            experience: 2

        },
        {
            name: 'CSS',
            experience: 2,

        },
        {
            name: 'Bootstrap',
            experience: 2
        },
        {
            name: 'TailwindCSS',
            experience: 2
        },
        {
            name: 'Figma ',
            experience: 2
        },
        {
            name: 'JavaScript',
            experience: 2

        },
        {
            name: 'TypeScript'

        },
        {
            name: 'React'
        },
        {
            name: 'Redux'
        },
        {
            name: 'Next JS'
        },
        {
            name: 'Git & Github'
        },
    ]
    return (
        <div className='md:max-w-[1200px]  mx-auto py-4'>
            <div className='block text-white text-2xl md:text-5xl font-bold leading-10 md:pb-4 p-2  border-b-4 border-violet-800 md:w-[400px] w-[200px] mx-auto md:mx-2'>Technical Skills</div>
            <div className='flex w-full justify-between items-center flex-wrap'>
                {skills.map((el) =>
                    <div className="skill md:w-80 w-[140px] mx-2 h-auto mt-8 py-8 flex-col justify-center md:items-start items-center  md:gap-3.5" key={el.name}>
                        <div className="text-white text-2xl md:text-5xl font-bold leading-10">{el.name}</div>
                        <div className="md:w-80 w-[140px] text-zinc-300 text-md font-medium leading-7">2 Years Experience</div>
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