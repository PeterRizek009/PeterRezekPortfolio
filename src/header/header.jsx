import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderCard = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f4f6fb] px-6">

      {/* CARD */}
      <div className="relative w-full max-w-[1300px] rounded-2xl bg-white shadow-2xl overflow-hidden mt-3">

        {/* RIGHT SHAPE */}
        <div className="absolute right-0 top-0 h-full w-[42%]">

          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-purple-600" />

          {/* curve cut */}
          <div className="absolute left-[-140px] top-0 h-full w-[350px] bg-white rounded-r-[220px]" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 p-14">

          {/* NAV */}
          <div className="flex justify-between items-center mb-16">

            <p className="font-semibold text-gray-800">Peter Rezik</p>

            <div className="flex gap-5 text-black">
              <BsGithub className="cursor-pointer hover:text-indigo-600" size={40}/>
              <BsLinkedin className="cursor-pointer hover:text-indigo-600" size={40}/>
            </div>

          </div>

          {/* HERO TEXT */}
          <div className="max-w-[520px]">

            <p className="text-sm tracking-widest text-indigo-600 font-semibold mb-5">
              IT SOLUTIONS SPECIALIST
            </p>

            <h1 className="text-[42px] md:text-[58px] font-bold leading-tight text-gray-900">
              Hello, my name is <br />
              <span className="text-indigo-600">Peter Rezik</span>
            </h1>

            <p className="mt-6 text-gray-600 leading-relaxed">
              I provide digital solutions for small and medium businesses,
              including IT administration, system setup, and website
              development — helping companies operate securely and efficiently.
            </p>

            <div className="flex gap-4 mt-10">

              <button className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow">
                Projects
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-md">
                LinkedIn
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default HeaderCard;
