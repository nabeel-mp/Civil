import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-engineer-gold font-semibold tracking-wider uppercase mb-3">Lead Civil Engineer</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Building The <br/> <span className="text-engineer-blue">Future</span>, Today.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Specializing in sustainable infrastructure, commercial development, and structural integrity. Turning blueprints into reality with precision and excellence.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#works" className="px-8 py-3 bg-engineer-blue text-white font-medium rounded-md shadow-lg hover:bg-blue-800 transition-all hover:-translate-y-1">View Projects</a>
            <a href="#contact" className="px-8 py-3 bg-white text-engineer-blue border border-engineer-blue font-medium rounded-md hover:bg-gray-50 transition-all">Get in Touch</a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-white shadow-2xl overflow-hidden">
            {/* Replace /profile.jpg with your actual image in the public folder */}
            <img src="/profile.jpg" alt="Civil Engineer Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;