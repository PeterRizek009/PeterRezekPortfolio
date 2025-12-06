import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const ResumeSection = () => {
  return (
    <div className="md:max-w-[80%] mx-auto py-10">
      <div className="title">Download Resume</div>

      <p className="text-gray-300 my-8 mx-auto w-[90%] text-center">
        Want to know more about my experience and skills? You can preview or
        download my resume below 👇
      </p>

      {/* Center on mobile / Left on desktop */}
      <div className="flex justify-center md:justify-start">
        <a
          href="https://online.fliphtml5.com/tkhkt/koah/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-3 px-6 py-3 
            bg-gradient-to-r from-violet-600 to-purple-700 text-white 
            rounded-xl shadow-lg hover:scale-[1.03] transition-all duration-300 
            mx-auto md:mx-0
          "
        >
          <AiOutlineDownload size={20} />
          View Resume
        </a>
      </div>

      {/* Divider */}
      <div className="md:max-w-[1800px] h-[2px] bg-violet-800 mx-auto mt-16"></div>
    </div>
  );
};

export default ResumeSection;
