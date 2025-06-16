import React from "react";
import Picture from "../assets/pic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
  className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] md:min-h-screen px-6 py-4 md:py-0 bg-gradient-to-b from-[#161513] to-[#232526] text-center md:text-left gap-0 md:gap-12"
>
      {/* Right Section - Image */}
      <div className="flex justify-center mt-0 md:mt-0 order-1 md:order-2">
        <img
          src={Picture}
          alt="Ravichandra"
          className="w-full sm:w-5/6 md:w-[450px] h-30 sm:h-56 md:h-auto max-w-xs sm:max-w-sm md:max-w-none rounded-[100px] object-cover shadow-xl transition-all duration-300 md:-ml-16"
        />
      </div>

      {/* Left Section - Text + Buttons */}
      <div className="mt-4 mb-0 flex flex-col items-center md:items-start md:flex-1 order-2 md:order-1 md:ml-28">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          <TypeAnimation
            sequence={[
              "I'm Ravichandra L S,", 500,
              "",
              1000,
              "I'm Ravichandra L S,", 500,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent inline-block"
          />
          <br />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-2">
            Full-Stack Developer from India
          </h2>
        </h1>


        {/* Mobile view: single line with pipes */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 block md:hidden">
          Ex Intern @ Nexinbe | HacktoberFest 2024 | Presidency University Bangalore MCA 2025
        </p>

        {/* Desktop view: stacked vertically */}
        <div className="text-base sm:text-lg md:text-xl text-gray-400 mb-2 hidden md:flex md:flex-col md:items-start md:space-y-1">
          <span>Ex Intern @ Nexinbe</span>
          <span>HacktoberFest 2024</span>
          <span>Presidency University Bangalore MCA 2025</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 w-full md:w-auto mt-4 mb-0">
          <AnchorLink
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-yellow-400 to-purple-500 hover:scale-105 transition w-full md:w-auto text-center"
            offset={50}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>

          <a
            className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:border-purple-500 transition w-full md:w-auto text-center"
            href="https://drive.google.com/file/d/1Zo8eNPjZH_n2OUcfeO2AT3il4aliw_3t/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
