import React from "react";
import StackedCards from "./StackedCards";

export default function HeaderHero() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      
      {/* ================= NAVBAR ================= */}
      <div className="flex justify-center pt-6">
        <div className="flex items-center gap-6 bg-white shadow-md rounded-full px-6 py-3">
          
          {/* Profile */}
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">Joseph Alexander</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex gap-6 text-gray-600">
            <a href="#">Work</a>
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>

          {/* Button */}
          <button className="bg-gray-100 px-4 py-2 rounded-full font-medium hover:bg-gray-200">
            Contact
          </button>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center  mb-10">
        
        {/* LEFT */}
        <div className="space-y-6">
          
          {/* Available badge */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full w-fit shadow">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm text-gray-600">
              Available for August'25
            </span>
          </div>

          {/* Title */}
          <h1 className="text-6xl font-bold leading-tight">
            <span className="text-gray-400">Design that</span> <br />
            delivers results.
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-md">
            Strategic design that drives growth, not just looks good. I create
            everything your brand needs to attract customers and turn them into sales.
          </p>

          {/* Button */}
          <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition">
            <img
              src="https://i.pravatar.cc/30"
              className="w-6 h-6 rounded-full"
            />
            Book a call with me
          </button>
        </div>

        {/* RIGHT (Mock Cards) */}
        <div className="relative w-full h-[400px]">
       <StackedCards />
        </div>

      </div>
    </div>
  );
}