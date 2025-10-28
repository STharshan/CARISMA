"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    src: "/i3.png",
    //title: "HIIT RUSH",
  },
  {
    src: "/i4.png",
    //title: "COMBATLINE",
  },
  {
    src: "/image.png",
    //title: "POWERLIFT",
  },
  {
    src: "/i1.jpg",
    //title: "ZEN FLOW",
  },
];

export default function ChooseYourChallenge() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    // Toggle card if clicked again
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12" id="pricing">
      {/* Heading Section */}
      <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row md:justify-between md:items-end">
        <div>
          <p className="uppercase text-orange-500 text-sm tracking-[4px] mb-1">
            Classes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-none">
            Choose Your Challenge
          </h2>
        </div>
        <div className="md:max-w-md mt-4 md:mt-0">
          <p className="text-gray-400 text-[18px] leading-snug">
            From sweat-dripping cardio to raw strength and technique — pick your
            grind and go all in.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {cards.map((card, i) => {
          const isActive = activeIndex === i;

          return (
            <motion.div
              key={i}
              className="relative group overflow-hidden rounded-2xl bg-[#111] border border-orange-500/30 hover:border-orange-500/60 transition-all duration-500 shadow-[0_0_15px_#E1912F20] cursor-pointer"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 35px rgba(225,145,47,0.3)",
              }}
              onClick={() => handleCardClick(i)}
            >
              {/* Image */}
              <img
                src={card.src}
                alt={card.title}
                className={`w-full h-[340px] object-cover transition-transform duration-700 ease-in-out ${
                  isActive ? "scale-110" : "group-hover:scale-110"
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black/70 transition-all duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              ></div>

              {/* Title + Button */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center text-center transition-all duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <h3 className="text-2xl font-bold mb-4 tracking-wide">
                  {card.title}
                </h3>
                <button className="bg-orange-500 hover:bg-orange-700 text-black text-sm font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
