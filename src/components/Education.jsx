import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#18181b] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="relative mb-16 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-center px-4">Education</h1>
          <img
            src={theme_pattern}
            alt=""
            className="absolute bottom-0 right-0 w-24 md:w-36 -z-10"
          />
        </div>

        {/* Timeline Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col border-l-2 border-gray-400 pl-8 space-y-10">
            {/* Box 1 */}
            <div className="relative bg-[#232526] rounded-xl p-6 shadow-md transition hover:shadow-xl">
              <div className="absolute -left-5 top-6 w-4 h-4 bg-green-600 border-2 border-white rounded-full"></div>
              <h4 className="text-green-500 text-lg md:text-xl font-semibold">2023 - Present</h4>
              <h3 className="text-white text-xl md:text-2xl font-bold mt-2">Master's Degree</h3>
              <p className="text-gray-300 mt-2 text-base md:text-lg leading-relaxed">
                Pursuing Masters of Computer Application (MCA) from Presidency University Bangalore.
              </p>
            </div>

            {/* Box 2 */}
            <div className="relative bg-[#232526] rounded-xl p-6 shadow-md transition hover:shadow-xl">
              <div className="absolute -left-5 top-6 w-4 h-4 bg-green-600 border-2 border-white rounded-full"></div>
              <h4 className="text-green-500 text-lg md:text-xl font-semibold">2020 - 2023</h4>
              <h3 className="text-white text-xl md:text-2xl font-bold mt-2">Bachelor's Degree</h3>
              <p className="text-gray-300 mt-2 text-base md:text-lg leading-relaxed">
                Completed my Bachelor's of Computer Application from NIE First Grade College Mysuru.
              </p>
            </div>

            {/* Box 3 */}
            <div className="relative bg-[#232526] rounded-xl p-6 shadow-md transition hover:shadow-xl">
              <div className="absolute -left-5 top-6 w-4 h-4 bg-green-600 border-2 border-white rounded-full"></div>
              <h4 className="text-green-500 text-lg md:text-xl font-semibold">2018 - 2020</h4>
              <h3 className="text-white text-xl md:text-2xl font-bold mt-2">12th School</h3>
              <p className="text-gray-300 mt-2 text-base md:text-lg leading-relaxed">
                Completed my 12th from Sarada Vilas PU college in field of Commerce with the combination of Computer Science.
              </p>
            </div>
          </div>

          {/* Optional Second Column or Timeline Extension */}
          <div className="hidden md:block">
            {/* You can add another column of timeline here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
