import React,{useContext, useState} from 'react';
import { MyContext } from '../context/store';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-blue-900 px-[5%]">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center py-3">
        {/* Logo / Brand Name */}
        <Link to="/" className="text-white font-bold text-lg uppercase">
          GIIT Education Institute
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-white font-medium uppercase">Home</Link>
          <Link to="/about" className="text-white font-medium uppercase">About</Link>
          <Link to="/course-list" className="text-white font-medium uppercase">Courses</Link>
          <Link to="/media" className="text-white font-medium uppercase">Gallery</Link>
          <Link to="/contact" className="text-white font-medium uppercase">Contact</Link>
          <Link to={import.meta.env.VITE_BACKEND_URL+'/admin'} className="text-white font-medium uppercase">Admin Login</Link>
         
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 py-4 flex flex-col items-center gap-4">
          <Link to="/" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-white text-lg" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/courses" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link to="/media" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Media</Link>
          <Link to="/contact" className="text-white text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
