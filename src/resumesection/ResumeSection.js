import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const ResumeSection = () => {
  return (
    <div className="md:max-w-[80%] mx-auto mt-8">
      <div className="title">Download Resume</div>

      <p className="text-gray-300 my-8">
        Want to know more about my experience and skills?  
        You can preview or download my resume below 👇
      </p>

      {/* زرار يفتح في New Tab */}
      <a
        href="https://online.fliphtml5.com/tkhkt/koah/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-violet-700 text-white rounded-lg shadow-md hover:bg-violet-500 transition-all"
      >
        <AiOutlineDownload size={20} />
        View Resume
      </a>

      {/* Divider */}
      <div className="md:max-w-[1800px] h-[2px] bg-violet-800 mx-auto mt-16"></div>
    </div>
  );
};

export default ResumeSection;
