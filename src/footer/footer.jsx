import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Contact from '../contactme/contact';

const Footer = () => {
    return (
        <footer className='w-full mt-8 relative'>

            <div className='flex justify-between items-start md:max-w-[1200px] lg:max-w-[1600px]  mx-auto'>
                <div className='content flex flex-col justify-start flex-wrap md:w-[40%]'>
                    <h1 className='text-6xl font-bold uppercase py-6'>Contact me</h1>
                    <p className='my-8 w-[60%]'>I would like to hear about your project and how I could help you. Please fill in the form, and I’ll get back to you as soon as possible.</p>


                </div>
                <Contact/>


            </div>


            <svg className="opacity-25 md:w-[530px] w-[350px] h-[129px] absolute left-0 bottom-[10px]">
                <ellipse cx="15%" cy="35%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
                <ellipse cx="15%" cy="42%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
                <ellipse cx="15%" cy="50%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
                <ellipse cx="15%" cy="58%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
                <ellipse cx="15%" cy="63%" rx="48%" ry="35%" fill="none" stroke="white" stroke-width="1" />
            </svg>



        <div className="md:max-w-[1600px] h-px bg-white mx-auto mt-28 mb-8" />


            <nav className='flex flex-wrap justify-between items-center py-5 md:max-w-[1600px]  mx-auto'>
              <h1 className='text-white font-signature text-2xl py-2 md:mx-5 mx-1 tracking-widest'>PETER REZEIK</h1>
              <div className='icons flex justify-between'>
                <a className='cursor-pointer mx-4' href='https://github.com/PeterRizek009'>
                  <BsGithub size={32} className='hover:text-violet-800' />
                </a>
                <a className='cursor-pointer mx-2' href='https://www.linkedin.com/in/peter-rezik-a84408123/'>
                  <BsLinkedin size={32} className='hover:text-violet-800' />
                </a>
              </div>
            </nav>
        </footer>
    );
}

export default Footer;