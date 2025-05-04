import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/profile_img.svg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#18181b] text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-10">
          <h1 className="text-3xl font-bold">About Me</h1>
          <img src={theme_pattern} alt="Theme Pattern" className="h-8" />
        </div>

        {/* Main content - Profile Image and Text */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-48 h-48">
            <img
              src={profile_img}
              alt="Profile"
              className="w-full h-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <p className="mb-2 text-lg">
                I am an experienced Frontend Developer with over a decade of
                professional expertise in the field. Throughout my career, I have
                had the privilege of collaborating with prestigious organizations,
                contributing to their success and growth.
              </p>
              <p className="text-lg">
                My passion for frontend development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication I
                bring to each project.
              </p>
            </div>

            {/* Skills Section */}
            <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
              <span className="bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full font-semibold">
                HTML & CSS
              </span>
              <span className="bg-purple-400/20 text-purple-300 px-4 py-2 rounded-full font-semibold">
                SQL
              </span>
              <span className="bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full font-semibold">
                React Js
              </span>
              <span className="bg-pink-400/20 text-pink-300 px-4 py-2 rounded-full font-semibold">
                DSA
              </span>
            </div>

            {/* Stats Section */}
            <div className="flex gap-10 justify-center md:justify-start">
              <div>
                <h2 className="text-2xl font-bold">4+</h2>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold">1.5+</h2>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
