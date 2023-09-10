import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import Contact from '../contactme/contact';

const Footer = () => {



  return (
    <footer className='w-full mt-8 relative'>

      <div className='flex flex-col md:flex-row justify-between items-center md:items-start md:max-w-[80%] mx-4 md:mx-auto'>
        <div className='content flex flex-col md:justify-start justify-between items-center flex-wrap md:w-[40%]'>
        <div className='block text-white text-2xl md:text-5xl font-bold leading-10 md:pb-4 p-2  border-b-4 border-violet-800 md:w-[400px] w-[200px] md:text-left text-center mx-auto md:mx-2'>Contact me</div>
          <p className='my-8 w-[60%]'>I would like to hear about your project and how I could help you. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <Contact />


      </div>


      <svg className="opacity-25 md:w-[530px] w-[350px] h-[129px] absolute left-0 bottom-[10px]">
        <ellipse cx="15%" cy="35%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
        <ellipse cx="15%" cy="42%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
        <ellipse cx="15%" cy="50%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
        <ellipse cx="15%" cy="58%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
        <ellipse cx="15%" cy="63%" rx="48%" ry="35%" fill="none" stroke="white" strokeWidth="1" />
      </svg>



      <div className="md:max-w-[1600px] h-px bg-white mx-auto mt-28 mb-8" />


      <nav className='flex flex-wrap justify-between items-center py-5 md:max-w-[1600px] mx-auto'>
        <h1 className='text-white font-signature text-4xl py-2'>Peter Rezeik</h1>
        <div className='icons flex justify-between mx-4'>
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