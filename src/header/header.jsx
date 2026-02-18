import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const HeaderCard = () => {
  return (
    <section className="flex justify-center px-6 py-12">

      {/* CARD CONTAINER */}
      <div className="relative w-full max-w-[1300px] rounded-2xl bg-white shadow-xl overflow-hidden">

        {/* RIGHT GRADIENT SHAPE */}
        <div className="absolute right-0 top-0 h-full w-[40%]">

          {/* gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500 to-purple-500" />

          {/* curve */}
          <div className="absolute left-[-160px] top-0 h-full w-[420px] bg-white rounded-r-[240px]" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 p-14">

          {/* NAV */}
          <div className="flex justify-between items-center mb-20">

            <p className="font-semibold text-gray-800 tracking-wide">
              Peter Rezik
            </p>

            <div className="flex gap-6 text-gray-700">

              <BsGithub
                size={26}
                className="cursor-pointer hover:text-indigo-600 transition"
              />

              <BsLinkedin
                size={26}
                className="cursor-pointer hover:text-indigo-600 transition"
              />

            </div>
          </div>

          {/* HERO */}
          <div className="max-w-[540px]">

            <p className="text-sm tracking-[0.25em] text-indigo-600 font-semibold mb-6">
              IT SOLUTIONS SPECIALIST
            </p>

            <h1 className="text-[44px] md:text-[60px] font-bold leading-tight text-gray-900">
              Helping Businesses <br />
              <span className="text-indigo-600">Grow with Technology</span>
            </h1>

            <p className="mt-7 text-gray-600 leading-relaxed text-lg">
              I build reliable digital systems, business websites, and IT
              solutions that improve efficiency, reduce downtime, and help
              companies scale with confidence.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-12">

              <button className="px-7 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition">
                View Projects
              </button>

              <button className="px-7 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                Contact Me
              </button>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeaderCard;
