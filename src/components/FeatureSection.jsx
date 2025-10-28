"use client";
import React, { useState, useEffect } from "react";
import { Dumbbell, Flame, Target, Users } from "lucide-react";

export default function FeatureSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const collapseDelay = 5000; // auto-switch interval (5s)

  // ✅ Gym features with online Unsplash images
  const data = [
    {
      id: 1,
      title: "Expert Coaches",
      content:
        "Certified pros who train smart and push hard – with you, not above you.",
      image:
        "/12.webp",
      icon: <Dumbbell className="text-orange-500 w-6 h-6" />,
    },
    {
      id: 2,
      title: "High Intensity Classes",
      content:
        "Sweat-dripping, heart-pounding workouts that keep you coming back.",
      image:
        "/i1.jpg",
      icon: <Flame className="text-orange-500 w-6 h-6" />,
    },
    {
      id: 3,
      title: "Goal Oriented Training",
      content: "Whether it’s weight loss or muscle gain, we train with a plan.",
      image:
        "/image.png",
      icon: <Target className="text-orange-500 w-6 h-6" />,
    },
    {
      id: 4,
      title: "Community That Pushes",
      content:
        "Effective routines tested in the real world — not just made for Instagram.",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop",
      icon: <Users className="text-orange-500 w-6 h-6" />,
    },
  ];

  // 🔁 Auto-scroll every few seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, collapseDelay);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16" id="classes">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🖼️ Left: Dynamic Image */}
        <div className="relative flex justify-center order-1 md:order-1">
          <img
            key={data[currentIndex].id}
            src={data[currentIndex].image}
            alt={data[currentIndex].title}
            className="rounded-xl w-full max-w-md h-[400px] object-cover border border-orange-500/40 shadow-[0_0_25px_#E1912F40] transition-all duration-700 ease-in-out"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
        </div>

        {/* 📋 Right: Feature List */}
        <div className="flex flex-col space-y-8 order-2 md:order-2">
          {data.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex items-start gap-5 p-5 rounded-xl cursor-pointer transition-all duration-500 ${
                currentIndex === index
                  ? "bg-orange-500/10 shadow-[0_0_15px_#E1912F50]"
                  : "bg-transparent"
              }`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/40 flex-shrink-0">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className={`text-lg md:text-xl font-semibold mb-1 transition-colors ${
                    currentIndex === index ? "text-orange-500" : "text-white"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">
                  {item.content}
                </p>
              </div>

              {/* Step Number */}
              <div className="hidden md:block text-2xl font-bold text-orange-500/40">
                {String(item.id).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
