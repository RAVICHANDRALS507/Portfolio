import React from "react";
import Picture from "../assets/pic.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-12 md:py-20 bg-gradient-to-b from-[#161513] to-[#232526] text-center md:text-left gap-0 md:gap-12"
    >
      {/* Right Section - Image */}
            {/* Right Section - Image */}
            <div className="flex justify-center flex-1 order-1 md:order-2">
        <img
          src={Picture}
          alt="Ravichandra"
          className="w-full sm:w-5/6 md:w-[450px] h-48 sm:h-56 md:h-auto max-w-xs sm:max-w-sm md:max-w-none rounded-[100px] object-cover shadow-xl transition-all duration-300"
        />
      </div>

      {/* Left Section - Text + Buttons */}
      <div className="flex flex-col items-center md:items-start flex-1 order-2 md:order-1 md:ml-28">
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
          <span className=" md:text-2xl font-medium text-gray-300">
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
