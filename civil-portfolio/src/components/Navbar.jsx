import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="text-2xl font-bold text-engineer-blue tracking-tighter">
            STRUCT<span className="text-engineer-gold">URE.</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-600 hover:text-engineer-blue font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-engineer-blue font-medium transition-colors">About</a>
            <a href="#works" className="text-gray-600 hover:text-engineer-blue font-medium transition-colors">Works</a>
            <a href="#clients" className="text-gray-600 hover:text-engineer-blue font-medium transition-colors">Clients</a>
            <a href="#contact" className="px-5 py-2 bg-engineer-blue text-white rounded-md hover:bg-blue-800 transition-colors font-medium">Contact Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;