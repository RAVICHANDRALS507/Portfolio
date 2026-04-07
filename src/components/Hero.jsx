import React from "react";
import Picture from "../assets/Profileimg.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] md:min-h-screen px-6 py-4 md:py-0 bg-gradient-to-b from-[#161513] to-[#232526] text-center md:text-left gap-0 md:gap-12"
    >
      {/* Right Section - Image */}
      <div
        // --- UPDATED: Increased mt-8 to mt-16 for extra mobile top margin ---
        className="flex justify-center mt-16 md:mt-0 order-1 md:order-2 md:-ml-8"
        data-aos="fade-right"
      >
        {/* Gradient Border Wrapper */}
        <div className="p-1 md:p-1.5 rounded-full md:rounded-[80px] bg-gradient-to-tr from-yellow-400 via-purple-400 to-pink-500 shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-transform duration-300 hover:scale-105">
          <img
            src={Picture}
            alt="Ravichandra"
            className="w-56 sm:w-64 md:w-[350px] lg:w-[400px] aspect-square rounded-full md:rounded-[80px] object-cover object-top border-4 border-[#1b1a18]"
          />
        </div>
      </div>

      {/* Left Section - Text + Buttons */}
      <div
        className="mt-6 mb-0 flex flex-col items-center md:items-start md:flex-1 order-2 md:order-1 md:ml-28"
        data-aos="fade-left"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          <TypeAnimation
            sequence={[
              "I'm Ravichandra L S,", 500,
              "", 1000,
              "I'm Ravichandra L S,", 500,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent inline-block"
          />
          <br />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-2 mt-2">
            Full-Stack Developer from India
          </h2>
        </h1>

        {/* Mobile view: single line with pipes */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 block md:hidden mt-2">
          Ex Intern @ Nexinbe | HacktoberFest 2024 | Presidency University Bangalore MCA 2025
        </p>

        {/* Desktop view: stacked vertically */}
        <div className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 mt-4 hidden md:flex md:flex-col md:items-start md:space-y-2">
          <span>Ex Intern @ Nexinbe</span>
          <span>HacktoberFest 2024</span>
          <span>Presidency University Bangalore MCA 2025</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 w-full md:w-auto mt-6 mb-0">
          <AnchorLink
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-yellow-400 to-purple-500 hover:scale-105 transition w-full md:w-auto text-center"
            offset={50}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>

          <a
            className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:border-purple-500 transition w-full md:w-auto text-center"
            href="https://drive.google.com/file/d/1ubMw5CLLKZocI_oCp0_jq1u-nHP4e06C/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;