import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="py-5 bg-[#161513] text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title with theme pattern behind */}
        <div className="relative flex justify-start mb-10 items-center pl-1">
          <span className="absolute left-12 top-1/3 -translate-y-1/3 z-0 pointer-events-none">
            <img
              src={theme_pattern}
              alt="Theme Pattern"
              className="w-36 h-11 md:w-44 md:h-16 opacity-40"
              style={{ objectFit: "contain" }}
            />
          </span>
          <h1 className="text-3xl font-bold relative z-10 px-4 bg-transparent">
            About Me
          </h1>
        </div>

        {/* Main content - Profile Image and Text */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Profile Image - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block flex-shrink-0 w-44 h-44">
            <img
              src={profile_img}
              alt="Profile"
              className="w-full h-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <p className="text-justify">
                As a recent graduate in Computer Science and{" "}
                <span className="font-bold text-white-700">
                  a passionate software developer
                </span>
                , I am excited to begin my career in the industry. With a good
                foundation in programming, I am eager to
                <span className="font-bold text-white-700">
                  contribute my skills to an organization that values innovation
                </span>
                and teamwork.{" "}
                <span className="font-bold text-white-700">
                  During my academic career, I gained hands-on experience in
                  software development through various projects,
                </span>
                <span className="font-bold text-white-700">where I learned how to</span> write
                clean and efficient code, and
                <span className="font-bold text-white-700">troubleshoot technical issues</span>
                . In my <span className="font-bold text-white-700">free time</span>, I enjoy
                exploring <span className="font-bold text-white-700">new technologies</span>{" "}
                and programming languages. I am highly motivated and always
                eager to learn new skills and improve upon my existing ones. As
                a software developer, I am committed to creating high-quality
                solutions that meet user needs and improve overall efficiency. I
                look forward to contributing my skills and knowledge to an
                organization that values creativity, collaboration, and
                innovation.
              </p>
              <p className="text-lg">
                My passion for Development is not only reflected in my extensive
                experience but also in the enthusiasm and dedication I bring to
                each project.
              </p>
            </div>

            {/* Skills Section */}
            <div className="flex flex-wrap gap-4 mb-6 mt-8 md:mt-0 justify-center md:justify-start">
              <span className="bg-white-700/20 text-white-300 px-4 py-2 rounded-full font-semibold">
                Core Java
              </span>
              <span className="bg-purple-700/20 text-purple-300 px-4 py-2 rounded-full font-semibold">
                React.js Basics
              </span>
              <span className="bg-blue-700/20 text-blue-300 px-4 py-2 rounded-full font-semibold">
                Node.js Basics
              </span>
              <span className="bg-pink-700/20 text-pink-300 px-4 py-2 rounded-full font-semibold">
                MySQL
              </span>
              <span className="bg-pink-700/20 text-pink-300 px-4 py-2 rounded-full font-semibold">
                Data Structures & Algorithm
              </span>
              <span className="bg-pink-700/20 text-pink-300 px-4 py-2 rounded-full font-semibold">
                HTML & CSS
              </span>
              <span className="bg-pink-700/20 text-pink-300 px-4 py-2 rounded-full font-semibold">
                Computer Network
              </span>
              <span className="bg-pink-700/20 text-pink-300 px-4 py-2 rounded-full font-semibold">
                Operating System
              </span>
              <span className="bg-pink-700/20 text-pink-300 px-4 py-2 rounded-full font-semibold">
                OOPS
              </span>
            </div>

            {/* Stats Section - Larger text, right-aligned on desktop */}
            <div className="flex gap-10 justify-center md:justify-end mt-8 md:mt-0">
              <div className="text-center md:text-right">
                <h2 className="text-3xl md:text-4xl font-bold">4+</h2>
                <p className="text-gray-700 text-base md:text-lg">
                  Projects Completed
                </p>
              </div>
              <div className="text-center md:text-right">
                <h2 className="text-3xl md:text-4xl font-bold">1.5+</h2>
                <p className="text-gray-700 text-base md:text-lg">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
