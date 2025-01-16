import React from "react";
import './Certification.css'
import theme_pattern from "../../assets/theme_pattern.svg"

const Certification = () => {
    return(
        <div id="certificate" className="certificate">
            <h1>My Achievements</h1>
            <img src={theme_pattern} alt="" />
            <div className="timeline">
                <div className="container left-container">
                    <img src="https://cdn.dribbble.com/users/2410782/screenshots/8192199/media/a152b89721e1b17597aff54afbdef152.jpg?compress=1&resize=1600x1200&vertical=top" alt="" />
                    <div className="text-box">
                        <h2>HacktoberFest contributor</h2>
                        <small>2024</small>
                        <p>Participated in HacktoberFest 2024 Open Source contribution which was conducted in the month of October 1-30, i contribute to open source and created 4 Merge Request succesfully and completed the target.</p>
                        <a className="view-button" href="https://www.holopin.io/@ravichandrals507#badges" target="_blank" rel="noopener noreferrer">View</a>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="container right-container">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" alt="" />
                    <div className="text-box">
                        <h2>Problem Soving (Basic)</h2>
                        <small>2025</small>
                        <p>Gained a Certificate in Problem Solving Basic Java(DSA) in HackerRank.</p>
                        <span className="right-container-arrow"></span>
                        <a className="view-button" href="https://www.hackerrank.com/certificates/4718d83138a7" target="_blank" rel="noopener noreferrer">View</a>
                    </div>
                </div>

                <div className="container left-container">
                <img src="https://static.vecteezy.com/system/resources/previews/018/779/928/original/3d-illustration-of-amazon-logo-free-png.png" alt="" />
                    <div className="text-box">
                        <h2>Research Paper present</h2>
                        <small>2024</small>
                        <p>A Model to detect Breast cancer</p>
                        <span className="left-container-arrow"></span>
                        <a className="view-button" href="#" target="_blank" rel="noopener noreferrer">View</a>
                    </div>
                </div>

                <div className="container right-container">
                <img src="https://tse2.mm.bing.net/th?id=OIP.GX2bulWXKWnH05DT0SWfDwHaHa&pid=Api&P=0&h=180" alt="" />
                    <div className="text-box">
                    <h2>CodSoft Internship</h2>
                        <small>July-August 2024</small>
                        <p>Did an Internship at CodSoft which was 4 weeks created a responsive design portfolio.</p>
                        <span className="right-container-arrow"></span>
                        <a className="view-button" href="#" target="_blank" rel="noopener noreferrer">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certification