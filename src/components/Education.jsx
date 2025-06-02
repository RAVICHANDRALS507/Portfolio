import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import edu from "../assets/edu.jpg"; // <-- Make sure this file exists in your assets folder

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#18181b] text-white">
      <div className="max-w-6xl mx-auto px-6">
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
            Education
          </h1>
        </div>

        {/* Timeline Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col border-l-2 border-gray-400 pl-8 space-y-10">
            {/* Box 1 */}
            <div className="relative bg-[#232526] rounded-xl p-6 shadow-md transition hover:shadow-xl">
              <div className="absolute left-[-8px] top-6 w-4 h-4 bg-green-600 border-2 border-white rounded-full"></div>
              <h4 className="text-green-500 text-lg md:text-xl font-semibold">
                2023 - 2025
              </h4>
              <h3 className="text-white text-xl md:text-2xl font-bold mt-2">
                Master's Degree
              </h3>
              <p className="mb-4 text-gray-300">
                Pursuing Masters of Computer Application (MCA) from Presidency
                University Bangalore.
              </p>
            </div>

            {/* Box 2 */}
            <div className="relative bg-[#232526] rounded-xl p-6 shadow-md transition hover:shadow-xl">
              <div className="absolute left-[-8px] top-6 w-4 h-4 bg-green-600 border-2 border-white rounded-full"></div>
              <h4 className="text-green-500 text-lg md:text-xl font-semibold">
                2020 - 2023
              </h4>
              <h3 className="text-white text-xl md:text-2xl font-bold mt-2">
                Bachelor's Degree
              </h3>
              <p className="mb-4 text-gray-300">
                Completed my Bachelor's of Computer Application from NIE First
                Grade College Mysuru.
              </p>
            </div>

            {/* Box 3 */}
            <div className="relative bg-[#232526] rounded-xl p-6 shadow-md transition hover:shadow-xl">
              <div className="absolute left-[-8px] top-6 w-4 h-4 bg-green-600 border-2 border-white rounded-full"></div>
              <h4 className="text-green-500 text-lg md:text-xl font-semibold">
                2018 - 2020
              </h4>
              <h3 className="text-white text-xl md:text-2xl font-bold mt-2">
                12th School
              </h3>
              <p className="mb-4 text-gray-300">
                Completed my 12th from Sarada Vilas PU college in field of
                Commerce with the combination of Computer Science.
              </p>
            </div>
          </div>

          {/* Right Column - Image only on desktop */}
          <div className="hidden md:flex items-center justify-center bg-[#232526] rounded-xl p-6 shadow-md">
            <img
              src={edu}
              alt="Education Illustration"
              className="w-80 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
