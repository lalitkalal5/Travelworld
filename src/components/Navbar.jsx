import React from "react";
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
            alt="Travel Logo"
            className="h-12 w-12 rounded-full mr-4"
          />
          <Link to="/" className="text-white font-extrabold text-4xl tracking-wide hover:text-gray-200 transition-colors duration-200">
            Travel World
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6 font-50px">
          <li>
            <Link
              to="/"
              className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
