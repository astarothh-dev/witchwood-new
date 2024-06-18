"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

return (
  <div className="relative bg-white z-50"> {/* Make the entire navbar container relative */}
    <nav className="sticky top-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-fit p-4">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img src="logo-icon.png" alt="Logo" className="h-14" />
          </div>
          {/* Links for larger screens, pushed to the right */}
          <div className="hidden md:flex ml-auto space-x-4 font-extrabold">
            <a href="#about" className="text-gray-800 hover:text-gray-600 text-xl tracking-tighter">About</a>
            <a href="#projects" className="text-gray-800 hover:text-gray-600 text-xl tracking-tighter">Projects</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 text-xl tracking-tighter">Contact</a>
          </div>
          {/* Toggle Button for Mobile */}
          <button
            className="text-3xl text-gray-800 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
    {/* Dropdown Menu for smaller screens */}
    {isOpen && (
      <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
        <a href="#about" className="block text-gray-800 hover:bg-gray-100 px-4 py-2">About</a>
        <a href="#projects" className="block text-gray-800 hover:bg-gray-100 px-4 py-2">Projects</a>
        <a href="#" className="block text-gray-800 hover:bg-gray-100 px-4 py-2">Contact</a>
      </div>
    )}
  </div>
);
};

export default Navbar;