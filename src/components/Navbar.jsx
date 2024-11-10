
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FiMenu, FiX } from 'react-icons/fi';

// const Navbar = () => {
//   return (
//     <nav className="bg-sky-900 p-4 shadow-md">
//       <div className="container mx-auto flex justify-between md: items-center">
//         {/* Logo and Title */}
//         <div className="flex items-center">
//           <img
//             src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
//             alt="Travel Logo"
//             className="h-12 w-12 rounded-full mr-4"
//           />
//           <Link to="/" className="text-white font-extrabold text-4xl tracking-wide hover:text-gray-200 transition-colors duration-200">
//             Travel World
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex items-center space-x-6 font-50px">
//           <li>
//             <Link
//               to="/"
//               className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/About"
//               className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/Contact"
//               className="text-black font-bold hover:text-blue-600 transition-colors duration-200"
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//         </div>
//     </nav>
//   );
// };

// export default Navbar;


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
          <Link to="/" className="text-white font-extrabold text-4xl tracking-wide hover:text-gray-200 transition-colors duration-200">
            Travel World
          </Link>
        </div>
        {/* <div className="text-white text-2xl font-bold">
          Travel World
        </div> */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row items-center`}>
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
      </div>
    </nav>
  );
};

export default Navbar;
