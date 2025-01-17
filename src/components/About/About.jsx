import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          {/* <img src={profile_img} alt="" /> */}
          <img className="about-img" src="https://imgs.search.brave.com/YM0o-mpXaKXKjYyRmEaL-0hb5kZ7z2rgOHhNYfn6xBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNS9Sb2Jv/dC1QTkctSEQucG5n" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <p>SQL</p>
              <p>React Js</p>
              <p>DSA</p>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>4+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />

          <div className="about-achievement">
            <h1>1.5+</h1>
            <p>YEAR EXPERIECNE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
