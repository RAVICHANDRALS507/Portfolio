import React from "react";
import mail_icon from '../assets/gmail.png';
import call_icon from '../assets/call.png';
import location_icon from '../assets/location.png';

const Footer = () => {
  return (
    <footer className="footer water-wave bg-[#161513] text-gray-400 pt-9 pb-10 relative">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 z-10 relative">
        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-lg">
          <div className="flex items-center gap-4">
            <img src={mail_icon} alt="Gmail" className="w-6 h-6" />
            <span>cravi7715@gmil.com</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={call_icon} alt="Call" className="w-6 h-6" />
            <span>+91 7892968904</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={location_icon} alt="Location" className="w-6 h-8" />
            <span>Bangalore, Karnataka</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Ravichandra LS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
