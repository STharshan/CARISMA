"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-[#0D0D0D] text-white py-20 px-6 md:px-16 font-inter" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Left: Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-[0_0_30px_#E1912F40]">
          <img
            src="/image.png"
            alt="Fitness training"
            className="rounded-2xl w-full object-cover h-[420px] md:h-[500px] transform group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <p className="uppercase text-orange-500 text-sm tracking-[4px]">
            Our Story
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
            Our Fitness Evolution
          </h2>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            our journey began
            with a simple vision — to create a space where people of all fitness levels could come
            together to transform their lives through exercise and community support. We are inspired
            by our members’ dedication, progress, and achievements.
          </p>

          <p className="text-gray-300 leading-relaxed text-[15px]">
            we’ve grown from a small local gym into a thriving fitness hub,
            dedicated to helping our members achieve their personal health and wellness goals.
          </p>

          {/* <div>
            <p className="font-semibold text-gray-400 text-sm">
              Founder of Musclen
            </p>
            <p className="font-bold text-white text-lg tracking-wide">
              Marvin McKinney
            </p>
          </div> */}

          {/* Buttons & Badge */}
          <div className="flex items-end justify-between flex-wrap mt-8">
            {/* Button */}
            <button
              className="inline-flex items-center justify-center rounded-full
                         border border-white/15 bg-[#141414]
                         px-5 py-2 text-sm font-medium text-white
                         hover:border-orange-500 hover:bg-[#1a1a1a]
                         transition-colors duration-200"
            >
              About us
            </button>

            {/* Square Badge */}
            <div
              className="bg-orange-500 text-white
                         w-28 h-24 md:w-32 md:h-28
                         rounded-lg shadow-[0_8px_24px_rgba(225,145,47,0.35)]
                         flex flex-col items-center justify-center
                         mt-6 md:mt-0"
            >
              <h3 className="text-3xl font-extrabold leading-none">24+</h3>
              <p className="text-[10px] md:text-xs leading-tight text-center mt-1">
                Worldwide <br /> Fitness Center
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
