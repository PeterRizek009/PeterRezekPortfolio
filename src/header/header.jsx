import React from 'react';


const Header = () => {
    return (

        <div className='header md:max-w-[80%] md:min-h-[700px] mx-auto'>


            <svg className="opacity-25 md:w-[530px] w-[350px] h-[129px] absolute left-0 top-[150px]">
                <ellipse cx="15%" cy="35%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="15%" cy="42%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="15%" cy="50%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="15%" cy="58%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
                <ellipse cx="15%" cy="63%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
            </svg>


            <div className="w-auto h-auto my-10 flex flex-col flex-wrap justify-between md:items-start items-center gap-[20px] mx-auto">
                <div className="w-[300px]  md:w-auto  text-white md:text-[80px] text-[40px] font-bold">Nice to meet you! <br />I’m <span className='border-b-4 border-violet-800'>Peter Rezeik.</span> </div>
                <p className="md:w-[800px] w-[300px]  h-auto text-zinc-300 text-lg font-medium leading-7 my-10">I'm a passionate front-end developer dedicated to creating visually stunning and user-friendly websites and with strong experience in turning designs into websites. With a strong foundation in HTML, CSS, and JavaScript, React JS, I blend creativity with technical expertise to craft engaging digital experiences that leave a lasting impression.</p>
            

            </div>

            <div className='md:block hidden'>
                <div className="Oval absolute top-44 left-[50%] w-32 h-32 rounded-full border border-white" />
                <div className="Rectangle1  md:absolute top-56 left-[80%] w-32 h-32 bg-zinc-300 bg-opacity-0 border border-zinc-300" />
            </div>

            <div className="md:max-w-[1800px] h-[2px] bg-violet-800 mx-auto mt-28" />
        </div>
    );
}

export default Header;