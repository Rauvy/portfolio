import React from 'react';
import logo from '../assets/test.jpeg';
import Navbar from './Navbar'; // Import the Navbar component

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-zinc-900/80 backdrop-blur-lg">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 py-4 flex items-start justify-between">

        {/* Left Side: Logo & Navbar (Stacked in a Column) */}
        <div className="flex flex-col items-start">
          {/* Logo - Left-Aligned */}
          <h1 className="mb-4">
            <a href="/" className="block">
              <img src={logo} alt="Rehina Yakubiv" width={80} height={40} />
            </a>
          </h1>

          {/* Navbar - Placed in a Column Below Logo */}
          <Navbar />
        </div>

        {/* Right Side: Hire Me Button */}
        <a href="#contact" className="bg-white text-black px-5 py-2 rounded-lg text-lg hover:bg-gray-200 transition">
          Hire Me
        </a>

      </div>
    </header>
  );
}

export default Header;
