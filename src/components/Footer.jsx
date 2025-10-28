"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              CARISMA Cambridge  
            </h2>
            <span className="text-orange-500 text-lg font-semibold">
              Riverside Martial Arts
            </span>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wide">
            <li>
              <a
                href="#about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#classes"
                className="hover:text-orange-500 transition-colors"
              >
                Classes
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-orange-500 transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#locations"
                className="hover:text-orange-500 transition-colors"
              >
                Locations
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        
        <div className="border-t border-[#1a1a1a] my-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} CARISMA Cambridge Riverside Martial Arts. All rights reserved.
          </p>
          <p className="text-center md:text-right mt-2 md:mt-0">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
