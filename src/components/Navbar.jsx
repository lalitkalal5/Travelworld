import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
            alt="Travel Logo"
            className="h-12 w-12 rounded-full mr-4"
          />
          <Link
            to="/"
            className="text-white font-extrabold text-4xl tracking-wide hover:text-gray-200 transition-colors duration-200"
          >
            Travel World
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white font-bold hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/Lic"
            className="text-white font-bold hover:text-gray-200 transition-colors duration-200"
          >
            Lic-Services
          </Link>
          <Link
            to="/Contact"
            className="text-white font-bold hover:text-gray-200 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/About"
            className="text-white font-bold hover:text-gray-200 transition-colors duration-200"
          >
            About Us
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white shadow-md">
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link
              to="/"
              className="w-full text-center text-white font-bold hover:text-gray-200 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/Lic"
              className="w-full text-center text-white font-bold hover:text-gray-200 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Lic-Services
            </Link>
            <Link
              to="/Contact"
              className="w-full text-center text-white font-bold hover:text-gray-200 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/About"
              className="w-full text-center text-white font-bold hover:text-gray-200 transition-colors duration-200"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
