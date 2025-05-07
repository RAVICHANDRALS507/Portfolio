import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import underline from "../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", key: "home" },
    { label: "About Me", href: "#about", key: "about" },
    { label: "Projects", href: "#project", key: "project" },
    { label: "Education", href: "#education", key: "education" },
    { label: "Certificate", href: "#certificate", key: "certificate" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#161212] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
      <span className="text-white text-2xl font-bold">Hello!👋</span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.key}
              className="relative cursor-pointer flex flex-col items-center"
            >
              <AnchorLink
                href={link.href}
                offset={50}
                onClick={() => setMenu(link.key)}
                className={`${
                  menu === link.key ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400`}
              >
                {link.label}
              </AnchorLink>
              {menu === link.key && (
                <img
                  src={underline}
                  alt="underline"
                  className="absolute -bottom-2 w-full h-1"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <AnchorLink
            className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white"
            offset={50}
            href="#contact"
          >
            Connect With Me
          </AnchorLink>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <img
            src={mobileOpen ? menu_close : menu_open}
            alt="menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#1F0016] transition-all duration-500 z-50 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ transform: mobileOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMobileOpen(false)}>
            <img src={menu_close} alt="close" className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 text-white text-xl pl-8">
          {navLinks.map((link) => (
            <li
              key={link.key}
              onClick={() => {
                setMenu(link.key);
                setMobileOpen(false);
              }}
              className="cursor-pointer"
            >
              <AnchorLink href={link.href} offset={50}>
                {link.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
        <div className="mt-8 pl-8">
          <AnchorLink
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white"
            offset={50}
            href="#contact"
            onClick={() => setMobileOpen(false)}
          >
            Connect With Me
          </AnchorLink>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
