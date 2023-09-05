import React from 'react';


const Header = () => {
    return (

        <div className='header md:max-w-[1200px] lg:max-w-[1600px]  mx-auto'>


            <svg className="opacity-25 md:w-[530px] w-[350px] h-[129px] absolute left-0 top-[150px]">
                <ellipse cx="15%" cy="35%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="15%" cy="42%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="15%" cy="50%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="15%" cy="58%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="15%" cy="63%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
            </svg>


            <div className="w-auto h-auto my-10 flex flex-col flex-wrap justify-between md:items-start items-center gap-[20px]">
                <div className="w-[400px]  md:w-auto  text-white md:text-[80px] text-[40px] font-bold">Nice to meet you! <br />I’m <span className='border-b-4 border-violet-800'>Peter Rezeik.</span> </div>
                <p className="md:w-[800px] w-[320px]  h-auto text-zinc-300 text-lg font-medium leading-7 my-10">With extensive programming experience since age 9, I've cultivated a fervent passion for machine learning. Committed to continuous learning, I aspire to leverage my competencies in this field to eventually build my career.</p>
            

            </div>

            <div className='md:block hidden'>
                <div className="Oval absolute top-44 left-[50%] w-32 h-32 rounded-full border border-white" />
                <div className="Rectangle1  md:absolute top-56 left-[80%] w-32 h-32 bg-zinc-300 bg-opacity-0 border border-zinc-300" />
            </div>

            <div className="md:max-w-[1800px] h-px bg-white mx-auto mt-28 mb-8" />
        </div>
    );
}

export default Header;