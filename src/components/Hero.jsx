import React from "react";
import Picture from "../assets/pic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-20 bg-gradient-to-b from-[#161513] to-[#232526] text-center md:text-left gap-12"
    >
      {/* Right Section - Image */}
      <div className="flex justify-center flex-1 order-1 md:order-2">
        <img
          src={Picture}
          alt="Ravichandra"
          className="w-4/5 sm:w-3/4 md:w-[400px] max-w-xs sm:max-w-sm md:max-w-none rounded-[100px] object-cover shadow-xl transition-all duration-300"
        />
      </div>

      {/* Left Section - Text + Buttons */}
      <div className="flex flex-col items-center md:items-start justify-center flex-1 gap-6 order-2 md:order-1 md:ml-28">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          <TypeAnimation
            sequence={[
              "I'm Ravichandra L S,", 500,  // Delay after typing before clearing
              "",
              1000,                        // Delay before restarting the sequence
              "I'm Ravichandra L S,", 500,  // Repeat delay
            ]}
            wrapper="span"
            speed={30}                     // Slower typing speed
            repeat={Infinity}              // Infinite loop
            className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-500 bg-clip-text text-transparent inline-block"
          />
          <br />
          <span className="text-lg md:text-2xl font-medium text-gray-300">
            Frontend Developer from India
          </span>
        </h1>

        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 w-full md:w-auto mt-4">
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
