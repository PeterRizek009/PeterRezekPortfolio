import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-20 relative">

      {/* Background SVG shape */}
      <svg className="opacity-10 md:w-[500px] w-[320px] h-[130px] absolute left-0 bottom-[20px]">
        <ellipse cx="20%" cy="50%" rx="45%" ry="30%" fill="none" stroke="gray" strokeWidth="1" />
        <ellipse cx="20%" cy="55%" rx="45%" ry="30%" fill="none" stroke="gray" strokeWidth="1" />
        <ellipse cx="20%" cy="60%" rx="45%" ry="30%" fill="none" stroke="gray" strokeWidth="1" />
      </svg>

      {/* Top divider */}
      <div className="max-w-[1600px] h-[2px] bg-gray-300 mx-auto mb-10" />

      {/* Footer Content */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">

          {/* Logo + Name */}
          <a href="/" className="flex items-center gap-2 text-gray-900 font-semibold text-lg">
            <div className="w-10 h-10 rounded-full bg-violet-700 flex items-center justify-center text-white text-xl shadow-md">
              P
            </div>
            <span className="text-xl font-bold">Peter Rezeik</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a
              href="https://github.com/PeterRizek009"
              className="text-gray-700 hover:text-violet-700 transition"
            >
              <BsGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/peter-rezik-a84408123/"
              className="text-gray-700 hover:text-violet-700 transition"
            >
              <BsLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Bottom small text */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Peter Rezeik — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
