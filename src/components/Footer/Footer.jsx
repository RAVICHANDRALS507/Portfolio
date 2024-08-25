import React from "react";
import "./Footer.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <hr />
          <div className="footer-links">
            <div className="footer-link">
              <img src={mail_icon} alt="" />
              <p>cravi7715@gmil.com</p>
            </div>

            <div className="footer-link">
              <img src={call_icon} alt="" />
              <p>+91 7892968904</p>
            </div>
            
            <div className="footer-link" cl>
              <img src={location_icon} alt="" />
              <p>Bangalore Karnataka</p>
            </div>
          </div>
          {/* 
                </div>
                 */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
