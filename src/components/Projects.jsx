import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import Projects_Data from "../assets/projects_data";
import arrow_icon from "../assets/arrow_icon.svg";

const Projects = () => {
  return (
    <section id="project" className="py-20 bg-dark text-white font-outfit">
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
            My Projects
          </h1>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {Projects_Data.map((project, index) => (
            <div
              key={index}
              className="bg-secondary rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                {project.p_no}
              </h3>
              <h2 className="text-2xl font-semibold mb-2">
                {project.p_name}
              </h2>
              <p className="mb-4 text-gray-300">{project.p_desc}</p>
              <div className="flex items-center gap-2 text-purple-400 cursor-pointer hover:underline">
                <a
                  href={project.p_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Read More</span>
                  <img src={arrow_icon} alt="" className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
