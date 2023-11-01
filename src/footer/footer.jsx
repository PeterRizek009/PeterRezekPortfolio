import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs'


const Footer = () => {


  return (
    <footer className='w-full mt-8 relative bg-gray-200'>

      <svg className="opacity-25 md:w-[530px] w-[350px] h-[129px] absolute left-0 bottom-[30px]">
        <ellipse cx="15%" cy="35%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
        <ellipse cx="15%" cy="42%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
        <ellipse cx="15%" cy="50%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
        <ellipse cx="15%" cy="58%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
        <ellipse cx="15%" cy="63%" rx="48%" ry="35%" fill="none" stroke="gray" strokeWidth="1" />
      </svg>



      <div className="md:max-w-[1600px] h-px bg-white mx-auto mt-28 mb-8" />


      {/* <nav className='flex flex-wrap justify-between items-center py-5 md:max-w-[1600px] mx-auto'>
        <h1 className='text-white font-signature text-4xl py-2'>Peter Rezeik</h1>
        <div className='icons flex justify-between mx-4'>
          <a className='cursor-pointer mx-4' href='https://github.com/PeterRizek009'>
            <BsGithub size={32} className='hover:text-violet-800' />
          </a>
          <a className='cursor-pointer mx-2' href='https://www.linkedin.com/in/peter-rezik-a84408123/'>
            <BsLinkedin size={32} className='hover:text-violet-800' />
          </a>
        </div> */}


      <div className="bg-gray-200">

        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
 
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-violet-800 rounded-full" viewBox="0 0 24 24">
              <path d="M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5Z" />
            </svg>
            <span className="ml-3 text-xl text-voi">Peter Rezeik</span>
          </a>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className='cursor-pointer mx-4' href='https://github.com/PeterRizek009'>
              <BsGithub size={22} className='hover:text-violet-800' />
            </a>
            <a className='cursor-pointer mx-2' href='https://www.linkedin.com/in/peter-rezik-a84408123/'>
              <BsLinkedin size={22} className='hover:text-violet-800' />
            </a>
          </span>
        </div>
      </div>

    </footer>

  );
}

export default Footer;