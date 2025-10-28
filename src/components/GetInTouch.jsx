"use client";
import React from "react";

export default function GetInTouch() {
  return (
    <section className="bg-[#0B0B0B] py-20 px-6" id="locations">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Image (45%) */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <div className="relative w-full h-[200px] md:h-[220px] rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.6)] border border-[#1a1a1a]">
            <img
              src="/i3.webp"
              alt="Gym Interior"
              className="w-full h-full object-cover object-center rounded-2xl"
            />
          </div>
        </div>

        {/* Right Text (55%) */}
        <div className="w-full md:w-[55%] flex justify-center md:justify-start">
          <h2 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tight text-white leading-none">
            GET IN TOUCH
          </h2>
        </div>
      </div>
    </section>
  );
}
