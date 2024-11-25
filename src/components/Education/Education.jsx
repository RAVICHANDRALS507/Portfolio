import React from "react";
import './Education.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme_pattern from "../../assets/theme_pattern.svg";

 const Education = () =>{
    return(
        <div id="education" className="education">
            <div className="education-title">
            <h1>Education</h1>
            <img src={theme_pattern} alt="" />
            </div>
            <section class="col">
			
			{/* <header class="title">
				<h2>EDUCATION</h2>
			</header> */}

			<div class="contents">
				<div class="box">
					<h4>2023 - Present</h4>
					<h3>Master's Degree</h3>
					<p>Persuing Masters of Computer Application(MCA) from Presidency University Bangalore.</p>
				</div>

				<div class="box">
					<h4>2020 - 2023</h4>
					<h3>Bachelor's Degree</h3>
					<p>Completed my Bachelor's of Computer Application from NIE first Grade College Mysuru.</p>
				</div>

				<div class="box">
					<h4>2018 - 2020</h4>
					<h3>12th School</h3>
					<p>Completed my 12th from Sarada Vilas PU college in field of Commerece with the combination of Computer Science</p>
				</div>

			</div>
		</section>
        </div>
    )
 }
export default Education