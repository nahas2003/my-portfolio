import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Nahas.dev</h1>
        <ul className="flex space-x-6 text-sm sm:text-base text-gray-300">
          <li>
            <a href="#about" className="hover:text-white transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white transition">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
