import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Projects_Data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id="project" className="projects">
  {/* Title Section */}
  <div className="projects-title">
    <h1>My Projects</h1>
    <img src={theme_pattern} alt="Theme Pattern" />
  </div>

  {/* Projects Container */}
  <div className="projects-container">
    {Projects_Data.map((project, index) => (
      <a 
        key={index} 
        href={project.p_link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="projects-link"
      >
        <div className="projects-format">
          <h3>{project.p_no}</h3>
          <h2>{project.p_name}</h2>
          <p>{project.p_desc}</p>
          <div className="projects-readmore">
            <p>View More</p>
            <img src={arrow_icon} alt="Arrow Icon" />
          </div>
        </div>
      </a>
    ))}
  </div>
</div>

  )
}

export default Projects
