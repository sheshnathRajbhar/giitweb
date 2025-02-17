import React from "react";
import logo from "../assets/logo.png";
import test from "../assets/test.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-blue-600 px-[5%] py-4 mt-auto">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Logo */}
        <img src={logo} className="w-[100px] sm:w-[120px]" alt="Logo" />

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <Link to="/home" className="text-white font-medium uppercase">Home</Link>
          <Link to="/courses" className="text-white font-medium uppercase">Courses</Link>
          <Link to="/media" className="text-white font-medium uppercase">Gallery</Link>
          <Link to="/media" className="text-white font-medium uppercase">GIIT News</Link>
          <Link to="/contact" className="text-white font-medium uppercase">Contact Us</Link>
          <Link to="/media" className="text-white font-medium uppercase">Online Test</Link>
        </div>

        {/* Right Logo */}
        <img src={test} className="w-[60px] sm:w-[120px] rounded-full cursor-pointer" alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;
