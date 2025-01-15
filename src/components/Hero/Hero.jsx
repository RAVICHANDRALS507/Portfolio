import React from "react";
import "./Hero.css";
// import Picture from "../../assets/Picture.jpg";
import Picture from "../../assets/im.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={Picture} alt="" />
      <h1>
        <span>
          I'm <br />
          Ravichandra LS,
        </span>{" "}
        <br />
        frontend developer from <br /> India
      </h1>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
        <div className="image"></div>
      </div>
      {/* <img src="image.png" alt="" /> */}
    </div>
    
  );
};

export default Hero;
